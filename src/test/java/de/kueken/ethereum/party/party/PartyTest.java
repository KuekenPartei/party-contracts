package de.kueken.ethereum.party.party;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import java.io.File;
import java.io.IOException;
import java.math.BigInteger;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

import org.adridadou.ethereum.EthereumFacade;
import org.adridadou.ethereum.keystore.FileSecureKey;
import org.adridadou.ethereum.keystore.SecureKey;
import org.adridadou.ethereum.values.EthAccount;
import org.adridadou.ethereum.values.EthAddress;
import org.adridadou.ethereum.values.SoliditySource;
import org.ethereum.crypto.ECKey;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

import de.kueken.ethereum.party.EthereumInstance;
import de.kueken.ethereum.party.basics.ManageableTest;
import de.kueken.ethereum.party.deployer.MembersDeployer;
import de.kueken.ethereum.party.deployer.PartyDeployer;
import de.kueken.ethereum.party.deployer.PublishingDeployer;
import de.kueken.ethereum.party.publishing.BlogRegistry;

/**
 * Test for the Party contract.
 *
 */
public class PartyTest extends ManageableTest{
	private static EthereumFacade ethereum;
	private static EthAccount sender ;

	private Party fixture;
	private EthAddress fixtureAddress;
	private SoliditySource contractSource;
	// Start of user code PartyTest.attributes
	private String senderAddressS = "5db10750e8caff27f906b41c71b3471057dd2004";
	private EthAddress senderAddress = EthAddress.of(senderAddressS);
	private PartyDeployer partyDeployer;
	private MembersDeployer membersDeployer;
	private PublishingDeployer publishingDeployer;
	
	// End of user code

	/**
	 * Setup up the blockchain. Add the 'EthereumFacadeProvider' property to use 
	 * another block chain implemenation or network.
	 */
	@BeforeClass
	public static void setup() {
		ethereum = EthereumInstance.getInstance().getEthereum();
//		sender = new EthAccount(key)
	}

	/**
	 * Read the contract from the file and deploys the contract code.
	 * @throws Exception
	 */
	@Before
	public void prepareTest() throws Exception {
		//Start of user code prepareTest
		String property = System.getProperty("EthereumFacadeProvider");
		if(property==null) property="";
		if (property.equalsIgnoreCase("rpc")|| property.equalsIgnoreCase("ropsten") || property.equalsIgnoreCase("InfuraRopsten")) {
				SecureKey key2 = new FileSecureKey(new File("/home/urs/.ethereum/testnet/keystore/UTC--2015-12-15T13-55-38.006995319Z--ba7b29b63c00dff8614f8d8a6bf34e94e853b2d3"));
				EthAccount decode = key2.decode("n");
				sender = decode;
				String senderAddressS = sender.getAddress().withLeading0x();
				System.out.println(senderAddressS+"->"+ethereum.getBalance(decode));
				

			}else if (property.equalsIgnoreCase("private")){
				sender = new EthAccount(ECKey.fromPrivate(BigInteger.valueOf(100000L)));
			}
//        File contractSrc = new File(this.getClass().getResource("/mix/party.sol").toURI());
        File contractSrc = new File(this.getClass().getResource("/mix/combine.json").toURI());
        contractSource = SoliditySource.fromRawJson(contractSrc);
        
		partyDeployer = new PartyDeployer(ethereum,"/mix/combine.json",false);
		membersDeployer = new MembersDeployer(ethereum, "/mix/combine.json",false);
		publishingDeployer = new PublishingDeployer(ethereum,"/mix/combine.json",false);

        
        createFixture();
		//End of user code
	}


	/**
	 * Create a new fixture by deploying the contract source.
	 * @throws Exception
	 */
	protected void createFixture() throws Exception {
		//Start of user code createFixture
		//TODO: set the constructor args
		ethereum = EthereumInstance.getInstance().getEthereum();
        CompletableFuture<EthAddress> address = ethereum.publishContract(contractSource, "Party", sender
				);
        fixtureAddress = address.get();
        fixture = ethereum.createContractProxy(contractSource, "Party", address.get(), sender, Party.class);
        
//		PartyDeployer partyDeployer = new PartyDeployer(ethereum,"/mix/combine.json",false);
//		MembersDeployer membersDeployer = new MembersDeployer(ethereum, "/mix/combine.json",false);
//		PublishingDeployer publishingDeployer = new PublishingDeployer(ethereum,"/mix/combine.json",false);
//		
//		CompletableFuture<EthAddress> deployBlogRegistry = publishingDeployer.deployBlogRegistry(sender);
//		BlogRegistry blogRegistry = publishingDeployer.createBlogRegistry(sender, deployBlogRegistry.get());
//		String blogRegistryAddress = deployBlogRegistry.get().withLeading0x();

        		
        setFixture(fixture);
		//End of user code
	}

