
var OwnedContract = web3.eth.contract([
{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"type":"function"},
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
    "inputs": [],    
    "name": "kill",
    "outputs": [],
    "type": "function"
  }
 
] );   

var ManageableContract = web3.eth.contract([
{"constant":true,"inputs":[],"name":"mangerCount","outputs":[{"name":"","type":"uint"}],"type":"function"},
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

var MultiownedContract = web3.eth.contract([
{"constant":true,"inputs":[],"name":"m_required","outputs":[{"name":"","type":"uint"}],"type":"function"},
{"constant":true,"inputs":[],"name":"m_numOwners","outputs":[{"name":"","type":"uint"}],"type":"function"},
{"constant":true,"inputs":[],"name":"m_owners","outputs":[{"name":"","type":"uint"}],"type":"function"},
{"constant":true,"inputs":[],"name":"c_maxOwners","outputs":[{"name":"","type":"uint"}],"type":"function"},
{"constant":true,"inputs":[],"name":"m_pendingIndex","outputs":[{"name":"","type":"bytes32"}],"type":"function"},
{"constant": true,"inputs": [{"name": "","type": "uint"}],"name": "m_ownerIndex","outputs": [
{ "name": "", "type": "uint"}
],"type": "function"	},
//

{"constant": true,"inputs": [{"name": "","type": "bytes32"}],"name": "m_pending","outputs": [
{ "name": "yetNeeded", "type": "uint"}
,{ "name": "ownersDone", "type": "uint"}
,{ "name": "index", "type": "uint"}
],"type": "function"	},
  {
    "constant": false,
    "inputs": [{"name": "_owners","type": "address"},{"name": "_required","type": "uint"}],    
    "name": "Multiowned",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [{"name": "_addr","type": "address"}],    
    "name": "isOwner",
    "outputs": [{"name": "","type": "bool"}],
    "type": "function"
  }
,  {
    "constant": true,
    "inputs": [{"name": "_operation","type": "bytes32"},{"name": "_owner","type": "address"}],    
    "name": "hasConfirmed",
    "outputs": [{"name": "","type": "bool"}],
    "type": "function"
  }
 ,
  { "constant": true,
    "inputs": [{"name": "owner","type": "address"},{"name": "operation","type": "bytes32"}],    
    "name": "Confirmation",
    "type": "event"  }
,  { "constant": true,
    "inputs": [{"name": "owner","type": "address"},{"name": "operation","type": "bytes32"}],    
    "name": "Revoke",
    "type": "event"  }
,  { "constant": true,
    "inputs": [{"name": "oldOwner","type": "address"},{"name": "newOwner","type": "address"}],    
    "name": "OwnerChanged",
    "type": "event"  }
,  { "constant": true,
    "inputs": [{"name": "newOwner","type": "address"}],    
    "name": "OwnerAdded",
    "type": "event"  }
,  { "constant": true,
    "inputs": [{"name": "oldOwner","type": "address"}],    
    "name": "OwnerRemoved",
    "type": "event"  }
,  { "constant": true,
    "inputs": [{"name": "newRequirement","type": "uint"}],    
    "name": "RequirementChanged",
    "type": "event"  }
] );   



//gui factory Owned
function OwnedGuiFactory() {
	this.prefix='';
	
// default Gui
this.placeDefaultGui=function() {
//	console.log(this.prefix+' place gui');
	document.getElementById(this.prefix+'Owned_gui').innerHTML = this.createDefaultGui();
}
// default Gui
this.createDefaultGui=function() {
	return 	'<!-- gui for Owned_contract -->'
+	'	<div class="contract" id="'+this.prefix+'Owned_contract">'
+	'	Owned:'
+	'	  <input type="text" id="'+this.prefix+'Owned_address"> <button id="'+this.prefix+'OwnedController.setAddress" onclick="'+this.prefix+'OwnedController.setAddress()">change Owned Address</button>'
+	'	  <div class="contract_attributes" id="'+this.prefix+'Owned_contract_attributes"> attributes:'
+	'	    <div class="contract_attribute" id="'+this.prefix+'Owned_contract_attribute_owner"> owner:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'Owned_owner_value"> </div>'
+	'	    </div>'
+	'	'
+	'	    <button id="'+this.prefix+'Owned_updateAttributes" onclick="'+this.prefix+'OwnedController._updateAttributes()">update Owned attributes</button>'
+	'	  </div>'
+	'	  <div class="function_execution" id="'+this.prefix+'Owned_contract_function_Owned_getOwner">'
+	'	Owned_getOwner:'
+	'		<button id="'+this.prefix+'OwnedController.Owned_getOwner" onclick="'+this.prefix+'OwnedController.Owned_getOwner()">execute Owned_getOwner</button>'
+	'		<div class="function_result" id="'+this.prefix+'Owned_getOwner_res"></div>'
+	'	  </div>'
+	'	  <div class="function_execution" id="'+this.prefix+'Owned_contract_function_Owned_changeOwner_address">'
+	'	Owned_changeOwner:'
+	'		  <div class="function_parameter">newOwner<input type="text" id="'+this.prefix+'Owned_changeOwner_address_newOwner"></div>'
+	'		<button id="'+this.prefix+'OwnedController.Owned_changeOwner_address" onclick="'+this.prefix+'OwnedController.Owned_changeOwner_address()">execute Owned_changeOwner</button>'
+	'		<div class="function_result" id="'+this.prefix+'Owned_changeOwner_address_res"></div>'
+	'	  </div>'
+	'	  <div class="function_execution" id="'+this.prefix+'Owned_contract_function_Owned_kill">'
+	'	Owned_kill:'
+	'		<button id="'+this.prefix+'OwnedController.Owned_kill" onclick="'+this.prefix+'OwnedController.Owned_kill()">execute Owned_kill</button>'
+	'		<div class="function_result" id="'+this.prefix+'Owned_kill_res"></div>'
+	'	  </div>'
+	'	'
+	'	</div>'
;
}

//default attributes
this.createAttributesGui=function() {
	return 	'    <div class="contract_attribute" id="'+this.prefix+'Owned_contract_attribute_owner"> owner:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'Owned_owner_value"> </div>'
+	'	    </div>'
+	'	'
;
}



this.createOwned_getOwnerGui=function() {
return 	'  <div class="function_execution" id="'+this.prefix+'Owned_contract_function_Owned_getOwner">'
+	'Owned_getOwner:'
+	'	<button id="'+this.prefix+'OwnedController.Owned_getOwner" onclick="'+this.prefix+'OwnedController.Owned_getOwner()">execute Owned_getOwner</button>'
+	'	<div class="function_result" id="'+this.prefix+'Owned_getOwner_res"></div>'
+	'  </div>'
;
}
this.createOwned_changeOwner_addressGui=function() {
return 	'  <div class="function_execution" id="'+this.prefix+'Owned_contract_function_Owned_changeOwner_address">'
+	'Owned_changeOwner:'
+	'	  <div class="function_parameter">newOwner<input type="text" id="'+this.prefix+'Owned_changeOwner_address_newOwner"></div>'
+	'	<button id="'+this.prefix+'OwnedController.Owned_changeOwner_address" onclick="'+this.prefix+'OwnedController.Owned_changeOwner_address()">execute Owned_changeOwner</button>'
+	'	<div class="function_result" id="'+this.prefix+'Owned_changeOwner_address_res"></div>'
+	'  </div>'
;
}
this.createOwned_killGui=function() {
return 	'  <div class="function_execution" id="'+this.prefix+'Owned_contract_function_Owned_kill">'
+	'Owned_kill:'
+	'	<button id="'+this.prefix+'OwnedController.Owned_kill" onclick="'+this.prefix+'OwnedController.Owned_kill()">execute Owned_kill</button>'
+	'	<div class="function_result" id="'+this.prefix+'Owned_kill_res"></div>'
+	'  </div>'
;
}


//print the contract div around
this.createOwnedSeletonGui=function(inner) {
	return 	'<!-- gui for Owned_contract -->'
+	'	<div class="contract" id="'+this.prefix+'Owned_contract">'
+ inner
+'</div>';
}


//eventguis

}//end guifactory
// script for Owned gui controller
function OwnedController() {

	this.Owned_instance = undefined;
	this.prefix='';
	this.contractAddress = undefined; 
	var self = this;

// bind buttons
	this.bindGui=function() {
		var btn = document.getElementById(self.prefix+'OwnedController.setAddress');
//	console.log('bind:' + self.prefix+' '+btn);
		if(btn!=undefined)		
			btn.onclick = this.setAddress;

		var btn = document.getElementById(self.prefix+'Owned_updateAttributes');
//		console.log('bind update:' + self.prefix+' '+btn);
		if(btn!=undefined)
			btn.onclick = this._updateAttributes;
		var btn = document.getElementById(self.prefix+'OwnedController.Owned_getOwner');
//		console.log('bind:Owned_getOwner ' + self.prefix+' '+btn+'  '+self.Owned_getOwner);//Owned_getOwner);
		if(btn!=undefined)
			btn.onclick = this.Owned_getOwner;
		var btn = document.getElementById(self.prefix+'OwnedController.Owned_changeOwner_address');
//		console.log('bind:Owned_changeOwner ' + self.prefix+' '+btn+'  '+self.Owned_changeOwner_address);//Owned_changeOwner);
		if(btn!=undefined)
			btn.onclick = this.Owned_changeOwner_address;
		var btn = document.getElementById(self.prefix+'OwnedController.Owned_kill');
//		console.log('bind:Owned_kill ' + self.prefix+' '+btn+'  '+self.Owned_kill);//Owned_kill);
		if(btn!=undefined)
			btn.onclick = this.Owned_kill;
	}
	// set function
	this.setAddress=function() {
	var _address = document.getElementById(self.prefix+'Owned_address');
//	console.log('setAddress:' + self.prefix+' '+_address);
	self.Owned_instance = OwnedContract.at(_address.value);
	self.contractAddress = _address.value;
	self._updateAttributes();
}
//update attributes
this._updateAttributes=function () {
if(this.Owned_instance===null) return;
//console.log('updateAttributes:' + self.prefix);
// update attributes
	var owner_res = self.Owned_instance.owner();
//	console.log('get:owner' + self.prefix);

	if(owner_res!=null)
		document.getElementById(self.prefix+'Owned_owner_value').innerText = owner_res;
}

//call functions
//function Owned_getOwner
this.Owned_getOwner=function() {
//console.log('function:getOwner' + self.prefix);
//	console.log(':' +self.Owned_instance+':');
	var res = self.Owned_instance.getOwner();
	if(res!=null)
		document.getElementById(self.prefix+'Owned_getOwner_res').innerText = res;
}
//function Owned_changeOwner
this.Owned_changeOwner_address=function() {
//console.log('function:changeOwner' + self.prefix);
	var e = document.getElementById(self.prefix+'Owned_changeOwner_address_newOwner');
//	console.log(':' + self.prefix+'Owned_changeOwner_address_newOwner'+": "+e);
	var param_newOwner = e.value;
//	console.log(':' +self.Owned_instance+':');
	var res = self.Owned_instance.changeOwner(param_newOwner);
}
//function Owned_kill
this.Owned_kill=function() {
//console.log('function:kill' + self.prefix);
//	console.log(':' +self.Owned_instance+':');
	var res = self.Owned_instance.kill();
}

//delegated calls

}// end controller	


// script for Owned
function OwnedModel(prefix) {
	this.prefix = prefix;
	this.guiFactory = new OwnedGuiFactory();
	this.controller = new OwnedController();
	this.guiFactory.prefix = prefix;
	this.controller.prefix = prefix;
}
OwnedModel.prototype.create=function () {
	this.guiFactory.placeDefaultGui();
	this.controller._updateAttributes();
}


//class as GlueCode
//uses prefix + 'GuiContainer'
function OwnedManager(prefix,contract) {
	this.prefix = prefix;
	var self = this;
	this.c = new OwnedController();
	this.c.prefix=prefix;
	this.c.Owned_instance=contract;
	this.c.contractAddress = contract.address;
	this.g = new OwnedGuiFactory();
	this.g.prefix = prefix;

	this.addGui = function() {
		var e = document.getElementById(this.prefix + 'GuiContainer');
//console.log('addGui:' + this.prefix+ 'GuiContainer'+e);
		var elemDiv = document.createElement('div');
		elemDiv.id= this.prefix +'Owned_gui';
		e.appendChild(elemDiv);
		this.g.placeDefaultGui();
		document.getElementById(this.prefix+'Owned_address').value = this.c.contractAddress;
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
		return this.c.Owned_instance;
	}

}// end of manager

function OwnedGuiMananger(guiId){
	this.prefix = guiId;
	this.managers=new Array();	//[];		
	
	this.addManager = function(contract) {
//console.log('addManager:'+contract);
		var m = new OwnedManager(contract.address,contract);
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
			elemDiv.id= this.managers[i].prefix + 'GuiContainer';//'Owned_gui';
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

//gui factory Manageable
function ManageableGuiFactory() {
	this.prefix='';
	
// default Gui
this.placeDefaultGui=function() {
//	console.log(this.prefix+' place gui');
	document.getElementById(this.prefix+'Manageable_gui').innerHTML = this.createDefaultGui();
}
// default Gui
this.createDefaultGui=function() {
	return 	'<!-- gui for Manageable_contract -->'
+	'	<div class="contract" id="'+this.prefix+'Manageable_contract">'
+	'	Manageable:'
+	'	  <input type="text" id="'+this.prefix+'Manageable_address"> <button id="'+this.prefix+'ManageableController.setAddress" onclick="'+this.prefix+'ManageableController.setAddress()">change Manageable Address</button>'
+	'	  <div class="contract_attributes" id="'+this.prefix+'Manageable_contract_attributes"> attributes:'
+	'	    <div class="contract_attribute" id="'+this.prefix+'Manageable_contract_attribute_mangerCount"> mangerCount:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'Manageable_mangerCount_value"> </div>'
+	'	    </div>'
+	'	'
+	'	<div class="Value_Mapping" id="'+this.prefix+'Manageable_contract_attribute_managers">mapping  managers:'
+	'			<input type="text" id="'+this.prefix+'Manageable_contract_attribute_managers_input">(address)'
+	'	    	<div class="Mapping_value" id="'+this.prefix+'Manageable_contract_attribute_address"> bool:'
+	'	      		<div class="contract_attribute_value" id="'+this.prefix+'Manageable_managers_value"> </div>'
+	'	    	</div>'
+	'	  </div>'
+	'	    <button id="'+this.prefix+'Manageable_updateAttributes" onclick="'+this.prefix+'ManageableController._updateAttributes()">update Manageable attributes</button>'
+	'	  </div>'
+	'	  <div class="function_execution" id="'+this.prefix+'Manageable_contract_function_Manageable_addManager_address">'
+	'	Manageable_addManager:'
+	'		  <div class="function_parameter">_newManagerAddress<input type="text" id="'+this.prefix+'Manageable_addManager_address__newManagerAddress"></div>'
+	'		<button id="'+this.prefix+'ManageableController.Manageable_addManager_address" onclick="'+this.prefix+'ManageableController.Manageable_addManager_address()">execute Manageable_addManager</button>'
+	'		<div class="function_result" id="'+this.prefix+'Manageable_addManager_address_res"></div>'
+	'	  </div>'
+	'	  <div class="function_execution" id="'+this.prefix+'Manageable_contract_function_Manageable_removeManager_address">'
+	'	Manageable_removeManager:'
+	'		  <div class="function_parameter">_managerAddress<input type="text" id="'+this.prefix+'Manageable_removeManager_address__managerAddress"></div>'
+	'		<button id="'+this.prefix+'ManageableController.Manageable_removeManager_address" onclick="'+this.prefix+'ManageableController.Manageable_removeManager_address()">execute Manageable_removeManager</button>'
+	'		<div class="function_result" id="'+this.prefix+'Manageable_removeManager_address_res"></div>'
+	'	  </div>'
+	'	  <div class="function_execution" id="'+this.prefix+'Manageable_contract_function_Manageable_isManager_address">'
+	'	Manageable_isManager:'
+	'		  <div class="function_parameter">_managerAddress<input type="text" id="'+this.prefix+'Manageable_isManager_address__managerAddress"></div>'
+	'		<button id="'+this.prefix+'ManageableController.Manageable_isManager_address" onclick="'+this.prefix+'ManageableController.Manageable_isManager_address()">execute Manageable_isManager</button>'
+	'		<div class="function_result" id="'+this.prefix+'Manageable_isManager_address_res"></div>'
+	'	  </div>'
+	'	'
+	'	</div>'
;
}

//default attributes
this.createAttributesGui=function() {
	return 	'    <div class="contract_attribute" id="'+this.prefix+'Manageable_contract_attribute_mangerCount"> mangerCount:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'Manageable_mangerCount_value"> </div>'
+	'	    </div>'
+	'	'
;
}



this.createManageable_addManager_addressGui=function() {
return 	'  <div class="function_execution" id="'+this.prefix+'Manageable_contract_function_Manageable_addManager_address">'
+	'Manageable_addManager:'
+	'	  <div class="function_parameter">_newManagerAddress<input type="text" id="'+this.prefix+'Manageable_addManager_address__newManagerAddress"></div>'
+	'	<button id="'+this.prefix+'ManageableController.Manageable_addManager_address" onclick="'+this.prefix+'ManageableController.Manageable_addManager_address()">execute Manageable_addManager</button>'
+	'	<div class="function_result" id="'+this.prefix+'Manageable_addManager_address_res"></div>'
+	'  </div>'
;
}
this.createManageable_removeManager_addressGui=function() {
return 	'  <div class="function_execution" id="'+this.prefix+'Manageable_contract_function_Manageable_removeManager_address">'
+	'Manageable_removeManager:'
+	'	  <div class="function_parameter">_managerAddress<input type="text" id="'+this.prefix+'Manageable_removeManager_address__managerAddress"></div>'
+	'	<button id="'+this.prefix+'ManageableController.Manageable_removeManager_address" onclick="'+this.prefix+'ManageableController.Manageable_removeManager_address()">execute Manageable_removeManager</button>'
+	'	<div class="function_result" id="'+this.prefix+'Manageable_removeManager_address_res"></div>'
+	'  </div>'
;
}
this.createManageable_isManager_addressGui=function() {
return 	'  <div class="function_execution" id="'+this.prefix+'Manageable_contract_function_Manageable_isManager_address">'
+	'Manageable_isManager:'
+	'	  <div class="function_parameter">_managerAddress<input type="text" id="'+this.prefix+'Manageable_isManager_address__managerAddress"></div>'
+	'	<button id="'+this.prefix+'ManageableController.Manageable_isManager_address" onclick="'+this.prefix+'ManageableController.Manageable_isManager_address()">execute Manageable_isManager</button>'
+	'	<div class="function_result" id="'+this.prefix+'Manageable_isManager_address_res"></div>'
+	'  </div>'
;
}


//print the contract div around
this.createManageableSeletonGui=function(inner) {
	return 	'<!-- gui for Manageable_contract -->'
+	'	<div class="contract" id="'+this.prefix+'Manageable_contract">'
+ inner
+'</div>';
}


//eventguis

}//end guifactory
// script for Manageable gui controller
function ManageableController() {

	this.Manageable_instance = undefined;
	this.prefix='';
	this.contractAddress = undefined; 
	var self = this;

// bind buttons
	this.bindGui=function() {
		var btn = document.getElementById(self.prefix+'ManageableController.setAddress');
//	console.log('bind:' + self.prefix+' '+btn);
		if(btn!=undefined)		
			btn.onclick = this.setAddress;

		var btn = document.getElementById(self.prefix+'Manageable_updateAttributes');
//		console.log('bind update:' + self.prefix+' '+btn);
		if(btn!=undefined)
			btn.onclick = this._updateAttributes;
		var btn = document.getElementById(self.prefix+'ManageableController.Manageable_addManager_address');
//		console.log('bind:Manageable_addManager ' + self.prefix+' '+btn+'  '+self.Manageable_addManager_address);//Manageable_addManager);
		if(btn!=undefined)
			btn.onclick = this.Manageable_addManager_address;
		var btn = document.getElementById(self.prefix+'ManageableController.Manageable_removeManager_address');
//		console.log('bind:Manageable_removeManager ' + self.prefix+' '+btn+'  '+self.Manageable_removeManager_address);//Manageable_removeManager);
		if(btn!=undefined)
			btn.onclick = this.Manageable_removeManager_address;
		var btn = document.getElementById(self.prefix+'ManageableController.Manageable_isManager_address');
//		console.log('bind:Manageable_isManager ' + self.prefix+' '+btn+'  '+self.Manageable_isManager_address);//Manageable_isManager);
		if(btn!=undefined)
			btn.onclick = this.Manageable_isManager_address;
	}
	// set function
	this.setAddress=function() {
	var _address = document.getElementById(self.prefix+'Manageable_address');
//	console.log('setAddress:' + self.prefix+' '+_address);
	self.Manageable_instance = ManageableContract.at(_address.value);
	self.contractAddress = _address.value;
	self._updateAttributes();
}
//update attributes
this._updateAttributes=function () {
if(this.Manageable_instance===null) return;
//console.log('updateAttributes:' + self.prefix);
// update attributes
	var mangerCount_res = self.Manageable_instance.mangerCount();
//	console.log('get:mangerCount' + self.prefix);

	if(mangerCount_res!=null)
		document.getElementById(self.prefix+'Manageable_mangerCount_value').innerText = mangerCount_res;
//console.log('getStruct:managers' + self.prefix);
	var _key = document.getElementById(self.prefix+'Manageable_contract_attribute_managers_input').value;
	var managers_res = self.Manageable_instance.managers(_key);
//console.log('result:managers' + managers_res+' key: '+_key);
	if(managers_res!=null){
		document.getElementById(self.prefix+'Manageable_managers_value').innerText = managers_res;
	}
}

//call functions
//function Manageable_canAccess
this.Manageable_canAccess=function() {
//console.log('function:canAccess' + self.prefix);
//	console.log(':' +self.Manageable_instance+':');
	var res = self.Manageable_instance.canAccess();
	if(res!=null)
		document.getElementById(self.prefix+'Manageable_canAccess_res').innerText = res;
}
//function Manageable_addManager
this.Manageable_addManager_address=function() {
//console.log('function:addManager' + self.prefix);
	var e = document.getElementById(self.prefix+'Manageable_addManager_address__newManagerAddress');
//	console.log(':' + self.prefix+'Manageable_addManager_address__newManagerAddress'+": "+e);
	var param__newManagerAddress = e.value;
//	console.log(':' +self.Manageable_instance+':');
	var res = self.Manageable_instance.addManager(param__newManagerAddress);
}
//function Manageable_removeManager
this.Manageable_removeManager_address=function() {
//console.log('function:removeManager' + self.prefix);
	var e = document.getElementById(self.prefix+'Manageable_removeManager_address__managerAddress');
//	console.log(':' + self.prefix+'Manageable_removeManager_address__managerAddress'+": "+e);
	var param__managerAddress = e.value;
//	console.log(':' +self.Manageable_instance+':');
	var res = self.Manageable_instance.removeManager(param__managerAddress);
}
//function Manageable_isManager
this.Manageable_isManager_address=function() {
//console.log('function:isManager' + self.prefix);
	var e = document.getElementById(self.prefix+'Manageable_isManager_address__managerAddress');
//	console.log(':' + self.prefix+'Manageable_isManager_address__managerAddress'+": "+e);
	var param__managerAddress = e.value;
//	console.log(':' +self.Manageable_instance+':');
	var res = self.Manageable_instance.isManager(param__managerAddress);
	if(res!=null)
		document.getElementById(self.prefix+'Manageable_isManager_address_res').innerText = res;
}

//delegated calls

}// end controller	


// script for Manageable
function ManageableModel(prefix) {
	this.prefix = prefix;
	this.guiFactory = new ManageableGuiFactory();
	this.controller = new ManageableController();
	this.guiFactory.prefix = prefix;
	this.controller.prefix = prefix;
}
ManageableModel.prototype.create=function () {
	this.guiFactory.placeDefaultGui();
	this.controller._updateAttributes();
}


//class as GlueCode
//uses prefix + 'GuiContainer'
function ManageableManager(prefix,contract) {
	this.prefix = prefix;
	var self = this;
	this.c = new ManageableController();
	this.c.prefix=prefix;
	this.c.Manageable_instance=contract;
	this.c.contractAddress = contract.address;
	this.g = new ManageableGuiFactory();
	this.g.prefix = prefix;

	this.addGui = function() {
		var e = document.getElementById(this.prefix + 'GuiContainer');
//console.log('addGui:' + this.prefix+ 'GuiContainer'+e);
		var elemDiv = document.createElement('div');
		elemDiv.id= this.prefix +'Manageable_gui';
		e.appendChild(elemDiv);
		this.g.placeDefaultGui();
		document.getElementById(this.prefix+'Manageable_address').value = this.c.contractAddress;
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
		return this.c.Manageable_instance;
	}

}// end of manager

function ManageableGuiMananger(guiId){
	this.prefix = guiId;
	this.managers=new Array();	//[];		
	
	this.addManager = function(contract) {
//console.log('addManager:'+contract);
		var m = new ManageableManager(contract.address,contract);
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
			elemDiv.id= this.managers[i].prefix + 'GuiContainer';//'Manageable_gui';
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

//gui factory Multiowned
function MultiownedGuiFactory() {
	this.prefix='';
	
// default Gui
this.placeDefaultGui=function() {
//	console.log(this.prefix+' place gui');
	document.getElementById(this.prefix+'Multiowned_gui').innerHTML = this.createDefaultGui();
}
// default Gui
this.createDefaultGui=function() {
	return 	'<!-- gui for Multiowned_contract -->'
+	'	<div class="contract" id="'+this.prefix+'Multiowned_contract">'
+	'	Multiowned:'
+	'	  <input type="text" id="'+this.prefix+'Multiowned_address"> <button id="'+this.prefix+'MultiownedController.setAddress" onclick="'+this.prefix+'MultiownedController.setAddress()">change Multiowned Address</button>'
+	'	  <div class="contract_attributes" id="'+this.prefix+'Multiowned_contract_attributes"> attributes:'
+	'	    <div class="contract_attribute" id="'+this.prefix+'Multiowned_contract_attribute_m_required"> m_required:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'Multiowned_m_required_value"> </div>'
+	'	    </div>'
+	'	    <div class="contract_attribute" id="'+this.prefix+'Multiowned_contract_attribute_m_numOwners"> m_numOwners:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'Multiowned_m_numOwners_value"> </div>'
+	'	    </div>'
+	'	    <div class="contract_attribute" id="'+this.prefix+'Multiowned_contract_attribute_m_owners"> m_owners:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'Multiowned_m_owners_value"> </div>'
+	'	    </div>'
+	'	    <div class="contract_attribute" id="'+this.prefix+'Multiowned_contract_attribute_c_maxOwners"> c_maxOwners:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'Multiowned_c_maxOwners_value"> </div>'
+	'	    </div>'
+	'	    <div class="contract_attribute" id="'+this.prefix+'Multiowned_contract_attribute_m_pendingIndex"> m_pendingIndex:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'Multiowned_m_pendingIndex_value"> </div>'
+	'	    </div>'
+	'	'
+	'	<div class="Value_Mapping" id="'+this.prefix+'Multiowned_contract_attribute_m_ownerIndex">mapping  m_ownerIndex:'
+	'			<input type="number" id="'+this.prefix+'Multiowned_contract_attribute_m_ownerIndex_input">(uint)'
+	'	    	<div class="Mapping_value" id="'+this.prefix+'Multiowned_contract_attribute_uint"> uint:'
+	'	      		<div class="contract_attribute_value" id="'+this.prefix+'Multiowned_m_ownerIndex_value"> </div>'
+	'	    	</div>'
+	'	  </div>'
+	'	<!--struct -->'
+	'	<div class="Struct_Mapping" id="'+this.prefix+'Struc_Multiowned_contract_attribute_m_pending">struc mapping  m_pending:'
+	'			<input type="text" id="'+this.prefix+'Multiowned_contract_attribute_m_pending_input">(bytes32)'
+	'	    	<div class="Struct_attribute" id="'+this.prefix+'Multiowned_contract_attribute_m_pending_yetNeeded"> yetNeeded:'
+	'	      		<div class="Struct_attribute_value" id="'+this.prefix+'Multiowned_m_pending_yetNeeded_value"> </div>'
+	'	    	</div>'
+	'	    	<div class="Struct_attribute" id="'+this.prefix+'Multiowned_contract_attribute_m_pending_ownersDone"> ownersDone:'
+	'	      		<div class="Struct_attribute_value" id="'+this.prefix+'Multiowned_m_pending_ownersDone_value"> </div>'
+	'	    	</div>'
+	'	    	<div class="Struct_attribute" id="'+this.prefix+'Multiowned_contract_attribute_m_pending_index"> index:'
+	'	      		<div class="Struct_attribute_value" id="'+this.prefix+'Multiowned_m_pending_index_value"> </div>'
+	'	    	</div>'
+	'	  </div>'
+	'	    <button id="'+this.prefix+'Multiowned_updateAttributes" onclick="'+this.prefix+'MultiownedController._updateAttributes()">update Multiowned attributes</button>'
+	'	  </div>'
+	'	  <div class="function_execution" id="'+this.prefix+'Multiowned_contract_function_Multiowned_Multiowned_address_uint">'
+	'	Multiowned_Multiowned:'
+	'		  <div class="function_parameter">_owners<input type="text" id="'+this.prefix+'Multiowned_Multiowned_address_uint__owners"></div>'
+	'		  <div class="function_parameter">_required<input type="number" id="'+this.prefix+'Multiowned_Multiowned_address_uint__required"></div>'
+	'		<button id="'+this.prefix+'MultiownedController.Multiowned_Multiowned_address_uint" onclick="'+this.prefix+'MultiownedController.Multiowned_Multiowned_address_uint()">execute Multiowned_Multiowned</button>'
+	'		<div class="function_result" id="'+this.prefix+'Multiowned_Multiowned_address_uint_res"></div>'
+	'	  </div>'
+	'	  <div class="function_execution" id="'+this.prefix+'Multiowned_contract_function_Multiowned_isOwner_address">'
+	'	Multiowned_isOwner:'
+	'		  <div class="function_parameter">_addr<input type="text" id="'+this.prefix+'Multiowned_isOwner_address__addr"></div>'
+	'		<button id="'+this.prefix+'MultiownedController.Multiowned_isOwner_address" onclick="'+this.prefix+'MultiownedController.Multiowned_isOwner_address()">execute Multiowned_isOwner</button>'
+	'		<div class="function_result" id="'+this.prefix+'Multiowned_isOwner_address_res"></div>'
+	'	  </div>'
+	'	  <div class="function_execution" id="'+this.prefix+'Multiowned_contract_function_Multiowned_hasConfirmed_bytes32_address">'
+	'	Multiowned_hasConfirmed:'
+	'		  <div class="function_parameter">_operation<input type="text" id="'+this.prefix+'Multiowned_hasConfirmed_bytes32_address__operation"></div>'
+	'		  <div class="function_parameter">_owner<input type="text" id="'+this.prefix+'Multiowned_hasConfirmed_bytes32_address__owner"></div>'
+	'		<button id="'+this.prefix+'MultiownedController.Multiowned_hasConfirmed_bytes32_address" onclick="'+this.prefix+'MultiownedController.Multiowned_hasConfirmed_bytes32_address()">execute Multiowned_hasConfirmed</button>'
+	'		<div class="function_result" id="'+this.prefix+'Multiowned_hasConfirmed_bytes32_address_res"></div>'
+	'	  </div>'
+	'	'
+	'	</div>'
;
}

//default attributes
this.createAttributesGui=function() {
	return 	'    <div class="contract_attribute" id="'+this.prefix+'Multiowned_contract_attribute_m_required"> m_required:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'Multiowned_m_required_value"> </div>'
+	'	    </div>'
+	'	    <div class="contract_attribute" id="'+this.prefix+'Multiowned_contract_attribute_m_numOwners"> m_numOwners:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'Multiowned_m_numOwners_value"> </div>'
+	'	    </div>'
+	'	    <div class="contract_attribute" id="'+this.prefix+'Multiowned_contract_attribute_m_owners"> m_owners:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'Multiowned_m_owners_value"> </div>'
+	'	    </div>'
+	'	    <div class="contract_attribute" id="'+this.prefix+'Multiowned_contract_attribute_c_maxOwners"> c_maxOwners:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'Multiowned_c_maxOwners_value"> </div>'
+	'	    </div>'
+	'	    <div class="contract_attribute" id="'+this.prefix+'Multiowned_contract_attribute_m_pendingIndex"> m_pendingIndex:'
+	'	      <div class="contract_attribute_value" id="'+this.prefix+'Multiowned_m_pendingIndex_value"> </div>'
+	'	    </div>'
+	'	'
;
}



this.createMultiowned_Multiowned_address_uintGui=function() {
return 	'  <div class="function_execution" id="'+this.prefix+'Multiowned_contract_function_Multiowned_Multiowned_address_uint">'
+	'Multiowned_Multiowned:'
+	'	  <div class="function_parameter">_owners<input type="text" id="'+this.prefix+'Multiowned_Multiowned_address_uint__owners"></div>'
+	'	  <div class="function_parameter">_required<input type="number" id="'+this.prefix+'Multiowned_Multiowned_address_uint__required"></div>'
+	'	<button id="'+this.prefix+'MultiownedController.Multiowned_Multiowned_address_uint" onclick="'+this.prefix+'MultiownedController.Multiowned_Multiowned_address_uint()">execute Multiowned_Multiowned</button>'
+	'	<div class="function_result" id="'+this.prefix+'Multiowned_Multiowned_address_uint_res"></div>'
+	'  </div>'
;
}
this.createMultiowned_isOwner_addressGui=function() {
return 	'  <div class="function_execution" id="'+this.prefix+'Multiowned_contract_function_Multiowned_isOwner_address">'
+	'Multiowned_isOwner:'
+	'	  <div class="function_parameter">_addr<input type="text" id="'+this.prefix+'Multiowned_isOwner_address__addr"></div>'
+	'	<button id="'+this.prefix+'MultiownedController.Multiowned_isOwner_address" onclick="'+this.prefix+'MultiownedController.Multiowned_isOwner_address()">execute Multiowned_isOwner</button>'
+	'	<div class="function_result" id="'+this.prefix+'Multiowned_isOwner_address_res"></div>'
+	'  </div>'
;
}
this.createMultiowned_hasConfirmed_bytes32_addressGui=function() {
return 	'  <div class="function_execution" id="'+this.prefix+'Multiowned_contract_function_Multiowned_hasConfirmed_bytes32_address">'
+	'Multiowned_hasConfirmed:'
+	'	  <div class="function_parameter">_operation<input type="text" id="'+this.prefix+'Multiowned_hasConfirmed_bytes32_address__operation"></div>'
+	'	  <div class="function_parameter">_owner<input type="text" id="'+this.prefix+'Multiowned_hasConfirmed_bytes32_address__owner"></div>'
+	'	<button id="'+this.prefix+'MultiownedController.Multiowned_hasConfirmed_bytes32_address" onclick="'+this.prefix+'MultiownedController.Multiowned_hasConfirmed_bytes32_address()">execute Multiowned_hasConfirmed</button>'
+	'	<div class="function_result" id="'+this.prefix+'Multiowned_hasConfirmed_bytes32_address_res"></div>'
+	'  </div>'
;
}

this.createm_pendingStructGui=function() {
return 	'<!--struct -->'
+	'<div class="Struct_Mapping" id="'+this.prefix+'Struc_Multiowned_contract_attribute_m_pending">struc mapping  m_pending:'
+	'		<input type="text" id="'+this.prefix+'Multiowned_contract_attribute_m_pending_input">(bytes32)'
+	'    	<div class="Struct_attribute" id="'+this.prefix+'Multiowned_contract_attribute_m_pending_yetNeeded"> yetNeeded:'
+	'      		<div class="Struct_attribute_value" id="'+this.prefix+'Multiowned_m_pending_yetNeeded_value"> </div>'
+	'    	</div>'
+	'    	<div class="Struct_attribute" id="'+this.prefix+'Multiowned_contract_attribute_m_pending_ownersDone"> ownersDone:'
+	'      		<div class="Struct_attribute_value" id="'+this.prefix+'Multiowned_m_pending_ownersDone_value"> </div>'
+	'    	</div>'
+	'    	<div class="Struct_attribute" id="'+this.prefix+'Multiowned_contract_attribute_m_pending_index"> index:'
+	'      		<div class="Struct_attribute_value" id="'+this.prefix+'Multiowned_m_pending_index_value"> </div>'
+	'    	</div>'
+	'  </div>'
;
}

//print the contract div around
this.createMultiownedSeletonGui=function(inner) {
	return 	'<!-- gui for Multiowned_contract -->'
+	'	<div class="contract" id="'+this.prefix+'Multiowned_contract">'
+ inner
+'</div>';
}


//eventguis
this.createConfirmationLogDataGui = function(prefix, blockHash, blockNumber,
owner,operation) {
		return '<ul class="dapp-account-list"><li > '
        +'<a class="dapp-identicon dapp-small" style="background-image: url(identiconimage.png)"></a>'
		+'<span>'+prefix+' ('+blockNumber+')</span>'
        +'<span>'+owner+'</span>'
        +'<span>'+operation+'</span>'
        +' </li>'
        ;
}
this.createRevokeLogDataGui = function(prefix, blockHash, blockNumber,
owner,operation) {
		return '<ul class="dapp-account-list"><li > '
        +'<a class="dapp-identicon dapp-small" style="background-image: url(identiconimage.png)"></a>'
		+'<span>'+prefix+' ('+blockNumber+')</span>'
        +'<span>'+owner+'</span>'
        +'<span>'+operation+'</span>'
        +' </li>'
        ;
}
this.createOwnerChangedLogDataGui = function(prefix, blockHash, blockNumber,
oldOwner,newOwner) {
		return '<ul class="dapp-account-list"><li > '
        +'<a class="dapp-identicon dapp-small" style="background-image: url(identiconimage.png)"></a>'
		+'<span>'+prefix+' ('+blockNumber+')</span>'
        +'<span>'+oldOwner+'</span>'
        +'<span>'+newOwner+'</span>'
        +' </li>'
        ;
}
this.createOwnerAddedLogDataGui = function(prefix, blockHash, blockNumber,
newOwner) {
		return '<ul class="dapp-account-list"><li > '
        +'<a class="dapp-identicon dapp-small" style="background-image: url(identiconimage.png)"></a>'
		+'<span>'+prefix+' ('+blockNumber+')</span>'
        +'<span>'+newOwner+'</span>'
        +' </li>'
        ;
}
this.createOwnerRemovedLogDataGui = function(prefix, blockHash, blockNumber,
oldOwner) {
		return '<ul class="dapp-account-list"><li > '
        +'<a class="dapp-identicon dapp-small" style="background-image: url(identiconimage.png)"></a>'
		+'<span>'+prefix+' ('+blockNumber+')</span>'
        +'<span>'+oldOwner+'</span>'
        +' </li>'
        ;
}
this.createRequirementChangedLogDataGui = function(prefix, blockHash, blockNumber,
newRequirement) {
		return '<ul class="dapp-account-list"><li > '
        +'<a class="dapp-identicon dapp-small" style="background-image: url(identiconimage.png)"></a>'
		+'<span>'+prefix+' ('+blockNumber+')</span>'
        +'<span>'+newRequirement+'</span>'
        +' </li>'
        ;
}

}//end guifactory
// script for Multiowned gui controller
function MultiownedController() {

	this.Multiowned_instance = undefined;
	this.prefix='';
	this.contractAddress = undefined; 
	var self = this;

// bind buttons
	this.bindGui=function() {
		var btn = document.getElementById(self.prefix+'MultiownedController.setAddress');
//	console.log('bind:' + self.prefix+' '+btn);
		if(btn!=undefined)		
			btn.onclick = this.setAddress;

		var btn = document.getElementById(self.prefix+'Multiowned_updateAttributes');
//		console.log('bind update:' + self.prefix+' '+btn);
		if(btn!=undefined)
			btn.onclick = this._updateAttributes;
		var btn = document.getElementById(self.prefix+'MultiownedController.Multiowned_Multiowned_address_uint');
//		console.log('bind:Multiowned_Multiowned ' + self.prefix+' '+btn+'  '+self.Multiowned_Multiowned_address_uint);//Multiowned_Multiowned);
		if(btn!=undefined)
			btn.onclick = this.Multiowned_Multiowned_address_uint;
		var btn = document.getElementById(self.prefix+'MultiownedController.Multiowned_isOwner_address');
//		console.log('bind:Multiowned_isOwner ' + self.prefix+' '+btn+'  '+self.Multiowned_isOwner_address);//Multiowned_isOwner);
		if(btn!=undefined)
			btn.onclick = this.Multiowned_isOwner_address;
		var btn = document.getElementById(self.prefix+'MultiownedController.Multiowned_hasConfirmed_bytes32_address');
//		console.log('bind:Multiowned_hasConfirmed ' + self.prefix+' '+btn+'  '+self.Multiowned_hasConfirmed_bytes32_address);//Multiowned_hasConfirmed);
		if(btn!=undefined)
			btn.onclick = this.Multiowned_hasConfirmed_bytes32_address;
	}
	// set function
	this.setAddress=function() {
	var _address = document.getElementById(self.prefix+'Multiowned_address');
//	console.log('setAddress:' + self.prefix+' '+_address);
	self.Multiowned_instance = MultiownedContract.at(_address.value);
	self.contractAddress = _address.value;
	self._updateAttributes();
}
//update attributes
this._updateAttributes=function () {
if(this.Multiowned_instance===null) return;
//console.log('updateAttributes:' + self.prefix);
// update attributes
	var m_required_res = self.Multiowned_instance.m_required();
//	console.log('get:m_required' + self.prefix);

	if(m_required_res!=null)
		document.getElementById(self.prefix+'Multiowned_m_required_value').innerText = m_required_res;
	var m_numOwners_res = self.Multiowned_instance.m_numOwners();
//	console.log('get:m_numOwners' + self.prefix);

	if(m_numOwners_res!=null)
		document.getElementById(self.prefix+'Multiowned_m_numOwners_value').innerText = m_numOwners_res;
	var m_owners_res = self.Multiowned_instance.m_owners();
//	console.log('get:m_owners' + self.prefix);

	if(m_owners_res!=null)
		document.getElementById(self.prefix+'Multiowned_m_owners_value').innerText = m_owners_res;
	var c_maxOwners_res = self.Multiowned_instance.c_maxOwners();
//	console.log('get:c_maxOwners' + self.prefix);

	if(c_maxOwners_res!=null)
		document.getElementById(self.prefix+'Multiowned_c_maxOwners_value').innerText = c_maxOwners_res;
	var m_pendingIndex_res = self.Multiowned_instance.m_pendingIndex();
//	console.log('get:m_pendingIndex' + self.prefix);

	if(m_pendingIndex_res!=null)
		document.getElementById(self.prefix+'Multiowned_m_pendingIndex_value').innerText = m_pendingIndex_res;
//console.log('getStruct:m_ownerIndex' + self.prefix);
	var _key = document.getElementById(self.prefix+'Multiowned_contract_attribute_m_ownerIndex_input').value;
	var m_ownerIndex_res = self.Multiowned_instance.m_ownerIndex(_key);
//console.log('result:m_ownerIndex' + m_ownerIndex_res+' key: '+_key);
	if(m_ownerIndex_res!=null){
		document.getElementById(self.prefix+'Multiowned_m_ownerIndex_value').innerText = m_ownerIndex_res;
	}
	var _key = document.getElementById(self.prefix+'Multiowned_contract_attribute_m_pending_input').value;
	var m_pending_res = self.Multiowned_instance.m_pending(_key);
	if(m_pending_res!=null){
		document.getElementById(self.prefix+'Multiowned_m_pending_yetNeeded_value').innerText = m_pending_res[0];
		document.getElementById(self.prefix+'Multiowned_m_pending_ownersDone_value').innerText = m_pending_res[1];
		document.getElementById(self.prefix+'Multiowned_m_pending_index_value').innerText = m_pending_res[2];
	}
}

//call functions
//function Multiowned_Multiowned
this.Multiowned_Multiowned_address_uint=function() {
//console.log('function:Multiowned' + self.prefix);
	var e = document.getElementById(self.prefix+'Multiowned_Multiowned_address_uint__owners');
//	console.log(':' + self.prefix+'Multiowned_Multiowned_address_uint__owners'+": "+e);
	var param__owners = e.value;
	var e = document.getElementById(self.prefix+'Multiowned_Multiowned_address_uint__required');
//	console.log(':' + self.prefix+'Multiowned_Multiowned_address_uint__required'+": "+e);
	var param__required = e.value;
//	console.log(':' +self.Multiowned_instance+':');
	var res = self.Multiowned_instance.Multiowned(param__owners, param__required);
}
//function Multiowned_clearPending
this.Multiowned_clearPending=function() {
//console.log('function:clearPending' + self.prefix);
//	console.log(':' +self.Multiowned_instance+':');
	var res = self.Multiowned_instance.clearPending();
}
//function Multiowned_revoke
this.Multiowned_revoke_bytes32=function() {
//console.log('function:revoke' + self.prefix);
	var e = document.getElementById(self.prefix+'Multiowned_revoke_bytes32__operation');
//	console.log(':' + self.prefix+'Multiowned_revoke_bytes32__operation'+": "+e);
	var param__operation = e.value;
//	console.log(':' +self.Multiowned_instance+':');
	var res = self.Multiowned_instance.revoke(param__operation);
}
//function Multiowned_changeOwner
this.Multiowned_changeOwner_address_address=function() {
//console.log('function:changeOwner' + self.prefix);
	var e = document.getElementById(self.prefix+'Multiowned_changeOwner_address_address__from');
//	console.log(':' + self.prefix+'Multiowned_changeOwner_address_address__from'+": "+e);
	var param__from = e.value;
	var e = document.getElementById(self.prefix+'Multiowned_changeOwner_address_address__to');
//	console.log(':' + self.prefix+'Multiowned_changeOwner_address_address__to'+": "+e);
	var param__to = e.value;
//	console.log(':' +self.Multiowned_instance+':');
	var res = self.Multiowned_instance.changeOwner(param__from, param__to);
}
//function Multiowned_addOwner
this.Multiowned_addOwner_address=function() {
//console.log('function:addOwner' + self.prefix);
	var e = document.getElementById(self.prefix+'Multiowned_addOwner_address__owner');
//	console.log(':' + self.prefix+'Multiowned_addOwner_address__owner'+": "+e);
	var param__owner = e.value;
//	console.log(':' +self.Multiowned_instance+':');
	var res = self.Multiowned_instance.addOwner(param__owner);
}
//function Multiowned_removeOwner
this.Multiowned_removeOwner_address=function() {
//console.log('function:removeOwner' + self.prefix);
	var e = document.getElementById(self.prefix+'Multiowned_removeOwner_address__owner');
//	console.log(':' + self.prefix+'Multiowned_removeOwner_address__owner'+": "+e);
	var param__owner = e.value;
//	console.log(':' +self.Multiowned_instance+':');
	var res = self.Multiowned_instance.removeOwner(param__owner);
}
//function Multiowned_changeRequirement
this.Multiowned_changeRequirement_uint=function() {
//console.log('function:changeRequirement' + self.prefix);
	var e = document.getElementById(self.prefix+'Multiowned_changeRequirement_uint__newRequired');
//	console.log(':' + self.prefix+'Multiowned_changeRequirement_uint__newRequired'+": "+e);
	var param__newRequired = e.value;
//	console.log(':' +self.Multiowned_instance+':');
	var res = self.Multiowned_instance.changeRequirement(param__newRequired);
}
//function Multiowned_isOwner
this.Multiowned_isOwner_address=function() {
//console.log('function:isOwner' + self.prefix);
	var e = document.getElementById(self.prefix+'Multiowned_isOwner_address__addr');
//	console.log(':' + self.prefix+'Multiowned_isOwner_address__addr'+": "+e);
	var param__addr = e.value;
//	console.log(':' +self.Multiowned_instance+':');
	var res = self.Multiowned_instance.isOwner(param__addr);
	if(res!=null)
		document.getElementById(self.prefix+'Multiowned_isOwner_address_res').innerText = res;
}
//function Multiowned_hasConfirmed
this.Multiowned_hasConfirmed_bytes32_address=function() {
//console.log('function:hasConfirmed' + self.prefix);
	var e = document.getElementById(self.prefix+'Multiowned_hasConfirmed_bytes32_address__operation');
//	console.log(':' + self.prefix+'Multiowned_hasConfirmed_bytes32_address__operation'+": "+e);
	var param__operation = e.value;
	var e = document.getElementById(self.prefix+'Multiowned_hasConfirmed_bytes32_address__owner');
//	console.log(':' + self.prefix+'Multiowned_hasConfirmed_bytes32_address__owner'+": "+e);
	var param__owner = e.value;
//	console.log(':' +self.Multiowned_instance+':');
	var res = self.Multiowned_instance.hasConfirmed(param__operation, param__owner);
	if(res!=null)
		document.getElementById(self.prefix+'Multiowned_hasConfirmed_bytes32_address_res').innerText = res;
}
//function Multiowned_confirmAndCheck
this.Multiowned_confirmAndCheck_bytes32=function() {
//console.log('function:confirmAndCheck' + self.prefix);
	var e = document.getElementById(self.prefix+'Multiowned_confirmAndCheck_bytes32__operation');
//	console.log(':' + self.prefix+'Multiowned_confirmAndCheck_bytes32__operation'+": "+e);
	var param__operation = e.value;
//	console.log(':' +self.Multiowned_instance+':');
	var res = self.Multiowned_instance.confirmAndCheck(param__operation);
	if(res!=null)
		document.getElementById(self.prefix+'Multiowned_confirmAndCheck_bytes32_res').innerText = res;
}

//delegated calls

}// end controller	


// script for Multiowned
function MultiownedModel(prefix) {
	this.prefix = prefix;
	this.guiFactory = new MultiownedGuiFactory();
	this.controller = new MultiownedController();
	this.guiFactory.prefix = prefix;
	this.controller.prefix = prefix;
}
MultiownedModel.prototype.create=function () {
	this.guiFactory.placeDefaultGui();
	this.controller._updateAttributes();
}


//class as GlueCode
//uses prefix + 'GuiContainer'
function MultiownedManager(prefix,contract) {
	this.prefix = prefix;
	var self = this;
	this.c = new MultiownedController();
	this.c.prefix=prefix;
	this.c.Multiowned_instance=contract;
	this.c.contractAddress = contract.address;
	this.g = new MultiownedGuiFactory();
	this.g.prefix = prefix;

	this.addGui = function() {
		var e = document.getElementById(this.prefix + 'GuiContainer');
//console.log('addGui:' + this.prefix+ 'GuiContainer'+e);
		var elemDiv = document.createElement('div');
		elemDiv.id= this.prefix +'Multiowned_gui';
		e.appendChild(elemDiv);
		this.g.placeDefaultGui();
		document.getElementById(this.prefix+'Multiowned_address').value = this.c.contractAddress;
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
		return this.c.Multiowned_instance;
	}

}// end of manager

function MultiownedGuiMananger(guiId){
	this.prefix = guiId;
	this.managers=new Array();	//[];		
	
	this.addManager = function(contract) {
//console.log('addManager:'+contract);
		var m = new MultiownedManager(contract.address,contract);
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
			elemDiv.id= this.managers[i].prefix + 'GuiContainer';//'Multiowned_gui';
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

