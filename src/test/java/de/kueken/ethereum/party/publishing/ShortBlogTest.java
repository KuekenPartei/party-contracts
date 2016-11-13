package de.kueken.ethereum.party.publishing;

import static org.junit.Assert.*;

import de.kueken.ethereum.party.basics.*;

import java.io.File;
import java.util.concurrent.CompletableFuture;

import org.adridadou.ethereum.EthAccount;
import org.adridadou.ethereum.EthAddress;
import org.adridadou.ethereum.EthereumFacade;
import org.adridadou.ethereum.SoliditySource;
import org.adridadou.ethereum.provider.EthereumFacadeProvider;
import org.adridadou.ethereum.provider.MainEthereumFacadeProvider;
import org.adridadou.ethereum.provider.MordenEthereumFacadeProvider;
import org.adridadou.ethereum.provider.RpcEthereumFacadeProvider;
import org.adridadou.ethereum.provider.StandaloneEthereumFacadeProvider;
import org.adridadou.ethereum.provider.TestnetEthereumFacadeProvider;
import org.ethereum.crypto.ECKey;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

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
	//TODO: implement
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
        fixture = ethereum
                .createContractProxy(contractSource, "ShortBlog", address.get(), sender, ShortBlog.class);
		//End of user code
	}

	/**
	 * Test the constructor for the ShortBlog contract.
	 * @throws Exception
	 */
	@Test
	public void testConstructor_string() throws Exception {
		//Start of user code testConstructor_string
		//TODO: Set the constructor args
		String _name = "_name";

        CompletableFuture<EthAddress> address = ethereum.publishContract(contractSource, "ShortBlog", sender
				, _name);
        fixture = ethereum
                .createContractProxy(contractSource, "ShortBlog", address.get(), sender, ShortBlog.class);

		//TODO: test the constructor
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
		//TODO: implement this
		fail("not implemented");
		//End of user code
	}
	//Start of user code customTests    
	//End of user code
}
