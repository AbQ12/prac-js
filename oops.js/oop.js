/* let car = {
    make:"toyota",
    model:"cammery",
    year: 2025,
    start:function (){
        return `${this.make} car got stared in ${this.year}`;
    }
} */
// console.log(car.start());

/* function person(name,age){
    this.name = name;
    this.age = age;
}
let menal = new person("menal", 20); */
// console.log(menal);


/* function animal(type){
 this.type = type
}
animal.prototype.speak = function(){
    return `${this.type} makes a sound`;
}
Array.prototype.abq = function(){
    return `custom method ${this}`
} */
// prototypal chain

/* const user = {
    username:"abq",
    logincoint : 9,
    signedin : true
}
 */
//classes 

class vehicle {
    constructor(make, model, varient){
        this.make = make;
        this.model = model;
        this.varient = varient;
    }
   start(){
    return `${this.model} car from ${this.make} `;
   }
}
// inheritance

class car extends vehicle{
    drive(){
        return `${this.make} : this is an inheritance eg`;
    }

}
let mycar = new car("toyota", "fortuner" , "gr" );
// console.log(mycar.start(),mycar.drive());

let vehOne = new vehicle("honda", "civic", "oreal");
console.log(vehOne.make);


