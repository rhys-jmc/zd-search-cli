const organizations = require("../data/organizations.json");
const tickets = require("../data/tickets.json");
const users = require("../data/users.json");

const { SEPARATOR } = require("./constants");

module.exports = () => {
  const items = [
    { name: "Users", example: users[0] },
    { name: "Tickets", example: tickets[0] },
    { name: "Organizations", example: organizations[0] }
  ];

  const output = items.map(item => {
    const log = `${SEPARATOR}
Search ${item.name} with
${Object.keys(item.example).join("\n")}`;

    console.log(log);

    return log;
  });

  return output;
};
