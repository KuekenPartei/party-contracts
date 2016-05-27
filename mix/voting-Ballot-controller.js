// script for Ballot
var Ballot_instance = undefined;
	
// set address
function Ballot_setAddress() {
	var _address = document.getElementById('Ballot_address').value;
	Ballot_instance = BallotContract.at(_address);
}

function Ballot_updateAttributes() {
// update attributes
var chairperson_res = Ballot_instance.chairperson();
	if(chairperson_res!=null)
		document.getElementById('Ballot_chairperson_value').innerText = chairperson_res;
var proposals_res = Ballot_instance.proposals();
	if(proposals_res!=null)
		document.getElementById('Ballot_proposals_value').innerText = proposals_res;
var ballotName_res = Ballot_instance.ballotName();
	if(ballotName_res!=null)
		document.getElementById('Ballot_ballotName_value').innerText = ballotName_res;
}
//call functions
//function Ballot_Ballot
function Ballot_Ballot_string_bytes32() {
	var param_name = document.getElementById('Ballot_Ballot_string_bytes32_name').value;
	var param_proposalNames = document.getElementById('Ballot_Ballot_string_bytes32_proposalNames').value;
	var res = Ballot_instance.Ballot(param_name, param_proposalNames);
}
//function Ballot_giveRightToVote
function Ballot_giveRightToVote_address() {
	var param_voter = document.getElementById('Ballot_giveRightToVote_address_voter').value;
	var res = Ballot_instance.giveRightToVote(param_voter);
}
//function Ballot_delegateTo
function Ballot_delegateTo_address() {
	var param_to = document.getElementById('Ballot_delegateTo_address_to').value;
	var res = Ballot_instance.delegateTo(param_to);
}
//function Ballot_voteFor
function Ballot_voteFor_uint() {
	var param_proposal = document.getElementById('Ballot_voteFor_uint_proposal').value;
	var res = Ballot_instance.voteFor(param_proposal);
}
//function Ballot_winningProposal
function Ballot_winningProposal() {
	var res = Ballot_instance.winningProposal();
	if(res!=null)
		document.getElementById('Ballot_winningProposal_res').innerText = res;
}

//delegated calls

