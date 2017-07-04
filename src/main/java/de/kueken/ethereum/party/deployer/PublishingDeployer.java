package de.kueken.ethereum.party.deployer;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.net.URISyntaxException;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

import org.adridadou.ethereum.propeller.EthereumFacade;
import org.adridadou.ethereum.propeller.solidity.SolidityContractDetails;
import org.adridadou.ethereum.propeller.solidity.SolidityEvent;
import org.adridadou.ethereum.propeller.values.EthAccount;
import org.adridadou.ethereum.propeller.values.EthAddress;
import org.adridadou.ethereum.propeller.values.SoliditySource;
import org.adridadou.ethereum.propeller.values.SoliditySourceFile;
import org.apache.commons.io.IOUtils;
import org.ethereum.solidity.compiler.CompilationResult;
import org.ethereum.solidity.compiler.CompilationResult.ContractMetadata;

import de.kueken.ethereum.party.EthereumInstance;
import de.kueken.ethereum.party.EthereumInstance.DeployDuo;
import de.kueken.ethereum.party.publishing.BlogRegistry;
import de.kueken.ethereum.party.publishing.EventNewBlog_uint_string_address;
import de.kueken.ethereum.party.publishing.EventNewMessage_string_uint_address_string_string;
import de.kueken.ethereum.party.publishing.ShortBlog;
import rx.Observable;


/**
 * The deployer for the publishing package.
 *
 */
public class PublishingDeployer {

	private EthereumFacade ethereum;
	private SoliditySourceFile contractSource;
	private CompilationResult compiledContracts;
	private Map<String, SolidityContractDetails> contracts = new HashMap<>();
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
		        File contractSrc = new File(this.getClass().getResource(contractSourceFile).toURI());
				contractSource = SoliditySource.from(contractSrc);
			} else {
				String rawJson = IOUtils.toString(this.getClass().getResourceAsStream(contractSourceFile),
						EthereumFacade.CHARSET);
				compiledContracts = CompilationResult.parse(rawJson);
			}
		} catch (IOException | URISyntaxException e) {
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
		SolidityContractDetails compiledContract = compiledContractShortBlog();
		CompletableFuture<EthAddress> address = ethereum.publishContract(compiledContract, sender, _name);
		return address;
	}

	/**
	 * Deploys a 'ShortBlog' on the blockchain and wrapps the contract proxy.
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
		SolidityContractDetails compiledContract = compiledContractShortBlog();
		ShortBlog shortblog = ethereum.createContractProxy(compiledContract, address, sender, ShortBlog.class);
		return shortblog;
	}

	/**
	 * Return the compiled contract for the contract 'ShortBlog', when in source the contract code gets compiled.
	 * @return the compiled contract for 'ShortBlog'.
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public SolidityContractDetails compiledContractShortBlog() throws InterruptedException, ExecutionException {
		String contractName = "ShortBlog";
		String quallifiedName = "publishing.sol:ShortBlog";
		return getCompiledContract(contractName, quallifiedName);
	}

	/**
	 *  Create an observable for the event NewMessage of the contract ShortBlog
	 *  deployed at the given address.
	 *
	 * @param address
	 * @return
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public Observable<EventNewMessage_string_uint_address_string_string> observeEventNewMessage_string_uint_address_string_string(EthAddress address) throws InterruptedException, ExecutionException {
		SolidityContractDetails compiledContract = compiledContractShortBlog();
		Optional<SolidityEvent<EventNewMessage_string_uint_address_string_string>> eventDefinition = ethereum.findEventDefinition(compiledContract, "NewMessage", EventNewMessage_string_uint_address_string_string.class);
		if(!eventDefinition.isPresent())
			throw new IllegalArgumentException("Event 'NewMessage' not found in contract definition."); 
			
		return ethereum.observeEvents(eventDefinition.get(), address);
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
		SolidityContractDetails compiledContract = compiledContractBlogRegistry();
		CompletableFuture<EthAddress> address = ethereum.publishContract(compiledContract, sender);
		return address;
	}


	/**
	 * Deploys a 'BlogRegistry' on the blockchain and wrapps the contract proxy.
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
		SolidityContractDetails compiledContract = compiledContractBlogRegistry();
		BlogRegistry blogregistry = ethereum.createContractProxy(compiledContract, address, sender, BlogRegistry.class);
		return blogregistry;
	}

	/**
	 * Return the compiled contract for the contract 'BlogRegistry', when in source the contract code gets compiled.
	 * @return the compiled contract for 'BlogRegistry'.
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public SolidityContractDetails compiledContractBlogRegistry() throws InterruptedException, ExecutionException {
		String contractName = "BlogRegistry";
		String quallifiedName = "publishing.sol:BlogRegistry";
		return getCompiledContract(contractName, quallifiedName);
	}

	/**
	 *  Create an observable for the event NewBlog of the contract BlogRegistry
	 *  deployed at the given address.
	 *
	 * @param address
	 * @return
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public Observable<EventNewBlog_uint_string_address> observeEventNewBlog_uint_string_address(EthAddress address) throws InterruptedException, ExecutionException {
		SolidityContractDetails compiledContract = compiledContractBlogRegistry();
		Optional<SolidityEvent<EventNewBlog_uint_string_address>> eventDefinition = ethereum.findEventDefinition(compiledContract, "NewBlog", EventNewBlog_uint_string_address.class);
		if(!eventDefinition.isPresent())
			throw new IllegalArgumentException("Event 'NewBlog' not found in contract definition."); 
			
		return ethereum.observeEvents(eventDefinition.get(), address);
	}

	/**
	 * Get the compiled contract by name or qualified name.
	 * @param contractName
	 * @param qualifiedName
	 * @return
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public SolidityContractDetails getCompiledContract(String contractName, String qualifiedName)
			throws InterruptedException, ExecutionException {
		SolidityContractDetails compiledContract = contracts.get(qualifiedName == null ? contractName : qualifiedName);
		if (compiledContract != null)
			return compiledContract;

		if (compiledContracts == null) {
			org.adridadou.ethereum.propeller.solidity.CompilationResult compilationResult = ethereum
					.compile(contractSource);
			Optional<SolidityContractDetails> contract = compilationResult.findContract(contractName);
			if (contract.isPresent()) {
				compiledContract = contract.get();
			} else {
				contract = compilationResult.findContract(qualifiedName);
				if (contract.isPresent())
					compiledContract = contract.get();
			}
		} else {
			ContractMetadata contractMetadata = compiledContracts.contracts.get(contractName);
			if (contractMetadata == null) {
				if (qualifiedName == null || qualifiedName.isEmpty())
					throw new IllegalArgumentException("Qualified name must not be null or empty.");

				Optional<String> optional = compiledContracts.contracts.keySet().stream()
						.filter(s -> s.endsWith(qualifiedName)).findFirst();
				if (optional.isPresent()) {
					contractMetadata = compiledContracts.contracts.get(optional.get());
				}
			}
			compiledContract = new SolidityContractDetails(contractMetadata.abi, contractMetadata.bin,
					contractMetadata.metadata);
		}
		if (compiledContract == null)
			throw new IllegalArgumentException(
					"Contract code for '" + contractName + "/" + qualifiedName + "' not found");

		contracts.put(qualifiedName == null ? contractName : qualifiedName, compiledContract);
		return compiledContract;
	}
}
