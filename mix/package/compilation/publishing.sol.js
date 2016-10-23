/*
Generated by Mix
Sa. Okt. 22 23:45:36 2016 GMT+0200
*/

var BlogRegistry = {
	"abi": "[{\"constant\":false,\"inputs\":[{\"name\":\"_newManagerAddress\",\"type\":\"address\"}],\"name\":\"addManager\",\"outputs\":[],\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"mangerCount\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"blogs\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_name\",\"type\":\"string\"}],\"name\":\"registerBlog\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_managerAddress\",\"type\":\"address\"}],\"name\":\"removeManager\",\"outputs\":[],\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"blogCount\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_managerAddress\",\"type\":\"address\"}],\"name\":\"isManager\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"managers\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"type\":\"function\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"index\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"name\",\"type\":\"string\"},{\"indexed\":false,\"name\":\"blogAddress\",\"type\":\"address\"}],\"name\":\"NewBlog\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"_state\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"_address\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"_managerCount\",\"type\":\"uint256\"}],\"name\":\"ManagerChanged\",\"type\":\"event\"}]",
	"codeHex": "0x60606040525b6001600160005060003373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083021790555060006000818150548092919060010191905055507fa7d1aca229ccbcecfba9eba713308eba2a92d39862b1c8a715333387a07e9d91600033600060005054604051808481526020018373ffffffffffffffffffffffffffffffffffffffff168152602001828152602001935050505060405180910390a15b61172f806100ce6000396000f36060604052361561008a576000357c0100000000000000000000000000000000000000000000000000000000900480632d06177a1461008c5780634890b818146100a457806380f052d8146100c75780638921329f14610109578063ac18de4314610189578063e8824299146101a1578063f3ae2415146101c4578063fdff9b4d146101f25761008a565b005b6100a26004808035906020019091905050610220565b005b6100b16004805050610332565b6040518082815260200191505060405180910390f35b6100dd600480803590602001909190505061033b565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61015d6004808035906020019082018035906020019191908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050909091905050610373565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61019f60048080359060200190919050506105e0565b005b6101ae60048050506106f2565b6040518082815260200191505060405180910390f35b6101da60048080359060200190919050506106fb565b60405180821515815260200191505060405180910390f35b6102086004808035906020019091905050610753565b60405180821515815260200191505060405180910390f35b610228610778565b151561023357610002565b600160005060008273ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615156102eb5760006000818150548092919060010191905055507fa7d1aca229ccbcecfba9eba713308eba2a92d39862b1c8a715333387a07e9d91600082600060005054604051808481526020018373ffffffffffffffffffffffffffffffffffffffff168152602001828152602001935050505060405180910390a15b6001600160005060008373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908302179055505b50565b60006000505481565b600360005060205280600052604060002060009150909054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600061037f610778565b151561038a57610002565b82604051610f71806107be83390180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156103f55780820380516001836020036101000a031916815260200191505b5092505050604051809103906000f090508073ffffffffffffffffffffffffffffffffffffffff16632d06177a33604051827c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1681526020019150506000604051808303816000876161da5a03f115610002575050508060036000506000600260005054815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908302179055507f0c7d217608f54356e28de4fc1635fab2b6c3863155c50ccc8b195f590feacf1b6002600050548460036000506000600260005054815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660405180848152602001806020018373ffffffffffffffffffffffffffffffffffffffff1681526020018281038252848181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156105af5780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a160026000818150548092919060010191905055508091506105da565b50919050565b6105e8610778565b15156105f357610002565b600160005060008273ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16156106ab576000600081815054809291906001900391905055507fa7d1aca229ccbcecfba9eba713308eba2a92d39862b1c8a715333387a07e9d91600182600060005054604051808481526020018373ffffffffffffffffffffffffffffffffffffffff168152602001828152602001935050505060405180910390a15b6000600160005060008373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908302179055505b50565b60026000505481565b6000600160005060008373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615610745576001905061074e565b6000905061074e565b919050565b600160005060205280600052604060002060009150909054906101000a900460ff1681565b6000600160005060003373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1690506107bb565b90566060604052604051610f71380380610f71833981016040528080518201919060200150505b5b6001600160005060003373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083021790555060006000818150548092919060010191905055507fa7d1aca229ccbcecfba9eba713308eba2a92d39862b1c8a715333387a07e9d91600033600060005054604051808481526020018373ffffffffffffffffffffffffffffffffffffffff168152602001828152602001935050505060405180910390a15b8060046000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061012f57805160ff1916838001178555610160565b82800160010185558215610160579182015b8281111561015f578251826000505591602001919060010190610141565b5b50905061018b919061016d565b80821115610187576000818150600090555060010161016d565b5090565b50505b50610dd48061019d6000396000f3606060405236156100a0576000357c01000000000000000000000000000000000000000000000000000000009004806306fdde03146100a25780630d80fefd1461011d5780630eabeffe1461030f5780632d06177a146103f35780633dbcc8d11461040b57806340cd97801461042e5780634890b81814610451578063ac18de4314610474578063f3ae24151461048c578063fdff9b4d146104ba576100a0565b005b6100af60048050506104e8565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f16801561010f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101336004808035906020019091905050610589565b60405180806020018881526020018781526020018673ffffffffffffffffffffffffffffffffffffffff168152602001858152602001806020018060200184810384528b8181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156101f25780601f106101c7576101008083540402835291602001916101f2565b820191906000526020600020905b8154815290600101906020018083116101d557829003601f168201915b50508481038352868181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156102755780601f1061024a57610100808354040283529160200191610275565b820191906000526020600020905b81548152906001019060200180831161025857829003601f168201915b50508481038252858181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156102f85780601f106102cd576101008083540402835291602001916102f8565b820191906000526020600020905b8154815290600101906020018083116102db57829003601f168201915b50509a505050505050505050505060405180910390f35b6103f16004808035906020019082018035906020019191908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050909091908035906020019082018035906020019191908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050909091908035906020019082018035906020019191908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509090919050506105fd565b005b6104096004808035906020019091905050610ad2565b005b6104186004805050610be4565b6040518082815260200191505060405180910390f35b61043b6004805050610bed565b6040518082815260200191505060405180910390f35b61045e6004805050610bf6565b6040518082815260200191505060405180910390f35b61048a6004808035906020019091905050610bff565b005b6104a26004808035906020019091905050610d11565b60405180821515815260200191505060405180910390f35b6104d06004808035906020019091905050610d69565b60405180821515815260200191505060405180910390f35b60046000508054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156105815780601f1061055657610100808354040283529160200191610581565b820191906000526020600020905b81548152906001019060200180831161056457829003601f168201915b505050505081565b600560005060205280600052604060002060009150905080600001600050908060010160005054908060020160005054908060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806004016000505490806005016000509080600601600050905087565b610605610d8e565b151561061057610002565b826005600050600060026000505481526020019081526020016000206000506000016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061067e57805160ff19168380011785556106af565b828001600101855582156106af579182015b828111156106ae578251826000505591602001919060010190610690565b5b5090506106da91906106bc565b808211156106d657600081815060009055506001016106bc565b5090565b50506002600050546005600050600060026000505481526020019081526020016000206000506002016000508190555042600560005060006002600050548152602001908152602001600020600050600101600050819055503360056000506000600260005054815260200190815260200160002060005060030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff02191690830217905550806005600050600060026000505481526020019081526020016000206000506006016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106107eb57805160ff191683800117855561081c565b8280016001018555821561081c579182015b8281111561081b5782518260005055916020019190600101906107fd565b5b5090506108479190610829565b808211156108435760008181506000905550600101610829565b5090565b5050816005600050600060026000505481526020019081526020016000206000506005016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106108b757805160ff19168380011785556108e8565b828001600101855582156108e8579182015b828111156108e75782518260005055916020019190600101906108c9565b5b50905061091391906108f5565b8082111561090f57600081815060009055506001016108f5565b5090565b505043600560005060006002600050548152602001908152602001600020600050600401600050819055507f5790ff740478532dd0b26fde274d994d35fb0a26212aff826c15537195c4f0bb8360026000505433858560405180806020018681526020018573ffffffffffffffffffffffffffffffffffffffff16815260200180602001806020018481038452898181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156109f35780820380516001836020036101000a031916815260200191505b508481038352868181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f168015610a4c5780820380516001836020036101000a031916815260200191505b508481038252858181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f168015610aa55780820380516001836020036101000a031916815260200191505b509850505050505050505060405180910390a160026000818150548092919060010191905055505b505050565b610ada610d8e565b1515610ae557610002565b600160005060008273ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515610b9d5760006000818150548092919060010191905055507fa7d1aca229ccbcecfba9eba713308eba2a92d39862b1c8a715333387a07e9d91600082600060005054604051808481526020018373ffffffffffffffffffffffffffffffffffffffff168152602001828152602001935050505060405180910390a15b6001600160005060008373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908302179055505b50565b60026000505481565b60036000505481565b60006000505481565b610c07610d8e565b1515610c1257610002565b600160005060008273ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615610cca576000600081815054809291906001900391905055507fa7d1aca229ccbcecfba9eba713308eba2a92d39862b1c8a715333387a07e9d91600182600060005054604051808481526020018373ffffffffffffffffffffffffffffffffffffffff168152602001828152602001935050505060405180910390a15b6000600160005060008373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908302179055505b50565b6000600160005060008373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615610d5b5760019050610d64565b60009050610d64565b919050565b600160005060205280600052604060002060009150909054906101000a900460ff1681565b6000600160005060003373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050610dd1565b9056",
	"name": "BlogRegistry"
}

