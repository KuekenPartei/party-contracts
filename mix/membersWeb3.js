
var MemberRegistryContract = web3.eth.contract([
{"constant":true,"inputs":[],"name":"partyMemberCount","outputs":[{"name":"","type":"uint"}],"type":"function"},
{"constant":true,"inputs":[],"name":"activeMemberCount","outputs":[{"name":"","type":"uint"}],"type":"function"},
{"constant":true,"inputs":[{"name":"","type":"uint"}],"name":"partyMembers","outputs":[{"name":"","type":"Member"}],"type":"function"},
{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"memberAddress","outputs":[{"name":"","type":"Member"}],"type":"function"},
{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"managers","outputs":[{"name":"","type":"bool"}],"type":"function"},
  {
    "constant": true,
    "inputs": [{"name": "name","type": "string"},{"name": "_memberAddress","type": "address"}],    
    "name": "addMember",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": true,
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
    "constant": true,
    "inputs": [{"name": "_memberAdress","type": "address"}],    
    "name": "isActiveMember",
    "outputs": [{"name": "","type": "bool"}],
    "type": "function"
  }
,  {
    "constant": true,
    "inputs": [{"name": "id","type": "uint"},{"name": "_newMemberAddress","type": "address"}],    
    "name": "changeMemberAddress",
    "outputs": [],
    "type": "function"
  }
 
] );   

var MemberAwareContract = web3.eth.contract([
{"constant":true,"inputs":[],"name":"memberRegistry","outputs":[{"name":"","type":"MemberRegistry"}],"type":"function"},
  {
    "constant": true,
    "inputs": [{"name": "_address","type": "address"}],    
    "name": "isMember",
    "outputs": [{"name": "","type": "bool"}],
    "type": "function"
  }
 
] );   


