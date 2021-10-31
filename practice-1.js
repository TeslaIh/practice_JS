//Find middle character of the word.
// User is going to input a word. Your task is to find the middle character of this word.
// If the word’s length is odd - return the middle character.If word’s length is even - return the middle 2 characters.
// You should validate for empty value and for value with spaces only, in that case show message: “Invalid value”.
// For user input use “prompt” function. For displaying result use “alert” function.
// “Invalid value” for declaim

// Examples:
// For user input “test” should return “es”
// For user input “character” should return “a”
// For user input “B” should return “B”
// For user input “” should return “Invalid value”
// For user input “ “ should return “Invalid value”

//  const word = prompt('Write down name');

// if (word === null || word === "" || word.trim() === "") {
//   alert('Invalid value');
// } else {
//   if (word.length % 2 === 0) {
//     alert(word[(word.length / 2)-1] + word[word.length / 2])
//   } else {
//     alert(word[Math.floor(word.length / 2)]);
//   }
// }

// if (word && word.trim()) {
//     if (word.length % 2 === 0) {
//     alert(word[(word.length / 2)-1] + word[word.length / 2])
//   } else {
//     alert(word[Math.floor(word.length / 2)]);
//   } 
// } else {
//   alert('Invalid value')
// }

//////////////////////////////////////////////////////////////////////////////////

// You need to calculate amount of tip to give in a restaurant/cafe.
// // 	Workflow:
// // 1.	User inputs check number. (Use “prompt” function).
// // 2.	User inputs tip percentage. (Use “prompt” function)
// // 3.	You need to validate the input data: both values should be numbers, total sum can’t be
// a negative number, percentage can’t be negative and bigger than 100.
// // 4.	If input data isn’t valid, you should show message “Invalid input data”. (Use “alert” function).
// // 5.	You need to calculate tip amount and total sum to pay.
// // 6.	Show message: (example). Use ”alert” function
// // Check number: 200
// // Tip: 15%
// // Tip amount: 30
// // Total sum to pay:  230

// // You should show only 2 numbers after comma (if needed).

// const inputNumCheck = prompt('Input check number, please')
// const inputPercent = prompt('Input tip percentage, please')

// if (inputNumCheck === null || inputPercent === null) {
//   alert('Canceled')
// } else {
//   const formatedCheckNum = Number.parseFloat(inputNumCheck);
//   const formatedinputPercent = Number.parseFloat(formatedinputPercent);

//   const tipSum = formatedCheckNum * formatedinputPercent / 100;
//   const totalSum = formatedCheckNum + tipSum;

//   if (
//     Number.isNaN(inputNumCheck) || Number.isNaN(formatedinputPercent) ||
//     totalSum < 0 ||
//     formatedinputPercent > 100 ||
//     formatedinputPercent < 0
//   ) {
//     alert('Invalid data.')
//   } else {
//     alert(` Check number: ${formatedCheckNum}.Tip: ${formatedinputPercent} %. Tip amount ${tipSum}. Total ${totalSum}`)
//   }
// }

//////////********* Practice 2 *****************///////////////////

// const a = ["a", "b", "c"];
// const b = [1, [2, 3]];
// const c = 0;
// // Result: ["a", "b", "c", 0, 1, 2, 3];

// const d = [b[0], ...b[1]];

// const total = a.concat(c, d);

// console.log(total);

///////////////////////////////////////////////////

// const a = ["a", "b", "c", "d", "e", "f", "g", "h"];

// Result: ["a", "b", "c", "a", "b", "c", "g", "h"];

// const one = a.slice(0, 3);

// const two = a.slice(-2);

// const res = one.concat(one, two);

// const res = [...a.slice(0, 3), ...a.slice(0, 3), ...a.slice(-2)];

// copyWithin

// const res = a.copyWithin(3, 0, 3)

// console.log(res);

///////////////////////////////////////////////////////////

// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Result: [1, 2, 3, 4, 5, 0, 0, 0, 9, 10];

// const res = a;

// res.splice(5, 3, 0, 0, 0);

// a.fill(0, 5, 8);

// console.log(a);
////////////////////////////////////////////////////////////

// const a = [1, 2, [3, 4], [5, 6], 7];

// Result: [1, 2, 3, 4, 5, 6, 7]
// const res = [];

// const res = a.flat();

// for (const number of a) {
//   if (Array.isArray(number)) {
//     res.push(number[0])
//     res.push(number[1])
//   } else {
//     res.push(number)
//   }
// }

// console.log(res);

/////////////////////////////////////////////////////////////

// const a = ['a', 'k', 'n', 'h', 'n', 'n', 'k'];

// a.lastIndexOf("n");

// // let element = 0;

// // for (let i = 0; i < a.length; i += 1) {
// //   if (a[i] === 'n') {
// //     element = i;
// //   }
// // }

// console.log(a);

////////////////////////////////////////////////////////////

// const a = [1, 2, 3, 4, 5, 6, 7]
// Result: [7, 6, 5, 4, 3, 2, 1]

// const reversed = a.reverse();

// console.log('reversed:', reversed);

/////////////////////////////////////////////////////////////

// Write a function that reverse an integer number. You can't use any array methods, besides push.
// reverseNumber(12345) returns 54321
// reverseNumber(-12345) returns -54321

// const number = -12345;

// let splitNum;

// function reverseNums(num) {
//   if (num > 0) {
//     splitNum = num.toString().split('');
//     splitNum = splitNum.reverse();
//     splitNum = Number(splitNum.join(''));
//   } else {
//     splitNum = num.toString().split('');
//     splitNum.splice(0, 1);
//     splitNum.reverse();
//     splitNum = splitNum.join('');
//     splitNum = Number('-' + splitNum);
//   }
//   return splitNum;
// }
// console.log (reverseNums(number));

