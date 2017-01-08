console.log('Test for late init.');
if (contracts===undefined) {
	var contracts = {};
	contracts['BlogRegistry'] = {};
	contracts['MemberRegistry'] = {};
	contracts['FoundationConference'] = {};
	contracts['Organ'] = {};
	contracts['KUEKeNParty'] = {};
	
	contracts['BlogRegistry'].address = "0x53c41987f5eee9b43f4bdccf4b93fd28bd71ae17";
	contracts['MemberRegistry'].address = "0x9c479c9858efc4a27d395cd8f57f110930802be6";
	contracts['FoundationConference'].address = "0x139d97c582d5ddd7f7f279737e6b50cf17fbf5ba";
	contracts['Organ'].address = "0x336251ff8dc29a3716a8804cecea89928b18ad57";
	contracts['KUEKeNParty'].address = "0xdc11a1c77ef071e050a798654e363f1e229a08f6";
	
	
	// init the contracts
	contracts['BlogRegistry'].contract = BlogRegistryContract.at(contracts['BlogRegistry'].address);
	contracts['MemberRegistry'].contract = MemberRegistryContract.at(contracts['MemberRegistry'].address);
	contracts['FoundationConference'].address = FoundationConferenceContract.at(contracts['FoundationConference'].address);
	contracts['Organ'].address = OrganFunctionContract.at(contracts['Organ'].address);
	contracts['KUEKeNParty'].contract = KUEKeNPartyContract.at(contracts['KUEKeNParty'].address);
	
	//
	console.log('check for contracts .. '+contracts['BlogRegistry'].contract.address);
}