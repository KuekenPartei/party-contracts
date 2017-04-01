package de.kueken.ethereum.party.publishing;

// Start of user code BlogRegistryTest.customImports
import java.lang.reflect.Type;
import org.adridadou.ethereum.converters.output.OutputTypeConverter;
import de.kueken.ethereum.party.deployer.PublishingDeployer;
import static org.junit.Assert.*;

import java.io.File;
import java.math.BigInteger;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

import org.adridadou.ethereum.values.CompiledContract;
import org.adridadou.ethereum.values.EthAddress;
import org.adridadou.ethereum.values.SoliditySource;
import org.ethereum.crypto.ECKey;
import org.junit.Before;
import org.junit.Test;

import de.kueken.ethereum.party.AbstractContractTest;
import de.kueken.ethereum.party.EthereumInstance.DeployDuo;
import de.kueken.ethereum.party.basics.ManageableTest;
import de.kueken.ethereum.party.deployer.MembersDeployer;
import de.kueken.ethereum.party.deployer.VotingDeployer;
import de.kueken.ethereum.party.members.MemberRegistry;
import de.kueken.ethereum.party.voting.BasicBallot.BallotState;

// End of user code


/**
 * Test for the BlogRegistry contract.
 *
 */
public class BlogRegistryTest extends ManageableTest{

 
	private BlogRegistry fixture;
	// Start of user code BlogRegistryTest.attributes
	private PublishingDeployer publishingDeployer;
	// End of user code

	@Override
	protected String getContractName() {
		return "BlogRegistry";
	}

	@Override
	protected String getQuallifiedContractName() {
		return "publishing.sol:BlogRegistry";
	}

	/**
	 * Read the contract from the file and deploys the contract code.
	 * @throws Exception
	 */
	@Before
	public void prepareTest() throws Exception {
		//Start of user code prepareTest

		publishingDeployer = new PublishingDeployer(ethereum,"/mix/combine.json",true);
		
		File contractSrc = new File(this.getClass().getResource("/mix/combine.json").toURI());
//		contractSource = SoliditySource.fromRawJson(contractSrc);
        createFixture();
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
		setFixture(ethereum.createContractProxy(compiledContract, fixtureAddress, sender, BlogRegistry.class));
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
		String _name = "blogname1";
		fixture.registerBlog(_name).get();
		assertEquals(1, fixture.blogCount().intValue());	
		EthAddress blogAddress = fixture.blogs(0);
		System.out.println(blogAddress  );
		ShortBlog shortBlog = publishingDeployer.createShortBlogProxy(sender, blogAddress);
		
		System.out.println("blogName: "+  shortBlog.name()+ ""+info(shortBlog));
		assertEquals(_name, shortBlog.name());
		
		assertEquals(0, shortBlog.messageCount().intValue());
		String message="message";
		String hash="hash";
		String er="external resource";
		shortBlog.sendMessage(message, hash, er).get();
		assertEquals(1, shortBlog.messageCount().intValue());
		System.out.println("blogName: "+  shortBlog.name()+ ""+info(shortBlog));

		//End of user code
	}
	//Start of user code customTests   
	protected String info(ShortBlog memberRegistry) {
		return super.info(memberRegistry) + " entries: "+memberRegistry.messageCount();
	}
	//End of user code
}