//////////////////////////////////////////////////////////////

// Write a function that converts the argument values. If it will be a string, convert it to number and wise versa.
// It should return an array of converted values.

// convert('1', 2, 3, '4') // [1, '2', '3', 4]

// function convert(...args) {

//   const newArray = [];

//   for (const arg of args) {
//     if (arg === Number(arg)) {
//       newArray.push(arg.toString());
//     } else {
//       newArray.push(Number(arg));
//     }
//   }
//   return newArray;
// }

// console.log(convert('1', 2, 3, '4', 7, 100)) // [1, '2', '3', 4])

/////////////////////////////////////////////////////////////////////////

// Write function, which iterates over array and executes function on each element.
// executeforEach([1,2,3], function(el) {console.log(el * 2)}) // 2 4 6

// function executeforEach(array, callback) {
//   for (const item of array) {
//     callback(item);
//   }
// }
// executeforEach([1,2,3], function(el) {console.log(el * 2)})

// 31.10.2021

// Write a function - positiveSum
// It should accept an array of numbers and return a result of their addition. But you must calculate only positive numbers and omit negative if any presents.
// positiveSum([2, 4, 6, 8])   // => 20
// positiveSum([0, -3, 5, 7])  // => 12


// const positiveSum = (arrays) => {
//     let total = 0;
//     for (const array of arrays) {
//         if (array > 0) {
//             total += array;
//         }
//     } return total;
// };

// console.log(positiveSum([2, 4, 6, 8]));
// console.log(positiveSum([0, -3, 5, 7]));

// const positiveSum = (arrays) => {
//     return arrays
//     .filter(value => value > 0)
//     .reduce((acc, number) => {
//         return acc + number;
//     }, 0);
// }

// console.log(positiveSum([2, 4, 6, 8]));
// console.log(positiveSum([0, -3, 5, 7]));


// const positiveSum = (arrays) =>
//     arrays
//         .reduce((acc, number) =>
//         (number > 0 ? acc += number : acc ),0);

// console.log(positiveSum([2, 4, 6, 8]));
// console.log(positiveSum([0, -3, 5, 7]));

///////////////////////////////////////////////////////////

// Write a function – letterCount
// It accepts two string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.
// If no occurrences can be found, a count of 0 should be returned.
// For example:
// letterCount("Maggy", "g") // => 2
// letterCount("Barry", "b") // => 1
// letterCount("", "z")      // => 0

// const letterCount = (word, letter) => {
//     const array = word.toLowerCase().split('');
//     console.log(array);
//     console.log(array.filter(value => value === letter).length);
// }

// letterCount("Maggy", "g");
// letterCount("Barry", "b");
// letterCount("", "z");

// const letterCount = (word, letter) => word.toLowerCase().split('')
//     .reduce((acc, value) => (value === letter ? acc + 1 : acc), 0);

// console.log(letterCount("Maggy", "g"));
// console.log(letterCount("Barry", "b"));
// console.log(letterCount("", "z"));

//////////////////////////////////////////////////////////

// Our football team completed the championship. The result of each match look like "x:y".
// Results of all matches are recorded in the collection like this: ["3:1", "2:2", "0:1", ...]

// Write a function – countPoints
// It should accept a collection of football games scores and count the points of our team in the championship.
// Rules for counting points for each match:
// •	if x > y   - 3 points
// •	if x < y   - 0 point
// •	if x = y   - 1 point

// For example:
// countPoints(['3:1', '1:0', '0:0', '1:2', '4:0', '2:3', '1:1', '0:1', '2:1', '1:0']) // => 17
// countPoints(['1:1', '1:2', '2:0', '4:2', '0:1', '2:3', '1:1', '0:1', '1:1', '3:0']) // => 12

// const countPoints = array => (array.map((element, index) => element[0] === element[2] ? 1 : element[0] > element[2] ? 3 : 0))
//     .reduce((acc, element) => acc + element);
      
// console.log(countPoints(['3:1', '1:0', '0:0', '1:2', '4:0', '2:3', '1:1', '0:1', '2:1', '1:0'])) // => 17
// console.log(countPoints(['1:1', '1:2', '2:0', '4:2', '0:1', '2:3', '1:1', '0:1', '1:1', '3:0'])) // => 12

// const countPoints = array => array.reduce((acc, element) => acc + (element[0] > element[2] ? 3 : element[0] === element[2] ? 1 : 0), 0);

// console.log(countPoints(['3:1', '1:0', '0:0', '1:2', '4:0', '2:3', '1:1', '0:1', '2:1', '1:0'])) // => 17
// console.log(countPoints(['1:1', '1:2', '2:0', '4:2', '0:1', '2:3', '1:1', '0:1', '1:1', '3:0'])) // => 12

// const countPoints = (array) => array.filter(value => value[0] > value[2]).length * 3 + array.filter(value => value[0] === value[2]).length;

// console.log(countPoints(['3:1', '1:0', '0:0', '1:2', '4:0', '2:3', '1:1', '0:1', '2:1', '1:0'])) // => 17
// console.log(countPoints(['1:1', '1:2', '2:0', '4:2', '0:1', '2:3', '1:1', '0:1', '1:1', '3:0'])) // => 12

////////////////////////////////////////////////////////////////////

// getSums([1, 2, 3, 4, 5])
// [1, 3, 6, 10, 15];

const Sum = (acc, number, index) => {
    if (index > 0) {[]} else {return [number]}
}

const getSum = (array) = array.reduce((acc, elem, index) => (index > 0 () , []))
