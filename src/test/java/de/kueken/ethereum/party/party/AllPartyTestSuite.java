package de.kueken.ethereum.party.party;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;

@RunWith(Suite.class)
@Suite.SuiteClasses({
OrganTest.class
,PartyTest.class
,KUEKeNPartyTest.class
,ConferenceTest.class
,FoundationConferenceTest.class
,OrganFunctionTest.class
//Start of user code customTests  
,de.kueken.ethereum.party.deployer.KUEKeNDeployerTest.class
//End of user code
})
public class AllPartyTestSuite {
}
