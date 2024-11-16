import {users} from './users.js'
import {accounts, products} from './accounts.js'


//Exercise 1
const dog = {};
console.log(dog);

dog.name = 'Milu';
dog.legs = 4;
dog.color = 'brown';
dog.age = 3;
dog.bark = true;
console.log(dog);

console.log('Name: ' , dog.name);
console.log('Legs: ' , dog.legs);
console.log('Color: ' , dog.color);
console.log('Age: ' , dog.age);
console.log('Bark: ' , dog.bark);

dog.breed = 'Husky';
dog.getDocInfo = function() {
    let isBark = (this.bark == true) ? "barks": "does not bark"
    return `${this.name} is a ${this.age} year-old dog with ${this.legs} legs and ${this.color} color. ${this.name} ${isBark}`
}

console.log(dog.getDocInfo());

//Exercise 2

console.log(users.Alex.skills.length);

//1 person has most skills
let numberOfSkill = 0;
for (const [key,value] of  Object.entries(users)) {
    if (value.skills.length > numberOfSkill) {
        numberOfSkill = value.skills.length;
    }
}

for (const [key,value] of  Object.entries(users)) {
    if (value.skills.length === numberOfSkill) {
        console.log(key + ' has the most skills with ' + value.skills.length + ' skills')
    }
}

//2 count users more than 50 points
let count = 0;
for (let user in users) {
    if (users.hasOwnProperty(user)){
        count++;
    }
}
console.log("Total users: " + count);

let userMore50=[];
for (const [key,value] of  Object.entries(users)) {
    if(value.points >=50) {
        userMore50.push(key);
    }
}

console.log("Students that have greater than equal to 50 points: " + userMore50);


//3. mern stack
const mern = ['MongoDB', 'Express','React', 'Node'];
function isSubset(array1, array2){
    return array2.every(e => array1.includes(e));
}

const filtered = Object.keys(users).filter(key => isSubset(users[key]['skills'], mern))

console.log("MERN stack: " + filtered);


//4 change object key name

const copyUsers = Object.assign({}, users, {['Kat']: users['Alex']});
delete copyUsers['Alex'];
//console.log(copyUsers);

//5
//console.log(Object.keys(users));

//6
//console.log(Object.values(users));

// function signUp(id, userName, email, password){
    
//Exercise 3
//1. unclear requirements
//2.

function signUp(userName, email, password){
    for (let i of accounts) {
        if (i.username.toLowerCase() === userName.toLowerCase()){
            console.log('username already exists');
            return;
        }
    }

    let id = Math.random().toString(16).slice(2);
    let newUser = {};
    newUser._id = id;
    newUser.username = userName;
    newUser.email = email;
    newUser.password = password;
    newUser.createdAt = new Date().toLocaleString('en-US');
    newUser.isLoggedIn = false;
    console.log('New User: '+ JSON.stringify(newUser));
    accounts.push(newUser);
}
signUp('Alex','allanbest123@gmail.com', 'alan123456');
console.log(JSON.stringify(accounts))

//3.

function rateProduct(productName, userId, rate){
    let isAvailable = false;
    for (let i of products){
        if (i.name.toLowerCase() === productName.toLowerCase()){
            isAvailable = true;
            let newItem = {};
            newItem.userId = userId;
            newItem.rate = rate;
            i.ratings.push(newItem);
            console.log('Added rating: ' + JSON.stringify(newItem))
        }
    }
    if (!isAvailable){
        console.log('No product in our system')
    }
}
rateProduct('laptop', 'zwf8md', 5);
console.log(JSON.stringify(products));

function averageRating(productName){
    let sum = 0;
    let count = 0;
    for (let i of products){
        if(i.name.toLowerCase() === productName.toLowerCase()){
            if (i.ratings.length===0) {
                console.log('This product has no rating');
                return;
            } else {
                for (let u of i.ratings){
                    sum+=u.rate;
                    count++;
                }
            }
        } 
    }
    if (count === 0) {
        console.log('This product is not in our system')
    } else {
        console.log('Average rating: '+ sum/count)
    }
}
averageRating('tv');

function likeProduct(productName, userId){
    let isAvailable = false;
    for (let i of products){
        if(i.name.toLowerCase() === productName.toLowerCase()){
            isAvailable = true;
            let likeArray = i.likes;
            if (likeArray.includes(userId)){
                likeArray.splice(likeArray.indexOf(userId), 1);
            } else {
                likeArray.push(userId);
            }
        }
    }
    if (!isAvailable){
        console.log('Cannot like. No product in our system')
    } else {
        console.log(JSON.stringify(products));
    }

}

likeProduct('laptop', 'fg12cy');