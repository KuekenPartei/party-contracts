package de.kueken.ethereum.party;

import static org.adridadou.ethereum.provider.PrivateNetworkConfig.config;


import java.math.BigInteger;

//Start of user code customizedImports

import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

import org.adridadou.ethereum.EthereumFacade;
import org.adridadou.ethereum.blockchain.BlockchainConfig;
import org.adridadou.ethereum.blockchain.BlockchainConfig.Builder;
import org.adridadou.ethereum.converters.output.OutputTypeHandler;
import org.adridadou.ethereum.provider.EthereumFacadeProvider;
import org.adridadou.ethereum.provider.EthereumFacadeRpcProvider;
import org.adridadou.ethereum.provider.EthereumJConfigs;
import org.adridadou.ethereum.provider.InfuraMainEthereumFacadeProvider;
import org.adridadou.ethereum.provider.InfuraRopstenEthereumFacadeProvider;
import org.adridadou.ethereum.provider.PrivateEthereumFacadeProvider;
import org.adridadou.ethereum.provider.PrivateNetworkConfig;
import org.adridadou.ethereum.provider.StandaloneEthereumFacadeProvider;
import org.adridadou.ethereum.values.EthAccount;
import org.adridadou.ethereum.values.EthAddress;
import org.adridadou.ethereum.values.EthValue;
import org.adridadou.ethereum.values.config.ChainId;
import org.adridadou.ethereum.values.config.InfuraKey;
import org.ethereum.crypto.ECKey;

import com.google.common.collect.Lists;


//End of user code


/**
 * A simple singleton to control the access for the ethereum instance.<br/>
 * The created instance is controllable by system a system property 'EthereumFacadeProvider'.
 */
public class EthereumInstance{

	private static EthereumInstance instance;
	private static Lock instanceLock = new ReentrantLock();
	
	private EthereumFacade ethereum;

	public static class DeployDuo<C>{
		public EthAddress contractAddress;
		public C contractInstance;
		
		public DeployDuo(EthAddress contractAddress, C contractInstance) {
			super();
			this.contractAddress = contractAddress;
			this.contractInstance = contractInstance;
		}
	}

	private EthereumInstance() {
		try {
			setup();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	/**
	 * Get the ethereum instance, will wait until the instance is available.
	 * @return the instance
	 */
	public static EthereumInstance getInstance() {
		instanceLock.lock();
		try {
			if (instance == null) {
				instance = new EthereumInstance();
//				instance.getEthereum().addOutputHandlers(Lists.asList(new OutputTypeHandler()));
			}
		} finally {
			instanceLock.unlock();
		}
		return instance;
	}

	/**
	 * Setup up the blockchain. Add the 'EthereumFacadeProvider' property to use 
	 * another block chain implementation or network.<br/>
	 * main - for the main net<br/>
	 * test - for the main net<br/>
	 * ropsten - for the new testnet<br/>
	 * InfuraRopsten - for the new testnet over infura rcp<br/>
	 * rpc - to use a rpc instance<br/>
	 * -- rpc-url - the url<br/>
	 * -- chain-id - the chain id<br/>
	 * private - for a private chain<br/>
	 * @throws Exception 
	 */
	private void setup() throws Exception {
		String property = System.getProperty("EthereumFacadeProvider");
		if(property!=null){
			if (property.equalsIgnoreCase("main")) {
				Builder mainNet = EthereumJConfigs.mainNet();				
				//Start of user code for setup the main chain
				//End of user code
				ethereum = EthereumFacadeProvider.forNetwork(mainNet).create();
			}else if (property.equalsIgnoreCase("test")) {
				Builder testnet = EthereumJConfigs.etherCampTestnet();
				//Start of user code for setup the test chain
				//End of user code
				ethereum = EthereumFacadeProvider.forNetwork(testnet).create();
			}else if (property.equalsIgnoreCase("ropsten")) {
				Builder ropsten = EthereumJConfigs.ropsten();
				//Start of user code for setup the ropsten chain
				
				//End of user code
				ethereum = EthereumFacadeProvider.forNetwork(ropsten).create();
			}else if (property.equalsIgnoreCase("InfuraRopsten")) {
				String apiKey = System.getProperty("apiKey");
				ethereum = InfuraRopstenEthereumFacadeProvider.create(new InfuraKey(apiKey));
			}else if (property.equalsIgnoreCase("InfuraMain")) {
				String apiKey = System.getProperty("apiKey");
				ethereum = new InfuraMainEthereumFacadeProvider().create(new InfuraKey(apiKey));
			}else if (property.equalsIgnoreCase("rpc")) {
				EthereumFacadeRpcProvider rcp = new EthereumFacadeRpcProvider();
				String url = System.getProperty("rpc-url");
				String chainId = System.getProperty("chain-id");
				ethereum = rcp.create(url, new ChainId((byte) Integer.parseInt(chainId)));
			}else if (property.equalsIgnoreCase("private")){
				PrivateNetworkConfig config = config();
				//Start of user code for setup the private chain
//				sender = new EthAccount(ECKey.fromPrivate(BigInteger.valueOf(100000L)));
				config
                .reset(true)
                .initialBalance(new EthAccount(ECKey.fromPrivate(BigInteger.valueOf(100000L))), EthValue.ether(10L))
                ;
				
//                .initialBalance(mainAccount, ether(10));
				//End of user code
				ethereum = new PrivateEthereumFacadeProvider().create(config);
			}else if (property.equalsIgnoreCase("custom")){
				Builder config = BlockchainConfig.builder();
				//Start of user code for setup the custom chain
				//End of user code
				ethereum = EthereumFacadeProvider.forNetwork(config).create();
			}
		}
		if(ethereum==null){
			ethereum = StandaloneEthereumFacadeProvider.create();
		}
	}

	public EthereumFacade getEthereum() {
		return ethereum;
	}

}
