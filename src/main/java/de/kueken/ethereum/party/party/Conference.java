package de.kueken.ethereum.party.party;

import java.util.concurrent.CompletableFuture;
import org.adridadou.ethereum.values.EthAddress;
import de.kueken.ethereum.party.basics.*;
import de.kueken.ethereum.party.members.*;
import de.kueken.ethereum.party.publishing.*;
import de.kueken.ethereum.party.voting.*;

/**
* A conference is a meeting of the party members.
**/
public interface Conference extends Organ{
	
	Integer accreditatedMembers();
	
	Integer date();
	
	Boolean managers(String key);

	
	void accreditationMember(String _address);

	//Start of user code additional_methods

	//End of user code
}
