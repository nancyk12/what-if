const prompt = require('prompt-sync')({sigint: true});

let enterNum = Number(prompt("Please enter a number: "));
console.log(enterNum);

if(enterNum % 15 === 0){
    console.log("Fizzbuzz");
} else if(enterNum % 5 === 0){
    console.log("Buzz");
} else if(enterNum % 3 === 0){
    console.log("Fizz");
} else {
    console.log("Your number is NOT divisible by 3 or 5 or 15!");
}