// file header
// contractVariable for MemberRegistry
var MemberRegistryContract = web3.eth.contract([
{"constant":true,"inputs":[],"name":"mangerCount","outputs":[{"name":"","type":"uint256"}],"type":"function"},
{"constant":true,"inputs":[],"name":"partyMemberCount","outputs":[{"name":"","type":"uint256"}],"type":"function"},
{"constant":true,"inputs":[],"name":"activeMemberCount","outputs":[{"name":"","type":"uint256"}],"type":"function"},
{"constant": true,"inputs": [{"name": "","type": "uint256"}],"name": "partyMembers","outputs": [
{ "name": "name", "type": "string"}
,{ "name": "id", "type": "uint256"}
,{ "name": "member", "type": "address"}
,{ "name": "state", "type": "MemberState"}
],"type": "function"	},
{"constant": true,"inputs": [{"name": "","type": "address"}],"name": "memberAddress","outputs": [
{ "name": "name", "type": "string"}
,{ "name": "id", "type": "uint256"}
,{ "name": "member", "type": "address"}
,{ "name": "state", "type": "MemberState"}
],"type": "function"	},
{"constant": true,"inputs": [{"name": "","type": "address"}],"name": "managers","outputs": [
{ "name": "", "type": "bool"}
],"type": "function"	},
{ "constant": false,
    "inputs": [{"name": "name","type": "string"},{"name": "_memberAddress","type": "address"}],    
    "name": "addMember",
    "outputs": [],
    "type": "function" }
,{ "constant": false,
    "inputs": [{"name": "_newManagerAddress","type": "address"}],    
    "name": "addManager",
    "outputs": [],
    "type": "function" }
,{ "constant": false,
    "inputs": [{"name": "id","type": "uint256"}],    
    "name": "unregisterMember",
    "outputs": [],
    "type": "function" }
,{ "constant": true,
    "inputs": [],    
    "name": "getMemberCount",
    "outputs": [{"name": "","type": "uint256"}],
    "type": "function" }
,{ "constant": false,
    "inputs": [{"name": "_managerAddress","type": "address"}],    
    "name": "removeManager",
    "outputs": [],
    "type": "function" }
,{ "constant": true,
    "inputs": [{"name": "_memberAdress","type": "address"}],    
    "name": "isActiveMember",
    "outputs": [{"name": "","type": "bool"}],
    "type": "function" }
,{ "constant": true,
    "inputs": [{"name": "_managerAddress","type": "address"}],    
    "name": "isManager",
    "outputs": [{"name": "","type": "bool"}],
    "type": "function" }
,{ "constant": false,
    "inputs": [{"name": "id","type": "uint256"},{"name": "_newMemberAddress","type": "address"}],    
    "name": "changeMemberAddress",
    "outputs": [],
    "type": "function" }
,{ "constant": true,
    "inputs": [{"name": "_address","type": "address"}],    
    "name": "getMemberData",
    "outputs": [{"name": "name","type": "string"},{"name": "id","type": "uint256"}],
    "type": "function" }
,{ "constant": false,
    "inputs": [{"name": "mAddress","type": "address"},{"name": "eventType","type": "uint256"}],    
    "name": "publishMemberEvent",
    "outputs": [],
    "type": "function" }
,
  { "anonymous": false,
    "inputs": 
	[
		{"indexed": false,
		 "name": "mAddress",
         "type": "address"}
,		{"indexed": false,
		 "name": "eType",
         "type": "EventType"}
,		{"indexed": false,
		 "name": "id",
         "type": "uint256"}
,		{"indexed": false,
		 "name": "name",
         "type": "string"}
,		{"indexed": false,
		 "name": "memberState",
         "type": "MemberState"}
	],    
    "name": "MemberEvent",
    "type": "event"  }
]);   
// contractVariable for MemberAware
var MemberAwareContract = web3.eth.contract([
{"constant":true,"inputs":[],"name":"memberRegistry","outputs":[{"name":"","type":"address"}],"type":"function"},

  ,{
    "constant": false,
    "inputs": [{"name": "aMemberRegistry","type": "address"}],    
    "name": "setMemberRegistry",
    "outputs": [],
    "type": "function"
  }

]);   


/**
* A simple bean class around the contract.
* The MemberRegistryModel.
**/
function MemberRegistryModel(contract) {
this.contract = contract;
	/**
	* Getter for mangerCount.
	**/
	this.getMangerCount = function(){
		return contract.mangerCount(); 
	}
	/**
	* Getter for partyMemberCount.
	**/
	this.getPartyMemberCount = function(){
		return contract.partyMemberCount(); 
	}
	/**
	* Getter for activeMemberCount.
	**/
	this.getActiveMemberCount = function(){
		return contract.activeMemberCount(); 
	}
	/**
	* Get the mapped value for a key.
	*/
	this.getManagers=function(key) {
		return contract.managers(key);
	}
	/**
	* Get the mapped value for a key.
	*/
	this.getPartyMembers=function(key) {
		return contract.partyMembers(key);
	}
	/**
	* Get the mapped value for a key.
	*/
	this.getMemberAddress=function(key) {
		return contract.memberAddress(key);
	}
	/**
	* Call addMember.
	**/
	this.addMember = function(name,_memberAddress){
		return contract.addMember(name,_memberAddress); 
	}
	/**
	* Call addManager.
	**/
	this.addManager = function(_newManagerAddress){
		return contract.addManager(_newManagerAddress); 
	}
	/**
	* Call unregisterMember.
	**/
	this.unregisterMember = function(id){
		return contract.unregisterMember(id); 
	}
	/**
	* Call getMemberCount.
	**/
	this.getMemberCount = function(){
		return contract.getMemberCount(); 
	}
	/**
	* Call removeManager.
	**/
	this.removeManager = function(_managerAddress){
		return contract.removeManager(_managerAddress); 
	}
	/**
	* Call isActiveMember.
	**/
	this.isActiveMember = function(_memberAdress){
		return contract.isActiveMember(_memberAdress); 
	}
	/**
	* Call isManager.
	**/
	this.isManager = function(_managerAddress){
		return contract.isManager(_managerAddress); 
	}
	/**
	* Call changeMemberAddress.
	**/
	this.changeMemberAddress = function(id,_newMemberAddress){
		return contract.changeMemberAddress(id,_newMemberAddress); 
	}
	/**
	* Call getMemberData.
	**/
	this.getMemberData = function(_address){
		return contract.getMemberData(_address); 
	}
	/**
	* Call publishMemberEvent.
	**/
	this.publishMemberEvent = function(mAddress,eventType){
		return contract.publishMemberEvent(mAddress,eventType); 
	}
}// end of function MemberRegistryModel

