const listFields = require("../src/listFields");

test("listFields", () => {
  expect(listFields()).toEqual([
    "------------------------------\nSearch Users with\n_id\nurl\nexternal_id\nname\nalias\ncreated_at\nactive\nverified\nshared\nlocale\ntimezone\nlast_login_at\nemail\nphone\nsignature\norganization_id\ntags\nsuspended\nrole",
    "------------------------------\nSearch Tickets with\n_id\nurl\nexternal_id\ncreated_at\ntype\nsubject\ndescription\npriority\nstatus\nsubmitter_id\nassignee_id\norganization_id\ntags\nhas_incidents\ndue_at\nvia",
    "------------------------------\nSearch Organizations with\n_id\nurl\nexternal_id\nname\ndomain_names\ncreated_at\ndetails\nshared_tickets\ntags"
  ]);
});
