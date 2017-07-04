package de.kueken.ethereum.party.members;

//Start of user code customized_imports

//End of user code


/**
* The basic class to provide access to the member registry.
**/
public interface MemberAware{
	
	org.adridadou.ethereum.propeller.values.EthAddress memberRegistry();


	java.util.concurrent.CompletableFuture<Void> setMemberRegistry (org.adridadou.ethereum.propeller.values.EthAddress aMemberRegistry);

	//Start of user code additional_methods

	//End of user code
}
