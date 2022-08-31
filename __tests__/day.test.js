import { gaussDisparate } from "./../src/daycalc.js";

describe('gaussDisparate', () => {

	test('holds "c" (century) variable that is Y divided by 100 (parsed to an integer)', () => {
		const c = gaussDisparate(10, 4, 1999)[0];
		console.log(c);
		expect(c).toEqual(19);
	});

	test('holds "y" which is Y minus the result of "c" multiplied by 100', () => {
		const y = gaussDisparate(10, 4, 1999)[1];
		console.log(y);
		expect(y).toEqual(99);
	});
	
	test('returns an integer between 0-6 that relates to a day of the week incrementing by one starting at 0 = "Sunday"', () => {
		const w = gaussDisparate(10, 4, 1999)[2];
		expect(w).toEqual(6);
	}); 
});