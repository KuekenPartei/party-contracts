/**
*
*(c) 2016 KUEKeN
* Urs Zeidler
*
**/
// contractVariable for ShortBlog
var ShortBlogContract = web3.eth.contract([
{"constant":true,"inputs":[],"name":"messageCount","outputs":[{"name":"","type":"uint"}],"type":"function"},
{"constant":true,"inputs":[],"name":"lastMessageDate","outputs":[{"name":"","type":"uint"}],"type":"function"},
{"constant":true,"inputs":[],"name":"mangerCount","outputs":[{"name":"","type":"uint"}],"type":"function"},
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

{"constant": true,"inputs": [{"name": "","type": "address"}],"name": "managers","outputs": [
{ "name": "", "type": "bool"}
],"type": "function"	},
//

  {
    "constant": false,
    "inputs": [{"name": "_newManagerAddress","type": "address"}],    
    "name": "addManager",
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
    "inputs": [{"name": "_managerAddress","type": "address"}],    
    "name": "removeManager",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": true,
    "inputs": [{"name": "_managerAddress","type": "address"}],    
    "name": "isManager",
    "outputs": [{"name": "","type": "bool"}],
    "type": "function"
  }
 ,
  { "constant": true,
    "inputs": [{"name": "message","type": "string"},{"name": "messageId","type": "uint"},{"name": "messageSender","type": "address"},{"name": "messageHashValue","type": "string"},{"name": "externalResource","type": "string"}],    
    "name": "NewMessage",
    "type": "event"  }
]);   
// contractVariable for BlogRegistry
var BlogRegistryContract = web3.eth.contract([
{"constant":true,"inputs":[],"name":"blogCount","outputs":[{"name":"","type":"uint"}],"type":"function"},
{"constant":true,"inputs":[],"name":"mangerCount","outputs":[{"name":"","type":"uint"}],"type":"function"},
{"constant": true,"inputs": [{"name": "","type": "uint"}],"name": "blogs","outputs": [
{ "name": "", "type": "address"}
],"type": "function"	},
//

{"constant": true,"inputs": [{"name": "","type": "address"}],"name": "managers","outputs": [
{ "name": "", "type": "bool"}
],"type": "function"	},
//

  {
    "constant": false,
    "inputs": [{"name": "_name","type": "string"}],    
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
    "constant": true,
    "inputs": [{"name": "_managerAddress","type": "address"}],    
    "name": "isManager",
    "outputs": [{"name": "","type": "bool"}],
    "type": "function"
  }
 ,
  { "constant": true,
    "inputs": [{"name": "index","type": "uint"},{"name": "name","type": "string"},{"name": "blogAddress","type": "address"}],    
    "name": "NewBlog",
    "type": "event"  }
]);   


/**
* A simple bean class around the contract.
* The ShortBlogModel.
**/
function ShortBlogModel(contract) {
this.contract = contract;
	/**
	* Getter for messageCount.
	**/
	this.getMessageCount = function(){
		return contract.messageCount(); 
	}
	/**
	* Getter for lastMessageDate.
	**/
	this.getLastMessageDate = function(){
		return contract.lastMessageDate(); 
	}
	/**
	* Getter for mangerCount.
	**/
	this.getMangerCount = function(){
		return contract.mangerCount(); 
	}
	/**
	* Getter for name.
	**/
	this.getName = function(){
		return contract.name(); 
	}
	/**
	* Call addManager.
	**/
	this.addManager = function(_newManagerAddress){
		return contract.addManager(_newManagerAddress); 
	}
	/**
	* Call sendMessage.
	**/
	this.sendMessage = function(message,hash,er){
		return contract.sendMessage(message,hash,er); 
	}
	/**
	* Call removeManager.
	**/
	this.removeManager = function(_managerAddress){
		return contract.removeManager(_managerAddress); 
	}
	/**
	* Call isManager.
	**/
	this.isManager = function(_managerAddress){
		return contract.isManager(_managerAddress); 
	}
}// end of function ShortBlogModel

