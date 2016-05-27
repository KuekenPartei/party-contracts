# publishing


* [ShortBlog](#contract-shortblog)

* [BlogRegistry](#contract-blogregistry)


## contract: ShortBlog

    overview:
	function sendMessage(string message,string hash,string er) public  onlyOwner() 
	function getMessageText(uint id) public   constant returns (string )
	function getMessageDate(uint id) public   constant returns (uint )
	function getMessageCount() public   constant returns (uint )
	function getMessageBlock(uint id) public   constant returns (uint )
	function getBlogMessage(uint id) public   constant returns (string _message,uint _blockNumber,address _sender,string _externalResource)

inherites: [Owned](basics#contract-owned)




### structs:

Message
A message in the blog.



#### Message properties

name|type|visiblity|delegate|doc
----|----|----|----|----
message|string|public||
date|uint|public||
id|uint|public||
sender|address|public||
blockNumber|uint|public||
hashValue|string|public||
externalResource|string|public||



#### ShortBlog properties

name|type|visiblity|delegate|doc
----|----|----|----|----
messageCount|uint|public||
lastMessageDate|uint|public||

#### ShortBlog mappings

name|type|mapsTo|visiblity|doc
----|----|----|----|----
messages|uint|Message|public|-

#### ShortBlog.sendMessage(string message,string hash,string er) public  onlyOwner() 


name|type|direction|doc
----|----|----|----
message|string|in|
hash|string|in|
er|string|in|

#### ShortBlog.getMessageText(uint id) public   constant returns (string )


name|type|direction|doc
----|----|----|----
|string|return|
id|uint|in|

#### ShortBlog.getMessageDate(uint id) public   constant returns (uint )


name|type|direction|doc
----|----|----|----
id|uint|in|
|uint|return|

#### ShortBlog.getMessageCount() public   constant returns (uint )


name|type|direction|doc
----|----|----|----
|uint|return|

#### ShortBlog.getMessageBlock(uint id) public   constant returns (uint )


name|type|direction|doc
----|----|----|----
id|uint|in|
|uint|return|

#### ShortBlog.getBlogMessage(uint id) public   constant returns (string _message,uint _blockNumber,address _sender,string _externalResource)

Get the message with the id.


name|type|direction|doc
----|----|----|----
id|uint|in|
_message|string|return|The message text.
_blockNumber|uint|return|The blocknumber.
_sender|address|return|
_externalResource|string|return|


## contract: BlogRegistry

    overview:
	function registerBlog(string name) public  returns (ShortBlog )
	function getShortBlog(string name) public   constant returns (address )






#### BlogRegistry properties

name|type|visiblity|delegate|doc
----|----|----|----|----
blogCount|uint|public||

#### BlogRegistry mappings

name|type|mapsTo|visiblity|doc
----|----|----|----|----
blogs|uint|ShortBlog|public|names|bytes32|uint|public|-

#### BlogRegistry.registerBlog(string name) public  returns (ShortBlog )

Register a blog under a name.
returns 0 for ok and 1 else.


name|type|direction|doc
----|----|----|----
name|string|in|
|ShortBlog|return|

#### BlogRegistry.getShortBlog(string name) public   constant returns (address )


name|type|direction|doc
----|----|----|----
name|string|in|
|address|return|


