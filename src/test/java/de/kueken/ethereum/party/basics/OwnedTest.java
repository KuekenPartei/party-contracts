package de.kueken.ethereum.party.basics;

import static org.junit.Assert.*;


import de.kueken.ethereum.party.basics.Owned.*;


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

// Start of user code OwnedTest.customImports

// End of user code


/**
 * Test for the Owned contract.
 *
 */
public class OwnedTest extends AbstractContractTest{

	private Owned fixture;
	// Start of user code OwnedTest.attributes
	//TODO: implement
	// End of user code

	@Override
	protected String getContractName() {
		return "Owned";
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
		CompiledContract compiledContract = ethereum.compile(contractSource, getContractName());
		CompletableFuture<EthAddress> address = ethereum.publishContract(compiledContract, sender);
        fixtureAddress = address.get();
		setFixture(ethereum.createContractProxy(compiledContract, fixtureAddress, sender, Owned.class));
		//End of user code
	}

	protected void setFixture(Owned f) {
		this.fixture = f;
	}


	/**
	 * Test method for  getOwner().
	 * see {@link Owned#getOwner()}
	 * @throws Exception
	 */
	@Test
	public void testGetOwner() throws Exception {
		//Start of user code testGetOwner
		//TODO: implement this
		fail("not implemented");
		//End of user code
	}
	/**
	 * Test method for  changeOwner(String newOwner).
	 * see {@link Owned#changeOwner( String)}
	 * @throws Exception
	 */
	@Test
	public void testChangeOwner_address() throws Exception {
		//Start of user code testChangeOwner_address
		//TODO: implement this
		fail("not implemented");
		//End of user code
	}
	/**
	 * Test method for  kill().
	 * see {@link Owned#kill()}
	 * @throws Exception
	 */
	@Test
	public void testKill() throws Exception {
		//Start of user code testKill
		//TODO: implement this
		fail("not implemented");
		//End of user code
	}
	//Start of user code customTests    
	//End of user code
}