/**
* Gui factory ShortBlog
**/
function ShortBlogGuiFactory() {
	this.prefix='';
	
	/**
	* Places the default gui to 'e' or an element with id='ShortBlog_gui'
	*/
	this.placeDefaultGui=function(e) {
		if(e==null)
			e = document.getElementById(this.prefix+'ShortBlog_gui');
		if(e!=null)
			e.innerHTML = this.createDefaultGui();
		else
			console.log(this.prefix+'ShortBlog_gui not found');
	}

	/**
	* The default generated gui with all actions and attributes.
	*/
	this.createDefaultGui=function() {
		return 		'<!-- gui for ShortBlog_contract -->'
+		'		<div class="contract" id="'+this.prefix+'ShortBlog_contract">'
+		'		ShortBlog:'
+		'		  <input type="text" id="'+this.prefix+'ShortBlog_address"> <button id="'+this.prefix+'ShortBlogController.setAddress" onclick="'+this.prefix+'ShortBlogController.setAddress()">change ShortBlog Address</button>'
+		'		  <div class="contract_attributes" id="'+this.prefix+'ShortBlog_contract_attributes"> attributes:'
+		'		    <div class="contract_attribute" id="'+this.prefix+'ShortBlog_contract_attribute_messageCount"> messageCount:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'ShortBlog_messageCount_value"> </div>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'ShortBlog_contract_attribute_lastMessageDate"> lastMessageDate:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'ShortBlog_lastMessageDate_value"> </div>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'ShortBlog_contract_attribute_mangerCount"> mangerCount:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'ShortBlog_mangerCount_value"> </div>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'ShortBlog_contract_attribute_name"> name:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'ShortBlog_name_value"> </div>'
+		'		    </div>'
+		'		'
+		'		<div class="Value_Mapping" id="'+this.prefix+'ShortBlog_contract_attribute_managers">mapping  managers:'
+		'				<input type="text" id="'+this.prefix+'ShortBlog_contract_attribute_managers_input">(address)'
+		'		    	<div class="Mapping_value" id="'+this.prefix+'ShortBlog_contract_attribute_address"> bool:'
+		'		      		<div class="contract_attribute_value" id="'+this.prefix+'ShortBlog_managers_value"> </div>'
+		'		    	</div>'
+		'		  </div>'
+		'		<!--struct -->'
+		'		<div class="Struct_Mapping" id="'+this.prefix+'Struc_ShortBlog_contract_attribute_messages">struc mapping  messages:'
+		'				<input type="number" id="'+this.prefix+'ShortBlog_contract_attribute_messages_input">(uint)'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'ShortBlog_contract_attribute_messages_message"> message:'
+		'		      		<div class="Struct_attribute_value" id="'+this.prefix+'ShortBlog_messages_message_value"> </div>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'ShortBlog_contract_attribute_messages_date"> date:'
+		'		      		<div class="Struct_attribute_value" id="'+this.prefix+'ShortBlog_messages_date_value"> </div>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'ShortBlog_contract_attribute_messages_id"> id:'
+		'		      		<div class="Struct_attribute_value" id="'+this.prefix+'ShortBlog_messages_id_value"> </div>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'ShortBlog_contract_attribute_messages_sender"> sender:'
+		'		      		<div class="Struct_attribute_value" id="'+this.prefix+'ShortBlog_messages_sender_value"> </div>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'ShortBlog_contract_attribute_messages_blockNumber"> blockNumber:'
+		'		      		<div class="Struct_attribute_value" id="'+this.prefix+'ShortBlog_messages_blockNumber_value"> </div>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'ShortBlog_contract_attribute_messages_hashValue"> hashValue:'
+		'		      		<div class="Struct_attribute_value" id="'+this.prefix+'ShortBlog_messages_hashValue_value"> </div>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'ShortBlog_contract_attribute_messages_externalResource"> externalResource:'
+		'		      		<div class="Struct_attribute_value" id="'+this.prefix+'ShortBlog_messages_externalResource_value"> </div>'
+		'		    	</div>'
+		'		  </div>'
+		'		    <button id="'+this.prefix+'ShortBlog_updateAttributes" onclick="'+this.prefix+'ShortBlogController._updateAttributes()">update ShortBlog attributes</button>'
+		'		  </div>'
+		'		  <div class="function_execution" id="'+this.prefix+'ShortBlog_contract_function_Manageable_addManager_address">'
+		'		ShortBlog_addManager:'
+		'			  <div class="function_parameter">_newManagerAddress<input type="text" id="'+this.prefix+'Manageable_addManager_address__newManagerAddress"></div>'
+		'			<button id="'+this.prefix+'ShortBlogController.Manageable_addManager_address" onclick="'+this.prefix+'ShortBlogController.Manageable_addManager_address()">execute ShortBlog_addManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_addManager_address_res"></div>'
+		'		  </div>'
+		'		  <div class="function_execution" id="'+this.prefix+'ShortBlog_contract_function_ShortBlog_sendMessage_string_string_string">'
+		'		ShortBlog_sendMessage:'
+		'			  <div class="function_parameter">message<input type="text" id="'+this.prefix+'ShortBlog_sendMessage_string_string_string_message"></div>'
+		'			  <div class="function_parameter">hash<input type="text" id="'+this.prefix+'ShortBlog_sendMessage_string_string_string_hash"></div>'
+		'			  <div class="function_parameter">er<input type="text" id="'+this.prefix+'ShortBlog_sendMessage_string_string_string_er"></div>'
+		'			<button id="'+this.prefix+'ShortBlogController.ShortBlog_sendMessage_string_string_string" onclick="'+this.prefix+'ShortBlogController.ShortBlog_sendMessage_string_string_string()">execute ShortBlog_sendMessage</button>'
+		'			<div class="function_result" id="'+this.prefix+'ShortBlog_sendMessage_string_string_string_res"></div>'
+		'		  </div>'
+		'		  <div class="function_execution" id="'+this.prefix+'ShortBlog_contract_function_Manageable_removeManager_address">'
+		'		ShortBlog_removeManager:'
+		'			  <div class="function_parameter">_managerAddress<input type="text" id="'+this.prefix+'Manageable_removeManager_address__managerAddress"></div>'
+		'			<button id="'+this.prefix+'ShortBlogController.Manageable_removeManager_address" onclick="'+this.prefix+'ShortBlogController.Manageable_removeManager_address()">execute ShortBlog_removeManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_removeManager_address_res"></div>'
+		'		  </div>'
+		'		  <div class="function_execution" id="'+this.prefix+'ShortBlog_contract_function_Manageable_isManager_address">'
+		'		ShortBlog_isManager:'
+		'			  <div class="function_parameter">_managerAddress<input type="text" id="'+this.prefix+'Manageable_isManager_address__managerAddress"></div>'
+		'			<button id="'+this.prefix+'ShortBlogController.Manageable_isManager_address" onclick="'+this.prefix+'ShortBlogController.Manageable_isManager_address()">execute ShortBlog_isManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_isManager_address_res"></div>'
+		'		  </div>'
+		'		'
+		'		</div>'
;
	}

	/**
	* Create the gui for the attributes.
	*/
	this.createAttributesGui=function() {
		return 		'    <div class="contract_attribute" id="'+this.prefix+'ShortBlog_contract_attribute_messageCount"> messageCount:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'ShortBlog_messageCount_value"> </div>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'ShortBlog_contract_attribute_lastMessageDate"> lastMessageDate:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'ShortBlog_lastMessageDate_value"> </div>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'ShortBlog_contract_attribute_mangerCount"> mangerCount:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'ShortBlog_mangerCount_value"> </div>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'ShortBlog_contract_attribute_name"> name:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'ShortBlog_name_value"> </div>'
+		'		    </div>'
+		'		'
;
	}

	/**
	* Create the gui for the function addManager.
	*/
	this.createManageable_addManager_addressGui=function() {
		return 		'  <div class="function_execution" id="'+this.prefix+'ShortBlog_contract_function_Manageable_addManager_address">'
+		'		ShortBlog_addManager:'
+		'			  <div class="function_parameter">_newManagerAddress<input type="text" id="'+this.prefix+'Manageable_addManager_address__newManagerAddress"></div>'
+		'			<button id="'+this.prefix+'ShortBlogController.Manageable_addManager_address" onclick="'+this.prefix+'ShortBlogController.Manageable_addManager_address()">execute ShortBlog_addManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_addManager_address_res"></div>'
+		'		  </div>'
;
	}

	/**
	* Create the gui for the function sendMessage.
	*/
	this.createShortBlog_sendMessage_string_string_stringGui=function() {
		return 		'  <div class="function_execution" id="'+this.prefix+'ShortBlog_contract_function_ShortBlog_sendMessage_string_string_string">'
+		'		ShortBlog_sendMessage:'
+		'			  <div class="function_parameter">message<input type="text" id="'+this.prefix+'ShortBlog_sendMessage_string_string_string_message"></div>'
+		'			  <div class="function_parameter">hash<input type="text" id="'+this.prefix+'ShortBlog_sendMessage_string_string_string_hash"></div>'
+		'			  <div class="function_parameter">er<input type="text" id="'+this.prefix+'ShortBlog_sendMessage_string_string_string_er"></div>'
+		'			<button id="'+this.prefix+'ShortBlogController.ShortBlog_sendMessage_string_string_string" onclick="'+this.prefix+'ShortBlogController.ShortBlog_sendMessage_string_string_string()">execute ShortBlog_sendMessage</button>'
+		'			<div class="function_result" id="'+this.prefix+'ShortBlog_sendMessage_string_string_string_res"></div>'
+		'		  </div>'
;
	}

	/**
	* Create the gui for the function removeManager.
	*/
	this.createManageable_removeManager_addressGui=function() {
		return 		'  <div class="function_execution" id="'+this.prefix+'ShortBlog_contract_function_Manageable_removeManager_address">'
+		'		ShortBlog_removeManager:'
+		'			  <div class="function_parameter">_managerAddress<input type="text" id="'+this.prefix+'Manageable_removeManager_address__managerAddress"></div>'
+		'			<button id="'+this.prefix+'ShortBlogController.Manageable_removeManager_address" onclick="'+this.prefix+'ShortBlogController.Manageable_removeManager_address()">execute ShortBlog_removeManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_removeManager_address_res"></div>'
+		'		  </div>'
;
	}

	/**
	* Create the gui for the function isManager.
	*/
	this.createManageable_isManager_addressGui=function() {
		return 		'  <div class="function_execution" id="'+this.prefix+'ShortBlog_contract_function_Manageable_isManager_address">'
+		'		ShortBlog_isManager:'
+		'			  <div class="function_parameter">_managerAddress<input type="text" id="'+this.prefix+'Manageable_isManager_address__managerAddress"></div>'
+		'			<button id="'+this.prefix+'ShortBlogController.Manageable_isManager_address" onclick="'+this.prefix+'ShortBlogController.Manageable_isManager_address()">execute ShortBlog_isManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_isManager_address_res"></div>'
+		'		  </div>'
;
	}
	/**
	* Create the gui for the messages struct element.
	*/
	this.createmessagesStructGui=function() {
		return 		'<!--struct -->'
+		'		<div class="Struct_Mapping" id="'+this.prefix+'Struc_ShortBlog_contract_attribute_messages">struc mapping  messages:'
+		'				<input type="number" id="'+this.prefix+'ShortBlog_contract_attribute_messages_input">(uint)'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'ShortBlog_contract_attribute_messages_message"> message:'
+		'		      		<div class="Struct_attribute_value" id="'+this.prefix+'ShortBlog_messages_message_value"> </div>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'ShortBlog_contract_attribute_messages_date"> date:'
+		'		      		<div class="Struct_attribute_value" id="'+this.prefix+'ShortBlog_messages_date_value"> </div>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'ShortBlog_contract_attribute_messages_id"> id:'
+		'		      		<div class="Struct_attribute_value" id="'+this.prefix+'ShortBlog_messages_id_value"> </div>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'ShortBlog_contract_attribute_messages_sender"> sender:'
+		'		      		<div class="Struct_attribute_value" id="'+this.prefix+'ShortBlog_messages_sender_value"> </div>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'ShortBlog_contract_attribute_messages_blockNumber"> blockNumber:'
+		'		      		<div class="Struct_attribute_value" id="'+this.prefix+'ShortBlog_messages_blockNumber_value"> </div>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'ShortBlog_contract_attribute_messages_hashValue"> hashValue:'
+		'		      		<div class="Struct_attribute_value" id="'+this.prefix+'ShortBlog_messages_hashValue_value"> </div>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'ShortBlog_contract_attribute_messages_externalResource"> externalResource:'
+		'		      		<div class="Struct_attribute_value" id="'+this.prefix+'ShortBlog_messages_externalResource_value"> </div>'
+		'		    	</div>'
+		'		  </div>'
;
	}

	/**
	* Create a div with '@inner' as inner elements.
    * @inner - the inner text
	*/
	this.createSeletonGui=function(inner) {
		return 	'<!-- gui for ShortBlog_contract -->'
		+	'	<div class="contract" id="'+this.prefix+'ShortBlog_contract">'
		+ inner
		+'</div>';
	}


	//eventguis

	/**
	* Create a gui for the NewMessage event.
    * @prefix - a prefix
	* @blockHash - the bolckhash 
	* @blockNumber - the number of the block
	*/
	this.createNewMessageLogDataGui = function(prefix, blockHash, blockNumber
	,message	,messageId	,messageSender	,messageHashValue	,externalResource	) {
		return '<div class="eventRow">'
        +'<div class="eventValue">'+message+'</div>'
        +'<div class="eventValue">'+messageId+'</div>'
        +'<div class="eventValue">'+messageSender+'</div>'
        +'<div class="eventValue">'+messageHashValue+'</div>'
        +'<div class="eventValue">'+externalResource+'</div>'
        +' </div>';
	}

}//end guifactory

