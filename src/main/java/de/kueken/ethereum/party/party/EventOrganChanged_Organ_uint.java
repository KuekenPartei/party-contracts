package de.kueken.ethereum.party.party;

/**
 * The Event Objects for the event OrganChanged(org.adridadou.ethereum.propeller.values.EthAddress _organ,Integer _changeType).
 *
 */
public class EventOrganChanged_Organ_uint{
	private org.adridadou.ethereum.propeller.values.EthAddress _organ;
	private Integer _changeType;

	public EventOrganChanged_Organ_uint(org.adridadou.ethereum.propeller.values.EthAddress _organ,Integer _changeType) {
		super();
		this._organ = _organ;
		this._changeType = _changeType;
	}

	/**
	 * Getter for _organ.
	 * @return
	 */
	public org.adridadou.ethereum.propeller.values.EthAddress get_organ(){
		return _organ;
	}

	/**
	 * Getter for _changeType.
	 * @return
	 */
	public Integer get_changeType(){
		return _changeType;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((_organ == null) ? 0 : _organ.hashCode());
		result = prime * result + ((_changeType == null) ? 0 : _changeType.hashCode());
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
		EventOrganChanged_Organ_uint other = (EventOrganChanged_Organ_uint) obj;
		if (_organ == null) {
			if (other._organ != null)
				return false;
		} else if (!_organ.equals(other._organ))
			return false;
		if (_changeType == null) {
			if (other._changeType != null)
				return false;
		} else if (!_changeType.equals(other._changeType))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "EventOrganChanged_Organ_uint [_organ=" + _organ + ",_changeType=" + _changeType + "]";
	}
}
