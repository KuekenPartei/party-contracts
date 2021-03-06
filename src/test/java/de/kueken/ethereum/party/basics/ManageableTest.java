package de.kueken.ethereum.party.basics;

// Start of user code ManageableTest.customImports
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

import java.math.BigInteger;
import java.util.concurrent.CompletableFuture;

import org.adridadou.ethereum.propeller.keystore.AccountProvider;
import org.adridadou.ethereum.propeller.solidity.SolidityContractDetails;
import org.adridadou.ethereum.propeller.values.EthAddress;
import org.junit.Before;
import org.junit.Test;

import de.kueken.ethereum.party.AbstractContractTest;

// End of user code


/**
 * Test for the Manageable contract.
 *
 */
public class ManageableTest extends AbstractContractTest{

 
	private Manageable fixture;
	// Start of user code ManageableTest.attributes
//	private String senderAddressS = "5db10750e8caff27f906b41c71b3471057dd2004";
	// End of user code

	@Override
	protected String getContractName() {
		return "Manageable";
	}

	@Override
	protected String getQuallifiedContractName() {
		return "basics.sol:Manageable";
	}

	/**
	 * Read the contract from the file and deploys the contract code.
	 * @throws Exception
	 */
	@Before
	public void prepareTest() throws Exception {
		//Start of user code prepareTest
		initTest();
		createFixture();
		// End of user code
	}


	/**
	 * Create a new fixture by deploying the contract source.
	 * @throws Exception
	 */
	protected void createFixture() throws Exception {
		//Start of user code createFixture
		SolidityContractDetails compiledContract = getCompiledContract("/mix/combine.json");
		CompletableFuture<EthAddress> address = ethereum.publishContract(compiledContract, sender);
		fixtureAddress = address.get();
		setFixture(ethereum.createContractProxy(compiledContract, fixtureAddress, sender, Manageable.class));
		// End of user code
	}

	protected void setFixture(Manageable f) {
		this.fixture = f;
	}


	/**
	 * Test method for  addManager(org.adridadou.ethereum.propeller.values.EthAddress _newManagerAddress).
	 * see {@link Manageable#addManager( org.adridadou.ethereum.propeller.values.EthAddress)}
	 * @throws Exception
	 */
	@Test
	public void testAddManager_address() throws Exception {
		//Start of user code testAddManager_address

		assertEquals(1, fixture.mangerCount().intValue());

		EthAddress ethAddress = AccountProvider.fromPrivateKey((BigInteger.valueOf(100001L))).getAddress();
		fixture.addManager(ethAddress).get();
		assertEquals(2, fixture.mangerCount().intValue());

		// End of user code
	}
	/**
	 * Test method for  removeManager(org.adridadou.ethereum.propeller.values.EthAddress _managerAddress).
	 * see {@link Manageable#removeManager( org.adridadou.ethereum.propeller.values.EthAddress)}
	 * @throws Exception
	 */
	@Test
	public void testRemoveManager_address() throws Exception {
		//Start of user code testRemoveManager_address
		assertEquals(1, fixture.mangerCount().intValue());
		EthAddress ethAddress = AccountProvider.fromPrivateKey((BigInteger.valueOf(100001L))).getAddress();
		fixture.addManager(ethAddress).get();
		assertEquals(2, fixture.mangerCount().intValue());

		assertTrue(fixture.isManager(ethAddress));

		fixture.removeManager(ethAddress).get();
		assertEquals(1, fixture.mangerCount().intValue());
		assertFalse(fixture.isManager(ethAddress));

		// End of user code
	}
	/**
	 * Test method for  isManager(org.adridadou.ethereum.propeller.values.EthAddress _managerAddress).
	 * see {@link Manageable#isManager( org.adridadou.ethereum.propeller.values.EthAddress)}
	 * @throws Exception
	 */
	@Test
	public void testIsManager_address() throws Exception {
		//Start of user code testIsManager_address
		EthAddress ethAddress = AccountProvider.fromPrivateKey((BigInteger.valueOf(100001L))).getAddress();
		fixture.addManager(ethAddress).get();

		assertTrue(fixture.isManager(ethAddress));
		// End of user code
	}
	//Start of user code customTests

	@Test
	public void testConstructor() throws Exception {
		
		assertEquals(1, fixture.mangerCount().intValue());
		assertTrue(fixture.isManager(sender.getAddress()));
	}
	
	protected String info(Manageable memberRegistry) {
		return "  manager:" + memberRegistry.mangerCount() + " " + memberRegistry.isManager(sender.getAddress());
	}

	// End of user code
}
