
var MemberRegistryContract = web3.eth.contract([
{"constant":true,"inputs":[],"name":"partyMemberCount","outputs":[{"name":"","type":"uint"}],"type":"function"},
{"constant":true,"inputs":[],"name":"activeMemberCount","outputs":[{"name":"","type":"uint"}],"type":"function"},
{"constant": true,"inputs": [{"name": "","type": "uint"}],"name": "partyMembers","outputs": [
{ "name": "name", "type": "string"}
,{ "name": "id", "type": "uint"}
,{ "name": "member", "type": "address"}
,{ "name": "state", "type": "MemberState"}
],"type": "function"	},
//

{"constant": true,"inputs": [{"name": "","type": "address"}],"name": "memberAddress","outputs": [
{ "name": "name", "type": "string"}
,{ "name": "id", "type": "uint"}
,{ "name": "member", "type": "address"}
,{ "name": "state", "type": "MemberState"}
],"type": "function"	},
//

{"constant": true,"inputs": [{"name": "","type": "address"}],"name": "managers","outputs": [
{ "name": "", "type": "bool"}
],"type": "function"	},
//

  {
    "constant": false,
    "inputs": [{"name": "name","type": "string"},{"name": "_memberAddress","type": "address"}],    
    "name": "addMember",
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
    "inputs": [{"name": "id","type": "uint"}],    
    "name": "unregisterMember",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": true,
    "inputs": [],    
    "name": "getMemberCount",
    "outputs": [{"name": "","type": "uint"}],
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
    "constant": true,
    "inputs": [{"name": "_memberAdress","type": "address"}],    
    "name": "isActiveMember",
    "outputs": [{"name": "","type": "bool"}],
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
    "inputs": [{"name": "id","type": "uint"},{"name": "_newMemberAddress","type": "address"}],    
    "name": "changeMemberAddress",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": true,
    "inputs": [{"name": "_address","type": "address"}],    
    "name": "getMemberData",
    "outputs": [{"name": "name","type": "string"},{"name": "id","type": "uint"}],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [{"name": "mAddress","type": "address"},{"name": "eventType","type": "uint"}],    
    "name": "publishMemberEvent",
    "outputs": [],
    "type": "function"
  }
 ,
  { "constant": true,
    "inputs": [{"name": "mAddress","type": "address"},{"name": "eType","type": "EventType"},{"name": "id","type": "uint"},{"name": "name","type": "string"},{"name": "memberState","type": "MemberState"}],    
    "name": "MemberEvent",
    "type": "event"  }
] );   

var MemberAwareContract = web3.eth.contract([
{"constant":true,"inputs":[],"name":"memberRegistry","outputs":[{"name":"","type":"address"}],"type":"function"},
 
] );   



