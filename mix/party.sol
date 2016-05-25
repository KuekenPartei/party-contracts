/**
*
* (c) KUEKeN
*
**/

import "./voting.sol";
import "./publishing.sol";
import "./basics.sol";
import "./members.sol";

/*
* An organ is part of the party, defined in the constitution.
* It is populated by functions party members.
*/
contract Organ is MemberAware,Manageable,MessagePublisher {
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
	uint public ballotCount;
	mapping (uint=>OrganFunction)public organFunctions;
	mapping (uint=>Ballot)public ballots;
	// Start of user code Organ.attributes
	//TODO: implement
	// End of user code
	
	modifier onlyIsFunction
	{
	    
	
	    _
	}
	
	
	event FunctionMemberChange(address oldMember,uint functionId,address newMember);
	
	
	
	function publishMessage(string message,string hash,string er) public   {
		 
		
		//Start of user code MessagePublisher.function.publishMessage
		organBlog.sendMessage(message,hash,er);
		//End of user code
	}
	
	
	function getMessage(uint id) public   constant returns (string _message,uint date,address _sender) {
		 
		
		//Start of user code MessagePublisher.function.getMessage
		//TODO: implement
		//End of user code
	}
	
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
		organFunctions[lastFunctionId].functionName = _functionName;
		organFunctions[lastFunctionId].constitutionHash = _constittiutionHash;
		organFunctions[lastFunctionId].lastConstitutionHashChanged = now;
		organFunctions[lastFunctionId].publisher = blogRegistry.registerBlog(_functionName);
		lastFunctionId++;
		//End of user code
	}
	
	
	
	function initalizeOrgan() public   {
	
		//Start of user code Organ.function.initalizeOrgan
		//blogRegistry = new BlogRegistry();		
		
		organBlog = blogRegistry.registerBlog(organName);
		
		//End of user code
	}
	
	
	
	function publishFunctionMessage(uint id,string message,string hash,string er) public   {
	
		//Start of user code Organ.function.publishFunctionMessage
		ShortBlog sb = organFunctions[id].publisher;
		if(address(sb)==0) throw;
		sb.sendMessage(message,hash,er);
		//End of user code
	}
	
	
	
	function createBallot(string name,bytes32[] proposalNames) public  returns (uint ) {
	
		//Start of user code Organ.function.createBallot
		Ballot b = new Ballot(name,proposalNames);
		ballots[ballotCount] = b;
		ballotCount++;
		//End of user code
	}
	
	
	
	function getFunctionAddress(uint id) public   constant returns (address ) {
	
		//Start of user code Organ.function.getFunctionAddress
		return organFunctions[id].publisher;
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
	function setBlogRegistry (address aBlogRegistry) {
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
	
	// delegate functions from memberRegistry (MemberRegistry)
	
	// delegate to addMember
	function memberRegistry_addMember(string name,address _memberAddress)  {
		memberRegistry.addMember(name,_memberAddress);    
	}
	
	// delegate to unregisterMember
	function memberRegistry_unregisterMember(uint id)  {
		memberRegistry.unregisterMember(id);    
	}
	
	// delegate to getMemberCount
	function memberRegistry_getMemberCount()  constant returns (uint ) {
		return memberRegistry.getMemberCount();
	}
	
	// delegate to isActiveMember
	function memberRegistry_isActiveMember(address _memberAdress)  constant returns (bool ) {
		return memberRegistry.isActiveMember(_memberAdress);
	}
	
	// delegate to changeMemberAddress
	function memberRegistry_changeMemberAddress(uint id,address _newMemberAddress)  {
		memberRegistry.changeMemberAddress(id,_newMemberAddress);    
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
		//blogregistry = new BlogRegistry();
		addManager(msg.sender);
		//End of user code
	}
	
	
	
	function boostrapParty(address fc,address br) public  onlyManager()  {
	
		//Start of user code KUEKeNParty.function.boostrapParty
		
//		memberRegistry = new MemberRegistry();
//		memberRegistry.addManager(msg.sender);
//		blogregistry = new BlogRegistry();
		
		FoundationConference organ = FoundationConference(fc);
		organs[organCount] = organ;
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
	/**
	*  initalizeOrgan
	*/
	function initalizeOrgan() public {
		super.initalizeOrgan();
		isActive = true;
//		createFunction("test","");
	}
	// End of user code
}

