//closure are the functions having access to the parent scope,
//  even after the parent function has closed.

function outer(){
    let counter = 4;
    return function(){
        counter++;
        return counter;
    }
}

let incr = outer();
console.log(incr());
