//
console.log('Starting deployment for kueken ...'); 
admin.sleepBlocks(1);

// unlock and create the contacts.
var account = personal.listAccounts[0];
personal.unlockAccount(account,"",99000);
eth.defaultAccount = account;

console.log(account+' unlocked'); 
var gasPrice = web3.eth.gasPrice;
console.log('Gas price:'+gasPrice.toString(10)); 

// create Blogregistry
console.log('create BlogRegistryContract');
var br = BlogRegistryContract.new({from: account,data: BlogRegistry.codeHex,gas:  2000000});
//admin.sleepBlocks(2);
console.log('state :'+web3.eth.getTransactionReceipt(br.transactionHash));

// create member registry
console.log('create MemberRegistryContract');
var mr = MemberRegistryContract.new({from: account,data: MemberRegistry.codeHex,gas:  2000000});
admin.sleepBlocks(1);
console.log('state :'+web3.eth.getTransactionReceipt(br.transactionHash));

//
console.log('create FoundationConferenceContract');
var fc = FoundationConferenceContract.new({from: account,data: FoundationConference.codeHex,gas:  4000000});
admin.sleepBlocks(1);
console.log('state :'+web3.eth.getTransactionReceipt(br.transactionHash));

//
console.log('create Buvo Organ');
var buvo = OrganContract.new({from: account,data: Organ.codeHex,gas:  4000000});
admin.sleepBlocks(1);
console.log('state :'+web3.eth.getTransactionReceipt(br.transactionHash));

//
console.log('create Bundeskoordinationsrat Organ');
var bundeskoordinationsrat = OrganContract.new({from: account,data: Organ.codeHex,gas:  4000000});
admin.sleepBlocks(1);
console.log('state :'+web3.eth.getTransactionReceipt(br.transactionHash));



//
console.log('create KUEKeNPartyContract');
var kp = KUEKeNPartyContract.new({from: account,data: KUEKeNParty.codeHex,gas:  4700000});
var txt = kp.transactionHash;
//var result = null;
//while (result===null) {
//	admin.sleepBlocks(1);
//	result = web3.eth.getTransactionReceipt(txt);
//	console.log('sleeping ...'+result);
//}
checkContracts();
console.log('basic contracts deployed');
console.log('');
console.log('configure via setupKP() or check the deployment state via checkContracts()');


// setup the kp
function setupKP(){
	console.log('checking contracts');
	waitForContracts();
	

	console.log('contracts = {};');
	console.log('contracts[\'BlogRegistry\'].address = "'+br.address+'";'); 
	console.log('contracts[\'MemberRegistry\'].address = "'+mr.address+'";'); 
	console.log('contracts[\'FoundationConference\'].address = "'+fc.address+'";'); 
	console.log('contracts[\'Organ\'].address = "'+buvo.address+'";'); 
	console.log('contracts[\'KUEKeNParty\'].address = "'+kp.address+'";'); // 'latest'

	var kp_a = kp.address;
	var fc_a = fc.address;

	console.log('configure kp:'+eth.blockNumber); 
	fc.setOrganName.sendTransaction('Gruendungsveranstaltung',{from: account,gas: 2000000});
	buvo.setOrganName.sendTransaction('BUVO',{from: account,gas: 2000000});
	bundeskoordinationsrat.setOrganName.sendTransaction('Bundeskoordinationsrat',{from: account,gas: 2000000});

	kp.constitutionHash.sendTransaction('party-constitution',{from: account});
	admin.sleepBlocks(3);

	
	
	console.log('add managers:'+eth.blockNumber); 
	br.addManager.sendTransaction(kp_a,{from: account});
	mr.addManager.sendTransaction(kp_a,{from: account});
	fc.addManager.sendTransaction(kp_a,{from: account});
	buvo.addManager.sendTransaction(kp_a,{from: account});
	bundeskoordinationsrat.addManager.sendTransaction(kp_a,{from: account});
	admin.sleepBlocks(3);

	console.log('base configure:'+eth.blockNumber); 
	kp.setMemberRegistry(mr.address);
	kp.setBlogregistry(br.address);
	admin.sleepBlocks(3);


//	add and configure the fc
	console.log('boostrap fc ...1'+eth.blockNumber); 
	kp.addOrgan.sendTransaction(fc_a,{from: account,gas: 2000000});
	fc.createFunction.sendTransaction("Versammlungsleiter 1","",{from: account,gas: 2000000});
	fc.createFunction.sendTransaction("Versammlungsleiter 2","",{from: account,gas: 2000000});
	fc.createFunction.sendTransaction("Wahlleiter","",{from: account,gas: 2000000});
	admin.sleepBlocks(3);

//	add and configures the buvo
	console.log('boostrap buvo ...2'+eth.blockNumber); 
	kp.addOrgan.sendTransaction(buvo.address,{from: account,gas: 2000000});
	buvo.createFunction.sendTransaction("1. Vorsitzede","",{from: account,gas: 2000000});
	buvo.createFunction.sendTransaction("Stellvertretener Vorsitzede","",{from: account,gas: 2000000});
	buvo.createFunction.sendTransaction("Schatzmeister","",{from: account,gas: 2000000});
	buvo.createFunction.sendTransaction("Stellvertretender Schatzmeister","",{from: account,gas: 2000000});
	buvo.createFunction.sendTransaction("Generalsekretaer","",{from: account,gas: 2000000});
	buvo.createFunction.sendTransaction("1. Stellvertretender Generalsekretaer","",{from: account,gas: 2000000});
	buvo.createFunction.sendTransaction("2. Stellvertretender Generalsekretaer","",{from: account,gas: 2000000});
	
	admin.sleepBlocks(3);


	console.log('finsh deployment'); 
	
	var sh = ShortBlogContract.at(fc.getOrganBlog());
}


function waitForContracts(){
	var r1 = undefined;
	while (r1===undefined) {
		admin.sleepBlocks(1);
		r1 = kp.address;
		if(r1!=undefined)
			r1=br.address;
		if(r1!=undefined)
			r1=mr.address;
		if(r1!=undefined)
			r1=fc.address;
		if(r1!=undefined)
			r1=buvo.address;
		
		console.log('waiting for contract deployment ...'+r1);
		checkContracts();
	}
}

function checkContracts() {
	console.log('curent block:'+eth.blockNumber);
	console.log('blogregistry ...'+br.address); 
	console.log('memberregistry ...'+mr.address); 
	console.log('FoundationConference ...'+fc.address); 
	console.log('BUVO ...'+buvo.address); 
	console.log('kp ...'+kp.address); // 'latest'
}
