
var ShortBlogContract = web3.eth.contract([
{"constant":true,"inputs":[],"name":"messageCount","outputs":[{"name":"","type":"uint"}],"type":"function"},
{"constant":true,"inputs":[],"name":"lastMessageDate","outputs":[{"name":"","type":"uint"}],"type":"function"},
{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"type":"function"},
{"constant": true,"inputs": [{"name": "","type": "uint"}],"name": "messages","outputs": [
{ "name": "message", "type": "string"}
,{ "name": "date", "type": "uint"}
,{ "name": "id", "type": "uint"}
,{ "name": "sender", "type": "address"}
,{ "name": "blockNumber", "type": "uint"}
,{ "name": "hashValue", "type": "string"}
,{ "name": "externalResource", "type": "string"}
],"type": "function"	},
//

  {
    "constant": false,
    "inputs": [],    
    "name": "getOwner",
    "outputs": [{"name": "result","type": "address"}],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [{"name": "newOwner","type": "address"}],    
    "name": "changeOwner",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [{"name": "message","type": "string"},{"name": "hash","type": "string"},{"name": "er","type": "string"}],    
    "name": "sendMessage",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [{"name": "_name","type": "string"}],    
    "name": "ShortBlog",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [],    
    "name": "kill",
    "outputs": [],
    "type": "function"
  }
 ,
  { "constant": true,
    "inputs": [{"name": "message","type": "string"},{"name": "messageId","type": "uint"}],    
    "name": "NewMessage",
    "type": "event"  }
] );   

var BlogRegistryContract = web3.eth.contract([
{"constant":true,"inputs":[],"name":"blogCount","outputs":[{"name":"","type":"uint"}],"type":"function"},
{"constant": true,"inputs": [{"name": "","type": "uint"}],"name": "blogs","outputs": [
{ "name": "", "type": "address"}
],"type": "function"	},
//

{"constant": true,"inputs": [{"name": "","type": "uint"}],"name": "names","outputs": [
{ "name": "", "type": "string"}
],"type": "function"	},
//

{"constant": true,"inputs": [{"name": "","type": "address"}],"name": "managers","outputs": [
{ "name": "", "type": "bool"}
],"type": "function"	},
//

  {
    "constant": false,
    "inputs": [{"name": "name","type": "string"}],    
    "name": "registerBlog",
    "outputs": [{"name": "","type": "address"}],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [{"name": "_newManagerAddress","type": "address"}],    
    "name": "addManager",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [{"name": "_managerAddress","type": "address"}],    
    "name": "removeManager",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [{"name": "_managerAddress","type": "address"}],    
    "name": "isManager",
    "outputs": [{"name": "","type": "bool"}],
    "type": "function"
  }
 
] );   



