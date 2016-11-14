package de.kueken.ethereum.party.basics;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

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

/**
 * Test for the Manageable contract.
 *
 */
public class ManageableTest{
	private static EthereumFacade ethereum;
	private static EthAccount sender;

	private Manageable fixture;
	private EthAddress fixtureAddress;
	private SoliditySource contractSource;
	// Start of user code ManageableTest.attributes
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

        File contractSrc = new File(this.getClass().getResource("/mix/basics.sol").toURI());
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
		//TODO: set the constructor args

        CompletableFuture<EthAddress> address = ethereum.publishContract(contractSource, "Manageable", sender
				);
        fixtureAddress = address.get();
        setFixture(ethereum
                .createContractProxy(contractSource, "Manageable", address.get(), sender, Manageable.class));
		//End of user code
	}

	protected void setFixture(Manageable f) {
		this.fixture = f;
	}


	/**
	 * Test the constructor for the Manageable contract.
	 * @throws Exception
	 */
	@Test
	public void testConstructor() throws Exception {
		//Start of user code testConstructor
		if(contractSource==null)
			return;
        CompletableFuture<EthAddress> address = ethereum.publishContract(contractSource, "Manageable", sender
				);
        fixture = ethereum
                .createContractProxy(contractSource, "Manageable", address.get(), sender, Manageable.class);

		assertEquals(1, fixture.mangerCount().intValue());
		//assertTrue(fixture.isManager( EthAddress.of(sender.getAddress()).toString()));
		//End of user code
	}


	/**
	 * Test method for  addManager(String _newManagerAddress).
	 * see {@link Manageable#addManager( String)}
	 * @throws Exception
	 */
	@Test
	public void testAddManager_address() throws Exception {
		//Start of user code testAddManager_address
		assertEquals(1,fixture.mangerCount().intValue());
		
		EthAddress ethAddress = EthAddress.of("000000000000000001");
		fixture.addManager(ethAddress.toString());
		assertEquals(2,fixture.mangerCount().intValue());
		
		
		//End of user code
	}
	/**
	 * Test method for  removeManager(String _managerAddress).
	 * see {@link Manageable#removeManager( String)}
	 * @throws Exception
	 */
	@Test
	public void testRemoveManager_address() throws Exception {
		//Start of user code testRemoveManager_address
		EthAddress ethAddress = EthAddress.of("000000000000000001");
		fixture.addManager(ethAddress.toString());
		
		assertTrue(fixture.isManager(ethAddress.toString()));
		
		fixture.removeManager(ethAddress.toString());
		assertEquals(1, fixture.mangerCount().intValue());
		assertFalse(fixture.isManager(ethAddress.toString()));
		
		//End of user code
	}
	/**
	 * Test method for  isManager(String _managerAddress).
	 * see {@link Manageable#isManager( String)}
	 * @throws Exception
	 */
	@Test
	public void testIsManager_address() throws Exception {
		//Start of user code testIsManager_address
		EthAddress ethAddress = EthAddress.of("000000000000000001");
		fixture.addManager(ethAddress.toString());
		
		assertTrue(fixture.isManager(ethAddress.toString()));
		//End of user code
	}
	//Start of user code customTests    
	//End of user code
}
