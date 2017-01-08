// file header
// contractVariable for Ballot
var BallotContract = web3.eth.contract([
{"constant":true,"inputs":[],"name":"chairperson","outputs":[{"name":"","type":"address"}],"type":"function"},
{"constant":true,"inputs":[],"name":"proposals","outputs":[{"name":"","type":"Proposal"}],"type":"function"},
{"constant":true,"inputs":[],"name":"ballotName","outputs":[{"name":"","type":"string"}],"type":"function"},
{"constant": true,"inputs": [{"name": "","type": "address"}],"name": "voters","outputs": [
{ "name": "weight", "type": "uint256"}
,{ "name": "voted", "type": "bool"}
,{ "name": "delegate", "type": "address"}
,{ "name": "vote", "type": "uint256"}
],"type": "function"	},
{ "constant": false,
    "inputs": [{"name": "name","type": "string"},{"name": "proposalNames","type": "bytes32"}],    
    "name": "Ballot",
    "outputs": [],
    "type": "function" }
,{ "constant": false,
    "inputs": [{"name": "voter","type": "address"}],    
    "name": "giveRightToVote",
    "outputs": [],
    "type": "function" }
,{ "constant": false,
    "inputs": [{"name": "to","type": "address"}],    
    "name": "delegateTo",
    "outputs": [],
    "type": "function" }
,{ "constant": false,
    "inputs": [{"name": "proposal","type": "uint256"}],    
    "name": "voteFor",
    "outputs": [],
    "type": "function" }
,{ "constant": false,
    "inputs": [],    
    "name": "winningProposal",
    "outputs": [{"name": "winningProposal","type": "uint256"}],
    "type": "function" }

]);   
// contractVariable for BasicBallot
var BasicBallotContract = web3.eth.contract([
{"constant":true,"inputs":[],"name":"accessregistry","outputs":[{"name":"","type":"AccessRegistry"}],"type":"function"},
{"constant":true,"inputs":[],"name":"ballotStart","outputs":[{"name":"","type":"uint256"}],"type":"function"},
{"constant":true,"inputs":[],"name":"ballotEnd","outputs":[{"name":"","type":"uint256"}],"type":"function"},
{"constant":true,"inputs":[],"name":"ballotState","outputs":[{"name":"","type":"BallotState"}],"type":"function"},
{"constant":true,"inputs":[],"name":"proposalCount","outputs":[{"name":"","type":"uint256"}],"type":"function"},
{"constant":true,"inputs":[],"name":"ballotName","outputs":[{"name":"","type":"string"}],"type":"function"},
{"constant":true,"inputs":[],"name":"ballotHash","outputs":[{"name":"","type":"string"}],"type":"function"},
{"constant": true,"inputs": [{"name": "","type": "uint256"}],"name": "proposals","outputs": [
{ "name": "name", "type": "string"}
,{ "name": "hash", "type": "string"}
,{ "name": "url", "type": "string"}
,{ "name": "member", "type": "address"}
],"type": "function"	},
{ "constant": false,
    "inputs": [{"name": "_name","type": "string"},{"name": "_hash","type": "string"},{"name": "_url","type": "string"},{"name": "_member","type": "address"}],    
    "name": "addProposal",
    "outputs": [],
    "type": "function" }
,{ "constant": false,
    "inputs": [{"name": "_voteFor","type": "uint256"}],    
    "name": "castVote",
    "outputs": [],
    "type": "function" }
,{ "constant": false,
    "inputs": [],    
    "name": "startBallot",
    "outputs": [],
    "type": "function" }

]);   
// contractVariable for PublicBallot
var PublicBallotContract = web3.eth.contract([
{"constant":true,"inputs":[],"name":"accessregistry","outputs":[{"name":"","type":"AccessRegistry"}],"type":"function"},
{"constant":true,"inputs":[],"name":"ballotStart","outputs":[{"name":"","type":"uint256"}],"type":"function"},
{"constant":true,"inputs":[],"name":"ballotEnd","outputs":[{"name":"","type":"uint256"}],"type":"function"},
{"constant":true,"inputs":[],"name":"ballotState","outputs":[{"name":"","type":"BallotState"}],"type":"function"},
{"constant":true,"inputs":[],"name":"proposalCount","outputs":[{"name":"","type":"uint256"}],"type":"function"},
{"constant":true,"inputs":[],"name":"ballotName","outputs":[{"name":"","type":"string"}],"type":"function"},
{"constant":true,"inputs":[],"name":"ballotHash","outputs":[{"name":"","type":"string"}],"type":"function"},
{"constant": true,"inputs": [{"name": "","type": "uint256"}],"name": "proposals","outputs": [
{ "name": "name", "type": "string"}
,{ "name": "hash", "type": "string"}
,{ "name": "url", "type": "string"}
,{ "name": "member", "type": "address"}
],"type": "function"	},
{ "constant": false,
    "inputs": [{"name": "_name","type": "string"},{"name": "_hash","type": "string"},{"name": "_url","type": "string"},{"name": "_member","type": "address"}],    
    "name": "addProposal",
    "outputs": [],
    "type": "function" }
,{ "constant": false,
    "inputs": [{"name": "_voteFor","type": "uint256"}],    
    "name": "castVote",
    "outputs": [],
    "type": "function" }
,{ "constant": false,
    "inputs": [],    
    "name": "startBallot",
    "outputs": [],
    "type": "function" }
,{ "constant": false,
    "inputs": [{"name": "_voteFor","type": "uint256"}],    
    "name": "castVote",
    "outputs": [],
    "type": "function" }
,
  { "anonymous": false,
    "inputs": 
	[
	],    
    "name": "VotedCasted",
    "type": "event"  }
]);   


