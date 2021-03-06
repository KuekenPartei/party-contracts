// file header
/**
* A simple bean class around the contract.
* The BallotModel.
**/
function BallotModel(contract) {
this.contract = contract;
	/**
	* Getter for chairperson.
	**/
	this.getChairperson = function(){
		return contract.chairperson(); 
	}
	/**
	* Getter for proposals.
	**/
	this.getProposals = function(){
		return contract.proposals(); 
	}
	/**
	* Getter for ballotName.
	**/
	this.getBallotName = function(){
		return contract.ballotName(); 
	}
	/**
	* Get the mapped value for a key.
	*/
	this.getVoters=function(key) {
		return contract.voters(key);
	}
	/**
	* Call Ballot.
	**/
	this.Ballot = function(name,proposalNames){
		return contract.Ballot(name,proposalNames); 
	}
	/**
	* Call giveRightToVote.
	**/
	this.giveRightToVote = function(voter){
		return contract.giveRightToVote(voter); 
	}
	/**
	* Call delegateTo.
	**/
	this.delegateTo = function(to){
		return contract.delegateTo(to); 
	}
	/**
	* Call voteFor.
	**/
	this.voteFor = function(proposal){
		return contract.voteFor(proposal); 
	}
	/**
	* Call winningProposal.
	**/
	this.winningProposal = function(){
		return contract.winningProposal(); 
	}
}// end of function BallotModel

