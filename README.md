# node_binary_search_non_blockingIO
Node and browser ES6 for doing a binary search that doesn't block async background processes

*
**usage**
var bsearch=require('./bsearch.js');

var result=bsearch(numberArray, numToFind,chunk); The [] should be sorted,
*/

chunk value is the number of iterations with blocking IO before process.nextTick() is called
