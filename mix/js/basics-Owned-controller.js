// script for Owned
var Owned_instance = undefined;
	
// set address
function Owned_setAddress() {
	var _address = document.getElementById('Owned_address').value;
	Owned_instance = OwnedContract.at(_address);
}

function Owned_updateAttributes() {
// update attributes
var owner_res = Owned_instance.owner();
	if(owner_res!=null)
		document.getElementById('Owned_owner_value').innerText = owner_res;

}
//call functions
//function Owned_getOwner
function Owned_getOwner() {
	var res = Owned_instance.getOwner();
	if(res!=null)
		document.getElementById('Owned_getOwner_res').innerText = res;
}
//function Owned_changeOwner
function Owned_changeOwner_address() {
	var param_newOwner = document.getElementById('Owned_changeOwner_address_newOwner').value;
	var res = Owned_instance.changeOwner(param_newOwner);
}
//function Owned_kill
function Owned_kill() {
	var res = Owned_instance.kill();
}

//delegated calls

