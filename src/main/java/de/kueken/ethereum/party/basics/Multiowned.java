package de.kueken.ethereum.party.basics;

//Start of user code customized_imports

//End of user code



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
	
	MultiownedPendingState m_pending(Byte[] key);	

	/**
	* Constructor is given number of sigs required to do protected "onlymanyowners" transactions
	* as well as the selection of addresses capable of confirming them.
	* 
	* @param _owners -
	* @param _required -
	**/
	java.util.concurrent.CompletableFuture<Void> Multiowned(org.adridadou.ethereum.propeller.values.EthAddress[] _owners,Integer _required);
	
	java.util.concurrent.CompletableFuture<Boolean> isOwner(org.adridadou.ethereum.propeller.values.EthAddress _addr);
	
	Boolean hasConfirmed(Byte[] _operation,org.adridadou.ethereum.propeller.values.EthAddress _owner);

	//Start of user code additional_methods

	//End of user code
}
