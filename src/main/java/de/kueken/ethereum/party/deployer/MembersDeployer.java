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

import de.kueken.ethereum.party.members.*;




/**
 * The deployer for the members package.
 *
 */
public class MembersDeployer {

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
	private static String filename = "/mix/members.sol";

	public MembersDeployer(EthereumFacade ethereum) {
		this(ethereum,filename, true);
	}

	public MembersDeployer(EthereumFacade ethereum, String contractSourceFile, boolean plain) {
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

	public MembersDeployer(EthereumFacade ethereum, File contractSourceFile, boolean plain) {
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
	 * Deploys a 'MemberRegistry' on the blockchain.
	 *  
	 * @param sender the sender address
	 * @return the address of the deployed contract
	 */
	public CompletableFuture<EthAddress> deployMemberRegistry(EthAccount sender) {
		CompletableFuture<EthAddress> address = ethereum.publishContract(contractSource, "MemberRegistry", sender);
		return address;
	}

	/**
	 * Deploys a 'MemberRegistry' on the blockchain and wrapps the contcat proxy.
	 *  
	 * @param sender the sender address
	 * @return the contract interface and the deployed address
	 */
	public DeployDuo<CompletableFuture<EthAddress>, MemberRegistry> createMemberRegistry(EthAccount sender) throws IOException, InterruptedException, ExecutionException {
		CompletableFuture<EthAddress> address = deployMemberRegistry(sender);
		return new DeployDuo<CompletableFuture<EthAddress>, MemberRegistry>(address, createMemberRegistry(sender, address.get()));
	}

	/**
	 * Create a proxy for a deployed 'MemberRegistry' contract.
	 *  
	 * @param sender the sender address
	 * @param address the address of the contract
	 * @return the contract interface
	 */
	public MemberRegistry createMemberRegistry(EthAccount sender, EthAddress address) throws IOException, InterruptedException, ExecutionException {
		MemberRegistry memberregistry = ethereum
        .createContractProxy(contractSource, "MemberRegistry", address, sender, MemberRegistry.class);
		return memberregistry;
	}

	/**
	 * Deploys a 'MemberAware' on the blockchain.
	 *  
	 * @param sender the sender address
	 * @return the address of the deployed contract
	 */
	public CompletableFuture<EthAddress> deployMemberAware(EthAccount sender) {
		CompletableFuture<EthAddress> address = ethereum.publishContract(contractSource, "MemberAware", sender);
		return address;
	}

	/**
	 * Deploys a 'MemberAware' on the blockchain and wrapps the contcat proxy.
	 *  
	 * @param sender the sender address
	 * @return the contract interface and the deployed address
	 */
	public DeployDuo<CompletableFuture<EthAddress>, MemberAware> createMemberAware(EthAccount sender) throws IOException, InterruptedException, ExecutionException {
		CompletableFuture<EthAddress> address = deployMemberAware(sender);
		return new DeployDuo<CompletableFuture<EthAddress>, MemberAware>(address, createMemberAware(sender, address.get()));
	}

	/**
	 * Create a proxy for a deployed 'MemberAware' contract.
	 *  
	 * @param sender the sender address
	 * @param address the address of the contract
	 * @return the contract interface
	 */
	public MemberAware createMemberAware(EthAccount sender, EthAddress address) throws IOException, InterruptedException, ExecutionException {
		MemberAware memberaware = ethereum
        .createContractProxy(contractSource, "MemberAware", address, sender, MemberAware.class);
		return memberaware;
	}

}
