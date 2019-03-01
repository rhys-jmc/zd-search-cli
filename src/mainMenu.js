const inquirer = require("inquirer");

const listFields = require("./listFields");
const searchMenu = require("./searchMenu");
const {
  FIELDS_VALUE,
  QUIT_VALUE,
  MAIN_MENU_NAME,
  SEARCH_VALUE
} = require("./constants");

const mainMenu = async () => {
  console.log("\n");

  const answers = await inquirer.prompt({
    type: "list",
    name: MAIN_MENU_NAME,
    message: "Select search options:",
    choices: [
      { name: "Search Zendesk", value: SEARCH_VALUE },
      { name: "View a list of searchable fields", value: FIELDS_VALUE },
      { name: "Quit", value: QUIT_VALUE }
    ]
  });

  switch (answers[MAIN_MENU_NAME]) {
    case SEARCH_VALUE:
      return { answers, next: searchMenu() };
    case FIELDS_VALUE:
      return { answers, next: listFields() };
    case QUIT_VALUE:
      return { answers, next: null };
  }
};

module.exports = mainMenu;