//gui factory ShortBlog
function ShortBlogGuiFactory() {
	this.prefix='';
	
// default Gui
this.placeDefaultGui=function() {
//	console.log(this.prefix+' place gui');
	document.getElementById(this.prefix+'ShortBlog_gui').innerHTML = this.createDefaultGui();
}
// default Gui
this.createDefaultGui=function() {
	return 	'<!-- gui for ShortBlog_contract -->'
+	'	<div class="contract" id="'+this.prefix+'ShortBlog_contract">'
+	'	ShortBlog:'
+	'	  <input type="text" id="'+this.prefix+'ShortBlog_address"> <button id="'+this.prefix+'ShortBlogController.setAddress" onclick="'+this.prefix+'ShortBlogController.setAddress()">change ShortBlog Address</button>'
+	'	  <div class="contract_attributes" id="'+this.prefix+'ShortBlog_contract_attributes"> attributes:'
+	'	    <div class="contract_attribute" id="'+this.prefix+'ShortBlog_contract_attribute_messageCount"> messageCount:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'ShortBlog_messageCount_value"> </div>'
+	'	    </div>'
+	'	    <div class="contract_attribute" id="'+this.prefix+'ShortBlog_contract_attribute_owner"> owner:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'ShortBlog_owner_value"> </div>'
+	'	    </div>'
+	'	    <div class="contract_attribute" id="'+this.prefix+'ShortBlog_contract_attribute_lastMessageDate"> lastMessageDate:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'ShortBlog_lastMessageDate_value"> </div>'
+	'	    </div>'
+	'	    <div class="contract_attribute" id="'+this.prefix+'ShortBlog_contract_attribute_name"> name:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'ShortBlog_name_value"> </div>'
+	'	    </div>'
+	'	'
+	'	<!--struct -->'
+	'	<div class="Struct_Mapping" id="'+this.prefix+'Struc_ShortBlog_contract_attribute_messages">struc mapping  messages:'
+	'			<input type="number" id="'+this.prefix+'ShortBlog_contract_attribute_messages_input">(uint)'
+	'	    	<div class="Struct_attribute" id="'+this.prefix+'ShortBlog_contract_attribute_messages_message"> message:'
+	'	      		<div class="Struct_attribute_value" id="'+this.prefix+'ShortBlog_messages_message_value"> </div>'
+	'	    	</div>'
+	'	    	<div class="Struct_attribute" id="'+this.prefix+'ShortBlog_contract_attribute_messages_date"> date:'
+	'	      		<div class="Struct_attribute_value" id="'+this.prefix+'ShortBlog_messages_date_value"> </div>'
+	'	    	</div>'
+	'	    	<div class="Struct_attribute" id="'+this.prefix+'ShortBlog_contract_attribute_messages_id"> id:'
+	'	      		<div class="Struct_attribute_value" id="'+this.prefix+'ShortBlog_messages_id_value"> </div>'
+	'	    	</div>'
+	'	    	<div class="Struct_attribute" id="'+this.prefix+'ShortBlog_contract_attribute_messages_sender"> sender:'
+	'	      		<div class="Struct_attribute_value" id="'+this.prefix+'ShortBlog_messages_sender_value"> </div>'
+	'	    	</div>'
+	'	    	<div class="Struct_attribute" id="'+this.prefix+'ShortBlog_contract_attribute_messages_blockNumber"> blockNumber:'
+	'	      		<div class="Struct_attribute_value" id="'+this.prefix+'ShortBlog_messages_blockNumber_value"> </div>'
+	'	    	</div>'
+	'	    	<div class="Struct_attribute" id="'+this.prefix+'ShortBlog_contract_attribute_messages_hashValue"> hashValue:'
+	'	      		<div class="Struct_attribute_value" id="'+this.prefix+'ShortBlog_messages_hashValue_value"> </div>'
+	'	    	</div>'
+	'	    	<div class="Struct_attribute" id="'+this.prefix+'ShortBlog_contract_attribute_messages_externalResource"> externalResource:'
+	'	      		<div class="Struct_attribute_value" id="'+this.prefix+'ShortBlog_messages_externalResource_value"> </div>'
+	'	    	</div>'
+	'	  </div>'
+	'	    <button id="'+this.prefix+'ShortBlog_updateAttributes" onclick="'+this.prefix+'ShortBlogController._updateAttributes()">update ShortBlog attributes</button>'
+	'	  </div>'
+	'	  <div class="function_execution" id="'+this.prefix+'ShortBlog_contract_function_Owned_getOwner">'
+	'	ShortBlog_getOwner:'
+	'		<button id="'+this.prefix+'ShortBlogController.Owned_getOwner" onclick="'+this.prefix+'ShortBlogController.Owned_getOwner()">execute ShortBlog_getOwner</button>'
+	'		<div class="function_result" id="'+this.prefix+'Owned_getOwner_res"></div>'
+	'	  </div>'
+	'	  <div class="function_execution" id="'+this.prefix+'ShortBlog_contract_function_Owned_changeOwner_address">'
+	'	ShortBlog_changeOwner:'
+	'		  <div class="function_parameter">newOwner<input type="text" id="'+this.prefix+'Owned_changeOwner_address_newOwner"></div>'
+	'		<button id="'+this.prefix+'ShortBlogController.Owned_changeOwner_address" onclick="'+this.prefix+'ShortBlogController.Owned_changeOwner_address()">execute ShortBlog_changeOwner</button>'
+	'		<div class="function_result" id="'+this.prefix+'Owned_changeOwner_address_res"></div>'
+	'	  </div>'
+	'	  <div class="function_execution" id="'+this.prefix+'ShortBlog_contract_function_ShortBlog_sendMessage_string_string_string">'
+	'	ShortBlog_sendMessage:'
+	'		  <div class="function_parameter">message<input type="text" id="'+this.prefix+'ShortBlog_sendMessage_string_string_string_message"></div>'
+	'		  <div class="function_parameter">hash<input type="text" id="'+this.prefix+'ShortBlog_sendMessage_string_string_string_hash"></div>'
+	'		  <div class="function_parameter">er<input type="text" id="'+this.prefix+'ShortBlog_sendMessage_string_string_string_er"></div>'
+	'		<button id="'+this.prefix+'ShortBlogController.ShortBlog_sendMessage_string_string_string" onclick="'+this.prefix+'ShortBlogController.ShortBlog_sendMessage_string_string_string()">execute ShortBlog_sendMessage</button>'
+	'		<div class="function_result" id="'+this.prefix+'ShortBlog_sendMessage_string_string_string_res"></div>'
+	'	  </div>'
+	'	  <div class="function_execution" id="'+this.prefix+'ShortBlog_contract_function_ShortBlog_ShortBlog_string">'
+	'	ShortBlog_ShortBlog:'
+	'		  <div class="function_parameter">_name<input type="text" id="'+this.prefix+'ShortBlog_ShortBlog_string__name"></div>'
+	'		<button id="'+this.prefix+'ShortBlogController.ShortBlog_ShortBlog_string" onclick="'+this.prefix+'ShortBlogController.ShortBlog_ShortBlog_string()">execute ShortBlog_ShortBlog</button>'
+	'		<div class="function_result" id="'+this.prefix+'ShortBlog_ShortBlog_string_res"></div>'
+	'	  </div>'
+	'	  <div class="function_execution" id="'+this.prefix+'ShortBlog_contract_function_Owned_kill">'
+	'	ShortBlog_kill:'
+	'		<button id="'+this.prefix+'ShortBlogController.Owned_kill" onclick="'+this.prefix+'ShortBlogController.Owned_kill()">execute ShortBlog_kill</button>'
+	'		<div class="function_result" id="'+this.prefix+'Owned_kill_res"></div>'
+	'	  </div>'
+	'	'
+	'	</div>'
;
}

//default attributes
this.createAttributesGui=function() {
	return 	'    <div class="contract_attribute" id="'+this.prefix+'ShortBlog_contract_attribute_messageCount"> messageCount:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'ShortBlog_messageCount_value"> </div>'
+	'	    </div>'
+	'	    <div class="contract_attribute" id="'+this.prefix+'ShortBlog_contract_attribute_owner"> owner:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'ShortBlog_owner_value"> </div>'
+	'	    </div>'
+	'	    <div class="contract_attribute" id="'+this.prefix+'ShortBlog_contract_attribute_lastMessageDate"> lastMessageDate:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'ShortBlog_lastMessageDate_value"> </div>'
+	'	    </div>'
+	'	    <div class="contract_attribute" id="'+this.prefix+'ShortBlog_contract_attribute_name"> name:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'ShortBlog_name_value"> </div>'
+	'	    </div>'
+	'	'
;
}



this.createOwned_getOwnerGui=function() {
return 	'  <div class="function_execution" id="'+this.prefix+'ShortBlog_contract_function_Owned_getOwner">'
+	'ShortBlog_getOwner:'
+	'	<button id="'+this.prefix+'ShortBlogController.Owned_getOwner" onclick="'+this.prefix+'ShortBlogController.Owned_getOwner()">execute ShortBlog_getOwner</button>'
+	'	<div class="function_result" id="'+this.prefix+'Owned_getOwner_res"></div>'
+	'  </div>'
;
}
this.createOwned_changeOwner_addressGui=function() {
return 	'  <div class="function_execution" id="'+this.prefix+'ShortBlog_contract_function_Owned_changeOwner_address">'
+	'ShortBlog_changeOwner:'
+	'	  <div class="function_parameter">newOwner<input type="text" id="'+this.prefix+'Owned_changeOwner_address_newOwner"></div>'
+	'	<button id="'+this.prefix+'ShortBlogController.Owned_changeOwner_address" onclick="'+this.prefix+'ShortBlogController.Owned_changeOwner_address()">execute ShortBlog_changeOwner</button>'
+	'	<div class="function_result" id="'+this.prefix+'Owned_changeOwner_address_res"></div>'
+	'  </div>'
;
}
this.createShortBlog_sendMessage_string_string_stringGui=function() {
return 	'  <div class="function_execution" id="'+this.prefix+'ShortBlog_contract_function_ShortBlog_sendMessage_string_string_string">'
+	'ShortBlog_sendMessage:'
+	'	  <div class="function_parameter">message<input type="text" id="'+this.prefix+'ShortBlog_sendMessage_string_string_string_message"></div>'
+	'	  <div class="function_parameter">hash<input type="text" id="'+this.prefix+'ShortBlog_sendMessage_string_string_string_hash"></div>'
+	'	  <div class="function_parameter">er<input type="text" id="'+this.prefix+'ShortBlog_sendMessage_string_string_string_er"></div>'
+	'	<button id="'+this.prefix+'ShortBlogController.ShortBlog_sendMessage_string_string_string" onclick="'+this.prefix+'ShortBlogController.ShortBlog_sendMessage_string_string_string()">execute ShortBlog_sendMessage</button>'
+	'	<div class="function_result" id="'+this.prefix+'ShortBlog_sendMessage_string_string_string_res"></div>'
+	'  </div>'
;
}
this.createShortBlog_ShortBlog_stringGui=function() {
return 	'  <div class="function_execution" id="'+this.prefix+'ShortBlog_contract_function_ShortBlog_ShortBlog_string">'
+	'ShortBlog_ShortBlog:'
+	'	  <div class="function_parameter">_name<input type="text" id="'+this.prefix+'ShortBlog_ShortBlog_string__name"></div>'
+	'	<button id="'+this.prefix+'ShortBlogController.ShortBlog_ShortBlog_string" onclick="'+this.prefix+'ShortBlogController.ShortBlog_ShortBlog_string()">execute ShortBlog_ShortBlog</button>'
+	'	<div class="function_result" id="'+this.prefix+'ShortBlog_ShortBlog_string_res"></div>'
+	'  </div>'
;
}
this.createOwned_killGui=function() {
return 	'  <div class="function_execution" id="'+this.prefix+'ShortBlog_contract_function_Owned_kill">'
+	'ShortBlog_kill:'
+	'	<button id="'+this.prefix+'ShortBlogController.Owned_kill" onclick="'+this.prefix+'ShortBlogController.Owned_kill()">execute ShortBlog_kill</button>'
+	'	<div class="function_result" id="'+this.prefix+'Owned_kill_res"></div>'
+	'  </div>'
;
}

this.createmessagesStructGui=function() {
return 	'<!--struct -->'
+	'<div class="Struct_Mapping" id="'+this.prefix+'Struc_ShortBlog_contract_attribute_messages">struc mapping  messages:'
+	'		<input type="number" id="'+this.prefix+'ShortBlog_contract_attribute_messages_input">(uint)'
+	'    	<div class="Struct_attribute" id="'+this.prefix+'ShortBlog_contract_attribute_messages_message"> message:'
+	'      		<div class="Struct_attribute_value" id="'+this.prefix+'ShortBlog_messages_message_value"> </div>'
+	'    	</div>'
+	'    	<div class="Struct_attribute" id="'+this.prefix+'ShortBlog_contract_attribute_messages_date"> date:'
+	'      		<div class="Struct_attribute_value" id="'+this.prefix+'ShortBlog_messages_date_value"> </div>'
+	'    	</div>'
+	'    	<div class="Struct_attribute" id="'+this.prefix+'ShortBlog_contract_attribute_messages_id"> id:'
+	'      		<div class="Struct_attribute_value" id="'+this.prefix+'ShortBlog_messages_id_value"> </div>'
+	'    	</div>'
+	'    	<div class="Struct_attribute" id="'+this.prefix+'ShortBlog_contract_attribute_messages_sender"> sender:'
+	'      		<div class="Struct_attribute_value" id="'+this.prefix+'ShortBlog_messages_sender_value"> </div>'
+	'    	</div>'
+	'    	<div class="Struct_attribute" id="'+this.prefix+'ShortBlog_contract_attribute_messages_blockNumber"> blockNumber:'
+	'      		<div class="Struct_attribute_value" id="'+this.prefix+'ShortBlog_messages_blockNumber_value"> </div>'
+	'    	</div>'
+	'    	<div class="Struct_attribute" id="'+this.prefix+'ShortBlog_contract_attribute_messages_hashValue"> hashValue:'
+	'      		<div class="Struct_attribute_value" id="'+this.prefix+'ShortBlog_messages_hashValue_value"> </div>'
+	'    	</div>'
+	'    	<div class="Struct_attribute" id="'+this.prefix+'ShortBlog_contract_attribute_messages_externalResource"> externalResource:'
+	'      		<div class="Struct_attribute_value" id="'+this.prefix+'ShortBlog_messages_externalResource_value"> </div>'
+	'    	</div>'
+	'  </div>'
;
}


//print the contract div around
this.createShortBlogSeletonGui=function(inner) {
	return 	'<!-- gui for ShortBlog_contract -->'
+	'	<div class="contract" id="'+this.prefix+'ShortBlog_contract">'
+ inner
+'</div>';
}


//eventguis
this.createNewMessageLogDataGui = function(prefix, blockHash, blockNumber,
message,messageId) {
		return '<ul class="dapp-account-list"><li > '
        +'<a class="dapp-identicon dapp-small" style="background-image: url(identiconimage.png)"></a>'
		+'<span>'+prefix+' ('+blockNumber+')</span>'
        +'<span>'+message+'</span>'
        +'<span>'+messageId+'</span>'
        +' </li>'
        ;
}

}//end guifactory
// script for ShortBlog gui controller
function ShortBlogController() {

	this.ShortBlog_instance = undefined;
	this.prefix='';
	this.contractAddress = undefined; 
	var self = this;

// bind buttons
	this.bindGui=function() {
		var btn = document.getElementById(self.prefix+'ShortBlogController.setAddress');
//	console.log('bind:' + self.prefix+' '+btn);
		if(btn!=undefined)		
			btn.onclick = this.setAddress;

		var btn = document.getElementById(self.prefix+'ShortBlog_updateAttributes');
//		console.log('bind update:' + self.prefix+' '+btn);
		if(btn!=undefined)
			btn.onclick = this._updateAttributes;
		var btn = document.getElementById(self.prefix+'ShortBlogController.Owned_getOwner');
//		console.log('bind:ShortBlog_getOwner ' + self.prefix+' '+btn+'  '+self.Owned_getOwner);//ShortBlog_getOwner);
		if(btn!=undefined)
			btn.onclick = this.Owned_getOwner;
		var btn = document.getElementById(self.prefix+'ShortBlogController.Owned_changeOwner_address');
//		console.log('bind:ShortBlog_changeOwner ' + self.prefix+' '+btn+'  '+self.Owned_changeOwner_address);//ShortBlog_changeOwner);
		if(btn!=undefined)
			btn.onclick = this.Owned_changeOwner_address;
		var btn = document.getElementById(self.prefix+'ShortBlogController.ShortBlog_sendMessage_string_string_string');
//		console.log('bind:ShortBlog_sendMessage ' + self.prefix+' '+btn+'  '+self.ShortBlog_sendMessage_string_string_string);//ShortBlog_sendMessage);
		if(btn!=undefined)
			btn.onclick = this.ShortBlog_sendMessage_string_string_string;
		var btn = document.getElementById(self.prefix+'ShortBlogController.ShortBlog_ShortBlog_string');
//		console.log('bind:ShortBlog_ShortBlog ' + self.prefix+' '+btn+'  '+self.ShortBlog_ShortBlog_string);//ShortBlog_ShortBlog);
		if(btn!=undefined)
			btn.onclick = this.ShortBlog_ShortBlog_string;
		var btn = document.getElementById(self.prefix+'ShortBlogController.Owned_kill');
//		console.log('bind:ShortBlog_kill ' + self.prefix+' '+btn+'  '+self.Owned_kill);//ShortBlog_kill);
		if(btn!=undefined)
			btn.onclick = this.Owned_kill;
	}
	// set function
	this.setAddress=function() {
	var _address = document.getElementById(self.prefix+'ShortBlog_address');
//	console.log('setAddress:' + self.prefix+' '+_address);
	self.ShortBlog_instance = ShortBlogContract.at(_address.value);
	self.contractAddress = _address.value;
	self._updateAttributes();
}
//update attributes
this._updateAttributes=function () {
if(this.ShortBlog_instance===null) return;
//console.log('updateAttributes:' + self.prefix);
// update attributes
	var messageCount_res = self.ShortBlog_instance.messageCount();
//	console.log('get:messageCount' + self.prefix);

	if(messageCount_res!=null)
		document.getElementById(self.prefix+'ShortBlog_messageCount_value').innerText = messageCount_res;
	var owner_res = self.ShortBlog_instance.owner();
//	console.log('get:owner' + self.prefix);

	if(owner_res!=null)
		document.getElementById(self.prefix+'ShortBlog_owner_value').innerText = owner_res;
	var lastMessageDate_res = self.ShortBlog_instance.lastMessageDate();
//	console.log('get:lastMessageDate' + self.prefix);

	if(lastMessageDate_res!=null)
		document.getElementById(self.prefix+'ShortBlog_lastMessageDate_value').innerText = lastMessageDate_res;
	var name_res = self.ShortBlog_instance.name();
//	console.log('get:name' + self.prefix);

	if(name_res!=null)
		document.getElementById(self.prefix+'ShortBlog_name_value').innerText = name_res;
//console.log('getStruct:messages' + self.prefix);
	var _key = document.getElementById(self.prefix+'ShortBlog_contract_attribute_messages_input').value;
	var messages_res = self.ShortBlog_instance.messages(_key);
//console.log('result:messages' + messages_res+' key: '+_key);
	if(messages_res!=null){
		document.getElementById(self.prefix+'ShortBlog_messages_message_value').innerText = messages_res[0];
		document.getElementById(self.prefix+'ShortBlog_messages_date_value').innerText = messages_res[1];
		document.getElementById(self.prefix+'ShortBlog_messages_id_value').innerText = messages_res[2];
		document.getElementById(self.prefix+'ShortBlog_messages_sender_value').innerText = messages_res[3];
		document.getElementById(self.prefix+'ShortBlog_messages_blockNumber_value').innerText = messages_res[4];
		document.getElementById(self.prefix+'ShortBlog_messages_hashValue_value').innerText = messages_res[5];
		document.getElementById(self.prefix+'ShortBlog_messages_externalResource_value').innerText = messages_res[6];
	}
}

//call functions
//function ShortBlog_getOwner
this.Owned_getOwner=function() {
//console.log('function:getOwner' + self.prefix);
//	console.log(':' +self.ShortBlog_instance+':');
	var res = self.ShortBlog_instance.getOwner();
	if(res!=null)
		document.getElementById(self.prefix+'Owned_getOwner_res').innerText = res;
}
//function ShortBlog_changeOwner
this.Owned_changeOwner_address=function() {
//console.log('function:changeOwner' + self.prefix);
	var e = document.getElementById(self.prefix+'Owned_changeOwner_address_newOwner');
//	console.log(':' + self.prefix+'Owned_changeOwner_address_newOwner'+": "+e);
	var param_newOwner = e.value;
//	console.log(':' +self.ShortBlog_instance+':');
	var res = self.ShortBlog_instance.changeOwner(param_newOwner);
}
//function ShortBlog_sendMessage
this.ShortBlog_sendMessage_string_string_string=function() {
//console.log('function:sendMessage' + self.prefix);
	var e = document.getElementById(self.prefix+'ShortBlog_sendMessage_string_string_string_message');
//	console.log(':' + self.prefix+'ShortBlog_sendMessage_string_string_string_message'+": "+e);
	var param_message = e.value;
	var e = document.getElementById(self.prefix+'ShortBlog_sendMessage_string_string_string_hash');
//	console.log(':' + self.prefix+'ShortBlog_sendMessage_string_string_string_hash'+": "+e);
	var param_hash = e.value;
	var e = document.getElementById(self.prefix+'ShortBlog_sendMessage_string_string_string_er');
//	console.log(':' + self.prefix+'ShortBlog_sendMessage_string_string_string_er'+": "+e);
	var param_er = e.value;
//	console.log(':' +self.ShortBlog_instance+':');
	var res = self.ShortBlog_instance.sendMessage(param_message, param_hash, param_er);
}
//function ShortBlog_ShortBlog
this.ShortBlog_ShortBlog_string=function() {
//console.log('function:ShortBlog' + self.prefix);
	var e = document.getElementById(self.prefix+'ShortBlog_ShortBlog_string__name');
//	console.log(':' + self.prefix+'ShortBlog_ShortBlog_string__name'+": "+e);
	var param__name = e.value;
//	console.log(':' +self.ShortBlog_instance+':');
	var res = self.ShortBlog_instance.ShortBlog(param__name);
}
//function ShortBlog_kill
this.Owned_kill=function() {
//console.log('function:kill' + self.prefix);
//	console.log(':' +self.ShortBlog_instance+':');
	var res = self.ShortBlog_instance.kill();
}

//delegated calls

}// end controller	


