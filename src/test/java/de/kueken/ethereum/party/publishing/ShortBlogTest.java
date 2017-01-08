package de.kueken.ethereum.party.publishing;

import static org.junit.Assert.*;

import de.kueken.ethereum.party.basics.*;

import de.kueken.ethereum.party.publishing.ShortBlog.*;


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
import org.adridadou.exception.EthereumApiException;
import org.ethereum.crypto.ECKey;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

import de.kueken.ethereum.party.EthereumInstance;

// Start of user code ShortBlogTest.customImports
import org.adridadou.exception.EthereumApiException;

// End of user code


/**
 * Test for the ShortBlog contract.
 *
 */
public class ShortBlogTest extends ManageableTest{
	private static EthereumFacade ethereum;
	private static EthAccount sender;

	private ShortBlog fixture;
	private EthAddress fixtureAddress;
	private SoliditySource contractSource;
	// Start of user code ShortBlogTest.attributes
	private String senderAddressS = "5db10750e8caff27f906b41c71b3471057dd2004";
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
	 * @throws Exception
	 */
	@Before
	public void prepareTest() throws Exception {
		//Start of user code prepareTest

		File contractSrc = new File(this.getClass().getResource("/mix/combine.json").toURI());
		contractSource = SoliditySource.fromRawJson(contractSrc);
		createFixture();
		// End of user code
	}


	/**
	 * Create a new fixture by deploying the contract source.
	 * @throws Exception
	 */
	protected void createFixture() throws Exception {
		//Start of user code createFixture
		String _name = "_name";

		CompletableFuture<EthAddress> address = ethereum.publishContract(contractSource, "ShortBlog", sender, _name);
		fixtureAddress = address.get();
		setFixture(ethereum.createContractProxy(contractSource, "ShortBlog", address.get(), sender, ShortBlog.class));
		// End of user code
	}

	protected void setFixture(ShortBlog f) {
		this.fixture = f;
		super.setFixture(f);
	}


	/**
	 * Test the constructor for the ShortBlog contract.
	 * @throws Exception
	 */
	@Test
	public void testConstructor_string() throws Exception {
		//Start of user code testConstructor_string
		String _name = "_name";

		CompletableFuture<EthAddress> address = ethereum.publishContract(contractSource, "ShortBlog", sender, _name);
		fixture = ethereum.createContractProxy(contractSource, "ShortBlog", address.get(), sender, ShortBlog.class);

		assertEquals(_name, fixture.name());
		assertEquals(0, fixture.messageCount().intValue());
		// End of user code
	}


	/**
	 * Test method for  sendMessage(String message,String hash,String er).
	 * see {@link ShortBlog#sendMessage( String, String, String)}
	 * @throws Exception
	 */
	@Test
	public void testSendMessage_string_string_string() throws Exception {
		//Start of user code testSendMessage_string_string_string
		assertEquals(0, fixture.messageCount().intValue());
		fixture.sendMessage("test1", "h1", "er1");
		assertEquals(1, fixture.messageCount().intValue());
		Integer lastMessageDate = fixture.lastMessageDate();

		System.out.println("-->" + lastMessageDate);
		// End of user code
	}
	//Start of user code customTests
	/**
	 * Test method for sendMessage(String message,String hash,String er). see
	 * {@link ShortBlog#sendMessage( String, String, String)}
	 * 
	 * @throws Exception
	 */
	@Test
	public void testSendMessage_No_Manager() throws Exception {

		assertEquals(0, fixture.messageCount().intValue());
		fixture.sendMessage("test1", "h1", "er1");
		assertEquals(1, fixture.messageCount().intValue());

		fixture.addManager(EthAddress.of(ECKey.fromPrivate(java.math.BigInteger.valueOf(100002L))).withLeading0x());
		assertEquals(2, fixture.mangerCount().intValue());
		fixture.removeManager(EthAddress.of(senderAddressS).withLeading0x());
		assertEquals(1, fixture.mangerCount().intValue());

		try {
			fixture.sendMessage("test1", "h1", "er1");
			fail("Thow exception");
		} catch (EthereumApiException e) {
		}
		assertEquals(1, fixture.messageCount().intValue());

	}
	// End of user code
}
