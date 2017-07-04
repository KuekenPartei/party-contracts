package de.kueken.ethereum.party.publishing;

import static org.junit.Assert.assertEquals;

import java.util.concurrent.CompletableFuture;

import org.adridadou.ethereum.propeller.solidity.SolidityContractDetails;
import org.adridadou.ethereum.propeller.values.EthAddress;
import org.junit.Before;
import org.junit.Test;

import de.kueken.ethereum.party.basics.ManageableTest;
import de.kueken.ethereum.party.deployer.PartyDeployers;
import de.kueken.ethereum.party.deployer.PublishingDeployer;

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
		publishingDeployer = PartyDeployers.PUBLISHINGDEPLOYER;// new PublishingDeployer(ethereum,"/mix/combine.json",true);
        createFixture();
		//End of user code
	}


	/**
	 * Create a new fixture by deploying the contract source.
	 * @throws Exception
	 */
	protected void createFixture() throws Exception {
		//Start of user code createFixture
		SolidityContractDetails compiledContract = getCompiledContract("/mix/combine.json");
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
		
		ShortBlogMessage messages = shortBlog.messages(0);
		assertEquals(message, messages.getMessage());
		assertEquals(hash, messages.getHashValue());
		assertEquals(er, messages.getExternalResource());

		//End of user code
	}
	//Start of user code customTests   

	@Test
	public void testRegisterBlog_Often() throws Exception {
		testRegisterBlog_string();
		assertEquals(1, fixture.blogCount().intValue());		
		String _name = "blogname2";
		fixture.registerBlog(_name).get();
		assertEquals(2, fixture.blogCount().intValue());	
		EthAddress blogAddress = fixture.blogs(1);
		System.out.println(blogAddress  );
		ShortBlog shortBlog = publishingDeployer.createShortBlogProxy(sender, blogAddress);
		
		System.out.println("blogName: "+  shortBlog.name()+ ""+info(shortBlog));
		assertEquals(_name, shortBlog.name());
		
		assertEquals(0, shortBlog.messageCount().intValue());
		String message="message1";
		String hash="hash1";
		String er="external resource1";
		shortBlog.sendMessage(message, hash, er).get();
		assertEquals(1, shortBlog.messageCount().intValue());
		System.out.println("blogName: "+  shortBlog.name()+ ""+info(shortBlog));

		ShortBlogMessage messages = shortBlog.messages(0);
		assertEquals(message, messages.getMessage());
		assertEquals(hash, messages.getHashValue());
		assertEquals(er, messages.getExternalResource());

	}

	
	protected String info(ShortBlog memberRegistry) {
		return super.info(memberRegistry) + " entries: "+memberRegistry.messageCount();
	}
	//End of user code
}
