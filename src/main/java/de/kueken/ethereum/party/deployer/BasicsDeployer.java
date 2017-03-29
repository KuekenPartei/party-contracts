package de.kueken.ethereum.party.deployer;

import rx.Observable;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.net.URISyntaxException;
import java.util.Map;
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

import de.kueken.ethereum.party.basics.*;




/**
 * The deployer for the basics package.
 *
 */
public class BasicsDeployer {

	private EthereumFacade ethereum;
	private SoliditySource contractSource;
	private CompilationResult compiledContracts;
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
	 * Deploys a 'Owned' on the blockchain.
	 * 
	 * @param sender
	 *            the sender address
	 * @return the address of the deployed contract
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public CompletableFuture<EthAddress> deployOwned(EthAccount sender) throws InterruptedException, ExecutionException{
		CompiledContract compiledContract = compiledContractOwned();
		CompletableFuture<EthAddress> address = ethereum.publishContract(compiledContract, sender);
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
		CompiledContract compiledContract = compiledContractOwned();
		Owned owned = ethereum.createContractProxy(compiledContract, address, sender, Owned.class);
		return owned;
	}

	/**
	 * Return the compiled contract for the contract 'Owned', when in source the contract code is compiled.
	 * @return the compiled contract for 'Owned'.
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public CompiledContract compiledContractOwned() throws InterruptedException, ExecutionException {
		CompiledContract compiledContract = null;
		if (compiledContracts == null){
			Map<String, CompiledContract> contracts = ethereum.compile(contractSource).get();
			compiledContract = contracts.get("Owned");
		} else {
			ContractMetadata contractMetadata = compiledContracts.contracts.get("Owned");
			if (contractMetadata == null)
				throw new IllegalArgumentException("Contract code for 'Owned' not found");
			compiledContract = CompiledContract.from(null, "Owned", contractMetadata);
		}
		return compiledContract;
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
		CompiledContract compiledContract = compiledContractManageable();
		CompletableFuture<EthAddress> address = ethereum.publishContract(compiledContract, sender);
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
		CompiledContract compiledContract = compiledContractManageable();
		Manageable manageable = ethereum.createContractProxy(compiledContract, address, sender, Manageable.class);
		return manageable;
	}

	/**
	 * Return the compiled contract for the contract 'Manageable', when in source the contract code is compiled.
	 * @return the compiled contract for 'Manageable'.
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public CompiledContract compiledContractManageable() throws InterruptedException, ExecutionException {
		CompiledContract compiledContract = null;
		if (compiledContracts == null){
			Map<String, CompiledContract> contracts = ethereum.compile(contractSource).get();
			compiledContract = contracts.get("Manageable");
		} else {
			ContractMetadata contractMetadata = compiledContracts.contracts.get("Manageable");
			if (contractMetadata == null)
				throw new IllegalArgumentException("Contract code for 'Manageable' not found");
			compiledContract = CompiledContract.from(null, "Manageable", contractMetadata);
		}
		return compiledContract;
	}
	/**
	 * 
	 * @param address
	 * @return
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public Observable<EventManagerChanged_uint_address_uint> observeEventManagerChanged_uint_address_uint(EthAddress address) throws InterruptedException, ExecutionException {
		CompiledContract compiledContract = compiledContractManageable();
		Observable<EventManagerChanged_uint_address_uint> observeEvents = ethereum.observeEvents(compiledContract.getAbi(), address, "ManagerChanged", EventManagerChanged_uint_address_uint.class);
		return observeEvents;
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
		CompiledContract compiledContract = compiledContractMultiowned();
		CompletableFuture<EthAddress> address = ethereum.publishContract(compiledContract, sender);
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
		CompiledContract compiledContract = compiledContractMultiowned();
		Multiowned multiowned = ethereum.createContractProxy(compiledContract, address, sender, Multiowned.class);
		return multiowned;
	}

	/**
	 * Return the compiled contract for the contract 'Multiowned', when in source the contract code is compiled.
	 * @return the compiled contract for 'Multiowned'.
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public CompiledContract compiledContractMultiowned() throws InterruptedException, ExecutionException {
		CompiledContract compiledContract = null;
		if (compiledContracts == null){
			Map<String, CompiledContract> contracts = ethereum.compile(contractSource).get();
			compiledContract = contracts.get("Multiowned");
		} else {
			ContractMetadata contractMetadata = compiledContracts.contracts.get("Multiowned");
			if (contractMetadata == null)
				throw new IllegalArgumentException("Contract code for 'Multiowned' not found");
			compiledContract = CompiledContract.from(null, "Multiowned", contractMetadata);
		}
		return compiledContract;
	}
	/**
	 * 
	 * @param address
	 * @return
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public Observable<EventConfirmation_address_bytes32> observeEventConfirmation_address_bytes32(EthAddress address) throws InterruptedException, ExecutionException {
		CompiledContract compiledContract = compiledContractMultiowned();
		Observable<EventConfirmation_address_bytes32> observeEvents = ethereum.observeEvents(compiledContract.getAbi(), address, "Confirmation", EventConfirmation_address_bytes32.class);
		return observeEvents;
	}
	/**
	 * 
	 * @param address
	 * @return
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public Observable<EventRevoke_address_bytes32> observeEventRevoke_address_bytes32(EthAddress address) throws InterruptedException, ExecutionException {
		CompiledContract compiledContract = compiledContractMultiowned();
		Observable<EventRevoke_address_bytes32> observeEvents = ethereum.observeEvents(compiledContract.getAbi(), address, "Revoke", EventRevoke_address_bytes32.class);
		return observeEvents;
	}
	/**
	 * 
	 * @param address
	 * @return
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public Observable<EventOwnerChanged_address_address> observeEventOwnerChanged_address_address(EthAddress address) throws InterruptedException, ExecutionException {
		CompiledContract compiledContract = compiledContractMultiowned();
		Observable<EventOwnerChanged_address_address> observeEvents = ethereum.observeEvents(compiledContract.getAbi(), address, "OwnerChanged", EventOwnerChanged_address_address.class);
		return observeEvents;
	}
	/**
	 * 
	 * @param address
	 * @return
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public Observable<EventOwnerAdded_address> observeEventOwnerAdded_address(EthAddress address) throws InterruptedException, ExecutionException {
		CompiledContract compiledContract = compiledContractMultiowned();
		Observable<EventOwnerAdded_address> observeEvents = ethereum.observeEvents(compiledContract.getAbi(), address, "OwnerAdded", EventOwnerAdded_address.class);
		return observeEvents;
	}
	/**
	 * 
	 * @param address
	 * @return
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public Observable<EventOwnerRemoved_address> observeEventOwnerRemoved_address(EthAddress address) throws InterruptedException, ExecutionException {
		CompiledContract compiledContract = compiledContractMultiowned();
		Observable<EventOwnerRemoved_address> observeEvents = ethereum.observeEvents(compiledContract.getAbi(), address, "OwnerRemoved", EventOwnerRemoved_address.class);
		return observeEvents;
	}
	/**
	 * 
	 * @param address
	 * @return
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public Observable<EventRequirementChanged_uint> observeEventRequirementChanged_uint(EthAddress address) throws InterruptedException, ExecutionException {
		CompiledContract compiledContract = compiledContractMultiowned();
		Observable<EventRequirementChanged_uint> observeEvents = ethereum.observeEvents(compiledContract.getAbi(), address, "RequirementChanged", EventRequirementChanged_uint.class);
		return observeEvents;
	}


}
