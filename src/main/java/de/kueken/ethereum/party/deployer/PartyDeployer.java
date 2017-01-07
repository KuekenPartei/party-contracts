package de.kueken.ethereum.party.deployer;

import java.io.File;
import java.io.IOException;
import java.net.URISyntaxException;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

import org.adridadou.ethereum.EthereumFacade;
import org.adridadou.ethereum.values.EthAccount;
import org.adridadou.ethereum.values.EthAddress;
import org.adridadou.ethereum.values.SoliditySource;

import de.kueken.ethereum.party.party.*;




/**
 * The deployer for the party package.
 *
 */
public class PartyDeployer {

	public class DeployDuo<EA,C>{
		public EA contractAddress;
		public C constractInstance;
		
		public DeployDuo(EA contractAddress, C constractInstance) {
			super();
			this.contractAddress = contractAddress;
			this.constractInstance = constractInstance;
		}
	}

	private EthereumFacade ethereum;
	private SoliditySource contractSource;
	private static String filename = "/mix/party.sol";

	public PartyDeployer(EthereumFacade ethereum) {
		this(ethereum,filename, true);
	}

	public PartyDeployer(EthereumFacade ethereum, String contractSourceFile, boolean plain) {
		this.ethereum = ethereum;
		try {
			if(plain)
				contractSource = SoliditySource.from(new File(this.getClass().getResource(contractSourceFile).toURI()));
			else
				contractSource = SoliditySource.fromRawJson(new File(this.getClass().getResource(contractSourceFile).toURI()));
				
		} catch (URISyntaxException e) {
			throw new IllegalArgumentException(e);
		} catch (IOException e) {
			throw new IllegalArgumentException(e);
		}
	}

	public PartyDeployer(EthereumFacade ethereum, File contractSourceFile, boolean plain) {
		this.ethereum = ethereum;
		try {
			if(plain)
				contractSource = SoliditySource.from(contractSourceFile);
			else
				contractSource = SoliditySource.fromRawJson(contractSourceFile);
				
		} catch (IOException e) {
			throw new IllegalArgumentException(e);
		}
	}



	/**
	 * Deploys a 'Organ' on the blockchain.
	 *  
	 * @param sender the sender address
	 * @return the address of the deployed contract
	 */
	public CompletableFuture<EthAddress> deployOrgan(EthAccount sender) {
		CompletableFuture<EthAddress> address = ethereum.publishContract(contractSource, "Organ", sender);
		return address;
	}

	/**
	 * Deploys a 'Organ' on the blockchain and wrapps the contcat proxy.
	 *  
	 * @param sender the sender address
	 * @return the contract interface and the deployed address
	 */
	public DeployDuo<CompletableFuture<EthAddress>, Organ> createOrgan(EthAccount sender) throws IOException, InterruptedException, ExecutionException {
		CompletableFuture<EthAddress> address = deployOrgan(sender);
		return new DeployDuo<CompletableFuture<EthAddress>, Organ>(address, createOrgan(sender, address.get()));
	}

	/**
	 * Create a proxy for a deployed 'Organ' contract.
	 *  
	 * @param sender the sender address
	 * @param address the address of the contract
	 * @return the contract interface
	 */
	public Organ createOrgan(EthAccount sender, EthAddress address) throws IOException, InterruptedException, ExecutionException {
		Organ organ = ethereum
        .createContractProxy(contractSource, "Organ", address, sender, Organ.class);
		return organ;
	}

	/**
	 * Deploys a 'Party' on the blockchain.
	 *  
	 * @param sender the sender address
	 * @param _name The name of the party or division.
	 * @param _memberRegistry 
	 * @param _blogRegistry 
	 * @return the address of the deployed contract
	 */
	public CompletableFuture<EthAddress> deployParty(EthAccount sender, String _name, String _memberRegistry, String _blogRegistry) {
		CompletableFuture<EthAddress> address = ethereum.publishContract(contractSource, "Party", sender, _name, _memberRegistry, _blogRegistry);
		return address;
	}

	/**
	 * Deploys a 'Party' on the blockchain and wrapps the contcat proxy.
	 *  
	 * @param sender the sender address
	 * @param _name The name of the party or division.
	 * @param _memberRegistry 
	 * @param _blogRegistry 
	 * @return the contract interface
	 */
	public DeployDuo<CompletableFuture<EthAddress>, Party> createParty(EthAccount sender, String _name, String _memberRegistry, String _blogRegistry) throws IOException, InterruptedException, ExecutionException {
		CompletableFuture<EthAddress> address = deployParty(sender, _name, _memberRegistry, _blogRegistry);
		return new DeployDuo<CompletableFuture<EthAddress>, Party>(address, createParty(sender, address.get()));
	}

	/**
	 * Create a proxy for a deployed 'Party' contract.
	 *  
	 * @param sender the sender address
	 * @param address the address of the contract
	 * @return the contract interface
	 */
	public Party createParty(EthAccount sender, EthAddress address) throws IOException, InterruptedException, ExecutionException {
		Party party = ethereum
        .createContractProxy(contractSource, "Party", address, sender, Party.class);
		return party;
	}

	/**
	 * Deploys a 'KUEKeNParty' on the blockchain.
	 *  
	 * @param sender the sender address
	 * @param _name The name of the party or division.
	 * @return the address of the deployed contract
	 */
	public CompletableFuture<EthAddress> deployKUEKeNParty(EthAccount sender, String _name) {
		CompletableFuture<EthAddress> address = ethereum.publishContract(contractSource, "KUEKeNParty", sender, _name);
		return address;
	}

