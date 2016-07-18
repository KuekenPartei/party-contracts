//test class for Organ
function TestOrgan(contract) {
	
	this.test_instance = contract;
	this.prefix='';
	this.messageBlockId = "testResult";
	var self = this;

	this.testSetup=function(){
		//Start of user code testSetup_Organ
		//TODO: implement
		//End of user code
	}

	this.allTests=function(){
		this.testSetup();
		this.testAttributes();
		this.testOrgan_changeMember_uint_address();
		this.testManageable_addManager_address();
		this.testOrgan_createFunction_string_string();
		this.testManageable_removeManager_address();
		this.testOrgan_initalizeOrgan();
		this.testManageable_isManager_address();
		this.testOrgan_publishFunctionMessage_uint_string_string_string();
		this.testOrgan_createBallot_string_bytes32();
		this.testOrgan_getFunctionBlogAddress_uint();
		this.testOrgan_getLastBallot();
		this.testOrgan_getOrganBlog();
		this.customTests();
	
		//Start of user code allTests_Organ
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
	//Start of user code attributeTests_Organ
	//TODO: implement
	//End of user code
	}

	//Test for Organ_changeMember_uint_address
	this.testOrgan_changeMember_uint_address=function() {
		//Start of user code test_Organ_changeMember_uint_address
		//TODO: implement
//console.log('testOrgan_changeMember_uint_address');
//	var p__id = '';
//	var p__address = '';
//	var res = this.test_instance.changeMember( p__id, p__address);
//	var state = res==="";		
		this.printTest("testchangeMember", "executed: testOrgan_changeMember_uint_address", false);		
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

	//Test for Organ_createFunction_string_string
	this.testOrgan_createFunction_string_string=function() {
		//Start of user code test_Organ_createFunction_string_string
		//TODO: implement
//console.log('testOrgan_createFunction_string_string');
//	var p__functionName = '';
//	var p__constittiutionHash = '';
//	var res = this.test_instance.createFunction( p__functionName, p__constittiutionHash);
//	var state = res==="";		
		this.printTest("testcreateFunction", "executed: testOrgan_createFunction_string_string", false);		
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

	//Test for Organ_initalizeOrgan
	this.testOrgan_initalizeOrgan=function() {
		//Start of user code test_Organ_initalizeOrgan
		//TODO: implement
//console.log('testOrgan_initalizeOrgan');
//	var res = this.test_instance.initalizeOrgan();
//	var state = res==="";		
		this.printTest("testinitalizeOrgan", "executed: testOrgan_initalizeOrgan", false);		
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

	//Test for Organ_publishFunctionMessage_uint_string_string_string
	this.testOrgan_publishFunctionMessage_uint_string_string_string=function() {
		//Start of user code test_Organ_publishFunctionMessage_uint_string_string_string
		//TODO: implement
//console.log('testOrgan_publishFunctionMessage_uint_string_string_string');
//	var p_id = '';
//	var p_message = '';
//	var p_hash = '';
//	var p_er = '';
//	var res = this.test_instance.publishFunctionMessage( p_id, p_message, p_hash, p_er);
//	var state = res==="";		
		this.printTest("testpublishFunctionMessage", "executed: testOrgan_publishFunctionMessage_uint_string_string_string", false);		
		//End of user code
	}

	//Test for Organ_createBallot_string_bytes32
	this.testOrgan_createBallot_string_bytes32=function() {
		//Start of user code test_Organ_createBallot_string_bytes32
		//TODO: implement
//console.log('testOrgan_createBallot_string_bytes32');
//	var p_name = '';
//	var p_proposalNames = '';
//	var res = this.test_instance.createBallot( p_name, p_proposalNames);
//	var state = res==="";		
		this.printTest("testcreateBallot", "executed: testOrgan_createBallot_string_bytes32", false);		
		//End of user code
	}

	//Test for Organ_getFunctionBlogAddress_uint
	this.testOrgan_getFunctionBlogAddress_uint=function() {
		//Start of user code test_Organ_getFunctionBlogAddress_uint
		//TODO: implement
//console.log('testOrgan_getFunctionBlogAddress_uint');
//	var p_id = '';
//	var res = this.test_instance.getFunctionBlogAddress( p_id);
//	var state = res==="";		
		this.printTest("testgetFunctionBlogAddress", "executed: testOrgan_getFunctionBlogAddress_uint", false);		
		//End of user code
	}

	//Test for Organ_getLastBallot
	this.testOrgan_getLastBallot=function() {
		//Start of user code test_Organ_getLastBallot
		//TODO: implement
//console.log('testOrgan_getLastBallot');
//	var res = this.test_instance.getLastBallot();
//	var state = res==="";		
		this.printTest("testgetLastBallot", "executed: testOrgan_getLastBallot", false);		
		//End of user code
	}

	//Test for Organ_getOrganBlog
	this.testOrgan_getOrganBlog=function() {
		//Start of user code test_Organ_getOrganBlog
		//TODO: implement
//console.log('testOrgan_getOrganBlog');
//	var res = this.test_instance.getOrganBlog();
//	var state = res==="";		
		this.printTest("testgetOrganBlog", "executed: testOrgan_getOrganBlog", false);		
		//End of user code
	}
	this.customTests=function() {
		//Start of user code test_Organ_custom tests
		//
		//End of user code
	}
}
//test class for Party
function TestParty(contract) {
	
	this.test_instance = contract;
	this.prefix='';
	this.messageBlockId = "testResult";
	var self = this;

	this.testSetup=function(){
		//Start of user code testSetup_Party
		//TODO: implement
		//End of user code
	}

	this.allTests=function(){
		this.testSetup();
		this.testAttributes();
		this.testParty_Party();
		this.testManageable_addManager_address();
		this.testParty_createOrgan_string();
		this.testManageable_removeManager_address();
		this.testManageable_isManager_address();
		this.customTests();
	
		//Start of user code allTests_Party
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
	//Start of user code attributeTests_Party
	//TODO: implement
	//End of user code
	}

	//Test for Party_Party
	this.testParty_Party=function() {
		//Start of user code test_Party_Party
		//TODO: implement
//console.log('testParty_Party');
//	var res = this.test_instance.Party();
//	var state = res==="";		
		this.printTest("testParty", "executed: testParty_Party", false);		
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

	//Test for Party_createOrgan_string
	this.testParty_createOrgan_string=function() {
		//Start of user code test_Party_createOrgan_string
		//TODO: implement
//console.log('testParty_createOrgan_string');
//	var p_organName = '';
//	var res = this.test_instance.createOrgan( p_organName);
//	var state = res==="";		
		this.printTest("testcreateOrgan", "executed: testParty_createOrgan_string", false);		
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
		//Start of user code test_Party_custom tests
		//
		//End of user code
	}
}
//test class for KUEKeNParty
function TestKUEKeNParty(contract) {
	
	this.test_instance = contract;
	this.prefix='';
	this.messageBlockId = "testResult";
	var self = this;

	this.testSetup=function(){
		//Start of user code testSetup_KUEKeNParty
		//TODO: implement
		//End of user code
	}

	this.allTests=function(){
		this.testSetup();
		this.testAttributes();
		this.testKUEKeNParty_KUEKeNParty();
		this.testParty_Party();
		this.testManageable_addManager_address();
		this.testKUEKeNParty_boostrapParty_address_address();
		this.testParty_createOrgan_string();
		this.testManageable_removeManager_address();
		this.testManageable_isManager_address();
		this.customTests();
	
		//Start of user code allTests_KUEKeNParty
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
	//Start of user code attributeTests_KUEKeNParty
	//TODO: implement
	//End of user code
	}

	//Test for KUEKeNParty_KUEKeNParty
	this.testKUEKeNParty_KUEKeNParty=function() {
		//Start of user code test_KUEKeNParty_KUEKeNParty
		//TODO: implement
//console.log('testKUEKeNParty_KUEKeNParty');
//	var res = this.test_instance.KUEKeNParty();
//	var state = res==="";		
		this.printTest("testKUEKeNParty", "executed: testKUEKeNParty_KUEKeNParty", false);		
		//End of user code
	}

	//Test for Party_Party
	this.testParty_Party=function() {
		//Start of user code test_Party_Party
		//TODO: implement
//console.log('testParty_Party');
//	var res = this.test_instance.Party();
//	var state = res==="";		
		this.printTest("testParty", "executed: testParty_Party", false);		
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

	//Test for KUEKeNParty_boostrapParty_address_address
	this.testKUEKeNParty_boostrapParty_address_address=function() {
		//Start of user code test_KUEKeNParty_boostrapParty_address_address
		//TODO: implement
//console.log('testKUEKeNParty_boostrapParty_address_address');
//	var p_fc = '';
//	var p_br = '';
//	var res = this.test_instance.boostrapParty( p_fc, p_br);
//	var state = res==="";		
		this.printTest("testboostrapParty", "executed: testKUEKeNParty_boostrapParty_address_address", false);		
		//End of user code
	}

	//Test for Party_createOrgan_string
	this.testParty_createOrgan_string=function() {
		//Start of user code test_Party_createOrgan_string
		//TODO: implement
//console.log('testParty_createOrgan_string');
//	var p_organName = '';
//	var res = this.test_instance.createOrgan( p_organName);
//	var state = res==="";		
		this.printTest("testcreateOrgan", "executed: testParty_createOrgan_string", false);		
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
		//Start of user code test_KUEKeNParty_custom tests
		//
		//End of user code
	}
}
//test class for Conference
function TestConference(contract) {
	
	this.test_instance = contract;
	this.prefix='';
	this.messageBlockId = "testResult";
	var self = this;

	this.testSetup=function(){
		//Start of user code testSetup_Conference
		//TODO: implement
		//End of user code
	}

	this.allTests=function(){
		this.testSetup();
		this.testAttributes();
		this.testConference_accreditationMember_address();
		this.testOrgan_changeMember_uint_address();
		this.testManageable_addManager_address();
		this.testOrgan_createFunction_string_string();
		this.testManageable_removeManager_address();
		this.testOrgan_initalizeOrgan();
		this.testManageable_isManager_address();
		this.testOrgan_publishFunctionMessage_uint_string_string_string();
		this.testOrgan_createBallot_string_bytes32();
		this.testOrgan_getFunctionBlogAddress_uint();
		this.testOrgan_getLastBallot();
		this.testOrgan_getOrganBlog();
		this.customTests();
	
		//Start of user code allTests_Conference
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
	//Start of user code attributeTests_Conference
	//TODO: implement
	//End of user code
	}

	//Test for Conference_accreditationMember_address
	this.testConference_accreditationMember_address=function() {
		//Start of user code test_Conference_accreditationMember_address
		//TODO: implement
//console.log('testConference_accreditationMember_address');
//	var p__address = '';
//	var res = this.test_instance.accreditationMember( p__address);
//	var state = res==="";		
		this.printTest("testaccreditationMember", "executed: testConference_accreditationMember_address", false);		
		//End of user code
	}

	//Test for Organ_changeMember_uint_address
	this.testOrgan_changeMember_uint_address=function() {
		//Start of user code test_Organ_changeMember_uint_address
		//TODO: implement
//console.log('testOrgan_changeMember_uint_address');
//	var p__id = '';
//	var p__address = '';
//	var res = this.test_instance.changeMember( p__id, p__address);
//	var state = res==="";		
		this.printTest("testchangeMember", "executed: testOrgan_changeMember_uint_address", false);		
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

	//Test for Organ_createFunction_string_string
	this.testOrgan_createFunction_string_string=function() {
		//Start of user code test_Organ_createFunction_string_string
		//TODO: implement
//console.log('testOrgan_createFunction_string_string');
//	var p__functionName = '';
//	var p__constittiutionHash = '';
//	var res = this.test_instance.createFunction( p__functionName, p__constittiutionHash);
//	var state = res==="";		
		this.printTest("testcreateFunction", "executed: testOrgan_createFunction_string_string", false);		
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

	//Test for Organ_initalizeOrgan
	this.testOrgan_initalizeOrgan=function() {
		//Start of user code test_Organ_initalizeOrgan
		//TODO: implement
//console.log('testOrgan_initalizeOrgan');
//	var res = this.test_instance.initalizeOrgan();
//	var state = res==="";		
		this.printTest("testinitalizeOrgan", "executed: testOrgan_initalizeOrgan", false);		
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

	//Test for Organ_publishFunctionMessage_uint_string_string_string
	this.testOrgan_publishFunctionMessage_uint_string_string_string=function() {
		//Start of user code test_Organ_publishFunctionMessage_uint_string_string_string
		//TODO: implement
//console.log('testOrgan_publishFunctionMessage_uint_string_string_string');
//	var p_id = '';
//	var p_message = '';
//	var p_hash = '';
//	var p_er = '';
//	var res = this.test_instance.publishFunctionMessage( p_id, p_message, p_hash, p_er);
//	var state = res==="";		
		this.printTest("testpublishFunctionMessage", "executed: testOrgan_publishFunctionMessage_uint_string_string_string", false);		
		//End of user code
	}

	//Test for Organ_createBallot_string_bytes32
	this.testOrgan_createBallot_string_bytes32=function() {
		//Start of user code test_Organ_createBallot_string_bytes32
		//TODO: implement
//console.log('testOrgan_createBallot_string_bytes32');
//	var p_name = '';
//	var p_proposalNames = '';
//	var res = this.test_instance.createBallot( p_name, p_proposalNames);
//	var state = res==="";		
		this.printTest("testcreateBallot", "executed: testOrgan_createBallot_string_bytes32", false);		
		//End of user code
	}

	//Test for Organ_getFunctionBlogAddress_uint
	this.testOrgan_getFunctionBlogAddress_uint=function() {
		//Start of user code test_Organ_getFunctionBlogAddress_uint
		//TODO: implement
//console.log('testOrgan_getFunctionBlogAddress_uint');
//	var p_id = '';
//	var res = this.test_instance.getFunctionBlogAddress( p_id);
//	var state = res==="";		
		this.printTest("testgetFunctionBlogAddress", "executed: testOrgan_getFunctionBlogAddress_uint", false);		
		//End of user code
	}

	//Test for Organ_getLastBallot
	this.testOrgan_getLastBallot=function() {
		//Start of user code test_Organ_getLastBallot
		//TODO: implement
//console.log('testOrgan_getLastBallot');
//	var res = this.test_instance.getLastBallot();
//	var state = res==="";		
		this.printTest("testgetLastBallot", "executed: testOrgan_getLastBallot", false);		
		//End of user code
	}

	//Test for Organ_getOrganBlog
	this.testOrgan_getOrganBlog=function() {
		//Start of user code test_Organ_getOrganBlog
		//TODO: implement
//console.log('testOrgan_getOrganBlog');
//	var res = this.test_instance.getOrganBlog();
//	var state = res==="";		
		this.printTest("testgetOrganBlog", "executed: testOrgan_getOrganBlog", false);		
		//End of user code
	}
	this.customTests=function() {
		//Start of user code test_Conference_custom tests
		//
		//End of user code
	}
}
//test class for FoundationConference
function TestFoundationConference(contract) {
	
	this.test_instance = contract;
	this.prefix='';
	this.messageBlockId = "testResult";
	var self = this;

	this.testSetup=function(){
		//Start of user code testSetup_FoundationConference
		//TODO: implement
		//End of user code
	}

	this.allTests=function(){
		this.testSetup();
		this.testAttributes();
		this.testConference_accreditationMember_address();
		this.testOrgan_changeMember_uint_address();
		this.testManageable_addManager_address();
		this.testOrgan_createFunction_string_string();
		this.testManageable_removeManager_address();
		this.testOrgan_initalizeOrgan();
		this.testManageable_isManager_address();
		this.testOrgan_publishFunctionMessage_uint_string_string_string();
		this.testOrgan_createBallot_string_bytes32();
		this.testOrgan_getFunctionBlogAddress_uint();
		this.testOrgan_getLastBallot();
		this.testOrgan_getOrganBlog();
		this.customTests();
	
		//Start of user code allTests_FoundationConference
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
	//Start of user code attributeTests_FoundationConference
	//TODO: implement
	//End of user code
	}

	//Test for Conference_accreditationMember_address
	this.testConference_accreditationMember_address=function() {
		//Start of user code test_Conference_accreditationMember_address
		//TODO: implement
//console.log('testConference_accreditationMember_address');
//	var p__address = '';
//	var res = this.test_instance.accreditationMember( p__address);
//	var state = res==="";		
		this.printTest("testaccreditationMember", "executed: testConference_accreditationMember_address", false);		
		//End of user code
	}

	//Test for Organ_changeMember_uint_address
	this.testOrgan_changeMember_uint_address=function() {
		//Start of user code test_Organ_changeMember_uint_address
		//TODO: implement
//console.log('testOrgan_changeMember_uint_address');
//	var p__id = '';
//	var p__address = '';
//	var res = this.test_instance.changeMember( p__id, p__address);
//	var state = res==="";		
		this.printTest("testchangeMember", "executed: testOrgan_changeMember_uint_address", false);		
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

	//Test for Organ_createFunction_string_string
	this.testOrgan_createFunction_string_string=function() {
		//Start of user code test_Organ_createFunction_string_string
		//TODO: implement
//console.log('testOrgan_createFunction_string_string');
//	var p__functionName = '';
//	var p__constittiutionHash = '';
//	var res = this.test_instance.createFunction( p__functionName, p__constittiutionHash);
//	var state = res==="";		
		this.printTest("testcreateFunction", "executed: testOrgan_createFunction_string_string", false);		
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

	//Test for Organ_initalizeOrgan
	this.testOrgan_initalizeOrgan=function() {
		//Start of user code test_Organ_initalizeOrgan
		//TODO: implement
//console.log('testOrgan_initalizeOrgan');
//	var res = this.test_instance.initalizeOrgan();
//	var state = res==="";		
		this.printTest("testinitalizeOrgan", "executed: testOrgan_initalizeOrgan", false);		
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

	//Test for Organ_publishFunctionMessage_uint_string_string_string
	this.testOrgan_publishFunctionMessage_uint_string_string_string=function() {
		//Start of user code test_Organ_publishFunctionMessage_uint_string_string_string
		//TODO: implement
//console.log('testOrgan_publishFunctionMessage_uint_string_string_string');
//	var p_id = '';
//	var p_message = '';
//	var p_hash = '';
//	var p_er = '';
//	var res = this.test_instance.publishFunctionMessage( p_id, p_message, p_hash, p_er);
//	var state = res==="";		
		this.printTest("testpublishFunctionMessage", "executed: testOrgan_publishFunctionMessage_uint_string_string_string", false);		
		//End of user code
	}

	//Test for Organ_createBallot_string_bytes32
	this.testOrgan_createBallot_string_bytes32=function() {
		//Start of user code test_Organ_createBallot_string_bytes32
		//TODO: implement
//console.log('testOrgan_createBallot_string_bytes32');
//	var p_name = '';
//	var p_proposalNames = '';
//	var res = this.test_instance.createBallot( p_name, p_proposalNames);
//	var state = res==="";		
		this.printTest("testcreateBallot", "executed: testOrgan_createBallot_string_bytes32", false);		
		//End of user code
	}

	//Test for Organ_getFunctionBlogAddress_uint
	this.testOrgan_getFunctionBlogAddress_uint=function() {
		//Start of user code test_Organ_getFunctionBlogAddress_uint
		//TODO: implement
//console.log('testOrgan_getFunctionBlogAddress_uint');
//	var p_id = '';
//	var res = this.test_instance.getFunctionBlogAddress( p_id);
//	var state = res==="";		
		this.printTest("testgetFunctionBlogAddress", "executed: testOrgan_getFunctionBlogAddress_uint", false);		
		//End of user code
	}

	//Test for Organ_getLastBallot
	this.testOrgan_getLastBallot=function() {
		//Start of user code test_Organ_getLastBallot
		//TODO: implement
//console.log('testOrgan_getLastBallot');
//	var res = this.test_instance.getLastBallot();
//	var state = res==="";		
		this.printTest("testgetLastBallot", "executed: testOrgan_getLastBallot", false);		
		//End of user code
	}

	//Test for Organ_getOrganBlog
	this.testOrgan_getOrganBlog=function() {
		//Start of user code test_Organ_getOrganBlog
		//TODO: implement
//console.log('testOrgan_getOrganBlog');
//	var res = this.test_instance.getOrganBlog();
//	var state = res==="";		
		this.printTest("testgetOrganBlog", "executed: testOrgan_getOrganBlog", false);		
		//End of user code
	}
	this.customTests=function() {
		//Start of user code test_FoundationConference_custom tests
		//
		//End of user code
	}
}
