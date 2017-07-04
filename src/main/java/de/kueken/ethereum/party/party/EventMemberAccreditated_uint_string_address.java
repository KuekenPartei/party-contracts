package de.kueken.ethereum.party.party;

/**
 * The Event Objects for the event MemberAccreditated(Integer memberId,String memberName,org.adridadou.ethereum.propeller.values.EthAddress memberAddress).
 *
 */
public class EventMemberAccreditated_uint_string_address{
	private Integer memberId;
	private String memberName;
	private org.adridadou.ethereum.propeller.values.EthAddress memberAddress;

	public EventMemberAccreditated_uint_string_address(Integer memberId,String memberName,org.adridadou.ethereum.propeller.values.EthAddress memberAddress) {
		super();
		this.memberId = memberId;
		this.memberName = memberName;
		this.memberAddress = memberAddress;
	}

	/**
	 * Getter for memberId.
	 * @return
	 */
	public Integer getMemberId(){
		return memberId;
	}

	/**
	 * Getter for memberName.
	 * @return
	 */
	public String getMemberName(){
		return memberName;
	}

	/**
	 * Getter for memberAddress.
	 * @return
	 */
	public org.adridadou.ethereum.propeller.values.EthAddress getMemberAddress(){
		return memberAddress;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((memberId == null) ? 0 : memberId.hashCode());
		result = prime * result + ((memberName == null) ? 0 : memberName.hashCode());
		result = prime * result + ((memberAddress == null) ? 0 : memberAddress.hashCode());
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
		EventMemberAccreditated_uint_string_address other = (EventMemberAccreditated_uint_string_address) obj;
		if (memberId == null) {
			if (other.memberId != null)
				return false;
		} else if (!memberId.equals(other.memberId))
			return false;
		if (memberName == null) {
			if (other.memberName != null)
				return false;
		} else if (!memberName.equals(other.memberName))
			return false;
		if (memberAddress == null) {
			if (other.memberAddress != null)
				return false;
		} else if (!memberAddress.equals(other.memberAddress))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "EventMemberAccreditated_uint_string_address [memberId=" + memberId + ",memberName=" + memberName + ",memberAddress=" + memberAddress + "]";
	}
}
