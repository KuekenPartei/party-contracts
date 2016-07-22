
var MemberRegistryContract = web3.eth.contract([
{"constant":true,"inputs":[],"name":"mangerCount","outputs":[{"name":"","type":"uint"}],"type":"function"},
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
	var e = document.getElementById(this.prefix+'MemberRegistry_gui');
	if(e!=null)
		e.innerHTML = this.createDefaultGui();
	else
		console.log(this.prefix+'MemberRegistry_gui not found');
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
this.createSeletonGui=function(inner) {
	return 	'<!-- gui for MemberRegistry_contract -->'
+	'	<div class="contract" id="'+this.prefix+'MemberRegistry_contract">'
+ inner
+'</div>';
}


//eventguis
this.createMemberEventLogDataGui = function(prefix, blockHash, blockNumber
,mAddress,eType,id,name,memberState) {
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

	this.instance = undefined;
	this.prefix='';
	this.contractAddress = undefined; 
	this.eventlogPrefix = '';
	var self = this;

// bind buttons
	this.bindGui=function() {
		var btn = document.getElementById(self.prefix+'MemberRegistryController.setAddress');
		if(btn!=undefined)		
			btn.onclick = this.setAddress;

		var btn = document.getElementById(self.prefix+'MemberRegistry_updateAttributes');
		if(btn!=undefined)
			btn.onclick = this._updateAttributes;
		var btn = document.getElementById(self.prefix+'MemberRegistryController.MemberRegistry_addMember_string_address');
		if(btn!=undefined)
			btn.onclick = this.MemberRegistry_addMember_string_address;
		var btn = document.getElementById(self.prefix+'MemberRegistryController.Manageable_addManager_address');
		if(btn!=undefined)
			btn.onclick = this.Manageable_addManager_address;
		var btn = document.getElementById(self.prefix+'MemberRegistryController.MemberRegistry_unregisterMember_uint');
		if(btn!=undefined)
			btn.onclick = this.MemberRegistry_unregisterMember_uint;
		var btn = document.getElementById(self.prefix+'MemberRegistryController.MemberRegistry_getMemberCount');
		if(btn!=undefined)
			btn.onclick = this.MemberRegistry_getMemberCount;
		var btn = document.getElementById(self.prefix+'MemberRegistryController.Manageable_removeManager_address');
		if(btn!=undefined)
			btn.onclick = this.Manageable_removeManager_address;
		var btn = document.getElementById(self.prefix+'MemberRegistryController.MemberRegistry_isActiveMember_address');
		if(btn!=undefined)
			btn.onclick = this.MemberRegistry_isActiveMember_address;
		var btn = document.getElementById(self.prefix+'MemberRegistryController.Manageable_isManager_address');
		if(btn!=undefined)
			btn.onclick = this.Manageable_isManager_address;
		var btn = document.getElementById(self.prefix+'MemberRegistryController.MemberRegistry_changeMemberAddress_uint_address');
		if(btn!=undefined)
			btn.onclick = this.MemberRegistry_changeMemberAddress_uint_address;
		var btn = document.getElementById(self.prefix+'MemberRegistryController.MemberRegistry_getMemberData_address');
		if(btn!=undefined)
			btn.onclick = this.MemberRegistry_getMemberData_address;
		var btn = document.getElementById(self.prefix+'MemberRegistryController.MemberRegistry_publishMemberEvent_address_uint');
		if(btn!=undefined)
			btn.onclick = this.MemberRegistry_publishMemberEvent_address_uint;
	}
	// set function
	this.setAddress=function() {
	var _address = document.getElementById(self.prefix+'MemberRegistry_address');
	if(_address==null)return;

	self.MemberRegistry_instance = MemberRegistryContract.at(_address.value);
	self.contractAddress = _address.value;
	self._updateAttributes();
}
//update attributes
this._updateAttributes=function () {
if(this.instance===null) return;
// update attributes
	var mangerCount_res = self.instance.mangerCount();
	var e = document.getElementById(self.prefix+'MemberRegistry_mangerCount_value');
	if(mangerCount_res!=null && e!=null)
		e.innerText = mangerCount_res;
	var partyMemberCount_res = self.instance.partyMemberCount();
	var e = document.getElementById(self.prefix+'MemberRegistry_partyMemberCount_value');
	if(partyMemberCount_res!=null && e!=null)
		e.innerText = partyMemberCount_res;
	var activeMemberCount_res = self.instance.activeMemberCount();
	var e = document.getElementById(self.prefix+'MemberRegistry_activeMemberCount_value');
	if(activeMemberCount_res!=null && e!=null)
		e.innerText = activeMemberCount_res;
var e = document.getElementById(self.prefix+'MemberRegistry_contract_attribute_managers_input');
if(e!=null){
	var _key = e.value;
	var managers_res = self.instance.managers(_key);
	if(managers_res!=null){
		var e1 = document.getElementById(self.prefix+'MemberRegistry_managers_value');
		if(e1!=null)	
			e1.innerText = managers_res;
	}}
	var e = document.getElementById(self.prefix+'MemberRegistry_contract_attribute_partyMembers_input');
if(e!=null){
	var _key = e.value;
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
	}}
	var e = document.getElementById(self.prefix+'MemberRegistry_contract_attribute_memberAddress_input');
if(e!=null){
	var _key = e.value;
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
	}}
}

//call functions
//function MemberRegistry_addMember
this.MemberRegistry_addMember_string_address=function() {
	var e = document.getElementById(self.prefix+'MemberRegistry_addMember_string_address_name');
	if(e!=null)
		var param_name = e.value;
	var e = document.getElementById(self.prefix+'MemberRegistry_addMember_string_address__memberAddress');
	if(e!=null)
		var param__memberAddress = e.value;
	var res = self.instance.addMember(param_name, param__memberAddress);
}
//function MemberRegistry_canAccess
this.Manageable_canAccess=function() {
	var res = self.instance.canAccess();
	var e = document.getElementById(self.prefix+'Manageable_canAccess_res');
	if(res!=null && e!=null)
		e.innerText = res;
}
//function MemberRegistry_addManager
this.Manageable_addManager_address=function() {
	var e = document.getElementById(self.prefix+'Manageable_addManager_address__newManagerAddress');
	if(e!=null)
		var param__newManagerAddress = e.value;
	var res = self.instance.addManager(param__newManagerAddress);
}
//function MemberRegistry_unregisterMember
this.MemberRegistry_unregisterMember_uint=function() {
	var e = document.getElementById(self.prefix+'MemberRegistry_unregisterMember_uint_id');
	if(e!=null)
		var param_id = e.value;
	var res = self.instance.unregisterMember(param_id);
}
//function MemberRegistry_getMemberCount
this.MemberRegistry_getMemberCount=function() {
	var res = self.instance.getMemberCount();
	var e = document.getElementById(self.prefix+'MemberRegistry_getMemberCount_res');
	if(res!=null && e!=null)
		e.innerText = res;
}
//function MemberRegistry_removeManager
this.Manageable_removeManager_address=function() {
	var e = document.getElementById(self.prefix+'Manageable_removeManager_address__managerAddress');
	if(e!=null)
		var param__managerAddress = e.value;
	var res = self.instance.removeManager(param__managerAddress);
}
//function MemberRegistry_isActiveMember
this.MemberRegistry_isActiveMember_address=function() {
	var e = document.getElementById(self.prefix+'MemberRegistry_isActiveMember_address__memberAdress');
	if(e!=null)
		var param__memberAdress = e.value;
	var res = self.instance.isActiveMember(param__memberAdress);
	var e = document.getElementById(self.prefix+'MemberRegistry_isActiveMember_address_res');
	if(res!=null && e!=null)
		e.innerText = res;
}
//function MemberRegistry_isManager
this.Manageable_isManager_address=function() {
	var e = document.getElementById(self.prefix+'Manageable_isManager_address__managerAddress');
	if(e!=null)
		var param__managerAddress = e.value;
	var res = self.instance.isManager(param__managerAddress);
	var e = document.getElementById(self.prefix+'Manageable_isManager_address_res');
	if(res!=null && e!=null)
		e.innerText = res;
}
//function MemberRegistry_changeMemberAddress
this.MemberRegistry_changeMemberAddress_uint_address=function() {
	var e = document.getElementById(self.prefix+'MemberRegistry_changeMemberAddress_uint_address_id');
	if(e!=null)
		var param_id = e.value;
	var e = document.getElementById(self.prefix+'MemberRegistry_changeMemberAddress_uint_address__newMemberAddress');
	if(e!=null)
		var param__newMemberAddress = e.value;
	var res = self.instance.changeMemberAddress(param_id, param__newMemberAddress);
}
//function MemberRegistry_getMemberData
this.MemberRegistry_getMemberData_address=function() {
	var e = document.getElementById(self.prefix+'MemberRegistry_getMemberData_address__address');
	if(e!=null)
		var param__address = e.value;
	var res = self.instance.getMemberData(param__address);
	var e = document.getElementById(self.prefix+'MemberRegistry_getMemberData_address_res');
	if(res!=null && e!=null)
		e.innerText = res;
}
//function MemberRegistry_publishMemberEvent
this.MemberRegistry_publishMemberEvent_address_uint=function() {
	var e = document.getElementById(self.prefix+'MemberRegistry_publishMemberEvent_address_uint_mAddress');
	if(e!=null)
		var param_mAddress = e.value;
	var e = document.getElementById(self.prefix+'MemberRegistry_publishMemberEvent_address_uint_eventType');
	if(e!=null)
		var param_eventType = e.value;
	var res = self.instance.publishMemberEvent(param_mAddress, param_eventType);
}

//delegated calls

}// end controller	


