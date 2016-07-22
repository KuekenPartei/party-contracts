
var BallotContract = web3.eth.contract([
{"constant":true,"inputs":[],"name":"chairperson","outputs":[{"name":"","type":"address"}],"type":"function"},
{"constant":true,"inputs":[],"name":"proposals","outputs":[{"name":"","type":"Proposal"}],"type":"function"},
{"constant":true,"inputs":[],"name":"ballotName","outputs":[{"name":"","type":"string"}],"type":"function"},
{"constant": true,"inputs": [{"name": "","type": "address"}],"name": "voters","outputs": [
{ "name": "weight", "type": "uint"}
,{ "name": "voted", "type": "bool"}
,{ "name": "delegate", "type": "address"}
,{ "name": "vote", "type": "uint"}
],"type": "function"	},
  {
    "constant": false,
    "inputs": [{"name": "name","type": "string"},{"name": "proposalNames","type": "bytes32"}],    
    "name": "Ballot",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [{"name": "voter","type": "address"}],    
    "name": "giveRightToVote",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [{"name": "to","type": "address"}],    
    "name": "delegateTo",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [{"name": "proposal","type": "uint"}],    
    "name": "voteFor",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [],    
    "name": "winningProposal",
    "outputs": [{"name": "winningProposal","type": "uint"}],
    "type": "function"
  }
 
] );   



