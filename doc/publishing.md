# publishing


* [ShortBlog](#contract-shortblog)

* [BlogRegistry](#contract-blogregistry)


## contract: ShortBlog

    overview:
	function sendMessage(string message,string hash,string er) public  
	function ShortBlog(string _name) public  





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

#### ShortBlog.sendMessage(string message,string hash,string er) public  


name|type|direction|doc
----|----|----|----
message|string|in|
hash|string|in|
er|string|in|

#### ShortBlog.ShortBlog(string _name) public  


name|type|direction|doc
----|----|----|----
_name|string|in|


## contract: BlogRegistry

    overview:
	function registerBlog(string name) public  returns (ShortBlog )






#### BlogRegistry properties

name|type|visiblity|delegate|doc
----|----|----|----|----
blogCount|uint|public||

#### BlogRegistry mappings

name|type|mapsTo|visiblity|doc
----|----|----|----|----
blogs|uint|ShortBlog|public|names|uint|string|public|-

#### BlogRegistry.registerBlog(string name) public  returns (ShortBlog )

Register a blog under a name.
returns 0 for ok and 1 else.


name|type|direction|doc
----|----|----|----
name|string|in|
|ShortBlog|return|


