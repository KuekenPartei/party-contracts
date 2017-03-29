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
* An actual party.
* The KUEKen party.
**/
public interface KUEKeNParty extends Party{
	
	Boolean managers(org.adridadou.ethereum.values.EthAddress key);
	
	org.adridadou.ethereum.values.EthAddress organs(Integer key);	
	
	org.adridadou.ethereum.values.EthAddress subDivisions(Integer key);	

	
	java.util.concurrent.CompletableFuture<Void> boostrapParty(org.adridadou.ethereum.values.EthAddress fc,org.adridadou.ethereum.values.EthAddress br);

	//Start of user code additional_methods

	//End of user code
}
