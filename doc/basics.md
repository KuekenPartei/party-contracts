# basics

Collection of basic functionalities.


* [Owned](#contract-owned)

* [Manageable](#contract-manageable)

* [Multiowned](#contract-multiowned)


## contract: Owned

    overview:
	function getOwner() public  onlyOwner returns (address result)
	function changeOwner(address newOwner) public  onlyOwner 
	function kill() public  onlyOwner 






#### Owned properties

name|type|visiblity|delegate|doc
----|----|----|----|----
owner|address|public||
-

#### Owned.getOwner() public  onlyOwner returns (address result)


name|type|direction|doc
----|----|----|----
result|address|return|

#### Owned.changeOwner(address newOwner) public  onlyOwner 


name|type|direction|doc
----|----|----|----
newOwner|address|in|

#### Owned.kill() public  onlyOwner 




## contract: Manageable

    overview:
	constructor Manageable()
	function canAccess() internal  returns (bool )
	function addManager(address _newManagerAddress) public  onlyManager 
	function removeManager(address _managerAddress) public  onlyManager 
	function isManager(address _managerAddress) public   constant returns (bool )



A basic class to introduce an access control.
All registered manager can access.
A registered manager is an address mapped with true.




#### Manageable properties

name|type|visiblity|delegate|doc
----|----|----|----|----
mangerCount|uint|public||

#### Manageable mappings

name|type|mapsTo|visiblity|doc
----|----|----|----|----
managers|address|bool|public|-

#### Manageable.Manageable() public  



#### Manageable.canAccess() internal  returns (bool )


name|type|direction|doc
----|----|----|----
|bool|return|

#### Manageable.addManager(address _newManagerAddress) public  onlyManager 


name|type|direction|doc
----|----|----|----
_newManagerAddress|address|in|

#### Manageable.removeManager(address _managerAddress) public  onlyManager 


name|type|direction|doc
----|----|----|----
_managerAddress|address|in|The address of the manager to work with

#### Manageable.isManager(address _managerAddress) public   constant returns (bool )


name|type|direction|doc
----|----|----|----
_managerAddress|address|in|The address of the manager to work with
|bool|return|

#### event ManagerChanged


name|type|indexed|doc
----|----|----|----
_state|uint||0 for add, 1 for remove
_address|address||
_managerCount|uint||


## contract: Multiowned

    overview:
	function Multiowned(address[] _owners,uint _required) public  
	function revoke(bytes32 _operation) external  
	function changeOwner(address _from,address _to) external  onlyManyOwners(sha3(msg.data)) 
	function addOwner(address _owner) external  onlyManyOwners(sha3(msg.data)) 
	function removeOwner(address _owner) external  onlyManyOwners(sha3(msg.data)) 
	function changeRequirement(uint _newRequired) external  onlyManyOwners(sha3(msg.data)) 
	function isOwner(address _addr) public  returns (bool )
	function hasConfirmed(bytes32 _operation,address _owner) public   constant returns (bool )
	function confirmAndCheck(bytes32 _operation) internal  returns (bool )
	function reorganizeOwners() private  
	function clearPending() internal  





### structs:

PendingState


#### PendingState properties

name|type|visiblity|delegate|doc
----|----|----|----|----
yetNeeded|uint|public||
ownersDone|uint|public||
index|uint|public||



#### Multiowned properties

name|type|visiblity|delegate|doc
----|----|----|----|----
m_required|uint|public||The number of owners that must confirm the same operation before it is run.
m_numOwners|uint|public||pointer used to find a free slot in m_owners
m_owners|uint|public||
c_maxOwners|uint|public||
m_pendingIndex|bytes32|public||

#### Multiowned mappings

name|type|mapsTo|visiblity|doc
----|----|----|----|----
m_ownerIndex|uint|uint|public|index on the list of owners to allow reverse lookup-

#### Multiowned.Multiowned(address[] _owners,uint _required) public  

Constructor is given number of sigs required to do protected "onlymanyowners" transactions
as well as the selection of addresses capable of confirming them.


name|type|direction|doc
----|----|----|----
_owners|address|in|
_required|uint|in|

#### Multiowned.revoke(bytes32 _operation) external  

Revokes a prior confirmation of the given operation.


name|type|direction|doc
----|----|----|----
_operation|bytes32|in|

#### Multiowned.changeOwner(address _from,address _to) external  onlyManyOwners(sha3(msg.data)) 

Replaces an owner `_from` with another `_to`.


name|type|direction|doc
----|----|----|----
_from|address|in|
_to|address|in|

#### Multiowned.addOwner(address _owner) external  onlyManyOwners(sha3(msg.data)) 

Replaces an owner `_from` with another `_to`.


name|type|direction|doc
----|----|----|----
_owner|address|in|

#### Multiowned.removeOwner(address _owner) external  onlyManyOwners(sha3(msg.data)) 


name|type|direction|doc
----|----|----|----
_owner|address|in|

#### Multiowned.changeRequirement(uint _newRequired) external  onlyManyOwners(sha3(msg.data)) 


name|type|direction|doc
----|----|----|----
_newRequired|uint|in|

#### Multiowned.isOwner(address _addr) public  returns (bool )


name|type|direction|doc
----|----|----|----
_addr|address|in|
|bool|return|

#### Multiowned.hasConfirmed(bytes32 _operation,address _owner) public   constant returns (bool )


name|type|direction|doc
----|----|----|----
_operation|bytes32|in|
_owner|address|in|
|bool|return|

#### Multiowned.confirmAndCheck(bytes32 _operation) internal  returns (bool )


name|type|direction|doc
----|----|----|----
_operation|bytes32|in|
|bool|return|

#### Multiowned.reorganizeOwners() private  



#### Multiowned.clearPending() internal  



#### event Confirmation


name|type|indexed|doc
----|----|----|----
owner|address||
operation|bytes32||

#### event Revoke


name|type|indexed|doc
----|----|----|----
owner|address||
operation|bytes32||

#### event OwnerChanged


name|type|indexed|doc
----|----|----|----
oldOwner|address||
newOwner|address||

#### event OwnerAdded


name|type|indexed|doc
----|----|----|----
newOwner|address||

#### event OwnerRemoved


name|type|indexed|doc
----|----|----|----
oldOwner|address||

#### event RequirementChanged


name|type|indexed|doc
----|----|----|----
newRequirement|uint||


