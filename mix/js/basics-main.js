
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
	var e = document.getElementById(this.prefix+'Owned_gui');
	if(e!=null)
		e.innerHTML = this.createDefaultGui();
	else
		console.log(this.prefix+'Owned_gui not found');
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
this.createSeletonGui=function(inner) {
	return 	'<!-- gui for Owned_contract -->'
+	'	<div class="contract" id="'+this.prefix+'Owned_contract">'
+ inner
+'</div>';
}


//eventguis

}//end guifactory
// script for Owned gui controller
function OwnedController() {

	this.instance = undefined;
	this.prefix='';
	this.contractAddress = undefined; 
	this.eventlogPrefix = '';
	var self = this;

// bind buttons
	this.bindGui=function() {
		var btn = document.getElementById(self.prefix+'OwnedController.setAddress');
		if(btn!=undefined)		
			btn.onclick = this.setAddress;

		var btn = document.getElementById(self.prefix+'Owned_updateAttributes');
		if(btn!=undefined)
			btn.onclick = this._updateAttributes;
		var btn = document.getElementById(self.prefix+'OwnedController.Owned_getOwner');
		if(btn!=undefined)
			btn.onclick = this.Owned_getOwner;
		var btn = document.getElementById(self.prefix+'OwnedController.Owned_changeOwner_address');
		if(btn!=undefined)
			btn.onclick = this.Owned_changeOwner_address;
		var btn = document.getElementById(self.prefix+'OwnedController.Owned_kill');
		if(btn!=undefined)
			btn.onclick = this.Owned_kill;
	}
	// set function
	this.setAddress=function() {
	var _address = document.getElementById(self.prefix+'Owned_address');
	if(_address==null)return;

	self.Owned_instance = OwnedContract.at(_address.value);
	self.contractAddress = _address.value;
	self._updateAttributes();
}
//update attributes
this._updateAttributes=function () {
if(this.instance===null) return;
// update attributes
	var owner_res = self.instance.owner();
	var e = document.getElementById(self.prefix+'Owned_owner_value');
	if(owner_res!=null && e!=null)
		e.innerText = owner_res;
}

//call functions
//function Owned_getOwner
this.Owned_getOwner=function() {
	var res = self.instance.getOwner();
	var e = document.getElementById(self.prefix+'Owned_getOwner_res');
	if(res!=null && e!=null)
		e.innerText = res;
}
//function Owned_changeOwner
this.Owned_changeOwner_address=function() {
	var e = document.getElementById(self.prefix+'Owned_changeOwner_address_newOwner');
	if(e!=null)
		var param_newOwner = e.value;
	var res = self.instance.changeOwner(param_newOwner);
}
//function Owned_kill
this.Owned_kill=function() {
	var res = self.instance.kill();
}

//delegated calls

}// end controller	


