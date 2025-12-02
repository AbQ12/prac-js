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

/* class vehicle {
    constructor(make, model, varient){
        this.make = make;
        this.model = model;
        this.varient = varient;
    }
   start(){
    return `${this.model} car from ${this.make} `;
   }
} */
// inheritance

/* class car extends vehicle{
    drive(){
        return `${this.make} : this is an inheritance eg`;
    }

}
let mycar = new car("toyota", "fortuner" , "gr" );
// console.log(mycar.start(),mycar.drive());

let vehOne = new vehicle("honda", "civic", "oreal");
console.log(vehOne.make);
 */

// Encpsulation(restricting direct access to data object or object data)

/* class bankacc{
    #balance = 0;
    deposit(ammount){
        this.#balance += ammount;
        return this.#balance;
    }
  getbalance(){
    return `${this.#balance}`;
  }
}
let account = new bankacc();
console.log(account.getbalance());
 */


// Abstaaction(hide the complex things behind the scene)

/* class coffeemec{
   // call db
   //filter
   start(){
       return `starting the mechine`;
}
brewCoffee(){
    return `coffee is brewing`
    }
}
let mymechine = new coffeemec();
console.log(mymechine.start(),mymechine.brewCoffee()); */

//polymorphism the abulity ofsometing to have or to be displayed in more than one form

/* class bird{
    fly(){
        return `flying...`;
    }
}
class penguin extends bird{
    fly(){
        return `penguin cant fly...`;
    }
}

let birds = new bird()
let penguins = new penguin()
console.log(birds.fly(),penguins.fly());

//static method this method can only be called by the class

class calculator{
    static add(a,b){
        return a+b;
    }
}

let minicalc = new calculator();
console.log(calculator.add(2,3));
 */

// getter and setter
/* class Person {
    constructor(name, age) {
        this._name = name;   // underscore means "private-like"
        this._age = age;
    }

    // Getter
    get age() {
        return this._age;
    }

    // Setter
    set age(value) {
        if (value < 0) {
            console.log("Age cannot be negative");
            return;
        }
        this._age = value;
    }
}

let p = new Person("Ali", 20);

console.log(p.age);   // getter → 20

p.age = 25;           // setter updates value
console.log(p.age);   // 25

p.age = -5;           // setter blocks invalid value */
