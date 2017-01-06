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

/**
* Gui factory Ballot
**/
function BallotGuiFactory() {
	this.prefix='';
	
	/**
	* Places the default gui to 'e' or an element with id='Ballot_gui'
	*/
	this.placeDefaultGui=function(e) {
		if(e==null)
			e = document.getElementById(this.prefix+'Ballot_gui');
		if(e!=null)
			e.innerHTML = this.createDefaultGui();
		else
			console.log(this.prefix+'Ballot_gui not found');
	}

	/**
	* The default generated gui with all actions and attributes.
	*/
	this.createDefaultGui=function() {
		return 		'<!-- gui for Ballot_contract -->'
+		'		<div class="contract" id="'+this.prefix+'Ballot_contract">'
+		'		Ballot:'
+		'		  <input type="text" id="'+this.prefix+'Ballot_address"> <button id="'+this.prefix+'BallotController.setAddress" onclick="'+this.prefix+'BallotController.setAddress()">change Ballot Address</button>'
+		'		  <div class="contract_attributes" id="'+this.prefix+'Ballot_contract_attributes"> attributes:'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Ballot_contract_attribute_chairperson"> chairperson:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'Ballot_chairperson_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Ballot_contract_attribute_proposals"> proposals:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'Ballot_proposals_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Ballot_contract_attribute_ballotName"> ballotName:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'Ballot_ballotName_value"> </span>'
+		'		    </div>'
+		'		'
+		'		<div class="Struct_Mapping" id="'+this.prefix+'Struc_Ballot_contract_attribute_voters">struc mapping  voters:'
+		'				<input class="function_input" type="text" id="'+this.prefix+'Ballot_contract_attribute_voters_input">(address)'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'Ballot_contract_attribute_voters_weight"> weight:'
+		'		      		<span class="Struct_attribute_value" id="'+this.prefix+'Ballot_voters_weight_value"> </span>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'Ballot_contract_attribute_voters_voted"> voted:'
+		'		      		<span class="Struct_attribute_value" id="'+this.prefix+'Ballot_voters_voted_value"> </span>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'Ballot_contract_attribute_voters_delegate"> delegate:'
+		'		      		<span class="Struct_attribute_value" id="'+this.prefix+'Ballot_voters_delegate_value"> </span>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'Ballot_contract_attribute_voters_vote"> vote:'
+		'		      		<span class="Struct_attribute_value" id="'+this.prefix+'Ballot_voters_vote_value"> </span>'
+		'		    	</div>'
+		'		  </div>'
+		'		    <button class="function_btn" id="'+this.prefix+'Ballot_updateAttributes" onclick="'+this.prefix+'BallotController._updateAttributes()">update Ballot attributes</button>'
+		'		  </div>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'Ballot_contract_function_Ballot_Ballot_string_bytes32">'
+		'		<legend>Ballot</legend>'
+		'			  <label class="function_parameter" for="Ballot_Ballot_string_bytes32_name">name</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Ballot_Ballot_string_bytes32_name"'
+		'				  placeholder="name"/>'
+		'			  <label class="function_parameter" for="Ballot_Ballot_string_bytes32_proposalNames">proposalNames</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Ballot_Ballot_string_bytes32_proposalNames"'
+		'				  placeholder="proposalNames"/>'
+		'			<button class="function_btn" id="'+this.prefix+'BallotController.Ballot_Ballot_string_bytes32" onclick="'+this.prefix+'BallotController.Ballot_Ballot_string_bytes32()">Ballot</button>'
+		'			<div class="function_result" id="'+this.prefix+'Ballot_Ballot_string_bytes32_res"></div>'
+		'		  </fieldset>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'Ballot_contract_function_Ballot_giveRightToVote_address">'
+		'		<legend>giveRightToVote</legend>'
+		'			  <label class="function_parameter" for="Ballot_giveRightToVote_address_voter">voter</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Ballot_giveRightToVote_address_voter"'
+		'				  placeholder="voter"/>'
+		'			<button class="function_btn" id="'+this.prefix+'BallotController.Ballot_giveRightToVote_address" onclick="'+this.prefix+'BallotController.Ballot_giveRightToVote_address()">giveRightToVote</button>'
+		'			<div class="function_result" id="'+this.prefix+'Ballot_giveRightToVote_address_res"></div>'
+		'		  </fieldset>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'Ballot_contract_function_Ballot_delegateTo_address">'
+		'		<legend>delegateTo</legend>'
+		'			  <label class="function_parameter" for="Ballot_delegateTo_address_to">to</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Ballot_delegateTo_address_to"'
+		'				  placeholder="to"/>'
+		'			<button class="function_btn" id="'+this.prefix+'BallotController.Ballot_delegateTo_address" onclick="'+this.prefix+'BallotController.Ballot_delegateTo_address()">delegateTo</button>'
+		'			<div class="function_result" id="'+this.prefix+'Ballot_delegateTo_address_res"></div>'
+		'		  </fieldset>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'Ballot_contract_function_Ballot_voteFor_uint">'
+		'		<legend>voteFor</legend>'
+		'			  <label class="function_parameter" for="Ballot_voteFor_uint_proposal">proposal</label>'
+		'				<input class="function_input" type="number" '
+		'		          id="'+this.prefix+'Ballot_voteFor_uint_proposal"'
+		'				  placeholder="proposal"/>'
+		'			<button class="function_btn" id="'+this.prefix+'BallotController.Ballot_voteFor_uint" onclick="'+this.prefix+'BallotController.Ballot_voteFor_uint()">voteFor</button>'
+		'			<div class="function_result" id="'+this.prefix+'Ballot_voteFor_uint_res"></div>'
+		'		  </fieldset>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'Ballot_contract_function_Ballot_winningProposal">'
+		'		<legend>winningProposal</legend>'
+		'			<button class="function_btn" id="'+this.prefix+'BallotController.Ballot_winningProposal" onclick="'+this.prefix+'BallotController.Ballot_winningProposal()">winningProposal</button>'
+		'			<div class="function_result" id="'+this.prefix+'Ballot_winningProposal_res"></div>'
+		'		  </fieldset>'
+		'		'
+		'		</div>'
;
	}

	/**
	* Create the gui for the attributes.
	*/
	this.createAttributesGui=function() {
		return 		'    <div class="contract_attribute" id="'+this.prefix+'Ballot_contract_attribute_chairperson"> chairperson:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'Ballot_chairperson_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Ballot_contract_attribute_proposals"> proposals:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'Ballot_proposals_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Ballot_contract_attribute_ballotName"> ballotName:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'Ballot_ballotName_value"> </span>'
+		'		    </div>'
+		'		'
;
	}

	/**
	* Create the gui.
	*/
	this.createPlainGui=function(){
		return this.createAttributesGui()
				+ this.createBallot_Ballot_string_bytes32Gui
				+ this.createBallot_giveRightToVote_addressGui
				+ this.createBallot_delegateTo_addressGui
				+ this.createBallot_voteFor_uintGui
				+ this.createBallot_winningProposalGui
				;
	}

	/**
	* Create the gui for the function Ballot.
	*/
	this.createBallot_Ballot_string_bytes32Gui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'Ballot_contract_function_Ballot_Ballot_string_bytes32">'
+		'		<legend>Ballot</legend>'
+		'			  <label class="function_parameter" for="Ballot_Ballot_string_bytes32_name">name</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Ballot_Ballot_string_bytes32_name"'
+		'				  placeholder="name"/>'
+		'			  <label class="function_parameter" for="Ballot_Ballot_string_bytes32_proposalNames">proposalNames</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Ballot_Ballot_string_bytes32_proposalNames"'
+		'				  placeholder="proposalNames"/>'
+		'			<button class="function_btn" id="'+this.prefix+'BallotController.Ballot_Ballot_string_bytes32" onclick="'+this.prefix+'BallotController.Ballot_Ballot_string_bytes32()">Ballot</button>'
+		'			<div class="function_result" id="'+this.prefix+'Ballot_Ballot_string_bytes32_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the function giveRightToVote.
	*/
	this.createBallot_giveRightToVote_addressGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'Ballot_contract_function_Ballot_giveRightToVote_address">'
+		'		<legend>giveRightToVote</legend>'
+		'			  <label class="function_parameter" for="Ballot_giveRightToVote_address_voter">voter</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Ballot_giveRightToVote_address_voter"'
+		'				  placeholder="voter"/>'
+		'			<button class="function_btn" id="'+this.prefix+'BallotController.Ballot_giveRightToVote_address" onclick="'+this.prefix+'BallotController.Ballot_giveRightToVote_address()">giveRightToVote</button>'
+		'			<div class="function_result" id="'+this.prefix+'Ballot_giveRightToVote_address_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the function delegateTo.
	*/
	this.createBallot_delegateTo_addressGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'Ballot_contract_function_Ballot_delegateTo_address">'
+		'		<legend>delegateTo</legend>'
+		'			  <label class="function_parameter" for="Ballot_delegateTo_address_to">to</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Ballot_delegateTo_address_to"'
+		'				  placeholder="to"/>'
+		'			<button class="function_btn" id="'+this.prefix+'BallotController.Ballot_delegateTo_address" onclick="'+this.prefix+'BallotController.Ballot_delegateTo_address()">delegateTo</button>'
+		'			<div class="function_result" id="'+this.prefix+'Ballot_delegateTo_address_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the function voteFor.
	*/
	this.createBallot_voteFor_uintGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'Ballot_contract_function_Ballot_voteFor_uint">'
+		'		<legend>voteFor</legend>'
+		'			  <label class="function_parameter" for="Ballot_voteFor_uint_proposal">proposal</label>'
+		'				<input class="function_input" type="number" '
+		'		          id="'+this.prefix+'Ballot_voteFor_uint_proposal"'
+		'				  placeholder="proposal"/>'
+		'			<button class="function_btn" id="'+this.prefix+'BallotController.Ballot_voteFor_uint" onclick="'+this.prefix+'BallotController.Ballot_voteFor_uint()">voteFor</button>'
+		'			<div class="function_result" id="'+this.prefix+'Ballot_voteFor_uint_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the function winningProposal.
	*/
	this.createBallot_winningProposalGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'Ballot_contract_function_Ballot_winningProposal">'
+		'		<legend>winningProposal</legend>'
+		'			<button class="function_btn" id="'+this.prefix+'BallotController.Ballot_winningProposal" onclick="'+this.prefix+'BallotController.Ballot_winningProposal()">winningProposal</button>'
+		'			<div class="function_result" id="'+this.prefix+'Ballot_winningProposal_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the voters struct element.
	*/
	this.createvotersStructGui=function() {
		return 		'<div class="Struct_Mapping" id="'+this.prefix+'Struc_Ballot_contract_attribute_voters">struc mapping  voters:'
+		'				<input class="function_input" type="text" id="'+this.prefix+'Ballot_contract_attribute_voters_input">(address)'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'Ballot_contract_attribute_voters_weight"> weight:'
+		'		      		<span class="Struct_attribute_value" id="'+this.prefix+'Ballot_voters_weight_value"> </span>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'Ballot_contract_attribute_voters_voted"> voted:'
+		'		      		<span class="Struct_attribute_value" id="'+this.prefix+'Ballot_voters_voted_value"> </span>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'Ballot_contract_attribute_voters_delegate"> delegate:'
+		'		      		<span class="Struct_attribute_value" id="'+this.prefix+'Ballot_voters_delegate_value"> </span>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'Ballot_contract_attribute_voters_vote"> vote:'
+		'		      		<span class="Struct_attribute_value" id="'+this.prefix+'Ballot_voters_vote_value"> </span>'
+		'		    	</div>'
+		'		  </div>'
;
	}

	/**
	* Create a div with '@inner' as inner elements.
    * @inner - the inner text
	*/
	this.createSeletonGui=function(inner) {
		return 	'<!-- gui for Ballot_contract -->'
		+	'	<div class="contract" id="'+this.prefix+'Ballot_contract">'
		+ inner
		+'</div>';
	}


	//eventguis
	/**
	* Create the gui for the function Struc Ballot-voters.
	*/
	this.createStruc_Ballot_contract_attribute_votersGui=function(struct) {
		return '<div class="Struct_Mapping" id='+this.prefix+'"Struc_Ballot_contract_attribute_voters">'
    		+'<div class="Struct_attribute" id='+this.prefix+'"Ballot_contract_attribute_voters_weight"> weight:'
      		+'	<span class="Struct_attribute_value" id='+this.prefix+'"Ballot_voters_weight_value">'+struct.weight()+'</span>'
    		+'</div>'
    		+'<div class="Struct_attribute" id='+this.prefix+'"Ballot_contract_attribute_voters_voted"> voted:'
      		+'	<span class="Struct_attribute_value" id='+this.prefix+'"Ballot_voters_voted_value">'+struct.voted()+'</span>'
    		+'</div>'
    		+'<div class="Struct_attribute" id='+this.prefix+'"Ballot_contract_attribute_voters_delegate"> delegate:'
      		+'	<span class="Struct_attribute_value" id='+this.prefix+'"Ballot_voters_delegate_value">'+struct.delegate()+'</span>'
    		+'</div>'
    		+'<div class="Struct_attribute" id='+this.prefix+'"Ballot_contract_attribute_voters_vote"> vote:'
      		+'	<span class="Struct_attribute_value" id='+this.prefix+'"Ballot_voters_vote_value">'+struct.vote()+'</span>'
    		+'</div>'
  		+'</div>';
	}

}//end guifactory

