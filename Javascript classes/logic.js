//  write a program that prints even number from 1 to 20 
// thinking of it as an algorithm literally in english before implementing it helps a lot

// Algorithm:
// 1. Start with the number 1
// 2. Check if the number is even
// 3. If it is, print it
// 4. Increment the number
// 5. Repeat steps 2-4 until the number reaches 20

// different ways to do it
// 1
// for (let i = 2; i <= 20; i += 2) {
//   console.log(i);
// }

// 2
// for (let i = 1; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// Question 2
// write a program using any loop to calculate the sum of numbers from 1 to 100
 
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   sum += i;
// }
// console.log(sum);

// Question 3
// write a program that counts the number of vowel in a given string
// let x = "aeroplane";
// let vowels = 0;
// for (let i = 0; i < x.length; i++) {
//   if (x[i] === "a" || x[i] === "e" || x[i] === "i" || x[i] === "o" || x[i] === "u") {
//     vowels++;
//   }
// }
// console.log(vowels);

// OR

// let x = "aeroplane";
// let vowelCount = x.match(/[aeiouAEIOU]/gi).length;
// console.log(vowelCount);

// OR

// let x = "aeroplane";
// let vowelCount = 0;
// const vowels = 'aeiouAEIOU';
// for (let i = 0; i < x.length; i++) {
//   if (vowels.includes(x[i])) {
//     vowelCount++;
//   }
// }
// console.log(vowelCount);

// Question 4
// Write a program that reverses the numbers 1234 and print the result 4321.
let num = 1234;
// Store the starting number we want to reverse (1234).

let reversedNum = 0;
// Create a placeholder variable starting at 0 to build our reversed number.

while (num > 0) {
// Keep repeating the loop as long as 'num' still has digits left (greater than 0).

  reversedNum = reversedNum * 10 + num % 10;
  // Get the last digit of 'num' using modulo (1234 % 10 = 4).
  // Multiply the existing 'reversedNum' by 10 to shift digits left, then add the new digit.

  num = Math.floor(num / 10);
  // Remove the last digit from 'num' by dividing by 10 and rounding down (1234 / 10 = 123.4 -> 123).

}
// Loop ends here once 'num' drops to 0.

// console.log(reversedNum);
// Print the final result (4321) to the console.

//Question 5
//  Write a program that prints the multiplication table of 5 from 1 to 10.
for (let i = 1; i <= 10; i++) {
  // console.log(`5 x ${i} = ${5 * i}`);
}

// Question 6
// Write a program that prints out prime numbers from 1 to 100.
let primes = [];  // Create an empty array to store prime numbers.
for (let i = 2; i <= 100; i++) {  // Start LOOPING through numbers from 2 to 100.
  let isPrime = true;  // Assume the current number 'i' is prime until proven otherwise.
  for (let j = 2; j <= i / 2; j++) { // Check divisibility from 2 up to half of 'i'.
    if (i % j === 0) { // If 'i' is divisible by 'j', it is not prime.
      isPrime = false; // Set the flag to false.
      // break; // Exit the inner loop early since we found a divisor and remainder.
    }
  }
  if (isPrime) {
    primes.push(i); // If 'i' is prime, push it to the array.
  }
}
console.log(primes);

OR

let t = 2;

while (t <= 100) {
  let count = 0;
  for (let i = 1; i <=t; i++) {
    if (t % i === 0) {
      count++;
    }
  }
  if (count === 2) {
    console.log(t);
  }
  t++;
}
// Question 7
// Write a program that prints out the sum of all the numbers from 1 to 100.
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log(sum);

// Question 8
// Write a program that prints out the sum of all the even numbers from 1 to 100.
let sums = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    sums += i;
  }
}
console.log(sums);

// Question 9
// Write a program that prints out the sum of all the odd numbers from 1 to 100.
let sumed = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 !== 0) {
    sumed += i;
  }
}
console.log(sumed);
