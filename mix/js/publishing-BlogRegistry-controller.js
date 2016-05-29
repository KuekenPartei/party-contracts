// script for BlogRegistry
var BlogRegistry_instance = undefined;
	
// set address
function BlogRegistry_setAddress() {
	var _address = document.getElementById('BlogRegistry_address').value;
	BlogRegistry_instance = BlogRegistryContract.at(_address);
}

function BlogRegistry_updateAttributes() {
// update attributes
var blogCount_res = BlogRegistry_instance.blogCount();
	if(blogCount_res!=null)
		document.getElementById('BlogRegistry_blogCount_value').innerText = blogCount_res;
var _key = document.getElementById('BlogRegistry_contract_attribute_blogs_input').value;
var blogs_res = BlogRegistry_instance.blogs(_key);
	if(blogs_res!=null){
		document.getElementById('BlogRegistry_blogs_messageCount_value').innerText = blogs_res[0];
		document.getElementById('BlogRegistry_blogs_lastMessageDate_value').innerText = blogs_res[1];
		document.getElementById('BlogRegistry_blogs_messages_value').innerText = blogs_res[2];
	}
var _key = document.getElementById('BlogRegistry_contract_attribute_names_input').value;
var names_res = BlogRegistry_instance.names(_key);
	if(names_res!=null){
		document.getElementById('BlogRegistry_names_value').innerText = names_res;
	}

}
//call functions
//function BlogRegistry_registerBlog
function BlogRegistry_registerBlog_string() {
	var param_name = document.getElementById('BlogRegistry_registerBlog_string_name').value;
	var res = BlogRegistry_instance.registerBlog(param_name);
	if(res!=null)
		document.getElementById('BlogRegistry_registerBlog_string_res').innerText = res;
}

//delegated calls

