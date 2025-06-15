// main.js
console.log("Script Loaded");
debugger;

import { Pet, greetOwner, petLimit } from './utils.js';

const pets = [
    new Pet("Fluffy", "Cat", 5),
    new Pet("Buddy", "Dog", 12),
    new Pet("Thumper", "Rabbit", 7),
    new Pet("Mittens", "Cat")
];

const petList = document.getElementById("petList");

pets.forEach(pet => {
    const listItem = document.createElement("li");
    listItem.textContent = pet.speak();
    petList.appendChild(listItem);
});

const myPet = new Pet("Fluffy", "Cat", 5);
console.log(myPet.speak());

console.log(greetOwner("Nathan"));
console.log("Max pets allowed:", petLimit);

document.getElementById("petLimit").textContent = petLimit;



