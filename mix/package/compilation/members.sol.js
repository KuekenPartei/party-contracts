/*
Generated by Mix
Mi. Nov. 2 08:34:02 2016 GMT+0100
*/

var MemberAware = {
	"abi": "[{\"constant\":false,\"inputs\":[{\"name\":\"aMemberRegistry\",\"type\":\"address\"}],\"name\":\"setMemberRegistry\",\"outputs\":[],\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"memberRegistry\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"type\":\"function\"}]",
	"codeHex": "0x606060405260e38060106000396000f360606040526000357c0100000000000000000000000000000000000000000000000000000000900480636fd7c34c146041578063a74d477214605757603f565b005b60556004808035906020019091905050608e565b005b6062600480505060bd565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b80600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908302179055505b50565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168156",
	"name": "MemberAware"
}

var MemberRegistry = {
	"abi": "[{\"constant\":false,\"inputs\":[{\"name\":\"id\",\"type\":\"uint256\"},{\"name\":\"_newMemberAddress\",\"type\":\"address\"}],\"name\":\"changeMemberAddress\",\"outputs\":[],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"unregisterMember\",\"outputs\":[],\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_address\",\"type\":\"address\"}],\"name\":\"getMemberData\",\"outputs\":[{\"name\":\"name\",\"type\":\"string\"},{\"name\":\"id\",\"type\":\"uint256\"}],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_newManagerAddress\",\"type\":\"address\"}],\"name\":\"addManager\",\"outputs\":[],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"name\",\"type\":\"string\"},{\"name\":\"_memberAddress\",\"type\":\"address\"}],\"name\":\"addMember\",\"outputs\":[],\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_memberAdress\",\"type\":\"address\"}],\"name\":\"isActiveMember\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"mangerCount\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"activeMemberCount\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"mAddress\",\"type\":\"address\"},{\"name\":\"eventType\",\"type\":\"uint256\"}],\"name\":\"publishMemberEvent\",\"outputs\":[],\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"memberAddress\",\"outputs\":[{\"name\":\"name\",\"type\":\"string\"},{\"name\":\"id\",\"type\":\"uint256\"},{\"name\":\"member\",\"type\":\"address\"},{\"name\":\"state\",\"type\":\"uint8\"}],\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getMemberCount\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"partyMembers\",\"outputs\":[{\"name\":\"name\",\"type\":\"string\"},{\"name\":\"id\",\"type\":\"uint256\"},{\"name\":\"member\",\"type\":\"address\"},{\"name\":\"state\",\"type\":\"uint8\"}],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_managerAddress\",\"type\":\"address\"}],\"name\":\"removeManager\",\"outputs\":[],\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"partyMemberCount\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_managerAddress\",\"type\":\"address\"}],\"name\":\"isManager\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"managers\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"type\":\"function\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"mAddress\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"eType\",\"type\":\"MemberRegistry.EventType\"},{\"indexed\":false,\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"name\",\"type\":\"string\"},{\"indexed\":false,\"name\":\"memberState\",\"type\":\"MemberRegistry.MemberState\"}],\"name\":\"MemberEvent\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"_state\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"_address\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"_managerCount\",\"type\":\"uint256\"}],\"name\":\"ManagerChanged\",\"type\":\"event\"}]",
	"codeHex": "0x60606040525b6001600160005060003373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083021790555060006000818150548092919060010191905055507fa7d1aca229ccbcecfba9eba713308eba2a92d39862b1c8a715333387a07e9d91600033600060005054604051808481526020018373ffffffffffffffffffffffffffffffffffffffff168152602001828152602001935050505060405180910390a15b61151c806100ce6000396000f3606060405236156100e2576000357c01000000000000000000000000000000000000000000000000000000009004806314d5d892146100e457806323dd523d1461010557806329a8b99e1461011d5780632d06177a146101a857806345e39705146101c057806345ecd02f1461021f5780634890b8181461024d5780635fb6c6ed1461027057806388d2faf914610293578063987cc11d146102b4578063997072f71461038d578063a79e716c146103b0578063ac18de4314610489578063e07cc922146104a1578063f3ae2415146104c4578063fdff9b4d146104f2576100e2565b005b6101036004808035906020019091908035906020019091905050610520565b005b61011b60048080359060200190919050506108ae565b005b6101336004808035906020019091905050610aa8565b60405180806020018381526020018281038252848181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156101995780820380516001836020036101000a031916815260200191505b50935050505060405180910390f35b6101be6004808035906020019091905050610ac4565b005b61021d6004808035906020019082018035906020019191908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050909091908035906020019091905050610bd6565b005b61023560048080359060200190919050506110b9565b60405180821515815260200191505060405180910390f35b61025a600480505061110a565b6040518082815260200191505060405180910390f35b61027d6004805050611113565b6040518082815260200191505060405180910390f35b6102b2600480803590602001909190803590602001909190505061111c565b005b6102ca6004808035906020019091905050611262565b60405180806020018581526020018473ffffffffffffffffffffffffffffffffffffffff16815260200183815260200182810382528681815460018160011615610100020316600290048152602001915080546001816001161561010002031660029004801561037b5780601f106103505761010080835404028352916020019161037b565b820191906000526020600020905b81548152906001019060200180831161035e57829003601f168201915b50509550505050505060405180910390f35b61039a60048050506112c7565b6040518082815260200191505060405180910390f35b6103c660048080359060200190919050506112d9565b60405180806020018581526020018473ffffffffffffffffffffffffffffffffffffffff1681526020018381526020018281038252868181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156104775780601f1061044c57610100808354040283529160200191610477565b820191906000526020600020905b81548152906001019060200180831161045a57829003601f168201915b50509550505050505060405180910390f35b61049f600480803590602001909190505061133e565b005b6104ae6004805050611450565b6040518082815260200191505060405180910390f35b6104da6004808035906020019091905050611459565b60405180821515815260200191505060405180910390f35b61050860048080359060200190919050506114b1565b60405180821515815260200191505060405180910390f35b600061052a6114d6565b151561053557610002565b60026000505483111561054757610002565b60026004600050600085815260200190815260200160002060005060020160149054906101000a900460ff16141561075b57816004600050600085815260200190815260200160002060005060020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff0219169083021790555060046000506000848152602001908152602001600020600050600560005060008473ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060008201600050816000016000509080546001816001161561010002031660029004828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610661578054855561069e565b8280016001018555821561069e57600052602060002091601f016020900482015b8281111561069d578254825591600101919060010190610682565b5b5090506106c991906106ab565b808211156106c557600081815060009055506001016106ab565b5090565b5050600182016000505481600101600050556002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908302179055506002820160149054906101000a900460ff168160020160146101000a81548160ff021916908302179055509050505b6004600050600084815260200190815260200160002060005090507fdf3d8ab5bb67ce774d064af91bd779d0db5a0b14ed65e559df676cec59223c9a8160020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660008360010160005054846000016000508560020160149054906101000a900460ff16604051808673ffffffffffffffffffffffffffffffffffffffff168152602001858152602001848152602001806020018381526020018281038252848181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156108965780601f1061086b57610100808354040283529160200191610896565b820191906000526020600020905b81548152906001019060200180831161087957829003601f168201915b5050965050505050505060405180910390a15b505050565b600060006108ba6114d6565b15156108c557610002565b6002600050548311156108d757610002565b6004600050600084815260200190815260200160002060005060020160149054906101000a900460ff16915060028214156109555760016004600050600085815260200190815260200160002060005060020160146101000a81548160ff021916908302179055506003600081815054809291906001900391905055505b6004600050600084815260200190815260200160002060005090507fdf3d8ab5bb67ce774d064af91bd779d0db5a0b14ed65e559df676cec59223c9a8160020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660008360010160005054846000016000508560020160149054906101000a900460ff16604051808673ffffffffffffffffffffffffffffffffffffffff16815260200185815260200184815260200180602001838152602001828103825284818154600181600116156101000203166002900481526020019150805460018160011615610100020316600290048015610a905780601f10610a6557610100808354040283529160200191610a90565b820191906000526020600020905b815481529060010190602001808311610a7357829003601f168201915b5050965050505050505060405180910390a15b505050565b602060405190810160405280600081526020015060005b915091565b610acc6114d6565b1515610ad757610002565b600160005060008273ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515610b8f5760006000818150548092919060010191905055507fa7d1aca229ccbcecfba9eba713308eba2a92d39862b1c8a715333387a07e9d91600082600060005054604051808481526020018373ffffffffffffffffffffffffffffffffffffffff168152602001828152602001935050505060405180910390a15b6001600160005060008373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908302179055505b50565b6000610be06114d6565b1515610beb57610002565b6000600560005060008473ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060010160005054141515610c2f57610002565b600260005054600460005060006002600050548152602001908152602001600020600050600101600050819055508160046000506000600260005054815260200190815260200160002060005060020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff02191690830217905550600260046000506000600260005054815260200190815260200160002060005060020160146101000a81548160ff02191690830217905550826004600050600060026000505481526020019081526020016000206000506000016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610d4d57805160ff1916838001178555610d7e565b82800160010185558215610d7e579182015b82811115610d7d578251826000505591602001919060010190610d5f565b5b509050610da99190610d8b565b80821115610da55760008181506000905550600101610d8b565b5090565b5050600460005060006002600050548152602001908152602001600020600050600560005060008473ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060008201600050816000016000509080546001816001161561010002031660029004828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610e535780548555610e90565b82800160010185558215610e9057600052602060002091601f016020900482015b82811115610e8f578254825591600101919060010190610e74565b5b509050610ebb9190610e9d565b80821115610eb75760008181506000905550600101610e9d565b5090565b5050600182016000505481600101600050556002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908302179055506002820160149054906101000a900460ff168160020160146101000a81548160ff0219169083021790555090505060026000818150548092919060010191905055506003600081815054809291906001019190505550600560005060008373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005090507fdf3d8ab5bb67ce774d064af91bd779d0db5a0b14ed65e559df676cec59223c9a8260008360010160005054846000016000508560020160149054906101000a900460ff16604051808673ffffffffffffffffffffffffffffffffffffffff168152602001858152602001848152602001806020018381526020018281038252848181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156110a15780601f10611076576101008083540402835291602001916110a1565b820191906000526020600020905b81548152906001019060200180831161108457829003601f168201915b5050965050505050505060405180910390a15b505050565b60006002600560005060008473ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060020160149054906101000a900460ff16149050611105565b919050565b60006000505481565b60036000505481565b6000600560005060008473ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005090507fdf3d8ab5bb67ce774d064af91bd779d0db5a0b14ed65e559df676cec59223c9a83838360010160005054846000016000508560020160149054906101000a900460ff16604051808673ffffffffffffffffffffffffffffffffffffffff1681526020018581526020018481526020018060200183815260200182810382528481815460018160011615610100020316600290048152602001915080546001816001161561010002031660029004801561124a5780601f1061121f5761010080835404028352916020019161124a565b820191906000526020600020905b81548152906001019060200180831161122d57829003601f168201915b5050965050505050505060405180910390a15b505050565b600560005060205280600052604060002060009150905080600001600050908060010160005054908060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020160149054906101000a900460ff16905084565b600060036000505490506112d6565b90565b600460005060205280600052604060002060009150905080600001600050908060010160005054908060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020160149054906101000a900460ff16905084565b6113466114d6565b151561135157610002565b600160005060008273ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615611409576000600081815054809291906001900391905055507fa7d1aca229ccbcecfba9eba713308eba2a92d39862b1c8a715333387a07e9d91600182600060005054604051808481526020018373ffffffffffffffffffffffffffffffffffffffff168152602001828152602001935050505060405180910390a15b6000600160005060008373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908302179055505b50565b60026000505481565b6000600160005060008373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16156114a357600190506114ac565b600090506114ac565b919050565b600160005060205280600052604060002060009150909054906101000a900460ff1681565b6000600160005060003373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050611519565b9056",
	"name": "MemberRegistry"
}

