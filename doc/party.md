# party


* [Organ](#contract-organ)
* [Party](#contract-party)
* [KUEKeNParty](#contract-kuekenparty)

## contract: Organ

    overview:
	function changeMember(uint _id,address _address) public  onlyManager() 
	function createFunction(string _functionName) public  onlyManager() 

inherites: [Manageable](#contract-manageable),[MemberAware](#contract-memberaware)



### structs:

OrganFunction


#### OrganFunction properties

name|type|visiblity|delegate|doc
----|----|----|----|----
currentMember|address|public||
functionName|string|public||
id|uint|public||



#### Organ properties

name|type|visiblity|delegate|doc
----|----|----|----|----
organName|string|public||
lastFunctionId|uint|public||

#### Organ mappings

name|type|mapsTo|visiblity|doc
----|----|----|----|----
organMembers|uint|OrganFunction|public|-

#### Organ.changeMember(uint _id,address _address) public  onlyManager() 


name|type|direction|doc
----|----|----|----
_id|uint|in|
_address|address|in|

#### Organ.createFunction(string _functionName) public  onlyManager() 


name|type|direction|doc
----|----|----|----
_functionName|string|in|The name of the organ function.


## contract: Party

    overview:
	function Party() public  

inherites: [Manageable](#contract-manageable)




#### Party properties

name|type|visiblity|delegate|doc
----|----|----|----|----
organ|Organ|public||
memberRegistry|MemberRegistry|public||
-

#### Party.Party() public  




## contract: KUEKeNParty

    overview:
	function KUEKeNParty() public  

inherites: [Party](#contract-party)



-

#### KUEKeNParty.KUEKeNParty() public  




