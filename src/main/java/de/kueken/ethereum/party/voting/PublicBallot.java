package de.kueken.ethereum.party.voting;

//Start of user code customized_imports

//End of user code


/**
* A public votes are counted by the events.
**/
public interface PublicBallot extends BasicBallot{
	
	BasicBallotBallotProposal proposals(Integer key);	
	
	Integer votesCasted(org.adridadou.ethereum.propeller.values.EthAddress key);	

	
	java.util.concurrent.CompletableFuture<Void> castVote(Integer _voteFor);


	//Start of user code additional_methods

	//End of user code
}
