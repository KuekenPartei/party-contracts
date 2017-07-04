package de.kueken.ethereum.party.basics;

//Start of user code customized_imports

//End of user code



public interface Owned{
	
	org.adridadou.ethereum.propeller.values.EthAddress owner();

	
	java.util.concurrent.CompletableFuture<org.adridadou.ethereum.propeller.values.EthAddress> getOwner();
	
	java.util.concurrent.CompletableFuture<Void> changeOwner(org.adridadou.ethereum.propeller.values.EthAddress newOwner);
	
	java.util.concurrent.CompletableFuture<Void> kill();

	//Start of user code additional_methods

	//End of user code
}
