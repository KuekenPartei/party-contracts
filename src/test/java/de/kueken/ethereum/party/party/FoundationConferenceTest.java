package de.kueken.ethereum.party.party;

import static org.junit.Assert.*;

import de.kueken.ethereum.party.basics.*;
import de.kueken.ethereum.party.members.*;
import de.kueken.ethereum.party.publishing.*;
import de.kueken.ethereum.party.voting.*;

import de.kueken.ethereum.party.party.FoundationConference.*;

import java.io.File;
import java.util.*;
import java.util.concurrent.*;
import java.util.stream.*;
import java.math.*;

import org.adridadou.ethereum.EthereumFacade;
import org.adridadou.ethereum.keystore.*;
import org.adridadou.ethereum.provider.MainEthereumFacadeProvider;
import org.adridadou.ethereum.provider.RopstenEthereumFacadeProvider;
import org.adridadou.ethereum.provider.GenericRpcEthereumFacadeProvider;
import org.adridadou.ethereum.provider.StandaloneEthereumFacadeProvider;
import org.adridadou.ethereum.provider.TestnetEthereumFacadeProvider;
import org.adridadou.ethereum.values.EthAccount;
import org.adridadou.ethereum.values.EthAddress;
import org.adridadou.ethereum.values.SoliditySource;
import org.adridadou.ethereum.values.config.ChainId;
import org.ethereum.crypto.ECKey;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

import de.kueken.ethereum.party.EthereumInstance;

// Start of user code FoundationConferenceTest.customImports

// End of user code

/**
 * Test for the FoundationConference contract.
 *
 */
public class FoundationConferenceTest extends ConferenceTest {
	private static EthereumFacade ethereum;
	private static EthAccount sender;

	private FoundationConference fixture;
	private EthAddress fixtureAddress;
	private SoliditySource contractSource;
	// Start of user code FoundationConferenceTest.attributes
	// TODO: implement
	// End of user code

	/**
	 * Setup up the blockchain. Add the 'EthereumFacadeProvider' property to use
	 * another block chain implemenation or network.
	 */
	@BeforeClass
	public static void setup() {
		ethereum = EthereumInstance.getInstance().getEthereum();

	}

	/**
	 * Read the contract from the file and deploys the contract code.
	 * 
	 * @throws Exception
	 */
	@Before
	public void prepareTest() throws Exception {
		// Start of user code prepareTest
		String property = System.getProperty("EthereumFacadeProvider");
		if (property == null)
			property = "";
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
		// File contractSrc = new
		// File(this.getClass().getResource("/mix/party.sol").toURI());

		File contractSrc = new File(this.getClass().getResource("/mix/combine.json").toURI());
		contractSource = SoliditySource.fromRawJson(contractSrc);
		createFixture();
		// File contractSrc = new
		// File(this.getClass().getResource("/mix/combine.json").toURI());
		// contractSource = SoliditySource.fromRawJson(contractSrc);

		// File contractSrc = new
		// File(this.getClass().getResource("/mix/party.sol").toURI());
		// contractSource = SoliditySource.from(contractSrc);
		// End of user code
	}

	/**
	 * Create a new fixture by deploying the contract source.
	 * 
	 * @throws Exception
	 */
	protected void createFixture() throws Exception {
		// Start of user code createFixture
		CompletableFuture<EthAddress> address = ethereum.publishContract(contractSource, "FoundationConference",
				sender);
		fixtureAddress = address.get();
		setFixture(ethereum.createContractProxy(contractSource, "FoundationConference", address.get(), sender,
				FoundationConference.class));
		// End of user code
	}

	protected void setFixture(FoundationConference f) {
		this.fixture = f;
		super.setFixture(f);
	}

	// Start of user code customTests
	// End of user code
}
