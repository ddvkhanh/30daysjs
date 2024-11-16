const animal = process.argv[2];
const ageInput = process.argv[3];
console.log("You have a "+ ageInput + " years old " + animal);

let benchmarkConvert = 0; //human age equivalent at a benchmark age 
let benchmarkDiff = 0; //years of difference between a benchmar age and input
let benchmarkAge = 0; //benchmark of age for an algorithm
let humanAge = 0; //converted to human age
let ageGap = 0; //

switch (animal) {
    case "dog":
        break;
    case "cat":
        calculateCatAge(ageInput);
        break;
}

function calculateCatAge(ageInput) {
    switch (true) {
        case ageInput==1:
            console.log("15 years old");
            break;
        case ageInput==2:
            console.log("24 years old");
            humanAge = 24;
            console.log("Your cat is a Junior at " + humanAge + " years old");
            break;
        case (ageInput >= 3 && ageInput < 11):
            benchmarkAge =2;
            benchmarkConvert = 24;
            ageGap = 4;
            benchmarkDiff = ageInput - benchmarkAge;
            humanAge = benchmarkConvert + (benchmarkDiff * ageGap);
            console.log("Your car is an Adult at " + humanAge + " years old");
            break;
        case ageInput >= 11:
            benchmarkAge =2;
            benchmarkConvert = 24;
            ageGap = 4;
            benchmarkDiff = ageInput - benchmarkAge;
            humanAge = benchmarkConvert + (benchmarkDiff * ageGap);
            console.log("Your car is a Senior at " + humanAge + " years old");
            break;
        default:
            console.log("error");
            break;
    }
}
