console.log('Test for late init.');
if (contracts==null) {
	var contracts = {};
	contracts['BlogRegistry'].address = "";
	contracts['MemberRegistry'].address = "";
	contracts['FoundationConference'].address = "";
	contracts['Organ'].address = "";
	contracts['KUEKeNParty'].address = "";
	
	
	// init the contracts
	contracts['BlogRegistry'].contract = BlogRegistryContract.at(contracts['BlogRegistry'].address);
	contracts['MemberRegistry'].contract = MemberRegistryContract.at(contracts['MemberRegistry'].address);
	contracts['FoundationConference'].address = FoundationConferenceContract.at(contracts['FoundationConference'].address);
	contracts['Organ'].address = OrganFunctionContract.at(contracts['Organ'].address);
	contracts['KUEKeNParty'].contract = KUEKeNPartyContract.at(contracts['KUEKeNParty'].contract);
	
	//
	console.log('check for contracts .. '+contract);
}