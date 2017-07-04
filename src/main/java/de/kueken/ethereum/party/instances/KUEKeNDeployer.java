/**
 * 
 */
package de.kueken.ethereum.party.instances;

import java.io.File;
import java.io.IOException;
import java.math.BigInteger;
import java.util.concurrent.ExecutionException;

import org.adridadou.ethereum.propeller.EthereumFacade;
import org.adridadou.ethereum.propeller.keystore.AccountProvider;
import org.adridadou.ethereum.propeller.keystore.FileSecureKey;
import org.adridadou.ethereum.propeller.keystore.SecureKey;
import org.adridadou.ethereum.propeller.values.EthAccount;
import org.adridadou.ethereum.propeller.values.EthAddress;
import org.adridadou.ethereum.propeller.values.EthValue;
import org.apache.commons.cli.CommandLine;
import org.apache.commons.cli.CommandLineParser;
import org.apache.commons.cli.DefaultParser;
import org.apache.commons.cli.HelpFormatter;
import org.apache.commons.cli.Option;
import org.apache.commons.cli.OptionGroup;
import org.apache.commons.cli.Options;
import org.apache.commons.cli.ParseException;
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
import de.kueken.ethereum.party.party.OrganFunction;
import de.kueken.ethereum.party.party.Party;
import de.kueken.ethereum.party.publishing.BlogRegistry;
import de.kueken.ethereum.party.publishing.ShortBlog;

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
		Options options = createOptions();
		CommandLineParser parser = new DefaultParser();
		try {
			CommandLine commandLine = parser.parse(options, args);
			if (commandLine.hasOption("h")) {
				printHelp(options);
				return;
			}

			String partyAddress = null;
			String senderKey = null;
			String senderPass = null;
			if (commandLine.hasOption("pa"))
				partyAddress = commandLine.getOptionValue("pa");
			if (commandLine.hasOption("sk"))
				senderKey = commandLine.getOptionValue("sk");
			if (commandLine.hasOption("sp"))
				senderPass = commandLine.getOptionValue("sp");

			System.out.println("party:" + partyAddress + " key:" + senderKey);
			if (commandLine.hasOption("co") || commandLine.hasOption("cs"))
				if (!commandLine.hasOption("pa")) {
					System.out.println("The party address must be set.");
					return;
				}

			//EthereumInstance.getInstance().getEthereum().observeEvents(abi, address, eventName, cls)
			
			try {
				KUEKeNDeployer kueKeNDeployer = new KUEKeNDeployer();
				kueKeNDeployer.init(senderKey, senderPass, partyAddress);

				if (commandLine.hasOption("co")) {
					String organName = commandLine.getOptionValue("co");
					// kueKeNDeployer.createOrgan(organName);
				} else if (commandLine.hasOption("cp")) {
					String organName = commandLine.getOptionValue("cp");
					if (organName == null)
						organName = "KUEKeN";
					kueKeNDeployer.deployBundesPartei(organName);
				} else if (commandLine.hasOption("cs")) {
					String organName = commandLine.getOptionValue("cs");
					if (organName == null)
						organName = "KUEKeN Berlin";
					kueKeNDeployer.deploySubDivision(organName);
				}
				kueKeNDeployer.reportDeployment();
			} catch (IOException e) {
				e.printStackTrace();
			} catch (InterruptedException e) {
				e.printStackTrace();
			} catch (ExecutionException e) {
				e.printStackTrace();
			}

		} catch (ParseException e1) {
			System.out.println(e1.getMessage());
			printHelp(options);
			return;
		}