//gui factory MemberRegistry
function MemberRegistryGuiFactory() {
	this.prefix='';
	
// default Gui
this.placeDefaultGui=function() {
//	console.log(this.prefix+' place gui');
	document.getElementById(this.prefix+'MemberRegistry_gui').innerHTML = this.createDefaultGui();
}
// default Gui
this.createDefaultGui=function() {
	return 	'<!-- gui for MemberRegistry_contract -->'
+	'	<div class="contract" id="'+this.prefix+'MemberRegistry_contract">'
+	'	MemberRegistry:'
+	'	  <input type="text" id="'+this.prefix+'MemberRegistry_address"> <button id="'+this.prefix+'MemberRegistryController.setAddress" onclick="'+this.prefix+'MemberRegistryController.setAddress()">change MemberRegistry Address</button>'
+	'	  <div class="contract_attributes" id="'+this.prefix+'MemberRegistry_contract_attributes"> attributes:'
+	'	    <div class="contract_attribute" id="'+this.prefix+'MemberRegistry_contract_attribute_mangerCount"> mangerCount:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'MemberRegistry_mangerCount_value"> </div>'
+	'	    </div>'
+	'	    <div class="contract_attribute" id="'+this.prefix+'MemberRegistry_contract_attribute_partyMemberCount"> partyMemberCount:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'MemberRegistry_partyMemberCount_value"> </div>'
+	'	    </div>'
+	'	    <div class="contract_attribute" id="'+this.prefix+'MemberRegistry_contract_attribute_activeMemberCount"> activeMemberCount:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'MemberRegistry_activeMemberCount_value"> </div>'
+	'	    </div>'
+	'	'
+	'	<div class="Value_Mapping" id="'+this.prefix+'MemberRegistry_contract_attribute_managers">mapping  managers:'
+	'			<input type="text" id="'+this.prefix+'MemberRegistry_contract_attribute_managers_input">(address)'
+	'	    	<div class="Mapping_value" id="'+this.prefix+'MemberRegistry_contract_attribute_address"> bool:'
+	'	      		<div class="contract_attribute_value" id="'+this.prefix+'MemberRegistry_managers_value"> </div>'
+	'	    	</div>'
+	'	  </div>'
+	'	<!--struct -->'
+	'	<div class="Struct_Mapping" id="'+this.prefix+'Struc_MemberRegistry_contract_attribute_partyMembers">struc mapping  partyMembers:'
+	'			<input type="number" id="'+this.prefix+'MemberRegistry_contract_attribute_partyMembers_input">(uint)'
+	'	    	<div class="Struct_attribute" id="'+this.prefix+'MemberRegistry_contract_attribute_partyMembers_name"> name:'
+	'	      		<div class="Struct_attribute_value" id="'+this.prefix+'MemberRegistry_partyMembers_name_value"> </div>'
+	'	    	</div>'
+	'	    	<div class="Struct_attribute" id="'+this.prefix+'MemberRegistry_contract_attribute_partyMembers_id"> id:'
+	'	      		<div class="Struct_attribute_value" id="'+this.prefix+'MemberRegistry_partyMembers_id_value"> </div>'
+	'	    	</div>'
+	'	    	<div class="Struct_attribute" id="'+this.prefix+'MemberRegistry_contract_attribute_partyMembers_member"> member:'
+	'	      		<div class="Struct_attribute_value" id="'+this.prefix+'MemberRegistry_partyMembers_member_value"> </div>'
+	'	    	</div>'
+	'	    	<div class="Struct_attribute" id="'+this.prefix+'MemberRegistry_contract_attribute_partyMembers_state"> state:'
+	'	      		<div class="Struct_attribute_value" id="'+this.prefix+'MemberRegistry_partyMembers_state_value"> </div>'
+	'	    	</div>'
+	'	  </div>'
+	'	<!--struct -->'
+	'	<div class="Struct_Mapping" id="'+this.prefix+'Struc_MemberRegistry_contract_attribute_memberAddress">struc mapping  memberAddress:'
+	'			<input type="text" id="'+this.prefix+'MemberRegistry_contract_attribute_memberAddress_input">(address)'
+	'	    	<div class="Struct_attribute" id="'+this.prefix+'MemberRegistry_contract_attribute_memberAddress_name"> name:'
+	'	      		<div class="Struct_attribute_value" id="'+this.prefix+'MemberRegistry_memberAddress_name_value"> </div>'
+	'	    	</div>'
+	'	    	<div class="Struct_attribute" id="'+this.prefix+'MemberRegistry_contract_attribute_memberAddress_id"> id:'
+	'	      		<div class="Struct_attribute_value" id="'+this.prefix+'MemberRegistry_memberAddress_id_value"> </div>'
+	'	    	</div>'
+	'	    	<div class="Struct_attribute" id="'+this.prefix+'MemberRegistry_contract_attribute_memberAddress_member"> member:'
+	'	      		<div class="Struct_attribute_value" id="'+this.prefix+'MemberRegistry_memberAddress_member_value"> </div>'
+	'	    	</div>'
+	'	    	<div class="Struct_attribute" id="'+this.prefix+'MemberRegistry_contract_attribute_memberAddress_state"> state:'
+	'	      		<div class="Struct_attribute_value" id="'+this.prefix+'MemberRegistry_memberAddress_state_value"> </div>'
+	'	    	</div>'
+	'	  </div>'
+	'	    <button id="'+this.prefix+'MemberRegistry_updateAttributes" onclick="'+this.prefix+'MemberRegistryController._updateAttributes()">update MemberRegistry attributes</button>'
+	'	  </div>'
+	'	  <div class="function_execution" id="'+this.prefix+'MemberRegistry_contract_function_MemberRegistry_addMember_string_address">'
+	'	MemberRegistry_addMember:'
+	'		  <div class="function_parameter">name<input type="text" id="'+this.prefix+'MemberRegistry_addMember_string_address_name"></div>'
+	'		  <div class="function_parameter">_memberAddress<input type="text" id="'+this.prefix+'MemberRegistry_addMember_string_address__memberAddress"></div>'
+	'		<button id="'+this.prefix+'MemberRegistryController.MemberRegistry_addMember_string_address" onclick="'+this.prefix+'MemberRegistryController.MemberRegistry_addMember_string_address()">execute MemberRegistry_addMember</button>'
+	'		<div class="function_result" id="'+this.prefix+'MemberRegistry_addMember_string_address_res"></div>'
+	'	  </div>'
+	'	  <div class="function_execution" id="'+this.prefix+'MemberRegistry_contract_function_Manageable_addManager_address">'
+	'	MemberRegistry_addManager:'
+	'		  <div class="function_parameter">_newManagerAddress<input type="text" id="'+this.prefix+'Manageable_addManager_address__newManagerAddress"></div>'
+	'		<button id="'+this.prefix+'MemberRegistryController.Manageable_addManager_address" onclick="'+this.prefix+'MemberRegistryController.Manageable_addManager_address()">execute MemberRegistry_addManager</button>'
+	'		<div class="function_result" id="'+this.prefix+'Manageable_addManager_address_res"></div>'
+	'	  </div>'
+	'	  <div class="function_execution" id="'+this.prefix+'MemberRegistry_contract_function_MemberRegistry_unregisterMember_uint">'
+	'	MemberRegistry_unregisterMember:'
+	'		  <div class="function_parameter">id<input type="number" id="'+this.prefix+'MemberRegistry_unregisterMember_uint_id"></div>'
+	'		<button id="'+this.prefix+'MemberRegistryController.MemberRegistry_unregisterMember_uint" onclick="'+this.prefix+'MemberRegistryController.MemberRegistry_unregisterMember_uint()">execute MemberRegistry_unregisterMember</button>'
+	'		<div class="function_result" id="'+this.prefix+'MemberRegistry_unregisterMember_uint_res"></div>'
+	'	  </div>'
+	'	  <div class="function_execution" id="'+this.prefix+'MemberRegistry_contract_function_MemberRegistry_getMemberCount">'
+	'	MemberRegistry_getMemberCount:'
+	'		<button id="'+this.prefix+'MemberRegistryController.MemberRegistry_getMemberCount" onclick="'+this.prefix+'MemberRegistryController.MemberRegistry_getMemberCount()">execute MemberRegistry_getMemberCount</button>'
+	'		<div class="function_result" id="'+this.prefix+'MemberRegistry_getMemberCount_res"></div>'
+	'	  </div>'
+	'	  <div class="function_execution" id="'+this.prefix+'MemberRegistry_contract_function_Manageable_removeManager_address">'
+	'	MemberRegistry_removeManager:'
+	'		  <div class="function_parameter">_managerAddress<input type="text" id="'+this.prefix+'Manageable_removeManager_address__managerAddress"></div>'
+	'		<button id="'+this.prefix+'MemberRegistryController.Manageable_removeManager_address" onclick="'+this.prefix+'MemberRegistryController.Manageable_removeManager_address()">execute MemberRegistry_removeManager</button>'
+	'		<div class="function_result" id="'+this.prefix+'Manageable_removeManager_address_res"></div>'
+	'	  </div>'
+	'	  <div class="function_execution" id="'+this.prefix+'MemberRegistry_contract_function_MemberRegistry_isActiveMember_address">'
+	'	MemberRegistry_isActiveMember:'
+	'		  <div class="function_parameter">_memberAdress<input type="text" id="'+this.prefix+'MemberRegistry_isActiveMember_address__memberAdress"></div>'
+	'		<button id="'+this.prefix+'MemberRegistryController.MemberRegistry_isActiveMember_address" onclick="'+this.prefix+'MemberRegistryController.MemberRegistry_isActiveMember_address()">execute MemberRegistry_isActiveMember</button>'
+	'		<div class="function_result" id="'+this.prefix+'MemberRegistry_isActiveMember_address_res"></div>'
+	'	  </div>'
+	'	  <div class="function_execution" id="'+this.prefix+'MemberRegistry_contract_function_Manageable_isManager_address">'
+	'	MemberRegistry_isManager:'
+	'		  <div class="function_parameter">_managerAddress<input type="text" id="'+this.prefix+'Manageable_isManager_address__managerAddress"></div>'
+	'		<button id="'+this.prefix+'MemberRegistryController.Manageable_isManager_address" onclick="'+this.prefix+'MemberRegistryController.Manageable_isManager_address()">execute MemberRegistry_isManager</button>'
+	'		<div class="function_result" id="'+this.prefix+'Manageable_isManager_address_res"></div>'
+	'	  </div>'
+	'	  <div class="function_execution" id="'+this.prefix+'MemberRegistry_contract_function_MemberRegistry_changeMemberAddress_uint_address">'
+	'	MemberRegistry_changeMemberAddress:'
+	'		  <div class="function_parameter">id<input type="number" id="'+this.prefix+'MemberRegistry_changeMemberAddress_uint_address_id"></div>'
+	'		  <div class="function_parameter">_newMemberAddress<input type="text" id="'+this.prefix+'MemberRegistry_changeMemberAddress_uint_address__newMemberAddress"></div>'
+	'		<button id="'+this.prefix+'MemberRegistryController.MemberRegistry_changeMemberAddress_uint_address" onclick="'+this.prefix+'MemberRegistryController.MemberRegistry_changeMemberAddress_uint_address()">execute MemberRegistry_changeMemberAddress</button>'
+	'		<div class="function_result" id="'+this.prefix+'MemberRegistry_changeMemberAddress_uint_address_res"></div>'
+	'	  </div>'
+	'	  <div class="function_execution" id="'+this.prefix+'MemberRegistry_contract_function_MemberRegistry_getMemberData_address">'
+	'	MemberRegistry_getMemberData:'
+	'		  <div class="function_parameter">_address<input type="text" id="'+this.prefix+'MemberRegistry_getMemberData_address__address"></div>'
+	'		<button id="'+this.prefix+'MemberRegistryController.MemberRegistry_getMemberData_address" onclick="'+this.prefix+'MemberRegistryController.MemberRegistry_getMemberData_address()">execute MemberRegistry_getMemberData</button>'
+	'		<div class="function_result" id="'+this.prefix+'MemberRegistry_getMemberData_address_res"></div>'
+	'	  </div>'
+	'	  <div class="function_execution" id="'+this.prefix+'MemberRegistry_contract_function_MemberRegistry_publishMemberEvent_address_uint">'
+	'	MemberRegistry_publishMemberEvent:'
+	'		  <div class="function_parameter">mAddress<input type="text" id="'+this.prefix+'MemberRegistry_publishMemberEvent_address_uint_mAddress"></div>'
+	'		  <div class="function_parameter">eventType<input type="number" id="'+this.prefix+'MemberRegistry_publishMemberEvent_address_uint_eventType"></div>'
+	'		<button id="'+this.prefix+'MemberRegistryController.MemberRegistry_publishMemberEvent_address_uint" onclick="'+this.prefix+'MemberRegistryController.MemberRegistry_publishMemberEvent_address_uint()">execute MemberRegistry_publishMemberEvent</button>'
+	'		<div class="function_result" id="'+this.prefix+'MemberRegistry_publishMemberEvent_address_uint_res"></div>'
+	'	  </div>'
+	'	'
+	'	</div>'
;
}

//default attributes
this.createAttributesGui=function() {
	return 	'    <div class="contract_attribute" id="'+this.prefix+'MemberRegistry_contract_attribute_mangerCount"> mangerCount:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'MemberRegistry_mangerCount_value"> </div>'
+	'	    </div>'
+	'	    <div class="contract_attribute" id="'+this.prefix+'MemberRegistry_contract_attribute_partyMemberCount"> partyMemberCount:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'MemberRegistry_partyMemberCount_value"> </div>'
+	'	    </div>'
+	'	    <div class="contract_attribute" id="'+this.prefix+'MemberRegistry_contract_attribute_activeMemberCount"> activeMemberCount:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'MemberRegistry_activeMemberCount_value"> </div>'
+	'	    </div>'
+	'	'
;
}



this.createMemberRegistry_addMember_string_addressGui=function() {
return 	'  <div class="function_execution" id="'+this.prefix+'MemberRegistry_contract_function_MemberRegistry_addMember_string_address">'
+	'MemberRegistry_addMember:'
+	'	  <div class="function_parameter">name<input type="text" id="'+this.prefix+'MemberRegistry_addMember_string_address_name"></div>'
+	'	  <div class="function_parameter">_memberAddress<input type="text" id="'+this.prefix+'MemberRegistry_addMember_string_address__memberAddress"></div>'
+	'	<button id="'+this.prefix+'MemberRegistryController.MemberRegistry_addMember_string_address" onclick="'+this.prefix+'MemberRegistryController.MemberRegistry_addMember_string_address()">execute MemberRegistry_addMember</button>'
+	'	<div class="function_result" id="'+this.prefix+'MemberRegistry_addMember_string_address_res"></div>'
+	'  </div>'
;
}
this.createManageable_addManager_addressGui=function() {
return 	'  <div class="function_execution" id="'+this.prefix+'MemberRegistry_contract_function_Manageable_addManager_address">'
+	'MemberRegistry_addManager:'
+	'	  <div class="function_parameter">_newManagerAddress<input type="text" id="'+this.prefix+'Manageable_addManager_address__newManagerAddress"></div>'
+	'	<button id="'+this.prefix+'MemberRegistryController.Manageable_addManager_address" onclick="'+this.prefix+'MemberRegistryController.Manageable_addManager_address()">execute MemberRegistry_addManager</button>'
+	'	<div class="function_result" id="'+this.prefix+'Manageable_addManager_address_res"></div>'
+	'  </div>'
;
}
this.createMemberRegistry_unregisterMember_uintGui=function() {
return 	'  <div class="function_execution" id="'+this.prefix+'MemberRegistry_contract_function_MemberRegistry_unregisterMember_uint">'
+	'MemberRegistry_unregisterMember:'
+	'	  <div class="function_parameter">id<input type="number" id="'+this.prefix+'MemberRegistry_unregisterMember_uint_id"></div>'
+	'	<button id="'+this.prefix+'MemberRegistryController.MemberRegistry_unregisterMember_uint" onclick="'+this.prefix+'MemberRegistryController.MemberRegistry_unregisterMember_uint()">execute MemberRegistry_unregisterMember</button>'
+	'	<div class="function_result" id="'+this.prefix+'MemberRegistry_unregisterMember_uint_res"></div>'
+	'  </div>'
;
}
this.createMemberRegistry_getMemberCountGui=function() {
return 	'  <div class="function_execution" id="'+this.prefix+'MemberRegistry_contract_function_MemberRegistry_getMemberCount">'
+	'MemberRegistry_getMemberCount:'
+	'	<button id="'+this.prefix+'MemberRegistryController.MemberRegistry_getMemberCount" onclick="'+this.prefix+'MemberRegistryController.MemberRegistry_getMemberCount()">execute MemberRegistry_getMemberCount</button>'
+	'	<div class="function_result" id="'+this.prefix+'MemberRegistry_getMemberCount_res"></div>'
+	'  </div>'
;
}
this.createManageable_removeManager_addressGui=function() {
return 	'  <div class="function_execution" id="'+this.prefix+'MemberRegistry_contract_function_Manageable_removeManager_address">'
+	'MemberRegistry_removeManager:'
+	'	  <div class="function_parameter">_managerAddress<input type="text" id="'+this.prefix+'Manageable_removeManager_address__managerAddress"></div>'
+	'	<button id="'+this.prefix+'MemberRegistryController.Manageable_removeManager_address" onclick="'+this.prefix+'MemberRegistryController.Manageable_removeManager_address()">execute MemberRegistry_removeManager</button>'
+	'	<div class="function_result" id="'+this.prefix+'Manageable_removeManager_address_res"></div>'
+	'  </div>'
;
}
this.createMemberRegistry_isActiveMember_addressGui=function() {
return 	'  <div class="function_execution" id="'+this.prefix+'MemberRegistry_contract_function_MemberRegistry_isActiveMember_address">'
+	'MemberRegistry_isActiveMember:'
+	'	  <div class="function_parameter">_memberAdress<input type="text" id="'+this.prefix+'MemberRegistry_isActiveMember_address__memberAdress"></div>'
+	'	<button id="'+this.prefix+'MemberRegistryController.MemberRegistry_isActiveMember_address" onclick="'+this.prefix+'MemberRegistryController.MemberRegistry_isActiveMember_address()">execute MemberRegistry_isActiveMember</button>'
+	'	<div class="function_result" id="'+this.prefix+'MemberRegistry_isActiveMember_address_res"></div>'
+	'  </div>'
;
}
this.createManageable_isManager_addressGui=function() {
return 	'  <div class="function_execution" id="'+this.prefix+'MemberRegistry_contract_function_Manageable_isManager_address">'
+	'MemberRegistry_isManager:'
+	'	  <div class="function_parameter">_managerAddress<input type="text" id="'+this.prefix+'Manageable_isManager_address__managerAddress"></div>'
+	'	<button id="'+this.prefix+'MemberRegistryController.Manageable_isManager_address" onclick="'+this.prefix+'MemberRegistryController.Manageable_isManager_address()">execute MemberRegistry_isManager</button>'
+	'	<div class="function_result" id="'+this.prefix+'Manageable_isManager_address_res"></div>'
+	'  </div>'
;
}
this.createMemberRegistry_changeMemberAddress_uint_addressGui=function() {
return 	'  <div class="function_execution" id="'+this.prefix+'MemberRegistry_contract_function_MemberRegistry_changeMemberAddress_uint_address">'
+	'MemberRegistry_changeMemberAddress:'
+	'	  <div class="function_parameter">id<input type="number" id="'+this.prefix+'MemberRegistry_changeMemberAddress_uint_address_id"></div>'
+	'	  <div class="function_parameter">_newMemberAddress<input type="text" id="'+this.prefix+'MemberRegistry_changeMemberAddress_uint_address__newMemberAddress"></div>'
+	'	<button id="'+this.prefix+'MemberRegistryController.MemberRegistry_changeMemberAddress_uint_address" onclick="'+this.prefix+'MemberRegistryController.MemberRegistry_changeMemberAddress_uint_address()">execute MemberRegistry_changeMemberAddress</button>'
+	'	<div class="function_result" id="'+this.prefix+'MemberRegistry_changeMemberAddress_uint_address_res"></div>'
+	'  </div>'
;
}
this.createMemberRegistry_getMemberData_addressGui=function() {
return 	'  <div class="function_execution" id="'+this.prefix+'MemberRegistry_contract_function_MemberRegistry_getMemberData_address">'
+	'MemberRegistry_getMemberData:'
+	'	  <div class="function_parameter">_address<input type="text" id="'+this.prefix+'MemberRegistry_getMemberData_address__address"></div>'
+	'	<button id="'+this.prefix+'MemberRegistryController.MemberRegistry_getMemberData_address" onclick="'+this.prefix+'MemberRegistryController.MemberRegistry_getMemberData_address()">execute MemberRegistry_getMemberData</button>'
+	'	<div class="function_result" id="'+this.prefix+'MemberRegistry_getMemberData_address_res"></div>'
+	'  </div>'
;
}
this.createMemberRegistry_publishMemberEvent_address_uintGui=function() {
return 	'  <div class="function_execution" id="'+this.prefix+'MemberRegistry_contract_function_MemberRegistry_publishMemberEvent_address_uint">'
+	'MemberRegistry_publishMemberEvent:'
+	'	  <div class="function_parameter">mAddress<input type="text" id="'+this.prefix+'MemberRegistry_publishMemberEvent_address_uint_mAddress"></div>'
+	'	  <div class="function_parameter">eventType<input type="number" id="'+this.prefix+'MemberRegistry_publishMemberEvent_address_uint_eventType"></div>'
+	'	<button id="'+this.prefix+'MemberRegistryController.MemberRegistry_publishMemberEvent_address_uint" onclick="'+this.prefix+'MemberRegistryController.MemberRegistry_publishMemberEvent_address_uint()">execute MemberRegistry_publishMemberEvent</button>'
+	'	<div class="function_result" id="'+this.prefix+'MemberRegistry_publishMemberEvent_address_uint_res"></div>'
+	'  </div>'
;
}

this.createpartyMembersStructGui=function() {
return 	'<!--struct -->'
+	'<div class="Struct_Mapping" id="'+this.prefix+'Struc_MemberRegistry_contract_attribute_partyMembers">struc mapping  partyMembers:'
+	'		<input type="number" id="'+this.prefix+'MemberRegistry_contract_attribute_partyMembers_input">(uint)'
+	'    	<div class="Struct_attribute" id="'+this.prefix+'MemberRegistry_contract_attribute_partyMembers_name"> name:'
+	'      		<div class="Struct_attribute_value" id="'+this.prefix+'MemberRegistry_partyMembers_name_value"> </div>'
+	'    	</div>'
+	'    	<div class="Struct_attribute" id="'+this.prefix+'MemberRegistry_contract_attribute_partyMembers_id"> id:'
+	'      		<div class="Struct_attribute_value" id="'+this.prefix+'MemberRegistry_partyMembers_id_value"> </div>'
+	'    	</div>'
+	'    	<div class="Struct_attribute" id="'+this.prefix+'MemberRegistry_contract_attribute_partyMembers_member"> member:'
+	'      		<div class="Struct_attribute_value" id="'+this.prefix+'MemberRegistry_partyMembers_member_value"> </div>'
+	'    	</div>'
+	'    	<div class="Struct_attribute" id="'+this.prefix+'MemberRegistry_contract_attribute_partyMembers_state"> state:'
+	'      		<div class="Struct_attribute_value" id="'+this.prefix+'MemberRegistry_partyMembers_state_value"> </div>'
+	'    	</div>'
+	'  </div>'
;
}

this.creatememberAddressStructGui=function() {
return 	'<!--struct -->'
+	'<div class="Struct_Mapping" id="'+this.prefix+'Struc_MemberRegistry_contract_attribute_memberAddress">struc mapping  memberAddress:'
+	'		<input type="text" id="'+this.prefix+'MemberRegistry_contract_attribute_memberAddress_input">(address)'
+	'    	<div class="Struct_attribute" id="'+this.prefix+'MemberRegistry_contract_attribute_memberAddress_name"> name:'
+	'      		<div class="Struct_attribute_value" id="'+this.prefix+'MemberRegistry_memberAddress_name_value"> </div>'
+	'    	</div>'
+	'    	<div class="Struct_attribute" id="'+this.prefix+'MemberRegistry_contract_attribute_memberAddress_id"> id:'
+	'      		<div class="Struct_attribute_value" id="'+this.prefix+'MemberRegistry_memberAddress_id_value"> </div>'
+	'    	</div>'
+	'    	<div class="Struct_attribute" id="'+this.prefix+'MemberRegistry_contract_attribute_memberAddress_member"> member:'
+	'      		<div class="Struct_attribute_value" id="'+this.prefix+'MemberRegistry_memberAddress_member_value"> </div>'
+	'    	</div>'
+	'    	<div class="Struct_attribute" id="'+this.prefix+'MemberRegistry_contract_attribute_memberAddress_state"> state:'
+	'      		<div class="Struct_attribute_value" id="'+this.prefix+'MemberRegistry_memberAddress_state_value"> </div>'
+	'    	</div>'
+	'  </div>'
;
}


//print the contract div around
this.createMemberRegistrySeletonGui=function(inner) {
	return 	'<!-- gui for MemberRegistry_contract -->'
+	'	<div class="contract" id="'+this.prefix+'MemberRegistry_contract">'
+ inner
+'</div>';
}


//eventguis
this.createMemberEventLogDataGui = function(prefix, blockHash, blockNumber,
mAddress,eType,id,name,memberState) {
		return '<ul class="dapp-account-list"><li > '
        +'<a class="dapp-identicon dapp-small" style="background-image: url(identiconimage.png)"></a>'
		+'<span>'+prefix+' ('+blockNumber+')</span>'
        +'<span>'+mAddress+'</span>'
        +'<span>'+eType+'</span>'
        +'<span>'+id+'</span>'
        +'<span>'+name+'</span>'
        +'<span>'+memberState+'</span>'
        +' </li>'
        ;
}

}//end guifactory
// script for MemberRegistry gui controller
function MemberRegistryController() {

	this.MemberRegistry_instance = undefined;
	this.prefix='';
	this.contractAddress = undefined; 
	var self = this;

// bind buttons
	this.bindGui=function() {
		var btn = document.getElementById(self.prefix+'MemberRegistryController.setAddress');
//	console.log('bind:' + self.prefix+' '+btn);
		if(btn!=undefined)		
			btn.onclick = this.setAddress;

		var btn = document.getElementById(self.prefix+'MemberRegistry_updateAttributes');
//		console.log('bind update:' + self.prefix+' '+btn);
		if(btn!=undefined)
			btn.onclick = this._updateAttributes;
		var btn = document.getElementById(self.prefix+'MemberRegistryController.MemberRegistry_addMember_string_address');
//		console.log('bind:MemberRegistry_addMember ' + self.prefix+' '+btn+'  '+self.MemberRegistry_addMember_string_address);//MemberRegistry_addMember);
		if(btn!=undefined)
			btn.onclick = this.MemberRegistry_addMember_string_address;
		var btn = document.getElementById(self.prefix+'MemberRegistryController.Manageable_addManager_address');
//		console.log('bind:MemberRegistry_addManager ' + self.prefix+' '+btn+'  '+self.Manageable_addManager_address);//MemberRegistry_addManager);
		if(btn!=undefined)
			btn.onclick = this.Manageable_addManager_address;
		var btn = document.getElementById(self.prefix+'MemberRegistryController.MemberRegistry_unregisterMember_uint');
//		console.log('bind:MemberRegistry_unregisterMember ' + self.prefix+' '+btn+'  '+self.MemberRegistry_unregisterMember_uint);//MemberRegistry_unregisterMember);
		if(btn!=undefined)
			btn.onclick = this.MemberRegistry_unregisterMember_uint;
		var btn = document.getElementById(self.prefix+'MemberRegistryController.MemberRegistry_getMemberCount');
//		console.log('bind:MemberRegistry_getMemberCount ' + self.prefix+' '+btn+'  '+self.MemberRegistry_getMemberCount);//MemberRegistry_getMemberCount);
		if(btn!=undefined)
			btn.onclick = this.MemberRegistry_getMemberCount;
		var btn = document.getElementById(self.prefix+'MemberRegistryController.Manageable_removeManager_address');
//		console.log('bind:MemberRegistry_removeManager ' + self.prefix+' '+btn+'  '+self.Manageable_removeManager_address);//MemberRegistry_removeManager);
		if(btn!=undefined)
			btn.onclick = this.Manageable_removeManager_address;
		var btn = document.getElementById(self.prefix+'MemberRegistryController.MemberRegistry_isActiveMember_address');
//		console.log('bind:MemberRegistry_isActiveMember ' + self.prefix+' '+btn+'  '+self.MemberRegistry_isActiveMember_address);//MemberRegistry_isActiveMember);
		if(btn!=undefined)
			btn.onclick = this.MemberRegistry_isActiveMember_address;
		var btn = document.getElementById(self.prefix+'MemberRegistryController.Manageable_isManager_address');
//		console.log('bind:MemberRegistry_isManager ' + self.prefix+' '+btn+'  '+self.Manageable_isManager_address);//MemberRegistry_isManager);
		if(btn!=undefined)
			btn.onclick = this.Manageable_isManager_address;
		var btn = document.getElementById(self.prefix+'MemberRegistryController.MemberRegistry_changeMemberAddress_uint_address');
//		console.log('bind:MemberRegistry_changeMemberAddress ' + self.prefix+' '+btn+'  '+self.MemberRegistry_changeMemberAddress_uint_address);//MemberRegistry_changeMemberAddress);
		if(btn!=undefined)
			btn.onclick = this.MemberRegistry_changeMemberAddress_uint_address;
		var btn = document.getElementById(self.prefix+'MemberRegistryController.MemberRegistry_getMemberData_address');
//		console.log('bind:MemberRegistry_getMemberData ' + self.prefix+' '+btn+'  '+self.MemberRegistry_getMemberData_address);//MemberRegistry_getMemberData);
		if(btn!=undefined)
			btn.onclick = this.MemberRegistry_getMemberData_address;
		var btn = document.getElementById(self.prefix+'MemberRegistryController.MemberRegistry_publishMemberEvent_address_uint');
//		console.log('bind:MemberRegistry_publishMemberEvent ' + self.prefix+' '+btn+'  '+self.MemberRegistry_publishMemberEvent_address_uint);//MemberRegistry_publishMemberEvent);
		if(btn!=undefined)
			btn.onclick = this.MemberRegistry_publishMemberEvent_address_uint;
	}
	// set function
	this.setAddress=function() {
	var _address = document.getElementById(self.prefix+'MemberRegistry_address');
//	console.log('setAddress:' + self.prefix+' '+_address);
	self.MemberRegistry_instance = MemberRegistryContract.at(_address.value);
	self.contractAddress = _address.value;
	self._updateAttributes();
}
//update attributes
this._updateAttributes=function () {
if(this.MemberRegistry_instance===null) return;
//console.log('updateAttributes:' + self.prefix);
// update attributes
	var mangerCount_res = self.MemberRegistry_instance.mangerCount();
//	console.log('get:mangerCount' + self.prefix);

	if(mangerCount_res!=null)
		document.getElementById(self.prefix+'MemberRegistry_mangerCount_value').innerText = mangerCount_res;
	var partyMemberCount_res = self.MemberRegistry_instance.partyMemberCount();
//	console.log('get:partyMemberCount' + self.prefix);

	if(partyMemberCount_res!=null)
		document.getElementById(self.prefix+'MemberRegistry_partyMemberCount_value').innerText = partyMemberCount_res;
	var activeMemberCount_res = self.MemberRegistry_instance.activeMemberCount();
//	console.log('get:activeMemberCount' + self.prefix);

	if(activeMemberCount_res!=null)
		document.getElementById(self.prefix+'MemberRegistry_activeMemberCount_value').innerText = activeMemberCount_res;
//console.log('getStruct:managers' + self.prefix);
	var _key = document.getElementById(self.prefix+'MemberRegistry_contract_attribute_managers_input').value;
	var managers_res = self.MemberRegistry_instance.managers(_key);
//console.log('result:managers' + managers_res+' key: '+_key);
	if(managers_res!=null){
		document.getElementById(self.prefix+'MemberRegistry_managers_value').innerText = managers_res;
	}
//console.log('getStruct:partyMembers' + self.prefix);
	var _key = document.getElementById(self.prefix+'MemberRegistry_contract_attribute_partyMembers_input').value;
	var partyMembers_res = self.MemberRegistry_instance.partyMembers(_key);
//console.log('result:partyMembers' + partyMembers_res+' key: '+_key);
	if(partyMembers_res!=null){
		document.getElementById(self.prefix+'MemberRegistry_partyMembers_name_value').innerText = partyMembers_res[0];
		document.getElementById(self.prefix+'MemberRegistry_partyMembers_id_value').innerText = partyMembers_res[1];
		document.getElementById(self.prefix+'MemberRegistry_partyMembers_member_value').innerText = partyMembers_res[2];
		document.getElementById(self.prefix+'MemberRegistry_partyMembers_state_value').innerText = partyMembers_res[3];
	}
//console.log('getStruct:memberAddress' + self.prefix);
	var _key = document.getElementById(self.prefix+'MemberRegistry_contract_attribute_memberAddress_input').value;
	var memberAddress_res = self.MemberRegistry_instance.memberAddress(_key);
//console.log('result:memberAddress' + memberAddress_res+' key: '+_key);
	if(memberAddress_res!=null){
		document.getElementById(self.prefix+'MemberRegistry_memberAddress_name_value').innerText = memberAddress_res[0];
		document.getElementById(self.prefix+'MemberRegistry_memberAddress_id_value').innerText = memberAddress_res[1];
		document.getElementById(self.prefix+'MemberRegistry_memberAddress_member_value').innerText = memberAddress_res[2];
		document.getElementById(self.prefix+'MemberRegistry_memberAddress_state_value').innerText = memberAddress_res[3];
	}
}

//call functions
//function MemberRegistry_addMember
this.MemberRegistry_addMember_string_address=function() {
//console.log('function:addMember' + self.prefix);
	var e = document.getElementById(self.prefix+'MemberRegistry_addMember_string_address_name');
//	console.log(':' + self.prefix+'MemberRegistry_addMember_string_address_name'+": "+e);
	var param_name = e.value;
	var e = document.getElementById(self.prefix+'MemberRegistry_addMember_string_address__memberAddress');
//	console.log(':' + self.prefix+'MemberRegistry_addMember_string_address__memberAddress'+": "+e);
	var param__memberAddress = e.value;
//	console.log(':' +self.MemberRegistry_instance+':');
	var res = self.MemberRegistry_instance.addMember(param_name, param__memberAddress);
}
//function MemberRegistry_canAccess
this.Manageable_canAccess=function() {
//console.log('function:canAccess' + self.prefix);
//	console.log(':' +self.MemberRegistry_instance+':');
	var res = self.MemberRegistry_instance.canAccess();
	if(res!=null)
		document.getElementById(self.prefix+'Manageable_canAccess_res').innerText = res;
}
//function MemberRegistry_addManager
this.Manageable_addManager_address=function() {
//console.log('function:addManager' + self.prefix);
	var e = document.getElementById(self.prefix+'Manageable_addManager_address__newManagerAddress');
//	console.log(':' + self.prefix+'Manageable_addManager_address__newManagerAddress'+": "+e);
	var param__newManagerAddress = e.value;
//	console.log(':' +self.MemberRegistry_instance+':');
	var res = self.MemberRegistry_instance.addManager(param__newManagerAddress);
}
//function MemberRegistry_unregisterMember
this.MemberRegistry_unregisterMember_uint=function() {
//console.log('function:unregisterMember' + self.prefix);
	var e = document.getElementById(self.prefix+'MemberRegistry_unregisterMember_uint_id');
//	console.log(':' + self.prefix+'MemberRegistry_unregisterMember_uint_id'+": "+e);
	var param_id = e.value;
//	console.log(':' +self.MemberRegistry_instance+':');
	var res = self.MemberRegistry_instance.unregisterMember(param_id);
}
//function MemberRegistry_getMemberCount
this.MemberRegistry_getMemberCount=function() {
//console.log('function:getMemberCount' + self.prefix);
//	console.log(':' +self.MemberRegistry_instance+':');
	var res = self.MemberRegistry_instance.getMemberCount();
	if(res!=null)
		document.getElementById(self.prefix+'MemberRegistry_getMemberCount_res').innerText = res;
}
//function MemberRegistry_removeManager
this.Manageable_removeManager_address=function() {
//console.log('function:removeManager' + self.prefix);
	var e = document.getElementById(self.prefix+'Manageable_removeManager_address__managerAddress');
//	console.log(':' + self.prefix+'Manageable_removeManager_address__managerAddress'+": "+e);
	var param__managerAddress = e.value;
//	console.log(':' +self.MemberRegistry_instance+':');
	var res = self.MemberRegistry_instance.removeManager(param__managerAddress);
}
//function MemberRegistry_isActiveMember
this.MemberRegistry_isActiveMember_address=function() {
//console.log('function:isActiveMember' + self.prefix);
	var e = document.getElementById(self.prefix+'MemberRegistry_isActiveMember_address__memberAdress');
//	console.log(':' + self.prefix+'MemberRegistry_isActiveMember_address__memberAdress'+": "+e);
	var param__memberAdress = e.value;
//	console.log(':' +self.MemberRegistry_instance+':');
	var res = self.MemberRegistry_instance.isActiveMember(param__memberAdress);
	if(res!=null)
		document.getElementById(self.prefix+'MemberRegistry_isActiveMember_address_res').innerText = res;
}
//function MemberRegistry_isManager
this.Manageable_isManager_address=function() {
//console.log('function:isManager' + self.prefix);
	var e = document.getElementById(self.prefix+'Manageable_isManager_address__managerAddress');
//	console.log(':' + self.prefix+'Manageable_isManager_address__managerAddress'+": "+e);
	var param__managerAddress = e.value;
//	console.log(':' +self.MemberRegistry_instance+':');
	var res = self.MemberRegistry_instance.isManager(param__managerAddress);
	if(res!=null)
		document.getElementById(self.prefix+'Manageable_isManager_address_res').innerText = res;
}
//function MemberRegistry_changeMemberAddress
this.MemberRegistry_changeMemberAddress_uint_address=function() {
//console.log('function:changeMemberAddress' + self.prefix);
	var e = document.getElementById(self.prefix+'MemberRegistry_changeMemberAddress_uint_address_id');
//	console.log(':' + self.prefix+'MemberRegistry_changeMemberAddress_uint_address_id'+": "+e);
	var param_id = e.value;
	var e = document.getElementById(self.prefix+'MemberRegistry_changeMemberAddress_uint_address__newMemberAddress');
//	console.log(':' + self.prefix+'MemberRegistry_changeMemberAddress_uint_address__newMemberAddress'+": "+e);
	var param__newMemberAddress = e.value;
//	console.log(':' +self.MemberRegistry_instance+':');
	var res = self.MemberRegistry_instance.changeMemberAddress(param_id, param__newMemberAddress);
}
//function MemberRegistry_getMemberData
this.MemberRegistry_getMemberData_address=function() {
//console.log('function:getMemberData' + self.prefix);
	var e = document.getElementById(self.prefix+'MemberRegistry_getMemberData_address__address');
//	console.log(':' + self.prefix+'MemberRegistry_getMemberData_address__address'+": "+e);
	var param__address = e.value;
//	console.log(':' +self.MemberRegistry_instance+':');
	var res = self.MemberRegistry_instance.getMemberData(param__address);
	if(res!=null)
		document.getElementById(self.prefix+'MemberRegistry_getMemberData_address_res').innerText = res;
}
//function MemberRegistry_publishMemberEvent
this.MemberRegistry_publishMemberEvent_address_uint=function() {
//console.log('function:publishMemberEvent' + self.prefix);
	var e = document.getElementById(self.prefix+'MemberRegistry_publishMemberEvent_address_uint_mAddress');
//	console.log(':' + self.prefix+'MemberRegistry_publishMemberEvent_address_uint_mAddress'+": "+e);
	var param_mAddress = e.value;
	var e = document.getElementById(self.prefix+'MemberRegistry_publishMemberEvent_address_uint_eventType');
//	console.log(':' + self.prefix+'MemberRegistry_publishMemberEvent_address_uint_eventType'+": "+e);
	var param_eventType = e.value;
//	console.log(':' +self.MemberRegistry_instance+':');
	var res = self.MemberRegistry_instance.publishMemberEvent(param_mAddress, param_eventType);
}

//delegated calls

}// end controller	


