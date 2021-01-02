x = 42;

// scope rules

var teacher = 'omar';

function otherClass() {
  teacher = 'mido'; // since teacher is declared outside, it is refering to the outer scope
  topic = 'vs'; // there is no topic declared inside, nor outside, it declare it in the global scope (note we are running java in the non strict mode)
  console.log('welcome');
}

otherClass();


teacher;
topic;

// function expression
var clickHandler = function() {}; // anonymous function expriessions

var keyHandler = function keyHandler() {}; // named function expressions


keyHandler;

// Arrow Functions

people = [{'id':1},{'id':3}];

people;

var ids = people.map(person => person.id);

ids;

var ids2 = people.map(function getId(person) { return person.id}); // named function expression

ids2;

// Immedialty Invoked Functions Expression IIFEs
teacher = 'Kyle';
( function anotherTeacher() {
  var teacher = 'Hany';
  console.log(`Another teacher ${teacher}`); // Advantage of IIFES is that we have immediate another scope
})();

console.log(teacher);

// Block Scoping 
teacher = 'Ahmed';
{
  let teacher = 'Suzy'; // teacher here is locally blocked scoped
  console.log(`Inside Block ${teacher}`);
}
console.log(teacher);

// Closure
// Closure is when a function "remebers" the variables outside ot it, even if you pass that function elsewhere.
// function ask(question) {
//  setTimeOut(function waitASec() {console.log(question);}, 100);
// }

function ask(question) {
  return function holdYourQuestion() {console.log(question);};
}

var myQuestion = ask('What is Closure'); // the function returned will remeber the question 

myQuestion();

