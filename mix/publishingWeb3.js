
var ShortBlogContract = web3.eth.contract([
{"constant":true,"inputs":[],"name":"messageCount","outputs":[{"name":"","type":"uint"}],"type":"function"},
{"constant":true,"inputs":[],"name":"lastMessageDate","outputs":[{"name":"","type":"uint"}],"type":"function"},
{"constant":true,"inputs":[{"name":"","type":"uint"}],"name":"messages","outputs":[{"name":"","type":"Message"}],"type":"function"},
  {
    "constant": false,
    "inputs": [],    
    "name": "getOwner",
    "outputs": [{"name": "result","type": "address"}],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [{"name": "newOwner","type": "address"}],    
    "name": "changeOwner",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [{"name": "message","type": "string"},{"name": "hash","type": "string"},{"name": "er","type": "string"}],    
    "name": "sendMessage",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": true,
    "inputs": [{"name": "id","type": "uint"}],    
    "name": "getMessageText",
    "outputs": [{"name": "","type": "string"}],
    "type": "function"
  }
,  {
    "constant": false,
    "inputs": [],    
    "name": "kill",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": true,
    "inputs": [{"name": "id","type": "uint"}],    
    "name": "getMessageDate",
    "outputs": [{"name": "","type": "uint"}],
    "type": "function"
  }
,  {
    "constant": true,
    "inputs": [],    
    "name": "getMessageCount",
    "outputs": [{"name": "","type": "uint"}],
    "type": "function"
  }
,  {
    "constant": true,
    "inputs": [{"name": "id","type": "uint"}],    
    "name": "getMessageBlock",
    "outputs": [{"name": "","type": "uint"}],
    "type": "function"
  }
,  {
    "constant": true,
    "inputs": [{"name": "id","type": "uint"}],    
    "name": "getBlogMessage",
    "outputs": [{"name": "_message","type": "string"},{"name": "_blockNumber","type": "uint"},{"name": "_sender","type": "address"},{"name": "_externalResource","type": "string"}],
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
{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"names","outputs":[{"name":"","type":"uint"}],"type":"function"},
  {
    "constant": false,
    "inputs": [{"name": "name","type": "string"}],    
    "name": "registerBlog",
    "outputs": [{"name": "","type": "ShortBlog"}],
    "type": "function"
  }
,  {
    "constant": true,
    "inputs": [{"name": "name","type": "string"}],    
    "name": "getShortBlog",
    "outputs": [{"name": "","type": "address"}],
    "type": "function"
  }
 
] );   


