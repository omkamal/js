// Arrays
var person = [];

person.name = 'Omar'; // we have propoerties to an array

var who = person.name;

console.log(person.name);
console.log(who);

console.log(`${typeof person === 'array'}`);
console.log(`${typeof person === 'object'}`);

person[0]='v';
console.log(person[0]);
console.log(person);
console.log(person.length);
