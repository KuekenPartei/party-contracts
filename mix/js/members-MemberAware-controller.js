// script for MemberAware
var MemberAware_instance = undefined;
	
// set address
function MemberAware_setAddress() {
	var _address = document.getElementById('MemberAware_address').value;
	MemberAware_instance = MemberAwareContract.at(_address);
}

function MemberAware_updateAttributes() {
// update attributes
var memberRegistry_res = MemberAware_instance.memberRegistry();
	if(memberRegistry_res!=null)
		document.getElementById('MemberAware_memberRegistry_value').innerText = memberRegistry_res;

}
//call functions
//function MemberAware_isMember
function MemberAware_isMember_address() {
	var param__address = document.getElementById('MemberAware_isMember_address__address').value;
	var res = MemberAware_instance.isMember(param__address);
	if(res!=null)
		document.getElementById('MemberAware_isMember_address_res').innerText = res;
}

//delegated calls

