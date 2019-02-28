#!/usr/bin/env node

const program = require("commander");
const inquirer = require("inquirer");

const users = require("../data/users.json");
const tickets = require("../data/tickets.json");
const organizations = require("../data/organizations.json");

const SEARCH_VALUE = "SEARCH";
const FIELDS_VALUE = "FIELDS";
const QUIT_VALUE = "QUIT";
const USERS_VALUE = "USERS";
const TICKETS_VALUE = "TICKETS";
const ORGANIZATIONS_VALUE = "ORGANIZATIONS";
const MAIN_MENU_NAME = "mainMenu";
const SEARCH_MENU_NAME = "searchMenu";
const SEARCH_TERM_INPUT_NAME = "searchTermInput";
const SEARCH_VALUE_INPUT_NAME = "searchValueInput";

const LOOKUP_TABLE = {
  [USERS_VALUE]: users,
  [TICKETS_VALUE]: tickets,
  [ORGANIZATIONS_VALUE]: organizations
};

const SEPARATOR = `${Array.from(Array(30))
  .map(() => "-")
  .join("")}`;

program.version("1.0.0");

program.parse(process.argv);

const main = () => {
  console.clear();
  console.log(`Welcome to Zendesk Search`);
  mainMenu();
};

const mainMenu = () => {
  console.log("\n");

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

const searchMenu = () => {
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

const searchTermInput = database => {
  inquirer
    .prompt({
      type: "input",
      name: SEARCH_TERM_INPUT_NAME,
      message: "Enter search term"
    })
    .then(answers =>
      searchValueInput(database, answers[SEARCH_TERM_INPUT_NAME])
    );
};

const searchValueInput = (database, term) => {
  inquirer
    .prompt({
      type: "input",
      name: SEARCH_VALUE_INPUT_NAME,
      message: "Enter search value"
    })
    .then(answers => {
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

      mainMenu();
    });
};

const formatResult = result => {
  if (result.organization_id) {
    const organization = organizations.find(
      org => org._id === result.organization_id
    );

    if (organization) {
      result.organization = organization.name;
    }
  }

  if (result.submitter_id) {
    const user = users.find(u => u._id === result.submitter_id);

    if (user) {
      result.submitter = user.name;
    }
  }

  if (result.assignee_id) {
    const user = users.find(u => u._id === result.assignee_id);

    if (user) {
      result.assignee = user.name;
    }
  }

  if (result.url.includes("users")) {
    const userTickets = tickets.filter(
      ticket => ticket.submitter_id === result._id
    );

    userTickets.forEach((ticket, index) => {
      result[`ticket_${index}`] = ticket.subject;
    });
  }

  if (result.url.includes("organizations")) {
    const orgTickets = tickets.filter(
      ticket => ticket.organization_id === result._id
    );

    orgTickets.forEach((ticket, index) => {
      result[`ticket_${index}`] = ticket.subject;
    });
  }

  const keys = Object.keys(result);
  const maxKeyLength = Math.max(...keys.map(key => key.length));
  const valueIndent = maxKeyLength + 4;

  return Object.entries(result)
    .map(entry => {
      const trailingPadLength = valueIndent - entry[0].length;
      const trailingPad = Array.from(Array(trailingPadLength))
        .map(() => " ")
        .join("");

      return `${entry[0]}:${trailingPad}${entry[1]}`;
    })
    .join("\n");
};

const listFields = () => {
  const items = [
    { name: "Users", example: users[0] },
    { name: "Tickets", example: tickets[0] },
    { name: "Organizations", example: organizations[0] }
  ];

  items.forEach(item => {
    console.log(SEPARATOR);
    console.log(`Search ${item.name} with`);

    Object.keys(item.example).forEach(key => {
      console.log(key);
    });
  });

  mainMenu();
};

main();
