package de.kueken.ethereum.party.party;

/**
 * The Event Objects for the event DivisionChanged(org.adridadou.ethereum.propeller.values.EthAddress divisionAddress,org.adridadou.ethereum.propeller.values.EthAddress changer,Integer state).
 *
 */
public class EventDivisionChanged_address_address_uint{
	private org.adridadou.ethereum.propeller.values.EthAddress divisionAddress;
	private org.adridadou.ethereum.propeller.values.EthAddress changer;
	private Integer state;

	public EventDivisionChanged_address_address_uint(org.adridadou.ethereum.propeller.values.EthAddress divisionAddress,org.adridadou.ethereum.propeller.values.EthAddress changer,Integer state) {
		super();
		this.divisionAddress = divisionAddress;
		this.changer = changer;
		this.state = state;
	}

	/**
	 * Getter for divisionAddress.
	 * @return
	 */
	public org.adridadou.ethereum.propeller.values.EthAddress getDivisionAddress(){
		return divisionAddress;
	}

	/**
	 * Getter for changer.
	 * @return
	 */
	public org.adridadou.ethereum.propeller.values.EthAddress getChanger(){
		return changer;
	}

	/**
	 * Getter for state.
	 * @return
	 */
	public Integer getState(){
		return state;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((divisionAddress == null) ? 0 : divisionAddress.hashCode());
		result = prime * result + ((changer == null) ? 0 : changer.hashCode());
		result = prime * result + ((state == null) ? 0 : state.hashCode());
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
		EventDivisionChanged_address_address_uint other = (EventDivisionChanged_address_address_uint) obj;
		if (divisionAddress == null) {
			if (other.divisionAddress != null)
				return false;
		} else if (!divisionAddress.equals(other.divisionAddress))
			return false;
		if (changer == null) {
			if (other.changer != null)
				return false;
		} else if (!changer.equals(other.changer))
			return false;
		if (state == null) {
			if (other.state != null)
				return false;
		} else if (!state.equals(other.state))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "EventDivisionChanged_address_address_uint [divisionAddress=" + divisionAddress + ",changer=" + changer + ",state=" + state + "]";
	}
}
