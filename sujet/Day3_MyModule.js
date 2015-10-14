Day3
====

mymodule.js
===========
//Creating a Simple Module
//var calculate = function (numA, numB) {
//    return numA * numB + 10 * numB;
//}
//  exports.calculate = calculate;

//You also can create many functions to be exported in the module.
var calculate = function (numA, numB) {
    return numA  + 10 * numB;
}


var add = function(numA,numB){
    return numA + numB; 
} 

var perform = function(){
    // do something 
}

exports.CalF1 = calculate;
exports.CalF2 = add;
//exports.perform1 = perform;