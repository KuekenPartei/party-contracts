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
}
//call functions
//function BlogRegistry_registerBlog
function BlogRegistry_registerBlog_string() {
	var param_name = document.getElementById('BlogRegistry_registerBlog_string_name').value;
	var res = BlogRegistry_instance.registerBlog(param_name);
	if(res!=null)
		document.getElementById('BlogRegistry_registerBlog_string_res').innerText = res;
}
//function BlogRegistry_getShortBlog
function BlogRegistry_getShortBlog_string() {
	var param_name = document.getElementById('BlogRegistry_getShortBlog_string_name').value;
	var res = BlogRegistry_instance.getShortBlog(param_name);
	if(res!=null)
		document.getElementById('BlogRegistry_getShortBlog_string_res').innerText = res;
}

//delegated calls

