package de.kueken.ethereum.party.publishing;

import de.kueken.ethereum.party.publishing.ShortBlog.*;

/**
 * The Event Objects for the event NewMessage(String message,Integer messageId,org.adridadou.ethereum.values.EthAddress messageSender,String messageHashValue,String externalResource).
 *
 */
public class EventNewMessage_string_uint_address_string_string{
	private String message;
	private Integer messageId;
	private org.adridadou.ethereum.values.EthAddress messageSender;
	private String messageHashValue;
	private String externalResource;

	public EventNewMessage_string_uint_address_string_string(String message,Integer messageId,org.adridadou.ethereum.values.EthAddress messageSender,String messageHashValue,String externalResource) {
		super();
		this.message = message;
		this.messageId = messageId;
		this.messageSender = messageSender;
		this.messageHashValue = messageHashValue;
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
	 * Getter for messageId.
	 * @return
	 */
	public Integer getMessageId(){
		return messageId;
	}

	/**
	 * Getter for messageSender.
	 * @return
	 */
	public org.adridadou.ethereum.values.EthAddress getMessageSender(){
		return messageSender;
	}

	/**
	 * Getter for messageHashValue.
	 * @return
	 */
	public String getMessageHashValue(){
		return messageHashValue;
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
		result = prime * result + ((messageId == null) ? 0 : messageId.hashCode());
		result = prime * result + ((messageSender == null) ? 0 : messageSender.hashCode());
		result = prime * result + ((messageHashValue == null) ? 0 : messageHashValue.hashCode());
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
		EventNewMessage_string_uint_address_string_string other = (EventNewMessage_string_uint_address_string_string) obj;
		if (message == null) {
			if (other.message != null)
				return false;
		} else if (!message.equals(other.message))
			return false;
		if (messageId == null) {
			if (other.messageId != null)
				return false;
		} else if (!messageId.equals(other.messageId))
			return false;
		if (messageSender == null) {
			if (other.messageSender != null)
				return false;
		} else if (!messageSender.equals(other.messageSender))
			return false;
		if (messageHashValue == null) {
			if (other.messageHashValue != null)
				return false;
		} else if (!messageHashValue.equals(other.messageHashValue))
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
		return "EventNewMessage_string_uint_address_string_string [message=" + message + ",messageId=" + messageId + ",messageSender=" + messageSender + ",messageHashValue=" + messageHashValue + ",externalResource=" + externalResource + "]";
	}
}
