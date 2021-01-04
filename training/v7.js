// ES6 Destructuring
var obj = {'first':'zico','last':'farg'};

obj;

var first = obj.first;
var last = obj.last;

const [f, s] = ['omar','kamal']; // work also with var and let

f;
s;

// Assigments
[first, last] = [true,false];
first;
last;

var middle;

[first, last, middle] = ['Nermo','Labib'];
first;
last;
middle;

// Destructring Objects (it had to be the exact name)
const {ff, ss} = {'ff':0, 'ss':1};
console.log('Desctructing Objects');
ff;
ss;
// Order doesn't matter
let  {x, y} = {'y':0, 'x':1};
console.log('Desctructing Objects');
x;
y;

// assigments 

//{x, y} = {x:'Omar', y:'Kamal'};
//x;
//y;

// Omitting and Spreading
var [a, ,b] = [1,2,3];
console.log('Omitting');
a;
b;

var [i, ...k] = [1,2,3];
console.log('spreading');
i;
k;

// Advanced Deep Arrays
console.log("Deep Arrays");
var [a, [b, [c , d]]] = [1,[2,[3,4]]];
a;
b;
c;
d;



// Object.freeze -  Freeze the object so you can change its content (one level deep only)

const j = {x: 1};
j;
j.x = 2;
j;

Object.freeze(j);
j.x=1;
j;

//