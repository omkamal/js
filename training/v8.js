
// List Transformation

const game = {};
game['suspects'] = [];

game.suspects.push(
  {
    name: "omar",
    age:"20"
  }
);

game;

game.suspects[1] = {
  name: "El Zeft",
  age: 47
}

game;

for ( s of game.suspects) {
  console.log('s',s);
}

var [red, orange] = game.suspects;

red;
orange;

// each iterators

game.suspects.forEach(function(n) {console.log(n.name);});

// Looping over keys in an object
v = {'a':1, b:2, c:2};

for(k in v) {
  console.log(k,v[k]);
}