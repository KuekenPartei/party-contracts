package de.kueken.ethereum.party.voting;

import static org.junit.Assert.*;

import de.kueken.ethereum.party.members.*;

import de.kueken.ethereum.party.voting.BasicBallot.*;


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
import de.kueken.ethereum.party.EthereumInstance.DeployDuo;
import de.kueken.ethereum.party.deployer.MembersDeployer;

// Start of user code BasicBallotTest.customImports

// End of user code


/**
 * Test for the BasicBallot contract.
 *
 */
public class BasicBallotTest extends AbstractContractTest{

	private BasicBallot fixture;
	// Start of user code BasicBallotTest.attributes
	protected MembersDeployer membersDeployer;

	// End of user code

	@Override
	protected String getContractName() {
		return "BasicBallot";
	}

	/**
	 * Read the contract from the file and deploys the contract code.
	 * @throws Exception
	 */
	@Before
	public void prepareTest() throws Exception {
		//Start of user code prepareTest
		membersDeployer = new MembersDeployer(ethereum,"/mix/combine.json",true);
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
		
		DeployDuo<MemberRegistry> registry = membersDeployer.createMemberRegistry(sender);
		EthAddress _registry = registry.contractAddress;
		String _name = "_name";
		String _hash = "_hash";
        CompletableFuture<EthAddress> address = ethereum.publishContract(compiledContract, sender
				, _registry, _name, _hash);
        fixtureAddress = address.get();
		setFixture(ethereum.createContractProxy(compiledContract, fixtureAddress, sender, BasicBallot.class));
		//End of user code
	}

	protected void setFixture(BasicBallot f) {
		this.fixture = f;
	}


	/**
	 * Test method for  addProposal(String _name,String _hash,String _url,org.adridadou.ethereum.values.EthAddress _member).
	 * see {@link BasicBallot#addProposal( String, String, String, org.adridadou.ethereum.values.EthAddress)}
	 * @throws Exception
	 */
	@Test
	public void testAddProposal_string_string_string_address() throws Exception {
		//Start of user code testAddProposal_string_string_string_address
		String _name= "name";
		String _hash = "hash";
		String _url = "url";
		EthAddress _member = EthAddress.of(ECKey.fromPrivate(BigInteger.valueOf(1000L)));
		assertEquals(0, fixture.proposalCount().intValue());
		fixture.addProposal(_name, _hash, _url, _member).get();
		assertEquals(1, fixture.proposalCount().intValue());
		
		BasicBallotBallotProposal proposals = fixture.proposals(0);
		assertEquals(_name, proposals.getName());
		assertEquals(_hash, proposals.getHash());
		assertEquals(_url, proposals.getUrl());
		assertEquals(_member, proposals.getMember());
		//End of user code
	}
	/**
	 * Test method for  castVote(Integer _voteFor).
	 * see {@link BasicBallot#castVote( Integer)}
	 * @throws Exception
	 */
	@Test
	public void testCastVote_uint() throws Exception {
		//Start of user code testCastVote_uint
		fail("not implemented");//TODO: implement this
		//End of user code
	}
	/**
	 * Test method for  startBallot().
	 * see {@link BasicBallot#startBallot()}
	 * @throws Exception
	 */
	@Test
	public void testStartBallot() throws Exception {
		//Start of user code testStartBallot
		assertEquals(BallotState.ballotCreated, fixture.ballotState());
		fixture.startBallot().get();
		assertEquals(BallotState.ballotStarted, fixture.ballotState());
		//End of user code
	}
	//Start of user code customTests  

	@Test
	public void testConstructor() throws Exception {
		assertEquals("_name", fixture.ballotName());
		assertEquals("_hash", fixture.ballotHash());
		assertEquals(BallotState.ballotCreated, fixture.ballotState());
	}

	//End of user code
}
