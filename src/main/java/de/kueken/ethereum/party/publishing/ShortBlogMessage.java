package de.kueken.ethereum.party.publishing;

import de.kueken.ethereum.party.publishing.ShortBlog.*;

/**
 * The dataholder for the struct ShortBlogMessage.
 *
 */
public class ShortBlogMessage{
	private String message;
	private Integer date;
	private Integer id;
	private org.adridadou.ethereum.values.EthAddress sender;
	private Integer blockNumber;
	private String hashValue;
	private String externalResource;

	public ShortBlogMessage(String message,Integer date,Integer id,org.adridadou.ethereum.values.EthAddress sender,Integer blockNumber,String hashValue,String externalResource) {
		super();
		this.message = message;
		this.date = date;
		this.id = id;
		this.sender = sender;
		this.blockNumber = blockNumber;
		this.hashValue = hashValue;
		this.externalResource = externalResource;
	}

	/**
	 * Getter for message.
	 * @return
	 */
	public String getMessage(){
		return message;
	}

	/**
	 * Getter for date.
	 * @return
	 */
	public Integer getDate(){
		return date;
	}

	/**
	 * Getter for id.
	 * @return
	 */
	public Integer getId(){
		return id;
	}

	/**
	 * Getter for sender.
	 * @return
	 */
	public org.adridadou.ethereum.values.EthAddress getSender(){
		return sender;
	}

	/**
	 * Getter for blockNumber.
	 * @return
	 */
	public Integer getBlockNumber(){
		return blockNumber;
	}

	/**
	 * Getter for hashValue.
	 * @return
	 */
	public String getHashValue(){
		return hashValue;
	}

	/**
	 * Getter for externalResource.
	 * @return
	 */
	public String getExternalResource(){
		return externalResource;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((message == null) ? 0 : message.hashCode());
		result = prime * result + ((date == null) ? 0 : date.hashCode());
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((sender == null) ? 0 : sender.hashCode());
		result = prime * result + ((blockNumber == null) ? 0 : blockNumber.hashCode());
		result = prime * result + ((hashValue == null) ? 0 : hashValue.hashCode());
		result = prime * result + ((externalResource == null) ? 0 : externalResource.hashCode());
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
		ShortBlogMessage other = (ShortBlogMessage) obj;
		if (message == null) {
			if (other.message != null)
				return false;
		} else if (!message.equals(other.message))
			return false;
		if (date == null) {
			if (other.date != null)
				return false;
		} else if (!date.equals(other.date))
			return false;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		if (sender == null) {
			if (other.sender != null)
				return false;
		} else if (!sender.equals(other.sender))
			return false;
		if (blockNumber == null) {
			if (other.blockNumber != null)
				return false;
		} else if (!blockNumber.equals(other.blockNumber))
			return false;
		if (hashValue == null) {
			if (other.hashValue != null)
				return false;
		} else if (!hashValue.equals(other.hashValue))
			return false;
		if (externalResource == null) {
			if (other.externalResource != null)
				return false;
		} else if (!externalResource.equals(other.externalResource))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "ShortBlogMessage [message=" + message + ",date=" + date + ",id=" + id + ",sender=" + sender + ",blockNumber=" + blockNumber + ",hashValue=" + hashValue + ",externalResource=" + externalResource + "]";
	}
}
