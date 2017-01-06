package de.kueken.ethereum.party.voting;

import java.util.concurrent.CompletableFuture;
import org.adridadou.ethereum.values.EthAddress;
import de.kueken.ethereum.party.members.*;

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

	
	void addProposal(String _name,String _hash,String _url,String _member);
	
	void castVote(Integer _voteFor);
	
	void startBallot();
	//Start of user code additional_methods

	//End of user code
}
