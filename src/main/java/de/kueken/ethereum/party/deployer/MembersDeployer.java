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

import de.kueken.ethereum.party.members.*;




/**
 * The deployer for the members package.
 *
 */
public class MembersDeployer {

	private EthereumFacade ethereum;
	private SoliditySource contractSource;
	private CompilationResult compiledContracts;
	private static String filename = "/mix/members.sol";

	/**
	 * Create an instance of the deployer with the default contract code file.
	 * 
	 * @param ethereum
	 */
	public MembersDeployer(EthereumFacade ethereum) {
		this(ethereum,filename,false);
	}

	/**
	 * Create an instance of the deployer.
	 * 
	 * @param ethereum
	 * @param contractSourceFile
	 * @param compiled is the source code already compiled
	 */
	public MembersDeployer(EthereumFacade ethereum, String contractSourceFile, boolean compiled) {
		this.ethereum = ethereum;
		setContractSource(contractSourceFile, compiled);
	}

	/**
	 * Create an instance of the deployer.
	 * 
	 * @param ethereum
	 * @param contractSourceFile
	 */
	public MembersDeployer(EthereumFacade ethereum, File contractSourceFile, boolean compiled) {
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
	 * Deploys a 'MemberRegistry' on the blockchain.
	 * 
	 * @param sender
	 *            the sender address
	 * @return the address of the deployed contract
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public CompletableFuture<EthAddress> deployMemberRegistry(EthAccount sender) throws InterruptedException, ExecutionException{
		CompiledContract compiledContract = compiledContractMemberRegistry();
		CompletableFuture<EthAddress> address = ethereum.publishContract(compiledContract, sender);
		return address;
	}


	/**
	 * Deploys a 'MemberRegistry' on the blockchain and wrapps the contcat proxy.
	 *  
	 * @param sender the sender address
	 * @return the contract interface and the deployed address
	 */
	public DeployDuo<MemberRegistry> createMemberRegistry(EthAccount sender) throws IOException, InterruptedException, ExecutionException {
		CompletableFuture<EthAddress> address = deployMemberRegistry(sender);
		return new EthereumInstance.DeployDuo<MemberRegistry>(address.get(), createMemberRegistryProxy(sender, address.get()));
	}

	/**
	 * Create a proxy for a deployed 'MemberRegistry' contract.
	 *  
	 * @param sender the sender address
	 * @param address the address of the contract
	 * @return the contract interface
	 */
	public MemberRegistry createMemberRegistryProxy(EthAccount sender, EthAddress address) throws IOException, InterruptedException, ExecutionException {
		CompiledContract compiledContract = compiledContractMemberRegistry();
		MemberRegistry memberregistry = ethereum.createContractProxy(compiledContract, address, sender, MemberRegistry.class);
		return memberregistry;
	}

	/**
	 * Return the compiled contract for the contract 'MemberRegistry', when in source the contract code is compiled.
	 * @return the compiled contract for 'MemberRegistry'.
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public CompiledContract compiledContractMemberRegistry() throws InterruptedException, ExecutionException {
		CompiledContract compiledContract = null;
		if (compiledContracts == null){
			Map<String, CompiledContract> contracts = ethereum.compile(contractSource).get();
			compiledContract = contracts.get("MemberRegistry");
			if (compiledContract == null) {
				Optional<String> optional = contracts.keySet().stream().filter(s -> s.endsWith("members.sol:MemberRegistry"))
						.findFirst();
				if (optional.isPresent())
					compiledContract = contracts.get(optional.get());
			}
		} else {
			ContractMetadata contractMetadata = compiledContracts.contracts.get("MemberRegistry");
			if (contractMetadata == null) {
				Optional<String> optional = compiledContracts.contracts.keySet().stream()
						.filter(s -> s.endsWith("members.sol:MemberRegistry")).findFirst();
				if (optional.isPresent())
					contractMetadata = compiledContracts.contracts.get(optional.get());
			}
			compiledContract = CompiledContract.from(null, "MemberRegistry", contractMetadata);
		}
		if(compiledContract == null)
			throw new IllegalArgumentException("Contract code for 'MemberRegistry' not found");

		return compiledContract;
	}
	/**
	 * 
	 * @param address
	 * @return
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public Observable<EventMemberEvent_address_EventType_uint_string_MemberState> observeEventMemberEvent_address_EventType_uint_string_MemberState(EthAddress address) throws InterruptedException, ExecutionException {
		CompiledContract compiledContract = compiledContractMemberRegistry();
		Observable<EventMemberEvent_address_EventType_uint_string_MemberState> observeEvents = ethereum.observeEvents(compiledContract.getAbi(), address, "MemberEvent", EventMemberEvent_address_EventType_uint_string_MemberState.class);
		return observeEvents;
	}


	/**
	 * Deploys a 'MemberAware' on the blockchain.
	 * 
	 * @param sender
	 *            the sender address
	 * @return the address of the deployed contract
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public CompletableFuture<EthAddress> deployMemberAware(EthAccount sender) throws InterruptedException, ExecutionException{
		CompiledContract compiledContract = compiledContractMemberAware();
		CompletableFuture<EthAddress> address = ethereum.publishContract(compiledContract, sender);
		return address;
	}


	/**
	 * Deploys a 'MemberAware' on the blockchain and wrapps the contcat proxy.
	 *  
	 * @param sender the sender address
	 * @return the contract interface and the deployed address
	 */
	public DeployDuo<MemberAware> createMemberAware(EthAccount sender) throws IOException, InterruptedException, ExecutionException {
		CompletableFuture<EthAddress> address = deployMemberAware(sender);
		return new EthereumInstance.DeployDuo<MemberAware>(address.get(), createMemberAwareProxy(sender, address.get()));
	}

	/**
	 * Create a proxy for a deployed 'MemberAware' contract.
	 *  
	 * @param sender the sender address
	 * @param address the address of the contract
	 * @return the contract interface
	 */
	public MemberAware createMemberAwareProxy(EthAccount sender, EthAddress address) throws IOException, InterruptedException, ExecutionException {
		CompiledContract compiledContract = compiledContractMemberAware();
		MemberAware memberaware = ethereum.createContractProxy(compiledContract, address, sender, MemberAware.class);
		return memberaware;
	}

	/**
	 * Return the compiled contract for the contract 'MemberAware', when in source the contract code is compiled.
	 * @return the compiled contract for 'MemberAware'.
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public CompiledContract compiledContractMemberAware() throws InterruptedException, ExecutionException {
		CompiledContract compiledContract = null;
		if (compiledContracts == null){
			Map<String, CompiledContract> contracts = ethereum.compile(contractSource).get();
			compiledContract = contracts.get("MemberAware");
			if (compiledContract == null) {
				Optional<String> optional = contracts.keySet().stream().filter(s -> s.endsWith("members.sol:MemberAware"))
						.findFirst();
				if (optional.isPresent())
					compiledContract = contracts.get(optional.get());
			}
		} else {
			ContractMetadata contractMetadata = compiledContracts.contracts.get("MemberAware");
			if (contractMetadata == null) {
				Optional<String> optional = compiledContracts.contracts.keySet().stream()
						.filter(s -> s.endsWith("members.sol:MemberAware")).findFirst();
				if (optional.isPresent())
					contractMetadata = compiledContracts.contracts.get(optional.get());
			}
			compiledContract = CompiledContract.from(null, "MemberAware", contractMetadata);
		}
		if(compiledContract == null)
			throw new IllegalArgumentException("Contract code for 'MemberAware' not found");

		return compiledContract;
	}


}
