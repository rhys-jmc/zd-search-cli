const index = require("../src/index");
const main = require("../src/main");

test("index", () => {
  expect(index).toEqual(main());
});
