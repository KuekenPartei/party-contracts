package de.kueken.ethereum.party.members;

import java.util.concurrent.CompletableFuture;
import org.adridadou.ethereum.values.EthAddress;
import de.kueken.ethereum.party.basics.*;

//Start of user code customized_imports

//End of user code


/**
* The basic class to provide access to the member registry.
**/
public interface MemberAware{
	
	String memberRegistry();


	java.util.concurrent.CompletableFuture<Void> setMemberRegistry (String aMemberRegistry);

	//Start of user code additional_methods

	//End of user code
}
