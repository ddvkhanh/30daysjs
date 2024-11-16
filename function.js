//Excercise 1
//1.
function fullName(firstName, lastName) {
    console.log('Full Name: '+ firstName + ' ' + lastName);
}

fullName('Kat', 'D');
//2.
const addNum = (a,b) => a+b;
console.log(addNum(1,2));
//3.
const _areaOfCircle = r => Math.PI * r
console.log('Area of circle: '+ _areaOfCircle(3));
//4.
const convertCelciusToFahrenheit = (oc) => (oc * 9/5)+32 
console.log('Celcius to Farenheit: '+ convertCelciusToFahrenheit(32));
//5.
const calculateBMI = (weight, height) => {
    const bmi = weight/(height * height);
    console.log(bmi);
    if (bmi < 18.5) { 
        return ('Underweight');
    } else if (bmi<25) {
        return ('Normal weight')
    } else if (bmi<30) {
        return ('Overweight');
    } else {
        return ('Obese')
    }
}
console.log(calculateBMI(47, 1.58));
//6.
const checkSeason = (monthInput) => {
    const month = monthInput.toLowerCase();
    switch(month) {
        case "september":
        case "october":
        case "november":
            return ("The season is Autumn");
            break;
        case "december":
        case "january":
        case "february":
            return("The season is Winter");
            break;
        case "march":
        case "april":
        case "may":
            return("The season is Winter");
            break;
        case "june":
        case "july":
        case "august":
            console.log("The season is Summer");
            break;
        default:
            return("Invalid month input");
            break;
    }
}
console.log(checkSeason('January'));

//Exercise 2
//1.
const solveQuadEquation = (a, b, c) => {
    let result = {};
    const result1 = (-1*b + Math.sqrt(Math.pow(b,2)-(a*c*c)))/(2*a);
    const result2 = (-1*b - Math.sqrt(Math.pow(b,2)-(a*c*c)))/(2*a);
    result[1] = result1;
    result[2] = result2;
    return result;
}
console.log(JSON.stringify(solveQuadEquation(1,4,4)));
//2.
const printArray = (arr) => {
    for (let e of arr) {
        console.log(e);
    }
}
printArray([3,4,1,2]);
//3.
const showDateTime = (date) => {
    console.log(date.toLocaleString().slice(0,15).replace(/,/g, '-'));
}
let date = new Date();
showDateTime(date);
//4.
const swapValues = (x, y) => {
    let a;
    a = x;
    x = y;
    y = a;
    console.log("Swapped: x: "+ x + " y: " + y);
}
swapValues(3,4);
//5.
const reverseArray = (arr) => {
    let newArray = [];
    for (let i=arr.length-1; i >= 0 ; i--){
        newArray.push(arr[i]);
    }
    console.log(newArray);
}
reverseArray([1,2,3]);
//6.
const capitalizeArray = (arr)=> arr.map(e=>e.toUpperCase());
console.log(capitalizeArray(['a','b','c']));
//7.
let items = ['apple'];
const addItem = (newItem) => items.push(newItem);
addItem('orange');
console.log(items);
//8. 
let array2 = [1,2,3,4,5,6,7,8];
const removeItem = (index) => array2.filter( e => e!=array2[index]);
console.log(removeItem(0));
//9.
const evensAdOdds = (range) => {
    let sumOdd=0;
    let sumEven=0;
    for (let i=0; i<=range; i++){
        if (i%2===0){
            sumEven++
        } else {
            sumOdd++
        }
    }
    console.log('The number of odds are '+ sumOdd);
    console.log('The number of evens are '+ sumEven)
}
evensAdOdds(100);
//10.
const sum = (...args) => {
    let sum = 0
    for (let i of args){
        sum+=i;
    }
    console.log(sum)
}
sum(1,2,3);

//Exercise 13
//1.
function userIdGenerator(length) {
    const range = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = length-1; i >= 0; --i) {
        result += range[Math.floor(Math.random() * range.length)];
    }
    return result;
}
console.log(userIdGenerator(5));

//2.
const randomRGB = () => {
    let cal = Math.floor(Math.random() *255);
    return 'rgb(' + cal + ',' + cal + ',' + cal + ')';
}

const randomHEXA = () => {
    let cal= (Math.random()*0xfffff*1000000).toString(16);
    return '#' + cal.slice(0,6);
}

const generateColor = (type, times) => {
    let result = [];
    let i=0;
    switch(type.toLowerCase()) {
        case 'rgb':
            while (i < times) {
                result.push(randomRGB())
                i++;
            } 
            break;
        case 'hexa':
            while (i < times) {
                result.push(randomHEXA())
                i++;
            } 
            break;
    }
    console.log(result);
}

generateColor('rgb', '3')
generateColor('hexa', '4')


//3.
const shuffleArray = (arr) => {
    let result = [];
    for (let i = arr.length-1; i >= 0; --i){
        let j = Math.floor(Math.random()*(i));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}
console.log(shuffleArray([1,2,3,4,5]))

//4.
const factorial = (input) => {
    let cal=1;
    if (input === 0 || input ===1) {
        return 'Factorial: '+ 1;
    } 
    for (let i=1; i<= input; i++) {
        cal = cal * i;
    }
    return 'Factorial: ' + cal;
}
console.log(factorial(4));

//5
const isEmpty = (input) => {
    if (input === null || input === "" || input === undefined){
        console.log('Is Empty');
    } else {
        console.log('Not Empty');
    }
}

isEmpty("");

//6.
const average = (arr) => {
    let sum = 0;
    for (let i of arr) {
        if (isNaN(i)){
            return 'Array contains not numeric value';
        }
    }

    for (let i=0 ; i< arr.length; i++) {
        sum+=arr[i];
    }
    return sum/arr.length;
}

console.log('Average: '+ average([2,4, 'a']));

