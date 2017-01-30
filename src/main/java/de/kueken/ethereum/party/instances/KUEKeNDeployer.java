/**
 * 
 */
package de.kueken.ethereum.party.instances;

import java.io.File;
import java.io.IOException;
import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.List;
import java.util.concurrent.ExecutionException;

import org.adridadou.ethereum.EthereumFacade;
import org.adridadou.ethereum.keystore.FileSecureKey;
import org.adridadou.ethereum.keystore.SecureKey;
import org.adridadou.ethereum.values.EthAccount;
import org.adridadou.ethereum.values.EthAddress;
import org.adridadou.ethereum.values.EthValue;
import org.apache.commons.codec.DecoderException;
import org.ethereum.crypto.ECKey;
import org.spongycastle.util.encoders.Hex;

import de.kueken.ethereum.party.EthereumInstance;
import de.kueken.ethereum.party.EthereumInstance.DeployDuo;
import de.kueken.ethereum.party.basics.Manageable;
import de.kueken.ethereum.party.deployer.MembersDeployer;
import de.kueken.ethereum.party.deployer.PartyDeployer;
import de.kueken.ethereum.party.deployer.PublishingDeployer;
import de.kueken.ethereum.party.members.MemberRegistry;
import de.kueken.ethereum.party.party.FoundationConference;
import de.kueken.ethereum.party.party.Organ;
import de.kueken.ethereum.party.party.Party;
import de.kueken.ethereum.party.publishing.BlogRegistry;
import de.kueken.ethereum.party.publishing.ShortBlog;

/**
 * @author urs
 *
 */
public class KUEKeNDeployer {

	private class PartyStruct {
		private DeployDuo<Party> parentParty;
		private DeployDuo<Party> party;
		private DeployDuo<FoundationConference> foundationConference;
		private List<Organ> organs;

	}

	private final class SetNameAndWaitOneTime implements DoAndWaitOneTime {
		private final String organName;
		private final DeployDuo<? extends Organ> o1;

		private SetNameAndWaitOneTime(String organName, DeployDuo<? extends Organ> o1) {
			this.organName = organName;
			this.o1 = o1;
		}

		public boolean isDone() {
			return organName.equals(o1.contractInstance.organName());
		}

		public void doIt() {
			o1.contractInstance.setOrganName(organName);
		}
	}

	private interface DoAndWaitOneTime {
		boolean isDone();

		void doIt();
	}

	private EthereumFacade ethereum;
	private PartyDeployer partyDeployer;
	private MembersDeployer membersDeployer;
	private PublishingDeployer publishingDeployer;
	private EthAccount sender;
	private DeployDuo<MemberRegistry> memberRegistry;
	private DeployDuo<BlogRegistry> blogRegistry;
	private DeployDuo<Party> party;
	private DeployDuo<FoundationConference> foundationConference;
	private DeployDuo<Organ> buvo;
	private long millis;
	private DeployDuo<Organ> internalCourt;
	private BigInteger startBalance;

	/**
	 * @param args
	 */
	public static void main(String[] args) {

		KUEKeNDeployer kueKeNDeployer = new KUEKeNDeployer();
		kueKeNDeployer.init();

		try {
			kueKeNDeployer.deployBundesPartei();
			kueKeNDeployer.reportDeployment();
		} catch (IOException e) {
			e.printStackTrace();
		} catch (InterruptedException e) {
			e.printStackTrace();
		} catch (ExecutionException e) {
			e.printStackTrace();
		}

	}

