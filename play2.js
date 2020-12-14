const name = "Max";
var age = 28;
const hasHobbies = true;

const summarizeUser =(userName, serAge, userHasHobby) =>{

    return (
        'Name is ' + 
        userName +
        ', age is ' +
        userAge +
' and the user has hobbies:' +
userHasHobby
    );

}
console.log(summarizeUser(name, age, hasHobbies));

//const add = (a,b) => a+b;
const addOne = (a) => a +1;
//console.log(add(3,4));
console.log(addOne(1));

const addRandom = () => 1+2;
console.log(addRandom());

const person = {
    name: "Simas",
    age:31
    greet() {
        console.log ("Hi, I am ' + this.name");
    }
};
person.greet();