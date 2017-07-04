package de.kueken.ethereum.party.basics;

/**
 * The dataholder for the struct MultiownedPendingState.
 *
 */
public class MultiownedPendingState{
	private Integer yetNeeded;
	private Integer ownersDone;
	private Integer index;

	public MultiownedPendingState(Integer yetNeeded,Integer ownersDone,Integer index) {
		super();
		this.yetNeeded = yetNeeded;
		this.ownersDone = ownersDone;
		this.index = index;
	}

	/**
	 * Getter for yetNeeded.
	 * @return
	 */
	public Integer getYetNeeded(){
		return yetNeeded;
	}

	/**
	 * Getter for ownersDone.
	 * @return
	 */
	public Integer getOwnersDone(){
		return ownersDone;
	}

	/**
	 * Getter for index.
	 * @return
	 */
	public Integer getIndex(){
		return index;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((yetNeeded == null) ? 0 : yetNeeded.hashCode());
		result = prime * result + ((ownersDone == null) ? 0 : ownersDone.hashCode());
		result = prime * result + ((index == null) ? 0 : index.hashCode());
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
		MultiownedPendingState other = (MultiownedPendingState) obj;
		if (yetNeeded == null) {
			if (other.yetNeeded != null)
				return false;
		} else if (!yetNeeded.equals(other.yetNeeded))
			return false;
		if (ownersDone == null) {
			if (other.ownersDone != null)
				return false;
		} else if (!ownersDone.equals(other.ownersDone))
			return false;
		if (index == null) {
			if (other.index != null)
				return false;
		} else if (!index.equals(other.index))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "MultiownedPendingState [yetNeeded=" + yetNeeded + ",ownersDone=" + ownersDone + ",index=" + index + "]";
	}
}
