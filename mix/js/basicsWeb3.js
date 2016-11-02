/**
*
*(c) 2016 KUEKeN
* Urs Zeidler
*
**/
// contractVariable for Owned
var OwnedContract = web3.eth.contract([
{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"type":"function"},
{ "constant": false,
    "inputs": [],    
    "name": "getOwner",
    "outputs": [{"name": "result","type": "address"}],
    "type": "function" }
,{ "constant": false,
    "inputs": [{"name": "newOwner","type": "address"}],    
    "name": "changeOwner",
    "outputs": [],
    "type": "function" }
,{ "constant": false,
    "inputs": [],    
    "name": "kill",
    "outputs": [],
    "type": "function" }

]);   
// contractVariable for Manageable
var ManageableContract = web3.eth.contract([
{"constant":true,"inputs":[],"name":"mangerCount","outputs":[{"name":"","type":"uint256"}],"type":"function"},
{"constant": true,"inputs": [{"name": "","type": "address"}],"name": "managers","outputs": [
{ "name": "", "type": "bool"}
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
,
  { "anonymous": false,
    "inputs": 
	[
		{"indexed": false,
		 "name": "_state",
         "type": "uint256"}
,		{"indexed": false,
		 "name": "_address",
         "type": "address"}
,		{"indexed": false,
		 "name": "_managerCount",
         "type": "uint256"}
	],    
    "name": "ManagerChanged",
    "type": "event"  }
]);   
// contractVariable for Multiowned
var MultiownedContract = web3.eth.contract([
{"constant":true,"inputs":[],"name":"m_required","outputs":[{"name":"","type":"uint256"}],"type":"function"},
{"constant":true,"inputs":[],"name":"m_numOwners","outputs":[{"name":"","type":"uint256"}],"type":"function"},
{"constant":true,"inputs":[],"name":"m_owners","outputs":[{"name":"","type":"uint256"}],"type":"function"},
{"constant":true,"inputs":[],"name":"c_maxOwners","outputs":[{"name":"","type":"uint256"}],"type":"function"},
{"constant":true,"inputs":[],"name":"m_pendingIndex","outputs":[{"name":"","type":"bytes32"}],"type":"function"},
{"constant": true,"inputs": [{"name": "","type": "uint256"}],"name": "m_ownerIndex","outputs": [
{ "name": "", "type": "uint256"}
],"type": "function"	},
{"constant": true,"inputs": [{"name": "","type": "bytes32"}],"name": "m_pending","outputs": [
{ "name": "yetNeeded", "type": "uint256"}
,{ "name": "ownersDone", "type": "uint256"}
,{ "name": "index", "type": "uint256"}
],"type": "function"	},
{ "constant": false,
    "inputs": [{"name": "_owners","type": "address"},{"name": "_required","type": "uint256"}],    
    "name": "Multiowned",
    "outputs": [],
    "type": "function" }
,{ "constant": false,
    "inputs": [{"name": "_addr","type": "address"}],    
    "name": "isOwner",
    "outputs": [{"name": "","type": "bool"}],
    "type": "function" }
,{ "constant": true,
    "inputs": [{"name": "_operation","type": "bytes32"},{"name": "_owner","type": "address"}],    
    "name": "hasConfirmed",
    "outputs": [{"name": "","type": "bool"}],
    "type": "function" }
,
  { "anonymous": false,
    "inputs": 
	[
		{"indexed": false,
		 "name": "owner",
         "type": "address"}
,		{"indexed": false,
		 "name": "operation",
         "type": "bytes32"}
	],    
    "name": "Confirmation",
    "type": "event"  }
,  { "anonymous": false,
    "inputs": 
	[
		{"indexed": false,
		 "name": "owner",
         "type": "address"}
,		{"indexed": false,
		 "name": "operation",
         "type": "bytes32"}
	],    
    "name": "Revoke",
    "type": "event"  }
,  { "anonymous": false,
    "inputs": 
	[
		{"indexed": false,
		 "name": "oldOwner",
         "type": "address"}
,		{"indexed": false,
		 "name": "newOwner",
         "type": "address"}
	],    
    "name": "OwnerChanged",
    "type": "event"  }
,  { "anonymous": false,
    "inputs": 
	[
		{"indexed": false,
		 "name": "newOwner",
         "type": "address"}
	],    
    "name": "OwnerAdded",
    "type": "event"  }
,  { "anonymous": false,
    "inputs": 
	[
		{"indexed": false,
		 "name": "oldOwner",
         "type": "address"}
	],    
    "name": "OwnerRemoved",
    "type": "event"  }
,  { "anonymous": false,
    "inputs": 
	[
		{"indexed": false,
		 "name": "newRequirement",
         "type": "uint256"}
	],    
    "name": "RequirementChanged",
    "type": "event"  }
]);   


