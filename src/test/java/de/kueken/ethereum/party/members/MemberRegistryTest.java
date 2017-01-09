package de.kueken.ethereum.party.members;

import static org.junit.Assert.*;

import de.kueken.ethereum.party.basics.*;

import de.kueken.ethereum.party.members.MemberRegistry.*;


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

// Start of user code MemberRegistryTest.customImports

// End of user code


/**
 * Test for the MemberRegistry contract.
 *
 */
public class MemberRegistryTest extends ManageableTest{
//	private static EthereumFacade ethereum;
//	private static EthAccount sender;

	private MemberRegistry fixture;
//	private EthAddress fixtureAddress;
//	private SoliditySource contractSource;
	// Start of user code MemberRegistryTest.attributes
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
//		String property = System.getProperty("EthereumFacadeProvider");
//		if (property != null) {
//			if (property.equalsIgnoreCase("rpc") || property.equalsIgnoreCase("ropsten")
//					|| property.equalsIgnoreCase("InfuraRopsten")) {
//				SecureKey key2 = new FileSecureKey(new File(
//						"/home/urs/.ethereum/testnet/keystore/UTC--2015-12-15T13-55-38.006995319Z--ba7b29b63c00dff8614f8d8a6bf34e94e853b2d3"));
//				EthAccount decode = key2.decode(System.getProperty("key"));
//				sender = decode;
//				String senderAddressS = sender.getAddress().withLeading0x();
//				System.out.println(senderAddressS + "->" + ethereum.getBalance(decode));
//			} else if (property.equalsIgnoreCase("private")) {
//				sender = new EthAccount(ECKey.fromPrivate(BigInteger.valueOf(100000L)));
//			}
//			senderAddressS = sender.getAddress().withLeading0x();
//		}
//		 File contractSrc = new
//		 File(this.getClass().getResource("/contracts.json").toURI());
//		 contractSource = SoliditySource.fromRawJson(contractSrc);

		super.prepareTest();
//		File contractSrc = new File(this.getClass().getResource("/mix/members.sol").toURI());
//		contractSource = SoliditySource.from(contractSrc);
//		createFixture();
		// End of user code
	}


	/**
	 * Create a new fixture by deploying the contract source.
	 * @throws Exception
	 */
	protected void createFixture() throws Exception {
		//Start of user code createFixture
		CompletableFuture<EthAddress> address = ethereum.publishContract(contractSource, "MemberRegistry", sender);
		fixtureAddress = address.get();
		setFixture(ethereum.createContractProxy(contractSource, "MemberRegistry", address.get(), sender,
				MemberRegistry.class));
		// End of user code
	}

	protected void setFixture(MemberRegistry f) {
		this.fixture = f;
		super.setFixture(f);
	}




	/**
	 * Test method for  isMember(String _memberAdress).
	 * see {@link MemberRegistry#isMember( String)}
	 * @throws Exception
	 */
	@Test
	public void testIsMember_address() throws Exception {
		//Start of user code testIsMember_address
		fail("not implemented");// TODO: implement this
		// End of user code
	}
	/**
	 * Test method for  getMemberAddress(Integer id).
	 * see {@link MemberRegistry#getMemberAddress( Integer)}
	 * @throws Exception
	 */
	@Test
	public void testGetMemberAddress_uint() throws Exception {
		//Start of user code testGetMemberAddress_uint
		fail("not implemented");// TODO: implement this
		// End of user code
	}
	/**
	 * Test method for  getMemberCount().
	 * see {@link MemberRegistry#getMemberCount()}
	 * @throws Exception
	 */
	@Test
	public void testGetMemberCount() throws Exception {
		//Start of user code testGetMemberCount
		assertEquals(0, fixture.getMemberCount().intValue());
		fixture.addMember("test1", "0x0001");
		assertEquals(1, fixture.getMemberCount().intValue());
		fixture.unregisterMember(0);
		assertEquals(0, fixture.getMemberCount().intValue());
		// End of user code
	}
	/**
	 * Test method for  addMember(String name,String _memberAddress).
	 * see {@link MemberRegistry#addMember( String, String)}
	 * @throws Exception
	 */
	@Test
	public void testAddMember_string_address() throws Exception {
		//Start of user code testAddMember_string_address
		assertEquals(0, fixture.getMemberCount().intValue());
		fixture.addMember("test1", "0x0001");
		assertEquals(1, fixture.getMemberCount().intValue());
		fixture.addMember("test2", "0x0002");
		assertEquals(2, fixture.getMemberCount().intValue());
		// End of user code
	}
	/**
	 * Test method for  unregisterMember(Integer id).
	 * see {@link MemberRegistry#unregisterMember( Integer)}
	 * @throws Exception
	 */
	@Test
	public void testUnregisterMember_uint() throws Exception {
		//Start of user code testUnregisterMember_uint
		assertEquals(0, fixture.getMemberCount().intValue());
		fixture.addMember("test1", "0x0001");
		assertEquals(1, fixture.getMemberCount().intValue());
		fixture.addMember("test2", "0x0002");
		assertEquals(2, fixture.getMemberCount().intValue());

		fixture.unregisterMember(1);
		assertEquals(1, fixture.getMemberCount().intValue());
		assertEquals(1, fixture.activeMemberCount().intValue());
		assertEquals(2, fixture.partyMemberCount().intValue());
		// End of user code
	}
	/**
	 * Test method for  isActiveMember(String _memberAdress).
	 * see {@link MemberRegistry#isActiveMember( String)}
	 * @throws Exception
	 */
	@Test
	public void testIsActiveMember_address() throws Exception {
		//Start of user code testIsActiveMember_address
		fail("not implemented");// TODO: implement this
		// End of user code
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
		assertFalse(fixture.isActiveMember(_memberAdress));
		fixture.addMember("Test1", _memberAdress);
		assertTrue(fixture.isActiveMember(_memberAdress));
		ReturnGetMemberData_string_uint memberData = fixture.getMemberData(_memberAdress);
		assertEquals(0, memberData.getId().intValue());
		assertEquals("Test1", memberData.getName());

		fixture.changeMemberAddress(memberData.getId(), "0x03");
		// Assert.assertFalse(fixture.isActiveMember(_memberAdress));
		assertTrue(fixture.isActiveMember("0x03"));

		// End of user code
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
		assertFalse(fixture.isActiveMember(_memberAdress));
		fixture.addMember("Test1", _memberAdress);
		assertTrue(fixture.isActiveMember(_memberAdress));
		ReturnGetMemberData_string_uint memberData = fixture.getMemberData(_memberAdress);
		assertEquals(0, memberData.getId().intValue());
		assertEquals("Test1", memberData.getName());
		// End of user code
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
		assertFalse(fixture.isActiveMember(_memberAdress));
		fixture.addMember("Test1", _memberAdress);
		fixture.publishMemberEvent(_memberAdress, 0);
		// End of user code
	}
	//Start of user code customTests
	@Override
	public void testConstructor() throws Exception {
		assertEquals(0, fixture.activeMemberCount().intValue());
		assertEquals(0, fixture.partyMemberCount().intValue());
		assertEquals(1,fixture.mangerCount().intValue());
	}

	// End of user code
}
