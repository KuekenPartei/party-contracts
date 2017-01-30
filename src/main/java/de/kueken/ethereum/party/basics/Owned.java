package de.kueken.ethereum.party.basics;

import java.util.concurrent.CompletableFuture;
import org.adridadou.ethereum.values.EthAddress;

//Start of user code customized_imports

//End of user code



public interface Owned{
	
	String owner();

	
	java.util.concurrent.CompletableFuture<String> getOwner();
	
	java.util.concurrent.CompletableFuture<Void> changeOwner(String newOwner);
	
	java.util.concurrent.CompletableFuture<Void> kill();

	//Start of user code additional_methods

	//End of user code
}
