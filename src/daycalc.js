export const gaussDisparate = function(d, m, Y){ //'d': day of month (1 to 31).  'm': month (1=Jan, 2=Feb, ..., 12=December).  'Y': 4-digit year. 
	let c = parseInt(Y / 100);
	let y = Y - (100*c).toFixed(); //last two digits of Y
	let w = parseInt(((d + (2.6*m -0.2) + y + (y/4) + (c/4) - (2*c)) % 7).toFixed());  //0=Sunday, 1=Monday, ..., 6=Saturday. 
	console.log("w = " + w);
	let resultArray = [c, y, w];
	let wkdayInd = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 
	resultArray[2] = wkdayInd[w]; 
	return resultArray; 

};

// 'A'=year number, 'M'= month, 'D' = day.  'm' = month-offset (see 'table of month offsets'). 
// w = R(D + m +  5*R((A-1)%4)  +  4R((A-1)%100)  +  6R((A-1)%400)) % 7
// w = ((D%7) + (m%7) + {[5*((A-1)%4)]%7}  +  {[4*((A-1)%100)]%7}  +  {[6*((A-1)%400)]%7}) %7 