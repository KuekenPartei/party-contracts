/*
Generated by Mix
Sa. Okt. 22 23:45:32 2016 GMT+0200
*/

var Manageable = {
	"abi": "[{\"constant\":false,\"inputs\":[{\"name\":\"_newManagerAddress\",\"type\":\"address\"}],\"name\":\"addManager\",\"outputs\":[],\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"mangerCount\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_managerAddress\",\"type\":\"address\"}],\"name\":\"removeManager\",\"outputs\":[],\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_managerAddress\",\"type\":\"address\"}],\"name\":\"isManager\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"managers\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"type\":\"function\"},{\"inputs\":[],\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"_state\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"_address\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"_managerCount\",\"type\":\"uint256\"}],\"name\":\"ManagerChanged\",\"type\":\"event\"}]",
	"codeHex": "0x60606040525b6001600160005060003373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083021790555060006000818150548092919060010191905055507fa7d1aca229ccbcecfba9eba713308eba2a92d39862b1c8a715333387a07e9d91600033600060005054604051808481526020018373ffffffffffffffffffffffffffffffffffffffff168152602001828152602001935050505060405180910390a15b610404806100ce6000396000f360606040526000357c0100000000000000000000000000000000000000000000000000000000900480632d06177a146100655780634890b8181461007d578063ac18de43146100a0578063f3ae2415146100b8578063fdff9b4d146100e657610063565b005b61007b6004808035906020019091905050610114565b005b61008a6004805050610226565b6040518082815260200191505060405180910390f35b6100b6600480803590602001909190505061022f565b005b6100ce6004808035906020019091905050610341565b60405180821515815260200191505060405180910390f35b6100fc6004808035906020019091905050610399565b60405180821515815260200191505060405180910390f35b61011c6103be565b151561012757610002565b600160005060008273ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615156101df5760006000818150548092919060010191905055507fa7d1aca229ccbcecfba9eba713308eba2a92d39862b1c8a715333387a07e9d91600082600060005054604051808481526020018373ffffffffffffffffffffffffffffffffffffffff168152602001828152602001935050505060405180910390a15b6001600160005060008373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908302179055505b50565b60006000505481565b6102376103be565b151561024257610002565b600160005060008273ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16156102fa576000600081815054809291906001900391905055507fa7d1aca229ccbcecfba9eba713308eba2a92d39862b1c8a715333387a07e9d91600182600060005054604051808481526020018373ffffffffffffffffffffffffffffffffffffffff168152602001828152602001935050505060405180910390a15b6000600160005060008373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908302179055505b50565b6000600160005060008373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161561038b5760019050610394565b60009050610394565b919050565b600160005060205280600052604060002060009150909054906101000a900460ff1681565b6000600160005060003373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050610401565b9056",
	"name": "Manageable"
}

