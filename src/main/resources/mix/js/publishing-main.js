// file header
// contractVariable for ShortBlog
var ShortBlogContract = web3.eth.contract([
{"constant":true,"inputs":[],"name":"messageCount","outputs":[{"name":"","type":"uint256"}],"type":"function"},
{"constant":true,"inputs":[],"name":"lastMessageDate","outputs":[{"name":"","type":"uint256"}],"type":"function"},
{"constant":true,"inputs":[],"name":"mangerCount","outputs":[{"name":"","type":"uint256"}],"type":"function"},
{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"type":"function"},
{"constant": true,"inputs": [{"name": "","type": "uint256"}],"name": "messages","outputs": [
{ "name": "message", "type": "string"}
,{ "name": "date", "type": "uint256"}
,{ "name": "id", "type": "uint256"}
,{ "name": "sender", "type": "address"}
,{ "name": "blockNumber", "type": "uint256"}
,{ "name": "hashValue", "type": "string"}
,{ "name": "externalResource", "type": "string"}
],"type": "function"	},
{"constant": true,"inputs": [{"name": "","type": "address"}],"name": "managers","outputs": [
{ "name": "", "type": "bool"}
],"type": "function"	},
{ "constant": false,
    "inputs": [{"name": "_newManagerAddress","type": "address"}],    
    "name": "addManager",
    "outputs": [],
    "type": "function" }
,{ "constant": false,
    "inputs": [{"name": "message","type": "string"},{"name": "hash","type": "string"},{"name": "er","type": "string"}],    
    "name": "sendMessage",
    "outputs": [],
    "type": "function" }
,{ "constant": false,
    "inputs": [{"name": "_managerAddress","type": "address"}],    
    "name": "removeManager",
    "outputs": [],
    "type": "function" }
,{ "constant": true,
    "inputs": [{"name": "_managerAddress","type": "address"}],    
    "name": "isManager",
    "outputs": [{"name": "","type": "bool"}],
    "type": "function" }
,
  { "anonymous": false,
    "inputs": 
	[
		{"indexed": false,
		 "name": "message",
         "type": "string"}
,		{"indexed": false,
		 "name": "messageId",
         "type": "uint256"}
,		{"indexed": false,
		 "name": "messageSender",
         "type": "address"}
,		{"indexed": false,
		 "name": "messageHashValue",
         "type": "string"}
,		{"indexed": false,
		 "name": "externalResource",
         "type": "string"}
	],    
    "name": "NewMessage",
    "type": "event"  }
]);   
// contractVariable for BlogRegistry
var BlogRegistryContract = web3.eth.contract([
{"constant":true,"inputs":[],"name":"blogCount","outputs":[{"name":"","type":"uint256"}],"type":"function"},
{"constant":true,"inputs":[],"name":"mangerCount","outputs":[{"name":"","type":"uint256"}],"type":"function"},
{"constant": true,"inputs": [{"name": "","type": "uint256"}],"name": "blogs","outputs": [
{ "name": "", "type": "address"}
],"type": "function"	},
{"constant": true,"inputs": [{"name": "","type": "address"}],"name": "managers","outputs": [
{ "name": "", "type": "bool"}
],"type": "function"	},
{ "constant": false,
    "inputs": [{"name": "_name","type": "string"}],    
    "name": "registerBlog",
    "outputs": [{"name": "","type": "address"}],
    "type": "function" }
,{ "constant": false,
    "inputs": [{"name": "_newManagerAddress","type": "address"}],    
    "name": "addManager",
    "outputs": [],
    "type": "function" }
,{ "constant": false,
    "inputs": [{"name": "_managerAddress","type": "address"}],    
    "name": "removeManager",
    "outputs": [],
    "type": "function" }
,{ "constant": true,
    "inputs": [{"name": "_managerAddress","type": "address"}],    
    "name": "isManager",
    "outputs": [{"name": "","type": "bool"}],
    "type": "function" }
,
  { "anonymous": false,
    "inputs": 
	[
		{"indexed": false,
		 "name": "index",
         "type": "uint256"}
,		{"indexed": false,
		 "name": "name",
         "type": "string"}
,		{"indexed": false,
		 "name": "blogAddress",
         "type": "address"}
	],    
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
	* Get the mapped value for a key.
	*/
	this.getManagers=function(key) {
		return contract.managers(key);
	}
	/**
	* Get the mapped value for a key.
	*/
	this.getMessages=function(key) {
		return contract.messages(key);
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
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'ShortBlog_messageCount_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'ShortBlog_contract_attribute_lastMessageDate"> lastMessageDate:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'ShortBlog_lastMessageDate_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'ShortBlog_contract_attribute_mangerCount"> mangerCount:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'ShortBlog_mangerCount_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'ShortBlog_contract_attribute_name"> name:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'ShortBlog_name_value"> </span>'
+		'		    </div>'
+		'		'
+		'		<div class="Value_Mapping" id="'+this.prefix+'ShortBlog_contract_attribute_managers">mapping  managers:'
+		'				<input class="function_input" type="text" id="'+this.prefix+'ShortBlog_contract_attribute_managers_input">(address)'
+		'		    	<div class="Mapping_value" id="'+this.prefix+'ShortBlog_contract_attribute_address"> bool:'
+		'		      		<span class="contract_attribute_value" id="'+this.prefix+'ShortBlog_managers_value"> </span>'
+		'		    	</div>'
+		'		  </div>'
+		'		<div class="Struct_Mapping" id="'+this.prefix+'Struc_ShortBlog_contract_attribute_messages">struc mapping  messages:'
+		'				<input class="function_input" type="number" id="'+this.prefix+'ShortBlog_contract_attribute_messages_input">(uint)'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'ShortBlog_contract_attribute_messages_message"> message:'
+		'		      		<span class="Struct_attribute_value" id="'+this.prefix+'ShortBlog_messages_message_value"> </span>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'ShortBlog_contract_attribute_messages_date"> date:'
+		'		      		<span class="Struct_attribute_value" id="'+this.prefix+'ShortBlog_messages_date_value"> </span>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'ShortBlog_contract_attribute_messages_id"> id:'
+		'		      		<span class="Struct_attribute_value" id="'+this.prefix+'ShortBlog_messages_id_value"> </span>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'ShortBlog_contract_attribute_messages_sender"> sender:'
+		'		      		<span class="Struct_attribute_value" id="'+this.prefix+'ShortBlog_messages_sender_value"> </span>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'ShortBlog_contract_attribute_messages_blockNumber"> blockNumber:'
+		'		      		<span class="Struct_attribute_value" id="'+this.prefix+'ShortBlog_messages_blockNumber_value"> </span>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'ShortBlog_contract_attribute_messages_hashValue"> hashValue:'
+		'		      		<span class="Struct_attribute_value" id="'+this.prefix+'ShortBlog_messages_hashValue_value"> </span>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'ShortBlog_contract_attribute_messages_externalResource"> externalResource:'
+		'		      		<span class="Struct_attribute_value" id="'+this.prefix+'ShortBlog_messages_externalResource_value"> </span>'
+		'		    	</div>'
+		'		  </div>'
+		'		    <button class="function_btn" id="'+this.prefix+'ShortBlog_updateAttributes" onclick="'+this.prefix+'ShortBlogController._updateAttributes()">update ShortBlog attributes</button>'
+		'		  </div>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'ShortBlog_contract_function_Manageable_addManager_address">'
+		'		<legend>addManager</legend>'
+		'			  <label class="function_parameter" for="Manageable_addManager_address__newManagerAddress">_newManagerAddress</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Manageable_addManager_address__newManagerAddress"'
+		'				  placeholder="_newManagerAddress"/>'
+		'			<button class="function_btn" id="'+this.prefix+'ShortBlogController.Manageable_addManager_address" onclick="'+this.prefix+'ShortBlogController.Manageable_addManager_address()">addManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_addManager_address_res"></div>'
+		'		  </fieldset>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'ShortBlog_contract_function_ShortBlog_sendMessage_string_string_string">'
+		'		<legend>sendMessage</legend>'
+		'			  <label class="function_parameter" for="ShortBlog_sendMessage_string_string_string_message">message</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'ShortBlog_sendMessage_string_string_string_message"'
+		'				  placeholder="message"/>'
+		'			  <label class="function_parameter" for="ShortBlog_sendMessage_string_string_string_hash">hash</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'ShortBlog_sendMessage_string_string_string_hash"'
+		'				  placeholder="hash"/>'
+		'			  <label class="function_parameter" for="ShortBlog_sendMessage_string_string_string_er">er</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'ShortBlog_sendMessage_string_string_string_er"'
+		'				  placeholder="er"/>'
+		'			<button class="function_btn" id="'+this.prefix+'ShortBlogController.ShortBlog_sendMessage_string_string_string" onclick="'+this.prefix+'ShortBlogController.ShortBlog_sendMessage_string_string_string()">sendMessage</button>'
+		'			<div class="function_result" id="'+this.prefix+'ShortBlog_sendMessage_string_string_string_res"></div>'
+		'		  </fieldset>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'ShortBlog_contract_function_Manageable_removeManager_address">'
+		'		<legend>removeManager</legend>'
+		'			  <label class="function_parameter" for="Manageable_removeManager_address__managerAddress">_managerAddress</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Manageable_removeManager_address__managerAddress"'
+		'				  placeholder="_managerAddress"/>'
+		'			<button class="function_btn" id="'+this.prefix+'ShortBlogController.Manageable_removeManager_address" onclick="'+this.prefix+'ShortBlogController.Manageable_removeManager_address()">removeManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_removeManager_address_res"></div>'
+		'		  </fieldset>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'ShortBlog_contract_function_Manageable_isManager_address">'
+		'		<legend>isManager</legend>'
+		'			  <label class="function_parameter" for="Manageable_isManager_address__managerAddress">_managerAddress</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Manageable_isManager_address__managerAddress"'
+		'				  placeholder="_managerAddress"/>'
+		'			<button class="function_btn" id="'+this.prefix+'ShortBlogController.Manageable_isManager_address" onclick="'+this.prefix+'ShortBlogController.Manageable_isManager_address()">isManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_isManager_address_res"></div>'
+		'		  </fieldset>'
+		'		'
+		'		</div>'
;
	}

	/**
	* Create the gui for the attributes.
	*/
	this.createAttributesGui=function() {
		return 		'    <div class="contract_attribute" id="'+this.prefix+'ShortBlog_contract_attribute_messageCount"> messageCount:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'ShortBlog_messageCount_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'ShortBlog_contract_attribute_lastMessageDate"> lastMessageDate:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'ShortBlog_lastMessageDate_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'ShortBlog_contract_attribute_mangerCount"> mangerCount:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'ShortBlog_mangerCount_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'ShortBlog_contract_attribute_name"> name:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'ShortBlog_name_value"> </span>'
+		'		    </div>'
+		'		'
;
	}

	/**
	* Create the gui.
	*/
	this.createPlainGui=function(){
		return this.createAttributesGui()
				+ this.createManageable_addManager_addressGui
				+ this.createShortBlog_sendMessage_string_string_stringGui
				+ this.createManageable_removeManager_addressGui
				+ this.createManageable_isManager_addressGui
				;
	}

	/**
	* Create the gui for the function addManager.
	*/
	this.createManageable_addManager_addressGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'ShortBlog_contract_function_Manageable_addManager_address">'
+		'		<legend>addManager</legend>'
+		'			  <label class="function_parameter" for="Manageable_addManager_address__newManagerAddress">_newManagerAddress</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Manageable_addManager_address__newManagerAddress"'
+		'				  placeholder="_newManagerAddress"/>'
+		'			<button class="function_btn" id="'+this.prefix+'ShortBlogController.Manageable_addManager_address" onclick="'+this.prefix+'ShortBlogController.Manageable_addManager_address()">addManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_addManager_address_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the function sendMessage.
	*/
	this.createShortBlog_sendMessage_string_string_stringGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'ShortBlog_contract_function_ShortBlog_sendMessage_string_string_string">'
+		'		<legend>sendMessage</legend>'
+		'			  <label class="function_parameter" for="ShortBlog_sendMessage_string_string_string_message">message</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'ShortBlog_sendMessage_string_string_string_message"'
+		'				  placeholder="message"/>'
+		'			  <label class="function_parameter" for="ShortBlog_sendMessage_string_string_string_hash">hash</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'ShortBlog_sendMessage_string_string_string_hash"'
+		'				  placeholder="hash"/>'
+		'			  <label class="function_parameter" for="ShortBlog_sendMessage_string_string_string_er">er</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'ShortBlog_sendMessage_string_string_string_er"'
+		'				  placeholder="er"/>'
+		'			<button class="function_btn" id="'+this.prefix+'ShortBlogController.ShortBlog_sendMessage_string_string_string" onclick="'+this.prefix+'ShortBlogController.ShortBlog_sendMessage_string_string_string()">sendMessage</button>'
+		'			<div class="function_result" id="'+this.prefix+'ShortBlog_sendMessage_string_string_string_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the function removeManager.
	*/
	this.createManageable_removeManager_addressGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'ShortBlog_contract_function_Manageable_removeManager_address">'
+		'		<legend>removeManager</legend>'
+		'			  <label class="function_parameter" for="Manageable_removeManager_address__managerAddress">_managerAddress</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Manageable_removeManager_address__managerAddress"'
+		'				  placeholder="_managerAddress"/>'
+		'			<button class="function_btn" id="'+this.prefix+'ShortBlogController.Manageable_removeManager_address" onclick="'+this.prefix+'ShortBlogController.Manageable_removeManager_address()">removeManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_removeManager_address_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the function isManager.
	*/
	this.createManageable_isManager_addressGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'ShortBlog_contract_function_Manageable_isManager_address">'
+		'		<legend>isManager</legend>'
+		'			  <label class="function_parameter" for="Manageable_isManager_address__managerAddress">_managerAddress</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Manageable_isManager_address__managerAddress"'
+		'				  placeholder="_managerAddress"/>'
+		'			<button class="function_btn" id="'+this.prefix+'ShortBlogController.Manageable_isManager_address" onclick="'+this.prefix+'ShortBlogController.Manageable_isManager_address()">isManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_isManager_address_res"></div>'
+		'		  </fieldset>'
;
	}
	/**
	* Create the gui for the messages struct element.
	*/
	this.createmessagesStructGui=function() {
		return 		'<div class="Struct_Mapping" id="'+this.prefix+'Struc_ShortBlog_contract_attribute_messages">struc mapping  messages:'
+		'				<input class="function_input" type="number" id="'+this.prefix+'ShortBlog_contract_attribute_messages_input">(uint)'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'ShortBlog_contract_attribute_messages_message"> message:'
+		'		      		<span class="Struct_attribute_value" id="'+this.prefix+'ShortBlog_messages_message_value"> </span>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'ShortBlog_contract_attribute_messages_date"> date:'
+		'		      		<span class="Struct_attribute_value" id="'+this.prefix+'ShortBlog_messages_date_value"> </span>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'ShortBlog_contract_attribute_messages_id"> id:'
+		'		      		<span class="Struct_attribute_value" id="'+this.prefix+'ShortBlog_messages_id_value"> </span>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'ShortBlog_contract_attribute_messages_sender"> sender:'
+		'		      		<span class="Struct_attribute_value" id="'+this.prefix+'ShortBlog_messages_sender_value"> </span>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'ShortBlog_contract_attribute_messages_blockNumber"> blockNumber:'
+		'		      		<span class="Struct_attribute_value" id="'+this.prefix+'ShortBlog_messages_blockNumber_value"> </span>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'ShortBlog_contract_attribute_messages_hashValue"> hashValue:'
+		'		      		<span class="Struct_attribute_value" id="'+this.prefix+'ShortBlog_messages_hashValue_value"> </span>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'ShortBlog_contract_attribute_messages_externalResource"> externalResource:'
+		'		      		<span class="Struct_attribute_value" id="'+this.prefix+'ShortBlog_messages_externalResource_value"> </span>'
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
	/**
	* Create the gui for the function Struc ShortBlog-messages.
	*/
	this.createStruc_ShortBlog_contract_attribute_messagesGui=function(struct) {
		return '<div class="Struct_Mapping" id='+this.prefix+'"Struc_ShortBlog_contract_attribute_messages">'
    		+'<div class="Struct_attribute" id='+this.prefix+'"ShortBlog_contract_attribute_messages_message"> message:'
      		+'	<span class="Struct_attribute_value" id='+this.prefix+'"ShortBlog_messages_message_value">'+struct.message()+'</span>'
    		+'</div>'
    		+'<div class="Struct_attribute" id='+this.prefix+'"ShortBlog_contract_attribute_messages_date"> date:'
      		+'	<span class="Struct_attribute_value" id='+this.prefix+'"ShortBlog_messages_date_value">'+struct.date()+'</span>'
    		+'</div>'
    		+'<div class="Struct_attribute" id='+this.prefix+'"ShortBlog_contract_attribute_messages_id"> id:'
      		+'	<span class="Struct_attribute_value" id='+this.prefix+'"ShortBlog_messages_id_value">'+struct.id()+'</span>'
    		+'</div>'
    		+'<div class="Struct_attribute" id='+this.prefix+'"ShortBlog_contract_attribute_messages_sender"> sender:'
      		+'	<span class="Struct_attribute_value" id='+this.prefix+'"ShortBlog_messages_sender_value">'+struct.sender()+'</span>'
    		+'</div>'
    		+'<div class="Struct_attribute" id='+this.prefix+'"ShortBlog_contract_attribute_messages_blockNumber"> blockNumber:'
      		+'	<span class="Struct_attribute_value" id='+this.prefix+'"ShortBlog_messages_blockNumber_value">'+struct.blockNumber()+'</span>'
    		+'</div>'
    		+'<div class="Struct_attribute" id='+this.prefix+'"ShortBlog_contract_attribute_messages_hashValue"> hashValue:'
      		+'	<span class="Struct_attribute_value" id='+this.prefix+'"ShortBlog_messages_hashValue_value">'+struct.hashValue()+'</span>'
    		+'</div>'
    		+'<div class="Struct_attribute" id='+this.prefix+'"ShortBlog_contract_attribute_messages_externalResource"> externalResource:'
      		+'	<span class="Struct_attribute_value" id='+this.prefix+'"ShortBlog_messages_externalResource_value">'+struct.externalResource()+'</span>'
    		+'</div>'
  		+'</div>';
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
			if(_key!='') {
			var managers_res = self.instance.managers(_key);
			if(managers_res!=null){
				var e1 = document.getElementById(self.prefix+'ShortBlog_managers_value');
				if(e1!=null)	
					e1.innerText = managers_res;
			}}}
		var e = document.getElementById(self.prefix+'ShortBlog_contract_attribute_messages_input');
		if(e!=null){
			var _key = e.value;
			if(_key!='') {
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
			}}}
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
	this.eventNewMessage = null;
	
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
	var event_NewMessage = this.getContract().NewMessage({},{fromBlock: 0});
	var elp = this.eventlogPrefix;
	var callback = this.eventNewMessage;
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
	this.eventNewMessage = null;
	this.managerMap = {};
	
	/**
	* Add a contract to this manager.
	* @contract the web3 contract instance
	*/
	this.addManager = function(contract) {
		var m = new ShortBlogManager(contract.address,contract,this.prefix);
		m.eventlogPrefix = this.prefix;
		m.eventNewMessage = this.eventNewMessage;
		m.watchEvents();
		if(this.guiFunction!=null)
			m.guiFunction = this.guiFunction;
		this.managers.push(m);
		this.managerMap[contract.address] = m;
	}

	/**
	 * Changes the gui function for all managers.
	 */
	this.changeGuiFunction =  function(guiFunction){
		for (i in this.managers) {
			var manager = this.managers[i] ;
			manager.guiFunction = guiFunction;
		}
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
	this.prefix = guiId;
//Start of user code ShortBlog_deployment_attributes_js
//TODO: implement
//End of user code


	/**
	* Construct ShortBlog.
	**/
	this.deployShortBlog_ShortBlog_string = function(account, code, providedGas, _name){
//		var c = ShortBlog.new( _name,{
//			from: account,
//			data: code,
//			gas:  providedGas
//		});
		return c;
	}
	
	/**
	* The default deployer function.
	**/
	this.deployDefault = function(){
		//Start of user code ShortBlog_deployDefault
		//TODO: implement
		//End of user code
	}

//Start of user code ShortBlog_deployment_js
//TODO: implement
//End of user code
}
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
	* Get the mapped value for a key.
	*/
	this.getBlogs=function(key) {
		return contract.blogs(key);
	}
	/**
	* Get the mapped value for a key.
	*/
	this.getManagers=function(key) {
		return contract.managers(key);
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
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'BlogRegistry_blogCount_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'BlogRegistry_contract_attribute_mangerCount"> mangerCount:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'BlogRegistry_mangerCount_value"> </span>'
+		'		    </div>'
+		'		'
+		'		<div class="Value_Mapping" id="'+this.prefix+'BlogRegistry_contract_attribute_blogs">mapping  blogs:'
+		'				<input class="function_input" type="number" id="'+this.prefix+'BlogRegistry_contract_attribute_blogs_input">(uint)'
+		'		    	<div class="Mapping_value" id="'+this.prefix+'BlogRegistry_contract_attribute_uint"> ShortBlog:'
+		'		      		<span class="contract_attribute_value" id="'+this.prefix+'BlogRegistry_blogs_value"> </span>'
+		'		    	</div>'
+		'		  </div>'
+		'		<div class="Value_Mapping" id="'+this.prefix+'BlogRegistry_contract_attribute_managers">mapping  managers:'
+		'				<input class="function_input" type="text" id="'+this.prefix+'BlogRegistry_contract_attribute_managers_input">(address)'
+		'		    	<div class="Mapping_value" id="'+this.prefix+'BlogRegistry_contract_attribute_address"> bool:'
+		'		      		<span class="contract_attribute_value" id="'+this.prefix+'BlogRegistry_managers_value"> </span>'
+		'		    	</div>'
+		'		  </div>'
+		'		    <button class="function_btn" id="'+this.prefix+'BlogRegistry_updateAttributes" onclick="'+this.prefix+'BlogRegistryController._updateAttributes()">update BlogRegistry attributes</button>'
+		'		  </div>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'BlogRegistry_contract_function_BlogRegistry_registerBlog_string">'
+		'		<legend>registerBlog</legend>'
+		'			  <label class="function_parameter" for="BlogRegistry_registerBlog_string__name">_name</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'BlogRegistry_registerBlog_string__name"'
+		'				  placeholder="_name"/>'
+		'			<button class="function_btn" id="'+this.prefix+'BlogRegistryController.BlogRegistry_registerBlog_string" onclick="'+this.prefix+'BlogRegistryController.BlogRegistry_registerBlog_string()">registerBlog</button>'
+		'			<div class="function_result" id="'+this.prefix+'BlogRegistry_registerBlog_string_res"></div>'
+		'		  </fieldset>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'BlogRegistry_contract_function_Manageable_addManager_address">'
+		'		<legend>addManager</legend>'
+		'			  <label class="function_parameter" for="Manageable_addManager_address__newManagerAddress">_newManagerAddress</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Manageable_addManager_address__newManagerAddress"'
+		'				  placeholder="_newManagerAddress"/>'
+		'			<button class="function_btn" id="'+this.prefix+'BlogRegistryController.Manageable_addManager_address" onclick="'+this.prefix+'BlogRegistryController.Manageable_addManager_address()">addManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_addManager_address_res"></div>'
+		'		  </fieldset>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'BlogRegistry_contract_function_Manageable_removeManager_address">'
+		'		<legend>removeManager</legend>'
+		'			  <label class="function_parameter" for="Manageable_removeManager_address__managerAddress">_managerAddress</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Manageable_removeManager_address__managerAddress"'
+		'				  placeholder="_managerAddress"/>'
+		'			<button class="function_btn" id="'+this.prefix+'BlogRegistryController.Manageable_removeManager_address" onclick="'+this.prefix+'BlogRegistryController.Manageable_removeManager_address()">removeManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_removeManager_address_res"></div>'
+		'		  </fieldset>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'BlogRegistry_contract_function_Manageable_isManager_address">'
+		'		<legend>isManager</legend>'
+		'			  <label class="function_parameter" for="Manageable_isManager_address__managerAddress">_managerAddress</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Manageable_isManager_address__managerAddress"'
+		'				  placeholder="_managerAddress"/>'
+		'			<button class="function_btn" id="'+this.prefix+'BlogRegistryController.Manageable_isManager_address" onclick="'+this.prefix+'BlogRegistryController.Manageable_isManager_address()">isManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_isManager_address_res"></div>'
+		'		  </fieldset>'
+		'		'
+		'		</div>'
;
	}

	/**
	* Create the gui for the attributes.
	*/
	this.createAttributesGui=function() {
		return 		'    <div class="contract_attribute" id="'+this.prefix+'BlogRegistry_contract_attribute_blogCount"> blogCount:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'BlogRegistry_blogCount_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'BlogRegistry_contract_attribute_mangerCount"> mangerCount:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'BlogRegistry_mangerCount_value"> </span>'
+		'		    </div>'
+		'		'
;
	}

	/**
	* Create the gui.
	*/
	this.createPlainGui=function(){
		return this.createAttributesGui()
				+ this.createBlogRegistry_registerBlog_stringGui
				+ this.createManageable_addManager_addressGui
				+ this.createManageable_removeManager_addressGui
				+ this.createManageable_isManager_addressGui
				;
	}

	/**
	* Create the gui for the function registerBlog.
	*/
	this.createBlogRegistry_registerBlog_stringGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'BlogRegistry_contract_function_BlogRegistry_registerBlog_string">'
+		'		<legend>registerBlog</legend>'
+		'			  <label class="function_parameter" for="BlogRegistry_registerBlog_string__name">_name</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'BlogRegistry_registerBlog_string__name"'
+		'				  placeholder="_name"/>'
+		'			<button class="function_btn" id="'+this.prefix+'BlogRegistryController.BlogRegistry_registerBlog_string" onclick="'+this.prefix+'BlogRegistryController.BlogRegistry_registerBlog_string()">registerBlog</button>'
+		'			<div class="function_result" id="'+this.prefix+'BlogRegistry_registerBlog_string_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the function addManager.
	*/
	this.createManageable_addManager_addressGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'BlogRegistry_contract_function_Manageable_addManager_address">'
+		'		<legend>addManager</legend>'
+		'			  <label class="function_parameter" for="Manageable_addManager_address__newManagerAddress">_newManagerAddress</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Manageable_addManager_address__newManagerAddress"'
+		'				  placeholder="_newManagerAddress"/>'
+		'			<button class="function_btn" id="'+this.prefix+'BlogRegistryController.Manageable_addManager_address" onclick="'+this.prefix+'BlogRegistryController.Manageable_addManager_address()">addManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_addManager_address_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the function removeManager.
	*/
	this.createManageable_removeManager_addressGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'BlogRegistry_contract_function_Manageable_removeManager_address">'
+		'		<legend>removeManager</legend>'
+		'			  <label class="function_parameter" for="Manageable_removeManager_address__managerAddress">_managerAddress</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Manageable_removeManager_address__managerAddress"'
+		'				  placeholder="_managerAddress"/>'
+		'			<button class="function_btn" id="'+this.prefix+'BlogRegistryController.Manageable_removeManager_address" onclick="'+this.prefix+'BlogRegistryController.Manageable_removeManager_address()">removeManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_removeManager_address_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the function isManager.
	*/
	this.createManageable_isManager_addressGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'BlogRegistry_contract_function_Manageable_isManager_address">'
+		'		<legend>isManager</legend>'
+		'			  <label class="function_parameter" for="Manageable_isManager_address__managerAddress">_managerAddress</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Manageable_isManager_address__managerAddress"'
+		'				  placeholder="_managerAddress"/>'
+		'			<button class="function_btn" id="'+this.prefix+'BlogRegistryController.Manageable_isManager_address" onclick="'+this.prefix+'BlogRegistryController.Manageable_isManager_address()">isManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Manageable_isManager_address_res"></div>'
+		'		  </fieldset>'
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
			if(_key!='') {
			var blogs_res = self.instance.blogs(_key);
			if(blogs_res!=null){
				var e1 = document.getElementById(self.prefix+'BlogRegistry_blogs_value');
				if(e1!=null)	
					e1.innerText = blogs_res;
			}}}
		var e = document.getElementById(self.prefix+'BlogRegistry_contract_attribute_managers_input');
		if(e!=null){
			var _key = e.value;
			if(_key!='') {
			var managers_res = self.instance.managers(_key);
			if(managers_res!=null){
				var e1 = document.getElementById(self.prefix+'BlogRegistry_managers_value');
				if(e1!=null)	
					e1.innerText = managers_res;
			}}}
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
	this.eventNewBlog = null;
	
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
	var event_NewBlog = this.getContract().NewBlog({},{fromBlock: 0});
	var elp = this.eventlogPrefix;
	var callback = this.eventNewBlog;
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
	this.eventNewBlog = null;
	this.managerMap = {};
	
	/**
	* Add a contract to this manager.
	* @contract the web3 contract instance
	*/
	this.addManager = function(contract) {
		var m = new BlogRegistryManager(contract.address,contract,this.prefix);
		m.eventlogPrefix = this.prefix;
		m.eventNewBlog = this.eventNewBlog;
		m.watchEvents();
		if(this.guiFunction!=null)
			m.guiFunction = this.guiFunction;
		this.managers.push(m);
		this.managerMap[contract.address] = m;
	}

	/**
	 * Changes the gui function for all managers.
	 */
	this.changeGuiFunction =  function(guiFunction){
		for (i in this.managers) {
			var manager = this.managers[i] ;
			manager.guiFunction = guiFunction;
		}
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
	this.prefix = guiId;
//Start of user code BlogRegistry_deployment_attributes_js
//TODO: implement
//End of user code

	
	/**
	* The default deployer function.
	**/
	this.deployDefault = function(){
		//Start of user code BlogRegistry_deployDefault
		//TODO: implement
		//End of user code
	}

//Start of user code BlogRegistry_deployment_js
//TODO: implement
//End of user code
}

/**
* A class to manage a single page dapp.
* The PublishingPage object uses the managers to display the gui.
**/
function PublishingPage(prefix) {
	this.prefix=prefix;
	//Start of user code page_publishing_attributes
	this.blogs = new ShortBlogGuiMananger(prefix);
	this.registry = new BlogRegistryGuiMananger(prefix);
	var self = this;
	blogs = this.blogs;

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
	
	this.sbguif = new ShortBlogGuiFactory();
	
	//End of user code
}
	//Start of user code page_Publishing_functions

	this.eventHandle=function(result){
		var bAddress = result.args.blogAddress;
//		var m = blogs.addManager(ShortBlogContract.at(bAddress));	
		console.log('Event:'+bAddress);
		;
		var event_NewMessage = ShortBlogContract.at(bAddress).NewMessage({},{fromBlock: 0});
		event_NewMessage.watch(function(error,result){
			if(!error){
				
					console.log(result);	
			}});

//		m.addGui();
//		m.updateGui();
	}

	this.registry.eventCallback = this.eventHandle;
	
	this.blogEventHandle=function(result){
		var a = new ShortBlogGuiFactory();
		var txt = a.createNewMessageLogDataGui("", "", "", 
				result.args.message, result.args.messageId, 
				result.args.messageSender, result.args.messageHashValue, 
				result.args.externalResource);
	}
	this.blogs.eventCallback = this.blogEventHandle;
	
	
this.readDataFromContract=function() {
	for (i in this.registry.managers) {
		var manager = this.registry.managers[i];
		var count = manager.c.instance.blogCount();
		for (var int = 0; int < count; int++) {
			var bAddress = manager.c.instance.blogs(int);
			console.log('added sb:'+bAddress);
			this.blogs.addManager(ShortBlogContract.at(bAddress));
		}
	}}

this.blogGui=function(guiF){
	console.log('display user gui'+guiF.prefix);
	
	var txt = 		
			'		    <div class="contract_attribute" id="'+guiF.prefix+'ShortBlog_contract_attribute_name">'
	+		'		      <h3><div class="contract_attribute_value" id="'+guiF.prefix+'ShortBlog_name_value"> </div></h3>'
	+		'		    </div>'
	+'    <div class="contract_attribute" id="'+guiF.prefix+'ShortBlog_contract_attribute_messageCount"> messageCount:'
	+		'		      <span class="contract_attribute_value" id="'+guiF.prefix+'ShortBlog_messageCount_value"> </span>'
	+		'		    </div>'
	+		'		    <div class="contract_attribute" id="'+guiF.prefix+'ShortBlog_contract_attribute_lastMessageDate"> lastMessageDate:'
	+		'		      <span class="contract_attribute_value" id="'+guiF.prefix+'ShortBlog_lastMessageDate_value"> </span>'
	+		'		    </div>'
	+		'		    <div class="contract_attribute" id="'+guiF.prefix+'ShortBlog_contract_attribute_mangerCount"> mangerCount:'
	+		'		      <span class="contract_attribute_value" id="'+guiF.prefix+'ShortBlog_mangerCount_value"> </span>'
	+		'		    </div>'
	+		'		'
//	+guiF.createmessagesStructGui(guiF)
//	+		'		    <button id="'+guiF.prefix+'ShortBlog_updateAttributes" onclick="'+guiF.prefix+'ShortBlogController._updateAttributes()">update ShortBlog attributes</button>'

//+ guiF.createShortBlog_sendMessage_string_string_stringGui(guiF)
		
		//guiF.createAttributesGui()+
	+'<div id="'+guiF.prefix+'eventLog" ></div>';
	return guiF.createSeletonGui(txt); }

//this.registry.guiFunction = this.displayUserGui;
this.blogs.guiFunction = this.blogGui;


this.clearGui=function(){
	this.registry.clearGui();
	this.blogs.clearGui();}


	//End of user code

}// end of PublishingPage

