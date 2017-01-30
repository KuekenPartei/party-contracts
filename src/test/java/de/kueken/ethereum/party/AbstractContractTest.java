package de.kueken.ethereum.party;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.math.BigInteger;
import java.net.URISyntaxException;

import org.adridadou.ethereum.EthereumFacade;
import org.adridadou.ethereum.keystore.AccountProvider;
import org.adridadou.ethereum.keystore.SecureKey;
import org.adridadou.ethereum.values.CompiledContract;
import org.adridadou.ethereum.values.EthAccount;
import org.adridadou.ethereum.values.EthAddress;
import org.adridadou.ethereum.values.SoliditySource;
import org.apache.commons.io.IOUtils;
import org.ethereum.crypto.ECKey;
import org.ethereum.solidity.compiler.CompilationResult;
import org.ethereum.solidity.compiler.CompilationResult.ContractMetadata;
import org.junit.BeforeClass;
import org.spongycastle.util.encoders.Hex;

// Start of user code AbstractContractTest.customImports
//TODO: add custom imports
// End of user code

/**
 * The basic test.
 *
 */
public abstract class AbstractContractTest {

	protected static EthereumFacade ethereum;
	protected EthAccount sender;
	protected EthAddress senderAddress;

	protected EthAddress fixtureAddress;
	protected SoliditySource contractSource;

	// Start of user code AbstractContractTest.customFields
	//TODO: add custom attributes
	// End of user code


	protected abstract void createFixture() throws Exception;

	/**
	 * Setup up the blockchain. Add the 'EthereumFacadeProvider' property to use 
	 * another block chain implementation or network.
	 */
	@BeforeClass
	public static void setup() {
		ethereum = EthereumInstance.getInstance().getEthereum();

	}

	protected void initTest() throws Exception {
		// Start of user code AbstractContractTest.initTest

		String property = System.getProperty("EthereumFacadeProvider");
		if (property != null)
			if (property.equalsIgnoreCase("ropsten") || property.equalsIgnoreCase("InfuraRopsten")) {
				SecureKey a = AccountProvider.from(new File("/home/urs/.ethereum/testnet/keystore/UTC--2015-12-15T13-55-38.006995319Z--ba7b29b63c00dff8614f8d8a6bf34e94e853b2d3"));
				sender =a.decode("n");
				senderAddress = sender.getAddress();
			

			} else if (property.equalsIgnoreCase("private")) {
				sender = new EthAccount(ECKey.fromPrivate(BigInteger.valueOf(100000L)));
				senderAddress = sender.getAddress();
			}

		if (sender == null){// the account for the standalone blockchain
			sender = new EthAccount(
					ECKey.fromPrivate(Hex.decode("3ec771c31cac8c0dba77a69e503765701d3c2bb62435888d4ffa38fed60c445c")));
			senderAddress = sender.getAddress();
		}
		// End of user code
	}

	protected abstract String getContractName();

	/**
	 * Returns the already compiled contact.
	 * 
	 * @param filePath the filename and path of the combined json
	 * @return the contract data (bin, abi)
	 * @throws URISyntaxException
	 * @throws FileNotFoundException
	 * @throws IOException
	 */
	protected CompiledContract getCompiledContract(String filePath) throws URISyntaxException, FileNotFoundException, IOException {
		File file = new File(this.getClass().getResource(filePath).toURI());
		String rawJson = IOUtils.toString(new FileInputStream(file), EthereumFacade.CHARSET);
		CompilationResult result = CompilationResult.parse(rawJson);
		
		ContractMetadata contractMetadata = result.contracts.get(getContractName());
		return CompiledContract.from(contractSource, getContractName(), contractMetadata);
	}
	// Start of user code AbstractContractTest.customMethods
	//TODO: add custom attributes
	// End of user code
}
