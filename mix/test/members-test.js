/**
*
*(c) 2016 KUEKeN
* Urs Zeidler
*
**/
/**
* A simple bean class around the contract.
* The MemberRegistryModel.
**/
function MemberRegistryModel(contract) {
this.contract = contract;
	/**
	* Getter for mangerCount.
	**/
	this.getMangerCount = function(){
		return contract.mangerCount(); 
	}
	/**
	* Getter for partyMemberCount.
	**/
	this.getPartyMemberCount = function(){
		return contract.partyMemberCount(); 
	}
	/**
	* Getter for activeMemberCount.
	**/
	this.getActiveMemberCount = function(){
		return contract.activeMemberCount(); 
	}
	/**
	* Call addMember.
	**/
	this.addMember = function(name,_memberAddress){
		return contract.addMember(name,_memberAddress); 
	}
	/**
	* Call addManager.
	**/
	this.addManager = function(_newManagerAddress){
		return contract.addManager(_newManagerAddress); 
	}
	/**
	* Call unregisterMember.
	**/
	this.unregisterMember = function(id){
		return contract.unregisterMember(id); 
	}
	/**
	* Call getMemberCount.
	**/
	this.getMemberCount = function(){
		return contract.getMemberCount(); 
	}
	/**
	* Call removeManager.
	**/
	this.removeManager = function(_managerAddress){
		return contract.removeManager(_managerAddress); 
	}
	/**
	* Call isActiveMember.
	**/
	this.isActiveMember = function(_memberAdress){
		return contract.isActiveMember(_memberAdress); 
	}
	/**
	* Call isManager.
	**/
	this.isManager = function(_managerAddress){
		return contract.isManager(_managerAddress); 
	}
	/**
	* Call changeMemberAddress.
	**/
	this.changeMemberAddress = function(id,_newMemberAddress){
		return contract.changeMemberAddress(id,_newMemberAddress); 
	}
	/**
	* Call getMemberData.
	**/
	this.getMemberData = function(_address){
		return contract.getMemberData(_address); 
	}
	/**
	* Call publishMemberEvent.
	**/
	this.publishMemberEvent = function(mAddress,eventType){
		return contract.publishMemberEvent(mAddress,eventType); 
	}
}// end of function MemberRegistryModel