/**
* Gui factory MemberRegistry
**/
function MemberRegistryGuiFactory() {
	this.prefix='';
	
	/**
	* Places the default gui to 'e' or an element with id='MemberRegistry_gui'
	*/
	this.placeDefaultGui=function(e) {
		if(e==null)
			e = document.getElementById(this.prefix+'MemberRegistry_gui');
		if(e!=null)
			e.innerHTML = this.createDefaultGui();
		else
			console.log(this.prefix+'MemberRegistry_gui not found');
	}

	/**
	* The default generated gui with all actions and attributes.
	*/
	this.createDefaultGui=function() {
		return 		'<!-- gui for MemberRegistry_contract -->'
+		'		<div class="contract" id="'+this.prefix+'MemberRegistry_contract">'
+		'		MemberRegistry:'
+		'		  <input type="text" id="'+this.prefix+'MemberRegistry_address"> <button id="'+this.prefix+'MemberRegistryController.setAddress" onclick="'+this.prefix+'MemberRegistryController.setAddress()">change MemberRegistry Address</button>'
+		'		  <div class="contract_attributes" id="'+this.prefix+'MemberRegistry_contract_attributes"> attributes:'
+		'		    <div class="contract_attribute" id="'+this.prefix+'MemberRegistry_contract_attribute_mangerCount"> mangerCount:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'MemberRegistry_mangerCount_value"> </div>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'MemberRegistry_contract_attribute_partyMemberCount"> partyMemberCount:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'MemberRegistry_partyMemberCount_value"> </div>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'MemberRegistry_contract_attribute_activeMemberCount"> activeMemberCount:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'MemberRegistry_activeMemberCount_value"> </div>'
+		'		    </div>'
+		'		'
+		'		<div class="Value_Mapping" id="'+this.prefix+'MemberRegistry_contract_attribute_managers">mapping  managers:'
+		'				<input type="text" id="'+this.prefix+'MemberRegistry_contract_attribute_managers_input">(address)'
+		'		    	<div class="Mapping_value" id="'+this.prefix+'MemberRegistry_contract_attribute_address"> bool:'
+		'		      		<div class="contract_attribute_value" id="'+this.prefix+'MemberRegistry_managers_value"> </div>'
+		'		    	</div>'
+		'		  </div>'
+		'		<div class="Struct_Mapping" id="'+this.prefix+'Struc_MemberRegistry_contract_attribute_partyMembers">struc mapping  partyMembers:'
+		'				<input type="number" id="'+this.prefix+'MemberRegistry_contract_attribute_partyMembers_input">(uint)'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'MemberRegistry_contract_attribute_partyMembers_name"> name:'
+		'		      		<div class="Struct_attribute_value" id="'+this.prefix+'MemberRegistry_partyMembers_name_value"> </div>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'MemberRegistry_contract_attribute_partyMembers_id"> id:'
+		'		      		<div class="Struct_attribute_value" id="'+this.prefix+'MemberRegistry_partyMembers_id_value"> </div>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'MemberRegistry_contract_attribute_partyMembers_member"> member:'
+		'		      		<div class="Struct_attribute_value" id="'+this.prefix+'MemberRegistry_partyMembers_member_value"> </div>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'MemberRegistry_contract_attribute_partyMembers_state"> state:'
+		'		      		<div class="Struct_attribute_value" id="'+this.prefix+'MemberRegistry_partyMembers_state_value"> </div>'
+		'		    	</div>'
+		'		  </div>'
+		'		<div class="Struct_Mapping" id="'+this.prefix+'Struc_MemberRegistry_contract_attribute_memberAddress">struc mapping  memberAddress:'
+		'				<input type="text" id="'+this.prefix+'MemberRegistry_contract_attribute_memberAddress_input">(address)'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'MemberRegistry_contract_attribute_memberAddress_name"> name:'
+		'		      		<div class="Struct_attribute_value" id="'+this.prefix+'MemberRegistry_memberAddress_name_value"> </div>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'MemberRegistry_contract_attribute_memberAddress_id"> id:'
+		'		      		<div class="Struct_attribute_value" id="'+this.prefix+'MemberRegistry_memberAddress_id_value"> </div>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'MemberRegistry_contract_attribute_memberAddress_member"> member:'
+		'		      		<div class="Struct_attribute_value" id="'+this.prefix+'MemberRegistry_memberAddress_member_value"> </div>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'MemberRegistry_contract_attribute_memberAddress_state"> state:'
+		'		      		<div class="Struct_attribute_value" id="'+this.prefix+'MemberRegistry_memberAddress_state_value"> </div>'
+		'		    	</div>'
+		'		  </div>'
+		'		    <button id="'+this.prefix+'MemberRegistry_updateAttributes" onclick="'+this.prefix+'MemberRegistryController._updateAttributes()">update MemberRegistry attributes</button>'
+		'		  </div>'
+		'		  <div class="function_execution" id="'+this.prefix+'MemberRegistry_contract_function_MemberRegistry_addMember_string_address">'
+		'		MemberRegistry_addMember:'
+		'			  <div class="function_parameter">name<input type="text" id="'+this.prefix+'MemberRegistry_addMember_string_address_name"></div>'
+		'			  <div class="function_parameter">_memberAddress<input type="text" id="'+this.prefix+'MemberRegistry_addMember_string_address__memberAddress"></div>'
+		'			<button id="'+this.prefix+'MemberRegistryController.MemberRegistry_addMember_string_address" onclick="'+this.prefix+'MemberRegistryController.MemberRegistry_addMember_string_address()">execute MemberRegistry_addMember</button>'
+		'			<div class="function_result" id="'+this.prefix+'MemberRegistry_addMember_string_address_res"></div>'
+		'		  </div>'
+		'		  <div class="function_execution" id="'+this.prefix+'MemberRegistry_contract_function_Manageable_addManager_address">'
+		'		MemberRegistry_addManager:'
+		'			  <div class="function_parameter">_newManagerAddress<input type="text" id="'+this.prefix+'Manageable_addManager_address__newManagerAddress"></div>'
+		'			<button id="'+this.prefix+'MemberRegistryController.Manageable_addManager_address" onclick="'+this.prefix+'MemberRegistryController.Manageable_addManager_address()">execute MemberRegistry_addManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_addManager_address_res"></div>'
+		'		  </div>'
+		'		  <div class="function_execution" id="'+this.prefix+'MemberRegistry_contract_function_MemberRegistry_unregisterMember_uint">'
+		'		MemberRegistry_unregisterMember:'
+		'			  <div class="function_parameter">id<input type="number" id="'+this.prefix+'MemberRegistry_unregisterMember_uint_id"></div>'
+		'			<button id="'+this.prefix+'MemberRegistryController.MemberRegistry_unregisterMember_uint" onclick="'+this.prefix+'MemberRegistryController.MemberRegistry_unregisterMember_uint()">execute MemberRegistry_unregisterMember</button>'
+		'			<div class="function_result" id="'+this.prefix+'MemberRegistry_unregisterMember_uint_res"></div>'
+		'		  </div>'
+		'		  <div class="function_execution" id="'+this.prefix+'MemberRegistry_contract_function_MemberRegistry_getMemberCount">'
+		'		MemberRegistry_getMemberCount:'
+		'			<button id="'+this.prefix+'MemberRegistryController.MemberRegistry_getMemberCount" onclick="'+this.prefix+'MemberRegistryController.MemberRegistry_getMemberCount()">execute MemberRegistry_getMemberCount</button>'
+		'			<div class="function_result" id="'+this.prefix+'MemberRegistry_getMemberCount_res"></div>'
+		'		  </div>'
+		'		  <div class="function_execution" id="'+this.prefix+'MemberRegistry_contract_function_Manageable_removeManager_address">'
+		'		MemberRegistry_removeManager:'
+		'			  <div class="function_parameter">_managerAddress<input type="text" id="'+this.prefix+'Manageable_removeManager_address__managerAddress"></div>'
+		'			<button id="'+this.prefix+'MemberRegistryController.Manageable_removeManager_address" onclick="'+this.prefix+'MemberRegistryController.Manageable_removeManager_address()">execute MemberRegistry_removeManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_removeManager_address_res"></div>'
+		'		  </div>'
+		'		  <div class="function_execution" id="'+this.prefix+'MemberRegistry_contract_function_MemberRegistry_isActiveMember_address">'
+		'		MemberRegistry_isActiveMember:'
+		'			  <div class="function_parameter">_memberAdress<input type="text" id="'+this.prefix+'MemberRegistry_isActiveMember_address__memberAdress"></div>'
+		'			<button id="'+this.prefix+'MemberRegistryController.MemberRegistry_isActiveMember_address" onclick="'+this.prefix+'MemberRegistryController.MemberRegistry_isActiveMember_address()">execute MemberRegistry_isActiveMember</button>'
+		'			<div class="function_result" id="'+this.prefix+'MemberRegistry_isActiveMember_address_res"></div>'
+		'		  </div>'
+		'		  <div class="function_execution" id="'+this.prefix+'MemberRegistry_contract_function_Manageable_isManager_address">'
+		'		MemberRegistry_isManager:'
+		'			  <div class="function_parameter">_managerAddress<input type="text" id="'+this.prefix+'Manageable_isManager_address__managerAddress"></div>'
+		'			<button id="'+this.prefix+'MemberRegistryController.Manageable_isManager_address" onclick="'+this.prefix+'MemberRegistryController.Manageable_isManager_address()">execute MemberRegistry_isManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_isManager_address_res"></div>'
+		'		  </div>'
+		'		  <div class="function_execution" id="'+this.prefix+'MemberRegistry_contract_function_MemberRegistry_changeMemberAddress_uint_address">'
+		'		MemberRegistry_changeMemberAddress:'
+		'			  <div class="function_parameter">id<input type="number" id="'+this.prefix+'MemberRegistry_changeMemberAddress_uint_address_id"></div>'
+		'			  <div class="function_parameter">_newMemberAddress<input type="text" id="'+this.prefix+'MemberRegistry_changeMemberAddress_uint_address__newMemberAddress"></div>'
+		'			<button id="'+this.prefix+'MemberRegistryController.MemberRegistry_changeMemberAddress_uint_address" onclick="'+this.prefix+'MemberRegistryController.MemberRegistry_changeMemberAddress_uint_address()">execute MemberRegistry_changeMemberAddress</button>'
+		'			<div class="function_result" id="'+this.prefix+'MemberRegistry_changeMemberAddress_uint_address_res"></div>'
+		'		  </div>'
+		'		  <div class="function_execution" id="'+this.prefix+'MemberRegistry_contract_function_MemberRegistry_getMemberData_address">'
+		'		MemberRegistry_getMemberData:'
+		'			  <div class="function_parameter">_address<input type="text" id="'+this.prefix+'MemberRegistry_getMemberData_address__address"></div>'
+		'			<button id="'+this.prefix+'MemberRegistryController.MemberRegistry_getMemberData_address" onclick="'+this.prefix+'MemberRegistryController.MemberRegistry_getMemberData_address()">execute MemberRegistry_getMemberData</button>'
+		'			<div class="function_result" id="'+this.prefix+'MemberRegistry_getMemberData_address_res"></div>'
+		'		  </div>'
+		'		  <div class="function_execution" id="'+this.prefix+'MemberRegistry_contract_function_MemberRegistry_publishMemberEvent_address_uint">'
+		'		MemberRegistry_publishMemberEvent:'
+		'			  <div class="function_parameter">mAddress<input type="text" id="'+this.prefix+'MemberRegistry_publishMemberEvent_address_uint_mAddress"></div>'
+		'			  <div class="function_parameter">eventType<input type="number" id="'+this.prefix+'MemberRegistry_publishMemberEvent_address_uint_eventType"></div>'
+		'			<button id="'+this.prefix+'MemberRegistryController.MemberRegistry_publishMemberEvent_address_uint" onclick="'+this.prefix+'MemberRegistryController.MemberRegistry_publishMemberEvent_address_uint()">execute MemberRegistry_publishMemberEvent</button>'
+		'			<div class="function_result" id="'+this.prefix+'MemberRegistry_publishMemberEvent_address_uint_res"></div>'
+		'		  </div>'
+		'		'
+		'		</div>'
;
	}

	/**
	* Create the gui for the attributes.
	*/
	this.createAttributesGui=function() {
		return 		'    <div class="contract_attribute" id="'+this.prefix+'MemberRegistry_contract_attribute_mangerCount"> mangerCount:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'MemberRegistry_mangerCount_value"> </div>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'MemberRegistry_contract_attribute_partyMemberCount"> partyMemberCount:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'MemberRegistry_partyMemberCount_value"> </div>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'MemberRegistry_contract_attribute_activeMemberCount"> activeMemberCount:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'MemberRegistry_activeMemberCount_value"> </div>'
+		'		    </div>'
+		'		'
;
	}

	/**
	* Create the gui for the function addMember.
	*/
	this.createMemberRegistry_addMember_string_addressGui=function() {
		return 		'  <div class="function_execution" id="'+this.prefix+'MemberRegistry_contract_function_MemberRegistry_addMember_string_address">'
+		'		MemberRegistry_addMember:'
+		'			  <div class="function_parameter">name<input type="text" id="'+this.prefix+'MemberRegistry_addMember_string_address_name"></div>'
+		'			  <div class="function_parameter">_memberAddress<input type="text" id="'+this.prefix+'MemberRegistry_addMember_string_address__memberAddress"></div>'
+		'			<button id="'+this.prefix+'MemberRegistryController.MemberRegistry_addMember_string_address" onclick="'+this.prefix+'MemberRegistryController.MemberRegistry_addMember_string_address()">execute MemberRegistry_addMember</button>'
+		'			<div class="function_result" id="'+this.prefix+'MemberRegistry_addMember_string_address_res"></div>'
+		'		  </div>'
;
	}

	/**
	* Create the gui for the function addManager.
	*/
	this.createManageable_addManager_addressGui=function() {
		return 		'  <div class="function_execution" id="'+this.prefix+'MemberRegistry_contract_function_Manageable_addManager_address">'
+		'		MemberRegistry_addManager:'
+		'			  <div class="function_parameter">_newManagerAddress<input type="text" id="'+this.prefix+'Manageable_addManager_address__newManagerAddress"></div>'
+		'			<button id="'+this.prefix+'MemberRegistryController.Manageable_addManager_address" onclick="'+this.prefix+'MemberRegistryController.Manageable_addManager_address()">execute MemberRegistry_addManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_addManager_address_res"></div>'
+		'		  </div>'
;
	}

	/**
	* Create the gui for the function unregisterMember.
	*/
	this.createMemberRegistry_unregisterMember_uintGui=function() {
		return 		'  <div class="function_execution" id="'+this.prefix+'MemberRegistry_contract_function_MemberRegistry_unregisterMember_uint">'
+		'		MemberRegistry_unregisterMember:'
+		'			  <div class="function_parameter">id<input type="number" id="'+this.prefix+'MemberRegistry_unregisterMember_uint_id"></div>'
+		'			<button id="'+this.prefix+'MemberRegistryController.MemberRegistry_unregisterMember_uint" onclick="'+this.prefix+'MemberRegistryController.MemberRegistry_unregisterMember_uint()">execute MemberRegistry_unregisterMember</button>'
+		'			<div class="function_result" id="'+this.prefix+'MemberRegistry_unregisterMember_uint_res"></div>'
+		'		  </div>'
;
	}

	/**
	* Create the gui for the function getMemberCount.
	*/
	this.createMemberRegistry_getMemberCountGui=function() {
		return 		'  <div class="function_execution" id="'+this.prefix+'MemberRegistry_contract_function_MemberRegistry_getMemberCount">'
+		'		MemberRegistry_getMemberCount:'
+		'			<button id="'+this.prefix+'MemberRegistryController.MemberRegistry_getMemberCount" onclick="'+this.prefix+'MemberRegistryController.MemberRegistry_getMemberCount()">execute MemberRegistry_getMemberCount</button>'
+		'			<div class="function_result" id="'+this.prefix+'MemberRegistry_getMemberCount_res"></div>'
+		'		  </div>'
;
	}

	/**
	* Create the gui for the function removeManager.
	*/
	this.createManageable_removeManager_addressGui=function() {
		return 		'  <div class="function_execution" id="'+this.prefix+'MemberRegistry_contract_function_Manageable_removeManager_address">'
+		'		MemberRegistry_removeManager:'
+		'			  <div class="function_parameter">_managerAddress<input type="text" id="'+this.prefix+'Manageable_removeManager_address__managerAddress"></div>'
+		'			<button id="'+this.prefix+'MemberRegistryController.Manageable_removeManager_address" onclick="'+this.prefix+'MemberRegistryController.Manageable_removeManager_address()">execute MemberRegistry_removeManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_removeManager_address_res"></div>'
+		'		  </div>'
;
	}

	/**
	* Create the gui for the function isActiveMember.
	*/
	this.createMemberRegistry_isActiveMember_addressGui=function() {
		return 		'  <div class="function_execution" id="'+this.prefix+'MemberRegistry_contract_function_MemberRegistry_isActiveMember_address">'
+		'		MemberRegistry_isActiveMember:'
+		'			  <div class="function_parameter">_memberAdress<input type="text" id="'+this.prefix+'MemberRegistry_isActiveMember_address__memberAdress"></div>'
+		'			<button id="'+this.prefix+'MemberRegistryController.MemberRegistry_isActiveMember_address" onclick="'+this.prefix+'MemberRegistryController.MemberRegistry_isActiveMember_address()">execute MemberRegistry_isActiveMember</button>'
+		'			<div class="function_result" id="'+this.prefix+'MemberRegistry_isActiveMember_address_res"></div>'
+		'		  </div>'
;
	}

	/**
	* Create the gui for the function isManager.
	*/
	this.createManageable_isManager_addressGui=function() {
		return 		'  <div class="function_execution" id="'+this.prefix+'MemberRegistry_contract_function_Manageable_isManager_address">'
+		'		MemberRegistry_isManager:'
+		'			  <div class="function_parameter">_managerAddress<input type="text" id="'+this.prefix+'Manageable_isManager_address__managerAddress"></div>'
+		'			<button id="'+this.prefix+'MemberRegistryController.Manageable_isManager_address" onclick="'+this.prefix+'MemberRegistryController.Manageable_isManager_address()">execute MemberRegistry_isManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_isManager_address_res"></div>'
+		'		  </div>'
;
	}

	/**
	* Create the gui for the function changeMemberAddress.
	*/
	this.createMemberRegistry_changeMemberAddress_uint_addressGui=function() {
		return 		'  <div class="function_execution" id="'+this.prefix+'MemberRegistry_contract_function_MemberRegistry_changeMemberAddress_uint_address">'
+		'		MemberRegistry_changeMemberAddress:'
+		'			  <div class="function_parameter">id<input type="number" id="'+this.prefix+'MemberRegistry_changeMemberAddress_uint_address_id"></div>'
+		'			  <div class="function_parameter">_newMemberAddress<input type="text" id="'+this.prefix+'MemberRegistry_changeMemberAddress_uint_address__newMemberAddress"></div>'
+		'			<button id="'+this.prefix+'MemberRegistryController.MemberRegistry_changeMemberAddress_uint_address" onclick="'+this.prefix+'MemberRegistryController.MemberRegistry_changeMemberAddress_uint_address()">execute MemberRegistry_changeMemberAddress</button>'
+		'			<div class="function_result" id="'+this.prefix+'MemberRegistry_changeMemberAddress_uint_address_res"></div>'
+		'		  </div>'
;
	}

	/**
	* Create the gui for the function getMemberData.
	*/
	this.createMemberRegistry_getMemberData_addressGui=function() {
		return 		'  <div class="function_execution" id="'+this.prefix+'MemberRegistry_contract_function_MemberRegistry_getMemberData_address">'
+		'		MemberRegistry_getMemberData:'
+		'			  <div class="function_parameter">_address<input type="text" id="'+this.prefix+'MemberRegistry_getMemberData_address__address"></div>'
+		'			<button id="'+this.prefix+'MemberRegistryController.MemberRegistry_getMemberData_address" onclick="'+this.prefix+'MemberRegistryController.MemberRegistry_getMemberData_address()">execute MemberRegistry_getMemberData</button>'
+		'			<div class="function_result" id="'+this.prefix+'MemberRegistry_getMemberData_address_res"></div>'
+		'		  </div>'
;
	}

	/**
	* Create the gui for the function publishMemberEvent.
	*/
	this.createMemberRegistry_publishMemberEvent_address_uintGui=function() {
		return 		'  <div class="function_execution" id="'+this.prefix+'MemberRegistry_contract_function_MemberRegistry_publishMemberEvent_address_uint">'
+		'		MemberRegistry_publishMemberEvent:'
+		'			  <div class="function_parameter">mAddress<input type="text" id="'+this.prefix+'MemberRegistry_publishMemberEvent_address_uint_mAddress"></div>'
+		'			  <div class="function_parameter">eventType<input type="number" id="'+this.prefix+'MemberRegistry_publishMemberEvent_address_uint_eventType"></div>'
+		'			<button id="'+this.prefix+'MemberRegistryController.MemberRegistry_publishMemberEvent_address_uint" onclick="'+this.prefix+'MemberRegistryController.MemberRegistry_publishMemberEvent_address_uint()">execute MemberRegistry_publishMemberEvent</button>'
+		'			<div class="function_result" id="'+this.prefix+'MemberRegistry_publishMemberEvent_address_uint_res"></div>'
+		'		  </div>'
;
	}
	/**
	* Create the gui for the partyMembers struct element.
	*/
	this.createpartyMembersStructGui=function() {
		return 		'<div class="Struct_Mapping" id="'+this.prefix+'Struc_MemberRegistry_contract_attribute_partyMembers">struc mapping  partyMembers:'
+		'				<input type="number" id="'+this.prefix+'MemberRegistry_contract_attribute_partyMembers_input">(uint)'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'MemberRegistry_contract_attribute_partyMembers_name"> name:'
+		'		      		<div class="Struct_attribute_value" id="'+this.prefix+'MemberRegistry_partyMembers_name_value"> </div>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'MemberRegistry_contract_attribute_partyMembers_id"> id:'
+		'		      		<div class="Struct_attribute_value" id="'+this.prefix+'MemberRegistry_partyMembers_id_value"> </div>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'MemberRegistry_contract_attribute_partyMembers_member"> member:'
+		'		      		<div class="Struct_attribute_value" id="'+this.prefix+'MemberRegistry_partyMembers_member_value"> </div>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'MemberRegistry_contract_attribute_partyMembers_state"> state:'
+		'		      		<div class="Struct_attribute_value" id="'+this.prefix+'MemberRegistry_partyMembers_state_value"> </div>'
+		'		    	</div>'
+		'		  </div>'
;
	}
	/**
	* Create the gui for the memberAddress struct element.
	*/
	this.creatememberAddressStructGui=function() {
		return 		'<div class="Struct_Mapping" id="'+this.prefix+'Struc_MemberRegistry_contract_attribute_memberAddress">struc mapping  memberAddress:'
+		'				<input type="text" id="'+this.prefix+'MemberRegistry_contract_attribute_memberAddress_input">(address)'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'MemberRegistry_contract_attribute_memberAddress_name"> name:'
+		'		      		<div class="Struct_attribute_value" id="'+this.prefix+'MemberRegistry_memberAddress_name_value"> </div>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'MemberRegistry_contract_attribute_memberAddress_id"> id:'
+		'		      		<div class="Struct_attribute_value" id="'+this.prefix+'MemberRegistry_memberAddress_id_value"> </div>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'MemberRegistry_contract_attribute_memberAddress_member"> member:'
+		'		      		<div class="Struct_attribute_value" id="'+this.prefix+'MemberRegistry_memberAddress_member_value"> </div>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'MemberRegistry_contract_attribute_memberAddress_state"> state:'
+		'		      		<div class="Struct_attribute_value" id="'+this.prefix+'MemberRegistry_memberAddress_state_value"> </div>'
+		'		    	</div>'
+		'		  </div>'
;
	}

	/**
	* Create a div with '@inner' as inner elements.
    * @inner - the inner text
	*/
	this.createSeletonGui=function(inner) {
		return 	'<!-- gui for MemberRegistry_contract -->'
		+	'	<div class="contract" id="'+this.prefix+'MemberRegistry_contract">'
		+ inner
		+'</div>';
	}


	//eventguis

	/**
	* Create a gui for the MemberEvent event.
    * @prefix - a prefix
	* @blockHash - the bolckhash 
	* @blockNumber - the number of the block
	*/
	this.createMemberEventLogDataGui = function(prefix, blockHash, blockNumber
	,mAddress	,eType	,id	,name	,memberState	) {
		return '<div class="eventRow">'
        +'<div class="eventValue">'+mAddress+'</div>'
        +'<div class="eventValue">'+eType+'</div>'
        +'<div class="eventValue">'+id+'</div>'
        +'<div class="eventValue">'+name+'</div>'
        +'<div class="eventValue">'+memberState+'</div>'
        +' </div>';
	}
	/**
	* Create the gui for the function Struc MemberRegistry-partyMembers.
	*/
	this.createStruc_MemberRegistry_contract_attribute_partyMembersGui=function(struct) {
		return '<div class="Struct_Mapping" id='+this.prefix+'"Struc_MemberRegistry_contract_attribute_partyMembers">'
    		+'<div class="Struct_attribute" id='+this.prefix+'"MemberRegistry_contract_attribute_partyMembers_name"> name:'
      		+'	<div class="Struct_attribute_value" id='+this.prefix+'"MemberRegistry_partyMembers_name_value">'+struct.name()+'</div>'
    		+'</div>'
    		+'<div class="Struct_attribute" id='+this.prefix+'"MemberRegistry_contract_attribute_partyMembers_id"> id:'
      		+'	<div class="Struct_attribute_value" id='+this.prefix+'"MemberRegistry_partyMembers_id_value">'+struct.id()+'</div>'
    		+'</div>'
    		+'<div class="Struct_attribute" id='+this.prefix+'"MemberRegistry_contract_attribute_partyMembers_member"> member:'
      		+'	<div class="Struct_attribute_value" id='+this.prefix+'"MemberRegistry_partyMembers_member_value">'+struct.member()+'</div>'
    		+'</div>'
    		+'<div class="Struct_attribute" id='+this.prefix+'"MemberRegistry_contract_attribute_partyMembers_state"> state:'
      		+'	<div class="Struct_attribute_value" id='+this.prefix+'"MemberRegistry_partyMembers_state_value">'+struct.state()+'</div>'
    		+'</div>'
  		+'</div>';
	}
	/**
	* Create the gui for the function Struc MemberRegistry-memberAddress.
	*/
	this.createStruc_MemberRegistry_contract_attribute_memberAddressGui=function(struct) {
		return '<div class="Struct_Mapping" id='+this.prefix+'"Struc_MemberRegistry_contract_attribute_memberAddress">'
    		+'<div class="Struct_attribute" id='+this.prefix+'"MemberRegistry_contract_attribute_memberAddress_name"> name:'
      		+'	<div class="Struct_attribute_value" id='+this.prefix+'"MemberRegistry_memberAddress_name_value">'+struct.name()+'</div>'
    		+'</div>'
    		+'<div class="Struct_attribute" id='+this.prefix+'"MemberRegistry_contract_attribute_memberAddress_id"> id:'
      		+'	<div class="Struct_attribute_value" id='+this.prefix+'"MemberRegistry_memberAddress_id_value">'+struct.id()+'</div>'
    		+'</div>'
    		+'<div class="Struct_attribute" id='+this.prefix+'"MemberRegistry_contract_attribute_memberAddress_member"> member:'
      		+'	<div class="Struct_attribute_value" id='+this.prefix+'"MemberRegistry_memberAddress_member_value">'+struct.member()+'</div>'
    		+'</div>'
    		+'<div class="Struct_attribute" id='+this.prefix+'"MemberRegistry_contract_attribute_memberAddress_state"> state:'
      		+'	<div class="Struct_attribute_value" id='+this.prefix+'"MemberRegistry_memberAddress_state_value">'+struct.state()+'</div>'
    		+'</div>'
  		+'</div>';
	}

}//end guifactory

