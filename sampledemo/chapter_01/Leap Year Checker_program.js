// Create a program that determines whether a given year is a leap year. A leap year is divisible by 4, but not by 100 unless it is also divisible by 400. Use an if-else statement to make this determination.Create a program that determines whether a given year is a leap year. A leap year is divisible by 4, but not by 100 unless it is also divisible by 400. Use an if-else statement to make this determination.

// function isLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//         return true;
//     } else {
//         return false;
//     }
// }

// // Example usage
// let yearToCheck = 2020;
// if (isLeapYear(yearToCheck)) {
//     console.log(yearToCheck + " is a leap year.");
// } else {
//     console.log(yearToCheck + " is not a leap year.");
// }

let year = 2024;
		
		if((year % 4 ==0 && year %100 !=0 || year % 400 == 0)) {
			console.log("It is leap year");
		} else {
			console.log ("It is not a leap year");
		}