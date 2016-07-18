/**
*
* (c) KUEKeN
*
**/

import "./basics.sol";
import "./members.sol";
import "./publishing.sol";
import "./voting.sol";

/*
* An organ is part of the party, defined in the constitution.
* It is populated by functions party members.
*/
contract Organ is Manageable,MemberAware,MessagePublisher {
    /*
    * The function definition.
    * A function is defined in the constitution of the party.
    * Normaly it is associated with a party member.
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
	ShortBlog internal organBlog;
	uint public ballotCount;
	mapping (uint=>OrganFunction)public organFunctions;
	mapping (uint=>Ballot)private ballots;
	// Start of user code Organ.attributes
	//TODO: implement
	// End of user code
	
	modifier onlyIsFunction
	{
	    
	
	    _
	}
	
	
	event FunctionMemberChange(address oldMember,uint functionId,address newMember);
	
	
	/*
	* Publish the message to the blog.
	* 
	* message - The message to send.
	* hash - The hash of the message.
	* er - The external resource of the message.
	*/
	function publishMessage(string message,string hash,string er) public   {
		 
		
		//Start of user code MessagePublisher.function.publishMessage_string_string_string
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
		//Start of user code Organ.function.changeMember_uint_address
//		if(!isMember(_address)) throw;
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
		//Start of user code Organ.function.createFunction_string_string
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
		isActive = true;
//		organBlog.changeOwner(this);
		
		//End of user code
	}
	
	
	/*
	* Publish a message at a function blog.
	* 
	* id -
	* message -
	* hash -
	* er -
	*/
	function publishFunctionMessage(uint id,string message,string hash,string er) public   {
		//Start of user code Organ.function.publishFunctionMessage_uint_string_string_string
		//TODO: implement
		//End of user code
	}
	
	
	/*
	* Creates a new ballot for this organ.
	* 
	* name -
	* proposalNames -
	* returns
	*  -
	*/
	function createBallot(string name,bytes32[] proposalNames) public  returns (uint ) {
		//Start of user code Organ.function.createBallot_string_bytes32
		ballotCount++;
		Ballot b = new Ballot(name,proposalNames);
		ballots[ballotCount] = b;
		return ballotCount;
		//End of user code
	}
	
	
	/*
	* Get the address of the organ function blog.
	* 
	* id - The function id.
	* returns
	*  -
	*/
	function getFunctionBlogAddress(uint id) public   constant returns (address ) {
		//Start of user code Organ.function.getFunctionBlogAddress_uint
		return organFunctions[id].publisher;
		//End of user code
	}
	
	
	
	function getLastBallot() public   constant returns (address ) {
		//Start of user code Organ.function.getLastBallot
		return ballots[ballotCount];
		//End of user code
	}
	
	
	
	function getOrganBlog() public   constant returns (address ) {
		//Start of user code Organ.function.getOrganBlog
		return organBlog;
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

	MemberRegistry internal memberRegistry;
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
		
		//End of user code
	}
	
	
	
	function createOrgan(string organName) public   {
		//Start of user code Party.function.createOrgan_string
		organs[organCount] = new Organ();
		organs[organCount].setOrganName(organName);
		organs[organCount].setMemberRegistry(memberRegistry);
		organs[organCount].setBlogRegistry(blogregistry);
		organs[organCount].initalizeOrgan();
		organCount++;
		//End of user code
	}
	
	// getMemberRegistry
	function getMemberRegistry() returns(MemberRegistry) {
		return memberRegistry;
	}
	// setMemberRegistry
	function setMemberRegistry (address aMemberRegistry) {
		memberRegistry = MemberRegistry(aMemberRegistry);
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
		//Start of user code KUEKeNParty.function.boostrapParty_address_address
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
	/**
	*  bootstrap2
	*/
	function bootstrap2() public {
		createOrgan("TestOrgan1");
//		createOrgan("TestOran2");
		
		Organ o = organs[0];
		//o.publishMessage("A Test message from the gk.","hash","externalResorce");
		
	}
	// End of user code
}

/*
* A conference is a meeting of the party members.
*/
contract Conference is Organ {

	address[] private accreditation;
	uint public accreditatedMembers;
	uint public date;
	// Start of user code Conference.attributes
	//TODO: implement
	// End of user code
	
	
	event MemberAccreditated(uint memberId,string memberName,address memberAddress);
	
	
	
	function accreditationMember(address _address) public   {
		//Start of user code Conference.function.accreditationMember_address
		if(!isMember(_address))throw;
		
		accreditation.push(_address);
		accreditatedMembers++;
		memberRegistry.publishMemberEvent(_address,1);
		//End of user code
	}
	
	// Start of user code Conference.operations
	//TODO: implement
	// End of user code
}

/*
* Will found the party.
* In the first and only session.
*/
contract FoundationConference is Conference {

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

