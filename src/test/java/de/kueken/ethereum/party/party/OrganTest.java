package de.kueken.ethereum.party.party;

// Start of user code OrganTest.customImports
import static org.junit.Assert.*;

import java.io.File;
import java.math.BigInteger;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

import org.adridadou.ethereum.values.CompiledContract;
import org.adridadou.ethereum.values.EthAccount;
import org.adridadou.ethereum.values.EthAddress;
import org.adridadou.ethereum.values.SoliditySource;
import org.ethereum.crypto.ECKey;
import org.junit.Before;
import org.junit.Test;

import de.kueken.ethereum.party.AbstractContractTest;
import de.kueken.ethereum.party.EthereumInstance.DeployDuo;
import de.kueken.ethereum.party.basics.ManageableTest;
import de.kueken.ethereum.party.deployer.MembersDeployer;
import de.kueken.ethereum.party.deployer.VotingDeployer;
import de.kueken.ethereum.party.members.MemberRegistry;
import de.kueken.ethereum.party.publishing.BlogRegistry;
import de.kueken.ethereum.party.publishing.ShortBlog;
import de.kueken.ethereum.party.publishing.ShortBlogMessage;
import de.kueken.ethereum.party.voting.BallotFactory;
import de.kueken.ethereum.party.voting.BasicBallot;
import de.kueken.ethereum.party.voting.BasicBallot.BallotState;
import de.kueken.ethereum.party.EthereumInstance.DeployDuo;
import de.kueken.ethereum.party.deployer.MembersDeployer;
import de.kueken.ethereum.party.deployer.PartyDeployer;
import de.kueken.ethereum.party.deployer.PartyDeployers;
import de.kueken.ethereum.party.deployer.PublishingDeployer;
import org.spongycastle.util.encoders.Hex;
import java.io.IOException;
// End of user code


/**
 * Test for the Organ contract.
 *
 */
public class OrganTest extends ManageableTest{

 
	private Organ fixture;
	// Start of user code OrganTest.attributes
	protected PartyDeployer partyDeployer;
	protected PublishingDeployer publishingDeployer;
	protected MembersDeployer membersDeployer;
	protected VotingDeployer votingDeployer;
	// End of user code

	@Override
	protected String getContractName() {
		return "Organ";
	}

	@Override
	protected String getQuallifiedContractName() {
		return "party.sol:Organ";
	}

	/**
	 * Read the contract from the file and deploys the contract code.
	 * @throws Exception
	 */
	@Before
	public void prepareTest() throws Exception {
		//Start of user code prepareTest
		initTest();
		partyDeployer = PartyDeployers.PARTYDEPLOYER;// new PartyDeployer(ethereum,"/mix/combine.json",true);
		publishingDeployer = PartyDeployers.PUBLISHINGDEPLOYER; //new PublishingDeployer(ethereum,"/mix/combine.json",true);
		membersDeployer = PartyDeployers.MEMBERSDEPLOYER;// new MembersDeployer(ethereum,"/mix/combine.json",true);
		votingDeployer = PartyDeployers.VOTINGDEPLOYER;//new VotingDeployer(ethereum,"/mix/combine.json",true);
		createFixture();
		//End of user code
	}


	/**
	 * Create a new fixture by deploying the contract source.
	 * @throws Exception
	 */
	protected void createFixture() throws Exception {
		//Start of user code createFixture
//		CompiledContract compiledContract = ethereum.compile(contractSource, getContractName());
		CompiledContract compiledContract = getCompiledContract("/mix/combine.json");
		CompletableFuture<EthAddress> address = ethereum.publishContract(compiledContract, sender);
        fixtureAddress = address.get();
		setFixture(ethereum.createContractProxy(compiledContract, fixtureAddress, sender, Organ.class));
		//End of user code
	}

	protected void setFixture(Organ f) {
		this.fixture = f;
		super.setFixture(f);
	}


