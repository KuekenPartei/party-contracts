/**
 * 
 */
package de.kueken.ethereum.party.deployer;

import java.util.ArrayList;
import java.util.List;

import de.kueken.ethereum.party.members.MemberRegistry;
import de.kueken.ethereum.party.party.Organ;
import de.kueken.ethereum.party.party.Party;
import de.kueken.ethereum.party.publishing.BlogRegistry;

/**
 * @author urs
 *
 */
public class PartyModel {
	private Party party;
	private MemberRegistry memberRegistry;
	private BlogRegistry blogRegistry;
	private List<Organ> organs = new ArrayList<Organ>();
	public Party getParty() {
		return party;
	}
	public void setParty(Party party) {
		this.party = party;
	}
	public MemberRegistry getMemberRegistry() {
		return memberRegistry;
	}
	public void setMemberRegistry(MemberRegistry memberRegistry) {
		this.memberRegistry = memberRegistry;
	}
	public BlogRegistry getBlogRegistry() {
		return blogRegistry;
	}
	public void setBlogRegistry(BlogRegistry blogRegistry) {
		this.blogRegistry = blogRegistry;
	}
	public List<Organ> getOrgans() {
		return organs;
	}
}
