/**
*
* (c) KUEKeN
*
**/


/*
* A simple ballot for voting on alternatives.
*/
contract Ballot {
    
    struct Voter {
    	uint weight;
    	bool voted;
    	address delegate;
    	uint vote;
    }
    
    struct Proposal {
    	bytes32 name;
    	uint voteCount;
    }

	address public chairperson;
	Proposal[] public proposals;
	string public ballotName;
	mapping (address=>Voter)public voters;
	// Start of user code Ballot.attributes
	//TODO: implement
	// End of user code
	
	
	
	function Ballot(string name,bytes32[] proposalNames) public   {
		//Start of user code Ballot.function.Ballot
		//TODO: implement
		//End of user code
	}
	
	
	
	function giveRightToVote(address voter) public   {
		//Start of user code Ballot.function.giveRightToVote
		//TODO: implement
		//End of user code
	}
	
	
	
	function delegateTo(address to) public   {
		//Start of user code Ballot.function.delegateTo
		//TODO: implement
		//End of user code
	}
	
	
	
	function voteFor(uint proposal) public   {
		//Start of user code Ballot.function.voteFor
		//TODO: implement
		//End of user code
	}
	
	
	
	function winningProposal() public  returns (uint winningProposal) {
		//Start of user code Ballot.function.winningProposal
		//TODO: implement
		//End of user code
	}
	
	// Start of user code Ballot.operations
	//TODO: implement
	// End of user code
}

