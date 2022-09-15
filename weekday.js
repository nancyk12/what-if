const prompt = require('prompt-sync')({sigint: true});

let enterNum = Number(prompt("Please enter a number between 1 and 7: "));
console.log(enterNum);

if(enterNum === 1){
    console.log("Monday");
} else if(enterNum === 2){
    console.log("Tuesday");
} else if(enterNum === 3){
    console.log("Wednesday");
} else if(enterNum === 4) {
    console.log("Thursday");
} else if(enterNum === 5) {
    console.log("Friday");
} else if(enterNum === 6) {
    console.log("Saturday");
} else if(enterNum === 7){
    console.log("Sunday");
} else {
    console.log("Your input is invalid");
}
