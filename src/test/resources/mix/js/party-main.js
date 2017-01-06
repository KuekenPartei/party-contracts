// file header
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
{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"type":"function"},
{"constant":true,"inputs":[],"name":"mangerCount","outputs":[{"name":"","type":"uint256"}],"type":"function"},
{"constant":true,"inputs":[],"name":"memberRegistry","outputs":[{"name":"","type":"address"}],"type":"function"},
{"constant":true,"inputs":[],"name":"constitutionHash","outputs":[{"name":"","type":"string"}],"type":"function"},
{"constant":true,"inputs":[],"name":"organCount","outputs":[{"name":"","type":"uint256"}],"type":"function"},
{"constant":true,"inputs":[],"name":"blogregistry","outputs":[{"name":"","type":"address"}],"type":"function"},
{"constant":true,"inputs":[],"name":"parent","outputs":[{"name":"","type":"address"}],"type":"function"},
{"constant":true,"inputs":[],"name":"subDivisionCount","outputs":[{"name":"","type":"uint256"}],"type":"function"},
{"constant": true,"inputs": [{"name": "","type": "address"}],"name": "managers","outputs": [
{ "name": "", "type": "bool"}
],"type": "function"	},
{"constant": true,"inputs": [{"name": "","type": "uint256"}],"name": "organs","outputs": [
{ "name": "", "type": "address"}
],"type": "function"	},
{"constant": true,"inputs": [{"name": "","type": "uint256"}],"name": "subDivisions","outputs": [
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
,{ "constant": true,
    "inputs": [{"name": "_managerAddress","type": "address"}],    
    "name": "isManager",
    "outputs": [{"name": "","type": "bool"}],
    "type": "function" }
,{ "constant": false,
    "inputs": [{"name": "organName","type": "string"}],    
    "name": "createOrgan",
    "outputs": [],
    "type": "function" }
,{ "constant": false,
    "inputs": [{"name": "_organ","type": "address"}],    
    "name": "addOrgan",
    "outputs": [],
    "type": "function" }
,{ "constant": false,
    "inputs": [{"name": "_subDivision","type": "address"}],    
    "name": "addSubDivision",
    "outputs": [],
    "type": "function" }
,{ "constant": false,
    "inputs": [{"name": "_divisionId","type": "uint256"}],    
    "name": "removeSubDivision",
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
,  { "anonymous": false,
    "inputs": 
	[
		{"indexed": false,
		 "name": "divisionAddress",
         "type": "address"}
,		{"indexed": false,
		 "name": "changer",
         "type": "address"}
,		{"indexed": false,
		 "name": "state",
         "type": "uint256"}
	],    
    "name": "DivisionChanged",
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
{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"type":"function"},
{"constant":true,"inputs":[],"name":"mangerCount","outputs":[{"name":"","type":"uint256"}],"type":"function"},
{"constant":true,"inputs":[],"name":"memberRegistry","outputs":[{"name":"","type":"address"}],"type":"function"},
{"constant":true,"inputs":[],"name":"constitutionHash","outputs":[{"name":"","type":"string"}],"type":"function"},
{"constant":true,"inputs":[],"name":"organCount","outputs":[{"name":"","type":"uint256"}],"type":"function"},
{"constant":true,"inputs":[],"name":"blogregistry","outputs":[{"name":"","type":"address"}],"type":"function"},
{"constant":true,"inputs":[],"name":"parent","outputs":[{"name":"","type":"address"}],"type":"function"},
{"constant":true,"inputs":[],"name":"subDivisionCount","outputs":[{"name":"","type":"uint256"}],"type":"function"},
{"constant": true,"inputs": [{"name": "","type": "address"}],"name": "managers","outputs": [
{ "name": "", "type": "bool"}
],"type": "function"	},
{"constant": true,"inputs": [{"name": "","type": "uint256"}],"name": "organs","outputs": [
{ "name": "", "type": "address"}
],"type": "function"	},
{"constant": true,"inputs": [{"name": "","type": "uint256"}],"name": "subDivisions","outputs": [
{ "name": "", "type": "address"}
],"type": "function"	},
{ "constant": false,
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
,{ "constant": true,
    "inputs": [{"name": "_managerAddress","type": "address"}],    
    "name": "isManager",
    "outputs": [{"name": "","type": "bool"}],
    "type": "function" }
,{ "constant": false,
    "inputs": [{"name": "organName","type": "string"}],    
    "name": "createOrgan",
    "outputs": [],
    "type": "function" }
,{ "constant": false,
    "inputs": [{"name": "_organ","type": "address"}],    
    "name": "addOrgan",
    "outputs": [],
    "type": "function" }
,{ "constant": false,
    "inputs": [{"name": "_subDivision","type": "address"}],    
    "name": "addSubDivision",
    "outputs": [],
    "type": "function" }
,{ "constant": false,
    "inputs": [{"name": "_divisionId","type": "uint256"}],    
    "name": "removeSubDivision",
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


/**
* A simple bean class around the contract.
* The OrganModel.
**/
function OrganModel(contract) {
this.contract = contract;
	/**
	* Getter for memberRegistry.
	**/
	this.getMemberRegistry = function(){
		return contract.memberRegistry(); 
	}
	/**
	* Getter for organName.
	**/
	this.getOrganName = function(){
		return contract.organName(); 
	}
	/**
	* Getter for lastFunctionId.
	**/
	this.getLastFunctionId = function(){
		return contract.lastFunctionId(); 
	}
	/**
	* Getter for mangerCount.
	**/
	this.getMangerCount = function(){
		return contract.mangerCount(); 
	}
	/**
	* Getter for blogRegistry.
	**/
	this.getBlogRegistry = function(){
		return contract.blogRegistry(); 
	}
	/**
	* Getter for isActive.
	**/
	this.getIsActive = function(){
		return contract.isActive(); 
	}
	/**
	* Getter for ballotCount.
	**/
	this.getBallotCount = function(){
		return contract.ballotCount(); 
	}
	/**
	* Get the mapped value for a key.
	*/
	this.getManagers=function(key) {
		return contract.managers(key);
	}
	/**
	* Call getOrganFunction.
	**/
	this.getOrganFunction = function(_id){
		return contract.getOrganFunction(_id); 
	}
	/**
	* Call addManager.
	**/
	this.addManager = function(_newManagerAddress){
		return contract.addManager(_newManagerAddress); 
	}
	/**
	* Call changeMember.
	**/
	this.changeMember = function(_id,_address){
		return contract.changeMember(_id,_address); 
	}
	/**
	* Call removeManager.
	**/
	this.removeManager = function(_managerAddress){
		return contract.removeManager(_managerAddress); 
	}
	/**
	* Call createFunction.
	**/
	this.createFunction = function(_functionName,_constittiutionHash){
		return contract.createFunction(_functionName,_constittiutionHash); 
	}
	/**
	* Call isManager.
	**/
	this.isManager = function(_managerAddress){
		return contract.isManager(_managerAddress); 
	}
	/**
	* Call initalizeOrgan.
	**/
	this.initalizeOrgan = function(){
		return contract.initalizeOrgan(); 
	}
	/**
	* Call publishFunctionMessage.
	**/
	this.publishFunctionMessage = function(id,message,hash,er){
		return contract.publishFunctionMessage(id,message,hash,er); 
	}
	/**
	* Call createBallot.
	**/
	this.createBallot = function(name,proposalNames){
		return contract.createBallot(name,proposalNames); 
	}
	/**
	* Call getLastBallot.
	**/
	this.getLastBallot = function(){
		return contract.getLastBallot(); 
	}
	/**
	* Call getOrganBlog.
	**/
	this.getOrganBlog = function(){
		return contract.getOrganBlog(); 
	}
	/**
	* Call addOrganFunction.
	**/
	this.addOrganFunction = function(_of,_name){
		return contract.addOrganFunction(_of,_name); 
	}
	/**
	* Call publishMessage.
	**/
	this.publishMessage = function(message,hash,er){
		return contract.publishMessage(message,hash,er); 
	}
}// end of function OrganModel

/**
* Gui factory Organ
**/
function OrganGuiFactory() {
	this.prefix='';
	
	/**
	* Places the default gui to 'e' or an element with id='Organ_gui'
	*/
	this.placeDefaultGui=function(e) {
		if(e==null)
			e = document.getElementById(this.prefix+'Organ_gui');
		if(e!=null)
			e.innerHTML = this.createDefaultGui();
		else
			console.log(this.prefix+'Organ_gui not found');
	}

	/**
	* The default generated gui with all actions and attributes.
	*/
	this.createDefaultGui=function() {
		return 		'<!-- gui for Organ_contract -->'
+		'		<div class="contract" id="'+this.prefix+'Organ_contract">'
+		'		Organ:'
+		'		  <input type="text" id="'+this.prefix+'Organ_address"> <button id="'+this.prefix+'OrganController.setAddress" onclick="'+this.prefix+'OrganController.setAddress()">change Organ Address</button>'
+		'		  <div class="contract_attributes" id="'+this.prefix+'Organ_contract_attributes"> attributes:'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Organ_contract_attribute_memberRegistry"> memberRegistry:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'Organ_memberRegistry_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Organ_contract_attribute_organName"> organName:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'Organ_organName_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Organ_contract_attribute_lastFunctionId"> lastFunctionId:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'Organ_lastFunctionId_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Organ_contract_attribute_mangerCount"> mangerCount:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'Organ_mangerCount_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Organ_contract_attribute_blogRegistry"> blogRegistry:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'Organ_blogRegistry_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Organ_contract_attribute_isActive"> isActive:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'Organ_isActive_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Organ_contract_attribute_ballotCount"> ballotCount:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'Organ_ballotCount_value"> </span>'
+		'		    </div>'
+		'		'
+		'		<div class="Value_Mapping" id="'+this.prefix+'Organ_contract_attribute_managers">mapping  managers:'
+		'				<input class="function_input" type="text" id="'+this.prefix+'Organ_contract_attribute_managers_input">(address)'
+		'		    	<div class="Mapping_value" id="'+this.prefix+'Organ_contract_attribute_address"> bool:'
+		'		      		<span class="contract_attribute_value" id="'+this.prefix+'Organ_managers_value"> </span>'
+		'		    	</div>'
+		'		  </div>'
+		'		    <button class="function_btn" id="'+this.prefix+'Organ_updateAttributes" onclick="'+this.prefix+'OrganController._updateAttributes()">update Organ attributes</button>'
+		'		  </div>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'Organ_contract_function_Organ_getOrganFunction_uint">'
+		'		<legend>getOrganFunction</legend>'
+		'			  <label class="function_parameter" for="Organ_getOrganFunction_uint__id">_id</label>'
+		'				<input class="function_input" type="number" '
+		'		          id="'+this.prefix+'Organ_getOrganFunction_uint__id"'
+		'				  placeholder="_id"/>'
+		'			<button class="function_btn" id="'+this.prefix+'OrganController.Organ_getOrganFunction_uint" onclick="'+this.prefix+'OrganController.Organ_getOrganFunction_uint()">getOrganFunction</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_getOrganFunction_uint_res"></div>'
+		'		  </fieldset>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'Organ_contract_function_Manageable_addManager_address">'
+		'		<legend>addManager</legend>'
+		'			  <label class="function_parameter" for="Manageable_addManager_address__newManagerAddress">_newManagerAddress</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Manageable_addManager_address__newManagerAddress"'
+		'				  placeholder="_newManagerAddress"/>'
+		'			<button class="function_btn" id="'+this.prefix+'OrganController.Manageable_addManager_address" onclick="'+this.prefix+'OrganController.Manageable_addManager_address()">addManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_addManager_address_res"></div>'
+		'		  </fieldset>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'Organ_contract_function_Organ_changeMember_uint_address">'
+		'		<legend>changeMember</legend>'
+		'			  <label class="function_parameter" for="Organ_changeMember_uint_address__id">_id</label>'
+		'				<input class="function_input" type="number" '
+		'		          id="'+this.prefix+'Organ_changeMember_uint_address__id"'
+		'				  placeholder="_id"/>'
+		'			  <label class="function_parameter" for="Organ_changeMember_uint_address__address">_address</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Organ_changeMember_uint_address__address"'
+		'				  placeholder="_address"/>'
+		'			<button class="function_btn" id="'+this.prefix+'OrganController.Organ_changeMember_uint_address" onclick="'+this.prefix+'OrganController.Organ_changeMember_uint_address()">changeMember</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_changeMember_uint_address_res"></div>'
+		'		  </fieldset>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'Organ_contract_function_Manageable_removeManager_address">'
+		'		<legend>removeManager</legend>'
+		'			  <label class="function_parameter" for="Manageable_removeManager_address__managerAddress">_managerAddress</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Manageable_removeManager_address__managerAddress"'
+		'				  placeholder="_managerAddress"/>'
+		'			<button class="function_btn" id="'+this.prefix+'OrganController.Manageable_removeManager_address" onclick="'+this.prefix+'OrganController.Manageable_removeManager_address()">removeManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_removeManager_address_res"></div>'
+		'		  </fieldset>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'Organ_contract_function_Organ_createFunction_string_string">'
+		'		<legend>createFunction</legend>'
+		'			  <label class="function_parameter" for="Organ_createFunction_string_string__functionName">_functionName</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Organ_createFunction_string_string__functionName"'
+		'				  placeholder="_functionName"/>'
+		'			  <label class="function_parameter" for="Organ_createFunction_string_string__constittiutionHash">_constittiutionHash</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Organ_createFunction_string_string__constittiutionHash"'
+		'				  placeholder="_constittiutionHash"/>'
+		'			<button class="function_btn" id="'+this.prefix+'OrganController.Organ_createFunction_string_string" onclick="'+this.prefix+'OrganController.Organ_createFunction_string_string()">createFunction</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_createFunction_string_string_res"></div>'
+		'		  </fieldset>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'Organ_contract_function_Manageable_isManager_address">'
+		'		<legend>isManager</legend>'
+		'			  <label class="function_parameter" for="Manageable_isManager_address__managerAddress">_managerAddress</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Manageable_isManager_address__managerAddress"'
+		'				  placeholder="_managerAddress"/>'
+		'			<button class="function_btn" id="'+this.prefix+'OrganController.Manageable_isManager_address" onclick="'+this.prefix+'OrganController.Manageable_isManager_address()">isManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_isManager_address_res"></div>'
+		'		  </fieldset>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'Organ_contract_function_Organ_initalizeOrgan">'
+		'		<legend>initalizeOrgan</legend>'
+		'			<button class="function_btn" id="'+this.prefix+'OrganController.Organ_initalizeOrgan" onclick="'+this.prefix+'OrganController.Organ_initalizeOrgan()">initalizeOrgan</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_initalizeOrgan_res"></div>'
+		'		  </fieldset>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'Organ_contract_function_Organ_publishFunctionMessage_uint_string_string_string">'
+		'		<legend>publishFunctionMessage</legend>'
+		'			  <label class="function_parameter" for="Organ_publishFunctionMessage_uint_string_string_string_id">id</label>'
+		'				<input class="function_input" type="number" '
+		'		          id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_id"'
+		'				  placeholder="id"/>'
+		'			  <label class="function_parameter" for="Organ_publishFunctionMessage_uint_string_string_string_message">message</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_message"'
+		'				  placeholder="message"/>'
+		'			  <label class="function_parameter" for="Organ_publishFunctionMessage_uint_string_string_string_hash">hash</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_hash"'
+		'				  placeholder="hash"/>'
+		'			  <label class="function_parameter" for="Organ_publishFunctionMessage_uint_string_string_string_er">er</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_er"'
+		'				  placeholder="er"/>'
+		'			<button class="function_btn" id="'+this.prefix+'OrganController.Organ_publishFunctionMessage_uint_string_string_string" onclick="'+this.prefix+'OrganController.Organ_publishFunctionMessage_uint_string_string_string()">publishFunctionMessage</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_res"></div>'
+		'		  </fieldset>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'Organ_contract_function_Organ_createBallot_string_bytes32">'
+		'		<legend>createBallot</legend>'
+		'			  <label class="function_parameter" for="Organ_createBallot_string_bytes32_name">name</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Organ_createBallot_string_bytes32_name"'
+		'				  placeholder="name"/>'
+		'			  <label class="function_parameter" for="Organ_createBallot_string_bytes32_proposalNames">proposalNames</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Organ_createBallot_string_bytes32_proposalNames"'
+		'				  placeholder="proposalNames"/>'
+		'			<button class="function_btn" id="'+this.prefix+'OrganController.Organ_createBallot_string_bytes32" onclick="'+this.prefix+'OrganController.Organ_createBallot_string_bytes32()">createBallot</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_createBallot_string_bytes32_res"></div>'
+		'		  </fieldset>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'Organ_contract_function_Organ_getLastBallot">'
+		'		<legend>getLastBallot</legend>'
+		'			<button class="function_btn" id="'+this.prefix+'OrganController.Organ_getLastBallot" onclick="'+this.prefix+'OrganController.Organ_getLastBallot()">getLastBallot</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_getLastBallot_res"></div>'
+		'		  </fieldset>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'Organ_contract_function_Organ_getOrganBlog">'
+		'		<legend>getOrganBlog</legend>'
+		'			<button class="function_btn" id="'+this.prefix+'OrganController.Organ_getOrganBlog" onclick="'+this.prefix+'OrganController.Organ_getOrganBlog()">getOrganBlog</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_getOrganBlog_res"></div>'
+		'		  </fieldset>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'Organ_contract_function_Organ_addOrganFunction_address_string">'
+		'		<legend>addOrganFunction</legend>'
+		'			  <label class="function_parameter" for="Organ_addOrganFunction_address_string__of">_of</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Organ_addOrganFunction_address_string__of"'
+		'				  placeholder="_of"/>'
+		'			  <label class="function_parameter" for="Organ_addOrganFunction_address_string__name">_name</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Organ_addOrganFunction_address_string__name"'
+		'				  placeholder="_name"/>'
+		'			<button class="function_btn" id="'+this.prefix+'OrganController.Organ_addOrganFunction_address_string" onclick="'+this.prefix+'OrganController.Organ_addOrganFunction_address_string()">addOrganFunction</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_addOrganFunction_address_string_res"></div>'
+		'		  </fieldset>'
+		'		'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'Organ_contract_function_MessagePublisher_publishMessage_string_string_string">'
+		'		<legend>publishMessage</legend>'
+		'			  <label class="function_parameter" for="MessagePublisher_publishMessage_string_string_string_message">message</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'MessagePublisher_publishMessage_string_string_string_message"'
+		'				  placeholder="message"/>'
+		'			  <label class="function_parameter" for="MessagePublisher_publishMessage_string_string_string_hash">hash</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'MessagePublisher_publishMessage_string_string_string_hash"'
+		'				  placeholder="hash"/>'
+		'			  <label class="function_parameter" for="MessagePublisher_publishMessage_string_string_string_er">er</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'MessagePublisher_publishMessage_string_string_string_er"'
+		'				  placeholder="er"/>'
+		'			<button class="function_btn" id="'+this.prefix+'OrganController.MessagePublisher_publishMessage_string_string_string" onclick="'+this.prefix+'OrganController.MessagePublisher_publishMessage_string_string_string()">publishMessage</button>'
+		'			<div class="function_result" id="'+this.prefix+'MessagePublisher_publishMessage_string_string_string_res"></div>'
+		'		  </fieldset>'
+		'		</div>'
;
	}

	/**
	* Create the gui for the attributes.
	*/
	this.createAttributesGui=function() {
		return 		'    <div class="contract_attribute" id="'+this.prefix+'Organ_contract_attribute_memberRegistry"> memberRegistry:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'Organ_memberRegistry_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Organ_contract_attribute_organName"> organName:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'Organ_organName_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Organ_contract_attribute_lastFunctionId"> lastFunctionId:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'Organ_lastFunctionId_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Organ_contract_attribute_mangerCount"> mangerCount:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'Organ_mangerCount_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Organ_contract_attribute_blogRegistry"> blogRegistry:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'Organ_blogRegistry_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Organ_contract_attribute_isActive"> isActive:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'Organ_isActive_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Organ_contract_attribute_ballotCount"> ballotCount:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'Organ_ballotCount_value"> </span>'
+		'		    </div>'
+		'		'
;
	}

	/**
	* Create the gui.
	*/
	this.createPlainGui=function(){
		return this.createAttributesGui()
				+ this.createOrgan_getOrganFunction_uintGui
				+ this.createManageable_addManager_addressGui
				+ this.createOrgan_changeMember_uint_addressGui
				+ this.createManageable_removeManager_addressGui
				+ this.createOrgan_createFunction_string_stringGui
				+ this.createManageable_isManager_addressGui
				+ this.createOrgan_initalizeOrganGui
				+ this.createOrgan_publishFunctionMessage_uint_string_string_stringGui
				+ this.createOrgan_createBallot_string_bytes32Gui
				+ this.createOrgan_getLastBallotGui
				+ this.createOrgan_getOrganBlogGui
				+ this.createOrgan_addOrganFunction_address_stringGui
				+ this.createOrgan_publishMessage_string_string_stringGui
				;
	}

	/**
	* Create the gui for the function getOrganFunction.
	*/
	this.createOrgan_getOrganFunction_uintGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'Organ_contract_function_Organ_getOrganFunction_uint">'
+		'		<legend>getOrganFunction</legend>'
+		'			  <label class="function_parameter" for="Organ_getOrganFunction_uint__id">_id</label>'
+		'				<input class="function_input" type="number" '
+		'		          id="'+this.prefix+'Organ_getOrganFunction_uint__id"'
+		'				  placeholder="_id"/>'
+		'			<button class="function_btn" id="'+this.prefix+'OrganController.Organ_getOrganFunction_uint" onclick="'+this.prefix+'OrganController.Organ_getOrganFunction_uint()">getOrganFunction</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_getOrganFunction_uint_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the function addManager.
	*/
	this.createManageable_addManager_addressGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'Organ_contract_function_Manageable_addManager_address">'
+		'		<legend>addManager</legend>'
+		'			  <label class="function_parameter" for="Manageable_addManager_address__newManagerAddress">_newManagerAddress</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Manageable_addManager_address__newManagerAddress"'
+		'				  placeholder="_newManagerAddress"/>'
+		'			<button class="function_btn" id="'+this.prefix+'OrganController.Manageable_addManager_address" onclick="'+this.prefix+'OrganController.Manageable_addManager_address()">addManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_addManager_address_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the function changeMember.
	*/
	this.createOrgan_changeMember_uint_addressGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'Organ_contract_function_Organ_changeMember_uint_address">'
+		'		<legend>changeMember</legend>'
+		'			  <label class="function_parameter" for="Organ_changeMember_uint_address__id">_id</label>'
+		'				<input class="function_input" type="number" '
+		'		          id="'+this.prefix+'Organ_changeMember_uint_address__id"'
+		'				  placeholder="_id"/>'
+		'			  <label class="function_parameter" for="Organ_changeMember_uint_address__address">_address</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Organ_changeMember_uint_address__address"'
+		'				  placeholder="_address"/>'
+		'			<button class="function_btn" id="'+this.prefix+'OrganController.Organ_changeMember_uint_address" onclick="'+this.prefix+'OrganController.Organ_changeMember_uint_address()">changeMember</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_changeMember_uint_address_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the function removeManager.
	*/
	this.createManageable_removeManager_addressGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'Organ_contract_function_Manageable_removeManager_address">'
+		'		<legend>removeManager</legend>'
+		'			  <label class="function_parameter" for="Manageable_removeManager_address__managerAddress">_managerAddress</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Manageable_removeManager_address__managerAddress"'
+		'				  placeholder="_managerAddress"/>'
+		'			<button class="function_btn" id="'+this.prefix+'OrganController.Manageable_removeManager_address" onclick="'+this.prefix+'OrganController.Manageable_removeManager_address()">removeManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_removeManager_address_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the function createFunction.
	*/
	this.createOrgan_createFunction_string_stringGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'Organ_contract_function_Organ_createFunction_string_string">'
+		'		<legend>createFunction</legend>'
+		'			  <label class="function_parameter" for="Organ_createFunction_string_string__functionName">_functionName</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Organ_createFunction_string_string__functionName"'
+		'				  placeholder="_functionName"/>'
+		'			  <label class="function_parameter" for="Organ_createFunction_string_string__constittiutionHash">_constittiutionHash</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Organ_createFunction_string_string__constittiutionHash"'
+		'				  placeholder="_constittiutionHash"/>'
+		'			<button class="function_btn" id="'+this.prefix+'OrganController.Organ_createFunction_string_string" onclick="'+this.prefix+'OrganController.Organ_createFunction_string_string()">createFunction</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_createFunction_string_string_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the function isManager.
	*/
	this.createManageable_isManager_addressGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'Organ_contract_function_Manageable_isManager_address">'
+		'		<legend>isManager</legend>'
+		'			  <label class="function_parameter" for="Manageable_isManager_address__managerAddress">_managerAddress</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Manageable_isManager_address__managerAddress"'
+		'				  placeholder="_managerAddress"/>'
+		'			<button class="function_btn" id="'+this.prefix+'OrganController.Manageable_isManager_address" onclick="'+this.prefix+'OrganController.Manageable_isManager_address()">isManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_isManager_address_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the function initalizeOrgan.
	*/
	this.createOrgan_initalizeOrganGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'Organ_contract_function_Organ_initalizeOrgan">'
+		'		<legend>initalizeOrgan</legend>'
+		'			<button class="function_btn" id="'+this.prefix+'OrganController.Organ_initalizeOrgan" onclick="'+this.prefix+'OrganController.Organ_initalizeOrgan()">initalizeOrgan</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_initalizeOrgan_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the function publishFunctionMessage.
	*/
	this.createOrgan_publishFunctionMessage_uint_string_string_stringGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'Organ_contract_function_Organ_publishFunctionMessage_uint_string_string_string">'
+		'		<legend>publishFunctionMessage</legend>'
+		'			  <label class="function_parameter" for="Organ_publishFunctionMessage_uint_string_string_string_id">id</label>'
+		'				<input class="function_input" type="number" '
+		'		          id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_id"'
+		'				  placeholder="id"/>'
+		'			  <label class="function_parameter" for="Organ_publishFunctionMessage_uint_string_string_string_message">message</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_message"'
+		'				  placeholder="message"/>'
+		'			  <label class="function_parameter" for="Organ_publishFunctionMessage_uint_string_string_string_hash">hash</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_hash"'
+		'				  placeholder="hash"/>'
+		'			  <label class="function_parameter" for="Organ_publishFunctionMessage_uint_string_string_string_er">er</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_er"'
+		'				  placeholder="er"/>'
+		'			<button class="function_btn" id="'+this.prefix+'OrganController.Organ_publishFunctionMessage_uint_string_string_string" onclick="'+this.prefix+'OrganController.Organ_publishFunctionMessage_uint_string_string_string()">publishFunctionMessage</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the function createBallot.
	*/
	this.createOrgan_createBallot_string_bytes32Gui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'Organ_contract_function_Organ_createBallot_string_bytes32">'
+		'		<legend>createBallot</legend>'
+		'			  <label class="function_parameter" for="Organ_createBallot_string_bytes32_name">name</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Organ_createBallot_string_bytes32_name"'
+		'				  placeholder="name"/>'
+		'			  <label class="function_parameter" for="Organ_createBallot_string_bytes32_proposalNames">proposalNames</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Organ_createBallot_string_bytes32_proposalNames"'
+		'				  placeholder="proposalNames"/>'
+		'			<button class="function_btn" id="'+this.prefix+'OrganController.Organ_createBallot_string_bytes32" onclick="'+this.prefix+'OrganController.Organ_createBallot_string_bytes32()">createBallot</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_createBallot_string_bytes32_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the function getLastBallot.
	*/
	this.createOrgan_getLastBallotGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'Organ_contract_function_Organ_getLastBallot">'
+		'		<legend>getLastBallot</legend>'
+		'			<button class="function_btn" id="'+this.prefix+'OrganController.Organ_getLastBallot" onclick="'+this.prefix+'OrganController.Organ_getLastBallot()">getLastBallot</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_getLastBallot_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the function getOrganBlog.
	*/
	this.createOrgan_getOrganBlogGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'Organ_contract_function_Organ_getOrganBlog">'
+		'		<legend>getOrganBlog</legend>'
+		'			<button class="function_btn" id="'+this.prefix+'OrganController.Organ_getOrganBlog" onclick="'+this.prefix+'OrganController.Organ_getOrganBlog()">getOrganBlog</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_getOrganBlog_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the function addOrganFunction.
	*/
	this.createOrgan_addOrganFunction_address_stringGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'Organ_contract_function_Organ_addOrganFunction_address_string">'
+		'		<legend>addOrganFunction</legend>'
+		'			  <label class="function_parameter" for="Organ_addOrganFunction_address_string__of">_of</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Organ_addOrganFunction_address_string__of"'
+		'				  placeholder="_of"/>'
+		'			  <label class="function_parameter" for="Organ_addOrganFunction_address_string__name">_name</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Organ_addOrganFunction_address_string__name"'
+		'				  placeholder="_name"/>'
+		'			<button class="function_btn" id="'+this.prefix+'OrganController.Organ_addOrganFunction_address_string" onclick="'+this.prefix+'OrganController.Organ_addOrganFunction_address_string()">addOrganFunction</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_addOrganFunction_address_string_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the function publishMessage.
	*/
	this.createOrgan_publishMessage_string_string_stringGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'Organ_contract_function_MessagePublisher_publishMessage_string_string_string">'
+		'		<legend>publishMessage</legend>'
+		'			  <label class="function_parameter" for="MessagePublisher_publishMessage_string_string_string_message">message</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'MessagePublisher_publishMessage_string_string_string_message"'
+		'				  placeholder="message"/>'
+		'			  <label class="function_parameter" for="MessagePublisher_publishMessage_string_string_string_hash">hash</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'MessagePublisher_publishMessage_string_string_string_hash"'
+		'				  placeholder="hash"/>'
+		'			  <label class="function_parameter" for="MessagePublisher_publishMessage_string_string_string_er">er</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'MessagePublisher_publishMessage_string_string_string_er"'
+		'				  placeholder="er"/>'
+		'			<button class="function_btn" id="'+this.prefix+'OrganController.MessagePublisher_publishMessage_string_string_string" onclick="'+this.prefix+'OrganController.MessagePublisher_publishMessage_string_string_string()">publishMessage</button>'
+		'			<div class="function_result" id="'+this.prefix+'MessagePublisher_publishMessage_string_string_string_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create a div with '@inner' as inner elements.
    * @inner - the inner text
	*/
	this.createSeletonGui=function(inner) {
		return 	'<!-- gui for Organ_contract -->'
		+	'	<div class="contract" id="'+this.prefix+'Organ_contract">'
		+ inner
		+'</div>';
	}


	//eventguis

	/**
	* Create a gui for the FunctionMemberChange event.
    * @prefix - a prefix
	* @blockHash - the bolckhash 
	* @blockNumber - the number of the block
	*/
	this.createFunctionMemberChangeLogDataGui = function(prefix, blockHash, blockNumber
	,oldMember	,functionId	,newMember	) {
		return '<div class="eventRow">'
        +'<div class="eventValue">'+oldMember+'</div>'
        +'<div class="eventValue">'+functionId+'</div>'
        +'<div class="eventValue">'+newMember+'</div>'
        +' </div>';
	}

	/**
	* Create a gui for the FunctionChange event.
    * @prefix - a prefix
	* @blockHash - the bolckhash 
	* @blockNumber - the number of the block
	*/
	this.createFunctionChangeLogDataGui = function(prefix, blockHash, blockNumber
	,_type	,_function	) {
		return '<div class="eventRow">'
        +'<div class="eventValue">'+_type+'</div>'
        +'<div class="eventValue">'+_function+'</div>'
        +' </div>';
	}

}//end guifactory

/**
* Class OrganController. 
* The controller wrap's the 'instance' contract and binds all actions to document elements.
* Parameters are taken from elements with self.prefix+'functionName_parameterName'
*
* self.prefix+'OrganController.setAddress' - 
* self.prefix+'Organ_updateAttributes'     - 
* self.prefix+'Organ_getOrganFunction_uint -
* self.prefix+'Manageable_addManager_address -
* self.prefix+'Organ_changeMember_uint_address -
* self.prefix+'Manageable_removeManager_address -
* self.prefix+'Organ_createFunction_string_string -
* self.prefix+'Manageable_isManager_address -
* self.prefix+'Organ_initalizeOrgan -
* self.prefix+'Organ_publishFunctionMessage_uint_string_string_string -
* self.prefix+'Organ_createBallot_string_bytes32 -
* self.prefix+'Organ_getLastBallot -
* self.prefix+'Organ_getOrganBlog -
* self.prefix+'Organ_addOrganFunction_address_string -
*/
function OrganController() {

	this.instance = undefined;
	this.prefix='';
	this.contractAddress = undefined; 
	this.eventlogPrefix = '';
	var self = this;

	/**
	* Binds the element with the prefix-id to the corresponding element.
	*/
	this.bindGui=function() {
		console.log('bind gui for:'+self.prefix);
		var btn = document.getElementById(self.prefix+'OrganController.setAddress');
		if(btn!=undefined)		
			btn.onclick = this.setAddress;
		else console.log('addres widget not bound');

		var btn = document.getElementById(self.prefix+'Organ_updateAttributes');
		if(btn!=undefined)
			btn.onclick = this._updateAttributes;
		else console.log('_updateAttributes widget not bound');
		var btn = document.getElementById(self.prefix+'OrganController.Organ_getOrganFunction_uint');
		if(btn!=undefined)
			btn.onclick = this.Organ_getOrganFunction_uint;
		else console.log('Organ_getOrganFunction_uint widget not bound');
		var btn = document.getElementById(self.prefix+'OrganController.Manageable_addManager_address');
		if(btn!=undefined)
			btn.onclick = this.Manageable_addManager_address;
		else console.log('Manageable_addManager_address widget not bound');
		var btn = document.getElementById(self.prefix+'OrganController.Organ_changeMember_uint_address');
		if(btn!=undefined)
			btn.onclick = this.Organ_changeMember_uint_address;
		else console.log('Organ_changeMember_uint_address widget not bound');
		var btn = document.getElementById(self.prefix+'OrganController.Manageable_removeManager_address');
		if(btn!=undefined)
			btn.onclick = this.Manageable_removeManager_address;
		else console.log('Manageable_removeManager_address widget not bound');
		var btn = document.getElementById(self.prefix+'OrganController.Organ_createFunction_string_string');
		if(btn!=undefined)
			btn.onclick = this.Organ_createFunction_string_string;
		else console.log('Organ_createFunction_string_string widget not bound');
		var btn = document.getElementById(self.prefix+'OrganController.Manageable_isManager_address');
		if(btn!=undefined)
			btn.onclick = this.Manageable_isManager_address;
		else console.log('Manageable_isManager_address widget not bound');
		var btn = document.getElementById(self.prefix+'OrganController.Organ_initalizeOrgan');
		if(btn!=undefined)
			btn.onclick = this.Organ_initalizeOrgan;
		else console.log('Organ_initalizeOrgan widget not bound');
		var btn = document.getElementById(self.prefix+'OrganController.Organ_publishFunctionMessage_uint_string_string_string');
		if(btn!=undefined)
			btn.onclick = this.Organ_publishFunctionMessage_uint_string_string_string;
		else console.log('Organ_publishFunctionMessage_uint_string_string_string widget not bound');
		var btn = document.getElementById(self.prefix+'OrganController.Organ_createBallot_string_bytes32');
		if(btn!=undefined)
			btn.onclick = this.Organ_createBallot_string_bytes32;
		else console.log('Organ_createBallot_string_bytes32 widget not bound');
		var btn = document.getElementById(self.prefix+'OrganController.Organ_getLastBallot');
		if(btn!=undefined)
			btn.onclick = this.Organ_getLastBallot;
		else console.log('Organ_getLastBallot widget not bound');
		var btn = document.getElementById(self.prefix+'OrganController.Organ_getOrganBlog');
		if(btn!=undefined)
			btn.onclick = this.Organ_getOrganBlog;
		else console.log('Organ_getOrganBlog widget not bound');
		var btn = document.getElementById(self.prefix+'OrganController.Organ_addOrganFunction_address_string');
		if(btn!=undefined)
			btn.onclick = this.Organ_addOrganFunction_address_string;
		else console.log('Organ_addOrganFunction_address_string widget not bound');
		var btn = document.getElementById(self.prefix+'OrganController.MessagePublisher_publishMessage_string_string_string');
		if(btn!=undefined)
			btn.onclick = this.MessagePublisher_publishMessage_string_string_string;
		else console.log('MessagePublisher_publishMessage_string_string_string widget not bound');


	}

	/**
	* Set the address.
	*/
	this.setAddress=function() {
		var _address = document.getElementById(self.prefix+'Organ_address');
		if(_address==null)return;

		self.Organ_instance = OrganContract.at(_address.value);
		self.contractAddress = _address.value;
		self._updateAttributes();
	}
	
	/**
	* Update attributes.
	*
	* prefix+'Organ_memberRegistry_value' - 
	* prefix+'Organ_organName_value' - 
	* prefix+'Organ_lastFunctionId_value' - 
	* prefix+'Organ_mangerCount_value' - 
	* prefix+'Organ_blogRegistry_value' - 
	* prefix+'Organ_isActive_value' - 
	* prefix+'Organ_ballotCount_value' - 
	**/
	this._updateAttributes=function () {
		if(this.instance===null) return;
		// update attributes
		var memberRegistry_res = self.instance.memberRegistry();
		var e = document.getElementById(self.prefix+'Organ_memberRegistry_value');
		if(memberRegistry_res!=null && e!=null)
			e.innerText = memberRegistry_res;
		else console.log(self.prefix+'Organ_memberRegistry_value not found');
		var organName_res = self.instance.organName();
		var e = document.getElementById(self.prefix+'Organ_organName_value');
		if(organName_res!=null && e!=null)
			e.innerText = organName_res;
		else console.log(self.prefix+'Organ_organName_value not found');
		var lastFunctionId_res = self.instance.lastFunctionId();
		var e = document.getElementById(self.prefix+'Organ_lastFunctionId_value');
		if(lastFunctionId_res!=null && e!=null)
			e.innerText = lastFunctionId_res;
		else console.log(self.prefix+'Organ_lastFunctionId_value not found');
		var mangerCount_res = self.instance.mangerCount();
		var e = document.getElementById(self.prefix+'Organ_mangerCount_value');
		if(mangerCount_res!=null && e!=null)
			e.innerText = mangerCount_res;
		else console.log(self.prefix+'Organ_mangerCount_value not found');
		var blogRegistry_res = self.instance.blogRegistry();
		var e = document.getElementById(self.prefix+'Organ_blogRegistry_value');
		if(blogRegistry_res!=null && e!=null)
			e.innerText = blogRegistry_res;
		else console.log(self.prefix+'Organ_blogRegistry_value not found');
		var isActive_res = self.instance.isActive();
		var e = document.getElementById(self.prefix+'Organ_isActive_value');
		if(isActive_res!=null && e!=null)
			e.innerText = isActive_res;
		else console.log(self.prefix+'Organ_isActive_value not found');
		var ballotCount_res = self.instance.ballotCount();
		var e = document.getElementById(self.prefix+'Organ_ballotCount_value');
		if(ballotCount_res!=null && e!=null)
			e.innerText = ballotCount_res;
		else console.log(self.prefix+'Organ_ballotCount_value not found');
		var e = document.getElementById(self.prefix+'Organ_contract_attribute_managers_input');
		if(e!=null){
			var _key = e.value;
			if(_key!='') {
			var managers_res = self.instance.managers(_key);
			if(managers_res!=null){
				var e1 = document.getElementById(self.prefix+'Organ_managers_value');
				if(e1!=null)	
					e1.innerText = managers_res;
			}}}
	}

	//call functions
	
	/**
	* Calls the contract function Organ_canAccess.
	*
	**/
	this.Manageable_canAccess=function() {
		var res = self.instance.canAccess();
		var e = document.getElementById(self.prefix+'Manageable_canAccess_res');
		if(res!=null && e!=null)
			e.innerText = res;
	}
	
	/**
	* Calls the contract function Organ_isMember.
	*
	* this.prefix+'MemberAware_isMember_address__address' -
	**/
	this.MemberAware_isMember_address=function() {
		var e = document.getElementById(self.prefix+'MemberAware_isMember_address__address');
		if(e!=null)
			var param__address = e.value;
		else console.log(self.prefix+'MemberAware_isMember_address__address not found');
		var res = self.instance.isMember(param__address);
		var e = document.getElementById(self.prefix+'MemberAware_isMember_address_res');
		if(res!=null && e!=null)
			e.innerText = res;
	}
	
	/**
	* Calls the contract function Organ_getOrganFunction.
	*
	* this.prefix+'Organ_getOrganFunction_uint__id' -
	**/
	this.Organ_getOrganFunction_uint=function() {
		var e = document.getElementById(self.prefix+'Organ_getOrganFunction_uint__id');
		if(e!=null)
			var param__id = e.value;
		else console.log(self.prefix+'Organ_getOrganFunction_uint__id not found');
		var res = self.instance.getOrganFunction(param__id);
		var e = document.getElementById(self.prefix+'Organ_getOrganFunction_uint_res');
		if(res!=null && e!=null)
			e.innerText = res;
	}
	
	/**
	* Calls the contract function Organ_addManager.
	*
	* this.prefix+'Manageable_addManager_address__newManagerAddress' -
	**/
	this.Manageable_addManager_address=function() {
		var e = document.getElementById(self.prefix+'Manageable_addManager_address__newManagerAddress');
		if(e!=null)
			var param__newManagerAddress = e.value;
		else console.log(self.prefix+'Manageable_addManager_address__newManagerAddress not found');
		var res = self.instance.addManager(param__newManagerAddress);
	}
	
	/**
	* Calls the contract function Organ_changeMember.
	*
	* this.prefix+'Organ_changeMember_uint_address__id' -
	* this.prefix+'Organ_changeMember_uint_address__address' -
	**/
	this.Organ_changeMember_uint_address=function() {
		var e = document.getElementById(self.prefix+'Organ_changeMember_uint_address__id');
		if(e!=null)
			var param__id = e.value;
		else console.log(self.prefix+'Organ_changeMember_uint_address__id not found');
		var e = document.getElementById(self.prefix+'Organ_changeMember_uint_address__address');
		if(e!=null)
			var param__address = e.value;
		else console.log(self.prefix+'Organ_changeMember_uint_address__address not found');
		var res = self.instance.changeMember(param__id, param__address);
	}
	
	/**
	* Calls the contract function Organ_removeManager.
	*
	* this.prefix+'Manageable_removeManager_address__managerAddress' -
	**/
	this.Manageable_removeManager_address=function() {
		var e = document.getElementById(self.prefix+'Manageable_removeManager_address__managerAddress');
		if(e!=null)
			var param__managerAddress = e.value;
		else console.log(self.prefix+'Manageable_removeManager_address__managerAddress not found');
		var res = self.instance.removeManager(param__managerAddress);
	}
	
	/**
	* Calls the contract function Organ_createFunction.
	*
	* this.prefix+'Organ_createFunction_string_string__functionName' -
	* this.prefix+'Organ_createFunction_string_string__constittiutionHash' -
	**/
	this.Organ_createFunction_string_string=function() {
		var e = document.getElementById(self.prefix+'Organ_createFunction_string_string__functionName');
		if(e!=null)
			var param__functionName = e.value;
		else console.log(self.prefix+'Organ_createFunction_string_string__functionName not found');
		var e = document.getElementById(self.prefix+'Organ_createFunction_string_string__constittiutionHash');
		if(e!=null)
			var param__constittiutionHash = e.value;
		else console.log(self.prefix+'Organ_createFunction_string_string__constittiutionHash not found');
		var res = self.instance.createFunction(param__functionName, param__constittiutionHash);
	}
	
	/**
	* Calls the contract function Organ_isManager.
	*
	* this.prefix+'Manageable_isManager_address__managerAddress' -
	**/
	this.Manageable_isManager_address=function() {
		var e = document.getElementById(self.prefix+'Manageable_isManager_address__managerAddress');
		if(e!=null)
			var param__managerAddress = e.value;
		else console.log(self.prefix+'Manageable_isManager_address__managerAddress not found');
		var res = self.instance.isManager(param__managerAddress);
		var e = document.getElementById(self.prefix+'Manageable_isManager_address_res');
		if(res!=null && e!=null)
			e.innerText = res;
	}
	
	/**
	* Calls the contract function Organ_initalizeOrgan.
	*
	**/
	this.Organ_initalizeOrgan=function() {
		var res = self.instance.initalizeOrgan();
	}
	
	/**
	* Calls the contract function Organ_publishFunctionMessage.
	*
	* this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_id' -
	* this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_message' -
	* this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_hash' -
	* this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_er' -
	**/
	this.Organ_publishFunctionMessage_uint_string_string_string=function() {
		var e = document.getElementById(self.prefix+'Organ_publishFunctionMessage_uint_string_string_string_id');
		if(e!=null)
			var param_id = e.value;
		else console.log(self.prefix+'Organ_publishFunctionMessage_uint_string_string_string_id not found');
		var e = document.getElementById(self.prefix+'Organ_publishFunctionMessage_uint_string_string_string_message');
		if(e!=null)
			var param_message = e.value;
		else console.log(self.prefix+'Organ_publishFunctionMessage_uint_string_string_string_message not found');
		var e = document.getElementById(self.prefix+'Organ_publishFunctionMessage_uint_string_string_string_hash');
		if(e!=null)
			var param_hash = e.value;
		else console.log(self.prefix+'Organ_publishFunctionMessage_uint_string_string_string_hash not found');
		var e = document.getElementById(self.prefix+'Organ_publishFunctionMessage_uint_string_string_string_er');
		if(e!=null)
			var param_er = e.value;
		else console.log(self.prefix+'Organ_publishFunctionMessage_uint_string_string_string_er not found');
		var res = self.instance.publishFunctionMessage(param_id, param_message, param_hash, param_er);
	}
	
	/**
	* Calls the contract function Organ_createBallot.
	*
	* this.prefix+'Organ_createBallot_string_bytes32_name' -
	* this.prefix+'Organ_createBallot_string_bytes32_proposalNames' -
	**/
	this.Organ_createBallot_string_bytes32=function() {
		var e = document.getElementById(self.prefix+'Organ_createBallot_string_bytes32_name');
		if(e!=null)
			var param_name = e.value;
		else console.log(self.prefix+'Organ_createBallot_string_bytes32_name not found');
		var e = document.getElementById(self.prefix+'Organ_createBallot_string_bytes32_proposalNames');
		if(e!=null)
			var param_proposalNames = e.value;
		else console.log(self.prefix+'Organ_createBallot_string_bytes32_proposalNames not found');
		var res = self.instance.createBallot(param_name, param_proposalNames);
		var e = document.getElementById(self.prefix+'Organ_createBallot_string_bytes32_res');
		if(res!=null && e!=null)
			e.innerText = res;
	}
	
	/**
	* Calls the contract function Organ_getLastBallot.
	*
	**/
	this.Organ_getLastBallot=function() {
		var res = self.instance.getLastBallot();
		var e = document.getElementById(self.prefix+'Organ_getLastBallot_res');
		if(res!=null && e!=null)
			e.innerText = res;
	}
	
	/**
	* Calls the contract function Organ_getOrganBlog.
	*
	**/
	this.Organ_getOrganBlog=function() {
		var res = self.instance.getOrganBlog();
		var e = document.getElementById(self.prefix+'Organ_getOrganBlog_res');
		if(res!=null && e!=null)
			e.innerText = res;
	}
	
	/**
	* Calls the contract function Organ_addOrganFunction.
	*
	* this.prefix+'Organ_addOrganFunction_address_string__of' -
	* this.prefix+'Organ_addOrganFunction_address_string__name' -
	**/
	this.Organ_addOrganFunction_address_string=function() {
		var e = document.getElementById(self.prefix+'Organ_addOrganFunction_address_string__of');
		if(e!=null)
			var param__of = e.value;
		else console.log(self.prefix+'Organ_addOrganFunction_address_string__of not found');
		var e = document.getElementById(self.prefix+'Organ_addOrganFunction_address_string__name');
		if(e!=null)
			var param__name = e.value;
		else console.log(self.prefix+'Organ_addOrganFunction_address_string__name not found');
		var res = self.instance.addOrganFunction(param__of, param__name);
	}
	
	/**
	* Calls the contract function Organ_publishMessage.
	*
	* this.prefix+'MessagePublisher_publishMessage_string_string_string_message' -
	* this.prefix+'MessagePublisher_publishMessage_string_string_string_hash' -
	* this.prefix+'MessagePublisher_publishMessage_string_string_string_er' -
	**/
	this.MessagePublisher_publishMessage_string_string_string=function() {
		var e = document.getElementById(self.prefix+'MessagePublisher_publishMessage_string_string_string_message');
		if(e!=null)
			var param_message = e.value;
		else console.log(self.prefix+'MessagePublisher_publishMessage_string_string_string_message not found');
		var e = document.getElementById(self.prefix+'MessagePublisher_publishMessage_string_string_string_hash');
		if(e!=null)
			var param_hash = e.value;
		else console.log(self.prefix+'MessagePublisher_publishMessage_string_string_string_hash not found');
		var e = document.getElementById(self.prefix+'MessagePublisher_publishMessage_string_string_string_er');
		if(e!=null)
			var param_er = e.value;
		else console.log(self.prefix+'MessagePublisher_publishMessage_string_string_string_er not found');
		var res = self.instance.publishMessage(param_message, param_hash, param_er);
	}
	
//delegated calls
}// end controller	

/**
* class as GlueCode OrganManager,
* uses prefix + 'GuiContainer' as target element.
* It combines a OrganController as 'c' and a OrganGuiFactory as 'g'.
**/
function OrganManager(prefix,contract,containerId) {
	this.prefix = prefix;
	var self = this;
	this.c = new OrganController();
	this.c.prefix=prefix;
	this.c.instance=contract;
	this.c.contractAddress = contract.address;
	this.g = new OrganGuiFactory();
	this.g.prefix = prefix;
	this.containerId = containerId;
	this.eventlogPrefix = '';
	this.guiFunction = null;
	this.eventFunctionMemberChange = null;
	this.eventFunctionChange = null;
	
	/**
	* adds the gui element to the given 'e' element
	**/
	this.addGui = function(e) {
		if(e==null)
			e = document.getElementById(this.containerId);
		if(e==null){
		console.log(this.containerId+' not found or :'+e);
		return;
		}
		var elemDiv = document.createElement('div');
		elemDiv.id= this.prefix +'Organ_gui';
		e.appendChild(elemDiv);
		if(this.guiFunction==null)
			elemDiv.innerHTML = this.createGui(this.g);
		else elemDiv.innerHTML = this.guiFunction(this.g);
		
		var e = document.getElementById(this.prefix+'Organ_address');
		if(e!=null)
			e.value = this.c.contractAddress;
		else 
			console.log(this.prefix+'Organ_address not found');
		this.c.bindGui();
	}	
	
	/**
	* clears the given element 'e'.
	**/
	this.clearGui = function(e){
		if(e==null)
			e = document.getElementById(this.containerId);
		e.innerHTML ='';
	}

	/**
	* Create the gui with the given 'guiFactory'. Places an sceleton arount it.
	* @return the gui txt used as innerHTML
	**/
	this.createGui = function(guifactory){
		var txt ='';
//Start of user code Organ_create_gui_js
		txt = txt + guifactory.createDefaultGui();
		// End of user code
		return guifactory.createSeletonGui(txt);

	}

	/**
	* Create a small gui, only the attributes. Places an sceleton arount it.
	**/	
	this.createSmallGui = function(guifactory){
		var txt ='';
		txt = txt + guifactory.createAttributesGui();
		return guifactory.createSeletonGui(txt);

	}

	/**
	* Update the attributes.
	**/
	this.updateGui = function(){
		this.c._updateAttributes();
	}

	/**
	* Getter for the contract 'Organ' instance.
	**/
	this.getContract = function(){
		return this.c.instance;
	}

	/**
	* Watch for the contract events.
	* The events are stored in an element with the id this.eventlogPrefix+'eventLog'.
	**/
	this.watchEvents=function(){
	var event_FunctionMemberChange = this.getContract().FunctionMemberChange({},{fromBlock: 0});
	var elp = this.eventlogPrefix;
	var callback = this.eventFunctionMemberChange;
	event_FunctionMemberChange.watch(function(error,result){
	if(!error){
		if(callback!=null)
			callback(result);

		}else
			console.log(error);	
	});
	var event_FunctionChange = this.getContract().FunctionChange({},{fromBlock: 0});
	var elp = this.eventlogPrefix;
	var callback = this.eventFunctionChange;
	event_FunctionChange.watch(function(error,result){
	if(!error){
		if(callback!=null)
			callback(result);

		}else
			console.log(error);	
	});
	}

}// end of manager

/**
* Manages a list of OrganManager uses the guid id to place the gui which is also the eventlogPrefix
*/
function OrganGuiMananger(guiId){
	this.prefix = guiId;
	this.managers=new Array();	//[];		
	this.guiFunction = null;
	this.eventFunctionMemberChange = null;
	this.eventFunctionChange = null;
	this.managerMap = {};
	
	/**
	* Add a contract to this manager.
	* @contract the web3 contract instance
	*/
	this.addManager = function(contract) {
		var m = new OrganManager(contract.address,contract,this.prefix);
		m.eventlogPrefix = this.prefix;
		m.eventFunctionMemberChange = this.eventFunctionMemberChange;
		m.eventFunctionChange = this.eventFunctionChange;
		m.watchEvents();
		if(this.guiFunction!=null)
			m.guiFunction = this.guiFunction;
		this.managers.push(m);
		this.managerMap[contract.address] = m;
	}

	/**
	 * Changes the gui function for all managers.
	 */
	this.changeGuiFunction =  function(guiFunction){
		for (i in this.managers) {
			var manager = this.managers[i] ;
			manager.guiFunction = guiFunction;
		}
	}
	
	/**
	* Clears the element or the element with id 'prefix'.
	* @e an element
	*/
	this.clearGui = function(e){
		if(e==null)
			e = document.getElementById(this.prefix);
		if(e!==undefined)
			e.innerHTML ='';
	}
		
	/**
	* Displays all guis of the managed contracts.
	* @e an element
	*/
	this.displayGui = function(e){
		if(e==null)
			e = document.getElementById(this.prefix);
		if(e==undefined) return;
		for (i in this.managers) {
			var manager = this.managers[i] ;
			var elemDiv = document.createElement('div');
			elemDiv.id= manager.prefix + 'GuiContainer';//'Organ_gui';
			e.appendChild(elemDiv);
			if(this.guiFunction==null)
				elemDiv.innerHTML = manager.createGui(manager.g);
			else elemDiv.innerHTML = this.guiFunction(manager.g);
			manager.c.bindGui();
		}
	}
	/**
	* Displays a simple gui.
	*/
	this.displaySimpleGui = function(){
		for (i in this.managers) {
			var manager = this.managers[i] ;
			manager.addGui(null);
		}
	}
	/**
	* Update the gui.
	*/
	this.updateGui = function(){
		for (i in this.managers) {
			this.managers[i].updateGui();
		}
//		console.log('update');
	}
}// end of gui mananger

/**
* Deploys the contract.
* Each constructor is available.
**/
function OrganDeployment(guiId){
	this.prefix = guiId;
//Start of user code Organ_deployment_attributes_js
	// TODO: implement
	// End of user code

	
	/**
	* The default deployer function.
	**/
	this.deployDefault = function(){
		//Start of user code Organ_deployDefault
		// TODO: implement
		// End of user code
	}

//Start of user code Organ_deployment_js
	// TODO: implement
	// End of user code
}
/**
* A simple bean class around the contract.
* The PartyModel.
**/
function PartyModel(contract) {
this.contract = contract;
	/**
	* Getter for name.
	**/
	this.getName = function(){
		return contract.name(); 
	}
	/**
	* Getter for mangerCount.
	**/
	this.getMangerCount = function(){
		return contract.mangerCount(); 
	}
	/**
	* Getter for memberRegistry.
	**/
	this.getMemberRegistry = function(){
		return contract.memberRegistry(); 
	}
	/**
	* Getter for constitutionHash.
	**/
	this.getConstitutionHash = function(){
		return contract.constitutionHash(); 
	}
	/**
	* Getter for organCount.
	**/
	this.getOrganCount = function(){
		return contract.organCount(); 
	}
	/**
	* Getter for blogregistry.
	**/
	this.getBlogregistry = function(){
		return contract.blogregistry(); 
	}
	/**
	* Getter for parent.
	**/
	this.getParent = function(){
		return contract.parent(); 
	}
	/**
	* Getter for subDivisionCount.
	**/
	this.getSubDivisionCount = function(){
		return contract.subDivisionCount(); 
	}
	/**
	* Get the mapped value for a key.
	*/
	this.getManagers=function(key) {
		return contract.managers(key);
	}
	/**
	* Get the mapped value for a key.
	*/
	this.getOrgans=function(key) {
		return contract.organs(key);
	}
	/**
	* Get the mapped value for a key.
	*/
	this.getSubDivisions=function(key) {
		return contract.subDivisions(key);
	}
	/**
	* Call addManager.
	**/
	this.addManager = function(_newManagerAddress){
		return contract.addManager(_newManagerAddress); 
	}
	/**
	* Call removeManager.
	**/
	this.removeManager = function(_managerAddress){
		return contract.removeManager(_managerAddress); 
	}
	/**
	* Call isManager.
	**/
	this.isManager = function(_managerAddress){
		return contract.isManager(_managerAddress); 
	}
	/**
	* Call createOrgan.
	**/
	this.createOrgan = function(organName){
		return contract.createOrgan(organName); 
	}
	/**
	* Call addOrgan.
	**/
	this.addOrgan = function(_organ){
		return contract.addOrgan(_organ); 
	}
	/**
	* Call addSubDivision.
	**/
	this.addSubDivision = function(_subDivision){
		return contract.addSubDivision(_subDivision); 
	}
	/**
	* Call removeSubDivision.
	**/
	this.removeSubDivision = function(_divisionId){
		return contract.removeSubDivision(_divisionId); 
	}
}// end of function PartyModel

/**
* Gui factory Party
**/
function PartyGuiFactory() {
	this.prefix='';
	
	/**
	* Places the default gui to 'e' or an element with id='Party_gui'
	*/
	this.placeDefaultGui=function(e) {
		if(e==null)
			e = document.getElementById(this.prefix+'Party_gui');
		if(e!=null)
			e.innerHTML = this.createDefaultGui();
		else
			console.log(this.prefix+'Party_gui not found');
	}

	/**
	* The default generated gui with all actions and attributes.
	*/
	this.createDefaultGui=function() {
		return 		'<!-- gui for Party_contract -->'
+		'		<div class="contract" id="'+this.prefix+'Party_contract">'
+		'		Party:'
+		'		  <input type="text" id="'+this.prefix+'Party_address"> <button id="'+this.prefix+'PartyController.setAddress" onclick="'+this.prefix+'PartyController.setAddress()">change Party Address</button>'
+		'		  <div class="contract_attributes" id="'+this.prefix+'Party_contract_attributes"> attributes:'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Party_contract_attribute_name"> name:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'Party_name_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Party_contract_attribute_mangerCount"> mangerCount:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'Party_mangerCount_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Party_contract_attribute_memberRegistry"> memberRegistry:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'Party_memberRegistry_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Party_contract_attribute_constitutionHash"> constitutionHash:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'Party_constitutionHash_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Party_contract_attribute_organCount"> organCount:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'Party_organCount_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Party_contract_attribute_blogregistry"> blogregistry:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'Party_blogregistry_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Party_contract_attribute_parent"> parent:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'Party_parent_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Party_contract_attribute_subDivisionCount"> subDivisionCount:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'Party_subDivisionCount_value"> </span>'
+		'		    </div>'
+		'		'
+		'		<div class="Value_Mapping" id="'+this.prefix+'Party_contract_attribute_managers">mapping  managers:'
+		'				<input class="function_input" type="text" id="'+this.prefix+'Party_contract_attribute_managers_input">(address)'
+		'		    	<div class="Mapping_value" id="'+this.prefix+'Party_contract_attribute_address"> bool:'
+		'		      		<span class="contract_attribute_value" id="'+this.prefix+'Party_managers_value"> </span>'
+		'		    	</div>'
+		'		  </div>'
+		'		<div class="Value_Mapping" id="'+this.prefix+'Party_contract_attribute_organs">mapping  organs:'
+		'				<input class="function_input" type="number" id="'+this.prefix+'Party_contract_attribute_organs_input">(uint)'
+		'		    	<div class="Mapping_value" id="'+this.prefix+'Party_contract_attribute_uint"> Organ:'
+		'		      		<span class="contract_attribute_value" id="'+this.prefix+'Party_organs_value"> </span>'
+		'		    	</div>'
+		'		  </div>'
+		'		<div class="Value_Mapping" id="'+this.prefix+'Party_contract_attribute_subDivisions">mapping  subDivisions:'
+		'				<input class="function_input" type="number" id="'+this.prefix+'Party_contract_attribute_subDivisions_input">(uint)'
+		'		    	<div class="Mapping_value" id="'+this.prefix+'Party_contract_attribute_uint"> Party:'
+		'		      		<span class="contract_attribute_value" id="'+this.prefix+'Party_subDivisions_value"> </span>'
+		'		    	</div>'
+		'		  </div>'
+		'		    <button class="function_btn" id="'+this.prefix+'Party_updateAttributes" onclick="'+this.prefix+'PartyController._updateAttributes()">update Party attributes</button>'
+		'		  </div>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'Party_contract_function_Manageable_addManager_address">'
+		'		<legend>addManager</legend>'
+		'			  <label class="function_parameter" for="Manageable_addManager_address__newManagerAddress">_newManagerAddress</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Manageable_addManager_address__newManagerAddress"'
+		'				  placeholder="_newManagerAddress"/>'
+		'			<button class="function_btn" id="'+this.prefix+'PartyController.Manageable_addManager_address" onclick="'+this.prefix+'PartyController.Manageable_addManager_address()">addManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_addManager_address_res"></div>'
+		'		  </fieldset>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'Party_contract_function_Manageable_removeManager_address">'
+		'		<legend>removeManager</legend>'
+		'			  <label class="function_parameter" for="Manageable_removeManager_address__managerAddress">_managerAddress</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Manageable_removeManager_address__managerAddress"'
+		'				  placeholder="_managerAddress"/>'
+		'			<button class="function_btn" id="'+this.prefix+'PartyController.Manageable_removeManager_address" onclick="'+this.prefix+'PartyController.Manageable_removeManager_address()">removeManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_removeManager_address_res"></div>'
+		'		  </fieldset>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'Party_contract_function_Manageable_isManager_address">'
+		'		<legend>isManager</legend>'
+		'			  <label class="function_parameter" for="Manageable_isManager_address__managerAddress">_managerAddress</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Manageable_isManager_address__managerAddress"'
+		'				  placeholder="_managerAddress"/>'
+		'			<button class="function_btn" id="'+this.prefix+'PartyController.Manageable_isManager_address" onclick="'+this.prefix+'PartyController.Manageable_isManager_address()">isManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_isManager_address_res"></div>'
+		'		  </fieldset>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'Party_contract_function_Party_createOrgan_string">'
+		'		<legend>createOrgan</legend>'
+		'			  <label class="function_parameter" for="Party_createOrgan_string_organName">organName</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Party_createOrgan_string_organName"'
+		'				  placeholder="organName"/>'
+		'			<button class="function_btn" id="'+this.prefix+'PartyController.Party_createOrgan_string" onclick="'+this.prefix+'PartyController.Party_createOrgan_string()">createOrgan</button>'
+		'			<div class="function_result" id="'+this.prefix+'Party_createOrgan_string_res"></div>'
+		'		  </fieldset>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'Party_contract_function_Party_addOrgan_address">'
+		'		<legend>addOrgan</legend>'
+		'			  <label class="function_parameter" for="Party_addOrgan_address__organ">_organ</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Party_addOrgan_address__organ"'
+		'				  placeholder="_organ"/>'
+		'			<button class="function_btn" id="'+this.prefix+'PartyController.Party_addOrgan_address" onclick="'+this.prefix+'PartyController.Party_addOrgan_address()">addOrgan</button>'
+		'			<div class="function_result" id="'+this.prefix+'Party_addOrgan_address_res"></div>'
+		'		  </fieldset>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'Party_contract_function_Party_addSubDivision_address">'
+		'		<legend>addSubDivision</legend>'
+		'			  <label class="function_parameter" for="Party_addSubDivision_address__subDivision">_subDivision</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Party_addSubDivision_address__subDivision"'
+		'				  placeholder="_subDivision"/>'
+		'			<button class="function_btn" id="'+this.prefix+'PartyController.Party_addSubDivision_address" onclick="'+this.prefix+'PartyController.Party_addSubDivision_address()">addSubDivision</button>'
+		'			<div class="function_result" id="'+this.prefix+'Party_addSubDivision_address_res"></div>'
+		'		  </fieldset>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'Party_contract_function_Party_removeSubDivision_uint">'
+		'		<legend>removeSubDivision</legend>'
+		'			  <label class="function_parameter" for="Party_removeSubDivision_uint__divisionId">_divisionId</label>'
+		'				<input class="function_input" type="number" '
+		'		          id="'+this.prefix+'Party_removeSubDivision_uint__divisionId"'
+		'				  placeholder="_divisionId"/>'
+		'			<button class="function_btn" id="'+this.prefix+'PartyController.Party_removeSubDivision_uint" onclick="'+this.prefix+'PartyController.Party_removeSubDivision_uint()">removeSubDivision</button>'
+		'			<div class="function_result" id="'+this.prefix+'Party_removeSubDivision_uint_res"></div>'
+		'		  </fieldset>'
+		'		'
+		'		</div>'
;
	}

	/**
	* Create the gui for the attributes.
	*/
	this.createAttributesGui=function() {
		return 		'    <div class="contract_attribute" id="'+this.prefix+'Party_contract_attribute_name"> name:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'Party_name_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Party_contract_attribute_mangerCount"> mangerCount:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'Party_mangerCount_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Party_contract_attribute_memberRegistry"> memberRegistry:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'Party_memberRegistry_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Party_contract_attribute_constitutionHash"> constitutionHash:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'Party_constitutionHash_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Party_contract_attribute_organCount"> organCount:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'Party_organCount_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Party_contract_attribute_blogregistry"> blogregistry:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'Party_blogregistry_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Party_contract_attribute_parent"> parent:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'Party_parent_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Party_contract_attribute_subDivisionCount"> subDivisionCount:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'Party_subDivisionCount_value"> </span>'
+		'		    </div>'
+		'		'
;
	}

	/**
	* Create the gui.
	*/
	this.createPlainGui=function(){
		return this.createAttributesGui()
				+ this.createManageable_addManager_addressGui
				+ this.createManageable_removeManager_addressGui
				+ this.createManageable_isManager_addressGui
				+ this.createParty_createOrgan_stringGui
				+ this.createParty_addOrgan_addressGui
				+ this.createParty_addSubDivision_addressGui
				+ this.createParty_removeSubDivision_uintGui
				;
	}

	/**
	* Create the gui for the function addManager.
	*/
	this.createManageable_addManager_addressGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'Party_contract_function_Manageable_addManager_address">'
+		'		<legend>addManager</legend>'
+		'			  <label class="function_parameter" for="Manageable_addManager_address__newManagerAddress">_newManagerAddress</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Manageable_addManager_address__newManagerAddress"'
+		'				  placeholder="_newManagerAddress"/>'
+		'			<button class="function_btn" id="'+this.prefix+'PartyController.Manageable_addManager_address" onclick="'+this.prefix+'PartyController.Manageable_addManager_address()">addManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_addManager_address_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the function removeManager.
	*/
	this.createManageable_removeManager_addressGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'Party_contract_function_Manageable_removeManager_address">'
+		'		<legend>removeManager</legend>'
+		'			  <label class="function_parameter" for="Manageable_removeManager_address__managerAddress">_managerAddress</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Manageable_removeManager_address__managerAddress"'
+		'				  placeholder="_managerAddress"/>'
+		'			<button class="function_btn" id="'+this.prefix+'PartyController.Manageable_removeManager_address" onclick="'+this.prefix+'PartyController.Manageable_removeManager_address()">removeManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_removeManager_address_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the function isManager.
	*/
	this.createManageable_isManager_addressGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'Party_contract_function_Manageable_isManager_address">'
+		'		<legend>isManager</legend>'
+		'			  <label class="function_parameter" for="Manageable_isManager_address__managerAddress">_managerAddress</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Manageable_isManager_address__managerAddress"'
+		'				  placeholder="_managerAddress"/>'
+		'			<button class="function_btn" id="'+this.prefix+'PartyController.Manageable_isManager_address" onclick="'+this.prefix+'PartyController.Manageable_isManager_address()">isManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_isManager_address_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the function createOrgan.
	*/
	this.createParty_createOrgan_stringGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'Party_contract_function_Party_createOrgan_string">'
+		'		<legend>createOrgan</legend>'
+		'			  <label class="function_parameter" for="Party_createOrgan_string_organName">organName</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Party_createOrgan_string_organName"'
+		'				  placeholder="organName"/>'
+		'			<button class="function_btn" id="'+this.prefix+'PartyController.Party_createOrgan_string" onclick="'+this.prefix+'PartyController.Party_createOrgan_string()">createOrgan</button>'
+		'			<div class="function_result" id="'+this.prefix+'Party_createOrgan_string_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the function addOrgan.
	*/
	this.createParty_addOrgan_addressGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'Party_contract_function_Party_addOrgan_address">'
+		'		<legend>addOrgan</legend>'
+		'			  <label class="function_parameter" for="Party_addOrgan_address__organ">_organ</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Party_addOrgan_address__organ"'
+		'				  placeholder="_organ"/>'
+		'			<button class="function_btn" id="'+this.prefix+'PartyController.Party_addOrgan_address" onclick="'+this.prefix+'PartyController.Party_addOrgan_address()">addOrgan</button>'
+		'			<div class="function_result" id="'+this.prefix+'Party_addOrgan_address_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the function addSubDivision.
	*/
	this.createParty_addSubDivision_addressGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'Party_contract_function_Party_addSubDivision_address">'
+		'		<legend>addSubDivision</legend>'
+		'			  <label class="function_parameter" for="Party_addSubDivision_address__subDivision">_subDivision</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Party_addSubDivision_address__subDivision"'
+		'				  placeholder="_subDivision"/>'
+		'			<button class="function_btn" id="'+this.prefix+'PartyController.Party_addSubDivision_address" onclick="'+this.prefix+'PartyController.Party_addSubDivision_address()">addSubDivision</button>'
+		'			<div class="function_result" id="'+this.prefix+'Party_addSubDivision_address_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the function removeSubDivision.
	*/
	this.createParty_removeSubDivision_uintGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'Party_contract_function_Party_removeSubDivision_uint">'
+		'		<legend>removeSubDivision</legend>'
+		'			  <label class="function_parameter" for="Party_removeSubDivision_uint__divisionId">_divisionId</label>'
+		'				<input class="function_input" type="number" '
+		'		          id="'+this.prefix+'Party_removeSubDivision_uint__divisionId"'
+		'				  placeholder="_divisionId"/>'
+		'			<button class="function_btn" id="'+this.prefix+'PartyController.Party_removeSubDivision_uint" onclick="'+this.prefix+'PartyController.Party_removeSubDivision_uint()">removeSubDivision</button>'
+		'			<div class="function_result" id="'+this.prefix+'Party_removeSubDivision_uint_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create a div with '@inner' as inner elements.
    * @inner - the inner text
	*/
	this.createSeletonGui=function(inner) {
		return 	'<!-- gui for Party_contract -->'
		+	'	<div class="contract" id="'+this.prefix+'Party_contract">'
		+ inner
		+'</div>';
	}


	//eventguis

	/**
	* Create a gui for the ConstiutionChange event.
    * @prefix - a prefix
	* @blockHash - the bolckhash 
	* @blockNumber - the number of the block
	*/
	this.createConstiutionChangeLogDataGui = function(prefix, blockHash, blockNumber
	) {
		return '<div class="eventRow">'
        +' </div>';
	}

	/**
	* Create a gui for the OrganChanged event.
    * @prefix - a prefix
	* @blockHash - the bolckhash 
	* @blockNumber - the number of the block
	*/
	this.createOrganChangedLogDataGui = function(prefix, blockHash, blockNumber
	,_organ	,_changeType	) {
		return '<div class="eventRow">'
        +'<div class="eventValue">'+_organ+'</div>'
        +'<div class="eventValue">'+_changeType+'</div>'
        +' </div>';
	}

	/**
	* Create a gui for the DivisionChanged event.
    * @prefix - a prefix
	* @blockHash - the bolckhash 
	* @blockNumber - the number of the block
	*/
	this.createDivisionChangedLogDataGui = function(prefix, blockHash, blockNumber
	,divisionAddress	,changer	,state	) {
		return '<div class="eventRow">'
        +'<div class="eventValue">'+divisionAddress+'</div>'
        +'<div class="eventValue">'+changer+'</div>'
        +'<div class="eventValue">'+state+'</div>'
        +' </div>';
	}

}//end guifactory

/**
* Class PartyController. 
* The controller wrap's the 'instance' contract and binds all actions to document elements.
* Parameters are taken from elements with self.prefix+'functionName_parameterName'
*
* self.prefix+'PartyController.setAddress' - 
* self.prefix+'Party_updateAttributes'     - 
* self.prefix+'Manageable_addManager_address -
* self.prefix+'Manageable_removeManager_address -
* self.prefix+'Manageable_isManager_address -
* self.prefix+'Party_createOrgan_string -
* self.prefix+'Party_addOrgan_address -
* self.prefix+'Party_addSubDivision_address -
* self.prefix+'Party_removeSubDivision_uint -
*/
function PartyController() {

	this.instance = undefined;
	this.prefix='';
	this.contractAddress = undefined; 
	this.eventlogPrefix = '';
	var self = this;

	/**
	* Binds the element with the prefix-id to the corresponding element.
	*/
	this.bindGui=function() {
		console.log('bind gui for:'+self.prefix);
		var btn = document.getElementById(self.prefix+'PartyController.setAddress');
		if(btn!=undefined)		
			btn.onclick = this.setAddress;
		else console.log('addres widget not bound');

		var btn = document.getElementById(self.prefix+'Party_updateAttributes');
		if(btn!=undefined)
			btn.onclick = this._updateAttributes;
		else console.log('_updateAttributes widget not bound');
		var btn = document.getElementById(self.prefix+'PartyController.Manageable_addManager_address');
		if(btn!=undefined)
			btn.onclick = this.Manageable_addManager_address;
		else console.log('Manageable_addManager_address widget not bound');
		var btn = document.getElementById(self.prefix+'PartyController.Manageable_removeManager_address');
		if(btn!=undefined)
			btn.onclick = this.Manageable_removeManager_address;
		else console.log('Manageable_removeManager_address widget not bound');
		var btn = document.getElementById(self.prefix+'PartyController.Manageable_isManager_address');
		if(btn!=undefined)
			btn.onclick = this.Manageable_isManager_address;
		else console.log('Manageable_isManager_address widget not bound');
		var btn = document.getElementById(self.prefix+'PartyController.Party_createOrgan_string');
		if(btn!=undefined)
			btn.onclick = this.Party_createOrgan_string;
		else console.log('Party_createOrgan_string widget not bound');
		var btn = document.getElementById(self.prefix+'PartyController.Party_addOrgan_address');
		if(btn!=undefined)
			btn.onclick = this.Party_addOrgan_address;
		else console.log('Party_addOrgan_address widget not bound');
		var btn = document.getElementById(self.prefix+'PartyController.Party_addSubDivision_address');
		if(btn!=undefined)
			btn.onclick = this.Party_addSubDivision_address;
		else console.log('Party_addSubDivision_address widget not bound');
		var btn = document.getElementById(self.prefix+'PartyController.Party_removeSubDivision_uint');
		if(btn!=undefined)
			btn.onclick = this.Party_removeSubDivision_uint;
		else console.log('Party_removeSubDivision_uint widget not bound');

	}

	/**
	* Set the address.
	*/
	this.setAddress=function() {
		var _address = document.getElementById(self.prefix+'Party_address');
		if(_address==null)return;

		self.Party_instance = PartyContract.at(_address.value);
		self.contractAddress = _address.value;
		self._updateAttributes();
	}
	
	/**
	* Update attributes.
	*
	* prefix+'Party_name_value' - 
	* prefix+'Party_mangerCount_value' - 
	* prefix+'Party_memberRegistry_value' - 
	* prefix+'Party_constitutionHash_value' - 
	* prefix+'Party_organCount_value' - 
	* prefix+'Party_blogregistry_value' - 
	* prefix+'Party_parent_value' - 
	* prefix+'Party_subDivisionCount_value' - 
	**/
	this._updateAttributes=function () {
		if(this.instance===null) return;
		// update attributes
		var name_res = self.instance.name();
		var e = document.getElementById(self.prefix+'Party_name_value');
		if(name_res!=null && e!=null)
			e.innerText = name_res;
		else console.log(self.prefix+'Party_name_value not found');
		var mangerCount_res = self.instance.mangerCount();
		var e = document.getElementById(self.prefix+'Party_mangerCount_value');
		if(mangerCount_res!=null && e!=null)
			e.innerText = mangerCount_res;
		else console.log(self.prefix+'Party_mangerCount_value not found');
		var memberRegistry_res = self.instance.memberRegistry();
		var e = document.getElementById(self.prefix+'Party_memberRegistry_value');
		if(memberRegistry_res!=null && e!=null)
			e.innerText = memberRegistry_res;
		else console.log(self.prefix+'Party_memberRegistry_value not found');
		var constitutionHash_res = self.instance.constitutionHash();
		var e = document.getElementById(self.prefix+'Party_constitutionHash_value');
		if(constitutionHash_res!=null && e!=null)
			e.innerText = constitutionHash_res;
		else console.log(self.prefix+'Party_constitutionHash_value not found');
		var organCount_res = self.instance.organCount();
		var e = document.getElementById(self.prefix+'Party_organCount_value');
		if(organCount_res!=null && e!=null)
			e.innerText = organCount_res;
		else console.log(self.prefix+'Party_organCount_value not found');
		var blogregistry_res = self.instance.blogregistry();
		var e = document.getElementById(self.prefix+'Party_blogregistry_value');
		if(blogregistry_res!=null && e!=null)
			e.innerText = blogregistry_res;
		else console.log(self.prefix+'Party_blogregistry_value not found');
		var parent_res = self.instance.parent();
		var e = document.getElementById(self.prefix+'Party_parent_value');
		if(parent_res!=null && e!=null)
			e.innerText = parent_res;
		else console.log(self.prefix+'Party_parent_value not found');
		var subDivisionCount_res = self.instance.subDivisionCount();
		var e = document.getElementById(self.prefix+'Party_subDivisionCount_value');
		if(subDivisionCount_res!=null && e!=null)
			e.innerText = subDivisionCount_res;
		else console.log(self.prefix+'Party_subDivisionCount_value not found');
		var e = document.getElementById(self.prefix+'Party_contract_attribute_managers_input');
		if(e!=null){
			var _key = e.value;
			if(_key!='') {
			var managers_res = self.instance.managers(_key);
			if(managers_res!=null){
				var e1 = document.getElementById(self.prefix+'Party_managers_value');
				if(e1!=null)	
					e1.innerText = managers_res;
			}}}
		var e = document.getElementById(self.prefix+'Party_contract_attribute_organs_input');
		if(e!=null){
			var _key = document.getElementById(self.prefix+'Party_contract_attribute_organs_input').value;
			if(_key!=''){
			var organs_res = self.instance.organs(_key);
			if(organs_res!=null){
				var e1 = document.getElementById(self.prefix+'Party_organs_value');
				if(e1!=null)	
					e1.innerText = organs_res;
			}}}
		var e = document.getElementById(self.prefix+'Party_contract_attribute_subDivisions_input');
		if(e!=null){
			var _key = document.getElementById(self.prefix+'Party_contract_attribute_subDivisions_input').value;
			if(_key!=''){
			var subDivisions_res = self.instance.subDivisions(_key);
			if(subDivisions_res!=null){
				var e1 = document.getElementById(self.prefix+'Party_subDivisions_value');
				if(e1!=null)	
					e1.innerText = subDivisions_res;
			}}}
	}

	//call functions
	
	/**
	* Calls the contract function Party_canAccess.
	*
	**/
	this.Manageable_canAccess=function() {
		var res = self.instance.canAccess();
		var e = document.getElementById(self.prefix+'Manageable_canAccess_res');
		if(res!=null && e!=null)
			e.innerText = res;
	}
	
	/**
	* Calls the contract function Party_addManager.
	*
	* this.prefix+'Manageable_addManager_address__newManagerAddress' -
	**/
	this.Manageable_addManager_address=function() {
		var e = document.getElementById(self.prefix+'Manageable_addManager_address__newManagerAddress');
		if(e!=null)
			var param__newManagerAddress = e.value;
		else console.log(self.prefix+'Manageable_addManager_address__newManagerAddress not found');
		var res = self.instance.addManager(param__newManagerAddress);
	}
	
	/**
	* Calls the contract function Party_removeManager.
	*
	* this.prefix+'Manageable_removeManager_address__managerAddress' -
	**/
	this.Manageable_removeManager_address=function() {
		var e = document.getElementById(self.prefix+'Manageable_removeManager_address__managerAddress');
		if(e!=null)
			var param__managerAddress = e.value;
		else console.log(self.prefix+'Manageable_removeManager_address__managerAddress not found');
		var res = self.instance.removeManager(param__managerAddress);
	}
	
	/**
	* Calls the contract function Party_isManager.
	*
	* this.prefix+'Manageable_isManager_address__managerAddress' -
	**/
	this.Manageable_isManager_address=function() {
		var e = document.getElementById(self.prefix+'Manageable_isManager_address__managerAddress');
		if(e!=null)
			var param__managerAddress = e.value;
		else console.log(self.prefix+'Manageable_isManager_address__managerAddress not found');
		var res = self.instance.isManager(param__managerAddress);
		var e = document.getElementById(self.prefix+'Manageable_isManager_address_res');
		if(res!=null && e!=null)
			e.innerText = res;
	}
	
	/**
	* Calls the contract function Party_createOrgan.
	*
	* this.prefix+'Party_createOrgan_string_organName' -
	**/
	this.Party_createOrgan_string=function() {
		var e = document.getElementById(self.prefix+'Party_createOrgan_string_organName');
		if(e!=null)
			var param_organName = e.value;
		else console.log(self.prefix+'Party_createOrgan_string_organName not found');
		var res = self.instance.createOrgan(param_organName);
	}
	
	/**
	* Calls the contract function Party_addOrgan.
	*
	* this.prefix+'Party_addOrgan_address__organ' -
	**/
	this.Party_addOrgan_address=function() {
		var e = document.getElementById(self.prefix+'Party_addOrgan_address__organ');
		if(e!=null)
			var param__organ = e.value;
		else console.log(self.prefix+'Party_addOrgan_address__organ not found');
		var res = self.instance.addOrgan(param__organ);
	}
	
	/**
	* Calls the contract function Party_addSubDivision.
	*
	* this.prefix+'Party_addSubDivision_address__subDivision' -
	**/
	this.Party_addSubDivision_address=function() {
		var e = document.getElementById(self.prefix+'Party_addSubDivision_address__subDivision');
		if(e!=null)
			var param__subDivision = e.value;
		else console.log(self.prefix+'Party_addSubDivision_address__subDivision not found');
		var res = self.instance.addSubDivision(param__subDivision);
	}
	
	/**
	* Calls the contract function Party_removeSubDivision.
	*
	* this.prefix+'Party_removeSubDivision_uint__divisionId' -
	**/
	this.Party_removeSubDivision_uint=function() {
		var e = document.getElementById(self.prefix+'Party_removeSubDivision_uint__divisionId');
		if(e!=null)
			var param__divisionId = e.value;
		else console.log(self.prefix+'Party_removeSubDivision_uint__divisionId not found');
		var res = self.instance.removeSubDivision(param__divisionId);
	}
	
//delegated calls
}// end controller	

/**
* class as GlueCode PartyManager,
* uses prefix + 'GuiContainer' as target element.
* It combines a PartyController as 'c' and a PartyGuiFactory as 'g'.
**/
function PartyManager(prefix,contract,containerId) {
	this.prefix = prefix;
	var self = this;
	this.c = new PartyController();
	this.c.prefix=prefix;
	this.c.instance=contract;
	this.c.contractAddress = contract.address;
	this.g = new PartyGuiFactory();
	this.g.prefix = prefix;
	this.containerId = containerId;
	this.eventlogPrefix = '';
	this.guiFunction = null;
	this.eventConstiutionChange = null;
	this.eventOrganChanged = null;
	this.eventDivisionChanged = null;
	
	/**
	* adds the gui element to the given 'e' element
	**/
	this.addGui = function(e) {
		if(e==null)
			e = document.getElementById(this.containerId);
		if(e==null){
		console.log(this.containerId+' not found or :'+e);
		return;
		}
		var elemDiv = document.createElement('div');
		elemDiv.id= this.prefix +'Party_gui';
		e.appendChild(elemDiv);
		if(this.guiFunction==null)
			elemDiv.innerHTML = this.createGui(this.g);
		else elemDiv.innerHTML = this.guiFunction(this.g);
		
		var e = document.getElementById(this.prefix+'Party_address');
		if(e!=null)
			e.value = this.c.contractAddress;
		else 
			console.log(this.prefix+'Party_address not found');
		this.c.bindGui();
	}	
	
	/**
	* clears the given element 'e'.
	**/
	this.clearGui = function(e){
		if(e==null)
			e = document.getElementById(this.containerId);
		e.innerHTML ='';
	}

	/**
	* Create the gui with the given 'guiFactory'. Places an sceleton arount it.
	* @return the gui txt used as innerHTML
	**/
	this.createGui = function(guifactory){
		var txt ='';
//Start of user code Party_create_gui_js
		txt = txt + guifactory.createDefaultGui();
		// End of user code
		return guifactory.createSeletonGui(txt);

	}

	/**
	* Create a small gui, only the attributes. Places an sceleton arount it.
	**/	
	this.createSmallGui = function(guifactory){
		var txt ='';
		txt = txt + guifactory.createAttributesGui();
		return guifactory.createSeletonGui(txt);

	}

	/**
	* Update the attributes.
	**/
	this.updateGui = function(){
		this.c._updateAttributes();
	}

	/**
	* Getter for the contract 'Party' instance.
	**/
	this.getContract = function(){
		return this.c.instance;
	}

	/**
	* Watch for the contract events.
	* The events are stored in an element with the id this.eventlogPrefix+'eventLog'.
	**/
	this.watchEvents=function(){
	var event_ConstiutionChange = this.getContract().ConstiutionChange({},{fromBlock: 0});
	var elp = this.eventlogPrefix;
	var callback = this.eventConstiutionChange;
	event_ConstiutionChange.watch(function(error,result){
	if(!error){
		if(callback!=null)
			callback(result);

		}else
			console.log(error);	
	});
	var event_OrganChanged = this.getContract().OrganChanged({},{fromBlock: 0});
	var elp = this.eventlogPrefix;
	var callback = this.eventOrganChanged;
	event_OrganChanged.watch(function(error,result){
	if(!error){
		if(callback!=null)
			callback(result);

		}else
			console.log(error);	
	});
	var event_DivisionChanged = this.getContract().DivisionChanged({},{fromBlock: 0});
	var elp = this.eventlogPrefix;
	var callback = this.eventDivisionChanged;
	event_DivisionChanged.watch(function(error,result){
	if(!error){
		if(callback!=null)
			callback(result);

		}else
			console.log(error);	
	});
	}

}// end of manager

/**
* Manages a list of PartyManager uses the guid id to place the gui which is also the eventlogPrefix
*/
function PartyGuiMananger(guiId){
	this.prefix = guiId;
	this.managers=new Array();	//[];		
	this.guiFunction = null;
	this.eventConstiutionChange = null;
	this.eventOrganChanged = null;
	this.eventDivisionChanged = null;
	this.managerMap = {};
	
	/**
	* Add a contract to this manager.
	* @contract the web3 contract instance
	*/
	this.addManager = function(contract) {
		var m = new PartyManager(contract.address,contract,this.prefix);
		m.eventlogPrefix = this.prefix;
		m.eventConstiutionChange = this.eventConstiutionChange;
		m.eventOrganChanged = this.eventOrganChanged;
		m.eventDivisionChanged = this.eventDivisionChanged;
		m.watchEvents();
		if(this.guiFunction!=null)
			m.guiFunction = this.guiFunction;
		this.managers.push(m);
		this.managerMap[contract.address] = m;
	}

	/**
	 * Changes the gui function for all managers.
	 */
	this.changeGuiFunction =  function(guiFunction){
		for (i in this.managers) {
			var manager = this.managers[i] ;
			manager.guiFunction = guiFunction;
		}
	}
	
	/**
	* Clears the element or the element with id 'prefix'.
	* @e an element
	*/
	this.clearGui = function(e){
		if(e==null)
			e = document.getElementById(this.prefix);
		if(e!==undefined)
			e.innerHTML ='';
	}
		
	/**
	* Displays all guis of the managed contracts.
	* @e an element
	*/
	this.displayGui = function(e){
		if(e==null)
			e = document.getElementById(this.prefix);
		if(e==undefined) return;
		for (i in this.managers) {
			var manager = this.managers[i] ;
			var elemDiv = document.createElement('div');
			elemDiv.id= manager.prefix + 'GuiContainer';//'Party_gui';
			e.appendChild(elemDiv);
			if(this.guiFunction==null)
				elemDiv.innerHTML = manager.createGui(manager.g);
			else elemDiv.innerHTML = this.guiFunction(manager.g);
			manager.c.bindGui();
		}
	}
	/**
	* Displays a simple gui.
	*/
	this.displaySimpleGui = function(){
		for (i in this.managers) {
			var manager = this.managers[i] ;
			manager.addGui(null);
		}
	}
	/**
	* Update the gui.
	*/
	this.updateGui = function(){
		for (i in this.managers) {
			this.managers[i].updateGui();
		}
//		console.log('update');
	}
}// end of gui mananger

/**
* Deploys the contract.
* Each constructor is available.
**/
function PartyDeployment(guiId){
	this.prefix = guiId;
//Start of user code Party_deployment_attributes_js
	// TODO: implement
	// End of user code


	/**
	* Construct Party.
	**/
	this.deployParty_Party_string = function(account, code, providedGas, _name){
//		var c = Party.new( _name,{
//			from: account,
//			data: code,
//			gas:  providedGas
//		});
		return c;
	}
	
	/**
	* The default deployer function.
	**/
	this.deployDefault = function(){
		//Start of user code Party_deployDefault
		// TODO: implement
		// End of user code
	}

//Start of user code Party_deployment_js
	// TODO: implement
	// End of user code
}
/**
* A simple bean class around the contract.
* The KUEKeNPartyModel.
**/
function KUEKeNPartyModel(contract) {
this.contract = contract;
	/**
	* Getter for name.
	**/
	this.getName = function(){
		return contract.name(); 
	}
	/**
	* Getter for mangerCount.
	**/
	this.getMangerCount = function(){
		return contract.mangerCount(); 
	}
	/**
	* Getter for memberRegistry.
	**/
	this.getMemberRegistry = function(){
		return contract.memberRegistry(); 
	}
	/**
	* Getter for constitutionHash.
	**/
	this.getConstitutionHash = function(){
		return contract.constitutionHash(); 
	}
	/**
	* Getter for organCount.
	**/
	this.getOrganCount = function(){
		return contract.organCount(); 
	}
	/**
	* Getter for blogregistry.
	**/
	this.getBlogregistry = function(){
		return contract.blogregistry(); 
	}
	/**
	* Getter for parent.
	**/
	this.getParent = function(){
		return contract.parent(); 
	}
	/**
	* Getter for subDivisionCount.
	**/
	this.getSubDivisionCount = function(){
		return contract.subDivisionCount(); 
	}
	/**
	* Get the mapped value for a key.
	*/
	this.getManagers=function(key) {
		return contract.managers(key);
	}
	/**
	* Get the mapped value for a key.
	*/
	this.getOrgans=function(key) {
		return contract.organs(key);
	}
	/**
	* Get the mapped value for a key.
	*/
	this.getSubDivisions=function(key) {
		return contract.subDivisions(key);
	}
	/**
	* Call addManager.
	**/
	this.addManager = function(_newManagerAddress){
		return contract.addManager(_newManagerAddress); 
	}
	/**
	* Call boostrapParty.
	**/
	this.boostrapParty = function(fc,br){
		return contract.boostrapParty(fc,br); 
	}
	/**
	* Call removeManager.
	**/
	this.removeManager = function(_managerAddress){
		return contract.removeManager(_managerAddress); 
	}
	/**
	* Call isManager.
	**/
	this.isManager = function(_managerAddress){
		return contract.isManager(_managerAddress); 
	}
	/**
	* Call createOrgan.
	**/
	this.createOrgan = function(organName){
		return contract.createOrgan(organName); 
	}
	/**
	* Call addOrgan.
	**/
	this.addOrgan = function(_organ){
		return contract.addOrgan(_organ); 
	}
	/**
	* Call addSubDivision.
	**/
	this.addSubDivision = function(_subDivision){
		return contract.addSubDivision(_subDivision); 
	}
	/**
	* Call removeSubDivision.
	**/
	this.removeSubDivision = function(_divisionId){
		return contract.removeSubDivision(_divisionId); 
	}
}// end of function KUEKeNPartyModel

/**
* Gui factory KUEKeNParty
**/
function KUEKeNPartyGuiFactory() {
	this.prefix='';
	
	/**
	* Places the default gui to 'e' or an element with id='KUEKeNParty_gui'
	*/
	this.placeDefaultGui=function(e) {
		if(e==null)
			e = document.getElementById(this.prefix+'KUEKeNParty_gui');
		if(e!=null)
			e.innerHTML = this.createDefaultGui();
		else
			console.log(this.prefix+'KUEKeNParty_gui not found');
	}

	/**
	* The default generated gui with all actions and attributes.
	*/
	this.createDefaultGui=function() {
		return 		'<!-- gui for KUEKeNParty_contract -->'
+		'		<div class="contract" id="'+this.prefix+'KUEKeNParty_contract">'
+		'		KUEKeNParty:'
+		'		  <input type="text" id="'+this.prefix+'KUEKeNParty_address"> <button id="'+this.prefix+'KUEKeNPartyController.setAddress" onclick="'+this.prefix+'KUEKeNPartyController.setAddress()">change KUEKeNParty Address</button>'
+		'		  <div class="contract_attributes" id="'+this.prefix+'KUEKeNParty_contract_attributes"> attributes:'
+		'		    <div class="contract_attribute" id="'+this.prefix+'KUEKeNParty_contract_attribute_name"> name:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'KUEKeNParty_name_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'KUEKeNParty_contract_attribute_mangerCount"> mangerCount:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'KUEKeNParty_mangerCount_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'KUEKeNParty_contract_attribute_memberRegistry"> memberRegistry:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'KUEKeNParty_memberRegistry_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'KUEKeNParty_contract_attribute_constitutionHash"> constitutionHash:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'KUEKeNParty_constitutionHash_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'KUEKeNParty_contract_attribute_organCount"> organCount:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'KUEKeNParty_organCount_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'KUEKeNParty_contract_attribute_blogregistry"> blogregistry:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'KUEKeNParty_blogregistry_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'KUEKeNParty_contract_attribute_parent"> parent:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'KUEKeNParty_parent_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'KUEKeNParty_contract_attribute_subDivisionCount"> subDivisionCount:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'KUEKeNParty_subDivisionCount_value"> </span>'
+		'		    </div>'
+		'		'
+		'		<div class="Value_Mapping" id="'+this.prefix+'KUEKeNParty_contract_attribute_managers">mapping  managers:'
+		'				<input class="function_input" type="text" id="'+this.prefix+'KUEKeNParty_contract_attribute_managers_input">(address)'
+		'		    	<div class="Mapping_value" id="'+this.prefix+'KUEKeNParty_contract_attribute_address"> bool:'
+		'		      		<span class="contract_attribute_value" id="'+this.prefix+'KUEKeNParty_managers_value"> </span>'
+		'		    	</div>'
+		'		  </div>'
+		'		<div class="Value_Mapping" id="'+this.prefix+'KUEKeNParty_contract_attribute_organs">mapping  organs:'
+		'				<input class="function_input" type="number" id="'+this.prefix+'KUEKeNParty_contract_attribute_organs_input">(uint)'
+		'		    	<div class="Mapping_value" id="'+this.prefix+'KUEKeNParty_contract_attribute_uint"> Organ:'
+		'		      		<span class="contract_attribute_value" id="'+this.prefix+'KUEKeNParty_organs_value"> </span>'
+		'		    	</div>'
+		'		  </div>'
+		'		<div class="Value_Mapping" id="'+this.prefix+'KUEKeNParty_contract_attribute_subDivisions">mapping  subDivisions:'
+		'				<input class="function_input" type="number" id="'+this.prefix+'KUEKeNParty_contract_attribute_subDivisions_input">(uint)'
+		'		    	<div class="Mapping_value" id="'+this.prefix+'KUEKeNParty_contract_attribute_uint"> Party:'
+		'		      		<span class="contract_attribute_value" id="'+this.prefix+'KUEKeNParty_subDivisions_value"> </span>'
+		'		    	</div>'
+		'		  </div>'
+		'		    <button class="function_btn" id="'+this.prefix+'KUEKeNParty_updateAttributes" onclick="'+this.prefix+'KUEKeNPartyController._updateAttributes()">update KUEKeNParty attributes</button>'
+		'		  </div>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'KUEKeNParty_contract_function_Manageable_addManager_address">'
+		'		<legend>addManager</legend>'
+		'			  <label class="function_parameter" for="Manageable_addManager_address__newManagerAddress">_newManagerAddress</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Manageable_addManager_address__newManagerAddress"'
+		'				  placeholder="_newManagerAddress"/>'
+		'			<button class="function_btn" id="'+this.prefix+'KUEKeNPartyController.Manageable_addManager_address" onclick="'+this.prefix+'KUEKeNPartyController.Manageable_addManager_address()">addManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_addManager_address_res"></div>'
+		'		  </fieldset>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'KUEKeNParty_contract_function_KUEKeNParty_boostrapParty_address_address">'
+		'		<legend>boostrapParty</legend>'
+		'			  <label class="function_parameter" for="KUEKeNParty_boostrapParty_address_address_fc">fc</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'KUEKeNParty_boostrapParty_address_address_fc"'
+		'				  placeholder="fc"/>'
+		'			  <label class="function_parameter" for="KUEKeNParty_boostrapParty_address_address_br">br</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'KUEKeNParty_boostrapParty_address_address_br"'
+		'				  placeholder="br"/>'
+		'			<button class="function_btn" id="'+this.prefix+'KUEKeNPartyController.KUEKeNParty_boostrapParty_address_address" onclick="'+this.prefix+'KUEKeNPartyController.KUEKeNParty_boostrapParty_address_address()">boostrapParty</button>'
+		'			<div class="function_result" id="'+this.prefix+'KUEKeNParty_boostrapParty_address_address_res"></div>'
+		'		  </fieldset>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'KUEKeNParty_contract_function_Manageable_removeManager_address">'
+		'		<legend>removeManager</legend>'
+		'			  <label class="function_parameter" for="Manageable_removeManager_address__managerAddress">_managerAddress</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Manageable_removeManager_address__managerAddress"'
+		'				  placeholder="_managerAddress"/>'
+		'			<button class="function_btn" id="'+this.prefix+'KUEKeNPartyController.Manageable_removeManager_address" onclick="'+this.prefix+'KUEKeNPartyController.Manageable_removeManager_address()">removeManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_removeManager_address_res"></div>'
+		'		  </fieldset>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'KUEKeNParty_contract_function_Manageable_isManager_address">'
+		'		<legend>isManager</legend>'
+		'			  <label class="function_parameter" for="Manageable_isManager_address__managerAddress">_managerAddress</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Manageable_isManager_address__managerAddress"'
+		'				  placeholder="_managerAddress"/>'
+		'			<button class="function_btn" id="'+this.prefix+'KUEKeNPartyController.Manageable_isManager_address" onclick="'+this.prefix+'KUEKeNPartyController.Manageable_isManager_address()">isManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_isManager_address_res"></div>'
+		'		  </fieldset>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'KUEKeNParty_contract_function_Party_createOrgan_string">'
+		'		<legend>createOrgan</legend>'
+		'			  <label class="function_parameter" for="Party_createOrgan_string_organName">organName</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Party_createOrgan_string_organName"'
+		'				  placeholder="organName"/>'
+		'			<button class="function_btn" id="'+this.prefix+'KUEKeNPartyController.Party_createOrgan_string" onclick="'+this.prefix+'KUEKeNPartyController.Party_createOrgan_string()">createOrgan</button>'
+		'			<div class="function_result" id="'+this.prefix+'Party_createOrgan_string_res"></div>'
+		'		  </fieldset>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'KUEKeNParty_contract_function_Party_addOrgan_address">'
+		'		<legend>addOrgan</legend>'
+		'			  <label class="function_parameter" for="Party_addOrgan_address__organ">_organ</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Party_addOrgan_address__organ"'
+		'				  placeholder="_organ"/>'
+		'			<button class="function_btn" id="'+this.prefix+'KUEKeNPartyController.Party_addOrgan_address" onclick="'+this.prefix+'KUEKeNPartyController.Party_addOrgan_address()">addOrgan</button>'
+		'			<div class="function_result" id="'+this.prefix+'Party_addOrgan_address_res"></div>'
+		'		  </fieldset>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'KUEKeNParty_contract_function_Party_addSubDivision_address">'
+		'		<legend>addSubDivision</legend>'
+		'			  <label class="function_parameter" for="Party_addSubDivision_address__subDivision">_subDivision</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Party_addSubDivision_address__subDivision"'
+		'				  placeholder="_subDivision"/>'
+		'			<button class="function_btn" id="'+this.prefix+'KUEKeNPartyController.Party_addSubDivision_address" onclick="'+this.prefix+'KUEKeNPartyController.Party_addSubDivision_address()">addSubDivision</button>'
+		'			<div class="function_result" id="'+this.prefix+'Party_addSubDivision_address_res"></div>'
+		'		  </fieldset>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'KUEKeNParty_contract_function_Party_removeSubDivision_uint">'
+		'		<legend>removeSubDivision</legend>'
+		'			  <label class="function_parameter" for="Party_removeSubDivision_uint__divisionId">_divisionId</label>'
+		'				<input class="function_input" type="number" '
+		'		          id="'+this.prefix+'Party_removeSubDivision_uint__divisionId"'
+		'				  placeholder="_divisionId"/>'
+		'			<button class="function_btn" id="'+this.prefix+'KUEKeNPartyController.Party_removeSubDivision_uint" onclick="'+this.prefix+'KUEKeNPartyController.Party_removeSubDivision_uint()">removeSubDivision</button>'
+		'			<div class="function_result" id="'+this.prefix+'Party_removeSubDivision_uint_res"></div>'
+		'		  </fieldset>'
+		'		'
+		'		</div>'
;
	}

	/**
	* Create the gui for the attributes.
	*/
	this.createAttributesGui=function() {
		return 		'    <div class="contract_attribute" id="'+this.prefix+'KUEKeNParty_contract_attribute_name"> name:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'KUEKeNParty_name_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'KUEKeNParty_contract_attribute_mangerCount"> mangerCount:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'KUEKeNParty_mangerCount_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'KUEKeNParty_contract_attribute_memberRegistry"> memberRegistry:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'KUEKeNParty_memberRegistry_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'KUEKeNParty_contract_attribute_constitutionHash"> constitutionHash:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'KUEKeNParty_constitutionHash_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'KUEKeNParty_contract_attribute_organCount"> organCount:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'KUEKeNParty_organCount_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'KUEKeNParty_contract_attribute_blogregistry"> blogregistry:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'KUEKeNParty_blogregistry_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'KUEKeNParty_contract_attribute_parent"> parent:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'KUEKeNParty_parent_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'KUEKeNParty_contract_attribute_subDivisionCount"> subDivisionCount:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'KUEKeNParty_subDivisionCount_value"> </span>'
+		'		    </div>'
+		'		'
;
	}

	/**
	* Create the gui.
	*/
	this.createPlainGui=function(){
		return this.createAttributesGui()
				+ this.createManageable_addManager_addressGui
				+ this.createKUEKeNParty_boostrapParty_address_addressGui
				+ this.createManageable_removeManager_addressGui
				+ this.createManageable_isManager_addressGui
				+ this.createParty_createOrgan_stringGui
				+ this.createParty_addOrgan_addressGui
				+ this.createParty_addSubDivision_addressGui
				+ this.createParty_removeSubDivision_uintGui
				;
	}

	/**
	* Create the gui for the function addManager.
	*/
	this.createManageable_addManager_addressGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'KUEKeNParty_contract_function_Manageable_addManager_address">'
+		'		<legend>addManager</legend>'
+		'			  <label class="function_parameter" for="Manageable_addManager_address__newManagerAddress">_newManagerAddress</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Manageable_addManager_address__newManagerAddress"'
+		'				  placeholder="_newManagerAddress"/>'
+		'			<button class="function_btn" id="'+this.prefix+'KUEKeNPartyController.Manageable_addManager_address" onclick="'+this.prefix+'KUEKeNPartyController.Manageable_addManager_address()">addManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_addManager_address_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the function boostrapParty.
	*/
	this.createKUEKeNParty_boostrapParty_address_addressGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'KUEKeNParty_contract_function_KUEKeNParty_boostrapParty_address_address">'
+		'		<legend>boostrapParty</legend>'
+		'			  <label class="function_parameter" for="KUEKeNParty_boostrapParty_address_address_fc">fc</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'KUEKeNParty_boostrapParty_address_address_fc"'
+		'				  placeholder="fc"/>'
+		'			  <label class="function_parameter" for="KUEKeNParty_boostrapParty_address_address_br">br</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'KUEKeNParty_boostrapParty_address_address_br"'
+		'				  placeholder="br"/>'
+		'			<button class="function_btn" id="'+this.prefix+'KUEKeNPartyController.KUEKeNParty_boostrapParty_address_address" onclick="'+this.prefix+'KUEKeNPartyController.KUEKeNParty_boostrapParty_address_address()">boostrapParty</button>'
+		'			<div class="function_result" id="'+this.prefix+'KUEKeNParty_boostrapParty_address_address_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the function removeManager.
	*/
	this.createManageable_removeManager_addressGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'KUEKeNParty_contract_function_Manageable_removeManager_address">'
+		'		<legend>removeManager</legend>'
+		'			  <label class="function_parameter" for="Manageable_removeManager_address__managerAddress">_managerAddress</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Manageable_removeManager_address__managerAddress"'
+		'				  placeholder="_managerAddress"/>'
+		'			<button class="function_btn" id="'+this.prefix+'KUEKeNPartyController.Manageable_removeManager_address" onclick="'+this.prefix+'KUEKeNPartyController.Manageable_removeManager_address()">removeManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_removeManager_address_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the function isManager.
	*/
	this.createManageable_isManager_addressGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'KUEKeNParty_contract_function_Manageable_isManager_address">'
+		'		<legend>isManager</legend>'
+		'			  <label class="function_parameter" for="Manageable_isManager_address__managerAddress">_managerAddress</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Manageable_isManager_address__managerAddress"'
+		'				  placeholder="_managerAddress"/>'
+		'			<button class="function_btn" id="'+this.prefix+'KUEKeNPartyController.Manageable_isManager_address" onclick="'+this.prefix+'KUEKeNPartyController.Manageable_isManager_address()">isManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_isManager_address_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the function createOrgan.
	*/
	this.createParty_createOrgan_stringGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'KUEKeNParty_contract_function_Party_createOrgan_string">'
+		'		<legend>createOrgan</legend>'
+		'			  <label class="function_parameter" for="Party_createOrgan_string_organName">organName</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Party_createOrgan_string_organName"'
+		'				  placeholder="organName"/>'
+		'			<button class="function_btn" id="'+this.prefix+'KUEKeNPartyController.Party_createOrgan_string" onclick="'+this.prefix+'KUEKeNPartyController.Party_createOrgan_string()">createOrgan</button>'
+		'			<div class="function_result" id="'+this.prefix+'Party_createOrgan_string_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the function addOrgan.
	*/
	this.createParty_addOrgan_addressGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'KUEKeNParty_contract_function_Party_addOrgan_address">'
+		'		<legend>addOrgan</legend>'
+		'			  <label class="function_parameter" for="Party_addOrgan_address__organ">_organ</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Party_addOrgan_address__organ"'
+		'				  placeholder="_organ"/>'
+		'			<button class="function_btn" id="'+this.prefix+'KUEKeNPartyController.Party_addOrgan_address" onclick="'+this.prefix+'KUEKeNPartyController.Party_addOrgan_address()">addOrgan</button>'
+		'			<div class="function_result" id="'+this.prefix+'Party_addOrgan_address_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the function addSubDivision.
	*/
	this.createParty_addSubDivision_addressGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'KUEKeNParty_contract_function_Party_addSubDivision_address">'
+		'		<legend>addSubDivision</legend>'
+		'			  <label class="function_parameter" for="Party_addSubDivision_address__subDivision">_subDivision</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Party_addSubDivision_address__subDivision"'
+		'				  placeholder="_subDivision"/>'
+		'			<button class="function_btn" id="'+this.prefix+'KUEKeNPartyController.Party_addSubDivision_address" onclick="'+this.prefix+'KUEKeNPartyController.Party_addSubDivision_address()">addSubDivision</button>'
+		'			<div class="function_result" id="'+this.prefix+'Party_addSubDivision_address_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the function removeSubDivision.
	*/
	this.createParty_removeSubDivision_uintGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'KUEKeNParty_contract_function_Party_removeSubDivision_uint">'
+		'		<legend>removeSubDivision</legend>'
+		'			  <label class="function_parameter" for="Party_removeSubDivision_uint__divisionId">_divisionId</label>'
+		'				<input class="function_input" type="number" '
+		'		          id="'+this.prefix+'Party_removeSubDivision_uint__divisionId"'
+		'				  placeholder="_divisionId"/>'
+		'			<button class="function_btn" id="'+this.prefix+'KUEKeNPartyController.Party_removeSubDivision_uint" onclick="'+this.prefix+'KUEKeNPartyController.Party_removeSubDivision_uint()">removeSubDivision</button>'
+		'			<div class="function_result" id="'+this.prefix+'Party_removeSubDivision_uint_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create a div with '@inner' as inner elements.
    * @inner - the inner text
	*/
	this.createSeletonGui=function(inner) {
		return 	'<!-- gui for KUEKeNParty_contract -->'
		+	'	<div class="contract" id="'+this.prefix+'KUEKeNParty_contract">'
		+ inner
		+'</div>';
	}


	//eventguis

}//end guifactory

/**
* Class KUEKeNPartyController. 
* The controller wrap's the 'instance' contract and binds all actions to document elements.
* Parameters are taken from elements with self.prefix+'functionName_parameterName'
*
* self.prefix+'KUEKeNPartyController.setAddress' - 
* self.prefix+'KUEKeNParty_updateAttributes'     - 
* self.prefix+'Manageable_addManager_address -
* self.prefix+'KUEKeNParty_boostrapParty_address_address -
* self.prefix+'Manageable_removeManager_address -
* self.prefix+'Manageable_isManager_address -
* self.prefix+'Party_createOrgan_string -
* self.prefix+'Party_addOrgan_address -
* self.prefix+'Party_addSubDivision_address -
* self.prefix+'Party_removeSubDivision_uint -
*/
function KUEKeNPartyController() {

	this.instance = undefined;
	this.prefix='';
	this.contractAddress = undefined; 
	this.eventlogPrefix = '';
	var self = this;

	/**
	* Binds the element with the prefix-id to the corresponding element.
	*/
	this.bindGui=function() {
		console.log('bind gui for:'+self.prefix);
		var btn = document.getElementById(self.prefix+'KUEKeNPartyController.setAddress');
		if(btn!=undefined)		
			btn.onclick = this.setAddress;
		else console.log('addres widget not bound');

		var btn = document.getElementById(self.prefix+'KUEKeNParty_updateAttributes');
		if(btn!=undefined)
			btn.onclick = this._updateAttributes;
		else console.log('_updateAttributes widget not bound');
		var btn = document.getElementById(self.prefix+'KUEKeNPartyController.Manageable_addManager_address');
		if(btn!=undefined)
			btn.onclick = this.Manageable_addManager_address;
		else console.log('Manageable_addManager_address widget not bound');
		var btn = document.getElementById(self.prefix+'KUEKeNPartyController.KUEKeNParty_boostrapParty_address_address');
		if(btn!=undefined)
			btn.onclick = this.KUEKeNParty_boostrapParty_address_address;
		else console.log('KUEKeNParty_boostrapParty_address_address widget not bound');
		var btn = document.getElementById(self.prefix+'KUEKeNPartyController.Manageable_removeManager_address');
		if(btn!=undefined)
			btn.onclick = this.Manageable_removeManager_address;
		else console.log('Manageable_removeManager_address widget not bound');
		var btn = document.getElementById(self.prefix+'KUEKeNPartyController.Manageable_isManager_address');
		if(btn!=undefined)
			btn.onclick = this.Manageable_isManager_address;
		else console.log('Manageable_isManager_address widget not bound');
		var btn = document.getElementById(self.prefix+'KUEKeNPartyController.Party_createOrgan_string');
		if(btn!=undefined)
			btn.onclick = this.Party_createOrgan_string;
		else console.log('Party_createOrgan_string widget not bound');
		var btn = document.getElementById(self.prefix+'KUEKeNPartyController.Party_addOrgan_address');
		if(btn!=undefined)
			btn.onclick = this.Party_addOrgan_address;
		else console.log('Party_addOrgan_address widget not bound');
		var btn = document.getElementById(self.prefix+'KUEKeNPartyController.Party_addSubDivision_address');
		if(btn!=undefined)
			btn.onclick = this.Party_addSubDivision_address;
		else console.log('Party_addSubDivision_address widget not bound');
		var btn = document.getElementById(self.prefix+'KUEKeNPartyController.Party_removeSubDivision_uint');
		if(btn!=undefined)
			btn.onclick = this.Party_removeSubDivision_uint;
		else console.log('Party_removeSubDivision_uint widget not bound');

	}

	/**
	* Set the address.
	*/
	this.setAddress=function() {
		var _address = document.getElementById(self.prefix+'KUEKeNParty_address');
		if(_address==null)return;

		self.KUEKeNParty_instance = KUEKeNPartyContract.at(_address.value);
		self.contractAddress = _address.value;
		self._updateAttributes();
	}
	
	/**
	* Update attributes.
	*
	* prefix+'KUEKeNParty_name_value' - 
	* prefix+'KUEKeNParty_mangerCount_value' - 
	* prefix+'KUEKeNParty_memberRegistry_value' - 
	* prefix+'KUEKeNParty_constitutionHash_value' - 
	* prefix+'KUEKeNParty_organCount_value' - 
	* prefix+'KUEKeNParty_blogregistry_value' - 
	* prefix+'KUEKeNParty_parent_value' - 
	* prefix+'KUEKeNParty_subDivisionCount_value' - 
	**/
	this._updateAttributes=function () {
		if(this.instance===null) return;
		// update attributes
		var name_res = self.instance.name();
		var e = document.getElementById(self.prefix+'KUEKeNParty_name_value');
		if(name_res!=null && e!=null)
			e.innerText = name_res;
		else console.log(self.prefix+'KUEKeNParty_name_value not found');
		var mangerCount_res = self.instance.mangerCount();
		var e = document.getElementById(self.prefix+'KUEKeNParty_mangerCount_value');
		if(mangerCount_res!=null && e!=null)
			e.innerText = mangerCount_res;
		else console.log(self.prefix+'KUEKeNParty_mangerCount_value not found');
		var memberRegistry_res = self.instance.memberRegistry();
		var e = document.getElementById(self.prefix+'KUEKeNParty_memberRegistry_value');
		if(memberRegistry_res!=null && e!=null)
			e.innerText = memberRegistry_res;
		else console.log(self.prefix+'KUEKeNParty_memberRegistry_value not found');
		var constitutionHash_res = self.instance.constitutionHash();
		var e = document.getElementById(self.prefix+'KUEKeNParty_constitutionHash_value');
		if(constitutionHash_res!=null && e!=null)
			e.innerText = constitutionHash_res;
		else console.log(self.prefix+'KUEKeNParty_constitutionHash_value not found');
		var organCount_res = self.instance.organCount();
		var e = document.getElementById(self.prefix+'KUEKeNParty_organCount_value');
		if(organCount_res!=null && e!=null)
			e.innerText = organCount_res;
		else console.log(self.prefix+'KUEKeNParty_organCount_value not found');
		var blogregistry_res = self.instance.blogregistry();
		var e = document.getElementById(self.prefix+'KUEKeNParty_blogregistry_value');
		if(blogregistry_res!=null && e!=null)
			e.innerText = blogregistry_res;
		else console.log(self.prefix+'KUEKeNParty_blogregistry_value not found');
		var parent_res = self.instance.parent();
		var e = document.getElementById(self.prefix+'KUEKeNParty_parent_value');
		if(parent_res!=null && e!=null)
			e.innerText = parent_res;
		else console.log(self.prefix+'KUEKeNParty_parent_value not found');
		var subDivisionCount_res = self.instance.subDivisionCount();
		var e = document.getElementById(self.prefix+'KUEKeNParty_subDivisionCount_value');
		if(subDivisionCount_res!=null && e!=null)
			e.innerText = subDivisionCount_res;
		else console.log(self.prefix+'KUEKeNParty_subDivisionCount_value not found');
		var e = document.getElementById(self.prefix+'KUEKeNParty_contract_attribute_managers_input');
		if(e!=null){
			var _key = e.value;
			if(_key!='') {
			var managers_res = self.instance.managers(_key);
			if(managers_res!=null){
				var e1 = document.getElementById(self.prefix+'KUEKeNParty_managers_value');
				if(e1!=null)	
					e1.innerText = managers_res;
			}}}
		var e = document.getElementById(self.prefix+'KUEKeNParty_contract_attribute_organs_input');
		if(e!=null){
			var _key = document.getElementById(self.prefix+'KUEKeNParty_contract_attribute_organs_input').value;
			if(_key!=''){
			var organs_res = self.instance.organs(_key);
			if(organs_res!=null){
				var e1 = document.getElementById(self.prefix+'KUEKeNParty_organs_value');
				if(e1!=null)	
					e1.innerText = organs_res;
			}}}
		var e = document.getElementById(self.prefix+'KUEKeNParty_contract_attribute_subDivisions_input');
		if(e!=null){
			var _key = document.getElementById(self.prefix+'KUEKeNParty_contract_attribute_subDivisions_input').value;
			if(_key!=''){
			var subDivisions_res = self.instance.subDivisions(_key);
			if(subDivisions_res!=null){
				var e1 = document.getElementById(self.prefix+'KUEKeNParty_subDivisions_value');
				if(e1!=null)	
					e1.innerText = subDivisions_res;
			}}}
	}

	//call functions
	
	/**
	* Calls the contract function KUEKeNParty_canAccess.
	*
	**/
	this.Manageable_canAccess=function() {
		var res = self.instance.canAccess();
		var e = document.getElementById(self.prefix+'Manageable_canAccess_res');
		if(res!=null && e!=null)
			e.innerText = res;
	}
	
	/**
	* Calls the contract function KUEKeNParty_addManager.
	*
	* this.prefix+'Manageable_addManager_address__newManagerAddress' -
	**/
	this.Manageable_addManager_address=function() {
		var e = document.getElementById(self.prefix+'Manageable_addManager_address__newManagerAddress');
		if(e!=null)
			var param__newManagerAddress = e.value;
		else console.log(self.prefix+'Manageable_addManager_address__newManagerAddress not found');
		var res = self.instance.addManager(param__newManagerAddress);
	}
	
	/**
	* Calls the contract function KUEKeNParty_boostrapParty.
	*
	* this.prefix+'KUEKeNParty_boostrapParty_address_address_fc' -
	* this.prefix+'KUEKeNParty_boostrapParty_address_address_br' -
	**/
	this.KUEKeNParty_boostrapParty_address_address=function() {
		var e = document.getElementById(self.prefix+'KUEKeNParty_boostrapParty_address_address_fc');
		if(e!=null)
			var param_fc = e.value;
		else console.log(self.prefix+'KUEKeNParty_boostrapParty_address_address_fc not found');
		var e = document.getElementById(self.prefix+'KUEKeNParty_boostrapParty_address_address_br');
		if(e!=null)
			var param_br = e.value;
		else console.log(self.prefix+'KUEKeNParty_boostrapParty_address_address_br not found');
		var res = self.instance.boostrapParty(param_fc, param_br);
	}
	
	/**
	* Calls the contract function KUEKeNParty_removeManager.
	*
	* this.prefix+'Manageable_removeManager_address__managerAddress' -
	**/
	this.Manageable_removeManager_address=function() {
		var e = document.getElementById(self.prefix+'Manageable_removeManager_address__managerAddress');
		if(e!=null)
			var param__managerAddress = e.value;
		else console.log(self.prefix+'Manageable_removeManager_address__managerAddress not found');
		var res = self.instance.removeManager(param__managerAddress);
	}
	
	/**
	* Calls the contract function KUEKeNParty_isManager.
	*
	* this.prefix+'Manageable_isManager_address__managerAddress' -
	**/
	this.Manageable_isManager_address=function() {
		var e = document.getElementById(self.prefix+'Manageable_isManager_address__managerAddress');
		if(e!=null)
			var param__managerAddress = e.value;
		else console.log(self.prefix+'Manageable_isManager_address__managerAddress not found');
		var res = self.instance.isManager(param__managerAddress);
		var e = document.getElementById(self.prefix+'Manageable_isManager_address_res');
		if(res!=null && e!=null)
			e.innerText = res;
	}
	
	/**
	* Calls the contract function KUEKeNParty_createOrgan.
	*
	* this.prefix+'Party_createOrgan_string_organName' -
	**/
	this.Party_createOrgan_string=function() {
		var e = document.getElementById(self.prefix+'Party_createOrgan_string_organName');
		if(e!=null)
			var param_organName = e.value;
		else console.log(self.prefix+'Party_createOrgan_string_organName not found');
		var res = self.instance.createOrgan(param_organName);
	}
	
	/**
	* Calls the contract function KUEKeNParty_addOrgan.
	*
	* this.prefix+'Party_addOrgan_address__organ' -
	**/
	this.Party_addOrgan_address=function() {
		var e = document.getElementById(self.prefix+'Party_addOrgan_address__organ');
		if(e!=null)
			var param__organ = e.value;
		else console.log(self.prefix+'Party_addOrgan_address__organ not found');
		var res = self.instance.addOrgan(param__organ);
	}
	
	/**
	* Calls the contract function KUEKeNParty_addSubDivision.
	*
	* this.prefix+'Party_addSubDivision_address__subDivision' -
	**/
	this.Party_addSubDivision_address=function() {
		var e = document.getElementById(self.prefix+'Party_addSubDivision_address__subDivision');
		if(e!=null)
			var param__subDivision = e.value;
		else console.log(self.prefix+'Party_addSubDivision_address__subDivision not found');
		var res = self.instance.addSubDivision(param__subDivision);
	}
	
	/**
	* Calls the contract function KUEKeNParty_removeSubDivision.
	*
	* this.prefix+'Party_removeSubDivision_uint__divisionId' -
	**/
	this.Party_removeSubDivision_uint=function() {
		var e = document.getElementById(self.prefix+'Party_removeSubDivision_uint__divisionId');
		if(e!=null)
			var param__divisionId = e.value;
		else console.log(self.prefix+'Party_removeSubDivision_uint__divisionId not found');
		var res = self.instance.removeSubDivision(param__divisionId);
	}
	
//delegated calls
}// end controller	

/**
* class as GlueCode KUEKeNPartyManager,
* uses prefix + 'GuiContainer' as target element.
* It combines a KUEKeNPartyController as 'c' and a KUEKeNPartyGuiFactory as 'g'.
**/
function KUEKeNPartyManager(prefix,contract,containerId) {
	this.prefix = prefix;
	var self = this;
	this.c = new KUEKeNPartyController();
	this.c.prefix=prefix;
	this.c.instance=contract;
	this.c.contractAddress = contract.address;
	this.g = new KUEKeNPartyGuiFactory();
	this.g.prefix = prefix;
	this.containerId = containerId;
	this.eventlogPrefix = '';
	this.guiFunction = null;
	
	/**
	* adds the gui element to the given 'e' element
	**/
	this.addGui = function(e) {
		if(e==null)
			e = document.getElementById(this.containerId);
		if(e==null){
		console.log(this.containerId+' not found or :'+e);
		return;
		}
		var elemDiv = document.createElement('div');
		elemDiv.id= this.prefix +'KUEKeNParty_gui';
		e.appendChild(elemDiv);
		if(this.guiFunction==null)
			elemDiv.innerHTML = this.createGui(this.g);
		else elemDiv.innerHTML = this.guiFunction(this.g);
		
		var e = document.getElementById(this.prefix+'KUEKeNParty_address');
		if(e!=null)
			e.value = this.c.contractAddress;
		else 
			console.log(this.prefix+'KUEKeNParty_address not found');
		this.c.bindGui();
	}	
	
	/**
	* clears the given element 'e'.
	**/
	this.clearGui = function(e){
		if(e==null)
			e = document.getElementById(this.containerId);
		e.innerHTML ='';
	}

	/**
	* Create the gui with the given 'guiFactory'. Places an sceleton arount it.
	* @return the gui txt used as innerHTML
	**/
	this.createGui = function(guifactory){
		var txt ='';
//Start of user code KUEKeNParty_create_gui_js
		txt = txt + guifactory.createDefaultGui();
		// End of user code
		return guifactory.createSeletonGui(txt);

	}

	/**
	* Create a small gui, only the attributes. Places an sceleton arount it.
	**/	
	this.createSmallGui = function(guifactory){
		var txt ='';
		txt = txt + guifactory.createAttributesGui();
		return guifactory.createSeletonGui(txt);

	}

	/**
	* Update the attributes.
	**/
	this.updateGui = function(){
		this.c._updateAttributes();
	}

	/**
	* Getter for the contract 'KUEKeNParty' instance.
	**/
	this.getContract = function(){
		return this.c.instance;
	}

	/**
	* Watch for the contract events.
	* The events are stored in an element with the id this.eventlogPrefix+'eventLog'.
	**/
	this.watchEvents=function(){
	}

}// end of manager

/**
* Manages a list of KUEKeNPartyManager uses the guid id to place the gui which is also the eventlogPrefix
*/
function KUEKeNPartyGuiMananger(guiId){
	this.prefix = guiId;
	this.managers=new Array();	//[];		
	this.guiFunction = null;
	this.managerMap = {};
	
	/**
	* Add a contract to this manager.
	* @contract the web3 contract instance
	*/
	this.addManager = function(contract) {
		var m = new KUEKeNPartyManager(contract.address,contract,this.prefix);
		m.eventlogPrefix = this.prefix;
		m.watchEvents();
		if(this.guiFunction!=null)
			m.guiFunction = this.guiFunction;
		this.managers.push(m);
		this.managerMap[contract.address] = m;
	}

	/**
	 * Changes the gui function for all managers.
	 */
	this.changeGuiFunction =  function(guiFunction){
		for (i in this.managers) {
			var manager = this.managers[i] ;
			manager.guiFunction = guiFunction;
		}
	}
	
	/**
	* Clears the element or the element with id 'prefix'.
	* @e an element
	*/
	this.clearGui = function(e){
		if(e==null)
			e = document.getElementById(this.prefix);
		if(e!==undefined)
			e.innerHTML ='';
	}
		
	/**
	* Displays all guis of the managed contracts.
	* @e an element
	*/
	this.displayGui = function(e){
		if(e==null)
			e = document.getElementById(this.prefix);
		if(e==undefined) return;
		for (i in this.managers) {
			var manager = this.managers[i] ;
			var elemDiv = document.createElement('div');
			elemDiv.id= manager.prefix + 'GuiContainer';//'KUEKeNParty_gui';
			e.appendChild(elemDiv);
			if(this.guiFunction==null)
				elemDiv.innerHTML = manager.createGui(manager.g);
			else elemDiv.innerHTML = this.guiFunction(manager.g);
			manager.c.bindGui();
		}
	}
	/**
	* Displays a simple gui.
	*/
	this.displaySimpleGui = function(){
		for (i in this.managers) {
			var manager = this.managers[i] ;
			manager.addGui(null);
		}
	}
	/**
	* Update the gui.
	*/
	this.updateGui = function(){
		for (i in this.managers) {
			this.managers[i].updateGui();
		}
//		console.log('update');
	}
}// end of gui mananger

/**
* Deploys the contract.
* Each constructor is available.
**/
function KUEKeNPartyDeployment(guiId){
	this.prefix = guiId;
//Start of user code KUEKeNParty_deployment_attributes_js
	this.br = null;
	this.mr = null;
	this.instance = KUEKeNPartyContract
			.at('0xeaefeb5cadc46f34d736529991059575bd989c77');
	// End of user code


	/**
	* Construct KUEKeNParty.
	**/
	this.deployKUEKeNParty_KUEKeNParty_string = function(account, code, providedGas, _name){
//		var c = KUEKeNParty.new( _name,{
//			from: account,
//			data: code,
//			gas:  providedGas
//		});
		return c;
	}
	
	/**
	* The default deployer function.
	**/
	this.deployDefault = function(){
		//Start of user code KUEKeNParty_deployDefault
		// TODO: implement
		// End of user code
	}

//Start of user code KUEKeNParty_deployment_js

	this.deploy = function() {
		this.instance.setMemberRegistry(this.mr);
		// this.instance.setBlogRegestry(this.br);
		//	
		// this.createOrgan("Buvo");
		// this.createOrgan("Schiedgericht")

	}

	this.createOrgan = function(name) {
		this.instance.createOrgan(name);
	}
	// End of user code
}
/**
* A simple bean class around the contract.
* The ConferenceModel.
**/
function ConferenceModel(contract) {
this.contract = contract;
	/**
	* Getter for memberRegistry.
	**/
	this.getMemberRegistry = function(){
		return contract.memberRegistry(); 
	}
	/**
	* Getter for organName.
	**/
	this.getOrganName = function(){
		return contract.organName(); 
	}
	/**
	* Getter for accreditatedMembers.
	**/
	this.getAccreditatedMembers = function(){
		return contract.accreditatedMembers(); 
	}
	/**
	* Getter for lastFunctionId.
	**/
	this.getLastFunctionId = function(){
		return contract.lastFunctionId(); 
	}
	/**
	* Getter for mangerCount.
	**/
	this.getMangerCount = function(){
		return contract.mangerCount(); 
	}
	/**
	* Getter for blogRegistry.
	**/
	this.getBlogRegistry = function(){
		return contract.blogRegistry(); 
	}
	/**
	* Getter for date.
	**/
	this.getDate = function(){
		return contract.date(); 
	}
	/**
	* Getter for isActive.
	**/
	this.getIsActive = function(){
		return contract.isActive(); 
	}
	/**
	* Getter for ballotCount.
	**/
	this.getBallotCount = function(){
		return contract.ballotCount(); 
	}
	/**
	* Get the mapped value for a key.
	*/
	this.getManagers=function(key) {
		return contract.managers(key);
	}
	/**
	* Call accreditationMember.
	**/
	this.accreditationMember = function(_address){
		return contract.accreditationMember(_address); 
	}
	/**
	* Call getOrganFunction.
	**/
	this.getOrganFunction = function(_id){
		return contract.getOrganFunction(_id); 
	}
	/**
	* Call addManager.
	**/
	this.addManager = function(_newManagerAddress){
		return contract.addManager(_newManagerAddress); 
	}
	/**
	* Call changeMember.
	**/
	this.changeMember = function(_id,_address){
		return contract.changeMember(_id,_address); 
	}
	/**
	* Call removeManager.
	**/
	this.removeManager = function(_managerAddress){
		return contract.removeManager(_managerAddress); 
	}
	/**
	* Call createFunction.
	**/
	this.createFunction = function(_functionName,_constittiutionHash){
		return contract.createFunction(_functionName,_constittiutionHash); 
	}
	/**
	* Call isManager.
	**/
	this.isManager = function(_managerAddress){
		return contract.isManager(_managerAddress); 
	}
	/**
	* Call initalizeOrgan.
	**/
	this.initalizeOrgan = function(){
		return contract.initalizeOrgan(); 
	}
	/**
	* Call publishFunctionMessage.
	**/
	this.publishFunctionMessage = function(id,message,hash,er){
		return contract.publishFunctionMessage(id,message,hash,er); 
	}
	/**
	* Call createBallot.
	**/
	this.createBallot = function(name,proposalNames){
		return contract.createBallot(name,proposalNames); 
	}
	/**
	* Call getLastBallot.
	**/
	this.getLastBallot = function(){
		return contract.getLastBallot(); 
	}
	/**
	* Call getOrganBlog.
	**/
	this.getOrganBlog = function(){
		return contract.getOrganBlog(); 
	}
	/**
	* Call addOrganFunction.
	**/
	this.addOrganFunction = function(_of,_name){
		return contract.addOrganFunction(_of,_name); 
	}
}// end of function ConferenceModel

/**
* Gui factory Conference
**/
function ConferenceGuiFactory() {
	this.prefix='';
	
	/**
	* Places the default gui to 'e' or an element with id='Conference_gui'
	*/
	this.placeDefaultGui=function(e) {
		if(e==null)
			e = document.getElementById(this.prefix+'Conference_gui');
		if(e!=null)
			e.innerHTML = this.createDefaultGui();
		else
			console.log(this.prefix+'Conference_gui not found');
	}

	/**
	* The default generated gui with all actions and attributes.
	*/
	this.createDefaultGui=function() {
		return 		'<!-- gui for Conference_contract -->'
+		'		<div class="contract" id="'+this.prefix+'Conference_contract">'
+		'		Conference:'
+		'		  <input type="text" id="'+this.prefix+'Conference_address"> <button id="'+this.prefix+'ConferenceController.setAddress" onclick="'+this.prefix+'ConferenceController.setAddress()">change Conference Address</button>'
+		'		  <div class="contract_attributes" id="'+this.prefix+'Conference_contract_attributes"> attributes:'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Conference_contract_attribute_memberRegistry"> memberRegistry:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'Conference_memberRegistry_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Conference_contract_attribute_organName"> organName:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'Conference_organName_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Conference_contract_attribute_accreditatedMembers"> accreditatedMembers:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'Conference_accreditatedMembers_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Conference_contract_attribute_lastFunctionId"> lastFunctionId:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'Conference_lastFunctionId_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Conference_contract_attribute_mangerCount"> mangerCount:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'Conference_mangerCount_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Conference_contract_attribute_blogRegistry"> blogRegistry:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'Conference_blogRegistry_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Conference_contract_attribute_date"> date:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'Conference_date_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Conference_contract_attribute_isActive"> isActive:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'Conference_isActive_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Conference_contract_attribute_ballotCount"> ballotCount:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'Conference_ballotCount_value"> </span>'
+		'		    </div>'
+		'		'
+		'		<div class="Value_Mapping" id="'+this.prefix+'Conference_contract_attribute_managers">mapping  managers:'
+		'				<input class="function_input" type="text" id="'+this.prefix+'Conference_contract_attribute_managers_input">(address)'
+		'		    	<div class="Mapping_value" id="'+this.prefix+'Conference_contract_attribute_address"> bool:'
+		'		      		<span class="contract_attribute_value" id="'+this.prefix+'Conference_managers_value"> </span>'
+		'		    	</div>'
+		'		  </div>'
+		'		    <button class="function_btn" id="'+this.prefix+'Conference_updateAttributes" onclick="'+this.prefix+'ConferenceController._updateAttributes()">update Conference attributes</button>'
+		'		  </div>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'Conference_contract_function_Conference_accreditationMember_address">'
+		'		<legend>accreditationMember</legend>'
+		'			  <label class="function_parameter" for="Conference_accreditationMember_address__address">_address</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Conference_accreditationMember_address__address"'
+		'				  placeholder="_address"/>'
+		'			<button class="function_btn" id="'+this.prefix+'ConferenceController.Conference_accreditationMember_address" onclick="'+this.prefix+'ConferenceController.Conference_accreditationMember_address()">accreditationMember</button>'
+		'			<div class="function_result" id="'+this.prefix+'Conference_accreditationMember_address_res"></div>'
+		'		  </fieldset>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'Conference_contract_function_Organ_getOrganFunction_uint">'
+		'		<legend>getOrganFunction</legend>'
+		'			  <label class="function_parameter" for="Organ_getOrganFunction_uint__id">_id</label>'
+		'				<input class="function_input" type="number" '
+		'		          id="'+this.prefix+'Organ_getOrganFunction_uint__id"'
+		'				  placeholder="_id"/>'
+		'			<button class="function_btn" id="'+this.prefix+'ConferenceController.Organ_getOrganFunction_uint" onclick="'+this.prefix+'ConferenceController.Organ_getOrganFunction_uint()">getOrganFunction</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_getOrganFunction_uint_res"></div>'
+		'		  </fieldset>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'Conference_contract_function_Manageable_addManager_address">'
+		'		<legend>addManager</legend>'
+		'			  <label class="function_parameter" for="Manageable_addManager_address__newManagerAddress">_newManagerAddress</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Manageable_addManager_address__newManagerAddress"'
+		'				  placeholder="_newManagerAddress"/>'
+		'			<button class="function_btn" id="'+this.prefix+'ConferenceController.Manageable_addManager_address" onclick="'+this.prefix+'ConferenceController.Manageable_addManager_address()">addManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_addManager_address_res"></div>'
+		'		  </fieldset>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'Conference_contract_function_Organ_changeMember_uint_address">'
+		'		<legend>changeMember</legend>'
+		'			  <label class="function_parameter" for="Organ_changeMember_uint_address__id">_id</label>'
+		'				<input class="function_input" type="number" '
+		'		          id="'+this.prefix+'Organ_changeMember_uint_address__id"'
+		'				  placeholder="_id"/>'
+		'			  <label class="function_parameter" for="Organ_changeMember_uint_address__address">_address</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Organ_changeMember_uint_address__address"'
+		'				  placeholder="_address"/>'
+		'			<button class="function_btn" id="'+this.prefix+'ConferenceController.Organ_changeMember_uint_address" onclick="'+this.prefix+'ConferenceController.Organ_changeMember_uint_address()">changeMember</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_changeMember_uint_address_res"></div>'
+		'		  </fieldset>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'Conference_contract_function_Manageable_removeManager_address">'
+		'		<legend>removeManager</legend>'
+		'			  <label class="function_parameter" for="Manageable_removeManager_address__managerAddress">_managerAddress</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Manageable_removeManager_address__managerAddress"'
+		'				  placeholder="_managerAddress"/>'
+		'			<button class="function_btn" id="'+this.prefix+'ConferenceController.Manageable_removeManager_address" onclick="'+this.prefix+'ConferenceController.Manageable_removeManager_address()">removeManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_removeManager_address_res"></div>'
+		'		  </fieldset>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'Conference_contract_function_Organ_createFunction_string_string">'
+		'		<legend>createFunction</legend>'
+		'			  <label class="function_parameter" for="Organ_createFunction_string_string__functionName">_functionName</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Organ_createFunction_string_string__functionName"'
+		'				  placeholder="_functionName"/>'
+		'			  <label class="function_parameter" for="Organ_createFunction_string_string__constittiutionHash">_constittiutionHash</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Organ_createFunction_string_string__constittiutionHash"'
+		'				  placeholder="_constittiutionHash"/>'
+		'			<button class="function_btn" id="'+this.prefix+'ConferenceController.Organ_createFunction_string_string" onclick="'+this.prefix+'ConferenceController.Organ_createFunction_string_string()">createFunction</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_createFunction_string_string_res"></div>'
+		'		  </fieldset>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'Conference_contract_function_Manageable_isManager_address">'
+		'		<legend>isManager</legend>'
+		'			  <label class="function_parameter" for="Manageable_isManager_address__managerAddress">_managerAddress</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Manageable_isManager_address__managerAddress"'
+		'				  placeholder="_managerAddress"/>'
+		'			<button class="function_btn" id="'+this.prefix+'ConferenceController.Manageable_isManager_address" onclick="'+this.prefix+'ConferenceController.Manageable_isManager_address()">isManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_isManager_address_res"></div>'
+		'		  </fieldset>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'Conference_contract_function_Organ_initalizeOrgan">'
+		'		<legend>initalizeOrgan</legend>'
+		'			<button class="function_btn" id="'+this.prefix+'ConferenceController.Organ_initalizeOrgan" onclick="'+this.prefix+'ConferenceController.Organ_initalizeOrgan()">initalizeOrgan</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_initalizeOrgan_res"></div>'
+		'		  </fieldset>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'Conference_contract_function_Organ_publishFunctionMessage_uint_string_string_string">'
+		'		<legend>publishFunctionMessage</legend>'
+		'			  <label class="function_parameter" for="Organ_publishFunctionMessage_uint_string_string_string_id">id</label>'
+		'				<input class="function_input" type="number" '
+		'		          id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_id"'
+		'				  placeholder="id"/>'
+		'			  <label class="function_parameter" for="Organ_publishFunctionMessage_uint_string_string_string_message">message</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_message"'
+		'				  placeholder="message"/>'
+		'			  <label class="function_parameter" for="Organ_publishFunctionMessage_uint_string_string_string_hash">hash</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_hash"'
+		'				  placeholder="hash"/>'
+		'			  <label class="function_parameter" for="Organ_publishFunctionMessage_uint_string_string_string_er">er</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_er"'
+		'				  placeholder="er"/>'
+		'			<button class="function_btn" id="'+this.prefix+'ConferenceController.Organ_publishFunctionMessage_uint_string_string_string" onclick="'+this.prefix+'ConferenceController.Organ_publishFunctionMessage_uint_string_string_string()">publishFunctionMessage</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_res"></div>'
+		'		  </fieldset>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'Conference_contract_function_Organ_createBallot_string_bytes32">'
+		'		<legend>createBallot</legend>'
+		'			  <label class="function_parameter" for="Organ_createBallot_string_bytes32_name">name</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Organ_createBallot_string_bytes32_name"'
+		'				  placeholder="name"/>'
+		'			  <label class="function_parameter" for="Organ_createBallot_string_bytes32_proposalNames">proposalNames</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Organ_createBallot_string_bytes32_proposalNames"'
+		'				  placeholder="proposalNames"/>'
+		'			<button class="function_btn" id="'+this.prefix+'ConferenceController.Organ_createBallot_string_bytes32" onclick="'+this.prefix+'ConferenceController.Organ_createBallot_string_bytes32()">createBallot</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_createBallot_string_bytes32_res"></div>'
+		'		  </fieldset>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'Conference_contract_function_Organ_getLastBallot">'
+		'		<legend>getLastBallot</legend>'
+		'			<button class="function_btn" id="'+this.prefix+'ConferenceController.Organ_getLastBallot" onclick="'+this.prefix+'ConferenceController.Organ_getLastBallot()">getLastBallot</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_getLastBallot_res"></div>'
+		'		  </fieldset>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'Conference_contract_function_Organ_getOrganBlog">'
+		'		<legend>getOrganBlog</legend>'
+		'			<button class="function_btn" id="'+this.prefix+'ConferenceController.Organ_getOrganBlog" onclick="'+this.prefix+'ConferenceController.Organ_getOrganBlog()">getOrganBlog</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_getOrganBlog_res"></div>'
+		'		  </fieldset>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'Conference_contract_function_Organ_addOrganFunction_address_string">'
+		'		<legend>addOrganFunction</legend>'
+		'			  <label class="function_parameter" for="Organ_addOrganFunction_address_string__of">_of</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Organ_addOrganFunction_address_string__of"'
+		'				  placeholder="_of"/>'
+		'			  <label class="function_parameter" for="Organ_addOrganFunction_address_string__name">_name</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Organ_addOrganFunction_address_string__name"'
+		'				  placeholder="_name"/>'
+		'			<button class="function_btn" id="'+this.prefix+'ConferenceController.Organ_addOrganFunction_address_string" onclick="'+this.prefix+'ConferenceController.Organ_addOrganFunction_address_string()">addOrganFunction</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_addOrganFunction_address_string_res"></div>'
+		'		  </fieldset>'
+		'		'
+		'		</div>'
;
	}

	/**
	* Create the gui for the attributes.
	*/
	this.createAttributesGui=function() {
		return 		'    <div class="contract_attribute" id="'+this.prefix+'Conference_contract_attribute_memberRegistry"> memberRegistry:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'Conference_memberRegistry_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Conference_contract_attribute_organName"> organName:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'Conference_organName_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Conference_contract_attribute_accreditatedMembers"> accreditatedMembers:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'Conference_accreditatedMembers_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Conference_contract_attribute_lastFunctionId"> lastFunctionId:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'Conference_lastFunctionId_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Conference_contract_attribute_mangerCount"> mangerCount:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'Conference_mangerCount_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Conference_contract_attribute_blogRegistry"> blogRegistry:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'Conference_blogRegistry_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Conference_contract_attribute_date"> date:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'Conference_date_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Conference_contract_attribute_isActive"> isActive:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'Conference_isActive_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Conference_contract_attribute_ballotCount"> ballotCount:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'Conference_ballotCount_value"> </span>'
+		'		    </div>'
+		'		'
;
	}

	/**
	* Create the gui.
	*/
	this.createPlainGui=function(){
		return this.createAttributesGui()
				+ this.createConference_accreditationMember_addressGui
				+ this.createOrgan_getOrganFunction_uintGui
				+ this.createManageable_addManager_addressGui
				+ this.createOrgan_changeMember_uint_addressGui
				+ this.createManageable_removeManager_addressGui
				+ this.createOrgan_createFunction_string_stringGui
				+ this.createManageable_isManager_addressGui
				+ this.createOrgan_initalizeOrganGui
				+ this.createOrgan_publishFunctionMessage_uint_string_string_stringGui
				+ this.createOrgan_createBallot_string_bytes32Gui
				+ this.createOrgan_getLastBallotGui
				+ this.createOrgan_getOrganBlogGui
				+ this.createOrgan_addOrganFunction_address_stringGui
				;
	}

	/**
	* Create the gui for the function accreditationMember.
	*/
	this.createConference_accreditationMember_addressGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'Conference_contract_function_Conference_accreditationMember_address">'
+		'		<legend>accreditationMember</legend>'
+		'			  <label class="function_parameter" for="Conference_accreditationMember_address__address">_address</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Conference_accreditationMember_address__address"'
+		'				  placeholder="_address"/>'
+		'			<button class="function_btn" id="'+this.prefix+'ConferenceController.Conference_accreditationMember_address" onclick="'+this.prefix+'ConferenceController.Conference_accreditationMember_address()">accreditationMember</button>'
+		'			<div class="function_result" id="'+this.prefix+'Conference_accreditationMember_address_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the function getOrganFunction.
	*/
	this.createOrgan_getOrganFunction_uintGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'Conference_contract_function_Organ_getOrganFunction_uint">'
+		'		<legend>getOrganFunction</legend>'
+		'			  <label class="function_parameter" for="Organ_getOrganFunction_uint__id">_id</label>'
+		'				<input class="function_input" type="number" '
+		'		          id="'+this.prefix+'Organ_getOrganFunction_uint__id"'
+		'				  placeholder="_id"/>'
+		'			<button class="function_btn" id="'+this.prefix+'ConferenceController.Organ_getOrganFunction_uint" onclick="'+this.prefix+'ConferenceController.Organ_getOrganFunction_uint()">getOrganFunction</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_getOrganFunction_uint_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the function addManager.
	*/
	this.createManageable_addManager_addressGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'Conference_contract_function_Manageable_addManager_address">'
+		'		<legend>addManager</legend>'
+		'			  <label class="function_parameter" for="Manageable_addManager_address__newManagerAddress">_newManagerAddress</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Manageable_addManager_address__newManagerAddress"'
+		'				  placeholder="_newManagerAddress"/>'
+		'			<button class="function_btn" id="'+this.prefix+'ConferenceController.Manageable_addManager_address" onclick="'+this.prefix+'ConferenceController.Manageable_addManager_address()">addManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_addManager_address_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the function changeMember.
	*/
	this.createOrgan_changeMember_uint_addressGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'Conference_contract_function_Organ_changeMember_uint_address">'
+		'		<legend>changeMember</legend>'
+		'			  <label class="function_parameter" for="Organ_changeMember_uint_address__id">_id</label>'
+		'				<input class="function_input" type="number" '
+		'		          id="'+this.prefix+'Organ_changeMember_uint_address__id"'
+		'				  placeholder="_id"/>'
+		'			  <label class="function_parameter" for="Organ_changeMember_uint_address__address">_address</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Organ_changeMember_uint_address__address"'
+		'				  placeholder="_address"/>'
+		'			<button class="function_btn" id="'+this.prefix+'ConferenceController.Organ_changeMember_uint_address" onclick="'+this.prefix+'ConferenceController.Organ_changeMember_uint_address()">changeMember</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_changeMember_uint_address_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the function removeManager.
	*/
	this.createManageable_removeManager_addressGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'Conference_contract_function_Manageable_removeManager_address">'
+		'		<legend>removeManager</legend>'
+		'			  <label class="function_parameter" for="Manageable_removeManager_address__managerAddress">_managerAddress</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Manageable_removeManager_address__managerAddress"'
+		'				  placeholder="_managerAddress"/>'
+		'			<button class="function_btn" id="'+this.prefix+'ConferenceController.Manageable_removeManager_address" onclick="'+this.prefix+'ConferenceController.Manageable_removeManager_address()">removeManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_removeManager_address_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the function createFunction.
	*/
	this.createOrgan_createFunction_string_stringGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'Conference_contract_function_Organ_createFunction_string_string">'
+		'		<legend>createFunction</legend>'
+		'			  <label class="function_parameter" for="Organ_createFunction_string_string__functionName">_functionName</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Organ_createFunction_string_string__functionName"'
+		'				  placeholder="_functionName"/>'
+		'			  <label class="function_parameter" for="Organ_createFunction_string_string__constittiutionHash">_constittiutionHash</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Organ_createFunction_string_string__constittiutionHash"'
+		'				  placeholder="_constittiutionHash"/>'
+		'			<button class="function_btn" id="'+this.prefix+'ConferenceController.Organ_createFunction_string_string" onclick="'+this.prefix+'ConferenceController.Organ_createFunction_string_string()">createFunction</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_createFunction_string_string_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the function isManager.
	*/
	this.createManageable_isManager_addressGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'Conference_contract_function_Manageable_isManager_address">'
+		'		<legend>isManager</legend>'
+		'			  <label class="function_parameter" for="Manageable_isManager_address__managerAddress">_managerAddress</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Manageable_isManager_address__managerAddress"'
+		'				  placeholder="_managerAddress"/>'
+		'			<button class="function_btn" id="'+this.prefix+'ConferenceController.Manageable_isManager_address" onclick="'+this.prefix+'ConferenceController.Manageable_isManager_address()">isManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_isManager_address_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the function initalizeOrgan.
	*/
	this.createOrgan_initalizeOrganGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'Conference_contract_function_Organ_initalizeOrgan">'
+		'		<legend>initalizeOrgan</legend>'
+		'			<button class="function_btn" id="'+this.prefix+'ConferenceController.Organ_initalizeOrgan" onclick="'+this.prefix+'ConferenceController.Organ_initalizeOrgan()">initalizeOrgan</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_initalizeOrgan_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the function publishFunctionMessage.
	*/
	this.createOrgan_publishFunctionMessage_uint_string_string_stringGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'Conference_contract_function_Organ_publishFunctionMessage_uint_string_string_string">'
+		'		<legend>publishFunctionMessage</legend>'
+		'			  <label class="function_parameter" for="Organ_publishFunctionMessage_uint_string_string_string_id">id</label>'
+		'				<input class="function_input" type="number" '
+		'		          id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_id"'
+		'				  placeholder="id"/>'
+		'			  <label class="function_parameter" for="Organ_publishFunctionMessage_uint_string_string_string_message">message</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_message"'
+		'				  placeholder="message"/>'
+		'			  <label class="function_parameter" for="Organ_publishFunctionMessage_uint_string_string_string_hash">hash</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_hash"'
+		'				  placeholder="hash"/>'
+		'			  <label class="function_parameter" for="Organ_publishFunctionMessage_uint_string_string_string_er">er</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_er"'
+		'				  placeholder="er"/>'
+		'			<button class="function_btn" id="'+this.prefix+'ConferenceController.Organ_publishFunctionMessage_uint_string_string_string" onclick="'+this.prefix+'ConferenceController.Organ_publishFunctionMessage_uint_string_string_string()">publishFunctionMessage</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the function createBallot.
	*/
	this.createOrgan_createBallot_string_bytes32Gui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'Conference_contract_function_Organ_createBallot_string_bytes32">'
+		'		<legend>createBallot</legend>'
+		'			  <label class="function_parameter" for="Organ_createBallot_string_bytes32_name">name</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Organ_createBallot_string_bytes32_name"'
+		'				  placeholder="name"/>'
+		'			  <label class="function_parameter" for="Organ_createBallot_string_bytes32_proposalNames">proposalNames</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Organ_createBallot_string_bytes32_proposalNames"'
+		'				  placeholder="proposalNames"/>'
+		'			<button class="function_btn" id="'+this.prefix+'ConferenceController.Organ_createBallot_string_bytes32" onclick="'+this.prefix+'ConferenceController.Organ_createBallot_string_bytes32()">createBallot</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_createBallot_string_bytes32_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the function getLastBallot.
	*/
	this.createOrgan_getLastBallotGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'Conference_contract_function_Organ_getLastBallot">'
+		'		<legend>getLastBallot</legend>'
+		'			<button class="function_btn" id="'+this.prefix+'ConferenceController.Organ_getLastBallot" onclick="'+this.prefix+'ConferenceController.Organ_getLastBallot()">getLastBallot</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_getLastBallot_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the function getOrganBlog.
	*/
	this.createOrgan_getOrganBlogGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'Conference_contract_function_Organ_getOrganBlog">'
+		'		<legend>getOrganBlog</legend>'
+		'			<button class="function_btn" id="'+this.prefix+'ConferenceController.Organ_getOrganBlog" onclick="'+this.prefix+'ConferenceController.Organ_getOrganBlog()">getOrganBlog</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_getOrganBlog_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the function addOrganFunction.
	*/
	this.createOrgan_addOrganFunction_address_stringGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'Conference_contract_function_Organ_addOrganFunction_address_string">'
+		'		<legend>addOrganFunction</legend>'
+		'			  <label class="function_parameter" for="Organ_addOrganFunction_address_string__of">_of</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Organ_addOrganFunction_address_string__of"'
+		'				  placeholder="_of"/>'
+		'			  <label class="function_parameter" for="Organ_addOrganFunction_address_string__name">_name</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Organ_addOrganFunction_address_string__name"'
+		'				  placeholder="_name"/>'
+		'			<button class="function_btn" id="'+this.prefix+'ConferenceController.Organ_addOrganFunction_address_string" onclick="'+this.prefix+'ConferenceController.Organ_addOrganFunction_address_string()">addOrganFunction</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_addOrganFunction_address_string_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create a div with '@inner' as inner elements.
    * @inner - the inner text
	*/
	this.createSeletonGui=function(inner) {
		return 	'<!-- gui for Conference_contract -->'
		+	'	<div class="contract" id="'+this.prefix+'Conference_contract">'
		+ inner
		+'</div>';
	}


	//eventguis

	/**
	* Create a gui for the MemberAccreditated event.
    * @prefix - a prefix
	* @blockHash - the bolckhash 
	* @blockNumber - the number of the block
	*/
	this.createMemberAccreditatedLogDataGui = function(prefix, blockHash, blockNumber
	,memberId	,memberName	,memberAddress	) {
		return '<div class="eventRow">'
        +'<div class="eventValue">'+memberId+'</div>'
        +'<div class="eventValue">'+memberName+'</div>'
        +'<div class="eventValue">'+memberAddress+'</div>'
        +' </div>';
	}

}//end guifactory

/**
* Class ConferenceController. 
* The controller wrap's the 'instance' contract and binds all actions to document elements.
* Parameters are taken from elements with self.prefix+'functionName_parameterName'
*
* self.prefix+'ConferenceController.setAddress' - 
* self.prefix+'Conference_updateAttributes'     - 
* self.prefix+'Conference_accreditationMember_address -
* self.prefix+'Organ_getOrganFunction_uint -
* self.prefix+'Manageable_addManager_address -
* self.prefix+'Organ_changeMember_uint_address -
* self.prefix+'Manageable_removeManager_address -
* self.prefix+'Organ_createFunction_string_string -
* self.prefix+'Manageable_isManager_address -
* self.prefix+'Organ_initalizeOrgan -
* self.prefix+'Organ_publishFunctionMessage_uint_string_string_string -
* self.prefix+'Organ_createBallot_string_bytes32 -
* self.prefix+'Organ_getLastBallot -
* self.prefix+'Organ_getOrganBlog -
* self.prefix+'Organ_addOrganFunction_address_string -
*/
function ConferenceController() {

	this.instance = undefined;
	this.prefix='';
	this.contractAddress = undefined; 
	this.eventlogPrefix = '';
	var self = this;

	/**
	* Binds the element with the prefix-id to the corresponding element.
	*/
	this.bindGui=function() {
		console.log('bind gui for:'+self.prefix);
		var btn = document.getElementById(self.prefix+'ConferenceController.setAddress');
		if(btn!=undefined)		
			btn.onclick = this.setAddress;
		else console.log('addres widget not bound');

		var btn = document.getElementById(self.prefix+'Conference_updateAttributes');
		if(btn!=undefined)
			btn.onclick = this._updateAttributes;
		else console.log('_updateAttributes widget not bound');
		var btn = document.getElementById(self.prefix+'ConferenceController.Conference_accreditationMember_address');
		if(btn!=undefined)
			btn.onclick = this.Conference_accreditationMember_address;
		else console.log('Conference_accreditationMember_address widget not bound');
		var btn = document.getElementById(self.prefix+'ConferenceController.Organ_getOrganFunction_uint');
		if(btn!=undefined)
			btn.onclick = this.Organ_getOrganFunction_uint;
		else console.log('Organ_getOrganFunction_uint widget not bound');
		var btn = document.getElementById(self.prefix+'ConferenceController.Manageable_addManager_address');
		if(btn!=undefined)
			btn.onclick = this.Manageable_addManager_address;
		else console.log('Manageable_addManager_address widget not bound');
		var btn = document.getElementById(self.prefix+'ConferenceController.Organ_changeMember_uint_address');
		if(btn!=undefined)
			btn.onclick = this.Organ_changeMember_uint_address;
		else console.log('Organ_changeMember_uint_address widget not bound');
		var btn = document.getElementById(self.prefix+'ConferenceController.Manageable_removeManager_address');
		if(btn!=undefined)
			btn.onclick = this.Manageable_removeManager_address;
		else console.log('Manageable_removeManager_address widget not bound');
		var btn = document.getElementById(self.prefix+'ConferenceController.Organ_createFunction_string_string');
		if(btn!=undefined)
			btn.onclick = this.Organ_createFunction_string_string;
		else console.log('Organ_createFunction_string_string widget not bound');
		var btn = document.getElementById(self.prefix+'ConferenceController.Manageable_isManager_address');
		if(btn!=undefined)
			btn.onclick = this.Manageable_isManager_address;
		else console.log('Manageable_isManager_address widget not bound');
		var btn = document.getElementById(self.prefix+'ConferenceController.Organ_initalizeOrgan');
		if(btn!=undefined)
			btn.onclick = this.Organ_initalizeOrgan;
		else console.log('Organ_initalizeOrgan widget not bound');
		var btn = document.getElementById(self.prefix+'ConferenceController.Organ_publishFunctionMessage_uint_string_string_string');
		if(btn!=undefined)
			btn.onclick = this.Organ_publishFunctionMessage_uint_string_string_string;
		else console.log('Organ_publishFunctionMessage_uint_string_string_string widget not bound');
		var btn = document.getElementById(self.prefix+'ConferenceController.Organ_createBallot_string_bytes32');
		if(btn!=undefined)
			btn.onclick = this.Organ_createBallot_string_bytes32;
		else console.log('Organ_createBallot_string_bytes32 widget not bound');
		var btn = document.getElementById(self.prefix+'ConferenceController.Organ_getLastBallot');
		if(btn!=undefined)
			btn.onclick = this.Organ_getLastBallot;
		else console.log('Organ_getLastBallot widget not bound');
		var btn = document.getElementById(self.prefix+'ConferenceController.Organ_getOrganBlog');
		if(btn!=undefined)
			btn.onclick = this.Organ_getOrganBlog;
		else console.log('Organ_getOrganBlog widget not bound');
		var btn = document.getElementById(self.prefix+'ConferenceController.Organ_addOrganFunction_address_string');
		if(btn!=undefined)
			btn.onclick = this.Organ_addOrganFunction_address_string;
		else console.log('Organ_addOrganFunction_address_string widget not bound');

	}

	/**
	* Set the address.
	*/
	this.setAddress=function() {
		var _address = document.getElementById(self.prefix+'Conference_address');
		if(_address==null)return;

		self.Conference_instance = ConferenceContract.at(_address.value);
		self.contractAddress = _address.value;
		self._updateAttributes();
	}
	
	/**
	* Update attributes.
	*
	* prefix+'Conference_memberRegistry_value' - 
	* prefix+'Conference_organName_value' - 
	* prefix+'Conference_accreditatedMembers_value' - 
	* prefix+'Conference_lastFunctionId_value' - 
	* prefix+'Conference_mangerCount_value' - 
	* prefix+'Conference_blogRegistry_value' - 
	* prefix+'Conference_date_value' - 
	* prefix+'Conference_isActive_value' - 
	* prefix+'Conference_ballotCount_value' - 
	**/
	this._updateAttributes=function () {
		if(this.instance===null) return;
		// update attributes
		var memberRegistry_res = self.instance.memberRegistry();
		var e = document.getElementById(self.prefix+'Conference_memberRegistry_value');
		if(memberRegistry_res!=null && e!=null)
			e.innerText = memberRegistry_res;
		else console.log(self.prefix+'Conference_memberRegistry_value not found');
		var organName_res = self.instance.organName();
		var e = document.getElementById(self.prefix+'Conference_organName_value');
		if(organName_res!=null && e!=null)
			e.innerText = organName_res;
		else console.log(self.prefix+'Conference_organName_value not found');
		var accreditatedMembers_res = self.instance.accreditatedMembers();
		var e = document.getElementById(self.prefix+'Conference_accreditatedMembers_value');
		if(accreditatedMembers_res!=null && e!=null)
			e.innerText = accreditatedMembers_res;
		else console.log(self.prefix+'Conference_accreditatedMembers_value not found');
		var lastFunctionId_res = self.instance.lastFunctionId();
		var e = document.getElementById(self.prefix+'Conference_lastFunctionId_value');
		if(lastFunctionId_res!=null && e!=null)
			e.innerText = lastFunctionId_res;
		else console.log(self.prefix+'Conference_lastFunctionId_value not found');
		var mangerCount_res = self.instance.mangerCount();
		var e = document.getElementById(self.prefix+'Conference_mangerCount_value');
		if(mangerCount_res!=null && e!=null)
			e.innerText = mangerCount_res;
		else console.log(self.prefix+'Conference_mangerCount_value not found');
		var blogRegistry_res = self.instance.blogRegistry();
		var e = document.getElementById(self.prefix+'Conference_blogRegistry_value');
		if(blogRegistry_res!=null && e!=null)
			e.innerText = blogRegistry_res;
		else console.log(self.prefix+'Conference_blogRegistry_value not found');
		var date_res = self.instance.date();
		var e = document.getElementById(self.prefix+'Conference_date_value');
		if(date_res!=null && e!=null)
			e.innerText = date_res;
		else console.log(self.prefix+'Conference_date_value not found');
		var isActive_res = self.instance.isActive();
		var e = document.getElementById(self.prefix+'Conference_isActive_value');
		if(isActive_res!=null && e!=null)
			e.innerText = isActive_res;
		else console.log(self.prefix+'Conference_isActive_value not found');
		var ballotCount_res = self.instance.ballotCount();
		var e = document.getElementById(self.prefix+'Conference_ballotCount_value');
		if(ballotCount_res!=null && e!=null)
			e.innerText = ballotCount_res;
		else console.log(self.prefix+'Conference_ballotCount_value not found');
		var e = document.getElementById(self.prefix+'Conference_contract_attribute_managers_input');
		if(e!=null){
			var _key = e.value;
			if(_key!='') {
			var managers_res = self.instance.managers(_key);
			if(managers_res!=null){
				var e1 = document.getElementById(self.prefix+'Conference_managers_value');
				if(e1!=null)	
					e1.innerText = managers_res;
			}}}
	}

	//call functions
	
	/**
	* Calls the contract function Conference_accreditationMember.
	*
	* this.prefix+'Conference_accreditationMember_address__address' -
	**/
	this.Conference_accreditationMember_address=function() {
		var e = document.getElementById(self.prefix+'Conference_accreditationMember_address__address');
		if(e!=null)
			var param__address = e.value;
		else console.log(self.prefix+'Conference_accreditationMember_address__address not found');
		var res = self.instance.accreditationMember(param__address);
	}
	
	/**
	* Calls the contract function Conference_canAccess.
	*
	**/
	this.Manageable_canAccess=function() {
		var res = self.instance.canAccess();
		var e = document.getElementById(self.prefix+'Manageable_canAccess_res');
		if(res!=null && e!=null)
			e.innerText = res;
	}
	
	/**
	* Calls the contract function Conference_isMember.
	*
	* this.prefix+'MemberAware_isMember_address__address' -
	**/
	this.MemberAware_isMember_address=function() {
		var e = document.getElementById(self.prefix+'MemberAware_isMember_address__address');
		if(e!=null)
			var param__address = e.value;
		else console.log(self.prefix+'MemberAware_isMember_address__address not found');
		var res = self.instance.isMember(param__address);
		var e = document.getElementById(self.prefix+'MemberAware_isMember_address_res');
		if(res!=null && e!=null)
			e.innerText = res;
	}
	
	/**
	* Calls the contract function Conference_getOrganFunction.
	*
	* this.prefix+'Organ_getOrganFunction_uint__id' -
	**/
	this.Organ_getOrganFunction_uint=function() {
		var e = document.getElementById(self.prefix+'Organ_getOrganFunction_uint__id');
		if(e!=null)
			var param__id = e.value;
		else console.log(self.prefix+'Organ_getOrganFunction_uint__id not found');
		var res = self.instance.getOrganFunction(param__id);
		var e = document.getElementById(self.prefix+'Organ_getOrganFunction_uint_res');
		if(res!=null && e!=null)
			e.innerText = res;
	}
	
	/**
	* Calls the contract function Conference_addManager.
	*
	* this.prefix+'Manageable_addManager_address__newManagerAddress' -
	**/
	this.Manageable_addManager_address=function() {
		var e = document.getElementById(self.prefix+'Manageable_addManager_address__newManagerAddress');
		if(e!=null)
			var param__newManagerAddress = e.value;
		else console.log(self.prefix+'Manageable_addManager_address__newManagerAddress not found');
		var res = self.instance.addManager(param__newManagerAddress);
	}
	
	/**
	* Calls the contract function Conference_changeMember.
	*
	* this.prefix+'Organ_changeMember_uint_address__id' -
	* this.prefix+'Organ_changeMember_uint_address__address' -
	**/
	this.Organ_changeMember_uint_address=function() {
		var e = document.getElementById(self.prefix+'Organ_changeMember_uint_address__id');
		if(e!=null)
			var param__id = e.value;
		else console.log(self.prefix+'Organ_changeMember_uint_address__id not found');
		var e = document.getElementById(self.prefix+'Organ_changeMember_uint_address__address');
		if(e!=null)
			var param__address = e.value;
		else console.log(self.prefix+'Organ_changeMember_uint_address__address not found');
		var res = self.instance.changeMember(param__id, param__address);
	}
	
	/**
	* Calls the contract function Conference_removeManager.
	*
	* this.prefix+'Manageable_removeManager_address__managerAddress' -
	**/
	this.Manageable_removeManager_address=function() {
		var e = document.getElementById(self.prefix+'Manageable_removeManager_address__managerAddress');
		if(e!=null)
			var param__managerAddress = e.value;
		else console.log(self.prefix+'Manageable_removeManager_address__managerAddress not found');
		var res = self.instance.removeManager(param__managerAddress);
	}
	
	/**
	* Calls the contract function Conference_createFunction.
	*
	* this.prefix+'Organ_createFunction_string_string__functionName' -
	* this.prefix+'Organ_createFunction_string_string__constittiutionHash' -
	**/
	this.Organ_createFunction_string_string=function() {
		var e = document.getElementById(self.prefix+'Organ_createFunction_string_string__functionName');
		if(e!=null)
			var param__functionName = e.value;
		else console.log(self.prefix+'Organ_createFunction_string_string__functionName not found');
		var e = document.getElementById(self.prefix+'Organ_createFunction_string_string__constittiutionHash');
		if(e!=null)
			var param__constittiutionHash = e.value;
		else console.log(self.prefix+'Organ_createFunction_string_string__constittiutionHash not found');
		var res = self.instance.createFunction(param__functionName, param__constittiutionHash);
	}
	
	/**
	* Calls the contract function Conference_isManager.
	*
	* this.prefix+'Manageable_isManager_address__managerAddress' -
	**/
	this.Manageable_isManager_address=function() {
		var e = document.getElementById(self.prefix+'Manageable_isManager_address__managerAddress');
		if(e!=null)
			var param__managerAddress = e.value;
		else console.log(self.prefix+'Manageable_isManager_address__managerAddress not found');
		var res = self.instance.isManager(param__managerAddress);
		var e = document.getElementById(self.prefix+'Manageable_isManager_address_res');
		if(res!=null && e!=null)
			e.innerText = res;
	}
	
	/**
	* Calls the contract function Conference_initalizeOrgan.
	*
	**/
	this.Organ_initalizeOrgan=function() {
		var res = self.instance.initalizeOrgan();
	}
	
	/**
	* Calls the contract function Conference_publishFunctionMessage.
	*
	* this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_id' -
	* this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_message' -
	* this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_hash' -
	* this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_er' -
	**/
	this.Organ_publishFunctionMessage_uint_string_string_string=function() {
		var e = document.getElementById(self.prefix+'Organ_publishFunctionMessage_uint_string_string_string_id');
		if(e!=null)
			var param_id = e.value;
		else console.log(self.prefix+'Organ_publishFunctionMessage_uint_string_string_string_id not found');
		var e = document.getElementById(self.prefix+'Organ_publishFunctionMessage_uint_string_string_string_message');
		if(e!=null)
			var param_message = e.value;
		else console.log(self.prefix+'Organ_publishFunctionMessage_uint_string_string_string_message not found');
		var e = document.getElementById(self.prefix+'Organ_publishFunctionMessage_uint_string_string_string_hash');
		if(e!=null)
			var param_hash = e.value;
		else console.log(self.prefix+'Organ_publishFunctionMessage_uint_string_string_string_hash not found');
		var e = document.getElementById(self.prefix+'Organ_publishFunctionMessage_uint_string_string_string_er');
		if(e!=null)
			var param_er = e.value;
		else console.log(self.prefix+'Organ_publishFunctionMessage_uint_string_string_string_er not found');
		var res = self.instance.publishFunctionMessage(param_id, param_message, param_hash, param_er);
	}
	
	/**
	* Calls the contract function Conference_createBallot.
	*
	* this.prefix+'Organ_createBallot_string_bytes32_name' -
	* this.prefix+'Organ_createBallot_string_bytes32_proposalNames' -
	**/
	this.Organ_createBallot_string_bytes32=function() {
		var e = document.getElementById(self.prefix+'Organ_createBallot_string_bytes32_name');
		if(e!=null)
			var param_name = e.value;
		else console.log(self.prefix+'Organ_createBallot_string_bytes32_name not found');
		var e = document.getElementById(self.prefix+'Organ_createBallot_string_bytes32_proposalNames');
		if(e!=null)
			var param_proposalNames = e.value;
		else console.log(self.prefix+'Organ_createBallot_string_bytes32_proposalNames not found');
		var res = self.instance.createBallot(param_name, param_proposalNames);
		var e = document.getElementById(self.prefix+'Organ_createBallot_string_bytes32_res');
		if(res!=null && e!=null)
			e.innerText = res;
	}
	
	/**
	* Calls the contract function Conference_getLastBallot.
	*
	**/
	this.Organ_getLastBallot=function() {
		var res = self.instance.getLastBallot();
		var e = document.getElementById(self.prefix+'Organ_getLastBallot_res');
		if(res!=null && e!=null)
			e.innerText = res;
	}
	
	/**
	* Calls the contract function Conference_getOrganBlog.
	*
	**/
	this.Organ_getOrganBlog=function() {
		var res = self.instance.getOrganBlog();
		var e = document.getElementById(self.prefix+'Organ_getOrganBlog_res');
		if(res!=null && e!=null)
			e.innerText = res;
	}
	
	/**
	* Calls the contract function Conference_addOrganFunction.
	*
	* this.prefix+'Organ_addOrganFunction_address_string__of' -
	* this.prefix+'Organ_addOrganFunction_address_string__name' -
	**/
	this.Organ_addOrganFunction_address_string=function() {
		var e = document.getElementById(self.prefix+'Organ_addOrganFunction_address_string__of');
		if(e!=null)
			var param__of = e.value;
		else console.log(self.prefix+'Organ_addOrganFunction_address_string__of not found');
		var e = document.getElementById(self.prefix+'Organ_addOrganFunction_address_string__name');
		if(e!=null)
			var param__name = e.value;
		else console.log(self.prefix+'Organ_addOrganFunction_address_string__name not found');
		var res = self.instance.addOrganFunction(param__of, param__name);
	}
	
//delegated calls
}// end controller	

/**
* class as GlueCode ConferenceManager,
* uses prefix + 'GuiContainer' as target element.
* It combines a ConferenceController as 'c' and a ConferenceGuiFactory as 'g'.
**/
function ConferenceManager(prefix,contract,containerId) {
	this.prefix = prefix;
	var self = this;
	this.c = new ConferenceController();
	this.c.prefix=prefix;
	this.c.instance=contract;
	this.c.contractAddress = contract.address;
	this.g = new ConferenceGuiFactory();
	this.g.prefix = prefix;
	this.containerId = containerId;
	this.eventlogPrefix = '';
	this.guiFunction = null;
	this.eventMemberAccreditated = null;
	
	/**
	* adds the gui element to the given 'e' element
	**/
	this.addGui = function(e) {
		if(e==null)
			e = document.getElementById(this.containerId);
		if(e==null){
		console.log(this.containerId+' not found or :'+e);
		return;
		}
		var elemDiv = document.createElement('div');
		elemDiv.id= this.prefix +'Conference_gui';
		e.appendChild(elemDiv);
		if(this.guiFunction==null)
			elemDiv.innerHTML = this.createGui(this.g);
		else elemDiv.innerHTML = this.guiFunction(this.g);
		
		var e = document.getElementById(this.prefix+'Conference_address');
		if(e!=null)
			e.value = this.c.contractAddress;
		else 
			console.log(this.prefix+'Conference_address not found');
		this.c.bindGui();
	}	
	
	/**
	* clears the given element 'e'.
	**/
	this.clearGui = function(e){
		if(e==null)
			e = document.getElementById(this.containerId);
		e.innerHTML ='';
	}

	/**
	* Create the gui with the given 'guiFactory'. Places an sceleton arount it.
	* @return the gui txt used as innerHTML
	**/
	this.createGui = function(guifactory){
		var txt ='';
//Start of user code Conference_create_gui_js
		txt = txt + guifactory.createDefaultGui();
		// End of user code
		return guifactory.createSeletonGui(txt);

	}

	/**
	* Create a small gui, only the attributes. Places an sceleton arount it.
	**/	
	this.createSmallGui = function(guifactory){
		var txt ='';
		txt = txt + guifactory.createAttributesGui();
		return guifactory.createSeletonGui(txt);

	}

	/**
	* Update the attributes.
	**/
	this.updateGui = function(){
		this.c._updateAttributes();
	}

	/**
	* Getter for the contract 'Conference' instance.
	**/
	this.getContract = function(){
		return this.c.instance;
	}

	/**
	* Watch for the contract events.
	* The events are stored in an element with the id this.eventlogPrefix+'eventLog'.
	**/
	this.watchEvents=function(){
	var event_MemberAccreditated = this.getContract().MemberAccreditated({},{fromBlock: 0});
	var elp = this.eventlogPrefix;
	var callback = this.eventMemberAccreditated;
	event_MemberAccreditated.watch(function(error,result){
	if(!error){
		if(callback!=null)
			callback(result);

		}else
			console.log(error);	
	});
	}

}// end of manager

/**
* Manages a list of ConferenceManager uses the guid id to place the gui which is also the eventlogPrefix
*/
function ConferenceGuiMananger(guiId){
	this.prefix = guiId;
	this.managers=new Array();	//[];		
	this.guiFunction = null;
	this.eventMemberAccreditated = null;
	this.managerMap = {};
	
	/**
	* Add a contract to this manager.
	* @contract the web3 contract instance
	*/
	this.addManager = function(contract) {
		var m = new ConferenceManager(contract.address,contract,this.prefix);
		m.eventlogPrefix = this.prefix;
		m.eventMemberAccreditated = this.eventMemberAccreditated;
		m.watchEvents();
		if(this.guiFunction!=null)
			m.guiFunction = this.guiFunction;
		this.managers.push(m);
		this.managerMap[contract.address] = m;
	}

	/**
	 * Changes the gui function for all managers.
	 */
	this.changeGuiFunction =  function(guiFunction){
		for (i in this.managers) {
			var manager = this.managers[i] ;
			manager.guiFunction = guiFunction;
		}
	}
	
	/**
	* Clears the element or the element with id 'prefix'.
	* @e an element
	*/
	this.clearGui = function(e){
		if(e==null)
			e = document.getElementById(this.prefix);
		if(e!==undefined)
			e.innerHTML ='';
	}
		
	/**
	* Displays all guis of the managed contracts.
	* @e an element
	*/
	this.displayGui = function(e){
		if(e==null)
			e = document.getElementById(this.prefix);
		if(e==undefined) return;
		for (i in this.managers) {
			var manager = this.managers[i] ;
			var elemDiv = document.createElement('div');
			elemDiv.id= manager.prefix + 'GuiContainer';//'Conference_gui';
			e.appendChild(elemDiv);
			if(this.guiFunction==null)
				elemDiv.innerHTML = manager.createGui(manager.g);
			else elemDiv.innerHTML = this.guiFunction(manager.g);
			manager.c.bindGui();
		}
	}
	/**
	* Displays a simple gui.
	*/
	this.displaySimpleGui = function(){
		for (i in this.managers) {
			var manager = this.managers[i] ;
			manager.addGui(null);
		}
	}
	/**
	* Update the gui.
	*/
	this.updateGui = function(){
		for (i in this.managers) {
			this.managers[i].updateGui();
		}
//		console.log('update');
	}
}// end of gui mananger

/**
* Deploys the contract.
* Each constructor is available.
**/
function ConferenceDeployment(guiId){
	this.prefix = guiId;
//Start of user code Conference_deployment_attributes_js
	// TODO: implement
	// End of user code

	
	/**
	* The default deployer function.
	**/
	this.deployDefault = function(){
		//Start of user code Conference_deployDefault
		// TODO: implement
		// End of user code
	}

//Start of user code Conference_deployment_js
	// TODO: implement
	// End of user code
}
/**
* A simple bean class around the contract.
* The FoundationConferenceModel.
**/
function FoundationConferenceModel(contract) {
this.contract = contract;
	/**
	* Getter for memberRegistry.
	**/
	this.getMemberRegistry = function(){
		return contract.memberRegistry(); 
	}
	/**
	* Getter for organName.
	**/
	this.getOrganName = function(){
		return contract.organName(); 
	}
	/**
	* Getter for accreditatedMembers.
	**/
	this.getAccreditatedMembers = function(){
		return contract.accreditatedMembers(); 
	}
	/**
	* Getter for lastFunctionId.
	**/
	this.getLastFunctionId = function(){
		return contract.lastFunctionId(); 
	}
	/**
	* Getter for mangerCount.
	**/
	this.getMangerCount = function(){
		return contract.mangerCount(); 
	}
	/**
	* Getter for blogRegistry.
	**/
	this.getBlogRegistry = function(){
		return contract.blogRegistry(); 
	}
	/**
	* Getter for date.
	**/
	this.getDate = function(){
		return contract.date(); 
	}
	/**
	* Getter for isActive.
	**/
	this.getIsActive = function(){
		return contract.isActive(); 
	}
	/**
	* Getter for ballotCount.
	**/
	this.getBallotCount = function(){
		return contract.ballotCount(); 
	}
	/**
	* Get the mapped value for a key.
	*/
	this.getManagers=function(key) {
		return contract.managers(key);
	}
	/**
	* Call accreditationMember.
	**/
	this.accreditationMember = function(_address){
		return contract.accreditationMember(_address); 
	}
	/**
	* Call getOrganFunction.
	**/
	this.getOrganFunction = function(_id){
		return contract.getOrganFunction(_id); 
	}
	/**
	* Call addManager.
	**/
	this.addManager = function(_newManagerAddress){
		return contract.addManager(_newManagerAddress); 
	}
	/**
	* Call changeMember.
	**/
	this.changeMember = function(_id,_address){
		return contract.changeMember(_id,_address); 
	}
	/**
	* Call removeManager.
	**/
	this.removeManager = function(_managerAddress){
		return contract.removeManager(_managerAddress); 
	}
	/**
	* Call createFunction.
	**/
	this.createFunction = function(_functionName,_constittiutionHash){
		return contract.createFunction(_functionName,_constittiutionHash); 
	}
	/**
	* Call isManager.
	**/
	this.isManager = function(_managerAddress){
		return contract.isManager(_managerAddress); 
	}
	/**
	* Call initalizeOrgan.
	**/
	this.initalizeOrgan = function(){
		return contract.initalizeOrgan(); 
	}
	/**
	* Call publishFunctionMessage.
	**/
	this.publishFunctionMessage = function(id,message,hash,er){
		return contract.publishFunctionMessage(id,message,hash,er); 
	}
	/**
	* Call createBallot.
	**/
	this.createBallot = function(name,proposalNames){
		return contract.createBallot(name,proposalNames); 
	}
	/**
	* Call getLastBallot.
	**/
	this.getLastBallot = function(){
		return contract.getLastBallot(); 
	}
	/**
	* Call getOrganBlog.
	**/
	this.getOrganBlog = function(){
		return contract.getOrganBlog(); 
	}
	/**
	* Call addOrganFunction.
	**/
	this.addOrganFunction = function(_of,_name){
		return contract.addOrganFunction(_of,_name); 
	}
}// end of function FoundationConferenceModel

/**
* Gui factory FoundationConference
**/
function FoundationConferenceGuiFactory() {
	this.prefix='';
	
	/**
	* Places the default gui to 'e' or an element with id='FoundationConference_gui'
	*/
	this.placeDefaultGui=function(e) {
		if(e==null)
			e = document.getElementById(this.prefix+'FoundationConference_gui');
		if(e!=null)
			e.innerHTML = this.createDefaultGui();
		else
			console.log(this.prefix+'FoundationConference_gui not found');
	}

	/**
	* The default generated gui with all actions and attributes.
	*/
	this.createDefaultGui=function() {
		return 		'<!-- gui for FoundationConference_contract -->'
+		'		<div class="contract" id="'+this.prefix+'FoundationConference_contract">'
+		'		FoundationConference:'
+		'		  <input type="text" id="'+this.prefix+'FoundationConference_address"> <button id="'+this.prefix+'FoundationConferenceController.setAddress" onclick="'+this.prefix+'FoundationConferenceController.setAddress()">change FoundationConference Address</button>'
+		'		  <div class="contract_attributes" id="'+this.prefix+'FoundationConference_contract_attributes"> attributes:'
+		'		    <div class="contract_attribute" id="'+this.prefix+'FoundationConference_contract_attribute_memberRegistry"> memberRegistry:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'FoundationConference_memberRegistry_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'FoundationConference_contract_attribute_organName"> organName:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'FoundationConference_organName_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'FoundationConference_contract_attribute_accreditatedMembers"> accreditatedMembers:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'FoundationConference_accreditatedMembers_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'FoundationConference_contract_attribute_lastFunctionId"> lastFunctionId:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'FoundationConference_lastFunctionId_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'FoundationConference_contract_attribute_mangerCount"> mangerCount:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'FoundationConference_mangerCount_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'FoundationConference_contract_attribute_blogRegistry"> blogRegistry:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'FoundationConference_blogRegistry_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'FoundationConference_contract_attribute_date"> date:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'FoundationConference_date_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'FoundationConference_contract_attribute_isActive"> isActive:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'FoundationConference_isActive_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'FoundationConference_contract_attribute_ballotCount"> ballotCount:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'FoundationConference_ballotCount_value"> </span>'
+		'		    </div>'
+		'		'
+		'		<div class="Value_Mapping" id="'+this.prefix+'FoundationConference_contract_attribute_managers">mapping  managers:'
+		'				<input class="function_input" type="text" id="'+this.prefix+'FoundationConference_contract_attribute_managers_input">(address)'
+		'		    	<div class="Mapping_value" id="'+this.prefix+'FoundationConference_contract_attribute_address"> bool:'
+		'		      		<span class="contract_attribute_value" id="'+this.prefix+'FoundationConference_managers_value"> </span>'
+		'		    	</div>'
+		'		  </div>'
+		'		    <button class="function_btn" id="'+this.prefix+'FoundationConference_updateAttributes" onclick="'+this.prefix+'FoundationConferenceController._updateAttributes()">update FoundationConference attributes</button>'
+		'		  </div>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'FoundationConference_contract_function_Conference_accreditationMember_address">'
+		'		<legend>accreditationMember</legend>'
+		'			  <label class="function_parameter" for="Conference_accreditationMember_address__address">_address</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Conference_accreditationMember_address__address"'
+		'				  placeholder="_address"/>'
+		'			<button class="function_btn" id="'+this.prefix+'FoundationConferenceController.Conference_accreditationMember_address" onclick="'+this.prefix+'FoundationConferenceController.Conference_accreditationMember_address()">accreditationMember</button>'
+		'			<div class="function_result" id="'+this.prefix+'Conference_accreditationMember_address_res"></div>'
+		'		  </fieldset>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'FoundationConference_contract_function_Organ_getOrganFunction_uint">'
+		'		<legend>getOrganFunction</legend>'
+		'			  <label class="function_parameter" for="Organ_getOrganFunction_uint__id">_id</label>'
+		'				<input class="function_input" type="number" '
+		'		          id="'+this.prefix+'Organ_getOrganFunction_uint__id"'
+		'				  placeholder="_id"/>'
+		'			<button class="function_btn" id="'+this.prefix+'FoundationConferenceController.Organ_getOrganFunction_uint" onclick="'+this.prefix+'FoundationConferenceController.Organ_getOrganFunction_uint()">getOrganFunction</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_getOrganFunction_uint_res"></div>'
+		'		  </fieldset>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'FoundationConference_contract_function_Manageable_addManager_address">'
+		'		<legend>addManager</legend>'
+		'			  <label class="function_parameter" for="Manageable_addManager_address__newManagerAddress">_newManagerAddress</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Manageable_addManager_address__newManagerAddress"'
+		'				  placeholder="_newManagerAddress"/>'
+		'			<button class="function_btn" id="'+this.prefix+'FoundationConferenceController.Manageable_addManager_address" onclick="'+this.prefix+'FoundationConferenceController.Manageable_addManager_address()">addManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_addManager_address_res"></div>'
+		'		  </fieldset>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'FoundationConference_contract_function_Organ_changeMember_uint_address">'
+		'		<legend>changeMember</legend>'
+		'			  <label class="function_parameter" for="Organ_changeMember_uint_address__id">_id</label>'
+		'				<input class="function_input" type="number" '
+		'		          id="'+this.prefix+'Organ_changeMember_uint_address__id"'
+		'				  placeholder="_id"/>'
+		'			  <label class="function_parameter" for="Organ_changeMember_uint_address__address">_address</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Organ_changeMember_uint_address__address"'
+		'				  placeholder="_address"/>'
+		'			<button class="function_btn" id="'+this.prefix+'FoundationConferenceController.Organ_changeMember_uint_address" onclick="'+this.prefix+'FoundationConferenceController.Organ_changeMember_uint_address()">changeMember</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_changeMember_uint_address_res"></div>'
+		'		  </fieldset>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'FoundationConference_contract_function_Manageable_removeManager_address">'
+		'		<legend>removeManager</legend>'
+		'			  <label class="function_parameter" for="Manageable_removeManager_address__managerAddress">_managerAddress</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Manageable_removeManager_address__managerAddress"'
+		'				  placeholder="_managerAddress"/>'
+		'			<button class="function_btn" id="'+this.prefix+'FoundationConferenceController.Manageable_removeManager_address" onclick="'+this.prefix+'FoundationConferenceController.Manageable_removeManager_address()">removeManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_removeManager_address_res"></div>'
+		'		  </fieldset>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'FoundationConference_contract_function_Organ_createFunction_string_string">'
+		'		<legend>createFunction</legend>'
+		'			  <label class="function_parameter" for="Organ_createFunction_string_string__functionName">_functionName</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Organ_createFunction_string_string__functionName"'
+		'				  placeholder="_functionName"/>'
+		'			  <label class="function_parameter" for="Organ_createFunction_string_string__constittiutionHash">_constittiutionHash</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Organ_createFunction_string_string__constittiutionHash"'
+		'				  placeholder="_constittiutionHash"/>'
+		'			<button class="function_btn" id="'+this.prefix+'FoundationConferenceController.Organ_createFunction_string_string" onclick="'+this.prefix+'FoundationConferenceController.Organ_createFunction_string_string()">createFunction</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_createFunction_string_string_res"></div>'
+		'		  </fieldset>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'FoundationConference_contract_function_Manageable_isManager_address">'
+		'		<legend>isManager</legend>'
+		'			  <label class="function_parameter" for="Manageable_isManager_address__managerAddress">_managerAddress</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Manageable_isManager_address__managerAddress"'
+		'				  placeholder="_managerAddress"/>'
+		'			<button class="function_btn" id="'+this.prefix+'FoundationConferenceController.Manageable_isManager_address" onclick="'+this.prefix+'FoundationConferenceController.Manageable_isManager_address()">isManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_isManager_address_res"></div>'
+		'		  </fieldset>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'FoundationConference_contract_function_Organ_initalizeOrgan">'
+		'		<legend>initalizeOrgan</legend>'
+		'			<button class="function_btn" id="'+this.prefix+'FoundationConferenceController.Organ_initalizeOrgan" onclick="'+this.prefix+'FoundationConferenceController.Organ_initalizeOrgan()">initalizeOrgan</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_initalizeOrgan_res"></div>'
+		'		  </fieldset>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'FoundationConference_contract_function_Organ_publishFunctionMessage_uint_string_string_string">'
+		'		<legend>publishFunctionMessage</legend>'
+		'			  <label class="function_parameter" for="Organ_publishFunctionMessage_uint_string_string_string_id">id</label>'
+		'				<input class="function_input" type="number" '
+		'		          id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_id"'
+		'				  placeholder="id"/>'
+		'			  <label class="function_parameter" for="Organ_publishFunctionMessage_uint_string_string_string_message">message</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_message"'
+		'				  placeholder="message"/>'
+		'			  <label class="function_parameter" for="Organ_publishFunctionMessage_uint_string_string_string_hash">hash</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_hash"'
+		'				  placeholder="hash"/>'
+		'			  <label class="function_parameter" for="Organ_publishFunctionMessage_uint_string_string_string_er">er</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_er"'
+		'				  placeholder="er"/>'
+		'			<button class="function_btn" id="'+this.prefix+'FoundationConferenceController.Organ_publishFunctionMessage_uint_string_string_string" onclick="'+this.prefix+'FoundationConferenceController.Organ_publishFunctionMessage_uint_string_string_string()">publishFunctionMessage</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_res"></div>'
+		'		  </fieldset>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'FoundationConference_contract_function_Organ_createBallot_string_bytes32">'
+		'		<legend>createBallot</legend>'
+		'			  <label class="function_parameter" for="Organ_createBallot_string_bytes32_name">name</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Organ_createBallot_string_bytes32_name"'
+		'				  placeholder="name"/>'
+		'			  <label class="function_parameter" for="Organ_createBallot_string_bytes32_proposalNames">proposalNames</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Organ_createBallot_string_bytes32_proposalNames"'
+		'				  placeholder="proposalNames"/>'
+		'			<button class="function_btn" id="'+this.prefix+'FoundationConferenceController.Organ_createBallot_string_bytes32" onclick="'+this.prefix+'FoundationConferenceController.Organ_createBallot_string_bytes32()">createBallot</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_createBallot_string_bytes32_res"></div>'
+		'		  </fieldset>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'FoundationConference_contract_function_Organ_getLastBallot">'
+		'		<legend>getLastBallot</legend>'
+		'			<button class="function_btn" id="'+this.prefix+'FoundationConferenceController.Organ_getLastBallot" onclick="'+this.prefix+'FoundationConferenceController.Organ_getLastBallot()">getLastBallot</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_getLastBallot_res"></div>'
+		'		  </fieldset>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'FoundationConference_contract_function_Organ_getOrganBlog">'
+		'		<legend>getOrganBlog</legend>'
+		'			<button class="function_btn" id="'+this.prefix+'FoundationConferenceController.Organ_getOrganBlog" onclick="'+this.prefix+'FoundationConferenceController.Organ_getOrganBlog()">getOrganBlog</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_getOrganBlog_res"></div>'
+		'		  </fieldset>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'FoundationConference_contract_function_Organ_addOrganFunction_address_string">'
+		'		<legend>addOrganFunction</legend>'
+		'			  <label class="function_parameter" for="Organ_addOrganFunction_address_string__of">_of</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Organ_addOrganFunction_address_string__of"'
+		'				  placeholder="_of"/>'
+		'			  <label class="function_parameter" for="Organ_addOrganFunction_address_string__name">_name</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Organ_addOrganFunction_address_string__name"'
+		'				  placeholder="_name"/>'
+		'			<button class="function_btn" id="'+this.prefix+'FoundationConferenceController.Organ_addOrganFunction_address_string" onclick="'+this.prefix+'FoundationConferenceController.Organ_addOrganFunction_address_string()">addOrganFunction</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_addOrganFunction_address_string_res"></div>'
+		'		  </fieldset>'
+		'		'
+		'		</div>'
;
	}

	/**
	* Create the gui for the attributes.
	*/
	this.createAttributesGui=function() {
		return 		'    <div class="contract_attribute" id="'+this.prefix+'FoundationConference_contract_attribute_memberRegistry"> memberRegistry:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'FoundationConference_memberRegistry_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'FoundationConference_contract_attribute_organName"> organName:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'FoundationConference_organName_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'FoundationConference_contract_attribute_accreditatedMembers"> accreditatedMembers:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'FoundationConference_accreditatedMembers_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'FoundationConference_contract_attribute_lastFunctionId"> lastFunctionId:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'FoundationConference_lastFunctionId_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'FoundationConference_contract_attribute_mangerCount"> mangerCount:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'FoundationConference_mangerCount_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'FoundationConference_contract_attribute_blogRegistry"> blogRegistry:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'FoundationConference_blogRegistry_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'FoundationConference_contract_attribute_date"> date:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'FoundationConference_date_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'FoundationConference_contract_attribute_isActive"> isActive:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'FoundationConference_isActive_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'FoundationConference_contract_attribute_ballotCount"> ballotCount:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'FoundationConference_ballotCount_value"> </span>'
+		'		    </div>'
+		'		'
;
	}

	/**
	* Create the gui.
	*/
	this.createPlainGui=function(){
		return this.createAttributesGui()
				+ this.createConference_accreditationMember_addressGui
				+ this.createOrgan_getOrganFunction_uintGui
				+ this.createManageable_addManager_addressGui
				+ this.createOrgan_changeMember_uint_addressGui
				+ this.createManageable_removeManager_addressGui
				+ this.createOrgan_createFunction_string_stringGui
				+ this.createManageable_isManager_addressGui
				+ this.createOrgan_initalizeOrganGui
				+ this.createOrgan_publishFunctionMessage_uint_string_string_stringGui
				+ this.createOrgan_createBallot_string_bytes32Gui
				+ this.createOrgan_getLastBallotGui
				+ this.createOrgan_getOrganBlogGui
				+ this.createOrgan_addOrganFunction_address_stringGui
				;
	}

	/**
	* Create the gui for the function accreditationMember.
	*/
	this.createConference_accreditationMember_addressGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'FoundationConference_contract_function_Conference_accreditationMember_address">'
+		'		<legend>accreditationMember</legend>'
+		'			  <label class="function_parameter" for="Conference_accreditationMember_address__address">_address</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Conference_accreditationMember_address__address"'
+		'				  placeholder="_address"/>'
+		'			<button class="function_btn" id="'+this.prefix+'FoundationConferenceController.Conference_accreditationMember_address" onclick="'+this.prefix+'FoundationConferenceController.Conference_accreditationMember_address()">accreditationMember</button>'
+		'			<div class="function_result" id="'+this.prefix+'Conference_accreditationMember_address_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the function getOrganFunction.
	*/
	this.createOrgan_getOrganFunction_uintGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'FoundationConference_contract_function_Organ_getOrganFunction_uint">'
+		'		<legend>getOrganFunction</legend>'
+		'			  <label class="function_parameter" for="Organ_getOrganFunction_uint__id">_id</label>'
+		'				<input class="function_input" type="number" '
+		'		          id="'+this.prefix+'Organ_getOrganFunction_uint__id"'
+		'				  placeholder="_id"/>'
+		'			<button class="function_btn" id="'+this.prefix+'FoundationConferenceController.Organ_getOrganFunction_uint" onclick="'+this.prefix+'FoundationConferenceController.Organ_getOrganFunction_uint()">getOrganFunction</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_getOrganFunction_uint_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the function addManager.
	*/
	this.createManageable_addManager_addressGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'FoundationConference_contract_function_Manageable_addManager_address">'
+		'		<legend>addManager</legend>'
+		'			  <label class="function_parameter" for="Manageable_addManager_address__newManagerAddress">_newManagerAddress</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Manageable_addManager_address__newManagerAddress"'
+		'				  placeholder="_newManagerAddress"/>'
+		'			<button class="function_btn" id="'+this.prefix+'FoundationConferenceController.Manageable_addManager_address" onclick="'+this.prefix+'FoundationConferenceController.Manageable_addManager_address()">addManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_addManager_address_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the function changeMember.
	*/
	this.createOrgan_changeMember_uint_addressGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'FoundationConference_contract_function_Organ_changeMember_uint_address">'
+		'		<legend>changeMember</legend>'
+		'			  <label class="function_parameter" for="Organ_changeMember_uint_address__id">_id</label>'
+		'				<input class="function_input" type="number" '
+		'		          id="'+this.prefix+'Organ_changeMember_uint_address__id"'
+		'				  placeholder="_id"/>'
+		'			  <label class="function_parameter" for="Organ_changeMember_uint_address__address">_address</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Organ_changeMember_uint_address__address"'
+		'				  placeholder="_address"/>'
+		'			<button class="function_btn" id="'+this.prefix+'FoundationConferenceController.Organ_changeMember_uint_address" onclick="'+this.prefix+'FoundationConferenceController.Organ_changeMember_uint_address()">changeMember</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_changeMember_uint_address_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the function removeManager.
	*/
	this.createManageable_removeManager_addressGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'FoundationConference_contract_function_Manageable_removeManager_address">'
+		'		<legend>removeManager</legend>'
+		'			  <label class="function_parameter" for="Manageable_removeManager_address__managerAddress">_managerAddress</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Manageable_removeManager_address__managerAddress"'
+		'				  placeholder="_managerAddress"/>'
+		'			<button class="function_btn" id="'+this.prefix+'FoundationConferenceController.Manageable_removeManager_address" onclick="'+this.prefix+'FoundationConferenceController.Manageable_removeManager_address()">removeManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_removeManager_address_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the function createFunction.
	*/
	this.createOrgan_createFunction_string_stringGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'FoundationConference_contract_function_Organ_createFunction_string_string">'
+		'		<legend>createFunction</legend>'
+		'			  <label class="function_parameter" for="Organ_createFunction_string_string__functionName">_functionName</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Organ_createFunction_string_string__functionName"'
+		'				  placeholder="_functionName"/>'
+		'			  <label class="function_parameter" for="Organ_createFunction_string_string__constittiutionHash">_constittiutionHash</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Organ_createFunction_string_string__constittiutionHash"'
+		'				  placeholder="_constittiutionHash"/>'
+		'			<button class="function_btn" id="'+this.prefix+'FoundationConferenceController.Organ_createFunction_string_string" onclick="'+this.prefix+'FoundationConferenceController.Organ_createFunction_string_string()">createFunction</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_createFunction_string_string_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the function isManager.
	*/
	this.createManageable_isManager_addressGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'FoundationConference_contract_function_Manageable_isManager_address">'
+		'		<legend>isManager</legend>'
+		'			  <label class="function_parameter" for="Manageable_isManager_address__managerAddress">_managerAddress</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Manageable_isManager_address__managerAddress"'
+		'				  placeholder="_managerAddress"/>'
+		'			<button class="function_btn" id="'+this.prefix+'FoundationConferenceController.Manageable_isManager_address" onclick="'+this.prefix+'FoundationConferenceController.Manageable_isManager_address()">isManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_isManager_address_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the function initalizeOrgan.
	*/
	this.createOrgan_initalizeOrganGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'FoundationConference_contract_function_Organ_initalizeOrgan">'
+		'		<legend>initalizeOrgan</legend>'
+		'			<button class="function_btn" id="'+this.prefix+'FoundationConferenceController.Organ_initalizeOrgan" onclick="'+this.prefix+'FoundationConferenceController.Organ_initalizeOrgan()">initalizeOrgan</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_initalizeOrgan_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the function publishFunctionMessage.
	*/
	this.createOrgan_publishFunctionMessage_uint_string_string_stringGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'FoundationConference_contract_function_Organ_publishFunctionMessage_uint_string_string_string">'
+		'		<legend>publishFunctionMessage</legend>'
+		'			  <label class="function_parameter" for="Organ_publishFunctionMessage_uint_string_string_string_id">id</label>'
+		'				<input class="function_input" type="number" '
+		'		          id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_id"'
+		'				  placeholder="id"/>'
+		'			  <label class="function_parameter" for="Organ_publishFunctionMessage_uint_string_string_string_message">message</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_message"'
+		'				  placeholder="message"/>'
+		'			  <label class="function_parameter" for="Organ_publishFunctionMessage_uint_string_string_string_hash">hash</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_hash"'
+		'				  placeholder="hash"/>'
+		'			  <label class="function_parameter" for="Organ_publishFunctionMessage_uint_string_string_string_er">er</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_er"'
+		'				  placeholder="er"/>'
+		'			<button class="function_btn" id="'+this.prefix+'FoundationConferenceController.Organ_publishFunctionMessage_uint_string_string_string" onclick="'+this.prefix+'FoundationConferenceController.Organ_publishFunctionMessage_uint_string_string_string()">publishFunctionMessage</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the function createBallot.
	*/
	this.createOrgan_createBallot_string_bytes32Gui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'FoundationConference_contract_function_Organ_createBallot_string_bytes32">'
+		'		<legend>createBallot</legend>'
+		'			  <label class="function_parameter" for="Organ_createBallot_string_bytes32_name">name</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Organ_createBallot_string_bytes32_name"'
+		'				  placeholder="name"/>'
+		'			  <label class="function_parameter" for="Organ_createBallot_string_bytes32_proposalNames">proposalNames</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Organ_createBallot_string_bytes32_proposalNames"'
+		'				  placeholder="proposalNames"/>'
+		'			<button class="function_btn" id="'+this.prefix+'FoundationConferenceController.Organ_createBallot_string_bytes32" onclick="'+this.prefix+'FoundationConferenceController.Organ_createBallot_string_bytes32()">createBallot</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_createBallot_string_bytes32_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the function getLastBallot.
	*/
	this.createOrgan_getLastBallotGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'FoundationConference_contract_function_Organ_getLastBallot">'
+		'		<legend>getLastBallot</legend>'
+		'			<button class="function_btn" id="'+this.prefix+'FoundationConferenceController.Organ_getLastBallot" onclick="'+this.prefix+'FoundationConferenceController.Organ_getLastBallot()">getLastBallot</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_getLastBallot_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the function getOrganBlog.
	*/
	this.createOrgan_getOrganBlogGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'FoundationConference_contract_function_Organ_getOrganBlog">'
+		'		<legend>getOrganBlog</legend>'
+		'			<button class="function_btn" id="'+this.prefix+'FoundationConferenceController.Organ_getOrganBlog" onclick="'+this.prefix+'FoundationConferenceController.Organ_getOrganBlog()">getOrganBlog</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_getOrganBlog_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the function addOrganFunction.
	*/
	this.createOrgan_addOrganFunction_address_stringGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'FoundationConference_contract_function_Organ_addOrganFunction_address_string">'
+		'		<legend>addOrganFunction</legend>'
+		'			  <label class="function_parameter" for="Organ_addOrganFunction_address_string__of">_of</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Organ_addOrganFunction_address_string__of"'
+		'				  placeholder="_of"/>'
+		'			  <label class="function_parameter" for="Organ_addOrganFunction_address_string__name">_name</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Organ_addOrganFunction_address_string__name"'
+		'				  placeholder="_name"/>'
+		'			<button class="function_btn" id="'+this.prefix+'FoundationConferenceController.Organ_addOrganFunction_address_string" onclick="'+this.prefix+'FoundationConferenceController.Organ_addOrganFunction_address_string()">addOrganFunction</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_addOrganFunction_address_string_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create a div with '@inner' as inner elements.
    * @inner - the inner text
	*/
	this.createSeletonGui=function(inner) {
		return 	'<!-- gui for FoundationConference_contract -->'
		+	'	<div class="contract" id="'+this.prefix+'FoundationConference_contract">'
		+ inner
		+'</div>';
	}


	//eventguis

}//end guifactory

/**
* Class FoundationConferenceController. 
* The controller wrap's the 'instance' contract and binds all actions to document elements.
* Parameters are taken from elements with self.prefix+'functionName_parameterName'
*
* self.prefix+'FoundationConferenceController.setAddress' - 
* self.prefix+'FoundationConference_updateAttributes'     - 
* self.prefix+'Conference_accreditationMember_address -
* self.prefix+'Organ_getOrganFunction_uint -
* self.prefix+'Manageable_addManager_address -
* self.prefix+'Organ_changeMember_uint_address -
* self.prefix+'Manageable_removeManager_address -
* self.prefix+'Organ_createFunction_string_string -
* self.prefix+'Manageable_isManager_address -
* self.prefix+'Organ_initalizeOrgan -
* self.prefix+'Organ_publishFunctionMessage_uint_string_string_string -
* self.prefix+'Organ_createBallot_string_bytes32 -
* self.prefix+'Organ_getLastBallot -
* self.prefix+'Organ_getOrganBlog -
* self.prefix+'Organ_addOrganFunction_address_string -
*/
function FoundationConferenceController() {

	this.instance = undefined;
	this.prefix='';
	this.contractAddress = undefined; 
	this.eventlogPrefix = '';
	var self = this;

	/**
	* Binds the element with the prefix-id to the corresponding element.
	*/
	this.bindGui=function() {
		console.log('bind gui for:'+self.prefix);
		var btn = document.getElementById(self.prefix+'FoundationConferenceController.setAddress');
		if(btn!=undefined)		
			btn.onclick = this.setAddress;
		else console.log('addres widget not bound');

		var btn = document.getElementById(self.prefix+'FoundationConference_updateAttributes');
		if(btn!=undefined)
			btn.onclick = this._updateAttributes;
		else console.log('_updateAttributes widget not bound');
		var btn = document.getElementById(self.prefix+'FoundationConferenceController.Conference_accreditationMember_address');
		if(btn!=undefined)
			btn.onclick = this.Conference_accreditationMember_address;
		else console.log('Conference_accreditationMember_address widget not bound');
		var btn = document.getElementById(self.prefix+'FoundationConferenceController.Organ_getOrganFunction_uint');
		if(btn!=undefined)
			btn.onclick = this.Organ_getOrganFunction_uint;
		else console.log('Organ_getOrganFunction_uint widget not bound');
		var btn = document.getElementById(self.prefix+'FoundationConferenceController.Manageable_addManager_address');
		if(btn!=undefined)
			btn.onclick = this.Manageable_addManager_address;
		else console.log('Manageable_addManager_address widget not bound');
		var btn = document.getElementById(self.prefix+'FoundationConferenceController.Organ_changeMember_uint_address');
		if(btn!=undefined)
			btn.onclick = this.Organ_changeMember_uint_address;
		else console.log('Organ_changeMember_uint_address widget not bound');
		var btn = document.getElementById(self.prefix+'FoundationConferenceController.Manageable_removeManager_address');
		if(btn!=undefined)
			btn.onclick = this.Manageable_removeManager_address;
		else console.log('Manageable_removeManager_address widget not bound');
		var btn = document.getElementById(self.prefix+'FoundationConferenceController.Organ_createFunction_string_string');
		if(btn!=undefined)
			btn.onclick = this.Organ_createFunction_string_string;
		else console.log('Organ_createFunction_string_string widget not bound');
		var btn = document.getElementById(self.prefix+'FoundationConferenceController.Manageable_isManager_address');
		if(btn!=undefined)
			btn.onclick = this.Manageable_isManager_address;
		else console.log('Manageable_isManager_address widget not bound');
		var btn = document.getElementById(self.prefix+'FoundationConferenceController.Organ_initalizeOrgan');
		if(btn!=undefined)
			btn.onclick = this.Organ_initalizeOrgan;
		else console.log('Organ_initalizeOrgan widget not bound');
		var btn = document.getElementById(self.prefix+'FoundationConferenceController.Organ_publishFunctionMessage_uint_string_string_string');
		if(btn!=undefined)
			btn.onclick = this.Organ_publishFunctionMessage_uint_string_string_string;
		else console.log('Organ_publishFunctionMessage_uint_string_string_string widget not bound');
		var btn = document.getElementById(self.prefix+'FoundationConferenceController.Organ_createBallot_string_bytes32');
		if(btn!=undefined)
			btn.onclick = this.Organ_createBallot_string_bytes32;
		else console.log('Organ_createBallot_string_bytes32 widget not bound');
		var btn = document.getElementById(self.prefix+'FoundationConferenceController.Organ_getLastBallot');
		if(btn!=undefined)
			btn.onclick = this.Organ_getLastBallot;
		else console.log('Organ_getLastBallot widget not bound');
		var btn = document.getElementById(self.prefix+'FoundationConferenceController.Organ_getOrganBlog');
		if(btn!=undefined)
			btn.onclick = this.Organ_getOrganBlog;
		else console.log('Organ_getOrganBlog widget not bound');
		var btn = document.getElementById(self.prefix+'FoundationConferenceController.Organ_addOrganFunction_address_string');
		if(btn!=undefined)
			btn.onclick = this.Organ_addOrganFunction_address_string;
		else console.log('Organ_addOrganFunction_address_string widget not bound');

	}

	/**
	* Set the address.
	*/
	this.setAddress=function() {
		var _address = document.getElementById(self.prefix+'FoundationConference_address');
		if(_address==null)return;

		self.FoundationConference_instance = FoundationConferenceContract.at(_address.value);
		self.contractAddress = _address.value;
		self._updateAttributes();
	}
	
	/**
	* Update attributes.
	*
	* prefix+'FoundationConference_memberRegistry_value' - 
	* prefix+'FoundationConference_organName_value' - 
	* prefix+'FoundationConference_accreditatedMembers_value' - 
	* prefix+'FoundationConference_lastFunctionId_value' - 
	* prefix+'FoundationConference_mangerCount_value' - 
	* prefix+'FoundationConference_blogRegistry_value' - 
	* prefix+'FoundationConference_date_value' - 
	* prefix+'FoundationConference_isActive_value' - 
	* prefix+'FoundationConference_ballotCount_value' - 
	**/
	this._updateAttributes=function () {
		if(this.instance===null) return;
		// update attributes
		var memberRegistry_res = self.instance.memberRegistry();
		var e = document.getElementById(self.prefix+'FoundationConference_memberRegistry_value');
		if(memberRegistry_res!=null && e!=null)
			e.innerText = memberRegistry_res;
		else console.log(self.prefix+'FoundationConference_memberRegistry_value not found');
		var organName_res = self.instance.organName();
		var e = document.getElementById(self.prefix+'FoundationConference_organName_value');
		if(organName_res!=null && e!=null)
			e.innerText = organName_res;
		else console.log(self.prefix+'FoundationConference_organName_value not found');
		var accreditatedMembers_res = self.instance.accreditatedMembers();
		var e = document.getElementById(self.prefix+'FoundationConference_accreditatedMembers_value');
		if(accreditatedMembers_res!=null && e!=null)
			e.innerText = accreditatedMembers_res;
		else console.log(self.prefix+'FoundationConference_accreditatedMembers_value not found');
		var lastFunctionId_res = self.instance.lastFunctionId();
		var e = document.getElementById(self.prefix+'FoundationConference_lastFunctionId_value');
		if(lastFunctionId_res!=null && e!=null)
			e.innerText = lastFunctionId_res;
		else console.log(self.prefix+'FoundationConference_lastFunctionId_value not found');
		var mangerCount_res = self.instance.mangerCount();
		var e = document.getElementById(self.prefix+'FoundationConference_mangerCount_value');
		if(mangerCount_res!=null && e!=null)
			e.innerText = mangerCount_res;
		else console.log(self.prefix+'FoundationConference_mangerCount_value not found');
		var blogRegistry_res = self.instance.blogRegistry();
		var e = document.getElementById(self.prefix+'FoundationConference_blogRegistry_value');
		if(blogRegistry_res!=null && e!=null)
			e.innerText = blogRegistry_res;
		else console.log(self.prefix+'FoundationConference_blogRegistry_value not found');
		var date_res = self.instance.date();
		var e = document.getElementById(self.prefix+'FoundationConference_date_value');
		if(date_res!=null && e!=null)
			e.innerText = date_res;
		else console.log(self.prefix+'FoundationConference_date_value not found');
		var isActive_res = self.instance.isActive();
		var e = document.getElementById(self.prefix+'FoundationConference_isActive_value');
		if(isActive_res!=null && e!=null)
			e.innerText = isActive_res;
		else console.log(self.prefix+'FoundationConference_isActive_value not found');
		var ballotCount_res = self.instance.ballotCount();
		var e = document.getElementById(self.prefix+'FoundationConference_ballotCount_value');
		if(ballotCount_res!=null && e!=null)
			e.innerText = ballotCount_res;
		else console.log(self.prefix+'FoundationConference_ballotCount_value not found');
		var e = document.getElementById(self.prefix+'FoundationConference_contract_attribute_managers_input');
		if(e!=null){
			var _key = e.value;
			if(_key!='') {
			var managers_res = self.instance.managers(_key);
			if(managers_res!=null){
				var e1 = document.getElementById(self.prefix+'FoundationConference_managers_value');
				if(e1!=null)	
					e1.innerText = managers_res;
			}}}
	}

	//call functions
	
	/**
	* Calls the contract function FoundationConference_accreditationMember.
	*
	* this.prefix+'Conference_accreditationMember_address__address' -
	**/
	this.Conference_accreditationMember_address=function() {
		var e = document.getElementById(self.prefix+'Conference_accreditationMember_address__address');
		if(e!=null)
			var param__address = e.value;
		else console.log(self.prefix+'Conference_accreditationMember_address__address not found');
		var res = self.instance.accreditationMember(param__address);
	}
	
	/**
	* Calls the contract function FoundationConference_canAccess.
	*
	**/
	this.Manageable_canAccess=function() {
		var res = self.instance.canAccess();
		var e = document.getElementById(self.prefix+'Manageable_canAccess_res');
		if(res!=null && e!=null)
			e.innerText = res;
	}
	
	/**
	* Calls the contract function FoundationConference_isMember.
	*
	* this.prefix+'MemberAware_isMember_address__address' -
	**/
	this.MemberAware_isMember_address=function() {
		var e = document.getElementById(self.prefix+'MemberAware_isMember_address__address');
		if(e!=null)
			var param__address = e.value;
		else console.log(self.prefix+'MemberAware_isMember_address__address not found');
		var res = self.instance.isMember(param__address);
		var e = document.getElementById(self.prefix+'MemberAware_isMember_address_res');
		if(res!=null && e!=null)
			e.innerText = res;
	}
	
	/**
	* Calls the contract function FoundationConference_getOrganFunction.
	*
	* this.prefix+'Organ_getOrganFunction_uint__id' -
	**/
	this.Organ_getOrganFunction_uint=function() {
		var e = document.getElementById(self.prefix+'Organ_getOrganFunction_uint__id');
		if(e!=null)
			var param__id = e.value;
		else console.log(self.prefix+'Organ_getOrganFunction_uint__id not found');
		var res = self.instance.getOrganFunction(param__id);
		var e = document.getElementById(self.prefix+'Organ_getOrganFunction_uint_res');
		if(res!=null && e!=null)
			e.innerText = res;
	}
	
	/**
	* Calls the contract function FoundationConference_addManager.
	*
	* this.prefix+'Manageable_addManager_address__newManagerAddress' -
	**/
	this.Manageable_addManager_address=function() {
		var e = document.getElementById(self.prefix+'Manageable_addManager_address__newManagerAddress');
		if(e!=null)
			var param__newManagerAddress = e.value;
		else console.log(self.prefix+'Manageable_addManager_address__newManagerAddress not found');
		var res = self.instance.addManager(param__newManagerAddress);
	}
	
	/**
	* Calls the contract function FoundationConference_changeMember.
	*
	* this.prefix+'Organ_changeMember_uint_address__id' -
	* this.prefix+'Organ_changeMember_uint_address__address' -
	**/
	this.Organ_changeMember_uint_address=function() {
		var e = document.getElementById(self.prefix+'Organ_changeMember_uint_address__id');
		if(e!=null)
			var param__id = e.value;
		else console.log(self.prefix+'Organ_changeMember_uint_address__id not found');
		var e = document.getElementById(self.prefix+'Organ_changeMember_uint_address__address');
		if(e!=null)
			var param__address = e.value;
		else console.log(self.prefix+'Organ_changeMember_uint_address__address not found');
		var res = self.instance.changeMember(param__id, param__address);
	}
	
	/**
	* Calls the contract function FoundationConference_removeManager.
	*
	* this.prefix+'Manageable_removeManager_address__managerAddress' -
	**/
	this.Manageable_removeManager_address=function() {
		var e = document.getElementById(self.prefix+'Manageable_removeManager_address__managerAddress');
		if(e!=null)
			var param__managerAddress = e.value;
		else console.log(self.prefix+'Manageable_removeManager_address__managerAddress not found');
		var res = self.instance.removeManager(param__managerAddress);
	}
	
	/**
	* Calls the contract function FoundationConference_createFunction.
	*
	* this.prefix+'Organ_createFunction_string_string__functionName' -
	* this.prefix+'Organ_createFunction_string_string__constittiutionHash' -
	**/
	this.Organ_createFunction_string_string=function() {
		var e = document.getElementById(self.prefix+'Organ_createFunction_string_string__functionName');
		if(e!=null)
			var param__functionName = e.value;
		else console.log(self.prefix+'Organ_createFunction_string_string__functionName not found');
		var e = document.getElementById(self.prefix+'Organ_createFunction_string_string__constittiutionHash');
		if(e!=null)
			var param__constittiutionHash = e.value;
		else console.log(self.prefix+'Organ_createFunction_string_string__constittiutionHash not found');
		var res = self.instance.createFunction(param__functionName, param__constittiutionHash);
	}
	
	/**
	* Calls the contract function FoundationConference_isManager.
	*
	* this.prefix+'Manageable_isManager_address__managerAddress' -
	**/
	this.Manageable_isManager_address=function() {
		var e = document.getElementById(self.prefix+'Manageable_isManager_address__managerAddress');
		if(e!=null)
			var param__managerAddress = e.value;
		else console.log(self.prefix+'Manageable_isManager_address__managerAddress not found');
		var res = self.instance.isManager(param__managerAddress);
		var e = document.getElementById(self.prefix+'Manageable_isManager_address_res');
		if(res!=null && e!=null)
			e.innerText = res;
	}
	
	/**
	* Calls the contract function FoundationConference_initalizeOrgan.
	*
	**/
	this.Organ_initalizeOrgan=function() {
		var res = self.instance.initalizeOrgan();
	}
	
	/**
	* Calls the contract function FoundationConference_publishFunctionMessage.
	*
	* this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_id' -
	* this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_message' -
	* this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_hash' -
	* this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_er' -
	**/
	this.Organ_publishFunctionMessage_uint_string_string_string=function() {
		var e = document.getElementById(self.prefix+'Organ_publishFunctionMessage_uint_string_string_string_id');
		if(e!=null)
			var param_id = e.value;
		else console.log(self.prefix+'Organ_publishFunctionMessage_uint_string_string_string_id not found');
		var e = document.getElementById(self.prefix+'Organ_publishFunctionMessage_uint_string_string_string_message');
		if(e!=null)
			var param_message = e.value;
		else console.log(self.prefix+'Organ_publishFunctionMessage_uint_string_string_string_message not found');
		var e = document.getElementById(self.prefix+'Organ_publishFunctionMessage_uint_string_string_string_hash');
		if(e!=null)
			var param_hash = e.value;
		else console.log(self.prefix+'Organ_publishFunctionMessage_uint_string_string_string_hash not found');
		var e = document.getElementById(self.prefix+'Organ_publishFunctionMessage_uint_string_string_string_er');
		if(e!=null)
			var param_er = e.value;
		else console.log(self.prefix+'Organ_publishFunctionMessage_uint_string_string_string_er not found');
		var res = self.instance.publishFunctionMessage(param_id, param_message, param_hash, param_er);
	}
	
	/**
	* Calls the contract function FoundationConference_createBallot.
	*
	* this.prefix+'Organ_createBallot_string_bytes32_name' -
	* this.prefix+'Organ_createBallot_string_bytes32_proposalNames' -
	**/
	this.Organ_createBallot_string_bytes32=function() {
		var e = document.getElementById(self.prefix+'Organ_createBallot_string_bytes32_name');
		if(e!=null)
			var param_name = e.value;
		else console.log(self.prefix+'Organ_createBallot_string_bytes32_name not found');
		var e = document.getElementById(self.prefix+'Organ_createBallot_string_bytes32_proposalNames');
		if(e!=null)
			var param_proposalNames = e.value;
		else console.log(self.prefix+'Organ_createBallot_string_bytes32_proposalNames not found');
		var res = self.instance.createBallot(param_name, param_proposalNames);
		var e = document.getElementById(self.prefix+'Organ_createBallot_string_bytes32_res');
		if(res!=null && e!=null)
			e.innerText = res;
	}
	
	/**
	* Calls the contract function FoundationConference_getLastBallot.
	*
	**/
	this.Organ_getLastBallot=function() {
		var res = self.instance.getLastBallot();
		var e = document.getElementById(self.prefix+'Organ_getLastBallot_res');
		if(res!=null && e!=null)
			e.innerText = res;
	}
	
	/**
	* Calls the contract function FoundationConference_getOrganBlog.
	*
	**/
	this.Organ_getOrganBlog=function() {
		var res = self.instance.getOrganBlog();
		var e = document.getElementById(self.prefix+'Organ_getOrganBlog_res');
		if(res!=null && e!=null)
			e.innerText = res;
	}
	
	/**
	* Calls the contract function FoundationConference_addOrganFunction.
	*
	* this.prefix+'Organ_addOrganFunction_address_string__of' -
	* this.prefix+'Organ_addOrganFunction_address_string__name' -
	**/
	this.Organ_addOrganFunction_address_string=function() {
		var e = document.getElementById(self.prefix+'Organ_addOrganFunction_address_string__of');
		if(e!=null)
			var param__of = e.value;
		else console.log(self.prefix+'Organ_addOrganFunction_address_string__of not found');
		var e = document.getElementById(self.prefix+'Organ_addOrganFunction_address_string__name');
		if(e!=null)
			var param__name = e.value;
		else console.log(self.prefix+'Organ_addOrganFunction_address_string__name not found');
		var res = self.instance.addOrganFunction(param__of, param__name);
	}
	
//delegated calls
}// end controller	

/**
* class as GlueCode FoundationConferenceManager,
* uses prefix + 'GuiContainer' as target element.
* It combines a FoundationConferenceController as 'c' and a FoundationConferenceGuiFactory as 'g'.
**/
function FoundationConferenceManager(prefix,contract,containerId) {
	this.prefix = prefix;
	var self = this;
	this.c = new FoundationConferenceController();
	this.c.prefix=prefix;
	this.c.instance=contract;
	this.c.contractAddress = contract.address;
	this.g = new FoundationConferenceGuiFactory();
	this.g.prefix = prefix;
	this.containerId = containerId;
	this.eventlogPrefix = '';
	this.guiFunction = null;
	
	/**
	* adds the gui element to the given 'e' element
	**/
	this.addGui = function(e) {
		if(e==null)
			e = document.getElementById(this.containerId);
		if(e==null){
		console.log(this.containerId+' not found or :'+e);
		return;
		}
		var elemDiv = document.createElement('div');
		elemDiv.id= this.prefix +'FoundationConference_gui';
		e.appendChild(elemDiv);
		if(this.guiFunction==null)
			elemDiv.innerHTML = this.createGui(this.g);
		else elemDiv.innerHTML = this.guiFunction(this.g);
		
		var e = document.getElementById(this.prefix+'FoundationConference_address');
		if(e!=null)
			e.value = this.c.contractAddress;
		else 
			console.log(this.prefix+'FoundationConference_address not found');
		this.c.bindGui();
	}	
	
	/**
	* clears the given element 'e'.
	**/
	this.clearGui = function(e){
		if(e==null)
			e = document.getElementById(this.containerId);
		e.innerHTML ='';
	}

	/**
	* Create the gui with the given 'guiFactory'. Places an sceleton arount it.
	* @return the gui txt used as innerHTML
	**/
	this.createGui = function(guifactory){
		var txt ='';
//Start of user code FoundationConference_create_gui_js
		txt = txt + guifactory.createDefaultGui();
		// End of user code
		return guifactory.createSeletonGui(txt);

	}

	/**
	* Create a small gui, only the attributes. Places an sceleton arount it.
	**/	
	this.createSmallGui = function(guifactory){
		var txt ='';
		txt = txt + guifactory.createAttributesGui();
		return guifactory.createSeletonGui(txt);

	}

	/**
	* Update the attributes.
	**/
	this.updateGui = function(){
		this.c._updateAttributes();
	}

	/**
	* Getter for the contract 'FoundationConference' instance.
	**/
	this.getContract = function(){
		return this.c.instance;
	}

	/**
	* Watch for the contract events.
	* The events are stored in an element with the id this.eventlogPrefix+'eventLog'.
	**/
	this.watchEvents=function(){
	}

}// end of manager

/**
* Manages a list of FoundationConferenceManager uses the guid id to place the gui which is also the eventlogPrefix
*/
function FoundationConferenceGuiMananger(guiId){
	this.prefix = guiId;
	this.managers=new Array();	//[];		
	this.guiFunction = null;
	this.managerMap = {};
	
	/**
	* Add a contract to this manager.
	* @contract the web3 contract instance
	*/
	this.addManager = function(contract) {
		var m = new FoundationConferenceManager(contract.address,contract,this.prefix);
		m.eventlogPrefix = this.prefix;
		m.watchEvents();
		if(this.guiFunction!=null)
			m.guiFunction = this.guiFunction;
		this.managers.push(m);
		this.managerMap[contract.address] = m;
	}

	/**
	 * Changes the gui function for all managers.
	 */
	this.changeGuiFunction =  function(guiFunction){
		for (i in this.managers) {
			var manager = this.managers[i] ;
			manager.guiFunction = guiFunction;
		}
	}
	
	/**
	* Clears the element or the element with id 'prefix'.
	* @e an element
	*/
	this.clearGui = function(e){
		if(e==null)
			e = document.getElementById(this.prefix);
		if(e!==undefined)
			e.innerHTML ='';
	}
		
	/**
	* Displays all guis of the managed contracts.
	* @e an element
	*/
	this.displayGui = function(e){
		if(e==null)
			e = document.getElementById(this.prefix);
		if(e==undefined) return;
		for (i in this.managers) {
			var manager = this.managers[i] ;
			var elemDiv = document.createElement('div');
			elemDiv.id= manager.prefix + 'GuiContainer';//'FoundationConference_gui';
			e.appendChild(elemDiv);
			if(this.guiFunction==null)
				elemDiv.innerHTML = manager.createGui(manager.g);
			else elemDiv.innerHTML = this.guiFunction(manager.g);
			manager.c.bindGui();
		}
	}
	/**
	* Displays a simple gui.
	*/
	this.displaySimpleGui = function(){
		for (i in this.managers) {
			var manager = this.managers[i] ;
			manager.addGui(null);
		}
	}
	/**
	* Update the gui.
	*/
	this.updateGui = function(){
		for (i in this.managers) {
			this.managers[i].updateGui();
		}
//		console.log('update');
	}
}// end of gui mananger

/**
* Deploys the contract.
* Each constructor is available.
**/
function FoundationConferenceDeployment(guiId){
	this.prefix = guiId;
//Start of user code FoundationConference_deployment_attributes_js
	// TODO: implement
	// End of user code

	
	/**
	* The default deployer function.
	**/
	this.deployDefault = function(){
		//Start of user code FoundationConference_deployDefault
		// TODO: implement
		// End of user code
	}

//Start of user code FoundationConference_deployment_js
	// TODO: implement
	// End of user code
}
/**
* A simple bean class around the contract.
* The OrganFunctionModel.
**/
function OrganFunctionModel(contract) {
this.contract = contract;
	/**
	* Getter for currentMember.
	**/
	this.getCurrentMember = function(){
		return contract.currentMember(); 
	}
	/**
	* Getter for functionName.
	**/
	this.getFunctionName = function(){
		return contract.functionName(); 
	}
	/**
	* Getter for mangerCount.
	**/
	this.getMangerCount = function(){
		return contract.mangerCount(); 
	}
	/**
	* Getter for id.
	**/
	this.getId = function(){
		return contract.id(); 
	}
	/**
	* Getter for constitutionHash.
	**/
	this.getConstitutionHash = function(){
		return contract.constitutionHash(); 
	}
	/**
	* Getter for lastMemberChanged.
	**/
	this.getLastMemberChanged = function(){
		return contract.lastMemberChanged(); 
	}
	/**
	* Getter for lastConstitutionHashChanged.
	**/
	this.getLastConstitutionHashChanged = function(){
		return contract.lastConstitutionHashChanged(); 
	}
	/**
	* Getter for publisher.
	**/
	this.getPublisher = function(){
		return contract.publisher(); 
	}
	/**
	* Get the mapped value for a key.
	*/
	this.getManagers=function(key) {
		return contract.managers(key);
	}
	/**
	* Call addManager.
	**/
	this.addManager = function(_newManagerAddress){
		return contract.addManager(_newManagerAddress); 
	}
	/**
	* Call getFunctioName.
	**/
	this.getFunctioName = function(){
		return contract.getFunctioName(); 
	}
	/**
	* Call removeManager.
	**/
	this.removeManager = function(_managerAddress){
		return contract.removeManager(_managerAddress); 
	}
	/**
	* Call isManager.
	**/
	this.isManager = function(_managerAddress){
		return contract.isManager(_managerAddress); 
	}
	/**
	* Call publishMessage.
	**/
	this.publishMessage = function(message,hash,er){
		return contract.publishMessage(message,hash,er); 
	}
}// end of function OrganFunctionModel

/**
* Gui factory OrganFunction
**/
function OrganFunctionGuiFactory() {
	this.prefix='';
	
	/**
	* Places the default gui to 'e' or an element with id='OrganFunction_gui'
	*/
	this.placeDefaultGui=function(e) {
		if(e==null)
			e = document.getElementById(this.prefix+'OrganFunction_gui');
		if(e!=null)
			e.innerHTML = this.createDefaultGui();
		else
			console.log(this.prefix+'OrganFunction_gui not found');
	}

	/**
	* The default generated gui with all actions and attributes.
	*/
	this.createDefaultGui=function() {
		return 		'<!-- gui for OrganFunction_contract -->'
+		'		<div class="contract" id="'+this.prefix+'OrganFunction_contract">'
+		'		OrganFunction:'
+		'		  <input type="text" id="'+this.prefix+'OrganFunction_address"> <button id="'+this.prefix+'OrganFunctionController.setAddress" onclick="'+this.prefix+'OrganFunctionController.setAddress()">change OrganFunction Address</button>'
+		'		  <div class="contract_attributes" id="'+this.prefix+'OrganFunction_contract_attributes"> attributes:'
+		'		    <div class="contract_attribute" id="'+this.prefix+'OrganFunction_contract_attribute_currentMember"> currentMember:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'OrganFunction_currentMember_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'OrganFunction_contract_attribute_functionName"> functionName:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'OrganFunction_functionName_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'OrganFunction_contract_attribute_mangerCount"> mangerCount:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'OrganFunction_mangerCount_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'OrganFunction_contract_attribute_id"> id:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'OrganFunction_id_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'OrganFunction_contract_attribute_constitutionHash"> constitutionHash:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'OrganFunction_constitutionHash_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'OrganFunction_contract_attribute_lastMemberChanged"> lastMemberChanged:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'OrganFunction_lastMemberChanged_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'OrganFunction_contract_attribute_lastConstitutionHashChanged"> lastConstitutionHashChanged:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'OrganFunction_lastConstitutionHashChanged_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'OrganFunction_contract_attribute_publisher"> publisher:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'OrganFunction_publisher_value"> </span>'
+		'		    </div>'
+		'		'
+		'		<div class="Value_Mapping" id="'+this.prefix+'OrganFunction_contract_attribute_managers">mapping  managers:'
+		'				<input class="function_input" type="text" id="'+this.prefix+'OrganFunction_contract_attribute_managers_input">(address)'
+		'		    	<div class="Mapping_value" id="'+this.prefix+'OrganFunction_contract_attribute_address"> bool:'
+		'		      		<span class="contract_attribute_value" id="'+this.prefix+'OrganFunction_managers_value"> </span>'
+		'		    	</div>'
+		'		  </div>'
+		'		    <button class="function_btn" id="'+this.prefix+'OrganFunction_updateAttributes" onclick="'+this.prefix+'OrganFunctionController._updateAttributes()">update OrganFunction attributes</button>'
+		'		  </div>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'OrganFunction_contract_function_Manageable_addManager_address">'
+		'		<legend>addManager</legend>'
+		'			  <label class="function_parameter" for="Manageable_addManager_address__newManagerAddress">_newManagerAddress</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Manageable_addManager_address__newManagerAddress"'
+		'				  placeholder="_newManagerAddress"/>'
+		'			<button class="function_btn" id="'+this.prefix+'OrganFunctionController.Manageable_addManager_address" onclick="'+this.prefix+'OrganFunctionController.Manageable_addManager_address()">addManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_addManager_address_res"></div>'
+		'		  </fieldset>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'OrganFunction_contract_function_OrganFunction_getFunctioName">'
+		'		<legend>getFunctioName</legend>'
+		'			<button class="function_btn" id="'+this.prefix+'OrganFunctionController.OrganFunction_getFunctioName" onclick="'+this.prefix+'OrganFunctionController.OrganFunction_getFunctioName()">getFunctioName</button>'
+		'			<div class="function_result" id="'+this.prefix+'OrganFunction_getFunctioName_res"></div>'
+		'		  </fieldset>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'OrganFunction_contract_function_Manageable_removeManager_address">'
+		'		<legend>removeManager</legend>'
+		'			  <label class="function_parameter" for="Manageable_removeManager_address__managerAddress">_managerAddress</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Manageable_removeManager_address__managerAddress"'
+		'				  placeholder="_managerAddress"/>'
+		'			<button class="function_btn" id="'+this.prefix+'OrganFunctionController.Manageable_removeManager_address" onclick="'+this.prefix+'OrganFunctionController.Manageable_removeManager_address()">removeManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_removeManager_address_res"></div>'
+		'		  </fieldset>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'OrganFunction_contract_function_Manageable_isManager_address">'
+		'		<legend>isManager</legend>'
+		'			  <label class="function_parameter" for="Manageable_isManager_address__managerAddress">_managerAddress</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Manageable_isManager_address__managerAddress"'
+		'				  placeholder="_managerAddress"/>'
+		'			<button class="function_btn" id="'+this.prefix+'OrganFunctionController.Manageable_isManager_address" onclick="'+this.prefix+'OrganFunctionController.Manageable_isManager_address()">isManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_isManager_address_res"></div>'
+		'		  </fieldset>'
+		'		'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'OrganFunction_contract_function_MessagePublisher_publishMessage_string_string_string">'
+		'		<legend>publishMessage</legend>'
+		'			  <label class="function_parameter" for="MessagePublisher_publishMessage_string_string_string_message">message</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'MessagePublisher_publishMessage_string_string_string_message"'
+		'				  placeholder="message"/>'
+		'			  <label class="function_parameter" for="MessagePublisher_publishMessage_string_string_string_hash">hash</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'MessagePublisher_publishMessage_string_string_string_hash"'
+		'				  placeholder="hash"/>'
+		'			  <label class="function_parameter" for="MessagePublisher_publishMessage_string_string_string_er">er</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'MessagePublisher_publishMessage_string_string_string_er"'
+		'				  placeholder="er"/>'
+		'			<button class="function_btn" id="'+this.prefix+'OrganFunctionController.MessagePublisher_publishMessage_string_string_string" onclick="'+this.prefix+'OrganFunctionController.MessagePublisher_publishMessage_string_string_string()">publishMessage</button>'
+		'			<div class="function_result" id="'+this.prefix+'MessagePublisher_publishMessage_string_string_string_res"></div>'
+		'		  </fieldset>'
+		'		</div>'
;
	}

	/**
	* Create the gui for the attributes.
	*/
	this.createAttributesGui=function() {
		return 		'    <div class="contract_attribute" id="'+this.prefix+'OrganFunction_contract_attribute_currentMember"> currentMember:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'OrganFunction_currentMember_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'OrganFunction_contract_attribute_functionName"> functionName:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'OrganFunction_functionName_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'OrganFunction_contract_attribute_mangerCount"> mangerCount:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'OrganFunction_mangerCount_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'OrganFunction_contract_attribute_id"> id:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'OrganFunction_id_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'OrganFunction_contract_attribute_constitutionHash"> constitutionHash:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'OrganFunction_constitutionHash_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'OrganFunction_contract_attribute_lastMemberChanged"> lastMemberChanged:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'OrganFunction_lastMemberChanged_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'OrganFunction_contract_attribute_lastConstitutionHashChanged"> lastConstitutionHashChanged:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'OrganFunction_lastConstitutionHashChanged_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'OrganFunction_contract_attribute_publisher"> publisher:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'OrganFunction_publisher_value"> </span>'
+		'		    </div>'
+		'		'
;
	}

	/**
	* Create the gui.
	*/
	this.createPlainGui=function(){
		return this.createAttributesGui()
				+ this.createManageable_addManager_addressGui
				+ this.createOrganFunction_getFunctioNameGui
				+ this.createManageable_removeManager_addressGui
				+ this.createManageable_isManager_addressGui
				+ this.createOrganFunction_publishMessage_string_string_stringGui
				;
	}

	/**
	* Create the gui for the function addManager.
	*/
	this.createManageable_addManager_addressGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'OrganFunction_contract_function_Manageable_addManager_address">'
+		'		<legend>addManager</legend>'
+		'			  <label class="function_parameter" for="Manageable_addManager_address__newManagerAddress">_newManagerAddress</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Manageable_addManager_address__newManagerAddress"'
+		'				  placeholder="_newManagerAddress"/>'
+		'			<button class="function_btn" id="'+this.prefix+'OrganFunctionController.Manageable_addManager_address" onclick="'+this.prefix+'OrganFunctionController.Manageable_addManager_address()">addManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_addManager_address_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the function getFunctioName.
	*/
	this.createOrganFunction_getFunctioNameGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'OrganFunction_contract_function_OrganFunction_getFunctioName">'
+		'		<legend>getFunctioName</legend>'
+		'			<button class="function_btn" id="'+this.prefix+'OrganFunctionController.OrganFunction_getFunctioName" onclick="'+this.prefix+'OrganFunctionController.OrganFunction_getFunctioName()">getFunctioName</button>'
+		'			<div class="function_result" id="'+this.prefix+'OrganFunction_getFunctioName_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the function removeManager.
	*/
	this.createManageable_removeManager_addressGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'OrganFunction_contract_function_Manageable_removeManager_address">'
+		'		<legend>removeManager</legend>'
+		'			  <label class="function_parameter" for="Manageable_removeManager_address__managerAddress">_managerAddress</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Manageable_removeManager_address__managerAddress"'
+		'				  placeholder="_managerAddress"/>'
+		'			<button class="function_btn" id="'+this.prefix+'OrganFunctionController.Manageable_removeManager_address" onclick="'+this.prefix+'OrganFunctionController.Manageable_removeManager_address()">removeManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_removeManager_address_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the function isManager.
	*/
	this.createManageable_isManager_addressGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'OrganFunction_contract_function_Manageable_isManager_address">'
+		'		<legend>isManager</legend>'
+		'			  <label class="function_parameter" for="Manageable_isManager_address__managerAddress">_managerAddress</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Manageable_isManager_address__managerAddress"'
+		'				  placeholder="_managerAddress"/>'
+		'			<button class="function_btn" id="'+this.prefix+'OrganFunctionController.Manageable_isManager_address" onclick="'+this.prefix+'OrganFunctionController.Manageable_isManager_address()">isManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_isManager_address_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the function publishMessage.
	*/
	this.createOrganFunction_publishMessage_string_string_stringGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'OrganFunction_contract_function_MessagePublisher_publishMessage_string_string_string">'
+		'		<legend>publishMessage</legend>'
+		'			  <label class="function_parameter" for="MessagePublisher_publishMessage_string_string_string_message">message</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'MessagePublisher_publishMessage_string_string_string_message"'
+		'				  placeholder="message"/>'
+		'			  <label class="function_parameter" for="MessagePublisher_publishMessage_string_string_string_hash">hash</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'MessagePublisher_publishMessage_string_string_string_hash"'
+		'				  placeholder="hash"/>'
+		'			  <label class="function_parameter" for="MessagePublisher_publishMessage_string_string_string_er">er</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'MessagePublisher_publishMessage_string_string_string_er"'
+		'				  placeholder="er"/>'
+		'			<button class="function_btn" id="'+this.prefix+'OrganFunctionController.MessagePublisher_publishMessage_string_string_string" onclick="'+this.prefix+'OrganFunctionController.MessagePublisher_publishMessage_string_string_string()">publishMessage</button>'
+		'			<div class="function_result" id="'+this.prefix+'MessagePublisher_publishMessage_string_string_string_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create a div with '@inner' as inner elements.
    * @inner - the inner text
	*/
	this.createSeletonGui=function(inner) {
		return 	'<!-- gui for OrganFunction_contract -->'
		+	'	<div class="contract" id="'+this.prefix+'OrganFunction_contract">'
		+ inner
		+'</div>';
	}


	//eventguis

}//end guifactory

/**
* Class OrganFunctionController. 
* The controller wrap's the 'instance' contract and binds all actions to document elements.
* Parameters are taken from elements with self.prefix+'functionName_parameterName'
*
* self.prefix+'OrganFunctionController.setAddress' - 
* self.prefix+'OrganFunction_updateAttributes'     - 
* self.prefix+'Manageable_addManager_address -
* self.prefix+'OrganFunction_getFunctioName -
* self.prefix+'Manageable_removeManager_address -
* self.prefix+'Manageable_isManager_address -
*/
function OrganFunctionController() {

	this.instance = undefined;
	this.prefix='';
	this.contractAddress = undefined; 
	this.eventlogPrefix = '';
	var self = this;

	/**
	* Binds the element with the prefix-id to the corresponding element.
	*/
	this.bindGui=function() {
		console.log('bind gui for:'+self.prefix);
		var btn = document.getElementById(self.prefix+'OrganFunctionController.setAddress');
		if(btn!=undefined)		
			btn.onclick = this.setAddress;
		else console.log('addres widget not bound');

		var btn = document.getElementById(self.prefix+'OrganFunction_updateAttributes');
		if(btn!=undefined)
			btn.onclick = this._updateAttributes;
		else console.log('_updateAttributes widget not bound');
		var btn = document.getElementById(self.prefix+'OrganFunctionController.Manageable_addManager_address');
		if(btn!=undefined)
			btn.onclick = this.Manageable_addManager_address;
		else console.log('Manageable_addManager_address widget not bound');
		var btn = document.getElementById(self.prefix+'OrganFunctionController.OrganFunction_getFunctioName');
		if(btn!=undefined)
			btn.onclick = this.OrganFunction_getFunctioName;
		else console.log('OrganFunction_getFunctioName widget not bound');
		var btn = document.getElementById(self.prefix+'OrganFunctionController.Manageable_removeManager_address');
		if(btn!=undefined)
			btn.onclick = this.Manageable_removeManager_address;
		else console.log('Manageable_removeManager_address widget not bound');
		var btn = document.getElementById(self.prefix+'OrganFunctionController.Manageable_isManager_address');
		if(btn!=undefined)
			btn.onclick = this.Manageable_isManager_address;
		else console.log('Manageable_isManager_address widget not bound');
		var btn = document.getElementById(self.prefix+'OrganFunctionController.MessagePublisher_publishMessage_string_string_string');
		if(btn!=undefined)
			btn.onclick = this.MessagePublisher_publishMessage_string_string_string;
		else console.log('MessagePublisher_publishMessage_string_string_string widget not bound');


	}

	/**
	* Set the address.
	*/
	this.setAddress=function() {
		var _address = document.getElementById(self.prefix+'OrganFunction_address');
		if(_address==null)return;

		self.OrganFunction_instance = OrganFunctionContract.at(_address.value);
		self.contractAddress = _address.value;
		self._updateAttributes();
	}
	
	/**
	* Update attributes.
	*
	* prefix+'OrganFunction_currentMember_value' - 
	* prefix+'OrganFunction_functionName_value' - 
	* prefix+'OrganFunction_mangerCount_value' - 
	* prefix+'OrganFunction_id_value' - 
	* prefix+'OrganFunction_constitutionHash_value' - 
	* prefix+'OrganFunction_lastMemberChanged_value' - 
	* prefix+'OrganFunction_lastConstitutionHashChanged_value' - 
	* prefix+'OrganFunction_publisher_value' - 
	**/
	this._updateAttributes=function () {
		if(this.instance===null) return;
		// update attributes
		var currentMember_res = self.instance.currentMember();
		var e = document.getElementById(self.prefix+'OrganFunction_currentMember_value');
		if(currentMember_res!=null && e!=null)
			e.innerText = currentMember_res;
		else console.log(self.prefix+'OrganFunction_currentMember_value not found');
		var functionName_res = self.instance.functionName();
		var e = document.getElementById(self.prefix+'OrganFunction_functionName_value');
		if(functionName_res!=null && e!=null)
			e.innerText = functionName_res;
		else console.log(self.prefix+'OrganFunction_functionName_value not found');
		var mangerCount_res = self.instance.mangerCount();
		var e = document.getElementById(self.prefix+'OrganFunction_mangerCount_value');
		if(mangerCount_res!=null && e!=null)
			e.innerText = mangerCount_res;
		else console.log(self.prefix+'OrganFunction_mangerCount_value not found');
		var id_res = self.instance.id();
		var e = document.getElementById(self.prefix+'OrganFunction_id_value');
		if(id_res!=null && e!=null)
			e.innerText = id_res;
		else console.log(self.prefix+'OrganFunction_id_value not found');
		var constitutionHash_res = self.instance.constitutionHash();
		var e = document.getElementById(self.prefix+'OrganFunction_constitutionHash_value');
		if(constitutionHash_res!=null && e!=null)
			e.innerText = constitutionHash_res;
		else console.log(self.prefix+'OrganFunction_constitutionHash_value not found');
		var lastMemberChanged_res = self.instance.lastMemberChanged();
		var e = document.getElementById(self.prefix+'OrganFunction_lastMemberChanged_value');
		if(lastMemberChanged_res!=null && e!=null)
			e.innerText = lastMemberChanged_res;
		else console.log(self.prefix+'OrganFunction_lastMemberChanged_value not found');
		var lastConstitutionHashChanged_res = self.instance.lastConstitutionHashChanged();
		var e = document.getElementById(self.prefix+'OrganFunction_lastConstitutionHashChanged_value');
		if(lastConstitutionHashChanged_res!=null && e!=null)
			e.innerText = lastConstitutionHashChanged_res;
		else console.log(self.prefix+'OrganFunction_lastConstitutionHashChanged_value not found');
		var publisher_res = self.instance.publisher();
		var e = document.getElementById(self.prefix+'OrganFunction_publisher_value');
		if(publisher_res!=null && e!=null)
			e.innerText = publisher_res;
		else console.log(self.prefix+'OrganFunction_publisher_value not found');
		var e = document.getElementById(self.prefix+'OrganFunction_contract_attribute_managers_input');
		if(e!=null){
			var _key = e.value;
			if(_key!='') {
			var managers_res = self.instance.managers(_key);
			if(managers_res!=null){
				var e1 = document.getElementById(self.prefix+'OrganFunction_managers_value');
				if(e1!=null)	
					e1.innerText = managers_res;
			}}}
	}

	//call functions
	
	/**
	* Calls the contract function OrganFunction_canAccess.
	*
	**/
	this.Manageable_canAccess=function() {
		var res = self.instance.canAccess();
		var e = document.getElementById(self.prefix+'Manageable_canAccess_res');
		if(res!=null && e!=null)
			e.innerText = res;
	}
	
	/**
	* Calls the contract function OrganFunction_addManager.
	*
	* this.prefix+'Manageable_addManager_address__newManagerAddress' -
	**/
	this.Manageable_addManager_address=function() {
		var e = document.getElementById(self.prefix+'Manageable_addManager_address__newManagerAddress');
		if(e!=null)
			var param__newManagerAddress = e.value;
		else console.log(self.prefix+'Manageable_addManager_address__newManagerAddress not found');
		var res = self.instance.addManager(param__newManagerAddress);
	}
	
	/**
	* Calls the contract function OrganFunction_getFunctioName.
	*
	**/
	this.OrganFunction_getFunctioName=function() {
		var res = self.instance.getFunctioName();
		var e = document.getElementById(self.prefix+'OrganFunction_getFunctioName_res');
		if(res!=null && e!=null)
			e.innerText = res;
	}
	
	/**
	* Calls the contract function OrganFunction_removeManager.
	*
	* this.prefix+'Manageable_removeManager_address__managerAddress' -
	**/
	this.Manageable_removeManager_address=function() {
		var e = document.getElementById(self.prefix+'Manageable_removeManager_address__managerAddress');
		if(e!=null)
			var param__managerAddress = e.value;
		else console.log(self.prefix+'Manageable_removeManager_address__managerAddress not found');
		var res = self.instance.removeManager(param__managerAddress);
	}
	
	/**
	* Calls the contract function OrganFunction_isManager.
	*
	* this.prefix+'Manageable_isManager_address__managerAddress' -
	**/
	this.Manageable_isManager_address=function() {
		var e = document.getElementById(self.prefix+'Manageable_isManager_address__managerAddress');
		if(e!=null)
			var param__managerAddress = e.value;
		else console.log(self.prefix+'Manageable_isManager_address__managerAddress not found');
		var res = self.instance.isManager(param__managerAddress);
		var e = document.getElementById(self.prefix+'Manageable_isManager_address_res');
		if(res!=null && e!=null)
			e.innerText = res;
	}
	
	/**
	* Calls the contract function OrganFunction_publishMessage.
	*
	* this.prefix+'MessagePublisher_publishMessage_string_string_string_message' -
	* this.prefix+'MessagePublisher_publishMessage_string_string_string_hash' -
	* this.prefix+'MessagePublisher_publishMessage_string_string_string_er' -
	**/
	this.MessagePublisher_publishMessage_string_string_string=function() {
		var e = document.getElementById(self.prefix+'MessagePublisher_publishMessage_string_string_string_message');
		if(e!=null)
			var param_message = e.value;
		else console.log(self.prefix+'MessagePublisher_publishMessage_string_string_string_message not found');
		var e = document.getElementById(self.prefix+'MessagePublisher_publishMessage_string_string_string_hash');
		if(e!=null)
			var param_hash = e.value;
		else console.log(self.prefix+'MessagePublisher_publishMessage_string_string_string_hash not found');
		var e = document.getElementById(self.prefix+'MessagePublisher_publishMessage_string_string_string_er');
		if(e!=null)
			var param_er = e.value;
		else console.log(self.prefix+'MessagePublisher_publishMessage_string_string_string_er not found');
		var res = self.instance.publishMessage(param_message, param_hash, param_er);
	}
	
//delegated calls
}// end controller	

/**
* class as GlueCode OrganFunctionManager,
* uses prefix + 'GuiContainer' as target element.
* It combines a OrganFunctionController as 'c' and a OrganFunctionGuiFactory as 'g'.
**/
function OrganFunctionManager(prefix,contract,containerId) {
	this.prefix = prefix;
	var self = this;
	this.c = new OrganFunctionController();
	this.c.prefix=prefix;
	this.c.instance=contract;
	this.c.contractAddress = contract.address;
	this.g = new OrganFunctionGuiFactory();
	this.g.prefix = prefix;
	this.containerId = containerId;
	this.eventlogPrefix = '';
	this.guiFunction = null;
	
	/**
	* adds the gui element to the given 'e' element
	**/
	this.addGui = function(e) {
		if(e==null)
			e = document.getElementById(this.containerId);
		if(e==null){
		console.log(this.containerId+' not found or :'+e);
		return;
		}
		var elemDiv = document.createElement('div');
		elemDiv.id= this.prefix +'OrganFunction_gui';
		e.appendChild(elemDiv);
		if(this.guiFunction==null)
			elemDiv.innerHTML = this.createGui(this.g);
		else elemDiv.innerHTML = this.guiFunction(this.g);
		
		var e = document.getElementById(this.prefix+'OrganFunction_address');
		if(e!=null)
			e.value = this.c.contractAddress;
		else 
			console.log(this.prefix+'OrganFunction_address not found');
		this.c.bindGui();
	}	
	
	/**
	* clears the given element 'e'.
	**/
	this.clearGui = function(e){
		if(e==null)
			e = document.getElementById(this.containerId);
		e.innerHTML ='';
	}

	/**
	* Create the gui with the given 'guiFactory'. Places an sceleton arount it.
	* @return the gui txt used as innerHTML
	**/
	this.createGui = function(guifactory){
		var txt ='';
//Start of user code OrganFunction_create_gui_js
		txt = txt + guifactory.createDefaultGui();
		// End of user code
		return guifactory.createSeletonGui(txt);

	}

	/**
	* Create a small gui, only the attributes. Places an sceleton arount it.
	**/	
	this.createSmallGui = function(guifactory){
		var txt ='';
		txt = txt + guifactory.createAttributesGui();
		return guifactory.createSeletonGui(txt);

	}

	/**
	* Update the attributes.
	**/
	this.updateGui = function(){
		this.c._updateAttributes();
	}

	/**
	* Getter for the contract 'OrganFunction' instance.
	**/
	this.getContract = function(){
		return this.c.instance;
	}

	/**
	* Watch for the contract events.
	* The events are stored in an element with the id this.eventlogPrefix+'eventLog'.
	**/
	this.watchEvents=function(){
	}

}// end of manager

/**
* Manages a list of OrganFunctionManager uses the guid id to place the gui which is also the eventlogPrefix
*/
function OrganFunctionGuiMananger(guiId){
	this.prefix = guiId;
	this.managers=new Array();	//[];		
	this.guiFunction = null;
	this.managerMap = {};
	
	/**
	* Add a contract to this manager.
	* @contract the web3 contract instance
	*/
	this.addManager = function(contract) {
		var m = new OrganFunctionManager(contract.address,contract,this.prefix);
		m.eventlogPrefix = this.prefix;
		m.watchEvents();
		if(this.guiFunction!=null)
			m.guiFunction = this.guiFunction;
		this.managers.push(m);
		this.managerMap[contract.address] = m;
	}

	/**
	 * Changes the gui function for all managers.
	 */
	this.changeGuiFunction =  function(guiFunction){
		for (i in this.managers) {
			var manager = this.managers[i] ;
			manager.guiFunction = guiFunction;
		}
	}
	
	/**
	* Clears the element or the element with id 'prefix'.
	* @e an element
	*/
	this.clearGui = function(e){
		if(e==null)
			e = document.getElementById(this.prefix);
		if(e!==undefined)
			e.innerHTML ='';
	}
		
	/**
	* Displays all guis of the managed contracts.
	* @e an element
	*/
	this.displayGui = function(e){
		if(e==null)
			e = document.getElementById(this.prefix);
		if(e==undefined) return;
		for (i in this.managers) {
			var manager = this.managers[i] ;
			var elemDiv = document.createElement('div');
			elemDiv.id= manager.prefix + 'GuiContainer';//'OrganFunction_gui';
			e.appendChild(elemDiv);
			if(this.guiFunction==null)
				elemDiv.innerHTML = manager.createGui(manager.g);
			else elemDiv.innerHTML = this.guiFunction(manager.g);
			manager.c.bindGui();
		}
	}
	/**
	* Displays a simple gui.
	*/
	this.displaySimpleGui = function(){
		for (i in this.managers) {
			var manager = this.managers[i] ;
			manager.addGui(null);
		}
	}
	/**
	* Update the gui.
	*/
	this.updateGui = function(){
		for (i in this.managers) {
			this.managers[i].updateGui();
		}
//		console.log('update');
	}
}// end of gui mananger

/**
* Deploys the contract.
* Each constructor is available.
**/
function OrganFunctionDeployment(guiId){
	this.prefix = guiId;
//Start of user code OrganFunction_deployment_attributes_js
	// TODO: implement
	// End of user code


	/**
	* Construct OrganFunction.
	**/
	this.deployOrganFunction_OrganFunction_string_string = function(account, code, providedGas, _name, _ch){
//		var c = OrganFunction.new( _name, _ch,{
//			from: account,
//			data: code,
//			gas:  providedGas
//		});
		return c;
	}
	
	/**
	* The default deployer function.
	**/
	this.deployDefault = function(){
		//Start of user code OrganFunction_deployDefault
		// TODO: implement
		// End of user code
	}

//Start of user code OrganFunction_deployment_js
	// TODO: implement
	// End of user code
}

/**
* A class to manage a single page dapp.
* The PartyPage object uses the managers to display the gui.
**/
function PartyPage(prefix) {
	this.prefix=prefix;
	//Start of user code page_party_attributes
	this.party = new KUEKeNPartyGuiMananger(prefix);
	this.organ = new OrganGuiMananger(prefix);
	this.organfunction = new OrganFunctionGuiMananger(prefix);

	// End of user code

	
	/**
	* Places the default gui in the page.
	**/
	this.placeDefaultGui=function() {
	this.createDefaultGui();
	}
/**
* Create the default Gui.
* Use this method to customize the gui.
**/
this.createDefaultGui=function() {
	//Start of user code page_Party_create_default_gui_functions
		this.party.displaySimpleGui();
		this.party.updateGui();
		this.organ.displaySimpleGui();
		this.organ.updateGui();
		this.organfunction.displaySimpleGui();
		this.organfunction.updateGui();

		// this.blog.createDefaultGui();
		// End of user code
}
	//Start of user code page_Party_functions
	this.bootstrap = function(kp) {
		this.party.addManager(kp);
		this.pm = new KUEKeNPartyModel(kp);
		var m = this.pm.getOrganCount();
		for (i = 0; i < m; i++) {
			var o = OrganContract.at(kp.organs(i));
			this.organ.addManager(o);
			// var om = new OrganModel(o);
			// var ofc = om.getLastFunctionId();
			// console.log('....'+ofc);
			// for (var int = 0; int < ofc; int++) {
			// var oof1 = OrganFunctionContract.at(om.getOrganFunction(int));
			// console.log('....'+oof1+'#'+om.getOrganFunction(int));
			// this.organfunction.addManager(oof1);
			//			
			// }
		}
	}

	// End of user code

}// end of PartyPage

//Start of user code Party_custom_functions
var deployer = new KUEKeNPartyDeployment("test");

function setInnerHtml(txt,_id){
	var e = document.getElementById(_id);
	if(e!==undefined && e!==null){
		var elemDiv = document.createElement('div');
		elemDiv.innerHTML = txt;
		e.appendChild(elemDiv);
	} else
		console.log('element with id not found:'+_id);}
	
function replaceInnerHtml(txt,_id){
	var e = document.getElementById(_id);
	if(e!==undefined && e!==null){
		e.innerHTML = txt;
	} else
		console.log('element with id not found:'+_id);}
	

function CustomGuis() {
	this.shBlogGuiSimple=function(guiF){
		var txt = '';//guiF.createAttributesGui();
		txt = txt 
		+		'		    <div class="contract_attribute" > '
		+		'		      <h6 class="contract_attribute_value" id="'+guiF.prefix+'ShortBlog_name_value"> </h6>'
		+		'		      message <span class="contract_attribute_value" id="'+guiF.prefix+'ShortBlog_messageCount_value"> </span>'
		+		'		      last message <span class="contract_attribute_value" id="'+guiF.prefix+'ShortBlog_lastMessageDate_value"> </span>'
		+		'		    </div>'
		;
		
		txt = txt + '<div id="'+guiF.prefix+'-blogs-event" ></div>';
		return guiF.createSeletonGui(txt);
	}
	this.organFGuiSimple=function(guiF){
		var txt = guiF.createAttributesGui();
		txt = txt + '<div id="'+guiF.prefix+'-Blog" ></div>';
		return guiF.createSeletonGui(txt);
	}
	this.organFGuiSimple1=function(guiF){
		var txt = 
					'		    <div class="contract_attribute" id="'+guiF.prefix+'OrganFunction_contract_attribute_functionName">'
			+		'		      <h4 class="contract_attribute_value" id="'+guiF.prefix+'OrganFunction_functionName_value"> </h4>'
			+		'		    </div>'
			+'    <div class="contract_attribute" > currentMember:'
			+		'		      <span class="contract_attribute_value" id="'+guiF.prefix+'OrganFunction_currentMember_value"> </span>'
			+		'		     changed <span class="contract_attribute_value" id="'+guiF.prefix+'OrganFunction_lastMemberChanged_value"> </span>'
			+		'		     the id <span class="contract_attribute_value" id="'+guiF.prefix+'OrganFunction_id_value"> </span>'
			+		'		    </div>'
			+		'		    <div class="contract_attribute" > constitutionHash:'
			+		'		      <span class="contract_attribute_value" id="'+guiF.prefix+'OrganFunction_constitutionHash_value"> </span>'
			+		'		     last changed : <span class="contract_attribute_value" id="'+guiF.prefix+'OrganFunction_lastConstitutionHashChanged_value"> </span>'
			+		'		    </div>'
			+		'		    <div class="contract_attribute" id="'+guiF.prefix+'OrganFunction_contract_attribute_publisher"> blog address:'
			+		'		      <span class="contract_attribute_value" id="'+guiF.prefix+'OrganFunction_publisher_value"> </span>'
			+		'		    </div>'
			+		'		'
			;

		txt = txt + '<div id="'+guiF.prefix+'-Blog" ></div>';
		return guiF.createSeletonGui(txt);
	}
	
	this.organGuiSimple=function(guiF){
		var txt = guiF.createAttributesGui()
					+guiF.createOrgan_publishMessage_string_string_stringGui();
		txt = txt + '<div id="'+guiF.prefix+'-Blog" ></div>';
		txt = txt + '<div id="'+guiF.prefix+'-OF" ></div>';
		txt =txt		+ '<div><a href="#" onclick="mode(\''+guiF.prefix+'\',\'ro\')"> readonly </a><a href="#" onclick="mode(\''+guiF.prefix+'\',\'manager\')"> manager </a> <div>'
		return guiF.createSeletonGui(txt);
	}
	
	
	
	this.organGui=function(guiF){
		var txt = guiF.createAttributesGui()
					+guiF.createOrgan_publishMessage_string_string_stringGui()
					+ guiF.createManageable_addManager_addressGui()
				+ guiF.createManageable_removeManager_addressGui()
				+ guiF.createManageable_isManager_addressGui()
				+ guiF.createOrgan_createFunction_string_stringGui()
				+ guiF.createOrgan_addOrganFunction_address_stringGui()
				+ guiF.createOrgan_changeMember_uint_addressGui()
				;
		txt = txt + '<div id="'+guiF.prefix+'-Blog" ></div>';
		txt = txt + '<div id="'+guiF.prefix+'-OF" ></div>';
		txt =txt		+ '<div><a href="#" onclick="mode(\''+guiF.prefix+'\',\'ro\')"> readonly </a><a href="#" onclick="mode(\''+guiF.prefix+'\',\'manager\')"> manager </a> <div>'
		return guiF.createSeletonGui(txt);
	}
	this.conferenceGuiSimple=function(guiF){
		var txt = ''
			+		'		    <h4 class="contract_attribute" id="'+guiF.prefix+'Conference_contract_attribute_organName">'
			+		'		      <span class="contract_attribute_value" id="'+guiF.prefix+'Conference_organName_value"> </span>'
			+		'		    </h4>'
		+		'		    <div class="contract_attribute" id="'+guiF.prefix+'Conference_contract_attribute_accreditatedMembers"> accreditatedMembers:'
		+		'		      <span class="contract_attribute_value" id="'+guiF.prefix+'Conference_accreditatedMembers_value"> </span>'
		+		'		     at <span class="contract_attribute_value" id="'+guiF.prefix+'Conference_date_value"> </span>'
		+		'		     active <span class="contract_attribute_value" id="'+guiF.prefix+'Conference_isActive_value"> </span>'
		+		'		    </div>'
		+		'		    <div class="contract_attribute" id="'+guiF.prefix+'Conference_contract_attribute_lastFunctionId"> lastFunctionId:'
		+		'		      <span class="contract_attribute_value" id="'+guiF.prefix+'Conference_lastFunctionId_value"> </span>'
		+		'		    </div>'
		+		'		    <div class="contract_attribute" id="'+guiF.prefix+'Conference_contract_attribute_mangerCount"> mangerCount:'
		+		'		      <span class="contract_attribute_value" id="'+guiF.prefix+'Conference_mangerCount_value"> </span>'
		+		'		    </div>'
		+		'		    <div class="contract_attribute" id="'+guiF.prefix+'Conference_contract_attribute_ballotCount"> ballotCount:'
		+		'		      <span class="contract_attribute_value" id="'+guiF.prefix+'Conference_ballotCount_value"> </span>'
		+		'		    </div>'
		+'    <div class="contract_attribute" id="'+guiF.prefix+'Conference_contract_attribute_memberRegistry"> memberRegistry:'
		+		'		      <span class="contract_attribute_value" id="'+guiF.prefix+'Conference_memberRegistry_value"> </span>'
		+		'		    </div>'
		+		'		';
		txt = txt + '<div id="'+guiF.prefix+'-Blog" ></div>';
		txt = txt + '<div id="'+guiF.prefix+'-OF" ></div>';
		return guiF.createSeletonGui(txt);
	}
	
	this.createPartyGui=function(guiF){
		var txt= guiF.createAttributesGui()
				+ guiF.createManageable_addManager_addressGui()
				+ guiF.createManageable_removeManager_addressGui()
				+ guiF.createManageable_isManager_addressGui()
				+ guiF.createParty_addOrgan_addressGui()
				+ guiF.createParty_createOrgan_stringGui()
				+ '<div><a href="#" onclick="mode(\''+guiF.prefix+'\',\'ro\')"> readonly </a><a href="#" onclick="mode(\''+guiF.prefix+'\',\'manager\')"> manager </a> <div>'
				;
		return guiF.createSeletonGui(txt);
	}

	this.partyGuiSimple=function(guiF){
		var txt = guiF.createAttributesGui()
					;//+guiF.createOrgan_publishMessage_string_string_stringGui();
		txt=txt 
		+ '<div><a href="#" onclick="mode(\''+guiF.prefix+'\',\'ro\')"> readonly </a><a href="#" onclick="mode(\''+guiF.prefix+'\',\'manager\')"> manager </a> <div>';
		return guiF.createSeletonGui(txt);
	}

	this.modeSwitchElement=function(guiF){
		var txt = '<div><a href="#" onclick="mode(\''+guiF.prefix+'\',\'ro\')"> readonly </a><a href="#" onclick="mode(\''+guiF.prefix+'\',\'manager\')"> manager </a> <div>';
		return txt;
	}

	
	//event guis
	this.createNewMessageLogDataGui = function(prefix, blockHash, blockNumber
			,message	,messageId	,messageSender	,messageHashValue	,externalResource	) {
				return '<div class="eventRow">'
				+'<div class="eventValue">message '+messageId+'</div>'
				+'<div class="eventValue"> send by '+messageSender+'</div>'
				 +' </div>'
				 +'<div class="eventRow">'
		        +'<div class="eventValue">'+message+'</div>'
		        +' </div>'
		        +'<div class="eventRow">'
		        +'<div class="eventValue">hash '+messageHashValue+'</div>'
		        +'<div class="eventValue"> external resource '+externalResource+'</div>'
		        +' </div>';
			}

	
	this.eventNewMessageHandle=function(result){
//
//		console.log('New Message'+result);
//		for ( var m in result) {
//			console.log('-->'+m.toString()+':'+result[m])
//		}
//		for ( var m in result.args) {
//			console.log('args-->'+m.toString()+':'+result.args[m])
//		}
		var guiF = new ShortBlogGuiFactory();
		var txt = customGui.createNewMessageLogDataGui(result.address, result.blockhash, result.blockNumber, 
				result.args.message, result.args.messageId, result.args.messageSender, result.args.messageHashValue, result.args.externalResource);
		txt = guiF.createSeletonGui(txt);
		setInnerHtml(txt, result.address+'-blogs-event');
	}
 }//end of custom gui



var customGui = new CustomGuis();
var guis = {};

function OrganGui(contract) {
	this.prefix = contract.address;
	this.organManager = new OrganManager(contract.address,contract,"Organ");
	this.blog = new ShortBlogManager(contract.getOrganBlog(),ShortBlogContract.at(contract.getOrganBlog()),contract.address+"-Blog");
	this.functions = {};
	guis[contract.address] = this;
	
	this.organManager.guiFunction = customGui.organGuiSimple;
	this.blog.guiFunction = customGui.shBlogGuiSimple;
	
//	this.organFGuiSimple=function(guiF){
//		var txt = guiF.createAttributesGui();
//		txt = txt + '<div id="'+guiF.prefix+'-OF-Blog" ></div>';
//		txt = txt + '<div id="'+contract.address+'-OF" ></div>';
//		return guiF.createSeletonGui(txt);
//	}
	//register for all events at first
//	this.registerAllEvents=function(contract){
//		console.log('register all events for:'+contract.address);
//		var event = contract.allEvents({}, {fromBlock: 0, toBlock: 'latest'})
//
//		event.watch(function (err, result) {
//		  if (err) console.log('error:'+err)
//		  
//		  for ( var m in result) {
//			  console.log(contract.address+'-->'+m.toString()+':'+result[m])
//			
//		}
//		});
//	}
	
	this.switchMode = function(mode) {
		if(mode='manager'){
			this.organManager.guiFunction = customGui.organGui;
		}else{
			this.organManager.guiFunction = customGui.organGuiSimple;
		}
		this.organManager.clearGui(null);
		this.createDefaultGui();
	}

	
	this.bootstrap = function(organ) {
		var ofc = organ.lastFunctionId(); //om.getLastFunctionId();
		for (var j = 0; j < ofc; j++) {
			var oof1 = OrganFunctionContract.at(organ.getOrganFunction(j));
			this.functions[oof1.address] = new OF(this.prefix,oof1);
			this.functions[oof1.address].guiFunction = this.organFGuiSimple;
		}
		this.blog.eventNewMessage = customGui.eventNewMessageHandle;
		this.organManager.watchEvents();
		this.blog.watchEvents();
		
//		this.registerAllEvents(this.blog.c.instance);
	}

	this.createDefaultGui = function() {
		this.organManager.addGui(null);
		this.blog.addGui(null)
		this.organManager.updateGui();
		this.blog.updateGui();
		for ( var f in this.functions) {
			this.functions[f].createDefaultGui();
		}
	}

	this.bootstrap(contract);
}//end of OrganGui

function OF(ofprefix,contract) {
	this.prefix = contract.address;
	this.organfunction = new OrganFunctionManager(contract.address,contract,ofprefix+"-OF");
	this.blog = new ShortBlogManager(contract.publisher(),ShortBlogContract.at(contract.publisher()),contract.address+"-Blog");
	
	guis[contract.address] = this;

	this.blog.eventNewMessage = customGui.eventNewMessageHandle;
	this.organfunction.watchEvents();
	this.blog.watchEvents();
	
	
	//gui functions
//	this.organFGuiSimple=function(guiF){
//		var txt = guiF.createAttributesGui();
//		txt = txt + '<div id="'+guiF.prefix+'-OF-Blog" ></div>';
//		return guiF.createSeletonGui(txt);
//	}
	this.organfunction.guiFunction = customGui.organFGuiSimple1;
	this.blog.guiFunction = customGui.shBlogGuiSimple;
	
	this.createDefaultGui = function() {
		this.organfunction.addGui(null);
		this.blog.addGui(null);
		this.organfunction.updateGui();
		this.blog.updateGui();
	}
}// end of OF



function KP() {
	this.party = new KUEKeNPartyGuiMananger("KP");
	this.organ = new OrganGuiMananger("Organ");
	this.organfunction = new OrganFunctionGuiMananger("OF");
	this.registry = new BlogRegistryGuiMananger("BlogRegistry-Gui");
	this.blogs = new ShortBlogGuiMananger("Blog");
	this.of = {};
	this.organs = {};
	var self = this;

	this.switchMode = function(mode) {
		console.log('switch to mode:'+mode);
		if(mode=='manager'){
			this.party.guiFunction = customGui.createPartyGui;
		}else{
			this.party.guiFunction = customGui.partyGuiSimple;
		}
		this.party.clearGui(null);
		this.party.displayGui(null);
		this.party.updateGui();
	}
	
	this.bootstrap = function(kp,br) {
//		this.registerAllEvents(br);
		this.registry.addManager(br);
		guis[kp.address] = this;

		
		this.party.addManager(kp);
//		this.registerAllEvents(kp);
		var m = kp.organCount();
		for (i = 0; i < m; i++) {
			var oa = kp.organs(i);
			var o = OrganContract.at(oa);
			var o1 = new OrganGui(o);
			this.organs[oa] = o1;
			
//			this.registerAllEvents(o);
//			this.organ.addManager(o);
//			var sb = ShortBlogContract.at(o.getOrganBlog());
//			this.blogs.addManager(sb);
//
//			var om = new OrganModel(o);
//			var ofc = o.lastFunctionId(); //om.getLastFunctionId();
//			for (var j = 0; j < ofc; j++) {
//				var oof1 = OrganFunctionContract.at(o.getOrganFunction(j));
//				//this.organfunction.addManager(oof1);
//				//this.blogs.addManager(ShortBlogContract.at(oof1.publisher()));
//				this.of[oof1.address] = new OF(oof1);
//			}
		}
	}

	this.party.guiFunction = customGui.partyGuiSimple;

	
	//event handlers
//	this.eventNewMessageHandle=function(result){
//		console.log('New Message');
//		var guiF = new ShortBlogGuiFactory();
//		var txt = guiF.createNewMessageLogDataGui("", "", "", result.args.message, result.args.messageId, result.args.messageSender, result.args.messageHashValue, result.args.externalResource);
//		txt = guiF.createSeletonGui(txt);
//		setInnerHtml(txt, result.address+'-blogs-event');
//	}
//	this.blogs.eventNewMessage = this.eventNewMessageHandle;
//	
//	this.eventNewBlogHandle=function(result){
//		console.log('add a new blog:'+result);
//		var bAddress = result.args.blogAddress;
////		self.blogs.addManager(ShortBlogContract.at(bAddress));
//		var guiF = new BlogRegistryGuiFactory();
//		var txt = guiF.createNewBlogLogDataGui("", "", "", result.args.index, result.args.name, result.args.blogAddress);
//		txt = guiF.createSeletonGui(txt);
//		setInnerHtml(txt, 'blogs-event');
//	}
//	this.registry.eventNewBlog = this.eventNewBlogHandle;

	//GUI functions
//	this.organGuiSimple=function(guiF){
//		var txt = guiF.createAttributesGui()
//					+guiF.createOrgan_publishMessage_string_string_stringGui();
//		return guiF.createSeletonGui(txt);
//	}
//	this.organ.guiFunction = this.organGuiSimple;
//	
//	this.organFGuiSimple=function(guiF){
//		var txt = guiF.createAttributesGui();
//		return guiF.createSeletonGui(txt);
//	}
//	this.organfunction.guiFunction = this.organFGuiSimple;
//
//	this.partyGuiSimple=function(guiF){
//		var txt = guiF.createAttributesGui()
//					;//+guiF.createOrgan_publishMessage_string_string_stringGui();
//		txt=txt + '<div><a href="#" onclick="mode(\''+guiF.prefix+'\',\'ro\')"> readonly </a><a href="#" onclick="mode(\'manager\')"> manager </a> <div>';
//		return guiF.createSeletonGui(txt);
//	}
//	this.partyGuiSimple=function(guiF){
//		var txt = guiF.createAttributesGui()
//					;//+guiF.createOrgan_publishMessage_string_string_stringGui();
//		txt=txt + '<div><a href="#" onclick="mode(\''+guiF.prefix+'\',\'ro\')"> readonly </a><a href="#" onclick="mode(\'manager\')"> manager </a> <div>';
//		return guiF.createSeletonGui(txt);
//	}
	
	
//
//	this.shBlogGuiSimple=function(guiF){
//		var txt = '';//guiF.createAttributesGui();
//		txt = txt 
//		+		'		    <div class="contract_attribute" id="'+guiF.prefix+'ShortBlog_contract_attribute_name"> name:'
//		+		'		      <span class="contract_attribute_value" id="'+guiF.prefix+'ShortBlog_name_value"> </span>'
//		+		'		    </div>'
//		+'    <div class="contract_attribute" id="'+guiF.prefix+'ShortBlog_contract_attribute_messageCount"> messages '
//		+		'		      <span class="contract_attribute_value" id="'+guiF.prefix+'ShortBlog_messageCount_value"> </span>'
//		+		'		    </div>'
//		+		'		    <div class="contract_attribute" id="'+guiF.prefix+'ShortBlog_contract_attribute_lastMessageDate"> lastMessageDate:'
//		+		'		      <span class="contract_attribute_value" id="'+guiF.prefix+'ShortBlog_lastMessageDate_value"> </span>'
//		+		'		    </div>'
//		;
//		
//		txt = txt + '<div id="'+guiF.prefix+'-blogs-event" ></div>';
//		return guiF.createSeletonGui(txt);
//	}
//	this.blogs.guiFunction = this.shBlogGuiSimple;

	
	
	
	//createStruc_ShortBlog_contract_attribute_messagesGui
	
	this.createDefaultGui = function() {
		this.party.displaySimpleGui();
		this.party.updateGui();
//		this.organ.displaySimpleGui();
//		this.organ.updateGui();
//		this.organfunction.displaySimpleGui();
//		this.organfunction.updateGui();
//		this.blogs.displaySimpleGui();
//		this.blogs.updateGui();
		this.registry.displaySimpleGui();
		this.registry.updateGui();
		
		for ( var o in this.organs) {
			this.organs[o].createDefaultGui();
		}

		
//		for ( var w in this.of) {
//			console.log('def gui:'+w);
//			this.of[w].createDefaultGui();
//		}
	}

	//register for all events at first
	this.registerAllEvents=function(contract){
		console.log('register all events for:'+contract.address);
		var event = contract.allEvents({}, {fromBlock: 0, toBlock: 'latest'})

		event.watch(function (err, result) {
		  if (err) console.log('error:'+err)
		  
		  for ( var m in result) {
			  console.log(contract.address+'-->'+m.toString()+':'+result[m])
			
		}
		});
		
	}
	
	/**
	* Watch for the contract events.
	* The events are stored in an element with the id this.eventlogPrefix+'eventLog'.
	**/
	this.watchNewMessageEvents=function(contract){
	var event_NewMessage = contract.NewMessage({},{fromBlock: 0, toBlock: 'latest'});
	event_NewMessage.watch(function(error,result){
	if(!error){
		  for ( var m in result) {
			  console.log('NewMessage-->'+m.toString()+':'+result[m])
			
		}
		  var guiF = new ShortBlogGuiFactory();
		  var txt = guiF.createNewMessageLogDataGui("", "", "", result.args.message, result.args.messageId, result.args.messageSender, result.args.messageHashValue, result.args.externalResource);
		  txt = guiF.createSeletonGui(txt);
			setInnerHtml(txt, 'blogs-event');
		}else
			console.log(error);	
	});
	}	
}// end of KP


//End of user code
