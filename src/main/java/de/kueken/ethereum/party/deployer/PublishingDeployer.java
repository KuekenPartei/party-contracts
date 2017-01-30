package de.kueken.ethereum.party.deployer;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.net.URISyntaxException;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

import org.adridadou.ethereum.EthereumFacade;
import org.adridadou.ethereum.values.CompiledContract;
import org.adridadou.ethereum.values.EthAccount;
import org.adridadou.ethereum.values.EthAddress;
import org.adridadou.ethereum.values.SoliditySource;
import org.apache.commons.io.IOUtils;
import org.ethereum.solidity.compiler.CompilationResult;
import org.ethereum.solidity.compiler.CompilationResult.ContractMetadata;


import de.kueken.ethereum.party.EthereumInstance;
import de.kueken.ethereum.party.EthereumInstance.DeployDuo;

import de.kueken.ethereum.party.publishing.*;




/**
 * The deployer for the publishing package.
 *
 */
public class PublishingDeployer {

	private EthereumFacade ethereum;
	private SoliditySource contractSource;
	private CompilationResult compiledContracts;
	private static String filename = "/main/resources/mix/publishing.sol";

	/**
	 * Create an instance of the deployer with the default contract code file.
	 * 
	 * @param ethereum
	 */
	public PublishingDeployer(EthereumFacade ethereum) {
		this(ethereum,filename,false);
	}

	/**
	 * Create an instance of the deployer.
	 * 
	 * @param ethereum
	 * @param contractSourceFile
	 * @param compiled is the source code already compiled
	 */
	public PublishingDeployer(EthereumFacade ethereum, String contractSourceFile, boolean compiled) {
		this.ethereum = ethereum;
		try {
			if (!compiled)
				contractSource = SoliditySource.from(new File(this.getClass().getResource(contractSourceFile).toURI()));
			else {
				File file = new File(this.getClass().getResource(contractSourceFile).toURI());
				String rawJson = IOUtils.toString(new FileInputStream(file), EthereumFacade.CHARSET);
				compiledContracts = CompilationResult.parse(rawJson);
			}
		} catch (URISyntaxException e) {
			throw new IllegalArgumentException(e);
		} catch (FileNotFoundException e) {
			throw new IllegalArgumentException(e);
		} catch (IOException e) {
			throw new IllegalArgumentException(e);
		}
	}

	/**
	 * Create an instance of the deployer.
	 * 
	 * @param ethereum
	 * @param contractSourceFile
	 */
	public PublishingDeployer(EthereumFacade ethereum, File contractSourceFile, boolean compiled) {
		this.ethereum = ethereum;
		if (!compiled)
			contractSource = SoliditySource.from(contractSourceFile);
		else {
			try {
				String rawJson = IOUtils.toString(new FileInputStream(contractSourceFile), EthereumFacade.CHARSET);
				compiledContracts = CompilationResult.parse(rawJson);
			} catch (FileNotFoundException e) {
				throw new IllegalArgumentException(e);
			} catch (IOException e) {
				throw new IllegalArgumentException(e);
			}
		}
	}



	/**
	 * Deploys a 'ShortBlog' on the blockchain.
	 * 
	 * @param sender
	 *            the sender address
	 * @param _name 
	 * @return the address of the deployed contract
	 */
	public CompletableFuture<EthAddress> deployShortBlog(EthAccount sender, String _name) {
		CompiledContract compiledContract = null;
		if (compiledContracts == null)
			compiledContract = ethereum.compile(contractSource, "ShortBlog");
		else {
			ContractMetadata contractMetadata = compiledContracts.contracts.get("ShortBlog");
			if (contractMetadata == null)
				throw new IllegalArgumentException("Contract code for Organ not found");

			compiledContract = CompiledContract.from(null, "ShortBlog", contractMetadata);
		}
		CompletableFuture<EthAddress> address = ethereum.publishContract(compiledContract, sender, _name);
		return address;
	}



