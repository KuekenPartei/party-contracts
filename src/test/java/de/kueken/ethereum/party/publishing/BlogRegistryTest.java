package de.kueken.ethereum.party.publishing;

import static org.junit.Assert.*;

import de.kueken.ethereum.party.basics.*;

import de.kueken.ethereum.party.publishing.BlogRegistry.*;


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

/**
 * Test for the BlogRegistry contract.
 *
 */
public class BlogRegistryTest extends ManageableTest{
	private static EthereumFacade ethereum;
	private static EthAccount sender;

	private BlogRegistry fixture;
	private EthAddress fixtureAddress;
	private SoliditySource contractSource;
	// Start of user code BlogRegistryTest.attributes
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

        File contractSrc = new File(this.getClass().getResource("/mix/publishing.sol").toURI());
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
        CompletableFuture<EthAddress> address = ethereum.publishContract(contractSource, "BlogRegistry", sender);
        fixtureAddress = address.get();
        setFixture(ethereum
                .createContractProxy(contractSource, "BlogRegistry", address.get(), sender, BlogRegistry.class));
		//End of user code
	}

	protected void setFixture(BlogRegistry f) {
		this.fixture = f;
		super.setFixture(f);
	}




	/**
	 * Test method for  registerBlog(String _name).
	 * see {@link BlogRegistry#registerBlog( String)}
	 * @throws Exception
	 */
	@Test
	public void testRegisterBlog_string() throws Exception {
		//Start of user code testRegisterBlog_string
		
		assertEquals(0, fixture.blogCount().intValue());		
		fixture.registerBlog("ttt");
		assertEquals(1, fixture.blogCount().intValue());	
		String blogAddress = fixture.blogs(0);
		System.out.println(blogAddress);
		//End of user code
	}
	//Start of user code customTests    
	//End of user code
}