	protected void setFixture(Party f) {
		this.fixture = f;
		super.setFixture(f);
	}

	/**
	 * Test the constructor for the Manageable contract.
	 * @throws Exception
	 */
	@Test
	public void testConstructor() throws Exception {
		//Start of user code testConstructor
		assertEquals(1, fixture.mangerCount().intValue());
		assertTrue(fixture.isManager(senderAddressS));
		//End of user code
	}

	/**
	 * Test the constructor for the Party contract.
	 * @throws Exception
	 */
	@Test
	public void testConstructor_string() throws Exception {
		//Start of user code testConstructor_string
		//TODO: Set the constructor args
		String _name = "_name";

        CompletableFuture<EthAddress> address = ethereum.publishContract(contractSource, "Party", sender,_name);
        fixture = ethereum
                .createContractProxy(contractSource, "Party", address.get(), sender, Party.class);

//        fixture.isManager(senderAddressS);
       
		assertEquals(1,fixture.mangerCount().intValue());
		assertTrue(fixture.isManager(senderAddressS));
		assertEquals(_name, fixture.name());
//		assertEquals(_name,fixture.name());
		//End of user code
	}


	/**
	 * Test method for  createOrgan(String organName).
	 * see {@link Party#createOrgan( String)}
	 * @throws Exception
	 */
	@Test
	public void testCreateOrgan_string() throws Exception {
		//Start of user code testCreateOrgan_string
		assertEquals(0, fixture.organCount().intValue());
		initParty();
		fixture.createOrgan("organ name");
		assertEquals(1, fixture.organCount().intValue());
		//End of user code
	}
	/**
	 * Test method for  addOrgan(String _organ).
	 * see {@link Party#addOrgan( String)}
	 * @throws Exception
	 */
	@Test
	public void testAddOrgan_address() throws Exception {
		//Start of user code testAddOrgan_address
		assertEquals(0, fixture.organCount().intValue());
		
//		
//		PartyDeployer partyDeployer = new PartyDeployer(ethereum,"/mix/combine.json",false);
//		MembersDeployer membersDeployer = new MembersDeployer(ethereum, "/mix/combine.json",false);
//		PublishingDeployer publishingDeployer = new PublishingDeployer(ethereum,"/mix/combine.json",false);
		
		initParty();
		
		CompletableFuture<EthAddress> deployOrgan = partyDeployer.deployOrgan(sender);
		Organ organ = partyDeployer.createOrgan(sender,deployOrgan.get());
		String organAddress = deployOrgan.get().withLeading0x();
		
		fixture.addOrgan(organAddress);
		assertEquals(1, fixture.organCount().intValue());
	
		
		
		//End of user code
	}

	/**
	 * Test method for  addSubDivision(String _subDivision).
	 * see {@link Party#addSubDivision( String)}
	 * @throws Exception
	 */
	@Test
	public void testAddSubDivision_address() throws Exception {
		//Start of user code testAddSubDivision_address
		assertEquals(0, fixture.subDivisionCount().intValue());
		
		CompletableFuture<EthAddress> deployParty = partyDeployer.deployParty(sender, "subDivision");
		Party subDivision = partyDeployer.createParty(sender, deployParty.get().withLeading0x());
		subDivision.addManager(fixtureAddress.withLeading0x());
		
		
		fixture.addSubDivision(deployParty.get().withLeading0x());
		assertEquals(1, fixture.subDivisionCount().intValue());

		//End of user code
	}
	/**
	 * Test method for  removeSubDivision(Integer _divisionId).
	 * see {@link Party#removeSubDivision( Integer)}
	 * @throws Exception
	 */
	@Test
	public void testRemoveSubDivision_uint() throws Exception {
		//Start of user code testRemoveSubDivision_uint
		assertEquals(0, fixture.subDivisionCount().intValue());
		
		CompletableFuture<EthAddress> deployParty = partyDeployer.deployParty(sender, "subDivision");
		Party subDivision = partyDeployer.createParty(sender, deployParty.get().withLeading0x());
		subDivision.addManager(fixtureAddress.withLeading0x());
		
		
		fixture.addSubDivision(deployParty.get().withLeading0x());
		assertEquals(1, fixture.subDivisionCount().intValue());

		
		fixture.removeSubDivision(0);
		assertEquals(1, fixture.subDivisionCount().intValue());
		//End of user code
	}
	//Start of user code customTests    
	
	
	/**
	 * @throws IOException
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	private void initParty() throws IOException, InterruptedException, ExecutionException {
		CompletableFuture<EthAddress> deployBlogRegistry = publishingDeployer.deployBlogRegistry(sender);
		BlogRegistry blogRegistry = publishingDeployer.createBlogRegistry(sender, deployBlogRegistry.get());
		String blogRegistryAddress = deployBlogRegistry.get().withLeading0x();
		
		fixture.setBlogregistry(blogRegistryAddress);
	}

	//End of user code
}
