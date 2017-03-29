package de.kueken.ethereum.party.party;

import java.util.concurrent.CompletableFuture;
import org.adridadou.ethereum.values.EthAddress;
import de.kueken.ethereum.party.basics.*;
import de.kueken.ethereum.party.members.*;
import de.kueken.ethereum.party.publishing.*;
import de.kueken.ethereum.party.voting.*;

//Start of user code customized_imports

//End of user code


/**
* A conference is a meeting of the party members.
**/
public interface Conference extends Organ{
	
	Integer accreditatedMembers();
	
	Integer date();
	
	Boolean managers(org.adridadou.ethereum.values.EthAddress key);

	
	java.util.concurrent.CompletableFuture<Void> accreditationMember(org.adridadou.ethereum.values.EthAddress _address);

	//Start of user code additional_methods

	//End of user code
}
