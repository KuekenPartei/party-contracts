package de.kueken.ethereum.party.party;

// Start of user code ConferenceTest.customImports
import static org.junit.Assert.*;

import java.io.File;
import java.math.BigInteger;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

import org.adridadou.ethereum.values.CompiledContract;
import org.adridadou.ethereum.values.EthAddress;
import org.adridadou.ethereum.values.SoliditySource;
import org.ethereum.crypto.ECKey;
import org.junit.Before;
import org.junit.Test;

import de.kueken.ethereum.party.AbstractContractTest;
import de.kueken.ethereum.party.EthereumInstance.DeployDuo;
import de.kueken.ethereum.party.basics.ManageableTest;
import de.kueken.ethereum.party.deployer.MembersDeployer;
import de.kueken.ethereum.party.deployer.VotingDeployer;
import de.kueken.ethereum.party.members.MemberRegistry;
import de.kueken.ethereum.party.voting.BasicBallot.BallotState;
// End of user code


/**
 * Test for the Conference contract.
 *
 */
public class ConferenceTest extends OrganTest{

 
	private Conference fixture;
	// Start of user code ConferenceTest.attributes
	private EthAddress member1 = EthAddress.of(ECKey.fromPrivate(BigInteger.valueOf(1000L)));
	private EthAddress member2 = EthAddress.of(ECKey.fromPrivate(BigInteger.valueOf(1001L)));
	// End of user code

	@Override
	protected String getContractName() {
		return "Conference";
	}

	@Override
	protected String getQuallifiedContractName() {
		return "party.sol:Conference";
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
		System.out.println("create fixture:"+getQuallifiedContractName());
		CompiledContract compiledContract = getCompiledContract("/mix/combine.json");
		CompletableFuture<EthAddress> address = ethereum.publishContract(compiledContract, sender);
        fixtureAddress = address.get();
		setFixture(ethereum.createContractProxy(compiledContract, fixtureAddress, sender, Conference.class));
		//End of user code
	}

	protected void setFixture(Conference f) {
		this.fixture = f;
		super.setFixture(f);
	}


	/**
	 * Test method for  accreditationMember(org.adridadou.ethereum.values.EthAddress _address).
	 * see {@link Conference#accreditationMember( org.adridadou.ethereum.values.EthAddress)}
	 * @throws Exception
	 */
	@Test
	public void testAccreditationMember_address() throws Exception {
		//Start of user code testAccreditationMember_address
		DeployDuo<MemberRegistry> memberRegistry = membersDeployer.createMemberRegistry(sender);
		memberRegistry.contractInstance.addMember("Test", member1).get();
		assertEquals(0, fixture.accreditatedMembers().intValue());
		fixture.setMemberRegistry(memberRegistry.contractAddress).get();
		assertTrue(memberRegistry.contractInstance.isActiveMember(member1));
		
		
		fixture.accreditationMember(member1).get();
		assertEquals(1, fixture.accreditatedMembers().intValue());
		//End of user code
	}
	//Start of user code customTests    
	//End of user code
}
