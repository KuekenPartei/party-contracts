# party


* [Organ](#contract-organ)

* [Party](#contract-party)

* [KUEKeNParty](#contract-kuekenparty)

* [Conference](#contract-conference)

* [FoundationConference](#contract-foundationconference)


## contract: Organ

    overview:
	abstract function publishMessage(string message,string hash,string er) public  
	function changeMember(uint _id,address _address) public  onlyManager() 
	function createFunction(string _functionName,string _constittiutionHash) public  onlyManager() 
	function initalizeOrgan() public  
	function publishFunctionMessage(uint id,string message,string hash,string er) public  
	function createBallot(string name,bytes32[] proposalNames) public  returns (uint )
	function getFunctionBlogAddress(uint id) public   constant returns (address )
	function getLastBallot() public   constant returns (address )
	function getOrganBlog() public   constant returns (address )

inherites: [Manageable](basics#contract-manageable)
,[MemberAware](members#contract-memberaware)


An organ is part of the party, defined in the constitution.
It is populated by functions party members.



### structs:

OrganFunction
The function definition.
A function is defined in the constitution of the party.
Normaly it is associated with a party member.



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
organBlog|ShortBlog|protected||
ballotCount|uint|public||

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



#### Organ.publishFunctionMessage(uint id,string message,string hash,string er) public  

Publish a message at a function blog.


name|type|direction|doc
----|----|----|----
id|uint|in|
message|string|in|
hash|string|in|
er|string|in|

#### Organ.createBallot(string name,bytes32[] proposalNames) public  returns (uint )

Creates a new ballot for this organ.


name|type|direction|doc
----|----|----|----
name|string|in|
proposalNames|bytes32|in|
|uint|return|

#### Organ.getFunctionBlogAddress(uint id) public   constant returns (address )

Get the address of the organ function blog.


name|type|direction|doc
----|----|----|----
id|uint|in|The function id.
|address|return|

#### Organ.getLastBallot() public   constant returns (address )


name|type|direction|doc
----|----|----|----
|address|return|

#### Organ.getOrganBlog() public   constant returns (address )


name|type|direction|doc
----|----|----|----
|address|return|

#### event FunctionMemberChange


name|type|indexed|doc
----|----|----|----
oldMember|address||
functionId|uint||
newMember|address||


## contract: Party

    overview:
	function Party() public  
	function createOrgan(string organName) public  

inherites: [Manageable](basics#contract-manageable)


A basic party contract.




#### Party properties

name|type|visiblity|delegate|doc
----|----|----|----|----
memberRegistry|MemberRegistry|protected||
constitutionHash|string|public||
organCount|uint|public||
blogregistry|BlogRegistry|public||
-

#### Party.Party() public  



#### Party.createOrgan(string organName) public  


name|type|direction|doc
----|----|----|----
organName|string|in|

#### event ConstiutionChange




## contract: KUEKeNParty

    overview:
	function KUEKeNParty() public  
	function boostrapParty(address fc,address br) public  onlyManager() 

inherites: [Party](#contract-party)


An actual party.
The KUEKen party.



-

#### KUEKeNParty.KUEKeNParty() public  



#### KUEKeNParty.boostrapParty(address fc,address br) public  onlyManager() 


name|type|direction|doc
----|----|----|----
fc|address|in|
br|address|in|


## contract: Conference

    overview:
	function accreditationMember(address _address) public  

inherites: [Organ](#contract-organ)


A conference is a meeting of the party members.




#### Conference properties

name|type|visiblity|delegate|doc
----|----|----|----|----
accreditation|address|private||
accreditatedMembers|uint|public||
date|uint|public||
-

#### Conference.accreditationMember(address _address) public  


name|type|direction|doc
----|----|----|----
_address|address|in|

#### event MemberAccreditated


name|type|indexed|doc
----|----|----|----
memberId|uint||
memberName|string||
memberAddress|address||


## contract: FoundationConference

    overview:

inherites: [Conference](#contract-conference)


Will found the party.
In the first and only session.



-


