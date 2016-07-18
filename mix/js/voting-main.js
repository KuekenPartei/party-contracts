
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
//	console.log(this.prefix+' place gui');
	document.getElementById(this.prefix+'Ballot_gui').innerHTML = this.createDefaultGui();
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
this.createBallotSeletonGui=function(inner) {
	return 	'<!-- gui for Ballot_contract -->'
+	'	<div class="contract" id="'+this.prefix+'Ballot_contract">'
+ inner
+'</div>';
}


//eventguis

}//end guifactory
// script for Ballot gui controller
function BallotController() {

	this.Ballot_instance = undefined;
	this.prefix='';
	this.contractAddress = undefined; 
	var self = this;

// bind buttons
	this.bindGui=function() {
		var btn = document.getElementById(self.prefix+'BallotController.setAddress');
//	console.log('bind:' + self.prefix+' '+btn);
		if(btn!=undefined)		
			btn.onclick = this.setAddress;

		var btn = document.getElementById(self.prefix+'Ballot_updateAttributes');
//		console.log('bind update:' + self.prefix+' '+btn);
		if(btn!=undefined)
			btn.onclick = this._updateAttributes;
		var btn = document.getElementById(self.prefix+'BallotController.Ballot_Ballot_string_bytes32');
//		console.log('bind:Ballot_Ballot ' + self.prefix+' '+btn+'  '+self.Ballot_Ballot_string_bytes32);//Ballot_Ballot);
		if(btn!=undefined)
			btn.onclick = this.Ballot_Ballot_string_bytes32;
		var btn = document.getElementById(self.prefix+'BallotController.Ballot_giveRightToVote_address');
//		console.log('bind:Ballot_giveRightToVote ' + self.prefix+' '+btn+'  '+self.Ballot_giveRightToVote_address);//Ballot_giveRightToVote);
		if(btn!=undefined)
			btn.onclick = this.Ballot_giveRightToVote_address;
		var btn = document.getElementById(self.prefix+'BallotController.Ballot_delegateTo_address');
//		console.log('bind:Ballot_delegateTo ' + self.prefix+' '+btn+'  '+self.Ballot_delegateTo_address);//Ballot_delegateTo);
		if(btn!=undefined)
			btn.onclick = this.Ballot_delegateTo_address;
		var btn = document.getElementById(self.prefix+'BallotController.Ballot_voteFor_uint');
//		console.log('bind:Ballot_voteFor ' + self.prefix+' '+btn+'  '+self.Ballot_voteFor_uint);//Ballot_voteFor);
		if(btn!=undefined)
			btn.onclick = this.Ballot_voteFor_uint;
		var btn = document.getElementById(self.prefix+'BallotController.Ballot_winningProposal');
//		console.log('bind:Ballot_winningProposal ' + self.prefix+' '+btn+'  '+self.Ballot_winningProposal);//Ballot_winningProposal);
		if(btn!=undefined)
			btn.onclick = this.Ballot_winningProposal;
	}
	// set function
	this.setAddress=function() {
	var _address = document.getElementById(self.prefix+'Ballot_address');
//	console.log('setAddress:' + self.prefix+' '+_address);
	self.Ballot_instance = BallotContract.at(_address.value);
	self.contractAddress = _address.value;
	self._updateAttributes();
}
//update attributes
this._updateAttributes=function () {
if(this.Ballot_instance===null) return;
//console.log('updateAttributes:' + self.prefix);
// update attributes
	var chairperson_res = self.Ballot_instance.chairperson();
//	console.log('get:chairperson' + self.prefix);

	if(chairperson_res!=null)
		document.getElementById(self.prefix+'Ballot_chairperson_value').innerText = chairperson_res;
	var proposals_res = self.Ballot_instance.proposals();
//	console.log('get:proposals' + self.prefix);

	if(proposals_res!=null)
		document.getElementById(self.prefix+'Ballot_proposals_value').innerText = proposals_res;
	var ballotName_res = self.Ballot_instance.ballotName();
//	console.log('get:ballotName' + self.prefix);

	if(ballotName_res!=null)
		document.getElementById(self.prefix+'Ballot_ballotName_value').innerText = ballotName_res;
	var _key = document.getElementById(self.prefix+'Ballot_contract_attribute_voters_input').value;
	var voters_res = self.Ballot_instance.voters(_key);
	if(voters_res!=null){
		document.getElementById(self.prefix+'Ballot_voters_weight_value').innerText = voters_res[0];
		document.getElementById(self.prefix+'Ballot_voters_voted_value').innerText = voters_res[1];
		document.getElementById(self.prefix+'Ballot_voters_delegate_value').innerText = voters_res[2];
		document.getElementById(self.prefix+'Ballot_voters_vote_value').innerText = voters_res[3];
	}
}

//call functions
//function Ballot_Ballot
this.Ballot_Ballot_string_bytes32=function() {
//console.log('function:Ballot' + self.prefix);
	var e = document.getElementById(self.prefix+'Ballot_Ballot_string_bytes32_name');
//	console.log(':' + self.prefix+'Ballot_Ballot_string_bytes32_name'+": "+e);
	var param_name = e.value;
	var e = document.getElementById(self.prefix+'Ballot_Ballot_string_bytes32_proposalNames');
//	console.log(':' + self.prefix+'Ballot_Ballot_string_bytes32_proposalNames'+": "+e);
	var param_proposalNames = e.value;
//	console.log(':' +self.Ballot_instance+':');
	var res = self.Ballot_instance.Ballot(param_name, param_proposalNames);
}
//function Ballot_giveRightToVote
this.Ballot_giveRightToVote_address=function() {
//console.log('function:giveRightToVote' + self.prefix);
	var e = document.getElementById(self.prefix+'Ballot_giveRightToVote_address_voter');
//	console.log(':' + self.prefix+'Ballot_giveRightToVote_address_voter'+": "+e);
	var param_voter = e.value;
//	console.log(':' +self.Ballot_instance+':');
	var res = self.Ballot_instance.giveRightToVote(param_voter);
}
//function Ballot_delegateTo
this.Ballot_delegateTo_address=function() {
//console.log('function:delegateTo' + self.prefix);
	var e = document.getElementById(self.prefix+'Ballot_delegateTo_address_to');
//	console.log(':' + self.prefix+'Ballot_delegateTo_address_to'+": "+e);
	var param_to = e.value;
//	console.log(':' +self.Ballot_instance+':');
	var res = self.Ballot_instance.delegateTo(param_to);
}
//function Ballot_voteFor
this.Ballot_voteFor_uint=function() {
//console.log('function:voteFor' + self.prefix);
	var e = document.getElementById(self.prefix+'Ballot_voteFor_uint_proposal');
//	console.log(':' + self.prefix+'Ballot_voteFor_uint_proposal'+": "+e);
	var param_proposal = e.value;
//	console.log(':' +self.Ballot_instance+':');
	var res = self.Ballot_instance.voteFor(param_proposal);
}
//function Ballot_winningProposal
this.Ballot_winningProposal=function() {
//console.log('function:winningProposal' + self.prefix);
//	console.log(':' +self.Ballot_instance+':');
	var res = self.Ballot_instance.winningProposal();
	if(res!=null)
		document.getElementById(self.prefix+'Ballot_winningProposal_res').innerText = res;
}

//delegated calls

}// end controller	


