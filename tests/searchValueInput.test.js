const inquirer = require("inquirer");

const searchValueInput = require("../src/searchValueInput");
const {
  LOOKUP_TABLE,
  SEARCH_VALUE_INPUT_NAME,
  USERS_VALUE
} = require("../src/constants");

jest.mock("inquirer");

describe("searchValueInput", () => {
  test("search by number", async () => {
    expect.assertions(1);

    const database = USERS_VALUE;
    const term = "_id";
    const expectedResult = LOOKUP_TABLE[database][0];
    const mockAnswer = { [SEARCH_VALUE_INPUT_NAME]: expectedResult[term] };
    inquirer.prompt = jest.fn().mockResolvedValue(mockAnswer);

    await expect(searchValueInput(database, term)).resolves.toEqual([
      expectedResult
    ]);
  });

  test("search by boolean", async () => {
    expect.assertions(1);

    const database = USERS_VALUE;
    const term = "active";
    const expectedResult = LOOKUP_TABLE[database][0];
    const mockAnswer = {
      [SEARCH_VALUE_INPUT_NAME]: expectedResult[term].toString()
    };
    inquirer.prompt = jest.fn().mockResolvedValue(mockAnswer);

    await expect(searchValueInput(database, term)).resolves.toContain(
      expectedResult
    );
  });

  test("search by string", async () => {
    expect.assertions(1);

    const database = USERS_VALUE;
    const term = "alias";
    const expectedResult = LOOKUP_TABLE[database][0];
    const mockAnswer = { [SEARCH_VALUE_INPUT_NAME]: expectedResult[term] };
    inquirer.prompt = jest.fn().mockResolvedValue(mockAnswer);

    await expect(searchValueInput(database, term)).resolves.toEqual([
      expectedResult
    ]);
  });

  test("search by array", async () => {
    expect.assertions(1);

    const database = USERS_VALUE;
    const term = "tags";
    const expectedResult = LOOKUP_TABLE[database][0];
    const mockAnswer = { [SEARCH_VALUE_INPUT_NAME]: expectedResult[term][0] };
    inquirer.prompt = jest.fn().mockResolvedValue(mockAnswer);

    await expect(searchValueInput(database, term)).resolves.toEqual([
      expectedResult
    ]);
  });
});
