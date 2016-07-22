
var MemberRegistryContract = web3.eth.contract([
{"constant":true,"inputs":[],"name":"mangerCount","outputs":[{"name":"","type":"uint"}],"type":"function"},
{"constant":true,"inputs":[],"name":"partyMemberCount","outputs":[{"name":"","type":"uint"}],"type":"function"},
{"constant":true,"inputs":[],"name":"activeMemberCount","outputs":[{"name":"","type":"uint"}],"type":"function"},
{"constant": true,"inputs": [{"name": "","type": "uint"}],"name": "partyMembers","outputs": [
{ "name": "name", "type": "string"}
,{ "name": "id", "type": "uint"}
,{ "name": "member", "type": "address"}
,{ "name": "state", "type": "MemberState"}
],"type": "function"	},
//

{"constant": true,"inputs": [{"name": "","type": "address"}],"name": "memberAddress","outputs": [
{ "name": "name", "type": "string"}
,{ "name": "id", "type": "uint"}
,{ "name": "member", "type": "address"}
,{ "name": "state", "type": "MemberState"}
],"type": "function"	},
//

{"constant": true,"inputs": [{"name": "","type": "address"}],"name": "managers","outputs": [
{ "name": "", "type": "bool"}
],"type": "function"	},
//

  {
    "constant": false,
    "inputs": [{"name": "name","type": "string"},{"name": "_memberAddress","type": "address"}],    
    "name": "addMember",
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
    "inputs": [{"name": "id","type": "uint"}],    
    "name": "unregisterMember",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": true,
    "inputs": [],    
    "name": "getMemberCount",
    "outputs": [{"name": "","type": "uint"}],
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
    "constant": true,
    "inputs": [{"name": "_memberAdress","type": "address"}],    
    "name": "isActiveMember",
    "outputs": [{"name": "","type": "bool"}],
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
    "inputs": [{"name": "id","type": "uint"},{"name": "_newMemberAddress","type": "address"}],    
    "name": "changeMemberAddress",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": true,
    "inputs": [{"name": "_address","type": "address"}],    
    "name": "getMemberData",
    "outputs": [{"name": "name","type": "string"},{"name": "id","type": "uint"}],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [{"name": "mAddress","type": "address"},{"name": "eventType","type": "uint"}],    
    "name": "publishMemberEvent",
    "outputs": [],
    "type": "function"
  }
 ,
  { "constant": true,
    "inputs": [{"name": "mAddress","type": "address"},{"name": "eType","type": "EventType"},{"name": "id","type": "uint"},{"name": "name","type": "string"},{"name": "memberState","type": "MemberState"}],    
    "name": "MemberEvent",
    "type": "event"  }
] );   

var MemberAwareContract = web3.eth.contract([
{"constant":true,"inputs":[],"name":"memberRegistry","outputs":[{"name":"","type":"address"}],"type":"function"},
 
] );   



