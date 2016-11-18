# party-contracts
solidity contracts to build a party dao

The project layout has changed according to (https://github.com/UrsZeidler/uml2solidity/wiki/TestWithJava), so the current mix directory with the contract contract code is here: https://github.com/KuekenPartei/party-contracts/tree/master/src/test/resources/mix

The old mix directory will be removed soon.

The current testnet deplpoyment can be found here: http://testdapp.xn--klarmachen-ndert-5nb.de/k-party/www/kp.html (Note you need a ethereum browser like mist.)

This instance has the following structure:

* KUEKEN Party (instance KUKENParty)
	* Gruendungsveranstaltung (instance FoundationConference)
		* Versammlungsleiter 1 (instance OrganFunction)
		* Versammlungsleiter 2 (instance OrganFunction)
	* BUVO/Bundesvorstand (instance Organ)
		* 1. Vorsitzede (instance OrganFunction)
		* 2. Vorsitzede (instance OrganFunction)

It also contains a member Registry and a BlogRegistry, each party part has a associated ShortBlog to publish messages.


The structure of the [party](https://github.com/KuekenPartei/party-contracts/blob/master/doc/party.md).

![](https://github.com/KuekenPartei/party-contracts/blob/master/doc/ClassDiagram-party.png)

The member [registry](https://github.com/KuekenPartei/party-contracts/blob/master/doc/members.md).

![](https://github.com/KuekenPartei/party-contracts/blob/master/doc/ClassDiagram-members.png)

The publishing [contracts](https://github.com/KuekenPartei/party-contracts/blob/master/doc/publishing.md).

![](https://github.com/KuekenPartei/party-contracts/blob/master/doc/ClassDiagram-publishing.png)

For each party part there is simple blog created which is the official publishing platform, as it is reliable, transparent, safe and uncensorable.   

The basic contracts.

![](https://github.com/KuekenPartei/party-contracts/blob/master/doc/ClassDiagram-basics.png)

 Find more documentation at [doc](https://github.com/KuekenPartei/party-contracts/blob/master/doc/)
 
 Find out more about the KUEKEN (http://kueken-partei.de/) it's only german by now.