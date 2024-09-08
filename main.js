
// Conditional

var eatsPlants = true;
var eatsAnimals = true;

let animal = "omnivore";
let cat = "herbivore";
let lion = "carnivore";
let fish = "eat somthing"

let checkanimal = (animal === "omnivore" ? console.log(`${eatsAnimals} ${eatsPlants}, omnivore`)  : console.log("undefined"));

let checkCat = (cat === "herbivore" && cat != "cacarnivorer" ?  console.log(`${eatsPlants} ${!eatsAnimals}, herbivore`) : console.log("undefined"))

let checklion = ( lion === "carnivore" && lion != "herbivore" ?  console.log(`${!eatsPlants} ${eatsAnimals}, cacarnivorer`) : console.log("undefined"))

let check = ( fish === "carnivore" || fish === "herbivore" ?  console.log(`${!eatsPlants} ${eatsAnimals}, cacarnivorer`) : console.log("undefined"))


// req 2 

var musicians = -1;

if (musicians <= 0) {
    console.log("NOT a group")
} else if (musicians == 1) {
    console.log("solo")
} else if (musicians == 2){
    console.log("duet")
} else if (musicians == 3) {
    console.log("trio")
} else if (musicians == 4){
    console.log("quartet")
} else if (musicians > 4 ) {
    console.log("this is a large group")
}

// req3 

var undefinedRoom = "ballroom"

var weapon = ""

var suspect = "Kalehoff"; 
var solved = false

// * Mr. Parkes was located in the dining room. // * and the knife belongs to the dining room.
// * Ms. Van Cleve was located in the gallery. // * the trophy belongs to the gallery,
// * Mrs. Sparr was located in the billiards room. // * the pool stick belongs to the billiards room,
// * Mr. Kalehoff was located in the ballroom. // the poison belongs to the ballroom,

if (undefinedRoom === "ballroom" && suspect === "Kalehoff") {
    weapon = "poison";
    solved = true;
    console.log(`${suspect} did it in the ${undefinedRoom} with the ${weapon}!`)

} else if (undefinedRoom === "billiards" && suspect === "Sparr")  {
    weapon = "pool stick";
    solved = true;
    console.log(`${suspect} did it in the ${undefinedRoom} with the ${weapon}!`)
} else if (undefinedRoom === "gallery" && suspect === "Van Cleve") {
    weapon = "trophy";
    solved = true;
    console.log(`${suspect} did it in the ${undefinedRoom} with the ${weapon}!`)
} else if (undefinedRoom === "dining" && suspect === "Parkes") {
    weapon = "knife";
    solved = true;
    console.log(`${suspect} did it in the ${undefinedRoom} with the ${weapon}!`)
} else {
    console.log ("game over")
}

console.log(solved)



// req 4 

var balance = 325;
var checkBalance = true;
var isActive = true;

if (checkBalance === true){
     if (balance >= 0 ) {
        console.log(" balance" +!isActive)
     } else if (balance > 0 )
     {console.log( " balance " +isActive)}
} else {
    console.log("cant check")
}

//re5 

let flavor = "vanila"
let vessel = "cone"
let toppings = "sprinkles"

if (flavor = "vanila" && vessel= "cone" && (toppings = "sprinkles" || toppings = "peanuts")){
    console.log( `I'd like two scoops of ${flavor} ice cream in a ${vessel} with ${toppings}.`)

}