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
import de.kueken.ethereum.party.basics.EventConfirmation_address_bytes32;
import de.kueken.ethereum.party.basics.EventManagerChanged_uint_address_uint;
import de.kueken.ethereum.party.basics.EventOwnerAdded_address;
import de.kueken.ethereum.party.basics.EventOwnerChanged_address_address;
import de.kueken.ethereum.party.basics.EventOwnerRemoved_address;
import de.kueken.ethereum.party.basics.EventRequirementChanged_uint;
import de.kueken.ethereum.party.basics.EventRevoke_address_bytes32;
import de.kueken.ethereum.party.basics.Manageable;
import de.kueken.ethereum.party.basics.Multiowned;
import de.kueken.ethereum.party.basics.Owned;
import rx.Observable;


/**
 * The deployer for the basics package.
 *
 */
public class BasicsDeployer {

	private EthereumFacade ethereum;
	private SoliditySourceFile contractSource;
	private CompilationResult compiledContracts;
	private Map<String, SolidityContractDetails> contracts = new HashMap<>();
	private static String filename = "/mix/basics.sol";

	/**
	 * Create an instance of the deployer with the default contract code file.
	 * 
	 * @param ethereum
	 */
	public BasicsDeployer(EthereumFacade ethereum) {
		this(ethereum,filename,false);
	}

	/**
	 * Create an instance of the deployer.
	 * 
	 * @param ethereum
	 * @param contractSourceFile
	 * @param compiled is the source code already compiled
	 */
	public BasicsDeployer(EthereumFacade ethereum, String contractSourceFile, boolean compiled) {
		this.ethereum = ethereum;
		setContractSource(contractSourceFile, compiled);
	}

