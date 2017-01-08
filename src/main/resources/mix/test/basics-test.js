// file header
/**
* A simple bean class around the contract.
* The OwnedModel.
**/
function OwnedModel(contract) {
this.contract = contract;
	/**
	* Getter for owner.
	**/
	this.getOwner = function(){
		return contract.owner(); 
	}
	/**
	* Call getOwner.
	**/
	this.getOwner = function(){
		return contract.getOwner(); 
	}
	/**
	* Call changeOwner.
	**/
	this.changeOwner = function(newOwner){
		return contract.changeOwner(newOwner); 
	}
	/**
	* Call kill.
	**/
	this.kill = function(){
		return contract.kill(); 
	}
}// end of function OwnedModel

//test class for Owned
function TestOwned(contract) {
	
	this.test_instance = contract;
	this.model = new OwnedModel(contract);
	this.prefix='';
	this.messageBlockId = "testResult";
	var self = this;

	this.testSetup=function(){
		//Start of user code testSetup_Owned
		//TODO: implement
		//End of user code
	}

	this.allTests=function(){
		this.testSetup();
		this.testAttributes();
		this.testOwned_getOwner();
		this.testOwned_changeOwner_address();
		this.testOwned_kill();
		this.customTests();
	
		//Start of user code allTests_Owned
		//TODO: implement
		//End of user code

	}
	
	//print the test result
	this.printTest=function(testName,testMessage,state){
		var e = document.getElementById(this.prefix+'-'+this.messageBlockId);
		var elemDiv = document.createElement('div');
		elemDiv.id= this.prefix+'-'+testName;
		elemDiv.className='testRow';
		elemDiv.text=testMessage;
		var stateDiv = document.createElement('div');
		if(state){
			elemDiv.innerHTML = '<div class="pass_state">P</div><div class="testCell">'+testMessage+'</div>';
		}else{
			elemDiv.innerHTML = '<div class="failed_state">F</div><div class="testCell">'+testMessage+'</div>';
		}
		e.appendChild(elemDiv);
	}

	//assertEquals
	this.testAE=function(testName,testMessage,expected,value) {
		if(expected==value)
			this.printTest(testName, testMessage, true);
		else
			this.printTest(testName, testMessage+': expected '+expected+' got '+value, false);
	}

	//test the attributes after setup	
	this.testAttributes=function() {
	//Start of user code attributeTests_Owned
	//TODO: implement
	//End of user code
	}

	//Test for Owned_getOwner
	this.testOwned_getOwner=function() {
		//	var res = this.test_instance.getOwner();
		//Start of user code test_Owned_getOwner
		//TODO: implement
//console.log('testOwned_getOwner');
//	var res = this.test_instance.getOwner();
//	var state = res==="";		
		this.printTest("testgetOwner", "executed: testOwned_getOwner", false);		
		//End of user code
	}

	//Test for Owned_changeOwner_address
	this.testOwned_changeOwner_address=function() {
		//	var res = this.test_instance.changeOwner( p_newOwner);
		//Start of user code test_Owned_changeOwner_address
		//TODO: implement
//console.log('testOwned_changeOwner_address');
//	var p_newOwner = '';
//	var res = this.test_instance.changeOwner( p_newOwner);
//	var state = res==="";		
		this.printTest("testchangeOwner", "executed: testOwned_changeOwner_address", false);		
		//End of user code
	}

	//Test for Owned_kill
	this.testOwned_kill=function() {
		//	var res = this.test_instance.kill();
		//Start of user code test_Owned_kill
		//TODO: implement
//console.log('testOwned_kill');
//	var res = this.test_instance.kill();
//	var state = res==="";		
		this.printTest("testkill", "executed: testOwned_kill", false);		
		//End of user code
	}
	this.customTests=function() {
		//Start of user code test_Owned_custom tests
		//
		//End of user code
	}
}
/**
* A simple bean class around the contract.
* The ManageableModel.
**/
function ManageableModel(contract) {
this.contract = contract;
	/**
	* Getter for mangerCount.
	**/
	this.getMangerCount = function(){
		return contract.mangerCount(); 
	}
	/**
	* Get the mapped value for a key.
	*/
	this.getManagers=function(key) {
		return contract.managers(key);
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
}// end of function ManageableModel

//test class for Manageable
function TestManageable(contract) {
	
	this.test_instance = contract;
	this.model = new ManageableModel(contract);
	this.prefix='';
	this.messageBlockId = "testResult";
	var self = this;

	this.testSetup=function(){
		//Start of user code testSetup_Manageable
		//TODO: implement
		//End of user code
	}

	this.allTests=function(){
		this.testSetup();
		this.testAttributes();
		this.testManageable_addManager_address();
		this.testManageable_removeManager_address();
		this.testManageable_isManager_address();
		this.customTests();
	
		//Start of user code allTests_Manageable
		//TODO: implement
		//End of user code

	}
	
	//print the test result
	this.printTest=function(testName,testMessage,state){
		var e = document.getElementById(this.prefix+'-'+this.messageBlockId);
		var elemDiv = document.createElement('div');
		elemDiv.id= this.prefix+'-'+testName;
		elemDiv.className='testRow';
		elemDiv.text=testMessage;
		var stateDiv = document.createElement('div');
		if(state){
			elemDiv.innerHTML = '<div class="pass_state">P</div><div class="testCell">'+testMessage+'</div>';
		}else{
			elemDiv.innerHTML = '<div class="failed_state">F</div><div class="testCell">'+testMessage+'</div>';
		}
		e.appendChild(elemDiv);
	}

	//assertEquals
	this.testAE=function(testName,testMessage,expected,value) {
		if(expected==value)
			this.printTest(testName, testMessage, true);
		else
			this.printTest(testName, testMessage+': expected '+expected+' got '+value, false);
	}

	//test the attributes after setup	
	this.testAttributes=function() {
	//Start of user code attributeTests_Manageable
		this.testAE("testaddManager", "executed: attributes one manager",1, this.model.getMangerCount());	
	//End of user code
	}

	//Test for Manageable_addManager_address
	this.testManageable_addManager_address=function() {
		//	var res = this.test_instance.addManager( p__newManagerAddress);
		//Start of user code test_Manageable_addManager_address
		var m = this.model.getMangerCount();
		var p__newManagerAddress = web3.eth.accounts[1];
		var res = this.test_instance.addManager( p__newManagerAddress);
		this.testAE("testaddManager", "executed: testManageable_addManager_address",true, m<this.model.getMangerCount());		
		//End of user code
	}

	//Test for Manageable_removeManager_address
	this.testManageable_removeManager_address=function() {
		//	var res = this.test_instance.removeManager( p__managerAddress);
		//Start of user code test_Manageable_removeManager_address
		var p__managerAddress = web3.eth.accounts[1];
		var res = this.test_instance.removeManager( p__managerAddress);
		this.testAE("testremoveManager", "executed: testManageable_removeManager_address",false, this.test_instance.isManager( p__managerAddress));
		//End of user code
	}

	//Test for Manageable_isManager_address
	this.testManageable_isManager_address=function() {
		//	var res = this.test_instance.isManager( p__managerAddress);
		//Start of user code test_Manageable_isManager_address
		var p__managerAddress = web3.eth.accounts[0];
		var res = this.test_instance.removeManager( p__managerAddress);
		this.testAE("testremoveManager", "executed: testManageable_isManager_address",false, this.test_instance.isManager( p__managerAddress));
		//End of user code
	}
	this.customTests=function() {
		//Start of user code test_Manageable_custom tests
		//
		//End of user code
	}
}
/**
* A simple bean class around the contract.
* The MultiownedModel.
**/
function MultiownedModel(contract) {
this.contract = contract;
	/**
	* Getter for m_required.
	**/
	this.getM_required = function(){
		return contract.m_required(); 
	}
	/**
	* Getter for m_numOwners.
	**/
	this.getM_numOwners = function(){
		return contract.m_numOwners(); 
	}
	/**
	* Getter for m_owners.
	**/
	this.getM_owners = function(){
		return contract.m_owners(); 
	}
	/**
	* Getter for c_maxOwners.
	**/
	this.getC_maxOwners = function(){
		return contract.c_maxOwners(); 
	}
	/**
	* Getter for m_pendingIndex.
	**/
	this.getM_pendingIndex = function(){
		return contract.m_pendingIndex(); 
	}
	/**
	* Get the mapped value for a key.
	*/
	this.getM_ownerIndex=function(key) {
		return contract.m_ownerIndex(key);
	}
	/**
	* Get the mapped value for a key.
	*/
	this.getM_pending=function(key) {
		return contract.m_pending(key);
	}
	/**
	* Call Multiowned.
	**/
	this.Multiowned = function(_owners,_required){
		return contract.Multiowned(_owners,_required); 
	}
	/**
	* Call isOwner.
	**/
	this.isOwner = function(_addr){
		return contract.isOwner(_addr); 
	}
	/**
	* Call hasConfirmed.
	**/
	this.hasConfirmed = function(_operation,_owner){
		return contract.hasConfirmed(_operation,_owner); 
	}
}// end of function MultiownedModel

//test class for Multiowned
function TestMultiowned(contract) {
	
	this.test_instance = contract;
	this.model = new MultiownedModel(contract);
	this.prefix='';
	this.messageBlockId = "testResult";
	var self = this;

	this.testSetup=function(){
		//Start of user code testSetup_Multiowned
		//TODO: implement
		//End of user code
	}

	this.allTests=function(){
		this.testSetup();
		this.testAttributes();
		this.testMultiowned_Multiowned_address_uint();
		this.testMultiowned_isOwner_address();
		this.testMultiowned_hasConfirmed_bytes32_address();
		this.customTests();
	
		//Start of user code allTests_Multiowned
		//TODO: implement
		//End of user code

	}
	
	//print the test result
	this.printTest=function(testName,testMessage,state){
		var e = document.getElementById(this.prefix+'-'+this.messageBlockId);
		var elemDiv = document.createElement('div');
		elemDiv.id= this.prefix+'-'+testName;
		elemDiv.className='testRow';
		elemDiv.text=testMessage;
		var stateDiv = document.createElement('div');
		if(state){
			elemDiv.innerHTML = '<div class="pass_state">P</div><div class="testCell">'+testMessage+'</div>';
		}else{
			elemDiv.innerHTML = '<div class="failed_state">F</div><div class="testCell">'+testMessage+'</div>';
		}
		e.appendChild(elemDiv);
	}

	//assertEquals
	this.testAE=function(testName,testMessage,expected,value) {
		if(expected==value)
			this.printTest(testName, testMessage, true);
		else
			this.printTest(testName, testMessage+': expected '+expected+' got '+value, false);
	}

	//test the attributes after setup	
	this.testAttributes=function() {
	//Start of user code attributeTests_Multiowned
	//TODO: implement
	//End of user code
	}

	//Test for Multiowned_Multiowned_address_uint
	this.testMultiowned_Multiowned_address_uint=function() {
		//	var res = this.test_instance.Multiowned( p__owners, p__required);
		//Start of user code test_Multiowned_Multiowned_address_uint
		//TODO: implement
//console.log('testMultiowned_Multiowned_address_uint');
//	var p__owners = '';
//	var p__required = '';
//	var res = this.test_instance.Multiowned( p__owners, p__required);
//	var state = res==="";		
		this.printTest("testMultiowned", "executed: testMultiowned_Multiowned_address_uint", false);		
		//End of user code
	}

	//Test for Multiowned_isOwner_address
	this.testMultiowned_isOwner_address=function() {
		//	var res = this.test_instance.isOwner( p__addr);
		//Start of user code test_Multiowned_isOwner_address
		//TODO: implement
//console.log('testMultiowned_isOwner_address');
//	var p__addr = '';
//	var res = this.test_instance.isOwner( p__addr);
//	var state = res==="";		
		this.printTest("testisOwner", "executed: testMultiowned_isOwner_address", false);		
		//End of user code
	}

	//Test for Multiowned_hasConfirmed_bytes32_address
	this.testMultiowned_hasConfirmed_bytes32_address=function() {
		//	var res = this.test_instance.hasConfirmed( p__operation, p__owner);
		//Start of user code test_Multiowned_hasConfirmed_bytes32_address
		//TODO: implement
//console.log('testMultiowned_hasConfirmed_bytes32_address');
//	var p__operation = '';
//	var p__owner = '';
//	var res = this.test_instance.hasConfirmed( p__operation, p__owner);
//	var state = res==="";		
		this.printTest("testhasConfirmed", "executed: testMultiowned_hasConfirmed_bytes32_address", false);		
		//End of user code
	}
	this.customTests=function() {
		//Start of user code test_Multiowned_custom tests
		//
		//End of user code
	}
}
