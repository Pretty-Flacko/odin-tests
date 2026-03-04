export default function analyzeArray(arr) {
	const length = arr.length;
	const sum = arr.reduce((a, b) => a + b, 0);
	const average = length === 0 ? 0 : sum / length;
	const min = Math.min(...arr);
	const max = Math.max(...arr);

	return { average, min, max, length };
}
