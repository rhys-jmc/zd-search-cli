#!/usr/bin/env node

const program = require("commander");
const inquirer = require("inquirer");

const SEARCH_VALUE = "SEARCH";
const FIELDS_VALUE = "FIELDS";
const QUIT_VALUE = "QUIT";
const MAIN_MENU_NAME = "mainMenu";

program.version("1.0.0");

program.parse(process.argv);

const main = () => {
  console.clear();
  console.log(`Welcome to Zendesk Search\n`);
  mainMenu();
};

const mainMenu = () => {
  inquirer
    .prompt({
      type: "list",
      name: MAIN_MENU_NAME,
      message: "Select search options:",
      choices: [
        { name: "Search Zendesk", value: SEARCH_VALUE },
        { name: "View a list of searchable fields", value: FIELDS_VALUE },
        { name: "Quit", value: QUIT_VALUE }
      ]
    })
    .then(answers => {
      switch (answers[MAIN_MENU_NAME]) {
        case SEARCH_VALUE:
          mainMenu();
          break;
        case FIELDS_VALUE:
          mainMenu();
          break;
        case QUIT_VALUE:
          mainMenu();
          break;
      }
    });
};

main();
