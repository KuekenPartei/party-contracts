package de.kueken.ethereum.party.deployer;

import java.io.File;
import java.io.IOException;
import java.net.URISyntaxException;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

import org.adridadou.ethereum.EthereumFacade;
import org.adridadou.ethereum.values.EthAccount;
import org.adridadou.ethereum.values.EthAddress;
import org.adridadou.ethereum.values.SoliditySource;

import de.kueken.ethereum.party.EthereumInstance;
import de.kueken.ethereum.party.EthereumInstance.DeployDuo;

import de.kueken.ethereum.party.voting.*;




/**
 * The deployer for the voting package.
 *
 */
public class VotingDeployer {

	private EthereumFacade ethereum;
	private SoliditySource contractSource;
	private static String filename = "/mix/voting.sol";

	public VotingDeployer(EthereumFacade ethereum) {
		this(ethereum,filename, true);
	}

	public VotingDeployer(EthereumFacade ethereum, String contractSourceFile, boolean plain) {
		this.ethereum = ethereum;
		try {
			if(plain)
				contractSource = SoliditySource.from(new File(this.getClass().getResource(contractSourceFile).toURI()));
			else
				contractSource = SoliditySource.fromRawJson(new File(this.getClass().getResource(contractSourceFile).toURI()));
				
		} catch (URISyntaxException e) {
			throw new IllegalArgumentException(e);
		} catch (IOException e) {
			throw new IllegalArgumentException(e);
		}
	}

	public VotingDeployer(EthereumFacade ethereum, File contractSourceFile, boolean plain) {
		this.ethereum = ethereum;
		try {
			if(plain)
				contractSource = SoliditySource.from(contractSourceFile);
			else
				contractSource = SoliditySource.fromRawJson(contractSourceFile);
				
		} catch (IOException e) {
			throw new IllegalArgumentException(e);
		}
	}



	/**
	 * Deploys a 'Ballot' on the blockchain.
	 *  
	 * @param sender the sender address
	 * @return the address of the deployed contract
	 */
	public CompletableFuture<EthAddress> deployBallot(EthAccount sender) {
		CompletableFuture<EthAddress> address = ethereum.publishContract(contractSource, "Ballot", sender);
		return address;
	}

	/**
	 * Deploys a 'Ballot' on the blockchain and wrapps the contcat proxy.
	 *  
	 * @param sender the sender address
	 * @return the contract interface and the deployed address
	 */
	public DeployDuo<Ballot> createBallot(EthAccount sender) throws IOException, InterruptedException, ExecutionException {
		CompletableFuture<EthAddress> address = deployBallot(sender);
		return new EthereumInstance.DeployDuo<Ballot>(address.get(), createBallotProxy(sender, address.get()));
	}

	/**
	 * Create a proxy for a deployed 'Ballot' contract.
	 *  
	 * @param sender the sender address
	 * @param address the address of the contract
	 * @return the contract interface
	 */
	public Ballot createBallotProxy(EthAccount sender, EthAddress address) throws IOException, InterruptedException, ExecutionException {
		Ballot ballot = ethereum
        .createContractProxy(contractSource, "Ballot", address, sender, Ballot.class);
		return ballot;
	}

	/**
	 * Deploys a 'BasicBallot' on the blockchain.
	 *  
	 * @param sender the sender address
	 * @param _registry 
	 * @param _name 
	 * @param _hash 
	 * @return the address of the deployed contract
	 */
	public CompletableFuture<EthAddress> deployBasicBallot(EthAccount sender, String _registry, String _name, String _hash) {
		CompletableFuture<EthAddress> address = ethereum.publishContract(contractSource, "BasicBallot", sender, _registry, _name, _hash);
		return address;
	}

	/**
	 * Deploys a 'BasicBallot' on the blockchain and wrapps the contcat proxy.
	 *  
	 * @param sender the sender address
	 * @param _registry 
	 * @param _name 
	 * @param _hash 
	 * @return the contract interface
	 */
	public DeployDuo<BasicBallot> createBasicBallot(EthAccount sender, String _registry, String _name, String _hash) throws IOException, InterruptedException, ExecutionException {
		CompletableFuture<EthAddress> address = deployBasicBallot(sender, _registry, _name, _hash);
		return new EthereumInstance.DeployDuo<BasicBallot>(address.get(), createBasicBallotProxy(sender, address.get()));
	}

	/**
	 * Create a proxy for a deployed 'BasicBallot' contract.
	 *  
	 * @param sender the sender address
	 * @param address the address of the contract
	 * @return the contract interface
	 */
	public BasicBallot createBasicBallotProxy(EthAccount sender, EthAddress address) throws IOException, InterruptedException, ExecutionException {
		BasicBallot basicballot = ethereum
        .createContractProxy(contractSource, "BasicBallot", address, sender, BasicBallot.class);
		return basicballot;
	}

	/**
	 * Deploys a 'PublicBallot' on the blockchain.
	 *  
	 * @param sender the sender address
	 * @return the address of the deployed contract
	 */
	public CompletableFuture<EthAddress> deployPublicBallot(EthAccount sender) {
		CompletableFuture<EthAddress> address = ethereum.publishContract(contractSource, "PublicBallot", sender);
		return address;
	}

	/**
	 * Deploys a 'PublicBallot' on the blockchain and wrapps the contcat proxy.
	 *  
	 * @param sender the sender address
	 * @return the contract interface and the deployed address
	 */
	public DeployDuo<PublicBallot> createPublicBallot(EthAccount sender) throws IOException, InterruptedException, ExecutionException {
		CompletableFuture<EthAddress> address = deployPublicBallot(sender);
		return new EthereumInstance.DeployDuo<PublicBallot>(address.get(), createPublicBallotProxy(sender, address.get()));
	}

	/**
	 * Create a proxy for a deployed 'PublicBallot' contract.
	 *  
	 * @param sender the sender address
	 * @param address the address of the contract
	 * @return the contract interface
	 */
	public PublicBallot createPublicBallotProxy(EthAccount sender, EthAddress address) throws IOException, InterruptedException, ExecutionException {
		PublicBallot publicballot = ethereum
        .createContractProxy(contractSource, "PublicBallot", address, sender, PublicBallot.class);
		return publicballot;
	}

}
