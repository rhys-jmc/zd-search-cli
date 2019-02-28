const { EOL } = require("os");
const { execute, ENTER } = require("./cmd");

describe("user search", () => {
  test("search by _id", done => {
    execute("./src/index.js", [ENTER, ENTER, "_id", ENTER, "1", ENTER]).then(
      response => {
        const lines = response.trim().split(EOL);

        expect(lines).toContain("name:               Francisca Rasmussen");
        expect(lines).toContain("organization:       Multron");
        expect(lines).toContain(
          "ticket_1:           A Nuisance in Saint Lucia"
        );

        done();
      }
    );
  });

  test("search by name", done => {
    execute("./src/index.js", [
      ENTER,
      ENTER,
      "name",
      ENTER,
      "Francisca Rasmussen",
      ENTER
    ]).then(response => {
      const lines = response.trim().split(EOL);

      expect(lines).toContain("name:               Francisca Rasmussen");

      done();
    });
  });

  test("search by tags", done => {
    execute("./src/index.js", [
      ENTER,
      ENTER,
      "tags",
      ENTER,
      "Springville",
      ENTER
    ]).then(response => {
      const lines = response.trim().split(EOL);

      expect(lines).toContain("name:               Francisca Rasmussen");

      done();
    });
  });

  test("search by active", done => {
    execute("./src/index.js", [
      ENTER,
      ENTER,
      "active",
      ENTER,
      "true",
      ENTER
    ]).then(response => {
      const lines = response.trim().split(EOL);

      expect(lines).toContain("name:               Francisca Rasmussen");
      expect(lines.length).toBe(926);

      done();
    });
  });
});
