
var ShortBlogContract = web3.eth.contract([
{"constant":true,"inputs":[],"name":"messageCount","outputs":[{"name":"","type":"uint"}],"type":"function"},
{"constant":true,"inputs":[],"name":"lastMessageDate","outputs":[{"name":"","type":"uint"}],"type":"function"},
{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"type":"function"},
{"constant":true,"inputs":[{"name":"","type":"uint"}],"name":"messages","outputs":[{"name":"","type":"Message"}],"type":"function"},
  {
    "constant": false,
    "inputs": [{"name": "message","type": "string"},{"name": "hash","type": "string"},{"name": "er","type": "string"}],    
    "name": "sendMessage",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [{"name": "_name","type": "string"}],    
    "name": "ShortBlog",
    "outputs": [],
    "type": "function"
  }
 ,
  {
    "constant": true,
    "inputs": [{"name": "message","type": "string"},{"name": "messageId","type": "uint"}],    
    "name": "NewMessage",
    "type": "event"
  }

] );   

var BlogRegistryContract = web3.eth.contract([
{"constant":true,"inputs":[],"name":"blogCount","outputs":[{"name":"","type":"uint"}],"type":"function"},
{"constant":true,"inputs":[{"name":"","type":"uint"}],"name":"blogs","outputs":[{"name":"","type":"ShortBlog"}],"type":"function"},
{"constant":true,"inputs":[{"name":"","type":"uint"}],"name":"names","outputs":[{"name":"","type":"string"}],"type":"function"},
  {
    "constant": false,
    "inputs": [{"name": "name","type": "string"}],    
    "name": "registerBlog",
    "outputs": [{"name": "","type": "ShortBlog"}],
    "type": "function"
  }
 
] );   


