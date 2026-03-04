import capitalize from "../src/capitalize.js";

describe("capitalize", () => {
	test("capitalize the first letter of a lowercase word", () => {
		expect(capitalize("hello")).toBe("Hello");
	});

	test("keeps the first letter capitalized if already capitalized", () => {
		expect(capitalize("World")).toBe("World");
	});

	test("works with single-character strings", () => {
		expect(capitalize("a")).toBe("A");
	});

	test("returns empty string if input is empty", () => {
		expect(capitalize("")).toBe("");
	});
});
