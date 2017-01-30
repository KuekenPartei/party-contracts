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

// Start of user code ManageableTest.customImports

// End of user code


/**
 * Test for the Manageable contract.
 *
 */
public class ManageableTest extends AbstractContractTest{

	private Manageable fixture;
	// Start of user code ManageableTest.attributes
	private String senderAddressS = "5db10750e8caff27f906b41c71b3471057dd2004";
	// End of user code

	@Override
	protected String getContractName() {
		return "Manageable";
	}

	/**
	 * Read the contract from the file and deploys the contract code.
	 * @throws Exception
	 */
	@Before
	public void prepareTest() throws Exception {
		//Start of user code prepareTest
		initTest();
//        File contractSrc = new File(this.getClass().getResource("/mix/basics.sol").toURI());
//        contractSource = SoliditySource.from(contractSrc);
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
		CompiledContract compiledContract = ethereum.compile(contractSource, getContractName());
		CompletableFuture<EthAddress> address = ethereum.publishContract(compiledContract, sender);
        fixtureAddress = address.get();
		setFixture(ethereum.createContractProxy(compiledContract, fixtureAddress, sender, Manageable.class));
		//End of user code
	}

	protected void setFixture(Manageable f) {
		this.fixture = f;
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
		
		EthAddress ethAddress = new EthAccount(ECKey.fromPrivate(BigInteger.valueOf(100001L))).getAddress();
		fixture.addManager(ethAddress.toString()).get();
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
		assertEquals(1, fixture.mangerCount().intValue());
		EthAddress ethAddress = new EthAccount(ECKey.fromPrivate(BigInteger.valueOf(100001L))).getAddress();
		fixture.addManager(ethAddress.withLeading0x()).get();
		assertEquals(2, fixture.mangerCount().intValue());
		
		assertTrue(fixture.isManager(ethAddress.withLeading0x()));
		
		fixture.removeManager(ethAddress.withLeading0x()).get();
		assertEquals(1, fixture.mangerCount().intValue());
		assertFalse(fixture.isManager(ethAddress.withLeading0x()));
		
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
		fixture.addManager(ethAddress.toString()).get();
		
		assertTrue(fixture.isManager(ethAddress.toString()));
		//End of user code
	}
	//Start of user code customTests    
	
	protected String info(Manageable memberRegistry) {
		return "  manager:"
				+ memberRegistry.mangerCount() + " "
				+ memberRegistry.isManager(senderAddressS);
	}

	//End of user code
}
