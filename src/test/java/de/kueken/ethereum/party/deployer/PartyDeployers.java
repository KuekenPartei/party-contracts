/**
 * 
 */
package de.kueken.ethereum.party.deployer;

import de.kueken.ethereum.party.EthereumInstance;

/**
 * @author urs
 *
 */
public class PartyDeployers {
	public static PartyDeployer PARTYDEPLOYER = new PartyDeployer(EthereumInstance.getInstance().getEthereum(),
			"/mix/combine.json", true);
	public static MembersDeployer MEMBERSDEPLOYER = new MembersDeployer(EthereumInstance.getInstance().getEthereum(),
			"/mix/combine.json", true);
	public static PublishingDeployer PUBLISHINGDEPLOYER = new PublishingDeployer(
			EthereumInstance.getInstance().getEthereum(), "/mix/combine.json", true);
	public static VotingDeployer	VOTINGDEPLOYER = new VotingDeployer(EthereumInstance.getInstance().getEthereum(),"/mix/combine.json",true);

}
