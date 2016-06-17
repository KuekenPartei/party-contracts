/**
*
* (c) KUEKeN
*
**/
/*
* Collection of basic functionalities.
*/


contract Owned {

	address public owner;
	// Start of user code Owned.attributes
	//TODO: implement
	// End of user code
	
	modifier onlyOwner()
	{
	    if (msg.sender != owner) return;
	    _
	}
	//
	// constructor for Owned
	//
	function Owned(){
	    owner = msg.sender;
	    //Start of user code Constructor.Owned
		//TODO: implement
		// deprecated use a normal function to model the constructor
	    //End of user code
	}
	
	
	function getOwner() public  onlyOwner() returns (address result) {
		 result = owner;
		
		//Start of user code Owned.function.getOwner
		//TODO: implement
		//End of user code
	}
	
	
	
	function changeOwner(address newOwner) public  onlyOwner()  {
		 owner = newOwner;
		
		//Start of user code Owned.function.changeOwner
		//TODO: implement
		//End of user code
	}
	
	
	
	function kill() public  onlyOwner()  {
		 suicide(owner);
		
		//Start of user code Owned.function.kill
		//TODO: implement
		//End of user code
	}
	
	// Start of user code Owned.operations
	//TODO: implement
	// End of user code
}

/*
* A basic class to introduce an access control.
* All registered manager can access.
* A registered manager is an address mapped with true.
*/
contract Manageable {

	mapping (address=>bool)public managers;
	// Start of user code Manageable.attributes
	//TODO: implement
	// End of user code
	
	modifier onlyManager
	{
	    if (!canAccess()) throw;
	    _
	}
	//
	// constructor for Manageable
	//
	function Manageable(){
	    managers[msg.sender] = true;
	    //Start of user code Constructor.Manageable
		//TODO: implement
		// deprecated use a normal function to model the constructor
	    //End of user code
	}
	
	
	function canAccess() internal  returns (bool ) {
		 return managers[msg.sender];
		
		//Start of user code Manageable.function.canAccess
		//TODO: implement
		//End of user code
	}
	
	
	
	function addManager(address _newManagerAddress) public  onlyManager  {
		 managers[_newManagerAddress] = true;
		
		//Start of user code Manageable.function.addManager
		//TODO: implement
		//End of user code
	}
	
	
	
	function removeManager(address _managerAddress) public  onlyManager  {
		 managers[_managerAddress] = true;
		
		//Start of user code Manageable.function.removeManager
		//TODO: implement
		//End of user code
	}
	
	// Start of user code Manageable.operations
	//TODO: implement
	// End of user code
}


