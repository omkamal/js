const x = 3;
x;

var l = [1,2,3,4];

for(i=0; i<l.length;i++) {
  console.log(l[i]);
}

for (let j of l) {
  console.log(j);
}

while(l.length>4) {
  let s = l.pop();
  print(s);
}

