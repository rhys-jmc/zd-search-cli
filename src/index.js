#!/usr/bin/env node

const program = require("commander");
const filter = require("lodash.filter");
const omit = require("lodash.omit");
const organizations = require("../data/organizations.json");

const list = val => val.split(",");

program.version("1.0.0");

program
  .usage("organizations")
  .description("Search organizations")
  .option("--external_id [external_id]", "Search by external ID")
  .option("--name [name]", "Search by name")
  .option("--domain_names [domain_names]", "Search by domain names", list)
  .option("--details [details]", "Search by details")
  .option("--tags [tags]", "Search by tags", list)
  .action((_, options) => {
    if (typeof options.name === "function") {
      // it appears options.name has a function value when not set
      // this disrupts the filtering below
      // unset it to enable intended search functionality
      options.name = undefined;
    }

    // the options object has a lot of other keys that we don't used when filtering our data
    const searchParams = Object.assign(
      options.external_id ? { external_id: options.external_id } : {},
      options.name ? { name: options.name } : {},
      options.domain_names ? { domain_names: options.domain_names } : {},
      options.details ? { details: options.details } : {},
      options.tags ? { tags: options.tags } : {},
      {}
    );

    const results = filter(organizations, searchParams).map(org =>
      // omit private keys
      omit(org, "_id")
    );

    console.log(JSON.stringify(results));
  });

program.parse(process.argv);
