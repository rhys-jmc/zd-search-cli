const inquirer = require("inquirer");

const formatResult = require("./formatResult");
const {
  LOOKUP_TABLE,
  SEARCH_VALUE_INPUT_NAME,
  SEPARATOR
} = require("./constants");

module.exports = async (database, term) => {
  const answers = await inquirer.prompt({
    type: "input",
    name: SEARCH_VALUE_INPUT_NAME,
    message: "Enter search value"
  });

  const value = answers[SEARCH_VALUE_INPUT_NAME];
  const data = LOOKUP_TABLE[database];
  const results = data.filter(datum => {
    const datumValue = datum[term];

    switch (typeof datumValue) {
      case "boolean":
        return datumValue.toString() === value;
      case "number":
      case "string":
        return [value, Number(value)].includes(datumValue);
      case "object":
        const arr = Array.isArray(datumValue)
          ? datumValue
          : Object.values(datumValue);

        return arr.includes(value) || arr.includes(Number(value));
    }
  });

  if (results.length === 0) {
    console.log("No results found");
  } else {
    console.log(results.map(formatResult).join(`\n${SEPARATOR}\n`));
  }

  return results;
};
