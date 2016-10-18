/*
*
*
*/



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
		//Start of user code Ballot.function.Ballot_string_bytes32
		//TODO: implement
		//End of user code
	}
	
	
	
	function giveRightToVote(address voter) public   {
		//Start of user code Ballot.function.giveRightToVote_address
		//TODO: implement
		//End of user code
	}
	
	
	
	function delegateTo(address to) public   {
		//Start of user code Ballot.function.delegateTo_address
		//TODO: implement
		//End of user code
	}
	
	
	
	function voteFor(uint proposal) public   {
		//Start of user code Ballot.function.voteFor_uint
		//TODO: implement
		//End of user code
	}
	
	
	
	function winningProposal() public  returns (uint winningProposal) {
		//Start of user code Ballot.function.winningProposal
		uint winningVoteCount = 0;
		for (uint p = 0; p < proposals.length; p ++) {
			if (proposals [ p ].voteCount > winningVoteCount)
			{
				winningVoteCount = proposals [ p ].voteCount;
				winningProposal = p;
			}
		}
		//End of user code
	}
	
	// Start of user code Ballot.operations
	//TODO: implement
	// End of user code
}

