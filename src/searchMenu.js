const inquirer = require("inquirer");

const searchTermInput = require("./searchTermInput");
const {
  ORGANIZATIONS_VALUE,
  SEARCH_MENU_NAME,
  USERS_VALUE,
  TICKETS_VALUE
} = require("./constants");

module.exports = () => {
  inquirer
    .prompt({
      type: "list",
      name: SEARCH_MENU_NAME,
      message: "Select which search to perform",
      choices: [
        { name: "Users", value: USERS_VALUE },
        { name: "Tickets", value: TICKETS_VALUE },
        { name: "Organizations", value: ORGANIZATIONS_VALUE }
      ]
    })
    .then(answers => searchTermInput(answers[SEARCH_MENU_NAME]));
};
