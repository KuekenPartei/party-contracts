package de.kueken.ethereum.party.party;

/**
 * The Event Objects for the event FunctionMemberChange(org.adridadou.ethereum.propeller.values.EthAddress oldMember,Integer functionId,org.adridadou.ethereum.propeller.values.EthAddress newMember).
 *
 */
public class EventFunctionMemberChange_address_uint_address{
	private org.adridadou.ethereum.propeller.values.EthAddress oldMember;
	private Integer functionId;
	private org.adridadou.ethereum.propeller.values.EthAddress newMember;

	public EventFunctionMemberChange_address_uint_address(org.adridadou.ethereum.propeller.values.EthAddress oldMember,Integer functionId,org.adridadou.ethereum.propeller.values.EthAddress newMember) {
		super();
		this.oldMember = oldMember;
		this.functionId = functionId;
		this.newMember = newMember;
	}

	/**
	 * Getter for oldMember.
	 * @return
	 */
	public org.adridadou.ethereum.propeller.values.EthAddress getOldMember(){
		return oldMember;
	}

	/**
	 * Getter for functionId.
	 * @return
	 */
	public Integer getFunctionId(){
		return functionId;
	}

	/**
	 * Getter for newMember.
	 * @return
	 */
	public org.adridadou.ethereum.propeller.values.EthAddress getNewMember(){
		return newMember;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((oldMember == null) ? 0 : oldMember.hashCode());
		result = prime * result + ((functionId == null) ? 0 : functionId.hashCode());
		result = prime * result + ((newMember == null) ? 0 : newMember.hashCode());
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
		EventFunctionMemberChange_address_uint_address other = (EventFunctionMemberChange_address_uint_address) obj;
		if (oldMember == null) {
			if (other.oldMember != null)
				return false;
		} else if (!oldMember.equals(other.oldMember))
			return false;
		if (functionId == null) {
			if (other.functionId != null)
				return false;
		} else if (!functionId.equals(other.functionId))
			return false;
		if (newMember == null) {
			if (other.newMember != null)
				return false;
		} else if (!newMember.equals(other.newMember))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "EventFunctionMemberChange_address_uint_address [oldMember=" + oldMember + ",functionId=" + functionId + ",newMember=" + newMember + "]";
	}
}