// script for MemberRegistry
function MemberRegistryModel(prefix) {
	this.prefix = prefix;
	this.guiFactory = new MemberRegistryGuiFactory();
	this.controller = new MemberRegistryController();
	this.guiFactory.prefix = prefix;
	this.controller.prefix = prefix;
}
MemberRegistryModel.prototype.create=function () {
	this.guiFactory.placeDefaultGui();
	this.controller._updateAttributes();
}


//class as GlueCode
//uses prefix + 'GuiContainer'
function MemberRegistryManager(prefix,contract) {
	this.prefix = prefix;
	var self = this;
	this.c = new MemberRegistryController();
	this.c.prefix=prefix;
	this.c.MemberRegistry_instance=contract;
	this.c.contractAddress = contract.address;
	this.g = new MemberRegistryGuiFactory();
	this.g.prefix = prefix;

	this.addGui = function() {
		var e = document.getElementById(this.prefix + 'GuiContainer');
//console.log('addGui:' + this.prefix+ 'GuiContainer'+e);
		var elemDiv = document.createElement('div');
		elemDiv.id= this.prefix +'MemberRegistry_gui';
		e.appendChild(elemDiv);
		this.g.placeDefaultGui();
		document.getElementById(this.prefix+'MemberRegistry_address').value = this.c.contractAddress;
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
		return this.c.MemberRegistry_instance;
	}

}// end of manager

