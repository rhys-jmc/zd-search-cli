const { EOL } = require("os");
const { execute, DOWN, ENTER } = require("./cmd");

describe("organization search", () => {
  test("search by _id", done => {
    execute("./src/index.js", [
      ENTER,
      DOWN,
      DOWN,
      ENTER,
      "_id",
      ENTER,
      "101",
      ENTER
    ]).then(response => {
      const lines = response.trim().split(EOL);

      expect(lines).toContain("name:              Enthaze");
      expect(lines).toContain("ticket_3:          A Problem in Guyana");

      done();
    });
  });

  test("search by domain_names", done => {
    execute("./src/index.js", [
      ENTER,
      DOWN,
      DOWN,
      ENTER,
      "domain_names",
      ENTER,
      "kage.com",
      ENTER
    ]).then(response => {
      const lines = response.trim().split(EOL);

      expect(lines).toContain("name:              Enthaze");

      done();
    });
  });
});
