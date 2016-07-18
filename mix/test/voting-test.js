//test class for Ballot
function TestBallot(contract) {
	
	this.test_instance = contract;
	this.prefix='';
	this.messageBlockId = "testResult";
	var self = this;

	this.testSetup=function(){
		//Start of user code testSetup_Ballot
		//TODO: implement
		//End of user code
	}

	this.allTests=function(){
		this.testSetup();
		this.testAttributes();
		this.testBallot_Ballot_string_bytes32();
		this.testBallot_giveRightToVote_address();
		this.testBallot_delegateTo_address();
		this.testBallot_voteFor_uint();
		this.testBallot_winningProposal();
		this.customTests();
	
		//Start of user code allTests_Ballot
		//TODO: implement
		//End of user code

	}
	
	//print the test result
	this.printTest=function(testName,testMessage,state){
		var e = document.getElementById(this.prefix+'-'+this.messageBlockId);
		var elemDiv = document.createElement('div');
		elemDiv.id= this.prefix+'-'+testName;
		elemDiv.innerText = testMessage;
		if(!state)
			elemDiv.className = 'failed_state'
		e.appendChild(elemDiv);
	}
	
	this.testAttributes=function() {
	//Start of user code attributeTests_Ballot
	//TODO: implement
	//End of user code
	}

	//Test for Ballot_Ballot_string_bytes32
	this.testBallot_Ballot_string_bytes32=function() {
		//Start of user code test_Ballot_Ballot_string_bytes32
		//TODO: implement
//console.log('testBallot_Ballot_string_bytes32');
//	var p_name = '';
//	var p_proposalNames = '';
//	var res = this.test_instance.Ballot( p_name, p_proposalNames);
//	var state = res==="";		
		this.printTest("testBallot", "executed: testBallot_Ballot_string_bytes32", false);		
		//End of user code
	}

	//Test for Ballot_giveRightToVote_address
	this.testBallot_giveRightToVote_address=function() {
		//Start of user code test_Ballot_giveRightToVote_address
		//TODO: implement
//console.log('testBallot_giveRightToVote_address');
//	var p_voter = '';
//	var res = this.test_instance.giveRightToVote( p_voter);
//	var state = res==="";		
		this.printTest("testgiveRightToVote", "executed: testBallot_giveRightToVote_address", false);		
		//End of user code
	}

	//Test for Ballot_delegateTo_address
	this.testBallot_delegateTo_address=function() {
		//Start of user code test_Ballot_delegateTo_address
		//TODO: implement
//console.log('testBallot_delegateTo_address');
//	var p_to = '';
//	var res = this.test_instance.delegateTo( p_to);
//	var state = res==="";		
		this.printTest("testdelegateTo", "executed: testBallot_delegateTo_address", false);		
		//End of user code
	}

	//Test for Ballot_voteFor_uint
	this.testBallot_voteFor_uint=function() {
		//Start of user code test_Ballot_voteFor_uint
		//TODO: implement
//console.log('testBallot_voteFor_uint');
//	var p_proposal = '';
//	var res = this.test_instance.voteFor( p_proposal);
//	var state = res==="";		
		this.printTest("testvoteFor", "executed: testBallot_voteFor_uint", false);		
		//End of user code
	}

	//Test for Ballot_winningProposal
	this.testBallot_winningProposal=function() {
		//Start of user code test_Ballot_winningProposal
		//TODO: implement
//console.log('testBallot_winningProposal');
//	var res = this.test_instance.winningProposal();
//	var state = res==="";		
		this.printTest("testwinningProposal", "executed: testBallot_winningProposal", false);		
		//End of user code
	}
	this.customTests=function() {
		//Start of user code test_Ballot_custom tests
		//
		//End of user code
	}
}
