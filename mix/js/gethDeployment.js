// unlock and create the contacts.


var account = personal.listAccounts[0];
personal.unlockAccount(account,"n",99000);
eth.defaultAccount = account;

console.log(account+' unlocked'); 
var gasPrice = web3.eth.gasPrice;
console.log('Gas price:'+gasPrice.toString(10)); 

// create Blogregistry
console.log('BlogRegistryContract');
var br = BlogRegistryContract.new({from: account,data: BlogRegistry.codeHex,gas:  2000000});
admin.sleepBlocks(2);

// create member registry
console.log('MemberRegistryContract');
var mr = MemberRegistryContract.new({from: account,data: MemberRegistry.codeHex,gas:  2000000});
admin.sleepBlocks(2);

//
console.log('FoundationConferenceContract');
var fc = FoundationConferenceContract.new({from: account,data: FoundationConference.codeHex,gas:  4000000});
admin.sleepBlocks(2);

//
console.log('Buvo Organ');
var buvo = OrganContract.new({from: account,data: Organ.codeHex,gas:  4000000});
admin.sleepBlocks(2);

//
console.log('KUEKeNPartyContract');
var kp = KUEKeNPartyContract.new({from: account,data: KUEKeNParty.codeHex,gas:  4700000});
var txt = kp.transactionHash;
var result = null;
while (result===null) {
	admin.sleepBlocks(1);
	result = web3.eth.getTransactionReceipt(txt);
	console.log('sleeping ...'+result);
}

// setup the kp
function setupKP(){

	var r1 = undefined;
	while (r1===undefined) {
		admin.sleepBlocks(1);
		r1 = kp.address;
		console.log('sleeping ...'+r1);
	}

	console.log('create blogregistry ...'+eth.blockNumber+' '+br.address); 
	console.log('create memberregistry ...'+eth.blockNumber+' '+mr.address); 
	console.log('create FoundationConference ...'+eth.blockNumber+' '+mr.address); 
	console.log('create BUVO ...'+eth.blockNumber+' '+buvo.address); 
	console.log('create kp ...'+eth.blockNumber+' '+kp.address); // 'latest'

	var kp_a = kp.address;
	var fc_a = fc.address;

	console.log('configure kp:'+eth.blockNumber); 
	fc.setOrganName.sendTransaction('Gruendungsveranstaltung',{from: account,gas: 2000000});
	buvo.setOrganName.sendTransaction('BUVO',{from: account,gas: 2000000});

	kp.constitutionHash.sendTransaction('party-constitution',{from: account});
	admin.sleepBlocks(3);


	console.log('add managers:'+eth.blockNumber); 
	br.addManager.sendTransaction(kp_a,{from: account});
	mr.addManager.sendTransaction(kp_a,{from: account});
	fc.addManager.sendTransaction(kp_a,{from: account});
	buvo.addManager.sendTransaction(kp_a,{from: account});
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
	admin.sleepBlocks(3);

//	add and configures the buvo
	console.log('boostrap buvo ...2'+eth.blockNumber); 
	kp.addOrgan.sendTransaction(buvo.address,{from: account,gas: 2000000});
	buvo.createFunction.sendTransaction("1. Vorsitzede","",{from: account,gas: 2000000});
	buvo.createFunction.sendTransaction("2. Vorsitzede","",{from: account,gas: 2000000});
	admin.sleepBlocks(3);


	console.log('finsh deployment'); 
}
