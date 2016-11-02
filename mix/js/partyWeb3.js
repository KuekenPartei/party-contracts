/**
*
*(c) 2016 KUEKeN
* Urs Zeidler
*
**/
// contractVariable for Organ
var OrganContract = web3.eth.contract([
{"constant":true,"inputs":[],"name":"memberRegistry","outputs":[{"name":"","type":"address"}],"type":"function"},
{"constant":true,"inputs":[],"name":"organName","outputs":[{"name":"","type":"string"}],"type":"function"},
{"constant":true,"inputs":[],"name":"lastFunctionId","outputs":[{"name":"","type":"uint256"}],"type":"function"},
{"constant":true,"inputs":[],"name":"mangerCount","outputs":[{"name":"","type":"uint256"}],"type":"function"},
{"constant":true,"inputs":[],"name":"blogRegistry","outputs":[{"name":"","type":"address"}],"type":"function"},
{"constant":true,"inputs":[],"name":"isActive","outputs":[{"name":"","type":"bool"}],"type":"function"},
{"constant":true,"inputs":[],"name":"ballotCount","outputs":[{"name":"","type":"uint256"}],"type":"function"},
{"constant": true,"inputs": [{"name": "","type": "address"}],"name": "managers","outputs": [
{ "name": "", "type": "bool"}
],"type": "function"	},
{"constant": true,"inputs": [{"name": "","type": "uint256"}],"name": "ballots","outputs": [
{ "name": "", "type": "address"}
],"type": "function"	},
{"constant": true,"inputs": [{"name": "","type": "uint256"}],"name": "organFunctions","outputs": [
{ "name": "", "type": "address"}
],"type": "function"	},
{ "constant": true,
    "inputs": [{"name": "_id","type": "uint256"}],    
    "name": "getOrganFunction",
    "outputs": [{"name": "","type": "address"}],
    "type": "function" }
,{ "constant": false,
    "inputs": [{"name": "_newManagerAddress","type": "address"}],    
    "name": "addManager",
    "outputs": [],
    "type": "function" }
,{ "constant": false,
    "inputs": [{"name": "_id","type": "uint256"},{"name": "_address","type": "address"}],    
    "name": "changeMember",
    "outputs": [],
    "type": "function" }
,{ "constant": false,
    "inputs": [{"name": "_managerAddress","type": "address"}],    
    "name": "removeManager",
    "outputs": [],
    "type": "function" }
,{ "constant": false,
    "inputs": [{"name": "_functionName","type": "string"},{"name": "_constittiutionHash","type": "string"}],    
    "name": "createFunction",
    "outputs": [],
    "type": "function" }
,{ "constant": true,
    "inputs": [{"name": "_managerAddress","type": "address"}],    
    "name": "isManager",
    "outputs": [{"name": "","type": "bool"}],
    "type": "function" }
,{ "constant": false,
    "inputs": [],    
    "name": "initalizeOrgan",
    "outputs": [],
    "type": "function" }
,{ "constant": false,
    "inputs": [{"name": "id","type": "uint256"},{"name": "message","type": "string"},{"name": "hash","type": "string"},{"name": "er","type": "string"}],    
    "name": "publishFunctionMessage",
    "outputs": [],
    "type": "function" }
,{ "constant": false,
    "inputs": [{"name": "name","type": "string"},{"name": "proposalNames","type": "bytes32"}],    
    "name": "createBallot",
    "outputs": [{"name": "","type": "uint256"}],
    "type": "function" }
,{ "constant": true,
    "inputs": [],    
    "name": "getLastBallot",
    "outputs": [{"name": "","type": "address"}],
    "type": "function" }
,{ "constant": true,
    "inputs": [],    
    "name": "getOrganBlog",
    "outputs": [{"name": "","type": "address"}],
    "type": "function" }
,{ "constant": false,
    "inputs": [{"name": "_of","type": "address"},{"name": "_name","type": "string"}],    
    "name": "addOrganFunction",
    "outputs": [],
    "type": "function" }
,{ "constant": false,
    "inputs": [{"name": "message","type": "string"},{"name": "hash","type": "string"},{"name": "er","type": "string"}],    
    "name": "publishMessage",
    "outputs": [],
    "type": "function" }
,
  { "anonymous": false,
    "inputs": 
	[
		{"indexed": false,
		 "name": "oldMember",
         "type": "address"}
,		{"indexed": false,
		 "name": "functionId",
         "type": "uint256"}
,		{"indexed": false,
		 "name": "newMember",
         "type": "address"}
	],    
    "name": "FunctionMemberChange",
    "type": "event"  }
,  { "anonymous": false,
    "inputs": 
	[
		{"indexed": false,
		 "name": "_type",
         "type": "uint256"}
,		{"indexed": false,
		 "name": "_function",
         "type": "address"}
	],    
    "name": "FunctionChange",
    "type": "event"  }
  ,{
    "constant": false,
    "inputs": [{"name": "aMemberRegistry","type": "address"}],    
    "name": "setMemberRegistry",
    "outputs": [],
    "type": "function"
  }

  ,{
    "constant": true,
    "inputs": [],    
    "name": "getOrganName",
    "outputs": [{"name": "organName","type": "string"}],
    "type": "function"
  }
  ,{
    "constant": false,
    "inputs": [{"name": "aOrganName","type": "string"}],    
    "name": "setOrganName",
    "outputs": [],
    "type": "function"
  }

  ,{
    "constant": false,
    "inputs": [{"name": "aBlogRegistry","type": "address"}],    
    "name": "setBlogRegistry",
    "outputs": [],
    "type": "function"
  }

]);   
// contractVariable for Party
var PartyContract = web3.eth.contract([
{"constant":true,"inputs":[],"name":"mangerCount","outputs":[{"name":"","type":"uint256"}],"type":"function"},
{"constant":true,"inputs":[],"name":"constitutionHash","outputs":[{"name":"","type":"string"}],"type":"function"},
{"constant":true,"inputs":[],"name":"organCount","outputs":[{"name":"","type":"uint256"}],"type":"function"},
{"constant": true,"inputs": [{"name": "","type": "address"}],"name": "managers","outputs": [
{ "name": "", "type": "bool"}
],"type": "function"	},
{"constant": true,"inputs": [{"name": "","type": "uint256"}],"name": "organs","outputs": [
{ "name": "", "type": "address"}
],"type": "function"	},
{ "constant": false,
    "inputs": [{"name": "_newManagerAddress","type": "address"}],    
    "name": "addManager",
    "outputs": [],
    "type": "function" }
,{ "constant": false,
    "inputs": [{"name": "_managerAddress","type": "address"}],    
    "name": "removeManager",
    "outputs": [],
    "type": "function" }
,{ "constant": false,
    "inputs": [{"name": "organName","type": "string"}],    
    "name": "createOrgan",
    "outputs": [],
    "type": "function" }
,{ "constant": true,
    "inputs": [{"name": "_managerAddress","type": "address"}],    
    "name": "isManager",
    "outputs": [{"name": "","type": "bool"}],
    "type": "function" }
,{ "constant": false,
    "inputs": [{"name": "_organ","type": "address"}],    
    "name": "addOrgan",
    "outputs": [],
    "type": "function" }
,
  { "anonymous": false,
    "inputs": 
	[
	],    
    "name": "ConstiutionChange",
    "type": "event"  }
,  { "anonymous": false,
    "inputs": 
	[
		{"indexed": false,
		 "name": "_organ",
         "type": "address"}
,		{"indexed": false,
		 "name": "_changeType",
         "type": "uint256"}
	],    
    "name": "OrganChanged",
    "type": "event"  }
  ,{
    "constant": true,
    "inputs": [],    
    "name": "getMemberRegistry",
    "outputs": [{"name": "memberRegistry","type": "address"}],
    "type": "function"
  }
  ,{
    "constant": false,
    "inputs": [{"name": "aMemberRegistry","type": "address"}],    
    "name": "setMemberRegistry",
    "outputs": [],
    "type": "function"
  }

  ,{
    "constant": false,
    "inputs": [{"name": "aBlogregistry","type": "address"}],    
    "name": "setBlogregistry",
    "outputs": [],
    "type": "function"
  }

]);   
// contractVariable for KUEKeNParty
var KUEKeNPartyContract = web3.eth.contract([
{"constant":true,"inputs":[],"name":"mangerCount","outputs":[{"name":"","type":"uint256"}],"type":"function"},
{"constant":true,"inputs":[],"name":"constitutionHash","outputs":[{"name":"","type":"string"}],"type":"function"},
{"constant":true,"inputs":[],"name":"organCount","outputs":[{"name":"","type":"uint256"}],"type":"function"},
{"constant": true,"inputs": [{"name": "","type": "address"}],"name": "managers","outputs": [
{ "name": "", "type": "bool"}
],"type": "function"	},
{"constant": true,"inputs": [{"name": "","type": "uint256"}],"name": "organs","outputs": [
{ "name": "", "type": "address"}
],"type": "function"	},
{ "constant": false,
    "inputs": [],    
    "name": "KUEKeNParty",
    "outputs": [],
    "type": "function" }
,{ "constant": false,
    "inputs": [{"name": "_newManagerAddress","type": "address"}],    
    "name": "addManager",
    "outputs": [],
    "type": "function" }
,{ "constant": false,
    "inputs": [{"name": "fc","type": "address"},{"name": "br","type": "address"}],    
    "name": "boostrapParty",
    "outputs": [],
    "type": "function" }
,{ "constant": false,
    "inputs": [{"name": "_managerAddress","type": "address"}],    
    "name": "removeManager",
    "outputs": [],
    "type": "function" }
,{ "constant": false,
    "inputs": [{"name": "organName","type": "string"}],    
    "name": "createOrgan",
    "outputs": [],
    "type": "function" }
,{ "constant": true,
    "inputs": [{"name": "_managerAddress","type": "address"}],    
    "name": "isManager",
    "outputs": [{"name": "","type": "bool"}],
    "type": "function" }
,{ "constant": false,
    "inputs": [{"name": "_organ","type": "address"}],    
    "name": "addOrgan",
    "outputs": [],
    "type": "function" }

  ,{
    "constant": true,
    "inputs": [],    
    "name": "getMemberRegistry",
    "outputs": [{"name": "memberRegistry","type": "address"}],
    "type": "function"
  }
  ,{
    "constant": false,
    "inputs": [{"name": "aMemberRegistry","type": "address"}],    
    "name": "setMemberRegistry",
    "outputs": [],
    "type": "function"
  }

  ,{
    "constant": false,
    "inputs": [{"name": "aBlogregistry","type": "address"}],    
    "name": "setBlogregistry",
    "outputs": [],
    "type": "function"
  }

]);   
// contractVariable for Conference
var ConferenceContract = web3.eth.contract([
{"constant":true,"inputs":[],"name":"memberRegistry","outputs":[{"name":"","type":"address"}],"type":"function"},
{"constant":true,"inputs":[],"name":"organName","outputs":[{"name":"","type":"string"}],"type":"function"},
{"constant":true,"inputs":[],"name":"accreditatedMembers","outputs":[{"name":"","type":"uint256"}],"type":"function"},
{"constant":true,"inputs":[],"name":"lastFunctionId","outputs":[{"name":"","type":"uint256"}],"type":"function"},
{"constant":true,"inputs":[],"name":"mangerCount","outputs":[{"name":"","type":"uint256"}],"type":"function"},
{"constant":true,"inputs":[],"name":"blogRegistry","outputs":[{"name":"","type":"address"}],"type":"function"},
{"constant":true,"inputs":[],"name":"date","outputs":[{"name":"","type":"uint256"}],"type":"function"},
{"constant":true,"inputs":[],"name":"isActive","outputs":[{"name":"","type":"bool"}],"type":"function"},
{"constant":true,"inputs":[],"name":"ballotCount","outputs":[{"name":"","type":"uint256"}],"type":"function"},
{"constant": true,"inputs": [{"name": "","type": "address"}],"name": "managers","outputs": [
{ "name": "", "type": "bool"}
],"type": "function"	},
{"constant": true,"inputs": [{"name": "","type": "uint256"}],"name": "organFunctions","outputs": [
{ "name": "", "type": "address"}
],"type": "function"	},
{ "constant": false,
    "inputs": [{"name": "_address","type": "address"}],    
    "name": "accreditationMember",
    "outputs": [],
    "type": "function" }
,{ "constant": true,
    "inputs": [{"name": "_id","type": "uint256"}],    
    "name": "getOrganFunction",
    "outputs": [{"name": "","type": "address"}],
    "type": "function" }
,{ "constant": false,
    "inputs": [{"name": "_newManagerAddress","type": "address"}],    
    "name": "addManager",
    "outputs": [],
    "type": "function" }
,{ "constant": false,
    "inputs": [{"name": "_id","type": "uint256"},{"name": "_address","type": "address"}],    
    "name": "changeMember",
    "outputs": [],
    "type": "function" }
,{ "constant": false,
    "inputs": [{"name": "_managerAddress","type": "address"}],    
    "name": "removeManager",
    "outputs": [],
    "type": "function" }
,{ "constant": false,
    "inputs": [{"name": "_functionName","type": "string"},{"name": "_constittiutionHash","type": "string"}],    
    "name": "createFunction",
    "outputs": [],
    "type": "function" }
,{ "constant": true,
    "inputs": [{"name": "_managerAddress","type": "address"}],    
    "name": "isManager",
    "outputs": [{"name": "","type": "bool"}],
    "type": "function" }
,{ "constant": false,
    "inputs": [],    
    "name": "initalizeOrgan",
    "outputs": [],
    "type": "function" }
,{ "constant": false,
    "inputs": [{"name": "id","type": "uint256"},{"name": "message","type": "string"},{"name": "hash","type": "string"},{"name": "er","type": "string"}],    
    "name": "publishFunctionMessage",
    "outputs": [],
    "type": "function" }
,{ "constant": false,
    "inputs": [{"name": "name","type": "string"},{"name": "proposalNames","type": "bytes32"}],    
    "name": "createBallot",
    "outputs": [{"name": "","type": "uint256"}],
    "type": "function" }
,{ "constant": true,
    "inputs": [],    
    "name": "getLastBallot",
    "outputs": [{"name": "","type": "address"}],
    "type": "function" }
,{ "constant": true,
    "inputs": [],    
    "name": "getOrganBlog",
    "outputs": [{"name": "","type": "address"}],
    "type": "function" }
,{ "constant": false,
    "inputs": [{"name": "_of","type": "address"},{"name": "_name","type": "string"}],    
    "name": "addOrganFunction",
    "outputs": [],
    "type": "function" }
,
  { "anonymous": false,
    "inputs": 
	[
		{"indexed": false,
		 "name": "memberId",
         "type": "uint256"}
,		{"indexed": false,
		 "name": "memberName",
         "type": "string"}
,		{"indexed": false,
		 "name": "memberAddress",
         "type": "address"}
	],    
    "name": "MemberAccreditated",
    "type": "event"  }
  ,{
    "constant": false,
    "inputs": [{"name": "aMemberRegistry","type": "address"}],    
    "name": "setMemberRegistry",
    "outputs": [],
    "type": "function"
  }

  ,{
    "constant": true,
    "inputs": [],    
    "name": "getOrganName",
    "outputs": [{"name": "organName","type": "string"}],
    "type": "function"
  }
  ,{
    "constant": false,
    "inputs": [{"name": "aOrganName","type": "string"}],    
    "name": "setOrganName",
    "outputs": [],
    "type": "function"
  }

  ,{
    "constant": false,
    "inputs": [{"name": "aBlogRegistry","type": "address"}],    
    "name": "setBlogRegistry",
    "outputs": [],
    "type": "function"
  }

]);   
// contractVariable for FoundationConference
var FoundationConferenceContract = web3.eth.contract([
{"constant":true,"inputs":[],"name":"memberRegistry","outputs":[{"name":"","type":"address"}],"type":"function"},
{"constant":true,"inputs":[],"name":"organName","outputs":[{"name":"","type":"string"}],"type":"function"},
{"constant":true,"inputs":[],"name":"accreditatedMembers","outputs":[{"name":"","type":"uint256"}],"type":"function"},
{"constant":true,"inputs":[],"name":"lastFunctionId","outputs":[{"name":"","type":"uint256"}],"type":"function"},
{"constant":true,"inputs":[],"name":"mangerCount","outputs":[{"name":"","type":"uint256"}],"type":"function"},
{"constant":true,"inputs":[],"name":"blogRegistry","outputs":[{"name":"","type":"address"}],"type":"function"},
{"constant":true,"inputs":[],"name":"date","outputs":[{"name":"","type":"uint256"}],"type":"function"},
{"constant":true,"inputs":[],"name":"isActive","outputs":[{"name":"","type":"bool"}],"type":"function"},
{"constant":true,"inputs":[],"name":"ballotCount","outputs":[{"name":"","type":"uint256"}],"type":"function"},
{"constant": true,"inputs": [{"name": "","type": "address"}],"name": "managers","outputs": [
{ "name": "", "type": "bool"}
],"type": "function"	},
{"constant": true,"inputs": [{"name": "","type": "uint256"}],"name": "organFunctions","outputs": [
{ "name": "", "type": "address"}
],"type": "function"	},
{ "constant": false,
    "inputs": [{"name": "_address","type": "address"}],    
    "name": "accreditationMember",
    "outputs": [],
    "type": "function" }
,{ "constant": true,
    "inputs": [{"name": "_id","type": "uint256"}],    
    "name": "getOrganFunction",
    "outputs": [{"name": "","type": "address"}],
    "type": "function" }
,{ "constant": false,
    "inputs": [{"name": "_newManagerAddress","type": "address"}],    
    "name": "addManager",
    "outputs": [],
    "type": "function" }
,{ "constant": false,
    "inputs": [{"name": "_id","type": "uint256"},{"name": "_address","type": "address"}],    
    "name": "changeMember",
    "outputs": [],
    "type": "function" }
,{ "constant": false,
    "inputs": [{"name": "_managerAddress","type": "address"}],    
    "name": "removeManager",
    "outputs": [],
    "type": "function" }
,{ "constant": false,
    "inputs": [{"name": "_functionName","type": "string"},{"name": "_constittiutionHash","type": "string"}],    
    "name": "createFunction",
    "outputs": [],
    "type": "function" }
,{ "constant": true,
    "inputs": [{"name": "_managerAddress","type": "address"}],    
    "name": "isManager",
    "outputs": [{"name": "","type": "bool"}],
    "type": "function" }
,{ "constant": false,
    "inputs": [],    
    "name": "initalizeOrgan",
    "outputs": [],
    "type": "function" }
,{ "constant": false,
    "inputs": [{"name": "id","type": "uint256"},{"name": "message","type": "string"},{"name": "hash","type": "string"},{"name": "er","type": "string"}],    
    "name": "publishFunctionMessage",
    "outputs": [],
    "type": "function" }
,{ "constant": false,
    "inputs": [{"name": "name","type": "string"},{"name": "proposalNames","type": "bytes32"}],    
    "name": "createBallot",
    "outputs": [{"name": "","type": "uint256"}],
    "type": "function" }
,{ "constant": true,
    "inputs": [],    
    "name": "getLastBallot",
    "outputs": [{"name": "","type": "address"}],
    "type": "function" }
,{ "constant": true,
    "inputs": [],    
    "name": "getOrganBlog",
    "outputs": [{"name": "","type": "address"}],
    "type": "function" }
,{ "constant": false,
    "inputs": [{"name": "_of","type": "address"},{"name": "_name","type": "string"}],    
    "name": "addOrganFunction",
    "outputs": [],
    "type": "function" }

  ,{
    "constant": false,
    "inputs": [{"name": "aMemberRegistry","type": "address"}],    
    "name": "setMemberRegistry",
    "outputs": [],
    "type": "function"
  }

  ,{
    "constant": true,
    "inputs": [],    
    "name": "getOrganName",
    "outputs": [{"name": "organName","type": "string"}],
    "type": "function"
  }
  ,{
    "constant": false,
    "inputs": [{"name": "aOrganName","type": "string"}],    
    "name": "setOrganName",
    "outputs": [],
    "type": "function"
  }

  ,{
    "constant": false,
    "inputs": [{"name": "aBlogRegistry","type": "address"}],    
    "name": "setBlogRegistry",
    "outputs": [],
    "type": "function"
  }

]);   
// contractVariable for OrganFunction
var OrganFunctionContract = web3.eth.contract([
{"constant":true,"inputs":[],"name":"currentMember","outputs":[{"name":"","type":"address"}],"type":"function"},
{"constant":true,"inputs":[],"name":"functionName","outputs":[{"name":"","type":"string"}],"type":"function"},
{"constant":true,"inputs":[],"name":"mangerCount","outputs":[{"name":"","type":"uint256"}],"type":"function"},
{"constant":true,"inputs":[],"name":"id","outputs":[{"name":"","type":"uint256"}],"type":"function"},
{"constant":true,"inputs":[],"name":"constitutionHash","outputs":[{"name":"","type":"string"}],"type":"function"},
{"constant":true,"inputs":[],"name":"lastMemberChanged","outputs":[{"name":"","type":"uint256"}],"type":"function"},
{"constant":true,"inputs":[],"name":"lastConstitutionHashChanged","outputs":[{"name":"","type":"uint256"}],"type":"function"},
{"constant":true,"inputs":[],"name":"publisher","outputs":[{"name":"","type":"address"}],"type":"function"},
{"constant": true,"inputs": [{"name": "","type": "address"}],"name": "managers","outputs": [
{ "name": "", "type": "bool"}
],"type": "function"	},
{ "constant": false,
    "inputs": [{"name": "_newManagerAddress","type": "address"}],    
    "name": "addManager",
    "outputs": [],
    "type": "function" }
,{ "constant": true,
    "inputs": [],    
    "name": "getFunctioName",
    "outputs": [{"name": "","type": "string"}],
    "type": "function" }
,{ "constant": false,
    "inputs": [{"name": "_managerAddress","type": "address"}],    
    "name": "removeManager",
    "outputs": [],
    "type": "function" }
,{ "constant": true,
    "inputs": [{"name": "_managerAddress","type": "address"}],    
    "name": "isManager",
    "outputs": [{"name": "","type": "bool"}],
    "type": "function" }
,{ "constant": false,
    "inputs": [{"name": "message","type": "string"},{"name": "hash","type": "string"},{"name": "er","type": "string"}],    
    "name": "publishMessage",
    "outputs": [],
    "type": "function" }

  ,{
    "constant": false,
    "inputs": [{"name": "aCurrentMember","type": "address"}],    
    "name": "setCurrentMember",
    "outputs": [],
    "type": "function"
  }

  ,{
    "constant": false,
    "inputs": [{"name": "aPublisher","type": "address"}],    
    "name": "setPublisher",
    "outputs": [],
    "type": "function"
  }

]);   


