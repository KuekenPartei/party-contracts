# publishing


* [ShortBlog](#contract-shortblog)

* [BlogRegistry](#contract-blogregistry)


## contract: ShortBlog

    overview:
	constructor ShortBlog(string _name)
	function sendMessage(string message,string hash,string er) public  onlyManager() 

inherites: [Manageable](basics#contract-manageable)


A Short blog can save messages on the blockchain.



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
name|string|public||

#### ShortBlog mappings

name|type|mapsTo|visiblity|doc
----|----|----|----|----
messages|uint|Message|public|-

#### ShortBlog.ShortBlog(string _name) public  


name|type|doc
----|----|----
_name|string|

#### ShortBlog.sendMessage(string message,string hash,string er) public  onlyManager() 

Send a message to the blog,


name|type|direction|doc
----|----|----|----
message|string|in|The message as string.
hash|string|in|The hash of the external source.
er|string|in|The link to the message.

#### event NewMessage

Called when a new message is posted.


name|type|indexed|doc
----|----|----|----
message|string||The message.
messageId|uint||
messageSender|address||The sender of the message.
messageHashValue|string||The hash of the message.
externalResource|string||The external resource (a link) to the message. 


## contract: BlogRegistry

    overview:
	function registerBlog(string _name) public  onlyManager() returns (ShortBlog )

inherites: [Manageable](basics#contract-manageable)


The registry create new blogs.




#### BlogRegistry properties

name|type|visiblity|delegate|doc
----|----|----|----|----
blogCount|uint|public||

#### BlogRegistry mappings

name|type|mapsTo|visiblity|doc
----|----|----|----|----
blogs|uint|ShortBlog|public|-

#### BlogRegistry.registerBlog(string _name) public  onlyManager() returns (ShortBlog )

Register a blog under a name.
returns 0 for ok and 1 else.


name|type|direction|doc
----|----|----|----
_name|string|in|The name of the blog.
|ShortBlog|return|

#### event NewBlog


name|type|indexed|doc
----|----|----|----
index|uint||
name|string||The name of the blog.
blogAddress|address||


