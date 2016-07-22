
var ShortBlogContract = web3.eth.contract([
{"constant":true,"inputs":[],"name":"messageCount","outputs":[{"name":"","type":"uint"}],"type":"function"},
{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"type":"function"},
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
{"constant":true,"inputs":[],"name":"mangerCount","outputs":[{"name":"","type":"uint"}],"type":"function"},
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
	var e = document.getElementById(this.prefix+'ShortBlog_gui');
	if(e!=null)
		e.innerHTML = this.createDefaultGui();
	else
		console.log(this.prefix+'ShortBlog_gui not found');
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
this.createSeletonGui=function(inner) {
	return 	'<!-- gui for ShortBlog_contract -->'
+	'	<div class="contract" id="'+this.prefix+'ShortBlog_contract">'
+ inner
+'</div>';
}


//eventguis
this.createNewMessageLogDataGui = function(prefix, blockHash, blockNumber
,message,messageId) {
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

	this.instance = undefined;
	this.prefix='';
	this.contractAddress = undefined; 
	this.eventlogPrefix = '';
	var self = this;

// bind buttons
	this.bindGui=function() {
		var btn = document.getElementById(self.prefix+'ShortBlogController.setAddress');
		if(btn!=undefined)		
			btn.onclick = this.setAddress;

		var btn = document.getElementById(self.prefix+'ShortBlog_updateAttributes');
		if(btn!=undefined)
			btn.onclick = this._updateAttributes;
		var btn = document.getElementById(self.prefix+'ShortBlogController.Owned_getOwner');
		if(btn!=undefined)
			btn.onclick = this.Owned_getOwner;
		var btn = document.getElementById(self.prefix+'ShortBlogController.Owned_changeOwner_address');
		if(btn!=undefined)
			btn.onclick = this.Owned_changeOwner_address;
		var btn = document.getElementById(self.prefix+'ShortBlogController.ShortBlog_sendMessage_string_string_string');
		if(btn!=undefined)
			btn.onclick = this.ShortBlog_sendMessage_string_string_string;
		var btn = document.getElementById(self.prefix+'ShortBlogController.ShortBlog_ShortBlog_string');
		if(btn!=undefined)
			btn.onclick = this.ShortBlog_ShortBlog_string;
		var btn = document.getElementById(self.prefix+'ShortBlogController.Owned_kill');
		if(btn!=undefined)
			btn.onclick = this.Owned_kill;
	}
	// set function
	this.setAddress=function() {
	var _address = document.getElementById(self.prefix+'ShortBlog_address');
	if(_address==null)return;

	self.ShortBlog_instance = ShortBlogContract.at(_address.value);
	self.contractAddress = _address.value;
	self._updateAttributes();
}
//update attributes
this._updateAttributes=function () {
if(this.instance===null) return;
// update attributes
	var messageCount_res = self.instance.messageCount();
	var e = document.getElementById(self.prefix+'ShortBlog_messageCount_value');
	if(messageCount_res!=null && e!=null)
		e.innerText = messageCount_res;
	var owner_res = self.instance.owner();
	var e = document.getElementById(self.prefix+'ShortBlog_owner_value');
	if(owner_res!=null && e!=null)
		e.innerText = owner_res;
	var lastMessageDate_res = self.instance.lastMessageDate();
	var e = document.getElementById(self.prefix+'ShortBlog_lastMessageDate_value');
	if(lastMessageDate_res!=null && e!=null)
		e.innerText = lastMessageDate_res;
	var name_res = self.instance.name();
	var e = document.getElementById(self.prefix+'ShortBlog_name_value');
	if(name_res!=null && e!=null)
		e.innerText = name_res;
	var e = document.getElementById(self.prefix+'ShortBlog_contract_attribute_messages_input');
if(e!=null){
	var _key = e.value;
	var messages_res = self.instance.messages(_key);
	if(messages_res!=null){
	var e1 = document.getElementById(self.prefix+'ShortBlog_messages_message_value');
	if(e1!=null)	
		e1.innerText = messages_res[0];
	var e1 = document.getElementById(self.prefix+'ShortBlog_messages_date_value');
	if(e1!=null)	
		e1.innerText = messages_res[1];
	var e1 = document.getElementById(self.prefix+'ShortBlog_messages_id_value');
	if(e1!=null)	
		e1.innerText = messages_res[2];
	var e1 = document.getElementById(self.prefix+'ShortBlog_messages_sender_value');
	if(e1!=null)	
		e1.innerText = messages_res[3];
	var e1 = document.getElementById(self.prefix+'ShortBlog_messages_blockNumber_value');
	if(e1!=null)	
		e1.innerText = messages_res[4];
	var e1 = document.getElementById(self.prefix+'ShortBlog_messages_hashValue_value');
	if(e1!=null)	
		e1.innerText = messages_res[5];
	var e1 = document.getElementById(self.prefix+'ShortBlog_messages_externalResource_value');
	if(e1!=null)	
		e1.innerText = messages_res[6];
	}}
}

//call functions
//function ShortBlog_getOwner
this.Owned_getOwner=function() {
	var res = self.instance.getOwner();
	var e = document.getElementById(self.prefix+'Owned_getOwner_res');
	if(res!=null && e!=null)
		e.innerText = res;
}
//function ShortBlog_changeOwner
this.Owned_changeOwner_address=function() {
	var e = document.getElementById(self.prefix+'Owned_changeOwner_address_newOwner');
	if(e!=null)
		var param_newOwner = e.value;
	var res = self.instance.changeOwner(param_newOwner);
}
//function ShortBlog_sendMessage
this.ShortBlog_sendMessage_string_string_string=function() {
	var e = document.getElementById(self.prefix+'ShortBlog_sendMessage_string_string_string_message');
	if(e!=null)
		var param_message = e.value;
	var e = document.getElementById(self.prefix+'ShortBlog_sendMessage_string_string_string_hash');
	if(e!=null)
		var param_hash = e.value;
	var e = document.getElementById(self.prefix+'ShortBlog_sendMessage_string_string_string_er');
	if(e!=null)
		var param_er = e.value;
	var res = self.instance.sendMessage(param_message, param_hash, param_er);
}
//function ShortBlog_ShortBlog
this.ShortBlog_ShortBlog_string=function() {
	var e = document.getElementById(self.prefix+'ShortBlog_ShortBlog_string__name');
	if(e!=null)
		var param__name = e.value;
	var res = self.instance.ShortBlog(param__name);
}
//function ShortBlog_kill
this.Owned_kill=function() {
	var res = self.instance.kill();
}

//delegated calls

}// end controller	


//class as GlueCode ShortBlogManager
//uses prefix + 'GuiContainer'
function ShortBlogManager(prefix,contract,containerId) {
	this.prefix = prefix;
	var self = this;
	this.c = new ShortBlogController();
	this.c.prefix=prefix;
	this.c.instance=contract;
	this.c.contractAddress = contract.address;
	this.g = new ShortBlogGuiFactory();
	this.g.prefix = prefix;
	this.containerId = containerId;

	this.addGui = function() {
		var e = document.getElementById(this.containerId);
		if(e==null)return;
		var elemDiv = document.createElement('div');
		elemDiv.id= this.prefix +'ShortBlog_gui';
		e.appendChild(elemDiv);
		elemDiv.innerHTML = this.createGui(this.g);
		var e = document.getElementById(this.prefix+'ShortBlog_address');
		if(e!=null)
			e.value = this.c.contractAddress;
		this.c.bindGui();
	}	
	this.clearGui = function(){
		var e = document.getElementById(this.containerId);
		e.innerHTML ='';
	}
	this.createGui = function(guifactory){
		var txt ='';
		txt = txt + guifactory.createDefaultGui();
		return guifactory.createSeletonGui(txt);

	}
	this.createSmallGui = function(guifactory){
		var txt ='';
		txt = txt + guifactory.createAttributesGui();
		return guifactory.createSeletonGui(txt);

	}
	this.updateGui = function(){
		this.c._updateAttributes();
	}
	this.getContract = function(){
		return this.c.instance;
	}

//watch events
	this.watchEvents=function(){
	var event_NewMessage = contract.NewMessage({},{fromBlock: 0});
	event_NewMessage.watch(function(error,result){
	if(!error){
		var e = document.getElementById(self.eventlogPrefix+'eventLog');
		var elemDiv = document.createElement('div');
		elemDiv.id= result.blockNumber +'event';
		e.appendChild(elemDiv);
		//console.log(result.address+ 'eventLog'+result.blockHash+' '+result.blockNumber+' '+result.args.name+' '+result.args.succesful+' ');
		elemDiv.innerHTML = '<div>'
        +'<span>'+result.args.message+'</span>'
        +'<span>'+result.args.messageId+'</span>'
		+ '</div>';
		}else
		console.log(error);	
	});
	}

}// end of manager

function ShortBlogGuiMananger(guiId){
	this.prefix = guiId;
	this.managers=new Array();	//[];		
	
	this.addManager = function(contract) {
		var m = new ShortBlogManager(contract.address,contract,this.prefix);
		m.watchEvents();
		this.managers.push(m);
		//manager.addGui();
	}
			
	this.clearGui = function(){
		var e = document.getElementById(this.prefix);
		if(e!==undefined)
			e.innerHTML ='';
	}
			
	this.displayGui = function(){
		var e = document.getElementById(this.prefix);
		if(e==undefined) return;
		for (i in this.managers) {
			var manager = this.managers[i] ;
			var elemDiv = document.createElement('div');
			elemDiv.id= manager.prefix + 'GuiContainer';//'ShortBlog_gui';
			e.appendChild(elemDiv);
			elemDiv.innerHTML = manager.createGui(manager.g);
		}
	}
	this.displaySimpleGui = function(){
		for (i in this.managers) {
			var manager = this.managers[i] ;
			manager.addGui();
		}
	}

	this.updateGui = function(){
		for (i in this.managers) {
			this.managers[i].updateGui();
		}
//		console.log('update');
	}
}// end of gui mananger

//Start of user code custom_ShortBlog_js
//TODO: implement
//End of user code
//gui factory BlogRegistry
function BlogRegistryGuiFactory() {
	this.prefix='';
	
// default Gui
this.placeDefaultGui=function() {
	var e = document.getElementById(this.prefix+'BlogRegistry_gui');
	if(e!=null)
		e.innerHTML = this.createDefaultGui();
	else
		console.log(this.prefix+'BlogRegistry_gui not found');
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
this.createSeletonGui=function(inner) {
	return 	'<!-- gui for BlogRegistry_contract -->'
+	'	<div class="contract" id="'+this.prefix+'BlogRegistry_contract">'
+ inner
+'</div>';
}


//eventguis

}//end guifactory
// script for BlogRegistry gui controller
function BlogRegistryController() {

	this.instance = undefined;
	this.prefix='';
	this.contractAddress = undefined; 
	this.eventlogPrefix = '';
	var self = this;

// bind buttons
	this.bindGui=function() {
		var btn = document.getElementById(self.prefix+'BlogRegistryController.setAddress');
		if(btn!=undefined)		
			btn.onclick = this.setAddress;

		var btn = document.getElementById(self.prefix+'BlogRegistry_updateAttributes');
		if(btn!=undefined)
			btn.onclick = this._updateAttributes;
		var btn = document.getElementById(self.prefix+'BlogRegistryController.BlogRegistry_registerBlog_string');
		if(btn!=undefined)
			btn.onclick = this.BlogRegistry_registerBlog_string;
		var btn = document.getElementById(self.prefix+'BlogRegistryController.Manageable_addManager_address');
		if(btn!=undefined)
			btn.onclick = this.Manageable_addManager_address;
		var btn = document.getElementById(self.prefix+'BlogRegistryController.Manageable_removeManager_address');
		if(btn!=undefined)
			btn.onclick = this.Manageable_removeManager_address;
		var btn = document.getElementById(self.prefix+'BlogRegistryController.Manageable_isManager_address');
		if(btn!=undefined)
			btn.onclick = this.Manageable_isManager_address;
	}
	// set function
	this.setAddress=function() {
	var _address = document.getElementById(self.prefix+'BlogRegistry_address');
	if(_address==null)return;

	self.BlogRegistry_instance = BlogRegistryContract.at(_address.value);
	self.contractAddress = _address.value;
	self._updateAttributes();
}
//update attributes
this._updateAttributes=function () {
if(this.instance===null) return;
// update attributes
	var mangerCount_res = self.instance.mangerCount();
	var e = document.getElementById(self.prefix+'BlogRegistry_mangerCount_value');
	if(mangerCount_res!=null && e!=null)
		e.innerText = mangerCount_res;
	var blogCount_res = self.instance.blogCount();
	var e = document.getElementById(self.prefix+'BlogRegistry_blogCount_value');
	if(blogCount_res!=null && e!=null)
		e.innerText = blogCount_res;
var e = document.getElementById(self.prefix+'BlogRegistry_contract_attribute_blogs_input');
if(e!=null){
	var _key = e.value;
	var blogs_res = self.instance.blogs(_key);
	if(blogs_res!=null){
		var e1 = document.getElementById(self.prefix+'BlogRegistry_blogs_value');
		if(e1!=null)	
			e1.innerText = blogs_res;
	}}
var e = document.getElementById(self.prefix+'BlogRegistry_contract_attribute_managers_input');
if(e!=null){
	var _key = e.value;
	var managers_res = self.instance.managers(_key);
	if(managers_res!=null){
		var e1 = document.getElementById(self.prefix+'BlogRegistry_managers_value');
		if(e1!=null)	
			e1.innerText = managers_res;
	}}
var e = document.getElementById(self.prefix+'BlogRegistry_contract_attribute_names_input');
if(e!=null){
	var _key = e.value;
	var names_res = self.instance.names(_key);
	if(names_res!=null){
		var e1 = document.getElementById(self.prefix+'BlogRegistry_names_value');
		if(e1!=null)	
			e1.innerText = names_res;
	}}
}

//call functions
//function BlogRegistry_canAccess
this.Manageable_canAccess=function() {
	var res = self.instance.canAccess();
	var e = document.getElementById(self.prefix+'Manageable_canAccess_res');
	if(res!=null && e!=null)
		e.innerText = res;
}
//function BlogRegistry_registerBlog
this.BlogRegistry_registerBlog_string=function() {
	var e = document.getElementById(self.prefix+'BlogRegistry_registerBlog_string_name');
	if(e!=null)
		var param_name = e.value;
	var res = self.instance.registerBlog(param_name);
	var e = document.getElementById(self.prefix+'BlogRegistry_registerBlog_string_res');
	if(res!=null && e!=null)
		e.innerText = res;
}
//function BlogRegistry_addManager
this.Manageable_addManager_address=function() {
	var e = document.getElementById(self.prefix+'Manageable_addManager_address__newManagerAddress');
	if(e!=null)
		var param__newManagerAddress = e.value;
	var res = self.instance.addManager(param__newManagerAddress);
}
//function BlogRegistry_removeManager
this.Manageable_removeManager_address=function() {
	var e = document.getElementById(self.prefix+'Manageable_removeManager_address__managerAddress');
	if(e!=null)
		var param__managerAddress = e.value;
	var res = self.instance.removeManager(param__managerAddress);
}
//function BlogRegistry_isManager
this.Manageable_isManager_address=function() {
	var e = document.getElementById(self.prefix+'Manageable_isManager_address__managerAddress');
	if(e!=null)
		var param__managerAddress = e.value;
	var res = self.instance.isManager(param__managerAddress);
	var e = document.getElementById(self.prefix+'Manageable_isManager_address_res');
	if(res!=null && e!=null)
		e.innerText = res;
}

//delegated calls

}// end controller	


//class as GlueCode BlogRegistryManager
//uses prefix + 'GuiContainer'
function BlogRegistryManager(prefix,contract,containerId) {
	this.prefix = prefix;
	var self = this;
	this.c = new BlogRegistryController();
	this.c.prefix=prefix;
	this.c.instance=contract;
	this.c.contractAddress = contract.address;
	this.g = new BlogRegistryGuiFactory();
	this.g.prefix = prefix;
	this.containerId = containerId;

	this.addGui = function() {
		var e = document.getElementById(this.containerId);
		if(e==null)return;
		var elemDiv = document.createElement('div');
		elemDiv.id= this.prefix +'BlogRegistry_gui';
		e.appendChild(elemDiv);
		elemDiv.innerHTML = this.createGui(this.g);
		var e = document.getElementById(this.prefix+'BlogRegistry_address');
		if(e!=null)
			e.value = this.c.contractAddress;
		this.c.bindGui();
	}	
	this.clearGui = function(){
		var e = document.getElementById(this.containerId);
		e.innerHTML ='';
	}
	this.createGui = function(guifactory){
		var txt ='';
		txt = txt + guifactory.createDefaultGui();
		return guifactory.createSeletonGui(txt);

	}
	this.createSmallGui = function(guifactory){
		var txt ='';
		txt = txt + guifactory.createAttributesGui();
		return guifactory.createSeletonGui(txt);

	}
	this.updateGui = function(){
		this.c._updateAttributes();
	}
	this.getContract = function(){
		return this.c.instance;
	}

//watch events
	this.watchEvents=function(){
	}

}// end of manager

function BlogRegistryGuiMananger(guiId){
	this.prefix = guiId;
	this.managers=new Array();	//[];		
	
	this.addManager = function(contract) {
		var m = new BlogRegistryManager(contract.address,contract,this.prefix);
		m.watchEvents();
		this.managers.push(m);
		//manager.addGui();
	}
			
	this.clearGui = function(){
		var e = document.getElementById(this.prefix);
		if(e!==undefined)
			e.innerHTML ='';
	}
			
	this.displayGui = function(){
		var e = document.getElementById(this.prefix);
		if(e==undefined) return;
		for (i in this.managers) {
			var manager = this.managers[i] ;
			var elemDiv = document.createElement('div');
			elemDiv.id= manager.prefix + 'GuiContainer';//'BlogRegistry_gui';
			e.appendChild(elemDiv);
			elemDiv.innerHTML = manager.createGui(manager.g);
		}
	}
	this.displaySimpleGui = function(){
		for (i in this.managers) {
			var manager = this.managers[i] ;
			manager.addGui();
		}
	}

	this.updateGui = function(){
		for (i in this.managers) {
			this.managers[i].updateGui();
		}
//		console.log('update');
	}
}// end of gui mananger

//Start of user code custom_BlogRegistry_js
//TODO: implement
//End of user code
//the page Object fro the PublishingPage.
function PublishingPage(prefix) {
	this.prefix=prefix;
	//Start of user code page_publishing_attributes
		//TODO: implement
	//End of user code

	
// default Gui
this.placeDefaultGui=function() {
this.createDefaultGui();

}
// default Gui
this.createDefaultGui=function() {
	//Start of user code page_Publishing_create_default_gui_functions
		//TODO: implement
	//End of user code
}
	//Start of user code page_Publishing_functions
		//TODO: implement
	//End of user code

}// end of PublishingPage
