package de.kueken.ethereum.party.party;

/**
 * The Event Objects for the event ConstiutionChange().
 *
 */
public class EventConstiutionChange{

	public EventConstiutionChange() {
		super();
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
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
		EventConstiutionChange other = (EventConstiutionChange) obj;
		return true;
	}

	@Override
	public String toString() {
		return "EventConstiutionChange []";
	}
}
