// script for Multiowned
var Multiowned_instance = undefined;
	
// set address
function Multiowned_setAddress() {
	var _address = document.getElementById('Multiowned_address').value;
	Multiowned_instance = MultiownedContract.at(_address);
}

function Multiowned_updateAttributes() {
// update attributes
var m_required_res = Multiowned_instance.m_required();
	if(m_required_res!=null)
		document.getElementById('Multiowned_m_required_value').innerText = m_required_res;
var m_numOwners_res = Multiowned_instance.m_numOwners();
	if(m_numOwners_res!=null)
		document.getElementById('Multiowned_m_numOwners_value').innerText = m_numOwners_res;
var m_owners_res = Multiowned_instance.m_owners();
	if(m_owners_res!=null)
		document.getElementById('Multiowned_m_owners_value').innerText = m_owners_res;
var c_maxOwners_res = Multiowned_instance.c_maxOwners();
	if(c_maxOwners_res!=null)
		document.getElementById('Multiowned_c_maxOwners_value').innerText = c_maxOwners_res;
var m_pendingIndex_res = Multiowned_instance.m_pendingIndex();
	if(m_pendingIndex_res!=null)
		document.getElementById('Multiowned_m_pendingIndex_value').innerText = m_pendingIndex_res;
var _key = document.getElementById('Multiowned_contract_attribute_m_ownerIndex_input').value;
var m_ownerIndex_res = Multiowned_instance.m_ownerIndex(_key);
	if(m_ownerIndex_res!=null){
		document.getElementById('Multiowned_m_ownerIndex_value').innerText = m_ownerIndex_res;
	}
var _key = document.getElementById('Multiowned_contract_attribute_m_pending_input').value;
var m_pending_res = Multiowned_instance.m_pending(_key);
	if(m_pending_res!=null){
		document.getElementById('Multiowned_m_pending_yetNeeded_value').innerText = m_pending_res[0];
		document.getElementById('Multiowned_m_pending_ownersDone_value').innerText = m_pending_res[1];
		document.getElementById('Multiowned_m_pending_index_value').innerText = m_pending_res[2];
	}

}
//call functions
//function Multiowned_Multiowned
function Multiowned_Multiowned_address_uint() {
	var param__owners = document.getElementById('Multiowned_Multiowned_address_uint__owners').value;
	var param__required = document.getElementById('Multiowned_Multiowned_address_uint__required').value;
	var res = Multiowned_instance.Multiowned(param__owners, param__required);
}
//function Multiowned_clearPending
function Multiowned_clearPending() {
	var res = Multiowned_instance.clearPending();
}
//function Multiowned_revoke
function Multiowned_revoke_bytes32() {
	var param__operation = document.getElementById('Multiowned_revoke_bytes32__operation').value;
	var res = Multiowned_instance.revoke(param__operation);
}
//function Multiowned_changeOwner
function Multiowned_changeOwner_address_address() {
	var param__from = document.getElementById('Multiowned_changeOwner_address_address__from').value;
	var param__to = document.getElementById('Multiowned_changeOwner_address_address__to').value;
	var res = Multiowned_instance.changeOwner(param__from, param__to);
}
//function Multiowned_addOwner
function Multiowned_addOwner_address() {
	var param__owner = document.getElementById('Multiowned_addOwner_address__owner').value;
	var res = Multiowned_instance.addOwner(param__owner);
}
//function Multiowned_removeOwner
function Multiowned_removeOwner_address() {
	var param__owner = document.getElementById('Multiowned_removeOwner_address__owner').value;
	var res = Multiowned_instance.removeOwner(param__owner);
}
//function Multiowned_changeRequirement
function Multiowned_changeRequirement_uint() {
	var param__newRequired = document.getElementById('Multiowned_changeRequirement_uint__newRequired').value;
	var res = Multiowned_instance.changeRequirement(param__newRequired);
}
//function Multiowned_isOwner
function Multiowned_isOwner_address() {
	var param__addr = document.getElementById('Multiowned_isOwner_address__addr').value;
	var res = Multiowned_instance.isOwner(param__addr);
	if(res!=null)
		document.getElementById('Multiowned_isOwner_address_res').innerText = res;
}
//function Multiowned_hasConfirmed
function Multiowned_hasConfirmed_bytes32_address() {
	var param__operation = document.getElementById('Multiowned_hasConfirmed_bytes32_address__operation').value;
	var param__owner = document.getElementById('Multiowned_hasConfirmed_bytes32_address__owner').value;
	var res = Multiowned_instance.hasConfirmed(param__operation, param__owner);
	if(res!=null)
		document.getElementById('Multiowned_hasConfirmed_bytes32_address_res').innerText = res;
}
//function Multiowned_confirmAndCheck
function Multiowned_confirmAndCheck_bytes32() {
	var param__operation = document.getElementById('Multiowned_confirmAndCheck_bytes32__operation').value;
	var res = Multiowned_instance.confirmAndCheck(param__operation);
	if(res!=null)
		document.getElementById('Multiowned_confirmAndCheck_bytes32_res').innerText = res;
}

//delegated calls

