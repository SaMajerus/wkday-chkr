import { gaussDisparate } from "./../src/daycalc.js";

describe('gaussDisparate', () => {

	test('holds "c" (century) variable that is Y divided by 100 (parsed to an integer)', () => {
		const c = gaussDisparate(10, 4, 1999);
		console.log(c);
		expect(c).toEqual(19);
	});
});