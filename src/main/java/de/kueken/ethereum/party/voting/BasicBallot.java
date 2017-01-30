package de.kueken.ethereum.party.voting;

import java.util.concurrent.CompletableFuture;
import org.adridadou.ethereum.values.EthAddress;
import de.kueken.ethereum.party.members.*;

//Start of user code customized_imports

//End of user code


/**
* The basic ballot.
* Collects the proposals and manages the state.
**/
public interface BasicBallot{
    enum BallotState { NULL,ballotCreated,ballotStarted,ballotEnded }
	
	String accessregistry();
	
	Integer ballotStart();
	
	Integer ballotEnd();
	
	BallotState ballotState();
	
	Integer proposalCount();
	
	String ballotName();
	
	String ballotHash();

	
	java.util.concurrent.CompletableFuture<Void> addProposal(String _name,String _hash,String _url,String _member);
	
	java.util.concurrent.CompletableFuture<Void> castVote(Integer _voteFor);
	
	java.util.concurrent.CompletableFuture<Void> startBallot();

	//Start of user code additional_methods

	//End of user code
}
