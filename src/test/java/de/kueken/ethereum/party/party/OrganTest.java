package de.kueken.ethereum.party.party;

import static org.junit.Assert.*;

import de.kueken.ethereum.party.basics.*;
import de.kueken.ethereum.party.members.*;
import de.kueken.ethereum.party.publishing.*;
import de.kueken.ethereum.party.voting.*;

import de.kueken.ethereum.party.party.Organ.*;


import java.io.File;
import java.util.*;
import java.util.concurrent.*;
import java.util.stream.*;
import java.math.*;

import org.adridadou.ethereum.EthereumFacade;
import org.adridadou.ethereum.keystore.*;
import org.adridadou.ethereum.values.CompiledContract;
import org.adridadou.ethereum.values.EthAccount;
import org.adridadou.ethereum.values.EthAddress;
import org.adridadou.ethereum.values.SoliditySource;
import org.adridadou.ethereum.values.config.ChainId;
import org.ethereum.crypto.ECKey;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

import de.kueken.ethereum.party.AbstractContractTest;
import de.kueken.ethereum.party.EthereumInstance;

// Start of user code OrganTest.customImports
import de.kueken.ethereum.party.EthereumInstance.DeployDuo;
import de.kueken.ethereum.party.deployer.MembersDeployer;
import de.kueken.ethereum.party.deployer.PartyDeployer;
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
	// End of user code

	@Override
	protected String getContractName() {
		return "Organ";
	}

	/**
	 * Read the contract from the file and deploys the contract code.
	 * @throws Exception
	 */
	@Before
	public void prepareTest() throws Exception {
		//Start of user code prepareTest
		initTest();
		partyDeployer = new PartyDeployer(ethereum,"/mix/combine.json",true);
		publishingDeployer = new PublishingDeployer(ethereum,"/mix/combine.json",true);

        File contractSrc = new File(this.getClass().getResource("/mix/party.sol").toURI());
        contractSource = SoliditySource.from(contractSrc);
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
		fixture.initalizeOrgan();
		
		String message="";
		String hash="";
		String er="";
		fixture.publishMessage(message, hash, er);
		//End of user code
	}
	/**
	 * Test method for  changeMember(Integer _id,String _address).
	 * see {@link Organ#changeMember( Integer, String)}
	 * @throws Exception
	 */
	@Test
	public void testChangeMember_uint_address() throws Exception {
		//Start of user code testChangeMember_uint_address
		//TODO: implement this
		fail("not implemented");
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

		fixture.createFunction(ethAddress.withLeading0x(), "hash");
		assertEquals(1, fixture.lastFunctionId().intValue());
		
		String organFunctionAddress = fixture.getOrganFunction(0);
		
		
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
		assertEquals("0x", fixture.getOrganBlog());
		initOrgan();
		fixture.initalizeOrgan();
		assertTrue(fixture.isActive());
		assertNotEquals("0x", fixture.getOrganBlog());
		
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
		initOrgan();
		fixture.initalizeOrgan();
		fixture.createFunction("Function 0", "hash");

		assertEquals(1, fixture.lastFunctionId().intValue());
		
		
		String message= "";
		String hash="";
		String er="";
		fixture.publishFunctionMessage(0, message, hash, er);
		
		
		//End of user code
	}
	/**
	 * Test method for  createBallot(String name,Byte[][] proposalNames).
	 * see {@link Organ#createBallot( String, Byte[][])}
	 * @throws Exception
	 */
	@Test
	public void testCreateBallot_string_bytes32() throws Exception {
		//Start of user code testCreateBallot_string_bytes32
		//TODO: implement this
		fail("not implemented");
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
		//TODO: implement this
		fail("not implemented");
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
		assertEquals("0x", fixture.getOrganBlog());
		initOrgan();
		fixture.initalizeOrgan();
		assertNotEquals("0x", fixture.getOrganBlog());
		
		//End of user code
	}
	/**
	 * Test method for  addOrganFunction(String _of,String _name).
	 * see {@link Organ#addOrganFunction( String, String)}
	 * @throws Exception
	 */
	@Test
	public void testAddOrganFunction_address_string() throws Exception {
		//Start of user code testAddOrganFunction_address_string
		initOrgan();
		assertEquals(0, fixture.lastFunctionId().intValue());
		String organAddress="";
		EthAddress ethAddress = new EthAccount(ECKey.fromPrivate(BigInteger.valueOf(100001L))).getAddress();

		DeployDuo<OrganFunction> organFunction = partyDeployer.createOrganFunction(sender, "ss", "cc");
		
		organFunction.contractInstance.addManager(fixtureAddress.withLeading0x());
		
		fixture.addOrganFunction(organFunction.contractAddress.withLeading0x(), "name");
		assertEquals(1, fixture.lastFunctionId().intValue());
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
		//TODO: implement this
		fail("not implemented");
		//End of user code
	}
	//Start of user code customTests    
	/**
	 * @throws IOException
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	private void initOrgan() throws IOException, InterruptedException, ExecutionException {
		DeployDuo<BlogRegistry> registry = publishingDeployer.createBlogRegistry(sender);
		
		fixture.setBlogRegistry(registry.contractAddress.withLeading0x());
		registry.contractInstance.addManager(fixtureAddress.withLeading0x());
	}

	//End of user code
}
