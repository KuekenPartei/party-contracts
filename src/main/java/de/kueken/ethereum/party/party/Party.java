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

	
	void createOrgan(String organName);
	/**
	* Adds an organ to the party.
	* 
	* @param _organ -
	**/
	void addOrgan(String _organ);
	/**
	* Add a subdivision of this party, the contrains are:
	* the party must be a mananger of the subdivision
	* the blogregistry must be the same
	* the member regstry must be the same
	* 
	* @param _subDivision -
	**/
	void addSubDivision(String _subDivision);
	
	void removeSubDivision(Integer _divisionId);

	String getMemberRegistry();

	void setMemberRegistry (String aMemberRegistry);

	void setBlogregistry (String aBlogregistry);

	//Start of user code additional_methods
	void setName(String aName);
	//End of user code
}
