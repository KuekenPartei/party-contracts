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

import de.kueken.ethereum.party.voting.*;




/**
 * The deployer for the voting package.
 *
 */
public class VotingDeployer {

	private EthereumFacade ethereum;
	private SoliditySource contractSource;
	private CompilationResult compiledContracts;
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
	 * Deploys a 'Ballot' on the blockchain.
	 * 
	 * @param sender
	 *            the sender address
	 * @return the address of the deployed contract
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public CompletableFuture<EthAddress> deployBallot(EthAccount sender) throws InterruptedException, ExecutionException{
		CompiledContract compiledContract = compiledContractBallot();
		CompletableFuture<EthAddress> address = ethereum.publishContract(compiledContract, sender);
		return address;
	}


	/**
	 * Deploys a 'Ballot' on the blockchain and wrapps the contcat proxy.
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
		CompiledContract compiledContract = compiledContractBallot();
		Ballot ballot = ethereum.createContractProxy(compiledContract, address, sender, Ballot.class);
		return ballot;
	}

	/**
	 * Return the compiled contract for the contract 'Ballot', when in source the contract code is compiled.
	 * @return the compiled contract for 'Ballot'.
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public CompiledContract compiledContractBallot() throws InterruptedException, ExecutionException {
		CompiledContract compiledContract = null;
		if (compiledContracts == null){
			Map<String, CompiledContract> contracts = ethereum.compile(contractSource).get();
			compiledContract = contracts.get("Ballot");
			if (compiledContract == null) {
				Optional<String> optional = contracts.keySet().stream().filter(s -> s.endsWith("voting.sol:Ballot"))
						.findFirst();
				if (optional.isPresent())
					compiledContract = contracts.get(optional.get());
			}
		} else {
			ContractMetadata contractMetadata = compiledContracts.contracts.get("Ballot");
			if (contractMetadata == null) {
				Optional<String> optional = compiledContracts.contracts.keySet().stream()
						.filter(s -> s.endsWith("voting.sol:Ballot")).findFirst();
				if (optional.isPresent())
					contractMetadata = compiledContracts.contracts.get(optional.get());
			}
			compiledContract = CompiledContract.from(null, "Ballot", contractMetadata);
		}
		if(compiledContract == null)
			throw new IllegalArgumentException("Contract code for 'Ballot' not found");

		return compiledContract;
	}


	/**
	 * Deploys a 'BasicBallot' on the blockchain.
	 * 
	 * @param sender
	 *            the sender address
	 * @param _registry 
	 * @param _name 
	 * @param _hash 
	 * @return the address of the deployed contract
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public CompletableFuture<EthAddress> deployBasicBallot(EthAccount sender, org.adridadou.ethereum.values.EthAddress _registry, String _name, String _hash) throws InterruptedException, ExecutionException {
		CompiledContract compiledContract = compiledContractBasicBallot();
		CompletableFuture<EthAddress> address = ethereum.publishContract(compiledContract, sender, _registry, _name, _hash);
		return address;
	}

	/**
	 * Deploys a 'BasicBallot' on the blockchain and wrapps the contcat proxy.
	 *  
	 * @param sender the sender address
	 * @param _registry 
	 * @param _name 
	 * @param _hash 
	 * @return the contract interface
	 */
	public DeployDuo<BasicBallot> createBasicBallot(EthAccount sender, org.adridadou.ethereum.values.EthAddress _registry, String _name, String _hash) throws IOException, InterruptedException, ExecutionException {
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
		CompiledContract compiledContract = compiledContractBasicBallot();
		BasicBallot basicballot = ethereum.createContractProxy(compiledContract, address, sender, BasicBallot.class);
		return basicballot;
	}

	/**
	 * Return the compiled contract for the contract 'BasicBallot', when in source the contract code is compiled.
	 * @return the compiled contract for 'BasicBallot'.
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public CompiledContract compiledContractBasicBallot() throws InterruptedException, ExecutionException {
		CompiledContract compiledContract = null;
		if (compiledContracts == null){
			Map<String, CompiledContract> contracts = ethereum.compile(contractSource).get();
			compiledContract = contracts.get("BasicBallot");
			if (compiledContract == null) {
				Optional<String> optional = contracts.keySet().stream().filter(s -> s.endsWith("voting.sol:BasicBallot"))
						.findFirst();
				if (optional.isPresent())
					compiledContract = contracts.get(optional.get());
			}
		} else {
			ContractMetadata contractMetadata = compiledContracts.contracts.get("BasicBallot");
			if (contractMetadata == null) {
				Optional<String> optional = compiledContracts.contracts.keySet().stream()
						.filter(s -> s.endsWith("voting.sol:BasicBallot")).findFirst();
				if (optional.isPresent())
					contractMetadata = compiledContracts.contracts.get(optional.get());
			}
			compiledContract = CompiledContract.from(null, "BasicBallot", contractMetadata);
		}
		if(compiledContract == null)
			throw new IllegalArgumentException("Contract code for 'BasicBallot' not found");

		return compiledContract;
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
		CompiledContract compiledContract = compiledContractPublicBallot();
		CompletableFuture<EthAddress> address = ethereum.publishContract(compiledContract, sender);
		return address;
	}


	/**
	 * Deploys a 'PublicBallot' on the blockchain and wrapps the contcat proxy.
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
		CompiledContract compiledContract = compiledContractPublicBallot();
		PublicBallot publicballot = ethereum.createContractProxy(compiledContract, address, sender, PublicBallot.class);
		return publicballot;
	}

	/**
	 * Return the compiled contract for the contract 'PublicBallot', when in source the contract code is compiled.
	 * @return the compiled contract for 'PublicBallot'.
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public CompiledContract compiledContractPublicBallot() throws InterruptedException, ExecutionException {
		CompiledContract compiledContract = null;
		if (compiledContracts == null){
			Map<String, CompiledContract> contracts = ethereum.compile(contractSource).get();
			compiledContract = contracts.get("PublicBallot");
			if (compiledContract == null) {
				Optional<String> optional = contracts.keySet().stream().filter(s -> s.endsWith("voting.sol:PublicBallot"))
						.findFirst();
				if (optional.isPresent())
					compiledContract = contracts.get(optional.get());
			}
		} else {
			ContractMetadata contractMetadata = compiledContracts.contracts.get("PublicBallot");
			if (contractMetadata == null) {
				Optional<String> optional = compiledContracts.contracts.keySet().stream()
						.filter(s -> s.endsWith("voting.sol:PublicBallot")).findFirst();
				if (optional.isPresent())
					contractMetadata = compiledContracts.contracts.get(optional.get());
			}
			compiledContract = CompiledContract.from(null, "PublicBallot", contractMetadata);
		}
		if(compiledContract == null)
			throw new IllegalArgumentException("Contract code for 'PublicBallot' not found");

		return compiledContract;
	}
	/**
	 * 
	 * @param address
	 * @return
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public Observable<EventVotedCasted_uint_address> observeEventVotedCasted_uint_address(EthAddress address) throws InterruptedException, ExecutionException {
		CompiledContract compiledContract = compiledContractPublicBallot();
		Observable<EventVotedCasted_uint_address> observeEvents = ethereum.observeEvents(compiledContract.getAbi(), address, "VotedCasted", EventVotedCasted_uint_address.class);
		return observeEvents;
	}


}
