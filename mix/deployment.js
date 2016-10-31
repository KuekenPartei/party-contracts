console.log('Test for late init.');
if (contracts===undefined) {
	var contracts = {};
	contracts['BlogRegistry'] = {};
	contracts['MemberRegistry'] = {};
	contracts['FoundationConference'] = {};
	contracts['Organ'] = {};
	contracts['KUEKeNParty'] = {};
	
	contracts['BlogRegistry'].address = "0xaa054f02c3d6d90d90bfc681836ceba06556f906";
	contracts['MemberRegistry'].address = "0x676cfa92af05f3a3abf8ea5d5192628094b7d2ef";
	contracts['FoundationConference'].address = "0x7b6254ba9daf712002e961f3599e3ffafe252456";
	contracts['Organ'].address = "0x2ee7c6b821da00cf7e05599510b74fcff7913e80";
	contracts['KUEKeNParty'].address = "0xb712ef7bcd1a46f81b7449be12853411f350ead2";
	
	
	// init the contracts
	contracts['BlogRegistry'].contract = BlogRegistryContract.at(contracts['BlogRegistry'].address);
	contracts['MemberRegistry'].contract = MemberRegistryContract.at(contracts['MemberRegistry'].address);
	contracts['FoundationConference'].address = FoundationConferenceContract.at(contracts['FoundationConference'].address);
	contracts['Organ'].address = OrganFunctionContract.at(contracts['Organ'].address);
	contracts['KUEKeNParty'].contract = KUEKeNPartyContract.at(contracts['KUEKeNParty'].address);
	
	//
	console.log('check for contracts .. '+contracts['BlogRegistry'].contract.address);
}