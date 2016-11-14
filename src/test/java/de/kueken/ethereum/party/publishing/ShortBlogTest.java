package de.kueken.ethereum.party.publishing;

import static org.junit.Assert.*;

import java.io.File;
import java.util.concurrent.CompletableFuture;

import org.adridadou.ethereum.EthereumFacade;
import org.adridadou.ethereum.provider.EthereumFacadeProvider;
import org.adridadou.ethereum.provider.MainEthereumFacadeProvider;
import org.adridadou.ethereum.provider.MordenEthereumFacadeProvider;
import org.adridadou.ethereum.provider.RpcEthereumFacadeProvider;
import org.adridadou.ethereum.provider.StandaloneEthereumFacadeProvider;
import org.adridadou.ethereum.provider.TestnetEthereumFacadeProvider;
import org.adridadou.ethereum.values.EthAccount;
import org.adridadou.ethereum.values.EthAddress;
import org.adridadou.ethereum.values.SoliditySource;
import org.ethereum.crypto.ECKey;
import org.junit.Assert;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

import de.kueken.ethereum.party.basics.ManageableTest;

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
		ECKey key = new ECKey();
		sender = new EthAccount(key);
		String property = System.getProperty("EthereumFacadeProvider");
		EthereumFacadeProvider efp = new StandaloneEthereumFacadeProvider();
		if(property!=null){
			if (property.equalsIgnoreCase("main")) {
				efp = new MainEthereumFacadeProvider();
			}else if (property.equalsIgnoreCase("test")) {
				efp = new TestnetEthereumFacadeProvider();
			}else if (property.equalsIgnoreCase("morden")) {
				efp = new MordenEthereumFacadeProvider();
			}else if (property.equalsIgnoreCase("rcp")) {
				RpcEthereumFacadeProvider rcp = new RpcEthereumFacadeProvider();
				String url = System.getProperty("rcp-url");
				ethereum = rcp.create(url);
				return;//as this currently breaks the hierarchy
			}
		}
		
		ethereum = efp.create();//new EthereumFacade(bcProxy);
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
		//TODO: set the constructor args
		String _name = "_name";

        CompletableFuture<EthAddress> address = ethereum.publishContract(contractSource, "ShortBlog", sender
				, _name);
        fixtureAddress = address.get();
        setFixture(ethereum
                .createContractProxy(contractSource, "ShortBlog", address.get(), sender, ShortBlog.class));
		//End of user code
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

        CompletableFuture<EthAddress> address = ethereum.publishContract(contractSource, "ShortBlog", sender
				, _name);
        fixture = ethereum
                .createContractProxy(contractSource, "ShortBlog", address.get(), sender, ShortBlog.class);

		Assert.assertEquals(_name, fixture.name());
		Assert.assertEquals(0, fixture.messageCount().intValue());
		//End of user code
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

		System.out.println("-->"+lastMessageDate);
		//End of user code
	}
	//Start of user code customTests    
	/**
	 * Test method for  sendMessage(String message,String hash,String er).
	 * see {@link ShortBlog#sendMessage( String, String, String)}
	 * @throws Exception
	 */
	@Test
	public void testSendMessage_No_Manager() throws Exception {
		//Start of user code testSendMessage_string_string_string
		assertEquals(0, fixture.messageCount().intValue());		
		fixture.sendMessage("test1", "h1", "er1");
		assertEquals(1, fixture.messageCount().intValue());		
		
		fixture.addManager("0x04");
		assertEquals(2, fixture.mangerCount().intValue());
		fixture.removeManager(senderAddressS);
		assertEquals(1, fixture.mangerCount().intValue());
		
		fixture.sendMessage("test1", "h1", "er1");
		assertEquals(1, fixture.messageCount().intValue());		
		//End of user code
	}

	//End of user code
}
