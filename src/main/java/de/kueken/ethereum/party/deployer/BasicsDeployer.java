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

import de.kueken.ethereum.party.basics.*;




/**
 * The deployer for the basics package.
 *
 */
public class BasicsDeployer {

	private EthereumFacade ethereum;
	private SoliditySource contractSource;
	private CompilationResult compiledContracts;
	private static String filename = "/main/resources/mix/basics.sol";

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
	 * Deploys a 'Owned' on the blockchain.
	 * 
	 * @param sender
	 *            the sender address
	 * @return the address of the deployed contract
	 */
	public CompletableFuture<EthAddress> deployOwned(EthAccount sender) {
		CompiledContract compiledContract = null;
		if (compiledContracts == null)
			compiledContract = ethereum.compile(contractSource, "Owned");
		else {
			ContractMetadata contractMetadata = compiledContracts.contracts.get("Owned");
			if (contractMetadata == null)
				throw new IllegalArgumentException("Contract code for 'Owned' not found");

			compiledContract = CompiledContract.from(null, "Owned", contractMetadata);
		}
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
		CompiledContract compiledContract = null;
		if (compiledContracts == null)
			compiledContract = ethereum.compile(contractSource, "Owned");
		else {
			ContractMetadata contractMetadata = compiledContracts.contracts.get("Owned");
			if (contractMetadata == null)
				throw new IllegalArgumentException("Contract code for 'Owned' not found");

			compiledContract = CompiledContract.from(null, "Owned", contractMetadata);
		}
		Owned owned = ethereum.createContractProxy(compiledContract, address, sender, Owned.class);
		return owned;
	}

	/**
	 * Deploys a 'Manageable' on the blockchain.
	 * 
	 * @param sender
	 *            the sender address
	 * @return the address of the deployed contract
	 */
	public CompletableFuture<EthAddress> deployManageable(EthAccount sender) {
		CompiledContract compiledContract = null;
		if (compiledContracts == null)
			compiledContract = ethereum.compile(contractSource, "Manageable");
		else {
			ContractMetadata contractMetadata = compiledContracts.contracts.get("Manageable");
			if (contractMetadata == null)
				throw new IllegalArgumentException("Contract code for Organ not found");

			compiledContract = CompiledContract.from(null, "Manageable", contractMetadata);
		}
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
		CompiledContract compiledContract = null;
		if (compiledContracts == null)
			compiledContract = ethereum.compile(contractSource, "Manageable");
		else {
			ContractMetadata contractMetadata = compiledContracts.contracts.get("Manageable");
			if (contractMetadata == null)
				throw new IllegalArgumentException("Contract code for 'Manageable' not found");

			compiledContract = CompiledContract.from(null, "Manageable", contractMetadata);
		}
		Manageable manageable = ethereum.createContractProxy(compiledContract, address, sender, Manageable.class);
		return manageable;
	}

	/**
	 * Deploys a 'Multiowned' on the blockchain.
	 * 
	 * @param sender
	 *            the sender address
	 * @return the address of the deployed contract
	 */
	public CompletableFuture<EthAddress> deployMultiowned(EthAccount sender) {
		CompiledContract compiledContract = null;
		if (compiledContracts == null)
			compiledContract = ethereum.compile(contractSource, "Multiowned");
		else {
			ContractMetadata contractMetadata = compiledContracts.contracts.get("Multiowned");
			if (contractMetadata == null)
				throw new IllegalArgumentException("Contract code for 'Multiowned' not found");

			compiledContract = CompiledContract.from(null, "Multiowned", contractMetadata);
		}
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
		CompiledContract compiledContract = null;
		if (compiledContracts == null)
			compiledContract = ethereum.compile(contractSource, "Multiowned");
		else {
			ContractMetadata contractMetadata = compiledContracts.contracts.get("Multiowned");
			if (contractMetadata == null)
				throw new IllegalArgumentException("Contract code for 'Multiowned' not found");

			compiledContract = CompiledContract.from(null, "Multiowned", contractMetadata);
		}
		Multiowned multiowned = ethereum.createContractProxy(compiledContract, address, sender, Multiowned.class);
		return multiowned;
	}

}
