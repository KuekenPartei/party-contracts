package de.kueken.ethereum.party.members;

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
 * Test for the MemberRegistry contract.
 *
 */
public class MemberRegistryTest extends ManageableTest{
	private static EthereumFacade ethereum;
	private static EthAccount sender;

	private MemberRegistry fixture;
	private EthAddress fixtureAddress;
	private SoliditySource contractSource;
	// Start of user code MemberRegistryTest.attributes
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

        File contractSrc = new File(this.getClass().getResource("/mix/members.sol").toURI());
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
        CompletableFuture<EthAddress> address = ethereum.publishContract(contractSource, "MemberRegistry", sender);
        fixtureAddress = address.get();
        fixture = ethereum
                .createContractProxy(contractSource, "MemberRegistry", address.get(), sender, MemberRegistry.class);
		//End of user code
	}



	/**
	 * Test method for  addMember(String name,String _memberAddress).
	 * see {@link MemberRegistry#addMember( String, String)}
	 * @throws Exception
	 */
	@Test
	public void testAddMember_string_address() throws Exception {
		//Start of user code testAddMember_string_address
		//TODO: implement this
		fail("not implemented");
		//End of user code
	}
	/**
	 * Test method for  unregisterMember(Integer id).
	 * see {@link MemberRegistry#unregisterMember( Integer)}
	 * @throws Exception
	 */
	@Test
	public void testUnregisterMember_uint() throws Exception {
		//Start of user code testUnregisterMember_uint
		//TODO: implement this
		fail("not implemented");
		//End of user code
	}
	/**
	 * Test method for  getMemberCount().
	 * see {@link MemberRegistry#getMemberCount()}
	 * @throws Exception
	 */
	@Test
	public void testGetMemberCount() throws Exception {
		//Start of user code testGetMemberCount
		//TODO: implement this
		fail("not implemented");
		//End of user code
	}
	/**
	 * Test method for  isActiveMember(String _memberAdress).
	 * see {@link MemberRegistry#isActiveMember( String)}
	 * @throws Exception
	 */
	@Test
	public void testIsActiveMember_address() throws Exception {
		//Start of user code testIsActiveMember_address
		//TODO: implement this
		fail("not implemented");
		//End of user code
	}
	/**
	 * Test method for  changeMemberAddress(Integer id,String _newMemberAddress).
	 * see {@link MemberRegistry#changeMemberAddress( Integer, String)}
	 * @throws Exception
	 */
	@Test
	public void testChangeMemberAddress_uint_address() throws Exception {
		//Start of user code testChangeMemberAddress_uint_address
		//TODO: implement this
		fail("not implemented");
		//End of user code
	}
	/**
	 * Test method for  getMemberData(String _address).
	 * see {@link MemberRegistry#getMemberData( String)}
	 * @throws Exception
	 */
	@Test
	public void testGetMemberData_address() throws Exception {
		//Start of user code testGetMemberData_address
		//TODO: implement this
		fail("not implemented");
		//End of user code
	}
	/**
	 * Test method for  publishMemberEvent(String mAddress,Integer eventType).
	 * see {@link MemberRegistry#publishMemberEvent( String, Integer)}
	 * @throws Exception
	 */
	@Test
	public void testPublishMemberEvent_address_uint() throws Exception {
		//Start of user code testPublishMemberEvent_address_uint
		//TODO: implement this
		fail("not implemented");
		//End of user code
	}
	//Start of user code customTests    
	//End of user code
}
