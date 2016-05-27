// script for Party
var Party_instance = undefined;
	
// set address
function Party_setAddress() {
	var _address = document.getElementById('Party_address').value;
	Party_instance = PartyContract.at(_address);
}

function Party_updateAttributes() {
// update attributes
var memberRegistry_res = Party_instance.memberRegistry();
	if(memberRegistry_res!=null)
		document.getElementById('Party_memberRegistry_value').innerText = memberRegistry_res;
var constitutionHash_res = Party_instance.constitutionHash();
	if(constitutionHash_res!=null)
		document.getElementById('Party_constitutionHash_value').innerText = constitutionHash_res;
var organCount_res = Party_instance.organCount();
	if(organCount_res!=null)
		document.getElementById('Party_organCount_value').innerText = organCount_res;
var blogregistry_res = Party_instance.blogregistry();
	if(blogregistry_res!=null)
		document.getElementById('Party_blogregistry_value').innerText = blogregistry_res;
}
//call functions
//function Party_Party
function Party_Party() {
	var res = Party_instance.Party();
}
//function Party_canAccess
function Manageable_canAccess() {
	var res = Party_instance.canAccess();
	if(res!=null)
		document.getElementById('Manageable_canAccess_res').innerText = res;
}
//function Party_addManager
function Manageable_addManager_address() {
	var param__newManagerAddress = document.getElementById('Manageable_addManager_address__newManagerAddress').value;
	var res = Party_instance.addManager(param__newManagerAddress);
}
//function Party_createOrgan
function Party_createOrgan_string() {
	var param_organName = document.getElementById('Party_createOrgan_string_organName').value;
	var res = Party_instance.createOrgan(param_organName);
}
//function Party_removeManager
function Manageable_removeManager_address() {
	var param__managerAddress = document.getElementById('Manageable_removeManager_address__managerAddress').value;
	var res = Party_instance.removeManager(param__managerAddress);
}

//delegated calls
//call functions
//function delegate_MemberRegistry_addMember
function delegate_MemberRegistry_addMember_string_address() {
	var param_name = document.getElementById('delegate_MemberRegistry_addMember_string_address_name').value;
	var param__memberAddress = document.getElementById('delegate_MemberRegistry_addMember_string_address__memberAddress').value;
	var res = MemberRegistry_instance.addMember(param_name, param__memberAddress);
}
//function delegate_MemberRegistry_canAccess
function delegate_Manageable_canAccess() {
	var res = MemberRegistry_instance.canAccess();
	if(res!=null)
		document.getElementById('delegate_Manageable_canAccess_res').innerText = res;
}
//function delegate_MemberRegistry_addManager
function delegate_Manageable_addManager_address() {
	var param__newManagerAddress = document.getElementById('delegate_Manageable_addManager_address__newManagerAddress').value;
	var res = MemberRegistry_instance.addManager(param__newManagerAddress);
}
//function delegate_MemberRegistry_unregisterMember
function delegate_MemberRegistry_unregisterMember_uint() {
	var param_id = document.getElementById('delegate_MemberRegistry_unregisterMember_uint_id').value;
	var res = MemberRegistry_instance.unregisterMember(param_id);
}
//function delegate_MemberRegistry_getMemberCount
function delegate_MemberRegistry_getMemberCount() {
	var res = MemberRegistry_instance.getMemberCount();
	if(res!=null)
		document.getElementById('delegate_MemberRegistry_getMemberCount_res').innerText = res;
}
//function delegate_MemberRegistry_removeManager
function delegate_Manageable_removeManager_address() {
	var param__managerAddress = document.getElementById('delegate_Manageable_removeManager_address__managerAddress').value;
	var res = MemberRegistry_instance.removeManager(param__managerAddress);
}
//function delegate_MemberRegistry_isActiveMember
function delegate_MemberRegistry_isActiveMember_address() {
	var param__memberAdress = document.getElementById('delegate_MemberRegistry_isActiveMember_address__memberAdress').value;
	var res = MemberRegistry_instance.isActiveMember(param__memberAdress);
	if(res!=null)
		document.getElementById('delegate_MemberRegistry_isActiveMember_address_res').innerText = res;
}
//function delegate_MemberRegistry_changeMemberAddress
function delegate_MemberRegistry_changeMemberAddress_uint_address() {
	var param_id = document.getElementById('delegate_MemberRegistry_changeMemberAddress_uint_address_id').value;
	var param__newMemberAddress = document.getElementById('delegate_MemberRegistry_changeMemberAddress_uint_address__newMemberAddress').value;
	var res = MemberRegistry_instance.changeMemberAddress(param_id, param__newMemberAddress);
}


