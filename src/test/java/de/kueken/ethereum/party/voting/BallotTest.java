package de.kueken.ethereum.party.voting;

import static org.junit.Assert.fail;

import java.util.concurrent.CompletableFuture;

import org.adridadou.ethereum.propeller.solidity.SolidityContractDetails;
import org.adridadou.ethereum.propeller.values.EthAddress;
import org.junit.Before;
import org.junit.Test;

import de.kueken.ethereum.party.AbstractContractTest;

// End of user code


/**
 * Test for the Ballot contract.
 *
 */
public class BallotTest extends AbstractContractTest{

 
	private Ballot fixture;
	// Start of user code BallotTest.attributes
	//TODO: implement
	// End of user code

	@Override
	protected String getContractName() {
		return "Ballot";
	}

	@Override
	protected String getQuallifiedContractName() {
		return "voting.sol:Ballot";
	}

	/**
	 * Read the contract from the file and deploys the contract code.
	 * @throws Exception
	 */
	@Before
	public void prepareTest() throws Exception {
		//Start of user code prepareTest
//        createFixture();
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
		setFixture(ethereum.createContractProxy(compiledContract, fixtureAddress, sender, Ballot.class));
		//End of user code
	}

	protected void setFixture(Ballot f) {
		this.fixture = f;
	}


	/**
	 * Test method for  Ballot(String name,Byte[][] proposalNames).
	 * see {@link Ballot#Ballot( String, Byte[][])}
	 * @throws Exception
	 */
	@Test
	public void testBallot_string_bytes32() throws Exception {
		//Start of user code testBallot_string_bytes32
		//TODO: implement this
		fail("not implemented");
		//End of user code
	}
	/**
	 * Test method for  giveRightToVote(org.adridadou.ethereum.propeller.values.EthAddress voter).
	 * see {@link Ballot#giveRightToVote( org.adridadou.ethereum.propeller.values.EthAddress)}
	 * @throws Exception
	 */
	@Test
	public void testGiveRightToVote_address() throws Exception {
		//Start of user code testGiveRightToVote_address
		//TODO: implement this
		fail("not implemented");
		//End of user code
	}
	/**
	 * Test method for  delegateTo(org.adridadou.ethereum.propeller.values.EthAddress to).
	 * see {@link Ballot#delegateTo( org.adridadou.ethereum.propeller.values.EthAddress)}
	 * @throws Exception
	 */
	@Test
	public void testDelegateTo_address() throws Exception {
		//Start of user code testDelegateTo_address
		//TODO: implement this
		fail("not implemented");
		//End of user code
	}
	/**
	 * Test method for  voteFor(Integer proposal).
	 * see {@link Ballot#voteFor( Integer)}
	 * @throws Exception
	 */
	@Test
	public void testVoteFor_uint() throws Exception {
		//Start of user code testVoteFor_uint
		//TODO: implement this
		fail("not implemented");
		//End of user code
	}
	/**
	 * Test method for  winningProposal().
	 * see {@link Ballot#winningProposal()}
	 * @throws Exception
	 */
	@Test
	public void testWinningProposal() throws Exception {
		//Start of user code testWinningProposal
		//TODO: implement this
		fail("not implemented");
		//End of user code
	}
	//Start of user code customTests    
	//End of user code
}
