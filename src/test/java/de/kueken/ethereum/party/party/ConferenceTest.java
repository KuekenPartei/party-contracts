package de.kueken.ethereum.party.party;

import static org.junit.Assert.*;

import de.kueken.ethereum.party.basics.*;
import de.kueken.ethereum.party.members.*;
import de.kueken.ethereum.party.publishing.*;
import de.kueken.ethereum.party.voting.*;

import de.kueken.ethereum.party.party.Conference.*;


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

// Start of user code ConferenceTest.customImports

// End of user code


/**
 * Test for the Conference contract.
 *
 */
public class ConferenceTest extends OrganTest{

	private Conference fixture;
	// Start of user code ConferenceTest.attributes
	//TODO: implement
	// End of user code

	@Override
	protected String getContractName() {
		return "Conference";
	}

	/**
	 * Read the contract from the file and deploys the contract code.
	 * @throws Exception
	 */
	@Before
	public void prepareTest() throws Exception {
		//Start of user code prepareTest
super.prepareTest();
//		partyDeployer = new PartyDeployer(ethereum,"/mix/combine.json",false);
//		publishingDeployer = new PublishingDeployer(ethereum,"/mix/combine.json",false);
//
////		
////		if(sender==null)// the account for the standalone blockchain
////			sender = new EthAccount(
////					ECKey.fromPrivate(Hex.decode("3ec771c31cac8c0dba77a69e503765701d3c2bb62435888d4ffa38fed60c445c")));
////
////
////	       File contractSrc = new File(this.getClass().getResource("/mix/combine.json").toURI());
////	        contractSource = SoliditySource.fromRawJson(contractSrc);
//
//		initTest();
//		createFixture();
//        File contractSrc = new File(this.getClass().getResource("/mix/party.sol").toURI());
//        contractSource = SoliditySource.from(contractSrc);
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
	 * Test method for  accreditationMember(String _address).
	 * see {@link Conference#accreditationMember( String)}
	 * @throws Exception
	 */
	@Test
	public void testAccreditationMember_address() throws Exception {
		//Start of user code testAccreditationMember_address
		//TODO: implement this
		fail("not implemented");
		//End of user code
	}
	//Start of user code customTests    
	//End of user code
}
