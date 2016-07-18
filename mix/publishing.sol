/**
*
* (c) KUEKeN
*
**/

import "./basics.sol";


contract MessagePublisher {
	
	/*
	* Publish the message to the blog.
	* 
	* message - The message to send.
	* hash - The hash of the message.
	* er - The external resource of the message.
	*/
	function publishMessage(string message,string hash,string er) public  ;
}


contract ShortBlog is Owned {
    /*
    * A message in the blog.
    */
    struct Message {
    	string message;
    	uint date;
    	uint id;
    	address sender;
    	uint blockNumber;
    	string hashValue;
    	string externalResource;
    }

	uint public messageCount;
	uint public lastMessageDate;
	string public name;
	mapping (uint=>Message)public messages;
	// Start of user code ShortBlog.attributes
	//TODO: implement
	// End of user code
	
	
	event NewMessage(string message,uint messageId);
	
	
	
	function sendMessage(string message,string hash,string er) public  onlyOwner()  {
		 messages[messageCount].message=message;
		 messages[messageCount].id=messageCount;
		 messages[messageCount].date=now;
		 //messages[messageCount].sender=owner;
		 messages[messageCount].externalResource = er;
		 messages[messageCount].hashValue = hash;
		 messages[messageCount].blockNumber=block.number;
		 NewMessage(message,messageCount);
		 messageCount++;
		
		//Start of user code ShortBlog.function.sendMessage_string_string_string
		//TODO: implement
		//End of user code
	}
	
	
	
	function ShortBlog(string _name) public   {
		//Start of user code ShortBlog.function.ShortBlog_string
		//TODO: implement
		//End of user code
	}
	
	// Start of user code ShortBlog.operations
	//TODO: implement
	// End of user code
}


contract BlogRegistry is Manageable {

	uint public blogCount;
	mapping (uint=>ShortBlog)public blogs;
	mapping (uint=>string)public names;
	// Start of user code BlogRegistry.attributes
	//TODO: implement
	// End of user code
	
	
	/*
	* Register a blog under a name.
	* returns 0 for ok and 1 else.
	* 
	* name -
	* returns
	*  -
	*/
	function registerBlog(string name) public  onlyManager() returns (ShortBlog ) {
		
		//Start of user code BlogRegistry.function.registerBlog_string
		 ShortBlog b = new ShortBlog(name);
		 b.changeOwner(msg.sender);
		 blogs[blogCount] =b ;
		 names[blogCount] = name;
		 blogCount++;
		 return b;
		//End of user code
	}
	
	// Start of user code BlogRegistry.operations
	//TODO: implement
	// End of user code
}

