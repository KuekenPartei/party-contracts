package de.kueken.ethereum.party.publishing;

/**
 * The Event Objects for the event NewBlog(Integer index,String name,org.adridadou.ethereum.propeller.values.EthAddress blogAddress).
 *
 */
public class EventNewBlog_uint_string_address{
	private Integer index;
	private String name;
	private org.adridadou.ethereum.propeller.values.EthAddress blogAddress;

	public EventNewBlog_uint_string_address(Integer index,String name,org.adridadou.ethereum.propeller.values.EthAddress blogAddress) {
		super();
		this.index = index;
		this.name = name;
		this.blogAddress = blogAddress;
	}

	/**
	 * Getter for index.
	 * @return
	 */
	public Integer getIndex(){
		return index;
	}

	/**
	 * Getter for name.
	 * @return
	 */
	public String getName(){
		return name;
	}

	/**
	 * Getter for blogAddress.
	 * @return
	 */
	public org.adridadou.ethereum.propeller.values.EthAddress getBlogAddress(){
		return blogAddress;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((index == null) ? 0 : index.hashCode());
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		result = prime * result + ((blogAddress == null) ? 0 : blogAddress.hashCode());
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
		EventNewBlog_uint_string_address other = (EventNewBlog_uint_string_address) obj;
		if (index == null) {
			if (other.index != null)
				return false;
		} else if (!index.equals(other.index))
			return false;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		if (blogAddress == null) {
			if (other.blogAddress != null)
				return false;
		} else if (!blogAddress.equals(other.blogAddress))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "EventNewBlog_uint_string_address [index=" + index + ",name=" + name + ",blogAddress=" + blogAddress + "]";
	}
}
