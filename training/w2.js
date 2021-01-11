// ES6 Some functions features:
//

const constructArr = function() {
  console.log(arguments);
  const arr = Array.prototype.slice.call(arguments); // Truns array like objects and turn into an exact array
  arr.push('This is Omar');
  
  return arr.join(' ');
}

constructArr('a','bb','ccc');

// Array from

const constructArr2 = function() {
  console.log(arguments);
  const arr = Array.from(arguments); // Truns array like objects and turn into an exact array
  arr.push('This is Omar');
  
  return arr.join(' ');
}

constructArr('Omar','loves');


// Functions can have properties
const add_zico = function(a,b) {
  return a+b;
};

add_zico.example = 'test me';
add_zico(3,4);
