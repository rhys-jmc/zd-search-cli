const organizations = require("../data/organizations.json");
const tickets = require("../data/tickets.json");
const users = require("../data/users.json");

module.exports = result => {
  // fetch organisation data from id if available
  if (result.organization_id) {
    const organization = organizations.find(
      org => org._id === result.organization_id
    );

    if (organization) {
      result.organization = organization.name;
    }
  }

  // fetch submitter data from id if available
  if (result.submitter_id) {
    const user = users.find(u => u._id === result.submitter_id);

    if (user) {
      result.submitter = user.name;
    }
  }

  // fetch assignee data from id if available
  if (result.assignee_id) {
    const user = users.find(u => u._id === result.assignee_id);

    if (user) {
      result.assignee = user.name;
    }
  }

  // if user result, add associated tickets as submitter
  if (result.url.includes("users")) {
    const userTickets = tickets.filter(
      ticket => ticket.submitter_id === result._id
    );

    userTickets.forEach((ticket, index) => {
      result[`ticket_${index}`] = ticket.subject;
    });
  }

  // if organization result, add associated tickets
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
