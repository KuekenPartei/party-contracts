# basics

Collection of basic functionalities.


* [Owned](#contract-owned)

* [Manageable](#contract-manageable)


## contract: Owned

    overview:
	function getOwner() public  onlyOwner() returns (address result)
	function changeOwner(address newOwner) public  onlyOwner() 
	function kill() public  onlyOwner() 






#### Owned properties

name|type|visiblity|delegate|doc
----|----|----|----|----
owner|address|protected||
-

#### Owned.getOwner() public  onlyOwner() returns (address result)


name|type|direction|doc
----|----|----|----
result|address|return|

#### Owned.changeOwner(address newOwner) public  onlyOwner() 


name|type|direction|doc
----|----|----|----
newOwner|address|in|

#### Owned.kill() public  onlyOwner() 




## contract: Manageable

    overview:
	function canAccess() internal  returns (bool )
	function addManager(address _newManagerAddress) public  onlyManager 
	function removeManager(address _managerAddress) public  onlyManager 



A basic class to introduce an access control.
All registered manager can access.
A registered manager is an address mapped with true.




#### Manageable mappings

name|type|mapsTo|visiblity|doc
----|----|----|----|----
managers|address|bool|public|-

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
_managerAddress|address|in|


