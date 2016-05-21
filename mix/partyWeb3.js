
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
    "inputs": [{"name": "_functionName","type": "string"}],    
    "name": "createFunction",
    "outputs": [],
    "type": "function"
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