/**
* Class MemberRegistryController. 
* The controller wrap's the 'instance' contract and binds all actions to document elements.
* Parameters are taken from elements with self.prefix+'functionName_parameterName'
*
* self.prefix+'MemberRegistryController.setAddress' - 
* self.prefix+'MemberRegistry_updateAttributes'     - 
* self.prefix+'MemberRegistry_addMember_string_address -
* self.prefix+'Manageable_addManager_address -
* self.prefix+'MemberRegistry_unregisterMember_uint -
* self.prefix+'MemberRegistry_getMemberCount -
* self.prefix+'Manageable_removeManager_address -
* self.prefix+'MemberRegistry_isActiveMember_address -
* self.prefix+'Manageable_isManager_address -
* self.prefix+'MemberRegistry_changeMemberAddress_uint_address -
* self.prefix+'MemberRegistry_getMemberData_address -
* self.prefix+'MemberRegistry_publishMemberEvent_address_uint -
*/
function MemberRegistryController() {

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
		var btn = document.getElementById(self.prefix+'MemberRegistryController.setAddress');
		if(btn!=undefined)		
			btn.onclick = this.setAddress;
		else console.log('addres widget not bound');

		var btn = document.getElementById(self.prefix+'MemberRegistry_updateAttributes');
		if(btn!=undefined)
			btn.onclick = this._updateAttributes;
		else console.log('_updateAttributes widget not bound');
		var btn = document.getElementById(self.prefix+'MemberRegistryController.MemberRegistry_addMember_string_address');
		if(btn!=undefined)
			btn.onclick = this.MemberRegistry_addMember_string_address;
		else console.log('MemberRegistry_addMember_string_address widget not bound');
		var btn = document.getElementById(self.prefix+'MemberRegistryController.Manageable_addManager_address');
		if(btn!=undefined)
			btn.onclick = this.Manageable_addManager_address;
		else console.log('Manageable_addManager_address widget not bound');
		var btn = document.getElementById(self.prefix+'MemberRegistryController.MemberRegistry_unregisterMember_uint');
		if(btn!=undefined)
			btn.onclick = this.MemberRegistry_unregisterMember_uint;
		else console.log('MemberRegistry_unregisterMember_uint widget not bound');
		var btn = document.getElementById(self.prefix+'MemberRegistryController.MemberRegistry_getMemberCount');
		if(btn!=undefined)
			btn.onclick = this.MemberRegistry_getMemberCount;
		else console.log('MemberRegistry_getMemberCount widget not bound');
		var btn = document.getElementById(self.prefix+'MemberRegistryController.Manageable_removeManager_address');
		if(btn!=undefined)
			btn.onclick = this.Manageable_removeManager_address;
		else console.log('Manageable_removeManager_address widget not bound');
		var btn = document.getElementById(self.prefix+'MemberRegistryController.MemberRegistry_isActiveMember_address');
		if(btn!=undefined)
			btn.onclick = this.MemberRegistry_isActiveMember_address;
		else console.log('MemberRegistry_isActiveMember_address widget not bound');
		var btn = document.getElementById(self.prefix+'MemberRegistryController.Manageable_isManager_address');
		if(btn!=undefined)
			btn.onclick = this.Manageable_isManager_address;
		else console.log('Manageable_isManager_address widget not bound');
		var btn = document.getElementById(self.prefix+'MemberRegistryController.MemberRegistry_changeMemberAddress_uint_address');
		if(btn!=undefined)
			btn.onclick = this.MemberRegistry_changeMemberAddress_uint_address;
		else console.log('MemberRegistry_changeMemberAddress_uint_address widget not bound');
		var btn = document.getElementById(self.prefix+'MemberRegistryController.MemberRegistry_getMemberData_address');
		if(btn!=undefined)
			btn.onclick = this.MemberRegistry_getMemberData_address;
		else console.log('MemberRegistry_getMemberData_address widget not bound');
		var btn = document.getElementById(self.prefix+'MemberRegistryController.MemberRegistry_publishMemberEvent_address_uint');
		if(btn!=undefined)
			btn.onclick = this.MemberRegistry_publishMemberEvent_address_uint;
		else console.log('MemberRegistry_publishMemberEvent_address_uint widget not bound');

	}

	/**
	* Set the address.
	*/
	this.setAddress=function() {
		var _address = document.getElementById(self.prefix+'MemberRegistry_address');
		if(_address==null)return;

		self.MemberRegistry_instance = MemberRegistryContract.at(_address.value);
		self.contractAddress = _address.value;
		self._updateAttributes();
	}
	
	/**
	* Update attributes.
	*
	* prefix+'MemberRegistry_mangerCount_value' - 
	* prefix+'MemberRegistry_partyMemberCount_value' - 
	* prefix+'MemberRegistry_activeMemberCount_value' - 
	**/
	this._updateAttributes=function () {
		if(this.instance===null) return;
		// update attributes
		var mangerCount_res = self.instance.mangerCount();
		var e = document.getElementById(self.prefix+'MemberRegistry_mangerCount_value');
		if(mangerCount_res!=null && e!=null)
			e.innerText = mangerCount_res;
		else console.log(self.prefix+'MemberRegistry_mangerCount_value not found');
		var partyMemberCount_res = self.instance.partyMemberCount();
		var e = document.getElementById(self.prefix+'MemberRegistry_partyMemberCount_value');
		if(partyMemberCount_res!=null && e!=null)
			e.innerText = partyMemberCount_res;
		else console.log(self.prefix+'MemberRegistry_partyMemberCount_value not found');
		var activeMemberCount_res = self.instance.activeMemberCount();
		var e = document.getElementById(self.prefix+'MemberRegistry_activeMemberCount_value');
		if(activeMemberCount_res!=null && e!=null)
			e.innerText = activeMemberCount_res;
		else console.log(self.prefix+'MemberRegistry_activeMemberCount_value not found');
		var e = document.getElementById(self.prefix+'MemberRegistry_contract_attribute_managers_input');
		if(e!=null){
			var _key = e.value;
			if(_key!='') {
			var managers_res = self.instance.managers(_key);
			if(managers_res!=null){
				var e1 = document.getElementById(self.prefix+'MemberRegistry_managers_value');
				if(e1!=null)	
					e1.innerText = managers_res;
			}}}
		var e = document.getElementById(self.prefix+'MemberRegistry_contract_attribute_partyMembers_input');
		if(e!=null){
			var _key = e.value;
			if(_key!='') {
			var partyMembers_res = self.instance.partyMembers(_key);
			if(partyMembers_res!=null){
			var e1 = document.getElementById(self.prefix+'MemberRegistry_partyMembers_name_value');
			if(e1!=null)	
				e1.innerText = partyMembers_res[0];
			var e1 = document.getElementById(self.prefix+'MemberRegistry_partyMembers_id_value');
			if(e1!=null)	
				e1.innerText = partyMembers_res[1];
			var e1 = document.getElementById(self.prefix+'MemberRegistry_partyMembers_member_value');
			if(e1!=null)	
				e1.innerText = partyMembers_res[2];
			var e1 = document.getElementById(self.prefix+'MemberRegistry_partyMembers_state_value');
			if(e1!=null)	
				e1.innerText = partyMembers_res[3];
			}}}
		var e = document.getElementById(self.prefix+'MemberRegistry_contract_attribute_memberAddress_input');
		if(e!=null){
			var _key = e.value;
			if(_key!='') {
			var memberAddress_res = self.instance.memberAddress(_key);
			if(memberAddress_res!=null){
			var e1 = document.getElementById(self.prefix+'MemberRegistry_memberAddress_name_value');
			if(e1!=null)	
				e1.innerText = memberAddress_res[0];
			var e1 = document.getElementById(self.prefix+'MemberRegistry_memberAddress_id_value');
			if(e1!=null)	
				e1.innerText = memberAddress_res[1];
			var e1 = document.getElementById(self.prefix+'MemberRegistry_memberAddress_member_value');
			if(e1!=null)	
				e1.innerText = memberAddress_res[2];
			var e1 = document.getElementById(self.prefix+'MemberRegistry_memberAddress_state_value');
			if(e1!=null)	
				e1.innerText = memberAddress_res[3];
			}}}
	}

	//call functions
	
	/**
	* Calls the contract function MemberRegistry_addMember.
	*
	* this.prefix+'MemberRegistry_addMember_string_address_name' -
	* this.prefix+'MemberRegistry_addMember_string_address__memberAddress' -
	**/
	this.MemberRegistry_addMember_string_address=function() {
		var e = document.getElementById(self.prefix+'MemberRegistry_addMember_string_address_name');
		if(e!=null)
			var param_name = e.value;
		else console.log(self.prefix+'MemberRegistry_addMember_string_address_name not found');
		var e = document.getElementById(self.prefix+'MemberRegistry_addMember_string_address__memberAddress');
		if(e!=null)
			var param__memberAddress = e.value;
		else console.log(self.prefix+'MemberRegistry_addMember_string_address__memberAddress not found');
		var res = self.instance.addMember(param_name, param__memberAddress);
	}
	
	/**
	* Calls the contract function MemberRegistry_canAccess.
	*
	**/
	this.Manageable_canAccess=function() {
		var res = self.instance.canAccess();
		var e = document.getElementById(self.prefix+'Manageable_canAccess_res');
		if(res!=null && e!=null)
			e.innerText = res;
	}
	
	/**
	* Calls the contract function MemberRegistry_addManager.
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
	* Calls the contract function MemberRegistry_unregisterMember.
	*
	* this.prefix+'MemberRegistry_unregisterMember_uint_id' -
	**/
	this.MemberRegistry_unregisterMember_uint=function() {
		var e = document.getElementById(self.prefix+'MemberRegistry_unregisterMember_uint_id');
		if(e!=null)
			var param_id = e.value;
		else console.log(self.prefix+'MemberRegistry_unregisterMember_uint_id not found');
		var res = self.instance.unregisterMember(param_id);
	}
	
	/**
	* Calls the contract function MemberRegistry_getMemberCount.
	*
	**/
	this.MemberRegistry_getMemberCount=function() {
		var res = self.instance.getMemberCount();
		var e = document.getElementById(self.prefix+'MemberRegistry_getMemberCount_res');
		if(res!=null && e!=null)
			e.innerText = res;
	}
	
	/**
	* Calls the contract function MemberRegistry_removeManager.
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
	* Calls the contract function MemberRegistry_isActiveMember.
	*
	* this.prefix+'MemberRegistry_isActiveMember_address__memberAdress' -
	**/
	this.MemberRegistry_isActiveMember_address=function() {
		var e = document.getElementById(self.prefix+'MemberRegistry_isActiveMember_address__memberAdress');
		if(e!=null)
			var param__memberAdress = e.value;
		else console.log(self.prefix+'MemberRegistry_isActiveMember_address__memberAdress not found');
		var res = self.instance.isActiveMember(param__memberAdress);
		var e = document.getElementById(self.prefix+'MemberRegistry_isActiveMember_address_res');
		if(res!=null && e!=null)
			e.innerText = res;
	}
	
	/**
	* Calls the contract function MemberRegistry_isManager.
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
	* Calls the contract function MemberRegistry_changeMemberAddress.
	*
	* this.prefix+'MemberRegistry_changeMemberAddress_uint_address_id' -
	* this.prefix+'MemberRegistry_changeMemberAddress_uint_address__newMemberAddress' -
	**/
	this.MemberRegistry_changeMemberAddress_uint_address=function() {
		var e = document.getElementById(self.prefix+'MemberRegistry_changeMemberAddress_uint_address_id');
		if(e!=null)
			var param_id = e.value;
		else console.log(self.prefix+'MemberRegistry_changeMemberAddress_uint_address_id not found');
		var e = document.getElementById(self.prefix+'MemberRegistry_changeMemberAddress_uint_address__newMemberAddress');
		if(e!=null)
			var param__newMemberAddress = e.value;
		else console.log(self.prefix+'MemberRegistry_changeMemberAddress_uint_address__newMemberAddress not found');
		var res = self.instance.changeMemberAddress(param_id, param__newMemberAddress);
	}
	
	/**
	* Calls the contract function MemberRegistry_getMemberData.
	*
	* this.prefix+'MemberRegistry_getMemberData_address__address' -
	**/
	this.MemberRegistry_getMemberData_address=function() {
		var e = document.getElementById(self.prefix+'MemberRegistry_getMemberData_address__address');
		if(e!=null)
			var param__address = e.value;
		else console.log(self.prefix+'MemberRegistry_getMemberData_address__address not found');
		var res = self.instance.getMemberData(param__address);
		var e = document.getElementById(self.prefix+'MemberRegistry_getMemberData_address_res');
		if(res!=null && e!=null)
			e.innerText = res;
	}
	
	/**
	* Calls the contract function MemberRegistry_publishMemberEvent.
	*
	* this.prefix+'MemberRegistry_publishMemberEvent_address_uint_mAddress' -
	* this.prefix+'MemberRegistry_publishMemberEvent_address_uint_eventType' -
	**/
	this.MemberRegistry_publishMemberEvent_address_uint=function() {
		var e = document.getElementById(self.prefix+'MemberRegistry_publishMemberEvent_address_uint_mAddress');
		if(e!=null)
			var param_mAddress = e.value;
		else console.log(self.prefix+'MemberRegistry_publishMemberEvent_address_uint_mAddress not found');
		var e = document.getElementById(self.prefix+'MemberRegistry_publishMemberEvent_address_uint_eventType');
		if(e!=null)
			var param_eventType = e.value;
		else console.log(self.prefix+'MemberRegistry_publishMemberEvent_address_uint_eventType not found');
		var res = self.instance.publishMemberEvent(param_mAddress, param_eventType);
	}
	
