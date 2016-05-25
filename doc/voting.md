# voting


* [Ballot](#contract-ballot)

## contract: Ballot

    overview:
	function Ballot(string name,bytes32[] proposalNames) public  
	function giveRightToVote(address voter) public  
	function delegateTo(address to) public  
	function voteFor(uint proposal) public  
	function winningProposal() public  returns (uint winningProposal)





### structs:

Voter


#### Voter properties

name|type|visiblity|delegate|doc
----|----|----|----|----
weight|uint|public||
voted|bool|public||
delegate|address|public||
vote|uint|public||


Proposal


#### Proposal properties

name|type|visiblity|delegate|doc
----|----|----|----|----
name|bytes32|public||
voteCount|uint|public||



#### Ballot properties

name|type|visiblity|delegate|doc
----|----|----|----|----
chairperson|address|public||
proposals|Proposal|public||
ballotName|string|public||
-

#### Ballot.Ballot(string name,bytes32[] proposalNames) public  


name|type|direction|doc
----|----|----|----
name|string|in|
proposalNames|bytes32|in|

#### Ballot.giveRightToVote(address voter) public  


name|type|direction|doc
----|----|----|----
voter|address|in|

#### Ballot.delegateTo(address to) public  


name|type|direction|doc
----|----|----|----
to|address|in|

#### Ballot.voteFor(uint proposal) public  


name|type|direction|doc
----|----|----|----
proposal|uint|in|

#### Ballot.winningProposal() public  returns (uint winningProposal)


name|type|direction|doc
----|----|----|----
winningProposal|uint|return|


