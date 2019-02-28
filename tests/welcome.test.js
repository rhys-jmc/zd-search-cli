const { spawn } = require("child_process");

test("welcome", done => {
  const zdSearch = spawn("node", ["./src/index.js"]);

  let counter = 0;

  zdSearch.stdout.on("data", data => {
    const output = data.toString();
    const lines = output.split("\n");

    // console.log({ lines, counter });

    switch (counter) {
      case 0:
        expect(lines).toEqual(["Welcome to Zendesk Search", ""]);
        break;
      case 1:
        expect(lines).toEqual([
          "",
          "",
          "? Select search options: (Use arrow keys)",
          "❯ Search Zendesk ",
          "  View a list of searchable fields ",
          "  Quit \u001b[7D\u001b[7C"
        ]);
        break;
    }

    counter++;

    if (counter >= 2) {
      zdSearch.kill();
      done();
    }
  });
});
