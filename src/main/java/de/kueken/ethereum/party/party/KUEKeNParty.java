package de.kueken.ethereum.party.party;

//Start of user code customized_imports

//End of user code


/**
* An actual party.
* The KUEKen party.
**/
public interface KUEKeNParty extends Party{
	
	Boolean managers(org.adridadou.ethereum.propeller.values.EthAddress key);
	
	org.adridadou.ethereum.propeller.values.EthAddress organs(Integer key);	
	
	org.adridadou.ethereum.propeller.values.EthAddress subDivisions(Integer key);	

	
	java.util.concurrent.CompletableFuture<Void> boostrapParty(org.adridadou.ethereum.propeller.values.EthAddress fc,org.adridadou.ethereum.propeller.values.EthAddress br);

	//Start of user code additional_methods

	//End of user code
}
