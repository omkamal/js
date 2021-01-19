
require('fs')
require('process')
const Table = require('cli-table');

console.log(process.argv)

const t = new Table({
    head: ['Command','Description'],
    colWidths: [5,50]
    });

t.push(['ls','list the files in a directory'],
        ['rm','deletes a file in a directory']
);

console.log(t.toString());

module.exports = {};