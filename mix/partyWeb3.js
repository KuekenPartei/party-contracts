
var OrganContract = web3.eth.contract([
{"constant":true,"inputs":[],"name":"organName","outputs":[{"name":"","type":"string"}],"type":"function"},
{"constant":true,"inputs":[],"name":"lastFunctionId","outputs":[{"name":"","type":"uint"}],"type":"function"},
{"constant":true,"inputs":[],"name":"blogRegistry","outputs":[{"name":"","type":"BlogRegistry"}],"type":"function"},
{"constant":true,"inputs":[],"name":"isActive","outputs":[{"name":"","type":"bool"}],"type":"function"},
{"constant":true,"inputs":[],"name":"organBlog","outputs":[{"name":"","type":"ShortBlog"}],"type":"function"},
{"constant":true,"inputs":[],"name":"memberRegistry","outputs":[{"name":"","type":"MemberRegistry"}],"type":"function"},
{"constant":true,"inputs":[{"name":"","type":"uint"}],"name":"organFunctions","outputs":[{"name":"","type":"OrganFunction"}],"type":"function"},
{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"managers","outputs":[{"name":"","type":"bool"}],"type":"function"},
  {
    "constant": true,
    "inputs": [{"name": "_id","type": "uint"},{"name": "_address","type": "address"}],    
    "name": "changeMember",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": true,
    "inputs": [{"name": "_functionName","type": "string"},{"name": "_constittiutionHash","type": "string"}],    
    "name": "createFunction",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": true,
    "inputs": [],    
    "name": "initalizeOrgan",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": true,
    "inputs": [{"name": "message","type": "string"}],    
    "name": "publishMessage",
    "outputs": [],
    "type": "function"
  }
 ,
  {
    "constant": true,
    "inputs": [{"name": "oldMember","type": "address"},{"name": "functionId","type": "uint"},{"name": "newMember","type": "address"}],    
    "name": "FunctionMemberChange",
    "type": "event"
  }

] );   

var PartyContract = web3.eth.contract([
{"constant":true,"inputs":[],"name":"memberRegistry","outputs":[{"name":"","type":"MemberRegistry"}],"type":"function"},
{"constant":true,"inputs":[],"name":"constitutionHash","outputs":[{"name":"","type":"string"}],"type":"function"},
{"constant":true,"inputs":[],"name":"organCount","outputs":[{"name":"","type":"uint"}],"type":"function"},
{"constant":true,"inputs":[],"name":"blogregistry","outputs":[{"name":"","type":"BlogRegistry"}],"type":"function"},
{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"managers","outputs":[{"name":"","type":"bool"}],"type":"function"},
{"constant":true,"inputs":[{"name":"","type":"invalid"}],"name":"organs","outputs":[{"name":"","type":"Organ"}],"type":"function"},
  {
    "constant": true,
    "inputs": [],    
    "name": "Party",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": true,
    "inputs": [{"name": "organName","type": "string"}],    
    "name": "createOrgan",
    "outputs": [],
    "type": "function"
  }
 ,
  {
    "constant": true,
    "inputs": [],    
    "name": "ConstiutionChange",
    "type": "event"
  }

] );   

var KUEKeNPartyContract = web3.eth.contract([
{"constant":true,"inputs":[],"name":"memberRegistry","outputs":[{"name":"","type":"MemberRegistry"}],"type":"function"},
{"constant":true,"inputs":[],"name":"constitutionHash","outputs":[{"name":"","type":"string"}],"type":"function"},
{"constant":true,"inputs":[],"name":"organCount","outputs":[{"name":"","type":"uint"}],"type":"function"},
{"constant":true,"inputs":[],"name":"blogregistry","outputs":[{"name":"","type":"BlogRegistry"}],"type":"function"},
{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"managers","outputs":[{"name":"","type":"bool"}],"type":"function"},
{"constant":true,"inputs":[{"name":"","type":"invalid"}],"name":"organs","outputs":[{"name":"","type":"Organ"}],"type":"function"},
  {
    "constant": true,
    "inputs": [],    
    "name": "KUEKeNParty",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": true,
    "inputs": [{"name": "fc","type": "address"},{"name": "br","type": "address"}],    
    "name": "boostrapParty",
    "outputs": [],
    "type": "function"
  }
 
] );   

var FoundationConferenceContract = web3.eth.contract([
{"constant":true,"inputs":[],"name":"organName","outputs":[{"name":"","type":"string"}],"type":"function"},
{"constant":true,"inputs":[],"name":"lastFunctionId","outputs":[{"name":"","type":"uint"}],"type":"function"},
{"constant":true,"inputs":[],"name":"blogRegistry","outputs":[{"name":"","type":"BlogRegistry"}],"type":"function"},
{"constant":true,"inputs":[],"name":"isActive","outputs":[{"name":"","type":"bool"}],"type":"function"},
{"constant":true,"inputs":[],"name":"organBlog","outputs":[{"name":"","type":"ShortBlog"}],"type":"function"},
{"constant":true,"inputs":[],"name":"memberRegistry","outputs":[{"name":"","type":"MemberRegistry"}],"type":"function"},
{"constant":true,"inputs":[{"name":"","type":"uint"}],"name":"organFunctions","outputs":[{"name":"","type":"OrganFunction"}],"type":"function"},
{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"managers","outputs":[{"name":"","type":"bool"}],"type":"function"},
 
] );   