	private void reportDeployment() {
		System.out.println("\nDeployment done.\n");

		Party partyContract = party.contractInstance;
		partyInfo(party);
		System.out.println("Party " + info(party));
		System.out.println("\nfc name: " + foundationConference.contractInstance.getOrganName());
		System.out.println("fc: " + info(foundationConference));
		System.out.println("fc functions: " + foundationConference.contractInstance.lastFunctionId() + " short blog: "
				+ foundationConference.contractInstance.blogRegistry());
		System.out.println("\nbuvo name: " + buvo.contractInstance.getOrganName());
		System.out.println(info(buvo));
		System.out.println("buvo functions: " + buvo.contractInstance.lastFunctionId() + " short blog: "
				+ buvo.contractInstance.blogRegistry());

		System.out.println("blog registry: " + info(blogRegistry));
		System.out.println("blog count: " + blogRegistry.contractInstance.blogCount());
		for (int i = 0; i < blogRegistry.contractInstance.blogCount(); i++) {
			String blogs = blogRegistry.contractInstance.blogs(i);
			try {
				ShortBlog shortBlog = publishingDeployer.createShortBlogProxy(sender, EthAddress.of(blogs));
				System.out.println(shortBlog.name() + " " + i);
			} catch (IOException e) {
				e.printStackTrace();
			} catch (InterruptedException e) {
				e.printStackTrace();
			} catch (ExecutionException e) {
				e.printStackTrace();
			}

		}
		System.out.println("member registry" + info(memberRegistry));
		
		System.out.println("price of deployment: "+startBalance.subtract(ethereum.getBalance(sender).inWei())+" wei");
		
		
		System.out.println("\n\ncontracts = {};");
		System.out.println("contracts[\'BlogRegistry\'].address = \""+blogRegistry.contractAddress.withLeading0x()+"\";"); 
		System.out.println("contracts[\'MemberRegistry\'].address = \""+memberRegistry.contractAddress.withLeading0x()+"\";"); 
		System.out.println("contracts[\'FoundationConference\'].address = \""+foundationConference.contractAddress.withLeading0x()+"\";"); 
		System.out.println("contracts[\'Organ\'].address = \""+buvo.contractAddress.withLeading0x()+"\";"); 
		System.out.println("contracts[\'KUEKeNParty\'].address = \""+party.contractAddress.withLeading0x()+"\";"); // 'latest'

	}

	/**
	 * @param party
	 */
	private void partyInfo(DeployDuo<Party> party) {
		Party partyContract = party.contractInstance;
		System.out.println("\nParty name: " + partyContract.name());
		System.out.println("Party manager: " + partyContract.mangerCount());
		System.out.println("Party organs: " + partyContract.organCount());
		System.out.println("Party subDivisions: " + partyContract.subDivisionCount());
		System.out.println("Party member registry: " + partyContract.getMemberRegistry() + " is manager: "
				+ memberRegistry.contractInstance.isManager(party.contractAddress.withLeading0x()));
		System.out.println("Party blog registry: " + partyContract.blogregistry() + " is manager: "
				+ blogRegistry.contractInstance.isManager(party.contractAddress.withLeading0x()));

	}

