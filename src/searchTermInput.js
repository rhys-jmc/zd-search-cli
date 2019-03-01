const inquirer = require("inquirer");

const searchValueInput = require("./searchValueInput");
const { SEARCH_TERM_INPUT_NAME } = require("./constants");

module.exports = async database => {
  const answers = await inquirer.prompt({
    type: "input",
    name: SEARCH_TERM_INPUT_NAME,
    message: "Enter search term"
  });

  searchValueInput(database, answers[SEARCH_TERM_INPUT_NAME]);

  return answers;
};
