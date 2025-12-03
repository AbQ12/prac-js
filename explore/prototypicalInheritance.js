function person(name){
  this.name = name; 
}
person.prototype.greet = function (){
    console.log(`hello my name is ${this.name}`);
    
}
let abq = new person("abq");
abq.greet();
[[prototype]]