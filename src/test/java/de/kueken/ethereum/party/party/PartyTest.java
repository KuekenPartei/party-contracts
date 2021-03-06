package de.kueken.ethereum.party.party;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;
import static org.junit.Assert.fail;

import java.io.IOException;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

import org.adridadou.ethereum.propeller.solidity.SolidityContractDetails;
import org.adridadou.ethereum.propeller.values.EthAddress;
import org.junit.Before;
import org.junit.Test;

import de.kueken.ethereum.party.basics.Manageable;
import de.kueken.ethereum.party.basics.ManageableTest;
import de.kueken.ethereum.party.deployer.MembersDeployer;
import de.kueken.ethereum.party.deployer.PartyDeployer;
import de.kueken.ethereum.party.deployer.PartyDeployers;
import de.kueken.ethereum.party.deployer.PublishingDeployer;
import de.kueken.ethereum.party.publishing.BlogRegistry;

// End of user code


/**
 * Test for the Party contract.
 *
 */
public class PartyTest extends ManageableTest{

 
	private Party fixture;
	// Start of user code PartyTest.attributes
	protected PartyDeployer partyDeployer;
	protected MembersDeployer membersDeployer;
	protected PublishingDeployer publishingDeployer;
	private BlogRegistry blogRegistry;
	
	// End of user code

	@Override
	protected String getContractName() {
		return "Party";
	}

	@Override
	protected String getQuallifiedContractName() {
		return "party.sol:Party";
	}

	/**
	 * Read the contract from the file and deploys the contract code.
	 * @throws Exception
	 */
	@Before
	public void prepareTest() throws Exception {
		//Start of user code prepareTest
		initTest();        
		partyDeployer = PartyDeployers.PARTYDEPLOYER;// new PartyDeployer(ethereum,"/mix/combine.json",true);
		membersDeployer = PartyDeployers.MEMBERSDEPLOYER;// new MembersDeployer(ethereum, "/mix/combine.json",true);
		publishingDeployer = PartyDeployers.PUBLISHINGDEPLOYER;// new PublishingDeployer(ethereum,"/mix/combine.json",true);
        
        createFixture();
		//End of user code
	}


	/**
	 * Create a new fixture by deploying the contract source.
	 * @throws Exception
	 */
	protected void createFixture() throws Exception {
		//Start of user code createFixture
		System.out.println("create fixture:"+getQuallifiedContractName());
		SolidityContractDetails compiledContract = getCompiledContract("/mix/combine.json");
		CompletableFuture<EthAddress> address = ethereum.publishContract(compiledContract, sender);
        fixtureAddress = address.get();
		setFixture(ethereum.createContractProxy(compiledContract, fixtureAddress, sender, Party.class));
		//End of user code
	}

	protected void setFixture(Party f) {
		this.fixture = f;
		super.setFixture(f);
	}


	/**
	 * Test method for  createOrgan(String organName).
	 * see {@link Party#createOrgan( String)}
	 * @throws Exception
	 */
	@Test
	public void testCreateOrgan_string() throws Exception {
		//Start of user code testCreateOrgan_string
		fail("do later");
		assertEquals(0, fixture.organCount().intValue());
		initParty();
		String organName = "organ name";
		fixture.createOrgan(organName).get();
		assertEquals(1, fixture.organCount().intValue());
		EthAddress organAd = fixture.organs(0);
		System.out.println(organAd);
		
		
		Organ organ = partyDeployer.createOrganProxy(sender, organAd);
		assertEquals(organName, organ.organName());
		
		assertTrue(organ.isManager(fixtureAddress));
//		assertTrue(organ.isManager(sender.getAddress().withLeading0x()));
		
		
		//End of user code
	}
	/**
	 * Test method for  addOrgan(org.adridadou.ethereum.propeller.values.EthAddress _organ).
	 * see {@link Party#addOrgan( org.adridadou.ethereum.propeller.values.EthAddress)}
	 * @throws Exception
	 */
	@Test
	public void testAddOrgan_address() throws Exception {
		//Start of user code testAddOrgan_address
		System.out.println("testAddOrgan_address");
		assertEquals(0, fixture.organCount().intValue());
		initParty();
		
		CompletableFuture<EthAddress> deployOrgan = partyDeployer.deployOrgan(sender);
		Organ organ = partyDeployer.createOrganProxy(sender,deployOrgan.get());
		String aOrganName = "OrganName";
		organ.setOrganName(aOrganName).get();
		assertFalse(organ.isActive());
		
		fixture.addOrgan(deployOrgan.get()).get();
		assertEquals(1, fixture.organCount().intValue());
	
		EthAddress address = fixture.organs(0);
		Organ organ2 = partyDeployer.createOrganProxy(sender, address);
		
		assertTrue(organ.isActive());
		assertEquals(deployOrgan.get(), address);
		assertEquals(aOrganName, organ2.organName());
		assertTrue(blogRegistry.isManager(address));
		
		//End of user code
	}
	/**
	 * Test method for  addSubDivision(org.adridadou.ethereum.propeller.values.EthAddress _subDivision).
	 * see {@link Party#addSubDivision( org.adridadou.ethereum.propeller.values.EthAddress)}
	 * @throws Exception
	 */
	@Test
	public void testAddSubDivision_address() throws Exception {
		//Start of user code testAddSubDivision_address
		System.out.println("testAddSubDivision_address");
		assertEquals(0, fixture.subDivisionCount().intValue());
		initParty();
		
		String _name="subdivision";
//		String _memberRegistry = EthAddress.of(ECKey.fromPrivate(BigInteger.valueOf(100001L))).withLeading0x();
//		String _blogRegistry = EthAddress.of(ECKey.fromPrivate(BigInteger.valueOf(100002L))).withLeading0x();
		de.kueken.ethereum.party.EthereumInstance.DeployDuo<Party> subDivision = partyDeployer.createParty(sender);
		subDivision.contractInstance.addManager(fixtureAddress).get();
		subDivision.contractInstance.setName(_name).get();
		
		
		fixture.addSubDivision(subDivision.contractAddress).get();
		assertEquals(1, fixture.subDivisionCount().intValue());

		//End of user code
	}
	/**
	 * Test method for  removeSubDivision(Integer _divisionId).
	 * see {@link Party#removeSubDivision( Integer)}
	 * @throws Exception
	 */
	@Test
	public void testRemoveSubDivision_uint() throws Exception {
		//Start of user code testRemoveSubDivision_uint
		System.out.println("testRemoveSubDivision_uint");
		testAddSubDivision_address();
		
		fixture.removeSubDivision(0);
		assertEquals(1, fixture.subDivisionCount().intValue());
		//End of user code
	}
	//Start of user code customTests    
	/**
	 * Test method for  isManager(String _managerAddress).
	 * see {@link Manageable#isManager( String)}
	 * @throws Exception
	 */
	@Test
	public void testSetName() throws Exception {
		String aName="test name";
		fixture.setName(aName).get();
		assertEquals(aName, fixture.name());
	}
	
	
	/**
	 * @throws IOException
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	private void initParty() throws IOException, InterruptedException, ExecutionException {
		System.out.println("init Party");
		CompletableFuture<EthAddress> deployBlogRegistry = publishingDeployer.deployBlogRegistry(sender);
		blogRegistry = publishingDeployer.createBlogRegistryProxy(sender, deployBlogRegistry.get());
		
		fixture.setBlogregistry(deployBlogRegistry.get());
		blogRegistry.addManager(fixtureAddress).get();
}
	//End of user code
}
