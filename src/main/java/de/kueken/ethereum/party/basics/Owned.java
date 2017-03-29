package de.kueken.ethereum.party.basics;

import java.util.concurrent.CompletableFuture;
import org.adridadou.ethereum.values.EthAddress;

//Start of user code customized_imports

//End of user code



public interface Owned{
	
	org.adridadou.ethereum.values.EthAddress owner();

	
	java.util.concurrent.CompletableFuture<org.adridadou.ethereum.values.EthAddress> getOwner();
	
	java.util.concurrent.CompletableFuture<Void> changeOwner(org.adridadou.ethereum.values.EthAddress newOwner);
	
	java.util.concurrent.CompletableFuture<Void> kill();

	//Start of user code additional_methods

	//End of user code
}
