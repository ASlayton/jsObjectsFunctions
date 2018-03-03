
var favAnimal = {
  name: "Amanda",
  animal: "lemur"
};
console.log("favAnimal:", favAnimal.animal);
console.log("favAnimal:", favAnimal['animal']);


var instructorPets = [
  {
    instructorName: "Zoe",
    petName: "Biff",
    animalType: "cat",
    isFavorite: false
  },
  {
    instructorName: "Zoe",
    petName: "Whiskey",
    animalType: " evil cat",
    isFavorite: true
  },
  {
    instructorName: "Lauren",
    petName: "Frankie",
    animalType: "sweet dog",
    isFavorite: true
  },
  {
    instructorName: "Callen",
    petName: "Seymour",
    animalType: "one eyed dog",
    isFavorite: true
  },
  {
    instructorName: "Callen",
    petName: "Wiley",
    animalType: "destructive dog",
    isFavorite: false
  },
];

console.log("instructor pets:", instructorPets);
var petNameElement = document.getElementById('pet-names');
for(var i = 0; i < instructorPets.length; i++){
  petNameElement.innerHTML += "<h1>" + instructorPets[i].petName + "</h1>";
};