const csv = require('csv-parser')
const fs = require('fs')
var results = [];
var c = 2;

function get_age() {
	var age_sum = 0;
	c = c +1 ;
	average_age = results.map((i) => i.age).reduce((i,j) => Number(i) + Number(j)  ,0)/results.length;
	console.log('age avg = ',average_age);

};


fs.createReadStream('sample.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    console.log(results);
	get_age();
  });


console.log(c);
console.log('results = ',results);
