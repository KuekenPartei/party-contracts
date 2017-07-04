package de.kueken.ethereum.party.members;

// Start of user code MemberRegistryTest.customImports
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

import java.math.BigInteger;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

import org.adridadou.ethereum.propeller.keystore.AccountProvider;
import org.adridadou.ethereum.propeller.solidity.SolidityContractDetails;
import org.adridadou.ethereum.propeller.values.EthAddress;
import org.junit.Before;
import org.junit.Test;

import de.kueken.ethereum.party.basics.ManageableTest;
import de.kueken.ethereum.party.deployer.MembersDeployer;

// End of user code


/**
 * Test for the MemberRegistry contract.
 *
 */
public class MemberRegistryTest extends ManageableTest{

 
	private MemberRegistry fixture;
	// Start of user code MemberRegistryTest.attributes
//	private String senderAddressS = "5db10750e8caff27f906b41c71b3471057dd2004";
	
	private EthAddress member1 = AccountProvider.fromPrivateKey((BigInteger.valueOf(1000L))).getAddress();
	private EthAddress member2 = AccountProvider.fromPrivateKey((BigInteger.valueOf(1001L))).getAddress();
	// End of user code

	@Override
	protected String getContractName() {
		return "MemberRegistry";
	}

	@Override
	protected String getQuallifiedContractName() {
		return "members.sol:MemberRegistry";
	}

	/**
	 * Read the contract from the file and deploys the contract code.
	 * @throws Exception
	 */
	@Before
	public void prepareTest() throws Exception {
		//Start of user code prepareTest
		super.prepareTest();
		// End of user code
	}