//gui factory Ballot
function BallotGuiFactory() {
	this.prefix='';
	
// default Gui
this.placeDefaultGui=function() {
	var e = document.getElementById(this.prefix+'Ballot_gui');
	if(e!=null)
		e.innerHTML = this.createDefaultGui();
	else
		console.log(this.prefix+'Ballot_gui not found');
}
// default Gui
this.createDefaultGui=function() {
	return 	'<!-- gui for Ballot_contract -->'
+	'	<div class="contract" id="'+this.prefix+'Ballot_contract">'
+	'	Ballot:'
+	'	  <input type="text" id="'+this.prefix+'Ballot_address"> <button id="'+this.prefix+'BallotController.setAddress" onclick="'+this.prefix+'BallotController.setAddress()">change Ballot Address</button>'
+	'	  <div class="contract_attributes" id="'+this.prefix+'Ballot_contract_attributes"> attributes:'
+	'	    <div class="contract_attribute" id="'+this.prefix+'Ballot_contract_attribute_chairperson"> chairperson:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'Ballot_chairperson_value"> </div>'
+	'	    </div>'
+	'	    <div class="contract_attribute" id="'+this.prefix+'Ballot_contract_attribute_proposals"> proposals:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'Ballot_proposals_value"> </div>'
+	'	    </div>'
+	'	    <div class="contract_attribute" id="'+this.prefix+'Ballot_contract_attribute_ballotName"> ballotName:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'Ballot_ballotName_value"> </div>'
+	'	    </div>'
+	'	'
+	'	<!--struct -->'
+	'	<div class="Struct_Mapping" id="'+this.prefix+'Struc_Ballot_contract_attribute_voters">struc mapping  voters:'
+	'			<input type="text" id="'+this.prefix+'Ballot_contract_attribute_voters_input">(address)'
+	'	    	<div class="Struct_attribute" id="'+this.prefix+'Ballot_contract_attribute_voters_weight"> weight:'
+	'	      		<div class="Struct_attribute_value" id="'+this.prefix+'Ballot_voters_weight_value"> </div>'
+	'	    	</div>'
+	'	    	<div class="Struct_attribute" id="'+this.prefix+'Ballot_contract_attribute_voters_voted"> voted:'
+	'	      		<div class="Struct_attribute_value" id="'+this.prefix+'Ballot_voters_voted_value"> </div>'
+	'	    	</div>'
+	'	    	<div class="Struct_attribute" id="'+this.prefix+'Ballot_contract_attribute_voters_delegate"> delegate:'
+	'	      		<div class="Struct_attribute_value" id="'+this.prefix+'Ballot_voters_delegate_value"> </div>'
+	'	    	</div>'
+	'	    	<div class="Struct_attribute" id="'+this.prefix+'Ballot_contract_attribute_voters_vote"> vote:'
+	'	      		<div class="Struct_attribute_value" id="'+this.prefix+'Ballot_voters_vote_value"> </div>'
+	'	    	</div>'
+	'	  </div>'
+	'	    <button id="'+this.prefix+'Ballot_updateAttributes" onclick="'+this.prefix+'BallotController._updateAttributes()">update Ballot attributes</button>'
+	'	  </div>'
+	'	  <div class="function_execution" id="'+this.prefix+'Ballot_contract_function_Ballot_Ballot_string_bytes32">'
+	'	Ballot_Ballot:'
+	'		  <div class="function_parameter">name<input type="text" id="'+this.prefix+'Ballot_Ballot_string_bytes32_name"></div>'
+	'		  <div class="function_parameter">proposalNames<input type="text" id="'+this.prefix+'Ballot_Ballot_string_bytes32_proposalNames"></div>'
+	'		<button id="'+this.prefix+'BallotController.Ballot_Ballot_string_bytes32" onclick="'+this.prefix+'BallotController.Ballot_Ballot_string_bytes32()">execute Ballot_Ballot</button>'
+	'		<div class="function_result" id="'+this.prefix+'Ballot_Ballot_string_bytes32_res"></div>'
+	'	  </div>'
+	'	  <div class="function_execution" id="'+this.prefix+'Ballot_contract_function_Ballot_giveRightToVote_address">'
+	'	Ballot_giveRightToVote:'
+	'		  <div class="function_parameter">voter<input type="text" id="'+this.prefix+'Ballot_giveRightToVote_address_voter"></div>'
+	'		<button id="'+this.prefix+'BallotController.Ballot_giveRightToVote_address" onclick="'+this.prefix+'BallotController.Ballot_giveRightToVote_address()">execute Ballot_giveRightToVote</button>'
+	'		<div class="function_result" id="'+this.prefix+'Ballot_giveRightToVote_address_res"></div>'
+	'	  </div>'
+	'	  <div class="function_execution" id="'+this.prefix+'Ballot_contract_function_Ballot_delegateTo_address">'
+	'	Ballot_delegateTo:'
+	'		  <div class="function_parameter">to<input type="text" id="'+this.prefix+'Ballot_delegateTo_address_to"></div>'
+	'		<button id="'+this.prefix+'BallotController.Ballot_delegateTo_address" onclick="'+this.prefix+'BallotController.Ballot_delegateTo_address()">execute Ballot_delegateTo</button>'
+	'		<div class="function_result" id="'+this.prefix+'Ballot_delegateTo_address_res"></div>'
+	'	  </div>'
+	'	  <div class="function_execution" id="'+this.prefix+'Ballot_contract_function_Ballot_voteFor_uint">'
+	'	Ballot_voteFor:'
+	'		  <div class="function_parameter">proposal<input type="number" id="'+this.prefix+'Ballot_voteFor_uint_proposal"></div>'
+	'		<button id="'+this.prefix+'BallotController.Ballot_voteFor_uint" onclick="'+this.prefix+'BallotController.Ballot_voteFor_uint()">execute Ballot_voteFor</button>'
+	'		<div class="function_result" id="'+this.prefix+'Ballot_voteFor_uint_res"></div>'
+	'	  </div>'
+	'	  <div class="function_execution" id="'+this.prefix+'Ballot_contract_function_Ballot_winningProposal">'
+	'	Ballot_winningProposal:'
+	'		<button id="'+this.prefix+'BallotController.Ballot_winningProposal" onclick="'+this.prefix+'BallotController.Ballot_winningProposal()">execute Ballot_winningProposal</button>'
+	'		<div class="function_result" id="'+this.prefix+'Ballot_winningProposal_res"></div>'
+	'	  </div>'
+	'	'
+	'	</div>'
;
}

//default attributes
this.createAttributesGui=function() {
	return 	'    <div class="contract_attribute" id="'+this.prefix+'Ballot_contract_attribute_chairperson"> chairperson:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'Ballot_chairperson_value"> </div>'
+	'	    </div>'
+	'	    <div class="contract_attribute" id="'+this.prefix+'Ballot_contract_attribute_proposals"> proposals:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'Ballot_proposals_value"> </div>'
+	'	    </div>'
+	'	    <div class="contract_attribute" id="'+this.prefix+'Ballot_contract_attribute_ballotName"> ballotName:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'Ballot_ballotName_value"> </div>'
+	'	    </div>'
+	'	'
;
}



this.createBallot_Ballot_string_bytes32Gui=function() {
return 	'  <div class="function_execution" id="'+this.prefix+'Ballot_contract_function_Ballot_Ballot_string_bytes32">'
+	'Ballot_Ballot:'
+	'	  <div class="function_parameter">name<input type="text" id="'+this.prefix+'Ballot_Ballot_string_bytes32_name"></div>'
+	'	  <div class="function_parameter">proposalNames<input type="text" id="'+this.prefix+'Ballot_Ballot_string_bytes32_proposalNames"></div>'
+	'	<button id="'+this.prefix+'BallotController.Ballot_Ballot_string_bytes32" onclick="'+this.prefix+'BallotController.Ballot_Ballot_string_bytes32()">execute Ballot_Ballot</button>'
+	'	<div class="function_result" id="'+this.prefix+'Ballot_Ballot_string_bytes32_res"></div>'
+	'  </div>'
;
}
this.createBallot_giveRightToVote_addressGui=function() {
return 	'  <div class="function_execution" id="'+this.prefix+'Ballot_contract_function_Ballot_giveRightToVote_address">'
+	'Ballot_giveRightToVote:'
+	'	  <div class="function_parameter">voter<input type="text" id="'+this.prefix+'Ballot_giveRightToVote_address_voter"></div>'
+	'	<button id="'+this.prefix+'BallotController.Ballot_giveRightToVote_address" onclick="'+this.prefix+'BallotController.Ballot_giveRightToVote_address()">execute Ballot_giveRightToVote</button>'
+	'	<div class="function_result" id="'+this.prefix+'Ballot_giveRightToVote_address_res"></div>'
+	'  </div>'
;
}
this.createBallot_delegateTo_addressGui=function() {
return 	'  <div class="function_execution" id="'+this.prefix+'Ballot_contract_function_Ballot_delegateTo_address">'
+	'Ballot_delegateTo:'
+	'	  <div class="function_parameter">to<input type="text" id="'+this.prefix+'Ballot_delegateTo_address_to"></div>'
+	'	<button id="'+this.prefix+'BallotController.Ballot_delegateTo_address" onclick="'+this.prefix+'BallotController.Ballot_delegateTo_address()">execute Ballot_delegateTo</button>'
+	'	<div class="function_result" id="'+this.prefix+'Ballot_delegateTo_address_res"></div>'
+	'  </div>'
;
}
this.createBallot_voteFor_uintGui=function() {
return 	'  <div class="function_execution" id="'+this.prefix+'Ballot_contract_function_Ballot_voteFor_uint">'
+	'Ballot_voteFor:'
+	'	  <div class="function_parameter">proposal<input type="number" id="'+this.prefix+'Ballot_voteFor_uint_proposal"></div>'
+	'	<button id="'+this.prefix+'BallotController.Ballot_voteFor_uint" onclick="'+this.prefix+'BallotController.Ballot_voteFor_uint()">execute Ballot_voteFor</button>'
+	'	<div class="function_result" id="'+this.prefix+'Ballot_voteFor_uint_res"></div>'
+	'  </div>'
;
}
this.createBallot_winningProposalGui=function() {
return 	'  <div class="function_execution" id="'+this.prefix+'Ballot_contract_function_Ballot_winningProposal">'
+	'Ballot_winningProposal:'
+	'	<button id="'+this.prefix+'BallotController.Ballot_winningProposal" onclick="'+this.prefix+'BallotController.Ballot_winningProposal()">execute Ballot_winningProposal</button>'
+	'	<div class="function_result" id="'+this.prefix+'Ballot_winningProposal_res"></div>'
+	'  </div>'
;
}

this.createvotersStructGui=function() {
return 	'<!--struct -->'
+	'<div class="Struct_Mapping" id="'+this.prefix+'Struc_Ballot_contract_attribute_voters">struc mapping  voters:'
+	'		<input type="text" id="'+this.prefix+'Ballot_contract_attribute_voters_input">(address)'
+	'    	<div class="Struct_attribute" id="'+this.prefix+'Ballot_contract_attribute_voters_weight"> weight:'
+	'      		<div class="Struct_attribute_value" id="'+this.prefix+'Ballot_voters_weight_value"> </div>'
+	'    	</div>'
+	'    	<div class="Struct_attribute" id="'+this.prefix+'Ballot_contract_attribute_voters_voted"> voted:'
+	'      		<div class="Struct_attribute_value" id="'+this.prefix+'Ballot_voters_voted_value"> </div>'
+	'    	</div>'
+	'    	<div class="Struct_attribute" id="'+this.prefix+'Ballot_contract_attribute_voters_delegate"> delegate:'
+	'      		<div class="Struct_attribute_value" id="'+this.prefix+'Ballot_voters_delegate_value"> </div>'
+	'    	</div>'
+	'    	<div class="Struct_attribute" id="'+this.prefix+'Ballot_contract_attribute_voters_vote"> vote:'
+	'      		<div class="Struct_attribute_value" id="'+this.prefix+'Ballot_voters_vote_value"> </div>'
+	'    	</div>'
+	'  </div>'
;
}

//print the contract div around
this.createSeletonGui=function(inner) {
	return 	'<!-- gui for Ballot_contract -->'
+	'	<div class="contract" id="'+this.prefix+'Ballot_contract">'
+ inner
+'</div>';
}


//eventguis

}//end guifactory
// script for Ballot gui controller
function BallotController() {

	this.instance = undefined;
	this.prefix='';
	this.contractAddress = undefined; 
	this.eventlogPrefix = '';
	var self = this;

// bind buttons
	this.bindGui=function() {
		var btn = document.getElementById(self.prefix+'BallotController.setAddress');
		if(btn!=undefined)		
			btn.onclick = this.setAddress;

		var btn = document.getElementById(self.prefix+'Ballot_updateAttributes');
		if(btn!=undefined)
			btn.onclick = this._updateAttributes;
		var btn = document.getElementById(self.prefix+'BallotController.Ballot_Ballot_string_bytes32');
		if(btn!=undefined)
			btn.onclick = this.Ballot_Ballot_string_bytes32;
		var btn = document.getElementById(self.prefix+'BallotController.Ballot_giveRightToVote_address');
		if(btn!=undefined)
			btn.onclick = this.Ballot_giveRightToVote_address;
		var btn = document.getElementById(self.prefix+'BallotController.Ballot_delegateTo_address');
		if(btn!=undefined)
			btn.onclick = this.Ballot_delegateTo_address;
		var btn = document.getElementById(self.prefix+'BallotController.Ballot_voteFor_uint');
		if(btn!=undefined)
			btn.onclick = this.Ballot_voteFor_uint;
		var btn = document.getElementById(self.prefix+'BallotController.Ballot_winningProposal');
		if(btn!=undefined)
			btn.onclick = this.Ballot_winningProposal;
	}
	// set function
	this.setAddress=function() {
	var _address = document.getElementById(self.prefix+'Ballot_address');
	if(_address==null)return;

	self.Ballot_instance = BallotContract.at(_address.value);
	self.contractAddress = _address.value;
	self._updateAttributes();
}
//update attributes
this._updateAttributes=function () {
if(this.instance===null) return;
// update attributes
	var chairperson_res = self.instance.chairperson();
	var e = document.getElementById(self.prefix+'Ballot_chairperson_value');
	if(chairperson_res!=null && e!=null)
		e.innerText = chairperson_res;
	var proposals_res = self.instance.proposals();
	var e = document.getElementById(self.prefix+'Ballot_proposals_value');
	if(proposals_res!=null && e!=null)
		e.innerText = proposals_res;
	var ballotName_res = self.instance.ballotName();
	var e = document.getElementById(self.prefix+'Ballot_ballotName_value');
	if(ballotName_res!=null && e!=null)
		e.innerText = ballotName_res;
var e = document.getElementById(self.prefix+'Ballot_contract_attribute_voters_input');
if(e!=null){
	var _key = e.value;
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
	}}
}

