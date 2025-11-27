
function person(name, age){
    this.myName  = name;
    this.age = age;
}

function car(make, model){
    this.make = make;
    this.model = model;
}

let myCAr = new car("Toyota", "Corolla");
// console.log(myCAr);

let mynewcar = new car("honda" , "civic-rebirth");
// console.log(mynewcar);

function tea(type){
    this.type = type;
    this.describe = function(){
        return `this is a cup of ${this.type}`
    }
}

let leamontea = new tea("teamon tea");
// console.log(leamontea.describe());

function animal(species){
    this.species = species;

}
animal.prototype.sound = function (){
    return `${this.species} makes a sound`;
}
let cat = new animal("cat");
// console.log(cat.sound());
//new is a funcitonal constructor
function drink(name){
    if(!new.target)
    {
        throw new Error("new use kro ajeeb!");
        
    }
    this.name = name;
}

let coffee =  drink("coffee");