// script for Ballot
function BallotModel(prefix) {
	this.prefix = prefix;
	this.guiFactory = new BallotGuiFactory();
	this.controller = new BallotController();
	this.guiFactory.prefix = prefix;
	this.controller.prefix = prefix;
}
BallotModel.prototype.create=function () {
	this.guiFactory.placeDefaultGui();
	this.controller._updateAttributes();
}


//class as GlueCode
//uses prefix + 'GuiContainer'
function BallotManager(prefix,contract) {
	this.prefix = prefix;
	var self = this;
	this.c = new BallotController();
	this.c.prefix=prefix;
	this.c.Ballot_instance=contract;
	this.c.contractAddress = contract.address;
	this.g = new BallotGuiFactory();
	this.g.prefix = prefix;

	this.addGui = function() {
		var e = document.getElementById(this.prefix + 'GuiContainer');
//console.log('addGui:' + this.prefix+ 'GuiContainer'+e);
		var elemDiv = document.createElement('div');
		elemDiv.id= this.prefix +'Ballot_gui';
		e.appendChild(elemDiv);
		this.g.placeDefaultGui();
		document.getElementById(this.prefix+'Ballot_address').value = this.c.contractAddress;
		this.c.bindGui();
	}	
	this.clearGui = function(){
		var e = document.getElementById(this.prefix + 'GuiContainer');
		e.innerHTML ='';
	}
	this.updateGui = function(){
		this.c._updateAttributes();
	}
	this.getContract = function(){
		return this.c.Ballot_instance;
	}

}// end of manager

function BallotGuiMananger(guiId){
	this.prefix = guiId;
	this.managers=new Array();	//[];		
	
	this.addManager = function(contract) {
//console.log('addManager:'+contract);
		var m = new BallotManager(contract.address,contract);
		this.managers.push(m);
		//manager.addGui();
	}
			
	this.clearGui = function(){
		var e = document.getElementById(this.prefix);
//console.log('clear gui:'+this.prefix+e);
		if(e!==undefined)
			e.innerHTML ='';
	}
			
	this.displayGui = function(){
		var e = document.getElementById(this.prefix);
//console.log('displayGui:'+this.prefix +e);
		if(e==undefined) return;
		for (i in this.managers) {
			var elemDiv = document.createElement('div');
			elemDiv.id= this.managers[i].prefix + 'GuiContainer';//'Ballot_gui';
			e.appendChild(elemDiv);
//console.log('add:'+elemDiv.id);
			this.managers[i].addGui();
		}
	}

	this.updateGui = function(){
		for (i in this.managers) {
			this.managers[i].updateGui();
		}
//		console.log('update');
	}
}// end of gui mananger

