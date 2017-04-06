package de.kueken.ethereum.party.voting;

// Start of user code PublicBallotTest.customImports
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.fail;

import java.math.BigInteger;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

import org.adridadou.ethereum.keystore.AccountProvider;
import org.adridadou.ethereum.values.CompiledContract;
import org.adridadou.ethereum.values.EthAccount;
import org.adridadou.ethereum.values.EthAddress;
import org.ethereum.crypto.ECKey;
import org.junit.Before;
import org.junit.Test;

import de.kueken.ethereum.party.AbstractContractTest;
import de.kueken.ethereum.party.EthereumInstance.DeployDuo;
import de.kueken.ethereum.party.deployer.MembersDeployer;
import de.kueken.ethereum.party.deployer.PartyDeployers;
import de.kueken.ethereum.party.deployer.VotingDeployer;
import de.kueken.ethereum.party.members.MemberRegistry;
import de.kueken.ethereum.party.voting.BasicBallot.BallotState;

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
//	private String senderAddress = "5db10750e8caff27f906b41c71b3471057dd2004";
	// End of user code

	@Override
	protected String getContractName() {
		return "PublicBallot";
	}

	@Override
	protected String getQuallifiedContractName() {
		return "voting.sol:PublicBallot";
	}

	/**
	 * Read the contract from the file and deploys the contract code.
	 * @throws Exception
	 */
	@Before
	public void prepareTest() throws Exception {
		//Start of user code prepareTest
		votingDeployer = PartyDeployers.VOTINGDEPLOYER;// new VotingDeployer(ethereum,"/mix/combine.json",true);
		membersDeployer = PartyDeployers.MEMBERSDEPLOYER;// new MembersDeployer(ethereum,"/mix/combine.json",true);
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
		registry = membersDeployer.createMemberRegistry(sender);

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
		registry.contractInstance.addMember("Sender", sender.getAddress()).get();

		String _name= "name";
		String _hash = "hash";
		String _url = "url";
		EthAddress _member = EthAddress.of(ECKey.fromPrivate(BigInteger.valueOf(1000L)));
		assertEquals(0, fixture.proposalCount().intValue());
		fixture.addProposal(_name, _hash, _url, _member).get();
		assertEquals(1, fixture.proposalCount().intValue());

		fixture.addProposal(_name, _hash, _url, _member).get();
		assertEquals(2, fixture.proposalCount().intValue());
		
		assertEquals(BallotState.ballotCreated, fixture.ballotState());
		fixture.startBallot().get();
		assertEquals(BallotState.ballotStarted, fixture.ballotState());

		assertEquals(0,fixture.voteCount().intValue());
		fixture.castVote(0).get();
		assertEquals(1,fixture.voteCount().intValue());
		assertEquals(1, fixture.votesCasted(sender.getAddress()).intValue());  
		//End of user code
	}
	//Start of user code customTests    
	
	@Test(expected=ExecutionException.class)
	public void testStartBallotAddProposalNoneMember() throws Exception {
		assertEquals(BallotState.ballotCreated, fixture.ballotState());
		registry.contractInstance.addMember("Sender", sender.getAddress()).get();

		
		String _name= "name";
		String _hash = "hash";
		String _url = "url";
		assertEquals(0, fixture.proposalCount().intValue());
		fixture.addProposal(_name, _hash, _url, sender.getAddress()).get();
		assertEquals(1, fixture.proposalCount().intValue());

		EthAccount account1 = AccountProvider.fromECKey(ECKey.fromPrivate(BigInteger.valueOf(1000L)));
		PublicBallot ballot = votingDeployer.createPublicBallotProxy(account1, fixtureAddress);
		ballot.addProposal(_name, _hash, _url, account1.getAddress()).get();
	}

	@Test(expected=ExecutionException.class)
	public void testCastVoteAgain() throws Exception {
		registry.contractInstance.addMember("Sender", sender.getAddress()).get();

		String _name= "name";
		String _hash = "hash";
		String _url = "url";
		EthAddress _member = EthAddress.of(ECKey.fromPrivate(BigInteger.valueOf(1000L)));
		assertEquals(0, fixture.proposalCount().intValue());
		fixture.addProposal(_name, _hash, _url, _member).get();
		assertEquals(1, fixture.proposalCount().intValue());

		fixture.addProposal(_name, _hash, _url, _member).get();
		assertEquals(2, fixture.proposalCount().intValue());
		
		assertEquals(BallotState.ballotCreated, fixture.ballotState());
		fixture.startBallot().get();
		assertEquals(BallotState.ballotStarted, fixture.ballotState());

		assertEquals(0,fixture.voteCount().intValue());
		fixture.castVote(0).get();
		assertEquals(1,fixture.voteCount().intValue());
		assertEquals(1, fixture.votesCasted(sender.getAddress()).intValue());  
		
		fixture.castVote(0).get();
	}

	@Test(expected=ExecutionException.class)
	public void testCastVoteNotStarted() throws Exception {
		registry.contractInstance.addMember("Sender", sender.getAddress()).get();

		String _name= "name";
		String _hash = "hash";
		String _url = "url";
		EthAddress _member = EthAddress.of(ECKey.fromPrivate(BigInteger.valueOf(1000L)));
		assertEquals(0, fixture.proposalCount().intValue());
		fixture.addProposal(_name, _hash, _url, _member).get();
		assertEquals(1, fixture.proposalCount().intValue());

		fixture.addProposal(_name, _hash, _url, _member).get();
		assertEquals(2, fixture.proposalCount().intValue());
		
		assertEquals(BallotState.ballotCreated, fixture.ballotState());

		assertEquals(0,fixture.voteCount().intValue());
		fixture.castVote(0).get();
	}

	@Test
	public void testCastVote_Several() throws Exception {
		EthAccount acount_1 = new EthAccount(ECKey.fromPrivate(BigInteger.valueOf(100001L)));
		registry.contractInstance.addMember("Sender", sender.getAddress()).get();
		registry.contractInstance.addMember("Sender1", acount_1.getAddress()).get();
//		EthAccount acount_2 = new EthAccount(ECKey.fromPrivate(BigInteger.valueOf(100002L)));
		
		String _name= "name";
		String _hash = "hash";
		String _url = "url";
		EthAddress _member = EthAddress.of(ECKey.fromPrivate(BigInteger.valueOf(1000L)));
		assertEquals(0, fixture.proposalCount().intValue());
		fixture.addProposal(_name, _hash, _url, _member).get();
		assertEquals(1, fixture.proposalCount().intValue());

		fixture.addProposal(_name, _hash, _url, _member).get();
		assertEquals(2, fixture.proposalCount().intValue());
		
		assertEquals(BallotState.ballotCreated, fixture.ballotState());
		fixture.startBallot().get();
		assertEquals(BallotState.ballotStarted, fixture.ballotState());

		assertEquals(0,fixture.voteCount().intValue());
		fixture.castVote(0).get();
		assertEquals(1,fixture.voteCount().intValue());
		assertEquals(1, fixture.votesCasted(sender.getAddress()).intValue());  
		
		PublicBallot ballotProxy = votingDeployer.createPublicBallotProxy(acount_1, fixtureAddress);
		ballotProxy.castVote(1).get();
		assertEquals(2,fixture.voteCount().intValue());
		assertEquals(2, fixture.votesCasted(acount_1.getAddress()).intValue());  
		
	}
	
	@Test(expected=ExecutionException.class)
	public void testCastVote_NoMember() throws Exception {
		EthAccount acount_1 = new EthAccount(ECKey.fromPrivate(BigInteger.valueOf(100001L)));
//		registry.contractInstance.addMember("Sender", sender.getAddress()).get();
//		registry.contractInstance.addMember("Sender1", acount_1.getAddress()).get();
//		EthAccount acount_2 = new EthAccount(ECKey.fromPrivate(BigInteger.valueOf(100002L)));
		
		String _name= "name";
		String _hash = "hash";
		String _url = "url";
		EthAddress _member = EthAddress.of(ECKey.fromPrivate(BigInteger.valueOf(1000L)));
		assertEquals(0, fixture.proposalCount().intValue());
		fixture.addProposal(_name, _hash, _url, _member).get();
		assertEquals(1, fixture.proposalCount().intValue());

		fixture.addProposal(_name, _hash, _url, _member).get();
		assertEquals(2, fixture.proposalCount().intValue());
		
		assertEquals(BallotState.ballotCreated, fixture.ballotState());
		fixture.startBallot().get();
		assertEquals(BallotState.ballotStarted, fixture.ballotState());

		assertEquals(0,fixture.voteCount().intValue());
		fixture.castVote(0).get();
		assertEquals(1,fixture.voteCount().intValue());
		assertEquals(1, fixture.votesCasted(sender.getAddress()).intValue());  
		
		PublicBallot ballotProxy = votingDeployer.createPublicBallotProxy(acount_1, fixtureAddress);
		ballotProxy.castVote(1).get();
		
	}

	//End of user code
}
