// Compiled by ClojureScript 1.10.238 {}
goog.provide('tcrfactory.shared.graphql_schema');
goog.require('cljs.core');
tcrfactory.shared.graphql_schema.graphql_schema = "\n  scalar Date\n  scalar Keyword\n\n  type Query {\n    registry(registry_address: ID!): Registry\n    searchRegistries(keyword: String): [Registry]\n  }\n\n  enum RegEntryStatus {\n    regEntry_status_challengePeriod\n    regEntry_status_commitPeriod\n    regEntry_status_revealPeriod\n    regEntry_status_blacklisted\n    regEntry_status_whitelisted\n  }\n\n  type Registry {\n    registry_address: ID\n    registry_title: String\n    registry_description: String\n    registry_db: String\n    registry_token: String\n    registry_tokenTotalSupply: String\n    registry_tokenName: String\n    registry_tokenSymbol: String\n    registry_challengePeriodDuration: Int\n    registry_commitPeriodDuration: Int\n    registry_revealPeriodDuration: Int\n    registry_deposit: Int\n    registry_entries(status: RegEntryStatus): [RegEntry]\n  }\n\n  type RegEntry {\n    regEntry_address: ID\n    regEntry_version: Int\n    regEntry_title: String\n    regEntry_description: String\n    regEntry_status: RegEntryStatus\n    regEntry_creator: String\n    regEntry_deposit: Int\n    regEntry_createdOn: Date\n    regEntry_challengePeriodEnd: Date\n    challenge_challenger: String\n    challenge_createdOn: Date\n    challenge_description: String\n    challenge_rewardPool: Int\n    challenge_commitPeriodEnd: Date\n    challenge_revealPeriodEnd: Date\n    challenge_votesFor: Int\n    challenge_votesAgainst: Int\n    challenge_votesTotal: Int\n    challenge_claimedRewardOn: Date\n  }\n";

//# sourceMappingURL=graphql_schema.js.map?rel=1526900920511