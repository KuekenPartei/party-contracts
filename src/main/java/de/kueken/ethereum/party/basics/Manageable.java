package de.kueken.ethereum.party.basics;

//Start of user code customized_imports

//End of user code


/**
* A basic class to introduce an access control.
* All registered manager can access.
* A registered manager is an address mapped with true.
**/
public interface Manageable{
	
	Integer mangerCount();
	
	Boolean managers(org.adridadou.ethereum.propeller.values.EthAddress key);

	
	java.util.concurrent.CompletableFuture<Void> addManager(org.adridadou.ethereum.propeller.values.EthAddress _newManagerAddress);
	
	java.util.concurrent.CompletableFuture<Void> removeManager(org.adridadou.ethereum.propeller.values.EthAddress _managerAddress);
	
	Boolean isManager(org.adridadou.ethereum.propeller.values.EthAddress _managerAddress);

	//Start of user code additional_methods

	//End of user code
}
