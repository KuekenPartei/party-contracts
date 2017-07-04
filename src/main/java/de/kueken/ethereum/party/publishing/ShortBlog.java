package de.kueken.ethereum.party.publishing;

import de.kueken.ethereum.party.basics.Manageable;

//Start of user code customized_imports

//End of user code


/**
* A Short blog can save messages on the blockchain.
**/
public interface ShortBlog extends Manageable{
	
	Integer messageCount();
	
	Integer lastMessageDate();
	
	String name();
	
	Boolean managers(org.adridadou.ethereum.propeller.values.EthAddress key);
	
	ShortBlogMessage messages(Integer key);

	/**
	* Send a message to the blog,
	* 
	* @param message -The message as string.
	* @param hash -The hash of the external source.
	* @param er -The link to the message.
	**/
	java.util.concurrent.CompletableFuture<Void> sendMessage(String message,String hash,String er);

	//Start of user code additional_methods

	//End of user code
}
