package de.kueken.ethereum.party.voting;


/**
* A simple ballot for voting on alternatives.
**/
public interface Ballot{
	
	String chairperson();
	
	String ballotName();

	
	void Ballot(String name,Byte[][] proposalNames);
	
	void giveRightToVote(String voter);
	
	void delegateTo(String to);
	
	void voteFor(Integer proposal);
	
	java.util.concurrent.CompletableFuture<Integer> winningProposal();
	//Start of user code additional_methods

	//End of user code
}