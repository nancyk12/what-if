const prompt = require('prompt-sync')({sigint: true});

let enterAge = Number(prompt("Please enter your age: "));
console.log(enterAge);

if(enterAge < 16){
    console.log("You can't drive!");
} else if(enterAge >= 16 &&  enterAge <= 17){
    console.log("You can get your drivers license, but you still can't vote!");
} else if(enterAge >= 18 && enterAge <= 20){
    console.log("You can drive, and you can vote, but you still have to be 21 to buy beer!");
} else if(enterAge >= 21 && enterAge <= 24) {
    console.log("You can drive, vote, and buy beer, but you still can't rent a car!");
} else if(enterAge >= 25 && enterAge <= 34) {
    console.log("Yeah! You can do just about anything except for run for President of the United States!");
} else if(enterAge >= 35) {
    console.log("Yes! Yes! Yes! You can do it all drive, vote, buy beer, rent a car, and run for President of the United States of America!");
}else {
    console.log("Your input is invalid.");
}

//Greyson's code
/*const prompt = require('prompt-sync')({sigint: true});

let enterAge = Number(prompt("Please enter your age: "));
console.log(enterAge);

if(enterAge < 16){
    console.log("You can't drive.");
} else if (enterAge <= 17){
    console.log("You can drive but not vote.");
} else if (enterAge <= 24){
    console.log("You can vote but not rent a car.")
} else {
    console.log("You can do pretty much anything.")
} */