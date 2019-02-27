const { exec } = require("child_process");

test("version", done => {
  exec("node ./src/index.js --version", (_, stdout) => {
    expect(stdout).toEqual("1.0.0\n");

    done();
  });
});
