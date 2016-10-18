/*
*
*
*/

/*
* (c) Urs Zeidler 2016
* Contains the member contracts.
*/
import "./basics.sol";

/*
* Holds the members and their states.
* Also the contract to manage these member states.
* The registry is a Manageable contract so the writing methods can only accessed by a registered manager.
*/
contract MemberRegistry is Manageable {
    enum MemberState { deleted,inactive,active }
    enum EventType { memberStateChanged,accreditation,functionChange }
    /*
    * A member can be active, inactive or deleted.
    * It has an id assigned to it and a changeable address.
    */
    struct Member {
    	string name;
    	uint id;
    	address member;
    	MemberState state;
    }

	uint public partyMemberCount;
	uint public activeMemberCount;
	mapping (uint=>Member)public partyMembers;
	mapping (address=>Member)public memberAddress;
	// Start of user code MemberRegistry.attributes
	//TODO: implement
	// End of user code
	
	
	event MemberEvent(address mAddress,EventType eType,uint id,string name,MemberState memberState);
	
	
	/*
	* Add a member.
	* 
	* name -
	* _memberAddress -
	*/
	function addMember(string name,address _memberAddress) public  onlyManager()  {
		 if(memberAddress[_memberAddress].id != 0) throw;
		 partyMembers[partyMemberCount].id=partyMemberCount;
		 partyMembers[partyMemberCount].member= _memberAddress;
		 partyMembers[partyMemberCount].state = MemberState.active;
		 partyMembers[partyMemberCount].name = name;
		 memberAddress[_memberAddress] = partyMembers[partyMemberCount];
		 partyMemberCount++;
		 activeMemberCount++;			
		
		//Start of user code MemberRegistry.function.addMember_string_address
		Member m = memberAddress[_memberAddress]; 
		MemberEvent(_memberAddress,EventType.memberStateChanged,m.id,m.name,m.state);
		//End of user code
	}
	
	
	/*
	* set the memberstate to inactive
	* 
	* id -
	*/
	function unregisterMember(uint id) public  onlyManager()  {
		 if(id>partyMemberCount) throw;
		 MemberState ms = partyMembers[id].state;
		 if(ms==MemberState.active){
		 	partyMembers[id].state = MemberState.inactive;
		 	activeMemberCount--;
		 }
		
		//Start of user code MemberRegistry.function.unregisterMember_uint
		Member m = partyMembers[id];
		MemberEvent(m.member,EventType.memberStateChanged,m.id,m.name,m.state);
		//End of user code
	}
	
	
	/*
	* get the number of active members
	* returns
	*  -
	*/
	function getMemberCount() public   constant returns (uint ) {
		//Start of user code MemberRegistry.function.getMemberCount
		return activeMemberCount;
		//End of user code
	}
	
	
	/*
	* Check if the given adress is a registed active member.
	* 
	* _memberAdress -
	* returns
	*  -
	*/
	function isActiveMember(address _memberAdress) public   constant returns (bool ) {
		 return memberAddress[_memberAdress].state == MemberState.active;
		
		//Start of user code MemberRegistry.function.isActiveMember_address
		//TODO: implement
		//End of user code
	}
	
	
	/*
	* Changes the address of the member.
	* 
	* id -
	* _newMemberAddress -
	*/
	function changeMemberAddress(uint id,address _newMemberAddress) public  onlyManager()  {
		 if(id>partyMemberCount) throw;
		 if(partyMembers[id].state == MemberState.active){
		 	partyMembers[id].member = _newMemberAddress;
		 	memberAddress[_newMemberAddress] = partyMembers[id];
		 }
		
		//Start of user code MemberRegistry.function.changeMemberAddress_uint_address
		Member m = partyMembers[id];
		MemberEvent(m.member,EventType.memberStateChanged,m.id,m.name,m.state);
		//End of user code
	}
	
	
	
	function getMemberData(address _address) public   constant returns (string name,uint id) {
		//Start of user code MemberRegistry.function.getMemberData_address
		//TODO: implement
		//End of user code
	}
	
	
	
	function publishMemberEvent(address mAddress,uint eventType) public   {
		//Start of user code MemberRegistry.function.publishMemberEvent_address_uint
		Member m = memberAddress[mAddress]; 
		MemberEvent(mAddress,EventType(eventType),m.id,m.name,m.state);
		//End of user code
	}
	
	// Start of user code MemberRegistry.operations
	//TODO: implement
	// End of user code
}

/*
* The basic class to provide access to the member registry.
*/
contract MemberAware {

	MemberRegistry public memberRegistry;
	// Start of user code MemberAware.attributes
	//TODO: implement
	// End of user code
	
	modifier onlyMember
	{
	    if(!isMember(msg.sender)) throw;
	    _
	}
	
	
	
	function isMember(address _address) internal   constant returns (bool ) {
		 return memberRegistry.isActiveMember(_address);
		
		//Start of user code MemberAware.function.isMember_address
		//TODO: implement
		//End of user code
	}
	
	// setMemberRegistry
	function setMemberRegistry (address aMemberRegistry) {
		memberRegistry = MemberRegistry(aMemberRegistry);
	}
	
	// Start of user code MemberAware.operations
	//TODO: implement
	// End of user code
}