//test class for MemberRegistry
function TestMemberRegistry(contract) {
	
	this.test_instance = contract;
	this.model = new MemberRegistryModel(contract);
	this.prefix='';
	this.messageBlockId = "testResult";
	var self = this;

	this.testSetup=function(){
		//Start of user code testSetup_MemberRegistry
		//TODO: implement
		//End of user code
	}

	this.allTests=function(){
		this.testSetup();
		this.testAttributes();
		this.testMemberRegistry_addMember_string_address();
		this.testManageable_addManager_address();
		this.testMemberRegistry_unregisterMember_uint();
		this.testMemberRegistry_getMemberCount();
		this.testManageable_removeManager_address();
		this.testMemberRegistry_isActiveMember_address();
		this.testManageable_isManager_address();
		this.testMemberRegistry_changeMemberAddress_uint_address();
		this.testMemberRegistry_getMemberData_address();
		this.testMemberRegistry_publishMemberEvent_address_uint();
		this.customTests();
	
		//Start of user code allTests_MemberRegistry
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
	//Start of user code attributeTests_MemberRegistry
	var count =	this.test_instance.partyMemberCount();
	this.printTest("testaddMember", "partyMemberCount:"+count, count==0);
	//End of user code
	}

	//Test for MemberRegistry_addMember_string_address
	this.testMemberRegistry_addMember_string_address=function() {
		//	var res = this.test_instance.addMember( p_name, p__memberAddress);
		//Start of user code test_MemberRegistry_addMember_string_address
		//TODO: implement
		var count =	this.test_instance.partyMemberCount();
		var p_name = 'TestName';
		var p__memberAddress = web3.eth.accounts[1];
		var res = this.test_instance.addMember( p_name, p__memberAddress);
		var count1 = this.test_instance.partyMemberCount();
		this.printTest("testaddMember", "executed: testMemberRegistry_addMember_string_address: "+res, count<count1);		
		//End of user code
	}

	//Test for Manageable_addManager_address
	this.testManageable_addManager_address=function() {
		//	var res = this.test_instance.addManager( p__newManagerAddress);
		//Start of user code test_Manageable_addManager_address
		//TODO: implement
		var count = this.test_instance.mangerCount();
		var p__newManagerAddress = web3.eth.accounts[1];
		var res = this.test_instance.addManager( p__newManagerAddress);
		var count1 = this.test_instance.mangerCount();
		var state = res!="";		
		this.printTest("testaddManager", "executed: testManageable_addManager_address: "+res, count<count1);		
		//End of user code
	}

	//Test for MemberRegistry_unregisterMember_uint
	this.testMemberRegistry_unregisterMember_uint=function() {
		//	var res = this.test_instance.unregisterMember( p_id);
		//Start of user code test_MemberRegistry_unregisterMember_uint
		//TODO: implement
//console.log('testMemberRegistry_unregisterMember_uint');
//	var p_id = '';
//	var res = this.test_instance.unregisterMember( p_id);
//	var state = res==="";		
		this.printTest("testunregisterMember", "executed: testMemberRegistry_unregisterMember_uint", false);		
		//End of user code
	}

	//Test for MemberRegistry_getMemberCount
	this.testMemberRegistry_getMemberCount=function() {
		//	var res = this.test_instance.getMemberCount();
		//Start of user code test_MemberRegistry_getMemberCount
		//TODO: implement
		var count = this.test_instance.getMemberCount();
		this.printTest("testgetMemberCount", "executed: testMemberRegistry_getMemberCount: "+count, count==1);		
		//End of user code
	}

	//Test for Manageable_removeManager_address
	this.testManageable_removeManager_address=function() {
		//	var res = this.test_instance.removeManager( p__managerAddress);
		//Start of user code test_Manageable_removeManager_address
		//TODO: implement
		var p__managerAddress = web3.eth.accounts[0];
		var res = this.test_instance.removeManager( p__managerAddress);
		var state = res!="";		
		this.printTest("testremoveManager", "executed: testManageable_removeManager_address: "+res, state);		
		//End of user code
	}

	//Test for MemberRegistry_isActiveMember_address
	this.testMemberRegistry_isActiveMember_address=function() {
		//	var res = this.test_instance.isActiveMember( p__memberAdress);
		//Start of user code test_MemberRegistry_isActiveMember_address
		//TODO: implement
		var p__memberAdress = web3.eth.accounts[1];
		var res = this.test_instance.isActiveMember( p__memberAdress);
		var state = res==="";		
		this.printTest("testisActiveMember", "executed: testMemberRegistry_isActiveMember_address: "+res, res);	
		
		var p__memberAdress = web3.eth.accounts[2];
		var res = this.test_instance.isActiveMember( p__memberAdress);
		var state = res==="";		
		this.printTest("testisActiveMember", "executed: testMemberRegistry_isActiveMember_address: "+res, !res);		
		//End of user code
	}

	//Test for Manageable_isManager_address
	this.testManageable_isManager_address=function() {
		//	var res = this.test_instance.isManager( p__managerAddress);
		//Start of user code test_Manageable_isManager_address
		//TODO: implement
//console.log('testManageable_isManager_address');
//	var p__managerAddress = '';
//	var res = this.test_instance.isManager( p__managerAddress);
//	var state = res==="";		
		this.printTest("testisManager", "executed: testManageable_isManager_address", false);		
		//End of user code
	}

	//Test for MemberRegistry_changeMemberAddress_uint_address
	this.testMemberRegistry_changeMemberAddress_uint_address=function() {
		//	var res = this.test_instance.changeMemberAddress( p_id, p__newMemberAddress);
		//Start of user code test_MemberRegistry_changeMemberAddress_uint_address
		//TODO: implement
		var p_id = 0;
		var p__newMemberAddress = web3.eth.accounts[2];
		var res = this.test_instance.changeMemberAddress( p_id, p__newMemberAddress);
		var state = res!="";		
		this.printTest("testchangeMemberAddress", "executed: testMemberRegistry_changeMemberAddress_uint_address: "+res, state);		
		//End of user code
	}

	//Test for MemberRegistry_getMemberData_address
	this.testMemberRegistry_getMemberData_address=function() {
		//	var res = this.test_instance.getMemberData( p__address);
		//Start of user code test_MemberRegistry_getMemberData_address
		//TODO: implement
//console.log('testMemberRegistry_getMemberData_address');
//	var p__address = '';
//	var res = this.test_instance.getMemberData( p__address);
//	var state = res==="";		
		this.printTest("testgetMemberData", "executed: testMemberRegistry_getMemberData_address", false);		
		//End of user code
	}

	//Test for MemberRegistry_publishMemberEvent_address_uint
	this.testMemberRegistry_publishMemberEvent_address_uint=function() {
		//	var res = this.test_instance.publishMemberEvent( p_mAddress, p_eventType);
		//Start of user code test_MemberRegistry_publishMemberEvent_address_uint
		//TODO: implement
		var p_mAddress = web3.eth.accounts[2];
		var p_eventType = 1;
		var res = this.test_instance.publishMemberEvent( p_mAddress, p_eventType);
		var state = res!="";		
		this.printTest("testpublishMemberEvent", "executed: testMemberRegistry_publishMemberEvent_address_uint: "+res, state);		
		//End of user code
	}
	this.customTests=function() {
		//Start of user code test_MemberRegistry_custom tests
		var count =	this.test_instance.partyMemberCount();
		var p_name = 'TestName';
		var p__memberAddress = web3.eth.accounts[2];
		var res = this.test_instance.addMember( p_name, p__memberAddress);
		var count1 = this.test_instance.partyMemberCount();
		this.printTest("testaddMember", "MemberRegistry_addMember_string_address: "+res, count<count1);		

		var acount = this.test_instance.activeMemberCount();
		var res = this.test_instance.unregisterMember(0);
		var acount1 = this.test_instance.activeMemberCount();
		this.printTest("testunregisterMember", "MemberRegistry_unregisterMember_uint: "+res, acount>acount1);	
		
		web3.eth.defaultAccount = web3.eth.accounts[2];
		var count =	this.test_instance.partyMemberCount();
		var p_name = 'TestName';
		var p__memberAddress = web3.eth.accounts[3];
		var res = this.test_instance.addMember( p_name, p__memberAddress);
		var count1 = this.test_instance.partyMemberCount();
		this.printTest("testaddMember", "MemberRegistry_addMember no manager "+res, count=count1);		

		web3.eth.defaultAccount = web3.eth.accounts[0];
		var count = this.test_instance.mangerCount();
		var p__newManagerAddress = web3.eth.accounts[2];
		var res = this.test_instance.addManager( p__newManagerAddress);
		var count1 = this.test_instance.mangerCount();
		var state = res!="";		
		this.printTest("testaddManager", "Manageable_addManager_address: "+p__newManagerAddress, count<count1);		

		web3.eth.defaultAccount = web3.eth.accounts[2];
		var count =	this.test_instance.partyMemberCount();
		var p_name = 'TestName';
		var p__memberAddress = web3.eth.accounts[3];
		var res = this.test_instance.addMember( p_name, p__memberAddress);
		var count1 = this.test_instance.partyMemberCount();
		this.printTest("testaddMember", "MemberRegistry_addMember manager "+res, count<count1);		
		
		web3.eth.defaultAccount = web3.eth.accounts[0];
		//End of user code
	}
}
/**
* A simple bean class around the contract.
* The MemberAwareModel.
**/
function MemberAwareModel(contract) {
this.contract = contract;
	/**
	* Getter for memberRegistry.
	**/
	this.getMemberRegistry = function(){
		return contract.memberRegistry(); 
	}
}// end of function MemberAwareModel

//test class for MemberAware
function TestMemberAware(contract) {
	
	this.test_instance = contract;
	this.model = new MemberAwareModel(contract);
	this.prefix='';
	this.messageBlockId = "testResult";
	var self = this;

	this.testSetup=function(){
		//Start of user code testSetup_MemberAware
		//TODO: implement
		//End of user code
	}

	this.allTests=function(){
		this.testSetup();
		this.testAttributes();
		this.customTests();
	
		//Start of user code allTests_MemberAware
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
	//Start of user code attributeTests_MemberAware
	//TODO: implement
	//End of user code
	}
	this.customTests=function() {
		//Start of user code test_MemberAware_custom tests
		//
		//End of user code
	}
}
