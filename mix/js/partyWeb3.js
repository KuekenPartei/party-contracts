
var OrganContract = web3.eth.contract([
{"constant":true,"inputs":[],"name":"memberRegistry","outputs":[{"name":"","type":"address"}],"type":"function"},
{"constant":true,"inputs":[],"name":"mangerCount","outputs":[{"name":"","type":"uint"}],"type":"function"},
{"constant":true,"inputs":[],"name":"organName","outputs":[{"name":"","type":"string"}],"type":"function"},
{"constant":true,"inputs":[],"name":"lastFunctionId","outputs":[{"name":"","type":"uint"}],"type":"function"},
{"constant":true,"inputs":[],"name":"blogRegistry","outputs":[{"name":"","type":"address"}],"type":"function"},
{"constant":true,"inputs":[],"name":"isActive","outputs":[{"name":"","type":"bool"}],"type":"function"},
{"constant":true,"inputs":[],"name":"ballotCount","outputs":[{"name":"","type":"uint"}],"type":"function"},
{"constant": true,"inputs": [{"name": "","type": "uint"}],"name": "organFunctions","outputs": [
{ "name": "currentMember", "type": "address"}
,{ "name": "functionName", "type": "string"}
,{ "name": "id", "type": "uint"}
,{ "name": "constitutionHash", "type": "string"}
,{ "name": "lastMemberChanged", "type": "uint"}
,{ "name": "lastConstitutionHashChanged", "type": "uint"}
,{ "name": "publisher", "type": "address"}
],"type": "function"	},
//

{"constant": true,"inputs": [{"name": "","type": "address"}],"name": "managers","outputs": [
{ "name": "", "type": "bool"}
],"type": "function"	},
//

{"constant": true,"inputs": [{"name": "","type": "uint"}],"name": "ballots","outputs": [
{ "name": "", "type": "address"}
],"type": "function"	},
  {
    "constant": false,
    "inputs": [{"name": "_id","type": "uint"},{"name": "_address","type": "address"}],    
    "name": "changeMember",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [{"name": "_newManagerAddress","type": "address"}],    
    "name": "addManager",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [{"name": "_functionName","type": "string"},{"name": "_constittiutionHash","type": "string"}],    
    "name": "createFunction",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [{"name": "_managerAddress","type": "address"}],    
    "name": "removeManager",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [],    
    "name": "initalizeOrgan",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [{"name": "_managerAddress","type": "address"}],    
    "name": "isManager",
    "outputs": [{"name": "","type": "bool"}],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [{"name": "id","type": "uint"},{"name": "message","type": "string"},{"name": "hash","type": "string"},{"name": "er","type": "string"}],    
    "name": "publishFunctionMessage",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [{"name": "name","type": "string"},{"name": "proposalNames","type": "bytes32"}],    
    "name": "createBallot",
    "outputs": [{"name": "","type": "uint"}],
    "type": "function"
  }
,  {
    "constant": true,
    "inputs": [{"name": "id","type": "uint"}],    
    "name": "getFunctionBlogAddress",
    "outputs": [{"name": "","type": "address"}],
    "type": "function"
  }
,  {
    "constant": true,
    "inputs": [],    
    "name": "getLastBallot",
    "outputs": [{"name": "","type": "address"}],
    "type": "function"
  }
,  {
    "constant": true,
    "inputs": [],    
    "name": "getOrganBlog",
    "outputs": [{"name": "","type": "address"}],
    "type": "function"
  }
 ,
  { "constant": true,
    "inputs": [{"name": "oldMember","type": "address"},{"name": "functionId","type": "uint"},{"name": "newMember","type": "address"}],    
    "name": "FunctionMemberChange",
    "type": "event"  }
] );   

var PartyContract = web3.eth.contract([
{"constant":true,"inputs":[],"name":"mangerCount","outputs":[{"name":"","type":"uint"}],"type":"function"},
{"constant":true,"inputs":[],"name":"constitutionHash","outputs":[{"name":"","type":"string"}],"type":"function"},
{"constant":true,"inputs":[],"name":"organCount","outputs":[{"name":"","type":"uint"}],"type":"function"},
{"constant":true,"inputs":[],"name":"blogregistry","outputs":[{"name":"","type":"address"}],"type":"function"},
{"constant": true,"inputs": [{"name": "","type": "address"}],"name": "managers","outputs": [
{ "name": "", "type": "bool"}
],"type": "function"	},
//

{"constant": true,"inputs": [{"name": "","type": "uint"}],"name": "organs","outputs": [
{ "name": "", "type": "address"}
],"type": "function"	},
  {
    "constant": false,
    "inputs": [],    
    "name": "Party",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [{"name": "_newManagerAddress","type": "address"}],    
    "name": "addManager",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [{"name": "organName","type": "string"}],    
    "name": "createOrgan",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [{"name": "_managerAddress","type": "address"}],    
    "name": "removeManager",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [{"name": "_managerAddress","type": "address"}],    
    "name": "isManager",
    "outputs": [{"name": "","type": "bool"}],
    "type": "function"
  }
 ,
  { "constant": true,
    "inputs": [],    
    "name": "ConstiutionChange",
    "type": "event"  }
] );   

