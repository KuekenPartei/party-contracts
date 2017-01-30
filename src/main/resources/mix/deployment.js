console.log('Test for late init.');
if (contracts===undefined) {
	var contracts = {};
	contracts['BlogRegistry'] = {};
	contracts['MemberRegistry'] = {};
	contracts['FoundationConference'] = {};
	contracts['Organ'] = {};
	contracts['KUEKeNParty'] = {};
	
	contracts = {};
	contracts['BlogRegistry'].address = "0xd7e3649d79346758cc13df39cbb7df963d9ac78f";
	contracts['MemberRegistry'].address = "0x804e378522da3b8af8c9d483ed25f8585819e5f5";
	contracts['FoundationConference'].address = "0x7207ced184dfb1f3c237687cd98f422bb07febdf";
	contracts['Organ'].address = "0xb869a8a6143d0a3e5fe4bcb3e1a5e2897584aca4";
	contracts['KUEKeNParty'].address = "0xe146a805b81c10024deea79c472b09ddcd49c886";
	
	
	// init the contracts
	contracts['BlogRegistry'].contract = BlogRegistryContract.at(contracts['BlogRegistry'].address);
	contracts['MemberRegistry'].contract = MemberRegistryContract.at(contracts['MemberRegistry'].address);
	contracts['FoundationConference'].address = FoundationConferenceContract.at(contracts['FoundationConference'].address);
	contracts['Organ'].address = OrganFunctionContract.at(contracts['Organ'].address);
	contracts['KUEKeNParty'].contract = KUEKeNPartyContract.at(contracts['KUEKeNParty'].address);
	
	//
	console.log('check for contracts .. '+contracts['BlogRegistry'].contract.address);
}