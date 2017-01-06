package de.kueken.ethereum.party.publishing;

import java.util.concurrent.CompletableFuture;
import org.adridadou.ethereum.values.EthAddress;
import de.kueken.ethereum.party.basics.*;

/**
* The registry create new blogs.
**/
public interface BlogRegistry extends Manageable{
	
	Integer blogCount();
	
	String blogs(Integer key);
	
	Boolean managers(String key);

	/**
	* Register a blog under a name.
	* returns 0 for ok and 1 else.
	* 
	* @param _name -The name of the blog.
	* @return
	*  -
	**/
	java.util.concurrent.CompletableFuture<String> registerBlog(String _name);
	//Start of user code additional_methods

	//End of user code
}
