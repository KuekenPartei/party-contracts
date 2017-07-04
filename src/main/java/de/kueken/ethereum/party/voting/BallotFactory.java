package de.kueken.ethereum.party.voting;

//Start of user code customized_imports

//End of user code


/**
* Creates the ballots.
**/
public interface BallotFactory{

	/**
	* Creates a new ballot.
	* 
	* @param ballotType -0 - public vote
	* @param _registry -The member registry for the voting.
	* @param _name -The name of the ballot.
	* @param _hash -The hash of the actual text.
	* @return
	* ballot -
	**/
	java.util.concurrent.CompletableFuture<org.adridadou.ethereum.propeller.values.EthAddress> create(Integer ballotType,org.adridadou.ethereum.propeller.values.EthAddress _registry,String _name,String _hash);

	//Start of user code additional_methods

	//End of user code
}
