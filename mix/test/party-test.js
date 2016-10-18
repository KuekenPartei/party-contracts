// file header
/**
* A simple bean class around the contract.
* The OrganModel.
**/
function OrganModel(contract) {
this.contract = contract;
	/**
	* Getter for memberRegistry.
	**/
	this.getMemberRegistry = function(){
		return contract.memberRegistry(); 
	}
	/**
	* Getter for mangerCount.
	**/
	this.getMangerCount = function(){
		return contract.mangerCount(); 
	}
	/**
	* Getter for organName.
	**/
	this.getOrganName = function(){
		return contract.organName(); 
	}
	/**
	* Getter for lastFunctionId.
	**/
	this.getLastFunctionId = function(){
		return contract.lastFunctionId(); 
	}
	/**
	* Getter for blogRegistry.
	**/
	this.getBlogRegistry = function(){
		return contract.blogRegistry(); 
	}
	/**
	* Getter for isActive.
	**/
	this.getIsActive = function(){
		return contract.isActive(); 
	}
	/**
	* Getter for ballotCount.
	**/
	this.getBallotCount = function(){
		return contract.ballotCount(); 
	}
	/**
	* Call changeMember.
	**/
	this.changeMember = function(_id,_address){
		return contract.changeMember(_id,_address); 
	}
	/**
	* Call addManager.
	**/
	this.addManager = function(_newManagerAddress){
		return contract.addManager(_newManagerAddress); 
	}
	/**
	* Call createFunction.
	**/
	this.createFunction = function(_functionName,_constittiutionHash){
		return contract.createFunction(_functionName,_constittiutionHash); 
	}
	/**
	* Call removeManager.
	**/
	this.removeManager = function(_managerAddress){
		return contract.removeManager(_managerAddress); 
	}
	/**
	* Call initalizeOrgan.
	**/
	this.initalizeOrgan = function(){
		return contract.initalizeOrgan(); 
	}
	/**
	* Call isManager.
	**/
	this.isManager = function(_managerAddress){
		return contract.isManager(_managerAddress); 
	}
	/**
	* Call publishFunctionMessage.
	**/
	this.publishFunctionMessage = function(id,message,hash,er){
		return contract.publishFunctionMessage(id,message,hash,er); 
	}
	/**
	* Call createBallot.
	**/
	this.createBallot = function(name,proposalNames){
		return contract.createBallot(name,proposalNames); 
	}
	/**
	* Call getFunctionBlogAddress.
	**/
	this.getFunctionBlogAddress = function(id){
		return contract.getFunctionBlogAddress(id); 
	}
	/**
	* Call getLastBallot.
	**/
	this.getLastBallot = function(){
		return contract.getLastBallot(); 
	}
	/**
	* Call getOrganBlog.
	**/
	this.getOrganBlog = function(){
		return contract.getOrganBlog(); 
	}
}// end of function OrganModel

