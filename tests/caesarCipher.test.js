import caesarCipher from "../src/caesarCipher.js";

describe("caesarCipher", () => {
	test("shifts lowercase letters correctly", () => {
		expect(caesarCipher("abc", 1)).toBe("bcd");
	});

	test("wraps from z to a", () => {
		expect(caesarCipher("xyz", 3)).toBe("abc");
	});

	test("preserves original letter case", () => {
		expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
	});

	test("leaves punctuation and spaces unchanged", () => {
		expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
	});

	test("works with negative shifts", () => {
		expect(caesarCipher("def", -3)).toBe("abc");
	});
});
