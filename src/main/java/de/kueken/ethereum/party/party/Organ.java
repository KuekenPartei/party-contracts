package de.kueken.ethereum.party.party;

import de.kueken.ethereum.party.basics.Manageable;
import de.kueken.ethereum.party.members.MemberAware;

//Start of user code customized_imports

//End of user code


/**
* An organ is part of the party, defined in the constitution.
* It is populated by functions party members.
**/
public interface Organ extends Manageable,MemberAware{
	
	String organName();
	
	Integer lastFunctionId();
	
	org.adridadou.ethereum.propeller.values.EthAddress blogRegistry();
	
	Boolean isActive();
	
	Integer ballotCount();
	
	org.adridadou.ethereum.propeller.values.EthAddress ballotFactory();
	
	Boolean managers(org.adridadou.ethereum.propeller.values.EthAddress key);

	/**
	* Publish the message to the blog.
	* 
	* @param message -The message to send.
	* @param hash -The hash of the message.
	* @param er -The external resource of the message.
	**/
	java.util.concurrent.CompletableFuture<Void> publishMessage(String message,String hash,String er);

	/**
	* Change the member of the function.
	* 
	* @param _id -
	* @param _address -
	**/
	java.util.concurrent.CompletableFuture<Void> changeMember(Integer _id,org.adridadou.ethereum.propeller.values.EthAddress _address);
	/**
	* Create a function of this organ.
	* 
	* @param _functionName -The name of the organ function.
	* @param _constittiutionHash -
	**/
	java.util.concurrent.CompletableFuture<Void> createFunction(String _functionName,String _constittiutionHash);
	
	java.util.concurrent.CompletableFuture<Void> initalizeOrgan();
	/**
	* Publish a message at a function blog.
	* 
	* @param id -
	* @param message -
	* @param hash -
	* @param er -
	**/
	java.util.concurrent.CompletableFuture<Void> publishFunctionMessage(Integer id,String message,String hash,String er);
	/**
	* Creates a new ballot for this organ.
	* 
	* @param ballotType -
	* @param _registry -The member registry for the voting.
	* @param _name -The name of the ballot.
	* @param _hash -The hash of the actual text.
	* @return
	*  -
	**/
	java.util.concurrent.CompletableFuture<Integer> createBallot(Integer ballotType,org.adridadou.ethereum.propeller.values.EthAddress _registry,String _name,String _hash);
	
	org.adridadou.ethereum.propeller.values.EthAddress getLastBallot();
	
	org.adridadou.ethereum.propeller.values.EthAddress getOrganBlog();
	
	java.util.concurrent.CompletableFuture<Void> addOrganFunction(org.adridadou.ethereum.propeller.values.EthAddress _of,String _name);
	
	org.adridadou.ethereum.propeller.values.EthAddress getOrganFunction(Integer _id);

	String getOrganName();

	java.util.concurrent.CompletableFuture<Void> setOrganName (String aOrganName);

	java.util.concurrent.CompletableFuture<Void> setBlogRegistry (org.adridadou.ethereum.propeller.values.EthAddress aBlogRegistry);

	java.util.concurrent.CompletableFuture<Void> setBallotFactory (org.adridadou.ethereum.propeller.values.EthAddress aBallotFactory);

	//Start of user code additional_methods
	//End of user code
}
