/**
*
* (c) KUEKeN
*
**/

import "./basics.sol";


contract Organ is MemberAware,Manageable {
    
    struct OrganFunction {
    	address currentMember;
    	string functionName;
    	uint id;
    }

	string public organName;
	uint public lastFunctionId = 0;
	mapping (uint=>OrganFunction)public organMembers;
	// Start of user code Organ.attributes
	//TODO: implement
	// End of user code
	
	
	
	function changeMember(uint _id,address _address) public  onlyManager()  {
	
		//Start of user code Organ.function.changeMember
		if(!isMember(_address)) throw;
		if(organMembers[_id].id!= id) throw;
		
		organMembers[_id].currentMember = _address;
		//End of user code
	}
	
	
	
	function createFunction(string _functionName) public  onlyManager()  {
	
		//Start of user code Organ.function.createFunction
		organMembers[lastFunctionId].functionName = _functionName;
		lastFunctionId++;
		//End of user code
	}
	
	// Start of user code Organ.operations
	//TODO: implement
	// End of user code
}


contract Party is Manageable {

	Organ[] public organ;
	MemberRegistry public memberRegistry;
	// Start of user code Party.attributes
	//TODO: implement
	// End of user code
	
	
	
	function Party() public   {
	
		//Start of user code Party.function.Party
		//TODO: implement
		//End of user code
	}
	
	// Start of user code Party.operations
	//TODO: implement
	// End of user code
}


contract KUEKeNParty is Party {

	// Start of user code KUEKeNParty.attributes
	//TODO: implement
	// End of user code
	
	
	
	function KUEKeNParty() public   {
		managers[msg.sender]= true;
		//Start of user code KUEKeNParty.function.KUEKeNParty
		//TODO: implement
		//End of user code
	}
	
	// Start of user code KUEKeNParty.operations
	//TODO: implement
	// End of user code
}

