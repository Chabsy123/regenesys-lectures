// example of how to write a function
// function greet(){
//     console.log("Hello and welcome to this class!");
// }

// greet();
// greet();


//example of how to write a function with parameters using three parameters to find the largest number/letter.
// the function will take three parameters and compare them to find the largest one.
// function findLargest(a,b,c){
//     if(a>b && a>c){
//         console.log("The largest number is " + a);
//     }
//     else if(b>a && b>c){
//         console.log("The largest number is " + b);
//     }
//     else{
//         console.log("The largest number is " + c);
//     }
// }

// findLargest(5, 6, 7);
// findLargest(52, 65, 42);

//  the above line calls the function with three arguments to find the largest number/letter.

// The function does whatever it is supposed to do automatically when called. The function can be called multiple times with different arguments to perform the same operation, even including loops.
// function printLoop(start, end, step){
//     for(let i = start; i <= end; i += step){
//         console.log(i);
//     }
// }

// printLoop(1, 20, 2);
// printLoop(2, 50, 5);

// interview question: what is a closure?  A closure is a function that remembers variables from its own scope even after its outer scope has finished executing.
// An outer scope is a function that contains another function inside it. The inner function has access to the variables of the outer function even after the outer function has finished executing. This is called a closure.

function outerFunction(){
    let count = 0;

    return function innerFunction(){
        count++;
        console.log(count);
    }
}

outerFunction()();
// the reason for the double parentheses is that the first set of parentheses calls the outer function, which returns the inner function. The second set of parentheses calls the inner function, which increments the count variable and logs it to the console.

const counting = outerFunction();

counting();
counting();
counting();
counting();
// the reason why each counting function call increments the count variable in the outerFunction is because now it has been assigned to a variable, it stores the logged count value in memory, and the variable is called counting. This is a closure in action and it is only used in js.


//callbacks: it is a function that is passed as an argument to another function and is executed at a later time.(interview question: what is a callback function? A callback function is a function that is passed as an argument to another function and is executed at a later time. It is used to handle asynchronous operations, such as reading files, making API calls, or handling user input. Callbacks are often used in event-driven programming, where the program waits for an event to occur before executing a function.) an example would be a function that reads a file and then executes a callback function when the file is finished reading.

// function greeted(name, callback) {
//     console.log(`Hello and welcome to the world of coding, ${name}!`)
//     callback();
// }

// function byeGreeted() {
//     console.log(`Bye and goodbye to the world of coding`);
// }

// function souvenir(){
//     console.log("Please take this souvenir as a token of appreciation for attending the coding class.");
// }

// greeted("Sharapova", souvenir);
// greeted("Alex", byeGreeted);

// what happens without callback is that the function will run immediately and then the program will move on to the next line of code. This is called synchronous programming, where the program waits for one function to finish before moving on to the next one. In synchronous programming, the program waits for the function to complete before moving on to the next line of code.
// function function1(callback){
//     setTimeout(() =>{
//         console.log("Task 1 is completed")
//         callback()
//     }, 6000)
// }

// function function2(callback){
//     setTimeout(() =>{
//         console.log("Task 2 is completed")
//         callback(); 
//     }, 3000)
// }

// function function3(callback){
//     setTimeout(() =>{
//         console.log("Task 3 is completed")
//         callback();
//     }, 1000)
// }

// function1(() => {
//     function2(() => {
//         function3(() => {
//             console.log("All tasks are completed");
//         });
//     });
// });
// function1();
// function2();
// function3();

// this will run from function3 to function1 because of the time delay set in the setTimeout function. The function with the shortest time delay will be executed first, followed by the function with the next shortest time delay, and so on. This is called asynchronous programming, where the program does not wait for one function to finish before moving on to the next one. Instead, it continues to execute other functions while waiting for the delayed functions to complete.

// ANOTHER way to write a function is called an arrow function e.g

// const greets = () => {
//     console.log("Hello and welcome to the world of coding");
// }

// greets();

//arrow functions are a shorthand for writing anonymous functions. They are especially useful when writing short, one-line functions. Arrow functions have a concise syntax and lexical this binding, which makes them easier to read and write.

// arrow functions are a shorthand for writing anonymous functions. They are especially useful when writing short, one-line functions. Arrow functions have a concise syntax and lexical 'this' binding, which makes them easier to read and write.

// promises - a promise is an object that represents the eventual completion or failure of an asynchronous operation. It is used to handle asynchronous operations, such as reading files, making API calls, or handling user input. Promises are often used in event-driven programming, where the program waits for an event to occur before executing a function.

// there are two arguments in a promise: resolve and reject. resolve is used to resolve the promise which is also a callback function and reject is used to reject the promise.
// do the tasks in a sequence without nesting
// definition of promises(without reject)-
// const prom = new Promise((resolve) => {
//     resolve("Alright, it's resolved");
// })

// prom.then(res => console.log(res))
// console.log(prom);

// chaining
function task1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task 1 is completed");
            resolve();
        }, 6000);
    })
}

function task2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task 2 is completed");
            resolve();
        }, 3000);
    })
}

function task3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task 3 is completed");
            resolve();
        }, 1000);
    })
}

// resolution of a promise
task1()
    .then(() => task2())
    .then(() => task3())
    .then(() => console.log("All tasks are completed"));
 
// the above code will run the task1 function, then wait for the task1 to complete, then run the task2 function, wait for the task2 to complete, run the task3 function, wait for the task3 to complete, and then log "All tasks are completed" to the console.

// the above code will run the task1 function, then wait for the task1 to complete, then run the task2 function, wait for the task2 to complete, run the task3 function, wait for the task3 to complete, and then log "All tasks are completed" to the console.

// or you can use async await which is a more modern way of writing asynchronous code and what it does is that without async, await will not run. Async makes the environment wait for the promise to resolve or reject before moving on to the next line of code.

// async function runTask() {
//     await task1();
//     await task2();
//     await task3();
//     console.log("All tasks are completed");
// }

// runTask();

// the difference between then and async await is that then is a method that is called on a promise and it takes a callback function as an argument. The callback function is executed when the promise is resolved or rejected. Async await is a more modern way of writing asynchronous code and it makes the code look more like synchronous code. It allows you to write asynchronous code in a more readable and maintainable way.