const main = require("../src/main");
const mainMenu = require("../src/mainMenu");

test("main", () => {
  expect(main()).toEqual(mainMenu());
});
