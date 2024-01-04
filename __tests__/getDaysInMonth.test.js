import getDaysInMonth from "../src/getDaysinMonth.js";

test("testing function getDaysInMonth()", () => {
  expect(getDaysInMonth(4, 2024)).toBe(30);
  expect(getDaysInMonth(2, 2024)).toBe(29);
  expect(getDaysInMonth(2, 2023)).toBe(28);
  expect(getDaysInMonth(13, 2024)).toBeNull();
  expect(getDaysInMonth(0, 2024)).toBeNull();
  expect(getDaysInMonth(1, 2024)).toBe(31);
});