//class as GlueCode MemberRegistryManager
//uses prefix + 'GuiContainer'
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

	this.addGui = function() {
		var e = document.getElementById(this.containerId);
		if(e==null)return;
		var elemDiv = document.createElement('div');
		elemDiv.id= this.prefix +'MemberRegistry_gui';
		e.appendChild(elemDiv);
		elemDiv.innerHTML = this.createGui(this.g);
		var e = document.getElementById(this.prefix+'MemberRegistry_address');
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
	var event_MemberEvent = contract.MemberEvent({},{fromBlock: 0});
	event_MemberEvent.watch(function(error,result){
	if(!error){
		var e = document.getElementById(self.eventlogPrefix+'eventLog');
		var elemDiv = document.createElement('div');
		elemDiv.id= result.blockNumber +'event';
		e.appendChild(elemDiv);
		//console.log(result.address+ 'eventLog'+result.blockHash+' '+result.blockNumber+' '+result.args.name+' '+result.args.succesful+' ');
		elemDiv.innerHTML = '<div>'
        +'<span>'+result.args.mAddress+'</span>'
        +'<span>'+result.args.eType+'</span>'
        +'<span>'+result.args.id+'</span>'
        +'<span>'+result.args.name+'</span>'
        +'<span>'+result.args.memberState+'</span>'
		+ '</div>';
		}else
		console.log(error);	
	});
	}

}// end of manager

