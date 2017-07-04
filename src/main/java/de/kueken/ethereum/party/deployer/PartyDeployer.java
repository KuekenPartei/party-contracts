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
import de.kueken.ethereum.party.party.Conference;
import de.kueken.ethereum.party.party.EventConstiutionChange;
import de.kueken.ethereum.party.party.EventDivisionChanged_address_address_uint;
import de.kueken.ethereum.party.party.EventFunctionChange_uint_OrganFunction;
import de.kueken.ethereum.party.party.EventFunctionMemberChange_address_uint_address;
import de.kueken.ethereum.party.party.EventMemberAccreditated_uint_string_address;
import de.kueken.ethereum.party.party.EventOrganChanged_Organ_uint;
import de.kueken.ethereum.party.party.FoundationConference;
import de.kueken.ethereum.party.party.KUEKeNParty;
import de.kueken.ethereum.party.party.Organ;
import de.kueken.ethereum.party.party.OrganFunction;
import de.kueken.ethereum.party.party.Party;
import rx.Observable;


/**
 * The deployer for the party package.
 *
 */
public class PartyDeployer {

	private EthereumFacade ethereum;
	private SoliditySourceFile contractSource;
	private CompilationResult compiledContracts;
	private Map<String, SolidityContractDetails> contracts = new HashMap<>();
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
	 * Deploys a 'Organ' on the blockchain.
	 * 
	 * @param sender
	 *            the sender address
	 * @return the address of the deployed contract
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public CompletableFuture<EthAddress> deployOrgan(EthAccount sender) throws InterruptedException, ExecutionException{
		SolidityContractDetails compiledContract = compiledContractOrgan();
		CompletableFuture<EthAddress> address = ethereum.publishContract(compiledContract, sender);
		return address;
	}


