
console.log('Starting JavaScript')

var myName = "SaSa";
console.log(myName)

var age = 88;
console.log(age)

var juliaAge = 32;
console.log(juliaAge)

var ageDiff = age - juliaAge;
console.log(ageDiff)

var message;

if (age > 21) {
    console.log("You are older than 21")
} else {
    console.log("You are not older than 21")
}

//start here. Problem: the following lines do not create any output
if (age > juliaAge) {
    message = 'Julia is younger than you';
} else if (age < juliaAge) {
    message = 'Julia is older than you';
} else {
    message = 'You have the same age as Julia';
}

// console.log('Hello World')

// var x = 10

// console.log(x)