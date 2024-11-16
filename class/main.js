import {Cat} from "./Cat.js";
import {Dog} from "./Dog.js";


const dog  = new Dog('Susu', 2, 'golden', '4', 'Labrador');
const cat = new Cat('Mimi', 3, 'black', 4);

console.log(dog.getIntro());
console.log(cat.getIntro());

