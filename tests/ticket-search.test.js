const { EOL } = require("os");
const { execute, DOWN, ENTER } = require("./cmd");

describe("ticket search", () => {
  test("search by _id", done => {
    execute("./src/index.js", [
      ENTER,
      DOWN,
      ENTER,
      "_id",
      ENTER,
      "436bf9b0-1147-4c0a-8439-6f79833bff5b",
      ENTER
    ]).then(response => {
      const lines = response.trim().split(EOL);

      console.log(lines);

      expect(lines).toContain(
        "subject:            A Catastrophe in Korea (North)"
      );

      done();
    });
  });
});
