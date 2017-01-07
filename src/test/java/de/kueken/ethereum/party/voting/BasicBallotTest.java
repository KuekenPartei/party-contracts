package de.kueken.ethereum.party.voting;

import static org.junit.Assert.*;

import de.kueken.ethereum.party.members.*;

import de.kueken.ethereum.party.voting.BasicBallot.*;


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

// Start of user code BasicBallotTest.customImports

// End of user code


/**
 * Test for the BasicBallot contract.
 *
 */
public class BasicBallotTest{
	private static EthereumFacade ethereum;
	private static EthAccount sender;

	private BasicBallot fixture;
	private EthAddress fixtureAddress;
	private SoliditySource contractSource;
	// Start of user code BasicBallotTest.attributes
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
		//TODO: set the constructor args
		EthAddress _registry = EthAddress.of("0x0");
		String _name = "_name";
		String _hash = "_hash";

        CompletableFuture<EthAddress> address = ethereum.publishContract(contractSource, "BasicBallot", sender
				, _registry, _name, _hash);
        fixtureAddress = address.get();
        setFixture(ethereum
                .createContractProxy(contractSource, "BasicBallot", address.get(), sender, BasicBallot.class));
		//End of user code
	}

	protected void setFixture(BasicBallot f) {
		this.fixture = f;
	}


	/**
	 * Test the constructor for the BasicBallot contract.
	 * @throws Exception
	 */
	@Test
	public void testConstructor_address_string_string() throws Exception {
		//Start of user code testConstructor_address_string_string
		//TODO: Set the constructor args
		EthAddress _registry = EthAddress.of("0x0");
		String _name = "_name";
		String _hash = "_hash";

        CompletableFuture<EthAddress> address = ethereum.publishContract(contractSource, "BasicBallot", sender
				, _registry, _name, _hash);
        fixture = ethereum
                .createContractProxy(contractSource, "BasicBallot", address.get(), sender, BasicBallot.class);

		//TODO: test the constructor
		//End of user code
	}


	/**
	 * Test method for  addProposal(String _name,String _hash,String _url,String _member).
	 * see {@link BasicBallot#addProposal( String, String, String, String)}
	 * @throws Exception
	 */
	@Test
	public void testAddProposal_string_string_string_address() throws Exception {
		//Start of user code testAddProposal_string_string_string_address
		fail("not implemented");//TODO: implement this
		//End of user code
	}
	/**
	 * Test method for  castVote(Integer _voteFor).
	 * see {@link BasicBallot#castVote( Integer)}
	 * @throws Exception
	 */
	@Test
	public void testCastVote_uint() throws Exception {
		//Start of user code testCastVote_uint
		fail("not implemented");//TODO: implement this
		//End of user code
	}
	/**
	 * Test method for  startBallot().
	 * see {@link BasicBallot#startBallot()}
	 * @throws Exception
	 */
	@Test
	public void testStartBallot() throws Exception {
		//Start of user code testStartBallot
		fail("not implemented");//TODO: implement this
		//End of user code
	}
	//Start of user code customTests    
	//End of user code
}
