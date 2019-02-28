const { spawn } = require("child_process");

let counter = 0;

test("welcome", done => {
  const zdSearch = spawn("node", ["./src/index.js"]);

  zdSearch.stdout.on("data", data => {
    const output = data.toString();
    const lines = output.split("\n");

    switch (counter) {
      case 0:
        expect(lines).toEqual(["Welcome to Zendesk Search", "", ""]);

        counter++;

        return;

      case 1:
        expect(lines).toEqual([
          `? Select search options: (Use arrow keys)`,
          "❯ Search Zendesk ",
          "  View a list of searchable fields ",
          "  Quit "
        ]);

        counter++;

        return;

      case 2:
        expect(lines).toEqual(["\u001b[7D\u001b[7C"]);

        zdSearch.kill();
        done();

        return;
    }
  });
});
