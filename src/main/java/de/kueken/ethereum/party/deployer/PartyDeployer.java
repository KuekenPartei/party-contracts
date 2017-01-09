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
		Organ organ = ethereum
        .createContractProxy(contractSource, "Organ", address, sender, Organ.class);
		return organ;
	}

	/**
	 * Deploys a 'Party' on the blockchain.
	 *  
	 * @param sender the sender address
	 * @return the address of the deployed contract
	 */
	public CompletableFuture<EthAddress> deployParty(EthAccount sender) {
		CompletableFuture<EthAddress> address = ethereum.publishContract(contractSource, "Party", sender);
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
		OrganFunction organfunction = ethereum
        .createContractProxy(contractSource, "OrganFunction", address, sender, OrganFunction.class);
		return organfunction;
	}

}
