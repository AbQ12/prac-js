//number
let balance = 120

console.log(balance );
let anotherbal = new Number(120);

// console.log(anotherbal);
// console.log(anotherbal.valueOf());

// console.log(typeof balance );
// console.log(typeof anotherbal);

//boolean
let isActive = true;
let isReallyActive = new Boolean(true) //not recomended

//null and undefunef

let firstname = null;
let lastname = undefined;
// console.log(firstname);
// console.log(lastname);

//string
let mySrting = "hello";
let Mystring1 = 'olaa';
let username = 'Abq';

let oldGreet = mySrting + ' Abq';
// console.log(oldGreet);

let greetMessage = `helllo ${username} !`;//used back tick //string pollation
let demoOne = `Value is ${2*2}`;
// console.log(greetMessage);
// console.log(demoOne);

let sm1 = Symbol("abq");
let sm2 = Symbol("abq");

console.log(sm1 == sm2);
