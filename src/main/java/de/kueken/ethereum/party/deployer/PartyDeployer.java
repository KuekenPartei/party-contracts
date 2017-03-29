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

import de.kueken.ethereum.party.party.*;




/**
 * The deployer for the party package.
 *
 */
public class PartyDeployer {

	private EthereumFacade ethereum;
	private SoliditySource contractSource;
	private CompilationResult compiledContracts;
	private static String filename = "/mix/party.sol";

	/**
	 * Create an instance of the deployer with the default contract code file.
	 * 
	 * @param ethereum
	 */
	public PartyDeployer(EthereumFacade ethereum) {
		this(ethereum,filename,false);
	}

	/**
	 * Create an instance of the deployer.
	 * 
	 * @param ethereum
	 * @param contractSourceFile
	 * @param compiled is the source code already compiled
	 */
	public PartyDeployer(EthereumFacade ethereum, String contractSourceFile, boolean compiled) {
		this.ethereum = ethereum;
		setContractSource(contractSourceFile, compiled);
	}

	/**
	 * Create an instance of the deployer.
	 * 
	 * @param ethereum
	 * @param contractSourceFile
	 */
	public PartyDeployer(EthereumFacade ethereum, File contractSourceFile, boolean compiled) {
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
	 * Deploys a 'Organ' on the blockchain.
	 * 
	 * @param sender
	 *            the sender address
	 * @return the address of the deployed contract
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public CompletableFuture<EthAddress> deployOrgan(EthAccount sender) throws InterruptedException, ExecutionException{
		CompiledContract compiledContract = compiledContractOrgan();
		CompletableFuture<EthAddress> address = ethereum.publishContract(compiledContract, sender);
		return address;
	}


	/**
	 * Deploys a 'Organ' on the blockchain and wrapps the contcat proxy.
	 *  
	 * @param sender the sender address
	 * @return the contract interface and the deployed address
	 */
	public DeployDuo<Organ> createOrgan(EthAccount sender) throws IOException, InterruptedException, ExecutionException {
		CompletableFuture<EthAddress> address = deployOrgan(sender);
		return new EthereumInstance.DeployDuo<Organ>(address.get(), createOrganProxy(sender, address.get()));
	}

	/**
	 * Create a proxy for a deployed 'Organ' contract.
	 *  
	 * @param sender the sender address
	 * @param address the address of the contract
	 * @return the contract interface
	 */
	public Organ createOrganProxy(EthAccount sender, EthAddress address) throws IOException, InterruptedException, ExecutionException {
		CompiledContract compiledContract = compiledContractOrgan();
		Organ organ = ethereum.createContractProxy(compiledContract, address, sender, Organ.class);
		return organ;
	}

	/**
	 * Return the compiled contract for the contract 'Organ', when in source the contract code is compiled.
	 * @return the compiled contract for 'Organ'.
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public CompiledContract compiledContractOrgan() throws InterruptedException, ExecutionException {
		CompiledContract compiledContract = null;
		if (compiledContracts == null){
			Map<String, CompiledContract> contracts = ethereum.compile(contractSource).get();
			compiledContract = contracts.get("Organ");
		} else {
			ContractMetadata contractMetadata = compiledContracts.contracts.get("Organ");
			if (contractMetadata == null)
				throw new IllegalArgumentException("Contract code for 'Organ' not found");
			compiledContract = CompiledContract.from(null, "Organ", contractMetadata);
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
	public Observable<EventFunctionMemberChange_address_uint_address> observeEventFunctionMemberChange_address_uint_address(EthAddress address) throws InterruptedException, ExecutionException {
		CompiledContract compiledContract = compiledContractOrgan();
		Observable<EventFunctionMemberChange_address_uint_address> observeEvents = ethereum.observeEvents(compiledContract.getAbi(), address, "FunctionMemberChange", EventFunctionMemberChange_address_uint_address.class);
		return observeEvents;
	}
	/**
	 * 
	 * @param address
	 * @return
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public Observable<EventFunctionChange_uint_OrganFunction> observeEventFunctionChange_uint_OrganFunction(EthAddress address) throws InterruptedException, ExecutionException {
		CompiledContract compiledContract = compiledContractOrgan();
		Observable<EventFunctionChange_uint_OrganFunction> observeEvents = ethereum.observeEvents(compiledContract.getAbi(), address, "FunctionChange", EventFunctionChange_uint_OrganFunction.class);
		return observeEvents;
	}


	/**
	 * Deploys a 'Party' on the blockchain.
	 * 
	 * @param sender
	 *            the sender address
	 * @return the address of the deployed contract
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public CompletableFuture<EthAddress> deployParty(EthAccount sender) throws InterruptedException, ExecutionException{
		CompiledContract compiledContract = compiledContractParty();
		CompletableFuture<EthAddress> address = ethereum.publishContract(compiledContract, sender);
		return address;
	}


	/**
	 * Deploys a 'Party' on the blockchain and wrapps the contcat proxy.
	 *  
	 * @param sender the sender address
	 * @return the contract interface and the deployed address
	 */
	public DeployDuo<Party> createParty(EthAccount sender) throws IOException, InterruptedException, ExecutionException {
		CompletableFuture<EthAddress> address = deployParty(sender);
		return new EthereumInstance.DeployDuo<Party>(address.get(), createPartyProxy(sender, address.get()));
	}

	/**
	 * Create a proxy for a deployed 'Party' contract.
	 *  
	 * @param sender the sender address
	 * @param address the address of the contract
	 * @return the contract interface
	 */
	public Party createPartyProxy(EthAccount sender, EthAddress address) throws IOException, InterruptedException, ExecutionException {
		CompiledContract compiledContract = compiledContractParty();
		Party party = ethereum.createContractProxy(compiledContract, address, sender, Party.class);
		return party;
	}

	/**
	 * Return the compiled contract for the contract 'Party', when in source the contract code is compiled.
	 * @return the compiled contract for 'Party'.
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public CompiledContract compiledContractParty() throws InterruptedException, ExecutionException {
		CompiledContract compiledContract = null;
		if (compiledContracts == null){
			Map<String, CompiledContract> contracts = ethereum.compile(contractSource).get();
			compiledContract = contracts.get("Party");
		} else {
			ContractMetadata contractMetadata = compiledContracts.contracts.get("Party");
			if (contractMetadata == null)
				throw new IllegalArgumentException("Contract code for 'Party' not found");
			compiledContract = CompiledContract.from(null, "Party", contractMetadata);
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
	public Observable<EventConstiutionChange> observeEventConstiutionChange(EthAddress address) throws InterruptedException, ExecutionException {
		CompiledContract compiledContract = compiledContractParty();
		Observable<EventConstiutionChange> observeEvents = ethereum.observeEvents(compiledContract.getAbi(), address, "ConstiutionChange", EventConstiutionChange.class);
		return observeEvents;
	}
	/**
	 * 
	 * @param address
	 * @return
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public Observable<EventOrganChanged_Organ_uint> observeEventOrganChanged_Organ_uint(EthAddress address) throws InterruptedException, ExecutionException {
		CompiledContract compiledContract = compiledContractParty();
		Observable<EventOrganChanged_Organ_uint> observeEvents = ethereum.observeEvents(compiledContract.getAbi(), address, "OrganChanged", EventOrganChanged_Organ_uint.class);
		return observeEvents;
	}
	/**
	 * 
	 * @param address
	 * @return
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public Observable<EventDivisionChanged_address_address_uint> observeEventDivisionChanged_address_address_uint(EthAddress address) throws InterruptedException, ExecutionException {
		CompiledContract compiledContract = compiledContractParty();
		Observable<EventDivisionChanged_address_address_uint> observeEvents = ethereum.observeEvents(compiledContract.getAbi(), address, "DivisionChanged", EventDivisionChanged_address_address_uint.class);
		return observeEvents;
	}


	/**
	 * Deploys a 'KUEKeNParty' on the blockchain.
	 * 
	 * @param sender
	 *            the sender address
	 * @param _name The name of the party or division.
	 * @return the address of the deployed contract
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public CompletableFuture<EthAddress> deployKUEKeNParty(EthAccount sender, String _name) throws InterruptedException, ExecutionException {
		CompiledContract compiledContract = compiledContractKUEKeNParty();
		CompletableFuture<EthAddress> address = ethereum.publishContract(compiledContract, sender, _name);
		return address;
	}

	/**
	 * Deploys a 'KUEKeNParty' on the blockchain and wrapps the contcat proxy.
	 *  
	 * @param sender the sender address
	 * @param _name The name of the party or division.
	 * @return the contract interface
	 */
	public DeployDuo<KUEKeNParty> createKUEKeNParty(EthAccount sender, String _name) throws IOException, InterruptedException, ExecutionException {
		CompletableFuture<EthAddress> address = deployKUEKeNParty(sender, _name);
		return new EthereumInstance.DeployDuo<KUEKeNParty>(address.get(), createKUEKeNPartyProxy(sender, address.get()));
	}

	/**
	 * Create a proxy for a deployed 'KUEKeNParty' contract.
	 *  
	 * @param sender the sender address
	 * @param address the address of the contract
	 * @return the contract interface
	 */
	public KUEKeNParty createKUEKeNPartyProxy(EthAccount sender, EthAddress address) throws IOException, InterruptedException, ExecutionException {
		CompiledContract compiledContract = compiledContractKUEKeNParty();
		KUEKeNParty kuekenparty = ethereum.createContractProxy(compiledContract, address, sender, KUEKeNParty.class);
		return kuekenparty;
	}

	/**
	 * Return the compiled contract for the contract 'KUEKeNParty', when in source the contract code is compiled.
	 * @return the compiled contract for 'KUEKeNParty'.
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public CompiledContract compiledContractKUEKeNParty() throws InterruptedException, ExecutionException {
		CompiledContract compiledContract = null;
		if (compiledContracts == null){
			Map<String, CompiledContract> contracts = ethereum.compile(contractSource).get();
			compiledContract = contracts.get("KUEKeNParty");
		} else {
			ContractMetadata contractMetadata = compiledContracts.contracts.get("KUEKeNParty");
			if (contractMetadata == null)
				throw new IllegalArgumentException("Contract code for 'KUEKeNParty' not found");
			compiledContract = CompiledContract.from(null, "KUEKeNParty", contractMetadata);
		}
		return compiledContract;
	}


	/**
	 * Deploys a 'Conference' on the blockchain.
	 * 
	 * @param sender
	 *            the sender address
	 * @return the address of the deployed contract
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public CompletableFuture<EthAddress> deployConference(EthAccount sender) throws InterruptedException, ExecutionException{
		CompiledContract compiledContract = compiledContractConference();
		CompletableFuture<EthAddress> address = ethereum.publishContract(compiledContract, sender);
		return address;
	}


	/**
	 * Deploys a 'Conference' on the blockchain and wrapps the contcat proxy.
	 *  
	 * @param sender the sender address
	 * @return the contract interface and the deployed address
	 */
	public DeployDuo<Conference> createConference(EthAccount sender) throws IOException, InterruptedException, ExecutionException {
		CompletableFuture<EthAddress> address = deployConference(sender);
		return new EthereumInstance.DeployDuo<Conference>(address.get(), createConferenceProxy(sender, address.get()));
	}

	/**
	 * Create a proxy for a deployed 'Conference' contract.
	 *  
	 * @param sender the sender address
	 * @param address the address of the contract
	 * @return the contract interface
	 */
	public Conference createConferenceProxy(EthAccount sender, EthAddress address) throws IOException, InterruptedException, ExecutionException {
		CompiledContract compiledContract = compiledContractConference();
		Conference conference = ethereum.createContractProxy(compiledContract, address, sender, Conference.class);
		return conference;
	}

	/**
	 * Return the compiled contract for the contract 'Conference', when in source the contract code is compiled.
	 * @return the compiled contract for 'Conference'.
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public CompiledContract compiledContractConference() throws InterruptedException, ExecutionException {
		CompiledContract compiledContract = null;
		if (compiledContracts == null){
			Map<String, CompiledContract> contracts = ethereum.compile(contractSource).get();
			compiledContract = contracts.get("Conference");
		} else {
			ContractMetadata contractMetadata = compiledContracts.contracts.get("Conference");
			if (contractMetadata == null)
				throw new IllegalArgumentException("Contract code for 'Conference' not found");
			compiledContract = CompiledContract.from(null, "Conference", contractMetadata);
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
	public Observable<EventMemberAccreditated_uint_string_address> observeEventMemberAccreditated_uint_string_address(EthAddress address) throws InterruptedException, ExecutionException {
		CompiledContract compiledContract = compiledContractConference();
		Observable<EventMemberAccreditated_uint_string_address> observeEvents = ethereum.observeEvents(compiledContract.getAbi(), address, "MemberAccreditated", EventMemberAccreditated_uint_string_address.class);
		return observeEvents;
	}


	/**
	 * Deploys a 'FoundationConference' on the blockchain.
	 * 
	 * @param sender
	 *            the sender address
	 * @return the address of the deployed contract
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public CompletableFuture<EthAddress> deployFoundationConference(EthAccount sender) throws InterruptedException, ExecutionException{
		CompiledContract compiledContract = compiledContractFoundationConference();
		CompletableFuture<EthAddress> address = ethereum.publishContract(compiledContract, sender);
		return address;
	}


	/**
	 * Deploys a 'FoundationConference' on the blockchain and wrapps the contcat proxy.
	 *  
	 * @param sender the sender address
	 * @return the contract interface and the deployed address
	 */
	public DeployDuo<FoundationConference> createFoundationConference(EthAccount sender) throws IOException, InterruptedException, ExecutionException {
		CompletableFuture<EthAddress> address = deployFoundationConference(sender);
		return new EthereumInstance.DeployDuo<FoundationConference>(address.get(), createFoundationConferenceProxy(sender, address.get()));
	}

	/**
	 * Create a proxy for a deployed 'FoundationConference' contract.
	 *  
	 * @param sender the sender address
	 * @param address the address of the contract
	 * @return the contract interface
	 */
	public FoundationConference createFoundationConferenceProxy(EthAccount sender, EthAddress address) throws IOException, InterruptedException, ExecutionException {
		CompiledContract compiledContract = compiledContractFoundationConference();
		FoundationConference foundationconference = ethereum.createContractProxy(compiledContract, address, sender, FoundationConference.class);
		return foundationconference;
	}

	/**
	 * Return the compiled contract for the contract 'FoundationConference', when in source the contract code is compiled.
	 * @return the compiled contract for 'FoundationConference'.
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public CompiledContract compiledContractFoundationConference() throws InterruptedException, ExecutionException {
		CompiledContract compiledContract = null;
		if (compiledContracts == null){
			Map<String, CompiledContract> contracts = ethereum.compile(contractSource).get();
			compiledContract = contracts.get("FoundationConference");
		} else {
			ContractMetadata contractMetadata = compiledContracts.contracts.get("FoundationConference");
			if (contractMetadata == null)
				throw new IllegalArgumentException("Contract code for 'FoundationConference' not found");
			compiledContract = CompiledContract.from(null, "FoundationConference", contractMetadata);
		}
		return compiledContract;
	}


	/**
	 * Deploys a 'OrganFunction' on the blockchain.
	 * 
	 * @param sender
	 *            the sender address
	 * @param _name 
	 * @param _ch 
	 * @return the address of the deployed contract
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public CompletableFuture<EthAddress> deployOrganFunction(EthAccount sender, String _name, String _ch) throws InterruptedException, ExecutionException {
		CompiledContract compiledContract = compiledContractOrganFunction();
		CompletableFuture<EthAddress> address = ethereum.publishContract(compiledContract, sender, _name, _ch);
		return address;
	}

	/**
	 * Deploys a 'OrganFunction' on the blockchain and wrapps the contcat proxy.
	 *  
	 * @param sender the sender address
	 * @param _name 
	 * @param _ch 
	 * @return the contract interface
	 */
	public DeployDuo<OrganFunction> createOrganFunction(EthAccount sender, String _name, String _ch) throws IOException, InterruptedException, ExecutionException {
		CompletableFuture<EthAddress> address = deployOrganFunction(sender, _name, _ch);
		return new EthereumInstance.DeployDuo<OrganFunction>(address.get(), createOrganFunctionProxy(sender, address.get()));
	}

	/**
	 * Create a proxy for a deployed 'OrganFunction' contract.
	 *  
	 * @param sender the sender address
	 * @param address the address of the contract
	 * @return the contract interface
	 */
	public OrganFunction createOrganFunctionProxy(EthAccount sender, EthAddress address) throws IOException, InterruptedException, ExecutionException {
		CompiledContract compiledContract = compiledContractOrganFunction();
		OrganFunction organfunction = ethereum.createContractProxy(compiledContract, address, sender, OrganFunction.class);
		return organfunction;
	}

	/**
	 * Return the compiled contract for the contract 'OrganFunction', when in source the contract code is compiled.
	 * @return the compiled contract for 'OrganFunction'.
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public CompiledContract compiledContractOrganFunction() throws InterruptedException, ExecutionException {
		CompiledContract compiledContract = null;
		if (compiledContracts == null){
			Map<String, CompiledContract> contracts = ethereum.compile(contractSource).get();
			compiledContract = contracts.get("OrganFunction");
		} else {
			ContractMetadata contractMetadata = compiledContracts.contracts.get("OrganFunction");
			if (contractMetadata == null)
				throw new IllegalArgumentException("Contract code for 'OrganFunction' not found");
			compiledContract = CompiledContract.from(null, "OrganFunction", contractMetadata);
		}
		return compiledContract;
	}


}
