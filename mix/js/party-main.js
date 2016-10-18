// file header
// contractVariable for Organ
var OrganContract = web3.eth.contract([
{"constant":true,"inputs":[],"name":"memberRegistry","outputs":[{"name":"","type":"address"}],"type":"function"},
{"constant":true,"inputs":[],"name":"mangerCount","outputs":[{"name":"","type":"uint"}],"type":"function"},
{"constant":true,"inputs":[],"name":"organName","outputs":[{"name":"","type":"string"}],"type":"function"},
{"constant":true,"inputs":[],"name":"lastFunctionId","outputs":[{"name":"","type":"uint"}],"type":"function"},
{"constant":true,"inputs":[],"name":"blogRegistry","outputs":[{"name":"","type":"address"}],"type":"function"},
{"constant":true,"inputs":[],"name":"isActive","outputs":[{"name":"","type":"bool"}],"type":"function"},
{"constant":true,"inputs":[],"name":"ballotCount","outputs":[{"name":"","type":"uint"}],"type":"function"},
{"constant": true,"inputs": [{"name": "","type": "organFunctions"}],"name": "organFunctions","outputs": [
{ "name": "currentMember", "type": "address"}
,{ "name": "functionName", "type": "string"}
,{ "name": "id", "type": "uint"}
,{ "name": "constitutionHash", "type": "string"}
,{ "name": "lastMemberChanged", "type": "uint"}
,{ "name": "lastConstitutionHashChanged", "type": "uint"}
,{ "name": "publisher", "type": "address"}
],"type": "function"	},
//

{"constant": true,"inputs": [{"name": "","type": "managers"}],"name": "managers","outputs": [
{ "name": "", "type": "bool"}
],"type": "function"	},
//

{"constant": true,"inputs": [{"name": "","type": "uint"}],"name": "ballots","outputs": [
{ "name": "", "type": "address"}
],"type": "function"	},
  {
    "constant": false,
    "inputs": [{"name": "_id","type": "uint"},{"name": "_address","type": "address"}],    
    "name": "changeMember",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [{"name": "_newManagerAddress","type": "address"}],    
    "name": "addManager",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [{"name": "_functionName","type": "string"},{"name": "_constittiutionHash","type": "string"}],    
    "name": "createFunction",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [{"name": "_managerAddress","type": "address"}],    
    "name": "removeManager",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [],    
    "name": "initalizeOrgan",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [{"name": "_managerAddress","type": "address"}],    
    "name": "isManager",
    "outputs": [{"name": "","type": "bool"}],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [{"name": "id","type": "uint"},{"name": "message","type": "string"},{"name": "hash","type": "string"},{"name": "er","type": "string"}],    
    "name": "publishFunctionMessage",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [{"name": "name","type": "string"},{"name": "proposalNames","type": "bytes32"}],    
    "name": "createBallot",
    "outputs": [{"name": "","type": "uint"}],
    "type": "function"
  }
,  {
    "constant": true,
    "inputs": [{"name": "id","type": "uint"}],    
    "name": "getFunctionBlogAddress",
    "outputs": [{"name": "","type": "address"}],
    "type": "function"
  }
,  {
    "constant": true,
    "inputs": [],    
    "name": "getLastBallot",
    "outputs": [{"name": "","type": "address"}],
    "type": "function"
  }
,  {
    "constant": true,
    "inputs": [],    
    "name": "getOrganBlog",
    "outputs": [{"name": "","type": "address"}],
    "type": "function"
  }
 ,
  { "constant": true,
    "inputs": [{"name": "oldMember","type": "address"},{"name": "functionId","type": "uint"},{"name": "newMember","type": "address"}],    
    "name": "FunctionMemberChange",
    "type": "event"  }
]);   
// contractVariable for Party
var PartyContract = web3.eth.contract([
{"constant":true,"inputs":[],"name":"mangerCount","outputs":[{"name":"","type":"uint"}],"type":"function"},
{"constant":true,"inputs":[],"name":"constitutionHash","outputs":[{"name":"","type":"string"}],"type":"function"},
{"constant":true,"inputs":[],"name":"organCount","outputs":[{"name":"","type":"uint"}],"type":"function"},
{"constant":true,"inputs":[],"name":"blogregistry","outputs":[{"name":"","type":"address"}],"type":"function"},
{"constant": true,"inputs": [{"name": "","type": "managers"}],"name": "managers","outputs": [
{ "name": "", "type": "bool"}
],"type": "function"	},
//

{"constant": true,"inputs": [{"name": "","type": "uint"}],"name": "organs","outputs": [
{ "name": "", "type": "address"}
],"type": "function"	},
  {
    "constant": false,
    "inputs": [],    
    "name": "Party",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [{"name": "_newManagerAddress","type": "address"}],    
    "name": "addManager",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [{"name": "organName","type": "string"}],    
    "name": "createOrgan",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [{"name": "_managerAddress","type": "address"}],    
    "name": "removeManager",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [{"name": "_managerAddress","type": "address"}],    
    "name": "isManager",
    "outputs": [{"name": "","type": "bool"}],
    "type": "function"
  }
 ,
  { "constant": true,
    "inputs": [],    
    "name": "ConstiutionChange",
    "type": "event"  }
]);   
// contractVariable for KUEKeNParty
var KUEKeNPartyContract = web3.eth.contract([
{"constant":true,"inputs":[],"name":"mangerCount","outputs":[{"name":"","type":"uint"}],"type":"function"},
{"constant":true,"inputs":[],"name":"constitutionHash","outputs":[{"name":"","type":"string"}],"type":"function"},
{"constant":true,"inputs":[],"name":"organCount","outputs":[{"name":"","type":"uint"}],"type":"function"},
{"constant":true,"inputs":[],"name":"blogregistry","outputs":[{"name":"","type":"address"}],"type":"function"},
{"constant": true,"inputs": [{"name": "","type": "managers"}],"name": "managers","outputs": [
{ "name": "", "type": "bool"}
],"type": "function"	},
//

{"constant": true,"inputs": [{"name": "","type": "uint"}],"name": "organs","outputs": [
{ "name": "", "type": "address"}
],"type": "function"	},
  {
    "constant": false,
    "inputs": [],    
    "name": "KUEKeNParty",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [],    
    "name": "Party",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [{"name": "_newManagerAddress","type": "address"}],    
    "name": "addManager",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [{"name": "fc","type": "address"},{"name": "br","type": "address"}],    
    "name": "boostrapParty",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [{"name": "organName","type": "string"}],    
    "name": "createOrgan",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [{"name": "_managerAddress","type": "address"}],    
    "name": "removeManager",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [{"name": "_managerAddress","type": "address"}],    
    "name": "isManager",
    "outputs": [{"name": "","type": "bool"}],
    "type": "function"
  }
 
]);   
// contractVariable for Conference
var ConferenceContract = web3.eth.contract([
{"constant":true,"inputs":[],"name":"memberRegistry","outputs":[{"name":"","type":"address"}],"type":"function"},
{"constant":true,"inputs":[],"name":"accreditatedMembers","outputs":[{"name":"","type":"uint"}],"type":"function"},
{"constant":true,"inputs":[],"name":"mangerCount","outputs":[{"name":"","type":"uint"}],"type":"function"},
{"constant":true,"inputs":[],"name":"organName","outputs":[{"name":"","type":"string"}],"type":"function"},
{"constant":true,"inputs":[],"name":"date","outputs":[{"name":"","type":"uint"}],"type":"function"},
{"constant":true,"inputs":[],"name":"lastFunctionId","outputs":[{"name":"","type":"uint"}],"type":"function"},
{"constant":true,"inputs":[],"name":"blogRegistry","outputs":[{"name":"","type":"address"}],"type":"function"},
{"constant":true,"inputs":[],"name":"isActive","outputs":[{"name":"","type":"bool"}],"type":"function"},
{"constant":true,"inputs":[],"name":"ballotCount","outputs":[{"name":"","type":"uint"}],"type":"function"},
{"constant": true,"inputs": [{"name": "","type": "organFunctions"}],"name": "organFunctions","outputs": [
{ "name": "currentMember", "type": "address"}
,{ "name": "functionName", "type": "string"}
,{ "name": "id", "type": "uint"}
,{ "name": "constitutionHash", "type": "string"}
,{ "name": "lastMemberChanged", "type": "uint"}
,{ "name": "lastConstitutionHashChanged", "type": "uint"}
,{ "name": "publisher", "type": "address"}
],"type": "function"	},
//

{"constant": true,"inputs": [{"name": "","type": "managers"}],"name": "managers","outputs": [
{ "name": "", "type": "bool"}
],"type": "function"	},
//

  {
    "constant": false,
    "inputs": [{"name": "_address","type": "address"}],    
    "name": "accreditationMember",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [{"name": "_id","type": "uint"},{"name": "_address","type": "address"}],    
    "name": "changeMember",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [{"name": "_newManagerAddress","type": "address"}],    
    "name": "addManager",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [{"name": "_functionName","type": "string"},{"name": "_constittiutionHash","type": "string"}],    
    "name": "createFunction",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [{"name": "_managerAddress","type": "address"}],    
    "name": "removeManager",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [],    
    "name": "initalizeOrgan",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [{"name": "_managerAddress","type": "address"}],    
    "name": "isManager",
    "outputs": [{"name": "","type": "bool"}],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [{"name": "id","type": "uint"},{"name": "message","type": "string"},{"name": "hash","type": "string"},{"name": "er","type": "string"}],    
    "name": "publishFunctionMessage",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [{"name": "name","type": "string"},{"name": "proposalNames","type": "bytes32"}],    
    "name": "createBallot",
    "outputs": [{"name": "","type": "uint"}],
    "type": "function"
  }
,  {
    "constant": true,
    "inputs": [{"name": "id","type": "uint"}],    
    "name": "getFunctionBlogAddress",
    "outputs": [{"name": "","type": "address"}],
    "type": "function"
  }
,  {
    "constant": true,
    "inputs": [],    
    "name": "getLastBallot",
    "outputs": [{"name": "","type": "address"}],
    "type": "function"
  }
,  {
    "constant": true,
    "inputs": [],    
    "name": "getOrganBlog",
    "outputs": [{"name": "","type": "address"}],
    "type": "function"
  }
 ,
  { "constant": true,
    "inputs": [{"name": "memberId","type": "uint"},{"name": "memberName","type": "string"},{"name": "memberAddress","type": "address"}],    
    "name": "MemberAccreditated",
    "type": "event"  }
]);   
// contractVariable for FoundationConference
var FoundationConferenceContract = web3.eth.contract([
{"constant":true,"inputs":[],"name":"memberRegistry","outputs":[{"name":"","type":"address"}],"type":"function"},
{"constant":true,"inputs":[],"name":"accreditatedMembers","outputs":[{"name":"","type":"uint"}],"type":"function"},
{"constant":true,"inputs":[],"name":"mangerCount","outputs":[{"name":"","type":"uint"}],"type":"function"},
{"constant":true,"inputs":[],"name":"organName","outputs":[{"name":"","type":"string"}],"type":"function"},
{"constant":true,"inputs":[],"name":"date","outputs":[{"name":"","type":"uint"}],"type":"function"},
{"constant":true,"inputs":[],"name":"lastFunctionId","outputs":[{"name":"","type":"uint"}],"type":"function"},
{"constant":true,"inputs":[],"name":"blogRegistry","outputs":[{"name":"","type":"address"}],"type":"function"},
{"constant":true,"inputs":[],"name":"isActive","outputs":[{"name":"","type":"bool"}],"type":"function"},
{"constant":true,"inputs":[],"name":"ballotCount","outputs":[{"name":"","type":"uint"}],"type":"function"},
{"constant": true,"inputs": [{"name": "","type": "organFunctions"}],"name": "organFunctions","outputs": [
{ "name": "currentMember", "type": "address"}
,{ "name": "functionName", "type": "string"}
,{ "name": "id", "type": "uint"}
,{ "name": "constitutionHash", "type": "string"}
,{ "name": "lastMemberChanged", "type": "uint"}
,{ "name": "lastConstitutionHashChanged", "type": "uint"}
,{ "name": "publisher", "type": "address"}
],"type": "function"	},
//

{"constant": true,"inputs": [{"name": "","type": "managers"}],"name": "managers","outputs": [
{ "name": "", "type": "bool"}
],"type": "function"	},
//

  {
    "constant": false,
    "inputs": [{"name": "_address","type": "address"}],    
    "name": "accreditationMember",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [{"name": "_id","type": "uint"},{"name": "_address","type": "address"}],    
    "name": "changeMember",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [{"name": "_newManagerAddress","type": "address"}],    
    "name": "addManager",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [{"name": "_functionName","type": "string"},{"name": "_constittiutionHash","type": "string"}],    
    "name": "createFunction",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [{"name": "_managerAddress","type": "address"}],    
    "name": "removeManager",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [],    
    "name": "initalizeOrgan",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [{"name": "_managerAddress","type": "address"}],    
    "name": "isManager",
    "outputs": [{"name": "","type": "bool"}],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [{"name": "id","type": "uint"},{"name": "message","type": "string"},{"name": "hash","type": "string"},{"name": "er","type": "string"}],    
    "name": "publishFunctionMessage",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [{"name": "name","type": "string"},{"name": "proposalNames","type": "bytes32"}],    
    "name": "createBallot",
    "outputs": [{"name": "","type": "uint"}],
    "type": "function"
  }
,  {
    "constant": true,
    "inputs": [{"name": "id","type": "uint"}],    
    "name": "getFunctionBlogAddress",
    "outputs": [{"name": "","type": "address"}],
    "type": "function"
  }
,  {
    "constant": true,
    "inputs": [],    
    "name": "getLastBallot",
    "outputs": [{"name": "","type": "address"}],
    "type": "function"
  }
,  {
    "constant": true,
    "inputs": [],    
    "name": "getOrganBlog",
    "outputs": [{"name": "","type": "address"}],
    "type": "function"
  }
 
]);   


/**
* A simple bean class around the contract.
* The OrganModel.
**/
function OrganModel(contract) {
this.contract = contract;
	/**
	* Getter for memberRegistry.
	**/
	this.getMemberRegistry = function(){
		return contract.memberRegistry(); 
	}
	/**
	* Getter for mangerCount.
	**/
	this.getMangerCount = function(){
		return contract.mangerCount(); 
	}
	/**
	* Getter for organName.
	**/
	this.getOrganName = function(){
		return contract.organName(); 
	}
	/**
	* Getter for lastFunctionId.
	**/
	this.getLastFunctionId = function(){
		return contract.lastFunctionId(); 
	}
	/**
	* Getter for blogRegistry.
	**/
	this.getBlogRegistry = function(){
		return contract.blogRegistry(); 
	}
	/**
	* Getter for isActive.
	**/
	this.getIsActive = function(){
		return contract.isActive(); 
	}
	/**
	* Getter for ballotCount.
	**/
	this.getBallotCount = function(){
		return contract.ballotCount(); 
	}
	/**
	* Call changeMember.
	**/
	this.changeMember = function(_id,_address){
		return contract.changeMember(_id,_address); 
	}
	/**
	* Call addManager.
	**/
	this.addManager = function(_newManagerAddress){
		return contract.addManager(_newManagerAddress); 
	}
	/**
	* Call createFunction.
	**/
	this.createFunction = function(_functionName,_constittiutionHash){
		return contract.createFunction(_functionName,_constittiutionHash); 
	}
	/**
	* Call removeManager.
	**/
	this.removeManager = function(_managerAddress){
		return contract.removeManager(_managerAddress); 
	}
	/**
	* Call initalizeOrgan.
	**/
	this.initalizeOrgan = function(){
		return contract.initalizeOrgan(); 
	}
	/**
	* Call isManager.
	**/
	this.isManager = function(_managerAddress){
		return contract.isManager(_managerAddress); 
	}
	/**
	* Call publishFunctionMessage.
	**/
	this.publishFunctionMessage = function(id,message,hash,er){
		return contract.publishFunctionMessage(id,message,hash,er); 
	}
	/**
	* Call createBallot.
	**/
	this.createBallot = function(name,proposalNames){
		return contract.createBallot(name,proposalNames); 
	}
	/**
	* Call getFunctionBlogAddress.
	**/
	this.getFunctionBlogAddress = function(id){
		return contract.getFunctionBlogAddress(id); 
	}
	/**
	* Call getLastBallot.
	**/
	this.getLastBallot = function(){
		return contract.getLastBallot(); 
	}
	/**
	* Call getOrganBlog.
	**/
	this.getOrganBlog = function(){
		return contract.getOrganBlog(); 
	}
}// end of function OrganModel