// script for ShortBlog
function ShortBlogModel(prefix) {
	this.prefix = prefix;
	this.guiFactory = new ShortBlogGuiFactory();
	this.controller = new ShortBlogController();
	this.guiFactory.prefix = prefix;
	this.controller.prefix = prefix;
}
ShortBlogModel.prototype.create=function () {
	this.guiFactory.placeDefaultGui();
	this.controller._updateAttributes();
}


//class as GlueCode
//uses prefix + 'GuiContainer'
function ShortBlogManager(prefix,contract) {
	this.prefix = prefix;
	var self = this;
	this.c = new ShortBlogController();
	this.c.prefix=prefix;
	this.c.ShortBlog_instance=contract;
	this.c.contractAddress = contract.address;
	this.g = new ShortBlogGuiFactory();
	this.g.prefix = prefix;

	this.addGui = function() {
		var e = document.getElementById(this.prefix + 'GuiContainer');
//console.log('addGui:' + this.prefix+ 'GuiContainer'+e);
		var elemDiv = document.createElement('div');
		elemDiv.id= this.prefix +'ShortBlog_gui';
		e.appendChild(elemDiv);
		this.g.placeDefaultGui();
		document.getElementById(this.prefix+'ShortBlog_address').value = this.c.contractAddress;
		this.c.bindGui();
	}	
	this.clearGui = function(){
		var e = document.getElementById(this.prefix + 'GuiContainer');
		e.innerHTML ='';
	}
	this.updateGui = function(){
		this.c._updateAttributes();
	}
	this.getContract = function(){
		return this.c.ShortBlog_instance;
	}

}// end of manager

