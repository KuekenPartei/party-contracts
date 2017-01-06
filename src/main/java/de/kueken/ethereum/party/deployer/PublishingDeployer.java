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
	public ShortBlog createShortBlog(EthAccount sender, String _name) throws IOException, InterruptedException, ExecutionException {
		CompletableFuture<EthAddress> address = deployShortBlog(sender, _name);
		return createShortBlog(sender, address.get());
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
	 * @return the contract interface
	 */
	public BlogRegistry createBlogRegistry(EthAccount sender) throws IOException, InterruptedException, ExecutionException {
		CompletableFuture<EthAddress> address = deployBlogRegistry(sender);
		return createBlogRegistry(sender, address.get());
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
