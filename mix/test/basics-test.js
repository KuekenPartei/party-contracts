//test class for Owned
function TestOwned(contract) {
	
	this.test_instance = contract;
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
		elemDiv.innerText = testMessage;
		if(!state)
			elemDiv.className = 'failed_state'
		e.appendChild(elemDiv);
	}
	
	this.testAttributes=function() {
	//Start of user code attributeTests_Owned
	//TODO: implement
	//End of user code
	}

	//Test for Owned_getOwner
	this.testOwned_getOwner=function() {
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
//test class for Manageable
function TestManageable(contract) {
	
	this.test_instance = contract;
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
		elemDiv.innerText = testMessage;
		if(!state)
			elemDiv.className = 'failed_state'
		e.appendChild(elemDiv);
	}
	
	this.testAttributes=function() {
	//Start of user code attributeTests_Manageable
	//TODO: implement
	//End of user code
	}

	//Test for Manageable_addManager_address
	this.testManageable_addManager_address=function() {
		//Start of user code test_Manageable_addManager_address
		//TODO: implement
//console.log('testManageable_addManager_address');
//	var p__newManagerAddress = '';
//	var res = this.test_instance.addManager( p__newManagerAddress);
//	var state = res==="";		
		this.printTest("testaddManager", "executed: testManageable_addManager_address", false);		
		//End of user code
	}

	//Test for Manageable_removeManager_address
	this.testManageable_removeManager_address=function() {
		//Start of user code test_Manageable_removeManager_address
		//TODO: implement
//console.log('testManageable_removeManager_address');
//	var p__managerAddress = '';
//	var res = this.test_instance.removeManager( p__managerAddress);
//	var state = res==="";		
		this.printTest("testremoveManager", "executed: testManageable_removeManager_address", false);		
		//End of user code
	}

	//Test for Manageable_isManager_address
	this.testManageable_isManager_address=function() {
		//Start of user code test_Manageable_isManager_address
		//TODO: implement
//console.log('testManageable_isManager_address');
//	var p__managerAddress = '';
//	var res = this.test_instance.isManager( p__managerAddress);
//	var state = res==="";		
		this.printTest("testisManager", "executed: testManageable_isManager_address", false);		
		//End of user code
	}
	this.customTests=function() {
		//Start of user code test_Manageable_custom tests
		//
		//End of user code
	}
}
//test class for Multiowned
function TestMultiowned(contract) {
	
	this.test_instance = contract;
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
		elemDiv.innerText = testMessage;
		if(!state)
			elemDiv.className = 'failed_state'
		e.appendChild(elemDiv);
	}
	
	this.testAttributes=function() {
	//Start of user code attributeTests_Multiowned
	//TODO: implement
	//End of user code
	}

	//Test for Multiowned_Multiowned_address_uint
	this.testMultiowned_Multiowned_address_uint=function() {
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