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
* A basic party contract.
**/
public interface Party extends Manageable{
	
	String name();
	
	String memberRegistry();
	
	String constitutionHash();
	
	Integer organCount();
	
	String blogregistry();
	
	String parent();
	
	Integer subDivisionCount();
	
	Boolean managers(String key);
	
	String organs(Integer key);	
	
	String subDivisions(Integer key);	

	
	java.util.concurrent.CompletableFuture<Void> createOrgan(String organName);
	/**
	* Adds an organ to the party.
	* 
	* @param _organ -
	**/
	java.util.concurrent.CompletableFuture<Void> addOrgan(String _organ);
	/**
	* Add a subdivision of this party, the contrains are:
	* the party must be a mananger of the subdivision
	* the blogregistry must be the same
	* the member regstry must be the same
	* 
	* @param _subDivision -
	**/
	java.util.concurrent.CompletableFuture<Void> addSubDivision(String _subDivision);
	
	java.util.concurrent.CompletableFuture<Void> removeSubDivision(Integer _divisionId);

	String getMemberRegistry();

	java.util.concurrent.CompletableFuture<Void> setMemberRegistry (String aMemberRegistry);

	java.util.concurrent.CompletableFuture<Void> setBlogregistry (String aBlogregistry);

	//Start of user code additional_methods
	java.util.concurrent.CompletableFuture<Void> setName(String aName);
	java.util.concurrent.CompletableFuture<Void> setParent(String aName);
	//End of user code
}
