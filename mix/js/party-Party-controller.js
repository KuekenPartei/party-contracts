// script for Party
var Party_instance = undefined;
	
// set address
function Party_setAddress() {
	var _address = document.getElementById('Party_address').value;
	Party_instance = PartyContract.at(_address);
}

function Party_updateAttributes() {
// update attributes
var constitutionHash_res = Party_instance.constitutionHash();
	if(constitutionHash_res!=null)
		document.getElementById('Party_constitutionHash_value').innerText = constitutionHash_res;
var organCount_res = Party_instance.organCount();
	if(organCount_res!=null)
		document.getElementById('Party_organCount_value').innerText = organCount_res;
var blogregistry_res = Party_instance.blogregistry();
	if(blogregistry_res!=null)
		document.getElementById('Party_blogregistry_value').innerText = blogregistry_res;
var _key = document.getElementById('Party_contract_attribute_managers_input').value;
var managers_res = Party_instance.managers(_key);
	if(managers_res!=null){
		document.getElementById('Party_managers_value').innerText = managers_res;
	}
var _key = document.getElementById('Party_contract_attribute_organs_input').value;
var organs_res = Party_instance.organs(_key);
	if(organs_res!=null){
		document.getElementById('Party_organs_organFunctions_value').innerText = organs_res[0];
		document.getElementById('Party_organs_organName_value').innerText = organs_res[1];
		document.getElementById('Party_organs_lastFunctionId_value').innerText = organs_res[2];
		document.getElementById('Party_organs_blogRegistry_value').innerText = organs_res[3];
		document.getElementById('Party_organs_isActive_value').innerText = organs_res[4];
		document.getElementById('Party_organs_organBlog_value').innerText = organs_res[5];
		document.getElementById('Party_organs_ballots_value').innerText = organs_res[6];
		document.getElementById('Party_organs_ballotCount_value').innerText = organs_res[7];
	}

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

