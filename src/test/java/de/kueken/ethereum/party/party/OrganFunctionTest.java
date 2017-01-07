package de.kueken.ethereum.party.party;

import static org.junit.Assert.*;

import de.kueken.ethereum.party.basics.*;
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

// Start of user code OrganFunctionTest.customImports

// End of user code


/**
 * Test for the OrganFunction contract.
 *
 */
public class OrganFunctionTest extends ManageableTest{
	private static EthereumFacade ethereum;
	private static EthAccount sender;

	private OrganFunction fixture;
	private EthAddress fixtureAddress;
	private SoliditySource contractSource;
	// Start of user code OrganFunctionTest.attributes
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
		String property = System.getProperty("EthereumFacadeProvider");
		if(property==null) property="";
		if (property.equalsIgnoreCase("rpc")|| property.equalsIgnoreCase("ropsten") || property.equalsIgnoreCase("InfuraRopsten")) {
				SecureKey key2 = new FileSecureKey(new File("/home/urs/.ethereum/testnet/keystore/UTC--2015-12-15T13-55-38.006995319Z--ba7b29b63c00dff8614f8d8a6bf34e94e853b2d3"));
				EthAccount decode = key2.decode("n");
				sender = decode;
				String senderAddressS = sender.getAddress().withLeading0x();
				System.out.println(senderAddressS+"->"+ethereum.getBalance(decode));
				

			}else if (property.equalsIgnoreCase("private")){
				sender = new EthAccount(ECKey.fromPrivate(BigInteger.valueOf(100000L)));
			}
//        File contractSrc = new File(this.getClass().getResource("/mix/party.sol").toURI());
        File contractSrc = new File(this.getClass().getResource("/mix/combine.json").toURI());
        contractSource = SoliditySource.fromRawJson(contractSrc);

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
		//TODO: set the constructor args
		String _name = "_name";
		String _ch = "_ch";

        CompletableFuture<EthAddress> address = ethereum.publishContract(contractSource, "OrganFunction", sender
				, _name, _ch);
        fixtureAddress = address.get();
        fixture = ethereum
                .createContractProxy(contractSource, "OrganFunction", address.get(), sender, OrganFunction.class);
		//End of user code
	}

	protected void setFixture(OrganFunction f) {
		this.fixture = f;
		super.setFixture(f);
	}


	/**
	 * Test the constructor for the OrganFunction contract.
	 * @throws Exception
	 */
	@Test
	public void testConstructor_string_string() throws Exception {
		//Start of user code testConstructor_string_string
		//TODO: Set the constructor args
		String _name = "_name";
		String _ch = "_ch";

        CompletableFuture<EthAddress> address = ethereum.publishContract(contractSource, "OrganFunction", sender
				, _name, _ch);
        fixture = ethereum
                .createContractProxy(contractSource, "OrganFunction", address.get(), sender, OrganFunction.class);

		//TODO: test the constructor
		//End of user code
	}


	/**
	 * Test method for  publishMessage(String message,String hash,String er).
	 * see {@link OrganFunction#publishMessage( String, String, String)}
	 * @throws Exception
	 */
	@Test
	public void testPublishMessage_string_string_string() throws Exception {
		//Start of user code testPublishMessage_string_string_string
		//TODO: implement this
		fail("not implemented");
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
		//TODO: implement this
		fail("not implemented");
		//End of user code
	}
	//Start of user code customTests    
	//End of user code
}
