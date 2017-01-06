# party


* [Organ](#contract-organ)

* [Party](#contract-party)

* [KUEKeNParty](#contract-kuekenparty)

* [Conference](#contract-conference)

* [FoundationConference](#contract-foundationconference)

* [OrganFunction](#contract-organfunction)


## contract: Organ

    overview:
	abstract function publishMessage(string message,string hash,string er) public  
	function changeMember(uint _id,address _address) public  onlyManager() 
	function createFunction(string _functionName,string _constittiutionHash) public  onlyManager() 
	function initalizeOrgan() public  
	function publishFunctionMessage(uint id,string message,string hash,string er) public  
	function createBallot(string name,bytes32[] proposalNames) public  returns (uint )
	function getLastBallot() public   constant returns (address )
	function getOrganBlog() public   constant returns (address )
	function addOrganFunction(address _of,string _name) public  
	function getOrganFunction(uint _id) public   constant returns (OrganFunction )

inherites: [Manageable](basics#contract-manageable)
,[MemberAware](members#contract-memberaware)


An organ is part of the party, defined in the constitution.
It is populated by functions party members.




#### Organ properties

name|type|visiblity|delegate|doc
----|----|----|----|----
organName|string|public||
lastFunctionId|uint|public||
blogRegistry|BlogRegistry|public||
isActive|bool|public||
organBlog|ShortBlog|protected||
ballotCount|uint|public||
-

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

#### Organ.getLastBallot() public   constant returns (address )


name|type|direction|doc
----|----|----|----
|address|return|

#### Organ.getOrganBlog() public   constant returns (address )


name|type|direction|doc
----|----|----|----
|address|return|

#### Organ.addOrganFunction(address _of,string _name) public  


name|type|direction|doc
----|----|----|----
_of|address|in|
_name|string|in|

#### Organ.getOrganFunction(uint _id) public   constant returns (OrganFunction )


name|type|direction|doc
----|----|----|----
_id|uint|in|
|OrganFunction|return|

#### event FunctionMemberChange


name|type|indexed|doc
----|----|----|----
oldMember|address||
functionId|uint||
newMember|address||

#### event FunctionChange


name|type|indexed|doc
----|----|----|----
_type|uint||
_function|OrganFunction||


## contract: Party

    overview:
	constructor Party(string _name)
	function createOrgan(string organName) public  
	function addOrgan(address _organ) public  onlyManager() 
	function addSubDivision(address _subDivision) public  
	function removeSubDivision(uint _divisionId) public  

inherites: [Manageable](basics#contract-manageable)


A basic party contract.




#### Party properties

name|type|visiblity|delegate|doc
----|----|----|----|----
name|string|public||
memberRegistry|MemberRegistry|public||
constitutionHash|string|public||
organCount|uint|public||
blogregistry|BlogRegistry|public||
parent|Party|public||
subDivisionCount|uint|public||
-

#### Party.Party(string _name) public  

Construct a new party or division.


name|type|doc
----|----|----
_name|string|The name of the party or division.

#### Party.createOrgan(string organName) public  


name|type|direction|doc
----|----|----|----
organName|string|in|

#### Party.addOrgan(address _organ) public  onlyManager() 

Adds an organ to the party.


name|type|direction|doc
----|----|----|----
_organ|address|in|

#### Party.addSubDivision(address _subDivision) public  

Add a subdivision of this party, the contrains are:
the party must be a mananger of the subdivision
the blogregistry must be the same
the member regstry must be the same


name|type|direction|doc
----|----|----|----
_subDivision|address|in|

#### Party.removeSubDivision(uint _divisionId) public  


name|type|direction|doc
----|----|----|----
_divisionId|uint|in|

#### event ConstiutionChange



#### event OrganChanged


name|type|indexed|doc
----|----|----|----
_organ|Organ||
_changeType|uint||

#### event DivisionChanged


name|type|indexed|doc
----|----|----|----
divisionAddress|address||
changer|address||
state|uint||


## contract: KUEKeNParty

    overview:
	constructor KUEKeNParty(string _name)
	function boostrapParty(address fc,address br) public  onlyManager() 

inherites: [Party](#contract-party)


An actual party.
The KUEKen party.



-

#### KUEKeNParty.KUEKeNParty(string _name) public  


name|type|doc
----|----|----
_name|string|The name of the party or division.

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


## contract: OrganFunction

    overview:
	constructor OrganFunction(string _name,string _ch)
	abstract function publishMessage(string message,string hash,string er) public  
	function getFunctioName() public   constant returns (string )

inherites: [Manageable](basics#contract-manageable)


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
-

#### OrganFunction.OrganFunction(string _name,string _ch) public  


name|type|doc
----|----|----
_name|string|
_ch|string|

#### OrganFunction.getFunctioName() public   constant returns (string )


name|type|direction|doc
----|----|----|----
|string|return|


