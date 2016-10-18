# members

(c) Urs Zeidler 2016
Contains the member contracts.


* [MemberRegistry](#contract-memberregistry)

* [MemberAware](#contract-memberaware)


## contract: MemberRegistry

    overview:
	function addMember(string name,address _memberAddress) public  onlyManager() 
	function unregisterMember(uint id) public  onlyManager() 
	function getMemberCount() public   constant returns (uint )
	function isActiveMember(address _memberAdress) public   constant returns (bool )
	function changeMemberAddress(uint id,address _newMemberAddress) public  onlyManager() 
	function getMemberData(address _address) public   constant returns (string name,uint id)
	function publishMemberEvent(address mAddress,uint eventType) public  

inherites: [Manageable](basics#contract-manageable)


Holds the members and their states.
Also the contract to manage these member states.
The registry is a Manageable contract so the writing methods can only accessed by a registered manager.


### MemberRegistry enums: EventType


name|doc
----|----|----
memberStateChanged|
accreditation|
functionChange|
### MemberRegistry enums: MemberState


name|doc
----|----|----
deleted|
inactive|
active|

### structs:


#### MemberRegistry properties

name|type|visiblity|delegate|doc
----|----|----|----|----
partyMemberCount|uint|public||
activeMemberCount|uint|public||

#### MemberRegistry mappings

name|type|mapsTo|visiblity|doc
----|----|----|----|----
partyMembers|uint|Member|public|memberAddress|address|Member|public|-

#### MemberRegistry.addMember(string name,address _memberAddress) public  onlyManager() 

Add a member.


name|type|direction|doc
----|----|----|----
name|string|in|
_memberAddress|address|in|

#### MemberRegistry.unregisterMember(uint id) public  onlyManager() 

set the memberstate to inactive


name|type|direction|doc
----|----|----|----
id|uint|in|

#### MemberRegistry.getMemberCount() public   constant returns (uint )

get the number of active members


name|type|direction|doc
----|----|----|----
|uint|return|

#### MemberRegistry.isActiveMember(address _memberAdress) public   constant returns (bool )

Check if the given adress is a registed active member.


name|type|direction|doc
----|----|----|----
_memberAdress|address|in|
|bool|return|

#### MemberRegistry.changeMemberAddress(uint id,address _newMemberAddress) public  onlyManager() 

Changes the address of the member.


name|type|direction|doc
----|----|----|----
id|uint|in|
_newMemberAddress|address|in|

#### MemberRegistry.getMemberData(address _address) public   constant returns (string name,uint id)


name|type|direction|doc
----|----|----|----
_address|address|in|
name|string|return|
id|uint|return|

#### MemberRegistry.publishMemberEvent(address mAddress,uint eventType) public  


name|type|direction|doc
----|----|----|----
mAddress|address|in|
eventType|uint|in|

#### event MemberEvent


name|type|indexed|doc
----|----|----|----
mAddress|address||
eType|EventType||
id|uint||
name|string||
memberState|MemberState||


## contract: MemberAware

    overview:
	function isMember(address _address) internal   constant returns (bool )



The basic class to provide access to the member registry.




#### MemberAware properties

name|type|visiblity|delegate|doc
----|----|----|----|----
memberRegistry|MemberRegistry|public||
-

#### MemberAware.isMember(address _address) internal   constant returns (bool )


name|type|direction|doc
----|----|----|----
|bool|return|
_address|address|in|


