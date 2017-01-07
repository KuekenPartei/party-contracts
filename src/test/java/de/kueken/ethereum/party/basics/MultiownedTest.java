package de.kueken.ethereum.party.basics;

import static org.junit.Assert.*;


import de.kueken.ethereum.party.basics.Multiowned.*;


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

// Start of user code MultiownedTest.customImports

// End of user code


/**
 * Test for the Multiowned contract.
 *
 */
public class MultiownedTest{
	private static EthereumFacade ethereum;
	private static EthAccount sender;

	private Multiowned fixture;
	private EthAddress fixtureAddress;
	private SoliditySource contractSource;
	// Start of user code MultiownedTest.attributes
	//TODO: implement
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

        File contractSrc = new File(this.getClass().getResource("/mix/basics.sol").toURI());
        contractSource = SoliditySource.from(contractSrc);
		//End of user code
	}


	/**
	 * Create a new fixture by deploying the contract source.
	 * @throws Exception
	 */
	protected void createFixture() throws Exception {
		//Start of user code createFixture
        CompletableFuture<EthAddress> address = ethereum.publishContract(contractSource, "Multiowned", sender);
        fixtureAddress = address.get();
        fixture = ethereum
                .createContractProxy(contractSource, "Multiowned", address.get(), sender, Multiowned.class);
		//End of user code
	}

	protected void setFixture(Multiowned f) {
		this.fixture = f;
	}




	/**
	 * Test method for  Multiowned(String[] _owners,Integer _required).
	 * see {@link Multiowned#Multiowned( String[], Integer)}
	 * @throws Exception
	 */
	@Test
	public void testMultiowned_address_uint() throws Exception {
		//Start of user code testMultiowned_address_uint
		//TODO: implement this
		fail("not implemented");
		//End of user code
	}
	/**
	 * Test method for  isOwner(String _addr).
	 * see {@link Multiowned#isOwner( String)}
	 * @throws Exception
	 */
	@Test
	public void testIsOwner_address() throws Exception {
		//Start of user code testIsOwner_address
		//TODO: implement this
		fail("not implemented");
		//End of user code
	}
	/**
	 * Test method for  hasConfirmed(Byte[] _operation,String _owner).
	 * see {@link Multiowned#hasConfirmed( Byte[], String)}
	 * @throws Exception
	 */
	@Test
	public void testHasConfirmed_bytes32_address() throws Exception {
		//Start of user code testHasConfirmed_bytes32_address
		//TODO: implement this
		fail("not implemented");
		//End of user code
	}
	//Start of user code customTests    
	//End of user code
}