/**
* Class BallotController. 
* The controller wrap's the 'instance' contract and binds all actions to document elements.
* Parameters are taken from elements with self.prefix+'functionName_parameterName'
*
* self.prefix+'BallotController.setAddress' - 
* self.prefix+'Ballot_updateAttributes'     - 
* self.prefix+'Ballot_Ballot_string_bytes32 -
* self.prefix+'Ballot_giveRightToVote_address -
* self.prefix+'Ballot_delegateTo_address -
* self.prefix+'Ballot_voteFor_uint -
* self.prefix+'Ballot_winningProposal -
*/
function BallotController() {

	this.instance = undefined;
	this.prefix='';
	this.contractAddress = undefined; 
	this.eventlogPrefix = '';
	var self = this;

	/**
	* Binds the element with the prefix-id to the corresponding element.
	*/
	this.bindGui=function() {
		console.log('bind gui for:'+self.prefix);
		var btn = document.getElementById(self.prefix+'BallotController.setAddress');
		if(btn!=undefined)		
			btn.onclick = this.setAddress;
		else console.log('addres widget not bound');

		var btn = document.getElementById(self.prefix+'Ballot_updateAttributes');
		if(btn!=undefined)
			btn.onclick = this._updateAttributes;
		else console.log('_updateAttributes widget not bound');
		var btn = document.getElementById(self.prefix+'BallotController.Ballot_Ballot_string_bytes32');
		if(btn!=undefined)
			btn.onclick = this.Ballot_Ballot_string_bytes32;
		else console.log('Ballot_Ballot_string_bytes32 widget not bound');
		var btn = document.getElementById(self.prefix+'BallotController.Ballot_giveRightToVote_address');
		if(btn!=undefined)
			btn.onclick = this.Ballot_giveRightToVote_address;
		else console.log('Ballot_giveRightToVote_address widget not bound');
		var btn = document.getElementById(self.prefix+'BallotController.Ballot_delegateTo_address');
		if(btn!=undefined)
			btn.onclick = this.Ballot_delegateTo_address;
		else console.log('Ballot_delegateTo_address widget not bound');
		var btn = document.getElementById(self.prefix+'BallotController.Ballot_voteFor_uint');
		if(btn!=undefined)
			btn.onclick = this.Ballot_voteFor_uint;
		else console.log('Ballot_voteFor_uint widget not bound');
		var btn = document.getElementById(self.prefix+'BallotController.Ballot_winningProposal');
		if(btn!=undefined)
			btn.onclick = this.Ballot_winningProposal;
		else console.log('Ballot_winningProposal widget not bound');

	}

	/**
	* Set the address.
	*/
	this.setAddress=function() {
		var _address = document.getElementById(self.prefix+'Ballot_address');
		if(_address==null)return;

		self.Ballot_instance = BallotContract.at(_address.value);
		self.contractAddress = _address.value;
		self._updateAttributes();
	}
	
	/**
	* Update attributes.
	*
	* prefix+'Ballot_chairperson_value' - 
	* prefix+'Ballot_proposals_value' - 
	* prefix+'Ballot_ballotName_value' - 
	**/
	this._updateAttributes=function () {
		if(this.instance===null) return;
		// update attributes
		var chairperson_res = self.instance.chairperson();
		var e = document.getElementById(self.prefix+'Ballot_chairperson_value');
		if(chairperson_res!=null && e!=null)
			e.innerText = chairperson_res;
		else console.log(self.prefix+'Ballot_chairperson_value not found');
		var proposals_res = self.instance.proposals();
		var e = document.getElementById(self.prefix+'Ballot_proposals_value');
		if(proposals_res!=null && e!=null)
			e.innerText = proposals_res;
		else console.log(self.prefix+'Ballot_proposals_value not found');
		var ballotName_res = self.instance.ballotName();
		var e = document.getElementById(self.prefix+'Ballot_ballotName_value');
		if(ballotName_res!=null && e!=null)
			e.innerText = ballotName_res;
		else console.log(self.prefix+'Ballot_ballotName_value not found');
		var e = document.getElementById(self.prefix+'Ballot_contract_attribute_voters_input');
		if(e!=null){
			var _key = e.value;
			if(_key!=''){
			var voters_res = self.instance.voters(_key);
			if(voters_res!=null){
			var e1 = document.getElementById(self.prefix+'Ballot_voters_weight_value');
			if(e1!=null)	
				e1.innerText = voters_res[0];
			var e1 = document.getElementById(self.prefix+'Ballot_voters_voted_value');
			if(e1!=null)	
				e1.innerText = voters_res[1];
			var e1 = document.getElementById(self.prefix+'Ballot_voters_delegate_value');
			if(e1!=null)	
				e1.innerText = voters_res[2];
			var e1 = document.getElementById(self.prefix+'Ballot_voters_vote_value');
			if(e1!=null)	
				e1.innerText = voters_res[3];
			}}}
	}

	//call functions
	
	/**
	* Calls the contract function Ballot_Ballot.
	*
	* this.prefix+'Ballot_Ballot_string_bytes32_name' -
	* this.prefix+'Ballot_Ballot_string_bytes32_proposalNames' -
	**/
	this.Ballot_Ballot_string_bytes32=function() {
		var e = document.getElementById(self.prefix+'Ballot_Ballot_string_bytes32_name');
		if(e!=null)
			var param_name = e.value;
		else console.log(self.prefix+'Ballot_Ballot_string_bytes32_name not found');
		var e = document.getElementById(self.prefix+'Ballot_Ballot_string_bytes32_proposalNames');
		if(e!=null)
			var param_proposalNames = e.value;
		else console.log(self.prefix+'Ballot_Ballot_string_bytes32_proposalNames not found');
		var res = self.instance.Ballot(param_name, param_proposalNames);
	}
	
	/**
	* Calls the contract function Ballot_giveRightToVote.
	*
	* this.prefix+'Ballot_giveRightToVote_address_voter' -
	**/
	this.Ballot_giveRightToVote_address=function() {
		var e = document.getElementById(self.prefix+'Ballot_giveRightToVote_address_voter');
		if(e!=null)
			var param_voter = e.value;
		else console.log(self.prefix+'Ballot_giveRightToVote_address_voter not found');
		var res = self.instance.giveRightToVote(param_voter);
	}
	
	/**
	* Calls the contract function Ballot_delegateTo.
	*
	* this.prefix+'Ballot_delegateTo_address_to' -
	**/
	this.Ballot_delegateTo_address=function() {
		var e = document.getElementById(self.prefix+'Ballot_delegateTo_address_to');
		if(e!=null)
			var param_to = e.value;
		else console.log(self.prefix+'Ballot_delegateTo_address_to not found');
		var res = self.instance.delegateTo(param_to);
	}
	
	/**
	* Calls the contract function Ballot_voteFor.
	*
	* this.prefix+'Ballot_voteFor_uint_proposal' -
	**/
	this.Ballot_voteFor_uint=function() {
		var e = document.getElementById(self.prefix+'Ballot_voteFor_uint_proposal');
		if(e!=null)
			var param_proposal = e.value;
		else console.log(self.prefix+'Ballot_voteFor_uint_proposal not found');
		var res = self.instance.voteFor(param_proposal);
	}
	
	/**
	* Calls the contract function Ballot_winningProposal.
	*
	**/
	this.Ballot_winningProposal=function() {
		var res = self.instance.winningProposal();
		var e = document.getElementById(self.prefix+'Ballot_winningProposal_res');
		if(res!=null && e!=null)
			e.innerText = res;
	}
	
//delegated calls
}// end controller	