	/**
	 * Create a new fixture by deploying the contract source.
	 * @throws Exception
	 */
	protected void createFixture() throws Exception {
		//Start of user code createFixture
		SolidityContractDetails compiledContract = getCompiledContract("/mix/combine.json");
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
	 * Test method for  isMember(org.adridadou.ethereum.propeller.values.EthAddress _memberAdress).
	 * see {@link MemberRegistry#isMember( org.adridadou.ethereum.propeller.values.EthAddress)}
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
	 * Test method for  addMember(String name,org.adridadou.ethereum.propeller.values.EthAddress _memberAddress).
	 * see {@link MemberRegistry#addMember( String, org.adridadou.ethereum.propeller.values.EthAddress)}
	 * @throws Exception
	 */
	@Test
	public void testAddMember_string_address() throws Exception {
		//Start of user code testAddMember_string_address
		assertEquals(0, fixture.getMemberCount().intValue());
		fixture.addMember("test1", member1).get();
		assertEquals(1, fixture.getMemberCount().intValue());
		assertEquals(1, fixture.activeMemberCount().intValue());
		ReturnGetMemberData_string_uint memberData = fixture.getMemberData(member1);
		assertEquals("test1", memberData.getName());
		assertEquals(0, memberData.getId().intValue());
		
		
		fixture.addMember("test2", member2).get();
		assertEquals(2, fixture.activeMemberCount().intValue());
		assertEquals(2, fixture.getMemberCount().intValue());
		memberData = fixture.getMemberData(member2);
		assertEquals("test2", memberData.getName());
		assertEquals(1, memberData.getId().intValue());
		
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
		EthAddress address = AccountProvider.fromPrivateKey((BigInteger.valueOf(1000L))).getAddress();
		assertEquals(0, fixture.getMemberCount().intValue());
		fixture.addMember("test1", address).get();
		assertEquals(1, fixture.getMemberCount().intValue());
		fixture.addMember("test2", AccountProvider.fromPrivateKey((BigInteger.valueOf(1001L))).getAddress()).get();
		assertEquals(2, fixture.getMemberCount().intValue());

		fixture.unregisterMember(1).get();
		assertEquals(1, fixture.getMemberCount().intValue());
		assertEquals(1, fixture.activeMemberCount().intValue());
		assertEquals(2, fixture.partyMemberCount().intValue());
		// End of user code
	}
	/**
	 * Test method for  isActiveMember(org.adridadou.ethereum.propeller.values.EthAddress _memberAdress).
	 * see {@link MemberRegistry#isActiveMember( org.adridadou.ethereum.propeller.values.EthAddress)}
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
	 * Test method for  changeMemberAddress(Integer id,org.adridadou.ethereum.propeller.values.EthAddress _newMemberAddress).
	 * see {@link MemberRegistry#changeMemberAddress( Integer, org.adridadou.ethereum.propeller.values.EthAddress)}
	 * @throws Exception
	 */
	@Test
	public void testChangeMemberAddress_uint_address() throws Exception {
		//Start of user code testChangeMemberAddress_uint_address
		EthAddress _memberAdress = AccountProvider.fromPrivateKey((BigInteger.valueOf(1000L))).getAddress();
		assertFalse(fixture.isActiveMember(_memberAdress));
		fixture.addMember("Test1", _memberAdress).get();
		assertTrue(fixture.isActiveMember(_memberAdress));
		ReturnGetMemberData_string_uint memberData = fixture.getMemberData(_memberAdress);
		assertEquals(0, memberData.getId().intValue());
		assertEquals("Test1", memberData.getName());

		EthAddress newAddress = AccountProvider.fromPrivateKey((BigInteger.valueOf(1001L))).getAddress();
		fixture.changeMemberAddress(memberData.getId(), newAddress).get();
		assertTrue(fixture.isActiveMember(newAddress));
		assertFalse(fixture.isActiveMember(_memberAdress));
		
		// End of user code
	}
	/**
	 * Test method for  getMemberData(org.adridadou.ethereum.propeller.values.EthAddress _address).
	 * see {@link MemberRegistry#getMemberData( org.adridadou.ethereum.propeller.values.EthAddress)}
	 * @throws Exception
	 */
	@Test
	public void testGetMemberData_address() throws Exception {
		//Start of user code testGetMemberData_address
		EthAddress _memberAdress = AccountProvider.fromPrivateKey((BigInteger.valueOf(1000L))).getAddress();
		assertFalse(fixture.isActiveMember(_memberAdress));
		fixture.addMember("Test1", _memberAdress).get();
		assertTrue(fixture.isActiveMember(_memberAdress));
		ReturnGetMemberData_string_uint memberData = fixture.getMemberData(_memberAdress);
		assertEquals(0, memberData.getId().intValue());
		assertEquals("Test1", memberData.getName());
		// End of user code
	}
	/**
	 * Test method for  publishMemberEvent(org.adridadou.ethereum.propeller.values.EthAddress mAddress,Integer eventType).
	 * see {@link MemberRegistry#publishMemberEvent( org.adridadou.ethereum.propeller.values.EthAddress, Integer)}
	 * @throws Exception
	 */
	@Test
	public void testPublishMemberEvent_address_uint() throws Exception {
		//Start of user code testPublishMemberEvent_address_uint
		EthAddress _memberAdress = EthAddress.of("0x02");
		assertFalse(fixture.isActiveMember(_memberAdress));
		fixture.addMember("Test1", _memberAdress);
		fixture.publishMemberEvent(_memberAdress, 0).get();
		// End of user code
	}
	//Start of user code customTests
	
	@Test(expected=ExecutionException.class)
	public void testAddMember_NoManager() throws Exception {
		assertEquals(0, fixture.getMemberCount().intValue());
		fixture.addMember("test1", member1).get();
		assertEquals(1, fixture.getMemberCount().intValue());
		assertEquals(1, fixture.activeMemberCount().intValue());
		ReturnGetMemberData_string_uint memberData = fixture.getMemberData(member1);
		assertEquals("test1", memberData.getName());
		assertEquals(0, memberData.getId().intValue());
		
		MembersDeployer deployer = new MembersDeployer(ethereum,"/mix/combine.json",true);
		MemberRegistry memberRegistry = deployer.createMemberRegistryProxy(AccountProvider.fromPrivateKey((BigInteger.valueOf(1001L))), fixtureAddress);
		memberRegistry.addMember("test2", member2).get();
	}

	
	public void testConstructor() throws Exception {
		assertEquals(0, fixture.activeMemberCount().intValue());
		assertEquals(0, fixture.partyMemberCount().intValue());
		assertEquals(1,fixture.mangerCount().intValue());
	}

	// End of user code
}
