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
import org.adridadou.ethereum.values.CompiledContract;
import org.adridadou.ethereum.values.EthAccount;
import org.adridadou.ethereum.values.EthAddress;
import org.adridadou.ethereum.values.SoliditySource;
import org.adridadou.ethereum.values.config.ChainId;
import org.ethereum.crypto.ECKey;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

import de.kueken.ethereum.party.AbstractContractTest;
import de.kueken.ethereum.party.EthereumInstance;

// Start of user code ShortBlogTest.customImports
import org.adridadou.exception.EthereumApiException;

// End of user code


/**
 * Test for the ShortBlog contract.
 *
 */
public class ShortBlogTest extends ManageableTest{

	private ShortBlog fixture;
	// Start of user code ShortBlogTest.attributes
	private String senderAddressS = "5db10750e8caff27f906b41c71b3471057dd2004";
	// End of user code

	@Override
	protected String getContractName() {
		return "ShortBlog";
	}

	/**
	 * Read the contract from the file and deploys the contract code.
	 * @throws Exception
	 */
	@Before
	public void prepareTest() throws Exception {
		//Start of user code prepareTest
        File contractSrc = new File(this.getClass().getResource("/mix/publishing.sol").toURI());
        contractSource = SoliditySource.from(contractSrc);
		createFixture();
		//End of user code
	}


	/**
	 * Create a new fixture by deploying the contract source.
	 * @throws Exception
	 */
	protected void createFixture() throws Exception {
		//Start of user code createFixture
		CompiledContract compiledContract = ethereum.compile(contractSource, getContractName());
		//TODO: set the constructor args
		String _name = "_name";
        CompletableFuture<EthAddress> address = ethereum.publishContract(compiledContract, sender
				, _name);
        fixtureAddress = address.get();
		setFixture(ethereum.createContractProxy(compiledContract, fixtureAddress, sender, ShortBlog.class));
		//End of user code
	}

	protected void setFixture(ShortBlog f) {
		this.fixture = f;
		super.setFixture(f);
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
