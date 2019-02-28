const inquirer = require("inquirer");

const listFields = require("./listFields");
const searchMenu = require("./searchMenu");
const {
  FIELDS_VALUE,
  QUIT_VALUE,
  MAIN_MENU_NAME,
  SEARCH_VALUE
} = require("./constants");

const mainMenu = () => {
  console.log("\n");

  return inquirer
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
          searchMenu();
          return;
        case FIELDS_VALUE:
          listFields();
          return;
        case QUIT_VALUE:
          return;
        default:
          mainMenu();
      }
    });
};

module.exports = mainMenu;
