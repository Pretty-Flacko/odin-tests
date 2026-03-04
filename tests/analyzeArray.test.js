import analyzeArray from "../src/analyzeArray.js";

describe("analyzeArray", () => {
	const arr = [1, 8, 3, 4, 2];

	test("calculates average correctly", () => {
		expect(analyzeArray(arr).average).toBeCloseTo(3.6);
	});

	test("finds minimum correcly", () => {
		expect(analyzeArray(arr).min).toBe(1);
	});

	test("finds maximum correctly", () => {
		expect(analyzeArray(arr).max).toBe(8);
	});

	test("calculates length correcly", () => {
		expect(analyzeArray(arr).length).toBe(5);
	});

	test("works with negative numbers", () => {
		const arr2 = [-3, -7, -2];

		expect(analyzeArray(arr2)).toEqual({
			average: -4,
			min: -7,
			max: -2,
			length: 3,
		});
	});
});
