// file header
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

//test class for ShortBlog
function TestShortBlog(contract) {
	
	this.test_instance = contract;
	this.model = new ShortBlogModel(contract);
	this.prefix='';
	this.messageBlockId = "testResult";
	var self = this;

	this.testSetup=function(){
		//Start of user code testSetup_ShortBlog
		//TODO: implement
		//End of user code
	}

	this.allTests=function(){
		this.testSetup();
		this.testAttributes();
		this.testManageable_addManager_address();
		this.testShortBlog_sendMessage_string_string_string();
		this.testManageable_removeManager_address();
		this.testManageable_isManager_address();
		this.customTests();
	
		//Start of user code allTests_ShortBlog
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
	//Start of user code attributeTests_ShortBlog
	//TODO: implement
		var count =	this.test_instance.messageCount();
		this.printTest("testaddMember", "messageCount:"+count, count==0);

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

	//Test for ShortBlog_sendMessage_string_string_string
	this.testShortBlog_sendMessage_string_string_string=function() {
		//Start of user code test_ShortBlog_sendMessage_string_string_string
		//TODO: implement
		var p_message = 'A Test Message';
		var p_hash = 'a hash';
		var p_er = 'a resource';
		var count = this.test_instance.messageCount();
		var res = this.test_instance.sendMessage( p_message, p_hash, p_er);
		var count1 = this.test_instance.messageCount();
		var state = res!="";		
		this.printTest("testsendMessage", "executed: testShortBlog_sendMessage_string_string_string", count<count1);		
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
		//Start of user code test_ShortBlog_custom tests
		var p_message = 'another Test Message';
		var p_hash = 'a hash';
		var p_er = 'a resource';
		var count = this.test_instance.messageCount();
		var res = this.test_instance.sendMessage( p_message, p_hash, p_er);
		var count1 = this.test_instance.messageCount();
		var state = res!="";		
		this.printTest("testsendMessage", "executed: testShortBlog_sendMessage", count<count1);		
		
		var p_message = 'another Test Message';
		var p_hash = 'a hash';
		var p_er = 'a resource';
		var count = this.test_instance.messageCount();
		var res = this.test_instance.sendMessage( p_message, p_hash, p_er);
		var count1 = this.test_instance.messageCount();
		var state = res!="";		
		this.printTest("testsendMessage", "executed: testShortBlog_sendMessage", count<count1);		
		
		//End of user code
	}
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

//test class for BlogRegistry
function TestBlogRegistry(contract) {
	
	this.test_instance = contract;
	this.model = new BlogRegistryModel(contract);
	this.prefix='';
	this.messageBlockId = "testResult";
	var self = this;

	this.testSetup=function(){
		//Start of user code testSetup_BlogRegistry
		//TODO: implement
		//End of user code
	}

	this.allTests=function(){
		this.testSetup();
		this.testAttributes();
		this.testBlogRegistry_registerBlog_string();
		this.testManageable_addManager_address();
		this.testManageable_removeManager_address();
		this.testManageable_isManager_address();
		this.customTests();
	
		//Start of user code allTests_BlogRegistry
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
	//Start of user code attributeTests_BlogRegistry
		var count =	this.test_instance.blogCount();
		this.printTest("testaddMember", "blogCount:"+count, count==0);
	//End of user code
	}

	//Test for BlogRegistry_registerBlog_string
	this.testBlogRegistry_registerBlog_string=function() {
		//Start of user code test_BlogRegistry_registerBlog_string
		//TODO: implement
		var count =	this.test_instance.blogCount();
		var p_name = 'TestBlog'+count;
		var res = this.test_instance.registerBlog( p_name);
		var count1 =	this.test_instance.blogCount();
		var state = res!="";		
		this.testAE("testregisterBlog", "executed: testBlogRegistry_registerBlog_string: "+res, 1,count1);		
		//End of user code
	}

	//Test for Manageable_addManager_address
	this.testManageable_addManager_address=function() {
		//Start of user code test_Manageable_addManager_address
		//TODO: implement
		
		this.printTest("testaddManager", "isManager"+web3.eth.accounts[0], this.model.isManager(web3.eth.accounts[0]));
		var mc1 = this.model.getMangerCount();
		this.testAE("testaddManager", "executed: testManageable_addManager_address",0, mc1);		
		var p__newManagerAddress = web3.eth.accounts[2];
		var res = this.test_instance.addManager( p__newManagerAddress);
		var mc2 = this.model.getMangerCount();
		this.testAE("testaddManager", "executed: testManageable_addManager_address",1, mc2);	
		this.printTest("testaddManager", "isManager:"+p__newManagerAddress, this.model.isManager(p__newManagerAddress));
		//End of user code
	}

	//Test for Manageable_removeManager_address
	this.testManageable_removeManager_address=function() {
		//Start of user code test_Manageable_removeManager_address
		var p__newManagerAddress = web3.eth.accounts[2];
		var test = this.model.isManager(web3.eth.accounts[2]);
		this.printTest("testremoveManager", "executed: testManageable_removeManager_isRegisterd",test);		
		var res = this.test_instance.removeManager( web3.eth.accounts[2]);
		this.printTest("testremoveManager", "executed: testManageable_removeManager_address",this.model.isManager(web3.eth.accounts[2]));		
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
		//Start of user code test_BlogRegistry_custom tests
		web3.eth.defaultAccount = web3.eth.accounts[2];
		
		console.log('custom1');
		var count =	this.test_instance.blogCount();
		var p_name = 'TestBlog'+count;
		var res = this.test_instance.registerBlog( p_name);
		var count1 =	this.test_instance.blogCount();
		var state = res!="";		
		this.printTest("testregisterBlog", "BlogRegistry_registerBlog no manager: "+res, count=count1);	
		
		console.log('custom2');
		web3.eth.defaultAccount = web3.eth.accounts[0];
		var count = this.test_instance.mangerCount();
		var p__newManagerAddress = web3.eth.accounts[2];
		var res = this.test_instance.addManager( p__newManagerAddress);
		var count1 = this.test_instance.mangerCount();
		var state = res!="";		
		this.printTest("testaddManager", "Manageable_addManager_: "+res, count<count1);		

		console.log('custom3');
		web3.eth.defaultAccount = web3.eth.accounts[2];
		var count =	this.test_instance.blogCount();
		var p_name = 'TestBlog'+count;
		var res = this.test_instance.registerBlog( p_name);
		var count1 =	this.test_instance.blogCount();
		var state = res!="";		
		this.printTest("testregisterBlog", "BlogRegistry_registerBlog manager: "+res, count<count1);		

		web3.eth.defaultAccount = web3.eth.accounts[0];
		//End of user code
	}
}