/**
* class as GlueCode BallotManager,
* uses prefix + 'GuiContainer' as target element.
* It combines a BallotController as 'c' and a BallotGuiFactory as 'g'.
**/
function BallotManager(prefix,contract,containerId) {
	this.prefix = prefix;
	var self = this;
	this.c = new BallotController();
	this.c.prefix=prefix;
	this.c.instance=contract;
	this.c.contractAddress = contract.address;
	this.g = new BallotGuiFactory();
	this.g.prefix = prefix;
	this.containerId = containerId;
	this.eventlogPrefix = '';
	this.guiFunction = null;
	
	/**
	* adds the gui element to the given 'e' element
	**/
	this.addGui = function(e) {
		if(e==null)
			e = document.getElementById(this.containerId);
		if(e==null){
		console.log(this.containerId+' not found or :'+e);
		return;
		}
		var elemDiv = document.createElement('div');
		elemDiv.id= this.prefix +'Ballot_gui';
		e.appendChild(elemDiv);
		if(this.guiFunction==null)
			elemDiv.innerHTML = this.createGui(this.g);
		else elemDiv.innerHTML = this.guiFunction(this.g);
		
		var e = document.getElementById(this.prefix+'Ballot_address');
		if(e!=null)
			e.value = this.c.contractAddress;
		else 
			console.log(this.prefix+'Ballot_address not found');
		this.c.bindGui();
	}	
	
	/**
	* clears the given element 'e'.
	**/
	this.clearGui = function(e){
		if(e==null)
			e = document.getElementById(this.containerId);
		e.innerHTML ='';
	}

	/**
	* Create the gui with the given 'guiFactory'. Places an sceleton arount it.
	* @return the gui txt used as innerHTML
	**/
	this.createGui = function(guifactory){
		var txt ='';
//Start of user code Ballot_create_gui_js
		txt = txt + guifactory.createDefaultGui();
//End of user code
		return guifactory.createSeletonGui(txt);

	}

	/**
	* Create a small gui, only the attributes. Places an sceleton arount it.
	**/	
	this.createSmallGui = function(guifactory){
		var txt ='';
		txt = txt + guifactory.createAttributesGui();
		return guifactory.createSeletonGui(txt);

	}

	/**
	* Update the attributes.
	**/
	this.updateGui = function(){
		this.c._updateAttributes();
	}

	/**
	* Getter for the contract 'Ballot' instance.
	**/
	this.getContract = function(){
		return this.c.instance;
	}

	/**
	* Watch for the contract events.
	* The events are stored in an element with the id this.eventlogPrefix+'eventLog'.
	**/
	this.watchEvents=function(){
	}

}// end of manager

/**
* Manages a list of BallotManager uses the guid id to place the gui which is also the eventlogPrefix
*/
function BallotGuiMananger(guiId){
	this.prefix = guiId;
	this.managers=new Array();	//[];		
	this.guiFunction = null;
	this.managerMap = {};
	
	/**
	* Add a contract to this manager.
	* @contract the web3 contract instance
	*/
	this.addManager = function(contract) {
		var m = new BallotManager(contract.address,contract,this.prefix);
		m.eventlogPrefix = this.prefix;
		m.watchEvents();
		if(this.guiFunction!=null)
			m.guiFunction = this.guiFunction;
		this.managers.push(m);
		this.managerMap[contract.address] = m;
	}

	/**
	 * Changes the gui function for all managers.
	 */
	this.changeGuiFunction =  function(guiFunction){
		for (i in this.managers) {
			var manager = this.managers[i] ;
			manager.guiFunction = guiFunction;
		}
	}
	
	/**
	* Clears the element or the element with id 'prefix'.
	* @e an element
	*/
	this.clearGui = function(e){
		if(e==null)
			e = document.getElementById(this.prefix);
		if(e!==undefined)
			e.innerHTML ='';
	}
		
	/**
	* Displays all guis of the managed contracts.
	* @e an element
	*/
	this.displayGui = function(e){
		if(e==null)
			e = document.getElementById(this.prefix);
		if(e==undefined) return;
		for (i in this.managers) {
			var manager = this.managers[i] ;
			var elemDiv = document.createElement('div');
			elemDiv.id= manager.prefix + 'GuiContainer';//'Ballot_gui';
			e.appendChild(elemDiv);
			if(this.guiFunction==null)
				elemDiv.innerHTML = manager.createGui(manager.g);
			else elemDiv.innerHTML = this.guiFunction(manager.g);
			manager.c.bindGui();
		}
	}
	/**
	* Displays a simple gui.
	*/
	this.displaySimpleGui = function(){
		for (i in this.managers) {
			var manager = this.managers[i] ;
			manager.addGui(null);
		}
	}
	/**
	* Update the gui.
	*/
	this.updateGui = function(){
		for (i in this.managers) {
			this.managers[i].updateGui();
		}
//		console.log('update');
	}
}// end of gui mananger