/**
* Class ShortBlogController. 
* The controller wrap's the 'instance' contract and binds all actions to document elements.
* Parameters are taken from elements with self.prefix+'functionName_parameterName'
*
* self.prefix+'ShortBlogController.setAddress' - 
* self.prefix+'ShortBlog_updateAttributes'     - 
* self.prefix+'Manageable_addManager_address -
* self.prefix+'ShortBlog_sendMessage_string_string_string -
* self.prefix+'Manageable_removeManager_address -
* self.prefix+'Manageable_isManager_address -
*/
function ShortBlogController() {

	this.instance = undefined;
	this.prefix='';
	this.contractAddress = undefined; 
	this.eventlogPrefix = '';
	var self = this;

	/**
	* Binds the element with the prefix-id to the corresponding element.
	*/
	this.bindGui=function() {
		console.log('bind gui for:'+self.prefix);
		var btn = document.getElementById(self.prefix+'ShortBlogController.setAddress');
		if(btn!=undefined)		
			btn.onclick = this.setAddress;
		else console.log('addres widget not bound');

		var btn = document.getElementById(self.prefix+'ShortBlog_updateAttributes');
		if(btn!=undefined)
			btn.onclick = this._updateAttributes;
		else console.log('_updateAttributes widget not bound');
		var btn = document.getElementById(self.prefix+'ShortBlogController.Manageable_addManager_address');
		if(btn!=undefined)
			btn.onclick = this.Manageable_addManager_address;
		else console.log('Manageable_addManager_address widget not bound');
		var btn = document.getElementById(self.prefix+'ShortBlogController.ShortBlog_sendMessage_string_string_string');
		if(btn!=undefined)
			btn.onclick = this.ShortBlog_sendMessage_string_string_string;
		else console.log('ShortBlog_sendMessage_string_string_string widget not bound');
		var btn = document.getElementById(self.prefix+'ShortBlogController.Manageable_removeManager_address');
		if(btn!=undefined)
			btn.onclick = this.Manageable_removeManager_address;
		else console.log('Manageable_removeManager_address widget not bound');
		var btn = document.getElementById(self.prefix+'ShortBlogController.Manageable_isManager_address');
		if(btn!=undefined)
			btn.onclick = this.Manageable_isManager_address;
		else console.log('Manageable_isManager_address widget not bound');
	}

	/**
	* Set the address.
	*/
	this.setAddress=function() {
		var _address = document.getElementById(self.prefix+'ShortBlog_address');
		if(_address==null)return;

		self.ShortBlog_instance = ShortBlogContract.at(_address.value);
		self.contractAddress = _address.value;
		self._updateAttributes();
	}
	
	/**
	* Update attributes.
	*
	* prefix+'ShortBlog_messageCount_value' - 
	* prefix+'ShortBlog_lastMessageDate_value' - 
	* prefix+'ShortBlog_mangerCount_value' - 
	* prefix+'ShortBlog_name_value' - 
	**/
	this._updateAttributes=function () {
		if(this.instance===null) return;
		// update attributes
		var messageCount_res = self.instance.messageCount();
		var e = document.getElementById(self.prefix+'ShortBlog_messageCount_value');
		if(messageCount_res!=null && e!=null)
			e.innerText = messageCount_res;
		else console.log(self.prefix+'ShortBlog_messageCount_value not found');
		var lastMessageDate_res = self.instance.lastMessageDate();
		var e = document.getElementById(self.prefix+'ShortBlog_lastMessageDate_value');
		if(lastMessageDate_res!=null && e!=null)
			e.innerText = lastMessageDate_res;
		else console.log(self.prefix+'ShortBlog_lastMessageDate_value not found');
		var mangerCount_res = self.instance.mangerCount();
		var e = document.getElementById(self.prefix+'ShortBlog_mangerCount_value');
		if(mangerCount_res!=null && e!=null)
			e.innerText = mangerCount_res;
		else console.log(self.prefix+'ShortBlog_mangerCount_value not found');
		var name_res = self.instance.name();
		var e = document.getElementById(self.prefix+'ShortBlog_name_value');
		if(name_res!=null && e!=null)
			e.innerText = name_res;
		else console.log(self.prefix+'ShortBlog_name_value not found');
		var e = document.getElementById(self.prefix+'ShortBlog_contract_attribute_managers_input');
		if(e!=null){
			var _key = e.value;
			if(_key=='') return;
			var managers_res = self.instance.managers(_key);
			if(managers_res!=null){
				var e1 = document.getElementById(self.prefix+'ShortBlog_managers_value');
				if(e1!=null)	
					e1.innerText = managers_res;
			}}
		var e = document.getElementById(self.prefix+'ShortBlog_contract_attribute_messages_input');
		if(e!=null){
			var _key = e.value;
			if(_key=='') return;
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
	
	/**
	* Calls the contract function ShortBlog_canAccess.
	*
	**/
	this.Manageable_canAccess=function() {
		var res = self.instance.canAccess();
		var e = document.getElementById(self.prefix+'Manageable_canAccess_res');
		if(res!=null && e!=null)
			e.innerText = res;
	}
	
	/**
	* Calls the contract function ShortBlog_addManager.
	*
	* this.prefix+'Manageable_addManager_address__newManagerAddress' -
	**/
	this.Manageable_addManager_address=function() {
		var e = document.getElementById(self.prefix+'Manageable_addManager_address__newManagerAddress');
		if(e!=null)
			var param__newManagerAddress = e.value;
		else console.log(self.prefix+'Manageable_addManager_address__newManagerAddress not found');
		var res = self.instance.addManager(param__newManagerAddress);
	}
	
	/**
	* Calls the contract function ShortBlog_sendMessage.
	*
	* this.prefix+'ShortBlog_sendMessage_string_string_string_message' -
	* this.prefix+'ShortBlog_sendMessage_string_string_string_hash' -
	* this.prefix+'ShortBlog_sendMessage_string_string_string_er' -
	**/
	this.ShortBlog_sendMessage_string_string_string=function() {
		var e = document.getElementById(self.prefix+'ShortBlog_sendMessage_string_string_string_message');
		if(e!=null)
			var param_message = e.value;
		else console.log(self.prefix+'ShortBlog_sendMessage_string_string_string_message not found');
		var e = document.getElementById(self.prefix+'ShortBlog_sendMessage_string_string_string_hash');
		if(e!=null)
			var param_hash = e.value;
		else console.log(self.prefix+'ShortBlog_sendMessage_string_string_string_hash not found');
		var e = document.getElementById(self.prefix+'ShortBlog_sendMessage_string_string_string_er');
		if(e!=null)
			var param_er = e.value;
		else console.log(self.prefix+'ShortBlog_sendMessage_string_string_string_er not found');
		var res = self.instance.sendMessage(param_message, param_hash, param_er);
	}
	
	/**
	* Calls the contract function ShortBlog_removeManager.
	*
	* this.prefix+'Manageable_removeManager_address__managerAddress' -
	**/
	this.Manageable_removeManager_address=function() {
		var e = document.getElementById(self.prefix+'Manageable_removeManager_address__managerAddress');
		if(e!=null)
			var param__managerAddress = e.value;
		else console.log(self.prefix+'Manageable_removeManager_address__managerAddress not found');
		var res = self.instance.removeManager(param__managerAddress);
	}
	
	/**
	* Calls the contract function ShortBlog_isManager.
	*
	* this.prefix+'Manageable_isManager_address__managerAddress' -
	**/
	this.Manageable_isManager_address=function() {
		var e = document.getElementById(self.prefix+'Manageable_isManager_address__managerAddress');
		if(e!=null)
			var param__managerAddress = e.value;
		else console.log(self.prefix+'Manageable_isManager_address__managerAddress not found');
		var res = self.instance.isManager(param__managerAddress);
		var e = document.getElementById(self.prefix+'Manageable_isManager_address_res');
		if(res!=null && e!=null)
			e.innerText = res;
	}
	
//delegated calls

}// end controller	

/**
* class as GlueCode ShortBlogManager,
* uses prefix + 'GuiContainer' as target element.
* It combines a ShortBlogController as 'c' and a ShortBlogGuiFactory as 'g'.
**/
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
	this.eventlogPrefix = '';
	this.guiFunction = null;
	this.eventCallback = null;
	
	/**
	* adds the gui element to the given 'e' element
	**/
	this.addGui = function(e) {
		if(e==null)
			e = document.getElementById(this.containerId);
		if(e==null){
		console.log(this.containerId+' not found or :'+e);
		return;
		}
		var elemDiv = document.createElement('div');
		elemDiv.id= this.prefix +'ShortBlog_gui';
		e.appendChild(elemDiv);
		if(this.guiFunction==null)
			elemDiv.innerHTML = this.createGui(this.g);
		else elemDiv.innerHTML = this.guiFunction(this.g);
		
		var e = document.getElementById(this.prefix+'ShortBlog_address');
		if(e!=null)
			e.value = this.c.contractAddress;
		else 
			console.log(this.prefix+'ShortBlog_address not found');
		this.c.bindGui();
	}	
	
	/**
	* clears the given element 'e'.
	**/
	this.clearGui = function(e){
		if(e==null)
			e = document.getElementById(this.containerId);
		e.innerHTML ='';
	}

	/**
	* Create the gui with the given 'guiFactory'. Places an sceleton arount it.
	* @return the gui txt used as innerHTML
	**/
	this.createGui = function(guifactory){
		var txt ='';
//Start of user code ShortBlog_create_gui_js
		txt = txt + guifactory.createDefaultGui();
//End of user code
		return guifactory.createSeletonGui(txt);

	}

	/**
	* Create a small gui, only the attributes. Places an sceleton arount it.
	**/	
	this.createSmallGui = function(guifactory){
		var txt ='';
		txt = txt + guifactory.createAttributesGui();
		return guifactory.createSeletonGui(txt);

	}

	/**
	* Update the attributes.
	**/
	this.updateGui = function(){
		this.c._updateAttributes();
	}

	/**
	* Getter for the contract 'ShortBlog' instance.
	**/
	this.getContract = function(){
		return this.c.instance;
	}

	/**
	* Watch for the contract events.
	* The events are stored in an element with the id this.eventlogPrefix+'eventLog'.
	**/
	this.watchEvents=function(){
	var event_NewMessage = contract.NewMessage({},{fromBlock: 0});
	var elp = this.eventlogPrefix;
	var callback = this.eventCallback;
	event_NewMessage.watch(function(error,result){
	if(!error){
		if(callback!=null)
			callback(result);

		}else
			console.log(error);	
	});
	}

}// end of manager

/**
* Manages a list of ShortBlogManager uses the guid id to place the gui which is also the eventlogPrefix
*/
function ShortBlogGuiMananger(guiId){
	this.prefix = guiId;
	this.managers=new Array();	//[];		
	this.guiFunction = null;
	this.eventCallback = null;
	
	/**
	* Add a contract to this manager.
	* @contract the web3 contract instance
	*/
	this.addManager = function(contract) {
		var m = new ShortBlogManager(contract.address,contract,this.prefix);
		m.eventlogPrefix = this.prefix;
		m.eventCallback = this.eventCallback;
		m.watchEvents();
		if(this.guiFunction!=null)
			m.guiFunction = this.guiFunction;
		this.managers.push(m);
		//manager.addGui();
	}

	/**
	* Clears the element or the element with id 'prefix'.
	* @e an element
	*/
	this.clearGui = function(e){
		if(e==null)
			e = document.getElementById(this.prefix);
		if(e!==undefined)
			e.innerHTML ='';
	}
		
	/**
	* Displays all guis of the managed contracts.
	* @e an element
	*/
	this.displayGui = function(e){
		if(e==null)
			e = document.getElementById(this.prefix);
		if(e==undefined) return;
		for (i in this.managers) {
			var manager = this.managers[i] ;
			var elemDiv = document.createElement('div');
			elemDiv.id= manager.prefix + 'GuiContainer';//'ShortBlog_gui';
			e.appendChild(elemDiv);
			if(this.guiFunction==null)
				elemDiv.innerHTML = manager.createGui(manager.g);
			else elemDiv.innerHTML = this.guiFunction(manager.g);
			manager.c.bindGui();
		}
	}
	/**
	* Displays a simple gui.
	*/
	this.displaySimpleGui = function(){
		for (i in this.managers) {
			var manager = this.managers[i] ;
			manager.addGui(null);
		}
	}
	/**
	* Update the gui.
	*/
	this.updateGui = function(){
		for (i in this.managers) {
			this.managers[i].updateGui();
		}
//		console.log('update');
	}
}// end of gui mananger

/**
* Deploys the contract.
* Each constructor is available.
**/
function ShortBlogDeployment(guiId){

	/**
	* Construct ShortBlog.
	**/
	this.deployShortBlog_ShortBlog_string = function(account,code,providedGas,_name){
//		var c = ShortBlog.new(_name,_url,_description,{
//			from: account,
//			data: code,
//			gas:  providedGas
//		});
		return c;
	}

//Start of user code ShortBlog_deployment_js
//TODO: implement
//End of user code
}
//Start of user code custom_ShortBlog_js
//TODO: implement
//End of user code
/**
* A simple bean class around the contract.
* The BlogRegistryModel.
**/
function BlogRegistryModel(contract) {
this.contract = contract;
	/**
	* Getter for blogCount.
	**/
	this.getBlogCount = function(){
		return contract.blogCount(); 
	}
	/**
	* Getter for mangerCount.
	**/
	this.getMangerCount = function(){
		return contract.mangerCount(); 
	}
	/**
	* Call registerBlog.
	**/
	this.registerBlog = function(_name){
		return contract.registerBlog(_name); 
	}
	/**
	* Call addManager.
	**/
	this.addManager = function(_newManagerAddress){
		return contract.addManager(_newManagerAddress); 
	}
	/**
	* Call removeManager.
	**/
	this.removeManager = function(_managerAddress){
		return contract.removeManager(_managerAddress); 
	}
	/**
	* Call isManager.
	**/
	this.isManager = function(_managerAddress){
		return contract.isManager(_managerAddress); 
	}
}// end of function BlogRegistryModel

/**
* Gui factory BlogRegistry
**/
function BlogRegistryGuiFactory() {
	this.prefix='';
	
	/**
	* Places the default gui to 'e' or an element with id='BlogRegistry_gui'
	*/
	this.placeDefaultGui=function(e) {
		if(e==null)
			e = document.getElementById(this.prefix+'BlogRegistry_gui');
		if(e!=null)
			e.innerHTML = this.createDefaultGui();
		else
			console.log(this.prefix+'BlogRegistry_gui not found');
	}

	/**
	* The default generated gui with all actions and attributes.
	*/
	this.createDefaultGui=function() {
		return 		'<!-- gui for BlogRegistry_contract -->'
+		'		<div class="contract" id="'+this.prefix+'BlogRegistry_contract">'
+		'		BlogRegistry:'
+		'		  <input type="text" id="'+this.prefix+'BlogRegistry_address"> <button id="'+this.prefix+'BlogRegistryController.setAddress" onclick="'+this.prefix+'BlogRegistryController.setAddress()">change BlogRegistry Address</button>'
+		'		  <div class="contract_attributes" id="'+this.prefix+'BlogRegistry_contract_attributes"> attributes:'
+		'		    <div class="contract_attribute" id="'+this.prefix+'BlogRegistry_contract_attribute_blogCount"> blogCount:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'BlogRegistry_blogCount_value"> </div>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'BlogRegistry_contract_attribute_mangerCount"> mangerCount:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'BlogRegistry_mangerCount_value"> </div>'
+		'		    </div>'
+		'		'
+		'		<div class="Value_Mapping" id="'+this.prefix+'BlogRegistry_contract_attribute_blogs">mapping  blogs:'
+		'				<input type="number" id="'+this.prefix+'BlogRegistry_contract_attribute_blogs_input">(uint)'
+		'		    	<div class="Mapping_value" id="'+this.prefix+'BlogRegistry_contract_attribute_uint"> ShortBlog:'
+		'		      		<div class="contract_attribute_value" id="'+this.prefix+'BlogRegistry_blogs_value"> </div>'
+		'		    	</div>'
+		'		  </div>'
+		'		<div class="Value_Mapping" id="'+this.prefix+'BlogRegistry_contract_attribute_managers">mapping  managers:'
+		'				<input type="text" id="'+this.prefix+'BlogRegistry_contract_attribute_managers_input">(address)'
+		'		    	<div class="Mapping_value" id="'+this.prefix+'BlogRegistry_contract_attribute_address"> bool:'
+		'		      		<div class="contract_attribute_value" id="'+this.prefix+'BlogRegistry_managers_value"> </div>'
+		'		    	</div>'
+		'		  </div>'
+		'		    <button id="'+this.prefix+'BlogRegistry_updateAttributes" onclick="'+this.prefix+'BlogRegistryController._updateAttributes()">update BlogRegistry attributes</button>'
+		'		  </div>'
+		'		  <div class="function_execution" id="'+this.prefix+'BlogRegistry_contract_function_BlogRegistry_registerBlog_string">'
+		'		BlogRegistry_registerBlog:'
+		'			  <div class="function_parameter">_name<input type="text" id="'+this.prefix+'BlogRegistry_registerBlog_string__name"></div>'
+		'			<button id="'+this.prefix+'BlogRegistryController.BlogRegistry_registerBlog_string" onclick="'+this.prefix+'BlogRegistryController.BlogRegistry_registerBlog_string()">execute BlogRegistry_registerBlog</button>'
+		'			<div class="function_result" id="'+this.prefix+'BlogRegistry_registerBlog_string_res"></div>'
+		'		  </div>'
+		'		  <div class="function_execution" id="'+this.prefix+'BlogRegistry_contract_function_Manageable_addManager_address">'
+		'		BlogRegistry_addManager:'
+		'			  <div class="function_parameter">_newManagerAddress<input type="text" id="'+this.prefix+'Manageable_addManager_address__newManagerAddress"></div>'
+		'			<button id="'+this.prefix+'BlogRegistryController.Manageable_addManager_address" onclick="'+this.prefix+'BlogRegistryController.Manageable_addManager_address()">execute BlogRegistry_addManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_addManager_address_res"></div>'
+		'		  </div>'
+		'		  <div class="function_execution" id="'+this.prefix+'BlogRegistry_contract_function_Manageable_removeManager_address">'
+		'		BlogRegistry_removeManager:'
+		'			  <div class="function_parameter">_managerAddress<input type="text" id="'+this.prefix+'Manageable_removeManager_address__managerAddress"></div>'
+		'			<button id="'+this.prefix+'BlogRegistryController.Manageable_removeManager_address" onclick="'+this.prefix+'BlogRegistryController.Manageable_removeManager_address()">execute BlogRegistry_removeManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_removeManager_address_res"></div>'
+		'		  </div>'
+		'		  <div class="function_execution" id="'+this.prefix+'BlogRegistry_contract_function_Manageable_isManager_address">'
+		'		BlogRegistry_isManager:'
+		'			  <div class="function_parameter">_managerAddress<input type="text" id="'+this.prefix+'Manageable_isManager_address__managerAddress"></div>'
+		'			<button id="'+this.prefix+'BlogRegistryController.Manageable_isManager_address" onclick="'+this.prefix+'BlogRegistryController.Manageable_isManager_address()">execute BlogRegistry_isManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_isManager_address_res"></div>'
+		'		  </div>'
+		'		'
+		'		</div>'
;
	}

	/**
	* Create the gui for the attributes.
	*/
	this.createAttributesGui=function() {
		return 		'    <div class="contract_attribute" id="'+this.prefix+'BlogRegistry_contract_attribute_blogCount"> blogCount:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'BlogRegistry_blogCount_value"> </div>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'BlogRegistry_contract_attribute_mangerCount"> mangerCount:'
+		'		      <div class="contract_attribute_value" id="'+this.prefix+'BlogRegistry_mangerCount_value"> </div>'
+		'		    </div>'
+		'		'
;
	}

	/**
	* Create the gui for the function registerBlog.
	*/
	this.createBlogRegistry_registerBlog_stringGui=function() {
		return 		'  <div class="function_execution" id="'+this.prefix+'BlogRegistry_contract_function_BlogRegistry_registerBlog_string">'
+		'		BlogRegistry_registerBlog:'
+		'			  <div class="function_parameter">_name<input type="text" id="'+this.prefix+'BlogRegistry_registerBlog_string__name"></div>'
+		'			<button id="'+this.prefix+'BlogRegistryController.BlogRegistry_registerBlog_string" onclick="'+this.prefix+'BlogRegistryController.BlogRegistry_registerBlog_string()">execute BlogRegistry_registerBlog</button>'
+		'			<div class="function_result" id="'+this.prefix+'BlogRegistry_registerBlog_string_res"></div>'
+		'		  </div>'
;
	}

	/**
	* Create the gui for the function addManager.
	*/
	this.createManageable_addManager_addressGui=function() {
		return 		'  <div class="function_execution" id="'+this.prefix+'BlogRegistry_contract_function_Manageable_addManager_address">'
+		'		BlogRegistry_addManager:'
+		'			  <div class="function_parameter">_newManagerAddress<input type="text" id="'+this.prefix+'Manageable_addManager_address__newManagerAddress"></div>'
+		'			<button id="'+this.prefix+'BlogRegistryController.Manageable_addManager_address" onclick="'+this.prefix+'BlogRegistryController.Manageable_addManager_address()">execute BlogRegistry_addManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_addManager_address_res"></div>'
+		'		  </div>'
;
	}

	/**
	* Create the gui for the function removeManager.
	*/
	this.createManageable_removeManager_addressGui=function() {
		return 		'  <div class="function_execution" id="'+this.prefix+'BlogRegistry_contract_function_Manageable_removeManager_address">'
+		'		BlogRegistry_removeManager:'
+		'			  <div class="function_parameter">_managerAddress<input type="text" id="'+this.prefix+'Manageable_removeManager_address__managerAddress"></div>'
+		'			<button id="'+this.prefix+'BlogRegistryController.Manageable_removeManager_address" onclick="'+this.prefix+'BlogRegistryController.Manageable_removeManager_address()">execute BlogRegistry_removeManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_removeManager_address_res"></div>'
+		'		  </div>'
;
	}

	/**
	* Create the gui for the function isManager.
	*/
	this.createManageable_isManager_addressGui=function() {
		return 		'  <div class="function_execution" id="'+this.prefix+'BlogRegistry_contract_function_Manageable_isManager_address">'
+		'		BlogRegistry_isManager:'
+		'			  <div class="function_parameter">_managerAddress<input type="text" id="'+this.prefix+'Manageable_isManager_address__managerAddress"></div>'
+		'			<button id="'+this.prefix+'BlogRegistryController.Manageable_isManager_address" onclick="'+this.prefix+'BlogRegistryController.Manageable_isManager_address()">execute BlogRegistry_isManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_isManager_address_res"></div>'
+		'		  </div>'
;
	}

	/**
	* Create a div with '@inner' as inner elements.
    * @inner - the inner text
	*/
	this.createSeletonGui=function(inner) {
		return 	'<!-- gui for BlogRegistry_contract -->'
		+	'	<div class="contract" id="'+this.prefix+'BlogRegistry_contract">'
		+ inner
		+'</div>';
	}


	//eventguis

	/**
	* Create a gui for the NewBlog event.
    * @prefix - a prefix
	* @blockHash - the bolckhash 
	* @blockNumber - the number of the block
	*/
	this.createNewBlogLogDataGui = function(prefix, blockHash, blockNumber
	,index	,name	,blogAddress	) {
		return '<div class="eventRow">'
        +'<div class="eventValue">'+index+'</div>'
        +'<div class="eventValue">'+name+'</div>'
        +'<div class="eventValue">'+blogAddress+'</div>'
        +' </div>';
	}

}//end guifactory

/**
* Class BlogRegistryController. 
* The controller wrap's the 'instance' contract and binds all actions to document elements.
* Parameters are taken from elements with self.prefix+'functionName_parameterName'
*
* self.prefix+'BlogRegistryController.setAddress' - 
* self.prefix+'BlogRegistry_updateAttributes'     - 
* self.prefix+'BlogRegistry_registerBlog_string -
* self.prefix+'Manageable_addManager_address -
* self.prefix+'Manageable_removeManager_address -
* self.prefix+'Manageable_isManager_address -
*/
function BlogRegistryController() {

	this.instance = undefined;
	this.prefix='';
	this.contractAddress = undefined; 
	this.eventlogPrefix = '';
	var self = this;

	/**
	* Binds the element with the prefix-id to the corresponding element.
	*/
	this.bindGui=function() {
		console.log('bind gui for:'+self.prefix);
		var btn = document.getElementById(self.prefix+'BlogRegistryController.setAddress');
		if(btn!=undefined)		
			btn.onclick = this.setAddress;
		else console.log('addres widget not bound');

		var btn = document.getElementById(self.prefix+'BlogRegistry_updateAttributes');
		if(btn!=undefined)
			btn.onclick = this._updateAttributes;
		else console.log('_updateAttributes widget not bound');
		var btn = document.getElementById(self.prefix+'BlogRegistryController.BlogRegistry_registerBlog_string');
		if(btn!=undefined)
			btn.onclick = this.BlogRegistry_registerBlog_string;
		else console.log('BlogRegistry_registerBlog_string widget not bound');
		var btn = document.getElementById(self.prefix+'BlogRegistryController.Manageable_addManager_address');
		if(btn!=undefined)
			btn.onclick = this.Manageable_addManager_address;
		else console.log('Manageable_addManager_address widget not bound');
		var btn = document.getElementById(self.prefix+'BlogRegistryController.Manageable_removeManager_address');
		if(btn!=undefined)
			btn.onclick = this.Manageable_removeManager_address;
		else console.log('Manageable_removeManager_address widget not bound');
		var btn = document.getElementById(self.prefix+'BlogRegistryController.Manageable_isManager_address');
		if(btn!=undefined)
			btn.onclick = this.Manageable_isManager_address;
		else console.log('Manageable_isManager_address widget not bound');
	}

	/**
	* Set the address.
	*/
	this.setAddress=function() {
		var _address = document.getElementById(self.prefix+'BlogRegistry_address');
		if(_address==null)return;

		self.BlogRegistry_instance = BlogRegistryContract.at(_address.value);
		self.contractAddress = _address.value;
		self._updateAttributes();
	}
	
	/**
	* Update attributes.
	*
	* prefix+'BlogRegistry_blogCount_value' - 
	* prefix+'BlogRegistry_mangerCount_value' - 
	**/
	this._updateAttributes=function () {
		if(this.instance===null) return;
		// update attributes
		var blogCount_res = self.instance.blogCount();
		var e = document.getElementById(self.prefix+'BlogRegistry_blogCount_value');
		if(blogCount_res!=null && e!=null)
			e.innerText = blogCount_res;
		else console.log(self.prefix+'BlogRegistry_blogCount_value not found');
		var mangerCount_res = self.instance.mangerCount();
		var e = document.getElementById(self.prefix+'BlogRegistry_mangerCount_value');
		if(mangerCount_res!=null && e!=null)
			e.innerText = mangerCount_res;
		else console.log(self.prefix+'BlogRegistry_mangerCount_value not found');
		var e = document.getElementById(self.prefix+'BlogRegistry_contract_attribute_blogs_input');
		if(e!=null){
			var _key = e.value;
			if(_key=='') return;
			var blogs_res = self.instance.blogs(_key);
			if(blogs_res!=null){
				var e1 = document.getElementById(self.prefix+'BlogRegistry_blogs_value');
				if(e1!=null)	
					e1.innerText = blogs_res;
			}}
		var e = document.getElementById(self.prefix+'BlogRegistry_contract_attribute_managers_input');
		if(e!=null){
			var _key = e.value;
			if(_key=='') return;
			var managers_res = self.instance.managers(_key);
			if(managers_res!=null){
				var e1 = document.getElementById(self.prefix+'BlogRegistry_managers_value');
				if(e1!=null)	
					e1.innerText = managers_res;
			}}
	}

	//call functions
	
	/**
	* Calls the contract function BlogRegistry_canAccess.
	*
	**/
	this.Manageable_canAccess=function() {
		var res = self.instance.canAccess();
		var e = document.getElementById(self.prefix+'Manageable_canAccess_res');
		if(res!=null && e!=null)
			e.innerText = res;
	}
	
	/**
	* Calls the contract function BlogRegistry_registerBlog.
	*
	* this.prefix+'BlogRegistry_registerBlog_string__name' -
	**/
	this.BlogRegistry_registerBlog_string=function() {
		var e = document.getElementById(self.prefix+'BlogRegistry_registerBlog_string__name');
		if(e!=null)
			var param__name = e.value;
		else console.log(self.prefix+'BlogRegistry_registerBlog_string__name not found');
		var res = self.instance.registerBlog(param__name);
		var e = document.getElementById(self.prefix+'BlogRegistry_registerBlog_string_res');
		if(res!=null && e!=null)
			e.innerText = res;
	}
	
	/**
	* Calls the contract function BlogRegistry_addManager.
	*
	* this.prefix+'Manageable_addManager_address__newManagerAddress' -
	**/
	this.Manageable_addManager_address=function() {
		var e = document.getElementById(self.prefix+'Manageable_addManager_address__newManagerAddress');
		if(e!=null)
			var param__newManagerAddress = e.value;
		else console.log(self.prefix+'Manageable_addManager_address__newManagerAddress not found');
		var res = self.instance.addManager(param__newManagerAddress);
	}
	
	/**
	* Calls the contract function BlogRegistry_removeManager.
	*
	* this.prefix+'Manageable_removeManager_address__managerAddress' -
	**/
	this.Manageable_removeManager_address=function() {
		var e = document.getElementById(self.prefix+'Manageable_removeManager_address__managerAddress');
		if(e!=null)
			var param__managerAddress = e.value;
		else console.log(self.prefix+'Manageable_removeManager_address__managerAddress not found');
		var res = self.instance.removeManager(param__managerAddress);
	}
	
	/**
	* Calls the contract function BlogRegistry_isManager.
	*
	* this.prefix+'Manageable_isManager_address__managerAddress' -
	**/
	this.Manageable_isManager_address=function() {
		var e = document.getElementById(self.prefix+'Manageable_isManager_address__managerAddress');
		if(e!=null)
			var param__managerAddress = e.value;
		else console.log(self.prefix+'Manageable_isManager_address__managerAddress not found');
		var res = self.instance.isManager(param__managerAddress);
		var e = document.getElementById(self.prefix+'Manageable_isManager_address_res');
		if(res!=null && e!=null)
			e.innerText = res;
	}
	
//delegated calls

}// end controller	

/**
* class as GlueCode BlogRegistryManager,
* uses prefix + 'GuiContainer' as target element.
* It combines a BlogRegistryController as 'c' and a BlogRegistryGuiFactory as 'g'.
**/
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
	this.eventlogPrefix = '';
	this.guiFunction = null;
	this.eventCallback = null;
	
	/**
	* adds the gui element to the given 'e' element
	**/
	this.addGui = function(e) {
		if(e==null)
			e = document.getElementById(this.containerId);
		if(e==null){
		console.log(this.containerId+' not found or :'+e);
		return;
		}
		var elemDiv = document.createElement('div');
		elemDiv.id= this.prefix +'BlogRegistry_gui';
		e.appendChild(elemDiv);
		if(this.guiFunction==null)
			elemDiv.innerHTML = this.createGui(this.g);
		else elemDiv.innerHTML = this.guiFunction(this.g);
		
		var e = document.getElementById(this.prefix+'BlogRegistry_address');
		if(e!=null)
			e.value = this.c.contractAddress;
		else 
			console.log(this.prefix+'BlogRegistry_address not found');
		this.c.bindGui();
	}	
	
	/**
	* clears the given element 'e'.
	**/
	this.clearGui = function(e){
		if(e==null)
			e = document.getElementById(this.containerId);
		e.innerHTML ='';
	}

	/**
	* Create the gui with the given 'guiFactory'. Places an sceleton arount it.
	* @return the gui txt used as innerHTML
	**/
	this.createGui = function(guifactory){
		var txt ='';
//Start of user code BlogRegistry_create_gui_js
		txt = txt + guifactory.createDefaultGui();
//End of user code
		return guifactory.createSeletonGui(txt);

	}

	/**
	* Create a small gui, only the attributes. Places an sceleton arount it.
	**/	
	this.createSmallGui = function(guifactory){
		var txt ='';
		txt = txt + guifactory.createAttributesGui();
		return guifactory.createSeletonGui(txt);

	}

	/**
	* Update the attributes.
	**/
	this.updateGui = function(){
		this.c._updateAttributes();
	}

	/**
	* Getter for the contract 'BlogRegistry' instance.
	**/
	this.getContract = function(){
		return this.c.instance;
	}

	/**
	* Watch for the contract events.
	* The events are stored in an element with the id this.eventlogPrefix+'eventLog'.
	**/
	this.watchEvents=function(){
	var event_NewBlog = contract.NewBlog({},{fromBlock: 0});
	var elp = this.eventlogPrefix;
	var callback = this.eventCallback;
	event_NewBlog.watch(function(error,result){
	if(!error){
		if(callback!=null)
			callback(result);

		}else
			console.log(error);	
	});
	}

}// end of manager

