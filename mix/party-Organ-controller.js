// script for Organ
var Organ_instance = undefined;
	
// set address
function Organ_setAddress() {
	var _address = document.getElementById('Organ_address').value;
	Organ_instance = OrganContract.at(_address);
}

function Organ_updateAttributes() {
// update attributes
var memberRegistry_res = Organ_instance.memberRegistry();
	if(memberRegistry_res!=null)
		document.getElementById('Organ_memberRegistry_value').innerText = memberRegistry_res;
var organName_res = Organ_instance.organName();
	if(organName_res!=null)
		document.getElementById('Organ_organName_value').innerText = organName_res;
var lastFunctionId_res = Organ_instance.lastFunctionId();
	if(lastFunctionId_res!=null)
		document.getElementById('Organ_lastFunctionId_value').innerText = lastFunctionId_res;
var blogRegistry_res = Organ_instance.blogRegistry();
	if(blogRegistry_res!=null)
		document.getElementById('Organ_blogRegistry_value').innerText = blogRegistry_res;
var isActive_res = Organ_instance.isActive();
	if(isActive_res!=null)
		document.getElementById('Organ_isActive_value').innerText = isActive_res;
var organBlog_res = Organ_instance.organBlog();
	if(organBlog_res!=null)
		document.getElementById('Organ_organBlog_value').innerText = organBlog_res;
var ballotCount_res = Organ_instance.ballotCount();
	if(ballotCount_res!=null)
		document.getElementById('Organ_ballotCount_value').innerText = ballotCount_res;
}
//call functions
//function Organ_canAccess
function Manageable_canAccess() {
	var res = Organ_instance.canAccess();
	if(res!=null)
		document.getElementById('Manageable_canAccess_res').innerText = res;
}
//function Organ_changeMember
function Organ_changeMember_uint_address() {
	var param__id = document.getElementById('Organ_changeMember_uint_address__id').value;
	var param__address = document.getElementById('Organ_changeMember_uint_address__address').value;
	var res = Organ_instance.changeMember(param__id, param__address);
}
//function Organ_isMember
function MemberAware_isMember_address() {
	var param__address = document.getElementById('MemberAware_isMember_address__address').value;
	var res = Organ_instance.isMember(param__address);
	if(res!=null)
		document.getElementById('MemberAware_isMember_address_res').innerText = res;
}
//function Organ_addManager
function Manageable_addManager_address() {
	var param__newManagerAddress = document.getElementById('Manageable_addManager_address__newManagerAddress').value;
	var res = Organ_instance.addManager(param__newManagerAddress);
}
//function Organ_createFunction
function Organ_createFunction_string_string() {
	var param__functionName = document.getElementById('Organ_createFunction_string_string__functionName').value;
	var param__constittiutionHash = document.getElementById('Organ_createFunction_string_string__constittiutionHash').value;
	var res = Organ_instance.createFunction(param__functionName, param__constittiutionHash);
}
//function Organ_removeManager
function Manageable_removeManager_address() {
	var param__managerAddress = document.getElementById('Manageable_removeManager_address__managerAddress').value;
	var res = Organ_instance.removeManager(param__managerAddress);
}
//function Organ_initalizeOrgan
function Organ_initalizeOrgan() {
	var res = Organ_instance.initalizeOrgan();
}
//function Organ_publishFunctionMessage
function Organ_publishFunctionMessage_uint_string_string_string() {
	var param_id = document.getElementById('Organ_publishFunctionMessage_uint_string_string_string_id').value;
	var param_message = document.getElementById('Organ_publishFunctionMessage_uint_string_string_string_message').value;
	var param_hash = document.getElementById('Organ_publishFunctionMessage_uint_string_string_string_hash').value;
	var param_er = document.getElementById('Organ_publishFunctionMessage_uint_string_string_string_er').value;
	var res = Organ_instance.publishFunctionMessage(param_id, param_message, param_hash, param_er);
}
//function Organ_createBallot
function Organ_createBallot_string_bytes32() {
	var param_name = document.getElementById('Organ_createBallot_string_bytes32_name').value;
	var param_proposalNames = document.getElementById('Organ_createBallot_string_bytes32_proposalNames').value;
	var res = Organ_instance.createBallot(param_name, param_proposalNames);
	if(res!=null)
		document.getElementById('Organ_createBallot_string_bytes32_res').innerText = res;
}
//function Organ_getFunctionBlogAddress
function Organ_getFunctionBlogAddress_uint() {
	var param_id = document.getElementById('Organ_getFunctionBlogAddress_uint_id').value;
	var res = Organ_instance.getFunctionBlogAddress(param_id);
	if(res!=null)
		document.getElementById('Organ_getFunctionBlogAddress_uint_res').innerText = res;
}
//function Organ_getLastBallot
function Organ_getLastBallot() {
	var res = Organ_instance.getLastBallot();
	if(res!=null)
		document.getElementById('Organ_getLastBallot_res').innerText = res;
}

//delegated calls

