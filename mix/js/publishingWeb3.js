/**
*
*(c) 2016 KUEKeN
* Urs Zeidler
*
**/
// contractVariable for ShortBlog
var ShortBlogContract = web3.eth.contract([
{"constant":true,"inputs":[],"name":"messageCount","outputs":[{"name":"","type":"uint256"}],"type":"function"},
{"constant":true,"inputs":[],"name":"lastMessageDate","outputs":[{"name":"","type":"uint256"}],"type":"function"},
{"constant":true,"inputs":[],"name":"mangerCount","outputs":[{"name":"","type":"uint256"}],"type":"function"},
{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"type":"function"},
{"constant": true,"inputs": [{"name": "","type": "uint256"}],"name": "messages","outputs": [
{ "name": "message", "type": "string"}
,{ "name": "date", "type": "uint256"}
,{ "name": "id", "type": "uint256"}
,{ "name": "sender", "type": "address"}
,{ "name": "blockNumber", "type": "uint256"}
,{ "name": "hashValue", "type": "string"}
,{ "name": "externalResource", "type": "string"}
],"type": "function"	},
{"constant": true,"inputs": [{"name": "","type": "address"}],"name": "managers","outputs": [
{ "name": "", "type": "bool"}
],"type": "function"	},
{ "constant": false,
    "inputs": [{"name": "_newManagerAddress","type": "address"}],    
    "name": "addManager",
    "outputs": [],
    "type": "function" }
,{ "constant": false,
    "inputs": [{"name": "message","type": "string"},{"name": "hash","type": "string"},{"name": "er","type": "string"}],    
    "name": "sendMessage",
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
		 "name": "message",
         "type": "string"}
,		{"indexed": false,
		 "name": "messageId",
         "type": "uint256"}
,		{"indexed": false,
		 "name": "messageSender",
         "type": "address"}
,		{"indexed": false,
		 "name": "messageHashValue",
         "type": "string"}
,		{"indexed": false,
		 "name": "externalResource",
         "type": "string"}
	],    
    "name": "NewMessage",
    "type": "event"  }
]);   
// contractVariable for BlogRegistry
var BlogRegistryContract = web3.eth.contract([
{"constant":true,"inputs":[],"name":"blogCount","outputs":[{"name":"","type":"uint256"}],"type":"function"},
{"constant":true,"inputs":[],"name":"mangerCount","outputs":[{"name":"","type":"uint256"}],"type":"function"},
{"constant": true,"inputs": [{"name": "","type": "uint256"}],"name": "blogs","outputs": [
{ "name": "", "type": "address"}
],"type": "function"	},
{"constant": true,"inputs": [{"name": "","type": "address"}],"name": "managers","outputs": [
{ "name": "", "type": "bool"}
],"type": "function"	},
{ "constant": false,
    "inputs": [{"name": "_name","type": "string"}],    
    "name": "registerBlog",
    "outputs": [{"name": "","type": "address"}],
    "type": "function" }
,{ "constant": false,
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
		 "name": "index",
         "type": "uint256"}
,		{"indexed": false,
		 "name": "name",
         "type": "string"}
,		{"indexed": false,
		 "name": "blogAddress",
         "type": "address"}
	],    
    "name": "NewBlog",
    "type": "event"  }
]);   


