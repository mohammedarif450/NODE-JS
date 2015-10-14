//using the Number()

//The Number() constructor function is used to create numeric objects and numeric primitive values.

// Create number object using the new keyword and the Number() constructor.
var numberObject = new Number(1);
console.log(numberObject); // Logs 1.
console.log(typeof numberObject) // Logs 'object'.
// Create number literal/primitive using the number constructor without new.
var numberObjectWithOutNew = Number(1); // Without using new keyword.
console.log(numberObjectWithOutNew); // Logs 1.
console.log(typeof numberObjectWithOutNew) // Logs 'number'.
// Create number literal/primitive (constructor leveraged behind the scenes).
var numberLiteral = 1;
console.log(numberLiteral); // Logs 1.
console.log(typeof numberLiteral); // Logs 'number'.

//Integers and floating-point numbers
//Numbers in JavaScript are typically written as either integer values or floating-point values.

//Ex 2
var integer = 1232134;
console.log(integer); // Logs '1232134'.
var floatingPoint = 2.132;
console.log(floatingPoint); // Logs '2.132'.

//Number() parameters
/*The Number() constructor function takes one parameter: the numeric value being
created. In the following snippet, we create a number object for the value 456 called
numberOne.*/

//EX3
var numberOne = new Number(456);
console.log(numberOne); // Logs '456{}'.


//Number() properties
//The Number() object has the following properties:

Properties (e.g., Number.prototype;)
MAX_VALUE
MIN_VALUE
NaN

NEGATIVE_INFINITY
POSITIVE_INFINITY
prototype

Number object instance properties and methods
Number object instances have the following properties and methods (not including
inherited properties and methods):
Instance Properties (e.g., var myNumber = 5; myNumber.constructor;)
 constructor
Instance Methods (e.g., var myNumber = 1.00324; myNumber.toFixed();)
toExponential()
toFixed()
toLocaleString()
toPrecision()
toString()
valueOf()
