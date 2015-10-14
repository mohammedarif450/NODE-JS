var myObject = {};
// Contain properties inside of myObject representing most of the native JavaScript values.
myObject.myFunction = function () { };
myObject.myArray = [];
myObject.myString = 'string';
myObject.myNumber = 33;
myObject.myDate = new Date();
myObject.myRegExp = /a/;
myObject.myNull = null;
myObject.myUndefined = undefined;
myObject.myObject = {};
myObject.myMath_PI = Math.PI;
myObject.myError = new Error('Darn!');
console.log("***********************************************");
console.log("myObject.myFunction = "+myObject.myFunction);
console.log("myObject.myArray = "+myObject.myArray);
console.log("myObject.myString = "+myObject.myString);
console.log("myObject.myNumber = "+myObject.myNumber);
console.log("myObject.myDate = "+myObject.myDate);
console.log("myObject.myRegExp = "+myObject.myRegExp);
console.log("myObject.myNull = "+myObject.myNull);
console.log("myObject.myUndefined = "+myObject.myUndefined);
console.log("myObject.myObject = "+myObject.myObject);
console.log("myObject.myMath_PI = "+myObject.myMath_PI);
console.log("myObject.myError = "+myObject.myError);
console.log("***********************************************");
/* Works the same with any of the complex objects, for example a
function. */
var myFunction = function () { };
myFunction.myFunction = function () { };
myFunction.myArray = [];
myFunction.myString = 'string';
myFunction.myNumber = 33;
myFunction.myDate = new Date();
myFunction.myRegExp = /a/;
myFunction.myNull = null;
myFunction.myUndefined = undefined;
myFunction.myObject = {};
myFunction.myMath_PI = Math.PI;
myFunction.myError = new Error('Darn!');
console.log("***********************************************");
console.log("myFunction.myFunction = "+myFunction.myFunction);
console.log("myFunction.myArray = "+myFunction.myArray);
console.log("myFunction.myString = "+myFunction.myString);
console.log("myFunction.myNumber = "+myFunction.myNumber);
console.log("myFunction.myDate = "+myFunction.myDate);
console.log("myFunction.myRegExp = "+myFunction.myRegExp);
console.log("myFunction.myNull = "+myFunction.myNull);
console.log("myFunction.myUndefined = "+myFunction.myUndefined);
console.log("myFunction.myFunction = "+myFunction.myObject);
console.log("myFunction.myMath_PI = "+myFunction.myMath_PI);
console.log("myFunction.myError = "+myFunction.myError);

/*console.log(myFunction.myFunction, myFunction.myArray,
myFunction.myString, myFunction.myNumber, myFunction.myDate,
myFunction.myRegExp, myFunction.myNull, myFunction.myNull,
myFunction.myUndefined, myFunction.myObject, myFunction.myMath_PI,
myFunction.myError);*/
console.log("***********************************************");