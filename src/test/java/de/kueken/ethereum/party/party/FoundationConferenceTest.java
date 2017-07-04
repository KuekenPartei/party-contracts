package de.kueken.ethereum.party.party;

import java.util.concurrent.CompletableFuture;

import org.adridadou.ethereum.propeller.solidity.SolidityContractDetails;
import org.adridadou.ethereum.propeller.values.EthAddress;
import org.junit.Before;

// End of user code


/**
 * Test for the FoundationConference contract.
 *
 */
public class FoundationConferenceTest extends ConferenceTest{

 
	private FoundationConference fixture;
	// Start of user code FoundationConferenceTest.attributes
	// TODO: implement
	// End of user code

	@Override
	protected String getContractName() {
		return "FoundationConference";
	}

	@Override
	protected String getQuallifiedContractName() {
		return "party.sol:FoundationConference";
	}

	/**
	 * Read the contract from the file and deploys the contract code.
	 * @throws Exception
	 */
	@Before
	public void prepareTest() throws Exception {
		//Start of user code prepareTest
		super.prepareTest();	
		// End of user code
	}


	/**
	 * Create a new fixture by deploying the contract source.
	 * @throws Exception
	 */
	protected void createFixture() throws Exception {
		//Start of user code createFixture
		System.out.println("create fixture:"+getQuallifiedContractName());
		SolidityContractDetails compiledContract = getCompiledContract("/mix/combine.json");
		CompletableFuture<EthAddress> address = ethereum.publishContract(compiledContract, sender);
        fixtureAddress = address.get();
		setFixture(ethereum.createContractProxy(compiledContract, fixtureAddress, sender, FoundationConference.class));
		//End of user code
	}

	protected void setFixture(FoundationConference f) {
		this.fixture = f;
		super.setFixture(f);
	}


	//Start of user code customTests
	// End of user code
}
