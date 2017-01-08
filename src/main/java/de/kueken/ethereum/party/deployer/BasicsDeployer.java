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

import de.kueken.ethereum.party.basics.*;




/**
 * The deployer for the basics package.
 *
 */
public class BasicsDeployer {

	private EthereumFacade ethereum;
	private SoliditySource contractSource;
	private static String filename = "/mix/basics.sol";

	public BasicsDeployer(EthereumFacade ethereum) {
		this(ethereum,filename, true);
	}

	public BasicsDeployer(EthereumFacade ethereum, String contractSourceFile, boolean plain) {
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

	public BasicsDeployer(EthereumFacade ethereum, File contractSourceFile, boolean plain) {
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
	 * Deploys a 'Owned' on the blockchain.
	 *  
	 * @param sender the sender address
	 * @return the address of the deployed contract
	 */
	public CompletableFuture<EthAddress> deployOwned(EthAccount sender) {
		CompletableFuture<EthAddress> address = ethereum.publishContract(contractSource, "Owned", sender);
		return address;
	}

	/**
	 * Deploys a 'Owned' on the blockchain and wrapps the contcat proxy.
	 *  
	 * @param sender the sender address
	 * @return the contract interface and the deployed address
	 */
	public DeployDuo<Owned> createOwned(EthAccount sender) throws IOException, InterruptedException, ExecutionException {
		CompletableFuture<EthAddress> address = deployOwned(sender);
		return new EthereumInstance.DeployDuo<Owned>(address.get(), createOwnedProxy(sender, address.get()));
	}

	/**
	 * Create a proxy for a deployed 'Owned' contract.
	 *  
	 * @param sender the sender address
	 * @param address the address of the contract
	 * @return the contract interface
	 */
	public Owned createOwnedProxy(EthAccount sender, EthAddress address) throws IOException, InterruptedException, ExecutionException {
		Owned owned = ethereum
        .createContractProxy(contractSource, "Owned", address, sender, Owned.class);
		return owned;
	}

	/**
	 * Deploys a 'Manageable' on the blockchain.
	 *  
	 * @param sender the sender address
	 * @return the address of the deployed contract
	 */
	public CompletableFuture<EthAddress> deployManageable(EthAccount sender) {
		CompletableFuture<EthAddress> address = ethereum.publishContract(contractSource, "Manageable", sender);
		return address;
	}

	/**
	 * Deploys a 'Manageable' on the blockchain and wrapps the contcat proxy.
	 *  
	 * @param sender the sender address
	 * @return the contract interface
	 */
	public DeployDuo<Manageable> createManageable(EthAccount sender) throws IOException, InterruptedException, ExecutionException {
		CompletableFuture<EthAddress> address = deployManageable(sender);
		return new EthereumInstance.DeployDuo<Manageable>(address.get(), createManageableProxy(sender, address.get()));
	}

	/**
	 * Create a proxy for a deployed 'Manageable' contract.
	 *  
	 * @param sender the sender address
	 * @param address the address of the contract
	 * @return the contract interface
	 */
	public Manageable createManageableProxy(EthAccount sender, EthAddress address) throws IOException, InterruptedException, ExecutionException {
		Manageable manageable = ethereum
        .createContractProxy(contractSource, "Manageable", address, sender, Manageable.class);
		return manageable;
	}

	/**
	 * Deploys a 'Multiowned' on the blockchain.
	 *  
	 * @param sender the sender address
	 * @return the address of the deployed contract
	 */
	public CompletableFuture<EthAddress> deployMultiowned(EthAccount sender) {
		CompletableFuture<EthAddress> address = ethereum.publishContract(contractSource, "Multiowned", sender);
		return address;
	}

	/**
	 * Deploys a 'Multiowned' on the blockchain and wrapps the contcat proxy.
	 *  
	 * @param sender the sender address
	 * @return the contract interface and the deployed address
	 */
	public DeployDuo<Multiowned> createMultiowned(EthAccount sender) throws IOException, InterruptedException, ExecutionException {
		CompletableFuture<EthAddress> address = deployMultiowned(sender);
		return new EthereumInstance.DeployDuo<Multiowned>(address.get(), createMultiownedProxy(sender, address.get()));
	}

	/**
	 * Create a proxy for a deployed 'Multiowned' contract.
	 *  
	 * @param sender the sender address
	 * @param address the address of the contract
	 * @return the contract interface
	 */
	public Multiowned createMultiownedProxy(EthAccount sender, EthAddress address) throws IOException, InterruptedException, ExecutionException {
		Multiowned multiowned = ethereum
        .createContractProxy(contractSource, "Multiowned", address, sender, Multiowned.class);
		return multiowned;
	}

}