	/**
	 * Deploys a 'ShortBlog' on the blockchain and wrapps the contcat proxy.
	 *  
	 * @param sender the sender address
	 * @param _name 
	 * @return the contract interface
	 */
	public DeployDuo<ShortBlog> createShortBlog(EthAccount sender, String _name) throws IOException, InterruptedException, ExecutionException {
		CompletableFuture<EthAddress> address = deployShortBlog(sender, _name);
		return new EthereumInstance.DeployDuo<ShortBlog>(address.get(), createShortBlogProxy(sender, address.get()));
	}

	/**
	 * Create a proxy for a deployed 'ShortBlog' contract.
	 *  
	 * @param sender the sender address
	 * @param address the address of the contract
	 * @return the contract interface
	 */
	public ShortBlog createShortBlogProxy(EthAccount sender, EthAddress address) throws IOException, InterruptedException, ExecutionException {
		CompiledContract compiledContract = null;
		if (compiledContracts == null)
			compiledContract = ethereum.compile(contractSource, "ShortBlog");
		else {
			ContractMetadata contractMetadata = compiledContracts.contracts.get("ShortBlog");
			if (contractMetadata == null)
				throw new IllegalArgumentException("Contract code for 'ShortBlog' not found");

			compiledContract = CompiledContract.from(null, "ShortBlog", contractMetadata);
		}
		ShortBlog shortblog = ethereum.createContractProxy(compiledContract, address, sender, ShortBlog.class);
		return shortblog;
	}

	/**
	 * Deploys a 'BlogRegistry' on the blockchain.
	 * 
	 * @param sender
	 *            the sender address
	 * @return the address of the deployed contract
	 */
	public CompletableFuture<EthAddress> deployBlogRegistry(EthAccount sender) {
		CompiledContract compiledContract = null;
		if (compiledContracts == null)
			compiledContract = ethereum.compile(contractSource, "BlogRegistry");
		else {
			ContractMetadata contractMetadata = compiledContracts.contracts.get("BlogRegistry");
			if (contractMetadata == null)
				throw new IllegalArgumentException("Contract code for 'BlogRegistry' not found");

			compiledContract = CompiledContract.from(null, "BlogRegistry", contractMetadata);
		}
		CompletableFuture<EthAddress> address = ethereum.publishContract(compiledContract, sender);
		return address;
	}



	/**
	 * Deploys a 'BlogRegistry' on the blockchain and wrapps the contcat proxy.
	 *  
	 * @param sender the sender address
	 * @return the contract interface and the deployed address
	 */
	public DeployDuo<BlogRegistry> createBlogRegistry(EthAccount sender) throws IOException, InterruptedException, ExecutionException {
		CompletableFuture<EthAddress> address = deployBlogRegistry(sender);
		return new EthereumInstance.DeployDuo<BlogRegistry>(address.get(), createBlogRegistryProxy(sender, address.get()));
	}

	/**
	 * Create a proxy for a deployed 'BlogRegistry' contract.
	 *  
	 * @param sender the sender address
	 * @param address the address of the contract
	 * @return the contract interface
	 */
	public BlogRegistry createBlogRegistryProxy(EthAccount sender, EthAddress address) throws IOException, InterruptedException, ExecutionException {
		CompiledContract compiledContract = null;
		if (compiledContracts == null)
			compiledContract = ethereum.compile(contractSource, "BlogRegistry");
		else {
			ContractMetadata contractMetadata = compiledContracts.contracts.get("BlogRegistry");
			if (contractMetadata == null)
				throw new IllegalArgumentException("Contract code for 'BlogRegistry' not found");

			compiledContract = CompiledContract.from(null, "BlogRegistry", contractMetadata);
		}
		BlogRegistry blogregistry = ethereum.createContractProxy(compiledContract, address, sender, BlogRegistry.class);
		return blogregistry;
	}

}
