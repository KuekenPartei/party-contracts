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

// Start of user code MemberRegistryTest.customImports

// End of user code


/**
 * Test for the MemberRegistry contract.
 *
 */
public class MemberRegistryTest extends ManageableTest{

	private MemberRegistry fixture;
	// Start of user code MemberRegistryTest.attributes
	private String senderAddressS = "5db10750e8caff27f906b41c71b3471057dd2004";
	
	private EthAddress member1 = EthAddress.of(ECKey.fromPrivate(BigInteger.valueOf(1000L)));
	private EthAddress member2 = EthAddress.of(ECKey.fromPrivate(BigInteger.valueOf(1001L)));
	// End of user code

	@Override
	protected String getContractName() {
		return "MemberRegistry";
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
		CompiledContract compiledContract = getCompiledContract("/mix/combine.json");
		CompletableFuture<EthAddress> address = ethereum.publishContract(compiledContract, sender);
        fixtureAddress = address.get();
		setFixture(ethereum.createContractProxy(compiledContract, fixtureAddress, sender, MemberRegistry.class));
		//End of user code
	}

	protected void setFixture(MemberRegistry f) {
		this.fixture = f;
		super.setFixture(f);
	}


	/**
	 * Test method for  isMember(org.adridadou.ethereum.values.EthAddress _memberAdress).
	 * see {@link MemberRegistry#isMember( org.adridadou.ethereum.values.EthAddress)}
	 * @throws Exception
	 */
	@Test
	public void testIsMember_address() throws Exception {
		//Start of user code testIsMember_address
		assertEquals(0, fixture.getMemberCount().intValue());
		fixture.addMember("test1", member1).get();
		assertTrue(fixture.isActiveMember(member1));
		fixture.unregisterMember(0).get();
		assertFalse(fixture.isActiveMember(member1));
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
		assertEquals(0, fixture.getMemberCount().intValue());
		fixture.addMember("test1", member1).get();
		assertTrue(fixture.isActiveMember(member1));
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
		fixture.addMember("test1", member1).get();
		assertEquals(1, fixture.getMemberCount().intValue());
		fixture.unregisterMember(0).get();
		assertEquals(0, fixture.getMemberCount().intValue());
		// End of user code
	}
	/**
	 * Test method for  addMember(String name,org.adridadou.ethereum.values.EthAddress _memberAddress).
	 * see {@link MemberRegistry#addMember( String, org.adridadou.ethereum.values.EthAddress)}
	 * @throws Exception
	 */
	@Test
	public void testAddMember_string_address() throws Exception {
		//Start of user code testAddMember_string_address
		assertEquals(0, fixture.getMemberCount().intValue());
		fixture.addMember("test1", member1).get();
		assertEquals(1, fixture.getMemberCount().intValue());
		fixture.addMember("test2", EthAddress.of(ECKey.fromPrivate(BigInteger.valueOf(1001L)))).get();
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
		EthAddress address = EthAddress.of(ECKey.fromPrivate(BigInteger.valueOf(1000L)));
		assertEquals(0, fixture.getMemberCount().intValue());
		fixture.addMember("test1", address).get();
		assertEquals(1, fixture.getMemberCount().intValue());
		fixture.addMember("test2", EthAddress.of(ECKey.fromPrivate(BigInteger.valueOf(1001L)))).get();
		assertEquals(2, fixture.getMemberCount().intValue());

		fixture.unregisterMember(1).get();
		assertEquals(1, fixture.getMemberCount().intValue());
		assertEquals(1, fixture.activeMemberCount().intValue());
		assertEquals(2, fixture.partyMemberCount().intValue());
		// End of user code
	}
	/**
	 * Test method for  isActiveMember(org.adridadou.ethereum.values.EthAddress _memberAdress).
	 * see {@link MemberRegistry#isActiveMember( org.adridadou.ethereum.values.EthAddress)}
	 * @throws Exception
	 */
	@Test
	public void testIsActiveMember_address() throws Exception {
		//Start of user code testIsActiveMember_address
		assertEquals(0, fixture.getMemberCount().intValue());
		fixture.addMember("test1", member1).get();
		assertTrue(fixture.isActiveMember(member1));
		// End of user code
	}
	/**
	 * Test method for  changeMemberAddress(Integer id,org.adridadou.ethereum.values.EthAddress _newMemberAddress).
	 * see {@link MemberRegistry#changeMemberAddress( Integer, org.adridadou.ethereum.values.EthAddress)}
	 * @throws Exception
	 */
	@Test
	public void testChangeMemberAddress_uint_address() throws Exception {
		//Start of user code testChangeMemberAddress_uint_address
		EthAddress _memberAdress = EthAddress.of(ECKey.fromPrivate(BigInteger.valueOf(1000L)));
		assertFalse(fixture.isActiveMember(_memberAdress));
		fixture.addMember("Test1", _memberAdress).get();
		assertTrue(fixture.isActiveMember(_memberAdress));
		ReturnGetMemberData_string_uint memberData = fixture.getMemberData(_memberAdress);
		assertEquals(0, memberData.getId().intValue());
		assertEquals("Test1", memberData.getName());

		EthAddress newAddress = EthAddress.of(ECKey.fromPrivate(BigInteger.valueOf(1001L)));
		fixture.changeMemberAddress(memberData.getId(), newAddress).get();
		// Assert.assertFalse(fixture.isActiveMember(_memberAdress));
		assertTrue(fixture.isActiveMember(newAddress));

		// End of user code
	}
	/**
	 * Test method for  getMemberData(org.adridadou.ethereum.values.EthAddress _address).
	 * see {@link MemberRegistry#getMemberData( org.adridadou.ethereum.values.EthAddress)}
	 * @throws Exception
	 */
	@Test
	public void testGetMemberData_address() throws Exception {
		//Start of user code testGetMemberData_address
		EthAddress _memberAdress = EthAddress.of(ECKey.fromPrivate(BigInteger.valueOf(1000L)));
		assertFalse(fixture.isActiveMember(_memberAdress));
		fixture.addMember("Test1", _memberAdress).get();
		assertTrue(fixture.isActiveMember(_memberAdress));
		ReturnGetMemberData_string_uint memberData = fixture.getMemberData(_memberAdress);
		assertEquals(0, memberData.getId().intValue());
		assertEquals("Test1", memberData.getName());
		// End of user code
	}
	/**
	 * Test method for  publishMemberEvent(org.adridadou.ethereum.values.EthAddress mAddress,Integer eventType).
	 * see {@link MemberRegistry#publishMemberEvent( org.adridadou.ethereum.values.EthAddress, Integer)}
	 * @throws Exception
	 */
	@Test
	public void testPublishMemberEvent_address_uint() throws Exception {
		//Start of user code testPublishMemberEvent_address_uint
		EthAddress _memberAdress = EthAddress.of("0x02");
		assertFalse(fixture.isActiveMember(_memberAdress));
		fixture.addMember("Test1", _memberAdress);
		fixture.publishMemberEvent(_memberAdress, 0);
		// End of user code
	}
	//Start of user code customTests
	
	public void testConstructor() throws Exception {
		assertEquals(0, fixture.activeMemberCount().intValue());
		assertEquals(0, fixture.partyMemberCount().intValue());
		assertEquals(1,fixture.mangerCount().intValue());
	}

	// End of user code
}
