// Scope
//typeof describe;

var v4;

before = function() {
  v4 = null; // Pointing to he global variable
}


after = function() {
  v4 = 10;
}


before();

v4;

after();

v4;
// Another Scope

before_with_var = function() {
  var v4 = null; // Referring to a local variable
  console.log('inside the function',v4);
}


after_with_var = function() {
  var v4 = 10;
  console.log('inside the function',v4);

}

before_with_var();

v4;

after_with_var();

v4;

// Score rule 3 = Input to a function are treated as local scope variables.


// Scope rule 4
// Block scope can be created with let

var where = 'outer';
{
  let where = 'inner';
}

where === 'inner';
where === 'outer';

// Scope rule 4
// A function has access to the variables contained within the sa,e scope that function was created in
function david() {
  var tika;
  var x = 'lolos';
  function zorba() {
    tika = x;
  };
  zorba();
  console.log('sdsd',tika === 'lolos');
};

david();

// Scope rule 5:
// A function's local scope variables aren't available anywhere outside the function.
function test_rule_5() {
  var firstFn = function() {
    var localToFirstFn = 'inner';
  };
  
  firstFn();
  var secondFn = function() {
    v4 = localToFirstFn; // will fail
  };
  
  secondFn();
}; 
 // test_rule_5();


// Scope rule 6:
// A function's local scope variables aren't available anywhere outside that function, regardless of the
// context it;s called in.

function test_rule_6() {
  
  var f1 = function() {
    var g1 = 1;
    
    f2(); // Although False, it might seem reasonable to think that f2 (which mentions the g1 variable), have access 
    // to the 'g1' variable, since it's being called here from within the scope where the variable is decleared.
  };
  
  var f2 = function() {
    v4 = g1;
  };
 
  f3 = function() {
    f2();
  };
  
  f3(); // of course calling f2() should throw an error in this case, since f2() doesn't have access
  // to the g1 variable.
  
  // In addition, calling the f1 (which in turns call f2()) should also throw since it the calling context
  // of f2() has no infulence over its scope access rules
  f1();
  
};

//test_rule_6();

// Scope rule 7:
// If an inner and an outer variable share the same name, and the name is referenced in the inner scope,
// the inner scope variable masks the variable from the outer scope with the same name.
// This renders the outer scope variables inaccessible from anywhere the inner function block.

function test_rule_7() {
  var o = 'outer';
  var fn = function() {
    var o = 'inner';
    v4 = o;
  };
  fn();
  console.log('o = ',v4);
}

test_rule_7();

// Scope rule 8:
// If an inner and outer variable share the same name, and the name is referenced in the outer scope, 
// the outer value binding will be used.


function test_rule_8() {
  var sameName = 'outer';
  var fn = function() {
    var sameName = 'inner';
  }
  fn();
  v4 = sameName;
  console.log(`v4 = ${v4}`);
};

test_rule_8();

// Scope rule 9:
// A new variable scope is created for each call to a function, as exemplified with a counter

function test_rule_9() {
  var fn = function() {
    var localVar = localVar || 10;
    v4 = localVar;
    console.log(`v4 = ${v4}`);  
    };
  fn();
  };
test_rule_9();

// A new variable scope is created for each call to a function, as exemplified with uninitalized string variables
// This is a longer form of the same observation as above, using strings instead of numbers.

function test_rule_10() {
  var fn = function() {
    var localVar;
    if(localVar === undefined) {
      v4 = 'alpha';
    } else if (localVar === 'initialized') {
      v4 = 'omega';
    }
    localVar = 'initalized';
    
  };
  console.log(`1- v4 = ${v4}`);  
  fn();
  console.log(`2- v4 = ${v4}`);  
  fn();
  console.log(`3- v4 = ${v4}`);  
  
};

test_rule_10();

// Scope rule 11:
// An inner function can access both it's local scope variables and varibles in its containing scope, provided
// the variables have different names.
function test_rule_11() {
  var c = 10;
  
  var fn = function() {
    c = c + 1;
    v4 = c;
  };
  fn();
  console.log(`4- v4 = ${v4}`);  
 
};

test_rule_11();

// Scope rule 12:
// Between calls to an inner function, that inner function retains access to a variable in an outer scope.
// Modifying those variables, has a lasting effect between calls to the inner function.

function test_rule_12() {
  var outerCounter = 20;
  
  var fn = function() {
    outerCounter = outerCounter + 1;
    v4 = outerCounter;
  };
 fn();
 console.log(`5- v4 = ${v4}`); 
  fn();
 console.log(`6- v4 = ${v4}`); 
};


test_rule_12();

// Scope rule 13:
// The rule about retaining access to variables from an outer scope still applies, even after the outer function
// call (that created the outer scope) has returned.

function test_rule_13() {
  var outerFn = function() {
    
  };
  
};

// Scope rule 14:
// The rule about retaining access to variables from an outer scope still applies, even after the outer
// function call (that created the outer scope) has returned.
var v5;
var outerFn = function() {
  // Note: the contents of this function is the same as the entire body of the previous test
  var counterInOuterScope = 10;
  
  var innerIncrementingFn = function() {
    counterInOuterScope = counterInOuterScope + 1;
    v4 = counterInOuterScope;
  };
  innerIncrementingFn();
  console.log(`7- v4 = ${v4}`); 
  innerIncrementingFn();
  console.log(`8- v4 = ${v4}`); 
  v5 = innerIncrementingFn;
  
};

function test_rule_14() {
  outerFn();
  v5();
  console.log(`9- v4 = ${v4}`); 
  
};
test_rule_14();

// Scope rule 15:

var v6;
var outerFn = function() {
  
};


// 