contract Multiowned {
    
    struct PendingState {
    	uint yetNeeded;
    	uint ownersDone;
    	uint index;
    }

	uint public m_required;
	uint public m_numOwners;
	uint[250] public m_owners;
	uint constant  public c_maxOwners = 250;
	bytes32[] public m_pendingIndex;
	mapping (uint=>uint)public m_ownerIndex;
	mapping (bytes32=>PendingState)public m_pending;
	// Start of user code Multiowned.attributes
	//TODO: implement
	// End of user code
	
	modifier onlyManyOwners(bytes32 _operation)
	{
	    if (confirmAndCheck(_operation))
	    _
	}
	
	
	event Confirmation(address owner,bytes32 operation);
	
	
	event Revoke(address owner,bytes32 operation);
	
	
	event OwnerChanged(address oldOwner,address newOwner);
	
	
	event OwnerAdded(address newOwner);
	
	
	event OwnerRemoved(address oldOwner);
	
	
	event RequirementChanged(uint newRequirement);
	
	
	/*
	* Constructor is given number of sigs required to do protected "onlymanyowners" transactions
	* as well as the selection of addresses capable of confirming them.
	* 
	* _owners -
	* _required -
	*/
	function Multiowned(address[] _owners,uint _required) public   {
		//Start of user code Multiowned.function.Multiowned
        m_numOwners = _owners.length + 1;
        m_owners[1] = uint(msg.sender);
        m_ownerIndex[uint(msg.sender)] = 1;
        for (uint i = 0; i < _owners.length; ++i)
        {
            m_owners[2 + i] = uint(_owners[i]);
            m_ownerIndex[uint(_owners[i])] = 2 + i;
        }
        m_required = _required;
		//End of user code
	}
	
	
	/*
	* Revokes a prior confirmation of the given operation.
	* 
	* _operation -
	*/
	function revoke(bytes32 _operation) external   {
		//Start of user code Multiowned.function.revoke
        uint ownerIndex = m_ownerIndex[uint(msg.sender)];
        // make sure they're an owner
        if (ownerIndex == 0) return;
        uint ownerIndexBit = 2**ownerIndex;
        var pending = m_pending[_operation];
        if (pending.ownersDone & ownerIndexBit > 0) {
            pending.yetNeeded++;
            pending.ownersDone -= ownerIndexBit; 
            Revoke(msg.sender, _operation);
        }
		//End of user code
	}
	
	
	/*
	* Replaces an owner `_from` with another `_to`.
	* 
	* _from -
	* _to -
	*/
	function changeOwner(address _from,address _to) external  onlyManyOwners(sha3(msg.data))  {
		//Start of user code Multiowned.function.changeOwner
        if (isOwner(_to)) return;
        uint ownerIndex = m_ownerIndex[uint(_from)];
        if (ownerIndex == 0) return;

        clearPending();
        m_owners[ownerIndex] = uint(_to);
        m_ownerIndex[uint(_from)] = 0;
        m_ownerIndex[uint(_to)] = ownerIndex;
        OwnerChanged(_from, _to);
		//End of user code
	}
	
	
	/*
	* Replaces an owner `_from` with another `_to`.
	* 
	* _owner -
	*/
	function addOwner(address _owner) external  onlyManyOwners(sha3(msg.data))  {
		//Start of user code Multiowned.function.addOwner
        if (isOwner(_owner)) return;

        clearPending();
        if (m_numOwners >= c_maxOwners)
            reorganizeOwners();
        if (m_numOwners >= c_maxOwners)
            return;
        m_numOwners++;
        m_owners[m_numOwners] = uint(_owner);
        m_ownerIndex[uint(_owner)] = m_numOwners;
        OwnerAdded(_owner);
		//End of user code
	}
	
	
	
	function removeOwner(address _owner) external  onlyManyOwners(sha3(msg.data))  {
		//Start of user code Multiowned.function.removeOwner
        uint ownerIndex = m_ownerIndex[uint(_owner)];
        if (ownerIndex == 0) return;
        if (m_required > m_numOwners - 1) return;

        m_owners[ownerIndex] = 0;
        m_ownerIndex[uint(_owner)] = 0;
        clearPending();
        reorganizeOwners(); //make sure m_numOwner is equal to the number of owners and always points to the optimal free slot
        OwnerRemoved(_owner);
		//End of user code
	}
	
	
	
	function changeRequirement(uint _newRequired) external  onlyManyOwners(sha3(msg.data))  {
		//Start of user code Multiowned.function.changeRequirement
        if (_newRequired > m_numOwners) return;
        m_required = _newRequired;
        clearPending();
        RequirementChanged(_newRequired);
		//End of user code
	}
	
	
	
	function isOwner(address _addr) public  returns (bool ) {
		//Start of user code Multiowned.function.isOwner
		return m_ownerIndex[uint(_addr)] > 0;
		//End of user code
	}
	
	
	
	function hasConfirmed(bytes32 _operation,address _owner) public   constant returns (bool ) {
		//Start of user code Multiowned.function.hasConfirmed
        var pending = m_pending[_operation];
        uint ownerIndex = m_ownerIndex[uint(_owner)];

        // make sure they're an owner
        if (ownerIndex == 0) return false;

        // determine the bit to set for this owner.
        uint ownerIndexBit = 2**ownerIndex;
        return !(pending.ownersDone & ownerIndexBit == 0);
		//End of user code
	}
	
	
	
	function confirmAndCheck(bytes32 _operation) internal  returns (bool ) {
		//Start of user code Multiowned.function.confirmAndCheck
        // determine what index the present sender is:
        uint ownerIndex = m_ownerIndex[uint(msg.sender)];
        // make sure they're an owner
        if (ownerIndex == 0) return;

        var pending = m_pending[_operation];
        // if we're not yet working on this operation, switch over and reset the confirmation status.
        if (pending.yetNeeded == 0) {
            // reset count of confirmations needed.
            pending.yetNeeded = m_required;
            // reset which owners have confirmed (none) - set our bitmap to 0.
            pending.ownersDone = 0;
            pending.index = m_pendingIndex.length++;
            m_pendingIndex[pending.index] = _operation;
        }
        // determine the bit to set for this owner.
        uint ownerIndexBit = 2**ownerIndex;
        // make sure we (the message sender) haven't confirmed this operation previously.
        if (pending.ownersDone & ownerIndexBit == 0) {
            Confirmation(msg.sender, _operation);
            // ok - check if count is enough to go ahead.
            if (pending.yetNeeded <= 1) {
                // enough confirmations: reset and run interior.
                delete m_pendingIndex[m_pending[_operation].index];
                delete m_pending[_operation];
                return true;
            }
            else
            {
                // not enough: record that this owner in particular confirmed.
                pending.yetNeeded--;
                pending.ownersDone |= ownerIndexBit;
            }
        }
		//End of user code
	}
	
	
	
	function reorganizeOwners() private   {
		//Start of user code Multiowned.function.reorganizeOwners
        uint free = 1;
        while (free < m_numOwners)
        {
            while (free < m_numOwners && m_owners[free] != 0) free++;
            while (m_numOwners > 1 && m_owners[m_numOwners] == 0) m_numOwners--;
            if (free < m_numOwners && m_owners[m_numOwners] != 0 && m_owners[free] == 0)
            {
                m_owners[free] = m_owners[m_numOwners];
                m_ownerIndex[m_owners[free]] = free;
                m_owners[m_numOwners] = 0;
            }
        }
		//End of user code
	}
	
	
	
	function clearPending() internal   {
		//Start of user code Multiowned.function.clearPending
        uint length = m_pendingIndex.length;
        for (uint i = 0; i < length; ++i)
            if (m_pendingIndex[i] != 0)
                delete m_pending[m_pendingIndex[i]];
        delete m_pendingIndex;
		//End of user code
	}
	
	// Start of user code Multiowned.operations
	//TODO: implement
	// End of user code
}