//delegated calls
}// end controller	

/**
* class as GlueCode MemberRegistryManager,
* uses prefix + 'GuiContainer' as target element.
* It combines a MemberRegistryController as 'c' and a MemberRegistryGuiFactory as 'g'.
**/
function MemberRegistryManager(prefix,contract,containerId) {
	this.prefix = prefix;
	var self = this;
	this.c = new MemberRegistryController();
	this.c.prefix=prefix;
	this.c.instance=contract;
	this.c.contractAddress = contract.address;
	this.g = new MemberRegistryGuiFactory();
	this.g.prefix = prefix;
	this.containerId = containerId;
	this.eventlogPrefix = '';
	this.guiFunction = null;
	this.eventMemberEvent = null;
	
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
		elemDiv.id= this.prefix +'MemberRegistry_gui';
		e.appendChild(elemDiv);
		if(this.guiFunction==null)
			elemDiv.innerHTML = this.createGui(this.g);
		else elemDiv.innerHTML = this.guiFunction(this.g);
		
		var e = document.getElementById(this.prefix+'MemberRegistry_address');
		if(e!=null)
			e.value = this.c.contractAddress;
		else 
			console.log(this.prefix+'MemberRegistry_address not found');
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
//Start of user code MemberRegistry_create_gui_js
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
	* Getter for the contract 'MemberRegistry' instance.
	**/
	this.getContract = function(){
		return this.c.instance;
	}

	/**
	* Watch for the contract events.
	* The events are stored in an element with the id this.eventlogPrefix+'eventLog'.
	**/
	this.watchEvents=function(){
	var event_MemberEvent = this.getContract().MemberEvent({},{fromBlock: 0});
	var elp = this.eventlogPrefix;
	var callback = this.eventMemberEvent;
	event_MemberEvent.watch(function(error,result){
	if(!error){
		if(callback!=null)
			callback(result);

		}else
			console.log(error);	
	});
	}

}// end of manager

