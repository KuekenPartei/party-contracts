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
import org.adridadou.ethereum.provider.MainEthereumFacadeProvider;
import org.adridadou.ethereum.provider.RopstenEthereumFacadeProvider;
import org.adridadou.ethereum.provider.GenericRpcEthereumFacadeProvider;
import org.adridadou.ethereum.provider.StandaloneEthereumFacadeProvider;
import org.adridadou.ethereum.provider.TestnetEthereumFacadeProvider;
import org.adridadou.ethereum.values.EthAccount;
import org.adridadou.ethereum.values.EthAddress;
import org.adridadou.ethereum.values.SoliditySource;
import org.adridadou.ethereum.values.config.ChainId;
import org.ethereum.crypto.ECKey;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

import de.kueken.ethereum.party.EthereumInstance;

// Start of user code OrganTest.customImports
import de.kueken.ethereum.party.deployer.PublishingDeployer;
import java.io.IOException;
// End of user code


/**
 * Test for the Organ contract.
 *
 */
public class OrganTest extends ManageableTest{
	private static EthereumFacade ethereum;
	private static EthAccount sender;

	private Organ fixture;
	private EthAddress fixtureAddress;
	private SoliditySource contractSource;
	// Start of user code OrganTest.attributes
	//TODO: implement
	// End of user code

	/**
	 * Setup up the blockchain. Add the 'EthereumFacadeProvider' property to use 
	 * another block chain implemenation or network.
	 */
	@BeforeClass
	public static void setup() {
		ethereum = EthereumInstance.getInstance().getEthereum();

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
        File contractSrc = new File(this.getClass().getResource("/contracts.json").toURI());
        contractSource = SoliditySource.fromRawJson(contractSrc);
        
        createFixture();
		//End of user code
	}


	/**
	 * Create a new fixture by deploying the contract source.
	 * @throws Exception
	 */
	protected void createFixture() throws Exception {
		//Start of user code createFixture
		
		ethereum = EthereumInstance.getInstance().getEthereum();
        CompletableFuture<EthAddress> address = ethereum.publishContract(contractSource, "Organ", sender);
        fixtureAddress = address.get();
        setFixture(ethereum
                .createContractProxy(contractSource, "Organ", address.get(), sender, Organ.class));
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
		initOrgan();
		fixture.initalizeOrgan();
		assertTrue(fixture.isActive());
		
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
		
		String message= "";
		String hash="";
		String er="";
		fixture.publishFunctionMessage(1, message, hash, er);
		
		
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
		assertNull(fixture.getOrganBlog());
		initOrgan();		
		assertNotNull(fixture.getOrganBlog());
		
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
		fixture.addOrganFunction(organAddress, "name");
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
		PublishingDeployer publishingDeployer = new PublishingDeployer(ethereum,"/mix/combine.json",false);

		CompletableFuture<EthAddress> deployBlogRegistry = publishingDeployer.deployBlogRegistry(sender);
		BlogRegistry blogRegistry = publishingDeployer.createBlogRegistry(sender, deployBlogRegistry.get());
		String blogRegistryAddress = deployBlogRegistry.get().withLeading0x();
		fixture.setBlogRegistry(deployBlogRegistry.get().withLeading0x());
	}

	//End of user code
}
