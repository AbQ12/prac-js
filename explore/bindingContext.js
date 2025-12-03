const perosn = {
    name: 'abq',
    greet(){
        console.log(`hi i am ${this.name}`);
        
    }
};
const greetFunc = perosn.greet;
greetFunc();

const boundgreet = perosn.greet.bind({name:'sarmad'});
boundgreet();