package de.kueken.ethereum.party.members;

import de.kueken.ethereum.party.basics.Manageable;

//Start of user code customized_imports

//End of user code


/**
* Holds the members and their states.
* Also the contract to manage these member states.
* The registry is a Manageable contract so the writing methods can only accessed by a registered manager.
**/
public interface MemberRegistry extends Manageable{
    enum MemberState { deleted,inactive,active }
    enum EventType { memberStateChanged,accreditation,functionChange }
	
	Integer partyMemberCount();
	
	Integer activeMemberCount();
	
	Boolean managers(org.adridadou.ethereum.propeller.values.EthAddress key);
	
	MemberRegistryMember partyMembers(Integer key);
	
	MemberRegistryMember memberAddress(org.adridadou.ethereum.propeller.values.EthAddress key);

	/**
	* Check if the given adress is a registed active member.
	* 
	* @param _memberAdress -
	* @return
	*  -
	**/
	Boolean isMember(org.adridadou.ethereum.propeller.values.EthAddress _memberAdress);

	
	org.adridadou.ethereum.propeller.values.EthAddress getMemberAddress(Integer id);

	/**
	* get the number of active members
	* @return
	*  -
	**/
	Integer getMemberCount();

	/**
	* Add a member.
	* 
	* @param name -
	* @param _memberAddress -
	**/
	java.util.concurrent.CompletableFuture<Void> addMember(String name,org.adridadou.ethereum.propeller.values.EthAddress _memberAddress);
	/**
	* set the memberstate to inactive
	* 
	* @param id -
	**/
	java.util.concurrent.CompletableFuture<Void> unregisterMember(Integer id);
	/**
	* Check if the given adress is a registed active member.
	* 
	* @param _memberAdress -
	* @return
	*  -
	**/
	Boolean isActiveMember(org.adridadou.ethereum.propeller.values.EthAddress _memberAdress);
	/**
	* Changes the address of the member.
	* 
	* @param id -
	* @param _newMemberAddress -
	**/
	java.util.concurrent.CompletableFuture<Void> changeMemberAddress(Integer id,org.adridadou.ethereum.propeller.values.EthAddress _newMemberAddress);
	
	ReturnGetMemberData_string_uint getMemberData(org.adridadou.ethereum.propeller.values.EthAddress _address);
	
	java.util.concurrent.CompletableFuture<Void> publishMemberEvent(org.adridadou.ethereum.propeller.values.EthAddress mAddress,Integer eventType);

	//Start of user code additional_methods

	//End of user code
}
