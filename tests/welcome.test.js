const { EOL } = require("os");
const { execute } = require("./cmd");

test("welcome", done => {
  execute("./src/index.js").then(response => {
    const lines = response.trim().split(EOL);

    expect(lines).toContain("Welcome to Zendesk Search");

    done();
  });
});
