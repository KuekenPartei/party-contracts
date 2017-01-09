package de.kueken.ethereum.party.basics;

import java.util.concurrent.CompletableFuture;
import org.adridadou.ethereum.values.EthAddress;

//Start of user code customized_imports

//End of user code


/**
* A basic class to introduce an access control.
* All registered manager can access.
* A registered manager is an address mapped with true.
**/
public interface Manageable{
	
	Integer mangerCount();
	
	Boolean managers(String key);

	
	void addManager(String _newManagerAddress);
	
	void removeManager(String _managerAddress);
	
	Boolean isManager(String _managerAddress);

	//Start of user code additional_methods

	//End of user code
}
