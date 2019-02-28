const users = require("../data/users.json");
const tickets = require("../data/tickets.json");
const organizations = require("../data/organizations.json");

const USERS_VALUE = "USERS";
const TICKETS_VALUE = "TICKETS";
const ORGANIZATIONS_VALUE = "ORGANIZATIONS";

module.exports = {
  SEARCH_VALUE: "SEARCH",
  FIELDS_VALUE: "FIELDS",
  QUIT_VALUE: "QUIT",
  USERS_VALUE,
  TICKETS_VALUE: "TICKETS",
  ORGANIZATIONS_VALUE: "ORGANIZATIONS",
  MAIN_MENU_NAME: "mainMenu",
  SEARCH_MENU_NAME: "searchMenu",
  SEARCH_TERM_INPUT_NAME: "searchTermInput",
  SEARCH_VALUE_INPUT_NAME: "searchValueInput",
  LOOKUP_TABLE: {
    [USERS_VALUE]: users,
    [TICKETS_VALUE]: tickets,
    [ORGANIZATIONS_VALUE]: organizations
  },
  SEPARATOR: `${Array.from(Array(30))
    .map(() => "-")
    .join("")}`
};