	private void deployBundesPartei() throws IOException, InterruptedException, ExecutionException {
		System.out.println("deploy member registry");
		if (party != null) {
			party.contractInstance = partyDeployer.createPartyProxy(sender, party.contractAddress);

			memberRegistry = new DeployDuo<MemberRegistry>(EthAddress.of(party.contractInstance.memberRegistry()),
					null);
			blogRegistry = new DeployDuo<BlogRegistry>(EthAddress.of(party.contractInstance.blogregistry()), null);
			foundationConference = new DeployDuo<FoundationConference>(EthAddress.of(party.contractInstance.organs(0)), null);
			buvo = new DeployDuo<Organ>(EthAddress.of(party.contractInstance.organs(1)), null);
			internalCourt = new DeployDuo<Organ>(EthAddress.of(party.contractInstance.organs(2)), null);
		}

		if (memberRegistry != null)
			memberRegistry.contractInstance = membersDeployer.createMemberRegistryProxy(sender,
					memberRegistry.contractAddress);
		else
			memberRegistry = membersDeployer.createMemberRegistry(sender);
		System.out.println(info(memberRegistry));

		System.out.println("deploy blog registry");
		if (blogRegistry != null)
			blogRegistry.contractInstance = publishingDeployer.createBlogRegistryProxy(sender,
					blogRegistry.contractAddress);
		else
			blogRegistry = publishingDeployer.createBlogRegistry(sender);
		System.out.println(info(blogRegistry));

		String aName = "KUEKeN";
		deployPartyContract(aName);

		String aOrganName = "Gründungsveranstaltung";
		createFoundationConference(aOrganName);

		buvo = (buvo == null) ? createOrgan("BUVO", null) : createOrgan("BUVO", buvo.contractAddress);
		internalCourt = (internalCourt == null) ? createOrgan("Schiedsgericht", null)
				: createOrgan("Schiedsgericht", internalCourt.contractAddress);

		System.out.println("add organs: " + party.contractInstance.organCount());
		if(party.contractInstance.organCount()<1)
			addOrgan(foundationConference, party.contractInstance.organCount());
		if(party.contractInstance.organCount()<2)
			addOrgan(buvo, party.contractInstance.organCount());
		if(party.contractInstance.organCount()<3)
			addOrgan(internalCourt, party.contractInstance.organCount());

		System.out.println("blog "
				+ blogRegistry.contractInstance.isManager(foundationConference.contractAddress.withLeading0x()));

		initalizeOrgan(foundationConference);
		initalizeOrgan(buvo);
		initalizeOrgan(internalCourt);
		
		createOrganFunction("1. Vorsizende","",buvo,0);
		createOrganFunction("Stellvertretener Vorsitzede","",buvo,1);
		createOrganFunction("Schatzmeister","",buvo,2);
		createOrganFunction("Stellvertretender Schatzmeister","",buvo,3);
		createOrganFunction("Generalsekretaer","",buvo,4);
		createOrganFunction("1. Stellvertretender Generalsekretaer","",buvo,5);
		createOrganFunction("2. Stellvertretender Generalsekretaer","",buvo,6);
		// deploySubDivision("KUEKeN
		// Berlin",party.contractInstance.subDivisionCount());
	}

	private void createOrganFunction(final String name,final String _constittiutionHash,final DeployDuo<Organ> buvo2,final int index) throws InterruptedException {
		System.out.println("create: "+name+" "+index);
		doAndWait(new DoAndWaitOneTime() {
			
			public boolean isDone() {
				System.out.println(buvo2.contractAddress.withLeading0x() + "-->"+ buvo2.contractInstance.getOrganFunction(index));
				return buvo2.contractInstance.lastFunctionId()>index;
			}
			public void doIt() {
				buvo2.contractInstance.createFunction(name, _constittiutionHash);
				
			}
		});
		
		
	}

	private void deploySubDivision(String name, final Integer index, DeployDuo<Party> parentParty)
			throws IOException, InterruptedException, ExecutionException {
		final DeployDuo<Party> deployParty = deployParty(name, null);
		if(parentParty!=null )
			deployParty.contractInstance.setParent(parentParty.contractAddress.withLeading0x());
		
		doAndWait(new DoAndWaitOneTime() {

			public boolean isDone() {
				System.out.println(deployParty.contractAddress.withLeading0x() + "-->"
						+ party.contractInstance.subDivisions(index));
				return deployParty.contractAddress.withLeading0x()
						.equals(deployParty.contractInstance.subDivisions(index))
						|| deployParty.contractAddress.toString().equals(party.contractInstance.subDivisions(index));
			}

			public void doIt() {
				party.contractInstance.addSubDivision(deployParty.contractAddress.withLeading0x());

			}
		});

	}

	private void addOrgan(final DeployDuo<? extends Organ> organ, final int index) throws InterruptedException {
		doAndWait(new DoAndWaitOneTime() {

			public boolean isDone() {
				System.out.println(
						"-->" + party.contractInstance.organs(index) + " = " + organ.contractAddress.toString());

				return organ.contractAddress.withLeading0x().equals(party.contractInstance.organs(index))
						|| organ.contractAddress.toString().equals(party.contractInstance.organs(index));
			}

			public void doIt() {
				party.contractInstance.addOrgan(organ.contractAddress.withLeading0x());

			}
		});

	}

