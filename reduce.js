  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:

const nums = [0, 1, 2, 3, 4];
let sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum)

// ----------------------------------------------
// const nums = [0, 1, 2, 3, 4];
// let sum = nums.reduce((acc, curr) => {
//   console.log(
//     "Accumulator:", acc,
//     "Current Value:", curr,
//     "Total:", acc + curr
//   );
//   return acc + curr;
// });
// console.log(sum);
// // Outcome
// Accumulator: 0 Current Value: 1 Total: 1
// Accumulator: 1 Current Value: 2 Total: 3
// Accumulator: 3 Current Value: 3 Total: 6
// Accumulator: 6 Current Value: 4 Total: 10
// 10

// ----------------------------------------------
// When specified a intial value to e.g 10 (look where 10 is specified)

// let sumSpecified = nums.reduce((acc, curr) => {
//   console.log(
//     "Accumulator:", acc,
//     "Current Value:", curr,
//     "Total:", acc + curr
//   );
//   return acc + curr;
// }, 10);
// console.log(sumSpecified);

// Outcome
// Accumulator: 10 Current Value: 0 Total: 10
// Accumulator: 10 Current Value: 1 Total: 11
// Accumulator: 11 Current Value: 2 Total: 13
// Accumulator: 13 Current Value: 3 Total: 16
// Accumulator: 16 Current Value: 4 Total: 20
// 20
// ---------------------------------------------

const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  }
];

// Totaling a specific object property

let totalExpirence = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0);
console.log(totalExpirence);


// Grouping by a property, and totaling it too