/**
* Manages a list of BlogRegistryManager uses the guid id to place the gui which is also the eventlogPrefix
*/
function BlogRegistryGuiMananger(guiId){
	this.prefix = guiId;
	this.managers=new Array();	//[];		
	this.guiFunction = null;
	this.eventCallback = null;
	
	/**
	* Add a contract to this manager.
	* @contract the web3 contract instance
	*/
	this.addManager = function(contract) {
		var m = new BlogRegistryManager(contract.address,contract,this.prefix);
		m.eventlogPrefix = this.prefix;
		m.eventCallback = this.eventCallback;
		m.watchEvents();
		if(this.guiFunction!=null)
			m.guiFunction = this.guiFunction;
		this.managers.push(m);
		//manager.addGui();
	}

	/**
	* Clears the element or the element with id 'prefix'.
	* @e an element
	*/
	this.clearGui = function(e){
		if(e==null)
			e = document.getElementById(this.prefix);
		if(e!==undefined)
			e.innerHTML ='';
	}
		
	/**
	* Displays all guis of the managed contracts.
	* @e an element
	*/
	this.displayGui = function(e){
		if(e==null)
			e = document.getElementById(this.prefix);
		if(e==undefined) return;
		for (i in this.managers) {
			var manager = this.managers[i] ;
			var elemDiv = document.createElement('div');
			elemDiv.id= manager.prefix + 'GuiContainer';//'BlogRegistry_gui';
			e.appendChild(elemDiv);
			if(this.guiFunction==null)
				elemDiv.innerHTML = manager.createGui(manager.g);
			else elemDiv.innerHTML = this.guiFunction(manager.g);
			manager.c.bindGui();
		}
	}
	/**
	* Displays a simple gui.
	*/
	this.displaySimpleGui = function(){
		for (i in this.managers) {
			var manager = this.managers[i] ;
			manager.addGui(null);
		}
	}
	/**
	* Update the gui.
	*/
	this.updateGui = function(){
		for (i in this.managers) {
			this.managers[i].updateGui();
		}
//		console.log('update');
	}
}// end of gui mananger

