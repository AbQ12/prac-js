/* declare an array named teaflavour that contain the string green teaflavour
black tea and oolong tea 
    access the first element of the array and store it in a 
    variable name first tea */

let teaflvour= ["green tea" , "black tea", "oolong tea"];

let firsttea = teaflvour[0];

/* declare an aray named cities containing london ...
 access third element in the array and sotre it in a variable fav city */

 let cities = ["london" , "paris" , "new york" , "berlin"];
let favCity = cities[2];
// console.log(favCity);


/* you have an array named teatypescontaining herbeltea......
        change the secind element of the array to jasmine tea */
 
let teaTypes = ["herbal tea" , "white tea" , "masala chai" , "oolong tea"]
teaTypes[1] = "jasmine tea";
// console.log(teaTypes);


/* declare an array name citites visited containing tokyo...and sydney
     add berlin too array using push method */

     let citiesvisited = ["tokyo" , "seoul" , "dubai" , "sydney"];
     citiesvisited[citiesvisited.length] = "berlin"; // or you can use this
    //  console.log(citiesvisited.length);
     citiesvisited.push("hehe");
    //  console.log(citiesvisited);

/* 
    you have an array names tea orders with chai ...
     remove the last element of the array using the pop method and store it 
     in a variable names last order */

    let teaOrders = ["chai" , "matcha" , "herbal" , "earl grey"];
    const lastorder = teaOrders.pop();

    /* you have an array named popular teas containing green teaOrders...
     create a soft copy of this array named  softcopies */

     let popularTea = ["green tea" , "chai" , "oolong" , "black tea"];
     let softcopies = popularTea;


      
     