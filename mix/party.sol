/**
*
* (c) KUEKeN
*
**/

import "./members.sol";
import "./basics.sol";
import "./publishing.sol";

/*
* An organ is part of the party, defined in the constitution.
* It is populated by functions party members.
*/
contract Organ is Manageable,MemberAware {
    /*
    * The function definition.
    * A function is defined in the constitution of the party.
    */
    struct OrganFunction {
    	address currentMember;
    	string functionName;
    	uint id;
    	string constitutionHash;
    	uint lastMemberChanged;
    	uint lastConstitutionHashChanged;
    	ShortBlog publisher;
    }

	string public organName;
	uint public lastFunctionId;
	BlogRegistry public blogRegistry;
	bool public isActive;
	ShortBlog public organBlog;
	mapping (uint=>OrganFunction)public organFunctions;
	// Start of user code Organ.attributes
	//TODO: implement
	// End of user code
	
	modifier onlyIsFunction
	{
	    
	
	    _
	}
	
	
	event FunctionMemberChange(address oldMember,uint functionId,address newMember);
	
	
	/*
	* Change the member of the function.
	* 
	* _id -
	* _address -
	*/
	function changeMember(uint _id,address _address) public  onlyManager()  {
	
		//Start of user code Organ.function.changeMember
		if(!isMember(_address)) throw;
		if(organFunctions[_id].id!= _id) throw;
		
		FunctionMemberChange(organFunctions[_id].currentMember,_id,_address);
		organFunctions[_id].currentMember = _address;
		//End of user code
	}
	
	
	/*
	* Create a function of this organ.
	* 
	* _functionName - The name of the organ function.
	* _constittiutionHash -
	*/
	function createFunction(string _functionName,string _constittiutionHash) public  onlyManager()  {
	
		//Start of user code Organ.function.createFunction
		blogRegistry.registerBlog(_functionName);
		organFunctions[lastFunctionId].functionName = _functionName;
		organFunctions[lastFunctionId].constitutionHash = _constittiutionHash;
		organFunctions[lastFunctionId].lastConstitutionHashChanged = now;
		organFunctions[lastFunctionId].publisher = ShortBlog(blogRegistry.getShortBlog(_functionName));
		lastFunctionId++;
		//End of user code
	}
	
	
	
	function initalizeOrgan() public   {
	
		//Start of user code Organ.function.initalizeOrgan
		//blogRegistry = new BlogRegistry();		
		blogRegistry.registerBlog(organName);
		organBlog = ShortBlog(blogRegistry.getShortBlog(organName));
		
		//End of user code
	}
	
	// getOrganName
	function getOrganName() returns(string) {
		return organName;
	}
	// setOrganName
	function setOrganName (string aOrganName) {
		organName = aOrganName;
	}
	
	// setBlogRegistry
	function setBlogRegistry (address aBlogRegistry)  {
		blogRegistry = BlogRegistry(aBlogRegistry);
	}
	
	// Start of user code Organ.operations
	//TODO: implement
	// End of user code
}

/*
* A basic party contract.
*/
contract Party is Manageable {

	MemberRegistry public memberRegistry;
	string public constitutionHash;
	uint public organCount;
	BlogRegistry public blogregistry;
	mapping (uint=>Organ)public organs;
	// Start of user code Party.attributes
	//TODO: implement
	// End of user code
	
	
	event ConstiutionChange();
	
	
	
	function Party() public   {
	
		//Start of user code Party.function.Party
		//TODO: implement
		//End of user code
	}
	
	
	
	function createOrgan(string organName) public   {
	
		//Start of user code Party.function.createOrgan
		organs[organCount] = new Organ();
		organs[organCount].setOrganName(organName);
		organs[organCount].setMemberRegistry(memberRegistry);
		organs[organCount].setBlogRegistry(blogregistry);
		organs[organCount].initalizeOrgan();
		organCount++;
		//End of user code
	}
	
	// Start of user code Party.operations
	//TODO: implement
	// End of user code
}

/*
* An actual party.
* The KUEKen party.
*/
contract KUEKeNParty is Party {

	// Start of user code KUEKeNParty.attributes
	//TODO: implement
	// End of user code
	
	
	
	function KUEKeNParty() public   {
	
		//Start of user code KUEKeNParty.function.KUEKeNParty
		memberRegistry = new MemberRegistry();
		memberRegistry.addManager(msg.sender);
//		blogregistry = new BlogRegistry();
		addManager(msg.sender);
		//End of user code
	}
	
	
	
	function boostrapParty(address fc,address br) external  onlyManager()  {
	
		//Start of user code KUEKeNParty.function.boostrapParty
		
//		memberRegistry = new MemberRegistry();
//		memberRegistry.addManager(msg.sender);
//		blogregistry = new BlogRegistry();
		
		organs[organCount] = FoundationConference(fc);
		FoundationConference organ = FoundationConference(fc);
		organ.setOrganName("Gruendungsversammlung");
		organ.setMemberRegistry(memberRegistry);
		organ.setBlogRegistry(br);
		blogregistry = BlogRegistry(br);
		organ.initalizeOrgan();
		organCount++;

		//End of user code
	}
	
	// Start of user code KUEKeNParty.operations
	//TODO: implement
	// End of user code
}


contract FoundationConference is Organ {

	// Start of user code FoundationConference.attributes
	//TODO: implement
	// End of user code
	
	// Start of user code FoundationConference.operations
	//TODO: implement
	// End of user code
}

