package de.kueken.ethereum.party.party;

import de.kueken.ethereum.party.basics.Manageable;

//Start of user code customized_imports

//End of user code


/**
* The function definition.
* A function is defined in the constitution of the party.
* Normaly it is associated with a party member.
**/
public interface OrganFunction extends Manageable{
	
	org.adridadou.ethereum.propeller.values.EthAddress currentMember();
	
	String functionName();
	
	Integer id();
	
	String constitutionHash();
	
	Integer lastMemberChanged();
	
	Integer lastConstitutionHashChanged();
	
	org.adridadou.ethereum.propeller.values.EthAddress publisher();
	
	Boolean managers(org.adridadou.ethereum.propeller.values.EthAddress key);

	/**
	* Publish the message to the blog.
	* 
	* @param message -The message to send.
	* @param hash -The hash of the message.
	* @param er -The external resource of the message.
	**/
	java.util.concurrent.CompletableFuture<Void> publishMessage(String message,String hash,String er);

	
	String getFunctioName();

	java.util.concurrent.CompletableFuture<Void> setCurrentMember (org.adridadou.ethereum.propeller.values.EthAddress aCurrentMember);

	java.util.concurrent.CompletableFuture<Void> setPublisher (org.adridadou.ethereum.propeller.values.EthAddress aPublisher);

	//Start of user code additional_methods

	//End of user code
}
