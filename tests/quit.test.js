const { EOL } = require("os");
const { execute, DOWN, ENTER } = require("./cmd");

test("quit", done => {
  execute("./src/index.js", [DOWN, DOWN, ENTER]).then(response => {
    const lines = response.trim().split(EOL);

    const lastLine = lines
      .slice(-1)[0]
      .replace(
        /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g,
        ""
      );

    expect(lastLine).toContain("Quit ? Select search options: Quit");

    done();
  });
});
