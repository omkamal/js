// this and / Protoypes

// this
// refernce the execution content for that call, determined entirely by how the function was called

// A this-aware function can thus have a different contect each time it's called,
// which make it more flexible and reusable.

var workshop = {
  teacher: "Kyle",
  ask(question) {
    console.log(this.teacher,question); // a method
  },
};

workshop.ask("What is implicit binding?"); // this in the context above is reffering to calling object.

// Another example

function ask(q) {
  console.log(this.teacher,q);
}

function otherClass() {
  var myContext = {
    teacher: "Suzy"
  };
  ask.call(myContext,"Sample Question?");
}


otherClass();

// Prototypes

function Workshop(teacher) {
  this.teacher = teacher;
}

Workshop.prototype.ask = function(q) {console.log(this.teacher,q);};

var deepJS = new Workshop('Omar');
var reactJS = new Workshop('Hany');

deepJS.ask("Is prototype a class?");


reactJS.ask("Is prototype a ugly?");
