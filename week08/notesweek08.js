class Pet {
  constructor(name, species, age) {
    this.name = name;
    this.species = species;
    this.age = age;
  }
}

let pets = [
  new Pet("Buddy", "Dog", 3),
  new Pet("Whiskers", "Cat", 5),
  new Pet("Snickers", "Gerbil", 2),
  new Pet("Thumper", "Rabbit", 4)
];

// 🔢 Set total pets
document.getElementById("totalPets").textContent = pets.length;

// 🐾 Count species
let speciesCount = {};
for (let pet of pets) {
  if (speciesCount[pet.species]) {
    speciesCount[pet.species]++;
  } else {
    speciesCount[pet.species] = 1;
  }
}

// 📝 Display species count
let speciesList = document.getElementById("speciesList");
for (let species in speciesCount) {
  let listItem = document.createElement("li");
  listItem.textContent = `${species}: ${speciesCount[species]}`;
  speciesList.appendChild(listItem);
}

// 👴 Find oldest pet
let oldest = pets[0];
for (let pet of pets) {
  if (pet.age > oldest.age) {
    oldest = pet;
  }
}
document.getElementById("oldestPet").textContent =
  `${oldest.name} (${oldest.species}) - ${oldest.age} years old`;

// 📦 Group pets by species
let groupedPets = {};
for (let pet of pets) {
  if (groupedPets[pet.species]) {
    groupedPets[pet.species].push(pet);
  } else {
    groupedPets[pet.species] = [pet];
  }
}

console.log("📦 Pets Grouped by Species:");
for (let species in groupedPets) {
  console.log(species + ":");
  for (let pet of groupedPets[species]) {
    console.log("  - " + pet.name + ", " + pet.age + " years old");
  }
}

// 👴 Pets older than 3 years
let olderPets = [];
for (let pet of pets) {
  if (pet.age > 3) {
    olderPets.push(pet);
  }
}

console.log("Pets older than 3 years:");
for (let pet of olderPets) {
  console.log(pet.name + " - " + pet.age + " years old");
}