//test class for Organ
function TestOrgan(contract) {
	
	this.test_instance = contract;
	this.model = new OrganModel(contract);
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
	//Start of user code attributeTests_Organ
	var lf = this.model.getLastFunctionId();
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
		this.testAE("testchangeMember", "executed: testOrgan_changeMember_uint_address",true, false);		
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
		this.testAE("testaddManager", "executed: testManageable_addManager_address",true, false);		
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
		this.testAE("testcreateFunction", "executed: testOrgan_createFunction_string_string",true, false);		
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
		this.testAE("testremoveManager", "executed: testManageable_removeManager_address",true, false);		
		//End of user code
	}

	//Test for Organ_initalizeOrgan
	this.testOrgan_initalizeOrgan=function() {
		//Start of user code test_Organ_initalizeOrgan
		//TODO: implement
//console.log('testOrgan_initalizeOrgan');
//	var res = this.test_instance.initalizeOrgan();
//	var state = res==="";		
		this.testAE("testinitalizeOrgan", "executed: testOrgan_initalizeOrgan",true, false);		
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
		this.testAE("testisManager", "executed: testManageable_isManager_address",true, false);		
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
		this.testAE("testpublishFunctionMessage", "executed: testOrgan_publishFunctionMessage_uint_string_string_string",true, false);		
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
		this.testAE("testcreateBallot", "executed: testOrgan_createBallot_string_bytes32",true, false);		
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
		this.testAE("testgetFunctionBlogAddress", "executed: testOrgan_getFunctionBlogAddress_uint",true, false);		
		//End of user code
	}

	//Test for Organ_getLastBallot
	this.testOrgan_getLastBallot=function() {
		//Start of user code test_Organ_getLastBallot
		//TODO: implement
//console.log('testOrgan_getLastBallot');
//	var res = this.test_instance.getLastBallot();
//	var state = res==="";		
		this.testAE("testgetLastBallot", "executed: testOrgan_getLastBallot",true, false);		
		//End of user code
	}

	//Test for Organ_getOrganBlog
	this.testOrgan_getOrganBlog=function() {
		//Start of user code test_Organ_getOrganBlog
		//TODO: implement
//console.log('testOrgan_getOrganBlog');
//	var res = this.test_instance.getOrganBlog();
//	var state = res==="";		
		this.testAE("testgetOrganBlog", "executed: testOrgan_getOrganBlog",true, false);		
		//End of user code
	}
	this.customTests=function() {
		//Start of user code test_Organ_custom tests
		//
		//End of user code
	}
}
/**
* A simple bean class around the contract.
* The PartyModel.
**/
function PartyModel(contract) {
this.contract = contract;
	/**
	* Getter for mangerCount.
	**/
	this.getMangerCount = function(){
		return contract.mangerCount(); 
	}
	/**
	* Getter for constitutionHash.
	**/
	this.getConstitutionHash = function(){
		return contract.constitutionHash(); 
	}
	/**
	* Getter for organCount.
	**/
	this.getOrganCount = function(){
		return contract.organCount(); 
	}
	/**
	* Getter for blogregistry.
	**/
	this.getBlogregistry = function(){
		return contract.blogregistry(); 
	}
	/**
	* Call Party.
	**/
	this.Party = function(){
		return contract.Party(); 
	}
	/**
	* Call addManager.
	**/
	this.addManager = function(_newManagerAddress){
		return contract.addManager(_newManagerAddress); 
	}
	/**
	* Call createOrgan.
	**/
	this.createOrgan = function(organName){
		return contract.createOrgan(organName); 
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
}// end of function PartyModel

//test class for Party
function TestParty(contract) {
	
	this.test_instance = contract;
	this.model = new PartyModel(contract);
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
		this.testAE("testParty", "executed: testParty_Party",true, false);		
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
		this.testAE("testaddManager", "executed: testManageable_addManager_address",true, false);		
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
		this.testAE("testcreateOrgan", "executed: testParty_createOrgan_string",true, false);		
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
		this.testAE("testremoveManager", "executed: testManageable_removeManager_address",true, false);		
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
		this.testAE("testisManager", "executed: testManageable_isManager_address",true, false);		
		//End of user code
	}
	this.customTests=function() {
		//Start of user code test_Party_custom tests
		//
		//End of user code
	}
}
/**
* A simple bean class around the contract.
* The KUEKeNPartyModel.
**/
function KUEKeNPartyModel(contract) {
this.contract = contract;
	/**
	* Getter for mangerCount.
	**/
	this.getMangerCount = function(){
		return contract.mangerCount(); 
	}
	/**
	* Getter for constitutionHash.
	**/
	this.getConstitutionHash = function(){
		return contract.constitutionHash(); 
	}
	/**
	* Getter for organCount.
	**/
	this.getOrganCount = function(){
		return contract.organCount(); 
	}
	/**
	* Getter for blogregistry.
	**/
	this.getBlogregistry = function(){
		return contract.blogregistry(); 
	}
	/**
	* Call KUEKeNParty.
	**/
	this.KUEKeNParty = function(){
		return contract.KUEKeNParty(); 
	}
	/**
	* Call Party.
	**/
	this.Party = function(){
		return contract.Party(); 
	}
	/**
	* Call addManager.
	**/
	this.addManager = function(_newManagerAddress){
		return contract.addManager(_newManagerAddress); 
	}
	/**
	* Call boostrapParty.
	**/
	this.boostrapParty = function(fc,br){
		return contract.boostrapParty(fc,br); 
	}
	/**
	* Call createOrgan.
	**/
	this.createOrgan = function(organName){
		return contract.createOrgan(organName); 
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
}// end of function KUEKeNPartyModel

//test class for KUEKeNParty
function TestKUEKeNParty(contract) {
	
	this.test_instance = contract;
	this.model = new KUEKeNPartyModel(contract);
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
	//Start of user code attributeTests_KUEKeNParty
		var count =	this.model.getOrganCount();
		this.printTest("organcount", "organcount:"+count, count==0);

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
		this.testAE("testParty", "executed: testParty_Party",true, false);		
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
		this.testAE("testaddManager", "executed: testManageable_addManager_address",true, false);		
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
		this.testAE("testcreateOrgan", "executed: testParty_createOrgan_string",true, false);		
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
		this.testAE("testremoveManager", "executed: testManageable_removeManager_address",true, false);		
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
		this.testAE("testisManager", "executed: testManageable_isManager_address",true, false);		
		//End of user code
	}
	this.customTests=function() {
		//Start of user code test_KUEKeNParty_custom tests
		//
		//End of user code
	}
}
/**
* A simple bean class around the contract.
* The ConferenceModel.
**/
function ConferenceModel(contract) {
this.contract = contract;
	/**
	* Getter for memberRegistry.
	**/
	this.getMemberRegistry = function(){
		return contract.memberRegistry(); 
	}
	/**
	* Getter for accreditatedMembers.
	**/
	this.getAccreditatedMembers = function(){
		return contract.accreditatedMembers(); 
	}
	/**
	* Getter for mangerCount.
	**/
	this.getMangerCount = function(){
		return contract.mangerCount(); 
	}
	/**
	* Getter for organName.
	**/
	this.getOrganName = function(){
		return contract.organName(); 
	}
	/**
	* Getter for date.
	**/
	this.getDate = function(){
		return contract.date(); 
	}
	/**
	* Getter for lastFunctionId.
	**/
	this.getLastFunctionId = function(){
		return contract.lastFunctionId(); 
	}
	/**
	* Getter for blogRegistry.
	**/
	this.getBlogRegistry = function(){
		return contract.blogRegistry(); 
	}
	/**
	* Getter for isActive.
	**/
	this.getIsActive = function(){
		return contract.isActive(); 
	}
	/**
	* Getter for ballotCount.
	**/
	this.getBallotCount = function(){
		return contract.ballotCount(); 
	}
	/**
	* Call accreditationMember.
	**/
	this.accreditationMember = function(_address){
		return contract.accreditationMember(_address); 
	}
	/**
	* Call changeMember.
	**/
	this.changeMember = function(_id,_address){
		return contract.changeMember(_id,_address); 
	}
	/**
	* Call addManager.
	**/
	this.addManager = function(_newManagerAddress){
		return contract.addManager(_newManagerAddress); 
	}
	/**
	* Call createFunction.
	**/
	this.createFunction = function(_functionName,_constittiutionHash){
		return contract.createFunction(_functionName,_constittiutionHash); 
	}
	/**
	* Call removeManager.
	**/
	this.removeManager = function(_managerAddress){
		return contract.removeManager(_managerAddress); 
	}
	/**
	* Call initalizeOrgan.
	**/
	this.initalizeOrgan = function(){
		return contract.initalizeOrgan(); 
	}
	/**
	* Call isManager.
	**/
	this.isManager = function(_managerAddress){
		return contract.isManager(_managerAddress); 
	}
	/**
	* Call publishFunctionMessage.
	**/
	this.publishFunctionMessage = function(id,message,hash,er){
		return contract.publishFunctionMessage(id,message,hash,er); 
	}
	/**
	* Call createBallot.
	**/
	this.createBallot = function(name,proposalNames){
		return contract.createBallot(name,proposalNames); 
	}
	/**
	* Call getFunctionBlogAddress.
	**/
	this.getFunctionBlogAddress = function(id){
		return contract.getFunctionBlogAddress(id); 
	}
	/**
	* Call getLastBallot.
	**/
	this.getLastBallot = function(){
		return contract.getLastBallot(); 
	}
	/**
	* Call getOrganBlog.
	**/
	this.getOrganBlog = function(){
		return contract.getOrganBlog(); 
	}
}// end of function ConferenceModel

