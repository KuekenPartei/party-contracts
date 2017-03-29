package de.kueken.ethereum.party.basics;

import de.kueken.ethereum.party.basics.Manageable.*;

/**
 * The Event Objects for the event ManagerChanged(Integer _state,org.adridadou.ethereum.values.EthAddress _address,Integer _managerCount).
 *
 */
public class EventManagerChanged_uint_address_uint{
	private Integer _state;
	private org.adridadou.ethereum.values.EthAddress _address;
	private Integer _managerCount;

	public EventManagerChanged_uint_address_uint(Integer _state,org.adridadou.ethereum.values.EthAddress _address,Integer _managerCount) {
		super();
		this._state = _state;
		this._address = _address;
		this._managerCount = _managerCount;
	}

	/**
	 * Getter for _state.
	 * @return
	 */
	public Integer get_state(){
		return _state;
	}

	/**
	 * Getter for _address.
	 * @return
	 */
	public org.adridadou.ethereum.values.EthAddress get_address(){
		return _address;
	}

	/**
	 * Getter for _managerCount.
	 * @return
	 */
	public Integer get_managerCount(){
		return _managerCount;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((_state == null) ? 0 : _state.hashCode());
		result = prime * result + ((_address == null) ? 0 : _address.hashCode());
		result = prime * result + ((_managerCount == null) ? 0 : _managerCount.hashCode());
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
		EventManagerChanged_uint_address_uint other = (EventManagerChanged_uint_address_uint) obj;
		if (_state == null) {
			if (other._state != null)
				return false;
		} else if (!_state.equals(other._state))
			return false;
		if (_address == null) {
			if (other._address != null)
				return false;
		} else if (!_address.equals(other._address))
			return false;
		if (_managerCount == null) {
			if (other._managerCount != null)
				return false;
		} else if (!_managerCount.equals(other._managerCount))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "EventManagerChanged_uint_address_uint [_state=" + _state + ",_address=" + _address + ",_managerCount=" + _managerCount + "]";
	}
}