	/**
	 * @param aOrganName
	 * @throws IOException
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	private void createFoundationConference(String aOrganName)
			throws IOException, InterruptedException, ExecutionException {
		System.out.println("deploy fc: " + aOrganName);
		if (foundationConference != null)
			foundationConference.contractInstance = partyDeployer.createFoundationConferenceProxy(sender,
					foundationConference.contractAddress);
		else
			foundationConference = partyDeployer.createFoundationConference(sender);
		System.out.println("fc " + aOrganName + " " + info(foundationConference));

		doAndWait(new SetNameAndWaitOneTime(aOrganName, foundationConference));
		addManager(foundationConference.contractInstance, party.contractAddress);
		addManager(blogRegistry.contractInstance, foundationConference.contractAddress);
	}

	/**
	 * @param aName
	 * @throws IOException
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	private void deployPartyContract(final String aName) throws IOException, InterruptedException, ExecutionException {
		System.out.println("deploy party: " + aName);
		party = deployParty(aName, party);
	}

	/**
	 * @param aName
	 * @param party2
	 * @return
	 * @throws IOException
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	private DeployDuo<Party> deployParty(final String aName, DeployDuo<Party> party3)
			throws IOException, InterruptedException, ExecutionException {
		if (party3 != null)
			party3.contractInstance = partyDeployer.createPartyProxy(sender, party3.contractAddress);
		else
			party3 = partyDeployer.createParty(sender);
		System.out.println("party deployed: " + info(party3));

		final DeployDuo<Party> party2 = party3;

		doAndWait(new DoAndWaitOneTime() {

			public boolean isDone() {
				try {
					return aName.equals(party2.contractInstance.name()) || aName.equals(new String(
							org.apache.commons.codec.binary.Hex.decodeHex(party2.contractInstance.name().toCharArray()))
									.trim());
				} catch (DecoderException e) {
					e.printStackTrace();
				}
				return false;
			}

			public void doIt() {
				party2.contractInstance.setName(aName);
			}
		});

		doAndWait(new DoAndWaitOneTime() {

			public boolean isDone() {
				return !("0x".equals(party2.contractInstance.blogregistry())
						|| "0000000000000000000000000000000000000000".equals(party2.contractInstance.blogregistry()));
			}

			public void doIt() {
				party2.contractInstance.setBlogregistry(blogRegistry.contractAddress.withLeading0x());

			}
		});

		doAndWait(new DoAndWaitOneTime() {

			public boolean isDone() {
				return !("0x".equals(party2.contractInstance.memberRegistry())
						|| "0000000000000000000000000000000000000000".equals(party2.contractInstance.memberRegistry()));
			}

			public void doIt() {
				party2.contractInstance.setMemberRegistry(memberRegistry.contractAddress.withLeading0x());

			}
		});

		System.out.println("blog/member: " + party2.contractInstance.blogregistry() + " "
				+ party2.contractInstance.memberRegistry());

		addManager(blogRegistry.contractInstance, party2.contractAddress);
		addManager(memberRegistry.contractInstance, party2.contractAddress);

		partyInfo(party2);
		return party2;
	}

	/**
	 * @throws InterruptedException
	 */
	private void initalizeOrgan(final DeployDuo<? extends Organ> organ) throws InterruptedException {
		System.out.println("initalize: " + organ.contractInstance.getOrganName() + " isActive: "
				+ organ.contractInstance.isActive() + " blog: " + organ.contractInstance.blogRegistry());
		doAndWait(new DoAndWaitOneTime() {

			public boolean isDone() {
				return organ.contractInstance.isActive();
			}

			public void doIt() {
				organ.contractInstance.initalizeOrgan();
			}
		});

		// if (!organ.contractInstance.isActive()) {
		// System.out.println("initalize: " +
		// organ.contractInstance.getOrganName());
		// organ.contractInstance.initalizeOrgan();
		// while (!organ.contractInstance.isActive())
		// Thread.sleep(millis);
		// }
	}

