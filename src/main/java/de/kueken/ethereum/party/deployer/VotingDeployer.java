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
import de.kueken.ethereum.party.voting.Ballot;
import de.kueken.ethereum.party.voting.BallotFactory;
import de.kueken.ethereum.party.voting.BasicBallot;
import de.kueken.ethereum.party.voting.EventVotedCasted_uint_address;
import de.kueken.ethereum.party.voting.PublicBallot;
import rx.Observable;


/**
 * The deployer for the voting package.
 *
 */
public class VotingDeployer {

	private EthereumFacade ethereum;
	private SoliditySourceFile contractSource;
	private CompilationResult compiledContracts;
	private Map<String, SolidityContractDetails> contracts = new HashMap<>();
	private static String filename = "/mix/voting.sol";

	/**
	 * Create an instance of the deployer with the default contract code file.
	 * 
	 * @param ethereum
	 */
	public VotingDeployer(EthereumFacade ethereum) {
		this(ethereum,filename,false);
	}

	/**
	 * Create an instance of the deployer.
	 * 
	 * @param ethereum
	 * @param contractSourceFile
	 * @param compiled is the source code already compiled
	 */
	public VotingDeployer(EthereumFacade ethereum, String contractSourceFile, boolean compiled) {
		this.ethereum = ethereum;
		setContractSource(contractSourceFile, compiled);
	}

