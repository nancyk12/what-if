const prompt = require('prompt-sync')({sigint: true});

let earthWeight = Number(prompt("Hello Julio Casa Chavez Mark VII. Please enter your Earth weight: "));
console.log(earthWeight);

//if (earthWeight < 0) {
//    console.log("You have made an invalid entry!");
//}

let planetNum = Number(prompt("Please enter the number for the corresponding planet: \n 1. Venus \n 2. Mars \n 3. Jupiter  \n 4. Saturn \n 5. Uranus \n 6. Neptune \nEnter Planet Number: "));


//console.log(planetNum);

/*let venusWeight = earthWeight * 0.78;
console.log(`1. Your weight on Venus is ${venusWeight} lbs.`);

let marsWeight = earthWeight * 0.39;
console.log(`2. Your weight on Mars is ${marsWeight} lbs.`);

let jupiterWeight = earthWeight * 2.65;
console.log(`3. Your weight on Jupiter is ${jupiterWeight} lbs.`);

let saturnWeight = earthWeight * 1.17;
console.log(`4. Your weight on Saturn is ${saturnWeight} lbs.`);

let uranusWeight = earthWeight * 1.05;
console.log(`5. Your weight on Uranus is ${uranusWeight} lbs.`);

let neptuneWeight = earthWeight * 1.23;
console.log(`6. Your weight on Neptune is ${neptuneWeight} lbs.`); */

let planetWeight = 0;
let printPlanetWeight = true;

if(planetNum === 1){
    planetWeight = 0.78 * earthWeight;
    planet = "Venus"
} else if(planetNum === 2){
    planetWeight = 0.39 * earthWeight;
    planet = "Mars"
} else if(planetNum === 3){
    planetWeight = 2.65 * earthWeight;
    planet = "Jupiter"
} else if(planetNum === 4){
    planetWeight = 1.17 * earthWeight;
    planet = "Saturn"
} else if (planetNum === 5){
    planetWeight = 1.05 * earthWeight;
    planet = "Uranus"
} else if (planetNum === 6){
    planetWeight = 1.23 * earthWeight;
    planet = "Neptune"
} else {
    console.log("Invalid operator");
    printPlanetWeight = false;
}

if(printPlanetWeight === true) {
    console.log(`Your weight on ${planet} is ${planetWeight} lbs.`);
}