	/**
	 * Deploys a 'KUEKeNParty' on the blockchain and wrapps the contcat proxy.
	 *  
	 * @param sender the sender address
	 * @param _name The name of the party or division.
	 * @return the contract interface
	 */
	public DeployDuo<CompletableFuture<EthAddress>, KUEKeNParty> createKUEKeNParty(EthAccount sender, String _name) throws IOException, InterruptedException, ExecutionException {
		CompletableFuture<EthAddress> address = deployKUEKeNParty(sender, _name);
		return new DeployDuo<CompletableFuture<EthAddress>, KUEKeNParty>(address, createKUEKeNParty(sender, address.get()));
	}

	/**
	 * Create a proxy for a deployed 'KUEKeNParty' contract.
	 *  
	 * @param sender the sender address
	 * @param address the address of the contract
	 * @return the contract interface
	 */
	public KUEKeNParty createKUEKeNParty(EthAccount sender, EthAddress address) throws IOException, InterruptedException, ExecutionException {
		KUEKeNParty kuekenparty = ethereum
        .createContractProxy(contractSource, "KUEKeNParty", address, sender, KUEKeNParty.class);
		return kuekenparty;
	}

	/**
	 * Deploys a 'Conference' on the blockchain.
	 *  
	 * @param sender the sender address
	 * @return the address of the deployed contract
	 */
	public CompletableFuture<EthAddress> deployConference(EthAccount sender) {
		CompletableFuture<EthAddress> address = ethereum.publishContract(contractSource, "Conference", sender);
		return address;
	}

	/**
	 * Deploys a 'Conference' on the blockchain and wrapps the contcat proxy.
	 *  
	 * @param sender the sender address
	 * @return the contract interface and the deployed address
	 */
	public DeployDuo<CompletableFuture<EthAddress>, Conference> createConference(EthAccount sender) throws IOException, InterruptedException, ExecutionException {
		CompletableFuture<EthAddress> address = deployConference(sender);
		return new DeployDuo<CompletableFuture<EthAddress>, Conference>(address, createConference(sender, address.get()));
	}

	/**
	 * Create a proxy for a deployed 'Conference' contract.
	 *  
	 * @param sender the sender address
	 * @param address the address of the contract
	 * @return the contract interface
	 */
	public Conference createConference(EthAccount sender, EthAddress address) throws IOException, InterruptedException, ExecutionException {
		Conference conference = ethereum
        .createContractProxy(contractSource, "Conference", address, sender, Conference.class);
		return conference;
	}

	/**
	 * Deploys a 'FoundationConference' on the blockchain.
	 *  
	 * @param sender the sender address
	 * @return the address of the deployed contract
	 */
	public CompletableFuture<EthAddress> deployFoundationConference(EthAccount sender) {
		CompletableFuture<EthAddress> address = ethereum.publishContract(contractSource, "FoundationConference", sender);
		return address;
	}

	/**
	 * Deploys a 'FoundationConference' on the blockchain and wrapps the contcat proxy.
	 *  
	 * @param sender the sender address
	 * @return the contract interface and the deployed address
	 */
	public DeployDuo<CompletableFuture<EthAddress>, FoundationConference> createFoundationConference(EthAccount sender) throws IOException, InterruptedException, ExecutionException {
		CompletableFuture<EthAddress> address = deployFoundationConference(sender);
		return new DeployDuo<CompletableFuture<EthAddress>, FoundationConference>(address, createFoundationConference(sender, address.get()));
	}

	/**
	 * Create a proxy for a deployed 'FoundationConference' contract.
	 *  
	 * @param sender the sender address
	 * @param address the address of the contract
	 * @return the contract interface
	 */
	public FoundationConference createFoundationConference(EthAccount sender, EthAddress address) throws IOException, InterruptedException, ExecutionException {
		FoundationConference foundationconference = ethereum
        .createContractProxy(contractSource, "FoundationConference", address, sender, FoundationConference.class);
		return foundationconference;
	}

	/**
	 * Deploys a 'OrganFunction' on the blockchain.
	 *  
	 * @param sender the sender address
	 * @param _name 
	 * @param _ch 
	 * @return the address of the deployed contract
	 */
	public CompletableFuture<EthAddress> deployOrganFunction(EthAccount sender, String _name, String _ch) {
		CompletableFuture<EthAddress> address = ethereum.publishContract(contractSource, "OrganFunction", sender, _name, _ch);
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
	public DeployDuo<CompletableFuture<EthAddress>, OrganFunction> createOrganFunction(EthAccount sender, String _name, String _ch) throws IOException, InterruptedException, ExecutionException {
		CompletableFuture<EthAddress> address = deployOrganFunction(sender, _name, _ch);
		return new DeployDuo<CompletableFuture<EthAddress>, OrganFunction>(address, createOrganFunction(sender, address.get()));
	}

	/**
	 * Create a proxy for a deployed 'OrganFunction' contract.
	 *  
	 * @param sender the sender address
	 * @param address the address of the contract
	 * @return the contract interface
	 */
	public OrganFunction createOrganFunction(EthAccount sender, EthAddress address) throws IOException, InterruptedException, ExecutionException {
		OrganFunction organfunction = ethereum
        .createContractProxy(contractSource, "OrganFunction", address, sender, OrganFunction.class);
		return organfunction;
	}

}
