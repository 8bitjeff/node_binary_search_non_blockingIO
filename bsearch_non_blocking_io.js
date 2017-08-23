/**
* @author Jeff Fulton
/*
The basic premise of a binary search is this: given sorted array, 
a particular value can be found by starting in the middle. 
of the sought-after value is greater than the middle value, 
look in the middle of the second half of the array. 
If it’s less, look in the middle of the first half of the array. 


**usage**
var bsearch=require('./bsearch.js');
var result=bsearch(numberArray, numToFind),chunk; The [] should be sorted,

This version adds provisions to allow async IO to continue while it is running.

chunk=number of iterations before calling  process.nextTick()

*/

'use strict';

module.exports = function(numberArray=[],numToFind=0,chunk=10) {
    var numberArray=numberArray;
    var numToFind=numToFind;
    var recursion=recursion;
    var chunkCtr=0;
    var first=0;
    var last= numberArray.length - 1;
    var chunk=chunk;// at each 10% interval, non-block IO
    var middle=0;
    var location=0
    console.log("first", first);
    console.log("last", last);
    console.log("chunk",chunk)
   

    var location;
    location=arraySearch();
    return location;

    function arraySearch(){
        
        middle = Math.floor((last + first)/2);
        chunkCtr++;
        //console.log("chunkCtr", chunkCtr)
        if (chunkCtr == chunk) {
            console.log("non-block-io");
            process.nextTick(arraySearch);
            chunkCtr=0;
         }

        if (first > last) { 
            console.log(" error: first > last");
            // check for error in data passed in
            return -1;
        } else if (numberArray[middle] > numToFind) {
            last=middle--;
            return arraySearch();
        } else if (numberArray[middle] < numToFind) {
            first=middle++;
            return arraySearch();
        } else {
            return middle;
        }
        
       
    }
    
}