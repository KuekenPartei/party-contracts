package de.kueken.ethereum.party.publishing;

import static org.junit.Assert.*;

import de.kueken.ethereum.party.basics.*;

import de.kueken.ethereum.party.publishing.BlogRegistry.*;


import java.io.File;
import java.lang.reflect.Type;
import java.util.*;
import java.util.concurrent.*;
import java.util.stream.*;
import java.math.*;

import org.adridadou.ethereum.EthereumFacade;
import org.adridadou.ethereum.converters.output.OutputTypeConverter;
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

// Start of user code BlogRegistryTest.customImports

// End of user code


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

		File contractSrc = new File(this.getClass().getResource("/mix/combine.json").toURI());
		contractSource = SoliditySource.fromRawJson(contractSrc);
        createFixture();
		//End of user code
	}


	/**
	 * Create a new fixture by deploying the contract source.
	 * @throws Exception
	 */
	protected void createFixture() throws Exception {
		//Start of user code createFixture
		List<OutputTypeConverter> handlers= new ArrayList<OutputTypeConverter>();
		handlers.add(new OutputTypeConverter() {
			
			public boolean isOfType(Class<?> cls) {
				return EthAddress.class==cls;
			}
			
			public Object convert(Object obj, Type genericType) {
				if (obj instanceof EthAddress) {
					EthAddress ea = (EthAddress) obj;
					return ea.withLeading0x();
				}
				return null;
			}
		});
		
		handlers.add(new OutputTypeConverter() {
			    public boolean isOfType(Class<?> cls) {
			        return String.class.equals(cls);
			    }

			    public String convert(Object obj, Type type) {
			    	if(obj.getClass().isArray())
			    		return EthAddress.of((byte[]) obj).withLeading0x();
			    	else	
			        return obj.toString();

			    }
		});
		ethereum.addOutputHandlers(handlers);
		
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
//		EthAddress of = EthAddress.of(blogAddress);
		System.out.println(blogAddress  );
		//End of user code
	}
	//Start of user code customTests    
	//End of user code
}
