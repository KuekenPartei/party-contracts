package de.kueken.ethereum.party.party;

// Start of user code KUEKeNPartyTest.customImports
import de.kueken.ethereum.party.deployer.MembersDeployer;
import de.kueken.ethereum.party.deployer.PartyDeployer;
import de.kueken.ethereum.party.deployer.PartyDeployers;
import de.kueken.ethereum.party.deployer.PublishingDeployer;
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
//		CompiledContract compiledContract = ethereum.compile(contractSource, getContractName());
		CompiledContract compiledContract = getCompiledContract("/mix/combine.json");

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
	 * Test method for  boostrapParty(org.adridadou.ethereum.values.EthAddress fc,org.adridadou.ethereum.values.EthAddress br).
	 * see {@link KUEKeNParty#boostrapParty( org.adridadou.ethereum.values.EthAddress, org.adridadou.ethereum.values.EthAddress)}
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
