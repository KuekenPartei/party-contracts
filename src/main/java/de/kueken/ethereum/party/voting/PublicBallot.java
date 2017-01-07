package de.kueken.ethereum.party.voting;

import java.util.concurrent.CompletableFuture;
import org.adridadou.ethereum.values.EthAddress;
import de.kueken.ethereum.party.members.*;

/**
* A public votes are counted by the events.
**/
public interface PublicBallot extends BasicBallot{

	
	void castVote(Integer _voteFor);


	//Start of user code additional_methods

	//End of user code
}
