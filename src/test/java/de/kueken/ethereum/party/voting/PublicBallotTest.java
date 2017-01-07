package de.kueken.ethereum.party.voting;

import static org.junit.Assert.*;

import de.kueken.ethereum.party.members.*;

import de.kueken.ethereum.party.voting.PublicBallot.*;


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

// Start of user code PublicBallotTest.customImports

// End of user code


/**
 * Test for the PublicBallot contract.
 *
 */
public class PublicBallotTest extends BasicBallotTest{
	private static EthereumFacade ethereum;
	private static EthAccount sender;

	private PublicBallot fixture;
	private EthAddress fixtureAddress;
	private SoliditySource contractSource;
	// Start of user code PublicBallotTest.attributes
	//TODO: add custom attributes
	//for the blockchain proxy the sender is hard coded
	private String senderAddress = "5db10750e8caff27f906b41c71b3471057dd2004";
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

        File contractSrc = new File(this.getClass().getResource("/mix/voting.sol").toURI());
        contractSource = SoliditySource.from(contractSrc);
		createFixture();
		//End of user code
	}


	/**
	 * Create a new fixture by deploying the contract source.
	 * @throws Exception
	 */
	protected void createFixture() throws Exception {
		//Start of user code createFixture
        CompletableFuture<EthAddress> address = ethereum.publishContract(contractSource, "PublicBallot", sender);
        fixtureAddress = address.get();
        setFixture(ethereum
                .createContractProxy(contractSource, "PublicBallot", address.get(), sender, PublicBallot.class));
		//End of user code
	}

	protected void setFixture(PublicBallot f) {
		this.fixture = f;
		super.setFixture(f);
	}




	/**
	 * Test method for  castVote(Integer _voteFor).
	 * see {@link PublicBallot#castVote( Integer)}
	 * @throws Exception
	 */
	@Test
	public void testCastVote_uint() throws Exception {
		//Start of user code testCastVote_uint
		fail("not implemented");//TODO: implement this
		//End of user code
	}
	//Start of user code customTests    
	//End of user code
}
