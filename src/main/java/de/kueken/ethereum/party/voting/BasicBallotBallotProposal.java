package de.kueken.ethereum.party.voting;

/**
 * The dataholder for the struct BasicBallotBallotProposal.
 *
 */
public class BasicBallotBallotProposal{
	private String name;
	private String hash;
	private String url;
	private org.adridadou.ethereum.propeller.values.EthAddress member;

	public BasicBallotBallotProposal(String name,String hash,String url,org.adridadou.ethereum.propeller.values.EthAddress member) {
		super();
		this.name = name;
		this.hash = hash;
		this.url = url;
		this.member = member;
	}

	/**
	 * Getter for name.
	 * @return
	 */
	public String getName(){
		return name;
	}

	/**
	 * Getter for hash.
	 * @return
	 */
	public String getHash(){
		return hash;
	}

	/**
	 * Getter for url.
	 * @return
	 */
	public String getUrl(){
		return url;
	}

	/**
	 * Getter for member.
	 * @return
	 */
	public org.adridadou.ethereum.propeller.values.EthAddress getMember(){
		return member;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		result = prime * result + ((hash == null) ? 0 : hash.hashCode());
		result = prime * result + ((url == null) ? 0 : url.hashCode());
		result = prime * result + ((member == null) ? 0 : member.hashCode());
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
		BasicBallotBallotProposal other = (BasicBallotBallotProposal) obj;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		if (hash == null) {
			if (other.hash != null)
				return false;
		} else if (!hash.equals(other.hash))
			return false;
		if (url == null) {
			if (other.url != null)
				return false;
		} else if (!url.equals(other.url))
			return false;
		if (member == null) {
			if (other.member != null)
				return false;
		} else if (!member.equals(other.member))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "BasicBallotBallotProposal [name=" + name + ",hash=" + hash + ",url=" + url + ",member=" + member + "]";
	}
}
