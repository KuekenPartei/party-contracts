package de.kueken.ethereum.party.basics;

/**
 * The Event Objects for the event Confirmation(org.adridadou.ethereum.propeller.values.EthAddress owner,Byte[] operation).
 *
 */
public class EventConfirmation_address_bytes32{
	private org.adridadou.ethereum.propeller.values.EthAddress owner;
	private Byte[] operation;

	public EventConfirmation_address_bytes32(org.adridadou.ethereum.propeller.values.EthAddress owner,Byte[] operation) {
		super();
		this.owner = owner;
		this.operation = operation;
	}

	/**
	 * Getter for owner.
	 * @return
	 */
	public org.adridadou.ethereum.propeller.values.EthAddress getOwner(){
		return owner;
	}

	/**
	 * Getter for operation.
	 * @return
	 */
	public Byte[] getOperation(){
		return operation;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((owner == null) ? 0 : owner.hashCode());
		result = prime * result + ((operation == null) ? 0 : operation.hashCode());
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
		EventConfirmation_address_bytes32 other = (EventConfirmation_address_bytes32) obj;
		if (owner == null) {
			if (other.owner != null)
				return false;
		} else if (!owner.equals(other.owner))
			return false;
		if (operation == null) {
			if (other.operation != null)
				return false;
		} else if (!operation.equals(other.operation))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "EventConfirmation_address_bytes32 [owner=" + owner + ",operation=" + operation + "]";
	}
}
