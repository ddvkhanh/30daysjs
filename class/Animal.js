export class Animal {
  constructor(name, age, color, legs) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }

  get getName() {
    return this.name;
  }

  set setName(name) {
    this.name = name;
  }

  get getAge() {
    return this.age;
  }

  set setAge(age) {
    this.age = age;
  }

  get getColor() {
    return this.color;
  }

  set setColor(color) {
    this.color = color;
  }

  get getLegs() {
    return this.legs;
  }

  set setLegs(legs) {
    this.legs = legs;
  }

  getIntro(){
    return `Hello, I am ${this.getName()}. I am now ${this.getAge()}. I have ${this.getColor} fur and I have ${this.getLegs}!`;
  }
}
