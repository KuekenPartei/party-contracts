package de.kueken.ethereum.party.publishing;

// Start of user code ShortBlogTest.customImports
import org.adridadou.exception.EthereumApiException;
import static org.junit.Assert.*;

import java.io.File;
import java.math.BigInteger;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

import org.adridadou.ethereum.values.CompiledContract;
import org.adridadou.ethereum.values.EthAddress;
import org.adridadou.ethereum.values.SoliditySource;
import org.ethereum.crypto.ECKey;
import org.junit.Before;
import org.junit.Test;

import de.kueken.ethereum.party.AbstractContractTest;
import de.kueken.ethereum.party.EthereumInstance.DeployDuo;
import de.kueken.ethereum.party.basics.ManageableTest;
import de.kueken.ethereum.party.deployer.MembersDeployer;
import de.kueken.ethereum.party.deployer.VotingDeployer;
import de.kueken.ethereum.party.members.MemberRegistry;
import de.kueken.ethereum.party.voting.BasicBallot.BallotState;

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

	@Override
	protected String getQuallifiedContractName() {
		return "publishing.sol:ShortBlog";
	}

	/**
	 * Read the contract from the file and deploys the contract code.
	 * @throws Exception
	 */
	@Before
	public void prepareTest() throws Exception {
		//Start of user code prepareTest
		createFixture();
		//End of user code
	}


	/**
	 * Create a new fixture by deploying the contract source.
	 * @throws Exception
	 */
	protected void createFixture() throws Exception {
		//Start of user code createFixture
		CompiledContract compiledContract = getCompiledContract("/mix/combine.json");
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
		String message = "test1";
		String hash = "h1";
		String er = "er1";

		fixture.sendMessage(message, hash, er).get();
		assertEquals(1, fixture.messageCount().intValue());
		Integer lastMessageDate = fixture.lastMessageDate();

		System.out.println("-->" + lastMessageDate);
		ShortBlogMessage messages = fixture.messages(0);
		assertEquals(message, messages.getMessage());
		assertEquals(hash, messages.getHashValue());
		assertEquals(er, messages.getExternalResource());

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
		fixture.sendMessage("test1", "h1", "er1").get();
		assertEquals(1, fixture.messageCount().intValue());

		fixture.addManager(EthAddress.of(ECKey.fromPrivate(java.math.BigInteger.valueOf(100002L)))).get();
		assertEquals(2, fixture.mangerCount().intValue());
		fixture.removeManager(sender.getAddress()).get();
		assertEquals(1, fixture.mangerCount().intValue());

		try {
			fixture.sendMessage("test1", "h1", "er1").get();
			fail("Thow exception");
		} catch (Exception e) {
		}
		assertEquals(1, fixture.messageCount().intValue());

	}
	
	/**
	 * Test method for  sendMessage(String message,String hash,String er).
	 * see {@link ShortBlog#sendMessage( String, String, String)}
	 * @throws Exception
	 */
	@Test
	public void testSendMessage_Often() throws Exception {
		assertEquals(0, fixture.messageCount().intValue());
		String message = "test1";
		String hash = "h1";
		String er = "er1";
		fixture.sendMessage(message, hash, er).get();
		assertEquals(1, fixture.messageCount().intValue());
		ShortBlogMessage messages = fixture.messages(0);
		assertEquals(message, messages.getMessage());
		assertEquals(hash, messages.getHashValue());
		assertEquals(er, messages.getExternalResource());
		
		Integer lastMessageDate = fixture.lastMessageDate();
		System.out.println("-->" + lastMessageDate);
		
		message = "message1";
		hash = "hash1";
		er = "external resource 1";
		fixture.sendMessage(message, hash, er).get();
		assertEquals(2, fixture.messageCount().intValue());
		messages = fixture.messages(1);
		assertEquals(message, messages.getMessage());
		assertEquals(hash, messages.getHashValue());
		assertEquals(er, messages.getExternalResource());
		
		assertTrue(lastMessageDate<fixture.lastMessageDate());
	}

	// End of user code
}
