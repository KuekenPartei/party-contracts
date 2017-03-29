package de.kueken.ethereum.party;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.junit.runners.Suite.SuiteClasses;

import de.kueken.ethereum.party.basics.AllBasicsTestSuite;
import de.kueken.ethereum.party.members.AllMembersTestSuite;
import de.kueken.ethereum.party.party.AllPartyTestSuite;
import de.kueken.ethereum.party.publishing.AllPublishingTestSuite;
import de.kueken.ethereum.party.voting.AllVotingTestSuite;

@RunWith(Suite.class)
@SuiteClasses({AllBasicsTestSuite.class,
	AllPublishingTestSuite.class,
	AllPartyTestSuite.class,
	AllMembersTestSuite.class,
	AllVotingTestSuite.class
})
public class AllTests {

}
