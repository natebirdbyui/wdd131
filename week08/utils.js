// utils.js

// A class
class Pet {
    constructor(name, species, age=0) {
        this.name = name;
        this.species = species;
        this.age = age;
    }

    speak() {
        return `${this.name} says: I am a ${this.species} and I am ${this.age} years old!`;
    }
}

// A function
function greetOwner(ownerName) {
    return `Hello, ${ownerName}!`;
}

// A constant
const petLimit = 3;

// Export everything at once
export { Pet, greetOwner, petLimit };