/**
* Gui factory Organ
**/
function OrganGuiFactory() {
	this.prefix='';
	
	/**
	* Places the default gui to 'e' or an element with id='Organ_gui'
	*/
	this.placeDefaultGui=function(e) {
		if(e==null)
			e = document.getElementById(this.prefix+'Organ_gui');
		if(e!=null)
			e.innerHTML = this.createDefaultGui();
		else
			console.log(this.prefix+'Organ_gui not found');
	}

	/**
	* The default generated gui with all actions and attributes.
	*/
	this.createDefaultGui=function() {
		return 		'<!-- gui for Organ_contract -->'
+		'		<div class="contract" id="'+this.prefix+'Organ_contract">'
+		'		Organ:'
+		'		  <input type="text" id="'+this.prefix+'Organ_address"> <button id="'+this.prefix+'OrganController.setAddress" onclick="'+this.prefix+'OrganController.setAddress()">change Organ Address</button>'
+		'		  <div class="contract_attributes" id="'+this.prefix+'Organ_contract_attributes"> attributes:'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Organ_contract_attribute_memberRegistry"> memberRegistry:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'Organ_memberRegistry_value"> </div>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Organ_contract_attribute_mangerCount"> mangerCount:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'Organ_mangerCount_value"> </div>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Organ_contract_attribute_organName"> organName:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'Organ_organName_value"> </div>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Organ_contract_attribute_lastFunctionId"> lastFunctionId:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'Organ_lastFunctionId_value"> </div>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Organ_contract_attribute_blogRegistry"> blogRegistry:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'Organ_blogRegistry_value"> </div>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Organ_contract_attribute_isActive"> isActive:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'Organ_isActive_value"> </div>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Organ_contract_attribute_ballotCount"> ballotCount:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'Organ_ballotCount_value"> </div>'
+		'		    </div>'
+		'		'
+		'		<div class="Value_Mapping" id="'+this.prefix+'Organ_contract_attribute_managers">mapping  managers:'
+		'				<input type="text" id="'+this.prefix+'Organ_contract_attribute_managers_input">(address)'
+		'		    	<div class="Mapping_value" id="'+this.prefix+'Organ_contract_attribute_address"> bool:'
+		'		      		<div class="contract_attribute_value" id="'+this.prefix+'Organ_managers_value"> </div>'
+		'		    	</div>'
+		'		  </div>'
+		'		<!--struct -->'
+		'		<div class="Struct_Mapping" id="'+this.prefix+'Struc_Organ_contract_attribute_organFunctions">struc mapping  organFunctions:'
+		'				<input type="number" id="'+this.prefix+'Organ_contract_attribute_organFunctions_input">(uint)'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'Organ_contract_attribute_organFunctions_currentMember"> currentMember:'
+		'		      		<div class="Struct_attribute_value" id="'+this.prefix+'Organ_organFunctions_currentMember_value"> </div>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'Organ_contract_attribute_organFunctions_functionName"> functionName:'
+		'		      		<div class="Struct_attribute_value" id="'+this.prefix+'Organ_organFunctions_functionName_value"> </div>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'Organ_contract_attribute_organFunctions_id"> id:'
+		'		      		<div class="Struct_attribute_value" id="'+this.prefix+'Organ_organFunctions_id_value"> </div>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'Organ_contract_attribute_organFunctions_constitutionHash"> constitutionHash:'
+		'		      		<div class="Struct_attribute_value" id="'+this.prefix+'Organ_organFunctions_constitutionHash_value"> </div>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'Organ_contract_attribute_organFunctions_lastMemberChanged"> lastMemberChanged:'
+		'		      		<div class="Struct_attribute_value" id="'+this.prefix+'Organ_organFunctions_lastMemberChanged_value"> </div>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'Organ_contract_attribute_organFunctions_lastConstitutionHashChanged"> lastConstitutionHashChanged:'
+		'		      		<div class="Struct_attribute_value" id="'+this.prefix+'Organ_organFunctions_lastConstitutionHashChanged_value"> </div>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'Organ_contract_attribute_organFunctions_publisher"> publisher:'
+		'		      		<div class="Struct_attribute_value" id="'+this.prefix+'Organ_organFunctions_publisher_value"> </div>'
+		'		    	</div>'
+		'		  </div>'
+		'		    <button id="'+this.prefix+'Organ_updateAttributes" onclick="'+this.prefix+'OrganController._updateAttributes()">update Organ attributes</button>'
+		'		  </div>'
+		'		  <div class="function_execution" id="'+this.prefix+'Organ_contract_function_Organ_changeMember_uint_address">'
+		'		Organ_changeMember:'
+		'			  <div class="function_parameter">_id<input type="number" id="'+this.prefix+'Organ_changeMember_uint_address__id"></div>'
+		'			  <div class="function_parameter">_address<input type="text" id="'+this.prefix+'Organ_changeMember_uint_address__address"></div>'
+		'			<button id="'+this.prefix+'OrganController.Organ_changeMember_uint_address" onclick="'+this.prefix+'OrganController.Organ_changeMember_uint_address()">execute Organ_changeMember</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_changeMember_uint_address_res"></div>'
+		'		  </div>'
+		'		  <div class="function_execution" id="'+this.prefix+'Organ_contract_function_Manageable_addManager_address">'
+		'		Organ_addManager:'
+		'			  <div class="function_parameter">_newManagerAddress<input type="text" id="'+this.prefix+'Manageable_addManager_address__newManagerAddress"></div>'
+		'			<button id="'+this.prefix+'OrganController.Manageable_addManager_address" onclick="'+this.prefix+'OrganController.Manageable_addManager_address()">execute Organ_addManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_addManager_address_res"></div>'
+		'		  </div>'
+		'		  <div class="function_execution" id="'+this.prefix+'Organ_contract_function_Organ_createFunction_string_string">'
+		'		Organ_createFunction:'
+		'			  <div class="function_parameter">_functionName<input type="text" id="'+this.prefix+'Organ_createFunction_string_string__functionName"></div>'
+		'			  <div class="function_parameter">_constittiutionHash<input type="text" id="'+this.prefix+'Organ_createFunction_string_string__constittiutionHash"></div>'
+		'			<button id="'+this.prefix+'OrganController.Organ_createFunction_string_string" onclick="'+this.prefix+'OrganController.Organ_createFunction_string_string()">execute Organ_createFunction</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_createFunction_string_string_res"></div>'
+		'		  </div>'
+		'		  <div class="function_execution" id="'+this.prefix+'Organ_contract_function_Manageable_removeManager_address">'
+		'		Organ_removeManager:'
+		'			  <div class="function_parameter">_managerAddress<input type="text" id="'+this.prefix+'Manageable_removeManager_address__managerAddress"></div>'
+		'			<button id="'+this.prefix+'OrganController.Manageable_removeManager_address" onclick="'+this.prefix+'OrganController.Manageable_removeManager_address()">execute Organ_removeManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_removeManager_address_res"></div>'
+		'		  </div>'
+		'		  <div class="function_execution" id="'+this.prefix+'Organ_contract_function_Organ_initalizeOrgan">'
+		'		Organ_initalizeOrgan:'
+		'			<button id="'+this.prefix+'OrganController.Organ_initalizeOrgan" onclick="'+this.prefix+'OrganController.Organ_initalizeOrgan()">execute Organ_initalizeOrgan</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_initalizeOrgan_res"></div>'
+		'		  </div>'
+		'		  <div class="function_execution" id="'+this.prefix+'Organ_contract_function_Manageable_isManager_address">'
+		'		Organ_isManager:'
+		'			  <div class="function_parameter">_managerAddress<input type="text" id="'+this.prefix+'Manageable_isManager_address__managerAddress"></div>'
+		'			<button id="'+this.prefix+'OrganController.Manageable_isManager_address" onclick="'+this.prefix+'OrganController.Manageable_isManager_address()">execute Organ_isManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_isManager_address_res"></div>'
+		'		  </div>'
+		'		  <div class="function_execution" id="'+this.prefix+'Organ_contract_function_Organ_publishFunctionMessage_uint_string_string_string">'
+		'		Organ_publishFunctionMessage:'
+		'			  <div class="function_parameter">id<input type="number" id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_id"></div>'
+		'			  <div class="function_parameter">message<input type="text" id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_message"></div>'
+		'			  <div class="function_parameter">hash<input type="text" id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_hash"></div>'
+		'			  <div class="function_parameter">er<input type="text" id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_er"></div>'
+		'			<button id="'+this.prefix+'OrganController.Organ_publishFunctionMessage_uint_string_string_string" onclick="'+this.prefix+'OrganController.Organ_publishFunctionMessage_uint_string_string_string()">execute Organ_publishFunctionMessage</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_res"></div>'
+		'		  </div>'
+		'		  <div class="function_execution" id="'+this.prefix+'Organ_contract_function_Organ_createBallot_string_bytes32">'
+		'		Organ_createBallot:'
+		'			  <div class="function_parameter">name<input type="text" id="'+this.prefix+'Organ_createBallot_string_bytes32_name"></div>'
+		'			  <div class="function_parameter">proposalNames<input type="text" id="'+this.prefix+'Organ_createBallot_string_bytes32_proposalNames"></div>'
+		'			<button id="'+this.prefix+'OrganController.Organ_createBallot_string_bytes32" onclick="'+this.prefix+'OrganController.Organ_createBallot_string_bytes32()">execute Organ_createBallot</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_createBallot_string_bytes32_res"></div>'
+		'		  </div>'
+		'		  <div class="function_execution" id="'+this.prefix+'Organ_contract_function_Organ_getFunctionBlogAddress_uint">'
+		'		Organ_getFunctionBlogAddress:'
+		'			  <div class="function_parameter">id<input type="number" id="'+this.prefix+'Organ_getFunctionBlogAddress_uint_id"></div>'
+		'			<button id="'+this.prefix+'OrganController.Organ_getFunctionBlogAddress_uint" onclick="'+this.prefix+'OrganController.Organ_getFunctionBlogAddress_uint()">execute Organ_getFunctionBlogAddress</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_getFunctionBlogAddress_uint_res"></div>'
+		'		  </div>'
+		'		  <div class="function_execution" id="'+this.prefix+'Organ_contract_function_Organ_getLastBallot">'
+		'		Organ_getLastBallot:'
+		'			<button id="'+this.prefix+'OrganController.Organ_getLastBallot" onclick="'+this.prefix+'OrganController.Organ_getLastBallot()">execute Organ_getLastBallot</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_getLastBallot_res"></div>'
+		'		  </div>'
+		'		  <div class="function_execution" id="'+this.prefix+'Organ_contract_function_Organ_getOrganBlog">'
+		'		Organ_getOrganBlog:'
+		'			<button id="'+this.prefix+'OrganController.Organ_getOrganBlog" onclick="'+this.prefix+'OrganController.Organ_getOrganBlog()">execute Organ_getOrganBlog</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_getOrganBlog_res"></div>'
+		'		  </div>'
+		'		'
+		'		</div>'
;
	}

	/**
	* Create the gui for the attributes.
	*/
	this.createAttributesGui=function() {
		return 		'    <div class="contract_attribute" id="'+this.prefix+'Organ_contract_attribute_memberRegistry"> memberRegistry:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'Organ_memberRegistry_value"> </div>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Organ_contract_attribute_mangerCount"> mangerCount:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'Organ_mangerCount_value"> </div>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Organ_contract_attribute_organName"> organName:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'Organ_organName_value"> </div>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Organ_contract_attribute_lastFunctionId"> lastFunctionId:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'Organ_lastFunctionId_value"> </div>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Organ_contract_attribute_blogRegistry"> blogRegistry:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'Organ_blogRegistry_value"> </div>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Organ_contract_attribute_isActive"> isActive:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'Organ_isActive_value"> </div>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Organ_contract_attribute_ballotCount"> ballotCount:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'Organ_ballotCount_value"> </div>'
+		'		    </div>'
+		'		'
;
	}

	/**
	* Create the gui for the function changeMember.
	*/
	this.createOrgan_changeMember_uint_addressGui=function() {
		return 		'  <div class="function_execution" id="'+this.prefix+'Organ_contract_function_Organ_changeMember_uint_address">'
+		'		Organ_changeMember:'
+		'			  <div class="function_parameter">_id<input type="number" id="'+this.prefix+'Organ_changeMember_uint_address__id"></div>'
+		'			  <div class="function_parameter">_address<input type="text" id="'+this.prefix+'Organ_changeMember_uint_address__address"></div>'
+		'			<button id="'+this.prefix+'OrganController.Organ_changeMember_uint_address" onclick="'+this.prefix+'OrganController.Organ_changeMember_uint_address()">execute Organ_changeMember</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_changeMember_uint_address_res"></div>'
+		'		  </div>'
;
	}

	/**
	* Create the gui for the function addManager.
	*/
	this.createManageable_addManager_addressGui=function() {
		return 		'  <div class="function_execution" id="'+this.prefix+'Organ_contract_function_Manageable_addManager_address">'
+		'		Organ_addManager:'
+		'			  <div class="function_parameter">_newManagerAddress<input type="text" id="'+this.prefix+'Manageable_addManager_address__newManagerAddress"></div>'
+		'			<button id="'+this.prefix+'OrganController.Manageable_addManager_address" onclick="'+this.prefix+'OrganController.Manageable_addManager_address()">execute Organ_addManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_addManager_address_res"></div>'
+		'		  </div>'
;
	}

	/**
	* Create the gui for the function createFunction.
	*/
	this.createOrgan_createFunction_string_stringGui=function() {
		return 		'  <div class="function_execution" id="'+this.prefix+'Organ_contract_function_Organ_createFunction_string_string">'
+		'		Organ_createFunction:'
+		'			  <div class="function_parameter">_functionName<input type="text" id="'+this.prefix+'Organ_createFunction_string_string__functionName"></div>'
+		'			  <div class="function_parameter">_constittiutionHash<input type="text" id="'+this.prefix+'Organ_createFunction_string_string__constittiutionHash"></div>'
+		'			<button id="'+this.prefix+'OrganController.Organ_createFunction_string_string" onclick="'+this.prefix+'OrganController.Organ_createFunction_string_string()">execute Organ_createFunction</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_createFunction_string_string_res"></div>'
+		'		  </div>'
;
	}

	/**
	* Create the gui for the function removeManager.
	*/
	this.createManageable_removeManager_addressGui=function() {
		return 		'  <div class="function_execution" id="'+this.prefix+'Organ_contract_function_Manageable_removeManager_address">'
+		'		Organ_removeManager:'
+		'			  <div class="function_parameter">_managerAddress<input type="text" id="'+this.prefix+'Manageable_removeManager_address__managerAddress"></div>'
+		'			<button id="'+this.prefix+'OrganController.Manageable_removeManager_address" onclick="'+this.prefix+'OrganController.Manageable_removeManager_address()">execute Organ_removeManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_removeManager_address_res"></div>'
+		'		  </div>'
;
	}

	/**
	* Create the gui for the function initalizeOrgan.
	*/
	this.createOrgan_initalizeOrganGui=function() {
		return 		'  <div class="function_execution" id="'+this.prefix+'Organ_contract_function_Organ_initalizeOrgan">'
+		'		Organ_initalizeOrgan:'
+		'			<button id="'+this.prefix+'OrganController.Organ_initalizeOrgan" onclick="'+this.prefix+'OrganController.Organ_initalizeOrgan()">execute Organ_initalizeOrgan</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_initalizeOrgan_res"></div>'
+		'		  </div>'
;
	}

	/**
	* Create the gui for the function isManager.
	*/
	this.createManageable_isManager_addressGui=function() {
		return 		'  <div class="function_execution" id="'+this.prefix+'Organ_contract_function_Manageable_isManager_address">'
+		'		Organ_isManager:'
+		'			  <div class="function_parameter">_managerAddress<input type="text" id="'+this.prefix+'Manageable_isManager_address__managerAddress"></div>'
+		'			<button id="'+this.prefix+'OrganController.Manageable_isManager_address" onclick="'+this.prefix+'OrganController.Manageable_isManager_address()">execute Organ_isManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_isManager_address_res"></div>'
+		'		  </div>'
;
	}

	/**
	* Create the gui for the function publishFunctionMessage.
	*/
	this.createOrgan_publishFunctionMessage_uint_string_string_stringGui=function() {
		return 		'  <div class="function_execution" id="'+this.prefix+'Organ_contract_function_Organ_publishFunctionMessage_uint_string_string_string">'
+		'		Organ_publishFunctionMessage:'
+		'			  <div class="function_parameter">id<input type="number" id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_id"></div>'
+		'			  <div class="function_parameter">message<input type="text" id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_message"></div>'
+		'			  <div class="function_parameter">hash<input type="text" id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_hash"></div>'
+		'			  <div class="function_parameter">er<input type="text" id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_er"></div>'
+		'			<button id="'+this.prefix+'OrganController.Organ_publishFunctionMessage_uint_string_string_string" onclick="'+this.prefix+'OrganController.Organ_publishFunctionMessage_uint_string_string_string()">execute Organ_publishFunctionMessage</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_res"></div>'
+		'		  </div>'
;
	}

	/**
	* Create the gui for the function createBallot.
	*/
	this.createOrgan_createBallot_string_bytes32Gui=function() {
		return 		'  <div class="function_execution" id="'+this.prefix+'Organ_contract_function_Organ_createBallot_string_bytes32">'
+		'		Organ_createBallot:'
+		'			  <div class="function_parameter">name<input type="text" id="'+this.prefix+'Organ_createBallot_string_bytes32_name"></div>'
+		'			  <div class="function_parameter">proposalNames<input type="text" id="'+this.prefix+'Organ_createBallot_string_bytes32_proposalNames"></div>'
+		'			<button id="'+this.prefix+'OrganController.Organ_createBallot_string_bytes32" onclick="'+this.prefix+'OrganController.Organ_createBallot_string_bytes32()">execute Organ_createBallot</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_createBallot_string_bytes32_res"></div>'
+		'		  </div>'
;
	}

	/**
	* Create the gui for the function getFunctionBlogAddress.
	*/
	this.createOrgan_getFunctionBlogAddress_uintGui=function() {
		return 		'  <div class="function_execution" id="'+this.prefix+'Organ_contract_function_Organ_getFunctionBlogAddress_uint">'
+		'		Organ_getFunctionBlogAddress:'
+		'			  <div class="function_parameter">id<input type="number" id="'+this.prefix+'Organ_getFunctionBlogAddress_uint_id"></div>'
+		'			<button id="'+this.prefix+'OrganController.Organ_getFunctionBlogAddress_uint" onclick="'+this.prefix+'OrganController.Organ_getFunctionBlogAddress_uint()">execute Organ_getFunctionBlogAddress</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_getFunctionBlogAddress_uint_res"></div>'
+		'		  </div>'
;
	}

	/**
	* Create the gui for the function getLastBallot.
	*/
	this.createOrgan_getLastBallotGui=function() {
		return 		'  <div class="function_execution" id="'+this.prefix+'Organ_contract_function_Organ_getLastBallot">'
+		'		Organ_getLastBallot:'
+		'			<button id="'+this.prefix+'OrganController.Organ_getLastBallot" onclick="'+this.prefix+'OrganController.Organ_getLastBallot()">execute Organ_getLastBallot</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_getLastBallot_res"></div>'
+		'		  </div>'
;
	}

	/**
	* Create the gui for the function getOrganBlog.
	*/
	this.createOrgan_getOrganBlogGui=function() {
		return 		'  <div class="function_execution" id="'+this.prefix+'Organ_contract_function_Organ_getOrganBlog">'
+		'		Organ_getOrganBlog:'
+		'			<button id="'+this.prefix+'OrganController.Organ_getOrganBlog" onclick="'+this.prefix+'OrganController.Organ_getOrganBlog()">execute Organ_getOrganBlog</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_getOrganBlog_res"></div>'
+		'		  </div>'
;
	}
	/**
	* Create the gui for the organFunctions struct element.
	*/
	this.createorganFunctionsStructGui=function() {
		return 		'<!--struct -->'
+		'		<div class="Struct_Mapping" id="'+this.prefix+'Struc_Organ_contract_attribute_organFunctions">struc mapping  organFunctions:'
+		'				<input type="number" id="'+this.prefix+'Organ_contract_attribute_organFunctions_input">(uint)'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'Organ_contract_attribute_organFunctions_currentMember"> currentMember:'
+		'		      		<div class="Struct_attribute_value" id="'+this.prefix+'Organ_organFunctions_currentMember_value"> </div>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'Organ_contract_attribute_organFunctions_functionName"> functionName:'
+		'		      		<div class="Struct_attribute_value" id="'+this.prefix+'Organ_organFunctions_functionName_value"> </div>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'Organ_contract_attribute_organFunctions_id"> id:'
+		'		      		<div class="Struct_attribute_value" id="'+this.prefix+'Organ_organFunctions_id_value"> </div>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'Organ_contract_attribute_organFunctions_constitutionHash"> constitutionHash:'
+		'		      		<div class="Struct_attribute_value" id="'+this.prefix+'Organ_organFunctions_constitutionHash_value"> </div>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'Organ_contract_attribute_organFunctions_lastMemberChanged"> lastMemberChanged:'
+		'		      		<div class="Struct_attribute_value" id="'+this.prefix+'Organ_organFunctions_lastMemberChanged_value"> </div>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'Organ_contract_attribute_organFunctions_lastConstitutionHashChanged"> lastConstitutionHashChanged:'
+		'		      		<div class="Struct_attribute_value" id="'+this.prefix+'Organ_organFunctions_lastConstitutionHashChanged_value"> </div>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'Organ_contract_attribute_organFunctions_publisher"> publisher:'
+		'		      		<div class="Struct_attribute_value" id="'+this.prefix+'Organ_organFunctions_publisher_value"> </div>'
+		'		    	</div>'
+		'		  </div>'
;
	}

	/**
	* Create a div with '@inner' as inner elements.
    * @inner - the inner text
	*/
	this.createSeletonGui=function(inner) {
		return 	'<!-- gui for Organ_contract -->'
		+	'	<div class="contract" id="'+this.prefix+'Organ_contract">'
		+ inner
		+'</div>';
	}


//eventguis

	/**
	* Create a gui for the FunctionMemberChange event.
    * @inner - the inner text
	*/
	this.createFunctionMemberChangeLogDataGui = function(prefix, blockHash, blockNumber
	,oldMember	,functionId	,newMember	) {
		return '<ul class="dapp-account-list"><li > '
        +'<a class="dapp-identicon dapp-small" style="background-image: url(identiconimage.png)"></a>'
		+'<span>'+prefix+' ('+blockNumber+')</span>'
        +'<span>'+oldMember+'</span>'
        +'<span>'+functionId+'</span>'
        +'<span>'+newMember+'</span>'
        +' </li>';
	}

}//end guifactory

/**
* Class OrganController. 
* The controller wrap's the 'instance' contract and binds all actions to document elements.
* Parameters are taken from elements with self.prefix+'functionName_parameterName'
*
* self.prefix+'OrganController.setAddress' - 
* self.prefix+'Organ_updateAttributes'     - 
* self.prefix+'Organ_changeMember_uint_address -
* self.prefix+'Manageable_addManager_address -
* self.prefix+'Organ_createFunction_string_string -
* self.prefix+'Manageable_removeManager_address -
* self.prefix+'Organ_initalizeOrgan -
* self.prefix+'Manageable_isManager_address -
* self.prefix+'Organ_publishFunctionMessage_uint_string_string_string -
* self.prefix+'Organ_createBallot_string_bytes32 -
* self.prefix+'Organ_getFunctionBlogAddress_uint -
* self.prefix+'Organ_getLastBallot -
* self.prefix+'Organ_getOrganBlog -
*/
function OrganController() {

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
		var btn = document.getElementById(self.prefix+'OrganController.setAddress');
		if(btn!=undefined)		
			btn.onclick = this.setAddress;
		else console.log('addres widget not bound');

		var btn = document.getElementById(self.prefix+'Organ_updateAttributes');
		if(btn!=undefined)
			btn.onclick = this._updateAttributes;
		else console.log('_updateAttributes widget not bound');
		var btn = document.getElementById(self.prefix+'OrganController.Organ_changeMember_uint_address');
		if(btn!=undefined)
			btn.onclick = this.Organ_changeMember_uint_address;
		else console.log('Organ_changeMember_uint_address widget not bound');
		var btn = document.getElementById(self.prefix+'OrganController.Manageable_addManager_address');
		if(btn!=undefined)
			btn.onclick = this.Manageable_addManager_address;
		else console.log('Manageable_addManager_address widget not bound');
		var btn = document.getElementById(self.prefix+'OrganController.Organ_createFunction_string_string');
		if(btn!=undefined)
			btn.onclick = this.Organ_createFunction_string_string;
		else console.log('Organ_createFunction_string_string widget not bound');
		var btn = document.getElementById(self.prefix+'OrganController.Manageable_removeManager_address');
		if(btn!=undefined)
			btn.onclick = this.Manageable_removeManager_address;
		else console.log('Manageable_removeManager_address widget not bound');
		var btn = document.getElementById(self.prefix+'OrganController.Organ_initalizeOrgan');
		if(btn!=undefined)
			btn.onclick = this.Organ_initalizeOrgan;
		else console.log('Organ_initalizeOrgan widget not bound');
		var btn = document.getElementById(self.prefix+'OrganController.Manageable_isManager_address');
		if(btn!=undefined)
			btn.onclick = this.Manageable_isManager_address;
		else console.log('Manageable_isManager_address widget not bound');
		var btn = document.getElementById(self.prefix+'OrganController.Organ_publishFunctionMessage_uint_string_string_string');
		if(btn!=undefined)
			btn.onclick = this.Organ_publishFunctionMessage_uint_string_string_string;
		else console.log('Organ_publishFunctionMessage_uint_string_string_string widget not bound');
		var btn = document.getElementById(self.prefix+'OrganController.Organ_createBallot_string_bytes32');
		if(btn!=undefined)
			btn.onclick = this.Organ_createBallot_string_bytes32;
		else console.log('Organ_createBallot_string_bytes32 widget not bound');
		var btn = document.getElementById(self.prefix+'OrganController.Organ_getFunctionBlogAddress_uint');
		if(btn!=undefined)
			btn.onclick = this.Organ_getFunctionBlogAddress_uint;
		else console.log('Organ_getFunctionBlogAddress_uint widget not bound');
		var btn = document.getElementById(self.prefix+'OrganController.Organ_getLastBallot');
		if(btn!=undefined)
			btn.onclick = this.Organ_getLastBallot;
		else console.log('Organ_getLastBallot widget not bound');
		var btn = document.getElementById(self.prefix+'OrganController.Organ_getOrganBlog');
		if(btn!=undefined)
			btn.onclick = this.Organ_getOrganBlog;
		else console.log('Organ_getOrganBlog widget not bound');
	}

	/**
	* Set the address.
	*/
	this.setAddress=function() {
		var _address = document.getElementById(self.prefix+'Organ_address');
		if(_address==null)return;

		self.Organ_instance = OrganContract.at(_address.value);
		self.contractAddress = _address.value;
		self._updateAttributes();
	}
	
	/**
	* Update attributes.
	*
	* prefix+'Organ_memberRegistry_value' - 
	* prefix+'Organ_mangerCount_value' - 
	* prefix+'Organ_organName_value' - 
	* prefix+'Organ_lastFunctionId_value' - 
	* prefix+'Organ_blogRegistry_value' - 
	* prefix+'Organ_isActive_value' - 
	* prefix+'Organ_ballotCount_value' - 
	**/
	this._updateAttributes=function () {
		if(this.instance===null) return;
		// update attributes
		var memberRegistry_res = self.instance.memberRegistry();
		var e = document.getElementById(self.prefix+'Organ_memberRegistry_value');
		if(memberRegistry_res!=null && e!=null)
			e.innerText = memberRegistry_res;
		else console.log(self.prefix+'Organ_memberRegistry_value not found');
		var mangerCount_res = self.instance.mangerCount();
		var e = document.getElementById(self.prefix+'Organ_mangerCount_value');
		if(mangerCount_res!=null && e!=null)
			e.innerText = mangerCount_res;
		else console.log(self.prefix+'Organ_mangerCount_value not found');
		var organName_res = self.instance.organName();
		var e = document.getElementById(self.prefix+'Organ_organName_value');
		if(organName_res!=null && e!=null)
			e.innerText = organName_res;
		else console.log(self.prefix+'Organ_organName_value not found');
		var lastFunctionId_res = self.instance.lastFunctionId();
		var e = document.getElementById(self.prefix+'Organ_lastFunctionId_value');
		if(lastFunctionId_res!=null && e!=null)
			e.innerText = lastFunctionId_res;
		else console.log(self.prefix+'Organ_lastFunctionId_value not found');
		var blogRegistry_res = self.instance.blogRegistry();
		var e = document.getElementById(self.prefix+'Organ_blogRegistry_value');
		if(blogRegistry_res!=null && e!=null)
			e.innerText = blogRegistry_res;
		else console.log(self.prefix+'Organ_blogRegistry_value not found');
		var isActive_res = self.instance.isActive();
		var e = document.getElementById(self.prefix+'Organ_isActive_value');
		if(isActive_res!=null && e!=null)
			e.innerText = isActive_res;
		else console.log(self.prefix+'Organ_isActive_value not found');
		var ballotCount_res = self.instance.ballotCount();
		var e = document.getElementById(self.prefix+'Organ_ballotCount_value');
		if(ballotCount_res!=null && e!=null)
			e.innerText = ballotCount_res;
		else console.log(self.prefix+'Organ_ballotCount_value not found');
		var e = document.getElementById(self.prefix+'Organ_contract_attribute_managers_input');
		if(e!=null){
			var _key = e.value;
			if(_key=='') return;
			var managers_res = self.instance.managers(_key);
			if(managers_res!=null){
				var e1 = document.getElementById(self.prefix+'Organ_managers_value');
				if(e1!=null)	
					e1.innerText = managers_res;
			}}
		var e = document.getElementById(self.prefix+'Organ_contract_attribute_organFunctions_input');
		if(e!=null){
			var _key = e.value;
			if(_key=='') return;
			var organFunctions_res = self.instance.organFunctions(_key);
			if(organFunctions_res!=null){
			var e1 = document.getElementById(self.prefix+'Organ_organFunctions_currentMember_value');
			if(e1!=null)	
				e1.innerText = organFunctions_res[0];
			var e1 = document.getElementById(self.prefix+'Organ_organFunctions_functionName_value');
			if(e1!=null)	
				e1.innerText = organFunctions_res[1];
			var e1 = document.getElementById(self.prefix+'Organ_organFunctions_id_value');
			if(e1!=null)	
				e1.innerText = organFunctions_res[2];
			var e1 = document.getElementById(self.prefix+'Organ_organFunctions_constitutionHash_value');
			if(e1!=null)	
				e1.innerText = organFunctions_res[3];
			var e1 = document.getElementById(self.prefix+'Organ_organFunctions_lastMemberChanged_value');
			if(e1!=null)	
				e1.innerText = organFunctions_res[4];
			var e1 = document.getElementById(self.prefix+'Organ_organFunctions_lastConstitutionHashChanged_value');
			if(e1!=null)	
				e1.innerText = organFunctions_res[5];
			var e1 = document.getElementById(self.prefix+'Organ_organFunctions_publisher_value');
			if(e1!=null)	
				e1.innerText = organFunctions_res[6];
			}}
	}

	//call functions
	
	/**
	* Calls the contract function Organ_canAccess.
	*
	**/
	this.Manageable_canAccess=function() {
		var res = self.instance.canAccess();
		var e = document.getElementById(self.prefix+'Manageable_canAccess_res');
		if(res!=null && e!=null)
			e.innerText = res;
	}
	
	/**
	* Calls the contract function Organ_changeMember.
	*
	* this.prefix+'Organ_changeMember_uint_address__id' -
	* this.prefix+'Organ_changeMember_uint_address__address' -
	**/
	this.Organ_changeMember_uint_address=function() {
		var e = document.getElementById(self.prefix+'Organ_changeMember_uint_address__id');
		if(e!=null)
			var param__id = e.value;
		else console.log(self.prefix+'Organ_changeMember_uint_address__id not found');
		var e = document.getElementById(self.prefix+'Organ_changeMember_uint_address__address');
		if(e!=null)
			var param__address = e.value;
		else console.log(self.prefix+'Organ_changeMember_uint_address__address not found');
		var res = self.instance.changeMember(param__id, param__address);
	}
	
	/**
	* Calls the contract function Organ_isMember.
	*
	* this.prefix+'MemberAware_isMember_address__address' -
	**/
	this.MemberAware_isMember_address=function() {
		var e = document.getElementById(self.prefix+'MemberAware_isMember_address__address');
		if(e!=null)
			var param__address = e.value;
		else console.log(self.prefix+'MemberAware_isMember_address__address not found');
		var res = self.instance.isMember(param__address);
		var e = document.getElementById(self.prefix+'MemberAware_isMember_address_res');
		if(res!=null && e!=null)
			e.innerText = res;
	}
	
	/**
	* Calls the contract function Organ_addManager.
	*
	* this.prefix+'Manageable_addManager_address__newManagerAddress' -
	**/
	this.Manageable_addManager_address=function() {
		var e = document.getElementById(self.prefix+'Manageable_addManager_address__newManagerAddress');
		if(e!=null)
			var param__newManagerAddress = e.value;
		else console.log(self.prefix+'Manageable_addManager_address__newManagerAddress not found');
		var res = self.instance.addManager(param__newManagerAddress);
	}
	
	/**
	* Calls the contract function Organ_createFunction.
	*
	* this.prefix+'Organ_createFunction_string_string__functionName' -
	* this.prefix+'Organ_createFunction_string_string__constittiutionHash' -
	**/
	this.Organ_createFunction_string_string=function() {
		var e = document.getElementById(self.prefix+'Organ_createFunction_string_string__functionName');
		if(e!=null)
			var param__functionName = e.value;
		else console.log(self.prefix+'Organ_createFunction_string_string__functionName not found');
		var e = document.getElementById(self.prefix+'Organ_createFunction_string_string__constittiutionHash');
		if(e!=null)
			var param__constittiutionHash = e.value;
		else console.log(self.prefix+'Organ_createFunction_string_string__constittiutionHash not found');
		var res = self.instance.createFunction(param__functionName, param__constittiutionHash);
	}
	
	/**
	* Calls the contract function Organ_removeManager.
	*
	* this.prefix+'Manageable_removeManager_address__managerAddress' -
	**/
	this.Manageable_removeManager_address=function() {
		var e = document.getElementById(self.prefix+'Manageable_removeManager_address__managerAddress');
		if(e!=null)
			var param__managerAddress = e.value;
		else console.log(self.prefix+'Manageable_removeManager_address__managerAddress not found');
		var res = self.instance.removeManager(param__managerAddress);
	}
	
	/**
	* Calls the contract function Organ_initalizeOrgan.
	*
	**/
	this.Organ_initalizeOrgan=function() {
		var res = self.instance.initalizeOrgan();
	}
	
	/**
	* Calls the contract function Organ_isManager.
	*
	* this.prefix+'Manageable_isManager_address__managerAddress' -
	**/
	this.Manageable_isManager_address=function() {
		var e = document.getElementById(self.prefix+'Manageable_isManager_address__managerAddress');
		if(e!=null)
			var param__managerAddress = e.value;
		else console.log(self.prefix+'Manageable_isManager_address__managerAddress not found');
		var res = self.instance.isManager(param__managerAddress);
		var e = document.getElementById(self.prefix+'Manageable_isManager_address_res');
		if(res!=null && e!=null)
			e.innerText = res;
	}
	
	/**
	* Calls the contract function Organ_publishFunctionMessage.
	*
	* this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_id' -
	* this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_message' -
	* this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_hash' -
	* this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_er' -
	**/
	this.Organ_publishFunctionMessage_uint_string_string_string=function() {
		var e = document.getElementById(self.prefix+'Organ_publishFunctionMessage_uint_string_string_string_id');
		if(e!=null)
			var param_id = e.value;
		else console.log(self.prefix+'Organ_publishFunctionMessage_uint_string_string_string_id not found');
		var e = document.getElementById(self.prefix+'Organ_publishFunctionMessage_uint_string_string_string_message');
		if(e!=null)
			var param_message = e.value;
		else console.log(self.prefix+'Organ_publishFunctionMessage_uint_string_string_string_message not found');
		var e = document.getElementById(self.prefix+'Organ_publishFunctionMessage_uint_string_string_string_hash');
		if(e!=null)
			var param_hash = e.value;
		else console.log(self.prefix+'Organ_publishFunctionMessage_uint_string_string_string_hash not found');
		var e = document.getElementById(self.prefix+'Organ_publishFunctionMessage_uint_string_string_string_er');
		if(e!=null)
			var param_er = e.value;
		else console.log(self.prefix+'Organ_publishFunctionMessage_uint_string_string_string_er not found');
		var res = self.instance.publishFunctionMessage(param_id, param_message, param_hash, param_er);
	}
	
	/**
	* Calls the contract function Organ_createBallot.
	*
	* this.prefix+'Organ_createBallot_string_bytes32_name' -
	* this.prefix+'Organ_createBallot_string_bytes32_proposalNames' -
	**/
	this.Organ_createBallot_string_bytes32=function() {
		var e = document.getElementById(self.prefix+'Organ_createBallot_string_bytes32_name');
		if(e!=null)
			var param_name = e.value;
		else console.log(self.prefix+'Organ_createBallot_string_bytes32_name not found');
		var e = document.getElementById(self.prefix+'Organ_createBallot_string_bytes32_proposalNames');
		if(e!=null)
			var param_proposalNames = e.value;
		else console.log(self.prefix+'Organ_createBallot_string_bytes32_proposalNames not found');
		var res = self.instance.createBallot(param_name, param_proposalNames);
		var e = document.getElementById(self.prefix+'Organ_createBallot_string_bytes32_res');
		if(res!=null && e!=null)
			e.innerText = res;
	}
	
	/**
	* Calls the contract function Organ_getFunctionBlogAddress.
	*
	* this.prefix+'Organ_getFunctionBlogAddress_uint_id' -
	**/
	this.Organ_getFunctionBlogAddress_uint=function() {
		var e = document.getElementById(self.prefix+'Organ_getFunctionBlogAddress_uint_id');
		if(e!=null)
			var param_id = e.value;
		else console.log(self.prefix+'Organ_getFunctionBlogAddress_uint_id not found');
		var res = self.instance.getFunctionBlogAddress(param_id);
		var e = document.getElementById(self.prefix+'Organ_getFunctionBlogAddress_uint_res');
		if(res!=null && e!=null)
			e.innerText = res;
	}
	
	/**
	* Calls the contract function Organ_getLastBallot.
	*
	**/
	this.Organ_getLastBallot=function() {
		var res = self.instance.getLastBallot();
		var e = document.getElementById(self.prefix+'Organ_getLastBallot_res');
		if(res!=null && e!=null)
			e.innerText = res;
	}
	
	/**
	* Calls the contract function Organ_getOrganBlog.
	*
	**/
	this.Organ_getOrganBlog=function() {
		var res = self.instance.getOrganBlog();
		var e = document.getElementById(self.prefix+'Organ_getOrganBlog_res');
		if(res!=null && e!=null)
			e.innerText = res;
	}
	
