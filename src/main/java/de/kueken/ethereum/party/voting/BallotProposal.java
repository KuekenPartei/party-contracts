package de.kueken.ethereum.party.voting;

import de.kueken.ethereum.party.voting.Ballot.*;

/**
 * The dataholder for the struct BallotProposal.
 *
 */
public class BallotProposal{
	private Byte[] name;
	private Integer voteCount;

	public BallotProposal(Byte[] name,Integer voteCount) {
		super();
		this.name = name;
		this.voteCount = voteCount;
	}

	/**
	 * Getter for name.
	 * @return
	 */
	public Byte[] getName(){
		return name;
	}

	/**
	 * Getter for voteCount.
	 * @return
	 */
	public Integer getVoteCount(){
		return voteCount;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		result = prime * result + ((voteCount == null) ? 0 : voteCount.hashCode());
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
		BallotProposal other = (BallotProposal) obj;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		if (voteCount == null) {
			if (other.voteCount != null)
				return false;
		} else if (!voteCount.equals(other.voteCount))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "BallotProposal [name=" + name + ",voteCount=" + voteCount + "]";
	}
}