//		EthereumInstance.getInstance().getEthereum().shutdown();
	}

	private void deploySubDivision(String organName) throws IOException, InterruptedException, ExecutionException {
		DeployDuo<Party> deploySubDivision = deploySubDivision(organName, party.contractInstance.subDivisionCount(),
				party);
		partyInfo(deploySubDivision);
	}

	/**
	 * @param options
	 */
	private static void printHelp(Options options) {
		System.out.println("-DEthereumFacadeProvider=" + System.getProperty("EthereumFacadeProvider") + "\n\n");

		StringBuffer buffer = new StringBuffer();
		buffer.append("change the ethereum client via -DEthereumFacadeProvider=<type>\n")//
				.append("type : main - the main net\n")//
				.append("       test - the test net\n")//
				.append("       ropsten - the ropsten net\n")//
				.append("       private - the private net\n")//
				.append("       InfuraRopsten - the ropsten net via Infrua\n")//
				.append("       InfuraMain - the main net via Infrua\n")//
				.append("           -DapiKey=<key> - the the api key for the service\n")//
				.append("       rpc - connect via rpc\n")//
				.append("          -Drpc-url=<url> - the url of the rpc server\n")//
				.append("          -Dchain-id=<id> - the chain id (0 for the main chain and 3 for ropsten)\n")//
				.append("\n").append("Unlock a key as sender via -D\n")//
				.append("-DsenderKey=<filepath> path to the private key\n")//
				.append("-DsenderPass=<passphrase> passphrase for the private key\n\n");

		HelpFormatter formatter = new HelpFormatter();
		String header = "\nA deployer and manager for the party dao. (c) KUEKeN 2017\n";
		String footer = "\nexample: \n\n" + buffer.toString();
		formatter.printHelp("KUEKeNDeployer", header, options, footer, true);
	}

	/**
	 * @return
	 * 
	 */
	private static Options createOptions() {
		Options options = new Options();
		// options.addOption("h", "help", false, "Show usage");

		// options.addOption(Option.builder("dc")
		// .desc("deployes the contracts on the blockchain, can be one of
		// [party,subdivision,organ]")
		// .longOpt("deployContracts")
		// .required()
		// .hasArg()
		// .numberOfArgs(1)
		// .optionalArg(true)
		// .argName("contract type")
		// .valueSeparator(' ')
		// .build());
		OptionGroup keyOptionGroup = new OptionGroup();
		options.addOption(Option.builder("sk").desc("set the sender key, a file name and path").longOpt("senderKey")
				.hasArg().numberOfArgs(1).build());
		options.addOption(Option.builder("sp").desc("the pass of the key of the sender").longOpt("senderPass").hasArg()
				.numberOfArgs(1).build());

		keyOptionGroup.addOption(Option.builder("pa")//
				.desc("party address")//
				.longOpt("partyAddress")//
				.required(false)//
				.hasArg()//
				.argName("address")//
				.build());

		OptionGroup helpOptionGroup = new OptionGroup();
		helpOptionGroup.addOption(Option.builder("h").desc("show help and usage").hasArg(false).build());

		OptionGroup actionOptionGroup = new OptionGroup();
		actionOptionGroup.setRequired(true);
		actionOptionGroup.addOption(Option.builder("co")//
				.desc("Creates a new organ with name")//
				.longOpt("createOrgan")//
				.required(false)//
				.hasArg(true)//
				.argName("organName")//
				.build());
		actionOptionGroup.addOption(Option//
				.builder("cp")//
				.desc("Creates a new party with name")//
				.longOpt("createParty")//
				.required(false)//
				.hasArg()//
				.argName("partyName")//
				.build());
		actionOptionGroup.addOption(Option//
				.builder("cs")//
				.desc("Creates a new sub division with name")//
				.longOpt("createSubdivision")//
				.required(false)//
				.hasArg(true)//
				.argName("partyName")//
				.build());
		actionOptionGroup.addOption(Option//
				.builder("am")//
				.desc("Adds a manager address to all party contracts.")//
				.longOpt("addManager")//
				.required(false)//
				.hasArg(true)//
				.argName("managerAddress")//
				.build());

		options.addOptionGroup(actionOptionGroup);
		options.addOptionGroup(helpOptionGroup);
		options.addOptionGroup(keyOptionGroup);
		return options;
	}

	public void reportDeployment() throws IOException, InterruptedException, ExecutionException {
		System.out.println("\nDeployment done.\n");

		partyInfo(party);
		System.out.println("Party " + info(party));
		printOrganInfo(foundationConference.contractInstance);
		printOrganInfo(buvo.contractInstance);

		System.out.println("blog registry: " + info(blogRegistry));
		System.out.println("blog count: " + blogRegistry.contractInstance.blogCount());
		for (int i = 0; i < blogRegistry.contractInstance.blogCount(); i++) {
			EthAddress blogs = blogRegistry.contractInstance.blogs(i);
			try {
				ShortBlog shortBlog = publishingDeployer.createShortBlogProxy(sender, blogs);
				System.out.println("  "+shortBlog.name() + " " + i);
			} catch (IOException e) {
				e.printStackTrace();
			} catch (InterruptedException e) {
				e.printStackTrace();
			} catch (ExecutionException e) {
				e.printStackTrace();
			}

		}
		System.out.println("member registry" + info(memberRegistry));

		if (startBalance != null)
			System.out.println(
					"price of deployment: " + startBalance.subtract(ethereum.getBalance(sender).inWei()) + " wei");

		System.out.println("\n\ncontracts = {};");
		System.out.println(
				"contracts[\'BlogRegistry\'].address = \"" + blogRegistry.contractAddress.withLeading0x() + "\";");
		System.out.println(
				"contracts[\'MemberRegistry\'].address = \"" + memberRegistry.contractAddress.withLeading0x() + "\";");
		System.out.println("contracts[\'FoundationConference\'].address = \""
				+ foundationConference.contractAddress.withLeading0x() + "\";");
		System.out.println("contracts[\'Organ\'].address = \"" + buvo.contractAddress.withLeading0x() + "\";");
		System.out.println("contracts[\'KUEKeNParty\'].address = \"" + party.contractAddress.withLeading0x() + "\";"); // 'latest'

	}

	/**
	 * @param organ 
	 * @throws ExecutionException 
	 * @throws InterruptedException 
	 * @throws IOException 
	 * 
	 */
	private void printOrganInfo(Organ organ) throws IOException, InterruptedException, ExecutionException {
		System.out.println("\nname: " + organ.getOrganName());
		System.out.println(": " + info(foundationConference));
		System.out.println("functions: " + organ.lastFunctionId() + " short blog: "
				+ organ.blogRegistry());
		for (int i = 0; i < organ.lastFunctionId(); i++) {
			EthAddress ethAddress = organ.getOrganFunction(i);
			OrganFunction organFunction = partyDeployer.createOrganFunctionProxy(sender, ethAddress);
			System.out.println("  "+organFunction.functionName()+"  "+organFunction.id()+" current member: "+organFunction.currentMember());
			
		}
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
				+ memberRegistry.contractInstance.isManager(party.contractAddress));
		System.out.println("Party blog registry: " + partyContract.blogregistry() + " is manager: "
				+ blogRegistry.contractInstance.isManager(party.contractAddress));

	}

	public void deployBundesPartei(String aName) throws IOException, InterruptedException, ExecutionException {
		System.out.println("deploy member registry");

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
		

		party = deployParty(aName, party);

		String aOrganName = "Gründungsveranstaltung";
		createFoundationConference(aOrganName);

		buvo = (buvo == null) ? createOrgan("BUVO", null) : createOrgan("BUVO", buvo.contractAddress);
		internalCourt = (internalCourt == null) ? createOrgan("Schiedsgericht", null)
				: createOrgan("Schiedsgericht", internalCourt.contractAddress);

		System.out.println("add organs: " + party.contractInstance.organCount());
		if (party.contractInstance.organCount() < 1)
			addOrgan(foundationConference, party.contractInstance.organCount());
		if (party.contractInstance.organCount() < 2)
			addOrgan(buvo, party.contractInstance.organCount());
		if (party.contractInstance.organCount() < 3)
			addOrgan(internalCourt, party.contractInstance.organCount());

		System.out.println("blog "
				+ blogRegistry.contractInstance.isManager(foundationConference.contractAddress));
		//
		// initalizeOrgan(foundationConference);
		// initalizeOrgan(buvo);
		// initalizeOrgan(internalCourt);

		createOrganFunction("Versammlungsleitung", "", foundationConference, 0);
		createOrganFunction("Wahlleitung", "", foundationConference, 1);
		createOrganFunction("Protokollführung", "", foundationConference, 2);

		createOrganFunction("1. Vorsizende", "", buvo, 0);
		createOrganFunction("Stellvertretener Vorsitzede", "", buvo, 1);
		createOrganFunction("Schatzmeister", "", buvo, 2);
		createOrganFunction("Stellvertretender Schatzmeister", "", buvo, 3);
		createOrganFunction("Generalsekretaer", "", buvo, 4);
		createOrganFunction("1. Stellvertretender Generalsekretaer", "", buvo, 5);
		createOrganFunction("2. Stellvertretender Generalsekretaer", "", buvo, 6);
		// deploySubDivision("KUEKeN
		// Berlin",party.contractInstance.subDivisionCount());
	}

	private void createOrganFunction(final String name, final String _constittiutionHash,
			final DeployDuo<? extends Organ> buvo2, final int index) throws InterruptedException {
		System.out.println("create: " + name + " " + index);
		doAndWait(new DoAndWaitOneTime() {

			public boolean isDone() {
				return buvo2.contractInstance.lastFunctionId() > index;
			}

			public void doIt() {
				try {
					buvo2.contractInstance.createFunction(name, _constittiutionHash).get();
				} catch (InterruptedException | ExecutionException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}

			}
		});

	}

	private DeployDuo<Party> deploySubDivision(String name, final Integer index, final DeployDuo<Party> parentParty)
			throws IOException, InterruptedException, ExecutionException {
		final DeployDuo<Party> deployParty = deployParty(name, null);
		if (parentParty != null) {
			System.out.println("set parent party to: "+parentParty.contractAddress.withLeading0x());
			doAndWait(new DoAndWaitOneTime() {

				public boolean isDone() {
					return deployParty.contractInstance.parent().equals(parentParty.contractAddress.withLeading0x())
							|| deployParty.contractInstance.parent().equals(parentParty.contractAddress.toString());
				}

				public void doIt() {
					deployParty.contractInstance.setParent(parentParty.contractAddress);

				}
			});
		}

		System.out.println("add subdivision");
		doAndWait(new DoAndWaitOneTime() {

			public boolean isDone() {
				System.out.println(deployParty.contractAddress.withLeading0x() + "-->"
						+ party.contractInstance.subDivisions(index));
				return deployParty.contractAddress
						.equals(deployParty.contractInstance.subDivisions(index))
						|| deployParty.contractAddress.toString().equals(party.contractInstance.subDivisions(index));
			}

			public void doIt() {
				party.contractInstance.addSubDivision(deployParty.contractAddress);

			}
		});
		return deployParty;
	}

	private void addOrgan(final DeployDuo<? extends Organ> organ, final int index) throws InterruptedException {
		doAndWait(new DoAndWaitOneTime() {

			public boolean isDone() {
				EthAddress organs = party.contractInstance.organs(index);

				return organ.contractAddress.equals(organs)
						|| organ.contractAddress.toString().equals(organs);
			}

			public void doIt(){
				try {
					party.contractInstance.addOrgan(organ.contractAddress).get();
				} catch (InterruptedException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				} catch (ExecutionException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}

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

		setPartyName(aName, party2);
		setBlogRegistry(party2);
		setMemberRegistry(party2);

		System.out.println("blog/member: " + party2.contractInstance.blogregistry() + " "
				+ party2.contractInstance.memberRegistry());

		addManager(blogRegistry.contractInstance, party2.contractAddress);
		addManager(memberRegistry.contractInstance, party2.contractAddress);

		partyInfo(party2);
		return party2;
	}

	/**
	 * Set the name of the party.
	 * 
	 * @param aName
	 * @param party2
	 * @throws InterruptedException
	 */
	private void setPartyName(final String aName, final DeployDuo<Party> party2) throws InterruptedException {
		doAndWait(new DoAndWaitOneTime() {

			public boolean isDone() {
					return aName.equals(party2.contractInstance.name());
			}

			public void doIt() {
				try {
					party2.contractInstance.setName(aName).get();
				} catch (InterruptedException | ExecutionException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
		});
	}

	/**
	 * Set the memberRegistry of the party.
	 * 
	 * @param party2
	 * @throws InterruptedException
	 */
	private void setMemberRegistry(final DeployDuo<Party> party2) throws InterruptedException {
		doAndWait(new DoAndWaitOneTime() {

			public boolean isDone() {
				return memberRegistry.contractAddress.equals(party2.contractInstance.memberRegistry());
			}

			public void doIt() {
				try {
					party2.contractInstance.setMemberRegistry(memberRegistry.contractAddress).get();
				} catch (InterruptedException | ExecutionException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}

			}
		});
	}

	/**
	 * Set the blogRegistry.
	 * 
	 * @param party2
	 * @throws InterruptedException
	 */
	private void setBlogRegistry(final DeployDuo<Party> party2) throws InterruptedException {
		doAndWait(new DoAndWaitOneTime() {

			public boolean isDone() {
				return (blogRegistry.contractAddress.equals(party2.contractInstance.blogregistry()));
			}

			public void doIt() {
				try {
					party2.contractInstance.setBlogregistry(blogRegistry.contractAddress).get();
				} catch (InterruptedException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				} catch (ExecutionException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}

			}
		});
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
				try {
					organ.contractInstance.initalizeOrgan().get();
				} catch (InterruptedException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				} catch (ExecutionException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
		});
		System.out.println("initalize done: " + organ.contractInstance.getOrganName() + " isActive: "
				+ organ.contractInstance.isActive() + " blog: " + organ.contractInstance.blogRegistry());
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
				return m.isManager(a);
			}

			public void doIt() {
				try {
					m.addManager(a).get();
				} catch (InterruptedException | ExecutionException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
		});
		System.out.println("manager added:" + info(new DeployDuo<Manageable>(a, m)));
	}

	private String info(DeployDuo<? extends Manageable> managable) {
		return managable.contractInstance.getClass().getSimpleName() + " address: "
				+ managable.contractAddress.withLeading0x() + "  managers:" + managable.contractInstance.mangerCount()
				+ " sender is manager:" + managable.contractInstance.isManager(sender.getAddress());
	}

	private void init(String pathname, String pass, String partyAddress)
			throws IOException, InterruptedException, ExecutionException {
		ethereum = EthereumInstance.getInstance().getEthereum();
		if (partyAddress != null && !partyAddress.isEmpty())
			party = new DeployDuo<Party>(EthAddress.of(partyAddress), null);
		String property = System.getProperty("EthereumFacadeProvider");
		// testnetProvider
		if (property != null && (property.equalsIgnoreCase("rpc") || property.equalsIgnoreCase("ropsten")
				|| property.equalsIgnoreCase("InfuraRopsten"))) {

			millis = 2000L;
		} else {
			sender = AccountProvider.fromPrivateKey((Hex.decode("3ec771c31cac8c0dba77a69e503765701d3c2bb62435888d4ffa38fed60c445c")));
			millis = 1L;
		}

		initDeloyer();

		
		try {
			if (pathname != null && !pathname.isEmpty() && sender == null) {
				sender = unlockAccount(pathname, pass);
				EthValue balance = ethereum.getBalance(sender);
				startBalance = balance.inWei();
			}
		} catch (Exception e) {
			e.printStackTrace();
			return;
		}

		if (party != null) {
			party.contractInstance = partyDeployer.createPartyProxy(sender, party.contractAddress);

			EthAddress address = party.contractInstance.memberRegistry();
			memberRegistry = new DeployDuo<MemberRegistry>(address,
					membersDeployer.createMemberRegistryProxy(sender, address));
			EthAddress address2 = party.contractInstance.blogregistry();
			blogRegistry = new DeployDuo<BlogRegistry>(address2,
					publishingDeployer.createBlogRegistryProxy(sender, address2));
			foundationConference = new DeployDuo<FoundationConference>(party.contractInstance.organs(0),
					null);
			buvo = new DeployDuo<Organ>(party.contractInstance.organs(1), null);
			internalCourt = new DeployDuo<Organ>(party.contractInstance.organs(2), null);
		}

	}

	/**
	 * 
	 */
	public void initDeloyer() {
		partyDeployer = new PartyDeployer(ethereum, "/mix/combine.json", true);
		membersDeployer = new MembersDeployer(ethereum, "/mix/combine.json", true);
		publishingDeployer = new PublishingDeployer(ethereum, "/mix/combine.json", true);
	}

	/**
	 * @param pathname
	 * @param pass
	 * @return
	 * @throws Exception
	 */
	private EthAccount unlockAccount(String pathname, String pass) throws Exception {
		SecureKey key2 = new FileSecureKey(new File(pathname));
		System.out.println("unlock key: " + pathname);
		EthAccount decode = key2.decode(pass);
		String senderAddressS = decode.getAddress().withLeading0x();
		EthValue balance = ethereum.getBalance(decode);
		System.out.println("Sender address und amount:" + senderAddressS + "->" + balance);
		return decode;
	}

	private void doAndWait(DoAndWaitOneTime action) throws InterruptedException {
		int timeOut = 0;
		if (!action.isDone()) {
			action.doIt();
			while (!action.isDone() && timeOut++ < 200)
				synchronized (this) {
					System.out.print(".");
					wait(millis);
				}
			// Thread.sleep(millis);
		}
		if (timeOut >= 200)
			System.out.println("Timeout:" + action);
	}

	public DeployDuo<Party> getParty() {
		return party;
	}

	public void setSender(EthAccount sender) {
		this.sender = sender;
	}


	public void setEthereum(EthereumFacade ethereum) {
		this.ethereum = ethereum;
	}

	public void setMillis(long millis) {
		this.millis = millis;
	}

}
