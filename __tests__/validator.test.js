import _ from "lodash";
import getImplementation from "../src/validator.js";

const makeValidator = getImplementation();

makeValidator.addCheck((v) => {
  if (typeof v === "string") {
    return false;
  } else return true;
});

test("validator", () => {
  expect(makeValidator.isValid("")).toBe(false);
  expect(makeValidator.isValid(2)).toBe(true);
});