var ShortBlog = {
	"abi": "[{\"constant\":true,\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"messages\",\"outputs\":[{\"name\":\"message\",\"type\":\"string\"},{\"name\":\"date\",\"type\":\"uint256\"},{\"name\":\"id\",\"type\":\"uint256\"},{\"name\":\"sender\",\"type\":\"address\"},{\"name\":\"blockNumber\",\"type\":\"uint256\"},{\"name\":\"hashValue\",\"type\":\"string\"},{\"name\":\"externalResource\",\"type\":\"string\"}],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"message\",\"type\":\"string\"},{\"name\":\"hash\",\"type\":\"string\"},{\"name\":\"er\",\"type\":\"string\"}],\"name\":\"sendMessage\",\"outputs\":[],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_newManagerAddress\",\"type\":\"address\"}],\"name\":\"addManager\",\"outputs\":[],\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"messageCount\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"lastMessageDate\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"mangerCount\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_managerAddress\",\"type\":\"address\"}],\"name\":\"removeManager\",\"outputs\":[],\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_managerAddress\",\"type\":\"address\"}],\"name\":\"isManager\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"managers\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"type\":\"function\"},{\"inputs\":[{\"name\":\"_name\",\"type\":\"string\"}],\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"message\",\"type\":\"string\"},{\"indexed\":false,\"name\":\"messageId\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"messageSender\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"messageHashValue\",\"type\":\"string\"},{\"indexed\":false,\"name\":\"externalResource\",\"type\":\"string\"}],\"name\":\"NewMessage\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"_state\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"_address\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"_managerCount\",\"type\":\"uint256\"}],\"name\":\"ManagerChanged\",\"type\":\"event\"}]",
	"codeHex": "0x6060604052604051610f71380380610f71833981016040528080518201919060200150505b5b6001600160005060003373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083021790555060006000818150548092919060010191905055507fa7d1aca229ccbcecfba9eba713308eba2a92d39862b1c8a715333387a07e9d91600033600060005054604051808481526020018373ffffffffffffffffffffffffffffffffffffffff168152602001828152602001935050505060405180910390a15b8060046000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061012f57805160ff1916838001178555610160565b82800160010185558215610160579182015b8281111561015f578251826000505591602001919060010190610141565b5b50905061018b919061016d565b80821115610187576000818150600090555060010161016d565b5090565b50505b50610dd48061019d6000396000f3606060405236156100a0576000357c01000000000000000000000000000000000000000000000000000000009004806306fdde03146100a25780630d80fefd1461011d5780630eabeffe1461030f5780632d06177a146103f35780633dbcc8d11461040b57806340cd97801461042e5780634890b81814610451578063ac18de4314610474578063f3ae24151461048c578063fdff9b4d146104ba576100a0565b005b6100af60048050506104e8565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f16801561010f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101336004808035906020019091905050610589565b60405180806020018881526020018781526020018673ffffffffffffffffffffffffffffffffffffffff168152602001858152602001806020018060200184810384528b8181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156101f25780601f106101c7576101008083540402835291602001916101f2565b820191906000526020600020905b8154815290600101906020018083116101d557829003601f168201915b50508481038352868181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156102755780601f1061024a57610100808354040283529160200191610275565b820191906000526020600020905b81548152906001019060200180831161025857829003601f168201915b50508481038252858181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156102f85780601f106102cd576101008083540402835291602001916102f8565b820191906000526020600020905b8154815290600101906020018083116102db57829003601f168201915b50509a505050505050505050505060405180910390f35b6103f16004808035906020019082018035906020019191908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050909091908035906020019082018035906020019191908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050909091908035906020019082018035906020019191908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509090919050506105fd565b005b6104096004808035906020019091905050610ad2565b005b6104186004805050610be4565b6040518082815260200191505060405180910390f35b61043b6004805050610bed565b6040518082815260200191505060405180910390f35b61045e6004805050610bf6565b6040518082815260200191505060405180910390f35b61048a6004808035906020019091905050610bff565b005b6104a26004808035906020019091905050610d11565b60405180821515815260200191505060405180910390f35b6104d06004808035906020019091905050610d69565b60405180821515815260200191505060405180910390f35b60046000508054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156105815780601f1061055657610100808354040283529160200191610581565b820191906000526020600020905b81548152906001019060200180831161056457829003601f168201915b505050505081565b600560005060205280600052604060002060009150905080600001600050908060010160005054908060020160005054908060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806004016000505490806005016000509080600601600050905087565b610605610d8e565b151561061057610002565b826005600050600060026000505481526020019081526020016000206000506000016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061067e57805160ff19168380011785556106af565b828001600101855582156106af579182015b828111156106ae578251826000505591602001919060010190610690565b5b5090506106da91906106bc565b808211156106d657600081815060009055506001016106bc565b5090565b50506002600050546005600050600060026000505481526020019081526020016000206000506002016000508190555042600560005060006002600050548152602001908152602001600020600050600101600050819055503360056000506000600260005054815260200190815260200160002060005060030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff02191690830217905550806005600050600060026000505481526020019081526020016000206000506006016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106107eb57805160ff191683800117855561081c565b8280016001018555821561081c579182015b8281111561081b5782518260005055916020019190600101906107fd565b5b5090506108479190610829565b808211156108435760008181506000905550600101610829565b5090565b5050816005600050600060026000505481526020019081526020016000206000506005016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106108b757805160ff19168380011785556108e8565b828001600101855582156108e8579182015b828111156108e75782518260005055916020019190600101906108c9565b5b50905061091391906108f5565b8082111561090f57600081815060009055506001016108f5565b5090565b505043600560005060006002600050548152602001908152602001600020600050600401600050819055507f5790ff740478532dd0b26fde274d994d35fb0a26212aff826c15537195c4f0bb8360026000505433858560405180806020018681526020018573ffffffffffffffffffffffffffffffffffffffff16815260200180602001806020018481038452898181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156109f35780820380516001836020036101000a031916815260200191505b508481038352868181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f168015610a4c5780820380516001836020036101000a031916815260200191505b508481038252858181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f168015610aa55780820380516001836020036101000a031916815260200191505b509850505050505050505060405180910390a160026000818150548092919060010191905055505b505050565b610ada610d8e565b1515610ae557610002565b600160005060008273ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515610b9d5760006000818150548092919060010191905055507fa7d1aca229ccbcecfba9eba713308eba2a92d39862b1c8a715333387a07e9d91600082600060005054604051808481526020018373ffffffffffffffffffffffffffffffffffffffff168152602001828152602001935050505060405180910390a15b6001600160005060008373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908302179055505b50565b60026000505481565b60036000505481565b60006000505481565b610c07610d8e565b1515610c1257610002565b600160005060008273ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615610cca576000600081815054809291906001900391905055507fa7d1aca229ccbcecfba9eba713308eba2a92d39862b1c8a715333387a07e9d91600182600060005054604051808481526020018373ffffffffffffffffffffffffffffffffffffffff168152602001828152602001935050505060405180910390a15b6000600160005060008373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908302179055505b50565b6000600160005060008373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615610d5b5760019050610d64565b60009050610d64565b919050565b600160005060205280600052604060002060009150909054906101000a900460ff1681565b6000600160005060003373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050610dd1565b9056",
	"name": "ShortBlog"
}

