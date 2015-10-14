//Example1
var cody = new Object();
cody.living = true;
cody.age = 33;
cody.gender = 'male';
cody.getGender = function () { return cody.gender; };
console.log(cody.getGender()); // Logs 'male'.

//Example 2

var myObject = new Object(); // Produces an Object() object.
myObject['0'] = 'f';
myObject['1'] = 'o';
myObject['2'] = 'o';
console.log(myObject); // Logs Object { 0="f", 1="o", 2="o"}
var myString = new String('foo'); // Produces a String() object.
console.log(myString); // Logs foo { 0="f", 1="o", 2="o"}

//Example 3
// Define Person constructor function in order to create custom Person() objects later.
var Person = function (living, age, gender) {
this.living = living;
this.age = age;
this.gender = gender;
this.getGender = function () { return this.gender; };
};
// Instantiate a Person object and store it in the cody variable.
var cody = new Person(true, 33, 'male');
console.log(cody);
/* The String() constructor function that follows, having been defined by
JavaScript, has the same pattern. Because the string constructor is native to
JavaScript, all we have to do to get a string instance is instantiate it. But
the pattern is the same whether we use native constructors like String() or
user-defined constructors like Person(). */
// Instantiate a String object stored in the myString variable.
var myString = new String('foo');
console.log(myString);


//Example 4:
// Create a codyA object using the Object() constructor.
var codyA = new Object();
codyA.living = true;
codyA.age = 33;
codyA.gender = 'male';
codyA.getGender = function () { return codyA.gender; };
console.log(codyA); // Logs Object {living=true, age=33, gender="male",
...}
/* The same cody object is created below, but instead of using the native
Object() constructor to create a one-off cody, we first define our own
Person() constructor that can create a cody object (and any other Person
object we like) and then instantiate it with "new". */
var Person = function (living, age, gender) {
this.living = living;
this.age = age;
this.gender = gender;
this.getGender = function () { return this.gender; };
};
var codyB = new Person(true, 33, 'male');
console.log(codyB); // Logs Object {living=true, age=33, gender="male",
...}

//Example 5
/* Person is a constructor function. It was written with the intent of
being used with the new keyword. */
var Person = function Person(living, age, gender) {
// "this" below is the new object that is being created (i.e. this =
new Object();)
this.living = living;
this.age = age;
this.gender = gender;
this.getGender = function () { return this.gender; };
// When the function is called with the new keyword, "this" is returned instead of false.
};
// Instantiate a Person object named cody.
var cody = new Person(true, 33, 'male');
// cody is an object and an instance of Person()
console.log(typeof cody); // Logs object.
console.log(cody); // Logs the internal properties and values of cody.
console.log(cody.constructor); // Logs the Person() function.

//Example 6
// Instantiate an Array object named myArray.
var myArray = new Array(); // myArray is an instance of Array.
// myArray is an object and an instance of the Array() constructor.
console.log(typeof myArray); // Logs object! What? Yes, arrays are a type of object.
console.log(myArray); // Logs [ ]
console.log(myArray.constructor); // Logs Array()


//Example 7
//The native JavaScript object constructors
//The nine native object constructors that come prepackaged with JavaScript are:
//? Number()
//? String()
//? Boolean()
//? Object()
//? Array()
//? Function()
//? Date()
//? RegExp()
//? Error()

//Notes
//The Math object is the oddball here. It's a static object rather than a constructor
//function, meaning you can’t do this: var x = new Math(). But you can use it as if it
//has already been instantiated (e.g., Math.PI). Truly, Math is just an object namespace
//set up by JavaScript to house math functions.
//The native objects are sometimes referred to as "global objects" since they are the
//objects that JavaScript has made natively available for use. Do not confuse the term
//global object with the "head" global object that is the topmost level of the scope chain,
//for example, the window object in all web browsers.
//The Number(), String(), and Boolean() constructors not only construct objects; they
//also provide a primitive value for a string, number, and Boolean, depending upon how
//the constructor is leveraged. If you call these constructors directly, then a complex
//object is returned. If you simply express a number, string, or Boolean value in your code
//(primitive values like 5, "foo", and true), then the constructor will return a primitive value
//instead of a complex object value.

