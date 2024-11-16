import {Animal} from "./Animal.js";

export class Dog extends Animal{
    constructor(name, age, color, legs, breed){
        super(name, age, color, legs);
        this.breed = breed;
    }

    get getBreed() {
      return this.breed
    }

    set setBreed(newBreed) {this.breed = newBreed};

    getIntro(){
        return `Hello, I am ${this.name} the ${this.breed} Dog. I am now ${this.age}. I have ${this.color} fur and I have ${this.legs}!`;

    }
}