//call functions
//function Ballot_Ballot
this.Ballot_Ballot_string_bytes32=function() {
	var e = document.getElementById(self.prefix+'Ballot_Ballot_string_bytes32_name');
	if(e!=null)
		var param_name = e.value;
	var e = document.getElementById(self.prefix+'Ballot_Ballot_string_bytes32_proposalNames');
	if(e!=null)
		var param_proposalNames = e.value;
	var res = self.instance.Ballot(param_name, param_proposalNames);
}
//function Ballot_giveRightToVote
this.Ballot_giveRightToVote_address=function() {
	var e = document.getElementById(self.prefix+'Ballot_giveRightToVote_address_voter');
	if(e!=null)
		var param_voter = e.value;
	var res = self.instance.giveRightToVote(param_voter);
}
//function Ballot_delegateTo
this.Ballot_delegateTo_address=function() {
	var e = document.getElementById(self.prefix+'Ballot_delegateTo_address_to');
	if(e!=null)
		var param_to = e.value;
	var res = self.instance.delegateTo(param_to);
}
//function Ballot_voteFor
this.Ballot_voteFor_uint=function() {
	var e = document.getElementById(self.prefix+'Ballot_voteFor_uint_proposal');
	if(e!=null)
		var param_proposal = e.value;
	var res = self.instance.voteFor(param_proposal);
}
//function Ballot_winningProposal
this.Ballot_winningProposal=function() {
	var res = self.instance.winningProposal();
	var e = document.getElementById(self.prefix+'Ballot_winningProposal_res');
	if(res!=null && e!=null)
		e.innerText = res;
}