function ShortBlogGuiMananger(guiId){
	this.prefix = guiId;
	this.managers=new Array();	//[];		
	
	this.addManager = function(contract) {
//console.log('addManager:'+contract);
		var m = new ShortBlogManager(contract.address,contract);
		this.managers.push(m);
		//manager.addGui();
	}
			
	this.clearGui = function(){
		var e = document.getElementById(this.prefix);
//console.log('clear gui:'+this.prefix+e);
		if(e!==undefined)
			e.innerHTML ='';
	}
			
	this.displayGui = function(){
		var e = document.getElementById(this.prefix);
//console.log('displayGui:'+this.prefix +e);
		if(e==undefined) return;
		for (i in this.managers) {
			var elemDiv = document.createElement('div');
			elemDiv.id= this.managers[i].prefix + 'GuiContainer';//'ShortBlog_gui';
			e.appendChild(elemDiv);
//console.log('add:'+elemDiv.id);
			this.managers[i].addGui();
		}
	}

	this.updateGui = function(){
		for (i in this.managers) {
			this.managers[i].updateGui();
		}
//		console.log('update');
	}
}// end of gui mananger

//gui factory BlogRegistry
function BlogRegistryGuiFactory() {
	this.prefix='';
	
// default Gui
this.placeDefaultGui=function() {
//	console.log(this.prefix+' place gui');
	document.getElementById(this.prefix+'BlogRegistry_gui').innerHTML = this.createDefaultGui();
}
// default Gui
this.createDefaultGui=function() {
	return 	'<!-- gui for BlogRegistry_contract -->'
+	'	<div class="contract" id="'+this.prefix+'BlogRegistry_contract">'
+	'	BlogRegistry:'
+	'	  <input type="text" id="'+this.prefix+'BlogRegistry_address"> <button id="'+this.prefix+'BlogRegistryController.setAddress" onclick="'+this.prefix+'BlogRegistryController.setAddress()">change BlogRegistry Address</button>'
+	'	  <div class="contract_attributes" id="'+this.prefix+'BlogRegistry_contract_attributes"> attributes:'
+	'	    <div class="contract_attribute" id="'+this.prefix+'BlogRegistry_contract_attribute_mangerCount"> mangerCount:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'BlogRegistry_mangerCount_value"> </div>'
+	'	    </div>'
+	'	    <div class="contract_attribute" id="'+this.prefix+'BlogRegistry_contract_attribute_blogCount"> blogCount:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'BlogRegistry_blogCount_value"> </div>'
+	'	    </div>'
+	'	'
+	'	<div class="Value_Mapping" id="'+this.prefix+'BlogRegistry_contract_attribute_blogs">mapping  blogs:'
+	'			<input type="number" id="'+this.prefix+'BlogRegistry_contract_attribute_blogs_input">(uint)'
+	'	    	<div class="Mapping_value" id="'+this.prefix+'BlogRegistry_contract_attribute_uint"> ShortBlog:'
+	'	      		<div class="contract_attribute_value" id="'+this.prefix+'BlogRegistry_blogs_value"> </div>'
+	'	    	</div>'
+	'	  </div>'
+	'	<div class="Value_Mapping" id="'+this.prefix+'BlogRegistry_contract_attribute_managers">mapping  managers:'
+	'			<input type="text" id="'+this.prefix+'BlogRegistry_contract_attribute_managers_input">(address)'
+	'	    	<div class="Mapping_value" id="'+this.prefix+'BlogRegistry_contract_attribute_address"> bool:'
+	'	      		<div class="contract_attribute_value" id="'+this.prefix+'BlogRegistry_managers_value"> </div>'
+	'	    	</div>'
+	'	  </div>'
+	'	<div class="Value_Mapping" id="'+this.prefix+'BlogRegistry_contract_attribute_names">mapping  names:'
+	'			<input type="number" id="'+this.prefix+'BlogRegistry_contract_attribute_names_input">(uint)'
+	'	    	<div class="Mapping_value" id="'+this.prefix+'BlogRegistry_contract_attribute_uint"> string:'
+	'	      		<div class="contract_attribute_value" id="'+this.prefix+'BlogRegistry_names_value"> </div>'
+	'	    	</div>'
+	'	  </div>'
+	'	    <button id="'+this.prefix+'BlogRegistry_updateAttributes" onclick="'+this.prefix+'BlogRegistryController._updateAttributes()">update BlogRegistry attributes</button>'
+	'	  </div>'
+	'	  <div class="function_execution" id="'+this.prefix+'BlogRegistry_contract_function_BlogRegistry_registerBlog_string">'
+	'	BlogRegistry_registerBlog:'
+	'		  <div class="function_parameter">name<input type="text" id="'+this.prefix+'BlogRegistry_registerBlog_string_name"></div>'
+	'		<button id="'+this.prefix+'BlogRegistryController.BlogRegistry_registerBlog_string" onclick="'+this.prefix+'BlogRegistryController.BlogRegistry_registerBlog_string()">execute BlogRegistry_registerBlog</button>'
+	'		<div class="function_result" id="'+this.prefix+'BlogRegistry_registerBlog_string_res"></div>'
+	'	  </div>'
+	'	  <div class="function_execution" id="'+this.prefix+'BlogRegistry_contract_function_Manageable_addManager_address">'
+	'	BlogRegistry_addManager:'
+	'		  <div class="function_parameter">_newManagerAddress<input type="text" id="'+this.prefix+'Manageable_addManager_address__newManagerAddress"></div>'
+	'		<button id="'+this.prefix+'BlogRegistryController.Manageable_addManager_address" onclick="'+this.prefix+'BlogRegistryController.Manageable_addManager_address()">execute BlogRegistry_addManager</button>'
+	'		<div class="function_result" id="'+this.prefix+'Manageable_addManager_address_res"></div>'
+	'	  </div>'
+	'	  <div class="function_execution" id="'+this.prefix+'BlogRegistry_contract_function_Manageable_removeManager_address">'
+	'	BlogRegistry_removeManager:'
+	'		  <div class="function_parameter">_managerAddress<input type="text" id="'+this.prefix+'Manageable_removeManager_address__managerAddress"></div>'
+	'		<button id="'+this.prefix+'BlogRegistryController.Manageable_removeManager_address" onclick="'+this.prefix+'BlogRegistryController.Manageable_removeManager_address()">execute BlogRegistry_removeManager</button>'
+	'		<div class="function_result" id="'+this.prefix+'Manageable_removeManager_address_res"></div>'
+	'	  </div>'
+	'	  <div class="function_execution" id="'+this.prefix+'BlogRegistry_contract_function_Manageable_isManager_address">'
+	'	BlogRegistry_isManager:'
+	'		  <div class="function_parameter">_managerAddress<input type="text" id="'+this.prefix+'Manageable_isManager_address__managerAddress"></div>'
+	'		<button id="'+this.prefix+'BlogRegistryController.Manageable_isManager_address" onclick="'+this.prefix+'BlogRegistryController.Manageable_isManager_address()">execute BlogRegistry_isManager</button>'
+	'		<div class="function_result" id="'+this.prefix+'Manageable_isManager_address_res"></div>'
+	'	  </div>'
+	'	'
+	'	</div>'
;
}

//default attributes
this.createAttributesGui=function() {
	return 	'    <div class="contract_attribute" id="'+this.prefix+'BlogRegistry_contract_attribute_mangerCount"> mangerCount:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'BlogRegistry_mangerCount_value"> </div>'
+	'	    </div>'
+	'	    <div class="contract_attribute" id="'+this.prefix+'BlogRegistry_contract_attribute_blogCount"> blogCount:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'BlogRegistry_blogCount_value"> </div>'
+	'	    </div>'
+	'	'
;
}



this.createBlogRegistry_registerBlog_stringGui=function() {
return 	'  <div class="function_execution" id="'+this.prefix+'BlogRegistry_contract_function_BlogRegistry_registerBlog_string">'
+	'BlogRegistry_registerBlog:'
+	'	  <div class="function_parameter">name<input type="text" id="'+this.prefix+'BlogRegistry_registerBlog_string_name"></div>'
+	'	<button id="'+this.prefix+'BlogRegistryController.BlogRegistry_registerBlog_string" onclick="'+this.prefix+'BlogRegistryController.BlogRegistry_registerBlog_string()">execute BlogRegistry_registerBlog</button>'
+	'	<div class="function_result" id="'+this.prefix+'BlogRegistry_registerBlog_string_res"></div>'
+	'  </div>'
;
}
this.createManageable_addManager_addressGui=function() {
return 	'  <div class="function_execution" id="'+this.prefix+'BlogRegistry_contract_function_Manageable_addManager_address">'
+	'BlogRegistry_addManager:'
+	'	  <div class="function_parameter">_newManagerAddress<input type="text" id="'+this.prefix+'Manageable_addManager_address__newManagerAddress"></div>'
+	'	<button id="'+this.prefix+'BlogRegistryController.Manageable_addManager_address" onclick="'+this.prefix+'BlogRegistryController.Manageable_addManager_address()">execute BlogRegistry_addManager</button>'
+	'	<div class="function_result" id="'+this.prefix+'Manageable_addManager_address_res"></div>'
+	'  </div>'
;
}
this.createManageable_removeManager_addressGui=function() {
return 	'  <div class="function_execution" id="'+this.prefix+'BlogRegistry_contract_function_Manageable_removeManager_address">'
+	'BlogRegistry_removeManager:'
+	'	  <div class="function_parameter">_managerAddress<input type="text" id="'+this.prefix+'Manageable_removeManager_address__managerAddress"></div>'
+	'	<button id="'+this.prefix+'BlogRegistryController.Manageable_removeManager_address" onclick="'+this.prefix+'BlogRegistryController.Manageable_removeManager_address()">execute BlogRegistry_removeManager</button>'
+	'	<div class="function_result" id="'+this.prefix+'Manageable_removeManager_address_res"></div>'
+	'  </div>'
;
}
this.createManageable_isManager_addressGui=function() {
return 	'  <div class="function_execution" id="'+this.prefix+'BlogRegistry_contract_function_Manageable_isManager_address">'
+	'BlogRegistry_isManager:'
+	'	  <div class="function_parameter">_managerAddress<input type="text" id="'+this.prefix+'Manageable_isManager_address__managerAddress"></div>'
+	'	<button id="'+this.prefix+'BlogRegistryController.Manageable_isManager_address" onclick="'+this.prefix+'BlogRegistryController.Manageable_isManager_address()">execute BlogRegistry_isManager</button>'
+	'	<div class="function_result" id="'+this.prefix+'Manageable_isManager_address_res"></div>'
+	'  </div>'
;
}


//print the contract div around
this.createBlogRegistrySeletonGui=function(inner) {
	return 	'<!-- gui for BlogRegistry_contract -->'
+	'	<div class="contract" id="'+this.prefix+'BlogRegistry_contract">'
+ inner
+'</div>';
}


//eventguis

}//end guifactory
// script for BlogRegistry gui controller
function BlogRegistryController() {

	this.BlogRegistry_instance = undefined;
	this.prefix='';
	this.contractAddress = undefined; 
	var self = this;

// bind buttons
	this.bindGui=function() {
		var btn = document.getElementById(self.prefix+'BlogRegistryController.setAddress');
//	console.log('bind:' + self.prefix+' '+btn);
		if(btn!=undefined)		
			btn.onclick = this.setAddress;

		var btn = document.getElementById(self.prefix+'BlogRegistry_updateAttributes');
//		console.log('bind update:' + self.prefix+' '+btn);
		if(btn!=undefined)
			btn.onclick = this._updateAttributes;
		var btn = document.getElementById(self.prefix+'BlogRegistryController.BlogRegistry_registerBlog_string');
//		console.log('bind:BlogRegistry_registerBlog ' + self.prefix+' '+btn+'  '+self.BlogRegistry_registerBlog_string);//BlogRegistry_registerBlog);
		if(btn!=undefined)
			btn.onclick = this.BlogRegistry_registerBlog_string;
		var btn = document.getElementById(self.prefix+'BlogRegistryController.Manageable_addManager_address');
//		console.log('bind:BlogRegistry_addManager ' + self.prefix+' '+btn+'  '+self.Manageable_addManager_address);//BlogRegistry_addManager);
		if(btn!=undefined)
			btn.onclick = this.Manageable_addManager_address;
		var btn = document.getElementById(self.prefix+'BlogRegistryController.Manageable_removeManager_address');
//		console.log('bind:BlogRegistry_removeManager ' + self.prefix+' '+btn+'  '+self.Manageable_removeManager_address);//BlogRegistry_removeManager);
		if(btn!=undefined)
			btn.onclick = this.Manageable_removeManager_address;
		var btn = document.getElementById(self.prefix+'BlogRegistryController.Manageable_isManager_address');
//		console.log('bind:BlogRegistry_isManager ' + self.prefix+' '+btn+'  '+self.Manageable_isManager_address);//BlogRegistry_isManager);
		if(btn!=undefined)
			btn.onclick = this.Manageable_isManager_address;
	}
	// set function
	this.setAddress=function() {
	var _address = document.getElementById(self.prefix+'BlogRegistry_address');
//	console.log('setAddress:' + self.prefix+' '+_address);
	self.BlogRegistry_instance = BlogRegistryContract.at(_address.value);
	self.contractAddress = _address.value;
	self._updateAttributes();
}
//update attributes
this._updateAttributes=function () {
if(this.BlogRegistry_instance===null) return;
//console.log('updateAttributes:' + self.prefix);
// update attributes
	var mangerCount_res = self.BlogRegistry_instance.mangerCount();
//	console.log('get:mangerCount' + self.prefix);

	if(mangerCount_res!=null)
		document.getElementById(self.prefix+'BlogRegistry_mangerCount_value').innerText = mangerCount_res;
	var blogCount_res = self.BlogRegistry_instance.blogCount();
//	console.log('get:blogCount' + self.prefix);

	if(blogCount_res!=null)
		document.getElementById(self.prefix+'BlogRegistry_blogCount_value').innerText = blogCount_res;
//console.log('getStruct:blogs' + self.prefix);
	var _key = document.getElementById(self.prefix+'BlogRegistry_contract_attribute_blogs_input').value;
	var blogs_res = self.BlogRegistry_instance.blogs(_key);
//console.log('result:blogs' + blogs_res+' key: '+_key);
	if(blogs_res!=null){
		document.getElementById(self.prefix+'BlogRegistry_blogs_value').innerText = blogs_res;
	}
//console.log('getStruct:managers' + self.prefix);
	var _key = document.getElementById(self.prefix+'BlogRegistry_contract_attribute_managers_input').value;
	var managers_res = self.BlogRegistry_instance.managers(_key);
//console.log('result:managers' + managers_res+' key: '+_key);
	if(managers_res!=null){
		document.getElementById(self.prefix+'BlogRegistry_managers_value').innerText = managers_res;
	}
//console.log('getStruct:names' + self.prefix);
	var _key = document.getElementById(self.prefix+'BlogRegistry_contract_attribute_names_input').value;
	var names_res = self.BlogRegistry_instance.names(_key);
//console.log('result:names' + names_res+' key: '+_key);
	if(names_res!=null){
		document.getElementById(self.prefix+'BlogRegistry_names_value').innerText = names_res;
	}
}

//call functions
//function BlogRegistry_canAccess
this.Manageable_canAccess=function() {
//console.log('function:canAccess' + self.prefix);
//	console.log(':' +self.BlogRegistry_instance+':');
	var res = self.BlogRegistry_instance.canAccess();
	if(res!=null)
		document.getElementById(self.prefix+'Manageable_canAccess_res').innerText = res;
}
//function BlogRegistry_registerBlog
this.BlogRegistry_registerBlog_string=function() {
//console.log('function:registerBlog' + self.prefix);
	var e = document.getElementById(self.prefix+'BlogRegistry_registerBlog_string_name');
//	console.log(':' + self.prefix+'BlogRegistry_registerBlog_string_name'+": "+e);
	var param_name = e.value;
//	console.log(':' +self.BlogRegistry_instance+':');
	var res = self.BlogRegistry_instance.registerBlog(param_name);
	if(res!=null)
		document.getElementById(self.prefix+'BlogRegistry_registerBlog_string_res').innerText = res;
}
//function BlogRegistry_addManager
this.Manageable_addManager_address=function() {
//console.log('function:addManager' + self.prefix);
	var e = document.getElementById(self.prefix+'Manageable_addManager_address__newManagerAddress');
//	console.log(':' + self.prefix+'Manageable_addManager_address__newManagerAddress'+": "+e);
	var param__newManagerAddress = e.value;
//	console.log(':' +self.BlogRegistry_instance+':');
	var res = self.BlogRegistry_instance.addManager(param__newManagerAddress);
}
//function BlogRegistry_removeManager
this.Manageable_removeManager_address=function() {
//console.log('function:removeManager' + self.prefix);
	var e = document.getElementById(self.prefix+'Manageable_removeManager_address__managerAddress');
//	console.log(':' + self.prefix+'Manageable_removeManager_address__managerAddress'+": "+e);
	var param__managerAddress = e.value;
//	console.log(':' +self.BlogRegistry_instance+':');
	var res = self.BlogRegistry_instance.removeManager(param__managerAddress);
}
//function BlogRegistry_isManager
this.Manageable_isManager_address=function() {
//console.log('function:isManager' + self.prefix);
	var e = document.getElementById(self.prefix+'Manageable_isManager_address__managerAddress');
//	console.log(':' + self.prefix+'Manageable_isManager_address__managerAddress'+": "+e);
	var param__managerAddress = e.value;
//	console.log(':' +self.BlogRegistry_instance+':');
	var res = self.BlogRegistry_instance.isManager(param__managerAddress);
	if(res!=null)
		document.getElementById(self.prefix+'Manageable_isManager_address_res').innerText = res;
}

//delegated calls

}// end controller	


