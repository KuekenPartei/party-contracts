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
* The function definition.
* A function is defined in the constitution of the party.
* Normaly it is associated with a party member.
**/
public interface OrganFunction extends Manageable{
	
	String currentMember();
	
	String functionName();
	
	Integer id();
	
	String constitutionHash();
	
	Integer lastMemberChanged();
	
	Integer lastConstitutionHashChanged();
	
	String publisher();
	
	Boolean managers(String key);

	/**
	* Publish the message to the blog.
	* 
	* @param message -The message to send.
	* @param hash -The hash of the message.
	* @param er -The external resource of the message.
	**/
	java.util.concurrent.CompletableFuture<Void> publishMessage(String message,String hash,String er);

	
	String getFunctioName();

	java.util.concurrent.CompletableFuture<Void> setCurrentMember (String aCurrentMember);

	java.util.concurrent.CompletableFuture<Void> setPublisher (String aPublisher);

	//Start of user code additional_methods

	//End of user code
}
