package de.kueken.ethereum.party;

// Start of user code AbstractContractTest.customImports
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.math.BigInteger;
import java.net.URISyntaxException;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.concurrent.ExecutionException;

import org.adridadou.ethereum.propeller.EthereumFacade;
import org.adridadou.ethereum.propeller.keystore.AccountProvider;
import org.adridadou.ethereum.propeller.keystore.SecureKey;
import org.adridadou.ethereum.propeller.solidity.SolidityContractDetails;
import org.adridadou.ethereum.propeller.values.EthAccount;
import org.adridadou.ethereum.propeller.values.EthAddress;
import org.adridadou.ethereum.propeller.values.SoliditySourceFile;
import org.apache.commons.io.IOUtils;
import org.ethereum.solidity.compiler.CompilationResult;
import org.ethereum.solidity.compiler.CompilationResult.ContractMetadata;
import org.junit.BeforeClass;
import org.spongycastle.util.encoders.Hex;

// End of user code

/**
 * The basic test.
 *
 */
public abstract class AbstractContractTest {

	private static Map<String, SolidityContractDetails> contracts = new HashMap<>();

	protected static EthereumFacade ethereum;
	protected static EthAccount sender;
	protected static EthAddress senderAddress;

	protected EthAddress fixtureAddress;
	protected SoliditySourceFile contractSource;

	// Start of user code AbstractContractTest.customFields
//	private static boolean evensRegistered = false;
//	private static Map<String,CompiledContract> contracts = new HashMap<String, CompiledContract>();
	// End of user code

	/**
	 * @return the basic contract name
	 */
	protected abstract String getContractName();
	
	/**
	 * @return the contract file together with the contract name
	 */
	protected abstract String getQuallifiedContractName();

	/**
	 * Setup up the blockchain. Add the 'EthereumFacadeProvider' property to use 
	 * another block chain implementation or network.
	 * @throws Exception 
	 */
	@BeforeClass
	public static void setup() throws Exception{
		ethereum = EthereumInstance.getInstance().getEthereum();
		initTest();
	}

	protected static void initTest() throws Exception {
		// Start of user code AbstractContractTest.initTest

		String property = System.getProperty(EthereumInstance.PROP_ETHEREUM_FACADE_PROVIDER);
		if (property != null)
			if (property.equalsIgnoreCase("ropsten") || property.equalsIgnoreCase("InfuraRopsten")) {
				SecureKey a = AccountProvider.fromKeystore(new File("/home/urs/.ethereum/testnet/keystore/UTC--2015-12-15T13-55-38.006995319Z--ba7b29b63c00dff8614f8d8a6bf34e94e853b2d3"));
				sender =a.decode(System.getProperty("pass"));
			

			} else if (property.equalsIgnoreCase("private")) {
				sender = AccountProvider.fromPrivateKey((BigInteger.valueOf(100000L)));
			}

		if (sender == null){// the account for the standalone blockchain
			sender = AccountProvider.fromPrivateKey((Hex.decode("3ec771c31cac8c0dba77a69e503765701d3c2bb62435888d4ffa38fed60c445c")));
		}
		senderAddress = sender.getAddress();
//		if(!evensRegistered){
//		ethereum.events().observeBlocks().subscribe(s-> System.out.println("New Block: "+s));
//		ethereum.events().observeTransactions().subscribe(ev->System.out.println("Transaction: "+ev));	
//		evensRegistered = true;
//		}
		// End of user code
	}

	/**
	 * Returns the already compiled contact.
	 * 
	 * @param filePath the filename and path of the combined json
	 * @return the contract data (bin, abi)
	 * @throws URISyntaxException
	 * @throws FileNotFoundException
	 * @throws IOException
	 */
	protected SolidityContractDetails getCompiledContract(String filePath) throws URISyntaxException, FileNotFoundException, IOException {
		SolidityContractDetails compiledContract = contracts.get(getQuallifiedContractName());
		if(compiledContract!=null)
			return compiledContract;

		File file = new File(this.getClass().getResource(filePath).toURI());
		String rawJson = IOUtils.toString(new FileInputStream(file), EthereumFacade.CHARSET);
		CompilationResult result = CompilationResult.parse(rawJson);
		
		ContractMetadata contractMetadata = result.contracts.get(getContractName());
		if (contractMetadata == null) {
			Optional<String> optional = result.contracts.keySet().stream()
					.filter(s -> s.endsWith(getQuallifiedContractName())).findFirst();
			if (optional.isPresent())
				contractMetadata = result.contracts.get(optional.get());
		}
		compiledContract =  new SolidityContractDetails(contractMetadata.abi, contractMetadata.bin,
				contractMetadata.metadata);

		contracts.put(getQuallifiedContractName(), compiledContract);
		return compiledContract;
	}

	/**
	 * Returns the compiled contract from the 'contractSource'. The name is
	 * defined in the concrete test case.
	 * 
	 * @return the compiled contract
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public SolidityContractDetails getCompiledContract() throws InterruptedException, ExecutionException {
		org.adridadou.ethereum.propeller.solidity.CompilationResult compilationResult = ethereum
				.compile(contractSource);
		Optional<SolidityContractDetails> contract = compilationResult.findContract(getContractName());
		if (contract.isPresent()) {
			return contract.get();
		} else {
			contract = compilationResult.findContract(getQuallifiedContractName());
			if (contract.isPresent())
				return contract.get();
		}
		throw new IllegalArgumentException(
					"The contract '" + getContractName() + "' is not present is the map of contracts:" + compilationResult.getContracts());
	}

	// Start of user code AbstractContractTest.customMethods
	// End of user code
}
