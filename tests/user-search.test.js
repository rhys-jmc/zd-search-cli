const { EOL } = require("os");
const { execute, ENTER } = require("./cmd");

describe("user search", () => {
  test("search by _id", done => {
    execute("./src/index.js", [ENTER, ENTER, "_id", ENTER, "1", ENTER]).then(
      response => {
        const lines = response.trim().split(EOL);

        expect(lines).toContain("name:               Francisca Rasmussen");

        done();
      }
    );
  });
});