	/**
	 * Create an instance of the deployer.
	 * 
	 * @param ethereum
	 * @param contractSourceFile
	 */
	public BasicsDeployer(EthereumFacade ethereum, File contractSourceFile, boolean compiled) {
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
	 * Deploys a 'Owned' on the blockchain.
	 * 
	 * @param sender
	 *            the sender address
	 * @return the address of the deployed contract
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public CompletableFuture<EthAddress> deployOwned(EthAccount sender) throws InterruptedException, ExecutionException{
		SolidityContractDetails compiledContract = compiledContractOwned();
		CompletableFuture<EthAddress> address = ethereum.publishContract(compiledContract, sender);
		return address;
	}


	/**
	 * Deploys a 'Owned' on the blockchain and wrapps the contract proxy.
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
		SolidityContractDetails compiledContract = compiledContractOwned();
		Owned owned = ethereum.createContractProxy(compiledContract, address, sender, Owned.class);
		return owned;
	}

	/**
	 * Return the compiled contract for the contract 'Owned', when in source the contract code gets compiled.
	 * @return the compiled contract for 'Owned'.
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public SolidityContractDetails compiledContractOwned() throws InterruptedException, ExecutionException {
		String contractName = "Owned";
		String quallifiedName = "basics.sol:Owned";
		return getCompiledContract(contractName, quallifiedName);
	}

	/**
	 * Deploys a 'Manageable' on the blockchain.
	 * 
	 * @param sender
	 *            the sender address
	 * @return the address of the deployed contract
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public CompletableFuture<EthAddress> deployManageable(EthAccount sender) throws InterruptedException, ExecutionException {
		SolidityContractDetails compiledContract = compiledContractManageable();
		CompletableFuture<EthAddress> address = ethereum.publishContract(compiledContract, sender);
		return address;
	}

	/**
	 * Deploys a 'Manageable' on the blockchain and wrapps the contract proxy.
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
		SolidityContractDetails compiledContract = compiledContractManageable();
		Manageable manageable = ethereum.createContractProxy(compiledContract, address, sender, Manageable.class);
		return manageable;
	}

	/**
	 * Return the compiled contract for the contract 'Manageable', when in source the contract code gets compiled.
	 * @return the compiled contract for 'Manageable'.
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public SolidityContractDetails compiledContractManageable() throws InterruptedException, ExecutionException {
		String contractName = "Manageable";
		String quallifiedName = "basics.sol:Manageable";
		return getCompiledContract(contractName, quallifiedName);
	}

	/**
	 *  Create an observable for the event ManagerChanged of the contract Manageable
	 *  deployed at the given address.
	 *
	 * @param address
	 * @return
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public Observable<EventManagerChanged_uint_address_uint> observeEventManagerChanged_uint_address_uint(EthAddress address) throws InterruptedException, ExecutionException {
		SolidityContractDetails compiledContract = compiledContractManageable();
		Optional<SolidityEvent<EventManagerChanged_uint_address_uint>> eventDefinition = ethereum.findEventDefinition(compiledContract, "ManagerChanged", EventManagerChanged_uint_address_uint.class);
		if(!eventDefinition.isPresent())
			throw new IllegalArgumentException("Event 'ManagerChanged' not found in contract definition."); 
			
		return ethereum.observeEvents(eventDefinition.get(), address);
	}

	/**
	 * Deploys a 'Multiowned' on the blockchain.
	 * 
	 * @param sender
	 *            the sender address
	 * @return the address of the deployed contract
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public CompletableFuture<EthAddress> deployMultiowned(EthAccount sender) throws InterruptedException, ExecutionException{
		SolidityContractDetails compiledContract = compiledContractMultiowned();
		CompletableFuture<EthAddress> address = ethereum.publishContract(compiledContract, sender);
		return address;
	}


	/**
	 * Deploys a 'Multiowned' on the blockchain and wrapps the contract proxy.
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
		SolidityContractDetails compiledContract = compiledContractMultiowned();
		Multiowned multiowned = ethereum.createContractProxy(compiledContract, address, sender, Multiowned.class);
		return multiowned;
	}

	/**
	 * Return the compiled contract for the contract 'Multiowned', when in source the contract code gets compiled.
	 * @return the compiled contract for 'Multiowned'.
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public SolidityContractDetails compiledContractMultiowned() throws InterruptedException, ExecutionException {
		String contractName = "Multiowned";
		String quallifiedName = "basics.sol:Multiowned";
		return getCompiledContract(contractName, quallifiedName);
	}

	/**
	 *  Create an observable for the event Confirmation of the contract Multiowned
	 *  deployed at the given address.
	 *
	 * @param address
	 * @return
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public Observable<EventConfirmation_address_bytes32> observeEventConfirmation_address_bytes32(EthAddress address) throws InterruptedException, ExecutionException {
		SolidityContractDetails compiledContract = compiledContractMultiowned();
		Optional<SolidityEvent<EventConfirmation_address_bytes32>> eventDefinition = ethereum.findEventDefinition(compiledContract, "Confirmation", EventConfirmation_address_bytes32.class);
		if(!eventDefinition.isPresent())
			throw new IllegalArgumentException("Event 'Confirmation' not found in contract definition."); 
			
		return ethereum.observeEvents(eventDefinition.get(), address);
	}

	/**
	 *  Create an observable for the event Revoke of the contract Multiowned
	 *  deployed at the given address.
	 *
	 * @param address
	 * @return
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public Observable<EventRevoke_address_bytes32> observeEventRevoke_address_bytes32(EthAddress address) throws InterruptedException, ExecutionException {
		SolidityContractDetails compiledContract = compiledContractMultiowned();
		Optional<SolidityEvent<EventRevoke_address_bytes32>> eventDefinition = ethereum.findEventDefinition(compiledContract, "Revoke", EventRevoke_address_bytes32.class);
		if(!eventDefinition.isPresent())
			throw new IllegalArgumentException("Event 'Revoke' not found in contract definition."); 
			
		return ethereum.observeEvents(eventDefinition.get(), address);
	}

	/**
	 *  Create an observable for the event OwnerChanged of the contract Multiowned
	 *  deployed at the given address.
	 *
	 * @param address
	 * @return
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public Observable<EventOwnerChanged_address_address> observeEventOwnerChanged_address_address(EthAddress address) throws InterruptedException, ExecutionException {
		SolidityContractDetails compiledContract = compiledContractMultiowned();
		Optional<SolidityEvent<EventOwnerChanged_address_address>> eventDefinition = ethereum.findEventDefinition(compiledContract, "OwnerChanged", EventOwnerChanged_address_address.class);
		if(!eventDefinition.isPresent())
			throw new IllegalArgumentException("Event 'OwnerChanged' not found in contract definition."); 
			
		return ethereum.observeEvents(eventDefinition.get(), address);
	}

	/**
	 *  Create an observable for the event OwnerAdded of the contract Multiowned
	 *  deployed at the given address.
	 *
	 * @param address
	 * @return
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public Observable<EventOwnerAdded_address> observeEventOwnerAdded_address(EthAddress address) throws InterruptedException, ExecutionException {
		SolidityContractDetails compiledContract = compiledContractMultiowned();
		Optional<SolidityEvent<EventOwnerAdded_address>> eventDefinition = ethereum.findEventDefinition(compiledContract, "OwnerAdded", EventOwnerAdded_address.class);
		if(!eventDefinition.isPresent())
			throw new IllegalArgumentException("Event 'OwnerAdded' not found in contract definition."); 
			
		return ethereum.observeEvents(eventDefinition.get(), address);
	}

	/**
	 *  Create an observable for the event OwnerRemoved of the contract Multiowned
	 *  deployed at the given address.
	 *
	 * @param address
	 * @return
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public Observable<EventOwnerRemoved_address> observeEventOwnerRemoved_address(EthAddress address) throws InterruptedException, ExecutionException {
		SolidityContractDetails compiledContract = compiledContractMultiowned();
		Optional<SolidityEvent<EventOwnerRemoved_address>> eventDefinition = ethereum.findEventDefinition(compiledContract, "OwnerRemoved", EventOwnerRemoved_address.class);
		if(!eventDefinition.isPresent())
			throw new IllegalArgumentException("Event 'OwnerRemoved' not found in contract definition."); 
			
		return ethereum.observeEvents(eventDefinition.get(), address);
	}

	/**
	 *  Create an observable for the event RequirementChanged of the contract Multiowned
	 *  deployed at the given address.
	 *
	 * @param address
	 * @return
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public Observable<EventRequirementChanged_uint> observeEventRequirementChanged_uint(EthAddress address) throws InterruptedException, ExecutionException {
		SolidityContractDetails compiledContract = compiledContractMultiowned();
		Optional<SolidityEvent<EventRequirementChanged_uint>> eventDefinition = ethereum.findEventDefinition(compiledContract, "RequirementChanged", EventRequirementChanged_uint.class);
		if(!eventDefinition.isPresent())
			throw new IllegalArgumentException("Event 'RequirementChanged' not found in contract definition."); 
			
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
