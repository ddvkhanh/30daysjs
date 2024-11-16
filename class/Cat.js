import {Animal} from "./Animal.js";

export class Cat extends Animal{

    getIntro(){
        return `Hello, I am ${this.name} the Cat. Ignore me!`;

    }
}