// script for FoundationConference
var FoundationConference_instance = undefined;
	
// set address
function FoundationConference_setAddress() {
	var _address = document.getElementById('FoundationConference_address').value;
	FoundationConference_instance = FoundationConferenceContract.at(_address);
}

function FoundationConference_updateAttributes() {
// update attributes
var memberRegistry_res = FoundationConference_instance.memberRegistry();
	if(memberRegistry_res!=null)
		document.getElementById('FoundationConference_memberRegistry_value').innerText = memberRegistry_res;
var accreditatedMembers_res = FoundationConference_instance.accreditatedMembers();
	if(accreditatedMembers_res!=null)
		document.getElementById('FoundationConference_accreditatedMembers_value').innerText = accreditatedMembers_res;
var organName_res = FoundationConference_instance.organName();
	if(organName_res!=null)
		document.getElementById('FoundationConference_organName_value').innerText = organName_res;
var lastFunctionId_res = FoundationConference_instance.lastFunctionId();
	if(lastFunctionId_res!=null)
		document.getElementById('FoundationConference_lastFunctionId_value').innerText = lastFunctionId_res;
var blogRegistry_res = FoundationConference_instance.blogRegistry();
	if(blogRegistry_res!=null)
		document.getElementById('FoundationConference_blogRegistry_value').innerText = blogRegistry_res;
var isActive_res = FoundationConference_instance.isActive();
	if(isActive_res!=null)
		document.getElementById('FoundationConference_isActive_value').innerText = isActive_res;
var ballotCount_res = FoundationConference_instance.ballotCount();
	if(ballotCount_res!=null)
		document.getElementById('FoundationConference_ballotCount_value').innerText = ballotCount_res;
var _key = document.getElementById('FoundationConference_contract_attribute_managers_input').value;
var managers_res = FoundationConference_instance.managers(_key);
	if(managers_res!=null){
		document.getElementById('FoundationConference_managers_value').innerText = managers_res;
	}
var _key = document.getElementById('FoundationConference_contract_attribute_organFunctions_input').value;
var organFunctions_res = FoundationConference_instance.organFunctions(_key);
	if(organFunctions_res!=null){
		document.getElementById('FoundationConference_organFunctions_currentMember_value').innerText = organFunctions_res[0];
		document.getElementById('FoundationConference_organFunctions_functionName_value').innerText = organFunctions_res[1];
		document.getElementById('FoundationConference_organFunctions_id_value').innerText = organFunctions_res[2];
		document.getElementById('FoundationConference_organFunctions_constitutionHash_value').innerText = organFunctions_res[3];
		document.getElementById('FoundationConference_organFunctions_lastMemberChanged_value').innerText = organFunctions_res[4];
		document.getElementById('FoundationConference_organFunctions_lastConstitutionHashChanged_value').innerText = organFunctions_res[5];
		document.getElementById('FoundationConference_organFunctions_publisher_value').innerText = organFunctions_res[6];
	}

}
//call functions
//function FoundationConference_accreditationMember
function FoundationConference_accreditationMember_address() {
	var param__address = document.getElementById('FoundationConference_accreditationMember_address__address').value;
	var res = FoundationConference_instance.accreditationMember(param__address);
}
//function FoundationConference_canAccess
function Manageable_canAccess() {
	var res = FoundationConference_instance.canAccess();
	if(res!=null)
		document.getElementById('Manageable_canAccess_res').innerText = res;
}
//function FoundationConference_changeMember
function Organ_changeMember_uint_address() {
	var param__id = document.getElementById('Organ_changeMember_uint_address__id').value;
	var param__address = document.getElementById('Organ_changeMember_uint_address__address').value;
	var res = FoundationConference_instance.changeMember(param__id, param__address);
}
//function FoundationConference_isMember
function MemberAware_isMember_address() {
	var param__address = document.getElementById('MemberAware_isMember_address__address').value;
	var res = FoundationConference_instance.isMember(param__address);
	if(res!=null)
		document.getElementById('MemberAware_isMember_address_res').innerText = res;
}
//function FoundationConference_addManager
function Manageable_addManager_address() {
	var param__newManagerAddress = document.getElementById('Manageable_addManager_address__newManagerAddress').value;
	var res = FoundationConference_instance.addManager(param__newManagerAddress);
}
//function FoundationConference_createFunction
function Organ_createFunction_string_string() {
	var param__functionName = document.getElementById('Organ_createFunction_string_string__functionName').value;
	var param__constittiutionHash = document.getElementById('Organ_createFunction_string_string__constittiutionHash').value;
	var res = FoundationConference_instance.createFunction(param__functionName, param__constittiutionHash);
}
//function FoundationConference_removeManager
function Manageable_removeManager_address() {
	var param__managerAddress = document.getElementById('Manageable_removeManager_address__managerAddress').value;
	var res = FoundationConference_instance.removeManager(param__managerAddress);
}
//function FoundationConference_initalizeOrgan
function Organ_initalizeOrgan() {
	var res = FoundationConference_instance.initalizeOrgan();
}
//function FoundationConference_publishFunctionMessage
function Organ_publishFunctionMessage_uint_string_string_string() {
	var param_id = document.getElementById('Organ_publishFunctionMessage_uint_string_string_string_id').value;
	var param_message = document.getElementById('Organ_publishFunctionMessage_uint_string_string_string_message').value;
	var param_hash = document.getElementById('Organ_publishFunctionMessage_uint_string_string_string_hash').value;
	var param_er = document.getElementById('Organ_publishFunctionMessage_uint_string_string_string_er').value;
	var res = FoundationConference_instance.publishFunctionMessage(param_id, param_message, param_hash, param_er);
}
//function FoundationConference_createBallot
function Organ_createBallot_string_bytes32() {
	var param_name = document.getElementById('Organ_createBallot_string_bytes32_name').value;
	var param_proposalNames = document.getElementById('Organ_createBallot_string_bytes32_proposalNames').value;
	var res = FoundationConference_instance.createBallot(param_name, param_proposalNames);
	if(res!=null)
		document.getElementById('Organ_createBallot_string_bytes32_res').innerText = res;
}
//function FoundationConference_getFunctionBlogAddress
function Organ_getFunctionBlogAddress_uint() {
	var param_id = document.getElementById('Organ_getFunctionBlogAddress_uint_id').value;
	var res = FoundationConference_instance.getFunctionBlogAddress(param_id);
	if(res!=null)
		document.getElementById('Organ_getFunctionBlogAddress_uint_res').innerText = res;
}
//function FoundationConference_getLastBallot
function Organ_getLastBallot() {
	var res = FoundationConference_instance.getLastBallot();
	if(res!=null)
		document.getElementById('Organ_getLastBallot_res').innerText = res;
}
//function FoundationConference_getOrganBlog
function Organ_getOrganBlog() {
	var res = FoundationConference_instance.getOrganBlog();
	if(res!=null)
		document.getElementById('Organ_getOrganBlog_res').innerText = res;
}

//delegated calls

