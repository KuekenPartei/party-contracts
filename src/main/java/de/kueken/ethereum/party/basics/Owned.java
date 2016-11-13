package de.kueken.ethereum.party.basics;



public interface Owned{
	
	String owner();

	
	java.util.concurrent.CompletableFuture<String> getOwner();
	
	void changeOwner(String newOwner);
	
	void kill();
	//Start of user code additional_methods

	//End of user code
}