//test class for Conference
function TestConference(contract) {
	
	this.test_instance = contract;
	this.model = new ConferenceModel(contract);
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
		this.testAE("testaccreditationMember", "executed: testConference_accreditationMember_address",true, false);		
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
		this.testAE("testchangeMember", "executed: testOrgan_changeMember_uint_address",true, false);		
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
		this.testAE("testaddManager", "executed: testManageable_addManager_address",true, false);		
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
		this.testAE("testcreateFunction", "executed: testOrgan_createFunction_string_string",true, false);		
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
		this.testAE("testremoveManager", "executed: testManageable_removeManager_address",true, false);		
		//End of user code
	}

	//Test for Organ_initalizeOrgan
	this.testOrgan_initalizeOrgan=function() {
		//Start of user code test_Organ_initalizeOrgan
		//TODO: implement
//console.log('testOrgan_initalizeOrgan');
//	var res = this.test_instance.initalizeOrgan();
//	var state = res==="";		
		this.testAE("testinitalizeOrgan", "executed: testOrgan_initalizeOrgan",true, false);		
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
		this.testAE("testisManager", "executed: testManageable_isManager_address",true, false);		
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
		this.testAE("testpublishFunctionMessage", "executed: testOrgan_publishFunctionMessage_uint_string_string_string",true, false);		
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
		this.testAE("testcreateBallot", "executed: testOrgan_createBallot_string_bytes32",true, false);		
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
		this.testAE("testgetFunctionBlogAddress", "executed: testOrgan_getFunctionBlogAddress_uint",true, false);		
		//End of user code
	}

	//Test for Organ_getLastBallot
	this.testOrgan_getLastBallot=function() {
		//Start of user code test_Organ_getLastBallot
		//TODO: implement
//console.log('testOrgan_getLastBallot');
//	var res = this.test_instance.getLastBallot();
//	var state = res==="";		
		this.testAE("testgetLastBallot", "executed: testOrgan_getLastBallot",true, false);		
		//End of user code
	}

	//Test for Organ_getOrganBlog
	this.testOrgan_getOrganBlog=function() {
		//Start of user code test_Organ_getOrganBlog
		//TODO: implement
//console.log('testOrgan_getOrganBlog');
//	var res = this.test_instance.getOrganBlog();
//	var state = res==="";		
		this.testAE("testgetOrganBlog", "executed: testOrgan_getOrganBlog",true, false);		
		//End of user code
	}
	this.customTests=function() {
		//Start of user code test_Conference_custom tests
		//
		//End of user code
	}
}
/**
* A simple bean class around the contract.
* The FoundationConferenceModel.
**/
function FoundationConferenceModel(contract) {
this.contract = contract;
	/**
	* Getter for memberRegistry.
	**/
	this.getMemberRegistry = function(){
		return contract.memberRegistry(); 
	}
	/**
	* Getter for accreditatedMembers.
	**/
	this.getAccreditatedMembers = function(){
		return contract.accreditatedMembers(); 
	}
	/**
	* Getter for mangerCount.
	**/
	this.getMangerCount = function(){
		return contract.mangerCount(); 
	}
	/**
	* Getter for organName.
	**/
	this.getOrganName = function(){
		return contract.organName(); 
	}
	/**
	* Getter for date.
	**/
	this.getDate = function(){
		return contract.date(); 
	}
	/**
	* Getter for lastFunctionId.
	**/
	this.getLastFunctionId = function(){
		return contract.lastFunctionId(); 
	}
	/**
	* Getter for blogRegistry.
	**/
	this.getBlogRegistry = function(){
		return contract.blogRegistry(); 
	}
	/**
	* Getter for isActive.
	**/
	this.getIsActive = function(){
		return contract.isActive(); 
	}
	/**
	* Getter for ballotCount.
	**/
	this.getBallotCount = function(){
		return contract.ballotCount(); 
	}
	/**
	* Call accreditationMember.
	**/
	this.accreditationMember = function(_address){
		return contract.accreditationMember(_address); 
	}
	/**
	* Call changeMember.
	**/
	this.changeMember = function(_id,_address){
		return contract.changeMember(_id,_address); 
	}
	/**
	* Call addManager.
	**/
	this.addManager = function(_newManagerAddress){
		return contract.addManager(_newManagerAddress); 
	}
	/**
	* Call createFunction.
	**/
	this.createFunction = function(_functionName,_constittiutionHash){
		return contract.createFunction(_functionName,_constittiutionHash); 
	}
	/**
	* Call removeManager.
	**/
	this.removeManager = function(_managerAddress){
		return contract.removeManager(_managerAddress); 
	}
	/**
	* Call initalizeOrgan.
	**/
	this.initalizeOrgan = function(){
		return contract.initalizeOrgan(); 
	}
	/**
	* Call isManager.
	**/
	this.isManager = function(_managerAddress){
		return contract.isManager(_managerAddress); 
	}
	/**
	* Call publishFunctionMessage.
	**/
	this.publishFunctionMessage = function(id,message,hash,er){
		return contract.publishFunctionMessage(id,message,hash,er); 
	}
	/**
	* Call createBallot.
	**/
	this.createBallot = function(name,proposalNames){
		return contract.createBallot(name,proposalNames); 
	}
	/**
	* Call getFunctionBlogAddress.
	**/
	this.getFunctionBlogAddress = function(id){
		return contract.getFunctionBlogAddress(id); 
	}
	/**
	* Call getLastBallot.
	**/
	this.getLastBallot = function(){
		return contract.getLastBallot(); 
	}
	/**
	* Call getOrganBlog.
	**/
	this.getOrganBlog = function(){
		return contract.getOrganBlog(); 
	}
}// end of function FoundationConferenceModel

