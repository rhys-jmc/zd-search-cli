const { EOL } = require("os");
const { execute, DOWN, ENTER } = require("./cmd");

test("welcome", done => {
  execute("./src/index.js", [DOWN, ENTER]).then(response => {
    const lines = response.trim().split(EOL);

    ["Users", "Organizations", "Tickets"].forEach(header => {
      expect(lines).toContain(`Search ${header} with`);
    });

    done();
  });
});
