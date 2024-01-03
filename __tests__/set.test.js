import _ from "lodash";
import { beforeEach } from "@jest/globals";

const object = { a: [{ b: { c: 3 } }] };

let mock;

beforeEach(() => {
  mock = _.cloneDeep(object);
});

test("set", () => {
  expect(_.set(mock, "a", 4)).toEqual({ a: 4 });
});

test("set1", () => {
  expect(_.set(mock, "key", 4)).toEqual({ a: [{ b: { c: 3 } }], key: 4 });
});

test("set2", () => {
  _.set(mock, "b[0].b.c", 4);
  expect(mock.b[0].b.c).toEqual(4);
});

test("set3", () => {
  _.set(mock, ["x", "0", "y", "z"], 5);
  expect(mock.x[0].y.z).toBe(5);
});

test("set4", () => {
  _.set(mock, [], 5);
  expect(mock).toEqual({ a: [{ b: { c: 3 } }] });
});
