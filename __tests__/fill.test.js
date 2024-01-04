import fill from "../src/fill.js";

const array = [1, 2, 3, 4];

test("test fill function", () => {
  expect(fill([...array], "*", 1, 3)).toEqual([1, "*", "*", 4]);
  expect(fill([...array], "*")).toEqual(["*", "*", "*", "*"]);
  expect(fill([...array], "*", -10)).toEqual(["*", "*", "*", "*"]);
  expect(fill([...array], "*", 4)).toEqual([1, 2, 3, 4]);
  expect(fill([...array], "*", 3)).toEqual([1, 2, 3, "*"]);
  expect(fill([...array], "*", 0, 10)).toEqual(["*", "*", "*", "*"]);
});
