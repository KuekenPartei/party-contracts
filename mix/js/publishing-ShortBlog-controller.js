// script for ShortBlog
var ShortBlog_instance = undefined;
	
// set address
function ShortBlog_setAddress() {
	var _address = document.getElementById('ShortBlog_address').value;
	ShortBlog_instance = ShortBlogContract.at(_address);
}

function ShortBlog_updateAttributes() {
// update attributes
var messageCount_res = ShortBlog_instance.messageCount();
	if(messageCount_res!=null)
		document.getElementById('ShortBlog_messageCount_value').innerText = messageCount_res;
var lastMessageDate_res = ShortBlog_instance.lastMessageDate();
	if(lastMessageDate_res!=null)
		document.getElementById('ShortBlog_lastMessageDate_value').innerText = lastMessageDate_res;
var name_res = ShortBlog_instance.name();
	if(name_res!=null)
		document.getElementById('ShortBlog_name_value').innerText = name_res;
var _key = document.getElementById('ShortBlog_contract_attribute_managers_input').value;
var managers_res = ShortBlog_instance.managers(_key);
	if(managers_res!=null){
		document.getElementById('ShortBlog_managers_value').innerText = managers_res;
	}
var _key = document.getElementById('ShortBlog_contract_attribute_messages_input').value;
var messages_res = ShortBlog_instance.messages(_key);
	if(messages_res!=null){
		document.getElementById('ShortBlog_messages_message_value').innerText = messages_res[0];
		document.getElementById('ShortBlog_messages_date_value').innerText = messages_res[1];
		document.getElementById('ShortBlog_messages_id_value').innerText = messages_res[2];
		document.getElementById('ShortBlog_messages_sender_value').innerText = messages_res[3];
		document.getElementById('ShortBlog_messages_blockNumber_value').innerText = messages_res[4];
		document.getElementById('ShortBlog_messages_hashValue_value').innerText = messages_res[5];
		document.getElementById('ShortBlog_messages_externalResource_value').innerText = messages_res[6];
	}

}
//call functions
//function ShortBlog_canAccess
function Manageable_canAccess() {
	var res = ShortBlog_instance.canAccess();
	if(res!=null)
		document.getElementById('Manageable_canAccess_res').innerText = res;
}
//function ShortBlog_addManager
function Manageable_addManager_address() {
	var param__newManagerAddress = document.getElementById('Manageable_addManager_address__newManagerAddress').value;
	var res = ShortBlog_instance.addManager(param__newManagerAddress);
}
//function ShortBlog_sendMessage
function ShortBlog_sendMessage_string_string_string() {
	var param_message = document.getElementById('ShortBlog_sendMessage_string_string_string_message').value;
	var param_hash = document.getElementById('ShortBlog_sendMessage_string_string_string_hash').value;
	var param_er = document.getElementById('ShortBlog_sendMessage_string_string_string_er').value;
	var res = ShortBlog_instance.sendMessage(param_message, param_hash, param_er);
}
//function ShortBlog_ShortBlog
function ShortBlog_ShortBlog_string() {
	var param__name = document.getElementById('ShortBlog_ShortBlog_string__name').value;
	var res = ShortBlog_instance.ShortBlog(param__name);
}
//function ShortBlog_removeManager
function Manageable_removeManager_address() {
	var param__managerAddress = document.getElementById('Manageable_removeManager_address__managerAddress').value;
	var res = ShortBlog_instance.removeManager(param__managerAddress);
}

//delegated calls

