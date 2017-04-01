package de.kueken.ethereum.party.basics;

// Start of user code MultiownedTest.customImports
import static org.junit.Assert.*;

import java.io.File;
import java.math.BigInteger;
import java.util.concurrent.CompletableFuture;

import org.adridadou.ethereum.values.CompiledContract;
import org.adridadou.ethereum.values.EthAccount;
import org.adridadou.ethereum.values.EthAddress;
import org.adridadou.ethereum.values.SoliditySource;
import org.ethereum.crypto.ECKey;
import org.junit.Before;
import org.junit.Test;

import de.kueken.ethereum.party.AbstractContractTest;

// End of user code


/**
 * Test for the Multiowned contract.
 *
 */
public class MultiownedTest extends AbstractContractTest{

 
	private Multiowned fixture;
	// Start of user code MultiownedTest.attributes
	//TODO: implement
	// End of user code

	@Override
	protected String getContractName() {
		return "Multiowned";
	}

	@Override
	protected String getQuallifiedContractName() {
		return "basics.sol:Multiowned";
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
		setFixture(ethereum.createContractProxy(compiledContract, fixtureAddress, sender, Multiowned.class));
		//End of user code
	}

	protected void setFixture(Multiowned f) {
		this.fixture = f;
	}


	/**
	 * Test method for  Multiowned(org.adridadou.ethereum.values.EthAddress[] _owners,Integer _required).
	 * see {@link Multiowned#Multiowned( org.adridadou.ethereum.values.EthAddress[], Integer)}
	 * @throws Exception
	 */
	@Test
	public void testMultiowned_address_uint() throws Exception {
		//Start of user code testMultiowned_address_uint
		//TODO: implement this
		fail("not implemented");
		//End of user code
	}
	/**
	 * Test method for  isOwner(org.adridadou.ethereum.values.EthAddress _addr).
	 * see {@link Multiowned#isOwner( org.adridadou.ethereum.values.EthAddress)}
	 * @throws Exception
	 */
	@Test
	public void testIsOwner_address() throws Exception {
		//Start of user code testIsOwner_address
		//TODO: implement this
		fail("not implemented");
		//End of user code
	}
	/**
	 * Test method for  hasConfirmed(Byte[] _operation,org.adridadou.ethereum.values.EthAddress _owner).
	 * see {@link Multiowned#hasConfirmed( Byte[], org.adridadou.ethereum.values.EthAddress)}
	 * @throws Exception
	 */
	@Test
	public void testHasConfirmed_bytes32_address() throws Exception {
		//Start of user code testHasConfirmed_bytes32_address
		//TODO: implement this
		fail("not implemented");
		//End of user code
	}
	//Start of user code customTests    
	//End of user code
}
