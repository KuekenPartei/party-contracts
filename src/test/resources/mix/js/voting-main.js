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
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'Ballot_chairperson_value"> </div>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Ballot_contract_attribute_proposals"> proposals:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'Ballot_proposals_value"> </div>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Ballot_contract_attribute_ballotName"> ballotName:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'Ballot_ballotName_value"> </div>'
+		'		    </div>'
+		'		'
+		'		<div class="Struct_Mapping" id="'+this.prefix+'Struc_Ballot_contract_attribute_voters">struc mapping  voters:'
+		'				<input type="text" id="'+this.prefix+'Ballot_contract_attribute_voters_input">(address)'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'Ballot_contract_attribute_voters_weight"> weight:'
+		'		      		<div class="Struct_attribute_value" id="'+this.prefix+'Ballot_voters_weight_value"> </div>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'Ballot_contract_attribute_voters_voted"> voted:'
+		'		      		<div class="Struct_attribute_value" id="'+this.prefix+'Ballot_voters_voted_value"> </div>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'Ballot_contract_attribute_voters_delegate"> delegate:'
+		'		      		<div class="Struct_attribute_value" id="'+this.prefix+'Ballot_voters_delegate_value"> </div>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'Ballot_contract_attribute_voters_vote"> vote:'
+		'		      		<div class="Struct_attribute_value" id="'+this.prefix+'Ballot_voters_vote_value"> </div>'
+		'		    	</div>'
+		'		  </div>'
+		'		    <button id="'+this.prefix+'Ballot_updateAttributes" onclick="'+this.prefix+'BallotController._updateAttributes()">update Ballot attributes</button>'
+		'		  </div>'
+		'		  <div class="function_execution" id="'+this.prefix+'Ballot_contract_function_Ballot_Ballot_string_bytes32">'
+		'		Ballot_Ballot:'
+		'			  <div class="function_parameter">name<input type="text" id="'+this.prefix+'Ballot_Ballot_string_bytes32_name"></div>'
+		'			  <div class="function_parameter">proposalNames<input type="text" id="'+this.prefix+'Ballot_Ballot_string_bytes32_proposalNames"></div>'
+		'			<button id="'+this.prefix+'BallotController.Ballot_Ballot_string_bytes32" onclick="'+this.prefix+'BallotController.Ballot_Ballot_string_bytes32()">execute Ballot_Ballot</button>'
+		'			<div class="function_result" id="'+this.prefix+'Ballot_Ballot_string_bytes32_res"></div>'
+		'		  </div>'
+		'		  <div class="function_execution" id="'+this.prefix+'Ballot_contract_function_Ballot_giveRightToVote_address">'
+		'		Ballot_giveRightToVote:'
+		'			  <div class="function_parameter">voter<input type="text" id="'+this.prefix+'Ballot_giveRightToVote_address_voter"></div>'
+		'			<button id="'+this.prefix+'BallotController.Ballot_giveRightToVote_address" onclick="'+this.prefix+'BallotController.Ballot_giveRightToVote_address()">execute Ballot_giveRightToVote</button>'
+		'			<div class="function_result" id="'+this.prefix+'Ballot_giveRightToVote_address_res"></div>'
+		'		  </div>'
+		'		  <div class="function_execution" id="'+this.prefix+'Ballot_contract_function_Ballot_delegateTo_address">'
+		'		Ballot_delegateTo:'
+		'			  <div class="function_parameter">to<input type="text" id="'+this.prefix+'Ballot_delegateTo_address_to"></div>'
+		'			<button id="'+this.prefix+'BallotController.Ballot_delegateTo_address" onclick="'+this.prefix+'BallotController.Ballot_delegateTo_address()">execute Ballot_delegateTo</button>'
+		'			<div class="function_result" id="'+this.prefix+'Ballot_delegateTo_address_res"></div>'
+		'		  </div>'
+		'		  <div class="function_execution" id="'+this.prefix+'Ballot_contract_function_Ballot_voteFor_uint">'
+		'		Ballot_voteFor:'
+		'			  <div class="function_parameter">proposal<input type="number" id="'+this.prefix+'Ballot_voteFor_uint_proposal"></div>'
+		'			<button id="'+this.prefix+'BallotController.Ballot_voteFor_uint" onclick="'+this.prefix+'BallotController.Ballot_voteFor_uint()">execute Ballot_voteFor</button>'
+		'			<div class="function_result" id="'+this.prefix+'Ballot_voteFor_uint_res"></div>'
+		'		  </div>'
+		'		  <div class="function_execution" id="'+this.prefix+'Ballot_contract_function_Ballot_winningProposal">'
+		'		Ballot_winningProposal:'
+		'			<button id="'+this.prefix+'BallotController.Ballot_winningProposal" onclick="'+this.prefix+'BallotController.Ballot_winningProposal()">execute Ballot_winningProposal</button>'
+		'			<div class="function_result" id="'+this.prefix+'Ballot_winningProposal_res"></div>'
+		'		  </div>'
+		'		'
+		'		</div>'
;
	}

	/**
	* Create the gui for the attributes.
	*/
	this.createAttributesGui=function() {
		return 		'    <div class="contract_attribute" id="'+this.prefix+'Ballot_contract_attribute_chairperson"> chairperson:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'Ballot_chairperson_value"> </div>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Ballot_contract_attribute_proposals"> proposals:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'Ballot_proposals_value"> </div>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Ballot_contract_attribute_ballotName"> ballotName:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'Ballot_ballotName_value"> </div>'
+		'		    </div>'
+		'		'
;
	}

	/**
	* Create the gui for the function Ballot.
	*/
	this.createBallot_Ballot_string_bytes32Gui=function() {
		return 		'  <div class="function_execution" id="'+this.prefix+'Ballot_contract_function_Ballot_Ballot_string_bytes32">'
+		'		Ballot_Ballot:'
+		'			  <div class="function_parameter">name<input type="text" id="'+this.prefix+'Ballot_Ballot_string_bytes32_name"></div>'
+		'			  <div class="function_parameter">proposalNames<input type="text" id="'+this.prefix+'Ballot_Ballot_string_bytes32_proposalNames"></div>'
+		'			<button id="'+this.prefix+'BallotController.Ballot_Ballot_string_bytes32" onclick="'+this.prefix+'BallotController.Ballot_Ballot_string_bytes32()">execute Ballot_Ballot</button>'
+		'			<div class="function_result" id="'+this.prefix+'Ballot_Ballot_string_bytes32_res"></div>'
+		'		  </div>'
;
	}

	/**
	* Create the gui for the function giveRightToVote.
	*/
	this.createBallot_giveRightToVote_addressGui=function() {
		return 		'  <div class="function_execution" id="'+this.prefix+'Ballot_contract_function_Ballot_giveRightToVote_address">'
+		'		Ballot_giveRightToVote:'
+		'			  <div class="function_parameter">voter<input type="text" id="'+this.prefix+'Ballot_giveRightToVote_address_voter"></div>'
+		'			<button id="'+this.prefix+'BallotController.Ballot_giveRightToVote_address" onclick="'+this.prefix+'BallotController.Ballot_giveRightToVote_address()">execute Ballot_giveRightToVote</button>'
+		'			<div class="function_result" id="'+this.prefix+'Ballot_giveRightToVote_address_res"></div>'
+		'		  </div>'
;
	}

	/**
	* Create the gui for the function delegateTo.
	*/
	this.createBallot_delegateTo_addressGui=function() {
		return 		'  <div class="function_execution" id="'+this.prefix+'Ballot_contract_function_Ballot_delegateTo_address">'
+		'		Ballot_delegateTo:'
+		'			  <div class="function_parameter">to<input type="text" id="'+this.prefix+'Ballot_delegateTo_address_to"></div>'
+		'			<button id="'+this.prefix+'BallotController.Ballot_delegateTo_address" onclick="'+this.prefix+'BallotController.Ballot_delegateTo_address()">execute Ballot_delegateTo</button>'
+		'			<div class="function_result" id="'+this.prefix+'Ballot_delegateTo_address_res"></div>'
+		'		  </div>'
;
	}

	/**
	* Create the gui for the function voteFor.
	*/
	this.createBallot_voteFor_uintGui=function() {
		return 		'  <div class="function_execution" id="'+this.prefix+'Ballot_contract_function_Ballot_voteFor_uint">'
+		'		Ballot_voteFor:'
+		'			  <div class="function_parameter">proposal<input type="number" id="'+this.prefix+'Ballot_voteFor_uint_proposal"></div>'
+		'			<button id="'+this.prefix+'BallotController.Ballot_voteFor_uint" onclick="'+this.prefix+'BallotController.Ballot_voteFor_uint()">execute Ballot_voteFor</button>'
+		'			<div class="function_result" id="'+this.prefix+'Ballot_voteFor_uint_res"></div>'
+		'		  </div>'
;
	}

	/**
	* Create the gui for the function winningProposal.
	*/
	this.createBallot_winningProposalGui=function() {
		return 		'  <div class="function_execution" id="'+this.prefix+'Ballot_contract_function_Ballot_winningProposal">'
+		'		Ballot_winningProposal:'
+		'			<button id="'+this.prefix+'BallotController.Ballot_winningProposal" onclick="'+this.prefix+'BallotController.Ballot_winningProposal()">execute Ballot_winningProposal</button>'
+		'			<div class="function_result" id="'+this.prefix+'Ballot_winningProposal_res"></div>'
+		'		  </div>'
;
	}

	/**
	* Create the gui for the voters struct element.
	*/
	this.createvotersStructGui=function() {
		return 		'<div class="Struct_Mapping" id="'+this.prefix+'Struc_Ballot_contract_attribute_voters">struc mapping  voters:'
+		'				<input type="text" id="'+this.prefix+'Ballot_contract_attribute_voters_input">(address)'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'Ballot_contract_attribute_voters_weight"> weight:'
+		'		      		<div class="Struct_attribute_value" id="'+this.prefix+'Ballot_voters_weight_value"> </div>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'Ballot_contract_attribute_voters_voted"> voted:'
+		'		      		<div class="Struct_attribute_value" id="'+this.prefix+'Ballot_voters_voted_value"> </div>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'Ballot_contract_attribute_voters_delegate"> delegate:'
+		'		      		<div class="Struct_attribute_value" id="'+this.prefix+'Ballot_voters_delegate_value"> </div>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'Ballot_contract_attribute_voters_vote"> vote:'
+		'		      		<div class="Struct_attribute_value" id="'+this.prefix+'Ballot_voters_vote_value"> </div>'
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
      		+'	<div class="Struct_attribute_value" id='+this.prefix+'"Ballot_voters_weight_value">'+struct.weight()+'</div>'
    		+'</div>'
    		+'<div class="Struct_attribute" id='+this.prefix+'"Ballot_contract_attribute_voters_voted"> voted:'
      		+'	<div class="Struct_attribute_value" id='+this.prefix+'"Ballot_voters_voted_value">'+struct.voted()+'</div>'
    		+'</div>'
    		+'<div class="Struct_attribute" id='+this.prefix+'"Ballot_contract_attribute_voters_delegate"> delegate:'
      		+'	<div class="Struct_attribute_value" id='+this.prefix+'"Ballot_voters_delegate_value">'+struct.delegate()+'</div>'
    		+'</div>'
    		+'<div class="Struct_attribute" id='+this.prefix+'"Ballot_contract_attribute_voters_vote"> vote:'
      		+'	<div class="Struct_attribute_value" id='+this.prefix+'"Ballot_voters_vote_value">'+struct.vote()+'</div>'
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