function MemberRegistryGuiMananger(guiId){
	this.prefix = guiId;
	this.managers=new Array();	//[];		
	
	this.addManager = function(contract) {
//console.log('addManager:'+contract);
		var m = new MemberRegistryManager(contract.address,contract);
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
			elemDiv.id= this.managers[i].prefix + 'GuiContainer';//'MemberRegistry_gui';
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

//gui factory MemberAware
function MemberAwareGuiFactory() {
	this.prefix='';
	
// default Gui
this.placeDefaultGui=function() {
//	console.log(this.prefix+' place gui');
	document.getElementById(this.prefix+'MemberAware_gui').innerHTML = this.createDefaultGui();
}
// default Gui
this.createDefaultGui=function() {
	return 	'<!-- gui for MemberAware_contract -->'
+	'	<div class="contract" id="'+this.prefix+'MemberAware_contract">'
+	'	MemberAware:'
+	'	  <input type="text" id="'+this.prefix+'MemberAware_address"> <button id="'+this.prefix+'MemberAwareController.setAddress" onclick="'+this.prefix+'MemberAwareController.setAddress()">change MemberAware Address</button>'
+	'	  <div class="contract_attributes" id="'+this.prefix+'MemberAware_contract_attributes"> attributes:'
+	'	    <div class="contract_attribute" id="'+this.prefix+'MemberAware_contract_attribute_memberRegistry"> memberRegistry:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'MemberAware_memberRegistry_value"> </div>'
+	'	    </div>'
+	'	'
+	'	    <button id="'+this.prefix+'MemberAware_updateAttributes" onclick="'+this.prefix+'MemberAwareController._updateAttributes()">update MemberAware attributes</button>'
+	'	  </div>'
+	'	'
+	'	</div>'
;
}

//default attributes
this.createAttributesGui=function() {
	return 	'    <div class="contract_attribute" id="'+this.prefix+'MemberAware_contract_attribute_memberRegistry"> memberRegistry:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'MemberAware_memberRegistry_value"> </div>'
+	'	    </div>'
+	'	'
;
}





//print the contract div around
this.createMemberAwareSeletonGui=function(inner) {
	return 	'<!-- gui for MemberAware_contract -->'
+	'	<div class="contract" id="'+this.prefix+'MemberAware_contract">'
+ inner
+'</div>';
}


//eventguis

}//end guifactory
// script for MemberAware gui controller
function MemberAwareController() {

	this.MemberAware_instance = undefined;
	this.prefix='';
	this.contractAddress = undefined; 
	var self = this;

// bind buttons
	this.bindGui=function() {
		var btn = document.getElementById(self.prefix+'MemberAwareController.setAddress');
//	console.log('bind:' + self.prefix+' '+btn);
		if(btn!=undefined)		
			btn.onclick = this.setAddress;

		var btn = document.getElementById(self.prefix+'MemberAware_updateAttributes');
//		console.log('bind update:' + self.prefix+' '+btn);
		if(btn!=undefined)
			btn.onclick = this._updateAttributes;
	}
	// set function
	this.setAddress=function() {
	var _address = document.getElementById(self.prefix+'MemberAware_address');
//	console.log('setAddress:' + self.prefix+' '+_address);
	self.MemberAware_instance = MemberAwareContract.at(_address.value);
	self.contractAddress = _address.value;
	self._updateAttributes();
}
//update attributes
this._updateAttributes=function () {
if(this.MemberAware_instance===null) return;
//console.log('updateAttributes:' + self.prefix);
// update attributes
	var memberRegistry_res = self.MemberAware_instance.memberRegistry();
//	console.log('get:memberRegistry' + self.prefix);

	if(memberRegistry_res!=null)
		document.getElementById(self.prefix+'MemberAware_memberRegistry_value').innerText = memberRegistry_res;
}

//call functions
//function MemberAware_isMember
this.MemberAware_isMember_address=function() {
//console.log('function:isMember' + self.prefix);
	var e = document.getElementById(self.prefix+'MemberAware_isMember_address__address');
//	console.log(':' + self.prefix+'MemberAware_isMember_address__address'+": "+e);
	var param__address = e.value;
//	console.log(':' +self.MemberAware_instance+':');
	var res = self.MemberAware_instance.isMember(param__address);
	if(res!=null)
		document.getElementById(self.prefix+'MemberAware_isMember_address_res').innerText = res;
}

//delegated calls

}// end controller	


// script for MemberAware
function MemberAwareModel(prefix) {
	this.prefix = prefix;
	this.guiFactory = new MemberAwareGuiFactory();
	this.controller = new MemberAwareController();
	this.guiFactory.prefix = prefix;
	this.controller.prefix = prefix;
}
MemberAwareModel.prototype.create=function () {
	this.guiFactory.placeDefaultGui();
	this.controller._updateAttributes();
}


//class as GlueCode
//uses prefix + 'GuiContainer'
function MemberAwareManager(prefix,contract) {
	this.prefix = prefix;
	var self = this;
	this.c = new MemberAwareController();
	this.c.prefix=prefix;
	this.c.MemberAware_instance=contract;
	this.c.contractAddress = contract.address;
	this.g = new MemberAwareGuiFactory();
	this.g.prefix = prefix;

	this.addGui = function() {
		var e = document.getElementById(this.prefix + 'GuiContainer');
//console.log('addGui:' + this.prefix+ 'GuiContainer'+e);
		var elemDiv = document.createElement('div');
		elemDiv.id= this.prefix +'MemberAware_gui';
		e.appendChild(elemDiv);
		this.g.placeDefaultGui();
		document.getElementById(this.prefix+'MemberAware_address').value = this.c.contractAddress;
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
		return this.c.MemberAware_instance;
	}

}// end of manager

function MemberAwareGuiMananger(guiId){
	this.prefix = guiId;
	this.managers=new Array();	//[];		
	
	this.addManager = function(contract) {
//console.log('addManager:'+contract);
		var m = new MemberAwareManager(contract.address,contract);
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
			elemDiv.id= this.managers[i].prefix + 'GuiContainer';//'MemberAware_gui';
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

