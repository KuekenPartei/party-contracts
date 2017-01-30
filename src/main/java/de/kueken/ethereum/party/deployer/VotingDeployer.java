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

import de.kueken.ethereum.party.voting.*;




/**
 * The deployer for the voting package.
 *
 */
public class VotingDeployer {

	private EthereumFacade ethereum;
	private SoliditySource contractSource;
	private CompilationResult compiledContracts;
	private static String filename = "/main/resources/mix/voting.sol";

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
	 * Deploys a 'Ballot' on the blockchain.
	 * 
	 * @param sender
	 *            the sender address
	 * @return the address of the deployed contract
	 */
	public CompletableFuture<EthAddress> deployBallot(EthAccount sender) {
		CompiledContract compiledContract = null;
		if (compiledContracts == null)
			compiledContract = ethereum.compile(contractSource, "Ballot");
		else {
			ContractMetadata contractMetadata = compiledContracts.contracts.get("Ballot");
			if (contractMetadata == null)
				throw new IllegalArgumentException("Contract code for 'Ballot' not found");

			compiledContract = CompiledContract.from(null, "Ballot", contractMetadata);
		}
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
		CompiledContract compiledContract = null;
		if (compiledContracts == null)
			compiledContract = ethereum.compile(contractSource, "Ballot");
		else {
			ContractMetadata contractMetadata = compiledContracts.contracts.get("Ballot");
			if (contractMetadata == null)
				throw new IllegalArgumentException("Contract code for 'Ballot' not found");

			compiledContract = CompiledContract.from(null, "Ballot", contractMetadata);
		}
		Ballot ballot = ethereum.createContractProxy(compiledContract, address, sender, Ballot.class);
		return ballot;
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
	 */
	public CompletableFuture<EthAddress> deployBasicBallot(EthAccount sender, String _registry, String _name, String _hash) {
		CompiledContract compiledContract = null;
		if (compiledContracts == null)
			compiledContract = ethereum.compile(contractSource, "BasicBallot");
		else {
			ContractMetadata contractMetadata = compiledContracts.contracts.get("BasicBallot");
			if (contractMetadata == null)
				throw new IllegalArgumentException("Contract code for Organ not found");

			compiledContract = CompiledContract.from(null, "BasicBallot", contractMetadata);
		}
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
	public DeployDuo<BasicBallot> createBasicBallot(EthAccount sender, String _registry, String _name, String _hash) throws IOException, InterruptedException, ExecutionException {
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
		CompiledContract compiledContract = null;
		if (compiledContracts == null)
			compiledContract = ethereum.compile(contractSource, "BasicBallot");
		else {
			ContractMetadata contractMetadata = compiledContracts.contracts.get("BasicBallot");
			if (contractMetadata == null)
				throw new IllegalArgumentException("Contract code for 'BasicBallot' not found");

			compiledContract = CompiledContract.from(null, "BasicBallot", contractMetadata);
		}
		BasicBallot basicballot = ethereum.createContractProxy(compiledContract, address, sender, BasicBallot.class);
		return basicballot;
	}

	/**
	 * Deploys a 'PublicBallot' on the blockchain.
	 * 
	 * @param sender
	 *            the sender address
	 * @return the address of the deployed contract
	 */
	public CompletableFuture<EthAddress> deployPublicBallot(EthAccount sender) {
		CompiledContract compiledContract = null;
		if (compiledContracts == null)
			compiledContract = ethereum.compile(contractSource, "PublicBallot");
		else {
			ContractMetadata contractMetadata = compiledContracts.contracts.get("PublicBallot");
			if (contractMetadata == null)
				throw new IllegalArgumentException("Contract code for 'PublicBallot' not found");

			compiledContract = CompiledContract.from(null, "PublicBallot", contractMetadata);
		}
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
		CompiledContract compiledContract = null;
		if (compiledContracts == null)
			compiledContract = ethereum.compile(contractSource, "PublicBallot");
		else {
			ContractMetadata contractMetadata = compiledContracts.contracts.get("PublicBallot");
			if (contractMetadata == null)
				throw new IllegalArgumentException("Contract code for 'PublicBallot' not found");

			compiledContract = CompiledContract.from(null, "PublicBallot", contractMetadata);
		}
		PublicBallot publicballot = ethereum.createContractProxy(compiledContract, address, sender, PublicBallot.class);
		return publicballot;
	}

}