/**
* Deploys the contract.
* Each constructor is available.
**/
function BlogRegistryDeployment(guiId){

//Start of user code BlogRegistry_deployment_js
//TODO: implement
//End of user code
}
//Start of user code custom_BlogRegistry_js
//TODO: implement
//End of user code

/**
* A class to manage a single page dapp.
* The PublishingPage object uses the managers to display the gui.
**/
function PublishingPage(prefix) {
	this.prefix=prefix;
	//Start of user code page_publishing_attributes
	this.blogs = new ShortBlogGuiMananger(prefix);
	this.registry = new BlogRegistryGuiMananger(prefix);

	//End of user code

	
	/**
	* Places the default gui in the page.
	**/
	this.placeDefaultGui=function() {
	this.createDefaultGui();
	}
/**
* Create the default Gui.
* Use this method to customize the gui.
**/
this.createDefaultGui=function() {
	//Start of user code page_Publishing_create_default_gui_functions
	this.clearGui();
	this.registry.displayGui();
	this.registry.updateGui();
	this.blogs.displayGui();
	this.blogs.updateGui();
	
	var self = this;
	blogs = this.blogs;
	//End of user code
}
	//Start of user code page_Publishing_functions

	this.eventHandle=function(result){
		console.log('Event:'+result);
		var bAddress = result.args.blogAddress;
		blogs.addManager(ShortBlogContract.at(bAddress));	
		blogs.displayGui(null);
	}

	this.registry.eventCallback = this.eventHandle;
	
	
this.readDataFromContract=function() {
	for (i in this.registry.managers) {
		var manager = this.registry.managers[i];
		var count = manager.c.instance.blogCount();
		for (var int = 0; int < count; int++) {
			var bAddress = manager.c.instance.blogs(int);
			this.blogs.addManager(ShortBlogContract.at(bAddress));			
		}
	}
	


this.clearGui=function(){
	this.registry.clearGui();
	this.blogs.clearGui();


	//End of user code

}// end of PublishingPage
