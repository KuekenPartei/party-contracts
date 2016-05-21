/**
*
* (c) KUEKeN
*
**/
/*
* Collection of basic functionalities.
*/


contract Owned {

	address internal owner;
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

