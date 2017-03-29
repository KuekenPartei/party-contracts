package de.kueken.ethereum.party.voting;

import static org.junit.Assert.*;

import de.kueken.ethereum.party.members.*;
import de.kueken.ethereum.party.voting.BasicBallot.BallotState;
import de.kueken.ethereum.party.voting.PublicBallot.*;


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

// Start of user code PublicBallotTest.customImports

// End of user code


/**
 * Test for the PublicBallot contract.
 *
 */
public class PublicBallotTest extends BasicBallotTest{

	private PublicBallot fixture;
	// Start of user code PublicBallotTest.attributes
	//TODO: add custom attributes
	//for the blockchain proxy the sender is hard coded
	private String senderAddress = "5db10750e8caff27f906b41c71b3471057dd2004";
	// End of user code

	@Override
	protected String getContractName() {
		return "PublicBallot";
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
		setFixture(ethereum.createContractProxy(compiledContract, fixtureAddress, sender, PublicBallot.class));
		//End of user code
	}

	protected void setFixture(PublicBallot f) {
		this.fixture = f;
		super.setFixture(f);
	}


	/**
	 * Test method for  castVote(Integer _voteFor).
	 * see {@link PublicBallot#castVote( Integer)}
	 * @throws Exception
	 */
	@Test
	public void testCastVote_uint() throws Exception {
		//Start of user code testCastVote_uint
		fail("not implemented");//TODO: implement this
		//End of user code
	}
	//Start of user code customTests    
	
	

	//End of user code
}
