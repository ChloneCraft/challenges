import { add } from "./index";
import { subtract } from "./index";
import { multiply } from "./index";
import { divide } from "./index";

//add ------------------------------
test("add() function returns 5 if arguments are 2 and 3", () => {
  const result = add(2, 3);
  expect(result).toBe(5);
});
test("add() function returns a negative value if the greater argument is negative", () => {
  const result = add(2, -3);
  expect(result).toBeLessThan(0);
});
test("add() function returns 0.3 if arguments are 0.1 and 0.2", () => {
  const result = add(0.2, 0.1);
  expect(result).toBeCloseTo(0.3);
});

//subtract ------------------------------
test("subtract() function returns 10 for values 15, 5", () => {
  const result = subtract(15, 5);
  expect(result).toBe(10);
});
test("subtract() function returns a negative value if 2nd argument is > than 1st one", () => {
  const result = subtract(5, 15);
  expect(result).toBeLessThan(0);
});

//multiply ------------------------------
test("multiply() function returns 8 is called with 3,4", () => {
  const result = multiply(2, 4);
  expect(result).toBe(8);
});
test("multiply() function returns negative value if only first argument is negative", () => {
  const result = multiply(-2, 4);
  expect(result).toBeLessThan(0);
});
test("multiply() function returns negative value if only second argument is negative", () => {
  const result = multiply(2, -4);
  expect(result).toBeLessThan(0);
});
test("multiply() function returns a positive value if both arguments are negative", () => {
  const result = multiply(-2, -4);
  expect(result).toBeGreaterThan(0);
});

//divide ------------------------------
test("divide() function returns 3 if arguments are 9 and 3", () => {
  const result = divide(9, 3);
  expect(result).toBe(3);
});
test("divide() function returns 'You should not do this!' if second argument is 0", () => {
  const result = divide(9, 0);
  expect(result).toBe("You should not do this!");
});
