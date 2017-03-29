package de.kueken.ethereum.party.voting;

import de.kueken.ethereum.party.voting.PublicBallot.*;

/**
 * The Event Objects for the event VotedCasted().
 *
 */
public class EventVotedCasted{

	public EventVotedCasted() {
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
		EventVotedCasted other = (EventVotedCasted) obj;
		return true;
	}

	@Override
	public String toString() {
		return "EventVotedCasted []";
	}
}
