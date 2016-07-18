//test class for MemberRegistry
function TestMemberRegistry(contract) {
	
	this.test_instance = contract;
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
		elemDiv.innerText = testMessage;
		if(!state)
			elemDiv.className = 'failed_state'
		e.appendChild(elemDiv);
	}
	
	this.testAttributes=function() {
	//Start of user code attributeTests_MemberRegistry
	var count =	this.test_instance.partyMemberCount();
	this.printTest("testaddMember", "partyMemberCount:"+count, count==0);
	//End of user code
	}

	//Test for MemberRegistry_addMember_string_address
	this.testMemberRegistry_addMember_string_address=function() {
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
		//Start of user code test_MemberRegistry_getMemberCount
		//TODO: implement
		var count = this.test_instance.getMemberCount();
		this.printTest("testgetMemberCount", "executed: testMemberRegistry_getMemberCount: "+count, count==1);		
		//End of user code
	}

	//Test for Manageable_removeManager_address
	this.testManageable_removeManager_address=function() {
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
//test class for MemberAware
function TestMemberAware(contract) {
	
	this.test_instance = contract;
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
		elemDiv.innerText = testMessage;
		if(!state)
			elemDiv.className = 'failed_state'
		e.appendChild(elemDiv);
	}
	
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
