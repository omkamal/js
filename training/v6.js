// Assigments with dots
var person = {};

person.name = 'Omar';

person;

// Property Access (storing by reference)

var person = {};

person.name = 'omar';

var who = person.name; // return a premitave type which is string. An premitave values are copied by value not by reference.

person.name = 'hany';

who;

// Arrays
var person = [];

person.name = 'Omar'; // we have propoerties to an array

var who = person.name;

console.log(person.name);

typeof person === 'array';
typeof person === 'object';


person['sds'] = 's';
person[0] = 2;
person[1] = 0;
person;
person.length;
person['name'];
person.pop(1);
person.length;
Array.isArray(person);
Object.keys(person);
person['0'];
person[0];
person[4]=5;
person.length;
person;
