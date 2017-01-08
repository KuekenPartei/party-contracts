/**
 * 
 */
package de.kueken.ethereum.party.instances;

import java.io.File;
import java.io.IOException;
import java.util.concurrent.ExecutionException;

import org.adridadou.ethereum.EthereumFacade;
import org.adridadou.ethereum.keystore.FileSecureKey;
import org.adridadou.ethereum.keystore.SecureKey;
import org.adridadou.ethereum.values.EthAccount;
import org.adridadou.ethereum.values.EthAddress;
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

/**
 * @author urs
 *
 */
public class KUEKeNDeployer {

	private final class SetNameAndWaitOneTime implements DoAndWaitOneTime {
		private final String organName;
		private final DeployDuo<? extends Organ> o1;

		private SetNameAndWaitOneTime(String organName, DeployDuo<? extends Organ> o1) {
			this.organName = organName;
			this.o1 = o1;
		}

		public boolean isDone() {
			return organName.equals(o1.constractInstance.organName());
		}

		public void doIt() {
			o1.constractInstance.setOrganName(organName);
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

	private void reportDeployment() {
		System.out.println("\nParty name: " + party.constractInstance.name());
		System.out.println("Party manager: " + party.constractInstance.mangerCount());
		System.out.println("Party organs: " + party.constractInstance.organCount());
		System.out.println("Party subDivisions: " + party.constractInstance.subDivisionCount());
		System.out.println("Party " + info(party));
		System.out.println("\nfc name: " + foundationConference.constractInstance.getOrganName());
		System.out.println("fc: " + info(foundationConference));
		System.out.println("fc functions: " + foundationConference.constractInstance.lastFunctionId()+" short blog: "+foundationConference.constractInstance.blogRegistry());
		System.out.println("\nbuvo name: " + buvo.constractInstance.getOrganName());
		System.out.println(info(buvo));
		System.out.println("buvo functions: " + buvo.constractInstance.lastFunctionId()+" short blog: "+buvo.constractInstance.blogRegistry());

		System.out.println("blog registry: " + info(blogRegistry));
		System.out.println("blog count: " + blogRegistry.constractInstance.blogCount());

		System.out.println("member registry" + info(memberRegistry));
	}

	private void deployBundesPartei() throws IOException, InterruptedException, ExecutionException {
		System.out.println("deploy member registry");
		if (memberRegistry != null)
			memberRegistry.constractInstance = membersDeployer.createMemberRegistryProxy(sender,
					memberRegistry.contractAddress);
		else
			memberRegistry = membersDeployer.createMemberRegistry(sender);
		System.out.println(info(memberRegistry));

		System.out.println("deploy blog registry");
		if (blogRegistry != null)
			blogRegistry.constractInstance = publishingDeployer.createBlogRegistryProxy(sender,
					blogRegistry.contractAddress);
		else
			blogRegistry = publishingDeployer.createBlogRegistry(sender);
		System.out.println(info(blogRegistry));

		String aName = "KUEKeN";
		deployPartyContract(aName);

		String aOrganName = "Gründungsveranstaltung";
		createFoundationConference(aOrganName);

		buvo = (buvo == null) ? createOrgan("BUVO", null) : createOrgan("BUVO", buvo.contractAddress);

		System.out.println("add organs");

		addOrgan(foundationConference, 0);
		addOrgan(buvo, 1);

		System.out.println("blog "
				+ blogRegistry.constractInstance.isManager(foundationConference.contractAddress.withLeading0x()));
		
		initalizeOrgan(foundationConference);
		initalizeOrgan(buvo);
	}

	private void addOrgan(final DeployDuo<? extends Organ> organ, final int index) throws InterruptedException {
		doAndWait(new DoAndWaitOneTime() {

			public boolean isDone() {
				return organ.contractAddress.withLeading0x().equals(party.constractInstance.organs(index));
			}

			public void doIt() {
				party.constractInstance.addOrgan(organ.contractAddress.withLeading0x());

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
			foundationConference.constractInstance = partyDeployer.createFoundationConferenceProxy(sender,
					foundationConference.contractAddress);
		else
			foundationConference = partyDeployer.createFoundationConference(sender);
		System.out.println("fc " + aOrganName + " " + info(foundationConference));

		doAndWait(new SetNameAndWaitOneTime(aOrganName, foundationConference));
		addManager(foundationConference.constractInstance, party.contractAddress);
		addManager(blogRegistry.constractInstance, foundationConference.contractAddress);
	}

	/**
	 * @param aName
	 * @throws IOException
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	private void deployPartyContract(final String aName) throws IOException, InterruptedException, ExecutionException {
		System.out.println("deploy party: " + aName);
		if (party != null)
			party.constractInstance = partyDeployer.createPartyProxy(sender, party.contractAddress);
		else
			party = partyDeployer.createParty(sender, aName, "0xba7b29b63c00dff8614f8d8a6bf34e94e853b2d3",
					"0xba7b29b63c00dff8614f8d8a6bf34e94e853b2d3");
		System.out.println(info(party));

		doAndWait(new DoAndWaitOneTime() {

			public boolean isDone() {
				return aName.equals(party.constractInstance.name());
			}

			public void doIt() {
				party.constractInstance.setName(aName);
			}
		});

		if ("0x".equals(party.constractInstance.blogregistry())) {
			System.out.println("set Blogregistry to" + blogRegistry.contractAddress.withLeading0x());
			party.constractInstance.setBlogregistry(blogRegistry.contractAddress.withLeading0x());
			while ("0x".equals(party.constractInstance.blogregistry()))
				Thread.sleep(millis);
		}
		if ("0x".equals(party.constractInstance.memberRegistry())) {
			party.constractInstance.setMemberRegistry(memberRegistry.contractAddress.withLeading0x());
			while ("0x".equals(party.constractInstance.memberRegistry()))
				Thread.sleep(millis);
		}

		System.out.println("blog/member: " + party.constractInstance.blogregistry() + " "
				+ party.constractInstance.memberRegistry());

		addManager(blogRegistry.constractInstance, party.contractAddress);
		addManager(memberRegistry.constractInstance, party.contractAddress);
	}

	/**
	 * @throws InterruptedException
	 */
	private void initalizeOrgan(DeployDuo<? extends Organ> organ) throws InterruptedException {
		if (!organ.constractInstance.isActive()) {
			System.out.println("initalize: " + organ.constractInstance.getOrganName());
			organ.constractInstance.initalizeOrgan();
			while (!organ.constractInstance.isActive())
				Thread.sleep(millis);
		}
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

		System.out.println("Organ: " + organName + " " + info(o1));

		doAndWait(new SetNameAndWaitOneTime(organName, o1));

		addManager(o1.constractInstance, party.contractAddress);
		addManager(blogRegistry.constractInstance, o1.contractAddress);
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

	private String info(DeployDuo<? extends Manageable> memberRegistry) {
		return "address: " + memberRegistry.contractAddress.withLeading0x() + "  managers:"
				+ memberRegistry.constractInstance.mangerCount() + " sender is manager:"
				+ memberRegistry.constractInstance.isManager(sender.getAddress().withLeading0x());
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
				System.out.println("Sender address und amount:" + senderAddressS + "->" + ethereum.getBalance(decode));

				memberRegistry = new DeployDuo<MemberRegistry>(
						EthAddress.of("0x6bd090228360e8404087b2834bd686cd544b7f0a"), null);
				blogRegistry = new DeployDuo<BlogRegistry>(EthAddress.of("0x02da9e7b2ff471dab8e437393f4268b23be8f260"),
						null);
				party = new DeployDuo<Party>(EthAddress.of("0x261449ddf702b9e93b690e1aaf825a7b89a503c9"), null);
				foundationConference = new DeployDuo<FoundationConference>(
						EthAddress.of("0x8024dc202025997e61f05df28ba9f1a38dbb0470"), null);
				buvo = new DeployDuo<Organ>(EthAddress.of("0xe2bff8ed57c0b1b161ae91bde71cf6bb184fb944"), null);

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

		partyDeployer = new PartyDeployer(ethereum, "/mix/combine.json", false);
		membersDeployer = new MembersDeployer(ethereum, "/mix/combine.json", false);
		publishingDeployer = new PublishingDeployer(ethereum, "/mix/combine.json", false);

	}

	private void doAndWait(DoAndWaitOneTime action) throws InterruptedException {
		int timeOut = 0;
		if (!action.isDone()) {
			action.doIt();
			while (!action.isDone() && timeOut++ < 200)
				Thread.sleep(millis);
		}
		if(timeOut>= 200)
			System.out.println("Timeout:"+action);
	}

}
