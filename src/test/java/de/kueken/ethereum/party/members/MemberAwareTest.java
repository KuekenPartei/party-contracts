package de.kueken.ethereum.party.members;

// Start of user code MemberAwareTest.customImports
import static org.junit.Assert.fail;

import java.util.concurrent.CompletableFuture;

import org.adridadou.ethereum.propeller.solidity.SolidityContractDetails;
import org.adridadou.ethereum.propeller.values.EthAddress;
import org.junit.Before;
import org.junit.Test;

import de.kueken.ethereum.party.AbstractContractTest;

// End of user code


/**
 * Test for the MemberAware contract.
 *
 */
public class MemberAwareTest extends AbstractContractTest{

 
	private MemberAware fixture;
	// Start of user code MemberAwareTest.attributes
	//TODO: implement
	// End of user code

	@Override
	protected String getContractName() {
		return "MemberAware";
	}

	@Override
	protected String getQuallifiedContractName() {
		return "members.sol:MemberAware";
	}

	/**
	 * Read the contract from the file and deploys the contract code.
	 * @throws Exception
	 */
	@Before
	public void prepareTest() throws Exception {
		//Start of user code prepareTest

		//End of user code
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
		setFixture(ethereum.createContractProxy(compiledContract, fixtureAddress, sender, MemberAware.class));
		//End of user code
	}

	protected void setFixture(MemberAware f) {
		this.fixture = f;
	}


	//Start of user code customTests    
	@Test
	public void testName() throws Exception {
		fail();
	}
	//End of user code
}