	/**
	 * Create an instance of the deployer.
	 * 
	 * @param ethereum
	 * @param contractSourceFile
	 */
	public VotingDeployer(EthereumFacade ethereum, File contractSourceFile, boolean compiled) {
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
	 * Deploys a 'Ballot' on the blockchain.
	 * 
	 * @param sender
	 *            the sender address
	 * @return the address of the deployed contract
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public CompletableFuture<EthAddress> deployBallot(EthAccount sender) throws InterruptedException, ExecutionException{
		SolidityContractDetails compiledContract = compiledContractBallot();
		CompletableFuture<EthAddress> address = ethereum.publishContract(compiledContract, sender);
		return address;
	}


	/**
	 * Deploys a 'Ballot' on the blockchain and wrapps the contract proxy.
	 *  
	 * @param sender the sender address
	 * @return the contract interface and the deployed address
	 */
	public DeployDuo<Ballot> createBallot(EthAccount sender) throws IOException, InterruptedException, ExecutionException {
		CompletableFuture<EthAddress> address = deployBallot(sender);
		return new EthereumInstance.DeployDuo<Ballot>(address.get(), createBallotProxy(sender, address.get()));
	}

	/**
	 * Create a proxy for a deployed 'Ballot' contract.
	 *  
	 * @param sender the sender address
	 * @param address the address of the contract
	 * @return the contract interface
	 */
	public Ballot createBallotProxy(EthAccount sender, EthAddress address) throws IOException, InterruptedException, ExecutionException {
		SolidityContractDetails compiledContract = compiledContractBallot();
		Ballot ballot = ethereum.createContractProxy(compiledContract, address, sender, Ballot.class);
		return ballot;
	}

	/**
	 * Return the compiled contract for the contract 'Ballot', when in source the contract code gets compiled.
	 * @return the compiled contract for 'Ballot'.
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public SolidityContractDetails compiledContractBallot() throws InterruptedException, ExecutionException {
		String contractName = "Ballot";
		String quallifiedName = "voting.sol:Ballot";
		return getCompiledContract(contractName, quallifiedName);
	}

	/**
	 * Deploys a 'BasicBallot' on the blockchain.
	 * 
	 * @param sender
	 *            the sender address
	 * @param _registry The member registry for the voting.
	 * @param _name The name of the ballot.
	 * @param _hash The hash of the actual text.
	 * @return the address of the deployed contract
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public CompletableFuture<EthAddress> deployBasicBallot(EthAccount sender, org.adridadou.ethereum.propeller.values.EthAddress _registry, String _name, String _hash) throws InterruptedException, ExecutionException {
		SolidityContractDetails compiledContract = compiledContractBasicBallot();
		CompletableFuture<EthAddress> address = ethereum.publishContract(compiledContract, sender, _registry, _name, _hash);
		return address;
	}

	/**
	 * Deploys a 'BasicBallot' on the blockchain and wrapps the contract proxy.
	 *  
	 * @param sender the sender address
	 * @param _registry The member registry for the voting.
	 * @param _name The name of the ballot.
	 * @param _hash The hash of the actual text.
	 * @return the contract interface
	 */
	public DeployDuo<BasicBallot> createBasicBallot(EthAccount sender, org.adridadou.ethereum.propeller.values.EthAddress _registry, String _name, String _hash) throws IOException, InterruptedException, ExecutionException {
		CompletableFuture<EthAddress> address = deployBasicBallot(sender, _registry, _name, _hash);
		return new EthereumInstance.DeployDuo<BasicBallot>(address.get(), createBasicBallotProxy(sender, address.get()));
	}

	/**
	 * Create a proxy for a deployed 'BasicBallot' contract.
	 *  
	 * @param sender the sender address
	 * @param address the address of the contract
	 * @return the contract interface
	 */
	public BasicBallot createBasicBallotProxy(EthAccount sender, EthAddress address) throws IOException, InterruptedException, ExecutionException {
		SolidityContractDetails compiledContract = compiledContractBasicBallot();
		BasicBallot basicballot = ethereum.createContractProxy(compiledContract, address, sender, BasicBallot.class);
		return basicballot;
	}

	/**
	 * Return the compiled contract for the contract 'BasicBallot', when in source the contract code gets compiled.
	 * @return the compiled contract for 'BasicBallot'.
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public SolidityContractDetails compiledContractBasicBallot() throws InterruptedException, ExecutionException {
		String contractName = "BasicBallot";
		String quallifiedName = "voting.sol:BasicBallot";
		return getCompiledContract(contractName, quallifiedName);
	}

	/**
	 * Deploys a 'PublicBallot' on the blockchain.
	 * 
	 * @param sender
	 *            the sender address
	 * @return the address of the deployed contract
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public CompletableFuture<EthAddress> deployPublicBallot(EthAccount sender) throws InterruptedException, ExecutionException{
		SolidityContractDetails compiledContract = compiledContractPublicBallot();
		CompletableFuture<EthAddress> address = ethereum.publishContract(compiledContract, sender);
		return address;
	}


	/**
	 * Deploys a 'PublicBallot' on the blockchain and wrapps the contract proxy.
	 *  
	 * @param sender the sender address
	 * @return the contract interface and the deployed address
	 */
	public DeployDuo<PublicBallot> createPublicBallot(EthAccount sender) throws IOException, InterruptedException, ExecutionException {
		CompletableFuture<EthAddress> address = deployPublicBallot(sender);
		return new EthereumInstance.DeployDuo<PublicBallot>(address.get(), createPublicBallotProxy(sender, address.get()));
	}

	/**
	 * Create a proxy for a deployed 'PublicBallot' contract.
	 *  
	 * @param sender the sender address
	 * @param address the address of the contract
	 * @return the contract interface
	 */
	public PublicBallot createPublicBallotProxy(EthAccount sender, EthAddress address) throws IOException, InterruptedException, ExecutionException {
		SolidityContractDetails compiledContract = compiledContractPublicBallot();
		PublicBallot publicballot = ethereum.createContractProxy(compiledContract, address, sender, PublicBallot.class);
		return publicballot;
	}

	/**
	 * Return the compiled contract for the contract 'PublicBallot', when in source the contract code gets compiled.
	 * @return the compiled contract for 'PublicBallot'.
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public SolidityContractDetails compiledContractPublicBallot() throws InterruptedException, ExecutionException {
		String contractName = "PublicBallot";
		String quallifiedName = "voting.sol:PublicBallot";
		return getCompiledContract(contractName, quallifiedName);
	}

	/**
	 *  Create an observable for the event VotedCasted of the contract PublicBallot
	 *  deployed at the given address.
	 *
	 * @param address
	 * @return
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public Observable<EventVotedCasted_uint_address> observeEventVotedCasted_uint_address(EthAddress address) throws InterruptedException, ExecutionException {
		SolidityContractDetails compiledContract = compiledContractPublicBallot();
		Optional<SolidityEvent<EventVotedCasted_uint_address>> eventDefinition = ethereum.findEventDefinition(compiledContract, "VotedCasted", EventVotedCasted_uint_address.class);
		if(!eventDefinition.isPresent())
			throw new IllegalArgumentException("Event 'VotedCasted' not found in contract definition."); 
			
		return ethereum.observeEvents(eventDefinition.get(), address);
	}

	/**
	 * Deploys a 'BallotFactory' on the blockchain.
	 * 
	 * @param sender
	 *            the sender address
	 * @return the address of the deployed contract
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public CompletableFuture<EthAddress> deployBallotFactory(EthAccount sender) throws InterruptedException, ExecutionException{
		SolidityContractDetails compiledContract = compiledContractBallotFactory();
		CompletableFuture<EthAddress> address = ethereum.publishContract(compiledContract, sender);
		return address;
	}


	/**
	 * Deploys a 'BallotFactory' on the blockchain and wrapps the contract proxy.
	 *  
	 * @param sender the sender address
	 * @return the contract interface and the deployed address
	 */
	public DeployDuo<BallotFactory> createBallotFactory(EthAccount sender) throws IOException, InterruptedException, ExecutionException {
		CompletableFuture<EthAddress> address = deployBallotFactory(sender);
		return new EthereumInstance.DeployDuo<BallotFactory>(address.get(), createBallotFactoryProxy(sender, address.get()));
	}

	/**
	 * Create a proxy for a deployed 'BallotFactory' contract.
	 *  
	 * @param sender the sender address
	 * @param address the address of the contract
	 * @return the contract interface
	 */
	public BallotFactory createBallotFactoryProxy(EthAccount sender, EthAddress address) throws IOException, InterruptedException, ExecutionException {
		SolidityContractDetails compiledContract = compiledContractBallotFactory();
		BallotFactory ballotfactory = ethereum.createContractProxy(compiledContract, address, sender, BallotFactory.class);
		return ballotfactory;
	}

	/**
	 * Return the compiled contract for the contract 'BallotFactory', when in source the contract code gets compiled.
	 * @return the compiled contract for 'BallotFactory'.
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public SolidityContractDetails compiledContractBallotFactory() throws InterruptedException, ExecutionException {
		String contractName = "BallotFactory";
		String quallifiedName = "voting.sol:BallotFactory";
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