	/**
	 * Test method for  publishMessage(String message,String hash,String er).
	 * see {@link Organ#publishMessage( String, String, String)}
	 * @throws Exception
	 */
	@Test
	public void testPublishMessage_string_string_string() throws Exception {
		//Start of user code testPublishMessage_string_string_string
		initOrgan();
		fixture.initalizeOrgan().get();
		EthAddress address = fixture.getOrganBlog();
		ShortBlog shortBlog = publishingDeployer.createShortBlogProxy(sender, address);

		String message="message";
		String hash="hash";
		String er="er";
		fixture.publishMessage(message, hash, er).get();
		
		assertEquals(1, shortBlog.messageCount().intValue());
		ShortBlogMessage messages = shortBlog.messages(0);
		assertEquals(message, messages.getMessage());
		assertEquals(hash, messages.getHashValue());
		assertEquals(er, messages.getExternalResource());
		assertEquals(0, messages.getId().intValue());
		
		
		//End of user code
	}
	/**
	 * Test method for  changeMember(Integer _id,org.adridadou.ethereum.values.EthAddress _address).
	 * see {@link Organ#changeMember( Integer, org.adridadou.ethereum.values.EthAddress)}
	 * @throws Exception
	 */
	@Test
	public void testChangeMember_uint_address() throws Exception {
		//Start of user code testChangeMember_uint_address
		assertEquals(0, fixture.lastFunctionId().intValue());
		initOrgan();
		fixture.initalizeOrgan().get();
		EthAddress address = fixture.getOrganBlog();
		ShortBlog shortBlog = publishingDeployer.createShortBlogProxy(sender, address);

		
		String functionName = "Test function";
		fixture.createFunction(functionName, "hash").get();
		assertEquals(1, fixture.lastFunctionId().intValue());
		
		EthAddress organFunctionAddress = fixture.getOrganFunction(0);
		OrganFunction organFunction = partyDeployer.createOrganFunctionProxy(sender, organFunctionAddress);
		assertEquals(functionName, organFunction.functionName());  
		assertEquals("hash", organFunction.constitutionHash());  
		assertEquals(EthAddress.empty(), organFunction.currentMember());
		
		Integer messageCount = shortBlog.messageCount();
		fixture.changeMember(0, sender.getAddress()).get();
		assertEquals(sender.getAddress(), organFunction.currentMember());
		assertEquals(messageCount+1, shortBlog.messageCount().intValue());
		
		
		EthAddress ethAddress = new EthAccount(ECKey.fromPrivate(BigInteger.valueOf(100001L))).getAddress();
		fixture.changeMember(0, ethAddress).get();
		assertEquals(ethAddress, organFunction.currentMember());
		assertEquals(messageCount+2, shortBlog.messageCount().intValue());
		//End of user code
	}
	/**
	 * Test method for  createFunction(String _functionName,String _constittiutionHash).
	 * see {@link Organ#createFunction( String, String)}
	 * @throws Exception
	 */
	@Test
	public void testCreateFunction_string_string() throws Exception {
		//Start of user code testCreateFunction_string_string
		assertEquals(0, fixture.lastFunctionId().intValue());
		initOrgan();
		
		EthAddress ethAddress = new EthAccount(ECKey.fromPrivate(BigInteger.valueOf(100001L))).getAddress();

		fixture.createFunction(ethAddress.withLeading0x(), "hash").get();
		assertEquals(1, fixture.lastFunctionId().intValue());
		
		EthAddress organFunctionAddress = fixture.getOrganFunction(0);
		
		
		//End of user code
	}
	/**
	 * Test method for  initalizeOrgan().
	 * see {@link Organ#initalizeOrgan()}
	 * @throws Exception
	 */
	@Test
	public void testInitalizeOrgan() throws Exception {
		//Start of user code testInitalizeOrgan
		assertFalse(fixture.isActive());
		EthAddress expected = EthAddress.empty();
		assertEquals(expected, fixture.getOrganBlog());
		initOrgan();
		fixture.initalizeOrgan().get();
		assertTrue(fixture.isActive());
		assertNotEquals(expected, fixture.getOrganBlog());
		
		//End of user code
	}
	/**
	 * Test method for  publishFunctionMessage(Integer id,String message,String hash,String er).
	 * see {@link Organ#publishFunctionMessage( Integer, String, String, String)}
	 * @throws Exception
	 */
	@Test
	public void testPublishFunctionMessage_uint_string_string_string() throws Exception {
		//Start of user code testPublishFunctionMessage_uint_string_string_string
		fail("Do later.");
		initOrgan();
		fixture.initalizeOrgan();
		fixture.createFunction("Function 0", "hash").get();
		assertEquals(1, fixture.lastFunctionId().intValue());
		
		EthAddress address = fixture.getOrganFunction(0);
		OrganFunction organFunction = partyDeployer.createOrganFunctionProxy(sender, address);
		EthAddress publisherAddress = organFunction.publisher();
		ShortBlog shortBlog = publishingDeployer.createShortBlogProxy(sender, publisherAddress);
		assertEquals(0, shortBlog.messageCount().intValue());
		
		String message= "message";
		String hash="hash";
		String er="er";
		fixture.publishFunctionMessage(0, message, hash, er).get();
		assertEquals(1, shortBlog.messageCount().intValue());
		
		ShortBlogMessage messages = shortBlog.messages(0);
		assertEquals(message, messages.getMessage());
		assertEquals(hash, messages.getHashValue());
		assertEquals(er, messages.getExternalResource());
		
		//End of user code
	}
	/**
	 * Test method for  createBallot(Integer ballotType,org.adridadou.ethereum.values.EthAddress _registry,String _name,String _hash).
	 * see {@link Organ#createBallot( Integer, org.adridadou.ethereum.values.EthAddress, String, String)}
	 * @throws Exception
	 */
	@Test
	public void testCreateBallot_uint_address_string_string() throws Exception {
		//Start of user code testCreateBallot_uint_address_string_string
		
		DeployDuo<BallotFactory> ballotFactory = votingDeployer.createBallotFactory(sender);
		
		fixture.setBallotFactory(ballotFactory.contractAddress).get();
		assertEquals(0, fixture.ballotCount().intValue());

		String _name="ballot name";
		String _hash= "hash";
		fixture.createBallot(0, EthAddress.empty(), _name, _hash).get();
		
		assertEquals(1, fixture.ballotCount().intValue());
		EthAddress lastBallot = fixture.getLastBallot();
		BasicBallot basicBallot = votingDeployer.createBasicBallotProxy(sender, lastBallot);
		
	    assertEquals(_name, basicBallot.ballotName());
	    assertEquals(_hash, basicBallot.ballotHash());
		//End of user code
	}
	/**
	 * Test method for  getLastBallot().
	 * see {@link Organ#getLastBallot()}
	 * @throws Exception
	 */
	@Test
	public void testGetLastBallot() throws Exception {
		//Start of user code testGetLastBallot
		assertEquals(EthAddress.empty(), fixture.getLastBallot());
		testCreateBallot_uint_address_string_string();
		EthAddress address = fixture.getLastBallot();
		BasicBallot basicBallot = votingDeployer.createBasicBallotProxy(sender, address);
		
		assertEquals(BasicBallot.BallotState.ballotCreated, basicBallot.ballotState());
		//End of user code
	}
	/**
	 * Test method for  getOrganBlog().
	 * see {@link Organ#getOrganBlog()}
	 * @throws Exception
	 */
	@Test
	public void testGetOrganBlog() throws Exception {
		//Start of user code testGetOrganBlog
		assertEquals(EthAddress.empty(), fixture.getOrganBlog());
		initOrgan();
		fixture.initalizeOrgan().get();
		assertNotEquals(EthAddress.empty(), fixture.getOrganBlog());
		
		//End of user code
	}
	/**
	 * Test method for  addOrganFunction(org.adridadou.ethereum.values.EthAddress _of,String _name).
	 * see {@link Organ#addOrganFunction( org.adridadou.ethereum.values.EthAddress, String)}
	 * @throws Exception
	 */
	@Test
	public void testAddOrganFunction_address_string() throws Exception {
		//Start of user code testAddOrganFunction_address_string
		initOrgan();
		BlogRegistry blogRegistry = publishingDeployer.createBlogRegistryProxy(sender,  fixture.blogRegistry());
		assertEquals(0, fixture.lastFunctionId().intValue());
		assertEquals(0, blogRegistry.blogCount().intValue());
		
		String _name = "name";
		DeployDuo<OrganFunction> organFunction = partyDeployer.createOrganFunction(sender, _name, "hash");
		organFunction.contractInstance.addManager(fixtureAddress).get();
		
		fixture.addOrganFunction(organFunction.contractAddress, _name).get();
		assertEquals(1, fixture.lastFunctionId().intValue());
		EthAddress address = fixture.getOrganFunction(0);
		OrganFunction function = partyDeployer.createOrganFunctionProxy(sender, address);
		assertEquals(_name, function.functionName());
		assertEquals("hash", function.constitutionHash());
		assertEquals(EthAddress.empty(), function.currentMember());
		
		assertEquals(1, blogRegistry.blogCount().intValue());
		EthAddress blog = blogRegistry.blogs(0);
		ShortBlog shortBlog = publishingDeployer.createShortBlogProxy(sender, blog);
		assertEquals(_name, shortBlog.name());
		//End of user code
	}
	/**
	 * Test method for  getOrganFunction(Integer _id).
	 * see {@link Organ#getOrganFunction( Integer)}
	 * @throws Exception
	 */
	@Test
	public void testGetOrganFunction_uint() throws Exception {
		//Start of user code testGetOrganFunction_uint
		assertEquals(0, fixture.lastFunctionId().intValue());
		initOrgan();

		String functionName = "Test function";
		fixture.createFunction(functionName, "hash").get();
		assertEquals(1, fixture.lastFunctionId().intValue());
		
		EthAddress organFunctionAddress = fixture.getOrganFunction(0);
		OrganFunction organFunction = partyDeployer.createOrganFunctionProxy(sender, organFunctionAddress);
		assertEquals(functionName, organFunction.functionName());  
		assertEquals("hash", organFunction.constitutionHash());  
		assertEquals(EthAddress.empty(), organFunction.currentMember());
		
		//End of user code
	}
	//Start of user code customTests    
	
	@Override
	@Test
	public void testConstructor() throws Exception {
		super.testConstructor();
		
		assertEquals(EthAddress.empty(), fixture.blogRegistry());
		assertFalse(fixture.isActive());
		assertEquals(0, fixture.ballotCount().intValue());
		assertEquals(0, fixture.lastFunctionId().intValue());
		assertEquals(0, fixture.ballotCount().intValue());

	}

	
	/**
	 * @throws IOException
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	private void initOrgan() throws IOException, InterruptedException, ExecutionException {
		DeployDuo<BlogRegistry> registry = publishingDeployer.createBlogRegistry(sender);
		
		fixture.setBlogRegistry(registry.contractAddress).get();
		registry.contractInstance.addManager(fixtureAddress).get();
	}

	//End of user code
}
