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

import de.kueken.ethereum.party.party.*;




/**
 * The deployer for the party package.
 *
 */
public class PartyDeployer {

	private EthereumFacade ethereum;
	private SoliditySource contractSource;
	private CompilationResult compiledContracts;
	private static String filename = "/main/resources/mix/party.sol";

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
	 * Deploys a 'Organ' on the blockchain.
	 * 
	 * @param sender
	 *            the sender address
	 * @return the address of the deployed contract
	 */
	public CompletableFuture<EthAddress> deployOrgan(EthAccount sender) {
		CompiledContract compiledContract = null;
		if (compiledContracts == null)
			compiledContract = ethereum.compile(contractSource, "Organ");
		else {
			ContractMetadata contractMetadata = compiledContracts.contracts.get("Organ");
			if (contractMetadata == null)
				throw new IllegalArgumentException("Contract code for 'Organ' not found");

			compiledContract = CompiledContract.from(null, "Organ", contractMetadata);
		}
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
		CompiledContract compiledContract = null;
		if (compiledContracts == null)
			compiledContract = ethereum.compile(contractSource, "Organ");
		else {
			ContractMetadata contractMetadata = compiledContracts.contracts.get("Organ");
			if (contractMetadata == null)
				throw new IllegalArgumentException("Contract code for 'Organ' not found");

			compiledContract = CompiledContract.from(null, "Organ", contractMetadata);
		}
		Organ organ = ethereum.createContractProxy(compiledContract, address, sender, Organ.class);
		return organ;
	}

	/**
	 * Deploys a 'Party' on the blockchain.
	 * 
	 * @param sender
	 *            the sender address
	 * @return the address of the deployed contract
	 */
	public CompletableFuture<EthAddress> deployParty(EthAccount sender) {
		CompiledContract compiledContract = null;
		if (compiledContracts == null)
			compiledContract = ethereum.compile(contractSource, "Party");
		else {
			ContractMetadata contractMetadata = compiledContracts.contracts.get("Party");
			if (contractMetadata == null)
				throw new IllegalArgumentException("Contract code for 'Party' not found");

			compiledContract = CompiledContract.from(null, "Party", contractMetadata);
		}
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
		CompiledContract compiledContract = null;
		if (compiledContracts == null)
			compiledContract = ethereum.compile(contractSource, "Party");
		else {
			ContractMetadata contractMetadata = compiledContracts.contracts.get("Party");
			if (contractMetadata == null)
				throw new IllegalArgumentException("Contract code for 'Party' not found");

			compiledContract = CompiledContract.from(null, "Party", contractMetadata);
		}
		Party party = ethereum.createContractProxy(compiledContract, address, sender, Party.class);
		return party;
	}

	/**
	 * Deploys a 'KUEKeNParty' on the blockchain.
	 * 
	 * @param sender
	 *            the sender address
	 * @param _name The name of the party or division.
	 * @return the address of the deployed contract
	 */
	public CompletableFuture<EthAddress> deployKUEKeNParty(EthAccount sender, String _name) {
		CompiledContract compiledContract = null;
		if (compiledContracts == null)
			compiledContract = ethereum.compile(contractSource, "KUEKeNParty");
		else {
			ContractMetadata contractMetadata = compiledContracts.contracts.get("KUEKeNParty");
			if (contractMetadata == null)
				throw new IllegalArgumentException("Contract code for Organ not found");

			compiledContract = CompiledContract.from(null, "KUEKeNParty", contractMetadata);
		}
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
		CompiledContract compiledContract = null;
		if (compiledContracts == null)
			compiledContract = ethereum.compile(contractSource, "KUEKeNParty");
		else {
			ContractMetadata contractMetadata = compiledContracts.contracts.get("KUEKeNParty");
			if (contractMetadata == null)
				throw new IllegalArgumentException("Contract code for 'KUEKeNParty' not found");

			compiledContract = CompiledContract.from(null, "KUEKeNParty", contractMetadata);
		}
		KUEKeNParty kuekenparty = ethereum.createContractProxy(compiledContract, address, sender, KUEKeNParty.class);
		return kuekenparty;
	}

