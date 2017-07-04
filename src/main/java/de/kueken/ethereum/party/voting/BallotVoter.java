package de.kueken.ethereum.party.voting;

/**
 * The dataholder for the struct BallotVoter.
 *
 */
public class BallotVoter{
	private Integer weight;
	private Boolean voted;
	private org.adridadou.ethereum.propeller.values.EthAddress delegate;
	private Integer vote;

	public BallotVoter(Integer weight,Boolean voted,org.adridadou.ethereum.propeller.values.EthAddress delegate,Integer vote) {
		super();
		this.weight = weight;
		this.voted = voted;
		this.delegate = delegate;
		this.vote = vote;
	}

	/**
	 * Getter for weight.
	 * @return
	 */
	public Integer getWeight(){
		return weight;
	}

	/**
	 * Getter for voted.
	 * @return
	 */
	public Boolean getVoted(){
		return voted;
	}

	/**
	 * Getter for delegate.
	 * @return
	 */
	public org.adridadou.ethereum.propeller.values.EthAddress getDelegate(){
		return delegate;
	}

	/**
	 * Getter for vote.
	 * @return
	 */
	public Integer getVote(){
		return vote;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((weight == null) ? 0 : weight.hashCode());
		result = prime * result + ((voted == null) ? 0 : voted.hashCode());
		result = prime * result + ((delegate == null) ? 0 : delegate.hashCode());
		result = prime * result + ((vote == null) ? 0 : vote.hashCode());
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
		BallotVoter other = (BallotVoter) obj;
		if (weight == null) {
			if (other.weight != null)
				return false;
		} else if (!weight.equals(other.weight))
			return false;
		if (voted == null) {
			if (other.voted != null)
				return false;
		} else if (!voted.equals(other.voted))
			return false;
		if (delegate == null) {
			if (other.delegate != null)
				return false;
		} else if (!delegate.equals(other.delegate))
			return false;
		if (vote == null) {
			if (other.vote != null)
				return false;
		} else if (!vote.equals(other.vote))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "BallotVoter [weight=" + weight + ",voted=" + voted + ",delegate=" + delegate + ",vote=" + vote + "]";
	}
}
