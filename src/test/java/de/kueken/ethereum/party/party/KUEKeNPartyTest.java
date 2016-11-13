package de.kueken.ethereum.party.party;

import static org.junit.Assert.*;

import de.kueken.ethereum.party.basics.*;
import de.kueken.ethereum.party.members.*;
import de.kueken.ethereum.party.publishing.*;
import de.kueken.ethereum.party.voting.*;

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
 * Test for the KUEKeNParty contract.
 *
 */
public class KUEKeNPartyTest extends PartyTest{
	private static EthereumFacade ethereum;
	private static EthAccount sender;

	private KUEKeNParty fixture;
	private EthAddress fixtureAddress;
	private SoliditySource contractSource;
	// Start of user code KUEKeNPartyTest.attributes
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
        CompletableFuture<EthAddress> address = ethereum.publishContract(contractSource, "KUEKeNParty", sender);
        fixtureAddress = address.get();
        fixture = ethereum
                .createContractProxy(contractSource, "KUEKeNParty", address.get(), sender, KUEKeNParty.class);
		//End of user code
	}



	/**
	 * Test method for  KUEKeNParty().
	 * see {@link KUEKeNParty#KUEKeNParty()}
	 * @throws Exception
	 */
	@Test
	public void testKUEKeNParty() throws Exception {
		//Start of user code testKUEKeNParty
		//TODO: implement this
		fail("not implemented");
		//End of user code
	}
	/**
	 * Test method for  boostrapParty(String fc,String br).
	 * see {@link KUEKeNParty#boostrapParty( String, String)}
	 * @throws Exception
	 */
	@Test
	public void testBoostrapParty_address_address() throws Exception {
		//Start of user code testBoostrapParty_address_address
		//TODO: implement this
		fail("not implemented");
		//End of user code
	}
	//Start of user code customTests    
	//End of user code
}