/**
* Manages a list of MemberRegistryManager uses the guid id to place the gui which is also the eventlogPrefix
*/
function MemberRegistryGuiMananger(guiId){
	this.prefix = guiId;
	this.managers=new Array();	//[];		
	this.guiFunction = null;
	this.eventMemberEvent = null;
	this.managerMap = {};
	
	/**
	* Add a contract to this manager.
	* @contract the web3 contract instance
	*/
	this.addManager = function(contract) {
		var m = new MemberRegistryManager(contract.address,contract,this.prefix);
		m.eventlogPrefix = this.prefix;
		m.eventMemberEvent = this.eventMemberEvent;
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
			elemDiv.id= manager.prefix + 'GuiContainer';//'MemberRegistry_gui';
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
function MemberRegistryDeployment(guiId){
	this.prefix = guiId;
//Start of user code MemberRegistry_deployment_attributes_js
//TODO: implement
//End of user code

	
	/**
	* The default deployer function.
	**/
	this.deployDefault = function(){
		//Start of user code MemberRegistry_deployDefault
		//TODO: implement
		//End of user code
	}

//Start of user code MemberRegistry_deployment_js
//TODO: implement
//End of user code
}
/**
* A simple bean class around the contract.
* The MemberAwareModel.
**/
function MemberAwareModel(contract) {
this.contract = contract;
	/**
	* Getter for memberRegistry.
	**/
	this.getMemberRegistry = function(){
		return contract.memberRegistry(); 
	}
}// end of function MemberAwareModel

/**
* Gui factory MemberAware
**/
function MemberAwareGuiFactory() {
	this.prefix='';
	
	/**
	* Places the default gui to 'e' or an element with id='MemberAware_gui'
	*/
	this.placeDefaultGui=function(e) {
		if(e==null)
			e = document.getElementById(this.prefix+'MemberAware_gui');
		if(e!=null)
			e.innerHTML = this.createDefaultGui();
		else
			console.log(this.prefix+'MemberAware_gui not found');
	}

	/**
	* The default generated gui with all actions and attributes.
	*/
	this.createDefaultGui=function() {
		return 		'<!-- gui for MemberAware_contract -->'
+		'		<div class="contract" id="'+this.prefix+'MemberAware_contract">'
+		'		MemberAware:'
+		'		  <input type="text" id="'+this.prefix+'MemberAware_address"> <button id="'+this.prefix+'MemberAwareController.setAddress" onclick="'+this.prefix+'MemberAwareController.setAddress()">change MemberAware Address</button>'
+		'		  <div class="contract_attributes" id="'+this.prefix+'MemberAware_contract_attributes"> attributes:'
+		'		    <div class="contract_attribute" id="'+this.prefix+'MemberAware_contract_attribute_memberRegistry"> memberRegistry:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'MemberAware_memberRegistry_value"> </div>'
+		'		    </div>'
+		'		'
+		'		    <button id="'+this.prefix+'MemberAware_updateAttributes" onclick="'+this.prefix+'MemberAwareController._updateAttributes()">update MemberAware attributes</button>'
+		'		  </div>'
+		'		'
+		'		</div>'
;
	}

	/**
	* Create the gui for the attributes.
	*/
	this.createAttributesGui=function() {
		return 		'    <div class="contract_attribute" id="'+this.prefix+'MemberAware_contract_attribute_memberRegistry"> memberRegistry:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'MemberAware_memberRegistry_value"> </div>'
+		'		    </div>'
+		'		'
;
	}

	/**
	* Create a div with '@inner' as inner elements.
    * @inner - the inner text
	*/
	this.createSeletonGui=function(inner) {
		return 	'<!-- gui for MemberAware_contract -->'
		+	'	<div class="contract" id="'+this.prefix+'MemberAware_contract">'
		+ inner
		+'</div>';
	}


	//eventguis

}//end guifactory

/**
* Class MemberAwareController. 
* The controller wrap's the 'instance' contract and binds all actions to document elements.
* Parameters are taken from elements with self.prefix+'functionName_parameterName'
*
* self.prefix+'MemberAwareController.setAddress' - 
* self.prefix+'MemberAware_updateAttributes'     - 
*/
function MemberAwareController() {

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
		var btn = document.getElementById(self.prefix+'MemberAwareController.setAddress');
		if(btn!=undefined)		
			btn.onclick = this.setAddress;
		else console.log('addres widget not bound');

		var btn = document.getElementById(self.prefix+'MemberAware_updateAttributes');
		if(btn!=undefined)
			btn.onclick = this._updateAttributes;
		else console.log('_updateAttributes widget not bound');

	}

	/**
	* Set the address.
	*/
	this.setAddress=function() {
		var _address = document.getElementById(self.prefix+'MemberAware_address');
		if(_address==null)return;

		self.MemberAware_instance = MemberAwareContract.at(_address.value);
		self.contractAddress = _address.value;
		self._updateAttributes();
	}
	
	/**
	* Update attributes.
	*
	* prefix+'MemberAware_memberRegistry_value' - 
	**/
	this._updateAttributes=function () {
		if(this.instance===null) return;
		// update attributes
		var memberRegistry_res = self.instance.memberRegistry();
		var e = document.getElementById(self.prefix+'MemberAware_memberRegistry_value');
		if(memberRegistry_res!=null && e!=null)
			e.innerText = memberRegistry_res;
		else console.log(self.prefix+'MemberAware_memberRegistry_value not found');
	}

	//call functions
	
	/**
	* Calls the contract function MemberAware_isMember.
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
	
//delegated calls
}// end controller	

/**
* class as GlueCode MemberAwareManager,
* uses prefix + 'GuiContainer' as target element.
* It combines a MemberAwareController as 'c' and a MemberAwareGuiFactory as 'g'.
**/
function MemberAwareManager(prefix,contract,containerId) {
	this.prefix = prefix;
	var self = this;
	this.c = new MemberAwareController();
	this.c.prefix=prefix;
	this.c.instance=contract;
	this.c.contractAddress = contract.address;
	this.g = new MemberAwareGuiFactory();
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
		elemDiv.id= this.prefix +'MemberAware_gui';
		e.appendChild(elemDiv);
		if(this.guiFunction==null)
			elemDiv.innerHTML = this.createGui(this.g);
		else elemDiv.innerHTML = this.guiFunction(this.g);
		
		var e = document.getElementById(this.prefix+'MemberAware_address');
		if(e!=null)
			e.value = this.c.contractAddress;
		else 
			console.log(this.prefix+'MemberAware_address not found');
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
//Start of user code MemberAware_create_gui_js
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
	* Getter for the contract 'MemberAware' instance.
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
* Manages a list of MemberAwareManager uses the guid id to place the gui which is also the eventlogPrefix
*/
function MemberAwareGuiMananger(guiId){
	this.prefix = guiId;
	this.managers=new Array();	//[];		
	this.guiFunction = null;
	this.managerMap = {};
	
	/**
	* Add a contract to this manager.
	* @contract the web3 contract instance
	*/
	this.addManager = function(contract) {
		var m = new MemberAwareManager(contract.address,contract,this.prefix);
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
			elemDiv.id= manager.prefix + 'GuiContainer';//'MemberAware_gui';
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
function MemberAwareDeployment(guiId){
	this.prefix = guiId;
//Start of user code MemberAware_deployment_attributes_js
//TODO: implement
//End of user code

	
	/**
	* The default deployer function.
	**/
	this.deployDefault = function(){
		//Start of user code MemberAware_deployDefault
		//TODO: implement
		//End of user code
	}

//Start of user code MemberAware_deployment_js
//TODO: implement
//End of user code
}

/**
* A class to manage a single page dapp.
* The MembersPage object uses the managers to display the gui.
**/
function MembersPage(prefix) {
	this.prefix=prefix;
	//Start of user code page_members_attributes
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
	//Start of user code page_Members_create_default_gui_functions
		//TODO: implement
	//End of user code
}
	//Start of user code page_Members_functions
		//TODO: implement
	//End of user code

}// end of MembersPage

//Start of user code Members_custom_functions
		//TODO: implement
//End of user code
