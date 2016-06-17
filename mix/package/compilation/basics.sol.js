/*
Generated by Mix
Fr. Juni 17 21:13:05 2016 GMT+0200
*/

var Manageable = {
	"abi": "[{\"constant\":false,\"inputs\":[{\"name\":\"_newManagerAddress\",\"type\":\"address\"}],\"name\":\"addManager\",\"outputs\":[],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_managerAddress\",\"type\":\"address\"}],\"name\":\"removeManager\",\"outputs\":[],\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"managers\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"type\":\"function\"},{\"inputs\":[],\"type\":\"constructor\"}]",
	"codeHex": "0x6060604052600160a060020a0333166000908152602081905260409020805460ff1916600117905560be8060336000396000f3606060405260e060020a60003504632d06177a8114602e578063ac18de4314602e578063fdff9b4d146061575b005b602c60043560b573ffffffffffffffffffffffffffffffffffffffff331660009081526020819052604090205460ff1690565b607b60043560006020819052908152604090205460ff1681565b15156060908152602090f35b73ffffffffffffffffffffffffffffffffffffffff8116600090815260409020805460ff1916600117905550565b1515608757600256",
	"name": "Manageable"
}

var Multiowned = {
	"abi": "[{\"constant\":false,\"inputs\":[{\"name\":\"_owner\",\"type\":\"address\"}],\"name\":\"removeOwner\",\"outputs\":[],\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"m_owners\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_addr\",\"type\":\"address\"}],\"name\":\"isOwner\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"bytes32\"}],\"name\":\"m_pending\",\"outputs\":[{\"name\":\"yetNeeded\",\"type\":\"uint256\"},{\"name\":\"ownersDone\",\"type\":\"uint256\"},{\"name\":\"index\",\"type\":\"uint256\"}],\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"m_numOwners\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_owner\",\"type\":\"address\"}],\"name\":\"addOwner\",\"outputs\":[],\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"m_required\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_operation\",\"type\":\"bytes32\"}],\"name\":\"revoke\",\"outputs\":[],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_newRequired\",\"type\":\"uint256\"}],\"name\":\"changeRequirement\",\"outputs\":[],\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_operation\",\"type\":\"bytes32\"},{\"name\":\"_owner\",\"type\":\"address\"}],\"name\":\"hasConfirmed\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"m_ownerIndex\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"c_maxOwners\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_from\",\"type\":\"address\"},{\"name\":\"_to\",\"type\":\"address\"}],\"name\":\"changeOwner\",\"outputs\":[],\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"m_pendingIndex\",\"outputs\":[{\"name\":\"\",\"type\":\"bytes32\"}],\"type\":\"function\"},{\"inputs\":[{\"name\":\"_owners\",\"type\":\"address[]\"},{\"name\":\"_required\",\"type\":\"uint256\"}],\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"operation\",\"type\":\"bytes32\"}],\"name\":\"Confirmation\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"operation\",\"type\":\"bytes32\"}],\"name\":\"Revoke\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"oldOwner\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnerChanged\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnerAdded\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"oldOwner\",\"type\":\"address\"}],\"name\":\"OwnerRemoved\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"newRequirement\",\"type\":\"uint256\"}],\"name\":\"RequirementChanged\",\"type\":\"event\"}]",
	"codeHex": "0x6060604052604051610a68380380610a688339810160409081528151608051920180516001908101815533600160a060020a03166003819055600090815260fd6020529283205591905b825181101560c8578281815181101560025790602001906020020151600160a060020a031660026000508260020160fa8110156002570160009190558351600283019160fd918690859081101560025790602001906020020151600160a060020a03168152602001908152602001600020600050819055506001016049565b81600060005081905550505050610985806100e36000396000f3606060405236156100ae5760e060020a6000350463173825d981146100b057806320ff99f2146101035780632f54bf6e1461011b5780633e5da9301461013e5780634123cb6b146101655780637065cb481461016e578063746c91711461019b578063b75c7dc6146101a4578063ba51a6df146101d2578063c2cf7326146101ff578063e12972c81461023b578063e762bd2514610253578063f00d4b5d1461025b578063fac6d4051461028d575b005b6100ae600435600060003660405180838380828437820191505092505050604051809103902061033f815b600160a060020a033316600090815260fd60205260408120548180828114156106fa5761088b565b6102b860043560028160fa8110156100025750015481565b6102ca6004355b600160a060020a0316600090815260fd60205260408120541190565b60fe60205260043560009081526040902080546001820154600292909201546102de929083565b6102b860015481565b6100ae6004356000366040518083838082843782019150509250505060405180910390206104f2816100db565b6102b860005481565b6100ae600435600160a060020a033316600090815260fd6020526040812054908082811415610537576105b5565b6100ae6004356000366040518083838082843782019150509250505060405180910390206105bb816100db565b6102ca600435602435600082815260fe60209081526040808320600160a060020a038516845260fd909252822054828181141561061457610629565b6102b860043560fd6020526000908152604090205481565b6102b860fa81565b6100ae6004356024356000600036604051808383808284378201915050925050506040518091039020610632816100db565b6102b860043560fc805482908110156100025750600052600080516020610965833981519152015481565b60408051918252519081900360200190f35b604080519115158252519081900360200190f35b60408051938452602084019290925282820152519081900360600190f35b60408051600160a060020a038516815290517f58619076adf5bb0943d100ef88d52d7c3fd691b19d3a9071b555b651fbf418da9181900360200190a15b505b5050565b1561033957600160a060020a038316600090815260fd6020526040812054925082141561036c575061033b565b6001600160005054036000600050541115610387575061033b565b600060028360fa81101561000257508301819055600160a060020a038416815260fd60205260408120556104335b60fc5460005b8181101561083b5760fc8054829081101561000257600091825260008051602061096583398151915201541461042b5760fc805460fe9160009184908110156100025760008051602061096583398151915201548252506020919091526040812081815560018101829055600201555b6001016103bb565b6102fc5b60015b6001548110156104ef575b60015481108015610464575060028160fa811015610002570154600014155b1561089357600101610445565b60018054810190819055600160a060020a0383169060029060fa8110156100025790900160005055600154600160a060020a038316600081815260fd6020908152604091829020939093558051918252517f994a936646fe87ffe4f1e469d3d6aa417d6b855598397f323de5b449f765f0c3929181900390910190a1505b50565b1561033b5761050082610122565b1561050b57506104ef565b6105136103b5565b60015460fa901061052657610526610437565b60015460fa901061047157506104ef565b5050600082815260fe602052604081206001810154600284900a9290831611156105b55780546001828101805492909101835590839003905560408051600160a060020a03331681526020810186905281517fc7fb647e59b18047309aa15aad418e5d7ca96d173ad704f1031a2c3d7591734b929181900390910190a15b50505050565b1561033b576001548211156105d057506104ef565b60008290556105dd6103b5565b6040805183815290517facbdb084c721332ac59f9b8e392196c9eb0e4932862da8eb9beaf0dad4f550da9181900360200190a15050565b506001820154600282900a9081166000141593505b50505092915050565b156105b55761064083610122565b1561064b5750610339565b600160a060020a038416600090815260fd602052604081205492508214156106735750610339565b61067b6103b5565b600160a060020a03831660028360fa811015610002570155600160a060020a03848116600081815260fd6020908152604080832083905593871680835291849020869055835192835282015281517fb532073b38c83145e3e5135377a08bf9aab55bc0fd7c1179cd4fb995d2a5159c929181900390910190a150505050565b600085815260fe602052604081208054909350141561077f5760008054835560018381019190915560fc805491820180825582801582901161074f5781836000526020600020918201910161074f9190610860565b5050506002830181905560fc80548792908110156100025760009190915260008051602061096583398151915201555b506001810154600283900a9081166000141561088b5760408051600160a060020a03331681526020810187905281517fe1c52dc63b719ade82e8bea94cc41a0d5d28e4aaf536adb5e9cccc9ff8c1aeda929181900390910190a181546001901161087857600085815260fe602052604090206002015460fc8054909190811015610002576040600090812060008051602061096583398151915292909201819055808255600182810182905560029290920155945061088b9050565b60fc805460008083559190915261033990600080516020610965833981519152908101905b808211156108745760008155600101610860565b5090565b8154600019018255600182018054821790555b505050919050565b5b600180541180156108b5575060015460029060fa8110156100025701546000145b156108c95760018054600019019055610894565b600154811080156108eb575060015460029060fa811015610002570154600014155b8015610904575060028160fa8110156100025701546000145b156109605760015460029060fa81101561000257810154908260fa81101561000257909001600050558060fd600060028360fa811015610002578101548252602092909252604081209290925560015460fa8110156100025701555b61043a56371f36870d18f32a11fea0f144b021c8b407bb50f8e0267c711123f454b963c0",
	"name": "Multiowned"
}

var Owned = {
	"abi": "[{\"constant\":false,\"inputs\":[],\"name\":\"kill\",\"outputs\":[],\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"getOwner\",\"outputs\":[{\"name\":\"result\",\"type\":\"address\"}],\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"changeOwner\",\"outputs\":[],\"type\":\"function\"},{\"inputs\":[],\"type\":\"constructor\"}]",
	"codeHex": "0x606060405260008054600160a060020a0319163317905560ef806100236000396000f3606060405260e060020a600035046341c0e1b581146038578063893d20e81460525780638da5cb5b14606e578063a6f9dae114607f575b005b603660005433600160a060020a0390811691161460b0575b565b609d6000805433600160a060020a0390811691161460be5760c9565b609d600054600160a060020a031681565b603660043560005433600160a060020a0390811691161460cc5760ec565b600160a060020a03166060908152602090f35b600054600160a060020a0316ff5b54600160a060020a03165b90565b6000805473ffffffffffffffffffffffffffffffffffffffff1916821790555b5056",
	"name": "Owned"
}

