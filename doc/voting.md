# voting


* [Ballot](#contract-ballot)

* [BasicBallot](#contract-basicballot)

* [PublicBallot](#contract-publicballot)

* [BallotFactory](#contract-ballotfactory)


## contract: Ballot

    overview:
	function Ballot(string name,bytes32[] proposalNames) public  
	function giveRightToVote(address voter) public  
	function delegateTo(address to) public  
	function voteFor(uint proposal) public  
	function winningProposal() public  returns (uint winningProposal)



A simple ballot for voting on alternatives.



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


## contract: BasicBallot

    overview:
	constructor BasicBallot(address _registry,string _name,string _hash)
	function addProposal(string _name,string _hash,string _url,address _member) public  onlyMember inState(BallotState.ballotCreated) 
	function castVote(uint _voteFor) public  onlyMember inState(BallotState.ballotStarted) 
	function startBallot() public  onlyMember inState(BallotState.ballotCreated) 
	function stopBallot() public  onlyMember inState(BallotState.ballotStarted) 



The basic ballot.
Collects the proposals and manages the state.


### BasicBallot enums: BallotState


name|doc
----|----|----
NULL|
ballotCreated|
ballotStarted|
ballotEnded|

### structs:

BallotProposal


#### BallotProposal properties

name|type|visiblity|delegate|doc
----|----|----|----|----
name|string|public||
hash|string|public||
url|string|public||
member|address|public||



#### BasicBallot properties

name|type|visiblity|delegate|doc
----|----|----|----|----
accessregistry|AccessRegistry|public||
ballotStart|uint|public||
ballotEnd|uint|public||
ballotState|BallotState|public||
proposalCount|uint|public||
ballotName|string|public||
ballotHash|string|public||
voteCount|uint|public||
-

#### BasicBallot.BasicBallot(address _registry,string _name,string _hash) public  

Creates the ballot in the state created.


name|type|doc
----|----|----
_registry|address|The member registry for the voting.
_name|string|The name of the ballot.
_hash|string|The hash of the actual text.

#### BasicBallot.addProposal(string _name,string _hash,string _url,address _member) public  onlyMember inState(BallotState.ballotCreated) 


name|type|direction|doc
----|----|----|----
_name|string|in|
_hash|string|in|
_url|string|in|
_member|address|in|

#### BasicBallot.castVote(uint _voteFor) public  onlyMember inState(BallotState.ballotStarted) 


name|type|direction|doc
----|----|----|----
_voteFor|uint|in|

#### BasicBallot.startBallot() public  onlyMember inState(BallotState.ballotCreated) 



#### BasicBallot.stopBallot() public  onlyMember inState(BallotState.ballotStarted) 




## contract: PublicBallot

    overview:
	abstract function castVote(uint _voteFor) public  onlyMember inState(BallotState.ballotStarted) 

inherites: [BasicBallot](#contract-basicballot)


A public votes are counted by the events.



-

#### event VotedCasted


name|type|indexed|doc
----|----|----|----
proposal|uint||
sender|address||


## contract: BallotFactory

    overview:
	function create(uint ballotType,address _registry,string _name,string _hash) public  returns (BasicBallot ballot)



Creates the ballots.



-

#### BallotFactory.create(uint ballotType,address _registry,string _name,string _hash) public  returns (BasicBallot ballot)

Creates a new ballot.


name|type|direction|doc
----|----|----|----
ballotType|uint|in|0 - public vote
_registry|address|in|The member registry for the voting.
_name|string|in|The name of the ballot.
_hash|string|in|The hash of the actual text.
ballot|BasicBallot|return|


