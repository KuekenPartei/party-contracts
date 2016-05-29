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
		ballotName = name;
		chairperson = msg.sender;
		voters [ chairperson ].weight = 1;

		// For each of the provided proposal names,
		// create a new proposal object and add it
		// to the end of the array.
		for (uint i = 0; i < proposalNames.length; i ++) {
		// `Proposal({...})` creates a temporary
		// Proposal object and `proposals.push(...)`
		// appends it to the end of `proposals`.
			proposals.push (Proposal ({
			name : proposalNames [ i ], voteCount : 0
			}));
		}
		//End of user code
	}
	
	
	
	function giveRightToVote(address voter) public   {
		//Start of user code Ballot.function.giveRightToVote

		if (msg.sender != chairperson || voters [ voter ].voted)
		{
		// `throw` terminates and reverts all changes to
		// the state and to Ether balances. It is often
		// a good idea to use this if functions are
		// called incorrectly. But watch out, this
		// will also consume all provided gas.
			throw;
		}
		voters [ voter ].weight = 1;
		//End of user code
	}
	
	
	
	function delegateTo(address to) public   {
		//Start of user code Ballot.function.delegateTo
	// assigns reference
		Voter sender = voters [ msg.sender ];
		if (sender.voted)
		throw;

		// Forward the delegation as long as
		// `to` also delegated.
		while (voters [ to ].delegate != address(0) && voters [ to ].delegate != msg.sender) {
			to = voters [ to ].delegate;
		}

		// We found a loop in the delegation, not allowed.

		if (to == msg.sender)
		{
			throw;
		}

		// Since `sender` is a reference, this
		// modifies `voters[msg.sender].voted`
		sender.voted = true;
		sender.delegate = to;
		Voter delegate = voters [ to ];
		if (delegate.voted)
		{
		// If the delegate already voted,
		// directly add to the number of votes
			proposals [ delegate.vote ].voteCount += sender.weight;
		}
		else {
		// If the delegate did not vote yet,
		// add to her weight.
			delegate.weight += sender.weight;
		}
		//End of user code
	}
	
	
	
	function voteFor(uint proposal) public   {
		//Start of user code Ballot.function.voteFor
		Voter sender = voters [ msg.sender ];
		if (sender.voted)
		throw;
		sender.voted = true;
		sender.vote = proposal;

		// If `proposal` is out of the range of the array,
		// this will throw automatically and revert all
		// changes.
		proposals [ proposal ].voteCount += sender.weight;
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