/**
* Deploys the contract.
* Each constructor is available.
**/
function BallotDeployment(guiId){
	this.prefix = guiId;
//Start of user code Ballot_deployment_attributes_js
//TODO: implement
//End of user code

	
	/**
	* The default deployer function.
	**/
	this.deployDefault = function(){
		//Start of user code Ballot_deployDefault
		//TODO: implement
		//End of user code
	}

//Start of user code Ballot_deployment_js
//TODO: implement
//End of user code
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

/**
* Gui factory BasicBallot
**/
function BasicBallotGuiFactory() {
	this.prefix='';
	
	/**
	* Places the default gui to 'e' or an element with id='BasicBallot_gui'
	*/
	this.placeDefaultGui=function(e) {
		if(e==null)
			e = document.getElementById(this.prefix+'BasicBallot_gui');
		if(e!=null)
			e.innerHTML = this.createDefaultGui();
		else
			console.log(this.prefix+'BasicBallot_gui not found');
	}

	/**
	* The default generated gui with all actions and attributes.
	*/
	this.createDefaultGui=function() {
		return 		'<!-- gui for BasicBallot_contract -->'
+		'		<div class="contract" id="'+this.prefix+'BasicBallot_contract">'
+		'		BasicBallot:'
+		'		  <input type="text" id="'+this.prefix+'BasicBallot_address"> <button id="'+this.prefix+'BasicBallotController.setAddress" onclick="'+this.prefix+'BasicBallotController.setAddress()">change BasicBallot Address</button>'
+		'		  <div class="contract_attributes" id="'+this.prefix+'BasicBallot_contract_attributes"> attributes:'
+		'		    <div class="contract_attribute" id="'+this.prefix+'BasicBallot_contract_attribute_accessregistry"> accessregistry:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'BasicBallot_accessregistry_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'BasicBallot_contract_attribute_ballotStart"> ballotStart:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'BasicBallot_ballotStart_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'BasicBallot_contract_attribute_ballotEnd"> ballotEnd:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'BasicBallot_ballotEnd_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'BasicBallot_contract_attribute_ballotState"> ballotState:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'BasicBallot_ballotState_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'BasicBallot_contract_attribute_proposalCount"> proposalCount:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'BasicBallot_proposalCount_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'BasicBallot_contract_attribute_ballotName"> ballotName:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'BasicBallot_ballotName_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'BasicBallot_contract_attribute_ballotHash"> ballotHash:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'BasicBallot_ballotHash_value"> </span>'
+		'		    </div>'
+		'		'
+		'		<div class="Struct_Mapping" id="'+this.prefix+'Struc_BasicBallot_contract_attribute_proposals">struc mapping  proposals:'
+		'				<input class="function_input" type="number" id="'+this.prefix+'BasicBallot_contract_attribute_proposals_input">(uint)'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'BasicBallot_contract_attribute_proposals_name"> name:'
+		'		      		<span class="Struct_attribute_value" id="'+this.prefix+'BasicBallot_proposals_name_value"> </span>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'BasicBallot_contract_attribute_proposals_hash"> hash:'
+		'		      		<span class="Struct_attribute_value" id="'+this.prefix+'BasicBallot_proposals_hash_value"> </span>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'BasicBallot_contract_attribute_proposals_url"> url:'
+		'		      		<span class="Struct_attribute_value" id="'+this.prefix+'BasicBallot_proposals_url_value"> </span>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'BasicBallot_contract_attribute_proposals_member"> member:'
+		'		      		<span class="Struct_attribute_value" id="'+this.prefix+'BasicBallot_proposals_member_value"> </span>'
+		'		    	</div>'
+		'		  </div>'
+		'		    <button class="function_btn" id="'+this.prefix+'BasicBallot_updateAttributes" onclick="'+this.prefix+'BasicBallotController._updateAttributes()">update BasicBallot attributes</button>'
+		'		  </div>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'BasicBallot_contract_function_BasicBallot_addProposal_string_string_string_address">'
+		'		<legend>addProposal</legend>'
+		'			  <label class="function_parameter" for="BasicBallot_addProposal_string_string_string_address__name">_name</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'BasicBallot_addProposal_string_string_string_address__name"'
+		'				  placeholder="_name"/>'
+		'			  <label class="function_parameter" for="BasicBallot_addProposal_string_string_string_address__hash">_hash</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'BasicBallot_addProposal_string_string_string_address__hash"'
+		'				  placeholder="_hash"/>'
+		'			  <label class="function_parameter" for="BasicBallot_addProposal_string_string_string_address__url">_url</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'BasicBallot_addProposal_string_string_string_address__url"'
+		'				  placeholder="_url"/>'
+		'			  <label class="function_parameter" for="BasicBallot_addProposal_string_string_string_address__member">_member</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'BasicBallot_addProposal_string_string_string_address__member"'
+		'				  placeholder="_member"/>'
+		'			<button class="function_btn" id="'+this.prefix+'BasicBallotController.BasicBallot_addProposal_string_string_string_address" onclick="'+this.prefix+'BasicBallotController.BasicBallot_addProposal_string_string_string_address()">addProposal</button>'
+		'			<div class="function_result" id="'+this.prefix+'BasicBallot_addProposal_string_string_string_address_res"></div>'
+		'		  </fieldset>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'BasicBallot_contract_function_BasicBallot_castVote_uint">'
+		'		<legend>castVote</legend>'
+		'			  <label class="function_parameter" for="BasicBallot_castVote_uint__voteFor">_voteFor</label>'
+		'				<input class="function_input" type="number" '
+		'		          id="'+this.prefix+'BasicBallot_castVote_uint__voteFor"'
+		'				  placeholder="_voteFor"/>'
+		'			<button class="function_btn" id="'+this.prefix+'BasicBallotController.BasicBallot_castVote_uint" onclick="'+this.prefix+'BasicBallotController.BasicBallot_castVote_uint()">castVote</button>'
+		'			<div class="function_result" id="'+this.prefix+'BasicBallot_castVote_uint_res"></div>'
+		'		  </fieldset>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'BasicBallot_contract_function_BasicBallot_startBallot">'
+		'		<legend>startBallot</legend>'
+		'			<button class="function_btn" id="'+this.prefix+'BasicBallotController.BasicBallot_startBallot" onclick="'+this.prefix+'BasicBallotController.BasicBallot_startBallot()">startBallot</button>'
+		'			<div class="function_result" id="'+this.prefix+'BasicBallot_startBallot_res"></div>'
+		'		  </fieldset>'
+		'		'
+		'		</div>'
;
	}

	/**
	* Create the gui for the attributes.
	*/
	this.createAttributesGui=function() {
		return 		'    <div class="contract_attribute" id="'+this.prefix+'BasicBallot_contract_attribute_accessregistry"> accessregistry:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'BasicBallot_accessregistry_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'BasicBallot_contract_attribute_ballotStart"> ballotStart:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'BasicBallot_ballotStart_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'BasicBallot_contract_attribute_ballotEnd"> ballotEnd:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'BasicBallot_ballotEnd_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'BasicBallot_contract_attribute_ballotState"> ballotState:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'BasicBallot_ballotState_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'BasicBallot_contract_attribute_proposalCount"> proposalCount:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'BasicBallot_proposalCount_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'BasicBallot_contract_attribute_ballotName"> ballotName:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'BasicBallot_ballotName_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'BasicBallot_contract_attribute_ballotHash"> ballotHash:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'BasicBallot_ballotHash_value"> </span>'
+		'		    </div>'
+		'		'
;
	}

	/**
	* Create the gui.
	*/
	this.createPlainGui=function(){
		return this.createAttributesGui()
				+ this.createBasicBallot_addProposal_string_string_string_addressGui
				+ this.createBasicBallot_castVote_uintGui
				+ this.createBasicBallot_startBallotGui
				;
	}

	/**
	* Create the gui for the function addProposal.
	*/
	this.createBasicBallot_addProposal_string_string_string_addressGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'BasicBallot_contract_function_BasicBallot_addProposal_string_string_string_address">'
+		'		<legend>addProposal</legend>'
+		'			  <label class="function_parameter" for="BasicBallot_addProposal_string_string_string_address__name">_name</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'BasicBallot_addProposal_string_string_string_address__name"'
+		'				  placeholder="_name"/>'
+		'			  <label class="function_parameter" for="BasicBallot_addProposal_string_string_string_address__hash">_hash</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'BasicBallot_addProposal_string_string_string_address__hash"'
+		'				  placeholder="_hash"/>'
+		'			  <label class="function_parameter" for="BasicBallot_addProposal_string_string_string_address__url">_url</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'BasicBallot_addProposal_string_string_string_address__url"'
+		'				  placeholder="_url"/>'
+		'			  <label class="function_parameter" for="BasicBallot_addProposal_string_string_string_address__member">_member</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'BasicBallot_addProposal_string_string_string_address__member"'
+		'				  placeholder="_member"/>'
+		'			<button class="function_btn" id="'+this.prefix+'BasicBallotController.BasicBallot_addProposal_string_string_string_address" onclick="'+this.prefix+'BasicBallotController.BasicBallot_addProposal_string_string_string_address()">addProposal</button>'
+		'			<div class="function_result" id="'+this.prefix+'BasicBallot_addProposal_string_string_string_address_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the function castVote.
	*/
	this.createBasicBallot_castVote_uintGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'BasicBallot_contract_function_BasicBallot_castVote_uint">'
+		'		<legend>castVote</legend>'
+		'			  <label class="function_parameter" for="BasicBallot_castVote_uint__voteFor">_voteFor</label>'
+		'				<input class="function_input" type="number" '
+		'		          id="'+this.prefix+'BasicBallot_castVote_uint__voteFor"'
+		'				  placeholder="_voteFor"/>'
+		'			<button class="function_btn" id="'+this.prefix+'BasicBallotController.BasicBallot_castVote_uint" onclick="'+this.prefix+'BasicBallotController.BasicBallot_castVote_uint()">castVote</button>'
+		'			<div class="function_result" id="'+this.prefix+'BasicBallot_castVote_uint_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the function startBallot.
	*/
	this.createBasicBallot_startBallotGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'BasicBallot_contract_function_BasicBallot_startBallot">'
+		'		<legend>startBallot</legend>'
+		'			<button class="function_btn" id="'+this.prefix+'BasicBallotController.BasicBallot_startBallot" onclick="'+this.prefix+'BasicBallotController.BasicBallot_startBallot()">startBallot</button>'
+		'			<div class="function_result" id="'+this.prefix+'BasicBallot_startBallot_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the proposals struct element.
	*/
	this.createproposalsStructGui=function() {
		return 		'<div class="Struct_Mapping" id="'+this.prefix+'Struc_BasicBallot_contract_attribute_proposals">struc mapping  proposals:'
+		'				<input class="function_input" type="number" id="'+this.prefix+'BasicBallot_contract_attribute_proposals_input">(uint)'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'BasicBallot_contract_attribute_proposals_name"> name:'
+		'		      		<span class="Struct_attribute_value" id="'+this.prefix+'BasicBallot_proposals_name_value"> </span>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'BasicBallot_contract_attribute_proposals_hash"> hash:'
+		'		      		<span class="Struct_attribute_value" id="'+this.prefix+'BasicBallot_proposals_hash_value"> </span>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'BasicBallot_contract_attribute_proposals_url"> url:'
+		'		      		<span class="Struct_attribute_value" id="'+this.prefix+'BasicBallot_proposals_url_value"> </span>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'BasicBallot_contract_attribute_proposals_member"> member:'
+		'		      		<span class="Struct_attribute_value" id="'+this.prefix+'BasicBallot_proposals_member_value"> </span>'
+		'		    	</div>'
+		'		  </div>'
;
	}

	/**
	* Create a div with '@inner' as inner elements.
    * @inner - the inner text
	*/
	this.createSeletonGui=function(inner) {
		return 	'<!-- gui for BasicBallot_contract -->'
		+	'	<div class="contract" id="'+this.prefix+'BasicBallot_contract">'
		+ inner
		+'</div>';
	}


	//eventguis
	/**
	* Create the gui for the function Struc BasicBallot-proposals.
	*/
	this.createStruc_BasicBallot_contract_attribute_proposalsGui=function(struct) {
		return '<div class="Struct_Mapping" id='+this.prefix+'"Struc_BasicBallot_contract_attribute_proposals">'
    		+'<div class="Struct_attribute" id='+this.prefix+'"BasicBallot_contract_attribute_proposals_name"> name:'
      		+'	<span class="Struct_attribute_value" id='+this.prefix+'"BasicBallot_proposals_name_value">'+struct.name()+'</span>'
    		+'</div>'
    		+'<div class="Struct_attribute" id='+this.prefix+'"BasicBallot_contract_attribute_proposals_hash"> hash:'
      		+'	<span class="Struct_attribute_value" id='+this.prefix+'"BasicBallot_proposals_hash_value">'+struct.hash()+'</span>'
    		+'</div>'
    		+'<div class="Struct_attribute" id='+this.prefix+'"BasicBallot_contract_attribute_proposals_url"> url:'
      		+'	<span class="Struct_attribute_value" id='+this.prefix+'"BasicBallot_proposals_url_value">'+struct.url()+'</span>'
    		+'</div>'
    		+'<div class="Struct_attribute" id='+this.prefix+'"BasicBallot_contract_attribute_proposals_member"> member:'
      		+'	<span class="Struct_attribute_value" id='+this.prefix+'"BasicBallot_proposals_member_value">'+struct.member()+'</span>'
    		+'</div>'
  		+'</div>';
	}

}//end guifactory

/**
* Class BasicBallotController. 
* The controller wrap's the 'instance' contract and binds all actions to document elements.
* Parameters are taken from elements with self.prefix+'functionName_parameterName'
*
* self.prefix+'BasicBallotController.setAddress' - 
* self.prefix+'BasicBallot_updateAttributes'     - 
* self.prefix+'BasicBallot_addProposal_string_string_string_address -
* self.prefix+'BasicBallot_castVote_uint -
* self.prefix+'BasicBallot_startBallot -
*/
function BasicBallotController() {

	this.instance = undefined;
	this.prefix='';
	this.contractAddress = undefined; 
	this.eventlogPrefix = '';
	var self = this;

	/**
	* Binds the element with the prefix-id to the corresponding element.
	*/
	this.bindGui=function() {
		console.log('bind gui for:'+self.prefix);
		var btn = document.getElementById(self.prefix+'BasicBallotController.setAddress');
		if(btn!=undefined)		
			btn.onclick = this.setAddress;
		else console.log('addres widget not bound');

		var btn = document.getElementById(self.prefix+'BasicBallot_updateAttributes');
		if(btn!=undefined)
			btn.onclick = this._updateAttributes;
		else console.log('_updateAttributes widget not bound');
		var btn = document.getElementById(self.prefix+'BasicBallotController.BasicBallot_addProposal_string_string_string_address');
		if(btn!=undefined)
			btn.onclick = this.BasicBallot_addProposal_string_string_string_address;
		else console.log('BasicBallot_addProposal_string_string_string_address widget not bound');
		var btn = document.getElementById(self.prefix+'BasicBallotController.BasicBallot_castVote_uint');
		if(btn!=undefined)
			btn.onclick = this.BasicBallot_castVote_uint;
		else console.log('BasicBallot_castVote_uint widget not bound');
		var btn = document.getElementById(self.prefix+'BasicBallotController.BasicBallot_startBallot');
		if(btn!=undefined)
			btn.onclick = this.BasicBallot_startBallot;
		else console.log('BasicBallot_startBallot widget not bound');

	}

	/**
	* Set the address.
	*/
	this.setAddress=function() {
		var _address = document.getElementById(self.prefix+'BasicBallot_address');
		if(_address==null)return;

		self.BasicBallot_instance = BasicBallotContract.at(_address.value);
		self.contractAddress = _address.value;
		self._updateAttributes();
	}
	
	/**
	* Update attributes.
	*
	* prefix+'BasicBallot_accessregistry_value' - 
	* prefix+'BasicBallot_ballotStart_value' - 
	* prefix+'BasicBallot_ballotEnd_value' - 
	* prefix+'BasicBallot_ballotState_value' - 
	* prefix+'BasicBallot_proposalCount_value' - 
	* prefix+'BasicBallot_ballotName_value' - 
	* prefix+'BasicBallot_ballotHash_value' - 
	**/
	this._updateAttributes=function () {
		if(this.instance===null) return;
		// update attributes
		var accessregistry_res = self.instance.accessregistry();
		var e = document.getElementById(self.prefix+'BasicBallot_accessregistry_value');
		if(accessregistry_res!=null && e!=null)
			e.innerText = accessregistry_res;
		else console.log(self.prefix+'BasicBallot_accessregistry_value not found');
		var ballotStart_res = self.instance.ballotStart();
		var e = document.getElementById(self.prefix+'BasicBallot_ballotStart_value');
		if(ballotStart_res!=null && e!=null)
			e.innerText = ballotStart_res;
		else console.log(self.prefix+'BasicBallot_ballotStart_value not found');
		var ballotEnd_res = self.instance.ballotEnd();
		var e = document.getElementById(self.prefix+'BasicBallot_ballotEnd_value');
		if(ballotEnd_res!=null && e!=null)
			e.innerText = ballotEnd_res;
		else console.log(self.prefix+'BasicBallot_ballotEnd_value not found');
		var ballotState_res = self.instance.ballotState();
		var e = document.getElementById(self.prefix+'BasicBallot_ballotState_value');
		if(ballotState_res!=null && e!=null)
			e.innerText = ballotState_res;
		else console.log(self.prefix+'BasicBallot_ballotState_value not found');
		var proposalCount_res = self.instance.proposalCount();
		var e = document.getElementById(self.prefix+'BasicBallot_proposalCount_value');
		if(proposalCount_res!=null && e!=null)
			e.innerText = proposalCount_res;
		else console.log(self.prefix+'BasicBallot_proposalCount_value not found');
		var ballotName_res = self.instance.ballotName();
		var e = document.getElementById(self.prefix+'BasicBallot_ballotName_value');
		if(ballotName_res!=null && e!=null)
			e.innerText = ballotName_res;
		else console.log(self.prefix+'BasicBallot_ballotName_value not found');
		var ballotHash_res = self.instance.ballotHash();
		var e = document.getElementById(self.prefix+'BasicBallot_ballotHash_value');
		if(ballotHash_res!=null && e!=null)
			e.innerText = ballotHash_res;
		else console.log(self.prefix+'BasicBallot_ballotHash_value not found');
		var e = document.getElementById(self.prefix+'BasicBallot_contract_attribute_proposals_input');
		if(e!=null){
			var _key = e.value;
			if(_key!=''){
			var proposals_res = self.instance.proposals(_key);
			if(proposals_res!=null){
			var e1 = document.getElementById(self.prefix+'BasicBallot_proposals_name_value');
			if(e1!=null)	
				e1.innerText = proposals_res[0];
			var e1 = document.getElementById(self.prefix+'BasicBallot_proposals_hash_value');
			if(e1!=null)	
				e1.innerText = proposals_res[1];
			var e1 = document.getElementById(self.prefix+'BasicBallot_proposals_url_value');
			if(e1!=null)	
				e1.innerText = proposals_res[2];
			var e1 = document.getElementById(self.prefix+'BasicBallot_proposals_member_value');
			if(e1!=null)	
				e1.innerText = proposals_res[3];
			}}}
	}

	//call functions
	
	/**
	* Calls the contract function BasicBallot_addProposal.
	*
	* this.prefix+'BasicBallot_addProposal_string_string_string_address__name' -
	* this.prefix+'BasicBallot_addProposal_string_string_string_address__hash' -
	* this.prefix+'BasicBallot_addProposal_string_string_string_address__url' -
	* this.prefix+'BasicBallot_addProposal_string_string_string_address__member' -
	**/
	this.BasicBallot_addProposal_string_string_string_address=function() {
		var e = document.getElementById(self.prefix+'BasicBallot_addProposal_string_string_string_address__name');
		if(e!=null)
			var param__name = e.value;
		else console.log(self.prefix+'BasicBallot_addProposal_string_string_string_address__name not found');
		var e = document.getElementById(self.prefix+'BasicBallot_addProposal_string_string_string_address__hash');
		if(e!=null)
			var param__hash = e.value;
		else console.log(self.prefix+'BasicBallot_addProposal_string_string_string_address__hash not found');
		var e = document.getElementById(self.prefix+'BasicBallot_addProposal_string_string_string_address__url');
		if(e!=null)
			var param__url = e.value;
		else console.log(self.prefix+'BasicBallot_addProposal_string_string_string_address__url not found');
		var e = document.getElementById(self.prefix+'BasicBallot_addProposal_string_string_string_address__member');
		if(e!=null)
			var param__member = e.value;
		else console.log(self.prefix+'BasicBallot_addProposal_string_string_string_address__member not found');
		var res = self.instance.addProposal(param__name, param__hash, param__url, param__member);
	}
	
	/**
	* Calls the contract function BasicBallot_castVote.
	*
	* this.prefix+'BasicBallot_castVote_uint__voteFor' -
	**/
	this.BasicBallot_castVote_uint=function() {
		var e = document.getElementById(self.prefix+'BasicBallot_castVote_uint__voteFor');
		if(e!=null)
			var param__voteFor = e.value;
		else console.log(self.prefix+'BasicBallot_castVote_uint__voteFor not found');
		var res = self.instance.castVote(param__voteFor);
	}
	
	/**
	* Calls the contract function BasicBallot_startBallot.
	*
	**/
	this.BasicBallot_startBallot=function() {
		var res = self.instance.startBallot();
	}
	
//delegated calls
}// end controller	

/**
* class as GlueCode BasicBallotManager,
* uses prefix + 'GuiContainer' as target element.
* It combines a BasicBallotController as 'c' and a BasicBallotGuiFactory as 'g'.
**/
function BasicBallotManager(prefix,contract,containerId) {
	this.prefix = prefix;
	var self = this;
	this.c = new BasicBallotController();
	this.c.prefix=prefix;
	this.c.instance=contract;
	this.c.contractAddress = contract.address;
	this.g = new BasicBallotGuiFactory();
	this.g.prefix = prefix;
	this.containerId = containerId;
	this.eventlogPrefix = '';
	this.guiFunction = null;
	
	/**
	* adds the gui element to the given 'e' element
	**/
	this.addGui = function(e) {
		if(e==null)
			e = document.getElementById(this.containerId);
		if(e==null){
		console.log(this.containerId+' not found or :'+e);
		return;
		}
		var elemDiv = document.createElement('div');
		elemDiv.id= this.prefix +'BasicBallot_gui';
		e.appendChild(elemDiv);
		if(this.guiFunction==null)
			elemDiv.innerHTML = this.createGui(this.g);
		else elemDiv.innerHTML = this.guiFunction(this.g);
		
		var e = document.getElementById(this.prefix+'BasicBallot_address');
		if(e!=null)
			e.value = this.c.contractAddress;
		else 
			console.log(this.prefix+'BasicBallot_address not found');
		this.c.bindGui();
	}	
	
	/**
	* clears the given element 'e'.
	**/
	this.clearGui = function(e){
		if(e==null)
			e = document.getElementById(this.containerId);
		e.innerHTML ='';
	}

	/**
	* Create the gui with the given 'guiFactory'. Places an sceleton arount it.
	* @return the gui txt used as innerHTML
	**/
	this.createGui = function(guifactory){
		var txt ='';
//Start of user code BasicBallot_create_gui_js
		txt = txt + guifactory.createDefaultGui();
//End of user code
		return guifactory.createSeletonGui(txt);

	}

	/**
	* Create a small gui, only the attributes. Places an sceleton arount it.
	**/	
	this.createSmallGui = function(guifactory){
		var txt ='';
		txt = txt + guifactory.createAttributesGui();
		return guifactory.createSeletonGui(txt);

	}

	/**
	* Update the attributes.
	**/
	this.updateGui = function(){
		this.c._updateAttributes();
	}

	/**
	* Getter for the contract 'BasicBallot' instance.
	**/
	this.getContract = function(){
		return this.c.instance;
	}

	/**
	* Watch for the contract events.
	* The events are stored in an element with the id this.eventlogPrefix+'eventLog'.
	**/
	this.watchEvents=function(){
	}

}// end of manager

/**
* Manages a list of BasicBallotManager uses the guid id to place the gui which is also the eventlogPrefix
*/
function BasicBallotGuiMananger(guiId){
	this.prefix = guiId;
	this.managers=new Array();	//[];		
	this.guiFunction = null;
	this.managerMap = {};
	
	/**
	* Add a contract to this manager.
	* @contract the web3 contract instance
	*/
	this.addManager = function(contract) {
		var m = new BasicBallotManager(contract.address,contract,this.prefix);
		m.eventlogPrefix = this.prefix;
		m.watchEvents();
		if(this.guiFunction!=null)
			m.guiFunction = this.guiFunction;
		this.managers.push(m);
		this.managerMap[contract.address] = m;
	}

	/**
	 * Changes the gui function for all managers.
	 */
	this.changeGuiFunction =  function(guiFunction){
		for (i in this.managers) {
			var manager = this.managers[i] ;
			manager.guiFunction = guiFunction;
		}
	}
	
	/**
	* Clears the element or the element with id 'prefix'.
	* @e an element
	*/
	this.clearGui = function(e){
		if(e==null)
			e = document.getElementById(this.prefix);
		if(e!==undefined)
			e.innerHTML ='';
	}
		
	/**
	* Displays all guis of the managed contracts.
	* @e an element
	*/
	this.displayGui = function(e){
		if(e==null)
			e = document.getElementById(this.prefix);
		if(e==undefined) return;
		for (i in this.managers) {
			var manager = this.managers[i] ;
			var elemDiv = document.createElement('div');
			elemDiv.id= manager.prefix + 'GuiContainer';//'BasicBallot_gui';
			e.appendChild(elemDiv);
			if(this.guiFunction==null)
				elemDiv.innerHTML = manager.createGui(manager.g);
			else elemDiv.innerHTML = this.guiFunction(manager.g);
			manager.c.bindGui();
		}
	}
	/**
	* Displays a simple gui.
	*/
	this.displaySimpleGui = function(){
		for (i in this.managers) {
			var manager = this.managers[i] ;
			manager.addGui(null);
		}
	}
	/**
	* Update the gui.
	*/
	this.updateGui = function(){
		for (i in this.managers) {
			this.managers[i].updateGui();
		}
//		console.log('update');
	}
}// end of gui mananger

/**
* Deploys the contract.
* Each constructor is available.
**/
function BasicBallotDeployment(guiId){
	this.prefix = guiId;
//Start of user code BasicBallot_deployment_attributes_js
//TODO: implement
//End of user code


	/**
	* Construct BasicBallot.
	**/
	this.deployBasicBallot_BasicBallot_address_string_string = function(account, code, providedGas, _registry, _name, _hash){
//		var c = BasicBallot.new( _registry, _name, _hash,{
//			from: account,
//			data: code,
//			gas:  providedGas
//		});
		return c;
	}
	
	/**
	* The default deployer function.
	**/
	this.deployDefault = function(){
		//Start of user code BasicBallot_deployDefault
		//TODO: implement
		//End of user code
	}

//Start of user code BasicBallot_deployment_js
//TODO: implement
//End of user code
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

/**
* Gui factory PublicBallot
**/
function PublicBallotGuiFactory() {
	this.prefix='';
	
	/**
	* Places the default gui to 'e' or an element with id='PublicBallot_gui'
	*/
	this.placeDefaultGui=function(e) {
		if(e==null)
			e = document.getElementById(this.prefix+'PublicBallot_gui');
		if(e!=null)
			e.innerHTML = this.createDefaultGui();
		else
			console.log(this.prefix+'PublicBallot_gui not found');
	}

	/**
	* The default generated gui with all actions and attributes.
	*/
	this.createDefaultGui=function() {
		return 		'<!-- gui for PublicBallot_contract -->'
+		'		<div class="contract" id="'+this.prefix+'PublicBallot_contract">'
+		'		PublicBallot:'
+		'		  <input type="text" id="'+this.prefix+'PublicBallot_address"> <button id="'+this.prefix+'PublicBallotController.setAddress" onclick="'+this.prefix+'PublicBallotController.setAddress()">change PublicBallot Address</button>'
+		'		  <div class="contract_attributes" id="'+this.prefix+'PublicBallot_contract_attributes"> attributes:'
+		'		    <div class="contract_attribute" id="'+this.prefix+'PublicBallot_contract_attribute_accessregistry"> accessregistry:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'PublicBallot_accessregistry_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'PublicBallot_contract_attribute_ballotStart"> ballotStart:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'PublicBallot_ballotStart_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'PublicBallot_contract_attribute_ballotEnd"> ballotEnd:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'PublicBallot_ballotEnd_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'PublicBallot_contract_attribute_ballotState"> ballotState:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'PublicBallot_ballotState_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'PublicBallot_contract_attribute_proposalCount"> proposalCount:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'PublicBallot_proposalCount_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'PublicBallot_contract_attribute_ballotName"> ballotName:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'PublicBallot_ballotName_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'PublicBallot_contract_attribute_ballotHash"> ballotHash:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'PublicBallot_ballotHash_value"> </span>'
+		'		    </div>'
+		'		'
+		'		<div class="Struct_Mapping" id="'+this.prefix+'Struc_PublicBallot_contract_attribute_proposals">struc mapping  proposals:'
+		'				<input class="function_input" type="number" id="'+this.prefix+'PublicBallot_contract_attribute_proposals_input">(uint)'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'PublicBallot_contract_attribute_proposals_name"> name:'
+		'		      		<span class="Struct_attribute_value" id="'+this.prefix+'PublicBallot_proposals_name_value"> </span>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'PublicBallot_contract_attribute_proposals_hash"> hash:'
+		'		      		<span class="Struct_attribute_value" id="'+this.prefix+'PublicBallot_proposals_hash_value"> </span>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'PublicBallot_contract_attribute_proposals_url"> url:'
+		'		      		<span class="Struct_attribute_value" id="'+this.prefix+'PublicBallot_proposals_url_value"> </span>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'PublicBallot_contract_attribute_proposals_member"> member:'
+		'		      		<span class="Struct_attribute_value" id="'+this.prefix+'PublicBallot_proposals_member_value"> </span>'
+		'		    	</div>'
+		'		  </div>'
+		'		    <button class="function_btn" id="'+this.prefix+'PublicBallot_updateAttributes" onclick="'+this.prefix+'PublicBallotController._updateAttributes()">update PublicBallot attributes</button>'
+		'		  </div>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'PublicBallot_contract_function_BasicBallot_addProposal_string_string_string_address">'
+		'		<legend>addProposal</legend>'
+		'			  <label class="function_parameter" for="BasicBallot_addProposal_string_string_string_address__name">_name</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'BasicBallot_addProposal_string_string_string_address__name"'
+		'				  placeholder="_name"/>'
+		'			  <label class="function_parameter" for="BasicBallot_addProposal_string_string_string_address__hash">_hash</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'BasicBallot_addProposal_string_string_string_address__hash"'
+		'				  placeholder="_hash"/>'
+		'			  <label class="function_parameter" for="BasicBallot_addProposal_string_string_string_address__url">_url</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'BasicBallot_addProposal_string_string_string_address__url"'
+		'				  placeholder="_url"/>'
+		'			  <label class="function_parameter" for="BasicBallot_addProposal_string_string_string_address__member">_member</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'BasicBallot_addProposal_string_string_string_address__member"'
+		'				  placeholder="_member"/>'
+		'			<button class="function_btn" id="'+this.prefix+'PublicBallotController.BasicBallot_addProposal_string_string_string_address" onclick="'+this.prefix+'PublicBallotController.BasicBallot_addProposal_string_string_string_address()">addProposal</button>'
+		'			<div class="function_result" id="'+this.prefix+'BasicBallot_addProposal_string_string_string_address_res"></div>'
+		'		  </fieldset>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'PublicBallot_contract_function_BasicBallot_castVote_uint">'
+		'		<legend>castVote</legend>'
+		'			  <label class="function_parameter" for="BasicBallot_castVote_uint__voteFor">_voteFor</label>'
+		'				<input class="function_input" type="number" '
+		'		          id="'+this.prefix+'BasicBallot_castVote_uint__voteFor"'
+		'				  placeholder="_voteFor"/>'
+		'			<button class="function_btn" id="'+this.prefix+'PublicBallotController.BasicBallot_castVote_uint" onclick="'+this.prefix+'PublicBallotController.BasicBallot_castVote_uint()">castVote</button>'
+		'			<div class="function_result" id="'+this.prefix+'BasicBallot_castVote_uint_res"></div>'
+		'		  </fieldset>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'PublicBallot_contract_function_BasicBallot_startBallot">'
+		'		<legend>startBallot</legend>'
+		'			<button class="function_btn" id="'+this.prefix+'PublicBallotController.BasicBallot_startBallot" onclick="'+this.prefix+'PublicBallotController.BasicBallot_startBallot()">startBallot</button>'
+		'			<div class="function_result" id="'+this.prefix+'BasicBallot_startBallot_res"></div>'
+		'		  </fieldset>'
+		'		'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'PublicBallot_contract_function_BasicBallot_castVote_uint">'
+		'		<legend>castVote</legend>'
+		'			  <label class="function_parameter" for="BasicBallot_castVote_uint__voteFor">_voteFor</label>'
+		'				<input class="function_input" type="number" '
+		'		          id="'+this.prefix+'BasicBallot_castVote_uint__voteFor"'
+		'				  placeholder="_voteFor"/>'
+		'			<button class="function_btn" id="'+this.prefix+'PublicBallotController.BasicBallot_castVote_uint" onclick="'+this.prefix+'PublicBallotController.BasicBallot_castVote_uint()">castVote</button>'
+		'			<div class="function_result" id="'+this.prefix+'BasicBallot_castVote_uint_res"></div>'
+		'		  </fieldset>'
+		'		</div>'
;
	}

	/**
	* Create the gui for the attributes.
	*/
	this.createAttributesGui=function() {
		return 		'    <div class="contract_attribute" id="'+this.prefix+'PublicBallot_contract_attribute_accessregistry"> accessregistry:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'PublicBallot_accessregistry_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'PublicBallot_contract_attribute_ballotStart"> ballotStart:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'PublicBallot_ballotStart_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'PublicBallot_contract_attribute_ballotEnd"> ballotEnd:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'PublicBallot_ballotEnd_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'PublicBallot_contract_attribute_ballotState"> ballotState:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'PublicBallot_ballotState_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'PublicBallot_contract_attribute_proposalCount"> proposalCount:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'PublicBallot_proposalCount_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'PublicBallot_contract_attribute_ballotName"> ballotName:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'PublicBallot_ballotName_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'PublicBallot_contract_attribute_ballotHash"> ballotHash:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'PublicBallot_ballotHash_value"> </span>'
+		'		    </div>'
+		'		'
;
	}

	/**
	* Create the gui.
	*/
	this.createPlainGui=function(){
		return this.createAttributesGui()
				+ this.createBasicBallot_addProposal_string_string_string_addressGui
				+ this.createBasicBallot_castVote_uintGui
				+ this.createBasicBallot_startBallotGui
				+ this.createPublicBallot_castVote_uintGui
				;
	}

	/**
	* Create the gui for the function addProposal.
	*/
	this.createBasicBallot_addProposal_string_string_string_addressGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'PublicBallot_contract_function_BasicBallot_addProposal_string_string_string_address">'
+		'		<legend>addProposal</legend>'
+		'			  <label class="function_parameter" for="BasicBallot_addProposal_string_string_string_address__name">_name</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'BasicBallot_addProposal_string_string_string_address__name"'
+		'				  placeholder="_name"/>'
+		'			  <label class="function_parameter" for="BasicBallot_addProposal_string_string_string_address__hash">_hash</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'BasicBallot_addProposal_string_string_string_address__hash"'
+		'				  placeholder="_hash"/>'
+		'			  <label class="function_parameter" for="BasicBallot_addProposal_string_string_string_address__url">_url</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'BasicBallot_addProposal_string_string_string_address__url"'
+		'				  placeholder="_url"/>'
+		'			  <label class="function_parameter" for="BasicBallot_addProposal_string_string_string_address__member">_member</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'BasicBallot_addProposal_string_string_string_address__member"'
+		'				  placeholder="_member"/>'
+		'			<button class="function_btn" id="'+this.prefix+'PublicBallotController.BasicBallot_addProposal_string_string_string_address" onclick="'+this.prefix+'PublicBallotController.BasicBallot_addProposal_string_string_string_address()">addProposal</button>'
+		'			<div class="function_result" id="'+this.prefix+'BasicBallot_addProposal_string_string_string_address_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the function castVote.
	*/
	this.createBasicBallot_castVote_uintGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'PublicBallot_contract_function_BasicBallot_castVote_uint">'
+		'		<legend>castVote</legend>'
+		'			  <label class="function_parameter" for="BasicBallot_castVote_uint__voteFor">_voteFor</label>'
+		'				<input class="function_input" type="number" '
+		'		          id="'+this.prefix+'BasicBallot_castVote_uint__voteFor"'
+		'				  placeholder="_voteFor"/>'
+		'			<button class="function_btn" id="'+this.prefix+'PublicBallotController.BasicBallot_castVote_uint" onclick="'+this.prefix+'PublicBallotController.BasicBallot_castVote_uint()">castVote</button>'
+		'			<div class="function_result" id="'+this.prefix+'BasicBallot_castVote_uint_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the function startBallot.
	*/
	this.createBasicBallot_startBallotGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'PublicBallot_contract_function_BasicBallot_startBallot">'
+		'		<legend>startBallot</legend>'
+		'			<button class="function_btn" id="'+this.prefix+'PublicBallotController.BasicBallot_startBallot" onclick="'+this.prefix+'PublicBallotController.BasicBallot_startBallot()">startBallot</button>'
+		'			<div class="function_result" id="'+this.prefix+'BasicBallot_startBallot_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the function castVote.
	*/
	this.createPublicBallot_castVote_uintGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'PublicBallot_contract_function_BasicBallot_castVote_uint">'
+		'		<legend>castVote</legend>'
+		'			  <label class="function_parameter" for="BasicBallot_castVote_uint__voteFor">_voteFor</label>'
+		'				<input class="function_input" type="number" '
+		'		          id="'+this.prefix+'BasicBallot_castVote_uint__voteFor"'
+		'				  placeholder="_voteFor"/>'
+		'			<button class="function_btn" id="'+this.prefix+'PublicBallotController.BasicBallot_castVote_uint" onclick="'+this.prefix+'PublicBallotController.BasicBallot_castVote_uint()">castVote</button>'
+		'			<div class="function_result" id="'+this.prefix+'BasicBallot_castVote_uint_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the proposals struct element.
	*/
	this.createproposalsStructGui=function() {
		return 		'<div class="Struct_Mapping" id="'+this.prefix+'Struc_PublicBallot_contract_attribute_proposals">struc mapping  proposals:'
+		'				<input class="function_input" type="number" id="'+this.prefix+'PublicBallot_contract_attribute_proposals_input">(uint)'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'PublicBallot_contract_attribute_proposals_name"> name:'
+		'		      		<span class="Struct_attribute_value" id="'+this.prefix+'PublicBallot_proposals_name_value"> </span>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'PublicBallot_contract_attribute_proposals_hash"> hash:'
+		'		      		<span class="Struct_attribute_value" id="'+this.prefix+'PublicBallot_proposals_hash_value"> </span>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'PublicBallot_contract_attribute_proposals_url"> url:'
+		'		      		<span class="Struct_attribute_value" id="'+this.prefix+'PublicBallot_proposals_url_value"> </span>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'PublicBallot_contract_attribute_proposals_member"> member:'
+		'		      		<span class="Struct_attribute_value" id="'+this.prefix+'PublicBallot_proposals_member_value"> </span>'
+		'		    	</div>'
+		'		  </div>'
;
	}

	/**
	* Create a div with '@inner' as inner elements.
    * @inner - the inner text
	*/
	this.createSeletonGui=function(inner) {
		return 	'<!-- gui for PublicBallot_contract -->'
		+	'	<div class="contract" id="'+this.prefix+'PublicBallot_contract">'
		+ inner
		+'</div>';
	}


	//eventguis

	/**
	* Create a gui for the VotedCasted event.
    * @prefix - a prefix
	* @blockHash - the bolckhash 
	* @blockNumber - the number of the block
	*/
	this.createVotedCastedLogDataGui = function(prefix, blockHash, blockNumber
	) {
		return '<div class="eventRow">'
        +' </div>';
	}
	/**
	* Create the gui for the function Struc PublicBallot-proposals.
	*/
	this.createStruc_PublicBallot_contract_attribute_proposalsGui=function(struct) {
		return '<div class="Struct_Mapping" id='+this.prefix+'"Struc_PublicBallot_contract_attribute_proposals">'
    		+'<div class="Struct_attribute" id='+this.prefix+'"PublicBallot_contract_attribute_proposals_name"> name:'
      		+'	<span class="Struct_attribute_value" id='+this.prefix+'"PublicBallot_proposals_name_value">'+struct.name()+'</span>'
    		+'</div>'
    		+'<div class="Struct_attribute" id='+this.prefix+'"PublicBallot_contract_attribute_proposals_hash"> hash:'
      		+'	<span class="Struct_attribute_value" id='+this.prefix+'"PublicBallot_proposals_hash_value">'+struct.hash()+'</span>'
    		+'</div>'
    		+'<div class="Struct_attribute" id='+this.prefix+'"PublicBallot_contract_attribute_proposals_url"> url:'
      		+'	<span class="Struct_attribute_value" id='+this.prefix+'"PublicBallot_proposals_url_value">'+struct.url()+'</span>'
    		+'</div>'
    		+'<div class="Struct_attribute" id='+this.prefix+'"PublicBallot_contract_attribute_proposals_member"> member:'
      		+'	<span class="Struct_attribute_value" id='+this.prefix+'"PublicBallot_proposals_member_value">'+struct.member()+'</span>'
    		+'</div>'
  		+'</div>';
	}

}//end guifactory

/**
* Class PublicBallotController. 
* The controller wrap's the 'instance' contract and binds all actions to document elements.
* Parameters are taken from elements with self.prefix+'functionName_parameterName'
*
* self.prefix+'PublicBallotController.setAddress' - 
* self.prefix+'PublicBallot_updateAttributes'     - 
* self.prefix+'BasicBallot_addProposal_string_string_string_address -
* self.prefix+'BasicBallot_castVote_uint -
* self.prefix+'BasicBallot_startBallot -
*/
function PublicBallotController() {

	this.instance = undefined;
	this.prefix='';
	this.contractAddress = undefined; 
	this.eventlogPrefix = '';
	var self = this;

	/**
	* Binds the element with the prefix-id to the corresponding element.
	*/
	this.bindGui=function() {
		console.log('bind gui for:'+self.prefix);
		var btn = document.getElementById(self.prefix+'PublicBallotController.setAddress');
		if(btn!=undefined)		
			btn.onclick = this.setAddress;
		else console.log('addres widget not bound');

		var btn = document.getElementById(self.prefix+'PublicBallot_updateAttributes');
		if(btn!=undefined)
			btn.onclick = this._updateAttributes;
		else console.log('_updateAttributes widget not bound');
		var btn = document.getElementById(self.prefix+'PublicBallotController.BasicBallot_addProposal_string_string_string_address');
		if(btn!=undefined)
			btn.onclick = this.BasicBallot_addProposal_string_string_string_address;
		else console.log('BasicBallot_addProposal_string_string_string_address widget not bound');
		var btn = document.getElementById(self.prefix+'PublicBallotController.BasicBallot_castVote_uint');
		if(btn!=undefined)
			btn.onclick = this.BasicBallot_castVote_uint;
		else console.log('BasicBallot_castVote_uint widget not bound');
		var btn = document.getElementById(self.prefix+'PublicBallotController.BasicBallot_startBallot');
		if(btn!=undefined)
			btn.onclick = this.BasicBallot_startBallot;
		else console.log('BasicBallot_startBallot widget not bound');
		var btn = document.getElementById(self.prefix+'PublicBallotController.BasicBallot_castVote_uint');
		if(btn!=undefined)
			btn.onclick = this.BasicBallot_castVote_uint;
		else console.log('BasicBallot_castVote_uint widget not bound');


	}

	/**
	* Set the address.
	*/
	this.setAddress=function() {
		var _address = document.getElementById(self.prefix+'PublicBallot_address');
		if(_address==null)return;

		self.PublicBallot_instance = PublicBallotContract.at(_address.value);
		self.contractAddress = _address.value;
		self._updateAttributes();
	}
	
	/**
	* Update attributes.
	*
	* prefix+'PublicBallot_accessregistry_value' - 
	* prefix+'PublicBallot_ballotStart_value' - 
	* prefix+'PublicBallot_ballotEnd_value' - 
	* prefix+'PublicBallot_ballotState_value' - 
	* prefix+'PublicBallot_proposalCount_value' - 
	* prefix+'PublicBallot_ballotName_value' - 
	* prefix+'PublicBallot_ballotHash_value' - 
	**/
	this._updateAttributes=function () {
		if(this.instance===null) return;
		// update attributes
		var accessregistry_res = self.instance.accessregistry();
		var e = document.getElementById(self.prefix+'PublicBallot_accessregistry_value');
		if(accessregistry_res!=null && e!=null)
			e.innerText = accessregistry_res;
		else console.log(self.prefix+'PublicBallot_accessregistry_value not found');
		var ballotStart_res = self.instance.ballotStart();
		var e = document.getElementById(self.prefix+'PublicBallot_ballotStart_value');
		if(ballotStart_res!=null && e!=null)
			e.innerText = ballotStart_res;
		else console.log(self.prefix+'PublicBallot_ballotStart_value not found');
		var ballotEnd_res = self.instance.ballotEnd();
		var e = document.getElementById(self.prefix+'PublicBallot_ballotEnd_value');
		if(ballotEnd_res!=null && e!=null)
			e.innerText = ballotEnd_res;
		else console.log(self.prefix+'PublicBallot_ballotEnd_value not found');
		var ballotState_res = self.instance.ballotState();
		var e = document.getElementById(self.prefix+'PublicBallot_ballotState_value');
		if(ballotState_res!=null && e!=null)
			e.innerText = ballotState_res;
		else console.log(self.prefix+'PublicBallot_ballotState_value not found');
		var proposalCount_res = self.instance.proposalCount();
		var e = document.getElementById(self.prefix+'PublicBallot_proposalCount_value');
		if(proposalCount_res!=null && e!=null)
			e.innerText = proposalCount_res;
		else console.log(self.prefix+'PublicBallot_proposalCount_value not found');
		var ballotName_res = self.instance.ballotName();
		var e = document.getElementById(self.prefix+'PublicBallot_ballotName_value');
		if(ballotName_res!=null && e!=null)
			e.innerText = ballotName_res;
		else console.log(self.prefix+'PublicBallot_ballotName_value not found');
		var ballotHash_res = self.instance.ballotHash();
		var e = document.getElementById(self.prefix+'PublicBallot_ballotHash_value');
		if(ballotHash_res!=null && e!=null)
			e.innerText = ballotHash_res;
		else console.log(self.prefix+'PublicBallot_ballotHash_value not found');
		var e = document.getElementById(self.prefix+'PublicBallot_contract_attribute_proposals_input');
		if(e!=null){
			var _key = e.value;
			if(_key!=''){
			var proposals_res = self.instance.proposals(_key);
			if(proposals_res!=null){
			var e1 = document.getElementById(self.prefix+'PublicBallot_proposals_name_value');
			if(e1!=null)	
				e1.innerText = proposals_res[0];
			var e1 = document.getElementById(self.prefix+'PublicBallot_proposals_hash_value');
			if(e1!=null)	
				e1.innerText = proposals_res[1];
			var e1 = document.getElementById(self.prefix+'PublicBallot_proposals_url_value');
			if(e1!=null)	
				e1.innerText = proposals_res[2];
			var e1 = document.getElementById(self.prefix+'PublicBallot_proposals_member_value');
			if(e1!=null)	
				e1.innerText = proposals_res[3];
			}}}
	}

	//call functions
	
	/**
	* Calls the contract function PublicBallot_addProposal.
	*
	* this.prefix+'BasicBallot_addProposal_string_string_string_address__name' -
	* this.prefix+'BasicBallot_addProposal_string_string_string_address__hash' -
	* this.prefix+'BasicBallot_addProposal_string_string_string_address__url' -
	* this.prefix+'BasicBallot_addProposal_string_string_string_address__member' -
	**/
	this.BasicBallot_addProposal_string_string_string_address=function() {
		var e = document.getElementById(self.prefix+'BasicBallot_addProposal_string_string_string_address__name');
		if(e!=null)
			var param__name = e.value;
		else console.log(self.prefix+'BasicBallot_addProposal_string_string_string_address__name not found');
		var e = document.getElementById(self.prefix+'BasicBallot_addProposal_string_string_string_address__hash');
		if(e!=null)
			var param__hash = e.value;
		else console.log(self.prefix+'BasicBallot_addProposal_string_string_string_address__hash not found');
		var e = document.getElementById(self.prefix+'BasicBallot_addProposal_string_string_string_address__url');
		if(e!=null)
			var param__url = e.value;
		else console.log(self.prefix+'BasicBallot_addProposal_string_string_string_address__url not found');
		var e = document.getElementById(self.prefix+'BasicBallot_addProposal_string_string_string_address__member');
		if(e!=null)
			var param__member = e.value;
		else console.log(self.prefix+'BasicBallot_addProposal_string_string_string_address__member not found');
		var res = self.instance.addProposal(param__name, param__hash, param__url, param__member);
	}
	
	/**
	* Calls the contract function PublicBallot_castVote.
	*
	* this.prefix+'BasicBallot_castVote_uint__voteFor' -
	**/
	this.BasicBallot_castVote_uint=function() {
		var e = document.getElementById(self.prefix+'BasicBallot_castVote_uint__voteFor');
		if(e!=null)
			var param__voteFor = e.value;
		else console.log(self.prefix+'BasicBallot_castVote_uint__voteFor not found');
		var res = self.instance.castVote(param__voteFor);
	}
	
	/**
	* Calls the contract function PublicBallot_startBallot.
	*
	**/
	this.BasicBallot_startBallot=function() {
		var res = self.instance.startBallot();
	}
	
	/**
	* Calls the contract function PublicBallot_castVote.
	*
	* this.prefix+'BasicBallot_castVote_uint__voteFor' -
	**/
	this.BasicBallot_castVote_uint=function() {
		var e = document.getElementById(self.prefix+'BasicBallot_castVote_uint__voteFor');
		if(e!=null)
			var param__voteFor = e.value;
		else console.log(self.prefix+'BasicBallot_castVote_uint__voteFor not found');
		var res = self.instance.castVote(param__voteFor);
	}
	
//delegated calls
}// end controller	

/**
* class as GlueCode PublicBallotManager,
* uses prefix + 'GuiContainer' as target element.
* It combines a PublicBallotController as 'c' and a PublicBallotGuiFactory as 'g'.
**/
function PublicBallotManager(prefix,contract,containerId) {
	this.prefix = prefix;
	var self = this;
	this.c = new PublicBallotController();
	this.c.prefix=prefix;
	this.c.instance=contract;
	this.c.contractAddress = contract.address;
	this.g = new PublicBallotGuiFactory();
	this.g.prefix = prefix;
	this.containerId = containerId;
	this.eventlogPrefix = '';
	this.guiFunction = null;
	this.eventVotedCasted = null;
	
	/**
	* adds the gui element to the given 'e' element
	**/
	this.addGui = function(e) {
		if(e==null)
			e = document.getElementById(this.containerId);
		if(e==null){
		console.log(this.containerId+' not found or :'+e);
		return;
		}
		var elemDiv = document.createElement('div');
		elemDiv.id= this.prefix +'PublicBallot_gui';
		e.appendChild(elemDiv);
		if(this.guiFunction==null)
			elemDiv.innerHTML = this.createGui(this.g);
		else elemDiv.innerHTML = this.guiFunction(this.g);
		
		var e = document.getElementById(this.prefix+'PublicBallot_address');
		if(e!=null)
			e.value = this.c.contractAddress;
		else 
			console.log(this.prefix+'PublicBallot_address not found');
		this.c.bindGui();
	}	
	
	/**
	* clears the given element 'e'.
	**/
	this.clearGui = function(e){
		if(e==null)
			e = document.getElementById(this.containerId);
		e.innerHTML ='';
	}

	/**
	* Create the gui with the given 'guiFactory'. Places an sceleton arount it.
	* @return the gui txt used as innerHTML
	**/
	this.createGui = function(guifactory){
		var txt ='';
//Start of user code PublicBallot_create_gui_js
		txt = txt + guifactory.createDefaultGui();
//End of user code
		return guifactory.createSeletonGui(txt);

	}

	/**
	* Create a small gui, only the attributes. Places an sceleton arount it.
	**/	
	this.createSmallGui = function(guifactory){
		var txt ='';
		txt = txt + guifactory.createAttributesGui();
		return guifactory.createSeletonGui(txt);

	}

	/**
	* Update the attributes.
	**/
	this.updateGui = function(){
		this.c._updateAttributes();
	}

	/**
	* Getter for the contract 'PublicBallot' instance.
	**/
	this.getContract = function(){
		return this.c.instance;
	}

	/**
	* Watch for the contract events.
	* The events are stored in an element with the id this.eventlogPrefix+'eventLog'.
	**/
	this.watchEvents=function(){
	var event_VotedCasted = this.getContract().VotedCasted({},{fromBlock: 0});
	var elp = this.eventlogPrefix;
	var callback = this.eventVotedCasted;
	event_VotedCasted.watch(function(error,result){
	if(!error){
		if(callback!=null)
			callback(result);

		}else
			console.log(error);	
	});
	}

}// end of manager

/**
* Manages a list of PublicBallotManager uses the guid id to place the gui which is also the eventlogPrefix
*/
function PublicBallotGuiMananger(guiId){
	this.prefix = guiId;
	this.managers=new Array();	//[];		
	this.guiFunction = null;
	this.eventVotedCasted = null;
	this.managerMap = {};
	
	/**
	* Add a contract to this manager.
	* @contract the web3 contract instance
	*/
	this.addManager = function(contract) {
		var m = new PublicBallotManager(contract.address,contract,this.prefix);
		m.eventlogPrefix = this.prefix;
		m.eventVotedCasted = this.eventVotedCasted;
		m.watchEvents();
		if(this.guiFunction!=null)
			m.guiFunction = this.guiFunction;
		this.managers.push(m);
		this.managerMap[contract.address] = m;
	}

	/**
	 * Changes the gui function for all managers.
	 */
	this.changeGuiFunction =  function(guiFunction){
		for (i in this.managers) {
			var manager = this.managers[i] ;
			manager.guiFunction = guiFunction;
		}
	}
	
	/**
	* Clears the element or the element with id 'prefix'.
	* @e an element
	*/
	this.clearGui = function(e){
		if(e==null)
			e = document.getElementById(this.prefix);
		if(e!==undefined)
			e.innerHTML ='';
	}
		
	/**
	* Displays all guis of the managed contracts.
	* @e an element
	*/
	this.displayGui = function(e){
		if(e==null)
			e = document.getElementById(this.prefix);
		if(e==undefined) return;
		for (i in this.managers) {
			var manager = this.managers[i] ;
			var elemDiv = document.createElement('div');
			elemDiv.id= manager.prefix + 'GuiContainer';//'PublicBallot_gui';
			e.appendChild(elemDiv);
			if(this.guiFunction==null)
				elemDiv.innerHTML = manager.createGui(manager.g);
			else elemDiv.innerHTML = this.guiFunction(manager.g);
			manager.c.bindGui();
		}
	}
	/**
	* Displays a simple gui.
	*/
	this.displaySimpleGui = function(){
		for (i in this.managers) {
			var manager = this.managers[i] ;
			manager.addGui(null);
		}
	}
	/**
	* Update the gui.
	*/
	this.updateGui = function(){
		for (i in this.managers) {
			this.managers[i].updateGui();
		}
//		console.log('update');
	}
}// end of gui mananger

/**
* Deploys the contract.
* Each constructor is available.
**/
function PublicBallotDeployment(guiId){
	this.prefix = guiId;
//Start of user code PublicBallot_deployment_attributes_js
//TODO: implement
//End of user code

	
	/**
	* The default deployer function.
	**/
	this.deployDefault = function(){
		//Start of user code PublicBallot_deployDefault
		//TODO: implement
		//End of user code
	}

//Start of user code PublicBallot_deployment_js
//TODO: implement
//End of user code
}

/**
* A class to manage a single page dapp.
* The VotingPage object uses the managers to display the gui.
**/
function VotingPage(prefix) {
	this.prefix=prefix;
	//Start of user code page_voting_attributes
		//TODO: implement
	//End of user code

	
	/**
	* Places the default gui in the page.
	**/
	this.placeDefaultGui=function() {
	this.createDefaultGui();
	}
/**
* Create the default Gui.
* Use this method to customize the gui.
**/
this.createDefaultGui=function() {
	//Start of user code page_Voting_create_default_gui_functions
		//TODO: implement
	//End of user code
}
	//Start of user code page_Voting_functions
		//TODO: implement
	//End of user code

}// end of VotingPage

//Start of user code Voting_custom_functions
		//TODO: implement
//End of user code