var KUEKeNPartyContract = web3.eth.contract([
{"constant":true,"inputs":[],"name":"mangerCount","outputs":[{"name":"","type":"uint"}],"type":"function"},
{"constant":true,"inputs":[],"name":"constitutionHash","outputs":[{"name":"","type":"string"}],"type":"function"},
{"constant":true,"inputs":[],"name":"organCount","outputs":[{"name":"","type":"uint"}],"type":"function"},
{"constant":true,"inputs":[],"name":"blogregistry","outputs":[{"name":"","type":"address"}],"type":"function"},
{"constant": true,"inputs": [{"name": "","type": "address"}],"name": "managers","outputs": [
{ "name": "", "type": "bool"}
],"type": "function"	},
//

{"constant": true,"inputs": [{"name": "","type": "uint"}],"name": "organs","outputs": [
{ "name": "", "type": "address"}
],"type": "function"	},
  {
    "constant": false,
    "inputs": [],    
    "name": "KUEKeNParty",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [],    
    "name": "Party",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [{"name": "_newManagerAddress","type": "address"}],    
    "name": "addManager",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [{"name": "fc","type": "address"},{"name": "br","type": "address"}],    
    "name": "boostrapParty",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [{"name": "organName","type": "string"}],    
    "name": "createOrgan",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [{"name": "_managerAddress","type": "address"}],    
    "name": "removeManager",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [{"name": "_managerAddress","type": "address"}],    
    "name": "isManager",
    "outputs": [{"name": "","type": "bool"}],
    "type": "function"
  }
 
] );   

var ConferenceContract = web3.eth.contract([
{"constant":true,"inputs":[],"name":"memberRegistry","outputs":[{"name":"","type":"address"}],"type":"function"},
{"constant":true,"inputs":[],"name":"accreditatedMembers","outputs":[{"name":"","type":"uint"}],"type":"function"},
{"constant":true,"inputs":[],"name":"mangerCount","outputs":[{"name":"","type":"uint"}],"type":"function"},
{"constant":true,"inputs":[],"name":"organName","outputs":[{"name":"","type":"string"}],"type":"function"},
{"constant":true,"inputs":[],"name":"date","outputs":[{"name":"","type":"uint"}],"type":"function"},
{"constant":true,"inputs":[],"name":"lastFunctionId","outputs":[{"name":"","type":"uint"}],"type":"function"},
{"constant":true,"inputs":[],"name":"blogRegistry","outputs":[{"name":"","type":"address"}],"type":"function"},
{"constant":true,"inputs":[],"name":"isActive","outputs":[{"name":"","type":"bool"}],"type":"function"},
{"constant":true,"inputs":[],"name":"ballotCount","outputs":[{"name":"","type":"uint"}],"type":"function"},
{"constant": true,"inputs": [{"name": "","type": "uint"}],"name": "organFunctions","outputs": [
{ "name": "currentMember", "type": "address"}
,{ "name": "functionName", "type": "string"}
,{ "name": "id", "type": "uint"}
,{ "name": "constitutionHash", "type": "string"}
,{ "name": "lastMemberChanged", "type": "uint"}
,{ "name": "lastConstitutionHashChanged", "type": "uint"}
,{ "name": "publisher", "type": "address"}
],"type": "function"	},
//

{"constant": true,"inputs": [{"name": "","type": "address"}],"name": "managers","outputs": [
{ "name": "", "type": "bool"}
],"type": "function"	},
//

  {
    "constant": false,
    "inputs": [{"name": "_address","type": "address"}],    
    "name": "accreditationMember",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [{"name": "_id","type": "uint"},{"name": "_address","type": "address"}],    
    "name": "changeMember",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [{"name": "_newManagerAddress","type": "address"}],    
    "name": "addManager",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [{"name": "_functionName","type": "string"},{"name": "_constittiutionHash","type": "string"}],    
    "name": "createFunction",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [{"name": "_managerAddress","type": "address"}],    
    "name": "removeManager",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [],    
    "name": "initalizeOrgan",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [{"name": "_managerAddress","type": "address"}],    
    "name": "isManager",
    "outputs": [{"name": "","type": "bool"}],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [{"name": "id","type": "uint"},{"name": "message","type": "string"},{"name": "hash","type": "string"},{"name": "er","type": "string"}],    
    "name": "publishFunctionMessage",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [{"name": "name","type": "string"},{"name": "proposalNames","type": "bytes32"}],    
    "name": "createBallot",
    "outputs": [{"name": "","type": "uint"}],
    "type": "function"
  }
,  {
    "constant": true,
    "inputs": [{"name": "id","type": "uint"}],    
    "name": "getFunctionBlogAddress",
    "outputs": [{"name": "","type": "address"}],
    "type": "function"
  }
,  {
    "constant": true,
    "inputs": [],    
    "name": "getLastBallot",
    "outputs": [{"name": "","type": "address"}],
    "type": "function"
  }
,  {
    "constant": true,
    "inputs": [],    
    "name": "getOrganBlog",
    "outputs": [{"name": "","type": "address"}],
    "type": "function"
  }
 ,
  { "constant": true,
    "inputs": [{"name": "memberId","type": "uint"},{"name": "memberName","type": "string"},{"name": "memberAddress","type": "address"}],    
    "name": "MemberAccreditated",
    "type": "event"  }
] );   

