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

      expect(lines).toContain(
        "subject:            A Catastrophe in Korea (North)"
      );
      expect(lines).toContain("organization:       Zentry");
      expect(lines).toContain("submitter:          Elma Castro");
      expect(lines).toContain("assignee:           Harris Côpeland");

      done();
    });
  });

  test("search by _id", done => {
    execute("./src/index.js", [
      ENTER,
      DOWN,
      ENTER,
      "_id",
      ENTER,
      "not a real id",
      ENTER
    ]).then(response => {
      const lines = response.trim().split(EOL);

      expect(lines).toContain("No results found");

      done();
    });
  });
});
