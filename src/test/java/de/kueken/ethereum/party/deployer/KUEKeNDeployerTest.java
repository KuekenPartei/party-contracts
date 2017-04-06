/**
 * 
 */
package de.kueken.ethereum.party.deployer;

import static org.junit.Assert.*;

import java.io.IOException;
import java.util.concurrent.ExecutionException;

import org.adridadou.ethereum.values.EthAccount;
import org.adridadou.ethereum.values.EthAddress;
import org.ethereum.crypto.ECKey;
import org.junit.Before;
import org.junit.Test;
import org.spongycastle.util.encoders.Hex;

import de.kueken.ethereum.party.AbstractContractTest;
import de.kueken.ethereum.party.EthereumInstance.DeployDuo;
import de.kueken.ethereum.party.instances.KUEKeNDeployer;
import de.kueken.ethereum.party.members.MemberRegistry;
import de.kueken.ethereum.party.party.Organ;
import de.kueken.ethereum.party.party.Party;
import de.kueken.ethereum.party.publishing.BlogRegistry;
import de.kueken.ethereum.party.publishing.ShortBlog;

/**
 * @author urs
 *
 */
public class KUEKeNDeployerTest  extends AbstractContractTest{

	/**
	 * @throws java.lang.Exception
	 */
	@Before
	public void setUp() throws Exception {
		initTest();
	}

	/**
	 * Test method for {@link de.kueken.ethereum.party.instances.KUEKeNDeployer#deployBundesPartei(java.lang.String)}.
	 */
	@Test
	public void testDeployBundesPartei() {
		KUEKeNDeployer kueKeNDeployer = new KUEKeNDeployer();
		kueKeNDeployer.setSender(sender);
		kueKeNDeployer.setEthereum(ethereum);
		kueKeNDeployer.initDeloyer();
		kueKeNDeployer.setMillis(10);
		try {
			PartyModel model = new PartyModel();

			String name = "test party 1";
			kueKeNDeployer.deployBundesPartei(name);
		
			DeployDuo<Party> deployDuo = kueKeNDeployer.getParty();
			Party party = deployDuo.contractInstance;
			model.setParty(party);
			
			EthAddress memberRegistry = party.memberRegistry();
			EthAddress blogregistry = party.blogregistry();
			MemberRegistry registry = PartyDeployers.MEMBERSDEPLOYER.createMemberRegistryProxy(sender, memberRegistry);
			BlogRegistry blogRegistry2 = PartyDeployers.PUBLISHINGDEPLOYER.createBlogRegistryProxy(sender, blogregistry);
			model.setBlogRegistry(blogRegistry2);
			model.setMemberRegistry(registry);
			
			Integer organCount = party.organCount();
			
			for (int i = 0; i < organCount; i++) {
				EthAddress organs = party.organs(i);
				Organ organ = PartyDeployers.PARTYDEPLOYER.createOrganProxy(sender, organs);
				model.getOrgans().add(organ);
				assertTrue(blogRegistry2.isManager(organs));
				ShortBlog shortBlog = PartyDeployers.PUBLISHINGDEPLOYER.createShortBlogProxy(sender, organ.getOrganBlog());				
				assertTrue(shortBlog.isManager(organs));
			}
			
			assertNotEquals(EthAddress.empty(), memberRegistry);
			assertNotEquals(EthAddress.empty(), blogregistry);
			assertEquals(name, party.name());
			assertEquals(3, organCount.intValue());
			
			assertTrue(registry.isManager(deployDuo.contractAddress));
			assertTrue(blogRegistry2.isManager(deployDuo.contractAddress));
			for (Organ o : model.getOrgans()) {
				assertTrue(o.isManager(deployDuo.contractAddress));
				assertEquals(blogregistry, o.blogRegistry());
				assertTrue(o.isActive());
			}
			
			
			Organ organ = model.getOrgans().get(0);
			assertEquals("Gründungsveranstaltung", organ.getOrganName());
			assertEquals(3, organ.lastFunctionId().intValue());
			
			organ = model.getOrgans().get(1);
			assertEquals("BUVO", organ.getOrganName());
			assertEquals(7, organ.lastFunctionId().intValue());
			
			
			kueKeNDeployer.reportDeployment();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (ExecutionException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	@Override
	protected String getContractName() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	protected String getQuallifiedContractName() {
		// TODO Auto-generated method stub
		return null;
	}

}
