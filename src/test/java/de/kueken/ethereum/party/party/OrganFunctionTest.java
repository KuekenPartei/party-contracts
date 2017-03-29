package de.kueken.ethereum.party.party;

import static org.junit.Assert.*;

import de.kueken.ethereum.party.basics.*;
import de.kueken.ethereum.party.deployer.PublishingDeployer;
import de.kueken.ethereum.party.members.*;
import de.kueken.ethereum.party.publishing.*;
import de.kueken.ethereum.party.voting.*;

import de.kueken.ethereum.party.party.OrganFunction.*;


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
import de.kueken.ethereum.party.EthereumInstance.DeployDuo;

// Start of user code OrganFunctionTest.customImports

// End of user code


/**
 * Test for the OrganFunction contract.
 *
 */
public class OrganFunctionTest extends ManageableTest{

	private OrganFunction fixture;
	// Start of user code OrganFunctionTest.attributes
	protected PublishingDeployer publishingDeployer;
	// End of user code

	@Override
	protected String getContractName() {
		return "OrganFunction";
	}

	/**
	 * Read the contract from the file and deploys the contract code.
	 * @throws Exception
	 */
	@Before
	public void prepareTest() throws Exception {
		//Start of user code prepareTest
        File contractSrc = new File(this.getClass().getResource("/mix/party.sol").toURI());
        contractSource = SoliditySource.from(contractSrc);
		publishingDeployer = new PublishingDeployer(ethereum,"/mix/combine.json",true);

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
		String _name = "_name";
		String _ch = "_ch";
        CompletableFuture<EthAddress> address = ethereum.publishContract(compiledContract, sender
				, _name, _ch);
        fixtureAddress = address.get();
		setFixture(ethereum.createContractProxy(compiledContract, fixtureAddress, sender, OrganFunction.class));
		//End of user code
	}

	protected void setFixture(OrganFunction f) {
		this.fixture = f;
		super.setFixture(f);
	}


	/**
	 * Test method for  publishMessage(String message,String hash,String er).
	 * see {@link OrganFunction#publishMessage( String, String, String)}
	 * @throws Exception
	 */
	@Test
	public void testPublishMessage_string_string_string() throws Exception {
		//Start of user code testPublishMessage_string_string_string
		DeployDuo<ShortBlog> aPublisher = publishingDeployer.createShortBlog(sender, "OrganFunction");
		fixture.setPublisher(aPublisher.contractAddress).get();
		assertEquals(0, aPublisher.contractInstance.messageCount().intValue());
		aPublisher.contractInstance.addManager(fixtureAddress).get();
		
		String message= "a Message";
		String hash = "hash";
		String er = "external resource";
		fixture.publishMessage(message, hash, er).get();
		assertEquals(1, aPublisher.contractInstance.messageCount().intValue());
		//End of user code
	}
	/**
	 * Test method for  getFunctioName().
	 * see {@link OrganFunction#getFunctioName()}
	 * @throws Exception
	 */
	@Test
	public void testGetFunctioName() throws Exception {
		//Start of user code testGetFunctioName
		assertEquals("_name", fixture.getFunctioName());
		//End of user code
	}
	//Start of user code customTests    

	@Test
	public void testConstructor() throws Exception {
		String _name = "_name";
		String _ch = "_ch";
		
		assertEquals(_name, fixture.getFunctioName());
		assertEquals(_ch, fixture.constitutionHash());
		assertEquals(1, fixture.mangerCount().intValue());
	}

	//End of user code
}
