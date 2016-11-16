console.log('Test for late init.');
if (contracts===undefined) {
	var contracts = {};
	contracts['BlogRegistry'] = {};
	contracts['MemberRegistry'] = {};
	contracts['FoundationConference'] = {};
	contracts['Organ'] = {};
	contracts['KUEKeNParty'] = {};
	
	contracts['BlogRegistry'].address = "0xf1c5aa0c29b19c9d4bbcb9367eefc8e7460ae1f0";
	contracts['MemberRegistry'].address = "0xfc32aa2361418a1dd5c79f7fca8c4978811bb250";
	contracts['FoundationConference'].address = "0xaf058e60794f235a5ffa92900dc7540c650a0367";
	contracts['Organ'].address = "0x39adb1f180ec89a35c86a304575e9d03d7bc3771";
	contracts['KUEKeNParty'].address = "0xb356cb927b848546adb394d126dcb5b464219693";
	
	
	// init the contracts
	contracts['BlogRegistry'].contract = BlogRegistryContract.at(contracts['BlogRegistry'].address);
	contracts['MemberRegistry'].contract = MemberRegistryContract.at(contracts['MemberRegistry'].address);
	contracts['FoundationConference'].address = FoundationConferenceContract.at(contracts['FoundationConference'].address);
	contracts['Organ'].address = OrganFunctionContract.at(contracts['Organ'].address);
	contracts['KUEKeNParty'].contract = KUEKeNPartyContract.at(contracts['KUEKeNParty'].address);
	
	//
	console.log('check for contracts .. '+contracts['BlogRegistry'].contract.address);
}