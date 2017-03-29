package de.kueken.ethereum.party.voting;

import static org.junit.Assert.*;

import de.kueken.ethereum.party.members.*;

import de.kueken.ethereum.party.voting.Ballot.*;


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

// Start of user code BallotTest.customImports

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

	/**
	 * Read the contract from the file and deploys the contract code.
	 * @throws Exception
	 */
	@Before
	public void prepareTest() throws Exception {
		//Start of user code prepareTest

        File contractSrc = new File(this.getClass().getResource("/mix/voting.sol").toURI());
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
	 * Test method for  giveRightToVote(org.adridadou.ethereum.values.EthAddress voter).
	 * see {@link Ballot#giveRightToVote( org.adridadou.ethereum.values.EthAddress)}
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
	 * Test method for  delegateTo(org.adridadou.ethereum.values.EthAddress to).
	 * see {@link Ballot#delegateTo( org.adridadou.ethereum.values.EthAddress)}
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
