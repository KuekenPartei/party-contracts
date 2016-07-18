
var OrganContract = web3.eth.contract([
{"constant":true,"inputs":[],"name":"organName","outputs":[{"name":"","type":"string"}],"type":"function"},
{"constant":true,"inputs":[],"name":"lastFunctionId","outputs":[{"name":"","type":"uint"}],"type":"function"},
{"constant":true,"inputs":[],"name":"blogRegistry","outputs":[{"name":"","type":"address"}],"type":"function"},
{"constant":true,"inputs":[],"name":"isActive","outputs":[{"name":"","type":"bool"}],"type":"function"},
{"constant":true,"inputs":[],"name":"organBlog","outputs":[{"name":"","type":"address"}],"type":"function"},
{"constant":true,"inputs":[],"name":"ballotCount","outputs":[{"name":"","type":"uint"}],"type":"function"},
{"constant": true,"inputs": [{"name": "","type": "uint"}],"name": "organFunctions","outputs": [
{ "name": "currentMember", "type": "address"}
,{ "name": "functionName", "type": "string"}
,{ "name": "id", "type": "uint"}
,{ "name": "constitutionHash", "type": "string"}
,{ "name": "lastMemberChanged", "type": "uint"}
,{ "name": "lastConstitutionHashChanged", "type": "uint"}
,{ "name": "publisher", "type": "address"}
],"type": "function"	},
//

{"constant": true,"inputs": [{"name": "","type": "address"}],"name": "managers","outputs": [
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
] );   

var PartyContract = web3.eth.contract([
{"constant":true,"inputs":[],"name":"memberRegistry","outputs":[{"name":"","type":"address"}],"type":"function"},
{"constant":true,"inputs":[],"name":"constitutionHash","outputs":[{"name":"","type":"string"}],"type":"function"},
{"constant":true,"inputs":[],"name":"organCount","outputs":[{"name":"","type":"uint"}],"type":"function"},
{"constant":true,"inputs":[],"name":"blogregistry","outputs":[{"name":"","type":"address"}],"type":"function"},
{"constant": true,"inputs": [{"name": "","type": "address"}],"name": "managers","outputs": [
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
] );   

var KUEKeNPartyContract = web3.eth.contract([
{"constant": true,"inputs": [{"name": "","type": "address"}],"name": "managers","outputs": [
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
 
] );   

var ConferenceContract = web3.eth.contract([
{"constant":true,"inputs":[],"name":"accreditation","outputs":[{"name":"","type":"address"}],"type":"function"},
{"constant":true,"inputs":[],"name":"accreditatedMembers","outputs":[{"name":"","type":"uint"}],"type":"function"},
{"constant":true,"inputs":[],"name":"date","outputs":[{"name":"","type":"uint"}],"type":"function"},
{"constant": true,"inputs": [{"name": "","type": "uint"}],"name": "organFunctions","outputs": [
{ "name": "currentMember", "type": "address"}
,{ "name": "functionName", "type": "string"}
,{ "name": "id", "type": "uint"}
,{ "name": "constitutionHash", "type": "string"}
,{ "name": "lastMemberChanged", "type": "uint"}
,{ "name": "lastConstitutionHashChanged", "type": "uint"}
,{ "name": "publisher", "type": "address"}
],"type": "function"	},
//

{"constant": true,"inputs": [{"name": "","type": "address"}],"name": "managers","outputs": [
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
] );   

var FoundationConferenceContract = web3.eth.contract([
{"constant": true,"inputs": [{"name": "","type": "uint"}],"name": "organFunctions","outputs": [
{ "name": "currentMember", "type": "address"}
,{ "name": "functionName", "type": "string"}
,{ "name": "id", "type": "uint"}
,{ "name": "constitutionHash", "type": "string"}
,{ "name": "lastMemberChanged", "type": "uint"}
,{ "name": "lastConstitutionHashChanged", "type": "uint"}
,{ "name": "publisher", "type": "address"}
],"type": "function"	},
//

{"constant": true,"inputs": [{"name": "","type": "address"}],"name": "managers","outputs": [
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
 
] );   



//gui factory Organ
function OrganGuiFactory() {
	this.prefix='';
	
// default Gui
this.placeDefaultGui=function() {
//	console.log(this.prefix+' place gui');
	document.getElementById(this.prefix+'Organ_gui').innerHTML = this.createDefaultGui();
}
// default Gui
this.createDefaultGui=function() {
	return 	'<!-- gui for Organ_contract -->'
+	'	<div class="contract" id="'+this.prefix+'Organ_contract">'
+	'	Organ:'
+	'	  <input type="text" id="'+this.prefix+'Organ_address"> <button id="'+this.prefix+'OrganController.setAddress" onclick="'+this.prefix+'OrganController.setAddress()">change Organ Address</button>'
+	'	  <div class="contract_attributes" id="'+this.prefix+'Organ_contract_attributes"> attributes:'
+	'	    <div class="contract_attribute" id="'+this.prefix+'Organ_contract_attribute_memberRegistry"> memberRegistry:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'Organ_memberRegistry_value"> </div>'
+	'	    </div>'
+	'	    <div class="contract_attribute" id="'+this.prefix+'Organ_contract_attribute_mangerCount"> mangerCount:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'Organ_mangerCount_value"> </div>'
+	'	    </div>'
+	'	    <div class="contract_attribute" id="'+this.prefix+'Organ_contract_attribute_organName"> organName:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'Organ_organName_value"> </div>'
+	'	    </div>'
+	'	    <div class="contract_attribute" id="'+this.prefix+'Organ_contract_attribute_lastFunctionId"> lastFunctionId:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'Organ_lastFunctionId_value"> </div>'
+	'	    </div>'
+	'	    <div class="contract_attribute" id="'+this.prefix+'Organ_contract_attribute_blogRegistry"> blogRegistry:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'Organ_blogRegistry_value"> </div>'
+	'	    </div>'
+	'	    <div class="contract_attribute" id="'+this.prefix+'Organ_contract_attribute_isActive"> isActive:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'Organ_isActive_value"> </div>'
+	'	    </div>'
+	'	    <div class="contract_attribute" id="'+this.prefix+'Organ_contract_attribute_ballotCount"> ballotCount:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'Organ_ballotCount_value"> </div>'
+	'	    </div>'
+	'	'
+	'	<div class="Value_Mapping" id="'+this.prefix+'Organ_contract_attribute_managers">mapping  managers:'
+	'			<input type="text" id="'+this.prefix+'Organ_contract_attribute_managers_input">(address)'
+	'	    	<div class="Mapping_value" id="'+this.prefix+'Organ_contract_attribute_address"> bool:'
+	'	      		<div class="contract_attribute_value" id="'+this.prefix+'Organ_managers_value"> </div>'
+	'	    	</div>'
+	'	  </div>'
+	'	<!--struct -->'
+	'	<div class="Struct_Mapping" id="'+this.prefix+'Struc_Organ_contract_attribute_organFunctions">struc mapping  organFunctions:'
+	'			<input type="number" id="'+this.prefix+'Organ_contract_attribute_organFunctions_input">(uint)'
+	'	    	<div class="Struct_attribute" id="'+this.prefix+'Organ_contract_attribute_organFunctions_currentMember"> currentMember:'
+	'	      		<div class="Struct_attribute_value" id="'+this.prefix+'Organ_organFunctions_currentMember_value"> </div>'
+	'	    	</div>'
+	'	    	<div class="Struct_attribute" id="'+this.prefix+'Organ_contract_attribute_organFunctions_functionName"> functionName:'
+	'	      		<div class="Struct_attribute_value" id="'+this.prefix+'Organ_organFunctions_functionName_value"> </div>'
+	'	    	</div>'
+	'	    	<div class="Struct_attribute" id="'+this.prefix+'Organ_contract_attribute_organFunctions_id"> id:'
+	'	      		<div class="Struct_attribute_value" id="'+this.prefix+'Organ_organFunctions_id_value"> </div>'
+	'	    	</div>'
+	'	    	<div class="Struct_attribute" id="'+this.prefix+'Organ_contract_attribute_organFunctions_constitutionHash"> constitutionHash:'
+	'	      		<div class="Struct_attribute_value" id="'+this.prefix+'Organ_organFunctions_constitutionHash_value"> </div>'
+	'	    	</div>'
+	'	    	<div class="Struct_attribute" id="'+this.prefix+'Organ_contract_attribute_organFunctions_lastMemberChanged"> lastMemberChanged:'
+	'	      		<div class="Struct_attribute_value" id="'+this.prefix+'Organ_organFunctions_lastMemberChanged_value"> </div>'
+	'	    	</div>'
+	'	    	<div class="Struct_attribute" id="'+this.prefix+'Organ_contract_attribute_organFunctions_lastConstitutionHashChanged"> lastConstitutionHashChanged:'
+	'	      		<div class="Struct_attribute_value" id="'+this.prefix+'Organ_organFunctions_lastConstitutionHashChanged_value"> </div>'
+	'	    	</div>'
+	'	    	<div class="Struct_attribute" id="'+this.prefix+'Organ_contract_attribute_organFunctions_publisher"> publisher:'
+	'	      		<div class="Struct_attribute_value" id="'+this.prefix+'Organ_organFunctions_publisher_value"> </div>'
+	'	    	</div>'
+	'	  </div>'
+	'	    <button id="'+this.prefix+'Organ_updateAttributes" onclick="'+this.prefix+'OrganController._updateAttributes()">update Organ attributes</button>'
+	'	  </div>'
+	'	  <div class="function_execution" id="'+this.prefix+'Organ_contract_function_Organ_changeMember_uint_address">'
+	'	Organ_changeMember:'
+	'		  <div class="function_parameter">_id<input type="number" id="'+this.prefix+'Organ_changeMember_uint_address__id"></div>'
+	'		  <div class="function_parameter">_address<input type="text" id="'+this.prefix+'Organ_changeMember_uint_address__address"></div>'
+	'		<button id="'+this.prefix+'OrganController.Organ_changeMember_uint_address" onclick="'+this.prefix+'OrganController.Organ_changeMember_uint_address()">execute Organ_changeMember</button>'
+	'		<div class="function_result" id="'+this.prefix+'Organ_changeMember_uint_address_res"></div>'
+	'	  </div>'
+	'	  <div class="function_execution" id="'+this.prefix+'Organ_contract_function_Manageable_addManager_address">'
+	'	Organ_addManager:'
+	'		  <div class="function_parameter">_newManagerAddress<input type="text" id="'+this.prefix+'Manageable_addManager_address__newManagerAddress"></div>'
+	'		<button id="'+this.prefix+'OrganController.Manageable_addManager_address" onclick="'+this.prefix+'OrganController.Manageable_addManager_address()">execute Organ_addManager</button>'
+	'		<div class="function_result" id="'+this.prefix+'Manageable_addManager_address_res"></div>'
+	'	  </div>'
+	'	  <div class="function_execution" id="'+this.prefix+'Organ_contract_function_Organ_createFunction_string_string">'
+	'	Organ_createFunction:'
+	'		  <div class="function_parameter">_functionName<input type="text" id="'+this.prefix+'Organ_createFunction_string_string__functionName"></div>'
+	'		  <div class="function_parameter">_constittiutionHash<input type="text" id="'+this.prefix+'Organ_createFunction_string_string__constittiutionHash"></div>'
+	'		<button id="'+this.prefix+'OrganController.Organ_createFunction_string_string" onclick="'+this.prefix+'OrganController.Organ_createFunction_string_string()">execute Organ_createFunction</button>'
+	'		<div class="function_result" id="'+this.prefix+'Organ_createFunction_string_string_res"></div>'
+	'	  </div>'
+	'	  <div class="function_execution" id="'+this.prefix+'Organ_contract_function_Manageable_removeManager_address">'
+	'	Organ_removeManager:'
+	'		  <div class="function_parameter">_managerAddress<input type="text" id="'+this.prefix+'Manageable_removeManager_address__managerAddress"></div>'
+	'		<button id="'+this.prefix+'OrganController.Manageable_removeManager_address" onclick="'+this.prefix+'OrganController.Manageable_removeManager_address()">execute Organ_removeManager</button>'
+	'		<div class="function_result" id="'+this.prefix+'Manageable_removeManager_address_res"></div>'
+	'	  </div>'
+	'	  <div class="function_execution" id="'+this.prefix+'Organ_contract_function_Organ_initalizeOrgan">'
+	'	Organ_initalizeOrgan:'
+	'		<button id="'+this.prefix+'OrganController.Organ_initalizeOrgan" onclick="'+this.prefix+'OrganController.Organ_initalizeOrgan()">execute Organ_initalizeOrgan</button>'
+	'		<div class="function_result" id="'+this.prefix+'Organ_initalizeOrgan_res"></div>'
+	'	  </div>'
+	'	  <div class="function_execution" id="'+this.prefix+'Organ_contract_function_Manageable_isManager_address">'
+	'	Organ_isManager:'
+	'		  <div class="function_parameter">_managerAddress<input type="text" id="'+this.prefix+'Manageable_isManager_address__managerAddress"></div>'
+	'		<button id="'+this.prefix+'OrganController.Manageable_isManager_address" onclick="'+this.prefix+'OrganController.Manageable_isManager_address()">execute Organ_isManager</button>'
+	'		<div class="function_result" id="'+this.prefix+'Manageable_isManager_address_res"></div>'
+	'	  </div>'
+	'	  <div class="function_execution" id="'+this.prefix+'Organ_contract_function_Organ_publishFunctionMessage_uint_string_string_string">'
+	'	Organ_publishFunctionMessage:'
+	'		  <div class="function_parameter">id<input type="number" id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_id"></div>'
+	'		  <div class="function_parameter">message<input type="text" id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_message"></div>'
+	'		  <div class="function_parameter">hash<input type="text" id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_hash"></div>'
+	'		  <div class="function_parameter">er<input type="text" id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_er"></div>'
+	'		<button id="'+this.prefix+'OrganController.Organ_publishFunctionMessage_uint_string_string_string" onclick="'+this.prefix+'OrganController.Organ_publishFunctionMessage_uint_string_string_string()">execute Organ_publishFunctionMessage</button>'
+	'		<div class="function_result" id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_res"></div>'
+	'	  </div>'
+	'	  <div class="function_execution" id="'+this.prefix+'Organ_contract_function_Organ_createBallot_string_bytes32">'
+	'	Organ_createBallot:'
+	'		  <div class="function_parameter">name<input type="text" id="'+this.prefix+'Organ_createBallot_string_bytes32_name"></div>'
+	'		  <div class="function_parameter">proposalNames<input type="text" id="'+this.prefix+'Organ_createBallot_string_bytes32_proposalNames"></div>'
+	'		<button id="'+this.prefix+'OrganController.Organ_createBallot_string_bytes32" onclick="'+this.prefix+'OrganController.Organ_createBallot_string_bytes32()">execute Organ_createBallot</button>'
+	'		<div class="function_result" id="'+this.prefix+'Organ_createBallot_string_bytes32_res"></div>'
+	'	  </div>'
+	'	  <div class="function_execution" id="'+this.prefix+'Organ_contract_function_Organ_getFunctionBlogAddress_uint">'
+	'	Organ_getFunctionBlogAddress:'
+	'		  <div class="function_parameter">id<input type="number" id="'+this.prefix+'Organ_getFunctionBlogAddress_uint_id"></div>'
+	'		<button id="'+this.prefix+'OrganController.Organ_getFunctionBlogAddress_uint" onclick="'+this.prefix+'OrganController.Organ_getFunctionBlogAddress_uint()">execute Organ_getFunctionBlogAddress</button>'
+	'		<div class="function_result" id="'+this.prefix+'Organ_getFunctionBlogAddress_uint_res"></div>'
+	'	  </div>'
+	'	  <div class="function_execution" id="'+this.prefix+'Organ_contract_function_Organ_getLastBallot">'
+	'	Organ_getLastBallot:'
+	'		<button id="'+this.prefix+'OrganController.Organ_getLastBallot" onclick="'+this.prefix+'OrganController.Organ_getLastBallot()">execute Organ_getLastBallot</button>'
+	'		<div class="function_result" id="'+this.prefix+'Organ_getLastBallot_res"></div>'
+	'	  </div>'
+	'	  <div class="function_execution" id="'+this.prefix+'Organ_contract_function_Organ_getOrganBlog">'
+	'	Organ_getOrganBlog:'
+	'		<button id="'+this.prefix+'OrganController.Organ_getOrganBlog" onclick="'+this.prefix+'OrganController.Organ_getOrganBlog()">execute Organ_getOrganBlog</button>'
+	'		<div class="function_result" id="'+this.prefix+'Organ_getOrganBlog_res"></div>'
+	'	  </div>'
+	'	'
+	'	</div>'
;
}

//default attributes
this.createAttributesGui=function() {
	return 	'    <div class="contract_attribute" id="'+this.prefix+'Organ_contract_attribute_memberRegistry"> memberRegistry:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'Organ_memberRegistry_value"> </div>'
+	'	    </div>'
+	'	    <div class="contract_attribute" id="'+this.prefix+'Organ_contract_attribute_mangerCount"> mangerCount:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'Organ_mangerCount_value"> </div>'
+	'	    </div>'
+	'	    <div class="contract_attribute" id="'+this.prefix+'Organ_contract_attribute_organName"> organName:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'Organ_organName_value"> </div>'
+	'	    </div>'
+	'	    <div class="contract_attribute" id="'+this.prefix+'Organ_contract_attribute_lastFunctionId"> lastFunctionId:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'Organ_lastFunctionId_value"> </div>'
+	'	    </div>'
+	'	    <div class="contract_attribute" id="'+this.prefix+'Organ_contract_attribute_blogRegistry"> blogRegistry:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'Organ_blogRegistry_value"> </div>'
+	'	    </div>'
+	'	    <div class="contract_attribute" id="'+this.prefix+'Organ_contract_attribute_isActive"> isActive:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'Organ_isActive_value"> </div>'
+	'	    </div>'
+	'	    <div class="contract_attribute" id="'+this.prefix+'Organ_contract_attribute_ballotCount"> ballotCount:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'Organ_ballotCount_value"> </div>'
+	'	    </div>'
+	'	'
;
}



this.createOrgan_changeMember_uint_addressGui=function() {
return 	'  <div class="function_execution" id="'+this.prefix+'Organ_contract_function_Organ_changeMember_uint_address">'
+	'Organ_changeMember:'
+	'	  <div class="function_parameter">_id<input type="number" id="'+this.prefix+'Organ_changeMember_uint_address__id"></div>'
+	'	  <div class="function_parameter">_address<input type="text" id="'+this.prefix+'Organ_changeMember_uint_address__address"></div>'
+	'	<button id="'+this.prefix+'OrganController.Organ_changeMember_uint_address" onclick="'+this.prefix+'OrganController.Organ_changeMember_uint_address()">execute Organ_changeMember</button>'
+	'	<div class="function_result" id="'+this.prefix+'Organ_changeMember_uint_address_res"></div>'
+	'  </div>'
;
}
this.createManageable_addManager_addressGui=function() {
return 	'  <div class="function_execution" id="'+this.prefix+'Organ_contract_function_Manageable_addManager_address">'
+	'Organ_addManager:'
+	'	  <div class="function_parameter">_newManagerAddress<input type="text" id="'+this.prefix+'Manageable_addManager_address__newManagerAddress"></div>'
+	'	<button id="'+this.prefix+'OrganController.Manageable_addManager_address" onclick="'+this.prefix+'OrganController.Manageable_addManager_address()">execute Organ_addManager</button>'
+	'	<div class="function_result" id="'+this.prefix+'Manageable_addManager_address_res"></div>'
+	'  </div>'
;
}
this.createOrgan_createFunction_string_stringGui=function() {
return 	'  <div class="function_execution" id="'+this.prefix+'Organ_contract_function_Organ_createFunction_string_string">'
+	'Organ_createFunction:'
+	'	  <div class="function_parameter">_functionName<input type="text" id="'+this.prefix+'Organ_createFunction_string_string__functionName"></div>'
+	'	  <div class="function_parameter">_constittiutionHash<input type="text" id="'+this.prefix+'Organ_createFunction_string_string__constittiutionHash"></div>'
+	'	<button id="'+this.prefix+'OrganController.Organ_createFunction_string_string" onclick="'+this.prefix+'OrganController.Organ_createFunction_string_string()">execute Organ_createFunction</button>'
+	'	<div class="function_result" id="'+this.prefix+'Organ_createFunction_string_string_res"></div>'
+	'  </div>'
;
}
this.createManageable_removeManager_addressGui=function() {
return 	'  <div class="function_execution" id="'+this.prefix+'Organ_contract_function_Manageable_removeManager_address">'
+	'Organ_removeManager:'
+	'	  <div class="function_parameter">_managerAddress<input type="text" id="'+this.prefix+'Manageable_removeManager_address__managerAddress"></div>'
+	'	<button id="'+this.prefix+'OrganController.Manageable_removeManager_address" onclick="'+this.prefix+'OrganController.Manageable_removeManager_address()">execute Organ_removeManager</button>'
+	'	<div class="function_result" id="'+this.prefix+'Manageable_removeManager_address_res"></div>'
+	'  </div>'
;
}
this.createOrgan_initalizeOrganGui=function() {
return 	'  <div class="function_execution" id="'+this.prefix+'Organ_contract_function_Organ_initalizeOrgan">'
+	'Organ_initalizeOrgan:'
+	'	<button id="'+this.prefix+'OrganController.Organ_initalizeOrgan" onclick="'+this.prefix+'OrganController.Organ_initalizeOrgan()">execute Organ_initalizeOrgan</button>'
+	'	<div class="function_result" id="'+this.prefix+'Organ_initalizeOrgan_res"></div>'
+	'  </div>'
;
}
this.createManageable_isManager_addressGui=function() {
return 	'  <div class="function_execution" id="'+this.prefix+'Organ_contract_function_Manageable_isManager_address">'
+	'Organ_isManager:'
+	'	  <div class="function_parameter">_managerAddress<input type="text" id="'+this.prefix+'Manageable_isManager_address__managerAddress"></div>'
+	'	<button id="'+this.prefix+'OrganController.Manageable_isManager_address" onclick="'+this.prefix+'OrganController.Manageable_isManager_address()">execute Organ_isManager</button>'
+	'	<div class="function_result" id="'+this.prefix+'Manageable_isManager_address_res"></div>'
+	'  </div>'
;
}
this.createOrgan_publishFunctionMessage_uint_string_string_stringGui=function() {
return 	'  <div class="function_execution" id="'+this.prefix+'Organ_contract_function_Organ_publishFunctionMessage_uint_string_string_string">'
+	'Organ_publishFunctionMessage:'
+	'	  <div class="function_parameter">id<input type="number" id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_id"></div>'
+	'	  <div class="function_parameter">message<input type="text" id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_message"></div>'
+	'	  <div class="function_parameter">hash<input type="text" id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_hash"></div>'
+	'	  <div class="function_parameter">er<input type="text" id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_er"></div>'
+	'	<button id="'+this.prefix+'OrganController.Organ_publishFunctionMessage_uint_string_string_string" onclick="'+this.prefix+'OrganController.Organ_publishFunctionMessage_uint_string_string_string()">execute Organ_publishFunctionMessage</button>'
+	'	<div class="function_result" id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_res"></div>'
+	'  </div>'
;
}
this.createOrgan_createBallot_string_bytes32Gui=function() {
return 	'  <div class="function_execution" id="'+this.prefix+'Organ_contract_function_Organ_createBallot_string_bytes32">'
+	'Organ_createBallot:'
+	'	  <div class="function_parameter">name<input type="text" id="'+this.prefix+'Organ_createBallot_string_bytes32_name"></div>'
+	'	  <div class="function_parameter">proposalNames<input type="text" id="'+this.prefix+'Organ_createBallot_string_bytes32_proposalNames"></div>'
+	'	<button id="'+this.prefix+'OrganController.Organ_createBallot_string_bytes32" onclick="'+this.prefix+'OrganController.Organ_createBallot_string_bytes32()">execute Organ_createBallot</button>'
+	'	<div class="function_result" id="'+this.prefix+'Organ_createBallot_string_bytes32_res"></div>'
+	'  </div>'
;
}
this.createOrgan_getFunctionBlogAddress_uintGui=function() {
return 	'  <div class="function_execution" id="'+this.prefix+'Organ_contract_function_Organ_getFunctionBlogAddress_uint">'
+	'Organ_getFunctionBlogAddress:'
+	'	  <div class="function_parameter">id<input type="number" id="'+this.prefix+'Organ_getFunctionBlogAddress_uint_id"></div>'
+	'	<button id="'+this.prefix+'OrganController.Organ_getFunctionBlogAddress_uint" onclick="'+this.prefix+'OrganController.Organ_getFunctionBlogAddress_uint()">execute Organ_getFunctionBlogAddress</button>'
+	'	<div class="function_result" id="'+this.prefix+'Organ_getFunctionBlogAddress_uint_res"></div>'
+	'  </div>'
;
}
this.createOrgan_getLastBallotGui=function() {
return 	'  <div class="function_execution" id="'+this.prefix+'Organ_contract_function_Organ_getLastBallot">'
+	'Organ_getLastBallot:'
+	'	<button id="'+this.prefix+'OrganController.Organ_getLastBallot" onclick="'+this.prefix+'OrganController.Organ_getLastBallot()">execute Organ_getLastBallot</button>'
+	'	<div class="function_result" id="'+this.prefix+'Organ_getLastBallot_res"></div>'
+	'  </div>'
;
}
this.createOrgan_getOrganBlogGui=function() {
return 	'  <div class="function_execution" id="'+this.prefix+'Organ_contract_function_Organ_getOrganBlog">'
+	'Organ_getOrganBlog:'
+	'	<button id="'+this.prefix+'OrganController.Organ_getOrganBlog" onclick="'+this.prefix+'OrganController.Organ_getOrganBlog()">execute Organ_getOrganBlog</button>'
+	'	<div class="function_result" id="'+this.prefix+'Organ_getOrganBlog_res"></div>'
+	'  </div>'
;
}

this.createorganFunctionsStructGui=function() {
return 	'<!--struct -->'
+	'<div class="Struct_Mapping" id="'+this.prefix+'Struc_Organ_contract_attribute_organFunctions">struc mapping  organFunctions:'
+	'		<input type="number" id="'+this.prefix+'Organ_contract_attribute_organFunctions_input">(uint)'
+	'    	<div class="Struct_attribute" id="'+this.prefix+'Organ_contract_attribute_organFunctions_currentMember"> currentMember:'
+	'      		<div class="Struct_attribute_value" id="'+this.prefix+'Organ_organFunctions_currentMember_value"> </div>'
+	'    	</div>'
+	'    	<div class="Struct_attribute" id="'+this.prefix+'Organ_contract_attribute_organFunctions_functionName"> functionName:'
+	'      		<div class="Struct_attribute_value" id="'+this.prefix+'Organ_organFunctions_functionName_value"> </div>'
+	'    	</div>'
+	'    	<div class="Struct_attribute" id="'+this.prefix+'Organ_contract_attribute_organFunctions_id"> id:'
+	'      		<div class="Struct_attribute_value" id="'+this.prefix+'Organ_organFunctions_id_value"> </div>'
+	'    	</div>'
+	'    	<div class="Struct_attribute" id="'+this.prefix+'Organ_contract_attribute_organFunctions_constitutionHash"> constitutionHash:'
+	'      		<div class="Struct_attribute_value" id="'+this.prefix+'Organ_organFunctions_constitutionHash_value"> </div>'
+	'    	</div>'
+	'    	<div class="Struct_attribute" id="'+this.prefix+'Organ_contract_attribute_organFunctions_lastMemberChanged"> lastMemberChanged:'
+	'      		<div class="Struct_attribute_value" id="'+this.prefix+'Organ_organFunctions_lastMemberChanged_value"> </div>'
+	'    	</div>'
+	'    	<div class="Struct_attribute" id="'+this.prefix+'Organ_contract_attribute_organFunctions_lastConstitutionHashChanged"> lastConstitutionHashChanged:'
+	'      		<div class="Struct_attribute_value" id="'+this.prefix+'Organ_organFunctions_lastConstitutionHashChanged_value"> </div>'
+	'    	</div>'
+	'    	<div class="Struct_attribute" id="'+this.prefix+'Organ_contract_attribute_organFunctions_publisher"> publisher:'
+	'      		<div class="Struct_attribute_value" id="'+this.prefix+'Organ_organFunctions_publisher_value"> </div>'
+	'    	</div>'
+	'  </div>'
;
}


//print the contract div around
this.createOrganSeletonGui=function(inner) {
	return 	'<!-- gui for Organ_contract -->'
+	'	<div class="contract" id="'+this.prefix+'Organ_contract">'
+ inner
+'</div>';
}


//eventguis
this.createFunctionMemberChangeLogDataGui = function(prefix, blockHash, blockNumber,
oldMember,functionId,newMember) {
		return '<ul class="dapp-account-list"><li > '
        +'<a class="dapp-identicon dapp-small" style="background-image: url(identiconimage.png)"></a>'
		+'<span>'+prefix+' ('+blockNumber+')</span>'
        +'<span>'+oldMember+'</span>'
        +'<span>'+functionId+'</span>'
        +'<span>'+newMember+'</span>'
        +' </li>'
        ;
}

}//end guifactory
// script for Organ gui controller
function OrganController() {

	this.Organ_instance = undefined;
	this.prefix='';
	this.contractAddress = undefined; 
	var self = this;

// bind buttons
	this.bindGui=function() {
		var btn = document.getElementById(self.prefix+'OrganController.setAddress');
//	console.log('bind:' + self.prefix+' '+btn);
		if(btn!=undefined)		
			btn.onclick = this.setAddress;

		var btn = document.getElementById(self.prefix+'Organ_updateAttributes');
//		console.log('bind update:' + self.prefix+' '+btn);
		if(btn!=undefined)
			btn.onclick = this._updateAttributes;
		var btn = document.getElementById(self.prefix+'OrganController.Organ_changeMember_uint_address');
//		console.log('bind:Organ_changeMember ' + self.prefix+' '+btn+'  '+self.Organ_changeMember_uint_address);//Organ_changeMember);
		if(btn!=undefined)
			btn.onclick = this.Organ_changeMember_uint_address;
		var btn = document.getElementById(self.prefix+'OrganController.Manageable_addManager_address');
//		console.log('bind:Organ_addManager ' + self.prefix+' '+btn+'  '+self.Manageable_addManager_address);//Organ_addManager);
		if(btn!=undefined)
			btn.onclick = this.Manageable_addManager_address;
		var btn = document.getElementById(self.prefix+'OrganController.Organ_createFunction_string_string');
//		console.log('bind:Organ_createFunction ' + self.prefix+' '+btn+'  '+self.Organ_createFunction_string_string);//Organ_createFunction);
		if(btn!=undefined)
			btn.onclick = this.Organ_createFunction_string_string;
		var btn = document.getElementById(self.prefix+'OrganController.Manageable_removeManager_address');
//		console.log('bind:Organ_removeManager ' + self.prefix+' '+btn+'  '+self.Manageable_removeManager_address);//Organ_removeManager);
		if(btn!=undefined)
			btn.onclick = this.Manageable_removeManager_address;
		var btn = document.getElementById(self.prefix+'OrganController.Organ_initalizeOrgan');
//		console.log('bind:Organ_initalizeOrgan ' + self.prefix+' '+btn+'  '+self.Organ_initalizeOrgan);//Organ_initalizeOrgan);
		if(btn!=undefined)
			btn.onclick = this.Organ_initalizeOrgan;
		var btn = document.getElementById(self.prefix+'OrganController.Manageable_isManager_address');
//		console.log('bind:Organ_isManager ' + self.prefix+' '+btn+'  '+self.Manageable_isManager_address);//Organ_isManager);
		if(btn!=undefined)
			btn.onclick = this.Manageable_isManager_address;
		var btn = document.getElementById(self.prefix+'OrganController.Organ_publishFunctionMessage_uint_string_string_string');
//		console.log('bind:Organ_publishFunctionMessage ' + self.prefix+' '+btn+'  '+self.Organ_publishFunctionMessage_uint_string_string_string);//Organ_publishFunctionMessage);
		if(btn!=undefined)
			btn.onclick = this.Organ_publishFunctionMessage_uint_string_string_string;
		var btn = document.getElementById(self.prefix+'OrganController.Organ_createBallot_string_bytes32');
//		console.log('bind:Organ_createBallot ' + self.prefix+' '+btn+'  '+self.Organ_createBallot_string_bytes32);//Organ_createBallot);
		if(btn!=undefined)
			btn.onclick = this.Organ_createBallot_string_bytes32;
		var btn = document.getElementById(self.prefix+'OrganController.Organ_getFunctionBlogAddress_uint');
//		console.log('bind:Organ_getFunctionBlogAddress ' + self.prefix+' '+btn+'  '+self.Organ_getFunctionBlogAddress_uint);//Organ_getFunctionBlogAddress);
		if(btn!=undefined)
			btn.onclick = this.Organ_getFunctionBlogAddress_uint;
		var btn = document.getElementById(self.prefix+'OrganController.Organ_getLastBallot');
//		console.log('bind:Organ_getLastBallot ' + self.prefix+' '+btn+'  '+self.Organ_getLastBallot);//Organ_getLastBallot);
		if(btn!=undefined)
			btn.onclick = this.Organ_getLastBallot;
		var btn = document.getElementById(self.prefix+'OrganController.Organ_getOrganBlog');
//		console.log('bind:Organ_getOrganBlog ' + self.prefix+' '+btn+'  '+self.Organ_getOrganBlog);//Organ_getOrganBlog);
		if(btn!=undefined)
			btn.onclick = this.Organ_getOrganBlog;
	}
	// set function
	this.setAddress=function() {
	var _address = document.getElementById(self.prefix+'Organ_address');
//	console.log('setAddress:' + self.prefix+' '+_address);
	self.Organ_instance = OrganContract.at(_address.value);
	self.contractAddress = _address.value;
	self._updateAttributes();
}
//update attributes
this._updateAttributes=function () {
if(this.Organ_instance===null) return;
//console.log('updateAttributes:' + self.prefix);
// update attributes
	var memberRegistry_res = self.Organ_instance.memberRegistry();
//	console.log('get:memberRegistry' + self.prefix);

	if(memberRegistry_res!=null)
		document.getElementById(self.prefix+'Organ_memberRegistry_value').innerText = memberRegistry_res;
	var mangerCount_res = self.Organ_instance.mangerCount();
//	console.log('get:mangerCount' + self.prefix);

	if(mangerCount_res!=null)
		document.getElementById(self.prefix+'Organ_mangerCount_value').innerText = mangerCount_res;
	var organName_res = self.Organ_instance.organName();
//	console.log('get:organName' + self.prefix);

	if(organName_res!=null)
		document.getElementById(self.prefix+'Organ_organName_value').innerText = organName_res;
	var lastFunctionId_res = self.Organ_instance.lastFunctionId();
//	console.log('get:lastFunctionId' + self.prefix);

	if(lastFunctionId_res!=null)
		document.getElementById(self.prefix+'Organ_lastFunctionId_value').innerText = lastFunctionId_res;
	var blogRegistry_res = self.Organ_instance.blogRegistry();
//	console.log('get:blogRegistry' + self.prefix);

	if(blogRegistry_res!=null)
		document.getElementById(self.prefix+'Organ_blogRegistry_value').innerText = blogRegistry_res;
	var isActive_res = self.Organ_instance.isActive();
//	console.log('get:isActive' + self.prefix);

	if(isActive_res!=null)
		document.getElementById(self.prefix+'Organ_isActive_value').innerText = isActive_res;
	var ballotCount_res = self.Organ_instance.ballotCount();
//	console.log('get:ballotCount' + self.prefix);

	if(ballotCount_res!=null)
		document.getElementById(self.prefix+'Organ_ballotCount_value').innerText = ballotCount_res;
//console.log('getStruct:managers' + self.prefix);
	var _key = document.getElementById(self.prefix+'Organ_contract_attribute_managers_input').value;
	var managers_res = self.Organ_instance.managers(_key);
//console.log('result:managers' + managers_res+' key: '+_key);
	if(managers_res!=null){
		document.getElementById(self.prefix+'Organ_managers_value').innerText = managers_res;
	}
//console.log('getStruct:organFunctions' + self.prefix);
	var _key = document.getElementById(self.prefix+'Organ_contract_attribute_organFunctions_input').value;
	var organFunctions_res = self.Organ_instance.organFunctions(_key);
//console.log('result:organFunctions' + organFunctions_res+' key: '+_key);
	if(organFunctions_res!=null){
		document.getElementById(self.prefix+'Organ_organFunctions_currentMember_value').innerText = organFunctions_res[0];
		document.getElementById(self.prefix+'Organ_organFunctions_functionName_value').innerText = organFunctions_res[1];
		document.getElementById(self.prefix+'Organ_organFunctions_id_value').innerText = organFunctions_res[2];
		document.getElementById(self.prefix+'Organ_organFunctions_constitutionHash_value').innerText = organFunctions_res[3];
		document.getElementById(self.prefix+'Organ_organFunctions_lastMemberChanged_value').innerText = organFunctions_res[4];
		document.getElementById(self.prefix+'Organ_organFunctions_lastConstitutionHashChanged_value').innerText = organFunctions_res[5];
		document.getElementById(self.prefix+'Organ_organFunctions_publisher_value').innerText = organFunctions_res[6];
	}
}

//call functions
//function Organ_canAccess
this.Manageable_canAccess=function() {
//console.log('function:canAccess' + self.prefix);
//	console.log(':' +self.Organ_instance+':');
	var res = self.Organ_instance.canAccess();
	if(res!=null)
		document.getElementById(self.prefix+'Manageable_canAccess_res').innerText = res;
}
//function Organ_changeMember
this.Organ_changeMember_uint_address=function() {
//console.log('function:changeMember' + self.prefix);
	var e = document.getElementById(self.prefix+'Organ_changeMember_uint_address__id');
//	console.log(':' + self.prefix+'Organ_changeMember_uint_address__id'+": "+e);
	var param__id = e.value;
	var e = document.getElementById(self.prefix+'Organ_changeMember_uint_address__address');
//	console.log(':' + self.prefix+'Organ_changeMember_uint_address__address'+": "+e);
	var param__address = e.value;
//	console.log(':' +self.Organ_instance+':');
	var res = self.Organ_instance.changeMember(param__id, param__address);
}
//function Organ_isMember
this.MemberAware_isMember_address=function() {
//console.log('function:isMember' + self.prefix);
	var e = document.getElementById(self.prefix+'MemberAware_isMember_address__address');
//	console.log(':' + self.prefix+'MemberAware_isMember_address__address'+": "+e);
	var param__address = e.value;
//	console.log(':' +self.Organ_instance+':');
	var res = self.Organ_instance.isMember(param__address);
	if(res!=null)
		document.getElementById(self.prefix+'MemberAware_isMember_address_res').innerText = res;
}
//function Organ_addManager
this.Manageable_addManager_address=function() {
//console.log('function:addManager' + self.prefix);
	var e = document.getElementById(self.prefix+'Manageable_addManager_address__newManagerAddress');
//	console.log(':' + self.prefix+'Manageable_addManager_address__newManagerAddress'+": "+e);
	var param__newManagerAddress = e.value;
//	console.log(':' +self.Organ_instance+':');
	var res = self.Organ_instance.addManager(param__newManagerAddress);
}
//function Organ_createFunction
this.Organ_createFunction_string_string=function() {
//console.log('function:createFunction' + self.prefix);
	var e = document.getElementById(self.prefix+'Organ_createFunction_string_string__functionName');
//	console.log(':' + self.prefix+'Organ_createFunction_string_string__functionName'+": "+e);
	var param__functionName = e.value;
	var e = document.getElementById(self.prefix+'Organ_createFunction_string_string__constittiutionHash');
//	console.log(':' + self.prefix+'Organ_createFunction_string_string__constittiutionHash'+": "+e);
	var param__constittiutionHash = e.value;
//	console.log(':' +self.Organ_instance+':');
	var res = self.Organ_instance.createFunction(param__functionName, param__constittiutionHash);
}
//function Organ_removeManager
this.Manageable_removeManager_address=function() {
//console.log('function:removeManager' + self.prefix);
	var e = document.getElementById(self.prefix+'Manageable_removeManager_address__managerAddress');
//	console.log(':' + self.prefix+'Manageable_removeManager_address__managerAddress'+": "+e);
	var param__managerAddress = e.value;
//	console.log(':' +self.Organ_instance+':');
	var res = self.Organ_instance.removeManager(param__managerAddress);
}
//function Organ_initalizeOrgan
this.Organ_initalizeOrgan=function() {
//console.log('function:initalizeOrgan' + self.prefix);
//	console.log(':' +self.Organ_instance+':');
	var res = self.Organ_instance.initalizeOrgan();
}
//function Organ_isManager
this.Manageable_isManager_address=function() {
//console.log('function:isManager' + self.prefix);
	var e = document.getElementById(self.prefix+'Manageable_isManager_address__managerAddress');
//	console.log(':' + self.prefix+'Manageable_isManager_address__managerAddress'+": "+e);
	var param__managerAddress = e.value;
//	console.log(':' +self.Organ_instance+':');
	var res = self.Organ_instance.isManager(param__managerAddress);
	if(res!=null)
		document.getElementById(self.prefix+'Manageable_isManager_address_res').innerText = res;
}
//function Organ_publishFunctionMessage
this.Organ_publishFunctionMessage_uint_string_string_string=function() {
//console.log('function:publishFunctionMessage' + self.prefix);
	var e = document.getElementById(self.prefix+'Organ_publishFunctionMessage_uint_string_string_string_id');
//	console.log(':' + self.prefix+'Organ_publishFunctionMessage_uint_string_string_string_id'+": "+e);
	var param_id = e.value;
	var e = document.getElementById(self.prefix+'Organ_publishFunctionMessage_uint_string_string_string_message');
//	console.log(':' + self.prefix+'Organ_publishFunctionMessage_uint_string_string_string_message'+": "+e);
	var param_message = e.value;
	var e = document.getElementById(self.prefix+'Organ_publishFunctionMessage_uint_string_string_string_hash');
//	console.log(':' + self.prefix+'Organ_publishFunctionMessage_uint_string_string_string_hash'+": "+e);
	var param_hash = e.value;
	var e = document.getElementById(self.prefix+'Organ_publishFunctionMessage_uint_string_string_string_er');
//	console.log(':' + self.prefix+'Organ_publishFunctionMessage_uint_string_string_string_er'+": "+e);
	var param_er = e.value;
//	console.log(':' +self.Organ_instance+':');
	var res = self.Organ_instance.publishFunctionMessage(param_id, param_message, param_hash, param_er);
}
//function Organ_createBallot
this.Organ_createBallot_string_bytes32=function() {
//console.log('function:createBallot' + self.prefix);
	var e = document.getElementById(self.prefix+'Organ_createBallot_string_bytes32_name');
//	console.log(':' + self.prefix+'Organ_createBallot_string_bytes32_name'+": "+e);
	var param_name = e.value;
	var e = document.getElementById(self.prefix+'Organ_createBallot_string_bytes32_proposalNames');
//	console.log(':' + self.prefix+'Organ_createBallot_string_bytes32_proposalNames'+": "+e);
	var param_proposalNames = e.value;
//	console.log(':' +self.Organ_instance+':');
	var res = self.Organ_instance.createBallot(param_name, param_proposalNames);
	if(res!=null)
		document.getElementById(self.prefix+'Organ_createBallot_string_bytes32_res').innerText = res;
}
//function Organ_getFunctionBlogAddress
this.Organ_getFunctionBlogAddress_uint=function() {
//console.log('function:getFunctionBlogAddress' + self.prefix);
	var e = document.getElementById(self.prefix+'Organ_getFunctionBlogAddress_uint_id');
//	console.log(':' + self.prefix+'Organ_getFunctionBlogAddress_uint_id'+": "+e);
	var param_id = e.value;
//	console.log(':' +self.Organ_instance+':');
	var res = self.Organ_instance.getFunctionBlogAddress(param_id);
	if(res!=null)
		document.getElementById(self.prefix+'Organ_getFunctionBlogAddress_uint_res').innerText = res;
}
//function Organ_getLastBallot
this.Organ_getLastBallot=function() {
//console.log('function:getLastBallot' + self.prefix);
//	console.log(':' +self.Organ_instance+':');
	var res = self.Organ_instance.getLastBallot();
	if(res!=null)
		document.getElementById(self.prefix+'Organ_getLastBallot_res').innerText = res;
}
//function Organ_getOrganBlog
this.Organ_getOrganBlog=function() {
//console.log('function:getOrganBlog' + self.prefix);
//	console.log(':' +self.Organ_instance+':');
	var res = self.Organ_instance.getOrganBlog();
	if(res!=null)
		document.getElementById(self.prefix+'Organ_getOrganBlog_res').innerText = res;
}

//delegated calls

}// end controller	


// script for Organ
function OrganModel(prefix) {
	this.prefix = prefix;
	this.guiFactory = new OrganGuiFactory();
	this.controller = new OrganController();
	this.guiFactory.prefix = prefix;
	this.controller.prefix = prefix;
}
OrganModel.prototype.create=function () {
	this.guiFactory.placeDefaultGui();
	this.controller._updateAttributes();
}


//class as GlueCode
//uses prefix + 'GuiContainer'
function OrganManager(prefix,contract) {
	this.prefix = prefix;
	var self = this;
	this.c = new OrganController();
	this.c.prefix=prefix;
	this.c.Organ_instance=contract;
	this.c.contractAddress = contract.address;
	this.g = new OrganGuiFactory();
	this.g.prefix = prefix;

	this.addGui = function() {
		var e = document.getElementById(this.prefix + 'GuiContainer');
//console.log('addGui:' + this.prefix+ 'GuiContainer'+e);
		var elemDiv = document.createElement('div');
		elemDiv.id= this.prefix +'Organ_gui';
		e.appendChild(elemDiv);
		this.g.placeDefaultGui();
		document.getElementById(this.prefix+'Organ_address').value = this.c.contractAddress;
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
		return this.c.Organ_instance;
	}

}// end of manager

function OrganGuiMananger(guiId){
	this.prefix = guiId;
	this.managers=new Array();	//[];		
	
	this.addManager = function(contract) {
//console.log('addManager:'+contract);
		var m = new OrganManager(contract.address,contract);
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
			elemDiv.id= this.managers[i].prefix + 'GuiContainer';//'Organ_gui';
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

//gui factory Party
function PartyGuiFactory() {
	this.prefix='';
	
// default Gui
this.placeDefaultGui=function() {
//	console.log(this.prefix+' place gui');
	document.getElementById(this.prefix+'Party_gui').innerHTML = this.createDefaultGui();
}
// default Gui
this.createDefaultGui=function() {
	return 	'<!-- gui for Party_contract -->'
+	'	<div class="contract" id="'+this.prefix+'Party_contract">'
+	'	Party:'
+	'	  <input type="text" id="'+this.prefix+'Party_address"> <button id="'+this.prefix+'PartyController.setAddress" onclick="'+this.prefix+'PartyController.setAddress()">change Party Address</button>'
+	'	  <div class="contract_attributes" id="'+this.prefix+'Party_contract_attributes"> attributes:'
+	'	    <div class="contract_attribute" id="'+this.prefix+'Party_contract_attribute_mangerCount"> mangerCount:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'Party_mangerCount_value"> </div>'
+	'	    </div>'
+	'	    <div class="contract_attribute" id="'+this.prefix+'Party_contract_attribute_constitutionHash"> constitutionHash:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'Party_constitutionHash_value"> </div>'
+	'	    </div>'
+	'	    <div class="contract_attribute" id="'+this.prefix+'Party_contract_attribute_organCount"> organCount:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'Party_organCount_value"> </div>'
+	'	    </div>'
+	'	    <div class="contract_attribute" id="'+this.prefix+'Party_contract_attribute_blogregistry"> blogregistry:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'Party_blogregistry_value"> </div>'
+	'	    </div>'
+	'	'
+	'	<div class="Value_Mapping" id="'+this.prefix+'Party_contract_attribute_managers">mapping  managers:'
+	'			<input type="text" id="'+this.prefix+'Party_contract_attribute_managers_input">(address)'
+	'	    	<div class="Mapping_value" id="'+this.prefix+'Party_contract_attribute_address"> bool:'
+	'	      		<div class="contract_attribute_value" id="'+this.prefix+'Party_managers_value"> </div>'
+	'	    	</div>'
+	'	  </div>'
+	'	<div class="Value_Mapping" id="'+this.prefix+'Party_contract_attribute_organs">mapping  organs:'
+	'			<input type="number" id="'+this.prefix+'Party_contract_attribute_organs_input">(uint)'
+	'	    	<div class="Mapping_value" id="'+this.prefix+'Party_contract_attribute_uint"> Organ:'
+	'	      		<div class="contract_attribute_value" id="'+this.prefix+'Party_organs_value"> </div>'
+	'	    	</div>'
+	'	  </div>'
+	'	    <button id="'+this.prefix+'Party_updateAttributes" onclick="'+this.prefix+'PartyController._updateAttributes()">update Party attributes</button>'
+	'	  </div>'
+	'	  <div class="function_execution" id="'+this.prefix+'Party_contract_function_Party_Party">'
+	'	Party_Party:'
+	'		<button id="'+this.prefix+'PartyController.Party_Party" onclick="'+this.prefix+'PartyController.Party_Party()">execute Party_Party</button>'
+	'		<div class="function_result" id="'+this.prefix+'Party_Party_res"></div>'
+	'	  </div>'
+	'	  <div class="function_execution" id="'+this.prefix+'Party_contract_function_Manageable_addManager_address">'
+	'	Party_addManager:'
+	'		  <div class="function_parameter">_newManagerAddress<input type="text" id="'+this.prefix+'Manageable_addManager_address__newManagerAddress"></div>'
+	'		<button id="'+this.prefix+'PartyController.Manageable_addManager_address" onclick="'+this.prefix+'PartyController.Manageable_addManager_address()">execute Party_addManager</button>'
+	'		<div class="function_result" id="'+this.prefix+'Manageable_addManager_address_res"></div>'
+	'	  </div>'
+	'	  <div class="function_execution" id="'+this.prefix+'Party_contract_function_Party_createOrgan_string">'
+	'	Party_createOrgan:'
+	'		  <div class="function_parameter">organName<input type="text" id="'+this.prefix+'Party_createOrgan_string_organName"></div>'
+	'		<button id="'+this.prefix+'PartyController.Party_createOrgan_string" onclick="'+this.prefix+'PartyController.Party_createOrgan_string()">execute Party_createOrgan</button>'
+	'		<div class="function_result" id="'+this.prefix+'Party_createOrgan_string_res"></div>'
+	'	  </div>'
+	'	  <div class="function_execution" id="'+this.prefix+'Party_contract_function_Manageable_removeManager_address">'
+	'	Party_removeManager:'
+	'		  <div class="function_parameter">_managerAddress<input type="text" id="'+this.prefix+'Manageable_removeManager_address__managerAddress"></div>'
+	'		<button id="'+this.prefix+'PartyController.Manageable_removeManager_address" onclick="'+this.prefix+'PartyController.Manageable_removeManager_address()">execute Party_removeManager</button>'
+	'		<div class="function_result" id="'+this.prefix+'Manageable_removeManager_address_res"></div>'
+	'	  </div>'
+	'	  <div class="function_execution" id="'+this.prefix+'Party_contract_function_Manageable_isManager_address">'
+	'	Party_isManager:'
+	'		  <div class="function_parameter">_managerAddress<input type="text" id="'+this.prefix+'Manageable_isManager_address__managerAddress"></div>'
+	'		<button id="'+this.prefix+'PartyController.Manageable_isManager_address" onclick="'+this.prefix+'PartyController.Manageable_isManager_address()">execute Party_isManager</button>'
+	'		<div class="function_result" id="'+this.prefix+'Manageable_isManager_address_res"></div>'
+	'	  </div>'
+	'	'
+	'	</div>'
;
}

//default attributes
this.createAttributesGui=function() {
	return 	'    <div class="contract_attribute" id="'+this.prefix+'Party_contract_attribute_mangerCount"> mangerCount:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'Party_mangerCount_value"> </div>'
+	'	    </div>'
+	'	    <div class="contract_attribute" id="'+this.prefix+'Party_contract_attribute_constitutionHash"> constitutionHash:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'Party_constitutionHash_value"> </div>'
+	'	    </div>'
+	'	    <div class="contract_attribute" id="'+this.prefix+'Party_contract_attribute_organCount"> organCount:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'Party_organCount_value"> </div>'
+	'	    </div>'
+	'	    <div class="contract_attribute" id="'+this.prefix+'Party_contract_attribute_blogregistry"> blogregistry:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'Party_blogregistry_value"> </div>'
+	'	    </div>'
+	'	'
;
}



this.createParty_PartyGui=function() {
return 	'  <div class="function_execution" id="'+this.prefix+'Party_contract_function_Party_Party">'
+	'Party_Party:'
+	'	<button id="'+this.prefix+'PartyController.Party_Party" onclick="'+this.prefix+'PartyController.Party_Party()">execute Party_Party</button>'
+	'	<div class="function_result" id="'+this.prefix+'Party_Party_res"></div>'
+	'  </div>'
;
}
this.createManageable_addManager_addressGui=function() {
return 	'  <div class="function_execution" id="'+this.prefix+'Party_contract_function_Manageable_addManager_address">'
+	'Party_addManager:'
+	'	  <div class="function_parameter">_newManagerAddress<input type="text" id="'+this.prefix+'Manageable_addManager_address__newManagerAddress"></div>'
+	'	<button id="'+this.prefix+'PartyController.Manageable_addManager_address" onclick="'+this.prefix+'PartyController.Manageable_addManager_address()">execute Party_addManager</button>'
+	'	<div class="function_result" id="'+this.prefix+'Manageable_addManager_address_res"></div>'
+	'  </div>'
;
}
this.createParty_createOrgan_stringGui=function() {
return 	'  <div class="function_execution" id="'+this.prefix+'Party_contract_function_Party_createOrgan_string">'
+	'Party_createOrgan:'
+	'	  <div class="function_parameter">organName<input type="text" id="'+this.prefix+'Party_createOrgan_string_organName"></div>'
+	'	<button id="'+this.prefix+'PartyController.Party_createOrgan_string" onclick="'+this.prefix+'PartyController.Party_createOrgan_string()">execute Party_createOrgan</button>'
+	'	<div class="function_result" id="'+this.prefix+'Party_createOrgan_string_res"></div>'
+	'  </div>'
;
}
this.createManageable_removeManager_addressGui=function() {
return 	'  <div class="function_execution" id="'+this.prefix+'Party_contract_function_Manageable_removeManager_address">'
+	'Party_removeManager:'
+	'	  <div class="function_parameter">_managerAddress<input type="text" id="'+this.prefix+'Manageable_removeManager_address__managerAddress"></div>'
+	'	<button id="'+this.prefix+'PartyController.Manageable_removeManager_address" onclick="'+this.prefix+'PartyController.Manageable_removeManager_address()">execute Party_removeManager</button>'
+	'	<div class="function_result" id="'+this.prefix+'Manageable_removeManager_address_res"></div>'
+	'  </div>'
;
}
this.createManageable_isManager_addressGui=function() {
return 	'  <div class="function_execution" id="'+this.prefix+'Party_contract_function_Manageable_isManager_address">'
+	'Party_isManager:'
+	'	  <div class="function_parameter">_managerAddress<input type="text" id="'+this.prefix+'Manageable_isManager_address__managerAddress"></div>'
+	'	<button id="'+this.prefix+'PartyController.Manageable_isManager_address" onclick="'+this.prefix+'PartyController.Manageable_isManager_address()">execute Party_isManager</button>'
+	'	<div class="function_result" id="'+this.prefix+'Manageable_isManager_address_res"></div>'
+	'  </div>'
;
}


//print the contract div around
this.createPartySeletonGui=function(inner) {
	return 	'<!-- gui for Party_contract -->'
+	'	<div class="contract" id="'+this.prefix+'Party_contract">'
+ inner
+'</div>';
}


//eventguis
this.createConstiutionChangeLogDataGui = function(prefix, blockHash, blockNumber,
) {
		return '<ul class="dapp-account-list"><li > '
        +'<a class="dapp-identicon dapp-small" style="background-image: url(identiconimage.png)"></a>'
		+'<span>'+prefix+' ('+blockNumber+')</span>'
        +' </li>'
        ;
}

}//end guifactory
// script for Party gui controller
function PartyController() {

	this.Party_instance = undefined;
	this.prefix='';
	this.contractAddress = undefined; 
	var self = this;

// bind buttons
	this.bindGui=function() {
		var btn = document.getElementById(self.prefix+'PartyController.setAddress');
//	console.log('bind:' + self.prefix+' '+btn);
		if(btn!=undefined)		
			btn.onclick = this.setAddress;

		var btn = document.getElementById(self.prefix+'Party_updateAttributes');
//		console.log('bind update:' + self.prefix+' '+btn);
		if(btn!=undefined)
			btn.onclick = this._updateAttributes;
		var btn = document.getElementById(self.prefix+'PartyController.Party_Party');
//		console.log('bind:Party_Party ' + self.prefix+' '+btn+'  '+self.Party_Party);//Party_Party);
		if(btn!=undefined)
			btn.onclick = this.Party_Party;
		var btn = document.getElementById(self.prefix+'PartyController.Manageable_addManager_address');
//		console.log('bind:Party_addManager ' + self.prefix+' '+btn+'  '+self.Manageable_addManager_address);//Party_addManager);
		if(btn!=undefined)
			btn.onclick = this.Manageable_addManager_address;
		var btn = document.getElementById(self.prefix+'PartyController.Party_createOrgan_string');
//		console.log('bind:Party_createOrgan ' + self.prefix+' '+btn+'  '+self.Party_createOrgan_string);//Party_createOrgan);
		if(btn!=undefined)
			btn.onclick = this.Party_createOrgan_string;
		var btn = document.getElementById(self.prefix+'PartyController.Manageable_removeManager_address');
//		console.log('bind:Party_removeManager ' + self.prefix+' '+btn+'  '+self.Manageable_removeManager_address);//Party_removeManager);
		if(btn!=undefined)
			btn.onclick = this.Manageable_removeManager_address;
		var btn = document.getElementById(self.prefix+'PartyController.Manageable_isManager_address');
//		console.log('bind:Party_isManager ' + self.prefix+' '+btn+'  '+self.Manageable_isManager_address);//Party_isManager);
		if(btn!=undefined)
			btn.onclick = this.Manageable_isManager_address;
	}
	// set function
	this.setAddress=function() {
	var _address = document.getElementById(self.prefix+'Party_address');
//	console.log('setAddress:' + self.prefix+' '+_address);
	self.Party_instance = PartyContract.at(_address.value);
	self.contractAddress = _address.value;
	self._updateAttributes();
}
//update attributes
this._updateAttributes=function () {
if(this.Party_instance===null) return;
//console.log('updateAttributes:' + self.prefix);
// update attributes
	var mangerCount_res = self.Party_instance.mangerCount();
//	console.log('get:mangerCount' + self.prefix);

	if(mangerCount_res!=null)
		document.getElementById(self.prefix+'Party_mangerCount_value').innerText = mangerCount_res;
	var constitutionHash_res = self.Party_instance.constitutionHash();
//	console.log('get:constitutionHash' + self.prefix);

	if(constitutionHash_res!=null)
		document.getElementById(self.prefix+'Party_constitutionHash_value').innerText = constitutionHash_res;
	var organCount_res = self.Party_instance.organCount();
//	console.log('get:organCount' + self.prefix);

	if(organCount_res!=null)
		document.getElementById(self.prefix+'Party_organCount_value').innerText = organCount_res;
	var blogregistry_res = self.Party_instance.blogregistry();
//	console.log('get:blogregistry' + self.prefix);

	if(blogregistry_res!=null)
		document.getElementById(self.prefix+'Party_blogregistry_value').innerText = blogregistry_res;
//console.log('getStruct:managers' + self.prefix);
	var _key = document.getElementById(self.prefix+'Party_contract_attribute_managers_input').value;
	var managers_res = self.Party_instance.managers(_key);
//console.log('result:managers' + managers_res+' key: '+_key);
	if(managers_res!=null){
		document.getElementById(self.prefix+'Party_managers_value').innerText = managers_res;
	}
	var _key = document.getElementById(self.prefix+'Party_contract_attribute_organs_input').value;
	var organs_res = self.Party_instance.organs(_key);
	if(organs_res!=null){
		document.getElementById(self.prefix+'Party_organs_value').innerText = organs_res;
	}
}

//call functions
//function Party_Party
this.Party_Party=function() {
//console.log('function:Party' + self.prefix);
//	console.log(':' +self.Party_instance+':');
	var res = self.Party_instance.Party();
}
//function Party_canAccess
this.Manageable_canAccess=function() {
//console.log('function:canAccess' + self.prefix);
//	console.log(':' +self.Party_instance+':');
	var res = self.Party_instance.canAccess();
	if(res!=null)
		document.getElementById(self.prefix+'Manageable_canAccess_res').innerText = res;
}
//function Party_addManager
this.Manageable_addManager_address=function() {
//console.log('function:addManager' + self.prefix);
	var e = document.getElementById(self.prefix+'Manageable_addManager_address__newManagerAddress');
//	console.log(':' + self.prefix+'Manageable_addManager_address__newManagerAddress'+": "+e);
	var param__newManagerAddress = e.value;
//	console.log(':' +self.Party_instance+':');
	var res = self.Party_instance.addManager(param__newManagerAddress);
}
//function Party_createOrgan
this.Party_createOrgan_string=function() {
//console.log('function:createOrgan' + self.prefix);
	var e = document.getElementById(self.prefix+'Party_createOrgan_string_organName');
//	console.log(':' + self.prefix+'Party_createOrgan_string_organName'+": "+e);
	var param_organName = e.value;
//	console.log(':' +self.Party_instance+':');
	var res = self.Party_instance.createOrgan(param_organName);
}
//function Party_removeManager
this.Manageable_removeManager_address=function() {
//console.log('function:removeManager' + self.prefix);
	var e = document.getElementById(self.prefix+'Manageable_removeManager_address__managerAddress');
//	console.log(':' + self.prefix+'Manageable_removeManager_address__managerAddress'+": "+e);
	var param__managerAddress = e.value;
//	console.log(':' +self.Party_instance+':');
	var res = self.Party_instance.removeManager(param__managerAddress);
}
//function Party_isManager
this.Manageable_isManager_address=function() {
//console.log('function:isManager' + self.prefix);
	var e = document.getElementById(self.prefix+'Manageable_isManager_address__managerAddress');
//	console.log(':' + self.prefix+'Manageable_isManager_address__managerAddress'+": "+e);
	var param__managerAddress = e.value;
//	console.log(':' +self.Party_instance+':');
	var res = self.Party_instance.isManager(param__managerAddress);
	if(res!=null)
		document.getElementById(self.prefix+'Manageable_isManager_address_res').innerText = res;
}

//delegated calls

}// end controller	


// script for Party
function PartyModel(prefix) {
	this.prefix = prefix;
	this.guiFactory = new PartyGuiFactory();
	this.controller = new PartyController();
	this.guiFactory.prefix = prefix;
	this.controller.prefix = prefix;
}
PartyModel.prototype.create=function () {
	this.guiFactory.placeDefaultGui();
	this.controller._updateAttributes();
}


//class as GlueCode
//uses prefix + 'GuiContainer'
function PartyManager(prefix,contract) {
	this.prefix = prefix;
	var self = this;
	this.c = new PartyController();
	this.c.prefix=prefix;
	this.c.Party_instance=contract;
	this.c.contractAddress = contract.address;
	this.g = new PartyGuiFactory();
	this.g.prefix = prefix;

	this.addGui = function() {
		var e = document.getElementById(this.prefix + 'GuiContainer');
//console.log('addGui:' + this.prefix+ 'GuiContainer'+e);
		var elemDiv = document.createElement('div');
		elemDiv.id= this.prefix +'Party_gui';
		e.appendChild(elemDiv);
		this.g.placeDefaultGui();
		document.getElementById(this.prefix+'Party_address').value = this.c.contractAddress;
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
		return this.c.Party_instance;
	}

}// end of manager

function PartyGuiMananger(guiId){
	this.prefix = guiId;
	this.managers=new Array();	//[];		
	
	this.addManager = function(contract) {
//console.log('addManager:'+contract);
		var m = new PartyManager(contract.address,contract);
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
			elemDiv.id= this.managers[i].prefix + 'GuiContainer';//'Party_gui';
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

//gui factory KUEKeNParty
function KUEKeNPartyGuiFactory() {
	this.prefix='';
	
// default Gui
this.placeDefaultGui=function() {
//	console.log(this.prefix+' place gui');
	document.getElementById(this.prefix+'KUEKeNParty_gui').innerHTML = this.createDefaultGui();
}
// default Gui
this.createDefaultGui=function() {
	return 	'<!-- gui for KUEKeNParty_contract -->'
+	'	<div class="contract" id="'+this.prefix+'KUEKeNParty_contract">'
+	'	KUEKeNParty:'
+	'	  <input type="text" id="'+this.prefix+'KUEKeNParty_address"> <button id="'+this.prefix+'KUEKeNPartyController.setAddress" onclick="'+this.prefix+'KUEKeNPartyController.setAddress()">change KUEKeNParty Address</button>'
+	'	  <div class="contract_attributes" id="'+this.prefix+'KUEKeNParty_contract_attributes"> attributes:'
+	'	    <div class="contract_attribute" id="'+this.prefix+'KUEKeNParty_contract_attribute_mangerCount"> mangerCount:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'KUEKeNParty_mangerCount_value"> </div>'
+	'	    </div>'
+	'	    <div class="contract_attribute" id="'+this.prefix+'KUEKeNParty_contract_attribute_constitutionHash"> constitutionHash:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'KUEKeNParty_constitutionHash_value"> </div>'
+	'	    </div>'
+	'	    <div class="contract_attribute" id="'+this.prefix+'KUEKeNParty_contract_attribute_organCount"> organCount:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'KUEKeNParty_organCount_value"> </div>'
+	'	    </div>'
+	'	    <div class="contract_attribute" id="'+this.prefix+'KUEKeNParty_contract_attribute_blogregistry"> blogregistry:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'KUEKeNParty_blogregistry_value"> </div>'
+	'	    </div>'
+	'	'
+	'	<div class="Value_Mapping" id="'+this.prefix+'KUEKeNParty_contract_attribute_managers">mapping  managers:'
+	'			<input type="text" id="'+this.prefix+'KUEKeNParty_contract_attribute_managers_input">(address)'
+	'	    	<div class="Mapping_value" id="'+this.prefix+'KUEKeNParty_contract_attribute_address"> bool:'
+	'	      		<div class="contract_attribute_value" id="'+this.prefix+'KUEKeNParty_managers_value"> </div>'
+	'	    	</div>'
+	'	  </div>'
+	'	<div class="Value_Mapping" id="'+this.prefix+'KUEKeNParty_contract_attribute_organs">mapping  organs:'
+	'			<input type="number" id="'+this.prefix+'KUEKeNParty_contract_attribute_organs_input">(uint)'
+	'	    	<div class="Mapping_value" id="'+this.prefix+'KUEKeNParty_contract_attribute_uint"> Organ:'
+	'	      		<div class="contract_attribute_value" id="'+this.prefix+'KUEKeNParty_organs_value"> </div>'
+	'	    	</div>'
+	'	  </div>'
+	'	    <button id="'+this.prefix+'KUEKeNParty_updateAttributes" onclick="'+this.prefix+'KUEKeNPartyController._updateAttributes()">update KUEKeNParty attributes</button>'
+	'	  </div>'
+	'	  <div class="function_execution" id="'+this.prefix+'KUEKeNParty_contract_function_KUEKeNParty_KUEKeNParty">'
+	'	KUEKeNParty_KUEKeNParty:'
+	'		<button id="'+this.prefix+'KUEKeNPartyController.KUEKeNParty_KUEKeNParty" onclick="'+this.prefix+'KUEKeNPartyController.KUEKeNParty_KUEKeNParty()">execute KUEKeNParty_KUEKeNParty</button>'
+	'		<div class="function_result" id="'+this.prefix+'KUEKeNParty_KUEKeNParty_res"></div>'
+	'	  </div>'
+	'	  <div class="function_execution" id="'+this.prefix+'KUEKeNParty_contract_function_Party_Party">'
+	'	KUEKeNParty_Party:'
+	'		<button id="'+this.prefix+'KUEKeNPartyController.Party_Party" onclick="'+this.prefix+'KUEKeNPartyController.Party_Party()">execute KUEKeNParty_Party</button>'
+	'		<div class="function_result" id="'+this.prefix+'Party_Party_res"></div>'
+	'	  </div>'
+	'	  <div class="function_execution" id="'+this.prefix+'KUEKeNParty_contract_function_Manageable_addManager_address">'
+	'	KUEKeNParty_addManager:'
+	'		  <div class="function_parameter">_newManagerAddress<input type="text" id="'+this.prefix+'Manageable_addManager_address__newManagerAddress"></div>'
+	'		<button id="'+this.prefix+'KUEKeNPartyController.Manageable_addManager_address" onclick="'+this.prefix+'KUEKeNPartyController.Manageable_addManager_address()">execute KUEKeNParty_addManager</button>'
+	'		<div class="function_result" id="'+this.prefix+'Manageable_addManager_address_res"></div>'
+	'	  </div>'
+	'	  <div class="function_execution" id="'+this.prefix+'KUEKeNParty_contract_function_KUEKeNParty_boostrapParty_address_address">'
+	'	KUEKeNParty_boostrapParty:'
+	'		  <div class="function_parameter">fc<input type="text" id="'+this.prefix+'KUEKeNParty_boostrapParty_address_address_fc"></div>'
+	'		  <div class="function_parameter">br<input type="text" id="'+this.prefix+'KUEKeNParty_boostrapParty_address_address_br"></div>'
+	'		<button id="'+this.prefix+'KUEKeNPartyController.KUEKeNParty_boostrapParty_address_address" onclick="'+this.prefix+'KUEKeNPartyController.KUEKeNParty_boostrapParty_address_address()">execute KUEKeNParty_boostrapParty</button>'
+	'		<div class="function_result" id="'+this.prefix+'KUEKeNParty_boostrapParty_address_address_res"></div>'
+	'	  </div>'
+	'	  <div class="function_execution" id="'+this.prefix+'KUEKeNParty_contract_function_Party_createOrgan_string">'
+	'	KUEKeNParty_createOrgan:'
+	'		  <div class="function_parameter">organName<input type="text" id="'+this.prefix+'Party_createOrgan_string_organName"></div>'
+	'		<button id="'+this.prefix+'KUEKeNPartyController.Party_createOrgan_string" onclick="'+this.prefix+'KUEKeNPartyController.Party_createOrgan_string()">execute KUEKeNParty_createOrgan</button>'
+	'		<div class="function_result" id="'+this.prefix+'Party_createOrgan_string_res"></div>'
+	'	  </div>'
+	'	  <div class="function_execution" id="'+this.prefix+'KUEKeNParty_contract_function_Manageable_removeManager_address">'
+	'	KUEKeNParty_removeManager:'
+	'		  <div class="function_parameter">_managerAddress<input type="text" id="'+this.prefix+'Manageable_removeManager_address__managerAddress"></div>'
+	'		<button id="'+this.prefix+'KUEKeNPartyController.Manageable_removeManager_address" onclick="'+this.prefix+'KUEKeNPartyController.Manageable_removeManager_address()">execute KUEKeNParty_removeManager</button>'
+	'		<div class="function_result" id="'+this.prefix+'Manageable_removeManager_address_res"></div>'
+	'	  </div>'
+	'	  <div class="function_execution" id="'+this.prefix+'KUEKeNParty_contract_function_Manageable_isManager_address">'
+	'	KUEKeNParty_isManager:'
+	'		  <div class="function_parameter">_managerAddress<input type="text" id="'+this.prefix+'Manageable_isManager_address__managerAddress"></div>'
+	'		<button id="'+this.prefix+'KUEKeNPartyController.Manageable_isManager_address" onclick="'+this.prefix+'KUEKeNPartyController.Manageable_isManager_address()">execute KUEKeNParty_isManager</button>'
+	'		<div class="function_result" id="'+this.prefix+'Manageable_isManager_address_res"></div>'
+	'	  </div>'
+	'	'
+	'	</div>'
;
}

//default attributes
this.createAttributesGui=function() {
	return 	'    <div class="contract_attribute" id="'+this.prefix+'KUEKeNParty_contract_attribute_mangerCount"> mangerCount:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'KUEKeNParty_mangerCount_value"> </div>'
+	'	    </div>'
+	'	    <div class="contract_attribute" id="'+this.prefix+'KUEKeNParty_contract_attribute_constitutionHash"> constitutionHash:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'KUEKeNParty_constitutionHash_value"> </div>'
+	'	    </div>'
+	'	    <div class="contract_attribute" id="'+this.prefix+'KUEKeNParty_contract_attribute_organCount"> organCount:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'KUEKeNParty_organCount_value"> </div>'
+	'	    </div>'
+	'	    <div class="contract_attribute" id="'+this.prefix+'KUEKeNParty_contract_attribute_blogregistry"> blogregistry:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'KUEKeNParty_blogregistry_value"> </div>'
+	'	    </div>'
+	'	'
;
}



this.createKUEKeNParty_KUEKeNPartyGui=function() {
return 	'  <div class="function_execution" id="'+this.prefix+'KUEKeNParty_contract_function_KUEKeNParty_KUEKeNParty">'
+	'KUEKeNParty_KUEKeNParty:'
+	'	<button id="'+this.prefix+'KUEKeNPartyController.KUEKeNParty_KUEKeNParty" onclick="'+this.prefix+'KUEKeNPartyController.KUEKeNParty_KUEKeNParty()">execute KUEKeNParty_KUEKeNParty</button>'
+	'	<div class="function_result" id="'+this.prefix+'KUEKeNParty_KUEKeNParty_res"></div>'
+	'  </div>'
;
}
this.createParty_PartyGui=function() {
return 	'  <div class="function_execution" id="'+this.prefix+'KUEKeNParty_contract_function_Party_Party">'
+	'KUEKeNParty_Party:'
+	'	<button id="'+this.prefix+'KUEKeNPartyController.Party_Party" onclick="'+this.prefix+'KUEKeNPartyController.Party_Party()">execute KUEKeNParty_Party</button>'
+	'	<div class="function_result" id="'+this.prefix+'Party_Party_res"></div>'
+	'  </div>'
;
}
this.createManageable_addManager_addressGui=function() {
return 	'  <div class="function_execution" id="'+this.prefix+'KUEKeNParty_contract_function_Manageable_addManager_address">'
+	'KUEKeNParty_addManager:'
+	'	  <div class="function_parameter">_newManagerAddress<input type="text" id="'+this.prefix+'Manageable_addManager_address__newManagerAddress"></div>'
+	'	<button id="'+this.prefix+'KUEKeNPartyController.Manageable_addManager_address" onclick="'+this.prefix+'KUEKeNPartyController.Manageable_addManager_address()">execute KUEKeNParty_addManager</button>'
+	'	<div class="function_result" id="'+this.prefix+'Manageable_addManager_address_res"></div>'
+	'  </div>'
;
}
this.createKUEKeNParty_boostrapParty_address_addressGui=function() {
return 	'  <div class="function_execution" id="'+this.prefix+'KUEKeNParty_contract_function_KUEKeNParty_boostrapParty_address_address">'
+	'KUEKeNParty_boostrapParty:'
+	'	  <div class="function_parameter">fc<input type="text" id="'+this.prefix+'KUEKeNParty_boostrapParty_address_address_fc"></div>'
+	'	  <div class="function_parameter">br<input type="text" id="'+this.prefix+'KUEKeNParty_boostrapParty_address_address_br"></div>'
+	'	<button id="'+this.prefix+'KUEKeNPartyController.KUEKeNParty_boostrapParty_address_address" onclick="'+this.prefix+'KUEKeNPartyController.KUEKeNParty_boostrapParty_address_address()">execute KUEKeNParty_boostrapParty</button>'
+	'	<div class="function_result" id="'+this.prefix+'KUEKeNParty_boostrapParty_address_address_res"></div>'
+	'  </div>'
;
}
this.createParty_createOrgan_stringGui=function() {
return 	'  <div class="function_execution" id="'+this.prefix+'KUEKeNParty_contract_function_Party_createOrgan_string">'
+	'KUEKeNParty_createOrgan:'
+	'	  <div class="function_parameter">organName<input type="text" id="'+this.prefix+'Party_createOrgan_string_organName"></div>'
+	'	<button id="'+this.prefix+'KUEKeNPartyController.Party_createOrgan_string" onclick="'+this.prefix+'KUEKeNPartyController.Party_createOrgan_string()">execute KUEKeNParty_createOrgan</button>'
+	'	<div class="function_result" id="'+this.prefix+'Party_createOrgan_string_res"></div>'
+	'  </div>'
;
}
this.createManageable_removeManager_addressGui=function() {
return 	'  <div class="function_execution" id="'+this.prefix+'KUEKeNParty_contract_function_Manageable_removeManager_address">'
+	'KUEKeNParty_removeManager:'
+	'	  <div class="function_parameter">_managerAddress<input type="text" id="'+this.prefix+'Manageable_removeManager_address__managerAddress"></div>'
+	'	<button id="'+this.prefix+'KUEKeNPartyController.Manageable_removeManager_address" onclick="'+this.prefix+'KUEKeNPartyController.Manageable_removeManager_address()">execute KUEKeNParty_removeManager</button>'
+	'	<div class="function_result" id="'+this.prefix+'Manageable_removeManager_address_res"></div>'
+	'  </div>'
;
}
this.createManageable_isManager_addressGui=function() {
return 	'  <div class="function_execution" id="'+this.prefix+'KUEKeNParty_contract_function_Manageable_isManager_address">'
+	'KUEKeNParty_isManager:'
+	'	  <div class="function_parameter">_managerAddress<input type="text" id="'+this.prefix+'Manageable_isManager_address__managerAddress"></div>'
+	'	<button id="'+this.prefix+'KUEKeNPartyController.Manageable_isManager_address" onclick="'+this.prefix+'KUEKeNPartyController.Manageable_isManager_address()">execute KUEKeNParty_isManager</button>'
+	'	<div class="function_result" id="'+this.prefix+'Manageable_isManager_address_res"></div>'
+	'  </div>'
;
}


//print the contract div around
this.createKUEKeNPartySeletonGui=function(inner) {
	return 	'<!-- gui for KUEKeNParty_contract -->'
+	'	<div class="contract" id="'+this.prefix+'KUEKeNParty_contract">'
+ inner
+'</div>';
}


//eventguis

}//end guifactory
// script for KUEKeNParty gui controller
function KUEKeNPartyController() {

	this.KUEKeNParty_instance = undefined;
	this.prefix='';
	this.contractAddress = undefined; 
	var self = this;

// bind buttons
	this.bindGui=function() {
		var btn = document.getElementById(self.prefix+'KUEKeNPartyController.setAddress');
//	console.log('bind:' + self.prefix+' '+btn);
		if(btn!=undefined)		
			btn.onclick = this.setAddress;

		var btn = document.getElementById(self.prefix+'KUEKeNParty_updateAttributes');
//		console.log('bind update:' + self.prefix+' '+btn);
		if(btn!=undefined)
			btn.onclick = this._updateAttributes;
		var btn = document.getElementById(self.prefix+'KUEKeNPartyController.KUEKeNParty_KUEKeNParty');
//		console.log('bind:KUEKeNParty_KUEKeNParty ' + self.prefix+' '+btn+'  '+self.KUEKeNParty_KUEKeNParty);//KUEKeNParty_KUEKeNParty);
		if(btn!=undefined)
			btn.onclick = this.KUEKeNParty_KUEKeNParty;
		var btn = document.getElementById(self.prefix+'KUEKeNPartyController.Party_Party');
//		console.log('bind:KUEKeNParty_Party ' + self.prefix+' '+btn+'  '+self.Party_Party);//KUEKeNParty_Party);
		if(btn!=undefined)
			btn.onclick = this.Party_Party;
		var btn = document.getElementById(self.prefix+'KUEKeNPartyController.Manageable_addManager_address');
//		console.log('bind:KUEKeNParty_addManager ' + self.prefix+' '+btn+'  '+self.Manageable_addManager_address);//KUEKeNParty_addManager);
		if(btn!=undefined)
			btn.onclick = this.Manageable_addManager_address;
		var btn = document.getElementById(self.prefix+'KUEKeNPartyController.KUEKeNParty_boostrapParty_address_address');
//		console.log('bind:KUEKeNParty_boostrapParty ' + self.prefix+' '+btn+'  '+self.KUEKeNParty_boostrapParty_address_address);//KUEKeNParty_boostrapParty);
		if(btn!=undefined)
			btn.onclick = this.KUEKeNParty_boostrapParty_address_address;
		var btn = document.getElementById(self.prefix+'KUEKeNPartyController.Party_createOrgan_string');
//		console.log('bind:KUEKeNParty_createOrgan ' + self.prefix+' '+btn+'  '+self.Party_createOrgan_string);//KUEKeNParty_createOrgan);
		if(btn!=undefined)
			btn.onclick = this.Party_createOrgan_string;
		var btn = document.getElementById(self.prefix+'KUEKeNPartyController.Manageable_removeManager_address');
//		console.log('bind:KUEKeNParty_removeManager ' + self.prefix+' '+btn+'  '+self.Manageable_removeManager_address);//KUEKeNParty_removeManager);
		if(btn!=undefined)
			btn.onclick = this.Manageable_removeManager_address;
		var btn = document.getElementById(self.prefix+'KUEKeNPartyController.Manageable_isManager_address');
//		console.log('bind:KUEKeNParty_isManager ' + self.prefix+' '+btn+'  '+self.Manageable_isManager_address);//KUEKeNParty_isManager);
		if(btn!=undefined)
			btn.onclick = this.Manageable_isManager_address;
	}
	// set function
	this.setAddress=function() {
	var _address = document.getElementById(self.prefix+'KUEKeNParty_address');
//	console.log('setAddress:' + self.prefix+' '+_address);
	self.KUEKeNParty_instance = KUEKeNPartyContract.at(_address.value);
	self.contractAddress = _address.value;
	self._updateAttributes();
}
//update attributes
this._updateAttributes=function () {
if(this.KUEKeNParty_instance===null) return;
//console.log('updateAttributes:' + self.prefix);
// update attributes
	var mangerCount_res = self.KUEKeNParty_instance.mangerCount();
//	console.log('get:mangerCount' + self.prefix);

	if(mangerCount_res!=null)
		document.getElementById(self.prefix+'KUEKeNParty_mangerCount_value').innerText = mangerCount_res;
	var constitutionHash_res = self.KUEKeNParty_instance.constitutionHash();
//	console.log('get:constitutionHash' + self.prefix);

	if(constitutionHash_res!=null)
		document.getElementById(self.prefix+'KUEKeNParty_constitutionHash_value').innerText = constitutionHash_res;
	var organCount_res = self.KUEKeNParty_instance.organCount();
//	console.log('get:organCount' + self.prefix);

	if(organCount_res!=null)
		document.getElementById(self.prefix+'KUEKeNParty_organCount_value').innerText = organCount_res;
	var blogregistry_res = self.KUEKeNParty_instance.blogregistry();
//	console.log('get:blogregistry' + self.prefix);

	if(blogregistry_res!=null)
		document.getElementById(self.prefix+'KUEKeNParty_blogregistry_value').innerText = blogregistry_res;
//console.log('getStruct:managers' + self.prefix);
	var _key = document.getElementById(self.prefix+'KUEKeNParty_contract_attribute_managers_input').value;
	var managers_res = self.KUEKeNParty_instance.managers(_key);
//console.log('result:managers' + managers_res+' key: '+_key);
	if(managers_res!=null){
		document.getElementById(self.prefix+'KUEKeNParty_managers_value').innerText = managers_res;
	}
	var _key = document.getElementById(self.prefix+'KUEKeNParty_contract_attribute_organs_input').value;
	var organs_res = self.KUEKeNParty_instance.organs(_key);
	if(organs_res!=null){
		document.getElementById(self.prefix+'KUEKeNParty_organs_value').innerText = organs_res;
	}
}

//call functions
//function KUEKeNParty_KUEKeNParty
this.KUEKeNParty_KUEKeNParty=function() {
//console.log('function:KUEKeNParty' + self.prefix);
//	console.log(':' +self.KUEKeNParty_instance+':');
	var res = self.KUEKeNParty_instance.KUEKeNParty();
}
//function KUEKeNParty_Party
this.Party_Party=function() {
//console.log('function:Party' + self.prefix);
//	console.log(':' +self.KUEKeNParty_instance+':');
	var res = self.KUEKeNParty_instance.Party();
}
//function KUEKeNParty_canAccess
this.Manageable_canAccess=function() {
//console.log('function:canAccess' + self.prefix);
//	console.log(':' +self.KUEKeNParty_instance+':');
	var res = self.KUEKeNParty_instance.canAccess();
	if(res!=null)
		document.getElementById(self.prefix+'Manageable_canAccess_res').innerText = res;
}
//function KUEKeNParty_addManager
this.Manageable_addManager_address=function() {
//console.log('function:addManager' + self.prefix);
	var e = document.getElementById(self.prefix+'Manageable_addManager_address__newManagerAddress');
//	console.log(':' + self.prefix+'Manageable_addManager_address__newManagerAddress'+": "+e);
	var param__newManagerAddress = e.value;
//	console.log(':' +self.KUEKeNParty_instance+':');
	var res = self.KUEKeNParty_instance.addManager(param__newManagerAddress);
}
//function KUEKeNParty_boostrapParty
this.KUEKeNParty_boostrapParty_address_address=function() {
//console.log('function:boostrapParty' + self.prefix);
	var e = document.getElementById(self.prefix+'KUEKeNParty_boostrapParty_address_address_fc');
//	console.log(':' + self.prefix+'KUEKeNParty_boostrapParty_address_address_fc'+": "+e);
	var param_fc = e.value;
	var e = document.getElementById(self.prefix+'KUEKeNParty_boostrapParty_address_address_br');
//	console.log(':' + self.prefix+'KUEKeNParty_boostrapParty_address_address_br'+": "+e);
	var param_br = e.value;
//	console.log(':' +self.KUEKeNParty_instance+':');
	var res = self.KUEKeNParty_instance.boostrapParty(param_fc, param_br);
}
//function KUEKeNParty_createOrgan
this.Party_createOrgan_string=function() {
//console.log('function:createOrgan' + self.prefix);
	var e = document.getElementById(self.prefix+'Party_createOrgan_string_organName');
//	console.log(':' + self.prefix+'Party_createOrgan_string_organName'+": "+e);
	var param_organName = e.value;
//	console.log(':' +self.KUEKeNParty_instance+':');
	var res = self.KUEKeNParty_instance.createOrgan(param_organName);
}
//function KUEKeNParty_removeManager
this.Manageable_removeManager_address=function() {
//console.log('function:removeManager' + self.prefix);
	var e = document.getElementById(self.prefix+'Manageable_removeManager_address__managerAddress');
//	console.log(':' + self.prefix+'Manageable_removeManager_address__managerAddress'+": "+e);
	var param__managerAddress = e.value;
//	console.log(':' +self.KUEKeNParty_instance+':');
	var res = self.KUEKeNParty_instance.removeManager(param__managerAddress);
}
//function KUEKeNParty_isManager
this.Manageable_isManager_address=function() {
//console.log('function:isManager' + self.prefix);
	var e = document.getElementById(self.prefix+'Manageable_isManager_address__managerAddress');
//	console.log(':' + self.prefix+'Manageable_isManager_address__managerAddress'+": "+e);
	var param__managerAddress = e.value;
//	console.log(':' +self.KUEKeNParty_instance+':');
	var res = self.KUEKeNParty_instance.isManager(param__managerAddress);
	if(res!=null)
		document.getElementById(self.prefix+'Manageable_isManager_address_res').innerText = res;
}

//delegated calls

}// end controller	


// script for KUEKeNParty
function KUEKeNPartyModel(prefix) {
	this.prefix = prefix;
	this.guiFactory = new KUEKeNPartyGuiFactory();
	this.controller = new KUEKeNPartyController();
	this.guiFactory.prefix = prefix;
	this.controller.prefix = prefix;
}
KUEKeNPartyModel.prototype.create=function () {
	this.guiFactory.placeDefaultGui();
	this.controller._updateAttributes();
}


//class as GlueCode
//uses prefix + 'GuiContainer'
function KUEKeNPartyManager(prefix,contract) {
	this.prefix = prefix;
	var self = this;
	this.c = new KUEKeNPartyController();
	this.c.prefix=prefix;
	this.c.KUEKeNParty_instance=contract;
	this.c.contractAddress = contract.address;
	this.g = new KUEKeNPartyGuiFactory();
	this.g.prefix = prefix;

	this.addGui = function() {
		var e = document.getElementById(this.prefix + 'GuiContainer');
//console.log('addGui:' + this.prefix+ 'GuiContainer'+e);
		var elemDiv = document.createElement('div');
		elemDiv.id= this.prefix +'KUEKeNParty_gui';
		e.appendChild(elemDiv);
		this.g.placeDefaultGui();
		document.getElementById(this.prefix+'KUEKeNParty_address').value = this.c.contractAddress;
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
		return this.c.KUEKeNParty_instance;
	}

}// end of manager

function KUEKeNPartyGuiMananger(guiId){
	this.prefix = guiId;
	this.managers=new Array();	//[];		
	
	this.addManager = function(contract) {
//console.log('addManager:'+contract);
		var m = new KUEKeNPartyManager(contract.address,contract);
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
			elemDiv.id= this.managers[i].prefix + 'GuiContainer';//'KUEKeNParty_gui';
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

//gui factory Conference
function ConferenceGuiFactory() {
	this.prefix='';
	
// default Gui
this.placeDefaultGui=function() {
//	console.log(this.prefix+' place gui');
	document.getElementById(this.prefix+'Conference_gui').innerHTML = this.createDefaultGui();
}
// default Gui
this.createDefaultGui=function() {
	return 	'<!-- gui for Conference_contract -->'
+	'	<div class="contract" id="'+this.prefix+'Conference_contract">'
+	'	Conference:'
+	'	  <input type="text" id="'+this.prefix+'Conference_address"> <button id="'+this.prefix+'ConferenceController.setAddress" onclick="'+this.prefix+'ConferenceController.setAddress()">change Conference Address</button>'
+	'	  <div class="contract_attributes" id="'+this.prefix+'Conference_contract_attributes"> attributes:'
+	'	    <div class="contract_attribute" id="'+this.prefix+'Conference_contract_attribute_memberRegistry"> memberRegistry:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'Conference_memberRegistry_value"> </div>'
+	'	    </div>'
+	'	    <div class="contract_attribute" id="'+this.prefix+'Conference_contract_attribute_accreditatedMembers"> accreditatedMembers:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'Conference_accreditatedMembers_value"> </div>'
+	'	    </div>'
+	'	    <div class="contract_attribute" id="'+this.prefix+'Conference_contract_attribute_mangerCount"> mangerCount:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'Conference_mangerCount_value"> </div>'
+	'	    </div>'
+	'	    <div class="contract_attribute" id="'+this.prefix+'Conference_contract_attribute_organName"> organName:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'Conference_organName_value"> </div>'
+	'	    </div>'
+	'	    <div class="contract_attribute" id="'+this.prefix+'Conference_contract_attribute_date"> date:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'Conference_date_value"> </div>'
+	'	    </div>'
+	'	    <div class="contract_attribute" id="'+this.prefix+'Conference_contract_attribute_lastFunctionId"> lastFunctionId:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'Conference_lastFunctionId_value"> </div>'
+	'	    </div>'
+	'	    <div class="contract_attribute" id="'+this.prefix+'Conference_contract_attribute_blogRegistry"> blogRegistry:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'Conference_blogRegistry_value"> </div>'
+	'	    </div>'
+	'	    <div class="contract_attribute" id="'+this.prefix+'Conference_contract_attribute_isActive"> isActive:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'Conference_isActive_value"> </div>'
+	'	    </div>'
+	'	    <div class="contract_attribute" id="'+this.prefix+'Conference_contract_attribute_ballotCount"> ballotCount:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'Conference_ballotCount_value"> </div>'
+	'	    </div>'
+	'	'
+	'	<div class="Value_Mapping" id="'+this.prefix+'Conference_contract_attribute_managers">mapping  managers:'
+	'			<input type="text" id="'+this.prefix+'Conference_contract_attribute_managers_input">(address)'
+	'	    	<div class="Mapping_value" id="'+this.prefix+'Conference_contract_attribute_address"> bool:'
+	'	      		<div class="contract_attribute_value" id="'+this.prefix+'Conference_managers_value"> </div>'
+	'	    	</div>'
+	'	  </div>'
+	'	<!--struct -->'
+	'	<div class="Struct_Mapping" id="'+this.prefix+'Struc_Conference_contract_attribute_organFunctions">struc mapping  organFunctions:'
+	'			<input type="number" id="'+this.prefix+'Conference_contract_attribute_organFunctions_input">(uint)'
+	'	    	<div class="Struct_attribute" id="'+this.prefix+'Conference_contract_attribute_organFunctions_currentMember"> currentMember:'
+	'	      		<div class="Struct_attribute_value" id="'+this.prefix+'Conference_organFunctions_currentMember_value"> </div>'
+	'	    	</div>'
+	'	    	<div class="Struct_attribute" id="'+this.prefix+'Conference_contract_attribute_organFunctions_functionName"> functionName:'
+	'	      		<div class="Struct_attribute_value" id="'+this.prefix+'Conference_organFunctions_functionName_value"> </div>'
+	'	    	</div>'
+	'	    	<div class="Struct_attribute" id="'+this.prefix+'Conference_contract_attribute_organFunctions_id"> id:'
+	'	      		<div class="Struct_attribute_value" id="'+this.prefix+'Conference_organFunctions_id_value"> </div>'
+	'	    	</div>'
+	'	    	<div class="Struct_attribute" id="'+this.prefix+'Conference_contract_attribute_organFunctions_constitutionHash"> constitutionHash:'
+	'	      		<div class="Struct_attribute_value" id="'+this.prefix+'Conference_organFunctions_constitutionHash_value"> </div>'
+	'	    	</div>'
+	'	    	<div class="Struct_attribute" id="'+this.prefix+'Conference_contract_attribute_organFunctions_lastMemberChanged"> lastMemberChanged:'
+	'	      		<div class="Struct_attribute_value" id="'+this.prefix+'Conference_organFunctions_lastMemberChanged_value"> </div>'
+	'	    	</div>'
+	'	    	<div class="Struct_attribute" id="'+this.prefix+'Conference_contract_attribute_organFunctions_lastConstitutionHashChanged"> lastConstitutionHashChanged:'
+	'	      		<div class="Struct_attribute_value" id="'+this.prefix+'Conference_organFunctions_lastConstitutionHashChanged_value"> </div>'
+	'	    	</div>'
+	'	    	<div class="Struct_attribute" id="'+this.prefix+'Conference_contract_attribute_organFunctions_publisher"> publisher:'
+	'	      		<div class="Struct_attribute_value" id="'+this.prefix+'Conference_organFunctions_publisher_value"> </div>'
+	'	    	</div>'
+	'	  </div>'
+	'	    <button id="'+this.prefix+'Conference_updateAttributes" onclick="'+this.prefix+'ConferenceController._updateAttributes()">update Conference attributes</button>'
+	'	  </div>'
+	'	  <div class="function_execution" id="'+this.prefix+'Conference_contract_function_Conference_accreditationMember_address">'
+	'	Conference_accreditationMember:'
+	'		  <div class="function_parameter">_address<input type="text" id="'+this.prefix+'Conference_accreditationMember_address__address"></div>'
+	'		<button id="'+this.prefix+'ConferenceController.Conference_accreditationMember_address" onclick="'+this.prefix+'ConferenceController.Conference_accreditationMember_address()">execute Conference_accreditationMember</button>'
+	'		<div class="function_result" id="'+this.prefix+'Conference_accreditationMember_address_res"></div>'
+	'	  </div>'
+	'	  <div class="function_execution" id="'+this.prefix+'Conference_contract_function_Organ_changeMember_uint_address">'
+	'	Conference_changeMember:'
+	'		  <div class="function_parameter">_id<input type="number" id="'+this.prefix+'Organ_changeMember_uint_address__id"></div>'
+	'		  <div class="function_parameter">_address<input type="text" id="'+this.prefix+'Organ_changeMember_uint_address__address"></div>'
+	'		<button id="'+this.prefix+'ConferenceController.Organ_changeMember_uint_address" onclick="'+this.prefix+'ConferenceController.Organ_changeMember_uint_address()">execute Conference_changeMember</button>'
+	'		<div class="function_result" id="'+this.prefix+'Organ_changeMember_uint_address_res"></div>'
+	'	  </div>'
+	'	  <div class="function_execution" id="'+this.prefix+'Conference_contract_function_Manageable_addManager_address">'
+	'	Conference_addManager:'
+	'		  <div class="function_parameter">_newManagerAddress<input type="text" id="'+this.prefix+'Manageable_addManager_address__newManagerAddress"></div>'
+	'		<button id="'+this.prefix+'ConferenceController.Manageable_addManager_address" onclick="'+this.prefix+'ConferenceController.Manageable_addManager_address()">execute Conference_addManager</button>'
+	'		<div class="function_result" id="'+this.prefix+'Manageable_addManager_address_res"></div>'
+	'	  </div>'
+	'	  <div class="function_execution" id="'+this.prefix+'Conference_contract_function_Organ_createFunction_string_string">'
+	'	Conference_createFunction:'
+	'		  <div class="function_parameter">_functionName<input type="text" id="'+this.prefix+'Organ_createFunction_string_string__functionName"></div>'
+	'		  <div class="function_parameter">_constittiutionHash<input type="text" id="'+this.prefix+'Organ_createFunction_string_string__constittiutionHash"></div>'
+	'		<button id="'+this.prefix+'ConferenceController.Organ_createFunction_string_string" onclick="'+this.prefix+'ConferenceController.Organ_createFunction_string_string()">execute Conference_createFunction</button>'
+	'		<div class="function_result" id="'+this.prefix+'Organ_createFunction_string_string_res"></div>'
+	'	  </div>'
+	'	  <div class="function_execution" id="'+this.prefix+'Conference_contract_function_Manageable_removeManager_address">'
+	'	Conference_removeManager:'
+	'		  <div class="function_parameter">_managerAddress<input type="text" id="'+this.prefix+'Manageable_removeManager_address__managerAddress"></div>'
+	'		<button id="'+this.prefix+'ConferenceController.Manageable_removeManager_address" onclick="'+this.prefix+'ConferenceController.Manageable_removeManager_address()">execute Conference_removeManager</button>'
+	'		<div class="function_result" id="'+this.prefix+'Manageable_removeManager_address_res"></div>'
+	'	  </div>'
+	'	  <div class="function_execution" id="'+this.prefix+'Conference_contract_function_Organ_initalizeOrgan">'
+	'	Conference_initalizeOrgan:'
+	'		<button id="'+this.prefix+'ConferenceController.Organ_initalizeOrgan" onclick="'+this.prefix+'ConferenceController.Organ_initalizeOrgan()">execute Conference_initalizeOrgan</button>'
+	'		<div class="function_result" id="'+this.prefix+'Organ_initalizeOrgan_res"></div>'
+	'	  </div>'
+	'	  <div class="function_execution" id="'+this.prefix+'Conference_contract_function_Manageable_isManager_address">'
+	'	Conference_isManager:'
+	'		  <div class="function_parameter">_managerAddress<input type="text" id="'+this.prefix+'Manageable_isManager_address__managerAddress"></div>'
+	'		<button id="'+this.prefix+'ConferenceController.Manageable_isManager_address" onclick="'+this.prefix+'ConferenceController.Manageable_isManager_address()">execute Conference_isManager</button>'
+	'		<div class="function_result" id="'+this.prefix+'Manageable_isManager_address_res"></div>'
+	'	  </div>'
+	'	  <div class="function_execution" id="'+this.prefix+'Conference_contract_function_Organ_publishFunctionMessage_uint_string_string_string">'
+	'	Conference_publishFunctionMessage:'
+	'		  <div class="function_parameter">id<input type="number" id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_id"></div>'
+	'		  <div class="function_parameter">message<input type="text" id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_message"></div>'
+	'		  <div class="function_parameter">hash<input type="text" id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_hash"></div>'
+	'		  <div class="function_parameter">er<input type="text" id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_er"></div>'
+	'		<button id="'+this.prefix+'ConferenceController.Organ_publishFunctionMessage_uint_string_string_string" onclick="'+this.prefix+'ConferenceController.Organ_publishFunctionMessage_uint_string_string_string()">execute Conference_publishFunctionMessage</button>'
+	'		<div class="function_result" id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_res"></div>'
+	'	  </div>'
+	'	  <div class="function_execution" id="'+this.prefix+'Conference_contract_function_Organ_createBallot_string_bytes32">'
+	'	Conference_createBallot:'
+	'		  <div class="function_parameter">name<input type="text" id="'+this.prefix+'Organ_createBallot_string_bytes32_name"></div>'
+	'		  <div class="function_parameter">proposalNames<input type="text" id="'+this.prefix+'Organ_createBallot_string_bytes32_proposalNames"></div>'
+	'		<button id="'+this.prefix+'ConferenceController.Organ_createBallot_string_bytes32" onclick="'+this.prefix+'ConferenceController.Organ_createBallot_string_bytes32()">execute Conference_createBallot</button>'
+	'		<div class="function_result" id="'+this.prefix+'Organ_createBallot_string_bytes32_res"></div>'
+	'	  </div>'
+	'	  <div class="function_execution" id="'+this.prefix+'Conference_contract_function_Organ_getFunctionBlogAddress_uint">'
+	'	Conference_getFunctionBlogAddress:'
+	'		  <div class="function_parameter">id<input type="number" id="'+this.prefix+'Organ_getFunctionBlogAddress_uint_id"></div>'
+	'		<button id="'+this.prefix+'ConferenceController.Organ_getFunctionBlogAddress_uint" onclick="'+this.prefix+'ConferenceController.Organ_getFunctionBlogAddress_uint()">execute Conference_getFunctionBlogAddress</button>'
+	'		<div class="function_result" id="'+this.prefix+'Organ_getFunctionBlogAddress_uint_res"></div>'
+	'	  </div>'
+	'	  <div class="function_execution" id="'+this.prefix+'Conference_contract_function_Organ_getLastBallot">'
+	'	Conference_getLastBallot:'
+	'		<button id="'+this.prefix+'ConferenceController.Organ_getLastBallot" onclick="'+this.prefix+'ConferenceController.Organ_getLastBallot()">execute Conference_getLastBallot</button>'
+	'		<div class="function_result" id="'+this.prefix+'Organ_getLastBallot_res"></div>'
+	'	  </div>'
+	'	  <div class="function_execution" id="'+this.prefix+'Conference_contract_function_Organ_getOrganBlog">'
+	'	Conference_getOrganBlog:'
+	'		<button id="'+this.prefix+'ConferenceController.Organ_getOrganBlog" onclick="'+this.prefix+'ConferenceController.Organ_getOrganBlog()">execute Conference_getOrganBlog</button>'
+	'		<div class="function_result" id="'+this.prefix+'Organ_getOrganBlog_res"></div>'
+	'	  </div>'
+	'	'
+	'	</div>'
;
}

//default attributes
this.createAttributesGui=function() {
	return 	'    <div class="contract_attribute" id="'+this.prefix+'Conference_contract_attribute_memberRegistry"> memberRegistry:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'Conference_memberRegistry_value"> </div>'
+	'	    </div>'
+	'	    <div class="contract_attribute" id="'+this.prefix+'Conference_contract_attribute_accreditatedMembers"> accreditatedMembers:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'Conference_accreditatedMembers_value"> </div>'
+	'	    </div>'
+	'	    <div class="contract_attribute" id="'+this.prefix+'Conference_contract_attribute_mangerCount"> mangerCount:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'Conference_mangerCount_value"> </div>'
+	'	    </div>'
+	'	    <div class="contract_attribute" id="'+this.prefix+'Conference_contract_attribute_organName"> organName:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'Conference_organName_value"> </div>'
+	'	    </div>'
+	'	    <div class="contract_attribute" id="'+this.prefix+'Conference_contract_attribute_date"> date:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'Conference_date_value"> </div>'
+	'	    </div>'
+	'	    <div class="contract_attribute" id="'+this.prefix+'Conference_contract_attribute_lastFunctionId"> lastFunctionId:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'Conference_lastFunctionId_value"> </div>'
+	'	    </div>'
+	'	    <div class="contract_attribute" id="'+this.prefix+'Conference_contract_attribute_blogRegistry"> blogRegistry:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'Conference_blogRegistry_value"> </div>'
+	'	    </div>'
+	'	    <div class="contract_attribute" id="'+this.prefix+'Conference_contract_attribute_isActive"> isActive:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'Conference_isActive_value"> </div>'
+	'	    </div>'
+	'	    <div class="contract_attribute" id="'+this.prefix+'Conference_contract_attribute_ballotCount"> ballotCount:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'Conference_ballotCount_value"> </div>'
+	'	    </div>'
+	'	'
;
}



this.createConference_accreditationMember_addressGui=function() {
return 	'  <div class="function_execution" id="'+this.prefix+'Conference_contract_function_Conference_accreditationMember_address">'
+	'Conference_accreditationMember:'
+	'	  <div class="function_parameter">_address<input type="text" id="'+this.prefix+'Conference_accreditationMember_address__address"></div>'
+	'	<button id="'+this.prefix+'ConferenceController.Conference_accreditationMember_address" onclick="'+this.prefix+'ConferenceController.Conference_accreditationMember_address()">execute Conference_accreditationMember</button>'
+	'	<div class="function_result" id="'+this.prefix+'Conference_accreditationMember_address_res"></div>'
+	'  </div>'
;
}
this.createOrgan_changeMember_uint_addressGui=function() {
return 	'  <div class="function_execution" id="'+this.prefix+'Conference_contract_function_Organ_changeMember_uint_address">'
+	'Conference_changeMember:'
+	'	  <div class="function_parameter">_id<input type="number" id="'+this.prefix+'Organ_changeMember_uint_address__id"></div>'
+	'	  <div class="function_parameter">_address<input type="text" id="'+this.prefix+'Organ_changeMember_uint_address__address"></div>'
+	'	<button id="'+this.prefix+'ConferenceController.Organ_changeMember_uint_address" onclick="'+this.prefix+'ConferenceController.Organ_changeMember_uint_address()">execute Conference_changeMember</button>'
+	'	<div class="function_result" id="'+this.prefix+'Organ_changeMember_uint_address_res"></div>'
+	'  </div>'
;
}
this.createManageable_addManager_addressGui=function() {
return 	'  <div class="function_execution" id="'+this.prefix+'Conference_contract_function_Manageable_addManager_address">'
+	'Conference_addManager:'
+	'	  <div class="function_parameter">_newManagerAddress<input type="text" id="'+this.prefix+'Manageable_addManager_address__newManagerAddress"></div>'
+	'	<button id="'+this.prefix+'ConferenceController.Manageable_addManager_address" onclick="'+this.prefix+'ConferenceController.Manageable_addManager_address()">execute Conference_addManager</button>'
+	'	<div class="function_result" id="'+this.prefix+'Manageable_addManager_address_res"></div>'
+	'  </div>'
;
}
this.createOrgan_createFunction_string_stringGui=function() {
return 	'  <div class="function_execution" id="'+this.prefix+'Conference_contract_function_Organ_createFunction_string_string">'
+	'Conference_createFunction:'
+	'	  <div class="function_parameter">_functionName<input type="text" id="'+this.prefix+'Organ_createFunction_string_string__functionName"></div>'
+	'	  <div class="function_parameter">_constittiutionHash<input type="text" id="'+this.prefix+'Organ_createFunction_string_string__constittiutionHash"></div>'
+	'	<button id="'+this.prefix+'ConferenceController.Organ_createFunction_string_string" onclick="'+this.prefix+'ConferenceController.Organ_createFunction_string_string()">execute Conference_createFunction</button>'
+	'	<div class="function_result" id="'+this.prefix+'Organ_createFunction_string_string_res"></div>'
+	'  </div>'
;
}
this.createManageable_removeManager_addressGui=function() {
return 	'  <div class="function_execution" id="'+this.prefix+'Conference_contract_function_Manageable_removeManager_address">'
+	'Conference_removeManager:'
+	'	  <div class="function_parameter">_managerAddress<input type="text" id="'+this.prefix+'Manageable_removeManager_address__managerAddress"></div>'
+	'	<button id="'+this.prefix+'ConferenceController.Manageable_removeManager_address" onclick="'+this.prefix+'ConferenceController.Manageable_removeManager_address()">execute Conference_removeManager</button>'
+	'	<div class="function_result" id="'+this.prefix+'Manageable_removeManager_address_res"></div>'
+	'  </div>'
;
}
this.createOrgan_initalizeOrganGui=function() {
return 	'  <div class="function_execution" id="'+this.prefix+'Conference_contract_function_Organ_initalizeOrgan">'
+	'Conference_initalizeOrgan:'
+	'	<button id="'+this.prefix+'ConferenceController.Organ_initalizeOrgan" onclick="'+this.prefix+'ConferenceController.Organ_initalizeOrgan()">execute Conference_initalizeOrgan</button>'
+	'	<div class="function_result" id="'+this.prefix+'Organ_initalizeOrgan_res"></div>'
+	'  </div>'
;
}
this.createManageable_isManager_addressGui=function() {
return 	'  <div class="function_execution" id="'+this.prefix+'Conference_contract_function_Manageable_isManager_address">'
+	'Conference_isManager:'
+	'	  <div class="function_parameter">_managerAddress<input type="text" id="'+this.prefix+'Manageable_isManager_address__managerAddress"></div>'
+	'	<button id="'+this.prefix+'ConferenceController.Manageable_isManager_address" onclick="'+this.prefix+'ConferenceController.Manageable_isManager_address()">execute Conference_isManager</button>'
+	'	<div class="function_result" id="'+this.prefix+'Manageable_isManager_address_res"></div>'
+	'  </div>'
;
}
this.createOrgan_publishFunctionMessage_uint_string_string_stringGui=function() {
return 	'  <div class="function_execution" id="'+this.prefix+'Conference_contract_function_Organ_publishFunctionMessage_uint_string_string_string">'
+	'Conference_publishFunctionMessage:'
+	'	  <div class="function_parameter">id<input type="number" id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_id"></div>'
+	'	  <div class="function_parameter">message<input type="text" id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_message"></div>'
+	'	  <div class="function_parameter">hash<input type="text" id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_hash"></div>'
+	'	  <div class="function_parameter">er<input type="text" id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_er"></div>'
+	'	<button id="'+this.prefix+'ConferenceController.Organ_publishFunctionMessage_uint_string_string_string" onclick="'+this.prefix+'ConferenceController.Organ_publishFunctionMessage_uint_string_string_string()">execute Conference_publishFunctionMessage</button>'
+	'	<div class="function_result" id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_res"></div>'
+	'  </div>'
;
}
this.createOrgan_createBallot_string_bytes32Gui=function() {
return 	'  <div class="function_execution" id="'+this.prefix+'Conference_contract_function_Organ_createBallot_string_bytes32">'
+	'Conference_createBallot:'
+	'	  <div class="function_parameter">name<input type="text" id="'+this.prefix+'Organ_createBallot_string_bytes32_name"></div>'
+	'	  <div class="function_parameter">proposalNames<input type="text" id="'+this.prefix+'Organ_createBallot_string_bytes32_proposalNames"></div>'
+	'	<button id="'+this.prefix+'ConferenceController.Organ_createBallot_string_bytes32" onclick="'+this.prefix+'ConferenceController.Organ_createBallot_string_bytes32()">execute Conference_createBallot</button>'
+	'	<div class="function_result" id="'+this.prefix+'Organ_createBallot_string_bytes32_res"></div>'
+	'  </div>'
;
}
this.createOrgan_getFunctionBlogAddress_uintGui=function() {
return 	'  <div class="function_execution" id="'+this.prefix+'Conference_contract_function_Organ_getFunctionBlogAddress_uint">'
+	'Conference_getFunctionBlogAddress:'
+	'	  <div class="function_parameter">id<input type="number" id="'+this.prefix+'Organ_getFunctionBlogAddress_uint_id"></div>'
+	'	<button id="'+this.prefix+'ConferenceController.Organ_getFunctionBlogAddress_uint" onclick="'+this.prefix+'ConferenceController.Organ_getFunctionBlogAddress_uint()">execute Conference_getFunctionBlogAddress</button>'
+	'	<div class="function_result" id="'+this.prefix+'Organ_getFunctionBlogAddress_uint_res"></div>'
+	'  </div>'
;
}
this.createOrgan_getLastBallotGui=function() {
return 	'  <div class="function_execution" id="'+this.prefix+'Conference_contract_function_Organ_getLastBallot">'
+	'Conference_getLastBallot:'
+	'	<button id="'+this.prefix+'ConferenceController.Organ_getLastBallot" onclick="'+this.prefix+'ConferenceController.Organ_getLastBallot()">execute Conference_getLastBallot</button>'
+	'	<div class="function_result" id="'+this.prefix+'Organ_getLastBallot_res"></div>'
+	'  </div>'
;
}
this.createOrgan_getOrganBlogGui=function() {
return 	'  <div class="function_execution" id="'+this.prefix+'Conference_contract_function_Organ_getOrganBlog">'
+	'Conference_getOrganBlog:'
+	'	<button id="'+this.prefix+'ConferenceController.Organ_getOrganBlog" onclick="'+this.prefix+'ConferenceController.Organ_getOrganBlog()">execute Conference_getOrganBlog</button>'
+	'	<div class="function_result" id="'+this.prefix+'Organ_getOrganBlog_res"></div>'
+	'  </div>'
;
}

this.createorganFunctionsStructGui=function() {
return 	'<!--struct -->'
+	'<div class="Struct_Mapping" id="'+this.prefix+'Struc_Conference_contract_attribute_organFunctions">struc mapping  organFunctions:'
+	'		<input type="number" id="'+this.prefix+'Conference_contract_attribute_organFunctions_input">(uint)'
+	'    	<div class="Struct_attribute" id="'+this.prefix+'Conference_contract_attribute_organFunctions_currentMember"> currentMember:'
+	'      		<div class="Struct_attribute_value" id="'+this.prefix+'Conference_organFunctions_currentMember_value"> </div>'
+	'    	</div>'
+	'    	<div class="Struct_attribute" id="'+this.prefix+'Conference_contract_attribute_organFunctions_functionName"> functionName:'
+	'      		<div class="Struct_attribute_value" id="'+this.prefix+'Conference_organFunctions_functionName_value"> </div>'
+	'    	</div>'
+	'    	<div class="Struct_attribute" id="'+this.prefix+'Conference_contract_attribute_organFunctions_id"> id:'
+	'      		<div class="Struct_attribute_value" id="'+this.prefix+'Conference_organFunctions_id_value"> </div>'
+	'    	</div>'
+	'    	<div class="Struct_attribute" id="'+this.prefix+'Conference_contract_attribute_organFunctions_constitutionHash"> constitutionHash:'
+	'      		<div class="Struct_attribute_value" id="'+this.prefix+'Conference_organFunctions_constitutionHash_value"> </div>'
+	'    	</div>'
+	'    	<div class="Struct_attribute" id="'+this.prefix+'Conference_contract_attribute_organFunctions_lastMemberChanged"> lastMemberChanged:'
+	'      		<div class="Struct_attribute_value" id="'+this.prefix+'Conference_organFunctions_lastMemberChanged_value"> </div>'
+	'    	</div>'
+	'    	<div class="Struct_attribute" id="'+this.prefix+'Conference_contract_attribute_organFunctions_lastConstitutionHashChanged"> lastConstitutionHashChanged:'
+	'      		<div class="Struct_attribute_value" id="'+this.prefix+'Conference_organFunctions_lastConstitutionHashChanged_value"> </div>'
+	'    	</div>'
+	'    	<div class="Struct_attribute" id="'+this.prefix+'Conference_contract_attribute_organFunctions_publisher"> publisher:'
+	'      		<div class="Struct_attribute_value" id="'+this.prefix+'Conference_organFunctions_publisher_value"> </div>'
+	'    	</div>'
+	'  </div>'
;
}


//print the contract div around
this.createConferenceSeletonGui=function(inner) {
	return 	'<!-- gui for Conference_contract -->'
+	'	<div class="contract" id="'+this.prefix+'Conference_contract">'
+ inner
+'</div>';
}


//eventguis
this.createMemberAccreditatedLogDataGui = function(prefix, blockHash, blockNumber,
memberId,memberName,memberAddress) {
		return '<ul class="dapp-account-list"><li > '
        +'<a class="dapp-identicon dapp-small" style="background-image: url(identiconimage.png)"></a>'
		+'<span>'+prefix+' ('+blockNumber+')</span>'
        +'<span>'+memberId+'</span>'
        +'<span>'+memberName+'</span>'
        +'<span>'+memberAddress+'</span>'
        +' </li>'
        ;
}

}//end guifactory
// script for Conference gui controller
function ConferenceController() {

	this.Conference_instance = undefined;
	this.prefix='';
	this.contractAddress = undefined; 
	var self = this;

// bind buttons
	this.bindGui=function() {
		var btn = document.getElementById(self.prefix+'ConferenceController.setAddress');
//	console.log('bind:' + self.prefix+' '+btn);
		if(btn!=undefined)		
			btn.onclick = this.setAddress;

		var btn = document.getElementById(self.prefix+'Conference_updateAttributes');
//		console.log('bind update:' + self.prefix+' '+btn);
		if(btn!=undefined)
			btn.onclick = this._updateAttributes;
		var btn = document.getElementById(self.prefix+'ConferenceController.Conference_accreditationMember_address');
//		console.log('bind:Conference_accreditationMember ' + self.prefix+' '+btn+'  '+self.Conference_accreditationMember_address);//Conference_accreditationMember);
		if(btn!=undefined)
			btn.onclick = this.Conference_accreditationMember_address;
		var btn = document.getElementById(self.prefix+'ConferenceController.Organ_changeMember_uint_address');
//		console.log('bind:Conference_changeMember ' + self.prefix+' '+btn+'  '+self.Organ_changeMember_uint_address);//Conference_changeMember);
		if(btn!=undefined)
			btn.onclick = this.Organ_changeMember_uint_address;
		var btn = document.getElementById(self.prefix+'ConferenceController.Manageable_addManager_address');
//		console.log('bind:Conference_addManager ' + self.prefix+' '+btn+'  '+self.Manageable_addManager_address);//Conference_addManager);
		if(btn!=undefined)
			btn.onclick = this.Manageable_addManager_address;
		var btn = document.getElementById(self.prefix+'ConferenceController.Organ_createFunction_string_string');
//		console.log('bind:Conference_createFunction ' + self.prefix+' '+btn+'  '+self.Organ_createFunction_string_string);//Conference_createFunction);
		if(btn!=undefined)
			btn.onclick = this.Organ_createFunction_string_string;
		var btn = document.getElementById(self.prefix+'ConferenceController.Manageable_removeManager_address');
//		console.log('bind:Conference_removeManager ' + self.prefix+' '+btn+'  '+self.Manageable_removeManager_address);//Conference_removeManager);
		if(btn!=undefined)
			btn.onclick = this.Manageable_removeManager_address;
		var btn = document.getElementById(self.prefix+'ConferenceController.Organ_initalizeOrgan');
//		console.log('bind:Conference_initalizeOrgan ' + self.prefix+' '+btn+'  '+self.Organ_initalizeOrgan);//Conference_initalizeOrgan);
		if(btn!=undefined)
			btn.onclick = this.Organ_initalizeOrgan;
		var btn = document.getElementById(self.prefix+'ConferenceController.Manageable_isManager_address');
//		console.log('bind:Conference_isManager ' + self.prefix+' '+btn+'  '+self.Manageable_isManager_address);//Conference_isManager);
		if(btn!=undefined)
			btn.onclick = this.Manageable_isManager_address;
		var btn = document.getElementById(self.prefix+'ConferenceController.Organ_publishFunctionMessage_uint_string_string_string');
//		console.log('bind:Conference_publishFunctionMessage ' + self.prefix+' '+btn+'  '+self.Organ_publishFunctionMessage_uint_string_string_string);//Conference_publishFunctionMessage);
		if(btn!=undefined)
			btn.onclick = this.Organ_publishFunctionMessage_uint_string_string_string;
		var btn = document.getElementById(self.prefix+'ConferenceController.Organ_createBallot_string_bytes32');
//		console.log('bind:Conference_createBallot ' + self.prefix+' '+btn+'  '+self.Organ_createBallot_string_bytes32);//Conference_createBallot);
		if(btn!=undefined)
			btn.onclick = this.Organ_createBallot_string_bytes32;
		var btn = document.getElementById(self.prefix+'ConferenceController.Organ_getFunctionBlogAddress_uint');
//		console.log('bind:Conference_getFunctionBlogAddress ' + self.prefix+' '+btn+'  '+self.Organ_getFunctionBlogAddress_uint);//Conference_getFunctionBlogAddress);
		if(btn!=undefined)
			btn.onclick = this.Organ_getFunctionBlogAddress_uint;
		var btn = document.getElementById(self.prefix+'ConferenceController.Organ_getLastBallot');
//		console.log('bind:Conference_getLastBallot ' + self.prefix+' '+btn+'  '+self.Organ_getLastBallot);//Conference_getLastBallot);
		if(btn!=undefined)
			btn.onclick = this.Organ_getLastBallot;
		var btn = document.getElementById(self.prefix+'ConferenceController.Organ_getOrganBlog');
//		console.log('bind:Conference_getOrganBlog ' + self.prefix+' '+btn+'  '+self.Organ_getOrganBlog);//Conference_getOrganBlog);
		if(btn!=undefined)
			btn.onclick = this.Organ_getOrganBlog;
	}
	// set function
	this.setAddress=function() {
	var _address = document.getElementById(self.prefix+'Conference_address');
//	console.log('setAddress:' + self.prefix+' '+_address);
	self.Conference_instance = ConferenceContract.at(_address.value);
	self.contractAddress = _address.value;
	self._updateAttributes();
}
//update attributes
this._updateAttributes=function () {
if(this.Conference_instance===null) return;
//console.log('updateAttributes:' + self.prefix);
// update attributes
	var memberRegistry_res = self.Conference_instance.memberRegistry();
//	console.log('get:memberRegistry' + self.prefix);

	if(memberRegistry_res!=null)
		document.getElementById(self.prefix+'Conference_memberRegistry_value').innerText = memberRegistry_res;
	var accreditatedMembers_res = self.Conference_instance.accreditatedMembers();
//	console.log('get:accreditatedMembers' + self.prefix);

	if(accreditatedMembers_res!=null)
		document.getElementById(self.prefix+'Conference_accreditatedMembers_value').innerText = accreditatedMembers_res;
	var mangerCount_res = self.Conference_instance.mangerCount();
//	console.log('get:mangerCount' + self.prefix);

	if(mangerCount_res!=null)
		document.getElementById(self.prefix+'Conference_mangerCount_value').innerText = mangerCount_res;
	var organName_res = self.Conference_instance.organName();
//	console.log('get:organName' + self.prefix);

	if(organName_res!=null)
		document.getElementById(self.prefix+'Conference_organName_value').innerText = organName_res;
	var date_res = self.Conference_instance.date();
//	console.log('get:date' + self.prefix);

	if(date_res!=null)
		document.getElementById(self.prefix+'Conference_date_value').innerText = date_res;
	var lastFunctionId_res = self.Conference_instance.lastFunctionId();
//	console.log('get:lastFunctionId' + self.prefix);

	if(lastFunctionId_res!=null)
		document.getElementById(self.prefix+'Conference_lastFunctionId_value').innerText = lastFunctionId_res;
	var blogRegistry_res = self.Conference_instance.blogRegistry();
//	console.log('get:blogRegistry' + self.prefix);

	if(blogRegistry_res!=null)
		document.getElementById(self.prefix+'Conference_blogRegistry_value').innerText = blogRegistry_res;
	var isActive_res = self.Conference_instance.isActive();
//	console.log('get:isActive' + self.prefix);

	if(isActive_res!=null)
		document.getElementById(self.prefix+'Conference_isActive_value').innerText = isActive_res;
	var ballotCount_res = self.Conference_instance.ballotCount();
//	console.log('get:ballotCount' + self.prefix);

	if(ballotCount_res!=null)
		document.getElementById(self.prefix+'Conference_ballotCount_value').innerText = ballotCount_res;
//console.log('getStruct:managers' + self.prefix);
	var _key = document.getElementById(self.prefix+'Conference_contract_attribute_managers_input').value;
	var managers_res = self.Conference_instance.managers(_key);
//console.log('result:managers' + managers_res+' key: '+_key);
	if(managers_res!=null){
		document.getElementById(self.prefix+'Conference_managers_value').innerText = managers_res;
	}
//console.log('getStruct:organFunctions' + self.prefix);
	var _key = document.getElementById(self.prefix+'Conference_contract_attribute_organFunctions_input').value;
	var organFunctions_res = self.Conference_instance.organFunctions(_key);
//console.log('result:organFunctions' + organFunctions_res+' key: '+_key);
	if(organFunctions_res!=null){
		document.getElementById(self.prefix+'Conference_organFunctions_currentMember_value').innerText = organFunctions_res[0];
		document.getElementById(self.prefix+'Conference_organFunctions_functionName_value').innerText = organFunctions_res[1];
		document.getElementById(self.prefix+'Conference_organFunctions_id_value').innerText = organFunctions_res[2];
		document.getElementById(self.prefix+'Conference_organFunctions_constitutionHash_value').innerText = organFunctions_res[3];
		document.getElementById(self.prefix+'Conference_organFunctions_lastMemberChanged_value').innerText = organFunctions_res[4];
		document.getElementById(self.prefix+'Conference_organFunctions_lastConstitutionHashChanged_value').innerText = organFunctions_res[5];
		document.getElementById(self.prefix+'Conference_organFunctions_publisher_value').innerText = organFunctions_res[6];
	}
}

//call functions
//function Conference_accreditationMember
this.Conference_accreditationMember_address=function() {
//console.log('function:accreditationMember' + self.prefix);
	var e = document.getElementById(self.prefix+'Conference_accreditationMember_address__address');
//	console.log(':' + self.prefix+'Conference_accreditationMember_address__address'+": "+e);
	var param__address = e.value;
//	console.log(':' +self.Conference_instance+':');
	var res = self.Conference_instance.accreditationMember(param__address);
}
//function Conference_canAccess
this.Manageable_canAccess=function() {
//console.log('function:canAccess' + self.prefix);
//	console.log(':' +self.Conference_instance+':');
	var res = self.Conference_instance.canAccess();
	if(res!=null)
		document.getElementById(self.prefix+'Manageable_canAccess_res').innerText = res;
}
//function Conference_changeMember
this.Organ_changeMember_uint_address=function() {
//console.log('function:changeMember' + self.prefix);
	var e = document.getElementById(self.prefix+'Organ_changeMember_uint_address__id');
//	console.log(':' + self.prefix+'Organ_changeMember_uint_address__id'+": "+e);
	var param__id = e.value;
	var e = document.getElementById(self.prefix+'Organ_changeMember_uint_address__address');
//	console.log(':' + self.prefix+'Organ_changeMember_uint_address__address'+": "+e);
	var param__address = e.value;
//	console.log(':' +self.Conference_instance+':');
	var res = self.Conference_instance.changeMember(param__id, param__address);
}
//function Conference_isMember
this.MemberAware_isMember_address=function() {
//console.log('function:isMember' + self.prefix);
	var e = document.getElementById(self.prefix+'MemberAware_isMember_address__address');
//	console.log(':' + self.prefix+'MemberAware_isMember_address__address'+": "+e);
	var param__address = e.value;
//	console.log(':' +self.Conference_instance+':');
	var res = self.Conference_instance.isMember(param__address);
	if(res!=null)
		document.getElementById(self.prefix+'MemberAware_isMember_address_res').innerText = res;
}
//function Conference_addManager
this.Manageable_addManager_address=function() {
//console.log('function:addManager' + self.prefix);
	var e = document.getElementById(self.prefix+'Manageable_addManager_address__newManagerAddress');
//	console.log(':' + self.prefix+'Manageable_addManager_address__newManagerAddress'+": "+e);
	var param__newManagerAddress = e.value;
//	console.log(':' +self.Conference_instance+':');
	var res = self.Conference_instance.addManager(param__newManagerAddress);
}
//function Conference_createFunction
this.Organ_createFunction_string_string=function() {
//console.log('function:createFunction' + self.prefix);
	var e = document.getElementById(self.prefix+'Organ_createFunction_string_string__functionName');
//	console.log(':' + self.prefix+'Organ_createFunction_string_string__functionName'+": "+e);
	var param__functionName = e.value;
	var e = document.getElementById(self.prefix+'Organ_createFunction_string_string__constittiutionHash');
//	console.log(':' + self.prefix+'Organ_createFunction_string_string__constittiutionHash'+": "+e);
	var param__constittiutionHash = e.value;
//	console.log(':' +self.Conference_instance+':');
	var res = self.Conference_instance.createFunction(param__functionName, param__constittiutionHash);
}
//function Conference_removeManager
this.Manageable_removeManager_address=function() {
//console.log('function:removeManager' + self.prefix);
	var e = document.getElementById(self.prefix+'Manageable_removeManager_address__managerAddress');
//	console.log(':' + self.prefix+'Manageable_removeManager_address__managerAddress'+": "+e);
	var param__managerAddress = e.value;
//	console.log(':' +self.Conference_instance+':');
	var res = self.Conference_instance.removeManager(param__managerAddress);
}
//function Conference_initalizeOrgan
this.Organ_initalizeOrgan=function() {
//console.log('function:initalizeOrgan' + self.prefix);
//	console.log(':' +self.Conference_instance+':');
	var res = self.Conference_instance.initalizeOrgan();
}
//function Conference_isManager
this.Manageable_isManager_address=function() {
//console.log('function:isManager' + self.prefix);
	var e = document.getElementById(self.prefix+'Manageable_isManager_address__managerAddress');
//	console.log(':' + self.prefix+'Manageable_isManager_address__managerAddress'+": "+e);
	var param__managerAddress = e.value;
//	console.log(':' +self.Conference_instance+':');
	var res = self.Conference_instance.isManager(param__managerAddress);
	if(res!=null)
		document.getElementById(self.prefix+'Manageable_isManager_address_res').innerText = res;
}
//function Conference_publishFunctionMessage
this.Organ_publishFunctionMessage_uint_string_string_string=function() {
//console.log('function:publishFunctionMessage' + self.prefix);
	var e = document.getElementById(self.prefix+'Organ_publishFunctionMessage_uint_string_string_string_id');
//	console.log(':' + self.prefix+'Organ_publishFunctionMessage_uint_string_string_string_id'+": "+e);
	var param_id = e.value;
	var e = document.getElementById(self.prefix+'Organ_publishFunctionMessage_uint_string_string_string_message');
//	console.log(':' + self.prefix+'Organ_publishFunctionMessage_uint_string_string_string_message'+": "+e);
	var param_message = e.value;
	var e = document.getElementById(self.prefix+'Organ_publishFunctionMessage_uint_string_string_string_hash');
//	console.log(':' + self.prefix+'Organ_publishFunctionMessage_uint_string_string_string_hash'+": "+e);
	var param_hash = e.value;
	var e = document.getElementById(self.prefix+'Organ_publishFunctionMessage_uint_string_string_string_er');
//	console.log(':' + self.prefix+'Organ_publishFunctionMessage_uint_string_string_string_er'+": "+e);
	var param_er = e.value;
//	console.log(':' +self.Conference_instance+':');
	var res = self.Conference_instance.publishFunctionMessage(param_id, param_message, param_hash, param_er);
}
//function Conference_createBallot
this.Organ_createBallot_string_bytes32=function() {
//console.log('function:createBallot' + self.prefix);
	var e = document.getElementById(self.prefix+'Organ_createBallot_string_bytes32_name');
//	console.log(':' + self.prefix+'Organ_createBallot_string_bytes32_name'+": "+e);
	var param_name = e.value;
	var e = document.getElementById(self.prefix+'Organ_createBallot_string_bytes32_proposalNames');
//	console.log(':' + self.prefix+'Organ_createBallot_string_bytes32_proposalNames'+": "+e);
	var param_proposalNames = e.value;
//	console.log(':' +self.Conference_instance+':');
	var res = self.Conference_instance.createBallot(param_name, param_proposalNames);
	if(res!=null)
		document.getElementById(self.prefix+'Organ_createBallot_string_bytes32_res').innerText = res;
}
//function Conference_getFunctionBlogAddress
this.Organ_getFunctionBlogAddress_uint=function() {
//console.log('function:getFunctionBlogAddress' + self.prefix);
	var e = document.getElementById(self.prefix+'Organ_getFunctionBlogAddress_uint_id');
//	console.log(':' + self.prefix+'Organ_getFunctionBlogAddress_uint_id'+": "+e);
	var param_id = e.value;
//	console.log(':' +self.Conference_instance+':');
	var res = self.Conference_instance.getFunctionBlogAddress(param_id);
	if(res!=null)
		document.getElementById(self.prefix+'Organ_getFunctionBlogAddress_uint_res').innerText = res;
}
//function Conference_getLastBallot
this.Organ_getLastBallot=function() {
//console.log('function:getLastBallot' + self.prefix);
//	console.log(':' +self.Conference_instance+':');
	var res = self.Conference_instance.getLastBallot();
	if(res!=null)
		document.getElementById(self.prefix+'Organ_getLastBallot_res').innerText = res;
}
//function Conference_getOrganBlog
this.Organ_getOrganBlog=function() {
//console.log('function:getOrganBlog' + self.prefix);
//	console.log(':' +self.Conference_instance+':');
	var res = self.Conference_instance.getOrganBlog();
	if(res!=null)
		document.getElementById(self.prefix+'Organ_getOrganBlog_res').innerText = res;
}

//delegated calls

}// end controller	


// script for Conference
function ConferenceModel(prefix) {
	this.prefix = prefix;
	this.guiFactory = new ConferenceGuiFactory();
	this.controller = new ConferenceController();
	this.guiFactory.prefix = prefix;
	this.controller.prefix = prefix;
}
ConferenceModel.prototype.create=function () {
	this.guiFactory.placeDefaultGui();
	this.controller._updateAttributes();
}


//class as GlueCode
//uses prefix + 'GuiContainer'
function ConferenceManager(prefix,contract) {
	this.prefix = prefix;
	var self = this;
	this.c = new ConferenceController();
	this.c.prefix=prefix;
	this.c.Conference_instance=contract;
	this.c.contractAddress = contract.address;
	this.g = new ConferenceGuiFactory();
	this.g.prefix = prefix;

	this.addGui = function() {
		var e = document.getElementById(this.prefix + 'GuiContainer');
//console.log('addGui:' + this.prefix+ 'GuiContainer'+e);
		var elemDiv = document.createElement('div');
		elemDiv.id= this.prefix +'Conference_gui';
		e.appendChild(elemDiv);
		this.g.placeDefaultGui();
		document.getElementById(this.prefix+'Conference_address').value = this.c.contractAddress;
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
		return this.c.Conference_instance;
	}

}// end of manager

function ConferenceGuiMananger(guiId){
	this.prefix = guiId;
	this.managers=new Array();	//[];		
	
	this.addManager = function(contract) {
//console.log('addManager:'+contract);
		var m = new ConferenceManager(contract.address,contract);
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
			elemDiv.id= this.managers[i].prefix + 'GuiContainer';//'Conference_gui';
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

//gui factory FoundationConference
function FoundationConferenceGuiFactory() {
	this.prefix='';
	
// default Gui
this.placeDefaultGui=function() {
//	console.log(this.prefix+' place gui');
	document.getElementById(this.prefix+'FoundationConference_gui').innerHTML = this.createDefaultGui();
}
// default Gui
this.createDefaultGui=function() {
	return 	'<!-- gui for FoundationConference_contract -->'
+	'	<div class="contract" id="'+this.prefix+'FoundationConference_contract">'
+	'	FoundationConference:'
+	'	  <input type="text" id="'+this.prefix+'FoundationConference_address"> <button id="'+this.prefix+'FoundationConferenceController.setAddress" onclick="'+this.prefix+'FoundationConferenceController.setAddress()">change FoundationConference Address</button>'
+	'	  <div class="contract_attributes" id="'+this.prefix+'FoundationConference_contract_attributes"> attributes:'
+	'	    <div class="contract_attribute" id="'+this.prefix+'FoundationConference_contract_attribute_memberRegistry"> memberRegistry:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'FoundationConference_memberRegistry_value"> </div>'
+	'	    </div>'
+	'	    <div class="contract_attribute" id="'+this.prefix+'FoundationConference_contract_attribute_accreditatedMembers"> accreditatedMembers:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'FoundationConference_accreditatedMembers_value"> </div>'
+	'	    </div>'
+	'	    <div class="contract_attribute" id="'+this.prefix+'FoundationConference_contract_attribute_mangerCount"> mangerCount:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'FoundationConference_mangerCount_value"> </div>'
+	'	    </div>'
+	'	    <div class="contract_attribute" id="'+this.prefix+'FoundationConference_contract_attribute_organName"> organName:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'FoundationConference_organName_value"> </div>'
+	'	    </div>'
+	'	    <div class="contract_attribute" id="'+this.prefix+'FoundationConference_contract_attribute_date"> date:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'FoundationConference_date_value"> </div>'
+	'	    </div>'
+	'	    <div class="contract_attribute" id="'+this.prefix+'FoundationConference_contract_attribute_lastFunctionId"> lastFunctionId:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'FoundationConference_lastFunctionId_value"> </div>'
+	'	    </div>'
+	'	    <div class="contract_attribute" id="'+this.prefix+'FoundationConference_contract_attribute_blogRegistry"> blogRegistry:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'FoundationConference_blogRegistry_value"> </div>'
+	'	    </div>'
+	'	    <div class="contract_attribute" id="'+this.prefix+'FoundationConference_contract_attribute_isActive"> isActive:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'FoundationConference_isActive_value"> </div>'
+	'	    </div>'
+	'	    <div class="contract_attribute" id="'+this.prefix+'FoundationConference_contract_attribute_ballotCount"> ballotCount:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'FoundationConference_ballotCount_value"> </div>'
+	'	    </div>'
+	'	'
+	'	<div class="Value_Mapping" id="'+this.prefix+'FoundationConference_contract_attribute_managers">mapping  managers:'
+	'			<input type="text" id="'+this.prefix+'FoundationConference_contract_attribute_managers_input">(address)'
+	'	    	<div class="Mapping_value" id="'+this.prefix+'FoundationConference_contract_attribute_address"> bool:'
+	'	      		<div class="contract_attribute_value" id="'+this.prefix+'FoundationConference_managers_value"> </div>'
+	'	    	</div>'
+	'	  </div>'
+	'	<!--struct -->'
+	'	<div class="Struct_Mapping" id="'+this.prefix+'Struc_FoundationConference_contract_attribute_organFunctions">struc mapping  organFunctions:'
+	'			<input type="number" id="'+this.prefix+'FoundationConference_contract_attribute_organFunctions_input">(uint)'
+	'	    	<div class="Struct_attribute" id="'+this.prefix+'FoundationConference_contract_attribute_organFunctions_currentMember"> currentMember:'
+	'	      		<div class="Struct_attribute_value" id="'+this.prefix+'FoundationConference_organFunctions_currentMember_value"> </div>'
+	'	    	</div>'
+	'	    	<div class="Struct_attribute" id="'+this.prefix+'FoundationConference_contract_attribute_organFunctions_functionName"> functionName:'
+	'	      		<div class="Struct_attribute_value" id="'+this.prefix+'FoundationConference_organFunctions_functionName_value"> </div>'
+	'	    	</div>'
+	'	    	<div class="Struct_attribute" id="'+this.prefix+'FoundationConference_contract_attribute_organFunctions_id"> id:'
+	'	      		<div class="Struct_attribute_value" id="'+this.prefix+'FoundationConference_organFunctions_id_value"> </div>'
+	'	    	</div>'
+	'	    	<div class="Struct_attribute" id="'+this.prefix+'FoundationConference_contract_attribute_organFunctions_constitutionHash"> constitutionHash:'
+	'	      		<div class="Struct_attribute_value" id="'+this.prefix+'FoundationConference_organFunctions_constitutionHash_value"> </div>'
+	'	    	</div>'
+	'	    	<div class="Struct_attribute" id="'+this.prefix+'FoundationConference_contract_attribute_organFunctions_lastMemberChanged"> lastMemberChanged:'
+	'	      		<div class="Struct_attribute_value" id="'+this.prefix+'FoundationConference_organFunctions_lastMemberChanged_value"> </div>'
+	'	    	</div>'
+	'	    	<div class="Struct_attribute" id="'+this.prefix+'FoundationConference_contract_attribute_organFunctions_lastConstitutionHashChanged"> lastConstitutionHashChanged:'
+	'	      		<div class="Struct_attribute_value" id="'+this.prefix+'FoundationConference_organFunctions_lastConstitutionHashChanged_value"> </div>'
+	'	    	</div>'
+	'	    	<div class="Struct_attribute" id="'+this.prefix+'FoundationConference_contract_attribute_organFunctions_publisher"> publisher:'
+	'	      		<div class="Struct_attribute_value" id="'+this.prefix+'FoundationConference_organFunctions_publisher_value"> </div>'
+	'	    	</div>'
+	'	  </div>'
+	'	    <button id="'+this.prefix+'FoundationConference_updateAttributes" onclick="'+this.prefix+'FoundationConferenceController._updateAttributes()">update FoundationConference attributes</button>'
+	'	  </div>'
+	'	  <div class="function_execution" id="'+this.prefix+'FoundationConference_contract_function_Conference_accreditationMember_address">'
+	'	FoundationConference_accreditationMember:'
+	'		  <div class="function_parameter">_address<input type="text" id="'+this.prefix+'Conference_accreditationMember_address__address"></div>'
+	'		<button id="'+this.prefix+'FoundationConferenceController.Conference_accreditationMember_address" onclick="'+this.prefix+'FoundationConferenceController.Conference_accreditationMember_address()">execute FoundationConference_accreditationMember</button>'
+	'		<div class="function_result" id="'+this.prefix+'Conference_accreditationMember_address_res"></div>'
+	'	  </div>'
+	'	  <div class="function_execution" id="'+this.prefix+'FoundationConference_contract_function_Organ_changeMember_uint_address">'
+	'	FoundationConference_changeMember:'
+	'		  <div class="function_parameter">_id<input type="number" id="'+this.prefix+'Organ_changeMember_uint_address__id"></div>'
+	'		  <div class="function_parameter">_address<input type="text" id="'+this.prefix+'Organ_changeMember_uint_address__address"></div>'
+	'		<button id="'+this.prefix+'FoundationConferenceController.Organ_changeMember_uint_address" onclick="'+this.prefix+'FoundationConferenceController.Organ_changeMember_uint_address()">execute FoundationConference_changeMember</button>'
+	'		<div class="function_result" id="'+this.prefix+'Organ_changeMember_uint_address_res"></div>'
+	'	  </div>'
+	'	  <div class="function_execution" id="'+this.prefix+'FoundationConference_contract_function_Manageable_addManager_address">'
+	'	FoundationConference_addManager:'
+	'		  <div class="function_parameter">_newManagerAddress<input type="text" id="'+this.prefix+'Manageable_addManager_address__newManagerAddress"></div>'
+	'		<button id="'+this.prefix+'FoundationConferenceController.Manageable_addManager_address" onclick="'+this.prefix+'FoundationConferenceController.Manageable_addManager_address()">execute FoundationConference_addManager</button>'
+	'		<div class="function_result" id="'+this.prefix+'Manageable_addManager_address_res"></div>'
+	'	  </div>'
+	'	  <div class="function_execution" id="'+this.prefix+'FoundationConference_contract_function_Organ_createFunction_string_string">'
+	'	FoundationConference_createFunction:'
+	'		  <div class="function_parameter">_functionName<input type="text" id="'+this.prefix+'Organ_createFunction_string_string__functionName"></div>'
+	'		  <div class="function_parameter">_constittiutionHash<input type="text" id="'+this.prefix+'Organ_createFunction_string_string__constittiutionHash"></div>'
+	'		<button id="'+this.prefix+'FoundationConferenceController.Organ_createFunction_string_string" onclick="'+this.prefix+'FoundationConferenceController.Organ_createFunction_string_string()">execute FoundationConference_createFunction</button>'
+	'		<div class="function_result" id="'+this.prefix+'Organ_createFunction_string_string_res"></div>'
+	'	  </div>'
+	'	  <div class="function_execution" id="'+this.prefix+'FoundationConference_contract_function_Manageable_removeManager_address">'
+	'	FoundationConference_removeManager:'
+	'		  <div class="function_parameter">_managerAddress<input type="text" id="'+this.prefix+'Manageable_removeManager_address__managerAddress"></div>'
+	'		<button id="'+this.prefix+'FoundationConferenceController.Manageable_removeManager_address" onclick="'+this.prefix+'FoundationConferenceController.Manageable_removeManager_address()">execute FoundationConference_removeManager</button>'
+	'		<div class="function_result" id="'+this.prefix+'Manageable_removeManager_address_res"></div>'
+	'	  </div>'
+	'	  <div class="function_execution" id="'+this.prefix+'FoundationConference_contract_function_Organ_initalizeOrgan">'
+	'	FoundationConference_initalizeOrgan:'
+	'		<button id="'+this.prefix+'FoundationConferenceController.Organ_initalizeOrgan" onclick="'+this.prefix+'FoundationConferenceController.Organ_initalizeOrgan()">execute FoundationConference_initalizeOrgan</button>'
+	'		<div class="function_result" id="'+this.prefix+'Organ_initalizeOrgan_res"></div>'
+	'	  </div>'
+	'	  <div class="function_execution" id="'+this.prefix+'FoundationConference_contract_function_Manageable_isManager_address">'
+	'	FoundationConference_isManager:'
+	'		  <div class="function_parameter">_managerAddress<input type="text" id="'+this.prefix+'Manageable_isManager_address__managerAddress"></div>'
+	'		<button id="'+this.prefix+'FoundationConferenceController.Manageable_isManager_address" onclick="'+this.prefix+'FoundationConferenceController.Manageable_isManager_address()">execute FoundationConference_isManager</button>'
+	'		<div class="function_result" id="'+this.prefix+'Manageable_isManager_address_res"></div>'
+	'	  </div>'
+	'	  <div class="function_execution" id="'+this.prefix+'FoundationConference_contract_function_Organ_publishFunctionMessage_uint_string_string_string">'
+	'	FoundationConference_publishFunctionMessage:'
+	'		  <div class="function_parameter">id<input type="number" id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_id"></div>'
+	'		  <div class="function_parameter">message<input type="text" id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_message"></div>'
+	'		  <div class="function_parameter">hash<input type="text" id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_hash"></div>'
+	'		  <div class="function_parameter">er<input type="text" id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_er"></div>'
+	'		<button id="'+this.prefix+'FoundationConferenceController.Organ_publishFunctionMessage_uint_string_string_string" onclick="'+this.prefix+'FoundationConferenceController.Organ_publishFunctionMessage_uint_string_string_string()">execute FoundationConference_publishFunctionMessage</button>'
+	'		<div class="function_result" id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_res"></div>'
+	'	  </div>'
+	'	  <div class="function_execution" id="'+this.prefix+'FoundationConference_contract_function_Organ_createBallot_string_bytes32">'
+	'	FoundationConference_createBallot:'
+	'		  <div class="function_parameter">name<input type="text" id="'+this.prefix+'Organ_createBallot_string_bytes32_name"></div>'
+	'		  <div class="function_parameter">proposalNames<input type="text" id="'+this.prefix+'Organ_createBallot_string_bytes32_proposalNames"></div>'
+	'		<button id="'+this.prefix+'FoundationConferenceController.Organ_createBallot_string_bytes32" onclick="'+this.prefix+'FoundationConferenceController.Organ_createBallot_string_bytes32()">execute FoundationConference_createBallot</button>'
+	'		<div class="function_result" id="'+this.prefix+'Organ_createBallot_string_bytes32_res"></div>'
+	'	  </div>'
+	'	  <div class="function_execution" id="'+this.prefix+'FoundationConference_contract_function_Organ_getFunctionBlogAddress_uint">'
+	'	FoundationConference_getFunctionBlogAddress:'
+	'		  <div class="function_parameter">id<input type="number" id="'+this.prefix+'Organ_getFunctionBlogAddress_uint_id"></div>'
+	'		<button id="'+this.prefix+'FoundationConferenceController.Organ_getFunctionBlogAddress_uint" onclick="'+this.prefix+'FoundationConferenceController.Organ_getFunctionBlogAddress_uint()">execute FoundationConference_getFunctionBlogAddress</button>'
+	'		<div class="function_result" id="'+this.prefix+'Organ_getFunctionBlogAddress_uint_res"></div>'
+	'	  </div>'
+	'	  <div class="function_execution" id="'+this.prefix+'FoundationConference_contract_function_Organ_getLastBallot">'
+	'	FoundationConference_getLastBallot:'
+	'		<button id="'+this.prefix+'FoundationConferenceController.Organ_getLastBallot" onclick="'+this.prefix+'FoundationConferenceController.Organ_getLastBallot()">execute FoundationConference_getLastBallot</button>'
+	'		<div class="function_result" id="'+this.prefix+'Organ_getLastBallot_res"></div>'
+	'	  </div>'
+	'	  <div class="function_execution" id="'+this.prefix+'FoundationConference_contract_function_Organ_getOrganBlog">'
+	'	FoundationConference_getOrganBlog:'
+	'		<button id="'+this.prefix+'FoundationConferenceController.Organ_getOrganBlog" onclick="'+this.prefix+'FoundationConferenceController.Organ_getOrganBlog()">execute FoundationConference_getOrganBlog</button>'
+	'		<div class="function_result" id="'+this.prefix+'Organ_getOrganBlog_res"></div>'
+	'	  </div>'
+	'	'
+	'	</div>'
;
}

//default attributes
this.createAttributesGui=function() {
	return 	'    <div class="contract_attribute" id="'+this.prefix+'FoundationConference_contract_attribute_memberRegistry"> memberRegistry:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'FoundationConference_memberRegistry_value"> </div>'
+	'	    </div>'
+	'	    <div class="contract_attribute" id="'+this.prefix+'FoundationConference_contract_attribute_accreditatedMembers"> accreditatedMembers:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'FoundationConference_accreditatedMembers_value"> </div>'
+	'	    </div>'
+	'	    <div class="contract_attribute" id="'+this.prefix+'FoundationConference_contract_attribute_mangerCount"> mangerCount:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'FoundationConference_mangerCount_value"> </div>'
+	'	    </div>'
+	'	    <div class="contract_attribute" id="'+this.prefix+'FoundationConference_contract_attribute_organName"> organName:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'FoundationConference_organName_value"> </div>'
+	'	    </div>'
+	'	    <div class="contract_attribute" id="'+this.prefix+'FoundationConference_contract_attribute_date"> date:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'FoundationConference_date_value"> </div>'
+	'	    </div>'
+	'	    <div class="contract_attribute" id="'+this.prefix+'FoundationConference_contract_attribute_lastFunctionId"> lastFunctionId:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'FoundationConference_lastFunctionId_value"> </div>'
+	'	    </div>'
+	'	    <div class="contract_attribute" id="'+this.prefix+'FoundationConference_contract_attribute_blogRegistry"> blogRegistry:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'FoundationConference_blogRegistry_value"> </div>'
+	'	    </div>'
+	'	    <div class="contract_attribute" id="'+this.prefix+'FoundationConference_contract_attribute_isActive"> isActive:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'FoundationConference_isActive_value"> </div>'
+	'	    </div>'
+	'	    <div class="contract_attribute" id="'+this.prefix+'FoundationConference_contract_attribute_ballotCount"> ballotCount:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'FoundationConference_ballotCount_value"> </div>'
+	'	    </div>'
+	'	'
;
}



this.createConference_accreditationMember_addressGui=function() {
return 	'  <div class="function_execution" id="'+this.prefix+'FoundationConference_contract_function_Conference_accreditationMember_address">'
+	'FoundationConference_accreditationMember:'
+	'	  <div class="function_parameter">_address<input type="text" id="'+this.prefix+'Conference_accreditationMember_address__address"></div>'
+	'	<button id="'+this.prefix+'FoundationConferenceController.Conference_accreditationMember_address" onclick="'+this.prefix+'FoundationConferenceController.Conference_accreditationMember_address()">execute FoundationConference_accreditationMember</button>'
+	'	<div class="function_result" id="'+this.prefix+'Conference_accreditationMember_address_res"></div>'
+	'  </div>'
;
}
this.createOrgan_changeMember_uint_addressGui=function() {
return 	'  <div class="function_execution" id="'+this.prefix+'FoundationConference_contract_function_Organ_changeMember_uint_address">'
+	'FoundationConference_changeMember:'
+	'	  <div class="function_parameter">_id<input type="number" id="'+this.prefix+'Organ_changeMember_uint_address__id"></div>'
+	'	  <div class="function_parameter">_address<input type="text" id="'+this.prefix+'Organ_changeMember_uint_address__address"></div>'
+	'	<button id="'+this.prefix+'FoundationConferenceController.Organ_changeMember_uint_address" onclick="'+this.prefix+'FoundationConferenceController.Organ_changeMember_uint_address()">execute FoundationConference_changeMember</button>'
+	'	<div class="function_result" id="'+this.prefix+'Organ_changeMember_uint_address_res"></div>'
+	'  </div>'
;
}
this.createManageable_addManager_addressGui=function() {
return 	'  <div class="function_execution" id="'+this.prefix+'FoundationConference_contract_function_Manageable_addManager_address">'
+	'FoundationConference_addManager:'
+	'	  <div class="function_parameter">_newManagerAddress<input type="text" id="'+this.prefix+'Manageable_addManager_address__newManagerAddress"></div>'
+	'	<button id="'+this.prefix+'FoundationConferenceController.Manageable_addManager_address" onclick="'+this.prefix+'FoundationConferenceController.Manageable_addManager_address()">execute FoundationConference_addManager</button>'
+	'	<div class="function_result" id="'+this.prefix+'Manageable_addManager_address_res"></div>'
+	'  </div>'
;
}
this.createOrgan_createFunction_string_stringGui=function() {
return 	'  <div class="function_execution" id="'+this.prefix+'FoundationConference_contract_function_Organ_createFunction_string_string">'
+	'FoundationConference_createFunction:'
+	'	  <div class="function_parameter">_functionName<input type="text" id="'+this.prefix+'Organ_createFunction_string_string__functionName"></div>'
+	'	  <div class="function_parameter">_constittiutionHash<input type="text" id="'+this.prefix+'Organ_createFunction_string_string__constittiutionHash"></div>'
+	'	<button id="'+this.prefix+'FoundationConferenceController.Organ_createFunction_string_string" onclick="'+this.prefix+'FoundationConferenceController.Organ_createFunction_string_string()">execute FoundationConference_createFunction</button>'
+	'	<div class="function_result" id="'+this.prefix+'Organ_createFunction_string_string_res"></div>'
+	'  </div>'
;
}
this.createManageable_removeManager_addressGui=function() {
return 	'  <div class="function_execution" id="'+this.prefix+'FoundationConference_contract_function_Manageable_removeManager_address">'
+	'FoundationConference_removeManager:'
+	'	  <div class="function_parameter">_managerAddress<input type="text" id="'+this.prefix+'Manageable_removeManager_address__managerAddress"></div>'
+	'	<button id="'+this.prefix+'FoundationConferenceController.Manageable_removeManager_address" onclick="'+this.prefix+'FoundationConferenceController.Manageable_removeManager_address()">execute FoundationConference_removeManager</button>'
+	'	<div class="function_result" id="'+this.prefix+'Manageable_removeManager_address_res"></div>'
+	'  </div>'
;
}
this.createOrgan_initalizeOrganGui=function() {
return 	'  <div class="function_execution" id="'+this.prefix+'FoundationConference_contract_function_Organ_initalizeOrgan">'
+	'FoundationConference_initalizeOrgan:'
+	'	<button id="'+this.prefix+'FoundationConferenceController.Organ_initalizeOrgan" onclick="'+this.prefix+'FoundationConferenceController.Organ_initalizeOrgan()">execute FoundationConference_initalizeOrgan</button>'
+	'	<div class="function_result" id="'+this.prefix+'Organ_initalizeOrgan_res"></div>'
+	'  </div>'
;
}
this.createManageable_isManager_addressGui=function() {
return 	'  <div class="function_execution" id="'+this.prefix+'FoundationConference_contract_function_Manageable_isManager_address">'
+	'FoundationConference_isManager:'
+	'	  <div class="function_parameter">_managerAddress<input type="text" id="'+this.prefix+'Manageable_isManager_address__managerAddress"></div>'
+	'	<button id="'+this.prefix+'FoundationConferenceController.Manageable_isManager_address" onclick="'+this.prefix+'FoundationConferenceController.Manageable_isManager_address()">execute FoundationConference_isManager</button>'
+	'	<div class="function_result" id="'+this.prefix+'Manageable_isManager_address_res"></div>'
+	'  </div>'
;
}
this.createOrgan_publishFunctionMessage_uint_string_string_stringGui=function() {
return 	'  <div class="function_execution" id="'+this.prefix+'FoundationConference_contract_function_Organ_publishFunctionMessage_uint_string_string_string">'
+	'FoundationConference_publishFunctionMessage:'
+	'	  <div class="function_parameter">id<input type="number" id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_id"></div>'
+	'	  <div class="function_parameter">message<input type="text" id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_message"></div>'
+	'	  <div class="function_parameter">hash<input type="text" id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_hash"></div>'
+	'	  <div class="function_parameter">er<input type="text" id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_er"></div>'
+	'	<button id="'+this.prefix+'FoundationConferenceController.Organ_publishFunctionMessage_uint_string_string_string" onclick="'+this.prefix+'FoundationConferenceController.Organ_publishFunctionMessage_uint_string_string_string()">execute FoundationConference_publishFunctionMessage</button>'
+	'	<div class="function_result" id="'+this.prefix+'Organ_publishFunctionMessage_uint_string_string_string_res"></div>'
+	'  </div>'
;
}
this.createOrgan_createBallot_string_bytes32Gui=function() {
return 	'  <div class="function_execution" id="'+this.prefix+'FoundationConference_contract_function_Organ_createBallot_string_bytes32">'
+	'FoundationConference_createBallot:'
+	'	  <div class="function_parameter">name<input type="text" id="'+this.prefix+'Organ_createBallot_string_bytes32_name"></div>'
+	'	  <div class="function_parameter">proposalNames<input type="text" id="'+this.prefix+'Organ_createBallot_string_bytes32_proposalNames"></div>'
+	'	<button id="'+this.prefix+'FoundationConferenceController.Organ_createBallot_string_bytes32" onclick="'+this.prefix+'FoundationConferenceController.Organ_createBallot_string_bytes32()">execute FoundationConference_createBallot</button>'
+	'	<div class="function_result" id="'+this.prefix+'Organ_createBallot_string_bytes32_res"></div>'
+	'  </div>'
;
}
this.createOrgan_getFunctionBlogAddress_uintGui=function() {
return 	'  <div class="function_execution" id="'+this.prefix+'FoundationConference_contract_function_Organ_getFunctionBlogAddress_uint">'
+	'FoundationConference_getFunctionBlogAddress:'
+	'	  <div class="function_parameter">id<input type="number" id="'+this.prefix+'Organ_getFunctionBlogAddress_uint_id"></div>'
+	'	<button id="'+this.prefix+'FoundationConferenceController.Organ_getFunctionBlogAddress_uint" onclick="'+this.prefix+'FoundationConferenceController.Organ_getFunctionBlogAddress_uint()">execute FoundationConference_getFunctionBlogAddress</button>'
+	'	<div class="function_result" id="'+this.prefix+'Organ_getFunctionBlogAddress_uint_res"></div>'
+	'  </div>'
;
}
this.createOrgan_getLastBallotGui=function() {
return 	'  <div class="function_execution" id="'+this.prefix+'FoundationConference_contract_function_Organ_getLastBallot">'
+	'FoundationConference_getLastBallot:'
+	'	<button id="'+this.prefix+'FoundationConferenceController.Organ_getLastBallot" onclick="'+this.prefix+'FoundationConferenceController.Organ_getLastBallot()">execute FoundationConference_getLastBallot</button>'
+	'	<div class="function_result" id="'+this.prefix+'Organ_getLastBallot_res"></div>'
+	'  </div>'
;
}
this.createOrgan_getOrganBlogGui=function() {
return 	'  <div class="function_execution" id="'+this.prefix+'FoundationConference_contract_function_Organ_getOrganBlog">'
+	'FoundationConference_getOrganBlog:'
+	'	<button id="'+this.prefix+'FoundationConferenceController.Organ_getOrganBlog" onclick="'+this.prefix+'FoundationConferenceController.Organ_getOrganBlog()">execute FoundationConference_getOrganBlog</button>'
+	'	<div class="function_result" id="'+this.prefix+'Organ_getOrganBlog_res"></div>'
+	'  </div>'
;
}

this.createorganFunctionsStructGui=function() {
return 	'<!--struct -->'
+	'<div class="Struct_Mapping" id="'+this.prefix+'Struc_FoundationConference_contract_attribute_organFunctions">struc mapping  organFunctions:'
+	'		<input type="number" id="'+this.prefix+'FoundationConference_contract_attribute_organFunctions_input">(uint)'
+	'    	<div class="Struct_attribute" id="'+this.prefix+'FoundationConference_contract_attribute_organFunctions_currentMember"> currentMember:'
+	'      		<div class="Struct_attribute_value" id="'+this.prefix+'FoundationConference_organFunctions_currentMember_value"> </div>'
+	'    	</div>'
+	'    	<div class="Struct_attribute" id="'+this.prefix+'FoundationConference_contract_attribute_organFunctions_functionName"> functionName:'
+	'      		<div class="Struct_attribute_value" id="'+this.prefix+'FoundationConference_organFunctions_functionName_value"> </div>'
+	'    	</div>'
+	'    	<div class="Struct_attribute" id="'+this.prefix+'FoundationConference_contract_attribute_organFunctions_id"> id:'
+	'      		<div class="Struct_attribute_value" id="'+this.prefix+'FoundationConference_organFunctions_id_value"> </div>'
+	'    	</div>'
+	'    	<div class="Struct_attribute" id="'+this.prefix+'FoundationConference_contract_attribute_organFunctions_constitutionHash"> constitutionHash:'
+	'      		<div class="Struct_attribute_value" id="'+this.prefix+'FoundationConference_organFunctions_constitutionHash_value"> </div>'
+	'    	</div>'
+	'    	<div class="Struct_attribute" id="'+this.prefix+'FoundationConference_contract_attribute_organFunctions_lastMemberChanged"> lastMemberChanged:'
+	'      		<div class="Struct_attribute_value" id="'+this.prefix+'FoundationConference_organFunctions_lastMemberChanged_value"> </div>'
+	'    	</div>'
+	'    	<div class="Struct_attribute" id="'+this.prefix+'FoundationConference_contract_attribute_organFunctions_lastConstitutionHashChanged"> lastConstitutionHashChanged:'
+	'      		<div class="Struct_attribute_value" id="'+this.prefix+'FoundationConference_organFunctions_lastConstitutionHashChanged_value"> </div>'
+	'    	</div>'
+	'    	<div class="Struct_attribute" id="'+this.prefix+'FoundationConference_contract_attribute_organFunctions_publisher"> publisher:'
+	'      		<div class="Struct_attribute_value" id="'+this.prefix+'FoundationConference_organFunctions_publisher_value"> </div>'
+	'    	</div>'
+	'  </div>'
;
}


//print the contract div around
this.createFoundationConferenceSeletonGui=function(inner) {
	return 	'<!-- gui for FoundationConference_contract -->'
+	'	<div class="contract" id="'+this.prefix+'FoundationConference_contract">'
+ inner
+'</div>';
}


//eventguis

}//end guifactory
// script for FoundationConference gui controller
function FoundationConferenceController() {

	this.FoundationConference_instance = undefined;
	this.prefix='';
	this.contractAddress = undefined; 
	var self = this;

// bind buttons
	this.bindGui=function() {
		var btn = document.getElementById(self.prefix+'FoundationConferenceController.setAddress');
//	console.log('bind:' + self.prefix+' '+btn);
		if(btn!=undefined)		
			btn.onclick = this.setAddress;

		var btn = document.getElementById(self.prefix+'FoundationConference_updateAttributes');
//		console.log('bind update:' + self.prefix+' '+btn);
		if(btn!=undefined)
			btn.onclick = this._updateAttributes;
		var btn = document.getElementById(self.prefix+'FoundationConferenceController.Conference_accreditationMember_address');
//		console.log('bind:FoundationConference_accreditationMember ' + self.prefix+' '+btn+'  '+self.Conference_accreditationMember_address);//FoundationConference_accreditationMember);
		if(btn!=undefined)
			btn.onclick = this.Conference_accreditationMember_address;
		var btn = document.getElementById(self.prefix+'FoundationConferenceController.Organ_changeMember_uint_address');
//		console.log('bind:FoundationConference_changeMember ' + self.prefix+' '+btn+'  '+self.Organ_changeMember_uint_address);//FoundationConference_changeMember);
		if(btn!=undefined)
			btn.onclick = this.Organ_changeMember_uint_address;
		var btn = document.getElementById(self.prefix+'FoundationConferenceController.Manageable_addManager_address');
//		console.log('bind:FoundationConference_addManager ' + self.prefix+' '+btn+'  '+self.Manageable_addManager_address);//FoundationConference_addManager);
		if(btn!=undefined)
			btn.onclick = this.Manageable_addManager_address;
		var btn = document.getElementById(self.prefix+'FoundationConferenceController.Organ_createFunction_string_string');
//		console.log('bind:FoundationConference_createFunction ' + self.prefix+' '+btn+'  '+self.Organ_createFunction_string_string);//FoundationConference_createFunction);
		if(btn!=undefined)
			btn.onclick = this.Organ_createFunction_string_string;
		var btn = document.getElementById(self.prefix+'FoundationConferenceController.Manageable_removeManager_address');
//		console.log('bind:FoundationConference_removeManager ' + self.prefix+' '+btn+'  '+self.Manageable_removeManager_address);//FoundationConference_removeManager);
		if(btn!=undefined)
			btn.onclick = this.Manageable_removeManager_address;
		var btn = document.getElementById(self.prefix+'FoundationConferenceController.Organ_initalizeOrgan');
//		console.log('bind:FoundationConference_initalizeOrgan ' + self.prefix+' '+btn+'  '+self.Organ_initalizeOrgan);//FoundationConference_initalizeOrgan);
		if(btn!=undefined)
			btn.onclick = this.Organ_initalizeOrgan;
		var btn = document.getElementById(self.prefix+'FoundationConferenceController.Manageable_isManager_address');
//		console.log('bind:FoundationConference_isManager ' + self.prefix+' '+btn+'  '+self.Manageable_isManager_address);//FoundationConference_isManager);
		if(btn!=undefined)
			btn.onclick = this.Manageable_isManager_address;
		var btn = document.getElementById(self.prefix+'FoundationConferenceController.Organ_publishFunctionMessage_uint_string_string_string');
//		console.log('bind:FoundationConference_publishFunctionMessage ' + self.prefix+' '+btn+'  '+self.Organ_publishFunctionMessage_uint_string_string_string);//FoundationConference_publishFunctionMessage);
		if(btn!=undefined)
			btn.onclick = this.Organ_publishFunctionMessage_uint_string_string_string;
		var btn = document.getElementById(self.prefix+'FoundationConferenceController.Organ_createBallot_string_bytes32');
//		console.log('bind:FoundationConference_createBallot ' + self.prefix+' '+btn+'  '+self.Organ_createBallot_string_bytes32);//FoundationConference_createBallot);
		if(btn!=undefined)
			btn.onclick = this.Organ_createBallot_string_bytes32;
		var btn = document.getElementById(self.prefix+'FoundationConferenceController.Organ_getFunctionBlogAddress_uint');
//		console.log('bind:FoundationConference_getFunctionBlogAddress ' + self.prefix+' '+btn+'  '+self.Organ_getFunctionBlogAddress_uint);//FoundationConference_getFunctionBlogAddress);
		if(btn!=undefined)
			btn.onclick = this.Organ_getFunctionBlogAddress_uint;
		var btn = document.getElementById(self.prefix+'FoundationConferenceController.Organ_getLastBallot');
//		console.log('bind:FoundationConference_getLastBallot ' + self.prefix+' '+btn+'  '+self.Organ_getLastBallot);//FoundationConference_getLastBallot);
		if(btn!=undefined)
			btn.onclick = this.Organ_getLastBallot;
		var btn = document.getElementById(self.prefix+'FoundationConferenceController.Organ_getOrganBlog');
//		console.log('bind:FoundationConference_getOrganBlog ' + self.prefix+' '+btn+'  '+self.Organ_getOrganBlog);//FoundationConference_getOrganBlog);
		if(btn!=undefined)
			btn.onclick = this.Organ_getOrganBlog;
	}
	// set function
	this.setAddress=function() {
	var _address = document.getElementById(self.prefix+'FoundationConference_address');
//	console.log('setAddress:' + self.prefix+' '+_address);
	self.FoundationConference_instance = FoundationConferenceContract.at(_address.value);
	self.contractAddress = _address.value;
	self._updateAttributes();
}
//update attributes
this._updateAttributes=function () {
if(this.FoundationConference_instance===null) return;
//console.log('updateAttributes:' + self.prefix);
// update attributes
	var memberRegistry_res = self.FoundationConference_instance.memberRegistry();
//	console.log('get:memberRegistry' + self.prefix);

	if(memberRegistry_res!=null)
		document.getElementById(self.prefix+'FoundationConference_memberRegistry_value').innerText = memberRegistry_res;
	var accreditatedMembers_res = self.FoundationConference_instance.accreditatedMembers();
//	console.log('get:accreditatedMembers' + self.prefix);

	if(accreditatedMembers_res!=null)
		document.getElementById(self.prefix+'FoundationConference_accreditatedMembers_value').innerText = accreditatedMembers_res;
	var mangerCount_res = self.FoundationConference_instance.mangerCount();
//	console.log('get:mangerCount' + self.prefix);

	if(mangerCount_res!=null)
		document.getElementById(self.prefix+'FoundationConference_mangerCount_value').innerText = mangerCount_res;
	var organName_res = self.FoundationConference_instance.organName();
//	console.log('get:organName' + self.prefix);

	if(organName_res!=null)
		document.getElementById(self.prefix+'FoundationConference_organName_value').innerText = organName_res;
	var date_res = self.FoundationConference_instance.date();
//	console.log('get:date' + self.prefix);

	if(date_res!=null)
		document.getElementById(self.prefix+'FoundationConference_date_value').innerText = date_res;
	var lastFunctionId_res = self.FoundationConference_instance.lastFunctionId();
//	console.log('get:lastFunctionId' + self.prefix);

	if(lastFunctionId_res!=null)
		document.getElementById(self.prefix+'FoundationConference_lastFunctionId_value').innerText = lastFunctionId_res;
	var blogRegistry_res = self.FoundationConference_instance.blogRegistry();
//	console.log('get:blogRegistry' + self.prefix);

	if(blogRegistry_res!=null)
		document.getElementById(self.prefix+'FoundationConference_blogRegistry_value').innerText = blogRegistry_res;
	var isActive_res = self.FoundationConference_instance.isActive();
//	console.log('get:isActive' + self.prefix);

	if(isActive_res!=null)
		document.getElementById(self.prefix+'FoundationConference_isActive_value').innerText = isActive_res;
	var ballotCount_res = self.FoundationConference_instance.ballotCount();
//	console.log('get:ballotCount' + self.prefix);

	if(ballotCount_res!=null)
		document.getElementById(self.prefix+'FoundationConference_ballotCount_value').innerText = ballotCount_res;
//console.log('getStruct:managers' + self.prefix);
	var _key = document.getElementById(self.prefix+'FoundationConference_contract_attribute_managers_input').value;
	var managers_res = self.FoundationConference_instance.managers(_key);
//console.log('result:managers' + managers_res+' key: '+_key);
	if(managers_res!=null){
		document.getElementById(self.prefix+'FoundationConference_managers_value').innerText = managers_res;
	}
//console.log('getStruct:organFunctions' + self.prefix);
	var _key = document.getElementById(self.prefix+'FoundationConference_contract_attribute_organFunctions_input').value;
	var organFunctions_res = self.FoundationConference_instance.organFunctions(_key);
//console.log('result:organFunctions' + organFunctions_res+' key: '+_key);
	if(organFunctions_res!=null){
		document.getElementById(self.prefix+'FoundationConference_organFunctions_currentMember_value').innerText = organFunctions_res[0];
		document.getElementById(self.prefix+'FoundationConference_organFunctions_functionName_value').innerText = organFunctions_res[1];
		document.getElementById(self.prefix+'FoundationConference_organFunctions_id_value').innerText = organFunctions_res[2];
		document.getElementById(self.prefix+'FoundationConference_organFunctions_constitutionHash_value').innerText = organFunctions_res[3];
		document.getElementById(self.prefix+'FoundationConference_organFunctions_lastMemberChanged_value').innerText = organFunctions_res[4];
		document.getElementById(self.prefix+'FoundationConference_organFunctions_lastConstitutionHashChanged_value').innerText = organFunctions_res[5];
		document.getElementById(self.prefix+'FoundationConference_organFunctions_publisher_value').innerText = organFunctions_res[6];
	}
}

//call functions
//function FoundationConference_accreditationMember
this.Conference_accreditationMember_address=function() {
//console.log('function:accreditationMember' + self.prefix);
	var e = document.getElementById(self.prefix+'Conference_accreditationMember_address__address');
//	console.log(':' + self.prefix+'Conference_accreditationMember_address__address'+": "+e);
	var param__address = e.value;
//	console.log(':' +self.FoundationConference_instance+':');
	var res = self.FoundationConference_instance.accreditationMember(param__address);
}
//function FoundationConference_canAccess
this.Manageable_canAccess=function() {
//console.log('function:canAccess' + self.prefix);
//	console.log(':' +self.FoundationConference_instance+':');
	var res = self.FoundationConference_instance.canAccess();
	if(res!=null)
		document.getElementById(self.prefix+'Manageable_canAccess_res').innerText = res;
}
//function FoundationConference_changeMember
this.Organ_changeMember_uint_address=function() {
//console.log('function:changeMember' + self.prefix);
	var e = document.getElementById(self.prefix+'Organ_changeMember_uint_address__id');
//	console.log(':' + self.prefix+'Organ_changeMember_uint_address__id'+": "+e);
	var param__id = e.value;
	var e = document.getElementById(self.prefix+'Organ_changeMember_uint_address__address');
//	console.log(':' + self.prefix+'Organ_changeMember_uint_address__address'+": "+e);
	var param__address = e.value;
//	console.log(':' +self.FoundationConference_instance+':');
	var res = self.FoundationConference_instance.changeMember(param__id, param__address);
}
//function FoundationConference_isMember
this.MemberAware_isMember_address=function() {
//console.log('function:isMember' + self.prefix);
	var e = document.getElementById(self.prefix+'MemberAware_isMember_address__address');
//	console.log(':' + self.prefix+'MemberAware_isMember_address__address'+": "+e);
	var param__address = e.value;
//	console.log(':' +self.FoundationConference_instance+':');
	var res = self.FoundationConference_instance.isMember(param__address);
	if(res!=null)
		document.getElementById(self.prefix+'MemberAware_isMember_address_res').innerText = res;
}
//function FoundationConference_addManager
this.Manageable_addManager_address=function() {
//console.log('function:addManager' + self.prefix);
	var e = document.getElementById(self.prefix+'Manageable_addManager_address__newManagerAddress');
//	console.log(':' + self.prefix+'Manageable_addManager_address__newManagerAddress'+": "+e);
	var param__newManagerAddress = e.value;
//	console.log(':' +self.FoundationConference_instance+':');
	var res = self.FoundationConference_instance.addManager(param__newManagerAddress);
}
//function FoundationConference_createFunction
this.Organ_createFunction_string_string=function() {
//console.log('function:createFunction' + self.prefix);
	var e = document.getElementById(self.prefix+'Organ_createFunction_string_string__functionName');
//	console.log(':' + self.prefix+'Organ_createFunction_string_string__functionName'+": "+e);
	var param__functionName = e.value;
	var e = document.getElementById(self.prefix+'Organ_createFunction_string_string__constittiutionHash');
//	console.log(':' + self.prefix+'Organ_createFunction_string_string__constittiutionHash'+": "+e);
	var param__constittiutionHash = e.value;
//	console.log(':' +self.FoundationConference_instance+':');
	var res = self.FoundationConference_instance.createFunction(param__functionName, param__constittiutionHash);
}
//function FoundationConference_removeManager
this.Manageable_removeManager_address=function() {
//console.log('function:removeManager' + self.prefix);
	var e = document.getElementById(self.prefix+'Manageable_removeManager_address__managerAddress');
//	console.log(':' + self.prefix+'Manageable_removeManager_address__managerAddress'+": "+e);
	var param__managerAddress = e.value;
//	console.log(':' +self.FoundationConference_instance+':');
	var res = self.FoundationConference_instance.removeManager(param__managerAddress);
}
//function FoundationConference_initalizeOrgan
this.Organ_initalizeOrgan=function() {
//console.log('function:initalizeOrgan' + self.prefix);
//	console.log(':' +self.FoundationConference_instance+':');
	var res = self.FoundationConference_instance.initalizeOrgan();
}
//function FoundationConference_isManager
this.Manageable_isManager_address=function() {
//console.log('function:isManager' + self.prefix);
	var e = document.getElementById(self.prefix+'Manageable_isManager_address__managerAddress');
//	console.log(':' + self.prefix+'Manageable_isManager_address__managerAddress'+": "+e);
	var param__managerAddress = e.value;
//	console.log(':' +self.FoundationConference_instance+':');
	var res = self.FoundationConference_instance.isManager(param__managerAddress);
	if(res!=null)
		document.getElementById(self.prefix+'Manageable_isManager_address_res').innerText = res;
}
//function FoundationConference_publishFunctionMessage
this.Organ_publishFunctionMessage_uint_string_string_string=function() {
//console.log('function:publishFunctionMessage' + self.prefix);
	var e = document.getElementById(self.prefix+'Organ_publishFunctionMessage_uint_string_string_string_id');
//	console.log(':' + self.prefix+'Organ_publishFunctionMessage_uint_string_string_string_id'+": "+e);
	var param_id = e.value;
	var e = document.getElementById(self.prefix+'Organ_publishFunctionMessage_uint_string_string_string_message');
//	console.log(':' + self.prefix+'Organ_publishFunctionMessage_uint_string_string_string_message'+": "+e);
	var param_message = e.value;
	var e = document.getElementById(self.prefix+'Organ_publishFunctionMessage_uint_string_string_string_hash');
//	console.log(':' + self.prefix+'Organ_publishFunctionMessage_uint_string_string_string_hash'+": "+e);
	var param_hash = e.value;
	var e = document.getElementById(self.prefix+'Organ_publishFunctionMessage_uint_string_string_string_er');
//	console.log(':' + self.prefix+'Organ_publishFunctionMessage_uint_string_string_string_er'+": "+e);
	var param_er = e.value;
//	console.log(':' +self.FoundationConference_instance+':');
	var res = self.FoundationConference_instance.publishFunctionMessage(param_id, param_message, param_hash, param_er);
}
//function FoundationConference_createBallot
this.Organ_createBallot_string_bytes32=function() {
//console.log('function:createBallot' + self.prefix);
	var e = document.getElementById(self.prefix+'Organ_createBallot_string_bytes32_name');
//	console.log(':' + self.prefix+'Organ_createBallot_string_bytes32_name'+": "+e);
	var param_name = e.value;
	var e = document.getElementById(self.prefix+'Organ_createBallot_string_bytes32_proposalNames');
//	console.log(':' + self.prefix+'Organ_createBallot_string_bytes32_proposalNames'+": "+e);
	var param_proposalNames = e.value;
//	console.log(':' +self.FoundationConference_instance+':');
	var res = self.FoundationConference_instance.createBallot(param_name, param_proposalNames);
	if(res!=null)
		document.getElementById(self.prefix+'Organ_createBallot_string_bytes32_res').innerText = res;
}
//function FoundationConference_getFunctionBlogAddress
this.Organ_getFunctionBlogAddress_uint=function() {
//console.log('function:getFunctionBlogAddress' + self.prefix);
	var e = document.getElementById(self.prefix+'Organ_getFunctionBlogAddress_uint_id');
//	console.log(':' + self.prefix+'Organ_getFunctionBlogAddress_uint_id'+": "+e);
	var param_id = e.value;
//	console.log(':' +self.FoundationConference_instance+':');
	var res = self.FoundationConference_instance.getFunctionBlogAddress(param_id);
	if(res!=null)
		document.getElementById(self.prefix+'Organ_getFunctionBlogAddress_uint_res').innerText = res;
}
//function FoundationConference_getLastBallot
this.Organ_getLastBallot=function() {
//console.log('function:getLastBallot' + self.prefix);
//	console.log(':' +self.FoundationConference_instance+':');
	var res = self.FoundationConference_instance.getLastBallot();
	if(res!=null)
		document.getElementById(self.prefix+'Organ_getLastBallot_res').innerText = res;
}
//function FoundationConference_getOrganBlog
this.Organ_getOrganBlog=function() {
//console.log('function:getOrganBlog' + self.prefix);
//	console.log(':' +self.FoundationConference_instance+':');
	var res = self.FoundationConference_instance.getOrganBlog();
	if(res!=null)
		document.getElementById(self.prefix+'Organ_getOrganBlog_res').innerText = res;
}

//delegated calls

}// end controller	


// script for FoundationConference
function FoundationConferenceModel(prefix) {
	this.prefix = prefix;
	this.guiFactory = new FoundationConferenceGuiFactory();
	this.controller = new FoundationConferenceController();
	this.guiFactory.prefix = prefix;
	this.controller.prefix = prefix;
}
FoundationConferenceModel.prototype.create=function () {
	this.guiFactory.placeDefaultGui();
	this.controller._updateAttributes();
}


//class as GlueCode
//uses prefix + 'GuiContainer'
function FoundationConferenceManager(prefix,contract) {
	this.prefix = prefix;
	var self = this;
	this.c = new FoundationConferenceController();
	this.c.prefix=prefix;
	this.c.FoundationConference_instance=contract;
	this.c.contractAddress = contract.address;
	this.g = new FoundationConferenceGuiFactory();
	this.g.prefix = prefix;

	this.addGui = function() {
		var e = document.getElementById(this.prefix + 'GuiContainer');
//console.log('addGui:' + this.prefix+ 'GuiContainer'+e);
		var elemDiv = document.createElement('div');
		elemDiv.id= this.prefix +'FoundationConference_gui';
		e.appendChild(elemDiv);
		this.g.placeDefaultGui();
		document.getElementById(this.prefix+'FoundationConference_address').value = this.c.contractAddress;
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
		return this.c.FoundationConference_instance;
	}

}// end of manager

function FoundationConferenceGuiMananger(guiId){
	this.prefix = guiId;
	this.managers=new Array();	//[];		
	
	this.addManager = function(contract) {
//console.log('addManager:'+contract);
		var m = new FoundationConferenceManager(contract.address,contract);
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
			elemDiv.id= this.managers[i].prefix + 'GuiContainer';//'FoundationConference_gui';
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

