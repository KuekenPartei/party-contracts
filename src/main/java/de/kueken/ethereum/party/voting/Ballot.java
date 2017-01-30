package de.kueken.ethereum.party.voting;

import java.util.concurrent.CompletableFuture;
import org.adridadou.ethereum.values.EthAddress;
import de.kueken.ethereum.party.members.*;

//Start of user code customized_imports

//End of user code


/**
* A simple ballot for voting on alternatives.
**/
public interface Ballot{
	
	String chairperson();
	
	String ballotName();

	
	java.util.concurrent.CompletableFuture<Void> Ballot(String name,Byte[][] proposalNames);
	
	java.util.concurrent.CompletableFuture<Void> giveRightToVote(String voter);
	
	java.util.concurrent.CompletableFuture<Void> delegateTo(String to);
	
	java.util.concurrent.CompletableFuture<Void> voteFor(Integer proposal);
	
	java.util.concurrent.CompletableFuture<Integer> winningProposal();

	//Start of user code additional_methods

	//End of user code
}
