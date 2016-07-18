//test class for ShortBlog
function TestShortBlog(contract) {
	
	this.test_instance = contract;
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
		this.testOwned_getOwner();
		this.testOwned_changeOwner_address();
		this.testShortBlog_sendMessage_string_string_string();
		this.testShortBlog_ShortBlog_string();
		this.testOwned_kill();
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
		elemDiv.innerText = testMessage;
		if(!state)
			elemDiv.className = 'failed_state'
		e.appendChild(elemDiv);
	}
	
	this.testAttributes=function() {
	//Start of user code attributeTests_ShortBlog
	//TODO: implement
		var count =	this.test_instance.messageCount();
		this.printTest("testaddMember", "messageCount:"+count, count==0);

	//End of user code
	}

	//Test for Owned_getOwner
	this.testOwned_getOwner=function() {
		//Start of user code test_Owned_getOwner
		var res = this.test_instance.owner();
		this.printTest("testgetOwner", "ShortBlog_getOwner: "+res, true);		
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

	//Test for ShortBlog_ShortBlog_string
	this.testShortBlog_ShortBlog_string=function() {
		//Start of user code test_ShortBlog_ShortBlog_string
		//TODO: implement
		//End of user code
	}

	//Test for Owned_kill
	this.testOwned_kill=function() {
		//Start of user code test_Owned_kill
		//TODO: implement
//console.log('testOwned_kill');
//	var res = this.test_instance.kill();
//	var state = res==="";		
//		this.printTest("testkill", "executed: testOwned_kill", false);		
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
//test class for BlogRegistry
function TestBlogRegistry(contract) {
	
	this.test_instance = contract;
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
		elemDiv.innerText = testMessage;
		if(!state)
			elemDiv.className = 'failed_state'
		e.appendChild(elemDiv);
	}
	
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
		this.printTest("testregisterBlog", "executed: testBlogRegistry_registerBlog_string: "+res, count<count1);		
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
		this.printTest("testaddManager", "Manageable_addManager_address: "+res, count<count1);		
		//End of user code
	}

	//Test for Manageable_removeManager_address
	this.testManageable_removeManager_address=function() {
		//Start of user code test_Manageable_removeManager_address
		//TODO: implement
		var count = this.test_instance.mangerCount();
		var p__newManagerAddress = web3.eth.accounts[1];
		var res = this.test_instance.removeManager( p__newManagerAddress);
		var count1 = this.test_instance.mangerCount();
		this.printTest("testaddManager", "Manageable_removeManager: "+res, count>count1);		
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
