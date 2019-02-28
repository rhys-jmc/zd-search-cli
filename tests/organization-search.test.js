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

      done();
    });
  });
});