//test class for FoundationConference
function TestFoundationConference(contract) {
	
	this.test_instance = contract;
	this.model = new FoundationConferenceModel(contract);
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
		this.testAE("testaccreditationMember", "executed: testConference_accreditationMember_address",true, false);		
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
		this.testAE("testchangeMember", "executed: testOrgan_changeMember_uint_address",true, false);		
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
		this.testAE("testaddManager", "executed: testManageable_addManager_address",true, false);		
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
		this.testAE("testcreateFunction", "executed: testOrgan_createFunction_string_string",true, false);		
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
		this.testAE("testremoveManager", "executed: testManageable_removeManager_address",true, false);		
		//End of user code
	}

	//Test for Organ_initalizeOrgan
	this.testOrgan_initalizeOrgan=function() {
		//Start of user code test_Organ_initalizeOrgan
		//TODO: implement
//console.log('testOrgan_initalizeOrgan');
//	var res = this.test_instance.initalizeOrgan();
//	var state = res==="";		
		this.testAE("testinitalizeOrgan", "executed: testOrgan_initalizeOrgan",true, false);		
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
		this.testAE("testisManager", "executed: testManageable_isManager_address",true, false);		
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
		this.testAE("testpublishFunctionMessage", "executed: testOrgan_publishFunctionMessage_uint_string_string_string",true, false);		
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
		this.testAE("testcreateBallot", "executed: testOrgan_createBallot_string_bytes32",true, false);		
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
		this.testAE("testgetFunctionBlogAddress", "executed: testOrgan_getFunctionBlogAddress_uint",true, false);		
		//End of user code
	}

	//Test for Organ_getLastBallot
	this.testOrgan_getLastBallot=function() {
		//Start of user code test_Organ_getLastBallot
		//TODO: implement
//console.log('testOrgan_getLastBallot');
//	var res = this.test_instance.getLastBallot();
//	var state = res==="";		
		this.testAE("testgetLastBallot", "executed: testOrgan_getLastBallot",true, false);		
		//End of user code
	}

	//Test for Organ_getOrganBlog
	this.testOrgan_getOrganBlog=function() {
		//Start of user code test_Organ_getOrganBlog
		//TODO: implement
//console.log('testOrgan_getOrganBlog');
//	var res = this.test_instance.getOrganBlog();
//	var state = res==="";		
		this.testAE("testgetOrganBlog", "executed: testOrgan_getOrganBlog",true, false);		
		//End of user code
	}
	this.customTests=function() {
		//Start of user code test_FoundationConference_custom tests
		//
		//End of user code
	}
}
