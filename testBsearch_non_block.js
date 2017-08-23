/*
**usage**
var bsearch=require('./bsearch.js');
var result=bsearch(numberArray, numToFind,chunk); The [] should be sorted,
*/
'use strict';

var numToFind =200031;
// need emough numbers to make block io for a few milliseconds
var numberArray =[];
for (var ctr=0;ctr<=6000000;ctr++){
    numberArray.push(ctr);
}

// calling a procedure like this in node will block io
var bsearch=require('./bsearch_non_blocking_io.js');

console.log("number to find", numToFind);

var result=bsearch(numberArray, numToFind);
console.log ("result=", result);
