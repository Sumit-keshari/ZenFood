import { sum } from "../sum";

test("calculate sum of number", () => {
  const result = sum(5, 2);
  expect(result).toBe(7);
});