//delegated calls

}// end controller	


//class as GlueCode BallotManager
//uses prefix + 'GuiContainer'
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

	this.addGui = function() {
		var e = document.getElementById(this.containerId);
		if(e==null)return;
		var elemDiv = document.createElement('div');
		elemDiv.id= this.prefix +'Ballot_gui';
		e.appendChild(elemDiv);
		elemDiv.innerHTML = this.createGui(this.g);
		var e = document.getElementById(this.prefix+'Ballot_address');
		if(e!=null)
			e.value = this.c.contractAddress;
		this.c.bindGui();
	}	
	this.clearGui = function(){
		var e = document.getElementById(this.containerId);
		e.innerHTML ='';
	}
	this.createGui = function(guifactory){
		var txt ='';
		txt = txt + guifactory.createDefaultGui();
		return guifactory.createSeletonGui(txt);

	}
	this.createSmallGui = function(guifactory){
		var txt ='';
		txt = txt + guifactory.createAttributesGui();
		return guifactory.createSeletonGui(txt);

	}
	this.updateGui = function(){
		this.c._updateAttributes();
	}
	this.getContract = function(){
		return this.c.instance;
	}

//watch events
	this.watchEvents=function(){
	}

}// end of manager

function BallotGuiMananger(guiId){
	this.prefix = guiId;
	this.managers=new Array();	//[];		
	
	this.addManager = function(contract) {
		var m = new BallotManager(contract.address,contract,this.prefix);
		m.watchEvents();
		this.managers.push(m);
		//manager.addGui();
	}
			
	this.clearGui = function(){
		var e = document.getElementById(this.prefix);
		if(e!==undefined)
			e.innerHTML ='';
	}
			
	this.displayGui = function(){
		var e = document.getElementById(this.prefix);
		if(e==undefined) return;
		for (i in this.managers) {
			var manager = this.managers[i] ;
			var elemDiv = document.createElement('div');
			elemDiv.id= manager.prefix + 'GuiContainer';//'Ballot_gui';
			e.appendChild(elemDiv);
			elemDiv.innerHTML = manager.createGui(manager.g);
		}
	}
	this.displaySimpleGui = function(){
		for (i in this.managers) {
			var manager = this.managers[i] ;
			manager.addGui();
		}
	}

	this.updateGui = function(){
		for (i in this.managers) {
			this.managers[i].updateGui();
		}
//		console.log('update');
	}
}// end of gui mananger

//Start of user code custom_Ballot_js
//TODO: implement
//End of user code
//the page Object fro the VotingPage.
function VotingPage(prefix) {
	this.prefix=prefix;
	//Start of user code page_voting_attributes
		//TODO: implement
	//End of user code

	
// default Gui
this.placeDefaultGui=function() {
this.createDefaultGui();

}
// default Gui
this.createDefaultGui=function() {
	//Start of user code page_Voting_create_default_gui_functions
		//TODO: implement
	//End of user code
}
	//Start of user code page_Voting_functions
		//TODO: implement
	//End of user code

}// end of VotingPage
