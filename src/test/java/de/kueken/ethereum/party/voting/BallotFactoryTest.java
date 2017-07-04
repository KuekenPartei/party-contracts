package de.kueken.ethereum.party.voting;

// Start of user code BallotFactoryTest.customImports
import static org.junit.Assert.assertEquals;

import java.util.concurrent.CompletableFuture;

import org.adridadou.ethereum.propeller.solidity.SolidityContractDetails;
import org.adridadou.ethereum.propeller.values.EthAddress;
import org.junit.Before;
import org.junit.Test;

import de.kueken.ethereum.party.AbstractContractTest;
import de.kueken.ethereum.party.deployer.VotingDeployer;

// End of user code


/**
 * Test for the BallotFactory contract.
 *
 */
public class BallotFactoryTest extends AbstractContractTest{

 
	private BallotFactory fixture;
	// Start of user code BallotFactoryTest.attributes
	//TODO: add custom attributes

	// End of user code

	@Override
	protected String getContractName() {
		return "BallotFactory";
	}

	@Override
	protected String getQuallifiedContractName() {
		return "voting.sol:BallotFactory";
	}

	/**
	 * Read the contract from the file and deploys the contract code.
	 * @throws Exception
	 */
	@Before
	public void prepareTest() throws Exception {
		//Start of user code prepareTest
		createFixture();
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
		setFixture(ethereum.createContractProxy(compiledContract, fixtureAddress, sender, BallotFactory.class));
		//End of user code
	}

	protected void setFixture(BallotFactory f) {
		this.fixture = f;
	}


	/**
	 * Test method for  create(Integer ballotType,org.adridadou.ethereum.propeller.values.EthAddress _registry,String _name,String _hash).
	 * see {@link BallotFactory#create( Integer, org.adridadou.ethereum.propeller.values.EthAddress, String, String)}
	 * @throws Exception
	 */
	@Test
	public void testCreate_uint_address_string_string() throws Exception {
		//Start of user code testCreate_uint_address_string_string
		EthAddress _registry = EthAddress.empty();
		String _name = "name";
		String _hash = "hash";
		EthAddress address = fixture.create(0, _registry, _name, _hash).get();	
		VotingDeployer votingDeployer = new VotingDeployer(ethereum,"/mix/combine.json",true);
		BasicBallot ballot = votingDeployer.createBasicBallotProxy(sender, address);
		
		assertEquals(_name, ballot.ballotName());
		assertEquals(_hash, ballot.ballotHash());
		
		//End of user code
	}
	//Start of user code customTests    
	//End of user code
}