	/**
	 * @param organName
	 * @param contractAddress
	 * @return
	 * @throws IOException
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	private DeployDuo<Organ> createOrgan(final String organName, EthAddress contractAddress)
			throws IOException, InterruptedException, ExecutionException {
		System.out.println("deploy organ: " + organName);
		final DeployDuo<Organ> o1 = contractAddress == null ? partyDeployer.createOrgan(sender)
				: new DeployDuo<Organ>(contractAddress, partyDeployer.createOrganProxy(sender, contractAddress));

		System.out.println("Organ deployed: " + organName + " " + info(o1));

		doAndWait(new SetNameAndWaitOneTime(organName, o1));

		addManager(o1.contractInstance, party.contractAddress);
		addManager(blogRegistry.contractInstance, o1.contractAddress);
		System.out.println("Organ: " + organName + " " + info(o1));

		return o1;
	}

	private void addManager(final Manageable m, final EthAddress a) throws InterruptedException {
		doAndWait(new DoAndWaitOneTime() {
			public boolean isDone() {
				return m.isManager(a.withLeading0x());
			}

			public void doIt() {
				m.addManager(a.withLeading0x());
			}
		});
		System.out.println("manager added:" + info(new DeployDuo<Manageable>(a, m)));
	}

	private String info(DeployDuo<? extends Manageable> managable) {
		return managable.contractInstance.getClass().getSimpleName() + " address: "
				+ managable.contractAddress.withLeading0x() + "  managers:" + managable.contractInstance.mangerCount()
				+ " sender is manager:" + managable.contractInstance.isManager(sender.getAddress().withLeading0x());
	}

	private void init() {
		ethereum = EthereumInstance.getInstance().getEthereum();
		String property = System.getProperty("EthereumFacadeProvider");
		// testnetProvider
		if (property != null && (property.equalsIgnoreCase("rpc") || property.equalsIgnoreCase("ropsten")
				|| property.equalsIgnoreCase("InfuraRopsten"))) {
			SecureKey key2 = new FileSecureKey(new File(
					"/home/urs/.ethereum/testnet/keystore/UTC--2015-12-15T13-55-38.006995319Z--ba7b29b63c00dff8614f8d8a6bf34e94e853b2d3"));
			EthAccount decode;
			try {
				decode = key2.decode("n");
				sender = decode;
				String senderAddressS = sender.getAddress().withLeading0x();
				EthValue balance = ethereum.getBalance(sender);
				System.out.println("Sender address und amount:" + senderAddressS + "->" + balance);
				startBalance = balance.inWei();
//				memberRegistry = new DeployDuo<MemberRegistry>(
//						EthAddress.of("0x7eabd7c10987536810da3a9df5d1037bf6782056"), null);
//				blogRegistry = new DeployDuo<BlogRegistry>(EthAddress.of("0x8b14ef913f1119b214bfd1d72a7f02027be13dc1"),
//						null);
//				party = new DeployDuo<Party>(EthAddress.of("0xfb55fab6e4b79b02cb01df8341eb85123128c5ac"), null);
//				foundationConference = new DeployDuo<FoundationConference>(
//						EthAddress.of("0x674a22e3534de242b631cd832bd50e25d2e9c928"), null);
//				buvo = new DeployDuo<Organ>(EthAddress.of("0x02ac1522e3535d34f3743cfc8c6dbcdaf1e6948c"), null);
//				internalCourt = new DeployDuo<Organ>(EthAddress.of("0xc28fd561ea88a0a9e98f2d485398df9d135cdab2"), null);

				millis = 2000L;
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}

		} else {
			sender = new EthAccount(
					ECKey.fromPrivate(Hex.decode("3ec771c31cac8c0dba77a69e503765701d3c2bb62435888d4ffa38fed60c445c")));
			millis = 1L;
		}

		partyDeployer = new PartyDeployer(ethereum, "/mix/combine.json", true);
		membersDeployer = new MembersDeployer(ethereum, "/mix/combine.json", true);
		publishingDeployer = new PublishingDeployer(ethereum, "/mix/combine.json", true);

	}

	private void doAndWait(DoAndWaitOneTime action) throws InterruptedException {
		int timeOut = 0;
		if (!action.isDone()) {
			action.doIt();
			while (!action.isDone() && timeOut++ < 200)
				Thread.sleep(millis);
		}
		if (timeOut >= 200)
			System.out.println("Timeout:" + action);
	}

}
