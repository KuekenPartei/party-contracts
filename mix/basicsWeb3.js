
var OwnedContract = web3.eth.contract([
{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"type":"function"},
  {
    "constant": true,
    "inputs": [],    
    "name": "getOwner",
    "outputs": [{"name": "result","type": "address"}],
    "type": "function"
  }
,  {
    "constant": true,
    "inputs": [{"name": "newOwner","type": "address"}],    
    "name": "changeOwner",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": true,
    "inputs": [],    
    "name": "kill",
    "outputs": [],
    "type": "function"
  }
 
] );   

var ManageableContract = web3.eth.contract([
{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"managers","outputs":[{"name":"","type":"bool"}],"type":"function"},
  {
    "constant": true,
    "inputs": [],    
    "name": "canAccess",
    "outputs": [{"name": "","type": "bool"}],
    "type": "function"
  }
,  {
    "constant": true,
    "inputs": [{"name": "_newManagerAddress","type": "address"}],    
    "name": "addManager",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": true,
    "inputs": [{"name": "_managerAddress","type": "address"}],    
    "name": "removeManager",
    "outputs": [],
    "type": "function"
  }
 
] );   


