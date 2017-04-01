package de.kueken.ethereum.party.party;

// Start of user code FoundationConferenceTest.customImports
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
 * Test for the FoundationConference contract.
 *
 */
public class FoundationConferenceTest extends ConferenceTest{

 
	private FoundationConference fixture;
	// Start of user code FoundationConferenceTest.attributes
	// TODO: implement
	// End of user code

	@Override
	protected String getContractName() {
		return "FoundationConference";
	}

	@Override
	protected String getQuallifiedContractName() {
		return "party.sol:FoundationConference";
	}

	/**
	 * Read the contract from the file and deploys the contract code.
	 * @throws Exception
	 */
	@Before
	public void prepareTest() throws Exception {
		//Start of user code prepareTest
//		String property = System.getProperty("EthereumFacadeProvider");
//		if (property == null)
//			property = "";
//		if (property.equalsIgnoreCase("rpc") || property.equalsIgnoreCase("ropsten")
//				|| property.equalsIgnoreCase("InfuraRopsten")) {
//			SecureKey key2 = new FileSecureKey(new File(
//					"/home/urs/.ethereum/testnet/keystore/UTC--2015-12-15T13-55-38.006995319Z--ba7b29b63c00dff8614f8d8a6bf34e94e853b2d3"));
//			EthAccount decode = key2.decode(System.getProperty("key"));
//			sender = decode;
//			String senderAddressS = sender.getAddress().withLeading0x();
//			System.out.println(senderAddressS + "->" + ethereum.getBalance(decode));
//
//		} else if (property.equalsIgnoreCase("private")) {
//			sender = new EthAccount(ECKey.fromPrivate(BigInteger.valueOf(100000L)));
//		}
//		// File contractSrc = new
//		// File(this.getClass().getResource("/mix/party.sol").toURI());
//
//		File contractSrc = new File(this.getClass().getResource("/mix/combine.json").toURI());
//		contractSource = SoliditySource.fromRawJson(contractSrc);

		
		super.prepareTest();	
//		initTest();
//		createFixture();
		// File contractSrc = new
		// File(this.getClass().getResource("/mix/combine.json").toURI());
		// contractSource = SoliditySource.fromRawJson(contractSrc);

		// File contractSrc = new
		// File(this.getClass().getResource("/mix/party.sol").toURI());
		// contractSource = SoliditySource.from(contractSrc);
		// End of user code
	}


	/**
	 * Create a new fixture by deploying the contract source.
	 * @throws Exception
	 */
	protected void createFixture() throws Exception {
		//Start of user code createFixture
//		CompiledContract compiledContract = ethereum.compile(contractSource, getContractName());
		CompiledContract compiledContract = getCompiledContract("/mix/combine.json");
		CompletableFuture<EthAddress> address = ethereum.publishContract(compiledContract, sender);
        fixtureAddress = address.get();
		setFixture(ethereum.createContractProxy(compiledContract, fixtureAddress, sender, FoundationConference.class));
		//End of user code
	}

	protected void setFixture(FoundationConference f) {
		this.fixture = f;
		super.setFixture(f);
	}


	//Start of user code customTests
	// End of user code
}