function MemberRegistryGuiMananger(guiId){
	this.prefix = guiId;
	this.managers=new Array();	//[];		
	
	this.addManager = function(contract) {
		var m = new MemberRegistryManager(contract.address,contract,this.prefix);
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
			elemDiv.id= manager.prefix + 'GuiContainer';//'MemberRegistry_gui';
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

//Start of user code custom_MemberRegistry_js
//TODO: implement
//End of user code
//gui factory MemberAware
function MemberAwareGuiFactory() {
	this.prefix='';
	
// default Gui
this.placeDefaultGui=function() {
	var e = document.getElementById(this.prefix+'MemberAware_gui');
	if(e!=null)
		e.innerHTML = this.createDefaultGui();
	else
		console.log(this.prefix+'MemberAware_gui not found');
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
this.createSeletonGui=function(inner) {
	return 	'<!-- gui for MemberAware_contract -->'
+	'	<div class="contract" id="'+this.prefix+'MemberAware_contract">'
+ inner
+'</div>';
}


//eventguis

}//end guifactory
// script for MemberAware gui controller
function MemberAwareController() {

	this.instance = undefined;
	this.prefix='';
	this.contractAddress = undefined; 
	this.eventlogPrefix = '';
	var self = this;

// bind buttons
	this.bindGui=function() {
		var btn = document.getElementById(self.prefix+'MemberAwareController.setAddress');
		if(btn!=undefined)		
			btn.onclick = this.setAddress;

		var btn = document.getElementById(self.prefix+'MemberAware_updateAttributes');
		if(btn!=undefined)
			btn.onclick = this._updateAttributes;
	}
	// set function
	this.setAddress=function() {
	var _address = document.getElementById(self.prefix+'MemberAware_address');
	if(_address==null)return;

	self.MemberAware_instance = MemberAwareContract.at(_address.value);
	self.contractAddress = _address.value;
	self._updateAttributes();
}
//update attributes
this._updateAttributes=function () {
if(this.instance===null) return;
// update attributes
	var memberRegistry_res = self.instance.memberRegistry();
	var e = document.getElementById(self.prefix+'MemberAware_memberRegistry_value');
	if(memberRegistry_res!=null && e!=null)
		e.innerText = memberRegistry_res;
}

//call functions
//function MemberAware_isMember
this.MemberAware_isMember_address=function() {
	var e = document.getElementById(self.prefix+'MemberAware_isMember_address__address');
	if(e!=null)
		var param__address = e.value;
	var res = self.instance.isMember(param__address);
	var e = document.getElementById(self.prefix+'MemberAware_isMember_address_res');
	if(res!=null && e!=null)
		e.innerText = res;
}

//delegated calls

}// end controller	


//class as GlueCode MemberAwareManager
//uses prefix + 'GuiContainer'
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

	this.addGui = function() {
		var e = document.getElementById(this.containerId);
		if(e==null)return;
		var elemDiv = document.createElement('div');
		elemDiv.id= this.prefix +'MemberAware_gui';
		e.appendChild(elemDiv);
		elemDiv.innerHTML = this.createGui(this.g);
		var e = document.getElementById(this.prefix+'MemberAware_address');
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

function MemberAwareGuiMananger(guiId){
	this.prefix = guiId;
	this.managers=new Array();	//[];		
	
	this.addManager = function(contract) {
		var m = new MemberAwareManager(contract.address,contract,this.prefix);
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
			elemDiv.id= manager.prefix + 'GuiContainer';//'MemberAware_gui';
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

//Start of user code custom_MemberAware_js
//TODO: implement
//End of user code
//the page Object fro the MembersPage.
function MembersPage(prefix) {
	this.prefix=prefix;
	//Start of user code page_members_attributes
		//TODO: implement
	//End of user code

	
// default Gui
this.placeDefaultGui=function() {
this.createDefaultGui();

}
// default Gui
this.createDefaultGui=function() {
	//Start of user code page_Members_create_default_gui_functions
		//TODO: implement
	//End of user code
}
	//Start of user code page_Members_functions
		//TODO: implement
	//End of user code

}// end of MembersPage
