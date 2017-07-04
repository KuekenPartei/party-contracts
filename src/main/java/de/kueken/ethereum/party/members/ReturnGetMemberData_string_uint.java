package de.kueken.ethereum.party.members;

/**
 * The return value for the function getMemberData(org.adridadou.ethereum.propeller.values.EthAddress _address).
 *
 * see {@link MemberRegistry#getMemberData( org.adridadou.ethereum.propeller.values.EthAddress)}
 */
public class ReturnGetMemberData_string_uint{
	private String name;
	private Integer id;

	public ReturnGetMemberData_string_uint(String name,Integer id) {
		super();
		this.name = name;
		this.id = id;
	}

	/**
	 * Getter for name.
	 * @return
	 */
	public String getName(){
		return name;
	}

	/**
	 * Getter for id.
	 * @return
	 */
	public Integer getId(){
		return id;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		result = prime * result + ((id == null) ? 0 : id.hashCode());
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
		ReturnGetMemberData_string_uint other = (ReturnGetMemberData_string_uint) obj;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "ReturnGetMemberData_string_uint [name=" + name + ",id=" + id + "]";
	}
}
