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

  items.forEach(item => {
    console.log(SEPARATOR);
    console.log(`Search ${item.name} with`);

    Object.keys(item.example).forEach(key => {
      console.log(key);
    });
  });

  return items;
};
