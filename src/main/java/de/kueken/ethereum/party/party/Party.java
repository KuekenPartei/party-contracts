package de.kueken.ethereum.party.party;

import de.kueken.ethereum.party.basics.*;
import de.kueken.ethereum.party.members.*;
import de.kueken.ethereum.party.publishing.*;
import de.kueken.ethereum.party.voting.*;

/**
* A basic party contract.
**/
public interface Party extends Manageable{
	
	String constitutionHash();
	
	Integer organCount();
	
	Boolean managers(String key);
	
	String[] organs(Integer key);	

	
	void createOrgan(String organName);
	/**
	* Adds an organ to the party.
	* 
	* @param _organ -
	**/
	void addOrgan(String _organ);
	//Start of user code additional_methods

	//End of user code
}