//test class for Ballot
function TestBallot(contract) {
	
	this.test_instance = contract;
	this.model = new BallotModel(contract);
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
		elemDiv.className='testRow';
		elemDiv.text=testMessage;
		var stateDiv = document.createElement('div');
		if(state){
			elemDiv.innerHTML = '<div class="pass_state">P</div><div class="testCell">'+testMessage+'</div>';
		}else{
			elemDiv.innerHTML = '<div class="failed_state">F</div><div class="testCell">'+testMessage+'</div>';
		}
		e.appendChild(elemDiv);
	}

	//assertEquals
	this.testAE=function(testName,testMessage,expected,value) {
		if(expected==value)
			this.printTest(testName, testMessage, true);
		else
			this.printTest(testName, testMessage+': expected '+expected+' got '+value, false);
	}

	//test the attributes after setup	
	this.testAttributes=function() {
	//Start of user code attributeTests_Ballot
	//TODO: implement
	//End of user code
	}

	//Test for Ballot_Ballot_string_bytes32
	this.testBallot_Ballot_string_bytes32=function() {
		//	var res = this.test_instance.Ballot( p_name, p_proposalNames);
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
		//	var res = this.test_instance.giveRightToVote( p_voter);
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
		//	var res = this.test_instance.delegateTo( p_to);
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
		//	var res = this.test_instance.voteFor( p_proposal);
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
		//	var res = this.test_instance.winningProposal();
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
/**
* A simple bean class around the contract.
* The BasicBallotModel.
**/
function BasicBallotModel(contract) {
this.contract = contract;
	/**
	* Getter for accessregistry.
	**/
	this.getAccessregistry = function(){
		return contract.accessregistry(); 
	}
	/**
	* Getter for ballotStart.
	**/
	this.getBallotStart = function(){
		return contract.ballotStart(); 
	}
	/**
	* Getter for ballotEnd.
	**/
	this.getBallotEnd = function(){
		return contract.ballotEnd(); 
	}
	/**
	* Getter for ballotState.
	**/
	this.getBallotState = function(){
		return contract.ballotState(); 
	}
	/**
	* Getter for proposalCount.
	**/
	this.getProposalCount = function(){
		return contract.proposalCount(); 
	}
	/**
	* Getter for ballotName.
	**/
	this.getBallotName = function(){
		return contract.ballotName(); 
	}
	/**
	* Getter for ballotHash.
	**/
	this.getBallotHash = function(){
		return contract.ballotHash(); 
	}
	/**
	* Get the mapped value for a key.
	*/
	this.getProposals=function(key) {
		return contract.proposals(key);
	}
	/**
	* Call addProposal.
	**/
	this.addProposal = function(_name,_hash,_url,_member){
		return contract.addProposal(_name,_hash,_url,_member); 
	}
	/**
	* Call castVote.
	**/
	this.castVote = function(_voteFor){
		return contract.castVote(_voteFor); 
	}
	/**
	* Call startBallot.
	**/
	this.startBallot = function(){
		return contract.startBallot(); 
	}
}// end of function BasicBallotModel

//test class for BasicBallot
function TestBasicBallot(contract) {
	
	this.test_instance = contract;
	this.model = new BasicBallotModel(contract);
	this.prefix='';
	this.messageBlockId = "testResult";
	var self = this;

	this.testSetup=function(){
		//Start of user code testSetup_BasicBallot
		//TODO: implement
		//End of user code
	}

	this.allTests=function(){
		this.testSetup();
		this.testAttributes();
		this.testBasicBallot_addProposal_string_string_string_address();
		this.testBasicBallot_castVote_uint();
		this.testBasicBallot_startBallot();
		this.customTests();
	
		//Start of user code allTests_BasicBallot
		//TODO: implement
		//End of user code

	}
	
	//print the test result
	this.printTest=function(testName,testMessage,state){
		var e = document.getElementById(this.prefix+'-'+this.messageBlockId);
		var elemDiv = document.createElement('div');
		elemDiv.id= this.prefix+'-'+testName;
		elemDiv.className='testRow';
		elemDiv.text=testMessage;
		var stateDiv = document.createElement('div');
		if(state){
			elemDiv.innerHTML = '<div class="pass_state">P</div><div class="testCell">'+testMessage+'</div>';
		}else{
			elemDiv.innerHTML = '<div class="failed_state">F</div><div class="testCell">'+testMessage+'</div>';
		}
		e.appendChild(elemDiv);
	}

	//assertEquals
	this.testAE=function(testName,testMessage,expected,value) {
		if(expected==value)
			this.printTest(testName, testMessage, true);
		else
			this.printTest(testName, testMessage+': expected '+expected+' got '+value, false);
	}

	//test the attributes after setup	
	this.testAttributes=function() {
	//Start of user code attributeTests_BasicBallot
	//TODO: implement
	//End of user code
	}

	//Test for BasicBallot_addProposal_string_string_string_address
	this.testBasicBallot_addProposal_string_string_string_address=function() {
		//	var res = this.test_instance.addProposal( p__name, p__hash, p__url, p__member);
		//Start of user code test_BasicBallot_addProposal_string_string_string_address
		//TODO : implement this
		//var test = false;		
		//this.testAE("testaddProposal", "executed: testBasicBallot_addProposal_string_string_string_address",true, test);		
		//End of user code
	}

	//Test for BasicBallot_castVote_uint
	this.testBasicBallot_castVote_uint=function() {
		//	var res = this.test_instance.castVote( p__voteFor);
		//Start of user code test_BasicBallot_castVote_uint
		//TODO : implement this
		//var test = false;		
		//this.testAE("testcastVote", "executed: testBasicBallot_castVote_uint",true, test);		
		//End of user code
	}

	//Test for BasicBallot_startBallot
	this.testBasicBallot_startBallot=function() {
		//	var res = this.test_instance.startBallot();
		//Start of user code test_BasicBallot_startBallot
		//TODO : implement this
		//var test = false;		
		//this.testAE("teststartBallot", "executed: testBasicBallot_startBallot",true, test);		
		//End of user code
	}
	this.customTests=function() {
		//Start of user code test_BasicBallot_custom tests
		//
		//End of user code
	}
}
/**
* A simple bean class around the contract.
* The PublicBallotModel.
**/
function PublicBallotModel(contract) {
this.contract = contract;
	/**
	* Getter for accessregistry.
	**/
	this.getAccessregistry = function(){
		return contract.accessregistry(); 
	}
	/**
	* Getter for ballotStart.
	**/
	this.getBallotStart = function(){
		return contract.ballotStart(); 
	}
	/**
	* Getter for ballotEnd.
	**/
	this.getBallotEnd = function(){
		return contract.ballotEnd(); 
	}
	/**
	* Getter for ballotState.
	**/
	this.getBallotState = function(){
		return contract.ballotState(); 
	}
	/**
	* Getter for proposalCount.
	**/
	this.getProposalCount = function(){
		return contract.proposalCount(); 
	}
	/**
	* Getter for ballotName.
	**/
	this.getBallotName = function(){
		return contract.ballotName(); 
	}
	/**
	* Getter for ballotHash.
	**/
	this.getBallotHash = function(){
		return contract.ballotHash(); 
	}
	/**
	* Get the mapped value for a key.
	*/
	this.getProposals=function(key) {
		return contract.proposals(key);
	}
	/**
	* Call addProposal.
	**/
	this.addProposal = function(_name,_hash,_url,_member){
		return contract.addProposal(_name,_hash,_url,_member); 
	}
	/**
	* Call castVote.
	**/
	this.castVote = function(_voteFor){
		return contract.castVote(_voteFor); 
	}
	/**
	* Call startBallot.
	**/
	this.startBallot = function(){
		return contract.startBallot(); 
	}
	/**
	* Call castVote.
	**/
	this.castVote = function(_voteFor){
		return contract.castVote(_voteFor); 
	}
}// end of function PublicBallotModel

//test class for PublicBallot
function TestPublicBallot(contract) {
	
	this.test_instance = contract;
	this.model = new PublicBallotModel(contract);
	this.prefix='';
	this.messageBlockId = "testResult";
	var self = this;

	this.testSetup=function(){
		//Start of user code testSetup_PublicBallot
		//TODO: implement
		//End of user code
	}

	this.allTests=function(){
		this.testSetup();
		this.testAttributes();
		this.testBasicBallot_addProposal_string_string_string_address();
		this.testBasicBallot_castVote_uint();
		this.testBasicBallot_startBallot();
		this.customTests();
	
		//Start of user code allTests_PublicBallot
		//TODO: implement
		//End of user code

	}
	
	//print the test result
	this.printTest=function(testName,testMessage,state){
		var e = document.getElementById(this.prefix+'-'+this.messageBlockId);
		var elemDiv = document.createElement('div');
		elemDiv.id= this.prefix+'-'+testName;
		elemDiv.className='testRow';
		elemDiv.text=testMessage;
		var stateDiv = document.createElement('div');
		if(state){
			elemDiv.innerHTML = '<div class="pass_state">P</div><div class="testCell">'+testMessage+'</div>';
		}else{
			elemDiv.innerHTML = '<div class="failed_state">F</div><div class="testCell">'+testMessage+'</div>';
		}
		e.appendChild(elemDiv);
	}

	//assertEquals
	this.testAE=function(testName,testMessage,expected,value) {
		if(expected==value)
			this.printTest(testName, testMessage, true);
		else
			this.printTest(testName, testMessage+': expected '+expected+' got '+value, false);
	}

	//test the attributes after setup	
	this.testAttributes=function() {
	//Start of user code attributeTests_PublicBallot
	//TODO: implement
	//End of user code
	}

	//Test for BasicBallot_addProposal_string_string_string_address
	this.testBasicBallot_addProposal_string_string_string_address=function() {
		//	var res = this.test_instance.addProposal( p__name, p__hash, p__url, p__member);
		//Start of user code test_PublicBallot_addProposal_string_string_string_address
		//TODO : implement this
		//var test = false;		
		//this.testAE("testaddProposal", "executed: testPublicBallot_addProposal_string_string_string_address",true, test);		
		//End of user code
	}

	//Test for BasicBallot_castVote_uint
	this.testBasicBallot_castVote_uint=function() {
		//	var res = this.test_instance.castVote( p__voteFor);
		//Start of user code test_PublicBallot_castVote_uint
		//TODO : implement this
		//var test = false;		
		//this.testAE("testcastVote", "executed: testPublicBallot_castVote_uint",true, test);		
		//End of user code
	}

	//Test for BasicBallot_startBallot
	this.testBasicBallot_startBallot=function() {
		//	var res = this.test_instance.startBallot();
		//Start of user code test_PublicBallot_startBallot
		//TODO : implement this
		//var test = false;		
		//this.testAE("teststartBallot", "executed: testPublicBallot_startBallot",true, test);		
		//End of user code
	}
	this.customTests=function() {
		//Start of user code test_PublicBallot_custom tests
		//
		//End of user code
	}
}
