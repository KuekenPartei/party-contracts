/**
*
* (c) KUEKeN
*
**/

import "./basics.sol";


contract MessagePublisher {
	
	
	function publishMessage(string message,string hash,string er) public  ;
	
	/*
	* Get the message with the id.
	* 
	* id -
	* returns
	* _message - The message text.
	* _blockNumber - The blocknumber.
	* _sender -
	* _externalResource -
	*/
	function getMessage(uint id) public   constant returns (string _message,uint _blockNumber,address _sender,string _externalResource);
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
	mapping (uint=>Message)public messages;
	// Start of user code ShortBlog.attributes
	//TODO: implement
	// End of user code
	
	
	event NewMessage(string message,uint messageId);
	
	
	
	function sendMessage(string message,string hash,string er) public  onlyOwner()  {
		 messages[messageCount].message=message;
		 messages[messageCount].id=messageCount;
		 messages[messageCount].date=now;
		 messages[messageCount].sender=owner;
		 messages[messageCount].externalResource = er;
		 messages[messageCount].hashValue = hash;
		 messages[messageCount].blockNumber=block.number;
		 NewMessage(message,messageCount);
		 messageCount++;
		
		//Start of user code ShortBlog.function.sendMessage
		lastMessageDate = now;
		
		//End of user code
	}
	
	
	
	function getMessageText(uint id) public   constant returns (string ) {
		 return messages[id].message;
		
		//Start of user code ShortBlog.function.getMessageText
		//TODO: implement
		//End of user code
	}
	
	
	
	function getMessageDate(uint id) public   constant returns (uint ) {
		 return messages[id].date;
		
		//Start of user code ShortBlog.function.getMessageDate
		//TODO: implement
		//End of user code
	}
	
	
	
	function getMessageCount() public   constant returns (uint ) {
		 return messageCount;
		
		//Start of user code ShortBlog.function.getMessageCount
		//TODO: implement
		//End of user code
	}
	
	
	
	function getMessageBlock(uint id) public   constant returns (uint ) {
		 return messages[id].blockNumber;
		
		//Start of user code ShortBlog.function.getMessageBlock
		//TODO: implement
		//End of user code
	}
	
	
	/*
	* Get the message with the id.
	* 
	* id -
	* returns
	* _message - The message text.
	* _blockNumber - The blocknumber.
	* _sender -
	* _externalResource -
	*/
	function getBlogMessage(uint id) public   constant returns (string _message,uint _blockNumber,address _sender,string _externalResource) {
		 
		
		//Start of user code ShortBlog.function.getBlogMessage
		Message m = messages[id];
		return (
			m.message,m.blockNumber,m.sender,m.externalResource
		);

		//End of user code
	}
	
	// Start of user code ShortBlog.operations
	//TODO: implement
	// End of user code
}


contract BlogRegistry {

	uint public blogCount;
	mapping (uint=>ShortBlog)public blogs;
	mapping (bytes32=>uint)public names;
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
	function registerBlog(string name) public  returns (ShortBlog ) {
		 bytes32 hash = sha3(name);
		 if(names[hash]==0){
		 	ShortBlog b = new ShortBlog();
		 	blogs[blogCount] =b ;
		 	names[hash] = blogCount;
		 	blogCount++;
		 	return b;
		 }
		 return ShortBlog(0);
		
		//Start of user code BlogRegistry.function.registerBlog
		//TODO: implement
		//End of user code
	}
	
	
	
	function getShortBlog(string name) public   constant returns (address ) {
		//Start of user code BlogRegistry.function.getShortBlog
		bytes32 hash = sha3(name);
		uint id = names[hash];
		
		return blogs[id];
		//End of user code
	}
	
	// Start of user code BlogRegistry.operations
	//TODO: implement
	// End of user code
}

