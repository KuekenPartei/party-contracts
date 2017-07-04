package de.kueken.ethereum.party.basics;

/**
 * The Event Objects for the event OwnerAdded(org.adridadou.ethereum.propeller.values.EthAddress newOwner).
 *
 */
public class EventOwnerAdded_address{
	private org.adridadou.ethereum.propeller.values.EthAddress newOwner;

	public EventOwnerAdded_address(org.adridadou.ethereum.propeller.values.EthAddress newOwner) {
		super();
		this.newOwner = newOwner;
	}

	/**
	 * Getter for newOwner.
	 * @return
	 */
	public org.adridadou.ethereum.propeller.values.EthAddress getNewOwner(){
		return newOwner;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((newOwner == null) ? 0 : newOwner.hashCode());
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
		EventOwnerAdded_address other = (EventOwnerAdded_address) obj;
		if (newOwner == null) {
			if (other.newOwner != null)
				return false;
		} else if (!newOwner.equals(other.newOwner))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "EventOwnerAdded_address [newOwner=" + newOwner + "]";
	}
}
