package de.kueken.ethereum.party.basics;

import de.kueken.ethereum.party.basics.Multiowned.*;

/**
 * The Event Objects for the event OwnerChanged(org.adridadou.ethereum.values.EthAddress oldOwner,org.adridadou.ethereum.values.EthAddress newOwner).
 *
 */
public class EventOwnerChanged_address_address{
	private org.adridadou.ethereum.values.EthAddress oldOwner;
	private org.adridadou.ethereum.values.EthAddress newOwner;

	public EventOwnerChanged_address_address(org.adridadou.ethereum.values.EthAddress oldOwner,org.adridadou.ethereum.values.EthAddress newOwner) {
		super();
		this.oldOwner = oldOwner;
		this.newOwner = newOwner;
	}

	/**
	 * Getter for oldOwner.
	 * @return
	 */
	public org.adridadou.ethereum.values.EthAddress getOldOwner(){
		return oldOwner;
	}

	/**
	 * Getter for newOwner.
	 * @return
	 */
	public org.adridadou.ethereum.values.EthAddress getNewOwner(){
		return newOwner;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((oldOwner == null) ? 0 : oldOwner.hashCode());
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
		EventOwnerChanged_address_address other = (EventOwnerChanged_address_address) obj;
		if (oldOwner == null) {
			if (other.oldOwner != null)
				return false;
		} else if (!oldOwner.equals(other.oldOwner))
			return false;
		if (newOwner == null) {
			if (other.newOwner != null)
				return false;
		} else if (!newOwner.equals(other.newOwner))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "EventOwnerChanged_address_address [oldOwner=" + oldOwner + ",newOwner=" + newOwner + "]";
	}
}
