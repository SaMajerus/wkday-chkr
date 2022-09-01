/*     Business Logic     */
export const gaussAlg = function(M, d, Y){  //'d': day of month (1 to 31).  'M': month (1=Jan, 2=Feb, ..., 12=Dec).  'Y': 4-digit year #. 
	console.log("gaussAlg function-- 'M' parameter:  " + M); 
	console.log("gaussAlg function-- 'd' parameter:  " + d);
	console.log("gaussAlg function-- 'Y' parameter:  " + Y);

	let m; //Stores month-offset value based on given 'M' and 'Y' values. 
	let monthOffsetCommonYrs = [0,3,3,6,1,4,6,2,5,0,3,5];  //monthOffsetCommonYrs[0] = Jan, [1]=Feb, ...
	let monthOffsetLeapYrs = [0,3,4,0,2,5,0,3,6,1,4,6];  //Indices follow the same scheme as above. 

	if (Y%4 === 0) { //"If 4-digit year-number 'Y' is a leap year" 
		m = monthOffsetLeapYrs[M]; 
	} else { 
		m = monthOffsetCommonYrs[M]; 
	}; 
	const w = ((d%7) + (m%7) + ((5*((Y-1)%4))%7)  +  ((4*((Y-1)%100))%7)  +  ((6*((Y-1)%400))%7))%7;  //0=Sunday, 1=Monday, ..., 6=Saturday.
	console.log("w = " + w); 

	let resultArray = [m, w];
	let wkdayInd = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 
	resultArray[1] = wkdayInd[w]; 
	
	//Month-offsets (copied from table in Wikipedia article [comes before worked examples of Gauss's Algorithm]:  https://en.wikipedia.org/wiki/Determination_of_the_day_of_the_week#Gauss's_algorithm)
	
	return resultArray; 
	//return resultArray[1];
};

// 'A'=year number, 'M'= month, 'D' = day.  'm' = month-offset (see 'table of month offsets'). 
// w = R(D + m +  5*R((A-1)%4)  +  4R((A-1)%100)  +  6R((A-1)%400)) % 7
// w = ((D%7) + (m%7) + {[5*((A-1)%4)]%7}  +  {[4*((A-1)%100)]%7}  +  {[6*((A-1)%400)]%7}) %7 

/* It works! */
// let w = parseInt(((d + (2.6*m -0.2) + y + (y/4) + (c/4) - (2*c)) % 7).toFixed());  //0=Sunday, 1=Monday, ..., 6=Saturday. 
// const w = ((D%7) + (m%7) + ((5*((A-1)%4))%7)  +  ((4*((A-1)%100))%7)  +  ((6*((A-1)%400))%7))%7;  