const ageInput = process.argv[2];

console.log("Enter your age: " + ageInput);
//1.
if (ageInput>=18) {
    console.log("You are old enough to drive.")
} else {
    console.log("You are left with: " + (18-ageInput) + " to drive.")
}

//2.
const myAge = 26;
if (ageInput > myAge) {
    console.log("You are "+ (ageInput - myAge) + " years older than me")
} else if (ageInput < myAge) {
    console.log("You are "+ (myAge - ageInput) + " years younger than me")
} else {
    console.log("You are the same age as mine")
}

//3.
let a = 4;
let b = 3;
if (a>b) {
    console.log(a + " is greater than "+ b)
} else {
    console.log(a + " is equal of smaller than "+ b)
}

(a>b)? console.log(a + " is greater than "+ b) : console.log(a + " is equal of smaller than "+ b)

//4.
let numInput = 7;
(numInput%2===0) ? console.log(numInput + " is an even number.") : console.log(numInput + " is an odd number.")

//Excercise 2.
//1.
let grade = 89;
if (grade<=100 && grade >=80) {
    console.log("A")
} else if (grade < 80 && grade >=70) {
    console.log("B")
} else if (grade < 70 && grade >= 60) {
    console.log("C")
} else if (grade < 60 && grade >= 50) {
    console.log("D")
} else {
    console.log("F")
}

//2.
const month = process.argv[3].toLowerCase();
switch(month) {
    case "september":
    case "october":
    case "november":
        console.log("The season is Autumn");
        break;
    case "december":
    case "january":
    case "february":
        console.log("The season is Winter");
        break;
    case "march":
    case "april":
    case "may":
        console.log("The season is Winter");
        break;
    case "june":
    case "july":
    case "august":
        console.log("The season is Summer");
        break;
    default:
        console.log("Invalid month input");
        break;
}

//3. 
const day = process.argv[4].toLowerCase();
switch (day){
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
    case "friday":
        console.log(day.charAt(0).toUpperCase() + day.slice(1) + " is a working day.");
        break;
    case "saturday":
    case "sunday":
        console.log(day.charAt(0).toUpperCase() + day.slice(1) + " is a weekend.");
        break;
    default:
        console.log("Invalid day input");
        break;
}

//Exercise 3.
const monthInput = process.argv[5].toLowerCase();
switch (monthInput){
    case "january":
    case "march":
    case "may":
    case "july":
    case "august":
    case "october":
    case "december":
        console.log(monthInput.charAt(0).toUpperCase() + monthInput.slice(1) + " has 31 days");
        break;
    case "february":
        console.log(monthInput.charAt(0).toUpperCase() + monthInput.slice(1) + " has 28 days");
        break;
    case "april":
    case "june":
    case "september":
    case "november":
        console.log(monthInput.charAt(0).toUpperCase() + monthInput.slice(1) + " has 30 days");
        break;
    default:
        console.log("Invalid month input");
        break;
}
