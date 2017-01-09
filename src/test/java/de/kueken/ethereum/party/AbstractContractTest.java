/**
 * 
 */
package de.kueken.ethereum.party;

import java.io.File;
import java.math.BigInteger;
import java.net.URISyntaxException;

import org.adridadou.ethereum.EthereumFacade;
import org.adridadou.ethereum.keystore.FileSecureKey;
import org.adridadou.ethereum.keystore.SecureKey;
import org.adridadou.ethereum.values.EthAccount;
import org.adridadou.ethereum.values.EthAddress;
import org.adridadou.ethereum.values.SoliditySource;
import org.ethereum.crypto.ECKey;
import org.junit.BeforeClass;
import org.spongycastle.util.encoders.Hex;

import de.kueken.ethereum.party.EthereumInstance;
import de.kueken.ethereum.party.deployer.PartyDeployer;
import de.kueken.ethereum.party.deployer.PublishingDeployer;

/**
 * @author urs
 *
 */
public abstract class AbstractContractTest {

	protected static EthereumFacade ethereum;
	protected EthAccount sender;
	protected EthAddress senderAddress;

	protected EthAddress fixtureAddress;
	protected SoliditySource contractSource;

	protected abstract void createFixture() throws Exception;

	@BeforeClass
	public static void setup() {
		ethereum = EthereumInstance.getInstance().getEthereum();

	}

	protected void initTest() throws Exception {
		String property = System.getProperty("EthereumFacadeProvider");
		if (property != null)
			if (property.equalsIgnoreCase("rpc") || property.equalsIgnoreCase("ropsten")
					|| property.equalsIgnoreCase("InfuraRopsten")) {
				SecureKey key2 = new FileSecureKey(new File(
						"/home/urs/.ethereum/testnet/keystore/UTC--2015-12-15T13-55-38.006995319Z--ba7b29b63c00dff8614f8d8a6bf34e94e853b2d3"));
				EthAccount decode = key2.decode(System.getProperty("key"));
				sender = decode;
				String senderAddressS = sender.getAddress().withLeading0x();
				System.out.println(senderAddressS + "->" + ethereum.getBalance(decode));

			} else if (property.equalsIgnoreCase("private")) {
				sender = new EthAccount(ECKey.fromPrivate(BigInteger.valueOf(100000L)));
			}

		if (sender == null)// the account for the standalone blockchain
			sender = new EthAccount(
					ECKey.fromPrivate(Hex.decode("3ec771c31cac8c0dba77a69e503765701d3c2bb62435888d4ffa38fed60c445c")));

		File contractSrc = new File(this.getClass().getResource("/mix/combine.json").toURI());
		contractSource = SoliditySource.fromRawJson(contractSrc);

		createFixture();
	}
}
