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
	* Getter for mangerCount.
	**/
	this.getMangerCount = function(){
		return contract.mangerCount(); 
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
	* Get the mapped value for a key.
	*/
	this.getManagers=function(key) {
		return contract.managers(key);
	}
	/**
	* Call getOrganFunction.
	**/
	this.getOrganFunction = function(_id){
		return contract.getOrganFunction(_id); 
	}
	/**
	* Call addManager.
	**/
	this.addManager = function(_newManagerAddress){
		return contract.addManager(_newManagerAddress); 
	}
	/**
	* Call changeMember.
	**/
	this.changeMember = function(_id,_address){
		return contract.changeMember(_id,_address); 
	}
	/**
	* Call removeManager.
	**/
	this.removeManager = function(_managerAddress){
		return contract.removeManager(_managerAddress); 
	}
	/**
	* Call createFunction.
	**/
	this.createFunction = function(_functionName,_constittiutionHash){
		return contract.createFunction(_functionName,_constittiutionHash); 
	}
	/**
	* Call isManager.
	**/
	this.isManager = function(_managerAddress){
		return contract.isManager(_managerAddress); 
	}
	/**
	* Call initalizeOrgan.
	**/
	this.initalizeOrgan = function(){
		return contract.initalizeOrgan(); 
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
	/**
	* Call addOrganFunction.
	**/
	this.addOrganFunction = function(_of,_name){
		return contract.addOrganFunction(_of,_name); 
	}
	/**
	* Call publishMessage.
	**/
	this.publishMessage = function(message,hash,er){
		return contract.publishMessage(message,hash,er); 
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
		this.testOrgan_getOrganFunction_uint();
		this.testManageable_addManager_address();
		this.testOrgan_changeMember_uint_address();
		this.testManageable_removeManager_address();
		this.testOrgan_createFunction_string_string();
		this.testManageable_isManager_address();
		this.testOrgan_initalizeOrgan();
		this.testOrgan_publishFunctionMessage_uint_string_string_string();
		this.testOrgan_createBallot_string_bytes32();
		this.testOrgan_getLastBallot();
		this.testOrgan_getOrganBlog();
		this.testOrgan_addOrganFunction_address_string();
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
	this.testAE("testaddManager", "no function set",0, lf);	
	//End of user code
	}

	//Test for Organ_getOrganFunction_uint
	this.testOrgan_getOrganFunction_uint=function() {
		//	var res = this.test_instance.getOrganFunction( p__id);
		//Start of user code test_Organ_getOrganFunction_uint
		//TODO : implement this
		//var test = false;		
		//this.testAE("testgetOrganFunction", "executed: testOrgan_getOrganFunction_uint",true, test);		
		//End of user code
	}

	//Test for Manageable_addManager_address
	this.testManageable_addManager_address=function() {
		//	var res = this.test_instance.addManager( p__newManagerAddress);
		//Start of user code test_Organ_addManager_address
		//TODO : implement this
		//var test = false;		
		//this.testAE("testaddManager", "executed: testOrgan_addManager_address",true, test);		
		//End of user code
	}

	//Test for Organ_changeMember_uint_address
	this.testOrgan_changeMember_uint_address=function() {
		//	var res = this.test_instance.changeMember( p__id, p__address);
		//Start of user code test_Organ_changeMember_uint_address
		//TODO : implement this
		//var test = false;		
		//this.testAE("testchangeMember", "executed: testOrgan_changeMember_uint_address",true, test);		
		//End of user code
	}

	//Test for Manageable_removeManager_address
	this.testManageable_removeManager_address=function() {
		//	var res = this.test_instance.removeManager( p__managerAddress);
		//Start of user code test_Organ_removeManager_address
		//TODO : implement this
		//var test = false;		
		//this.testAE("testremoveManager", "executed: testOrgan_removeManager_address",true, test);		
		//End of user code
	}

	//Test for Organ_createFunction_string_string
	this.testOrgan_createFunction_string_string=function() {
		//	var res = this.test_instance.createFunction( p__functionName, p__constittiutionHash);
		//Start of user code test_Organ_createFunction_string_string
		//TODO : implement this
		//var test = false;		
		//this.testAE("testcreateFunction", "executed: testOrgan_createFunction_string_string",true, test);		
		//End of user code
	}

	//Test for Manageable_isManager_address
	this.testManageable_isManager_address=function() {
		//	var res = this.test_instance.isManager( p__managerAddress);
		//Start of user code test_Organ_isManager_address
		//TODO : implement this
		//var test = false;		
		//this.testAE("testisManager", "executed: testOrgan_isManager_address",true, test);		
		//End of user code
	}

	//Test for Organ_initalizeOrgan
	this.testOrgan_initalizeOrgan=function() {
		//	var res = this.test_instance.initalizeOrgan();
		//Start of user code test_Organ_initalizeOrgan
		//TODO : implement this
		//var test = false;		
		//this.testAE("testinitalizeOrgan", "executed: testOrgan_initalizeOrgan",true, test);		
		//End of user code
	}

	//Test for Organ_publishFunctionMessage_uint_string_string_string
	this.testOrgan_publishFunctionMessage_uint_string_string_string=function() {
		//	var res = this.test_instance.publishFunctionMessage( p_id, p_message, p_hash, p_er);
		//Start of user code test_Organ_publishFunctionMessage_uint_string_string_string
		//TODO : implement this
		//var test = false;		
		//this.testAE("testpublishFunctionMessage", "executed: testOrgan_publishFunctionMessage_uint_string_string_string",true, test);		
		//End of user code
	}

	//Test for Organ_createBallot_string_bytes32
	this.testOrgan_createBallot_string_bytes32=function() {
		//	var res = this.test_instance.createBallot( p_name, p_proposalNames);
		//Start of user code test_Organ_createBallot_string_bytes32
		//TODO : implement this
		//var test = false;		
		//this.testAE("testcreateBallot", "executed: testOrgan_createBallot_string_bytes32",true, test);		
		//End of user code
	}

	//Test for Organ_getLastBallot
	this.testOrgan_getLastBallot=function() {
		//	var res = this.test_instance.getLastBallot();
		//Start of user code test_Organ_getLastBallot
		//TODO : implement this
		//var test = false;		
		//this.testAE("testgetLastBallot", "executed: testOrgan_getLastBallot",true, test);		
		//End of user code
	}

	//Test for Organ_getOrganBlog
	this.testOrgan_getOrganBlog=function() {
		//	var res = this.test_instance.getOrganBlog();
		//Start of user code test_Organ_getOrganBlog
		//TODO : implement this
		//var test = false;		
		//this.testAE("testgetOrganBlog", "executed: testOrgan_getOrganBlog",true, test);		
		//End of user code
	}

	//Test for Organ_addOrganFunction_address_string
	this.testOrgan_addOrganFunction_address_string=function() {
		//	var res = this.test_instance.addOrganFunction( p__of, p__name);
		//Start of user code test_Organ_addOrganFunction_address_string
		//TODO : implement this
		//var test = false;		
		//this.testAE("testaddOrganFunction", "executed: testOrgan_addOrganFunction_address_string",true, test);		
		//End of user code
	}
	this.customTests=function() {
		//Start of user code test_Organ_custom tests
		var p__id = 1;
		var p__address =  web3.eth.accounts[1];
		var res = this.test_instance.changeMember( p__id, p__address);
		
		this.testAE("testchangeMember", "executed: testOrgan_changeMember_uint_address",true, false);		

		var p__address = this.test_instance.getOrganFunction(p__id);
		this.testAE("testgetOrganFunction", "executed: testOrgan_getOrganFunction_uint",true, false);		
		
		
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
	* Getter for name.
	**/
	this.getName = function(){
		return contract.name(); 
	}
	/**
	* Getter for mangerCount.
	**/
	this.getMangerCount = function(){
		return contract.mangerCount(); 
	}
	/**
	* Getter for memberRegistry.
	**/
	this.getMemberRegistry = function(){
		return contract.memberRegistry(); 
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
	* Getter for parent.
	**/
	this.getParent = function(){
		return contract.parent(); 
	}
	/**
	* Getter for subDivisionCount.
	**/
	this.getSubDivisionCount = function(){
		return contract.subDivisionCount(); 
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
	this.getOrgans=function(key) {
		return contract.organs(key);
	}
	/**
	* Get the mapped value for a key.
	*/
	this.getSubDivisions=function(key) {
		return contract.subDivisions(key);
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
	/**
	* Call createOrgan.
	**/
	this.createOrgan = function(organName){
		return contract.createOrgan(organName); 
	}
	/**
	* Call addOrgan.
	**/
	this.addOrgan = function(_organ){
		return contract.addOrgan(_organ); 
	}
	/**
	* Call addSubDivision.
	**/
	this.addSubDivision = function(_subDivision){
		return contract.addSubDivision(_subDivision); 
	}
	/**
	* Call removeSubDivision.
	**/
	this.removeSubDivision = function(_divisionId){
		return contract.removeSubDivision(_divisionId); 
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
		this.testManageable_addManager_address();
		this.testManageable_removeManager_address();
		this.testManageable_isManager_address();
		this.testParty_createOrgan_string();
		this.testParty_addOrgan_address();
		this.testParty_addSubDivision_address();
		this.testParty_removeSubDivision_uint();
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

	//Test for Manageable_addManager_address
	this.testManageable_addManager_address=function() {
		//	var res = this.test_instance.addManager( p__newManagerAddress);
		//Start of user code test_Party_addManager_address
		//TODO : implement this
		//var test = false;		
		//this.testAE("testaddManager", "executed: testParty_addManager_address",true, test);		
		//End of user code
	}

	//Test for Manageable_removeManager_address
	this.testManageable_removeManager_address=function() {
		//	var res = this.test_instance.removeManager( p__managerAddress);
		//Start of user code test_Party_removeManager_address
		//TODO : implement this
		//var test = false;		
		//this.testAE("testremoveManager", "executed: testParty_removeManager_address",true, test);		
		//End of user code
	}

	//Test for Manageable_isManager_address
	this.testManageable_isManager_address=function() {
		//	var res = this.test_instance.isManager( p__managerAddress);
		//Start of user code test_Party_isManager_address
		//TODO : implement this
		//var test = false;		
		//this.testAE("testisManager", "executed: testParty_isManager_address",true, test);		
		//End of user code
	}

	//Test for Party_createOrgan_string
	this.testParty_createOrgan_string=function() {
		//	var res = this.test_instance.createOrgan( p_organName);
		//Start of user code test_Party_createOrgan_string
		//TODO : implement this
		//var test = false;		
		//this.testAE("testcreateOrgan", "executed: testParty_createOrgan_string",true, test);		
		//End of user code
	}

	//Test for Party_addOrgan_address
	this.testParty_addOrgan_address=function() {
		//	var res = this.test_instance.addOrgan( p__organ);
		//Start of user code test_Party_addOrgan_address
		//TODO : implement this
		//var test = false;		
		//this.testAE("testaddOrgan", "executed: testParty_addOrgan_address",true, test);		
		//End of user code
	}

	//Test for Party_addSubDivision_address
	this.testParty_addSubDivision_address=function() {
		//	var res = this.test_instance.addSubDivision( p__subDivision);
		//Start of user code test_Party_addSubDivision_address
		//TODO : implement this
		//var test = false;		
		//this.testAE("testaddSubDivision", "executed: testParty_addSubDivision_address",true, test);		
		//End of user code
	}

	//Test for Party_removeSubDivision_uint
	this.testParty_removeSubDivision_uint=function() {
		//	var res = this.test_instance.removeSubDivision( p__divisionId);
		//Start of user code test_Party_removeSubDivision_uint
		//TODO : implement this
		//var test = false;		
		//this.testAE("testremoveSubDivision", "executed: testParty_removeSubDivision_uint",true, test);		
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
	* Getter for name.
	**/
	this.getName = function(){
		return contract.name(); 
	}
	/**
	* Getter for mangerCount.
	**/
	this.getMangerCount = function(){
		return contract.mangerCount(); 
	}
	/**
	* Getter for memberRegistry.
	**/
	this.getMemberRegistry = function(){
		return contract.memberRegistry(); 
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
	* Getter for parent.
	**/
	this.getParent = function(){
		return contract.parent(); 
	}
	/**
	* Getter for subDivisionCount.
	**/
	this.getSubDivisionCount = function(){
		return contract.subDivisionCount(); 
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
	this.getOrgans=function(key) {
		return contract.organs(key);
	}
	/**
	* Get the mapped value for a key.
	*/
	this.getSubDivisions=function(key) {
		return contract.subDivisions(key);
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
	/**
	* Call createOrgan.
	**/
	this.createOrgan = function(organName){
		return contract.createOrgan(organName); 
	}
	/**
	* Call addOrgan.
	**/
	this.addOrgan = function(_organ){
		return contract.addOrgan(_organ); 
	}
	/**
	* Call addSubDivision.
	**/
	this.addSubDivision = function(_subDivision){
		return contract.addSubDivision(_subDivision); 
	}
	/**
	* Call removeSubDivision.
	**/
	this.removeSubDivision = function(_divisionId){
		return contract.removeSubDivision(_divisionId); 
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
		this.testManageable_addManager_address();
		this.testKUEKeNParty_boostrapParty_address_address();
		this.testManageable_removeManager_address();
		this.testManageable_isManager_address();
		this.testParty_createOrgan_string();
		this.testParty_addOrgan_address();
		this.testParty_addSubDivision_address();
		this.testParty_removeSubDivision_uint();
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

	//Test for Manageable_addManager_address
	this.testManageable_addManager_address=function() {
		//	var res = this.test_instance.addManager( p__newManagerAddress);
		//Start of user code test_KUEKeNParty_addManager_address
		//TODO : implement this
		//var test = false;		
		//this.testAE("testaddManager", "executed: testKUEKeNParty_addManager_address",true, test);		
		//End of user code
	}

	//Test for KUEKeNParty_boostrapParty_address_address
	this.testKUEKeNParty_boostrapParty_address_address=function() {
		//	var res = this.test_instance.boostrapParty( p_fc, p_br);
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

	//Test for Manageable_removeManager_address
	this.testManageable_removeManager_address=function() {
		//	var res = this.test_instance.removeManager( p__managerAddress);
		//Start of user code test_KUEKeNParty_removeManager_address
		//TODO : implement this
		//var test = false;		
		//this.testAE("testremoveManager", "executed: testKUEKeNParty_removeManager_address",true, test);		
		//End of user code
	}

	//Test for Manageable_isManager_address
	this.testManageable_isManager_address=function() {
		//	var res = this.test_instance.isManager( p__managerAddress);
		//Start of user code test_KUEKeNParty_isManager_address
		//TODO : implement this
		//var test = false;		
		//this.testAE("testisManager", "executed: testKUEKeNParty_isManager_address",true, test);		
		//End of user code
	}

	//Test for Party_createOrgan_string
	this.testParty_createOrgan_string=function() {
		//	var res = this.test_instance.createOrgan( p_organName);
		//Start of user code test_KUEKeNParty_createOrgan_string
		//TODO : implement this
		//var test = false;		
		//this.testAE("testcreateOrgan", "executed: testKUEKeNParty_createOrgan_string",true, test);		
		//End of user code
	}

	//Test for Party_addOrgan_address
	this.testParty_addOrgan_address=function() {
		//	var res = this.test_instance.addOrgan( p__organ);
		//Start of user code test_KUEKeNParty_addOrgan_address
		//TODO : implement this
		//var test = false;		
		//this.testAE("testaddOrgan", "executed: testKUEKeNParty_addOrgan_address",true, test);		
		//End of user code
	}

	//Test for Party_addSubDivision_address
	this.testParty_addSubDivision_address=function() {
		//	var res = this.test_instance.addSubDivision( p__subDivision);
		//Start of user code test_KUEKeNParty_addSubDivision_address
		//TODO : implement this
		//var test = false;		
		//this.testAE("testaddSubDivision", "executed: testKUEKeNParty_addSubDivision_address",true, test);		
		//End of user code
	}

	//Test for Party_removeSubDivision_uint
	this.testParty_removeSubDivision_uint=function() {
		//	var res = this.test_instance.removeSubDivision( p__divisionId);
		//Start of user code test_KUEKeNParty_removeSubDivision_uint
		//TODO : implement this
		//var test = false;		
		//this.testAE("testremoveSubDivision", "executed: testKUEKeNParty_removeSubDivision_uint",true, test);		
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
	* Getter for organName.
	**/
	this.getOrganName = function(){
		return contract.organName(); 
	}
	/**
	* Getter for accreditatedMembers.
	**/
	this.getAccreditatedMembers = function(){
		return contract.accreditatedMembers(); 
	}
	/**
	* Getter for lastFunctionId.
	**/
	this.getLastFunctionId = function(){
		return contract.lastFunctionId(); 
	}
	/**
	* Getter for mangerCount.
	**/
	this.getMangerCount = function(){
		return contract.mangerCount(); 
	}
	/**
	* Getter for blogRegistry.
	**/
	this.getBlogRegistry = function(){
		return contract.blogRegistry(); 
	}
	/**
	* Getter for date.
	**/
	this.getDate = function(){
		return contract.date(); 
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
	* Get the mapped value for a key.
	*/
	this.getManagers=function(key) {
		return contract.managers(key);
	}
	/**
	* Call accreditationMember.
	**/
	this.accreditationMember = function(_address){
		return contract.accreditationMember(_address); 
	}
	/**
	* Call getOrganFunction.
	**/
	this.getOrganFunction = function(_id){
		return contract.getOrganFunction(_id); 
	}
	/**
	* Call addManager.
	**/
	this.addManager = function(_newManagerAddress){
		return contract.addManager(_newManagerAddress); 
	}
	/**
	* Call changeMember.
	**/
	this.changeMember = function(_id,_address){
		return contract.changeMember(_id,_address); 
	}
	/**
	* Call removeManager.
	**/
	this.removeManager = function(_managerAddress){
		return contract.removeManager(_managerAddress); 
	}
	/**
	* Call createFunction.
	**/
	this.createFunction = function(_functionName,_constittiutionHash){
		return contract.createFunction(_functionName,_constittiutionHash); 
	}
	/**
	* Call isManager.
	**/
	this.isManager = function(_managerAddress){
		return contract.isManager(_managerAddress); 
	}
	/**
	* Call initalizeOrgan.
	**/
	this.initalizeOrgan = function(){
		return contract.initalizeOrgan(); 
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
	/**
	* Call addOrganFunction.
	**/
	this.addOrganFunction = function(_of,_name){
		return contract.addOrganFunction(_of,_name); 
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
		this.testOrgan_getOrganFunction_uint();
		this.testManageable_addManager_address();
		this.testOrgan_changeMember_uint_address();
		this.testManageable_removeManager_address();
		this.testOrgan_createFunction_string_string();
		this.testManageable_isManager_address();
		this.testOrgan_initalizeOrgan();
		this.testOrgan_publishFunctionMessage_uint_string_string_string();
		this.testOrgan_createBallot_string_bytes32();
		this.testOrgan_getLastBallot();
		this.testOrgan_getOrganBlog();
		this.testOrgan_addOrganFunction_address_string();
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
		//	var res = this.test_instance.accreditationMember( p__address);
		//Start of user code test_Conference_accreditationMember_address
		//TODO : implement this
		//var test = false;		
		//this.testAE("testaccreditationMember", "executed: testConference_accreditationMember_address",true, test);		
		//End of user code
	}

	//Test for Organ_getOrganFunction_uint
	this.testOrgan_getOrganFunction_uint=function() {
		//	var res = this.test_instance.getOrganFunction( p__id);
		//Start of user code test_Conference_getOrganFunction_uint
		//TODO : implement this
		//var test = false;		
		//this.testAE("testgetOrganFunction", "executed: testConference_getOrganFunction_uint",true, test);		
		//End of user code
	}

	//Test for Manageable_addManager_address
	this.testManageable_addManager_address=function() {
		//	var res = this.test_instance.addManager( p__newManagerAddress);
		//Start of user code test_Conference_addManager_address
		//TODO : implement this
		//var test = false;		
		//this.testAE("testaddManager", "executed: testConference_addManager_address",true, test);		
		//End of user code
	}

	//Test for Organ_changeMember_uint_address
	this.testOrgan_changeMember_uint_address=function() {
		//	var res = this.test_instance.changeMember( p__id, p__address);
		//Start of user code test_Conference_changeMember_uint_address
		//TODO : implement this
		//var test = false;		
		//this.testAE("testchangeMember", "executed: testConference_changeMember_uint_address",true, test);		
		//End of user code
	}

	//Test for Manageable_removeManager_address
	this.testManageable_removeManager_address=function() {
		//	var res = this.test_instance.removeManager( p__managerAddress);
		//Start of user code test_Conference_removeManager_address
		//TODO : implement this
		//var test = false;		
		//this.testAE("testremoveManager", "executed: testConference_removeManager_address",true, test);		
		//End of user code
	}

	//Test for Organ_createFunction_string_string
	this.testOrgan_createFunction_string_string=function() {
		//	var res = this.test_instance.createFunction( p__functionName, p__constittiutionHash);
		//Start of user code test_Conference_createFunction_string_string
		//TODO : implement this
		//var test = false;		
		//this.testAE("testcreateFunction", "executed: testConference_createFunction_string_string",true, test);		
		//End of user code
	}

	//Test for Manageable_isManager_address
	this.testManageable_isManager_address=function() {
		//	var res = this.test_instance.isManager( p__managerAddress);
		//Start of user code test_Conference_isManager_address
		//TODO : implement this
		//var test = false;		
		//this.testAE("testisManager", "executed: testConference_isManager_address",true, test);		
		//End of user code
	}

	//Test for Organ_initalizeOrgan
	this.testOrgan_initalizeOrgan=function() {
		//	var res = this.test_instance.initalizeOrgan();
		//Start of user code test_Conference_initalizeOrgan
		//TODO : implement this
		//var test = false;		
		//this.testAE("testinitalizeOrgan", "executed: testConference_initalizeOrgan",true, test);		
		//End of user code
	}

	//Test for Organ_publishFunctionMessage_uint_string_string_string
	this.testOrgan_publishFunctionMessage_uint_string_string_string=function() {
		//	var res = this.test_instance.publishFunctionMessage( p_id, p_message, p_hash, p_er);
		//Start of user code test_Conference_publishFunctionMessage_uint_string_string_string
		//TODO : implement this
		//var test = false;		
		//this.testAE("testpublishFunctionMessage", "executed: testConference_publishFunctionMessage_uint_string_string_string",true, test);		
		//End of user code
	}

	//Test for Organ_createBallot_string_bytes32
	this.testOrgan_createBallot_string_bytes32=function() {
		//	var res = this.test_instance.createBallot( p_name, p_proposalNames);
		//Start of user code test_Conference_createBallot_string_bytes32
		//TODO : implement this
		//var test = false;		
		//this.testAE("testcreateBallot", "executed: testConference_createBallot_string_bytes32",true, test);		
		//End of user code
	}

	//Test for Organ_getLastBallot
	this.testOrgan_getLastBallot=function() {
		//	var res = this.test_instance.getLastBallot();
		//Start of user code test_Conference_getLastBallot
		//TODO : implement this
		//var test = false;		
		//this.testAE("testgetLastBallot", "executed: testConference_getLastBallot",true, test);		
		//End of user code
	}

	//Test for Organ_getOrganBlog
	this.testOrgan_getOrganBlog=function() {
		//	var res = this.test_instance.getOrganBlog();
		//Start of user code test_Conference_getOrganBlog
		//TODO : implement this
		//var test = false;		
		//this.testAE("testgetOrganBlog", "executed: testConference_getOrganBlog",true, test);		
		//End of user code
	}

	//Test for Organ_addOrganFunction_address_string
	this.testOrgan_addOrganFunction_address_string=function() {
		//	var res = this.test_instance.addOrganFunction( p__of, p__name);
		//Start of user code test_Conference_addOrganFunction_address_string
		//TODO : implement this
		//var test = false;		
		//this.testAE("testaddOrganFunction", "executed: testConference_addOrganFunction_address_string",true, test);		
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
	* Getter for organName.
	**/
	this.getOrganName = function(){
		return contract.organName(); 
	}
	/**
	* Getter for accreditatedMembers.
	**/
	this.getAccreditatedMembers = function(){
		return contract.accreditatedMembers(); 
	}
	/**
	* Getter for lastFunctionId.
	**/
	this.getLastFunctionId = function(){
		return contract.lastFunctionId(); 
	}
	/**
	* Getter for mangerCount.
	**/
	this.getMangerCount = function(){
		return contract.mangerCount(); 
	}
	/**
	* Getter for blogRegistry.
	**/
	this.getBlogRegistry = function(){
		return contract.blogRegistry(); 
	}
	/**
	* Getter for date.
	**/
	this.getDate = function(){
		return contract.date(); 
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
	* Get the mapped value for a key.
	*/
	this.getManagers=function(key) {
		return contract.managers(key);
	}
	/**
	* Call accreditationMember.
	**/
	this.accreditationMember = function(_address){
		return contract.accreditationMember(_address); 
	}
	/**
	* Call getOrganFunction.
	**/
	this.getOrganFunction = function(_id){
		return contract.getOrganFunction(_id); 
	}
	/**
	* Call addManager.
	**/
	this.addManager = function(_newManagerAddress){
		return contract.addManager(_newManagerAddress); 
	}
	/**
	* Call changeMember.
	**/
	this.changeMember = function(_id,_address){
		return contract.changeMember(_id,_address); 
	}
	/**
	* Call removeManager.
	**/
	this.removeManager = function(_managerAddress){
		return contract.removeManager(_managerAddress); 
	}
	/**
	* Call createFunction.
	**/
	this.createFunction = function(_functionName,_constittiutionHash){
		return contract.createFunction(_functionName,_constittiutionHash); 
	}
	/**
	* Call isManager.
	**/
	this.isManager = function(_managerAddress){
		return contract.isManager(_managerAddress); 
	}
	/**
	* Call initalizeOrgan.
	**/
	this.initalizeOrgan = function(){
		return contract.initalizeOrgan(); 
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
	/**
	* Call addOrganFunction.
	**/
	this.addOrganFunction = function(_of,_name){
		return contract.addOrganFunction(_of,_name); 
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
		this.testOrgan_getOrganFunction_uint();
		this.testManageable_addManager_address();
		this.testOrgan_changeMember_uint_address();
		this.testManageable_removeManager_address();
		this.testOrgan_createFunction_string_string();
		this.testManageable_isManager_address();
		this.testOrgan_initalizeOrgan();
		this.testOrgan_publishFunctionMessage_uint_string_string_string();
		this.testOrgan_createBallot_string_bytes32();
		this.testOrgan_getLastBallot();
		this.testOrgan_getOrganBlog();
		this.testOrgan_addOrganFunction_address_string();
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
		//	var res = this.test_instance.accreditationMember( p__address);
		//Start of user code test_FoundationConference_accreditationMember_address
		//TODO : implement this
		//var test = false;		
		//this.testAE("testaccreditationMember", "executed: testFoundationConference_accreditationMember_address",true, test);		
		//End of user code
	}

	//Test for Organ_getOrganFunction_uint
	this.testOrgan_getOrganFunction_uint=function() {
		//	var res = this.test_instance.getOrganFunction( p__id);
		//Start of user code test_FoundationConference_getOrganFunction_uint
		//TODO : implement this
		//var test = false;		
		//this.testAE("testgetOrganFunction", "executed: testFoundationConference_getOrganFunction_uint",true, test);		
		//End of user code
	}

	//Test for Manageable_addManager_address
	this.testManageable_addManager_address=function() {
		//	var res = this.test_instance.addManager( p__newManagerAddress);
		//Start of user code test_FoundationConference_addManager_address
		//TODO : implement this
		//var test = false;		
		//this.testAE("testaddManager", "executed: testFoundationConference_addManager_address",true, test);		
		//End of user code
	}

	//Test for Organ_changeMember_uint_address
	this.testOrgan_changeMember_uint_address=function() {
		//	var res = this.test_instance.changeMember( p__id, p__address);
		//Start of user code test_FoundationConference_changeMember_uint_address
		//TODO : implement this
		//var test = false;		
		//this.testAE("testchangeMember", "executed: testFoundationConference_changeMember_uint_address",true, test);		
		//End of user code
	}

	//Test for Manageable_removeManager_address
	this.testManageable_removeManager_address=function() {
		//	var res = this.test_instance.removeManager( p__managerAddress);
		//Start of user code test_FoundationConference_removeManager_address
		//TODO : implement this
		//var test = false;		
		//this.testAE("testremoveManager", "executed: testFoundationConference_removeManager_address",true, test);		
		//End of user code
	}

	//Test for Organ_createFunction_string_string
	this.testOrgan_createFunction_string_string=function() {
		//	var res = this.test_instance.createFunction( p__functionName, p__constittiutionHash);
		//Start of user code test_FoundationConference_createFunction_string_string
		//TODO : implement this
		//var test = false;		
		//this.testAE("testcreateFunction", "executed: testFoundationConference_createFunction_string_string",true, test);		
		//End of user code
	}

	//Test for Manageable_isManager_address
	this.testManageable_isManager_address=function() {
		//	var res = this.test_instance.isManager( p__managerAddress);
		//Start of user code test_FoundationConference_isManager_address
		//TODO : implement this
		//var test = false;		
		//this.testAE("testisManager", "executed: testFoundationConference_isManager_address",true, test);		
		//End of user code
	}

	//Test for Organ_initalizeOrgan
	this.testOrgan_initalizeOrgan=function() {
		//	var res = this.test_instance.initalizeOrgan();
		//Start of user code test_FoundationConference_initalizeOrgan
		//TODO : implement this
		//var test = false;		
		//this.testAE("testinitalizeOrgan", "executed: testFoundationConference_initalizeOrgan",true, test);		
		//End of user code
	}

	//Test for Organ_publishFunctionMessage_uint_string_string_string
	this.testOrgan_publishFunctionMessage_uint_string_string_string=function() {
		//	var res = this.test_instance.publishFunctionMessage( p_id, p_message, p_hash, p_er);
		//Start of user code test_FoundationConference_publishFunctionMessage_uint_string_string_string
		//TODO : implement this
		//var test = false;		
		//this.testAE("testpublishFunctionMessage", "executed: testFoundationConference_publishFunctionMessage_uint_string_string_string",true, test);		
		//End of user code
	}

	//Test for Organ_createBallot_string_bytes32
	this.testOrgan_createBallot_string_bytes32=function() {
		//	var res = this.test_instance.createBallot( p_name, p_proposalNames);
		//Start of user code test_FoundationConference_createBallot_string_bytes32
		//TODO : implement this
		//var test = false;		
		//this.testAE("testcreateBallot", "executed: testFoundationConference_createBallot_string_bytes32",true, test);		
		//End of user code
	}

	//Test for Organ_getLastBallot
	this.testOrgan_getLastBallot=function() {
		//	var res = this.test_instance.getLastBallot();
		//Start of user code test_FoundationConference_getLastBallot
		//TODO : implement this
		//var test = false;		
		//this.testAE("testgetLastBallot", "executed: testFoundationConference_getLastBallot",true, test);		
		//End of user code
	}

	//Test for Organ_getOrganBlog
	this.testOrgan_getOrganBlog=function() {
		//	var res = this.test_instance.getOrganBlog();
		//Start of user code test_FoundationConference_getOrganBlog
		//TODO : implement this
		//var test = false;		
		//this.testAE("testgetOrganBlog", "executed: testFoundationConference_getOrganBlog",true, test);		
		//End of user code
	}

	//Test for Organ_addOrganFunction_address_string
	this.testOrgan_addOrganFunction_address_string=function() {
		//	var res = this.test_instance.addOrganFunction( p__of, p__name);
		//Start of user code test_FoundationConference_addOrganFunction_address_string
		//TODO : implement this
		//var test = false;		
		//this.testAE("testaddOrganFunction", "executed: testFoundationConference_addOrganFunction_address_string",true, test);		
		//End of user code
	}
	this.customTests=function() {
		//Start of user code test_FoundationConference_custom tests
		//
		//End of user code
	}
}
/**
* A simple bean class around the contract.
* The OrganFunctionModel.
**/
function OrganFunctionModel(contract) {
this.contract = contract;
	/**
	* Getter for currentMember.
	**/
	this.getCurrentMember = function(){
		return contract.currentMember(); 
	}
	/**
	* Getter for functionName.
	**/
	this.getFunctionName = function(){
		return contract.functionName(); 
	}
	/**
	* Getter for mangerCount.
	**/
	this.getMangerCount = function(){
		return contract.mangerCount(); 
	}
	/**
	* Getter for id.
	**/
	this.getId = function(){
		return contract.id(); 
	}
	/**
	* Getter for constitutionHash.
	**/
	this.getConstitutionHash = function(){
		return contract.constitutionHash(); 
	}
	/**
	* Getter for lastMemberChanged.
	**/
	this.getLastMemberChanged = function(){
		return contract.lastMemberChanged(); 
	}
	/**
	* Getter for lastConstitutionHashChanged.
	**/
	this.getLastConstitutionHashChanged = function(){
		return contract.lastConstitutionHashChanged(); 
	}
	/**
	* Getter for publisher.
	**/
	this.getPublisher = function(){
		return contract.publisher(); 
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
	* Call getFunctioName.
	**/
	this.getFunctioName = function(){
		return contract.getFunctioName(); 
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
	/**
	* Call publishMessage.
	**/
	this.publishMessage = function(message,hash,er){
		return contract.publishMessage(message,hash,er); 
	}
}// end of function OrganFunctionModel

//test class for OrganFunction
function TestOrganFunction(contract) {
	
	this.test_instance = contract;
	this.model = new OrganFunctionModel(contract);
	this.prefix='';
	this.messageBlockId = "testResult";
	var self = this;

	this.testSetup=function(){
		//Start of user code testSetup_OrganFunction
		//TODO: implement
		//End of user code
	}

	this.allTests=function(){
		this.testSetup();
		this.testAttributes();
		this.testManageable_addManager_address();
		this.testOrganFunction_getFunctioName();
		this.testManageable_removeManager_address();
		this.testManageable_isManager_address();
		this.customTests();
	
		//Start of user code allTests_OrganFunction
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
	//Start of user code attributeTests_OrganFunction
	//TODO: implement
	//End of user code
	}

	//Test for Manageable_addManager_address
	this.testManageable_addManager_address=function() {
		//	var res = this.test_instance.addManager( p__newManagerAddress);
		//Start of user code test_OrganFunction_addManager_address
		//TODO : implement this
		//var test = false;		
		//this.testAE("testaddManager", "executed: testOrganFunction_addManager_address",true, test);		
		//End of user code
	}

	//Test for OrganFunction_getFunctioName
	this.testOrganFunction_getFunctioName=function() {
		//	var res = this.test_instance.getFunctioName();
		//Start of user code test_OrganFunction_getFunctioName
		//TODO : implement this
		//var test = false;		
		//this.testAE("testgetFunctioName", "executed: testOrganFunction_getFunctioName",true, test);		
		//End of user code
	}

	//Test for Manageable_removeManager_address
	this.testManageable_removeManager_address=function() {
		//	var res = this.test_instance.removeManager( p__managerAddress);
		//Start of user code test_OrganFunction_removeManager_address
		//TODO : implement this
		//var test = false;		
		//this.testAE("testremoveManager", "executed: testOrganFunction_removeManager_address",true, test);		
		//End of user code
	}

	//Test for Manageable_isManager_address
	this.testManageable_isManager_address=function() {
		//	var res = this.test_instance.isManager( p__managerAddress);
		//Start of user code test_OrganFunction_isManager_address
		//TODO : implement this
		//var test = false;		
		//this.testAE("testisManager", "executed: testOrganFunction_isManager_address",true, test);		
		//End of user code
	}
	this.customTests=function() {
		//Start of user code test_OrganFunction_custom tests
		//
		//End of user code
	}
}
