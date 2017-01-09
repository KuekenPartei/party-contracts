/*
*
*(c) 2016 KUEKeN
* Urs Zeidler
*
*/
pragma solidity ^0.4.0;

import "./basics.sol";
import "./members.sol";
import "./publishing.sol";
import "./voting.sol";
 
/*
* An organ is part of the party, defined in the constitution.
* It is populated by functions party members.
*/
contract Organ is Manageable,MemberAware,MessagePublisher {

	string public organName;
	uint public lastFunctionId;
	BlogRegistry public blogRegistry;
	bool public isActive;
	ShortBlog internal organBlog;
	uint public ballotCount;
	mapping (uint=>Ballot)private ballots;
	mapping (uint=>OrganFunction)internal organFunctions;
	// Start of user code Organ.attributes
	// End of user code
	
	modifier onlyIsFunction
	{
	    
	
	    _;
	}
	
	
	event FunctionMemberChange(address oldMember,uint functionId,address newMember);
	
	
	event FunctionChange(uint _type,OrganFunction _function);
	
	
	/*
	* Publish the message to the blog.
	* 
	* message -The message to send.
	* hash -The hash of the message.
	* er -The external resource of the message.
	*/
	function publishMessage(string message,string hash,string er) public   {
		//Start of user code Organ.function.publishMessage_string_string_string
		//TODO: shielder
		organBlog.sendMessage(message,hash,er);
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

		//FunctionMemberChange(organFunctions[_id].currentMember,_id,_address);
		
		OrganFunction a = organFunctions[_id];
		FunctionMemberChange(_address,_id,a);
		organFunctions[_id].setCurrentMember(_address);
		organBlog.sendMessage("change member","","");
		//End of user code
	}
	
	
	/*
	* Create a function of this organ.
	* 
	* _functionName -The name of the organ function.
	* _constittiutionHash -
	*/
	function createFunction(string _functionName,string _constittiutionHash) public  onlyManager()  {
		//Start of user code Organ.function.createFunction_string_string
		OrganFunction of1 = new OrganFunction(_functionName,_constittiutionHash);
		organFunctions[lastFunctionId]=of1;
		ShortBlog b = blogRegistry.registerBlog(_functionName);
		of1.setPublisher(b);
		lastFunctionId++;
		of1.addManager(msg.sender);
		FunctionChange(1,of1);

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

		OrganFunction of1 = organFunctions[id];
		of1.publishMessage(message,hash,er);
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
	
	
	
	function addOrganFunction(address _of,string _name) public   {
		//Start of user code Organ.function.addOrganFunction_address_string
		OrganFunction of1 = OrganFunction(_of);
		organFunctions[lastFunctionId]=of1;
		ShortBlog b = blogRegistry.registerBlog(_name);
		of1.setPublisher(b);
		lastFunctionId++;
		FunctionChange(1,of1);
		//End of user code
	}
	
	
	
	function getOrganFunction(uint _id) public   constant returns (OrganFunction ) {
		//Start of user code Organ.function.getOrganFunction_uint
		return organFunctions[_id];
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

	string public name;
	MemberRegistry public memberRegistry;
	string public constitutionHash;
	uint public organCount;
	BlogRegistry public blogregistry;
	Party public parent;
	uint public subDivisionCount;
	mapping (uint=>Organ)public organs;
	mapping (uint=>Party)public subDivisions;
	// Start of user code Party.attributes
	// End of user code
	
	
	event ConstiutionChange();
	
	
	event OrganChanged(Organ _organ,uint _changeType);
	
	
//	event DivisionChanged(address divisionAddress,address changer,uint state);
	
//	/*
//	* Construct a new party or division.
//	* 
//	* _name -The name of the party or division.
//	*/
//	function Party() public  {
//		//Start of user code Party.constructor.Party_string
//	    managers[msg.sender] = true;
//		mangerCount++;
////		//End of user code
//	}

	
	
	
	
	function createOrgan(string organName) public   {
		//Start of user code Party.function.createOrgan_string
		Organ o = new Organ();
		o.setOrganName(organName);
//		blogregistry.addManager(o);
		o.setBlogRegistry(blogregistry);
		o.setMemberRegistry(memberRegistry);	
//		o.initalizeOrgan();	
		organs[organCount] = o;
		OrganChanged(o,1);
		organCount++; 
		//End of user code
	}
	
	
	/*
	* Adds an organ to the party.
	* 
	* _organ -
	*/
	function addOrgan(address _organ) public  onlyManager()  {
		//Start of user code Party.function.addOrgan_address
		Organ o = Organ(_organ);
		blogregistry.addManager(o);
		o.setBlogRegistry(blogregistry);
		o.setMemberRegistry(memberRegistry);	
		o.initalizeOrgan();	
		organs[organCount] = o;
		OrganChanged(o,1);
		organCount++; 
		//End of user code
	}
	
	
	/*
	* Add a subdivision of this party, the contrains are:
	* the party must be a mananger of the subdivision
	* the blogregistry must be the same
	* the member regstry must be the same
	* 
	* _subDivision -
	*/
	function addSubDivision(address _subDivision) public   {
		//Start of user code Party.function.addSubDivision_address
		Party p = Party(_subDivision);
		//check the constrains
//		if(!p.isManager(this)) throw;
//		if(p.blogregistry()!=blogregistry) throw;
//		if(p.memberRegistry()!=memberRegistry) throw;
//		if(p.parent()!= this) throw;
		//TODO; a foundation conference should be done
		
		subDivisions[subDivisionCount] = p;
//		DivisionChanged(p,msg.sender,1);
		subDivisionCount++;
		
		
		//End of user code
	}
	
	
	
	function removeSubDivision(uint _divisionId) public   {
		//Start of user code Party.function.removeSubDivision_uint
		Party p = subDivisions[_divisionId];
//		DivisionChanged(p,msg.sender,0);
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
	
	// setBlogregistry
	function setBlogregistry (address aBlogregistry) {
		blogregistry = BlogRegistry(aBlogregistry);
	}
	
	// Start of user code Party.operations
	
	/**
	*  setName
	*/
	function setName(string aName) public {
		name = aName; 
	}
	// End of user code
}

/*
* An actual party.
* The KUEKen party.
*/
contract KUEKeNParty is Party {

	// Start of user code KUEKeNParty.attributes
	uint test;
	// End of user code
	
	
	function KUEKeNParty(string _name) public   {
		//Start of user code KUEKeNParty.constructor.KUEKeNParty_string
//		//TODO: implement
//		//End of user code
	}
	
	
	
	function boostrapParty(address fc,address br) public  onlyManager()  {
		//Start of user code KUEKeNParty.function.boostrapParty_address_address
//		memberRegistry = new MemberRegistry();
//		memberRegistry.addManager(msg.sender);
//		blogregistry = new BlogRegistry();
		
		FoundationConference organ = FoundationConference(fc);
		organs[organCount] = FoundationConference(fc);
		organ.setOrganName("Gruendungsversammlung");
		organ.setMemberRegistry(memberRegistry);
		organ.setBlogRegistry(br);
		blogregistry = BlogRegistry(br);
		organ.initalizeOrgan();
		organCount++;
		//End of user code
	}
	
	// Start of user code KUEKeNParty.operations
	/*
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
	
	/*
	*  initalizeOrgan
	*/
	function initalizeOrgan() public {
		super.initalizeOrgan();
		isActive = true;
//		createFunction("test","");
	}
	// End of user code
}

/*
* The function definition.
* A function is defined in the constitution of the party.
* Normaly it is associated with a party member.
*/
contract OrganFunction is Manageable,MessagePublisher {

	address public currentMember;
	string public functionName;
	uint public id;
	string public constitutionHash;
	uint public lastMemberChanged;
	uint public lastConstitutionHashChanged;
	ShortBlog public publisher;
	// Start of user code OrganFunction.attributes
	// End of user code
	
	
	function OrganFunction(string _name,string _ch) public   {
		//Start of user code OrganFunction.constructor.OrganFunction_string_string
		functionName = _name;
		constitutionHash = _ch;
		lastConstitutionHashChanged = now;
		//End of user code
	}
	
	
	/*
	* Publish the message to the blog.
	* 
	* message -The message to send.
	* hash -The hash of the message.
	* er -The external resource of the message.
	*/
	function publishMessage(string message,string hash,string er) public   {
		//Start of user code OrganFunction.function.publishMessage_string_string_string
		//TODO: shielder
		publisher.sendMessage(message,hash,er);
		//End of user code
	}
	
	
	function getFunctioName() public   constant returns (string ) {
		//Start of user code OrganFunction.function.getFunctioName
		return functionName;
		//End of user code
	}
	
	// setCurrentMember
	function setCurrentMember (address aCurrentMember) onlyManager() {
		currentMember = aCurrentMember;
	}
	
	// setPublisher
	function setPublisher (address aPublisher) onlyManager() {
		publisher = ShortBlog(aPublisher);
	}
	
	// Start of user code OrganFunction.operations
	//TODO: implement
	// End of user code
}

