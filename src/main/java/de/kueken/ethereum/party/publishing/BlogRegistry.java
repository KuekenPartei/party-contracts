package de.kueken.ethereum.party.publishing;

import de.kueken.ethereum.party.basics.Manageable;

//Start of user code customized_imports

//End of user code


/**
* The registry create new blogs.
**/
public interface BlogRegistry extends Manageable{
	
	Integer blogCount();
	
	org.adridadou.ethereum.propeller.values.EthAddress blogs(Integer key);
	
	Boolean managers(org.adridadou.ethereum.propeller.values.EthAddress key);

	/**
	* Register a blog under a name.
	* returns 0 for ok and 1 else.
	* 
	* @param _name -The name of the blog.
	* @return
	*  -
	**/
	java.util.concurrent.CompletableFuture<org.adridadou.ethereum.propeller.values.EthAddress> registerBlog(String _name);

	//Start of user code additional_methods

	//End of user code
}
