// Map
// The difference between forEach and map, is the forEach doesn't return anything
// However map returns an array

var a = [2,1,4,2,5];

var f = function(item) {
  return `Item = ${item}`;
}

a.map(f);

a.filter(function f(i) {  return i==2; });