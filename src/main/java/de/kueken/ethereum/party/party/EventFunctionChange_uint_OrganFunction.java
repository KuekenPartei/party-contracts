package de.kueken.ethereum.party.party;

import de.kueken.ethereum.party.party.Organ.*;

/**
 * The Event Objects for the event FunctionChange(Integer _type,org.adridadou.ethereum.values.EthAddress _function).
 *
 */
public class EventFunctionChange_uint_OrganFunction{
	private Integer _type;
	private org.adridadou.ethereum.values.EthAddress _function;

	public EventFunctionChange_uint_OrganFunction(Integer _type,org.adridadou.ethereum.values.EthAddress _function) {
		super();
		this._type = _type;
		this._function = _function;
	}

	/**
	 * Getter for _type.
	 * @return
	 */
	public Integer get_type(){
		return _type;
	}

	/**
	 * Getter for _function.
	 * @return
	 */
	public org.adridadou.ethereum.values.EthAddress get_function(){
		return _function;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((_type == null) ? 0 : _type.hashCode());
		result = prime * result + ((_function == null) ? 0 : _function.hashCode());
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
		EventFunctionChange_uint_OrganFunction other = (EventFunctionChange_uint_OrganFunction) obj;
		if (_type == null) {
			if (other._type != null)
				return false;
		} else if (!_type.equals(other._type))
			return false;
		if (_function == null) {
			if (other._function != null)
				return false;
		} else if (!_function.equals(other._function))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "EventFunctionChange_uint_OrganFunction [_type=" + _type + ",_function=" + _function + "]";
	}
}
