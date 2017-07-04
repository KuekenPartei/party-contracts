package de.kueken.ethereum.party.party;

import static org.junit.Assert.assertEquals;

import java.util.concurrent.CompletableFuture;

import org.adridadou.ethereum.propeller.solidity.SolidityContractDetails;
import org.adridadou.ethereum.propeller.values.EthAddress;
import org.junit.Before;
import org.junit.Test;

import de.kueken.ethereum.party.EthereumInstance.DeployDuo;
import de.kueken.ethereum.party.deployer.PartyDeployers;
import de.kueken.ethereum.party.members.MemberRegistry;

// End of user code


/**
 * Test for the KUEKeNParty contract.
 *
 */
public class KUEKeNPartyTest extends PartyTest{

 
	private KUEKeNParty fixture;
	// Start of user code KUEKeNPartyTest.attributes
	private String userAddress;
	// End of user code

	@Override
	protected String getContractName() {
		return "KUEKeNParty";
	}

	@Override
	protected String getQuallifiedContractName() {
		return "party.sol:KUEKeNParty";
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

		//TODO: set the constructor args
		String _name = "_name";
        CompletableFuture<EthAddress> address = ethereum.publishContract(compiledContract, sender
				, _name);
        fixtureAddress = address.get();
		setFixture(ethereum.createContractProxy(compiledContract, fixtureAddress, sender, KUEKeNParty.class));
		//End of user code
	}

	protected void setFixture(KUEKeNParty f) {
		this.fixture = f;
		super.setFixture(f);
	}


	/**
	 * Test method for  boostrapParty(org.adridadou.ethereum.propeller.values.EthAddress fc,org.adridadou.ethereum.propeller.values.EthAddress br).
	 * see {@link KUEKeNParty#boostrapParty( org.adridadou.ethereum.propeller.values.EthAddress, org.adridadou.ethereum.propeller.values.EthAddress)}
	 * @throws Exception
	 */
	@Test
	public void testBoostrapParty_address_address() throws Exception {
		//Start of user code testBoostrapParty_address_address
		DeployDuo<FoundationConference> foundationConference = partyDeployer.createFoundationConference(sender);
		DeployDuo<MemberRegistry> memberRegistry = membersDeployer.createMemberRegistry(sender);
		fixture.boostrapParty(foundationConference.contractAddress, memberRegistry.contractAddress).get();
		
		assertEquals(memberRegistry.contractAddress, fixture.memberRegistry());
		//End of user code
	}
	//Start of user code customTests    
	//End of user code
}
