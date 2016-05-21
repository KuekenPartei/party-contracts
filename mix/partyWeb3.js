
var OrganContract = web3.eth.contract([
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
 ,
  {
    "constant": true,
    "inputs": [{"name": "oldMember","type": "address"},{"name": "functionId","type": "uint"},{"name": "newMember","type": "address"}],    
    "name": "FunctionMemberChange",
    "type": "event"
  }

] );   

var PartyContract = web3.eth.contract([
  {
    "constant": true,
    "inputs": [],    
    "name": "Party",
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
  {
    "constant": true,
    "inputs": [],    
    "name": "KUEKeNParty",
    "outputs": [],
    "type": "function"
  }
 
] );   

var FoundationConferenceContract = web3.eth.contract([
 
] );   


