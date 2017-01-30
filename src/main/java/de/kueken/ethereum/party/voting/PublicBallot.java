package de.kueken.ethereum.party.voting;

import java.util.concurrent.CompletableFuture;
import org.adridadou.ethereum.values.EthAddress;
import de.kueken.ethereum.party.members.*;

//Start of user code customized_imports

//End of user code


/**
* A public votes are counted by the events.
**/
public interface PublicBallot extends BasicBallot{

	
	java.util.concurrent.CompletableFuture<Void> castVote(Integer _voteFor);


	//Start of user code additional_methods

	//End of user code
}