//Example 8
//User-defined/non-native object constructor functions
var Person = function (living, age, gender) {
this.living = living;
this.age = age;
this.gender = gender;
this.getGender = function () { return this.gender; };
};
var cody = new Person(true, 33, 'male');
console.log(cody); // Logs Object {living=true, age=33, gender="male",...}
var lisa = new Person(true, 34, 'female');
console.log(lisa); // Logs Object {living=true, age=34, gender="female",...}


//Notes
//It is not required, but when creating custom constructor functions intended to be used
//with the new operator, it’s best practice to make the first character of the constructor
//name uppercase: Person() rather than person().
//One tricky thing about constructor functions is the use of the this value inside of the
//function. Remember, a constructor function is just a cookie cutter. When used with the
//new keyword, it will create an object with properties and values defined inside of the
//constructor function. When new is used, the value this literally means the new object or
//instance that will be created based on the statements inside the constructor function.
//On the other hand, if you create a constructor function and call it without the use of the
//new keyword, the this value will refer to the "parent" object that contains the function.


//Example 8

var myNumber = new Number(23);
var myString = new String('male');
var myBoolean = new Boolean(false);
var myObject = new Object();
var myArray = new Array('foo', 'bar');
var myFunction = new Function("x", "y", "return x*y");
var myDate = new Date();
var myRegExp = new RegExp('\bt[a-z]+\b');
var myError = new Error('Darn!');
// Log/verify which constructor created the object.
console.log(myNumber.constructor); // Logs Number()
console.log(myString.constructor); // Logs String()
console.log(myBoolean.constructor); // Logs Boolean()
console.log(myObject.constructor); // Logs Object()
console.log(myArray.constructor); // Logs Array() in modern browsers.
console.log(myFunction.constructor); // Logs Function()
console.log(myDate.constructor); // Logs Date()
console.log(myRegExp.constructor); // Logs RegExp()

//Example 9
var myNumber = new Number(23); // An object.
var myNumberLiteral = 23; // Primitive number value, not an object.
var myString = new String('male'); // An object.
var myStringLiteral = 'male'; // Primitive string value, not an object.
var myBoolean = new Boolean(false); // An object.
var myBooleanLiteral = false; // Primitive boolean value, not an object.
var myObject = new Object();
var myObjectLiteral = {};
var myArray = new Array('foo', 'bar');
var myArrayLiteral = ['foo', 'bar'];
var myFunction = new Function("x", "y", "return x*y");
var myFunctionLiteral = function (x, y) { return x * y };
var myRegExp = new RegExp('\bt[a-z]+\b');
var myRegExpLiteral = /\bt[a-z]+\b/;
// Verify that literals are created from same constructor.
console.log(myNumber.constructor, myNumberLiteral.constructor);
console.log(myString.constructor, myStringLiteral.constructor);
console.log(myBoolean.constructor, myBooleanLiteral.constructor);
console.log(myObject.constructor, myObjectLiteral.constructor);
console.log(myArray.constructor, myArrayLiteral.constructor);
console.log(myFunction.constructor, myFunctionLiteral.constructor);
console.log(myRegExp.constructor, myRegExpLiteral.constructor);


// Exampel 10 - Primitive (aka simple) values
//The JavaScript values 5, 'foo', true, and false , as well as null and undefined, are
//considered primitive because they are irreducible. That is, a number is a number, a
//string is a string, a Boolean is either true or false, and null and undefined are just
//that, null and undefined. These values are inherently simple and do not represent
//values that can be made up of other values.

var myString = 'string'
var myNumber = 10;
var myBoolean = false; // Could be true or false, but that is it.
var myNull = null;
var myUndefined = undefined;
console.log(myString, myNumber, myBoolean, myNull, myUndefined);
/* Consider that a complex object like array or object can be made up of
multiple primitive values, and thus becomes a complex set of multiple values.
*/
var myObject = {
myString: 'string',
myNumber: 10,
myBoolean: false,
myNull: null,
myUndefined: undefined
};
console.log(myObject);
var myArray = ['string', 10, false, null, undefined];
console.log(myArray);

//The primitive values null, undefined, "string", 10, true, and false
//are not objects