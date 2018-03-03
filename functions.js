console.log("Why, Hello There");
//function expressions
var a = function(){
  console.log("a", 3);
};

//function declarations
function b(){
  console.log("b", 2);
};

var num = 3;
function numPrinter(num){
  console.log("my number:", num);
};
numPrinter(3);


function cat(){
  return "It's a cat";
};
var message = cat();
console.log("mesage:", message);

var instructorPets = [
  {
    instructorName: "Zoe",
    petName: "Biff",
    animalType: "evil cat",
    isFavorite: false
  },
  {
    instructorName: "Zoe",
    petName: "Whiskey",
    animalType: "cat",
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

function domStringMaker(animalArray){
//take pet names and creat dom string
//call printToDom function
  for(var i = 0; i < animalArray.length; i++){
    // var animalName = "<h1 class='petName'>Pet Name: " + animalArray[i].petName + "</h1>";
    // var animalOwner = "<h3 class='animalOwner'>Animal Owner: " + animalArray[i].instructorName + "<h3>";
    // var animalT = "<h3 class='animalType'>Type: "  + animalArray[i].animalType + "</h3>";
    // if(animalArray[i].isFavorite){
    //   var createCard = "<div class='good card'>" + animalName + animalOwner + animalT +"</div>";
    // }else{
    //   var createCard = "<div class='bad card'>" + animalName + animalOwner + animalT +"</div>";
    // };
    //printToDom(createCard, "pet-names");
    var animalString = "";
    if(animalArray[i].isFavorite){
      animalString += "<div class=pet isFavorite'>";
    }else{
      animalString += "<div class=pet isNotFavorite'>";
    };

    animalString +=   "<h1>" + animalArray[i].petName + "</h1>";
    animalString +=   "<h3>Owner: " + animalArray[i].animalOwner + "</h1>";
    animalString +=    "<h3>Type: " + animalArray[i].animalType + "</h3>"
    animalString += "</div>"
    printToDom(animalString, "pet-names");
  };
};

function printToDom(stringToPrint, divId){
//take string and innerHTML to the divId
  var myDiv = document.getElementById(divId);
  //console.log("myDiv", myDiv);
  myDiv.innerHTML += stringToPrint;
};

domStringMaker(instructorPets);







