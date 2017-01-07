package de.kueken.ethereum.party.basics;

import static org.junit.Assert.*;


import de.kueken.ethereum.party.basics.Manageable.*;


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

// Start of user code ManageableTest.customImports

// End of user code


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
	private String senderAddressS = "5db10750e8caff27f906b41c71b3471057dd2004";
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

        File contractSrc = new File(this.getClass().getResource("/mix/basics.sol").toURI());
        contractSource = SoliditySource.from(contractSrc);
//        File contractSrc = new File(this.getClass().getResource("/contracts.json").toURI());
//        contractSource = SoliditySource.fromRawJson(contractSrc);
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
		assertTrue(fixture.isManager(senderAddressS));
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
		createFixture();
		assertEquals(1,fixture.mangerCount().intValue());
		
		EthAddress ethAddress = new EthAccount(ECKey.fromPrivate(BigInteger.valueOf(100001L))).getAddress();
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
//		createFixture();
		EthAddress ethAddress = new EthAccount(ECKey.fromPrivate(BigInteger.valueOf(100001L))).getAddress();
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
//		createFixture();
		EthAddress ethAddress = new EthAccount(ECKey.fromPrivate(BigInteger.valueOf(100001L))).getAddress();
		fixture.addManager(ethAddress.toString());
		
		assertTrue(fixture.isManager(ethAddress.toString()));
		//End of user code
	}
	//Start of user code customTests    
	//End of user code
}
