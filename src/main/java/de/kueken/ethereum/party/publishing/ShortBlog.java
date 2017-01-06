package de.kueken.ethereum.party.publishing;

import java.util.concurrent.CompletableFuture;
import org.adridadou.ethereum.values.EthAddress;
import de.kueken.ethereum.party.basics.*;

/**
* A Short blog can save messages on the blockchain.
**/
public interface ShortBlog extends Manageable{
	
	Integer messageCount();
	
	Integer lastMessageDate();
	
	String name();
	
	Boolean managers(String key);

	/**
	* Send a message to the blog,
	* 
	* @param message -The message as string.
	* @param hash -The hash of the external source.
	* @param er -The link to the message.
	**/
	void sendMessage(String message,String hash,String er);
	//Start of user code additional_methods

	//End of user code
}
