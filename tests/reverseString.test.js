import reverseString from "../src/reverseString.js";

describe("reverseString", () => {
	test("reverses a normal string", () => {
		expect(reverseString("hello")).toBe("olleh");
	});

	test("reverses a single-character string", () => {
		expect(reverseString("a")).toBe("a");
	});

	test("reverses a string with spaces", () => {
		expect(reverseString("hello world")).toBe("dlrow olleh");
	});

	test("returns empty string if input is empty", () => {
		expect(reverseString("")).toBe("");
	});
});
