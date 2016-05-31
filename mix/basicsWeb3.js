
var OwnedContract = web3.eth.contract([
{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"type":"function"},
  {
    "constant": false,
    "inputs": [],    
    "name": "getOwner",
    "outputs": [{"name": "result","type": "address"}],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [{"name": "newOwner","type": "address"}],    
    "name": "changeOwner",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [],    
    "name": "kill",
    "outputs": [],
    "type": "function"
  }
 
] );   

var ManageableContract = web3.eth.contract([
{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"managers","outputs":[{"name":"","type":"bool"}],"type":"function"},
  {
    "constant": false,
    "inputs": [{"name": "_newManagerAddress","type": "address"}],    
    "name": "addManager",
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
 
] );   

var MultiownedContract = web3.eth.contract([
{"constant":true,"inputs":[],"name":"m_required","outputs":[{"name":"","type":"uint"}],"type":"function"},
{"constant":true,"inputs":[],"name":"m_numOwners","outputs":[{"name":"","type":"uint"}],"type":"function"},
{"constant":true,"inputs":[],"name":"m_owners","outputs":[{"name":"","type":"uint"}],"type":"function"},
{"constant":true,"inputs":[],"name":"c_maxOwners","outputs":[{"name":"","type":"uint"}],"type":"function"},
{"constant":true,"inputs":[],"name":"m_pendingIndex","outputs":[{"name":"","type":"bytes32"}],"type":"function"},
{"constant":true,"inputs":[{"name":"","type":"uint"}],"name":"m_ownerIndex","outputs":[{"name":"","type":"uint"}],"type":"function"},
{"constant":true,"inputs":[{"name":"","type":"invalid"}],"name":"m_pending","outputs":[{"name":"","type":"PendingState"}],"type":"function"},
  {
    "constant": false,
    "inputs": [{"name": "_owners","type": "address"},{"name": "_required","type": "uint"}],    
    "name": "Multiowned",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [{"name": "_addr","type": "address"}],    
    "name": "isOwner",
    "outputs": [{"name": "","type": "bool"}],
    "type": "function"
  }
,  {
    "constant": true,
    "inputs": [{"name": "_operation","type": "bytes32"},{"name": "_owner","type": "address"}],    
    "name": "hasConfirmed",
    "outputs": [{"name": "","type": "bool"}],
    "type": "function"
  }
 ,
  {
    "constant": true,
    "inputs": [{"name": "owner","type": "address"},{"name": "operation","type": "bytes32"}],    
    "name": "Confirmation",
    "type": "event"
  }

  {
    "constant": true,
    "inputs": [{"name": "owner","type": "address"},{"name": "operation","type": "bytes32"}],    
    "name": "Revoke",
    "type": "event"
  }

  {
    "constant": true,
    "inputs": [{"name": "oldOwner","type": "address"},{"name": "newOwner","type": "address"}],    
    "name": "OwnerChanged",
    "type": "event"
  }

  {
    "constant": true,
    "inputs": [{"name": "newOwner","type": "address"}],    
    "name": "OwnerAdded",
    "type": "event"
  }

  {
    "constant": true,
    "inputs": [{"name": "oldOwner","type": "address"}],    
    "name": "OwnerRemoved",
    "type": "event"
  }

  {
    "constant": true,
    "inputs": [{"name": "newRequirement","type": "uint"}],    
    "name": "RequirementChanged",
    "type": "event"
  }

] );   