//class as GlueCode OwnedManager
//uses prefix + 'GuiContainer'
function OwnedManager(prefix,contract,containerId) {
	this.prefix = prefix;
	var self = this;
	this.c = new OwnedController();
	this.c.prefix=prefix;
	this.c.instance=contract;
	this.c.contractAddress = contract.address;
	this.g = new OwnedGuiFactory();
	this.g.prefix = prefix;
	this.containerId = containerId;

	this.addGui = function() {
		var e = document.getElementById(this.containerId);
		if(e==null)return;
		var elemDiv = document.createElement('div');
		elemDiv.id= this.prefix +'Owned_gui';
		e.appendChild(elemDiv);
		elemDiv.innerHTML = this.createGui(this.g);
		var e = document.getElementById(this.prefix+'Owned_address');
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

function OwnedGuiMananger(guiId){
	this.prefix = guiId;
	this.managers=new Array();	//[];		
	
	this.addManager = function(contract) {
		var m = new OwnedManager(contract.address,contract,this.prefix);
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
			elemDiv.id= manager.prefix + 'GuiContainer';//'Owned_gui';
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

//Start of user code custom_Owned_js
//TODO: implement
//End of user code
//gui factory Manageable
function ManageableGuiFactory() {
	this.prefix='';
	
// default Gui
this.placeDefaultGui=function() {
	var e = document.getElementById(this.prefix+'Manageable_gui');
	if(e!=null)
		e.innerHTML = this.createDefaultGui();
	else
		console.log(this.prefix+'Manageable_gui not found');
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
this.createSeletonGui=function(inner) {
	return 	'<!-- gui for Manageable_contract -->'
+	'	<div class="contract" id="'+this.prefix+'Manageable_contract">'
+ inner
+'</div>';
}


//eventguis

}//end guifactory
// script for Manageable gui controller
function ManageableController() {

	this.instance = undefined;
	this.prefix='';
	this.contractAddress = undefined; 
	this.eventlogPrefix = '';
	var self = this;

// bind buttons
	this.bindGui=function() {
		var btn = document.getElementById(self.prefix+'ManageableController.setAddress');
		if(btn!=undefined)		
			btn.onclick = this.setAddress;

		var btn = document.getElementById(self.prefix+'Manageable_updateAttributes');
		if(btn!=undefined)
			btn.onclick = this._updateAttributes;
		var btn = document.getElementById(self.prefix+'ManageableController.Manageable_addManager_address');
		if(btn!=undefined)
			btn.onclick = this.Manageable_addManager_address;
		var btn = document.getElementById(self.prefix+'ManageableController.Manageable_removeManager_address');
		if(btn!=undefined)
			btn.onclick = this.Manageable_removeManager_address;
		var btn = document.getElementById(self.prefix+'ManageableController.Manageable_isManager_address');
		if(btn!=undefined)
			btn.onclick = this.Manageable_isManager_address;
	}
	// set function
	this.setAddress=function() {
	var _address = document.getElementById(self.prefix+'Manageable_address');
	if(_address==null)return;

	self.Manageable_instance = ManageableContract.at(_address.value);
	self.contractAddress = _address.value;
	self._updateAttributes();
}
//update attributes
this._updateAttributes=function () {
if(this.instance===null) return;
// update attributes
	var mangerCount_res = self.instance.mangerCount();
	var e = document.getElementById(self.prefix+'Manageable_mangerCount_value');
	if(mangerCount_res!=null && e!=null)
		e.innerText = mangerCount_res;
var e = document.getElementById(self.prefix+'Manageable_contract_attribute_managers_input');
if(e!=null){
	var _key = e.value;
	var managers_res = self.instance.managers(_key);
	if(managers_res!=null){
		var e1 = document.getElementById(self.prefix+'Manageable_managers_value');
		if(e1!=null)	
			e1.innerText = managers_res;
	}}
}

//call functions
//function Manageable_canAccess
this.Manageable_canAccess=function() {
	var res = self.instance.canAccess();
	var e = document.getElementById(self.prefix+'Manageable_canAccess_res');
	if(res!=null && e!=null)
		e.innerText = res;
}
//function Manageable_addManager
this.Manageable_addManager_address=function() {
	var e = document.getElementById(self.prefix+'Manageable_addManager_address__newManagerAddress');
	if(e!=null)
		var param__newManagerAddress = e.value;
	var res = self.instance.addManager(param__newManagerAddress);
}
//function Manageable_removeManager
this.Manageable_removeManager_address=function() {
	var e = document.getElementById(self.prefix+'Manageable_removeManager_address__managerAddress');
	if(e!=null)
		var param__managerAddress = e.value;
	var res = self.instance.removeManager(param__managerAddress);
}
//function Manageable_isManager
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


//class as GlueCode ManageableManager
//uses prefix + 'GuiContainer'
function ManageableManager(prefix,contract,containerId) {
	this.prefix = prefix;
	var self = this;
	this.c = new ManageableController();
	this.c.prefix=prefix;
	this.c.instance=contract;
	this.c.contractAddress = contract.address;
	this.g = new ManageableGuiFactory();
	this.g.prefix = prefix;
	this.containerId = containerId;

	this.addGui = function() {
		var e = document.getElementById(this.containerId);
		if(e==null)return;
		var elemDiv = document.createElement('div');
		elemDiv.id= this.prefix +'Manageable_gui';
		e.appendChild(elemDiv);
		elemDiv.innerHTML = this.createGui(this.g);
		var e = document.getElementById(this.prefix+'Manageable_address');
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

function ManageableGuiMananger(guiId){
	this.prefix = guiId;
	this.managers=new Array();	//[];		
	
	this.addManager = function(contract) {
		var m = new ManageableManager(contract.address,contract,this.prefix);
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
			elemDiv.id= manager.prefix + 'GuiContainer';//'Manageable_gui';
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

//Start of user code custom_Manageable_js
//TODO: implement
//End of user code
//gui factory Multiowned
function MultiownedGuiFactory() {
	this.prefix='';
	
// default Gui
this.placeDefaultGui=function() {
	var e = document.getElementById(this.prefix+'Multiowned_gui');
	if(e!=null)
		e.innerHTML = this.createDefaultGui();
	else
		console.log(this.prefix+'Multiowned_gui not found');
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
this.createSeletonGui=function(inner) {
	return 	'<!-- gui for Multiowned_contract -->'
+	'	<div class="contract" id="'+this.prefix+'Multiowned_contract">'
+ inner
+'</div>';
}


//eventguis
this.createConfirmationLogDataGui = function(prefix, blockHash, blockNumber
,owner,operation) {
		return '<ul class="dapp-account-list"><li > '
        +'<a class="dapp-identicon dapp-small" style="background-image: url(identiconimage.png)"></a>'
		+'<span>'+prefix+' ('+blockNumber+')</span>'
        +'<span>'+owner+'</span>'
        +'<span>'+operation+'</span>'
        +' </li>'
        ;
}
this.createRevokeLogDataGui = function(prefix, blockHash, blockNumber
,owner,operation) {
		return '<ul class="dapp-account-list"><li > '
        +'<a class="dapp-identicon dapp-small" style="background-image: url(identiconimage.png)"></a>'
		+'<span>'+prefix+' ('+blockNumber+')</span>'
        +'<span>'+owner+'</span>'
        +'<span>'+operation+'</span>'
        +' </li>'
        ;
}
this.createOwnerChangedLogDataGui = function(prefix, blockHash, blockNumber
,oldOwner,newOwner) {
		return '<ul class="dapp-account-list"><li > '
        +'<a class="dapp-identicon dapp-small" style="background-image: url(identiconimage.png)"></a>'
		+'<span>'+prefix+' ('+blockNumber+')</span>'
        +'<span>'+oldOwner+'</span>'
        +'<span>'+newOwner+'</span>'
        +' </li>'
        ;
}
this.createOwnerAddedLogDataGui = function(prefix, blockHash, blockNumber
,newOwner) {
		return '<ul class="dapp-account-list"><li > '
        +'<a class="dapp-identicon dapp-small" style="background-image: url(identiconimage.png)"></a>'
		+'<span>'+prefix+' ('+blockNumber+')</span>'
        +'<span>'+newOwner+'</span>'
        +' </li>'
        ;
}
this.createOwnerRemovedLogDataGui = function(prefix, blockHash, blockNumber
,oldOwner) {
		return '<ul class="dapp-account-list"><li > '
        +'<a class="dapp-identicon dapp-small" style="background-image: url(identiconimage.png)"></a>'
		+'<span>'+prefix+' ('+blockNumber+')</span>'
        +'<span>'+oldOwner+'</span>'
        +' </li>'
        ;
}
this.createRequirementChangedLogDataGui = function(prefix, blockHash, blockNumber
,newRequirement) {
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

	this.instance = undefined;
	this.prefix='';
	this.contractAddress = undefined; 
	this.eventlogPrefix = '';
	var self = this;

// bind buttons
	this.bindGui=function() {
		var btn = document.getElementById(self.prefix+'MultiownedController.setAddress');
		if(btn!=undefined)		
			btn.onclick = this.setAddress;

		var btn = document.getElementById(self.prefix+'Multiowned_updateAttributes');
		if(btn!=undefined)
			btn.onclick = this._updateAttributes;
		var btn = document.getElementById(self.prefix+'MultiownedController.Multiowned_Multiowned_address_uint');
		if(btn!=undefined)
			btn.onclick = this.Multiowned_Multiowned_address_uint;
		var btn = document.getElementById(self.prefix+'MultiownedController.Multiowned_isOwner_address');
		if(btn!=undefined)
			btn.onclick = this.Multiowned_isOwner_address;
		var btn = document.getElementById(self.prefix+'MultiownedController.Multiowned_hasConfirmed_bytes32_address');
		if(btn!=undefined)
			btn.onclick = this.Multiowned_hasConfirmed_bytes32_address;
	}
	// set function
	this.setAddress=function() {
	var _address = document.getElementById(self.prefix+'Multiowned_address');
	if(_address==null)return;

	self.Multiowned_instance = MultiownedContract.at(_address.value);
	self.contractAddress = _address.value;
	self._updateAttributes();
}
//update attributes
this._updateAttributes=function () {
if(this.instance===null) return;
// update attributes
	var m_required_res = self.instance.m_required();
	var e = document.getElementById(self.prefix+'Multiowned_m_required_value');
	if(m_required_res!=null && e!=null)
		e.innerText = m_required_res;
	var m_numOwners_res = self.instance.m_numOwners();
	var e = document.getElementById(self.prefix+'Multiowned_m_numOwners_value');
	if(m_numOwners_res!=null && e!=null)
		e.innerText = m_numOwners_res;
	var m_owners_res = self.instance.m_owners();
	var e = document.getElementById(self.prefix+'Multiowned_m_owners_value');
	if(m_owners_res!=null && e!=null)
		e.innerText = m_owners_res;
	var c_maxOwners_res = self.instance.c_maxOwners();
	var e = document.getElementById(self.prefix+'Multiowned_c_maxOwners_value');
	if(c_maxOwners_res!=null && e!=null)
		e.innerText = c_maxOwners_res;
	var m_pendingIndex_res = self.instance.m_pendingIndex();
	var e = document.getElementById(self.prefix+'Multiowned_m_pendingIndex_value');
	if(m_pendingIndex_res!=null && e!=null)
		e.innerText = m_pendingIndex_res;
var e = document.getElementById(self.prefix+'Multiowned_contract_attribute_m_ownerIndex_input');
if(e!=null){
	var _key = e.value;
	var m_ownerIndex_res = self.instance.m_ownerIndex(_key);
	if(m_ownerIndex_res!=null){
		var e1 = document.getElementById(self.prefix+'Multiowned_m_ownerIndex_value');
		if(e1!=null)	
			e1.innerText = m_ownerIndex_res;
	}}
var e = document.getElementById(self.prefix+'Multiowned_contract_attribute_m_pending_input');
if(e!=null){
	var _key = e.value;
	var m_pending_res = self.instance.m_pending(_key);
	if(m_pending_res!=null){
	var e1 = document.getElementById(self.prefix+'Multiowned_m_pending_yetNeeded_value');
	if(e1!=null)	
		e1.innerText = m_pending_res[0];
	var e1 = document.getElementById(self.prefix+'Multiowned_m_pending_ownersDone_value');
	if(e1!=null)	
		e1.innerText = m_pending_res[1];
	var e1 = document.getElementById(self.prefix+'Multiowned_m_pending_index_value');
	if(e1!=null)	
		e1.innerText = m_pending_res[2];
	}}
}

//call functions
//function Multiowned_Multiowned
this.Multiowned_Multiowned_address_uint=function() {
	var e = document.getElementById(self.prefix+'Multiowned_Multiowned_address_uint__owners');
	if(e!=null)
		var param__owners = e.value;
	var e = document.getElementById(self.prefix+'Multiowned_Multiowned_address_uint__required');
	if(e!=null)
		var param__required = e.value;
	var res = self.instance.Multiowned(param__owners, param__required);
}
//function Multiowned_clearPending
this.Multiowned_clearPending=function() {
	var res = self.instance.clearPending();
}
//function Multiowned_revoke
this.Multiowned_revoke_bytes32=function() {
	var e = document.getElementById(self.prefix+'Multiowned_revoke_bytes32__operation');
	if(e!=null)
		var param__operation = e.value;
	var res = self.instance.revoke(param__operation);
}
//function Multiowned_changeOwner
this.Multiowned_changeOwner_address_address=function() {
	var e = document.getElementById(self.prefix+'Multiowned_changeOwner_address_address__from');
	if(e!=null)
		var param__from = e.value;
	var e = document.getElementById(self.prefix+'Multiowned_changeOwner_address_address__to');
	if(e!=null)
		var param__to = e.value;
	var res = self.instance.changeOwner(param__from, param__to);
}
//function Multiowned_addOwner
this.Multiowned_addOwner_address=function() {
	var e = document.getElementById(self.prefix+'Multiowned_addOwner_address__owner');
	if(e!=null)
		var param__owner = e.value;
	var res = self.instance.addOwner(param__owner);
}
//function Multiowned_removeOwner
this.Multiowned_removeOwner_address=function() {
	var e = document.getElementById(self.prefix+'Multiowned_removeOwner_address__owner');
	if(e!=null)
		var param__owner = e.value;
	var res = self.instance.removeOwner(param__owner);
}
//function Multiowned_changeRequirement
this.Multiowned_changeRequirement_uint=function() {
	var e = document.getElementById(self.prefix+'Multiowned_changeRequirement_uint__newRequired');
	if(e!=null)
		var param__newRequired = e.value;
	var res = self.instance.changeRequirement(param__newRequired);
}
//function Multiowned_isOwner
this.Multiowned_isOwner_address=function() {
	var e = document.getElementById(self.prefix+'Multiowned_isOwner_address__addr');
	if(e!=null)
		var param__addr = e.value;
	var res = self.instance.isOwner(param__addr);
	var e = document.getElementById(self.prefix+'Multiowned_isOwner_address_res');
	if(res!=null && e!=null)
		e.innerText = res;
}
//function Multiowned_hasConfirmed
this.Multiowned_hasConfirmed_bytes32_address=function() {
	var e = document.getElementById(self.prefix+'Multiowned_hasConfirmed_bytes32_address__operation');
	if(e!=null)
		var param__operation = e.value;
	var e = document.getElementById(self.prefix+'Multiowned_hasConfirmed_bytes32_address__owner');
	if(e!=null)
		var param__owner = e.value;
	var res = self.instance.hasConfirmed(param__operation, param__owner);
	var e = document.getElementById(self.prefix+'Multiowned_hasConfirmed_bytes32_address_res');
	if(res!=null && e!=null)
		e.innerText = res;
}
//function Multiowned_confirmAndCheck
this.Multiowned_confirmAndCheck_bytes32=function() {
	var e = document.getElementById(self.prefix+'Multiowned_confirmAndCheck_bytes32__operation');
	if(e!=null)
		var param__operation = e.value;
	var res = self.instance.confirmAndCheck(param__operation);
	var e = document.getElementById(self.prefix+'Multiowned_confirmAndCheck_bytes32_res');
	if(res!=null && e!=null)
		e.innerText = res;
}

//delegated calls

}// end controller	


//class as GlueCode MultiownedManager
//uses prefix + 'GuiContainer'
function MultiownedManager(prefix,contract,containerId) {
	this.prefix = prefix;
	var self = this;
	this.c = new MultiownedController();
	this.c.prefix=prefix;
	this.c.instance=contract;
	this.c.contractAddress = contract.address;
	this.g = new MultiownedGuiFactory();
	this.g.prefix = prefix;
	this.containerId = containerId;

	this.addGui = function() {
		var e = document.getElementById(this.containerId);
		if(e==null)return;
		var elemDiv = document.createElement('div');
		elemDiv.id= this.prefix +'Multiowned_gui';
		e.appendChild(elemDiv);
		elemDiv.innerHTML = this.createGui(this.g);
		var e = document.getElementById(this.prefix+'Multiowned_address');
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
	var event_Confirmation = contract.Confirmation({},{fromBlock: 0});
	event_Confirmation.watch(function(error,result){
	if(!error){
		var e = document.getElementById(self.eventlogPrefix+'eventLog');
		var elemDiv = document.createElement('div');
		elemDiv.id= result.blockNumber +'event';
		e.appendChild(elemDiv);
		//console.log(result.address+ 'eventLog'+result.blockHash+' '+result.blockNumber+' '+result.args.name+' '+result.args.succesful+' ');
		elemDiv.innerHTML = '<div>'
        +'<span>'+result.args.owner+'</span>'
        +'<span>'+result.args.operation+'</span>'
		+ '</div>';
		}else
		console.log(error);	
	});
	var event_Revoke = contract.Revoke({},{fromBlock: 0});
	event_Revoke.watch(function(error,result){
	if(!error){
		var e = document.getElementById(self.eventlogPrefix+'eventLog');
		var elemDiv = document.createElement('div');
		elemDiv.id= result.blockNumber +'event';
		e.appendChild(elemDiv);
		//console.log(result.address+ 'eventLog'+result.blockHash+' '+result.blockNumber+' '+result.args.name+' '+result.args.succesful+' ');
		elemDiv.innerHTML = '<div>'
        +'<span>'+result.args.owner+'</span>'
        +'<span>'+result.args.operation+'</span>'
		+ '</div>';
		}else
		console.log(error);	
	});
	var event_OwnerChanged = contract.OwnerChanged({},{fromBlock: 0});
	event_OwnerChanged.watch(function(error,result){
	if(!error){
		var e = document.getElementById(self.eventlogPrefix+'eventLog');
		var elemDiv = document.createElement('div');
		elemDiv.id= result.blockNumber +'event';
		e.appendChild(elemDiv);
		//console.log(result.address+ 'eventLog'+result.blockHash+' '+result.blockNumber+' '+result.args.name+' '+result.args.succesful+' ');
		elemDiv.innerHTML = '<div>'
        +'<span>'+result.args.oldOwner+'</span>'
        +'<span>'+result.args.newOwner+'</span>'
		+ '</div>';
		}else
		console.log(error);	
	});
	var event_OwnerAdded = contract.OwnerAdded({},{fromBlock: 0});
	event_OwnerAdded.watch(function(error,result){
	if(!error){
		var e = document.getElementById(self.eventlogPrefix+'eventLog');
		var elemDiv = document.createElement('div');
		elemDiv.id= result.blockNumber +'event';
		e.appendChild(elemDiv);
		//console.log(result.address+ 'eventLog'+result.blockHash+' '+result.blockNumber+' '+result.args.name+' '+result.args.succesful+' ');
		elemDiv.innerHTML = '<div>'
        +'<span>'+result.args.newOwner+'</span>'
		+ '</div>';
		}else
		console.log(error);	
	});
	var event_OwnerRemoved = contract.OwnerRemoved({},{fromBlock: 0});
	event_OwnerRemoved.watch(function(error,result){
	if(!error){
		var e = document.getElementById(self.eventlogPrefix+'eventLog');
		var elemDiv = document.createElement('div');
		elemDiv.id= result.blockNumber +'event';
		e.appendChild(elemDiv);
		//console.log(result.address+ 'eventLog'+result.blockHash+' '+result.blockNumber+' '+result.args.name+' '+result.args.succesful+' ');
		elemDiv.innerHTML = '<div>'
        +'<span>'+result.args.oldOwner+'</span>'
		+ '</div>';
		}else
		console.log(error);	
	});
	var event_RequirementChanged = contract.RequirementChanged({},{fromBlock: 0});
	event_RequirementChanged.watch(function(error,result){
	if(!error){
		var e = document.getElementById(self.eventlogPrefix+'eventLog');
		var elemDiv = document.createElement('div');
		elemDiv.id= result.blockNumber +'event';
		e.appendChild(elemDiv);
		//console.log(result.address+ 'eventLog'+result.blockHash+' '+result.blockNumber+' '+result.args.name+' '+result.args.succesful+' ');
		elemDiv.innerHTML = '<div>'
        +'<span>'+result.args.newRequirement+'</span>'
		+ '</div>';
		}else
		console.log(error);	
	});
	}

}// end of manager

function MultiownedGuiMananger(guiId){
	this.prefix = guiId;
	this.managers=new Array();	//[];		
	
	this.addManager = function(contract) {
		var m = new MultiownedManager(contract.address,contract,this.prefix);
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
			elemDiv.id= manager.prefix + 'GuiContainer';//'Multiowned_gui';
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

//Start of user code custom_Multiowned_js
//TODO: implement
//End of user code
//the page Object fro the BasicsPage.
function BasicsPage(prefix) {
	this.prefix=prefix;
	//Start of user code page_basics_attributes
		//TODO: implement
	//End of user code

	
// default Gui
this.placeDefaultGui=function() {
this.createDefaultGui();

}
// default Gui
this.createDefaultGui=function() {
	//Start of user code page_Basics_create_default_gui_functions
		//TODO: implement
	//End of user code
}
	//Start of user code page_Basics_functions
		//TODO: implement
	//End of user code

}// end of BasicsPage