	/**
	 * Deploys a 'Organ' on the blockchain and wrapps the contract proxy.
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
		SolidityContractDetails compiledContract = compiledContractOrgan();
		Organ organ = ethereum.createContractProxy(compiledContract, address, sender, Organ.class);
		return organ;
	}

	/**
	 * Return the compiled contract for the contract 'Organ', when in source the contract code gets compiled.
	 * @return the compiled contract for 'Organ'.
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public SolidityContractDetails compiledContractOrgan() throws InterruptedException, ExecutionException {
		String contractName = "Organ";
		String quallifiedName = "party.sol:Organ";
		return getCompiledContract(contractName, quallifiedName);
	}

	/**
	 *  Create an observable for the event FunctionMemberChange of the contract Organ
	 *  deployed at the given address.
	 *
	 * @param address
	 * @return
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public Observable<EventFunctionMemberChange_address_uint_address> observeEventFunctionMemberChange_address_uint_address(EthAddress address) throws InterruptedException, ExecutionException {
		SolidityContractDetails compiledContract = compiledContractOrgan();
		Optional<SolidityEvent<EventFunctionMemberChange_address_uint_address>> eventDefinition = ethereum.findEventDefinition(compiledContract, "FunctionMemberChange", EventFunctionMemberChange_address_uint_address.class);
		if(!eventDefinition.isPresent())
			throw new IllegalArgumentException("Event 'FunctionMemberChange' not found in contract definition."); 
			
		return ethereum.observeEvents(eventDefinition.get(), address);
	}

	/**
	 *  Create an observable for the event FunctionChange of the contract Organ
	 *  deployed at the given address.
	 *
	 * @param address
	 * @return
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public Observable<EventFunctionChange_uint_OrganFunction> observeEventFunctionChange_uint_OrganFunction(EthAddress address) throws InterruptedException, ExecutionException {
		SolidityContractDetails compiledContract = compiledContractOrgan();
		Optional<SolidityEvent<EventFunctionChange_uint_OrganFunction>> eventDefinition = ethereum.findEventDefinition(compiledContract, "FunctionChange", EventFunctionChange_uint_OrganFunction.class);
		if(!eventDefinition.isPresent())
			throw new IllegalArgumentException("Event 'FunctionChange' not found in contract definition."); 
			
		return ethereum.observeEvents(eventDefinition.get(), address);
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
		SolidityContractDetails compiledContract = compiledContractParty();
		CompletableFuture<EthAddress> address = ethereum.publishContract(compiledContract, sender);
		return address;
	}


	/**
	 * Deploys a 'Party' on the blockchain and wrapps the contract proxy.
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
		SolidityContractDetails compiledContract = compiledContractParty();
		Party party = ethereum.createContractProxy(compiledContract, address, sender, Party.class);
		return party;
	}

	/**
	 * Return the compiled contract for the contract 'Party', when in source the contract code gets compiled.
	 * @return the compiled contract for 'Party'.
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public SolidityContractDetails compiledContractParty() throws InterruptedException, ExecutionException {
		String contractName = "Party";
		String quallifiedName = "party.sol:Party";
		return getCompiledContract(contractName, quallifiedName);
	}

	/**
	 *  Create an observable for the event ConstiutionChange of the contract Party
	 *  deployed at the given address.
	 *
	 * @param address
	 * @return
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public Observable<EventConstiutionChange> observeEventConstiutionChange(EthAddress address) throws InterruptedException, ExecutionException {
		SolidityContractDetails compiledContract = compiledContractParty();
		Optional<SolidityEvent<EventConstiutionChange>> eventDefinition = ethereum.findEventDefinition(compiledContract, "ConstiutionChange", EventConstiutionChange.class);
		if(!eventDefinition.isPresent())
			throw new IllegalArgumentException("Event 'ConstiutionChange' not found in contract definition."); 
			
		return ethereum.observeEvents(eventDefinition.get(), address);
	}

	/**
	 *  Create an observable for the event OrganChanged of the contract Party
	 *  deployed at the given address.
	 *
	 * @param address
	 * @return
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public Observable<EventOrganChanged_Organ_uint> observeEventOrganChanged_Organ_uint(EthAddress address) throws InterruptedException, ExecutionException {
		SolidityContractDetails compiledContract = compiledContractParty();
		Optional<SolidityEvent<EventOrganChanged_Organ_uint>> eventDefinition = ethereum.findEventDefinition(compiledContract, "OrganChanged", EventOrganChanged_Organ_uint.class);
		if(!eventDefinition.isPresent())
			throw new IllegalArgumentException("Event 'OrganChanged' not found in contract definition."); 
			
		return ethereum.observeEvents(eventDefinition.get(), address);
	}

	/**
	 *  Create an observable for the event DivisionChanged of the contract Party
	 *  deployed at the given address.
	 *
	 * @param address
	 * @return
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public Observable<EventDivisionChanged_address_address_uint> observeEventDivisionChanged_address_address_uint(EthAddress address) throws InterruptedException, ExecutionException {
		SolidityContractDetails compiledContract = compiledContractParty();
		Optional<SolidityEvent<EventDivisionChanged_address_address_uint>> eventDefinition = ethereum.findEventDefinition(compiledContract, "DivisionChanged", EventDivisionChanged_address_address_uint.class);
		if(!eventDefinition.isPresent())
			throw new IllegalArgumentException("Event 'DivisionChanged' not found in contract definition."); 
			
		return ethereum.observeEvents(eventDefinition.get(), address);
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
		SolidityContractDetails compiledContract = compiledContractKUEKeNParty();
		CompletableFuture<EthAddress> address = ethereum.publishContract(compiledContract, sender, _name);
		return address;
	}

	/**
	 * Deploys a 'KUEKeNParty' on the blockchain and wrapps the contract proxy.
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
		SolidityContractDetails compiledContract = compiledContractKUEKeNParty();
		KUEKeNParty kuekenparty = ethereum.createContractProxy(compiledContract, address, sender, KUEKeNParty.class);
		return kuekenparty;
	}

	/**
	 * Return the compiled contract for the contract 'KUEKeNParty', when in source the contract code gets compiled.
	 * @return the compiled contract for 'KUEKeNParty'.
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public SolidityContractDetails compiledContractKUEKeNParty() throws InterruptedException, ExecutionException {
		String contractName = "KUEKeNParty";
		String quallifiedName = "party.sol:KUEKeNParty";
		return getCompiledContract(contractName, quallifiedName);
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
		SolidityContractDetails compiledContract = compiledContractConference();
		CompletableFuture<EthAddress> address = ethereum.publishContract(compiledContract, sender);
		return address;
	}


	/**
	 * Deploys a 'Conference' on the blockchain and wrapps the contract proxy.
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
		SolidityContractDetails compiledContract = compiledContractConference();
		Conference conference = ethereum.createContractProxy(compiledContract, address, sender, Conference.class);
		return conference;
	}

	/**
	 * Return the compiled contract for the contract 'Conference', when in source the contract code gets compiled.
	 * @return the compiled contract for 'Conference'.
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public SolidityContractDetails compiledContractConference() throws InterruptedException, ExecutionException {
		String contractName = "Conference";
		String quallifiedName = "party.sol:Conference";
		return getCompiledContract(contractName, quallifiedName);
	}

	/**
	 *  Create an observable for the event MemberAccreditated of the contract Conference
	 *  deployed at the given address.
	 *
	 * @param address
	 * @return
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public Observable<EventMemberAccreditated_uint_string_address> observeEventMemberAccreditated_uint_string_address(EthAddress address) throws InterruptedException, ExecutionException {
		SolidityContractDetails compiledContract = compiledContractConference();
		Optional<SolidityEvent<EventMemberAccreditated_uint_string_address>> eventDefinition = ethereum.findEventDefinition(compiledContract, "MemberAccreditated", EventMemberAccreditated_uint_string_address.class);
		if(!eventDefinition.isPresent())
			throw new IllegalArgumentException("Event 'MemberAccreditated' not found in contract definition."); 
			
		return ethereum.observeEvents(eventDefinition.get(), address);
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
		SolidityContractDetails compiledContract = compiledContractFoundationConference();
		CompletableFuture<EthAddress> address = ethereum.publishContract(compiledContract, sender);
		return address;
	}


	/**
	 * Deploys a 'FoundationConference' on the blockchain and wrapps the contract proxy.
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
		SolidityContractDetails compiledContract = compiledContractFoundationConference();
		FoundationConference foundationconference = ethereum.createContractProxy(compiledContract, address, sender, FoundationConference.class);
		return foundationconference;
	}

	/**
	 * Return the compiled contract for the contract 'FoundationConference', when in source the contract code gets compiled.
	 * @return the compiled contract for 'FoundationConference'.
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public SolidityContractDetails compiledContractFoundationConference() throws InterruptedException, ExecutionException {
		String contractName = "FoundationConference";
		String quallifiedName = "party.sol:FoundationConference";
		return getCompiledContract(contractName, quallifiedName);
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
		SolidityContractDetails compiledContract = compiledContractOrganFunction();
		CompletableFuture<EthAddress> address = ethereum.publishContract(compiledContract, sender, _name, _ch);
		return address;
	}

	/**
	 * Deploys a 'OrganFunction' on the blockchain and wrapps the contract proxy.
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
		SolidityContractDetails compiledContract = compiledContractOrganFunction();
		OrganFunction organfunction = ethereum.createContractProxy(compiledContract, address, sender, OrganFunction.class);
		return organfunction;
	}

	/**
	 * Return the compiled contract for the contract 'OrganFunction', when in source the contract code gets compiled.
	 * @return the compiled contract for 'OrganFunction'.
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public SolidityContractDetails compiledContractOrganFunction() throws InterruptedException, ExecutionException {
		String contractName = "OrganFunction";
		String quallifiedName = "party.sol:OrganFunction";
		return getCompiledContract(contractName, quallifiedName);
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
