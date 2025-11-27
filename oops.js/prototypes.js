let computer = {cpu: 12};
let levovo = {screen : "HD",
    __proto__ :computer
};
let tomhard = {};
//dunder prototype  '__'
// console.log(`computer`, computer.__proto__);

let genericCar = {tyres : 4};

let tesla = {
    driver : "AI",
};

Object.setPrototypeOf(tesla, genericCar)
console.log(`tesla` , Object.getPrototypeOf(tesla) );


