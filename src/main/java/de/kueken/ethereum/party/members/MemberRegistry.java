package de.kueken.ethereum.party.members;

import java.util.concurrent.CompletableFuture;
import org.adridadou.ethereum.values.EthAddress;
import de.kueken.ethereum.party.basics.*;

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
	
	Boolean managers(String key);

	/**
	* Check if the given adress is a registed active member.
	* 
	* @param _memberAdress -
	* @return
	*  -
	**/
	Boolean isMember(String _memberAdress);

	
	String getMemberAddress(Integer id);

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
	void addMember(String name,String _memberAddress);
	/**
	* set the memberstate to inactive
	* 
	* @param id -
	**/
	void unregisterMember(Integer id);
	/**
	* Check if the given adress is a registed active member.
	* 
	* @param _memberAdress -
	* @return
	*  -
	**/
	Boolean isActiveMember(String _memberAdress);
	/**
	* Changes the address of the member.
	* 
	* @param id -
	* @param _newMemberAddress -
	**/
	void changeMemberAddress(Integer id,String _newMemberAddress);
	
	ReturnGetMemberData_string_uint getMemberData(String _address);
	
	void publishMemberEvent(String mAddress,Integer eventType);

	//Start of user code additional_methods

	//End of user code
}
