package de.kueken.ethereum.party.party;

import de.kueken.ethereum.party.basics.*;
import de.kueken.ethereum.party.members.*;
import de.kueken.ethereum.party.publishing.*;
import de.kueken.ethereum.party.voting.*;

/**
* An organ is part of the party, defined in the constitution.
* It is populated by functions party members.
**/
public interface Organ extends Manageable,MemberAware{
	
	String organName();
	
	Integer lastFunctionId();
	
	String blogRegistry();
	
	Boolean isActive();
	
	Integer ballotCount();
	
	Boolean managers(String key);

	/**
	* Publish the message to the blog.
	* 
	* @param message -The message to send.
	* @param hash -The hash of the message.
	* @param er -The external resource of the message.
	**/
	void publishMessage(String message,String hash,String er);

	/**
	* Change the member of the function.
	* 
	* @param _id -
	* @param _address -
	**/
	void changeMember(Integer _id,String _address);
	/**
	* Create a function of this organ.
	* 
	* @param _functionName -The name of the organ function.
	* @param _constittiutionHash -
	**/
	void createFunction(String _functionName,String _constittiutionHash);
	
	void initalizeOrgan();
	/**
	* Publish a message at a function blog.
	* 
	* @param id -
	* @param message -
	* @param hash -
	* @param er -
	**/
	void publishFunctionMessage(Integer id,String message,String hash,String er);
	/**
	* Creates a new ballot for this organ.
	* 
	* @param name -
	* @param proposalNames -
	* @return
	*  -
	**/
	java.util.concurrent.CompletableFuture<Integer> createBallot(String name,Byte[][] proposalNames);
	
	String getLastBallot();
	
	String getOrganBlog();
	
	void addOrganFunction(String _of,String _name);
	
	String getOrganFunction(Integer _id);
	//Start of user code additional_methods

	//End of user code
}
