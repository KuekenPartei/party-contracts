package de.kueken.ethereum.party.party;

import static org.junit.Assert.*;

import de.kueken.ethereum.party.basics.*;
import de.kueken.ethereum.party.members.*;
import de.kueken.ethereum.party.publishing.*;
import de.kueken.ethereum.party.voting.*;

import de.kueken.ethereum.party.party.KUEKeNParty.*;


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

// Start of user code KUEKeNPartyTest.customImports
import de.kueken.ethereum.party.deployer.MembersDeployer;
import de.kueken.ethereum.party.deployer.PartyDeployer;
import de.kueken.ethereum.party.deployer.PublishingDeployer;

// End of user code


/**
 * Test for the KUEKeNParty contract.
 *
 */
public class KUEKeNPartyTest extends PartyTest{

	private KUEKeNParty fixture;
	// Start of user code KUEKeNPartyTest.attributes
	private String userAddress;
	// End of user code

	@Override
	protected String getContractName() {
		return "KUEKeNParty";
	}

	/**
	 * Read the contract from the file and deploys the contract code.
	 * @throws Exception
	 */
	@Before
	public void prepareTest() throws Exception {
		//Start of user code prepareTest
//		String property = System.getProperty("EthereumFacadeProvider");
//		if(property!=null)
//		if (property.equalsIgnoreCase("rpc") || property.equalsIgnoreCase("ropsten")
//				|| property.equalsIgnoreCase("InfuraRopsten")) {
//			SecureKey key2 = new FileSecureKey(new File(
//					"/home/urs/.ethereum/testnet/keystore/UTC--2015-12-15T13-55-38.006995319Z--ba7b29b63c00dff8614f8d8a6bf34e94e853b2d3"));
//			EthAccount decode = key2.decode(System.getProperty("key"));
//			sender = decode;
//			String senderAddressS = sender.getAddress().withLeading0x();
//			System.out.println(senderAddressS + "->" + ethereum.getBalance(decode));
//		}else if (property.equalsIgnoreCase("private")){
//			EthAccount user = new EthAccount(ECKey.fromPrivate(BigInteger.valueOf(100001L)));
//			userAddress = user.getAddress().withLeading0x();
//			sender = new EthAccount(ECKey.fromPrivate(BigInteger.valueOf(100000L)));
//		}
//		File contractSrc = new File(this.getClass().getResource("/contracts.json").toURI());
//		contractSource = SoliditySource.fromRawJson(contractSrc);

		initTest();
		partyDeployer = new PartyDeployer(ethereum,"/mix/combine.json",true);
		membersDeployer = new MembersDeployer(ethereum, "/mix/combine.json",true);
		publishingDeployer = new PublishingDeployer(ethereum,"/mix/combine.json",true);
		
//        File contractSrc = new File(this.getClass().getResource("/mix/members.sol").toURI());
//        contractSource = SoliditySource.from(contractSrc);
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

		//TODO: set the constructor args
		String _name = "_name";
        CompletableFuture<EthAddress> address = ethereum.publishContract(compiledContract, sender
				, _name);
        fixtureAddress = address.get();
		setFixture(ethereum.createContractProxy(compiledContract, fixtureAddress, sender, KUEKeNParty.class));
		//End of user code
	}

	protected void setFixture(KUEKeNParty f) {
		this.fixture = f;
		super.setFixture(f);
	}


	/**
	 * Test method for  boostrapParty(org.adridadou.ethereum.values.EthAddress fc,org.adridadou.ethereum.values.EthAddress br).
	 * see {@link KUEKeNParty#boostrapParty( org.adridadou.ethereum.values.EthAddress, org.adridadou.ethereum.values.EthAddress)}
	 * @throws Exception
	 */
	@Test
	public void testBoostrapParty_address_address() throws Exception {
		//Start of user code testBoostrapParty_address_address
		//TODO: implement this
		fail("not implemented");
		//End of user code
	}
	//Start of user code customTests    
	//End of user code
}
