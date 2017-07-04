package de.kueken.ethereum.party.members;

import de.kueken.ethereum.party.members.MemberRegistry.MemberState;

/**
 * The dataholder for the struct MemberRegistryMember.
 *
 */
public class MemberRegistryMember{
	private String name;
	private Integer id;
	private org.adridadou.ethereum.propeller.values.EthAddress member;
	private MemberState state;

	public MemberRegistryMember(String name,Integer id,org.adridadou.ethereum.propeller.values.EthAddress member,MemberState state) {
		super();
		this.name = name;
		this.id = id;
		this.member = member;
		this.state = state;
	}

	/**
	 * Getter for name.
	 * @return
	 */
	public String getName(){
		return name;
	}

	/**
	 * Getter for id.
	 * @return
	 */
	public Integer getId(){
		return id;
	}

	/**
	 * Getter for member.
	 * @return
	 */
	public org.adridadou.ethereum.propeller.values.EthAddress getMember(){
		return member;
	}

	/**
	 * Getter for state.
	 * @return
	 */
	public MemberState getState(){
		return state;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((member == null) ? 0 : member.hashCode());
		result = prime * result + ((state == null) ? 0 : state.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		MemberRegistryMember other = (MemberRegistryMember) obj;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		if (member == null) {
			if (other.member != null)
				return false;
		} else if (!member.equals(other.member))
			return false;
		if (state == null) {
			if (other.state != null)
				return false;
		} else if (!state.equals(other.state))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "MemberRegistryMember [name=" + name + ",id=" + id + ",member=" + member + ",state=" + state + "]";
	}
}
