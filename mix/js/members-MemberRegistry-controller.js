// script for MemberRegistry
var MemberRegistry_instance = undefined;
	
// set address
function MemberRegistry_setAddress() {
	var _address = document.getElementById('MemberRegistry_address').value;
	MemberRegistry_instance = MemberRegistryContract.at(_address);
}

function MemberRegistry_updateAttributes() {
// update attributes
var partyMemberCount_res = MemberRegistry_instance.partyMemberCount();
	if(partyMemberCount_res!=null)
		document.getElementById('MemberRegistry_partyMemberCount_value').innerText = partyMemberCount_res;
var activeMemberCount_res = MemberRegistry_instance.activeMemberCount();
	if(activeMemberCount_res!=null)
		document.getElementById('MemberRegistry_activeMemberCount_value').innerText = activeMemberCount_res;
var _key = document.getElementById('MemberRegistry_contract_attribute_managers_input').value;
var managers_res = MemberRegistry_instance.managers(_key);
	if(managers_res!=null){
		document.getElementById('MemberRegistry_managers_value').innerText = managers_res;
	}
var _key = document.getElementById('MemberRegistry_contract_attribute_partyMembers_input').value;
var partyMembers_res = MemberRegistry_instance.partyMembers(_key);
	if(partyMembers_res!=null){
		document.getElementById('MemberRegistry_partyMembers_name_value').innerText = partyMembers_res[0];
		document.getElementById('MemberRegistry_partyMembers_id_value').innerText = partyMembers_res[1];
		document.getElementById('MemberRegistry_partyMembers_member_value').innerText = partyMembers_res[2];
		document.getElementById('MemberRegistry_partyMembers_state_value').innerText = partyMembers_res[3];
	}
var _key = document.getElementById('MemberRegistry_contract_attribute_memberAddress_input').value;
var memberAddress_res = MemberRegistry_instance.memberAddress(_key);
	if(memberAddress_res!=null){
		document.getElementById('MemberRegistry_memberAddress_name_value').innerText = memberAddress_res[0];
		document.getElementById('MemberRegistry_memberAddress_id_value').innerText = memberAddress_res[1];
		document.getElementById('MemberRegistry_memberAddress_member_value').innerText = memberAddress_res[2];
		document.getElementById('MemberRegistry_memberAddress_state_value').innerText = memberAddress_res[3];
	}

}
//call functions
//function MemberRegistry_addMember
function MemberRegistry_addMember_string_address() {
	var param_name = document.getElementById('MemberRegistry_addMember_string_address_name').value;
	var param__memberAddress = document.getElementById('MemberRegistry_addMember_string_address__memberAddress').value;
	var res = MemberRegistry_instance.addMember(param_name, param__memberAddress);
}
//function MemberRegistry_canAccess
function Manageable_canAccess() {
	var res = MemberRegistry_instance.canAccess();
	if(res!=null)
		document.getElementById('Manageable_canAccess_res').innerText = res;
}
//function MemberRegistry_addManager
function Manageable_addManager_address() {
	var param__newManagerAddress = document.getElementById('Manageable_addManager_address__newManagerAddress').value;
	var res = MemberRegistry_instance.addManager(param__newManagerAddress);
}
//function MemberRegistry_unregisterMember
function MemberRegistry_unregisterMember_uint() {
	var param_id = document.getElementById('MemberRegistry_unregisterMember_uint_id').value;
	var res = MemberRegistry_instance.unregisterMember(param_id);
}
//function MemberRegistry_getMemberCount
function MemberRegistry_getMemberCount() {
	var res = MemberRegistry_instance.getMemberCount();
	if(res!=null)
		document.getElementById('MemberRegistry_getMemberCount_res').innerText = res;
}
//function MemberRegistry_removeManager
function Manageable_removeManager_address() {
	var param__managerAddress = document.getElementById('Manageable_removeManager_address__managerAddress').value;
	var res = MemberRegistry_instance.removeManager(param__managerAddress);
}
//function MemberRegistry_isActiveMember
function MemberRegistry_isActiveMember_address() {
	var param__memberAdress = document.getElementById('MemberRegistry_isActiveMember_address__memberAdress').value;
	var res = MemberRegistry_instance.isActiveMember(param__memberAdress);
	if(res!=null)
		document.getElementById('MemberRegistry_isActiveMember_address_res').innerText = res;
}
//function MemberRegistry_changeMemberAddress
function MemberRegistry_changeMemberAddress_uint_address() {
	var param_id = document.getElementById('MemberRegistry_changeMemberAddress_uint_address_id').value;
	var param__newMemberAddress = document.getElementById('MemberRegistry_changeMemberAddress_uint_address__newMemberAddress').value;
	var res = MemberRegistry_instance.changeMemberAddress(param_id, param__newMemberAddress);
}

//delegated calls

