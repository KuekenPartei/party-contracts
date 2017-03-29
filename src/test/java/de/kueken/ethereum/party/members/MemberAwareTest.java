package de.kueken.ethereum.party.members;

import static org.junit.Assert.*;

import de.kueken.ethereum.party.basics.*;

import de.kueken.ethereum.party.members.MemberAware.*;


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

// Start of user code MemberAwareTest.customImports

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

	/**
	 * Read the contract from the file and deploys the contract code.
	 * @throws Exception
	 */
	@Before
	public void prepareTest() throws Exception {
		//Start of user code prepareTest

        File contractSrc = new File(this.getClass().getResource("/mix/members.sol").toURI());
        contractSource = SoliditySource.from(contractSrc);
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
	//End of user code
}
