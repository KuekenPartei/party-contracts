package de.kueken.ethereum.party.party;

//Start of user code customized_imports

//End of user code


/**
* A conference is a meeting of the party members.
**/
public interface Conference extends Organ{
	
	Integer accreditatedMembers();
	
	Integer date();
	
	Boolean managers(org.adridadou.ethereum.propeller.values.EthAddress key);

	
	java.util.concurrent.CompletableFuture<Void> accreditationMember(org.adridadou.ethereum.propeller.values.EthAddress _address);

	//Start of user code additional_methods

	//End of user code
}
