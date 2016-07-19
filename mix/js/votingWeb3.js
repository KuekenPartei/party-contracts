
var BallotContract = web3.eth.contract([
{"constant":true,"inputs":[],"name":"chairperson","outputs":[{"name":"","type":"address"}],"type":"function"},
{"constant":true,"inputs":[],"name":"proposals","outputs":[{"name":"","type":"Proposal"}],"type":"function"},
{"constant":true,"inputs":[],"name":"ballotName","outputs":[{"name":"","type":"string"}],"type":"function"},
{"constant": true,"inputs": [{"name": "","type": "address"}],"name": "voters","outputs": [
{ "name": "weight", "type": "uint"}
,{ "name": "voted", "type": "bool"}
,{ "name": "delegate", "type": "address"}
,{ "name": "vote", "type": "uint"}
],"type": "function"	},
  {
    "constant": false,
    "inputs": [{"name": "name","type": "string"},{"name": "proposalNames","type": "bytes32"}],    
    "name": "Ballot",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [{"name": "voter","type": "address"}],    
    "name": "giveRightToVote",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [{"name": "to","type": "address"}],    
    "name": "delegateTo",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [{"name": "proposal","type": "uint"}],    
    "name": "voteFor",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [],    
    "name": "winningProposal",
    "outputs": [{"name": "winningProposal","type": "uint"}],
    "type": "function"
  }
 
] );   


