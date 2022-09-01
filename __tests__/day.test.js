import { gaussAlg } from "./../src/js/daycalc.js";

describe('gaussAlg', () => {
	test("returns an index from monOffsetByLeapYr if a Leap-Year is input for 'Y'", () => {
		const m = gaussAlg(4, 10, 2000)[0]; 
		expect(m).toEqual(0); 
	});

	test('returns an integer between 0-6 that relates to a day of the week incrementing by one starting at 0 = "Sunday"', () => {
		const w = gaussAlg(4, 10, 1999)[1];
		expect(w).toEqual("Saturday");
	});
});