//delegated calls

}// end controller	

/**
* class as GlueCode OrganManager,
* uses prefix + 'GuiContainer' as target element.
* It combines a OrganController as 'c' and a OrganGuiFactory as 'g'.
**/
function OrganManager(prefix,contract,containerId) {
	this.prefix = prefix;
	var self = this;
	this.c = new OrganController();
	this.c.prefix=prefix;
	this.c.instance=contract;
	this.c.contractAddress = contract.address;
	this.g = new OrganGuiFactory();
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
		elemDiv.id= this.prefix +'Organ_gui';
		e.appendChild(elemDiv);
		if(this.guiFunction==null)
			elemDiv.innerHTML = this.createGui(this.g);
		else elemDiv.innerHTML = this.guiFunction(this.g);
		
		var e = document.getElementById(this.prefix+'Organ_address');
		if(e!=null)
			e.value = this.c.contractAddress;
		else 
			console.log(this.prefix+'Organ_address not found');
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
//Start of user code Organ_create_gui_js
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
	* Getter for the contract 'Organ' instance.
	**/
	this.getContract = function(){
		return this.c.instance;
	}

	/**
	* Watch for the contract events.
	* The events are stored in an element with the id this.eventlogPrefix+'eventLog'.
	**/
	this.watchEvents=function(){
	var event_FunctionMemberChange = contract.FunctionMemberChange({},{fromBlock: 0});
	var elp = this.eventlogPrefix;
	event_FunctionMemberChange.watch(function(error,result){
	if(!error){
		var e = document.getElementById(elp+'eventLog');
		if(e==null){
			console.log(elp+'eventLog');
			return;
		}
		var elemDiv = document.createElement('div');
		elemDiv.id= result.blockNumber +'event';
		e.appendChild(elemDiv);
		//console.log(result.address+ 'eventLog'+result.blockHash+' '+result.blockNumber+' '+result.args.name+' '+result.args.succesful+' ');
		elemDiv.innerHTML = '<div class="eventRow">'
        +'<dic class="eventValue">'+result.args.oldMember+'</div>'
        +'<dic class="eventValue">'+result.args.functionId+'</div>'
        +'<dic class="eventValue">'+result.args.newMember+'</div>'
		+ '</div>';
		}else
			console.log(error);	
	});
	}

}// end of manager