	/**
	 * Deploys a 'Conference' on the blockchain.
	 * 
	 * @param sender
	 *            the sender address
	 * @return the address of the deployed contract
	 */
	public CompletableFuture<EthAddress> deployConference(EthAccount sender) {
		CompiledContract compiledContract = null;
		if (compiledContracts == null)
			compiledContract = ethereum.compile(contractSource, "Conference");
		else {
			ContractMetadata contractMetadata = compiledContracts.contracts.get("Conference");
			if (contractMetadata == null)
				throw new IllegalArgumentException("Contract code for 'Conference' not found");

			compiledContract = CompiledContract.from(null, "Conference", contractMetadata);
		}
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
		CompiledContract compiledContract = null;
		if (compiledContracts == null)
			compiledContract = ethereum.compile(contractSource, "Conference");
		else {
			ContractMetadata contractMetadata = compiledContracts.contracts.get("Conference");
			if (contractMetadata == null)
				throw new IllegalArgumentException("Contract code for 'Conference' not found");

			compiledContract = CompiledContract.from(null, "Conference", contractMetadata);
		}
		Conference conference = ethereum.createContractProxy(compiledContract, address, sender, Conference.class);
		return conference;
	}

	/**
	 * Deploys a 'FoundationConference' on the blockchain.
	 * 
	 * @param sender
	 *            the sender address
	 * @return the address of the deployed contract
	 */
	public CompletableFuture<EthAddress> deployFoundationConference(EthAccount sender) {
		CompiledContract compiledContract = null;
		if (compiledContracts == null)
			compiledContract = ethereum.compile(contractSource, "FoundationConference");
		else {
			ContractMetadata contractMetadata = compiledContracts.contracts.get("FoundationConference");
			if (contractMetadata == null)
				throw new IllegalArgumentException("Contract code for 'FoundationConference' not found");

			compiledContract = CompiledContract.from(null, "FoundationConference", contractMetadata);
		}
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
		CompiledContract compiledContract = null;
		if (compiledContracts == null)
			compiledContract = ethereum.compile(contractSource, "FoundationConference");
		else {
			ContractMetadata contractMetadata = compiledContracts.contracts.get("FoundationConference");
			if (contractMetadata == null)
				throw new IllegalArgumentException("Contract code for 'FoundationConference' not found");

			compiledContract = CompiledContract.from(null, "FoundationConference", contractMetadata);
		}
		FoundationConference foundationconference = ethereum.createContractProxy(compiledContract, address, sender, FoundationConference.class);
		return foundationconference;
	}

	/**
	 * Deploys a 'OrganFunction' on the blockchain.
	 * 
	 * @param sender
	 *            the sender address
	 * @param _name 
	 * @param _ch 
	 * @return the address of the deployed contract
	 */
	public CompletableFuture<EthAddress> deployOrganFunction(EthAccount sender, String _name, String _ch) {
		CompiledContract compiledContract = null;
		if (compiledContracts == null)
			compiledContract = ethereum.compile(contractSource, "OrganFunction");
		else {
			ContractMetadata contractMetadata = compiledContracts.contracts.get("OrganFunction");
			if (contractMetadata == null)
				throw new IllegalArgumentException("Contract code for Organ not found");

			compiledContract = CompiledContract.from(null, "OrganFunction", contractMetadata);
		}
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
		CompiledContract compiledContract = null;
		if (compiledContracts == null)
			compiledContract = ethereum.compile(contractSource, "OrganFunction");
		else {
			ContractMetadata contractMetadata = compiledContracts.contracts.get("OrganFunction");
			if (contractMetadata == null)
				throw new IllegalArgumentException("Contract code for 'OrganFunction' not found");

			compiledContract = CompiledContract.from(null, "OrganFunction", contractMetadata);
		}
		OrganFunction organfunction = ethereum.createContractProxy(compiledContract, address, sender, OrganFunction.class);
		return organfunction;
	}

}
