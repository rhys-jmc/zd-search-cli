const inquirer = require("inquirer");

const searchValueInput = require("./searchValueInput");
const { SEARCH_TERM_INPUT_NAME } = require("./constants");

module.exports = database =>
  inquirer
    .prompt({
      type: "input",
      name: SEARCH_TERM_INPUT_NAME,
      message: "Enter search term"
    })
    .then(answers =>
      searchValueInput(database, answers[SEARCH_TERM_INPUT_NAME])
    );
