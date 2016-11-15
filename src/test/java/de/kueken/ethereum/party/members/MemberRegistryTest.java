package de.kueken.ethereum.party.members;

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
//        fixture = ethereum
//                .createContractProxy(contractSource, "MemberRegistry", address.get(), sender, MemberRegistry.class);
		setFixture(ethereum
                .createContractProxy(contractSource, "MemberRegistry", address.get(), sender, MemberRegistry.class));
        //End of user code
	}

	protected void setFixture(MemberRegistry f) {
		this.fixture = f;
		super.setFixture(f);
	}


	/**
	 * Test method for  addMember(String name,String _memberAddress).
	 * see {@link MemberRegistry#addMember( String, String)}
	 * @throws Exception
	 */
	@Test
	public void testAddMember_string_address() throws Exception {
		//Start of user code testAddMember_string_address
		Assert.assertEquals(0, fixture.getMemberCount().intValue());
		fixture.addMember("test1", "0x0001");
		Assert.assertEquals(1, fixture.getMemberCount().intValue());
		fixture.addMember("test2", "0x0002");
		Assert.assertEquals(2, fixture.getMemberCount().intValue());
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
		Assert.assertEquals(0, fixture.getMemberCount().intValue());
		fixture.addMember("test1", "0x0001");
		Assert.assertEquals(1, fixture.getMemberCount().intValue());
		fixture.addMember("test2", "0x0002");
		Assert.assertEquals(2, fixture.getMemberCount().intValue());
		
		fixture.unregisterMember(1);
		Assert.assertEquals(1, fixture.getMemberCount().intValue());
		Assert.assertEquals(1, fixture.activeMemberCount().intValue());
		Assert.assertEquals(2, fixture.partyMemberCount().intValue());
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
		Assert.assertEquals(0, fixture.getMemberCount().intValue());
		fixture.addMember("test1", "0x0001");
		Assert.assertEquals(1, fixture.getMemberCount().intValue());
		
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
		
		String _memberAdress = "0x02";
		Assert.assertFalse(fixture.isActiveMember(_memberAdress));
		fixture.addMember("Test1", _memberAdress);
		Assert.assertTrue(fixture.isActiveMember(_memberAdress));

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
		String _memberAdress = "0x02";
		Assert.assertFalse(fixture.isActiveMember(_memberAdress));
		fixture.addMember("Test1", _memberAdress);
		Assert.assertTrue(fixture.isActiveMember(_memberAdress));
		ReturnGetMemberData_string_uint memberData = fixture.getMemberData(_memberAdress);
		Assert.assertEquals(0, memberData.getId().intValue());
		Assert.assertEquals("Test1", memberData.getName());

		fixture.changeMemberAddress(memberData.getId(), "0x03");
//		Assert.assertFalse(fixture.isActiveMember(_memberAdress));
		Assert.assertTrue(fixture.isActiveMember("0x03"));
		
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
		String _memberAdress = "0x02";
		Assert.assertFalse(fixture.isActiveMember(_memberAdress));
		fixture.addMember("Test1", _memberAdress);
		Assert.assertTrue(fixture.isActiveMember(_memberAdress));
		ReturnGetMemberData_string_uint memberData = fixture.getMemberData(_memberAdress);
		Assert.assertEquals(0, memberData.getId().intValue());
		Assert.assertEquals("Test1", memberData.getName());
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
		String _memberAdress = "0x02";
		Assert.assertFalse(fixture.isActiveMember(_memberAdress));
		fixture.addMember("Test1", _memberAdress);
		fixture.publishMemberEvent(_memberAdress, 0);
		//End of user code
	}
	//Start of user code customTests 
	@Override
	public void testConstructor() throws Exception {
		Assert.assertEquals(0, fixture.activeMemberCount().intValue());
		Assert.assertEquals(0, fixture.partyMemberCount().intValue());
		
	}

	//End of user code
}
