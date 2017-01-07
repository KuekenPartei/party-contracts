package de.kueken.ethereum.party.basics;

import java.util.concurrent.CompletableFuture;
import org.adridadou.ethereum.values.EthAddress;


public interface Multiowned{
	/**
	* The number of owners that must confirm the same operation before it is run.
	**/
	Integer m_required();
	/**
	* pointer used to find a free slot in m_owners
	**/
	Integer m_numOwners();
	
	Integer[] m_owners();
	
	Integer c_maxOwners();
	
	Byte[][] m_pendingIndex();
	/**
	* index on the list of owners to allow reverse lookup
	**/
	Integer m_ownerIndex(Integer key);

	/**
	* Constructor is given number of sigs required to do protected "onlymanyowners" transactions
	* as well as the selection of addresses capable of confirming them.
	* 
	* @param _owners -
	* @param _required -
	**/
	void Multiowned(String[] _owners,Integer _required);
	
	java.util.concurrent.CompletableFuture<Boolean> isOwner(String _addr);
	
	Boolean hasConfirmed(Byte[] _operation,String _owner);

	//Start of user code additional_methods

	//End of user code
}
