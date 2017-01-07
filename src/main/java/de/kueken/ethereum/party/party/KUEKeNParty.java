package de.kueken.ethereum.party.party;

import java.util.concurrent.CompletableFuture;
import org.adridadou.ethereum.values.EthAddress;
import de.kueken.ethereum.party.basics.*;
import de.kueken.ethereum.party.members.*;
import de.kueken.ethereum.party.publishing.*;
import de.kueken.ethereum.party.voting.*;

/**
* An actual party.
* The KUEKen party.
**/
public interface KUEKeNParty extends Party{
	
	Boolean managers(String key);
	
	String[] organs(Integer key);	
	
	String[] subDivisions(Integer key);	

	
	void boostrapParty(String fc,String br);

	//Start of user code additional_methods

	//End of user code
}