var FoundationConferenceContract = web3.eth.contract([
{"constant":true,"inputs":[],"name":"memberRegistry","outputs":[{"name":"","type":"address"}],"type":"function"},
{"constant":true,"inputs":[],"name":"accreditatedMembers","outputs":[{"name":"","type":"uint"}],"type":"function"},
{"constant":true,"inputs":[],"name":"mangerCount","outputs":[{"name":"","type":"uint"}],"type":"function"},
{"constant":true,"inputs":[],"name":"organName","outputs":[{"name":"","type":"string"}],"type":"function"},
{"constant":true,"inputs":[],"name":"date","outputs":[{"name":"","type":"uint"}],"type":"function"},
{"constant":true,"inputs":[],"name":"lastFunctionId","outputs":[{"name":"","type":"uint"}],"type":"function"},
{"constant":true,"inputs":[],"name":"blogRegistry","outputs":[{"name":"","type":"address"}],"type":"function"},
{"constant":true,"inputs":[],"name":"isActive","outputs":[{"name":"","type":"bool"}],"type":"function"},
{"constant":true,"inputs":[],"name":"ballotCount","outputs":[{"name":"","type":"uint"}],"type":"function"},
{"constant": true,"inputs": [{"name": "","type": "uint"}],"name": "organFunctions","outputs": [
{ "name": "currentMember", "type": "address"}
,{ "name": "functionName", "type": "string"}
,{ "name": "id", "type": "uint"}
,{ "name": "constitutionHash", "type": "string"}
,{ "name": "lastMemberChanged", "type": "uint"}
,{ "name": "lastConstitutionHashChanged", "type": "uint"}
,{ "name": "publisher", "type": "address"}
],"type": "function"	},
//

{"constant": true,"inputs": [{"name": "","type": "address"}],"name": "managers","outputs": [
{ "name": "", "type": "bool"}
],"type": "function"	},
//

  {
    "constant": false,
    "inputs": [{"name": "_address","type": "address"}],    
    "name": "accreditationMember",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [{"name": "_id","type": "uint"},{"name": "_address","type": "address"}],    
    "name": "changeMember",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [{"name": "_newManagerAddress","type": "address"}],    
    "name": "addManager",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [{"name": "_functionName","type": "string"},{"name": "_constittiutionHash","type": "string"}],    
    "name": "createFunction",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [{"name": "_managerAddress","type": "address"}],    
    "name": "removeManager",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [],    
    "name": "initalizeOrgan",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [{"name": "_managerAddress","type": "address"}],    
    "name": "isManager",
    "outputs": [{"name": "","type": "bool"}],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [{"name": "id","type": "uint"},{"name": "message","type": "string"},{"name": "hash","type": "string"},{"name": "er","type": "string"}],    
    "name": "publishFunctionMessage",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [{"name": "name","type": "string"},{"name": "proposalNames","type": "bytes32"}],    
    "name": "createBallot",
    "outputs": [{"name": "","type": "uint"}],
    "type": "function"
  }
,  {
    "constant": true,
    "inputs": [{"name": "id","type": "uint"}],    
    "name": "getFunctionBlogAddress",
    "outputs": [{"name": "","type": "address"}],
    "type": "function"
  }
,  {
    "constant": true,
    "inputs": [],    
    "name": "getLastBallot",
    "outputs": [{"name": "","type": "address"}],
    "type": "function"
  }
,  {
    "constant": true,
    "inputs": [],    
    "name": "getOrganBlog",
    "outputs": [{"name": "","type": "address"}],
    "type": "function"
  }
 
] );   