var Multiowned = {
	"abi": "[{\"constant\":false,\"inputs\":[{\"name\":\"_owner\",\"type\":\"address\"}],\"name\":\"removeOwner\",\"outputs\":[],\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"m_owners\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_addr\",\"type\":\"address\"}],\"name\":\"isOwner\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"bytes32\"}],\"name\":\"m_pending\",\"outputs\":[{\"name\":\"yetNeeded\",\"type\":\"uint256\"},{\"name\":\"ownersDone\",\"type\":\"uint256\"},{\"name\":\"index\",\"type\":\"uint256\"}],\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"m_numOwners\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_owner\",\"type\":\"address\"}],\"name\":\"addOwner\",\"outputs\":[],\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"m_required\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_operation\",\"type\":\"bytes32\"}],\"name\":\"revoke\",\"outputs\":[],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_newRequired\",\"type\":\"uint256\"}],\"name\":\"changeRequirement\",\"outputs\":[],\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_operation\",\"type\":\"bytes32\"},{\"name\":\"_owner\",\"type\":\"address\"}],\"name\":\"hasConfirmed\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"m_ownerIndex\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"c_maxOwners\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_from\",\"type\":\"address\"},{\"name\":\"_to\",\"type\":\"address\"}],\"name\":\"changeOwner\",\"outputs\":[],\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"m_pendingIndex\",\"outputs\":[{\"name\":\"\",\"type\":\"bytes32\"}],\"type\":\"function\"},{\"inputs\":[{\"name\":\"_owners\",\"type\":\"address[]\"},{\"name\":\"_required\",\"type\":\"uint256\"}],\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"operation\",\"type\":\"bytes32\"}],\"name\":\"Confirmation\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"operation\",\"type\":\"bytes32\"}],\"name\":\"Revoke\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"oldOwner\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnerChanged\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnerAdded\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"oldOwner\",\"type\":\"address\"}],\"name\":\"OwnerRemoved\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"newRequirement\",\"type\":\"uint256\"}],\"name\":\"RequirementChanged\",\"type\":\"event\"}]",
	"codeHex": "0x6060604052604051610852380380610852833981016040528080518201919060200180519060200190919050505b5b50506108148061003e6000396000f3606060405236156100cc576000357c010000000000000000000000000000000000000000000000000000000090048063173825d9146100ce57806320ff99f2146100e65780632f54bf6e146101125780633e5da930146101405780634123cb6b1461017a5780637065cb481461019d578063746c9171146101b5578063b75c7dc6146101d8578063ba51a6df146101f0578063c2cf732614610208578063e12972c81461023f578063e762bd251461026b578063f00d4b5d1461028e578063fac6d405146102af576100cc565b005b6100e460048080359060200190919050506102df565b005b6100fc6004808035906020019091905050610311565b6040518082815260200191505060405180910390f35b610128600480803590602001909190505061032e565b60405180821515815260200191505060405180910390f35b6101566004808035906020019091905050610336565b60405180848152602001838152602001828152602001935050505060405180910390f35b610187600480505061036c565b6040518082815260200191505060405180910390f35b6101b36004808035906020019091905050610375565b005b6101c260048050506104c0565b6040518082815260200191505060405180910390f35b6101ee60048080359060200190919050506104c9565b005b61020660048080359060200190919050506104cd565b005b61022760048080359060200190919080359060200190919050506104ff565b60405180821515815260200191505060405180910390f35b6102556004808035906020019091905050610508565b6040518082815260200191505060405180910390f35b6102786004805050610523565b6040518082815260200191505060405180910390f35b6102ad6004808035906020019091908035906020019091905050610528565b005b6102c5600480803590602001909190505061055b565b604051808260001916815260200191505060405180910390f35b60003660405180838380828437820191505092505050604051809103902061030681610580565b1561030c575b505b50565b60026000508160fa8110156100025790900160005b915090505481565b60005b919050565b60fe6000506020528060005260406000206000915090508060000160005054908060010160005054908060020160005054905083565b60016000505481565b60003660405180838380828437820191505092505050604051809103902061039c81610580565b156104bb576103aa8261032e565b156103b557506104bd565b6103bd610588565b60fa6001600050541015156103d5576103d4610686565b5b60fa6001600050541015156103ea57506104bd565b60016000818150548092919060010191905055508173ffffffffffffffffffffffffffffffffffffffff16600260005060016000505460fa8110156100025790900160005b508190555060016000505460fd60005060008473ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050819055507f994a936646fe87ffe4f1e469d3d6aa417d6b855598397f323de5b449f765f0c382604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a15b505b50565b60006000505481565b5b50565b6000366040518083838082843782019150509250505060405180910390206104f481610580565b156104fa575b505b50565b60005b92915050565b60fd6000506020528060005260406000206000915090505481565b60fa81565b60003660405180838380828437820191505092505050604051809103902061054f81610580565b15610555575b505b5050565b60fc60005081815481101561000257906000526020600020900160005b915090505481565b60005b919050565b6000600060fc600050805490509150600090505b8181101561063f57600060010260fc60005082815481101561000257906000526020600020900160005b5054600019161415156106315760fe600050600060fc60005083815481101561000257906000526020600020900160005b5054600019168152602001908152602001600020600060008201600050600090556001820160005060009055600282016000506000905550505b5b806001019050805061059c565b60fc6000508054600082559060005260206000209081019061067f9190610661565b8082111561067b5760008181506000905550600101610661565b5090565b5b505b5050565b6000600190505b600160005054811015610810575b600160005054811080156106c65750600060026000508260fa8110156100025790900160005b505414155b156106d857808060010191505061069b565b5b600160016000505411801561070957506000600260005060016000505460fa8110156100025790900160005b5054145b15610728576001600081815054809291906001900391905055506106d9565b6001600050548110801561075857506000600260005060016000505460fa8110156100025790900160005b505414155b801561077a5750600060026000508260fa8110156100025790900160005b5054145b1561080b57600260005060016000505460fa8110156100025790900160005b505460026000508260fa8110156100025790900160005b50819055508060fd600050600060026000508460fa8110156100025790900160005b50548152602001908152602001600020600050819055506000600260005060016000505460fa8110156100025790900160005b50819055505b61068d565b5b5056",
	"name": "Multiowned"
}

var Owned = {
	"abi": "[{\"constant\":false,\"inputs\":[],\"name\":\"kill\",\"outputs\":[],\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"getOwner\",\"outputs\":[{\"name\":\"result\",\"type\":\"address\"}],\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"changeOwner\",\"outputs\":[],\"type\":\"function\"},{\"inputs\":[],\"type\":\"constructor\"}]",
	"codeHex": "0x60606040525b33600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908302179055505b6102c68061003f6000396000f360606040526000357c01000000000000000000000000000000000000000000000000000000009004806341c0e1b51461005a578063893d20e8146100695780638da5cb5b146100a2578063a6f9dae1146100db57610058565b005b61006760048050506100f3565b005b610076600480505061018c565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6100af6004805050610215565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6100f1600480803590602001909190505061023b565b005b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561014f5761018a565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16ff5b565b6000600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156101ea57610212565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905080505b90565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610297576102c3565b80600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908302179055505b5056",
	"name": "Owned"
}

