import calculator from "../src/calculator.js";

describe("calculator", () => {
	test("adds two numbers", () => {
		expect(calculator.add(2, 3)).toBe(5);
	});

	test("subtracts two numbers", () => {
		expect(calculator.subtract(5, 3)).toBe(2);
	});

	test("multiplies two numbers", () => {
		expect(calculator.multuply(4, 5)).toBe(20);
	});

	test("divides two numbers", () => {
		expect(calculator.divide(10, 2)).toBe(5);
	});

	test("dividing by zero returns Infinity", () => {
		expect(calculator.divide(5, 0)).toBe(Infinity);
	});
});
