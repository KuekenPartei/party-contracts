package de.kueken.ethereum.party.deployer;

import rx.Observable;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Map;
import java.util.Optional;
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
	private static String filename = "/mix/publishing.sol";

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
		setContractSource(contractSourceFile, compiled);
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
	 * Change the contract source.
	 * 
	 * @param contractSourceFile
	 * @param compiled
	 */
	public void setContractSource(String contractSourceFile, boolean compiled) {
		try {
			if (!compiled) {
				contractSource = SoliditySource.from(this.getClass().getResourceAsStream(contractSourceFile));
			} else {
				String rawJson = IOUtils.toString(this.getClass().getResourceAsStream(contractSourceFile),
						EthereumFacade.CHARSET);
				compiledContracts = CompilationResult.parse(rawJson);
			}
		} catch (IOException e) {
			throw new IllegalArgumentException(e);
		}
	}


	/**
	 * Deploys a 'ShortBlog' on the blockchain.
	 * 
	 * @param sender
	 *            the sender address
	 * @param _name 
	 * @return the address of the deployed contract
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public CompletableFuture<EthAddress> deployShortBlog(EthAccount sender, String _name) throws InterruptedException, ExecutionException {
		CompiledContract compiledContract = compiledContractShortBlog();
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
		CompiledContract compiledContract = compiledContractShortBlog();
		ShortBlog shortblog = ethereum.createContractProxy(compiledContract, address, sender, ShortBlog.class);
		return shortblog;
	}

	/**
	 * Return the compiled contract for the contract 'ShortBlog', when in source the contract code is compiled.
	 * @return the compiled contract for 'ShortBlog'.
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public CompiledContract compiledContractShortBlog() throws InterruptedException, ExecutionException {
		CompiledContract compiledContract = null;
		if (compiledContracts == null){
			Map<String, CompiledContract> contracts = ethereum.compile(contractSource).get();
			compiledContract = contracts.get("ShortBlog");
			if (compiledContract == null) {
				Optional<String> optional = contracts.keySet().stream().filter(s -> s.endsWith("publishing.sol:ShortBlog"))
						.findFirst();
				if (optional.isPresent())
					compiledContract = contracts.get(optional.get());
			}
		} else {
			ContractMetadata contractMetadata = compiledContracts.contracts.get("ShortBlog");
			if (contractMetadata == null) {
				Optional<String> optional = compiledContracts.contracts.keySet().stream()
						.filter(s -> s.endsWith("publishing.sol:ShortBlog")).findFirst();
				if (optional.isPresent())
					contractMetadata = compiledContracts.contracts.get(optional.get());
			}
			compiledContract = CompiledContract.from(null, "ShortBlog", contractMetadata);
		}
		if(compiledContract == null)
			throw new IllegalArgumentException("Contract code for 'ShortBlog' not found");

		return compiledContract;
	}
	/**
	 * 
	 * @param address
	 * @return
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public Observable<EventNewMessage_string_uint_address_string_string> observeEventNewMessage_string_uint_address_string_string(EthAddress address) throws InterruptedException, ExecutionException {
		CompiledContract compiledContract = compiledContractShortBlog();
		Observable<EventNewMessage_string_uint_address_string_string> observeEvents = ethereum.observeEvents(compiledContract.getAbi(), address, "NewMessage", EventNewMessage_string_uint_address_string_string.class);
		return observeEvents;
	}


	/**
	 * Deploys a 'BlogRegistry' on the blockchain.
	 * 
	 * @param sender
	 *            the sender address
	 * @return the address of the deployed contract
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public CompletableFuture<EthAddress> deployBlogRegistry(EthAccount sender) throws InterruptedException, ExecutionException{
		CompiledContract compiledContract = compiledContractBlogRegistry();
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
		CompiledContract compiledContract = compiledContractBlogRegistry();
		BlogRegistry blogregistry = ethereum.createContractProxy(compiledContract, address, sender, BlogRegistry.class);
		return blogregistry;
	}

	/**
	 * Return the compiled contract for the contract 'BlogRegistry', when in source the contract code is compiled.
	 * @return the compiled contract for 'BlogRegistry'.
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public CompiledContract compiledContractBlogRegistry() throws InterruptedException, ExecutionException {
		CompiledContract compiledContract = null;
		if (compiledContracts == null){
			Map<String, CompiledContract> contracts = ethereum.compile(contractSource).get();
			compiledContract = contracts.get("BlogRegistry");
			if (compiledContract == null) {
				Optional<String> optional = contracts.keySet().stream().filter(s -> s.endsWith("publishing.sol:BlogRegistry"))
						.findFirst();
				if (optional.isPresent())
					compiledContract = contracts.get(optional.get());
			}
		} else {
			ContractMetadata contractMetadata = compiledContracts.contracts.get("BlogRegistry");
			if (contractMetadata == null) {
				Optional<String> optional = compiledContracts.contracts.keySet().stream()
						.filter(s -> s.endsWith("publishing.sol:BlogRegistry")).findFirst();
				if (optional.isPresent())
					contractMetadata = compiledContracts.contracts.get(optional.get());
			}
			compiledContract = CompiledContract.from(null, "BlogRegistry", contractMetadata);
		}
		if(compiledContract == null)
			throw new IllegalArgumentException("Contract code for 'BlogRegistry' not found");

		return compiledContract;
	}
	/**
	 * 
	 * @param address
	 * @return
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public Observable<EventNewBlog_uint_string_address> observeEventNewBlog_uint_string_address(EthAddress address) throws InterruptedException, ExecutionException {
		CompiledContract compiledContract = compiledContractBlogRegistry();
		Observable<EventNewBlog_uint_string_address> observeEvents = ethereum.observeEvents(compiledContract.getAbi(), address, "NewBlog", EventNewBlog_uint_string_address.class);
		return observeEvents;
	}


}
