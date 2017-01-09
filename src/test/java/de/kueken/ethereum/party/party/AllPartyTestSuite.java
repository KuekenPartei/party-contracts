package de.kueken.ethereum.party.party;

import org.junit.runners.Suite;

import de.kueken.ethereum.party.basics.AllBasicsTestSuite;
import de.kueken.ethereum.party.members.AllMembersTestSuite;
import de.kueken.ethereum.party.publishing.AllPublishingTestSuite;

import org.junit.runner.RunWith;

@RunWith(Suite.class)
@Suite.SuiteClasses({
OrganTest.class
,PartyTest.class
,KUEKeNPartyTest.class
,ConferenceTest.class
,FoundationConferenceTest.class
,OrganFunctionTest.class
//Start of user code customTests    
,AllBasicsTestSuite.class
,AllPublishingTestSuite.class
,AllMembersTestSuite.class
//End of user code
})
public class AllPartyTestSuite {
}
