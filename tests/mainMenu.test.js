const inquirer = require("inquirer");
const mainMenu = require("../src/mainMenu");
const listFields = require("../src/listFields");
const searchMenu = require("../src/searchMenu");

const {
  FIELDS_VALUE,
  MAIN_MENU_NAME,
  QUIT_VALUE,
  SEARCH_VALUE
} = require("../src/constants");

jest.mock("inquirer");

describe("mainMenu", () => {
  test("select search", async () => {
    expect.assertions(1);

    const mockAnswer = { [MAIN_MENU_NAME]: SEARCH_VALUE };
    inquirer.prompt = jest.fn().mockResolvedValue(mockAnswer);

    await expect(mainMenu()).resolves.toEqual({
      answers: mockAnswer,
      next: searchMenu()
    });
  });

  test("select list", async () => {
    expect.assertions(1);

    const mockAnswer = { [MAIN_MENU_NAME]: FIELDS_VALUE };
    inquirer.prompt = jest.fn().mockResolvedValue(mockAnswer);

    await expect(mainMenu()).resolves.toEqual({
      answers: mockAnswer,
      next: listFields()
    });
  });

  test("select quit", async () => {
    expect.assertions(1);

    const mockAnswer = { [MAIN_MENU_NAME]: QUIT_VALUE };
    inquirer.prompt = jest.fn().mockResolvedValue(mockAnswer);

    await expect(mainMenu()).resolves.toEqual({
      answers: mockAnswer,
      next: null
    });
  });
});
