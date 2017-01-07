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

import de.kueken.ethereum.party.publishing.*;




/**
 * The deployer for the publishing package.
 *
 */
public class PublishingDeployer {

	public class DeployDuo<EA,C>{
		public EA contractAddress;
		public C constractInstance;
		
		public DeployDuo(EA contractAddress, C constractInstance) {
			super();
			this.contractAddress = contractAddress;
			this.constractInstance = constractInstance;
		}
	}

	private EthereumFacade ethereum;
	private SoliditySource contractSource;
	private static String filename = "/mix/publishing.sol";

	public PublishingDeployer(EthereumFacade ethereum) {
		this(ethereum,filename, true);
	}

	public PublishingDeployer(EthereumFacade ethereum, String contractSourceFile, boolean plain) {
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

	public PublishingDeployer(EthereumFacade ethereum, File contractSourceFile, boolean plain) {
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
	 * Deploys a 'ShortBlog' on the blockchain.
	 *  
	 * @param sender the sender address
	 * @param _name 
	 * @return the address of the deployed contract
	 */
	public CompletableFuture<EthAddress> deployShortBlog(EthAccount sender, String _name) {
		CompletableFuture<EthAddress> address = ethereum.publishContract(contractSource, "ShortBlog", sender, _name);
		return address;
	}

	/**
	 * Deploys a 'ShortBlog' on the blockchain and wrapps the contcat proxy.
	 *  
	 * @param sender the sender address
	 * @param _name 
	 * @return the contract interface
	 */
	public DeployDuo<CompletableFuture<EthAddress>, ShortBlog> createShortBlog(EthAccount sender, String _name) throws IOException, InterruptedException, ExecutionException {
		CompletableFuture<EthAddress> address = deployShortBlog(sender, _name);
		return new DeployDuo<CompletableFuture<EthAddress>, ShortBlog>(address, createShortBlog(sender, address.get()));
	}

	/**
	 * Create a proxy for a deployed 'ShortBlog' contract.
	 *  
	 * @param sender the sender address
	 * @param address the address of the contract
	 * @return the contract interface
	 */
	public ShortBlog createShortBlog(EthAccount sender, EthAddress address) throws IOException, InterruptedException, ExecutionException {
		ShortBlog shortblog = ethereum
        .createContractProxy(contractSource, "ShortBlog", address, sender, ShortBlog.class);
		return shortblog;
	}

	/**
	 * Deploys a 'BlogRegistry' on the blockchain.
	 *  
	 * @param sender the sender address
	 * @return the address of the deployed contract
	 */
	public CompletableFuture<EthAddress> deployBlogRegistry(EthAccount sender) {
		CompletableFuture<EthAddress> address = ethereum.publishContract(contractSource, "BlogRegistry", sender);
		return address;
	}

	/**
	 * Deploys a 'BlogRegistry' on the blockchain and wrapps the contcat proxy.
	 *  
	 * @param sender the sender address
	 * @return the contract interface and the deployed address
	 */
	public DeployDuo<CompletableFuture<EthAddress>, BlogRegistry> createBlogRegistry(EthAccount sender) throws IOException, InterruptedException, ExecutionException {
		CompletableFuture<EthAddress> address = deployBlogRegistry(sender);
		return new DeployDuo<CompletableFuture<EthAddress>, BlogRegistry>(address, createBlogRegistry(sender, address.get()));
	}

	/**
	 * Create a proxy for a deployed 'BlogRegistry' contract.
	 *  
	 * @param sender the sender address
	 * @param address the address of the contract
	 * @return the contract interface
	 */
	public BlogRegistry createBlogRegistry(EthAccount sender, EthAddress address) throws IOException, InterruptedException, ExecutionException {
		BlogRegistry blogregistry = ethereum
        .createContractProxy(contractSource, "BlogRegistry", address, sender, BlogRegistry.class);
		return blogregistry;
	}

}
