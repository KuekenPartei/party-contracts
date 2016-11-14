package de.kueken.ethereum.party.party;

import static org.junit.Assert.fail;

import java.io.File;
import java.util.concurrent.CompletableFuture;

import org.adridadou.ethereum.EthereumFacade;
import org.adridadou.ethereum.provider.EthereumFacadeProvider;
import org.adridadou.ethereum.provider.MainEthereumFacadeProvider;
import org.adridadou.ethereum.provider.MordenEthereumFacadeProvider;
import org.adridadou.ethereum.provider.RpcEthereumFacadeProvider;
import org.adridadou.ethereum.provider.StandaloneEthereumFacadeProvider;
import org.adridadou.ethereum.provider.TestnetEthereumFacadeProvider;
import org.adridadou.ethereum.values.EthAccount;
import org.adridadou.ethereum.values.EthAddress;
import org.adridadou.ethereum.values.SoliditySource;
import org.ethereum.crypto.ECKey;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

import de.kueken.ethereum.party.basics.ManageableTest;

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
		ECKey key = new ECKey();
		sender = new EthAccount(key);
		String property = System.getProperty("EthereumFacadeProvider");
		EthereumFacadeProvider efp = new StandaloneEthereumFacadeProvider();
		if(property!=null){
			if (property.equalsIgnoreCase("main")) {
				efp = new MainEthereumFacadeProvider();
			}else if (property.equalsIgnoreCase("test")) {
				efp = new TestnetEthereumFacadeProvider();
			}else if (property.equalsIgnoreCase("morden")) {
				efp = new MordenEthereumFacadeProvider();
			}else if (property.equalsIgnoreCase("rcp")) {
				RpcEthereumFacadeProvider rcp = new RpcEthereumFacadeProvider();
				String url = System.getProperty("rcp-url");
				ethereum = rcp.create(url);
				return;//as this currently breaks the hierarchy
			}
		}
		
		ethereum = efp.create();//new EthereumFacade(bcProxy);
	}

	/**
	 * Read the contract from the file and deploys the contract code.
	 * @throws Exception
	 */
	@Before
	public void prepareTest() throws Exception {
		//Start of user code prepareTest

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
		//TODO: implement this
		fail("not implemented");
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
		//TODO: implement this
		fail("not implemented");
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
		
		fixture.initalizeOrgan();
		
		
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
		//TODO: implement this
		fail("not implemented");
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
		//TODO: implement this
		fail("not implemented");
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
		//TODO: implement this
		fail("not implemented");
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
	//End of user code
}
