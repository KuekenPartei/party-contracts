// script for KUEKeNParty
var KUEKeNParty_instance = undefined;
	
// set address
function KUEKeNParty_setAddress() {
	var _address = document.getElementById('KUEKeNParty_address').value;
	KUEKeNParty_instance = KUEKeNPartyContract.at(_address);
}

function KUEKeNParty_updateAttributes() {
// update attributes
var constitutionHash_res = KUEKeNParty_instance.constitutionHash();
	if(constitutionHash_res!=null)
		document.getElementById('KUEKeNParty_constitutionHash_value').innerText = constitutionHash_res;
var organCount_res = KUEKeNParty_instance.organCount();
	if(organCount_res!=null)
		document.getElementById('KUEKeNParty_organCount_value').innerText = organCount_res;
var blogregistry_res = KUEKeNParty_instance.blogregistry();
	if(blogregistry_res!=null)
		document.getElementById('KUEKeNParty_blogregistry_value').innerText = blogregistry_res;
var _key = document.getElementById('KUEKeNParty_contract_attribute_managers_input').value;
var managers_res = KUEKeNParty_instance.managers(_key);
	if(managers_res!=null){
		document.getElementById('KUEKeNParty_managers_value').innerText = managers_res;
	}
var _key = document.getElementById('KUEKeNParty_contract_attribute_organs_input').value;
var organs_res = KUEKeNParty_instance.organs(_key);
	if(organs_res!=null){
		document.getElementById('KUEKeNParty_organs_organFunctions_value').innerText = organs_res[0];
		document.getElementById('KUEKeNParty_organs_organName_value').innerText = organs_res[1];
		document.getElementById('KUEKeNParty_organs_lastFunctionId_value').innerText = organs_res[2];
		document.getElementById('KUEKeNParty_organs_blogRegistry_value').innerText = organs_res[3];
		document.getElementById('KUEKeNParty_organs_isActive_value').innerText = organs_res[4];
		document.getElementById('KUEKeNParty_organs_organBlog_value').innerText = organs_res[5];
		document.getElementById('KUEKeNParty_organs_ballots_value').innerText = organs_res[6];
		document.getElementById('KUEKeNParty_organs_ballotCount_value').innerText = organs_res[7];
	}

}
//call functions
//function KUEKeNParty_KUEKeNParty
function KUEKeNParty_KUEKeNParty() {
	var res = KUEKeNParty_instance.KUEKeNParty();
}
//function KUEKeNParty_Party
function Party_Party() {
	var res = KUEKeNParty_instance.Party();
}
//function KUEKeNParty_canAccess
function Manageable_canAccess() {
	var res = KUEKeNParty_instance.canAccess();
	if(res!=null)
		document.getElementById('Manageable_canAccess_res').innerText = res;
}
//function KUEKeNParty_addManager
function Manageable_addManager_address() {
	var param__newManagerAddress = document.getElementById('Manageable_addManager_address__newManagerAddress').value;
	var res = KUEKeNParty_instance.addManager(param__newManagerAddress);
}
//function KUEKeNParty_boostrapParty
function KUEKeNParty_boostrapParty_address_address() {
	var param_fc = document.getElementById('KUEKeNParty_boostrapParty_address_address_fc').value;
	var param_br = document.getElementById('KUEKeNParty_boostrapParty_address_address_br').value;
	var res = KUEKeNParty_instance.boostrapParty(param_fc, param_br);
}
//function KUEKeNParty_createOrgan
function Party_createOrgan_string() {
	var param_organName = document.getElementById('Party_createOrgan_string_organName').value;
	var res = KUEKeNParty_instance.createOrgan(param_organName);
}
//function KUEKeNParty_removeManager
function Manageable_removeManager_address() {
	var param__managerAddress = document.getElementById('Manageable_removeManager_address__managerAddress').value;
	var res = KUEKeNParty_instance.removeManager(param__managerAddress);
}

//delegated calls

