package de.kueken.ethereum.party.basics;

/**
 * The Event Objects for the event RequirementChanged(Integer newRequirement).
 *
 */
public class EventRequirementChanged_uint{
	private Integer newRequirement;

	public EventRequirementChanged_uint(Integer newRequirement) {
		super();
		this.newRequirement = newRequirement;
	}

	/**
	 * Getter for newRequirement.
	 * @return
	 */
	public Integer getNewRequirement(){
		return newRequirement;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((newRequirement == null) ? 0 : newRequirement.hashCode());
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
		EventRequirementChanged_uint other = (EventRequirementChanged_uint) obj;
		if (newRequirement == null) {
			if (other.newRequirement != null)
				return false;
		} else if (!newRequirement.equals(other.newRequirement))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "EventRequirementChanged_uint [newRequirement=" + newRequirement + "]";
	}
}
