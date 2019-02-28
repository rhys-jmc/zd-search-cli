const { EOL } = require("os");
const { execute } = require("./cmd");

test("welcome", done => {
  execute("./src/index.js").then(response => {
    const lines = response.trim().split(EOL);

    expect(lines).toEqual([
      "Welcome to Zendesk Search",
      "",
      "",
      "? Select search options: (Use arrow keys)",
      "❯ Search Zendesk ",
      "  View a list of searchable fields ",
      "  Quit \u001b[7D\u001b[7C"
    ]);

    done();
  });
});