/**
* Manages a list of OrganManager uses the guid id to place the gui which is also the eventlogPrefix
*/
function OrganGuiMananger(guiId){
	this.prefix = guiId;
	this.managers=new Array();	//[];		
	this.guiFunction = null;
	
	/**
	* Add a contract to this manager.
	* @namespace contract
	*/
	this.addManager = function(contract) {
		var m = new OrganManager(contract.address,contract,this.prefix);
		m.eventlogPrefix = this.prefix;
		m.watchEvents();
		if(this.guiFunction!=null)
			m.guiFunction = this.guiFunction;
		this.managers.push(m);
		//manager.addGui();
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
			elemDiv.id= manager.prefix + 'GuiContainer';//'Organ_gui';
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
function OrganDeployment(guiId){

//Start of user code Organ_deployment_js
//TODO: implement
//End of user code
}
//Start of user code custom_Organ_js
//TODO: implement
//End of user code
/**
* A simple bean class around the contract.
* The PartyModel.
**/
function PartyModel(contract) {
this.contract = contract;
	/**
	* Getter for mangerCount.
	**/
	this.getMangerCount = function(){
		return contract.mangerCount(); 
	}
	/**
	* Getter for constitutionHash.
	**/
	this.getConstitutionHash = function(){
		return contract.constitutionHash(); 
	}
	/**
	* Getter for organCount.
	**/
	this.getOrganCount = function(){
		return contract.organCount(); 
	}
	/**
	* Getter for blogregistry.
	**/
	this.getBlogregistry = function(){
		return contract.blogregistry(); 
	}
	/**
	* Call Party.
	**/
	this.Party = function(){
		return contract.Party(); 
	}
	/**
	* Call addManager.
	**/
	this.addManager = function(_newManagerAddress){
		return contract.addManager(_newManagerAddress); 
	}
	/**
	* Call createOrgan.
	**/
	this.createOrgan = function(organName){
		return contract.createOrgan(organName); 
	}
	/**
	* Call removeManager.
	**/
	this.removeManager = function(_managerAddress){
		return contract.removeManager(_managerAddress); 
	}
	/**
	* Call isManager.
	**/
	this.isManager = function(_managerAddress){
		return contract.isManager(_managerAddress); 
	}
}// end of function PartyModel

/**
* Gui factory Party
**/
function PartyGuiFactory() {
	this.prefix='';
	
	/**
	* Places the default gui to 'e' or an element with id='Party_gui'
	*/
	this.placeDefaultGui=function(e) {
		if(e==null)
			e = document.getElementById(this.prefix+'Party_gui');
		if(e!=null)
			e.innerHTML = this.createDefaultGui();
		else
			console.log(this.prefix+'Party_gui not found');
	}

	/**
	* The default generated gui with all actions and attributes.
	*/
	this.createDefaultGui=function() {
		return 		'<!-- gui for Party_contract -->'
+		'		<div class="contract" id="'+this.prefix+'Party_contract">'
+		'		Party:'
+		'		  <input type="text" id="'+this.prefix+'Party_address"> <button id="'+this.prefix+'PartyController.setAddress" onclick="'+this.prefix+'PartyController.setAddress()">change Party Address</button>'
+		'		  <div class="contract_attributes" id="'+this.prefix+'Party_contract_attributes"> attributes:'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Party_contract_attribute_mangerCount"> mangerCount:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'Party_mangerCount_value"> </div>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Party_contract_attribute_constitutionHash"> constitutionHash:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'Party_constitutionHash_value"> </div>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Party_contract_attribute_organCount"> organCount:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'Party_organCount_value"> </div>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Party_contract_attribute_blogregistry"> blogregistry:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'Party_blogregistry_value"> </div>'
+		'		    </div>'
+		'		'
+		'		<div class="Value_Mapping" id="'+this.prefix+'Party_contract_attribute_managers">mapping  managers:'
+		'				<input type="text" id="'+this.prefix+'Party_contract_attribute_managers_input">(address)'
+		'		    	<div class="Mapping_value" id="'+this.prefix+'Party_contract_attribute_address"> bool:'
+		'		      		<div class="contract_attribute_value" id="'+this.prefix+'Party_managers_value"> </div>'
+		'		    	</div>'
+		'		  </div>'
+		'		<div class="Value_Mapping" id="'+this.prefix+'Party_contract_attribute_organs">mapping  organs:'
+		'				<input type="number" id="'+this.prefix+'Party_contract_attribute_organs_input">(uint)'
+		'		    	<div class="Mapping_value" id="'+this.prefix+'Party_contract_attribute_uint"> Organ:'
+		'		      		<div class="contract_attribute_value" id="'+this.prefix+'Party_organs_value"> </div>'
+		'		    	</div>'
+		'		  </div>'
+		'		    <button id="'+this.prefix+'Party_updateAttributes" onclick="'+this.prefix+'PartyController._updateAttributes()">update Party attributes</button>'
+		'		  </div>'
+		'		  <div class="function_execution" id="'+this.prefix+'Party_contract_function_Party_Party">'
+		'		Party_Party:'
+		'			<button id="'+this.prefix+'PartyController.Party_Party" onclick="'+this.prefix+'PartyController.Party_Party()">execute Party_Party</button>'
+		'			<div class="function_result" id="'+this.prefix+'Party_Party_res"></div>'
+		'		  </div>'
+		'		  <div class="function_execution" id="'+this.prefix+'Party_contract_function_Manageable_addManager_address">'
+		'		Party_addManager:'
+		'			  <div class="function_parameter">_newManagerAddress<input type="text" id="'+this.prefix+'Manageable_addManager_address__newManagerAddress"></div>'
+		'			<button id="'+this.prefix+'PartyController.Manageable_addManager_address" onclick="'+this.prefix+'PartyController.Manageable_addManager_address()">execute Party_addManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_addManager_address_res"></div>'
+		'		  </div>'
+		'		  <div class="function_execution" id="'+this.prefix+'Party_contract_function_Party_createOrgan_string">'
+		'		Party_createOrgan:'
+		'			  <div class="function_parameter">organName<input type="text" id="'+this.prefix+'Party_createOrgan_string_organName"></div>'
+		'			<button id="'+this.prefix+'PartyController.Party_createOrgan_string" onclick="'+this.prefix+'PartyController.Party_createOrgan_string()">execute Party_createOrgan</button>'
+		'			<div class="function_result" id="'+this.prefix+'Party_createOrgan_string_res"></div>'
+		'		  </div>'
+		'		  <div class="function_execution" id="'+this.prefix+'Party_contract_function_Manageable_removeManager_address">'
+		'		Party_removeManager:'
+		'			  <div class="function_parameter">_managerAddress<input type="text" id="'+this.prefix+'Manageable_removeManager_address__managerAddress"></div>'
+		'			<button id="'+this.prefix+'PartyController.Manageable_removeManager_address" onclick="'+this.prefix+'PartyController.Manageable_removeManager_address()">execute Party_removeManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_removeManager_address_res"></div>'
+		'		  </div>'
+		'		  <div class="function_execution" id="'+this.prefix+'Party_contract_function_Manageable_isManager_address">'
+		'		Party_isManager:'
+		'			  <div class="function_parameter">_managerAddress<input type="text" id="'+this.prefix+'Manageable_isManager_address__managerAddress"></div>'
+		'			<button id="'+this.prefix+'PartyController.Manageable_isManager_address" onclick="'+this.prefix+'PartyController.Manageable_isManager_address()">execute Party_isManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_isManager_address_res"></div>'
+		'		  </div>'
+		'		'
+		'		</div>'
;
	}

	/**
	* Create the gui for the attributes.
	*/
	this.createAttributesGui=function() {
		return 		'    <div class="contract_attribute" id="'+this.prefix+'Party_contract_attribute_mangerCount"> mangerCount:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'Party_mangerCount_value"> </div>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Party_contract_attribute_constitutionHash"> constitutionHash:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'Party_constitutionHash_value"> </div>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Party_contract_attribute_organCount"> organCount:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'Party_organCount_value"> </div>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Party_contract_attribute_blogregistry"> blogregistry:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'Party_blogregistry_value"> </div>'
+		'		    </div>'
+		'		'
;
	}

	/**
	* Create the gui for the function Party.
	*/
	this.createParty_PartyGui=function() {
		return 		'  <div class="function_execution" id="'+this.prefix+'Party_contract_function_Party_Party">'
+		'		Party_Party:'
+		'			<button id="'+this.prefix+'PartyController.Party_Party" onclick="'+this.prefix+'PartyController.Party_Party()">execute Party_Party</button>'
+		'			<div class="function_result" id="'+this.prefix+'Party_Party_res"></div>'
+		'		  </div>'
;
	}

	/**
	* Create the gui for the function addManager.
	*/
	this.createManageable_addManager_addressGui=function() {
		return 		'  <div class="function_execution" id="'+this.prefix+'Party_contract_function_Manageable_addManager_address">'
+		'		Party_addManager:'
+		'			  <div class="function_parameter">_newManagerAddress<input type="text" id="'+this.prefix+'Manageable_addManager_address__newManagerAddress"></div>'
+		'			<button id="'+this.prefix+'PartyController.Manageable_addManager_address" onclick="'+this.prefix+'PartyController.Manageable_addManager_address()">execute Party_addManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_addManager_address_res"></div>'
+		'		  </div>'
;
	}

	/**
	* Create the gui for the function createOrgan.
	*/
	this.createParty_createOrgan_stringGui=function() {
		return 		'  <div class="function_execution" id="'+this.prefix+'Party_contract_function_Party_createOrgan_string">'
+		'		Party_createOrgan:'
+		'			  <div class="function_parameter">organName<input type="text" id="'+this.prefix+'Party_createOrgan_string_organName"></div>'
+		'			<button id="'+this.prefix+'PartyController.Party_createOrgan_string" onclick="'+this.prefix+'PartyController.Party_createOrgan_string()">execute Party_createOrgan</button>'
+		'			<div class="function_result" id="'+this.prefix+'Party_createOrgan_string_res"></div>'
+		'		  </div>'
;
	}

	/**
	* Create the gui for the function removeManager.
	*/
	this.createManageable_removeManager_addressGui=function() {
		return 		'  <div class="function_execution" id="'+this.prefix+'Party_contract_function_Manageable_removeManager_address">'
+		'		Party_removeManager:'
+		'			  <div class="function_parameter">_managerAddress<input type="text" id="'+this.prefix+'Manageable_removeManager_address__managerAddress"></div>'
+		'			<button id="'+this.prefix+'PartyController.Manageable_removeManager_address" onclick="'+this.prefix+'PartyController.Manageable_removeManager_address()">execute Party_removeManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_removeManager_address_res"></div>'
+		'		  </div>'
;
	}

	/**
	* Create the gui for the function isManager.
	*/
	this.createManageable_isManager_addressGui=function() {
		return 		'  <div class="function_execution" id="'+this.prefix+'Party_contract_function_Manageable_isManager_address">'
+		'		Party_isManager:'
+		'			  <div class="function_parameter">_managerAddress<input type="text" id="'+this.prefix+'Manageable_isManager_address__managerAddress"></div>'
+		'			<button id="'+this.prefix+'PartyController.Manageable_isManager_address" onclick="'+this.prefix+'PartyController.Manageable_isManager_address()">execute Party_isManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_isManager_address_res"></div>'
+		'		  </div>'
;
	}

	/**
	* Create a div with '@inner' as inner elements.
    * @inner - the inner text
	*/
	this.createSeletonGui=function(inner) {
		return 	'<!-- gui for Party_contract -->'
		+	'	<div class="contract" id="'+this.prefix+'Party_contract">'
		+ inner
		+'</div>';
	}


//eventguis

	/**
	* Create a gui for the ConstiutionChange event.
    * @inner - the inner text
	*/
	this.createConstiutionChangeLogDataGui = function(prefix, blockHash, blockNumber
	) {
		return '<ul class="dapp-account-list"><li > '
        +'<a class="dapp-identicon dapp-small" style="background-image: url(identiconimage.png)"></a>'
		+'<span>'+prefix+' ('+blockNumber+')</span>'
        +' </li>';
	}

}//end guifactory

/**
* Class PartyController. 
* The controller wrap's the 'instance' contract and binds all actions to document elements.
* Parameters are taken from elements with self.prefix+'functionName_parameterName'
*
* self.prefix+'PartyController.setAddress' - 
* self.prefix+'Party_updateAttributes'     - 
* self.prefix+'Party_Party -
* self.prefix+'Manageable_addManager_address -
* self.prefix+'Party_createOrgan_string -
* self.prefix+'Manageable_removeManager_address -
* self.prefix+'Manageable_isManager_address -
*/
function PartyController() {

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
		var btn = document.getElementById(self.prefix+'PartyController.setAddress');
		if(btn!=undefined)		
			btn.onclick = this.setAddress;
		else console.log('addres widget not bound');

		var btn = document.getElementById(self.prefix+'Party_updateAttributes');
		if(btn!=undefined)
			btn.onclick = this._updateAttributes;
		else console.log('_updateAttributes widget not bound');
		var btn = document.getElementById(self.prefix+'PartyController.Party_Party');
		if(btn!=undefined)
			btn.onclick = this.Party_Party;
		else console.log('Party_Party widget not bound');
		var btn = document.getElementById(self.prefix+'PartyController.Manageable_addManager_address');
		if(btn!=undefined)
			btn.onclick = this.Manageable_addManager_address;
		else console.log('Manageable_addManager_address widget not bound');
		var btn = document.getElementById(self.prefix+'PartyController.Party_createOrgan_string');
		if(btn!=undefined)
			btn.onclick = this.Party_createOrgan_string;
		else console.log('Party_createOrgan_string widget not bound');
		var btn = document.getElementById(self.prefix+'PartyController.Manageable_removeManager_address');
		if(btn!=undefined)
			btn.onclick = this.Manageable_removeManager_address;
		else console.log('Manageable_removeManager_address widget not bound');
		var btn = document.getElementById(self.prefix+'PartyController.Manageable_isManager_address');
		if(btn!=undefined)
			btn.onclick = this.Manageable_isManager_address;
		else console.log('Manageable_isManager_address widget not bound');
	}

	/**
	* Set the address.
	*/
	this.setAddress=function() {
		var _address = document.getElementById(self.prefix+'Party_address');
		if(_address==null)return;

		self.Party_instance = PartyContract.at(_address.value);
		self.contractAddress = _address.value;
		self._updateAttributes();
	}
	
	/**
	* Update attributes.
	*
	* prefix+'Party_mangerCount_value' - 
	* prefix+'Party_constitutionHash_value' - 
	* prefix+'Party_organCount_value' - 
	* prefix+'Party_blogregistry_value' - 
	**/
	this._updateAttributes=function () {
		if(this.instance===null) return;
		// update attributes
		var mangerCount_res = self.instance.mangerCount();
		var e = document.getElementById(self.prefix+'Party_mangerCount_value');
		if(mangerCount_res!=null && e!=null)
			e.innerText = mangerCount_res;
		else console.log(self.prefix+'Party_mangerCount_value not found');
		var constitutionHash_res = self.instance.constitutionHash();
		var e = document.getElementById(self.prefix+'Party_constitutionHash_value');
		if(constitutionHash_res!=null && e!=null)
			e.innerText = constitutionHash_res;
		else console.log(self.prefix+'Party_constitutionHash_value not found');
		var organCount_res = self.instance.organCount();
		var e = document.getElementById(self.prefix+'Party_organCount_value');
		if(organCount_res!=null && e!=null)
			e.innerText = organCount_res;
		else console.log(self.prefix+'Party_organCount_value not found');
		var blogregistry_res = self.instance.blogregistry();
		var e = document.getElementById(self.prefix+'Party_blogregistry_value');
		if(blogregistry_res!=null && e!=null)
			e.innerText = blogregistry_res;
		else console.log(self.prefix+'Party_blogregistry_value not found');
		var e = document.getElementById(self.prefix+'Party_contract_attribute_managers_input');
		if(e!=null){
			var _key = e.value;
			if(_key=='') return;
			var managers_res = self.instance.managers(_key);
			if(managers_res!=null){
				var e1 = document.getElementById(self.prefix+'Party_managers_value');
				if(e1!=null)	
					e1.innerText = managers_res;
			}}
		var e = document.getElementById(self.prefix+'Party_contract_attribute_organs_input');
		if(e!=null){
			var _key = document.getElementById(self.prefix+'Party_contract_attribute_organs_input').value;
			if(_key=='') return;
			var organs_res = self.instance.organs(_key);
			if(organs_res!=null){
				var e1 = document.getElementById(self.prefix+'Party_organs_value');
				if(e1!=null)	
					e1.innerText = organs_res;
			}}
	}

	//call functions
	
	/**
	* Calls the contract function Party_Party.
	*
	**/
	this.Party_Party=function() {
		var res = self.instance.Party();
	}
	
	/**
	* Calls the contract function Party_canAccess.
	*
	**/
	this.Manageable_canAccess=function() {
		var res = self.instance.canAccess();
		var e = document.getElementById(self.prefix+'Manageable_canAccess_res');
		if(res!=null && e!=null)
			e.innerText = res;
	}
	
	/**
	* Calls the contract function Party_addManager.
	*
	* this.prefix+'Manageable_addManager_address__newManagerAddress' -
	**/
	this.Manageable_addManager_address=function() {
		var e = document.getElementById(self.prefix+'Manageable_addManager_address__newManagerAddress');
		if(e!=null)
			var param__newManagerAddress = e.value;
		else console.log(self.prefix+'Manageable_addManager_address__newManagerAddress not found');
		var res = self.instance.addManager(param__newManagerAddress);
	}
	
	/**
	* Calls the contract function Party_createOrgan.
	*
	* this.prefix+'Party_createOrgan_string_organName' -
	**/
	this.Party_createOrgan_string=function() {
		var e = document.getElementById(self.prefix+'Party_createOrgan_string_organName');
		if(e!=null)
			var param_organName = e.value;
		else console.log(self.prefix+'Party_createOrgan_string_organName not found');
		var res = self.instance.createOrgan(param_organName);
	}
	
	/**
	* Calls the contract function Party_removeManager.
	*
	* this.prefix+'Manageable_removeManager_address__managerAddress' -
	**/
	this.Manageable_removeManager_address=function() {
		var e = document.getElementById(self.prefix+'Manageable_removeManager_address__managerAddress');
		if(e!=null)
			var param__managerAddress = e.value;
		else console.log(self.prefix+'Manageable_removeManager_address__managerAddress not found');
		var res = self.instance.removeManager(param__managerAddress);
	}
	
	/**
	* Calls the contract function Party_isManager.
	*
	* this.prefix+'Manageable_isManager_address__managerAddress' -
	**/
	this.Manageable_isManager_address=function() {
		var e = document.getElementById(self.prefix+'Manageable_isManager_address__managerAddress');
		if(e!=null)
			var param__managerAddress = e.value;
		else console.log(self.prefix+'Manageable_isManager_address__managerAddress not found');
		var res = self.instance.isManager(param__managerAddress);
		var e = document.getElementById(self.prefix+'Manageable_isManager_address_res');
		if(res!=null && e!=null)
			e.innerText = res;
	}
	
//delegated calls

}// end controller	

/**
* class as GlueCode PartyManager,
* uses prefix + 'GuiContainer' as target element.
* It combines a PartyController as 'c' and a PartyGuiFactory as 'g'.
**/
function PartyManager(prefix,contract,containerId) {
	this.prefix = prefix;
	var self = this;
	this.c = new PartyController();
	this.c.prefix=prefix;
	this.c.instance=contract;
	this.c.contractAddress = contract.address;
	this.g = new PartyGuiFactory();
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
		elemDiv.id= this.prefix +'Party_gui';
		e.appendChild(elemDiv);
		if(this.guiFunction==null)
			elemDiv.innerHTML = this.createGui(this.g);
		else elemDiv.innerHTML = this.guiFunction(this.g);
		
		var e = document.getElementById(this.prefix+'Party_address');
		if(e!=null)
			e.value = this.c.contractAddress;
		else 
			console.log(this.prefix+'Party_address not found');
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
//Start of user code Party_create_gui_js
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
	* Getter for the contract 'Party' instance.
	**/
	this.getContract = function(){
		return this.c.instance;
	}

	/**
	* Watch for the contract events.
	* The events are stored in an element with the id this.eventlogPrefix+'eventLog'.
	**/
	this.watchEvents=function(){
	var event_ConstiutionChange = contract.ConstiutionChange({},{fromBlock: 0});
	var elp = this.eventlogPrefix;
	event_ConstiutionChange.watch(function(error,result){
	if(!error){
		var e = document.getElementById(elp+'eventLog');
		if(e==null){
			console.log(elp+'eventLog');
			return;
		}
		var elemDiv = document.createElement('div');
		elemDiv.id= result.blockNumber +'event';
		e.appendChild(elemDiv);
		//console.log(result.address+ 'eventLog'+result.blockHash+' '+result.blockNumber+' '+result.args.name+' '+result.args.succesful+' ');
		elemDiv.innerHTML = '<div class="eventRow">'
		+ '</div>';
		}else
			console.log(error);	
	});
	}

}// end of manager

/**
* Manages a list of PartyManager uses the guid id to place the gui which is also the eventlogPrefix
*/
function PartyGuiMananger(guiId){
	this.prefix = guiId;
	this.managers=new Array();	//[];		
	this.guiFunction = null;
	
	/**
	* Add a contract to this manager.
	* @namespace contract
	*/
	this.addManager = function(contract) {
		var m = new PartyManager(contract.address,contract,this.prefix);
		m.eventlogPrefix = this.prefix;
		m.watchEvents();
		if(this.guiFunction!=null)
			m.guiFunction = this.guiFunction;
		this.managers.push(m);
		//manager.addGui();
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
			elemDiv.id= manager.prefix + 'GuiContainer';//'Party_gui';
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
function PartyDeployment(guiId){

//Start of user code Party_deployment_js
//TODO: implement
//End of user code
}
//Start of user code custom_Party_js
//TODO: implement
//End of user code
/**
* A simple bean class around the contract.
* The KUEKeNPartyModel.
**/
function KUEKeNPartyModel(contract) {
this.contract = contract;
	/**
	* Getter for mangerCount.
	**/
	this.getMangerCount = function(){
		return contract.mangerCount(); 
	}
	/**
	* Getter for constitutionHash.
	**/
	this.getConstitutionHash = function(){
		return contract.constitutionHash(); 
	}
	/**
	* Getter for organCount.
	**/
	this.getOrganCount = function(){
		return contract.organCount(); 
	}
	/**
	* Getter for blogregistry.
	**/
	this.getBlogregistry = function(){
		return contract.blogregistry(); 
	}
	/**
	* Call KUEKeNParty.
	**/
	this.KUEKeNParty = function(){
		return contract.KUEKeNParty(); 
	}
	/**
	* Call Party.
	**/
	this.Party = function(){
		return contract.Party(); 
	}
	/**
	* Call addManager.
	**/
	this.addManager = function(_newManagerAddress){
		return contract.addManager(_newManagerAddress); 
	}
	/**
	* Call boostrapParty.
	**/
	this.boostrapParty = function(fc,br){
		return contract.boostrapParty(fc,br); 
	}
	/**
	* Call createOrgan.
	**/
	this.createOrgan = function(organName){
		return contract.createOrgan(organName); 
	}
	/**
	* Call removeManager.
	**/
	this.removeManager = function(_managerAddress){
		return contract.removeManager(_managerAddress); 
	}
	/**
	* Call isManager.
	**/
	this.isManager = function(_managerAddress){
		return contract.isManager(_managerAddress); 
	}
}// end of function KUEKeNPartyModel

/**
* Gui factory KUEKeNParty
**/
function KUEKeNPartyGuiFactory() {
	this.prefix='';
	
	/**
	* Places the default gui to 'e' or an element with id='KUEKeNParty_gui'
	*/
	this.placeDefaultGui=function(e) {
		if(e==null)
			e = document.getElementById(this.prefix+'KUEKeNParty_gui');
		if(e!=null)
			e.innerHTML = this.createDefaultGui();
		else
			console.log(this.prefix+'KUEKeNParty_gui not found');
	}

	/**
	* The default generated gui with all actions and attributes.
	*/
	this.createDefaultGui=function() {
		return 		'<!-- gui for KUEKeNParty_contract -->'
+		'		<div class="contract" id="'+this.prefix+'KUEKeNParty_contract">'
+		'		KUEKeNParty:'
+		'		  <input type="text" id="'+this.prefix+'KUEKeNParty_address"> <button id="'+this.prefix+'KUEKeNPartyController.setAddress" onclick="'+this.prefix+'KUEKeNPartyController.setAddress()">change KUEKeNParty Address</button>'
+		'		  <div class="contract_attributes" id="'+this.prefix+'KUEKeNParty_contract_attributes"> attributes:'
+		'		    <div class="contract_attribute" id="'+this.prefix+'KUEKeNParty_contract_attribute_mangerCount"> mangerCount:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'KUEKeNParty_mangerCount_value"> </div>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'KUEKeNParty_contract_attribute_constitutionHash"> constitutionHash:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'KUEKeNParty_constitutionHash_value"> </div>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'KUEKeNParty_contract_attribute_organCount"> organCount:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'KUEKeNParty_organCount_value"> </div>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'KUEKeNParty_contract_attribute_blogregistry"> blogregistry:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'KUEKeNParty_blogregistry_value"> </div>'
+		'		    </div>'
+		'		'
+		'		<div class="Value_Mapping" id="'+this.prefix+'KUEKeNParty_contract_attribute_managers">mapping  managers:'
+		'				<input type="text" id="'+this.prefix+'KUEKeNParty_contract_attribute_managers_input">(address)'
+		'		    	<div class="Mapping_value" id="'+this.prefix+'KUEKeNParty_contract_attribute_address"> bool:'
+		'		      		<div class="contract_attribute_value" id="'+this.prefix+'KUEKeNParty_managers_value"> </div>'
+		'		    	</div>'
+		'		  </div>'
+		'		<div class="Value_Mapping" id="'+this.prefix+'KUEKeNParty_contract_attribute_organs">mapping  organs:'
+		'				<input type="number" id="'+this.prefix+'KUEKeNParty_contract_attribute_organs_input">(uint)'
+		'		    	<div class="Mapping_value" id="'+this.prefix+'KUEKeNParty_contract_attribute_uint"> Organ:'
+		'		      		<div class="contract_attribute_value" id="'+this.prefix+'KUEKeNParty_organs_value"> </div>'
+		'		    	</div>'
+		'		  </div>'
+		'		    <button id="'+this.prefix+'KUEKeNParty_updateAttributes" onclick="'+this.prefix+'KUEKeNPartyController._updateAttributes()">update KUEKeNParty attributes</button>'
+		'		  </div>'
+		'		  <div class="function_execution" id="'+this.prefix+'KUEKeNParty_contract_function_KUEKeNParty_KUEKeNParty">'
+		'		KUEKeNParty_KUEKeNParty:'
+		'			<button id="'+this.prefix+'KUEKeNPartyController.KUEKeNParty_KUEKeNParty" onclick="'+this.prefix+'KUEKeNPartyController.KUEKeNParty_KUEKeNParty()">execute KUEKeNParty_KUEKeNParty</button>'
+		'			<div class="function_result" id="'+this.prefix+'KUEKeNParty_KUEKeNParty_res"></div>'
+		'		  </div>'
+		'		  <div class="function_execution" id="'+this.prefix+'KUEKeNParty_contract_function_Party_Party">'
+		'		KUEKeNParty_Party:'
+		'			<button id="'+this.prefix+'KUEKeNPartyController.Party_Party" onclick="'+this.prefix+'KUEKeNPartyController.Party_Party()">execute KUEKeNParty_Party</button>'
+		'			<div class="function_result" id="'+this.prefix+'Party_Party_res"></div>'
+		'		  </div>'
+		'		  <div class="function_execution" id="'+this.prefix+'KUEKeNParty_contract_function_Manageable_addManager_address">'
+		'		KUEKeNParty_addManager:'
+		'			  <div class="function_parameter">_newManagerAddress<input type="text" id="'+this.prefix+'Manageable_addManager_address__newManagerAddress"></div>'
+		'			<button id="'+this.prefix+'KUEKeNPartyController.Manageable_addManager_address" onclick="'+this.prefix+'KUEKeNPartyController.Manageable_addManager_address()">execute KUEKeNParty_addManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_addManager_address_res"></div>'
+		'		  </div>'
+		'		  <div class="function_execution" id="'+this.prefix+'KUEKeNParty_contract_function_KUEKeNParty_boostrapParty_address_address">'
+		'		KUEKeNParty_boostrapParty:'
+		'			  <div class="function_parameter">fc<input type="text" id="'+this.prefix+'KUEKeNParty_boostrapParty_address_address_fc"></div>'
+		'			  <div class="function_parameter">br<input type="text" id="'+this.prefix+'KUEKeNParty_boostrapParty_address_address_br"></div>'
+		'			<button id="'+this.prefix+'KUEKeNPartyController.KUEKeNParty_boostrapParty_address_address" onclick="'+this.prefix+'KUEKeNPartyController.KUEKeNParty_boostrapParty_address_address()">execute KUEKeNParty_boostrapParty</button>'
+		'			<div class="function_result" id="'+this.prefix+'KUEKeNParty_boostrapParty_address_address_res"></div>'
+		'		  </div>'
+		'		  <div class="function_execution" id="'+this.prefix+'KUEKeNParty_contract_function_Party_createOrgan_string">'
+		'		KUEKeNParty_createOrgan:'
+		'			  <div class="function_parameter">organName<input type="text" id="'+this.prefix+'Party_createOrgan_string_organName"></div>'
+		'			<button id="'+this.prefix+'KUEKeNPartyController.Party_createOrgan_string" onclick="'+this.prefix+'KUEKeNPartyController.Party_createOrgan_string()">execute KUEKeNParty_createOrgan</button>'
+		'			<div class="function_result" id="'+this.prefix+'Party_createOrgan_string_res"></div>'
+		'		  </div>'
+		'		  <div class="function_execution" id="'+this.prefix+'KUEKeNParty_contract_function_Manageable_removeManager_address">'
+		'		KUEKeNParty_removeManager:'
+		'			  <div class="function_parameter">_managerAddress<input type="text" id="'+this.prefix+'Manageable_removeManager_address__managerAddress"></div>'
+		'			<button id="'+this.prefix+'KUEKeNPartyController.Manageable_removeManager_address" onclick="'+this.prefix+'KUEKeNPartyController.Manageable_removeManager_address()">execute KUEKeNParty_removeManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_removeManager_address_res"></div>'
+		'		  </div>'
+		'		  <div class="function_execution" id="'+this.prefix+'KUEKeNParty_contract_function_Manageable_isManager_address">'
+		'		KUEKeNParty_isManager:'
+		'			  <div class="function_parameter">_managerAddress<input type="text" id="'+this.prefix+'Manageable_isManager_address__managerAddress"></div>'
+		'			<button id="'+this.prefix+'KUEKeNPartyController.Manageable_isManager_address" onclick="'+this.prefix+'KUEKeNPartyController.Manageable_isManager_address()">execute KUEKeNParty_isManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_isManager_address_res"></div>'
+		'		  </div>'
+		'		'
+		'		</div>'
;
	}

	/**
	* Create the gui for the attributes.
	*/
	this.createAttributesGui=function() {
		return 		'    <div class="contract_attribute" id="'+this.prefix+'KUEKeNParty_contract_attribute_mangerCount"> mangerCount:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'KUEKeNParty_mangerCount_value"> </div>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'KUEKeNParty_contract_attribute_constitutionHash"> constitutionHash:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'KUEKeNParty_constitutionHash_value"> </div>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'KUEKeNParty_contract_attribute_organCount"> organCount:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'KUEKeNParty_organCount_value"> </div>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'KUEKeNParty_contract_attribute_blogregistry"> blogregistry:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'KUEKeNParty_blogregistry_value"> </div>'
+		'		    </div>'
+		'		'
;
	}

	/**
	* Create the gui for the function KUEKeNParty.
	*/
	this.createKUEKeNParty_KUEKeNPartyGui=function() {
		return 		'  <div class="function_execution" id="'+this.prefix+'KUEKeNParty_contract_function_KUEKeNParty_KUEKeNParty">'
+		'		KUEKeNParty_KUEKeNParty:'
+		'			<button id="'+this.prefix+'KUEKeNPartyController.KUEKeNParty_KUEKeNParty" onclick="'+this.prefix+'KUEKeNPartyController.KUEKeNParty_KUEKeNParty()">execute KUEKeNParty_KUEKeNParty</button>'
+		'			<div class="function_result" id="'+this.prefix+'KUEKeNParty_KUEKeNParty_res"></div>'
+		'		  </div>'
;
	}

	/**
	* Create the gui for the function Party.
	*/
	this.createParty_PartyGui=function() {
		return 		'  <div class="function_execution" id="'+this.prefix+'KUEKeNParty_contract_function_Party_Party">'
+		'		KUEKeNParty_Party:'
+		'			<button id="'+this.prefix+'KUEKeNPartyController.Party_Party" onclick="'+this.prefix+'KUEKeNPartyController.Party_Party()">execute KUEKeNParty_Party</button>'
+		'			<div class="function_result" id="'+this.prefix+'Party_Party_res"></div>'
+		'		  </div>'
;
	}

	/**
	* Create the gui for the function addManager.
	*/
	this.createManageable_addManager_addressGui=function() {
		return 		'  <div class="function_execution" id="'+this.prefix+'KUEKeNParty_contract_function_Manageable_addManager_address">'
+		'		KUEKeNParty_addManager:'
+		'			  <div class="function_parameter">_newManagerAddress<input type="text" id="'+this.prefix+'Manageable_addManager_address__newManagerAddress"></div>'
+		'			<button id="'+this.prefix+'KUEKeNPartyController.Manageable_addManager_address" onclick="'+this.prefix+'KUEKeNPartyController.Manageable_addManager_address()">execute KUEKeNParty_addManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_addManager_address_res"></div>'
+		'		  </div>'
;
	}

	/**
	* Create the gui for the function boostrapParty.
	*/
	this.createKUEKeNParty_boostrapParty_address_addressGui=function() {
		return 		'  <div class="function_execution" id="'+this.prefix+'KUEKeNParty_contract_function_KUEKeNParty_boostrapParty_address_address">'
+		'		KUEKeNParty_boostrapParty:'
+		'			  <div class="function_parameter">fc<input type="text" id="'+this.prefix+'KUEKeNParty_boostrapParty_address_address_fc"></div>'
+		'			  <div class="function_parameter">br<input type="text" id="'+this.prefix+'KUEKeNParty_boostrapParty_address_address_br"></div>'
+		'			<button id="'+this.prefix+'KUEKeNPartyController.KUEKeNParty_boostrapParty_address_address" onclick="'+this.prefix+'KUEKeNPartyController.KUEKeNParty_boostrapParty_address_address()">execute KUEKeNParty_boostrapParty</button>'
+		'			<div class="function_result" id="'+this.prefix+'KUEKeNParty_boostrapParty_address_address_res"></div>'
+		'		  </div>'
;
	}

	/**
	* Create the gui for the function createOrgan.
	*/
	this.createParty_createOrgan_stringGui=function() {
		return 		'  <div class="function_execution" id="'+this.prefix+'KUEKeNParty_contract_function_Party_createOrgan_string">'
+		'		KUEKeNParty_createOrgan:'
+		'			  <div class="function_parameter">organName<input type="text" id="'+this.prefix+'Party_createOrgan_string_organName"></div>'
+		'			<button id="'+this.prefix+'KUEKeNPartyController.Party_createOrgan_string" onclick="'+this.prefix+'KUEKeNPartyController.Party_createOrgan_string()">execute KUEKeNParty_createOrgan</button>'
+		'			<div class="function_result" id="'+this.prefix+'Party_createOrgan_string_res"></div>'
+		'		  </div>'
;
	}

	/**
	* Create the gui for the function removeManager.
	*/
	this.createManageable_removeManager_addressGui=function() {
		return 		'  <div class="function_execution" id="'+this.prefix+'KUEKeNParty_contract_function_Manageable_removeManager_address">'
+		'		KUEKeNParty_removeManager:'
+		'			  <div class="function_parameter">_managerAddress<input type="text" id="'+this.prefix+'Manageable_removeManager_address__managerAddress"></div>'
+		'			<button id="'+this.prefix+'KUEKeNPartyController.Manageable_removeManager_address" onclick="'+this.prefix+'KUEKeNPartyController.Manageable_removeManager_address()">execute KUEKeNParty_removeManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_removeManager_address_res"></div>'
+		'		  </div>'
;
	}

	/**
	* Create the gui for the function isManager.
	*/
	this.createManageable_isManager_addressGui=function() {
		return 		'  <div class="function_execution" id="'+this.prefix+'KUEKeNParty_contract_function_Manageable_isManager_address">'
+		'		KUEKeNParty_isManager:'
+		'			  <div class="function_parameter">_managerAddress<input type="text" id="'+this.prefix+'Manageable_isManager_address__managerAddress"></div>'
+		'			<button id="'+this.prefix+'KUEKeNPartyController.Manageable_isManager_address" onclick="'+this.prefix+'KUEKeNPartyController.Manageable_isManager_address()">execute KUEKeNParty_isManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_isManager_address_res"></div>'
+		'		  </div>'
;
	}

	/**
	* Create a div with '@inner' as inner elements.
    * @inner - the inner text
	*/
	this.createSeletonGui=function(inner) {
		return 	'<!-- gui for KUEKeNParty_contract -->'
		+	'	<div class="contract" id="'+this.prefix+'KUEKeNParty_contract">'
		+ inner
		+'</div>';
	}


//eventguis

}//end guifactory

/**
* Class KUEKeNPartyController. 
* The controller wrap's the 'instance' contract and binds all actions to document elements.
* Parameters are taken from elements with self.prefix+'functionName_parameterName'
*
* self.prefix+'KUEKeNPartyController.setAddress' - 
* self.prefix+'KUEKeNParty_updateAttributes'     - 
* self.prefix+'KUEKeNParty_KUEKeNParty -
* self.prefix+'Party_Party -
* self.prefix+'Manageable_addManager_address -
* self.prefix+'KUEKeNParty_boostrapParty_address_address -
* self.prefix+'Party_createOrgan_string -
* self.prefix+'Manageable_removeManager_address -
* self.prefix+'Manageable_isManager_address -
*/
function KUEKeNPartyController() {

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
		var btn = document.getElementById(self.prefix+'KUEKeNPartyController.setAddress');
		if(btn!=undefined)		
			btn.onclick = this.setAddress;
		else console.log('addres widget not bound');

		var btn = document.getElementById(self.prefix+'KUEKeNParty_updateAttributes');
		if(btn!=undefined)
			btn.onclick = this._updateAttributes;
		else console.log('_updateAttributes widget not bound');
		var btn = document.getElementById(self.prefix+'KUEKeNPartyController.KUEKeNParty_KUEKeNParty');
		if(btn!=undefined)
			btn.onclick = this.KUEKeNParty_KUEKeNParty;
		else console.log('KUEKeNParty_KUEKeNParty widget not bound');
		var btn = document.getElementById(self.prefix+'KUEKeNPartyController.Party_Party');
		if(btn!=undefined)
			btn.onclick = this.Party_Party;
		else console.log('Party_Party widget not bound');
		var btn = document.getElementById(self.prefix+'KUEKeNPartyController.Manageable_addManager_address');
		if(btn!=undefined)
			btn.onclick = this.Manageable_addManager_address;
		else console.log('Manageable_addManager_address widget not bound');
		var btn = document.getElementById(self.prefix+'KUEKeNPartyController.KUEKeNParty_boostrapParty_address_address');
		if(btn!=undefined)
			btn.onclick = this.KUEKeNParty_boostrapParty_address_address;
		else console.log('KUEKeNParty_boostrapParty_address_address widget not bound');
		var btn = document.getElementById(self.prefix+'KUEKeNPartyController.Party_createOrgan_string');
		if(btn!=undefined)
			btn.onclick = this.Party_createOrgan_string;
		else console.log('Party_createOrgan_string widget not bound');
		var btn = document.getElementById(self.prefix+'KUEKeNPartyController.Manageable_removeManager_address');
		if(btn!=undefined)
			btn.onclick = this.Manageable_removeManager_address;
		else console.log('Manageable_removeManager_address widget not bound');
		var btn = document.getElementById(self.prefix+'KUEKeNPartyController.Manageable_isManager_address');
		if(btn!=undefined)
			btn.onclick = this.Manageable_isManager_address;
		else console.log('Manageable_isManager_address widget not bound');
	}

	/**
	* Set the address.
	*/
	this.setAddress=function() {
		var _address = document.getElementById(self.prefix+'KUEKeNParty_address');
		if(_address==null)return;

		self.KUEKeNParty_instance = KUEKeNPartyContract.at(_address.value);
		self.contractAddress = _address.value;
		self._updateAttributes();
	}
	
	/**
	* Update attributes.
	*
	* prefix+'KUEKeNParty_mangerCount_value' - 
	* prefix+'KUEKeNParty_constitutionHash_value' - 
	* prefix+'KUEKeNParty_organCount_value' - 
	* prefix+'KUEKeNParty_blogregistry_value' - 
	**/
	this._updateAttributes=function () {
		if(this.instance===null) return;
		// update attributes
		var mangerCount_res = self.instance.mangerCount();
		var e = document.getElementById(self.prefix+'KUEKeNParty_mangerCount_value');
		if(mangerCount_res!=null && e!=null)
			e.innerText = mangerCount_res;
		else console.log(self.prefix+'KUEKeNParty_mangerCount_value not found');
		var constitutionHash_res = self.instance.constitutionHash();
		var e = document.getElementById(self.prefix+'KUEKeNParty_constitutionHash_value');
		if(constitutionHash_res!=null && e!=null)
			e.innerText = constitutionHash_res;
		else console.log(self.prefix+'KUEKeNParty_constitutionHash_value not found');
		var organCount_res = self.instance.organCount();
		var e = document.getElementById(self.prefix+'KUEKeNParty_organCount_value');
		if(organCount_res!=null && e!=null)
			e.innerText = organCount_res;
		else console.log(self.prefix+'KUEKeNParty_organCount_value not found');
		var blogregistry_res = self.instance.blogregistry();
		var e = document.getElementById(self.prefix+'KUEKeNParty_blogregistry_value');
		if(blogregistry_res!=null && e!=null)
			e.innerText = blogregistry_res;
		else console.log(self.prefix+'KUEKeNParty_blogregistry_value not found');
		var e = document.getElementById(self.prefix+'KUEKeNParty_contract_attribute_managers_input');
		if(e!=null){
			var _key = e.value;
			if(_key=='') return;
			var managers_res = self.instance.managers(_key);
			if(managers_res!=null){
				var e1 = document.getElementById(self.prefix+'KUEKeNParty_managers_value');
				if(e1!=null)	
					e1.innerText = managers_res;
			}}
		var e = document.getElementById(self.prefix+'KUEKeNParty_contract_attribute_organs_input');
		if(e!=null){
			var _key = document.getElementById(self.prefix+'KUEKeNParty_contract_attribute_organs_input').value;
			if(_key=='') return;
			var organs_res = self.instance.organs(_key);
			if(organs_res!=null){
				var e1 = document.getElementById(self.prefix+'KUEKeNParty_organs_value');
				if(e1!=null)	
					e1.innerText = organs_res;
			}}
	}

	//call functions
	
	/**
	* Calls the contract function KUEKeNParty_KUEKeNParty.
	*
	**/
	this.KUEKeNParty_KUEKeNParty=function() {
		var res = self.instance.KUEKeNParty();
	}
	
	/**
	* Calls the contract function KUEKeNParty_Party.
	*
	**/
	this.Party_Party=function() {
		var res = self.instance.Party();
	}
	
	/**
	* Calls the contract function KUEKeNParty_canAccess.
	*
	**/
	this.Manageable_canAccess=function() {
		var res = self.instance.canAccess();
		var e = document.getElementById(self.prefix+'Manageable_canAccess_res');
		if(res!=null && e!=null)
			e.innerText = res;
	}
	
	/**
	* Calls the contract function KUEKeNParty_addManager.
	*
	* this.prefix+'Manageable_addManager_address__newManagerAddress' -
	**/
	this.Manageable_addManager_address=function() {
		var e = document.getElementById(self.prefix+'Manageable_addManager_address__newManagerAddress');
		if(e!=null)
			var param__newManagerAddress = e.value;
		else console.log(self.prefix+'Manageable_addManager_address__newManagerAddress not found');
		var res = self.instance.addManager(param__newManagerAddress);
	}
	
	/**
	* Calls the contract function KUEKeNParty_boostrapParty.
	*
	* this.prefix+'KUEKeNParty_boostrapParty_address_address_fc' -
	* this.prefix+'KUEKeNParty_boostrapParty_address_address_br' -
	**/
	this.KUEKeNParty_boostrapParty_address_address=function() {
		var e = document.getElementById(self.prefix+'KUEKeNParty_boostrapParty_address_address_fc');
		if(e!=null)
			var param_fc = e.value;
		else console.log(self.prefix+'KUEKeNParty_boostrapParty_address_address_fc not found');
		var e = document.getElementById(self.prefix+'KUEKeNParty_boostrapParty_address_address_br');
		if(e!=null)
			var param_br = e.value;
		else console.log(self.prefix+'KUEKeNParty_boostrapParty_address_address_br not found');
		var res = self.instance.boostrapParty(param_fc, param_br);
	}
	
	/**
	* Calls the contract function KUEKeNParty_createOrgan.
	*
	* this.prefix+'Party_createOrgan_string_organName' -
	**/
	this.Party_createOrgan_string=function() {
		var e = document.getElementById(self.prefix+'Party_createOrgan_string_organName');
		if(e!=null)
			var param_organName = e.value;
		else console.log(self.prefix+'Party_createOrgan_string_organName not found');
		var res = self.instance.createOrgan(param_organName);
	}
	
	/**
	* Calls the contract function KUEKeNParty_removeManager.
	*
	* this.prefix+'Manageable_removeManager_address__managerAddress' -
	**/
	this.Manageable_removeManager_address=function() {
		var e = document.getElementById(self.prefix+'Manageable_removeManager_address__managerAddress');
		if(e!=null)
			var param__managerAddress = e.value;
		else console.log(self.prefix+'Manageable_removeManager_address__managerAddress not found');
		var res = self.instance.removeManager(param__managerAddress);
	}
	
	/**
	* Calls the contract function KUEKeNParty_isManager.
	*
	* this.prefix+'Manageable_isManager_address__managerAddress' -
	**/
	this.Manageable_isManager_address=function() {
		var e = document.getElementById(self.prefix+'Manageable_isManager_address__managerAddress');
		if(e!=null)
			var param__managerAddress = e.value;
		else console.log(self.prefix+'Manageable_isManager_address__managerAddress not found');
		var res = self.instance.isManager(param__managerAddress);
		var e = document.getElementById(self.prefix+'Manageable_isManager_address_res');
		if(res!=null && e!=null)
			e.innerText = res;
	}
	
//delegated calls

}// end controller	

/**
* class as GlueCode KUEKeNPartyManager,
* uses prefix + 'GuiContainer' as target element.
* It combines a KUEKeNPartyController as 'c' and a KUEKeNPartyGuiFactory as 'g'.
**/
function KUEKeNPartyManager(prefix,contract,containerId) {
	this.prefix = prefix;
	var self = this;
	this.c = new KUEKeNPartyController();
	this.c.prefix=prefix;
	this.c.instance=contract;
	this.c.contractAddress = contract.address;
	this.g = new KUEKeNPartyGuiFactory();
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
		elemDiv.id= this.prefix +'KUEKeNParty_gui';
		e.appendChild(elemDiv);
		if(this.guiFunction==null)
			elemDiv.innerHTML = this.createGui(this.g);
		else elemDiv.innerHTML = this.guiFunction(this.g);
		
		var e = document.getElementById(this.prefix+'KUEKeNParty_address');
		if(e!=null)
			e.value = this.c.contractAddress;
		else 
			console.log(this.prefix+'KUEKeNParty_address not found');
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
//Start of user code KUEKeNParty_create_gui_js
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
	* Getter for the contract 'KUEKeNParty' instance.
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
* Manages a list of KUEKeNPartyManager uses the guid id to place the gui which is also the eventlogPrefix
*/
function KUEKeNPartyGuiMananger(guiId){
	this.prefix = guiId;
	this.managers=new Array();	//[];		
	this.guiFunction = null;
	
	/**
	* Add a contract to this manager.
	* @namespace contract
	*/
	this.addManager = function(contract) {
		var m = new KUEKeNPartyManager(contract.address,contract,this.prefix);
		m.eventlogPrefix = this.prefix;
		m.watchEvents();
		if(this.guiFunction!=null)
			m.guiFunction = this.guiFunction;
		this.managers.push(m);
		//manager.addGui();
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
			elemDiv.id= manager.prefix + 'GuiContainer';//'KUEKeNParty_gui';
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
function KUEKeNPartyDeployment(guiId){

//Start of user code KUEKeNParty_deployment_js
this.instance = contract;

this.deploy=function() {
	this.createOrgan("Buvo");
	this.createOrgan("Schiedgericht")
	
}

this.createOrgan=function(name) {
	this.instance.createOrgan(name);
}
//End of user code
}
//Start of user code custom_KUEKeNParty_js
//TODO: implement
//End of user code
/**
* A simple bean class around the contract.
* The ConferenceModel.
**/
function ConferenceModel(contract) {
this.contract = contract;
	/**
	* Getter for memberRegistry.
	**/
	this.getMemberRegistry = function(){
		return contract.memberRegistry(); 
	}
	/**
	* Getter for accreditatedMembers.
	**/
	this.getAccreditatedMembers = function(){
		return contract.accreditatedMembers(); 
	}
	/**
	* Getter for mangerCount.
	**/
	this.getMangerCount = function(){
		return contract.mangerCount(); 
	}
	/**
	* Getter for organName.
	**/
	this.getOrganName = function(){
		return contract.organName(); 
	}
	/**
	* Getter for date.
	**/
	this.getDate = function(){
		return contract.date(); 
	}
	/**
	* Getter for lastFunctionId.
	**/
	this.getLastFunctionId = function(){
		return contract.lastFunctionId(); 
	}
	/**
	* Getter for blogRegistry.
	**/
	this.getBlogRegistry = function(){
		return contract.blogRegistry(); 
	}
	/**
	* Getter for isActive.
	**/
	this.getIsActive = function(){
		return contract.isActive(); 
	}
	/**
	* Getter for ballotCount.
	**/
	this.getBallotCount = function(){
		return contract.ballotCount(); 
	}
	/**
	* Call accreditationMember.
	**/
	this.accreditationMember = function(_address){
		return contract.accreditationMember(_address); 
	}
	/**
	* Call changeMember.
	**/
	this.changeMember = function(_id,_address){
		return contract.changeMember(_id,_address); 
	}
	/**
	* Call addManager.
	**/
	this.addManager = function(_newManagerAddress){
		return contract.addManager(_newManagerAddress); 
	}
	/**
	* Call createFunction.
	**/
	this.createFunction = function(_functionName,_constittiutionHash){
		return contract.createFunction(_functionName,_constittiutionHash); 
	}
	/**
	* Call removeManager.
	**/
	this.removeManager = function(_managerAddress){
		return contract.removeManager(_managerAddress); 
	}
	/**
	* Call initalizeOrgan.
	**/
	this.initalizeOrgan = function(){
		return contract.initalizeOrgan(); 
	}
	/**
	* Call isManager.
	**/
	this.isManager = function(_managerAddress){
		return contract.isManager(_managerAddress); 
	}
	/**
	* Call publishFunctionMessage.
	**/
	this.publishFunctionMessage = function(id,message,hash,er){
		return contract.publishFunctionMessage(id,message,hash,er); 
	}
	/**
	* Call createBallot.
	**/
	this.createBallot = function(name,proposalNames){
		return contract.createBallot(name,proposalNames); 
	}
	/**
	* Call getFunctionBlogAddress.
	**/
	this.getFunctionBlogAddress = function(id){
		return contract.getFunctionBlogAddress(id); 
	}
	/**
	* Call getLastBallot.
	**/
	this.getLastBallot = function(){
		return contract.getLastBallot(); 
	}
	/**
	* Call getOrganBlog.
	**/
	this.getOrganBlog = function(){
		return contract.getOrganBlog(); 
	}
}// end of function ConferenceModel

/**
* Gui factory Conference
**/
function ConferenceGuiFactory() {
	this.prefix='';
	
	/**
	* Places the default gui to 'e' or an element with id='Conference_gui'
	*/
	this.placeDefaultGui=function(e) {
		if(e==null)
			e = document.getElementById(this.prefix+'Conference_gui');
		if(e!=null)
			e.innerHTML = this.createDefaultGui();
		else
			console.log(this.prefix+'Conference_gui not found');
	}

	/**
	* The default generated gui with all actions and attributes.
	*/
	this.createDefaultGui=function() {
		return 		'<!-- gui for Conference_contract -->'
+		'		<div class="contract" id="'+this.prefix+'Conference_contract">'
+		'		Conference:'
+		'		  <input type="text" id="'+this.prefix+'Conference_address"> <button id="'+this.prefix+'ConferenceController.setAddress" onclick="'+this.prefix+'ConferenceController.setAddress()">change Conference Address</button>'
+		'		  <div class="contract_attributes" id="'+this.prefix+'Conference_contract_attributes"> attributes:'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Conference_contract_attribute_memberRegistry"> memberRegistry:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'Conference_memberRegistry_value"> </div>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Conference_contract_attribute_accreditatedMembers"> accreditatedMembers:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'Conference_accreditatedMembers_value"> </div>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Conference_contract_attribute_mangerCount"> mangerCount:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'Conference_mangerCount_value"> </div>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Conference_contract_attribute_organName"> organName:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'Conference_organName_value"> </div>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Conference_contract_attribute_date"> date:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'Conference_date_value"> </div>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Conference_contract_attribute_lastFunctionId"> lastFunctionId:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'Conference_lastFunctionId_value"> </div>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Conference_contract_attribute_blogRegistry"> blogRegistry:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'Conference_blogRegistry_value"> </div>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Conference_contract_attribute_isActive"> isActive:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'Conference_isActive_value"> </div>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Conference_contract_attribute_ballotCount"> ballotCount:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'Conference_ballotCount_value"> </div>'
+		'		    </div>'
+		'		'
+		'		<div class="Value_Mapping" id="'+this.prefix+'Conference_contract_attribute_managers">mapping  managers:'
+		'				<input type="text" id="'+this.prefix+'Conference_contract_attribute_managers_input">(address)'
+		'		    	<div class="Mapping_value" id="'+this.prefix+'Conference_contract_attribute_address"> bool:'
+		'		      		<div class="contract_attribute_value" id="'+this.prefix+'Conference_managers_value"> </div>'
+		'		    	</div>'
+		'		  </div>'
+		'		<!--struct -->'
+		'		<div class="Struct_Mapping" id="'+this.prefix+'Struc_Conference_contract_attribute_organFunctions">struc mapping  organFunctions:'
+		'				<input type="number" id="'+this.prefix+'Conference_contract_attribute_organFunctions_input">(uint)'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'Conference_contract_attribute_organFunctions_currentMember"> currentMember:'
+		'		      		<div class="Struct_attribute_value" id="'+this.prefix+'Conference_organFunctions_currentMember_value"> </div>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'Conference_contract_attribute_organFunctions_functionName"> functionName:'
+		'		      		<div class="Struct_attribute_value" id="'+this.prefix+'Conference_organFunctions_functionName_value"> </div>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'Conference_contract_attribute_organFunctions_id"> id:'
+		'		      		<div class="Struct_attribute_value" id="'+this.prefix+'Conference_organFunctions_id_value"> </div>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'Conference_contract_attribute_organFunctions_constitutionHash"> constitutionHash:'
+		'		      		<div class="Struct_attribute_value" id="'+this.prefix+'Conference_organFunctions_constitutionHash_value"> </div>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'Conference_contract_attribute_organFunctions_lastMemberChanged"> lastMemberChanged:'
+		'		      		<div class="Struct_attribute_value" id="'+this.prefix+'Conference_organFunctions_lastMemberChanged_value"> </div>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'Conference_contract_attribute_organFunctions_lastConstitutionHashChanged"> lastConstitutionHashChanged:'
+		'		      		<div class="Struct_attribute_value" id="'+this.prefix+'Conference_organFunctions_lastConstitutionHashChanged_value"> </div>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'Conference_contract_attribute_organFunctions_publisher"> publisher:'
+		'		      		<div class="Struct_attribute_value" id="'+this.prefix+'Conference_organFunctions_publisher_value"> </div>'
+		'		    	</div>'
+		'		  </div>'
+		'		    <button id="'+this.prefix+'Conference_updateAttributes" onclick="'+this.prefix+'ConferenceController._updateAttributes()">update Conference attributes</button>'
+		'		  </div>'
+		'		  <div class="function_execution" id="'+this.prefix+'Conference_contract_function_Conference_accreditationMember_address">'
+		'		Conference_accreditationMember:'
+		'			  <div class="function_parameter">_address<input type="text" id="'+this.prefix+'Conference_accreditationMember_address__address"></div>'
+		'			<button id="'+this.prefix+'ConferenceController.Conference_accreditationMember_address" onclick="'+this.prefix+'ConferenceController.Conference_accreditationMember_address()">execute Conference_accreditationMember</button>'
+		'			<div class="function_result" id="'+this.prefix+'Conference_accreditationMember_address_res"></div>'
+		'		  </div>'
+		'		  <div class="function_execution" id="'+this.prefix+'Conference_contract_function_Organ_changeMember_uint_address">'
+		'		Conference_changeMember:'
+		'			  <div class="function_parameter">_id<input type="number" id="'+this.prefix+'Organ_changeMember_uint_address__id"></div>'
+		'			  <div class="function_parameter">_address<input type="text" id="'+this.prefix+'Organ_changeMember_uint_address__address"></div>'
+		'			<button id="'+this.prefix+'ConferenceController.Organ_changeMember_uint_address" onclick="'+this.prefix+'ConferenceController.Organ_changeMember_uint_address()">execute Conference_changeMember</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_changeMember_uint_address_res"></div>'
+		'		  </div>'
+		'		  <div class="function_execution" id="'+this.prefix+'Conference_contract_function_Manageable_addManager_address">'
+		'		Conference_addManager:'
+		'			  <div class="function_parameter">_newManagerAddress<input type="text" id="'+this.prefix+'Manageable_addManager_address__newManagerAddress"></div>'
+		'			<button id="'+this.prefix+'ConferenceController.Manageable_addManager_address" onclick="'+this.prefix+'ConferenceController.Manageable_addManager_address()">execute Conference_addManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_addManager_address_res"></div>'
+		'		  </div>'
+		'		  <div class="function_execution" id="'+this.prefix+'Conference_contract_function_Organ_createFunction_string_string">'
+		'		Conference_createFunction:'
+		'			  <div class="function_parameter">_functionName<input type="text" id="'+this.prefix+'Organ_createFunction_string_string__functionName"></div>'
+		'			  <div class="function_parameter">_constittiutionHash<input type="text" id="'+this.prefix+'Organ_createFunction_string_string__constittiutionHash"></div>'
+		'			<button id="'+this.prefix+'ConferenceController.Organ_createFunction_string_string" onclick="'+this.prefix+'ConferenceController.Organ_createFunction_string_string()">execute Conference_createFunction</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_createFunction_string_string_res"></div>'
+		'		  </div>'
+		'		  <div class="function_execution" id="'+this.prefix+'Conference_contract_function_Manageable_removeManager_address">'
+		'		Conference_removeManager:'
+		'			  <div class="function_parameter">_managerAddress<input type="text" id="'+this.prefix+'Manageable_removeManager_address__managerAddress"></div>'
+		'			<button id="'+this.prefix+'ConferenceController.Manageable_removeManager_address" onclick="'+this.prefix+'ConferenceController.Manageable_removeManager_address()">execute Conference_removeManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_removeManager_address_res"></div>'
+		'		  </div>'
+		'		  <div class="function_execution" id="'+this.prefix+'Conference_contract_function_Organ_initalizeOrgan">'
+		'		Conference_initalizeOrgan:'
+		'			<button id="'+this.prefix+'ConferenceController.Organ_initalizeOrgan" onclick="'+this.prefix+'ConferenceController.Organ_initalizeOrgan()">execute Conference_initalizeOrgan</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_initalizeOrgan_res"></div>'
+		'		  </div>'
+		'		  <div class="function_execution" id="'+this.prefix+'Conference_contract_function_Manageable_isManager_address">'
+		'		Conference_isManager:'
+		'			  <div class="function_parameter">_managerAddress<input type="text" id="'+this.prefix+'Manageable_isManager_address__managerAddress"></div>'
+		'			<button id="'+this.prefix+'ConferenceController.Manageable_isManager_address" onclick="'+this.prefix+'ConferenceController.Manageable_isManager_address()">execute Conference_isManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_isManager_address_res"></div>'
+		'		  </div>'
+		'		  <div class="function_execution" id="'+this.prefix+'Conference_contract_function_Organ_publishFunctionMessage_uint_string_string_string">'
+		'		Conference_publishFunctionMessage:'
+		'			  <div class="function_parameter">id<input type="number" id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_id"></div>'
+		'			  <div class="function_parameter">message<input type="text" id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_message"></div>'
+		'			  <div class="function_parameter">hash<input type="text" id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_hash"></div>'
+		'			  <div class="function_parameter">er<input type="text" id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_er"></div>'
+		'			<button id="'+this.prefix+'ConferenceController.Organ_publishFunctionMessage_uint_string_string_string" onclick="'+this.prefix+'ConferenceController.Organ_publishFunctionMessage_uint_string_string_string()">execute Conference_publishFunctionMessage</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_res"></div>'
+		'		  </div>'
+		'		  <div class="function_execution" id="'+this.prefix+'Conference_contract_function_Organ_createBallot_string_bytes32">'
+		'		Conference_createBallot:'
+		'			  <div class="function_parameter">name<input type="text" id="'+this.prefix+'Organ_createBallot_string_bytes32_name"></div>'
+		'			  <div class="function_parameter">proposalNames<input type="text" id="'+this.prefix+'Organ_createBallot_string_bytes32_proposalNames"></div>'
+		'			<button id="'+this.prefix+'ConferenceController.Organ_createBallot_string_bytes32" onclick="'+this.prefix+'ConferenceController.Organ_createBallot_string_bytes32()">execute Conference_createBallot</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_createBallot_string_bytes32_res"></div>'
+		'		  </div>'
+		'		  <div class="function_execution" id="'+this.prefix+'Conference_contract_function_Organ_getFunctionBlogAddress_uint">'
+		'		Conference_getFunctionBlogAddress:'
+		'			  <div class="function_parameter">id<input type="number" id="'+this.prefix+'Organ_getFunctionBlogAddress_uint_id"></div>'
+		'			<button id="'+this.prefix+'ConferenceController.Organ_getFunctionBlogAddress_uint" onclick="'+this.prefix+'ConferenceController.Organ_getFunctionBlogAddress_uint()">execute Conference_getFunctionBlogAddress</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_getFunctionBlogAddress_uint_res"></div>'
+		'		  </div>'
+		'		  <div class="function_execution" id="'+this.prefix+'Conference_contract_function_Organ_getLastBallot">'
+		'		Conference_getLastBallot:'
+		'			<button id="'+this.prefix+'ConferenceController.Organ_getLastBallot" onclick="'+this.prefix+'ConferenceController.Organ_getLastBallot()">execute Conference_getLastBallot</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_getLastBallot_res"></div>'
+		'		  </div>'
+		'		  <div class="function_execution" id="'+this.prefix+'Conference_contract_function_Organ_getOrganBlog">'
+		'		Conference_getOrganBlog:'
+		'			<button id="'+this.prefix+'ConferenceController.Organ_getOrganBlog" onclick="'+this.prefix+'ConferenceController.Organ_getOrganBlog()">execute Conference_getOrganBlog</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_getOrganBlog_res"></div>'
+		'		  </div>'
+		'		'
+		'		</div>'
;
	}

	/**
	* Create the gui for the attributes.
	*/
	this.createAttributesGui=function() {
		return 		'    <div class="contract_attribute" id="'+this.prefix+'Conference_contract_attribute_memberRegistry"> memberRegistry:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'Conference_memberRegistry_value"> </div>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Conference_contract_attribute_accreditatedMembers"> accreditatedMembers:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'Conference_accreditatedMembers_value"> </div>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Conference_contract_attribute_mangerCount"> mangerCount:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'Conference_mangerCount_value"> </div>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Conference_contract_attribute_organName"> organName:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'Conference_organName_value"> </div>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Conference_contract_attribute_date"> date:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'Conference_date_value"> </div>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Conference_contract_attribute_lastFunctionId"> lastFunctionId:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'Conference_lastFunctionId_value"> </div>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Conference_contract_attribute_blogRegistry"> blogRegistry:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'Conference_blogRegistry_value"> </div>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Conference_contract_attribute_isActive"> isActive:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'Conference_isActive_value"> </div>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Conference_contract_attribute_ballotCount"> ballotCount:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'Conference_ballotCount_value"> </div>'
+		'		    </div>'
+		'		'
;
	}

	/**
	* Create the gui for the function accreditationMember.
	*/
	this.createConference_accreditationMember_addressGui=function() {
		return 		'  <div class="function_execution" id="'+this.prefix+'Conference_contract_function_Conference_accreditationMember_address">'
+		'		Conference_accreditationMember:'
+		'			  <div class="function_parameter">_address<input type="text" id="'+this.prefix+'Conference_accreditationMember_address__address"></div>'
+		'			<button id="'+this.prefix+'ConferenceController.Conference_accreditationMember_address" onclick="'+this.prefix+'ConferenceController.Conference_accreditationMember_address()">execute Conference_accreditationMember</button>'
+		'			<div class="function_result" id="'+this.prefix+'Conference_accreditationMember_address_res"></div>'
+		'		  </div>'
;
	}

	/**
	* Create the gui for the function changeMember.
	*/
	this.createOrgan_changeMember_uint_addressGui=function() {
		return 		'  <div class="function_execution" id="'+this.prefix+'Conference_contract_function_Organ_changeMember_uint_address">'
+		'		Conference_changeMember:'
+		'			  <div class="function_parameter">_id<input type="number" id="'+this.prefix+'Organ_changeMember_uint_address__id"></div>'
+		'			  <div class="function_parameter">_address<input type="text" id="'+this.prefix+'Organ_changeMember_uint_address__address"></div>'
+		'			<button id="'+this.prefix+'ConferenceController.Organ_changeMember_uint_address" onclick="'+this.prefix+'ConferenceController.Organ_changeMember_uint_address()">execute Conference_changeMember</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_changeMember_uint_address_res"></div>'
+		'		  </div>'
;
	}

	/**
	* Create the gui for the function addManager.
	*/
	this.createManageable_addManager_addressGui=function() {
		return 		'  <div class="function_execution" id="'+this.prefix+'Conference_contract_function_Manageable_addManager_address">'
+		'		Conference_addManager:'
+		'			  <div class="function_parameter">_newManagerAddress<input type="text" id="'+this.prefix+'Manageable_addManager_address__newManagerAddress"></div>'
+		'			<button id="'+this.prefix+'ConferenceController.Manageable_addManager_address" onclick="'+this.prefix+'ConferenceController.Manageable_addManager_address()">execute Conference_addManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_addManager_address_res"></div>'
+		'		  </div>'
;
	}

	/**
	* Create the gui for the function createFunction.
	*/
	this.createOrgan_createFunction_string_stringGui=function() {
		return 		'  <div class="function_execution" id="'+this.prefix+'Conference_contract_function_Organ_createFunction_string_string">'
+		'		Conference_createFunction:'
+		'			  <div class="function_parameter">_functionName<input type="text" id="'+this.prefix+'Organ_createFunction_string_string__functionName"></div>'
+		'			  <div class="function_parameter">_constittiutionHash<input type="text" id="'+this.prefix+'Organ_createFunction_string_string__constittiutionHash"></div>'
+		'			<button id="'+this.prefix+'ConferenceController.Organ_createFunction_string_string" onclick="'+this.prefix+'ConferenceController.Organ_createFunction_string_string()">execute Conference_createFunction</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_createFunction_string_string_res"></div>'
+		'		  </div>'
;
	}

	/**
	* Create the gui for the function removeManager.
	*/
	this.createManageable_removeManager_addressGui=function() {
		return 		'  <div class="function_execution" id="'+this.prefix+'Conference_contract_function_Manageable_removeManager_address">'
+		'		Conference_removeManager:'
+		'			  <div class="function_parameter">_managerAddress<input type="text" id="'+this.prefix+'Manageable_removeManager_address__managerAddress"></div>'
+		'			<button id="'+this.prefix+'ConferenceController.Manageable_removeManager_address" onclick="'+this.prefix+'ConferenceController.Manageable_removeManager_address()">execute Conference_removeManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_removeManager_address_res"></div>'
+		'		  </div>'
;
	}

	/**
	* Create the gui for the function initalizeOrgan.
	*/
	this.createOrgan_initalizeOrganGui=function() {
		return 		'  <div class="function_execution" id="'+this.prefix+'Conference_contract_function_Organ_initalizeOrgan">'
+		'		Conference_initalizeOrgan:'
+		'			<button id="'+this.prefix+'ConferenceController.Organ_initalizeOrgan" onclick="'+this.prefix+'ConferenceController.Organ_initalizeOrgan()">execute Conference_initalizeOrgan</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_initalizeOrgan_res"></div>'
+		'		  </div>'
;
	}

	/**
	* Create the gui for the function isManager.
	*/
	this.createManageable_isManager_addressGui=function() {
		return 		'  <div class="function_execution" id="'+this.prefix+'Conference_contract_function_Manageable_isManager_address">'
+		'		Conference_isManager:'
+		'			  <div class="function_parameter">_managerAddress<input type="text" id="'+this.prefix+'Manageable_isManager_address__managerAddress"></div>'
+		'			<button id="'+this.prefix+'ConferenceController.Manageable_isManager_address" onclick="'+this.prefix+'ConferenceController.Manageable_isManager_address()">execute Conference_isManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_isManager_address_res"></div>'
+		'		  </div>'
;
	}

	/**
	* Create the gui for the function publishFunctionMessage.
	*/
	this.createOrgan_publishFunctionMessage_uint_string_string_stringGui=function() {
		return 		'  <div class="function_execution" id="'+this.prefix+'Conference_contract_function_Organ_publishFunctionMessage_uint_string_string_string">'
+		'		Conference_publishFunctionMessage:'
+		'			  <div class="function_parameter">id<input type="number" id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_id"></div>'
+		'			  <div class="function_parameter">message<input type="text" id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_message"></div>'
+		'			  <div class="function_parameter">hash<input type="text" id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_hash"></div>'
+		'			  <div class="function_parameter">er<input type="text" id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_er"></div>'
+		'			<button id="'+this.prefix+'ConferenceController.Organ_publishFunctionMessage_uint_string_string_string" onclick="'+this.prefix+'ConferenceController.Organ_publishFunctionMessage_uint_string_string_string()">execute Conference_publishFunctionMessage</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_res"></div>'
+		'		  </div>'
;
	}

	/**
	* Create the gui for the function createBallot.
	*/
	this.createOrgan_createBallot_string_bytes32Gui=function() {
		return 		'  <div class="function_execution" id="'+this.prefix+'Conference_contract_function_Organ_createBallot_string_bytes32">'
+		'		Conference_createBallot:'
+		'			  <div class="function_parameter">name<input type="text" id="'+this.prefix+'Organ_createBallot_string_bytes32_name"></div>'
+		'			  <div class="function_parameter">proposalNames<input type="text" id="'+this.prefix+'Organ_createBallot_string_bytes32_proposalNames"></div>'
+		'			<button id="'+this.prefix+'ConferenceController.Organ_createBallot_string_bytes32" onclick="'+this.prefix+'ConferenceController.Organ_createBallot_string_bytes32()">execute Conference_createBallot</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_createBallot_string_bytes32_res"></div>'
+		'		  </div>'
;
	}

	/**
	* Create the gui for the function getFunctionBlogAddress.
	*/
	this.createOrgan_getFunctionBlogAddress_uintGui=function() {
		return 		'  <div class="function_execution" id="'+this.prefix+'Conference_contract_function_Organ_getFunctionBlogAddress_uint">'
+		'		Conference_getFunctionBlogAddress:'
+		'			  <div class="function_parameter">id<input type="number" id="'+this.prefix+'Organ_getFunctionBlogAddress_uint_id"></div>'
+		'			<button id="'+this.prefix+'ConferenceController.Organ_getFunctionBlogAddress_uint" onclick="'+this.prefix+'ConferenceController.Organ_getFunctionBlogAddress_uint()">execute Conference_getFunctionBlogAddress</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_getFunctionBlogAddress_uint_res"></div>'
+		'		  </div>'
;
	}

	/**
	* Create the gui for the function getLastBallot.
	*/
	this.createOrgan_getLastBallotGui=function() {
		return 		'  <div class="function_execution" id="'+this.prefix+'Conference_contract_function_Organ_getLastBallot">'
+		'		Conference_getLastBallot:'
+		'			<button id="'+this.prefix+'ConferenceController.Organ_getLastBallot" onclick="'+this.prefix+'ConferenceController.Organ_getLastBallot()">execute Conference_getLastBallot</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_getLastBallot_res"></div>'
+		'		  </div>'
;
	}

	/**
	* Create the gui for the function getOrganBlog.
	*/
	this.createOrgan_getOrganBlogGui=function() {
		return 		'  <div class="function_execution" id="'+this.prefix+'Conference_contract_function_Organ_getOrganBlog">'
+		'		Conference_getOrganBlog:'
+		'			<button id="'+this.prefix+'ConferenceController.Organ_getOrganBlog" onclick="'+this.prefix+'ConferenceController.Organ_getOrganBlog()">execute Conference_getOrganBlog</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_getOrganBlog_res"></div>'
+		'		  </div>'
;
	}
	/**
	* Create the gui for the organFunctions struct element.
	*/
	this.createorganFunctionsStructGui=function() {
		return 		'<!--struct -->'
+		'		<div class="Struct_Mapping" id="'+this.prefix+'Struc_Conference_contract_attribute_organFunctions">struc mapping  organFunctions:'
+		'				<input type="number" id="'+this.prefix+'Conference_contract_attribute_organFunctions_input">(uint)'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'Conference_contract_attribute_organFunctions_currentMember"> currentMember:'
+		'		      		<div class="Struct_attribute_value" id="'+this.prefix+'Conference_organFunctions_currentMember_value"> </div>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'Conference_contract_attribute_organFunctions_functionName"> functionName:'
+		'		      		<div class="Struct_attribute_value" id="'+this.prefix+'Conference_organFunctions_functionName_value"> </div>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'Conference_contract_attribute_organFunctions_id"> id:'
+		'		      		<div class="Struct_attribute_value" id="'+this.prefix+'Conference_organFunctions_id_value"> </div>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'Conference_contract_attribute_organFunctions_constitutionHash"> constitutionHash:'
+		'		      		<div class="Struct_attribute_value" id="'+this.prefix+'Conference_organFunctions_constitutionHash_value"> </div>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'Conference_contract_attribute_organFunctions_lastMemberChanged"> lastMemberChanged:'
+		'		      		<div class="Struct_attribute_value" id="'+this.prefix+'Conference_organFunctions_lastMemberChanged_value"> </div>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'Conference_contract_attribute_organFunctions_lastConstitutionHashChanged"> lastConstitutionHashChanged:'
+		'		      		<div class="Struct_attribute_value" id="'+this.prefix+'Conference_organFunctions_lastConstitutionHashChanged_value"> </div>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'Conference_contract_attribute_organFunctions_publisher"> publisher:'
+		'		      		<div class="Struct_attribute_value" id="'+this.prefix+'Conference_organFunctions_publisher_value"> </div>'
+		'		    	</div>'
+		'		  </div>'
;
	}

	/**
	* Create a div with '@inner' as inner elements.
    * @inner - the inner text
	*/
	this.createSeletonGui=function(inner) {
		return 	'<!-- gui for Conference_contract -->'
		+	'	<div class="contract" id="'+this.prefix+'Conference_contract">'
		+ inner
		+'</div>';
	}


//eventguis

	/**
	* Create a gui for the MemberAccreditated event.
    * @inner - the inner text
	*/
	this.createMemberAccreditatedLogDataGui = function(prefix, blockHash, blockNumber
	,memberId	,memberName	,memberAddress	) {
		return '<ul class="dapp-account-list"><li > '
        +'<a class="dapp-identicon dapp-small" style="background-image: url(identiconimage.png)"></a>'
		+'<span>'+prefix+' ('+blockNumber+')</span>'
        +'<span>'+memberId+'</span>'
        +'<span>'+memberName+'</span>'
        +'<span>'+memberAddress+'</span>'
        +' </li>';
	}

}//end guifactory

/**
* Class ConferenceController. 
* The controller wrap's the 'instance' contract and binds all actions to document elements.
* Parameters are taken from elements with self.prefix+'functionName_parameterName'
*
* self.prefix+'ConferenceController.setAddress' - 
* self.prefix+'Conference_updateAttributes'     - 
* self.prefix+'Conference_accreditationMember_address -
* self.prefix+'Organ_changeMember_uint_address -
* self.prefix+'Manageable_addManager_address -
* self.prefix+'Organ_createFunction_string_string -
* self.prefix+'Manageable_removeManager_address -
* self.prefix+'Organ_initalizeOrgan -
* self.prefix+'Manageable_isManager_address -
* self.prefix+'Organ_publishFunctionMessage_uint_string_string_string -
* self.prefix+'Organ_createBallot_string_bytes32 -
* self.prefix+'Organ_getFunctionBlogAddress_uint -
* self.prefix+'Organ_getLastBallot -
* self.prefix+'Organ_getOrganBlog -
*/
function ConferenceController() {

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
		var btn = document.getElementById(self.prefix+'ConferenceController.setAddress');
		if(btn!=undefined)		
			btn.onclick = this.setAddress;
		else console.log('addres widget not bound');

		var btn = document.getElementById(self.prefix+'Conference_updateAttributes');
		if(btn!=undefined)
			btn.onclick = this._updateAttributes;
		else console.log('_updateAttributes widget not bound');
		var btn = document.getElementById(self.prefix+'ConferenceController.Conference_accreditationMember_address');
		if(btn!=undefined)
			btn.onclick = this.Conference_accreditationMember_address;
		else console.log('Conference_accreditationMember_address widget not bound');
		var btn = document.getElementById(self.prefix+'ConferenceController.Organ_changeMember_uint_address');
		if(btn!=undefined)
			btn.onclick = this.Organ_changeMember_uint_address;
		else console.log('Organ_changeMember_uint_address widget not bound');
		var btn = document.getElementById(self.prefix+'ConferenceController.Manageable_addManager_address');
		if(btn!=undefined)
			btn.onclick = this.Manageable_addManager_address;
		else console.log('Manageable_addManager_address widget not bound');
		var btn = document.getElementById(self.prefix+'ConferenceController.Organ_createFunction_string_string');
		if(btn!=undefined)
			btn.onclick = this.Organ_createFunction_string_string;
		else console.log('Organ_createFunction_string_string widget not bound');
		var btn = document.getElementById(self.prefix+'ConferenceController.Manageable_removeManager_address');
		if(btn!=undefined)
			btn.onclick = this.Manageable_removeManager_address;
		else console.log('Manageable_removeManager_address widget not bound');
		var btn = document.getElementById(self.prefix+'ConferenceController.Organ_initalizeOrgan');
		if(btn!=undefined)
			btn.onclick = this.Organ_initalizeOrgan;
		else console.log('Organ_initalizeOrgan widget not bound');
		var btn = document.getElementById(self.prefix+'ConferenceController.Manageable_isManager_address');
		if(btn!=undefined)
			btn.onclick = this.Manageable_isManager_address;
		else console.log('Manageable_isManager_address widget not bound');
		var btn = document.getElementById(self.prefix+'ConferenceController.Organ_publishFunctionMessage_uint_string_string_string');
		if(btn!=undefined)
			btn.onclick = this.Organ_publishFunctionMessage_uint_string_string_string;
		else console.log('Organ_publishFunctionMessage_uint_string_string_string widget not bound');
		var btn = document.getElementById(self.prefix+'ConferenceController.Organ_createBallot_string_bytes32');
		if(btn!=undefined)
			btn.onclick = this.Organ_createBallot_string_bytes32;
		else console.log('Organ_createBallot_string_bytes32 widget not bound');
		var btn = document.getElementById(self.prefix+'ConferenceController.Organ_getFunctionBlogAddress_uint');
		if(btn!=undefined)
			btn.onclick = this.Organ_getFunctionBlogAddress_uint;
		else console.log('Organ_getFunctionBlogAddress_uint widget not bound');
		var btn = document.getElementById(self.prefix+'ConferenceController.Organ_getLastBallot');
		if(btn!=undefined)
			btn.onclick = this.Organ_getLastBallot;
		else console.log('Organ_getLastBallot widget not bound');
		var btn = document.getElementById(self.prefix+'ConferenceController.Organ_getOrganBlog');
		if(btn!=undefined)
			btn.onclick = this.Organ_getOrganBlog;
		else console.log('Organ_getOrganBlog widget not bound');
	}

	/**
	* Set the address.
	*/
	this.setAddress=function() {
		var _address = document.getElementById(self.prefix+'Conference_address');
		if(_address==null)return;

		self.Conference_instance = ConferenceContract.at(_address.value);
		self.contractAddress = _address.value;
		self._updateAttributes();
	}
	
	/**
	* Update attributes.
	*
	* prefix+'Conference_memberRegistry_value' - 
	* prefix+'Conference_accreditatedMembers_value' - 
	* prefix+'Conference_mangerCount_value' - 
	* prefix+'Conference_organName_value' - 
	* prefix+'Conference_date_value' - 
	* prefix+'Conference_lastFunctionId_value' - 
	* prefix+'Conference_blogRegistry_value' - 
	* prefix+'Conference_isActive_value' - 
	* prefix+'Conference_ballotCount_value' - 
	**/
	this._updateAttributes=function () {
		if(this.instance===null) return;
		// update attributes
		var memberRegistry_res = self.instance.memberRegistry();
		var e = document.getElementById(self.prefix+'Conference_memberRegistry_value');
		if(memberRegistry_res!=null && e!=null)
			e.innerText = memberRegistry_res;
		else console.log(self.prefix+'Conference_memberRegistry_value not found');
		var accreditatedMembers_res = self.instance.accreditatedMembers();
		var e = document.getElementById(self.prefix+'Conference_accreditatedMembers_value');
		if(accreditatedMembers_res!=null && e!=null)
			e.innerText = accreditatedMembers_res;
		else console.log(self.prefix+'Conference_accreditatedMembers_value not found');
		var mangerCount_res = self.instance.mangerCount();
		var e = document.getElementById(self.prefix+'Conference_mangerCount_value');
		if(mangerCount_res!=null && e!=null)
			e.innerText = mangerCount_res;
		else console.log(self.prefix+'Conference_mangerCount_value not found');
		var organName_res = self.instance.organName();
		var e = document.getElementById(self.prefix+'Conference_organName_value');
		if(organName_res!=null && e!=null)
			e.innerText = organName_res;
		else console.log(self.prefix+'Conference_organName_value not found');
		var date_res = self.instance.date();
		var e = document.getElementById(self.prefix+'Conference_date_value');
		if(date_res!=null && e!=null)
			e.innerText = date_res;
		else console.log(self.prefix+'Conference_date_value not found');
		var lastFunctionId_res = self.instance.lastFunctionId();
		var e = document.getElementById(self.prefix+'Conference_lastFunctionId_value');
		if(lastFunctionId_res!=null && e!=null)
			e.innerText = lastFunctionId_res;
		else console.log(self.prefix+'Conference_lastFunctionId_value not found');
		var blogRegistry_res = self.instance.blogRegistry();
		var e = document.getElementById(self.prefix+'Conference_blogRegistry_value');
		if(blogRegistry_res!=null && e!=null)
			e.innerText = blogRegistry_res;
		else console.log(self.prefix+'Conference_blogRegistry_value not found');
		var isActive_res = self.instance.isActive();
		var e = document.getElementById(self.prefix+'Conference_isActive_value');
		if(isActive_res!=null && e!=null)
			e.innerText = isActive_res;
		else console.log(self.prefix+'Conference_isActive_value not found');
		var ballotCount_res = self.instance.ballotCount();
		var e = document.getElementById(self.prefix+'Conference_ballotCount_value');
		if(ballotCount_res!=null && e!=null)
			e.innerText = ballotCount_res;
		else console.log(self.prefix+'Conference_ballotCount_value not found');
		var e = document.getElementById(self.prefix+'Conference_contract_attribute_managers_input');
		if(e!=null){
			var _key = e.value;
			if(_key=='') return;
			var managers_res = self.instance.managers(_key);
			if(managers_res!=null){
				var e1 = document.getElementById(self.prefix+'Conference_managers_value');
				if(e1!=null)	
					e1.innerText = managers_res;
			}}
		var e = document.getElementById(self.prefix+'Conference_contract_attribute_organFunctions_input');
		if(e!=null){
			var _key = e.value;
			if(_key=='') return;
			var organFunctions_res = self.instance.organFunctions(_key);
			if(organFunctions_res!=null){
			var e1 = document.getElementById(self.prefix+'Conference_organFunctions_currentMember_value');
			if(e1!=null)	
				e1.innerText = organFunctions_res[0];
			var e1 = document.getElementById(self.prefix+'Conference_organFunctions_functionName_value');
			if(e1!=null)	
				e1.innerText = organFunctions_res[1];
			var e1 = document.getElementById(self.prefix+'Conference_organFunctions_id_value');
			if(e1!=null)	
				e1.innerText = organFunctions_res[2];
			var e1 = document.getElementById(self.prefix+'Conference_organFunctions_constitutionHash_value');
			if(e1!=null)	
				e1.innerText = organFunctions_res[3];
			var e1 = document.getElementById(self.prefix+'Conference_organFunctions_lastMemberChanged_value');
			if(e1!=null)	
				e1.innerText = organFunctions_res[4];
			var e1 = document.getElementById(self.prefix+'Conference_organFunctions_lastConstitutionHashChanged_value');
			if(e1!=null)	
				e1.innerText = organFunctions_res[5];
			var e1 = document.getElementById(self.prefix+'Conference_organFunctions_publisher_value');
			if(e1!=null)	
				e1.innerText = organFunctions_res[6];
			}}
	}

	//call functions
	
	/**
	* Calls the contract function Conference_accreditationMember.
	*
	* this.prefix+'Conference_accreditationMember_address__address' -
	**/
	this.Conference_accreditationMember_address=function() {
		var e = document.getElementById(self.prefix+'Conference_accreditationMember_address__address');
		if(e!=null)
			var param__address = e.value;
		else console.log(self.prefix+'Conference_accreditationMember_address__address not found');
		var res = self.instance.accreditationMember(param__address);
	}
	
	/**
	* Calls the contract function Conference_canAccess.
	*
	**/
	this.Manageable_canAccess=function() {
		var res = self.instance.canAccess();
		var e = document.getElementById(self.prefix+'Manageable_canAccess_res');
		if(res!=null && e!=null)
			e.innerText = res;
	}
	
	/**
	* Calls the contract function Conference_changeMember.
	*
	* this.prefix+'Organ_changeMember_uint_address__id' -
	* this.prefix+'Organ_changeMember_uint_address__address' -
	**/
	this.Organ_changeMember_uint_address=function() {
		var e = document.getElementById(self.prefix+'Organ_changeMember_uint_address__id');
		if(e!=null)
			var param__id = e.value;
		else console.log(self.prefix+'Organ_changeMember_uint_address__id not found');
		var e = document.getElementById(self.prefix+'Organ_changeMember_uint_address__address');
		if(e!=null)
			var param__address = e.value;
		else console.log(self.prefix+'Organ_changeMember_uint_address__address not found');
		var res = self.instance.changeMember(param__id, param__address);
	}
	
	/**
	* Calls the contract function Conference_isMember.
	*
	* this.prefix+'MemberAware_isMember_address__address' -
	**/
	this.MemberAware_isMember_address=function() {
		var e = document.getElementById(self.prefix+'MemberAware_isMember_address__address');
		if(e!=null)
			var param__address = e.value;
		else console.log(self.prefix+'MemberAware_isMember_address__address not found');
		var res = self.instance.isMember(param__address);
		var e = document.getElementById(self.prefix+'MemberAware_isMember_address_res');
		if(res!=null && e!=null)
			e.innerText = res;
	}
	
	/**
	* Calls the contract function Conference_addManager.
	*
	* this.prefix+'Manageable_addManager_address__newManagerAddress' -
	**/
	this.Manageable_addManager_address=function() {
		var e = document.getElementById(self.prefix+'Manageable_addManager_address__newManagerAddress');
		if(e!=null)
			var param__newManagerAddress = e.value;
		else console.log(self.prefix+'Manageable_addManager_address__newManagerAddress not found');
		var res = self.instance.addManager(param__newManagerAddress);
	}
	
	/**
	* Calls the contract function Conference_createFunction.
	*
	* this.prefix+'Organ_createFunction_string_string__functionName' -
	* this.prefix+'Organ_createFunction_string_string__constittiutionHash' -
	**/
	this.Organ_createFunction_string_string=function() {
		var e = document.getElementById(self.prefix+'Organ_createFunction_string_string__functionName');
		if(e!=null)
			var param__functionName = e.value;
		else console.log(self.prefix+'Organ_createFunction_string_string__functionName not found');
		var e = document.getElementById(self.prefix+'Organ_createFunction_string_string__constittiutionHash');
		if(e!=null)
			var param__constittiutionHash = e.value;
		else console.log(self.prefix+'Organ_createFunction_string_string__constittiutionHash not found');
		var res = self.instance.createFunction(param__functionName, param__constittiutionHash);
	}
	
	/**
	* Calls the contract function Conference_removeManager.
	*
	* this.prefix+'Manageable_removeManager_address__managerAddress' -
	**/
	this.Manageable_removeManager_address=function() {
		var e = document.getElementById(self.prefix+'Manageable_removeManager_address__managerAddress');
		if(e!=null)
			var param__managerAddress = e.value;
		else console.log(self.prefix+'Manageable_removeManager_address__managerAddress not found');
		var res = self.instance.removeManager(param__managerAddress);
	}
	
	/**
	* Calls the contract function Conference_initalizeOrgan.
	*
	**/
	this.Organ_initalizeOrgan=function() {
		var res = self.instance.initalizeOrgan();
	}
	
	/**
	* Calls the contract function Conference_isManager.
	*
	* this.prefix+'Manageable_isManager_address__managerAddress' -
	**/
	this.Manageable_isManager_address=function() {
		var e = document.getElementById(self.prefix+'Manageable_isManager_address__managerAddress');
		if(e!=null)
			var param__managerAddress = e.value;
		else console.log(self.prefix+'Manageable_isManager_address__managerAddress not found');
		var res = self.instance.isManager(param__managerAddress);
		var e = document.getElementById(self.prefix+'Manageable_isManager_address_res');
		if(res!=null && e!=null)
			e.innerText = res;
	}
	
	/**
	* Calls the contract function Conference_publishFunctionMessage.
	*
	* this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_id' -
	* this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_message' -
	* this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_hash' -
	* this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_er' -
	**/
	this.Organ_publishFunctionMessage_uint_string_string_string=function() {
		var e = document.getElementById(self.prefix+'Organ_publishFunctionMessage_uint_string_string_string_id');
		if(e!=null)
			var param_id = e.value;
		else console.log(self.prefix+'Organ_publishFunctionMessage_uint_string_string_string_id not found');
		var e = document.getElementById(self.prefix+'Organ_publishFunctionMessage_uint_string_string_string_message');
		if(e!=null)
			var param_message = e.value;
		else console.log(self.prefix+'Organ_publishFunctionMessage_uint_string_string_string_message not found');
		var e = document.getElementById(self.prefix+'Organ_publishFunctionMessage_uint_string_string_string_hash');
		if(e!=null)
			var param_hash = e.value;
		else console.log(self.prefix+'Organ_publishFunctionMessage_uint_string_string_string_hash not found');
		var e = document.getElementById(self.prefix+'Organ_publishFunctionMessage_uint_string_string_string_er');
		if(e!=null)
			var param_er = e.value;
		else console.log(self.prefix+'Organ_publishFunctionMessage_uint_string_string_string_er not found');
		var res = self.instance.publishFunctionMessage(param_id, param_message, param_hash, param_er);
	}
	
	/**
	* Calls the contract function Conference_createBallot.
	*
	* this.prefix+'Organ_createBallot_string_bytes32_name' -
	* this.prefix+'Organ_createBallot_string_bytes32_proposalNames' -
	**/
	this.Organ_createBallot_string_bytes32=function() {
		var e = document.getElementById(self.prefix+'Organ_createBallot_string_bytes32_name');
		if(e!=null)
			var param_name = e.value;
		else console.log(self.prefix+'Organ_createBallot_string_bytes32_name not found');
		var e = document.getElementById(self.prefix+'Organ_createBallot_string_bytes32_proposalNames');
		if(e!=null)
			var param_proposalNames = e.value;
		else console.log(self.prefix+'Organ_createBallot_string_bytes32_proposalNames not found');
		var res = self.instance.createBallot(param_name, param_proposalNames);
		var e = document.getElementById(self.prefix+'Organ_createBallot_string_bytes32_res');
		if(res!=null && e!=null)
			e.innerText = res;
	}
	
	/**
	* Calls the contract function Conference_getFunctionBlogAddress.
	*
	* this.prefix+'Organ_getFunctionBlogAddress_uint_id' -
	**/
	this.Organ_getFunctionBlogAddress_uint=function() {
		var e = document.getElementById(self.prefix+'Organ_getFunctionBlogAddress_uint_id');
		if(e!=null)
			var param_id = e.value;
		else console.log(self.prefix+'Organ_getFunctionBlogAddress_uint_id not found');
		var res = self.instance.getFunctionBlogAddress(param_id);
		var e = document.getElementById(self.prefix+'Organ_getFunctionBlogAddress_uint_res');
		if(res!=null && e!=null)
			e.innerText = res;
	}
	
	/**
	* Calls the contract function Conference_getLastBallot.
	*
	**/
	this.Organ_getLastBallot=function() {
		var res = self.instance.getLastBallot();
		var e = document.getElementById(self.prefix+'Organ_getLastBallot_res');
		if(res!=null && e!=null)
			e.innerText = res;
	}
	
	/**
	* Calls the contract function Conference_getOrganBlog.
	*
	**/
	this.Organ_getOrganBlog=function() {
		var res = self.instance.getOrganBlog();
		var e = document.getElementById(self.prefix+'Organ_getOrganBlog_res');
		if(res!=null && e!=null)
			e.innerText = res;
	}
	
//delegated calls

}// end controller	

/**
* class as GlueCode ConferenceManager,
* uses prefix + 'GuiContainer' as target element.
* It combines a ConferenceController as 'c' and a ConferenceGuiFactory as 'g'.
**/
function ConferenceManager(prefix,contract,containerId) {
	this.prefix = prefix;
	var self = this;
	this.c = new ConferenceController();
	this.c.prefix=prefix;
	this.c.instance=contract;
	this.c.contractAddress = contract.address;
	this.g = new ConferenceGuiFactory();
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
		elemDiv.id= this.prefix +'Conference_gui';
		e.appendChild(elemDiv);
		if(this.guiFunction==null)
			elemDiv.innerHTML = this.createGui(this.g);
		else elemDiv.innerHTML = this.guiFunction(this.g);
		
		var e = document.getElementById(this.prefix+'Conference_address');
		if(e!=null)
			e.value = this.c.contractAddress;
		else 
			console.log(this.prefix+'Conference_address not found');
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
//Start of user code Conference_create_gui_js
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
	* Getter for the contract 'Conference' instance.
	**/
	this.getContract = function(){
		return this.c.instance;
	}

	/**
	* Watch for the contract events.
	* The events are stored in an element with the id this.eventlogPrefix+'eventLog'.
	**/
	this.watchEvents=function(){
	var event_MemberAccreditated = contract.MemberAccreditated({},{fromBlock: 0});
	var elp = this.eventlogPrefix;
	event_MemberAccreditated.watch(function(error,result){
	if(!error){
		var e = document.getElementById(elp+'eventLog');
		if(e==null){
			console.log(elp+'eventLog');
			return;
		}
		var elemDiv = document.createElement('div');
		elemDiv.id= result.blockNumber +'event';
		e.appendChild(elemDiv);
		//console.log(result.address+ 'eventLog'+result.blockHash+' '+result.blockNumber+' '+result.args.name+' '+result.args.succesful+' ');
		elemDiv.innerHTML = '<div class="eventRow">'
        +'<dic class="eventValue">'+result.args.memberId+'</div>'
        +'<dic class="eventValue">'+result.args.memberName+'</div>'
        +'<dic class="eventValue">'+result.args.memberAddress+'</div>'
		+ '</div>';
		}else
			console.log(error);	
	});
	}

}// end of manager

/**
* Manages a list of ConferenceManager uses the guid id to place the gui which is also the eventlogPrefix
*/
function ConferenceGuiMananger(guiId){
	this.prefix = guiId;
	this.managers=new Array();	//[];		
	this.guiFunction = null;
	
	/**
	* Add a contract to this manager.
	* @namespace contract
	*/
	this.addManager = function(contract) {
		var m = new ConferenceManager(contract.address,contract,this.prefix);
		m.eventlogPrefix = this.prefix;
		m.watchEvents();
		if(this.guiFunction!=null)
			m.guiFunction = this.guiFunction;
		this.managers.push(m);
		//manager.addGui();
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
			elemDiv.id= manager.prefix + 'GuiContainer';//'Conference_gui';
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
function ConferenceDeployment(guiId){

//Start of user code Conference_deployment_js
//TODO: implement
//End of user code
}
//Start of user code custom_Conference_js
//TODO: implement
//End of user code
/**
* A simple bean class around the contract.
* The FoundationConferenceModel.
**/
function FoundationConferenceModel(contract) {
this.contract = contract;
	/**
	* Getter for memberRegistry.
	**/
	this.getMemberRegistry = function(){
		return contract.memberRegistry(); 
	}
	/**
	* Getter for accreditatedMembers.
	**/
	this.getAccreditatedMembers = function(){
		return contract.accreditatedMembers(); 
	}
	/**
	* Getter for mangerCount.
	**/
	this.getMangerCount = function(){
		return contract.mangerCount(); 
	}
	/**
	* Getter for organName.
	**/
	this.getOrganName = function(){
		return contract.organName(); 
	}
	/**
	* Getter for date.
	**/
	this.getDate = function(){
		return contract.date(); 
	}
	/**
	* Getter for lastFunctionId.
	**/
	this.getLastFunctionId = function(){
		return contract.lastFunctionId(); 
	}
	/**
	* Getter for blogRegistry.
	**/
	this.getBlogRegistry = function(){
		return contract.blogRegistry(); 
	}
	/**
	* Getter for isActive.
	**/
	this.getIsActive = function(){
		return contract.isActive(); 
	}
	/**
	* Getter for ballotCount.
	**/
	this.getBallotCount = function(){
		return contract.ballotCount(); 
	}
	/**
	* Call accreditationMember.
	**/
	this.accreditationMember = function(_address){
		return contract.accreditationMember(_address); 
	}
	/**
	* Call changeMember.
	**/
	this.changeMember = function(_id,_address){
		return contract.changeMember(_id,_address); 
	}
	/**
	* Call addManager.
	**/
	this.addManager = function(_newManagerAddress){
		return contract.addManager(_newManagerAddress); 
	}
	/**
	* Call createFunction.
	**/
	this.createFunction = function(_functionName,_constittiutionHash){
		return contract.createFunction(_functionName,_constittiutionHash); 
	}
	/**
	* Call removeManager.
	**/
	this.removeManager = function(_managerAddress){
		return contract.removeManager(_managerAddress); 
	}
	/**
	* Call initalizeOrgan.
	**/
	this.initalizeOrgan = function(){
		return contract.initalizeOrgan(); 
	}
	/**
	* Call isManager.
	**/
	this.isManager = function(_managerAddress){
		return contract.isManager(_managerAddress); 
	}
	/**
	* Call publishFunctionMessage.
	**/
	this.publishFunctionMessage = function(id,message,hash,er){
		return contract.publishFunctionMessage(id,message,hash,er); 
	}
	/**
	* Call createBallot.
	**/
	this.createBallot = function(name,proposalNames){
		return contract.createBallot(name,proposalNames); 
	}
	/**
	* Call getFunctionBlogAddress.
	**/
	this.getFunctionBlogAddress = function(id){
		return contract.getFunctionBlogAddress(id); 
	}
	/**
	* Call getLastBallot.
	**/
	this.getLastBallot = function(){
		return contract.getLastBallot(); 
	}
	/**
	* Call getOrganBlog.
	**/
	this.getOrganBlog = function(){
		return contract.getOrganBlog(); 
	}
}// end of function FoundationConferenceModel

/**
* Gui factory FoundationConference
**/
function FoundationConferenceGuiFactory() {
	this.prefix='';
	
	/**
	* Places the default gui to 'e' or an element with id='FoundationConference_gui'
	*/
	this.placeDefaultGui=function(e) {
		if(e==null)
			e = document.getElementById(this.prefix+'FoundationConference_gui');
		if(e!=null)
			e.innerHTML = this.createDefaultGui();
		else
			console.log(this.prefix+'FoundationConference_gui not found');
	}

	/**
	* The default generated gui with all actions and attributes.
	*/
	this.createDefaultGui=function() {
		return 		'<!-- gui for FoundationConference_contract -->'
+		'		<div class="contract" id="'+this.prefix+'FoundationConference_contract">'
+		'		FoundationConference:'
+		'		  <input type="text" id="'+this.prefix+'FoundationConference_address"> <button id="'+this.prefix+'FoundationConferenceController.setAddress" onclick="'+this.prefix+'FoundationConferenceController.setAddress()">change FoundationConference Address</button>'
+		'		  <div class="contract_attributes" id="'+this.prefix+'FoundationConference_contract_attributes"> attributes:'
+		'		    <div class="contract_attribute" id="'+this.prefix+'FoundationConference_contract_attribute_memberRegistry"> memberRegistry:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'FoundationConference_memberRegistry_value"> </div>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'FoundationConference_contract_attribute_accreditatedMembers"> accreditatedMembers:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'FoundationConference_accreditatedMembers_value"> </div>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'FoundationConference_contract_attribute_mangerCount"> mangerCount:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'FoundationConference_mangerCount_value"> </div>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'FoundationConference_contract_attribute_organName"> organName:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'FoundationConference_organName_value"> </div>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'FoundationConference_contract_attribute_date"> date:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'FoundationConference_date_value"> </div>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'FoundationConference_contract_attribute_lastFunctionId"> lastFunctionId:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'FoundationConference_lastFunctionId_value"> </div>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'FoundationConference_contract_attribute_blogRegistry"> blogRegistry:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'FoundationConference_blogRegistry_value"> </div>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'FoundationConference_contract_attribute_isActive"> isActive:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'FoundationConference_isActive_value"> </div>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'FoundationConference_contract_attribute_ballotCount"> ballotCount:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'FoundationConference_ballotCount_value"> </div>'
+		'		    </div>'
+		'		'
+		'		<div class="Value_Mapping" id="'+this.prefix+'FoundationConference_contract_attribute_managers">mapping  managers:'
+		'				<input type="text" id="'+this.prefix+'FoundationConference_contract_attribute_managers_input">(address)'
+		'		    	<div class="Mapping_value" id="'+this.prefix+'FoundationConference_contract_attribute_address"> bool:'
+		'		      		<div class="contract_attribute_value" id="'+this.prefix+'FoundationConference_managers_value"> </div>'
+		'		    	</div>'
+		'		  </div>'
+		'		<!--struct -->'
+		'		<div class="Struct_Mapping" id="'+this.prefix+'Struc_FoundationConference_contract_attribute_organFunctions">struc mapping  organFunctions:'
+		'				<input type="number" id="'+this.prefix+'FoundationConference_contract_attribute_organFunctions_input">(uint)'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'FoundationConference_contract_attribute_organFunctions_currentMember"> currentMember:'
+		'		      		<div class="Struct_attribute_value" id="'+this.prefix+'FoundationConference_organFunctions_currentMember_value"> </div>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'FoundationConference_contract_attribute_organFunctions_functionName"> functionName:'
+		'		      		<div class="Struct_attribute_value" id="'+this.prefix+'FoundationConference_organFunctions_functionName_value"> </div>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'FoundationConference_contract_attribute_organFunctions_id"> id:'
+		'		      		<div class="Struct_attribute_value" id="'+this.prefix+'FoundationConference_organFunctions_id_value"> </div>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'FoundationConference_contract_attribute_organFunctions_constitutionHash"> constitutionHash:'
+		'		      		<div class="Struct_attribute_value" id="'+this.prefix+'FoundationConference_organFunctions_constitutionHash_value"> </div>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'FoundationConference_contract_attribute_organFunctions_lastMemberChanged"> lastMemberChanged:'
+		'		      		<div class="Struct_attribute_value" id="'+this.prefix+'FoundationConference_organFunctions_lastMemberChanged_value"> </div>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'FoundationConference_contract_attribute_organFunctions_lastConstitutionHashChanged"> lastConstitutionHashChanged:'
+		'		      		<div class="Struct_attribute_value" id="'+this.prefix+'FoundationConference_organFunctions_lastConstitutionHashChanged_value"> </div>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'FoundationConference_contract_attribute_organFunctions_publisher"> publisher:'
+		'		      		<div class="Struct_attribute_value" id="'+this.prefix+'FoundationConference_organFunctions_publisher_value"> </div>'
+		'		    	</div>'
+		'		  </div>'
+		'		    <button id="'+this.prefix+'FoundationConference_updateAttributes" onclick="'+this.prefix+'FoundationConferenceController._updateAttributes()">update FoundationConference attributes</button>'
+		'		  </div>'
+		'		  <div class="function_execution" id="'+this.prefix+'FoundationConference_contract_function_Conference_accreditationMember_address">'
+		'		FoundationConference_accreditationMember:'
+		'			  <div class="function_parameter">_address<input type="text" id="'+this.prefix+'Conference_accreditationMember_address__address"></div>'
+		'			<button id="'+this.prefix+'FoundationConferenceController.Conference_accreditationMember_address" onclick="'+this.prefix+'FoundationConferenceController.Conference_accreditationMember_address()">execute FoundationConference_accreditationMember</button>'
+		'			<div class="function_result" id="'+this.prefix+'Conference_accreditationMember_address_res"></div>'
+		'		  </div>'
+		'		  <div class="function_execution" id="'+this.prefix+'FoundationConference_contract_function_Organ_changeMember_uint_address">'
+		'		FoundationConference_changeMember:'
+		'			  <div class="function_parameter">_id<input type="number" id="'+this.prefix+'Organ_changeMember_uint_address__id"></div>'
+		'			  <div class="function_parameter">_address<input type="text" id="'+this.prefix+'Organ_changeMember_uint_address__address"></div>'
+		'			<button id="'+this.prefix+'FoundationConferenceController.Organ_changeMember_uint_address" onclick="'+this.prefix+'FoundationConferenceController.Organ_changeMember_uint_address()">execute FoundationConference_changeMember</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_changeMember_uint_address_res"></div>'
+		'		  </div>'
+		'		  <div class="function_execution" id="'+this.prefix+'FoundationConference_contract_function_Manageable_addManager_address">'
+		'		FoundationConference_addManager:'
+		'			  <div class="function_parameter">_newManagerAddress<input type="text" id="'+this.prefix+'Manageable_addManager_address__newManagerAddress"></div>'
+		'			<button id="'+this.prefix+'FoundationConferenceController.Manageable_addManager_address" onclick="'+this.prefix+'FoundationConferenceController.Manageable_addManager_address()">execute FoundationConference_addManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_addManager_address_res"></div>'
+		'		  </div>'
+		'		  <div class="function_execution" id="'+this.prefix+'FoundationConference_contract_function_Organ_createFunction_string_string">'
+		'		FoundationConference_createFunction:'
+		'			  <div class="function_parameter">_functionName<input type="text" id="'+this.prefix+'Organ_createFunction_string_string__functionName"></div>'
+		'			  <div class="function_parameter">_constittiutionHash<input type="text" id="'+this.prefix+'Organ_createFunction_string_string__constittiutionHash"></div>'
+		'			<button id="'+this.prefix+'FoundationConferenceController.Organ_createFunction_string_string" onclick="'+this.prefix+'FoundationConferenceController.Organ_createFunction_string_string()">execute FoundationConference_createFunction</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_createFunction_string_string_res"></div>'
+		'		  </div>'
+		'		  <div class="function_execution" id="'+this.prefix+'FoundationConference_contract_function_Manageable_removeManager_address">'
+		'		FoundationConference_removeManager:'
+		'			  <div class="function_parameter">_managerAddress<input type="text" id="'+this.prefix+'Manageable_removeManager_address__managerAddress"></div>'
+		'			<button id="'+this.prefix+'FoundationConferenceController.Manageable_removeManager_address" onclick="'+this.prefix+'FoundationConferenceController.Manageable_removeManager_address()">execute FoundationConference_removeManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_removeManager_address_res"></div>'
+		'		  </div>'
+		'		  <div class="function_execution" id="'+this.prefix+'FoundationConference_contract_function_Organ_initalizeOrgan">'
+		'		FoundationConference_initalizeOrgan:'
+		'			<button id="'+this.prefix+'FoundationConferenceController.Organ_initalizeOrgan" onclick="'+this.prefix+'FoundationConferenceController.Organ_initalizeOrgan()">execute FoundationConference_initalizeOrgan</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_initalizeOrgan_res"></div>'
+		'		  </div>'
+		'		  <div class="function_execution" id="'+this.prefix+'FoundationConference_contract_function_Manageable_isManager_address">'
+		'		FoundationConference_isManager:'
+		'			  <div class="function_parameter">_managerAddress<input type="text" id="'+this.prefix+'Manageable_isManager_address__managerAddress"></div>'
+		'			<button id="'+this.prefix+'FoundationConferenceController.Manageable_isManager_address" onclick="'+this.prefix+'FoundationConferenceController.Manageable_isManager_address()">execute FoundationConference_isManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_isManager_address_res"></div>'
+		'		  </div>'
+		'		  <div class="function_execution" id="'+this.prefix+'FoundationConference_contract_function_Organ_publishFunctionMessage_uint_string_string_string">'
+		'		FoundationConference_publishFunctionMessage:'
+		'			  <div class="function_parameter">id<input type="number" id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_id"></div>'
+		'			  <div class="function_parameter">message<input type="text" id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_message"></div>'
+		'			  <div class="function_parameter">hash<input type="text" id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_hash"></div>'
+		'			  <div class="function_parameter">er<input type="text" id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_er"></div>'
+		'			<button id="'+this.prefix+'FoundationConferenceController.Organ_publishFunctionMessage_uint_string_string_string" onclick="'+this.prefix+'FoundationConferenceController.Organ_publishFunctionMessage_uint_string_string_string()">execute FoundationConference_publishFunctionMessage</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_res"></div>'
+		'		  </div>'
+		'		  <div class="function_execution" id="'+this.prefix+'FoundationConference_contract_function_Organ_createBallot_string_bytes32">'
+		'		FoundationConference_createBallot:'
+		'			  <div class="function_parameter">name<input type="text" id="'+this.prefix+'Organ_createBallot_string_bytes32_name"></div>'
+		'			  <div class="function_parameter">proposalNames<input type="text" id="'+this.prefix+'Organ_createBallot_string_bytes32_proposalNames"></div>'
+		'			<button id="'+this.prefix+'FoundationConferenceController.Organ_createBallot_string_bytes32" onclick="'+this.prefix+'FoundationConferenceController.Organ_createBallot_string_bytes32()">execute FoundationConference_createBallot</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_createBallot_string_bytes32_res"></div>'
+		'		  </div>'
+		'		  <div class="function_execution" id="'+this.prefix+'FoundationConference_contract_function_Organ_getFunctionBlogAddress_uint">'
+		'		FoundationConference_getFunctionBlogAddress:'
+		'			  <div class="function_parameter">id<input type="number" id="'+this.prefix+'Organ_getFunctionBlogAddress_uint_id"></div>'
+		'			<button id="'+this.prefix+'FoundationConferenceController.Organ_getFunctionBlogAddress_uint" onclick="'+this.prefix+'FoundationConferenceController.Organ_getFunctionBlogAddress_uint()">execute FoundationConference_getFunctionBlogAddress</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_getFunctionBlogAddress_uint_res"></div>'
+		'		  </div>'
+		'		  <div class="function_execution" id="'+this.prefix+'FoundationConference_contract_function_Organ_getLastBallot">'
+		'		FoundationConference_getLastBallot:'
+		'			<button id="'+this.prefix+'FoundationConferenceController.Organ_getLastBallot" onclick="'+this.prefix+'FoundationConferenceController.Organ_getLastBallot()">execute FoundationConference_getLastBallot</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_getLastBallot_res"></div>'
+		'		  </div>'
+		'		  <div class="function_execution" id="'+this.prefix+'FoundationConference_contract_function_Organ_getOrganBlog">'
+		'		FoundationConference_getOrganBlog:'
+		'			<button id="'+this.prefix+'FoundationConferenceController.Organ_getOrganBlog" onclick="'+this.prefix+'FoundationConferenceController.Organ_getOrganBlog()">execute FoundationConference_getOrganBlog</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_getOrganBlog_res"></div>'
+		'		  </div>'
+		'		'
+		'		</div>'
;
	}

	/**
	* Create the gui for the attributes.
	*/
	this.createAttributesGui=function() {
		return 		'    <div class="contract_attribute" id="'+this.prefix+'FoundationConference_contract_attribute_memberRegistry"> memberRegistry:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'FoundationConference_memberRegistry_value"> </div>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'FoundationConference_contract_attribute_accreditatedMembers"> accreditatedMembers:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'FoundationConference_accreditatedMembers_value"> </div>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'FoundationConference_contract_attribute_mangerCount"> mangerCount:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'FoundationConference_mangerCount_value"> </div>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'FoundationConference_contract_attribute_organName"> organName:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'FoundationConference_organName_value"> </div>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'FoundationConference_contract_attribute_date"> date:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'FoundationConference_date_value"> </div>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'FoundationConference_contract_attribute_lastFunctionId"> lastFunctionId:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'FoundationConference_lastFunctionId_value"> </div>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'FoundationConference_contract_attribute_blogRegistry"> blogRegistry:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'FoundationConference_blogRegistry_value"> </div>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'FoundationConference_contract_attribute_isActive"> isActive:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'FoundationConference_isActive_value"> </div>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'FoundationConference_contract_attribute_ballotCount"> ballotCount:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'FoundationConference_ballotCount_value"> </div>'
+		'		    </div>'
+		'		'
;
	}

	/**
	* Create the gui for the function accreditationMember.
	*/
	this.createConference_accreditationMember_addressGui=function() {
		return 		'  <div class="function_execution" id="'+this.prefix+'FoundationConference_contract_function_Conference_accreditationMember_address">'
+		'		FoundationConference_accreditationMember:'
+		'			  <div class="function_parameter">_address<input type="text" id="'+this.prefix+'Conference_accreditationMember_address__address"></div>'
+		'			<button id="'+this.prefix+'FoundationConferenceController.Conference_accreditationMember_address" onclick="'+this.prefix+'FoundationConferenceController.Conference_accreditationMember_address()">execute FoundationConference_accreditationMember</button>'
+		'			<div class="function_result" id="'+this.prefix+'Conference_accreditationMember_address_res"></div>'
+		'		  </div>'
;
	}

	/**
	* Create the gui for the function changeMember.
	*/
	this.createOrgan_changeMember_uint_addressGui=function() {
		return 		'  <div class="function_execution" id="'+this.prefix+'FoundationConference_contract_function_Organ_changeMember_uint_address">'
+		'		FoundationConference_changeMember:'
+		'			  <div class="function_parameter">_id<input type="number" id="'+this.prefix+'Organ_changeMember_uint_address__id"></div>'
+		'			  <div class="function_parameter">_address<input type="text" id="'+this.prefix+'Organ_changeMember_uint_address__address"></div>'
+		'			<button id="'+this.prefix+'FoundationConferenceController.Organ_changeMember_uint_address" onclick="'+this.prefix+'FoundationConferenceController.Organ_changeMember_uint_address()">execute FoundationConference_changeMember</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_changeMember_uint_address_res"></div>'
+		'		  </div>'
;
	}

	/**
	* Create the gui for the function addManager.
	*/
	this.createManageable_addManager_addressGui=function() {
		return 		'  <div class="function_execution" id="'+this.prefix+'FoundationConference_contract_function_Manageable_addManager_address">'
+		'		FoundationConference_addManager:'
+		'			  <div class="function_parameter">_newManagerAddress<input type="text" id="'+this.prefix+'Manageable_addManager_address__newManagerAddress"></div>'
+		'			<button id="'+this.prefix+'FoundationConferenceController.Manageable_addManager_address" onclick="'+this.prefix+'FoundationConferenceController.Manageable_addManager_address()">execute FoundationConference_addManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_addManager_address_res"></div>'
+		'		  </div>'
;
	}

	/**
	* Create the gui for the function createFunction.
	*/
	this.createOrgan_createFunction_string_stringGui=function() {
		return 		'  <div class="function_execution" id="'+this.prefix+'FoundationConference_contract_function_Organ_createFunction_string_string">'
+		'		FoundationConference_createFunction:'
+		'			  <div class="function_parameter">_functionName<input type="text" id="'+this.prefix+'Organ_createFunction_string_string__functionName"></div>'
+		'			  <div class="function_parameter">_constittiutionHash<input type="text" id="'+this.prefix+'Organ_createFunction_string_string__constittiutionHash"></div>'
+		'			<button id="'+this.prefix+'FoundationConferenceController.Organ_createFunction_string_string" onclick="'+this.prefix+'FoundationConferenceController.Organ_createFunction_string_string()">execute FoundationConference_createFunction</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_createFunction_string_string_res"></div>'
+		'		  </div>'
;
	}

	/**
	* Create the gui for the function removeManager.
	*/
	this.createManageable_removeManager_addressGui=function() {
		return 		'  <div class="function_execution" id="'+this.prefix+'FoundationConference_contract_function_Manageable_removeManager_address">'
+		'		FoundationConference_removeManager:'
+		'			  <div class="function_parameter">_managerAddress<input type="text" id="'+this.prefix+'Manageable_removeManager_address__managerAddress"></div>'
+		'			<button id="'+this.prefix+'FoundationConferenceController.Manageable_removeManager_address" onclick="'+this.prefix+'FoundationConferenceController.Manageable_removeManager_address()">execute FoundationConference_removeManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_removeManager_address_res"></div>'
+		'		  </div>'
;
	}

	/**
	* Create the gui for the function initalizeOrgan.
	*/
	this.createOrgan_initalizeOrganGui=function() {
		return 		'  <div class="function_execution" id="'+this.prefix+'FoundationConference_contract_function_Organ_initalizeOrgan">'
+		'		FoundationConference_initalizeOrgan:'
+		'			<button id="'+this.prefix+'FoundationConferenceController.Organ_initalizeOrgan" onclick="'+this.prefix+'FoundationConferenceController.Organ_initalizeOrgan()">execute FoundationConference_initalizeOrgan</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_initalizeOrgan_res"></div>'
+		'		  </div>'
;
	}

	/**
	* Create the gui for the function isManager.
	*/
	this.createManageable_isManager_addressGui=function() {
		return 		'  <div class="function_execution" id="'+this.prefix+'FoundationConference_contract_function_Manageable_isManager_address">'
+		'		FoundationConference_isManager:'
+		'			  <div class="function_parameter">_managerAddress<input type="text" id="'+this.prefix+'Manageable_isManager_address__managerAddress"></div>'
+		'			<button id="'+this.prefix+'FoundationConferenceController.Manageable_isManager_address" onclick="'+this.prefix+'FoundationConferenceController.Manageable_isManager_address()">execute FoundationConference_isManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_isManager_address_res"></div>'
+		'		  </div>'
;
	}

	/**
	* Create the gui for the function publishFunctionMessage.
	*/
	this.createOrgan_publishFunctionMessage_uint_string_string_stringGui=function() {
		return 		'  <div class="function_execution" id="'+this.prefix+'FoundationConference_contract_function_Organ_publishFunctionMessage_uint_string_string_string">'
+		'		FoundationConference_publishFunctionMessage:'
+		'			  <div class="function_parameter">id<input type="number" id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_id"></div>'
+		'			  <div class="function_parameter">message<input type="text" id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_message"></div>'
+		'			  <div class="function_parameter">hash<input type="text" id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_hash"></div>'
+		'			  <div class="function_parameter">er<input type="text" id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_er"></div>'
+		'			<button id="'+this.prefix+'FoundationConferenceController.Organ_publishFunctionMessage_uint_string_string_string" onclick="'+this.prefix+'FoundationConferenceController.Organ_publishFunctionMessage_uint_string_string_string()">execute FoundationConference_publishFunctionMessage</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_res"></div>'
+		'		  </div>'
;
	}

	/**
	* Create the gui for the function createBallot.
	*/
	this.createOrgan_createBallot_string_bytes32Gui=function() {
		return 		'  <div class="function_execution" id="'+this.prefix+'FoundationConference_contract_function_Organ_createBallot_string_bytes32">'
+		'		FoundationConference_createBallot:'
+		'			  <div class="function_parameter">name<input type="text" id="'+this.prefix+'Organ_createBallot_string_bytes32_name"></div>'
+		'			  <div class="function_parameter">proposalNames<input type="text" id="'+this.prefix+'Organ_createBallot_string_bytes32_proposalNames"></div>'
+		'			<button id="'+this.prefix+'FoundationConferenceController.Organ_createBallot_string_bytes32" onclick="'+this.prefix+'FoundationConferenceController.Organ_createBallot_string_bytes32()">execute FoundationConference_createBallot</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_createBallot_string_bytes32_res"></div>'
+		'		  </div>'
;
	}

	/**
	* Create the gui for the function getFunctionBlogAddress.
	*/
	this.createOrgan_getFunctionBlogAddress_uintGui=function() {
		return 		'  <div class="function_execution" id="'+this.prefix+'FoundationConference_contract_function_Organ_getFunctionBlogAddress_uint">'
+		'		FoundationConference_getFunctionBlogAddress:'
+		'			  <div class="function_parameter">id<input type="number" id="'+this.prefix+'Organ_getFunctionBlogAddress_uint_id"></div>'
+		'			<button id="'+this.prefix+'FoundationConferenceController.Organ_getFunctionBlogAddress_uint" onclick="'+this.prefix+'FoundationConferenceController.Organ_getFunctionBlogAddress_uint()">execute FoundationConference_getFunctionBlogAddress</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_getFunctionBlogAddress_uint_res"></div>'
+		'		  </div>'
;
	}

	/**
	* Create the gui for the function getLastBallot.
	*/
	this.createOrgan_getLastBallotGui=function() {
		return 		'  <div class="function_execution" id="'+this.prefix+'FoundationConference_contract_function_Organ_getLastBallot">'
+		'		FoundationConference_getLastBallot:'
+		'			<button id="'+this.prefix+'FoundationConferenceController.Organ_getLastBallot" onclick="'+this.prefix+'FoundationConferenceController.Organ_getLastBallot()">execute FoundationConference_getLastBallot</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_getLastBallot_res"></div>'
+		'		  </div>'
;
	}

	/**
	* Create the gui for the function getOrganBlog.
	*/
	this.createOrgan_getOrganBlogGui=function() {
		return 		'  <div class="function_execution" id="'+this.prefix+'FoundationConference_contract_function_Organ_getOrganBlog">'
+		'		FoundationConference_getOrganBlog:'
+		'			<button id="'+this.prefix+'FoundationConferenceController.Organ_getOrganBlog" onclick="'+this.prefix+'FoundationConferenceController.Organ_getOrganBlog()">execute FoundationConference_getOrganBlog</button>'
+		'			<div class="function_result" id="'+this.prefix+'Organ_getOrganBlog_res"></div>'
+		'		  </div>'
;
	}
	/**
	* Create the gui for the organFunctions struct element.
	*/
	this.createorganFunctionsStructGui=function() {
		return 		'<!--struct -->'
+		'		<div class="Struct_Mapping" id="'+this.prefix+'Struc_FoundationConference_contract_attribute_organFunctions">struc mapping  organFunctions:'
+		'				<input type="number" id="'+this.prefix+'FoundationConference_contract_attribute_organFunctions_input">(uint)'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'FoundationConference_contract_attribute_organFunctions_currentMember"> currentMember:'
+		'		      		<div class="Struct_attribute_value" id="'+this.prefix+'FoundationConference_organFunctions_currentMember_value"> </div>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'FoundationConference_contract_attribute_organFunctions_functionName"> functionName:'
+		'		      		<div class="Struct_attribute_value" id="'+this.prefix+'FoundationConference_organFunctions_functionName_value"> </div>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'FoundationConference_contract_attribute_organFunctions_id"> id:'
+		'		      		<div class="Struct_attribute_value" id="'+this.prefix+'FoundationConference_organFunctions_id_value"> </div>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'FoundationConference_contract_attribute_organFunctions_constitutionHash"> constitutionHash:'
+		'		      		<div class="Struct_attribute_value" id="'+this.prefix+'FoundationConference_organFunctions_constitutionHash_value"> </div>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'FoundationConference_contract_attribute_organFunctions_lastMemberChanged"> lastMemberChanged:'
+		'		      		<div class="Struct_attribute_value" id="'+this.prefix+'FoundationConference_organFunctions_lastMemberChanged_value"> </div>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'FoundationConference_contract_attribute_organFunctions_lastConstitutionHashChanged"> lastConstitutionHashChanged:'
+		'		      		<div class="Struct_attribute_value" id="'+this.prefix+'FoundationConference_organFunctions_lastConstitutionHashChanged_value"> </div>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'FoundationConference_contract_attribute_organFunctions_publisher"> publisher:'
+		'		      		<div class="Struct_attribute_value" id="'+this.prefix+'FoundationConference_organFunctions_publisher_value"> </div>'
+		'		    	</div>'
+		'		  </div>'
;
	}

	/**
	* Create a div with '@inner' as inner elements.
    * @inner - the inner text
	*/
	this.createSeletonGui=function(inner) {
		return 	'<!-- gui for FoundationConference_contract -->'
		+	'	<div class="contract" id="'+this.prefix+'FoundationConference_contract">'
		+ inner
		+'</div>';
	}


//eventguis

}//end guifactory

/**
* Class FoundationConferenceController. 
* The controller wrap's the 'instance' contract and binds all actions to document elements.
* Parameters are taken from elements with self.prefix+'functionName_parameterName'
*
* self.prefix+'FoundationConferenceController.setAddress' - 
* self.prefix+'FoundationConference_updateAttributes'     - 
* self.prefix+'Conference_accreditationMember_address -
* self.prefix+'Organ_changeMember_uint_address -
* self.prefix+'Manageable_addManager_address -
* self.prefix+'Organ_createFunction_string_string -
* self.prefix+'Manageable_removeManager_address -
* self.prefix+'Organ_initalizeOrgan -
* self.prefix+'Manageable_isManager_address -
* self.prefix+'Organ_publishFunctionMessage_uint_string_string_string -
* self.prefix+'Organ_createBallot_string_bytes32 -
* self.prefix+'Organ_getFunctionBlogAddress_uint -
* self.prefix+'Organ_getLastBallot -
* self.prefix+'Organ_getOrganBlog -
*/
function FoundationConferenceController() {

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
		var btn = document.getElementById(self.prefix+'FoundationConferenceController.setAddress');
		if(btn!=undefined)		
			btn.onclick = this.setAddress;
		else console.log('addres widget not bound');

		var btn = document.getElementById(self.prefix+'FoundationConference_updateAttributes');
		if(btn!=undefined)
			btn.onclick = this._updateAttributes;
		else console.log('_updateAttributes widget not bound');
		var btn = document.getElementById(self.prefix+'FoundationConferenceController.Conference_accreditationMember_address');
		if(btn!=undefined)
			btn.onclick = this.Conference_accreditationMember_address;
		else console.log('Conference_accreditationMember_address widget not bound');
		var btn = document.getElementById(self.prefix+'FoundationConferenceController.Organ_changeMember_uint_address');
		if(btn!=undefined)
			btn.onclick = this.Organ_changeMember_uint_address;
		else console.log('Organ_changeMember_uint_address widget not bound');
		var btn = document.getElementById(self.prefix+'FoundationConferenceController.Manageable_addManager_address');
		if(btn!=undefined)
			btn.onclick = this.Manageable_addManager_address;
		else console.log('Manageable_addManager_address widget not bound');
		var btn = document.getElementById(self.prefix+'FoundationConferenceController.Organ_createFunction_string_string');
		if(btn!=undefined)
			btn.onclick = this.Organ_createFunction_string_string;
		else console.log('Organ_createFunction_string_string widget not bound');
		var btn = document.getElementById(self.prefix+'FoundationConferenceController.Manageable_removeManager_address');
		if(btn!=undefined)
			btn.onclick = this.Manageable_removeManager_address;
		else console.log('Manageable_removeManager_address widget not bound');
		var btn = document.getElementById(self.prefix+'FoundationConferenceController.Organ_initalizeOrgan');
		if(btn!=undefined)
			btn.onclick = this.Organ_initalizeOrgan;
		else console.log('Organ_initalizeOrgan widget not bound');
		var btn = document.getElementById(self.prefix+'FoundationConferenceController.Manageable_isManager_address');
		if(btn!=undefined)
			btn.onclick = this.Manageable_isManager_address;
		else console.log('Manageable_isManager_address widget not bound');
		var btn = document.getElementById(self.prefix+'FoundationConferenceController.Organ_publishFunctionMessage_uint_string_string_string');
		if(btn!=undefined)
			btn.onclick = this.Organ_publishFunctionMessage_uint_string_string_string;
		else console.log('Organ_publishFunctionMessage_uint_string_string_string widget not bound');
		var btn = document.getElementById(self.prefix+'FoundationConferenceController.Organ_createBallot_string_bytes32');
		if(btn!=undefined)
			btn.onclick = this.Organ_createBallot_string_bytes32;
		else console.log('Organ_createBallot_string_bytes32 widget not bound');
		var btn = document.getElementById(self.prefix+'FoundationConferenceController.Organ_getFunctionBlogAddress_uint');
		if(btn!=undefined)
			btn.onclick = this.Organ_getFunctionBlogAddress_uint;
		else console.log('Organ_getFunctionBlogAddress_uint widget not bound');
		var btn = document.getElementById(self.prefix+'FoundationConferenceController.Organ_getLastBallot');
		if(btn!=undefined)
			btn.onclick = this.Organ_getLastBallot;
		else console.log('Organ_getLastBallot widget not bound');
		var btn = document.getElementById(self.prefix+'FoundationConferenceController.Organ_getOrganBlog');
		if(btn!=undefined)
			btn.onclick = this.Organ_getOrganBlog;
		else console.log('Organ_getOrganBlog widget not bound');
	}

	/**
	* Set the address.
	*/
	this.setAddress=function() {
		var _address = document.getElementById(self.prefix+'FoundationConference_address');
		if(_address==null)return;

		self.FoundationConference_instance = FoundationConferenceContract.at(_address.value);
		self.contractAddress = _address.value;
		self._updateAttributes();
	}
	
	/**
	* Update attributes.
	*
	* prefix+'FoundationConference_memberRegistry_value' - 
	* prefix+'FoundationConference_accreditatedMembers_value' - 
	* prefix+'FoundationConference_mangerCount_value' - 
	* prefix+'FoundationConference_organName_value' - 
	* prefix+'FoundationConference_date_value' - 
	* prefix+'FoundationConference_lastFunctionId_value' - 
	* prefix+'FoundationConference_blogRegistry_value' - 
	* prefix+'FoundationConference_isActive_value' - 
	* prefix+'FoundationConference_ballotCount_value' - 
	**/
	this._updateAttributes=function () {
		if(this.instance===null) return;
		// update attributes
		var memberRegistry_res = self.instance.memberRegistry();
		var e = document.getElementById(self.prefix+'FoundationConference_memberRegistry_value');
		if(memberRegistry_res!=null && e!=null)
			e.innerText = memberRegistry_res;
		else console.log(self.prefix+'FoundationConference_memberRegistry_value not found');
		var accreditatedMembers_res = self.instance.accreditatedMembers();
		var e = document.getElementById(self.prefix+'FoundationConference_accreditatedMembers_value');
		if(accreditatedMembers_res!=null && e!=null)
			e.innerText = accreditatedMembers_res;
		else console.log(self.prefix+'FoundationConference_accreditatedMembers_value not found');
		var mangerCount_res = self.instance.mangerCount();
		var e = document.getElementById(self.prefix+'FoundationConference_mangerCount_value');
		if(mangerCount_res!=null && e!=null)
			e.innerText = mangerCount_res;
		else console.log(self.prefix+'FoundationConference_mangerCount_value not found');
		var organName_res = self.instance.organName();
		var e = document.getElementById(self.prefix+'FoundationConference_organName_value');
		if(organName_res!=null && e!=null)
			e.innerText = organName_res;
		else console.log(self.prefix+'FoundationConference_organName_value not found');
		var date_res = self.instance.date();
		var e = document.getElementById(self.prefix+'FoundationConference_date_value');
		if(date_res!=null && e!=null)
			e.innerText = date_res;
		else console.log(self.prefix+'FoundationConference_date_value not found');
		var lastFunctionId_res = self.instance.lastFunctionId();
		var e = document.getElementById(self.prefix+'FoundationConference_lastFunctionId_value');
		if(lastFunctionId_res!=null && e!=null)
			e.innerText = lastFunctionId_res;
		else console.log(self.prefix+'FoundationConference_lastFunctionId_value not found');
		var blogRegistry_res = self.instance.blogRegistry();
		var e = document.getElementById(self.prefix+'FoundationConference_blogRegistry_value');
		if(blogRegistry_res!=null && e!=null)
			e.innerText = blogRegistry_res;
		else console.log(self.prefix+'FoundationConference_blogRegistry_value not found');
		var isActive_res = self.instance.isActive();
		var e = document.getElementById(self.prefix+'FoundationConference_isActive_value');
		if(isActive_res!=null && e!=null)
			e.innerText = isActive_res;
		else console.log(self.prefix+'FoundationConference_isActive_value not found');
		var ballotCount_res = self.instance.ballotCount();
		var e = document.getElementById(self.prefix+'FoundationConference_ballotCount_value');
		if(ballotCount_res!=null && e!=null)
			e.innerText = ballotCount_res;
		else console.log(self.prefix+'FoundationConference_ballotCount_value not found');
		var e = document.getElementById(self.prefix+'FoundationConference_contract_attribute_managers_input');
		if(e!=null){
			var _key = e.value;
			if(_key=='') return;
			var managers_res = self.instance.managers(_key);
			if(managers_res!=null){
				var e1 = document.getElementById(self.prefix+'FoundationConference_managers_value');
				if(e1!=null)	
					e1.innerText = managers_res;
			}}
		var e = document.getElementById(self.prefix+'FoundationConference_contract_attribute_organFunctions_input');
		if(e!=null){
			var _key = e.value;
			if(_key=='') return;
			var organFunctions_res = self.instance.organFunctions(_key);
			if(organFunctions_res!=null){
			var e1 = document.getElementById(self.prefix+'FoundationConference_organFunctions_currentMember_value');
			if(e1!=null)	
				e1.innerText = organFunctions_res[0];
			var e1 = document.getElementById(self.prefix+'FoundationConference_organFunctions_functionName_value');
			if(e1!=null)	
				e1.innerText = organFunctions_res[1];
			var e1 = document.getElementById(self.prefix+'FoundationConference_organFunctions_id_value');
			if(e1!=null)	
				e1.innerText = organFunctions_res[2];
			var e1 = document.getElementById(self.prefix+'FoundationConference_organFunctions_constitutionHash_value');
			if(e1!=null)	
				e1.innerText = organFunctions_res[3];
			var e1 = document.getElementById(self.prefix+'FoundationConference_organFunctions_lastMemberChanged_value');
			if(e1!=null)	
				e1.innerText = organFunctions_res[4];
			var e1 = document.getElementById(self.prefix+'FoundationConference_organFunctions_lastConstitutionHashChanged_value');
			if(e1!=null)	
				e1.innerText = organFunctions_res[5];
			var e1 = document.getElementById(self.prefix+'FoundationConference_organFunctions_publisher_value');
			if(e1!=null)	
				e1.innerText = organFunctions_res[6];
			}}
	}

	//call functions
	
	/**
	* Calls the contract function FoundationConference_accreditationMember.
	*
	* this.prefix+'Conference_accreditationMember_address__address' -
	**/
	this.Conference_accreditationMember_address=function() {
		var e = document.getElementById(self.prefix+'Conference_accreditationMember_address__address');
		if(e!=null)
			var param__address = e.value;
		else console.log(self.prefix+'Conference_accreditationMember_address__address not found');
		var res = self.instance.accreditationMember(param__address);
	}
	
	/**
	* Calls the contract function FoundationConference_canAccess.
	*
	**/
	this.Manageable_canAccess=function() {
		var res = self.instance.canAccess();
		var e = document.getElementById(self.prefix+'Manageable_canAccess_res');
		if(res!=null && e!=null)
			e.innerText = res;
	}
	
	/**
	* Calls the contract function FoundationConference_changeMember.
	*
	* this.prefix+'Organ_changeMember_uint_address__id' -
	* this.prefix+'Organ_changeMember_uint_address__address' -
	**/
	this.Organ_changeMember_uint_address=function() {
		var e = document.getElementById(self.prefix+'Organ_changeMember_uint_address__id');
		if(e!=null)
			var param__id = e.value;
		else console.log(self.prefix+'Organ_changeMember_uint_address__id not found');
		var e = document.getElementById(self.prefix+'Organ_changeMember_uint_address__address');
		if(e!=null)
			var param__address = e.value;
		else console.log(self.prefix+'Organ_changeMember_uint_address__address not found');
		var res = self.instance.changeMember(param__id, param__address);
	}
	
	/**
	* Calls the contract function FoundationConference_isMember.
	*
	* this.prefix+'MemberAware_isMember_address__address' -
	**/
	this.MemberAware_isMember_address=function() {
		var e = document.getElementById(self.prefix+'MemberAware_isMember_address__address');
		if(e!=null)
			var param__address = e.value;
		else console.log(self.prefix+'MemberAware_isMember_address__address not found');
		var res = self.instance.isMember(param__address);
		var e = document.getElementById(self.prefix+'MemberAware_isMember_address_res');
		if(res!=null && e!=null)
			e.innerText = res;
	}
	
	/**
	* Calls the contract function FoundationConference_addManager.
	*
	* this.prefix+'Manageable_addManager_address__newManagerAddress' -
	**/
	this.Manageable_addManager_address=function() {
		var e = document.getElementById(self.prefix+'Manageable_addManager_address__newManagerAddress');
		if(e!=null)
			var param__newManagerAddress = e.value;
		else console.log(self.prefix+'Manageable_addManager_address__newManagerAddress not found');
		var res = self.instance.addManager(param__newManagerAddress);
	}
	
	/**
	* Calls the contract function FoundationConference_createFunction.
	*
	* this.prefix+'Organ_createFunction_string_string__functionName' -
	* this.prefix+'Organ_createFunction_string_string__constittiutionHash' -
	**/
	this.Organ_createFunction_string_string=function() {
		var e = document.getElementById(self.prefix+'Organ_createFunction_string_string__functionName');
		if(e!=null)
			var param__functionName = e.value;
		else console.log(self.prefix+'Organ_createFunction_string_string__functionName not found');
		var e = document.getElementById(self.prefix+'Organ_createFunction_string_string__constittiutionHash');
		if(e!=null)
			var param__constittiutionHash = e.value;
		else console.log(self.prefix+'Organ_createFunction_string_string__constittiutionHash not found');
		var res = self.instance.createFunction(param__functionName, param__constittiutionHash);
	}
	
	/**
	* Calls the contract function FoundationConference_removeManager.
	*
	* this.prefix+'Manageable_removeManager_address__managerAddress' -
	**/
	this.Manageable_removeManager_address=function() {
		var e = document.getElementById(self.prefix+'Manageable_removeManager_address__managerAddress');
		if(e!=null)
			var param__managerAddress = e.value;
		else console.log(self.prefix+'Manageable_removeManager_address__managerAddress not found');
		var res = self.instance.removeManager(param__managerAddress);
	}
	
	/**
	* Calls the contract function FoundationConference_initalizeOrgan.
	*
	**/
	this.Organ_initalizeOrgan=function() {
		var res = self.instance.initalizeOrgan();
	}
	
	/**
	* Calls the contract function FoundationConference_isManager.
	*
	* this.prefix+'Manageable_isManager_address__managerAddress' -
	**/
	this.Manageable_isManager_address=function() {
		var e = document.getElementById(self.prefix+'Manageable_isManager_address__managerAddress');
		if(e!=null)
			var param__managerAddress = e.value;
		else console.log(self.prefix+'Manageable_isManager_address__managerAddress not found');
		var res = self.instance.isManager(param__managerAddress);
		var e = document.getElementById(self.prefix+'Manageable_isManager_address_res');
		if(res!=null && e!=null)
			e.innerText = res;
	}
	
	/**
	* Calls the contract function FoundationConference_publishFunctionMessage.
	*
	* this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_id' -
	* this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_message' -
	* this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_hash' -
	* this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_er' -
	**/
	this.Organ_publishFunctionMessage_uint_string_string_string=function() {
		var e = document.getElementById(self.prefix+'Organ_publishFunctionMessage_uint_string_string_string_id');
		if(e!=null)
			var param_id = e.value;
		else console.log(self.prefix+'Organ_publishFunctionMessage_uint_string_string_string_id not found');
		var e = document.getElementById(self.prefix+'Organ_publishFunctionMessage_uint_string_string_string_message');
		if(e!=null)
			var param_message = e.value;
		else console.log(self.prefix+'Organ_publishFunctionMessage_uint_string_string_string_message not found');
		var e = document.getElementById(self.prefix+'Organ_publishFunctionMessage_uint_string_string_string_hash');
		if(e!=null)
			var param_hash = e.value;
		else console.log(self.prefix+'Organ_publishFunctionMessage_uint_string_string_string_hash not found');
		var e = document.getElementById(self.prefix+'Organ_publishFunctionMessage_uint_string_string_string_er');
		if(e!=null)
			var param_er = e.value;
		else console.log(self.prefix+'Organ_publishFunctionMessage_uint_string_string_string_er not found');
		var res = self.instance.publishFunctionMessage(param_id, param_message, param_hash, param_er);
	}
	
	/**
	* Calls the contract function FoundationConference_createBallot.
	*
	* this.prefix+'Organ_createBallot_string_bytes32_name' -
	* this.prefix+'Organ_createBallot_string_bytes32_proposalNames' -
	**/
	this.Organ_createBallot_string_bytes32=function() {
		var e = document.getElementById(self.prefix+'Organ_createBallot_string_bytes32_name');
		if(e!=null)
			var param_name = e.value;
		else console.log(self.prefix+'Organ_createBallot_string_bytes32_name not found');
		var e = document.getElementById(self.prefix+'Organ_createBallot_string_bytes32_proposalNames');
		if(e!=null)
			var param_proposalNames = e.value;
		else console.log(self.prefix+'Organ_createBallot_string_bytes32_proposalNames not found');
		var res = self.instance.createBallot(param_name, param_proposalNames);
		var e = document.getElementById(self.prefix+'Organ_createBallot_string_bytes32_res');
		if(res!=null && e!=null)
			e.innerText = res;
	}
	
	/**
	* Calls the contract function FoundationConference_getFunctionBlogAddress.
	*
	* this.prefix+'Organ_getFunctionBlogAddress_uint_id' -
	**/
	this.Organ_getFunctionBlogAddress_uint=function() {
		var e = document.getElementById(self.prefix+'Organ_getFunctionBlogAddress_uint_id');
		if(e!=null)
			var param_id = e.value;
		else console.log(self.prefix+'Organ_getFunctionBlogAddress_uint_id not found');
		var res = self.instance.getFunctionBlogAddress(param_id);
		var e = document.getElementById(self.prefix+'Organ_getFunctionBlogAddress_uint_res');
		if(res!=null && e!=null)
			e.innerText = res;
	}
	
	/**
	* Calls the contract function FoundationConference_getLastBallot.
	*
	**/
	this.Organ_getLastBallot=function() {
		var res = self.instance.getLastBallot();
		var e = document.getElementById(self.prefix+'Organ_getLastBallot_res');
		if(res!=null && e!=null)
			e.innerText = res;
	}
	
	/**
	* Calls the contract function FoundationConference_getOrganBlog.
	*
	**/
	this.Organ_getOrganBlog=function() {
		var res = self.instance.getOrganBlog();
		var e = document.getElementById(self.prefix+'Organ_getOrganBlog_res');
		if(res!=null && e!=null)
			e.innerText = res;
	}
	
//delegated calls

}// end controller	

/**
* class as GlueCode FoundationConferenceManager,
* uses prefix + 'GuiContainer' as target element.
* It combines a FoundationConferenceController as 'c' and a FoundationConferenceGuiFactory as 'g'.
**/
function FoundationConferenceManager(prefix,contract,containerId) {
	this.prefix = prefix;
	var self = this;
	this.c = new FoundationConferenceController();
	this.c.prefix=prefix;
	this.c.instance=contract;
	this.c.contractAddress = contract.address;
	this.g = new FoundationConferenceGuiFactory();
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
		elemDiv.id= this.prefix +'FoundationConference_gui';
		e.appendChild(elemDiv);
		if(this.guiFunction==null)
			elemDiv.innerHTML = this.createGui(this.g);
		else elemDiv.innerHTML = this.guiFunction(this.g);
		
		var e = document.getElementById(this.prefix+'FoundationConference_address');
		if(e!=null)
			e.value = this.c.contractAddress;
		else 
			console.log(this.prefix+'FoundationConference_address not found');
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
//Start of user code FoundationConference_create_gui_js
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
	* Getter for the contract 'FoundationConference' instance.
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
* Manages a list of FoundationConferenceManager uses the guid id to place the gui which is also the eventlogPrefix
*/
function FoundationConferenceGuiMananger(guiId){
	this.prefix = guiId;
	this.managers=new Array();	//[];		
	this.guiFunction = null;
	
	/**
	* Add a contract to this manager.
	* @namespace contract
	*/
	this.addManager = function(contract) {
		var m = new FoundationConferenceManager(contract.address,contract,this.prefix);
		m.eventlogPrefix = this.prefix;
		m.watchEvents();
		if(this.guiFunction!=null)
			m.guiFunction = this.guiFunction;
		this.managers.push(m);
		//manager.addGui();
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
			elemDiv.id= manager.prefix + 'GuiContainer';//'FoundationConference_gui';
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
function FoundationConferenceDeployment(guiId){

//Start of user code FoundationConference_deployment_js
//TODO: implement
//End of user code
}
//Start of user code custom_FoundationConference_js
//TODO: implement
//End of user code

/**
* A class to manage a single page dapp.
* The PartyPage object uses the managers to display the gui.
**/
function PartyPage(prefix) {
	this.prefix=prefix;
	//Start of user code page_party_attributes
	this.party = new KUEKeNPartyGuiMananger(prefix);
	this.organ = new OrganGuiMananger(prefix);
	this.pm;
//	this.blog = new ShortBlogGuiMananger(prefix);
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
	//Start of user code page_Party_create_default_gui_functions
	this.party.displaySimpleGui();
	this.party.updateGui();
	this.organ.displaySimpleGui();
	this.organ.updateGui();
	
//	this.blog.createDefaultGui();
	//End of user code
}
	//Start of user code page_Party_functions
this.bootstrap=function(kp) {
	this.party.addManager(kp);
	this.pm = new KUEKeNPartyModel(kp);
	var m = this.pm.getOrganCount();
	for (i = 0; i < m; i++) {
		console.log("organ at "+kp.organs(i));
		var o = OrganContract.at(kp.organs(i));
		this.organ.addManager(o);
	} }


	//End of user code

}// end of PartyPage
