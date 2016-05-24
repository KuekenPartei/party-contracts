# party


* [Organ](#contract-organ)
* [Party](#contract-party)
* [KUEKeNParty](#contract-kuekenparty)
* [FoundationConference](#contract-foundationconference)

## contract: Organ

    overview:
	function changeMember(uint _id,address _address) public  onlyManager() 
	function createFunction(string _functionName,string _constittiutionHash) public  onlyManager() 
	function initalizeOrgan() public  
	function publishMessage(string message) public  

inherites: [MemberAware](#contract-memberaware),[Manageable](#contract-manageable)

An organ is part of the party, defined in the constitution.
It is populated by functions party members.



### structs:

OrganFunction
The function definition.
A function is defined in the constitution of the party.



#### OrganFunction properties

name|type|visiblity|delegate|doc
----|----|----|----|----
currentMember|address|public||
functionName|string|public||
id|uint|public||
constitutionHash|string|public||
lastMemberChanged|uint|public||
lastConstitutionHashChanged|uint|public||
publisher|ShortBlog|public||



#### Organ properties

name|type|visiblity|delegate|doc
----|----|----|----|----
organName|string|public||
lastFunctionId|uint|public||
blogRegistry|BlogRegistry|public||
isActive|bool|public||
organBlog|ShortBlog|public||

#### Organ mappings

name|type|mapsTo|visiblity|doc
----|----|----|----|----
organFunctions|uint|OrganFunction|public|-

#### Organ.changeMember(uint _id,address _address) public  onlyManager() 

Change the member of the function.


name|type|direction|doc
----|----|----|----
_id|uint|in|
_address|address|in|

#### Organ.createFunction(string _functionName,string _constittiutionHash) public  onlyManager() 

Create a function of this organ.


name|type|direction|doc
----|----|----|----
_functionName|string|in|The name of the organ function.
_constittiutionHash|string|in|

#### Organ.initalizeOrgan() public  



#### Organ.publishMessage(string message) public  


name|type|direction|doc
----|----|----|----
message|string|in|


## contract: Party

    overview:
	function Party() public  
	function createOrgan(string organName) public  

inherites: [Manageable](#contract-manageable)

A basic party contract.




#### Party properties

name|type|visiblity|delegate|doc
----|----|----|----|----
memberRegistry|MemberRegistry|public||
constitutionHash|string|public||
organCount|uint|public||
blogregistry|BlogRegistry|public||
-

#### Party.Party() public  



#### Party.createOrgan(string organName) public  


name|type|direction|doc
----|----|----|----
organName|string|in|


## contract: KUEKeNParty

    overview:
	function KUEKeNParty() public  
	function boostrapParty(address fc,address br) external  onlyManager() 

inherites: [Party](#contract-party)

An actual party.
The KUEKen party.



-

#### KUEKeNParty.KUEKeNParty() public  



#### KUEKeNParty.boostrapParty(address fc,address br) external  onlyManager() 


name|type|direction|doc
----|----|----|----
fc|address|in|
br|address|in|


## contract: FoundationConference

    overview:

inherites: [Organ](#contract-organ)



-


