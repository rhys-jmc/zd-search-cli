#!/usr/bin/env node

const program = require("commander");

const main = require("./main");

program.version("1.0.0").parse(process.argv);

main();
