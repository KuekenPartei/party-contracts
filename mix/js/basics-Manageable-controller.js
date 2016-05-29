// script for Manageable
var Manageable_instance = undefined;
	
// set address
function Manageable_setAddress() {
	var _address = document.getElementById('Manageable_address').value;
	Manageable_instance = ManageableContract.at(_address);
}

function Manageable_updateAttributes() {
// update attributes
var _key = document.getElementById('Manageable_contract_attribute_managers_input').value;
var managers_res = Manageable_instance.managers(_key);
	if(managers_res!=null){
		document.getElementById('Manageable_managers_value').innerText = managers_res;
	}

}
//call functions
//function Manageable_canAccess
function Manageable_canAccess() {
	var res = Manageable_instance.canAccess();
	if(res!=null)
		document.getElementById('Manageable_canAccess_res').innerText = res;
}
//function Manageable_addManager
function Manageable_addManager_address() {
	var param__newManagerAddress = document.getElementById('Manageable_addManager_address__newManagerAddress').value;
	var res = Manageable_instance.addManager(param__newManagerAddress);
}
//function Manageable_removeManager
function Manageable_removeManager_address() {
	var param__managerAddress = document.getElementById('Manageable_removeManager_address__managerAddress').value;
	var res = Manageable_instance.removeManager(param__managerAddress);
}

//delegated calls

