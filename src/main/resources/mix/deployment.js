console.log('Test for late init.');
if (contracts===undefined) {
	var contracts = {};
	contracts['BlogRegistry'] = {};
	contracts['MemberRegistry'] = {};
	contracts['FoundationConference'] = {};
	contracts['Organ'] = {};
	contracts['KUEKeNParty'] = {};
	
	contracts = {};
	contracts['BlogRegistry'].address = "0xca5c183f834ee20911c3d04eeb98825860d4114e";
	contracts['MemberRegistry'].address = "0x4150fd0ee9adad9e41dbd3b218216ff48c224f32";
	contracts['FoundationConference'].address = "0x14dfd7fcc32962e3d5d27338de742e7f94a720a3";
	contracts['Organ'].address = "0xd7ad00bcf5fb48eceaad97278dec00586c89644b";
	contracts['KUEKeNParty'].address = "0x2902b96e5367c2177772e05fddfc3db8c6fe3474";
	
	
	// init the contracts
	contracts['BlogRegistry'].contract = BlogRegistryContract.at(contracts['BlogRegistry'].address);
	contracts['MemberRegistry'].contract = MemberRegistryContract.at(contracts['MemberRegistry'].address);
	contracts['FoundationConference'].address = FoundationConferenceContract.at(contracts['FoundationConference'].address);
	contracts['Organ'].address = OrganFunctionContract.at(contracts['Organ'].address);
	contracts['KUEKeNParty'].contract = KUEKeNPartyContract.at(contracts['KUEKeNParty'].address);
	
	//
	console.log('check for contracts .. '+contracts['BlogRegistry'].contract.address);
}