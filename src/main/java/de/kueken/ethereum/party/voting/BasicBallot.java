package de.kueken.ethereum.party.voting;

//Start of user code customized_imports

//End of user code


/**
* The basic ballot.
* Collects the proposals and manages the state.
**/
public interface BasicBallot{
    enum BallotState { NULL,ballotCreated,ballotStarted,ballotEnded }
	
	org.adridadou.ethereum.propeller.values.EthAddress accessregistry();
	
	Integer ballotStart();
	
	Integer ballotEnd();
	
	BallotState ballotState();
	
	Integer proposalCount();
	
	String ballotName();
	
	String ballotHash();
	
	Integer voteCount();
	
	BasicBallotBallotProposal proposals(Integer key);	
	
	Integer votesCasted(org.adridadou.ethereum.propeller.values.EthAddress key);	

	
	java.util.concurrent.CompletableFuture<Void> addProposal(String _name,String _hash,String _url,org.adridadou.ethereum.propeller.values.EthAddress _member);
	
	java.util.concurrent.CompletableFuture<Void> castVote(Integer _voteFor);
	
	java.util.concurrent.CompletableFuture<Void> startBallot();
	
	java.util.concurrent.CompletableFuture<Void> stopBallot();

	//Start of user code additional_methods

	//End of user code
}
