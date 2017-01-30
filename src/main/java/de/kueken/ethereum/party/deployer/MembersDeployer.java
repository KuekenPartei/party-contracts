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

import de.kueken.ethereum.party.members.*;




/**
 * The deployer for the members package.
 *
 */
public class MembersDeployer {

	private EthereumFacade ethereum;
	private SoliditySource contractSource;
	private CompilationResult compiledContracts;
	private static String filename = "/main/resources/mix/members.sol";

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
	 * Deploys a 'MemberRegistry' on the blockchain.
	 * 
	 * @param sender
	 *            the sender address
	 * @return the address of the deployed contract
	 */
	public CompletableFuture<EthAddress> deployMemberRegistry(EthAccount sender) {
		CompiledContract compiledContract = null;
		if (compiledContracts == null)
			compiledContract = ethereum.compile(contractSource, "MemberRegistry");
		else {
			ContractMetadata contractMetadata = compiledContracts.contracts.get("MemberRegistry");
			if (contractMetadata == null)
				throw new IllegalArgumentException("Contract code for 'MemberRegistry' not found");

			compiledContract = CompiledContract.from(null, "MemberRegistry", contractMetadata);
		}
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
		CompiledContract compiledContract = null;
		if (compiledContracts == null)
			compiledContract = ethereum.compile(contractSource, "MemberRegistry");
		else {
			ContractMetadata contractMetadata = compiledContracts.contracts.get("MemberRegistry");
			if (contractMetadata == null)
				throw new IllegalArgumentException("Contract code for 'MemberRegistry' not found");

			compiledContract = CompiledContract.from(null, "MemberRegistry", contractMetadata);
		}
		MemberRegistry memberregistry = ethereum.createContractProxy(compiledContract, address, sender, MemberRegistry.class);
		return memberregistry;
	}

	/**
	 * Deploys a 'MemberAware' on the blockchain.
	 * 
	 * @param sender
	 *            the sender address
	 * @return the address of the deployed contract
	 */
	public CompletableFuture<EthAddress> deployMemberAware(EthAccount sender) {
		CompiledContract compiledContract = null;
		if (compiledContracts == null)
			compiledContract = ethereum.compile(contractSource, "MemberAware");
		else {
			ContractMetadata contractMetadata = compiledContracts.contracts.get("MemberAware");
			if (contractMetadata == null)
				throw new IllegalArgumentException("Contract code for 'MemberAware' not found");

			compiledContract = CompiledContract.from(null, "MemberAware", contractMetadata);
		}
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
		CompiledContract compiledContract = null;
		if (compiledContracts == null)
			compiledContract = ethereum.compile(contractSource, "MemberAware");
		else {
			ContractMetadata contractMetadata = compiledContracts.contracts.get("MemberAware");
			if (contractMetadata == null)
				throw new IllegalArgumentException("Contract code for 'MemberAware' not found");

			compiledContract = CompiledContract.from(null, "MemberAware", contractMetadata);
		}
		MemberAware memberaware = ethereum.createContractProxy(compiledContract, address, sender, MemberAware.class);
		return memberaware;
	}

}
