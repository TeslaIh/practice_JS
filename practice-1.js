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

