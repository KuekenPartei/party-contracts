package de.kueken.ethereum.party.party;

import static org.junit.Assert.fail;

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
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

import de.kueken.ethereum.party.basics.ManageableTest;

/**
 * Test for the Party contract.
 *
 */
public class PartyTest extends ManageableTest{
	private static EthereumFacade ethereum;
	private static EthAccount sender;

	private Party fixture;
	private EthAddress fixtureAddress;
	private SoliditySource contractSource;
	// Start of user code PartyTest.attributes
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

        File contractSrc = new File(this.getClass().getResource("/mix/party.sol").toURI());
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

        CompletableFuture<EthAddress> address = ethereum.publishContract(contractSource, "Party", sender
				);
        fixtureAddress = address.get();
        fixture = ethereum
                .createContractProxy(contractSource, "Party", address.get(), sender, Party.class);
		//End of user code
	}

	protected void setFixture(Party f) {
		this.fixture = f;
		super.setFixture(f);
	}


	/**
	 * Test the constructor for the Party contract.
	 * @throws Exception
	 */
	@Test
	public void testConstructor() throws Exception {
		//Start of user code testConstructor
		//TODO: Set the constructor args

        CompletableFuture<EthAddress> address = ethereum.publishContract(contractSource, "Party", sender
				);
        fixture = ethereum
                .createContractProxy(contractSource, "Party", address.get(), sender, Party.class);

		//TODO: test the constructor
		//End of user code
	}


	/**
	 * Test method for  createOrgan(String organName).
	 * see {@link Party#createOrgan( String)}
	 * @throws Exception
	 */
	@Test
	public void testCreateOrgan_string() throws Exception {
		//Start of user code testCreateOrgan_string
		//TODO: implement this
		fail("not implemented");
		//End of user code
	}
	/**
	 * Test method for  addOrgan(String _organ).
	 * see {@link Party#addOrgan( String)}
	 * @throws Exception
	 */
	@Test
	public void testAddOrgan_address() throws Exception {
		//Start of user code testAddOrgan_address
		//TODO: implement this
		fail("not implemented");
		//End of user code
	}
	//Start of user code customTests    
	//End of user code
}