// script for BlogRegistry
function BlogRegistryModel(prefix) {
	this.prefix = prefix;
	this.guiFactory = new BlogRegistryGuiFactory();
	this.controller = new BlogRegistryController();
	this.guiFactory.prefix = prefix;
	this.controller.prefix = prefix;
}
BlogRegistryModel.prototype.create=function () {
	this.guiFactory.placeDefaultGui();
	this.controller._updateAttributes();
}


//class as GlueCode
//uses prefix + 'GuiContainer'
function BlogRegistryManager(prefix,contract) {
	this.prefix = prefix;
	var self = this;
	this.c = new BlogRegistryController();
	this.c.prefix=prefix;
	this.c.BlogRegistry_instance=contract;
	this.c.contractAddress = contract.address;
	this.g = new BlogRegistryGuiFactory();
	this.g.prefix = prefix;

	this.addGui = function() {
		var e = document.getElementById(this.prefix + 'GuiContainer');
//console.log('addGui:' + this.prefix+ 'GuiContainer'+e);
		var elemDiv = document.createElement('div');
		elemDiv.id= this.prefix +'BlogRegistry_gui';
		e.appendChild(elemDiv);
		this.g.placeDefaultGui();
		document.getElementById(this.prefix+'BlogRegistry_address').value = this.c.contractAddress;
		this.c.bindGui();
	}	
	this.clearGui = function(){
		var e = document.getElementById(this.prefix + 'GuiContainer');
		e.innerHTML ='';
	}
	this.updateGui = function(){
		this.c._updateAttributes();
	}
	this.getContract = function(){
		return this.c.BlogRegistry_instance;
	}

}// end of manager

function BlogRegistryGuiMananger(guiId){
	this.prefix = guiId;
	this.managers=new Array();	//[];		
	
	this.addManager = function(contract) {
//console.log('addManager:'+contract);
		var m = new BlogRegistryManager(contract.address,contract);
		this.managers.push(m);
		//manager.addGui();
	}
			
	this.clearGui = function(){
		var e = document.getElementById(this.prefix);
//console.log('clear gui:'+this.prefix+e);
		if(e!==undefined)
			e.innerHTML ='';
	}
			
	this.displayGui = function(){
		var e = document.getElementById(this.prefix);
//console.log('displayGui:'+this.prefix +e);
		if(e==undefined) return;
		for (i in this.managers) {
			var elemDiv = document.createElement('div');
			elemDiv.id= this.managers[i].prefix + 'GuiContainer';//'BlogRegistry_gui';
			e.appendChild(elemDiv);
//console.log('add:'+elemDiv.id);
			this.managers[i].addGui();
		}
	}

	this.updateGui = function(){
		for (i in this.managers) {
			this.managers[i].updateGui();
		}
//		console.log('update');
	}
}// end of gui mananger

