const inquirer = require("inquirer");

const searchTermInput = require("../src/searchTermInput");
const { SEARCH_TERM_INPUT_NAME, USERS_VALUE } = require("../src/constants");

jest.mock("inquirer");

test("searchTermInput", async () => {
  expect.assertions(1);

  const database = USERS_VALUE;
  const mockAnswer = { [SEARCH_TERM_INPUT_NAME]: "_id" };
  inquirer.prompt = jest.fn().mockResolvedValue(mockAnswer);

  await expect(searchTermInput(database)).resolves.toEqual(mockAnswer);
});
