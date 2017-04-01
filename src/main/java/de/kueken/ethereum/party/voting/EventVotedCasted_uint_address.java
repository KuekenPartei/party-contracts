package de.kueken.ethereum.party.voting;

import de.kueken.ethereum.party.voting.PublicBallot.*;

/**
 * The Event Objects for the event VotedCasted(Integer proposal,org.adridadou.ethereum.values.EthAddress sender).
 *
 */
public class EventVotedCasted_uint_address{
	private Integer proposal;
	private org.adridadou.ethereum.values.EthAddress sender;

	public EventVotedCasted_uint_address(Integer proposal,org.adridadou.ethereum.values.EthAddress sender) {
		super();
		this.proposal = proposal;
		this.sender = sender;
	}

	/**
	 * Getter for proposal.
	 * @return
	 */
	public Integer getProposal(){
		return proposal;
	}

	/**
	 * Getter for sender.
	 * @return
	 */
	public org.adridadou.ethereum.values.EthAddress getSender(){
		return sender;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((proposal == null) ? 0 : proposal.hashCode());
		result = prime * result + ((sender == null) ? 0 : sender.hashCode());
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
		EventVotedCasted_uint_address other = (EventVotedCasted_uint_address) obj;
		if (proposal == null) {
			if (other.proposal != null)
				return false;
		} else if (!proposal.equals(other.proposal))
			return false;
		if (sender == null) {
			if (other.sender != null)
				return false;
		} else if (!sender.equals(other.sender))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "EventVotedCasted_uint_address [proposal=" + proposal + ",sender=" + sender + "]";
	}
}
