package de.kueken.ethereum.party.members;

// Start of user code MemberAwareTest.customImports
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
import de.kueken.ethereum.party.deployer.MembersDeployer;
import de.kueken.ethereum.party.deployer.VotingDeployer;
import de.kueken.ethereum.party.members.MemberRegistry;
import de.kueken.ethereum.party.voting.BasicBallot.BallotState;

// End of user code


/**
 * Test for the MemberAware contract.
 *
 */
public class MemberAwareTest extends AbstractContractTest{

 
	private MemberAware fixture;
	// Start of user code MemberAwareTest.attributes
	//TODO: implement
	// End of user code

	@Override
	protected String getContractName() {
		return "MemberAware";
	}

	@Override
	protected String getQuallifiedContractName() {
		return "members.sol:MemberAware";
	}

	/**
	 * Read the contract from the file and deploys the contract code.
	 * @throws Exception
	 */
	@Before
	public void prepareTest() throws Exception {
		//Start of user code prepareTest

		//End of user code
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
		setFixture(ethereum.createContractProxy(compiledContract, fixtureAddress, sender, MemberAware.class));
		//End of user code
	}

	protected void setFixture(MemberAware f) {
		this.fixture = f;
	}


	//Start of user code customTests    
	@Test
	public void testName() throws Exception {
		fail();
	}
	//End of user code
}
