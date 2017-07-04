package de.kueken.ethereum.party.members;

import de.kueken.ethereum.party.members.MemberRegistry.EventType;
import de.kueken.ethereum.party.members.MemberRegistry.MemberState;

/**
 * The Event Objects for the event MemberEvent(org.adridadou.ethereum.propeller.values.EthAddress mAddress,EventType eType,Integer id,String name,MemberState memberState).
 *
 */
public class EventMemberEvent_address_EventType_uint_string_MemberState{
	private org.adridadou.ethereum.propeller.values.EthAddress mAddress;
	private EventType eType;
	private Integer id;
	private String name;
	private MemberState memberState;

	public EventMemberEvent_address_EventType_uint_string_MemberState(org.adridadou.ethereum.propeller.values.EthAddress mAddress,EventType eType,Integer id,String name,MemberState memberState) {
		super();
		this.mAddress = mAddress;
		this.eType = eType;
		this.id = id;
		this.name = name;
		this.memberState = memberState;
	}

	/**
	 * Getter for mAddress.
	 * @return
	 */
	public org.adridadou.ethereum.propeller.values.EthAddress getMAddress(){
		return mAddress;
	}

	/**
	 * Getter for eType.
	 * @return
	 */
	public EventType getEType(){
		return eType;
	}

	/**
	 * Getter for id.
	 * @return
	 */
	public Integer getId(){
		return id;
	}

	/**
	 * Getter for name.
	 * @return
	 */
	public String getName(){
		return name;
	}

	/**
	 * Getter for memberState.
	 * @return
	 */
	public MemberState getMemberState(){
		return memberState;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((mAddress == null) ? 0 : mAddress.hashCode());
		result = prime * result + ((eType == null) ? 0 : eType.hashCode());
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		result = prime * result + ((memberState == null) ? 0 : memberState.hashCode());
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
		EventMemberEvent_address_EventType_uint_string_MemberState other = (EventMemberEvent_address_EventType_uint_string_MemberState) obj;
		if (mAddress == null) {
			if (other.mAddress != null)
				return false;
		} else if (!mAddress.equals(other.mAddress))
			return false;
		if (eType == null) {
			if (other.eType != null)
				return false;
		} else if (!eType.equals(other.eType))
			return false;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		if (memberState == null) {
			if (other.memberState != null)
				return false;
		} else if (!memberState.equals(other.memberState))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "EventMemberEvent_address_EventType_uint_string_MemberState [mAddress=" + mAddress + ",eType=" + eType + ",id=" + id + ",name=" + name + ",memberState=" + memberState + "]";
	}
}