//Start of user code Publishing_custom_functions
function PublishingReadPage(prefix) {
	this.prefix=prefix;
	this.blogs = new ShortBlogGuiMananger(prefix);
	this.registry = new BlogRegistryGuiMananger(prefix);
	this.gf = new BlogRegistryGuiFactory();
	this.shgf = new ShortBlogGuiFactory();
	this.model = new BlogRegistryModel(null);
	
	var self = this;
	
	this.setInnerHtml=function(txt,_id){
		e = document.getElementById(_id);
		if(e!==undefined && e!==null){
			var elemDiv = document.createElement('div');
			elemDiv.innerHTML = txt;
			e.appendChild(elemDiv);
		} else
			console.log('element with id not found:'+_id);
		
	}
	
	
	this.eventHandle=function(result){
		console.log('add a new blog:'+result);
		var bAddress = result.args.blogAddress;
//		self.blogs.addManager(ShortBlogContract.at(bAddress));
		var txt = self.gf.createNewBlogLogDataGui("", "", "", result.args.index, result.args.name, result.args.blogAddress);
		txt = self.shgf.createSeletonGui(txt);
		self.setInnerHtml(txt, 'blogs-event');
	}

	this.registry.eventCallback = this.eventHandle;
	
	this.blogEventHandle=function(result){
		console.log('Event1:'+result);
		var txt = self.shgf.createNewMessageLogDataGui("", "", "", 
				result.args.message, result.args.messageId, 
				result.args.messageSender, result.args.messageHashValue, 
				result.args.externalResource);
		txt = self.shgf.createSeletonGui(txt);
		self.setInnerHtml(txt, 'entry-event');
	}
	this.blogs.eventCallback = this.blogEventHandle;
	
	
	
	this.readDataFromContract=function() {
		for (i in this.registry.managers) {
			var manager = this.registry.managers[i];
			var count = manager.c.instance.blogCount();
			for (var int = 0; int < count; int++) {
				var bAddress = manager.c.instance.blogs(int);
				console.log('added sb:'+bAddress);
				this.blogs.addManager(ShortBlogContract.at(bAddress));
				
			}
		}
	}

	
	/**
	* Places the default gui in the page.
	**/
	this.placeDefaultGui=function() {
		//this.clearGui();
		this.registry.displayGui();
		this.registry.updateGui();
		this.blogs.displayGui();
		this.blogs.updateGui();
	
	}}

	

// end
//End of user code
