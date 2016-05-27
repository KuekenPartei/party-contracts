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
}
//call functions
//function ShortBlog_getOwner
function Owned_getOwner() {
	var res = ShortBlog_instance.getOwner();
	if(res!=null)
		document.getElementById('Owned_getOwner_res').innerText = res;
}
//function ShortBlog_changeOwner
function Owned_changeOwner_address() {
	var param_newOwner = document.getElementById('Owned_changeOwner_address_newOwner').value;
	var res = ShortBlog_instance.changeOwner(param_newOwner);
}
//function ShortBlog_sendMessage
function ShortBlog_sendMessage_string_string_string() {
	var param_message = document.getElementById('ShortBlog_sendMessage_string_string_string_message').value;
	var param_hash = document.getElementById('ShortBlog_sendMessage_string_string_string_hash').value;
	var param_er = document.getElementById('ShortBlog_sendMessage_string_string_string_er').value;
	var res = ShortBlog_instance.sendMessage(param_message, param_hash, param_er);
}
//function ShortBlog_getMessageText
function ShortBlog_getMessageText_uint() {
	var param_id = document.getElementById('ShortBlog_getMessageText_uint_id').value;
	var res = ShortBlog_instance.getMessageText(param_id);
	if(res!=null)
		document.getElementById('ShortBlog_getMessageText_uint_res').innerText = res;
}
//function ShortBlog_kill
function Owned_kill() {
	var res = ShortBlog_instance.kill();
}
//function ShortBlog_getMessageDate
function ShortBlog_getMessageDate_uint() {
	var param_id = document.getElementById('ShortBlog_getMessageDate_uint_id').value;
	var res = ShortBlog_instance.getMessageDate(param_id);
	if(res!=null)
		document.getElementById('ShortBlog_getMessageDate_uint_res').innerText = res;
}
//function ShortBlog_getMessageCount
function ShortBlog_getMessageCount() {
	var res = ShortBlog_instance.getMessageCount();
	if(res!=null)
		document.getElementById('ShortBlog_getMessageCount_res').innerText = res;
}
//function ShortBlog_getMessageBlock
function ShortBlog_getMessageBlock_uint() {
	var param_id = document.getElementById('ShortBlog_getMessageBlock_uint_id').value;
	var res = ShortBlog_instance.getMessageBlock(param_id);
	if(res!=null)
		document.getElementById('ShortBlog_getMessageBlock_uint_res').innerText = res;
}
//function ShortBlog_getBlogMessage
function ShortBlog_getBlogMessage_uint() {
	var param_id = document.getElementById('ShortBlog_getBlogMessage_uint_id').value;
	var res = ShortBlog_instance.getBlogMessage(param_id);
	if(res!=null)
		document.getElementById('ShortBlog_getBlogMessage_uint_res').innerText = res;
}

//delegated calls

