package de.kueken.ethereum.party.basics;

/**
 * The Event Objects for the event OwnerRemoved(org.adridadou.ethereum.propeller.values.EthAddress oldOwner).
 *
 */
public class EventOwnerRemoved_address{
	private org.adridadou.ethereum.propeller.values.EthAddress oldOwner;

	public EventOwnerRemoved_address(org.adridadou.ethereum.propeller.values.EthAddress oldOwner) {
		super();
		this.oldOwner = oldOwner;
	}

	/**
	 * Getter for oldOwner.
	 * @return
	 */
	public org.adridadou.ethereum.propeller.values.EthAddress getOldOwner(){
		return oldOwner;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((oldOwner == null) ? 0 : oldOwner.hashCode());
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
		EventOwnerRemoved_address other = (EventOwnerRemoved_address) obj;
		if (oldOwner == null) {
			if (other.oldOwner != null)
				return false;
		} else if (!oldOwner.equals(other.oldOwner))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "EventOwnerRemoved_address [oldOwner=" + oldOwner + "]";
	}
}
