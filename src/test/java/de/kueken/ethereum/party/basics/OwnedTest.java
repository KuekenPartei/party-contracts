package de.kueken.ethereum.party.basics;

// Start of user code OwnedTest.customImports
import static org.junit.Assert.*;

import java.io.File;
import java.math.BigInteger;
import java.util.concurrent.CompletableFuture;

import org.adridadou.ethereum.values.CompiledContract;
import org.adridadou.ethereum.values.EthAccount;
import org.adridadou.ethereum.values.EthAddress;
import org.adridadou.ethereum.values.SmartContractByteCode;
import org.ethereum.crypto.ECKey;
import org.junit.Before;
import org.junit.Test;

import de.kueken.ethereum.party.AbstractContractTest;

// End of user code


/**
 * Test for the Owned contract.
 *
 */
public class OwnedTest extends AbstractContractTest{

 
	private Owned fixture;
	// Start of user code OwnedTest.attributes
	//TODO: implement
	// End of user code

	@Override
	protected String getContractName() {
		return "Owned";
	}

	@Override
	protected String getQuallifiedContractName() {
		return "basics.sol:Owned";
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
		//End of user code
	}


	/**
	 * Create a new fixture by deploying the contract source.
	 * @throws Exception
	 */
	protected void createFixture() throws Exception {
		//Start of user code createFixture
		CompiledContract compiledContract = getCompiledContract("/mix/combine.json");
		CompletableFuture<EthAddress> address = ethereum.publishContract(compiledContract, sender);
        fixtureAddress = address.get();
		setFixture(ethereum.createContractProxy(compiledContract, fixtureAddress, sender, Owned.class));
		//End of user code
	}

	protected void setFixture(Owned f) {
		this.fixture = f;
	}


	/**
	 * Test method for  getOwner().
	 * see {@link Owned#getOwner()}
	 * @throws Exception
	 */
	@Test
	public void testGetOwner() throws Exception {
		//Start of user code testGetOwner
		assertEquals(sender.getAddress(), fixture.owner());
		//End of user code
	}
	/**
	 * Test method for  changeOwner(org.adridadou.ethereum.values.EthAddress newOwner).
	 * see {@link Owned#changeOwner( org.adridadou.ethereum.values.EthAddress)}
	 * @throws Exception
	 */
	@Test
	public void testChangeOwner_address() throws Exception {
		//Start of user code testChangeOwner_address
		assertEquals(sender.getAddress(), fixture.owner());
		fixture.changeOwner(fixtureAddress).get();
		assertEquals(fixtureAddress, fixture.owner());
		//End of user code
	}
	/**
	 * Test method for  kill().
	 * see {@link Owned#kill()}
	 * @throws Exception
	 */
	@Test
	public void testKill() throws Exception {
		//Start of user code testKill
		assertFalse(ethereum.getCode(fixtureAddress).toString().isEmpty());
		fixture.kill().get();
		SmartContractByteCode code = ethereum.getCode(fixtureAddress);
		assertTrue(ethereum.getCode(fixtureAddress).toString().isEmpty());
		
		//End of user code
	}
	//Start of user code customTests    
	//End of user code
}
