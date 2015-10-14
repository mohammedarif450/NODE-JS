/*Encapsulating complex objects in a programmatically beneficial way
The Object(), Array(), and Function() objects can contain other complex objects.
In the following sample, I demonstrate this by setting up an object tree using Object()
objects.
*/
// Encapsulation using objects creates object chains.
var object1 = { object1_1: { object1_1_1: {foo: 'bar'}, object1_1_2: {}, },
object1_2: { object1_2_1: {},object1_2_2: {},}
};
console.log(object1.object1_1.object1_1_1.foo); // Logs 'bar'.

/*The same thing can be done with an Array() object (aka multidimensional array), or
with a Function() object.*/

// Encapsulation using arrays creates a multidimensional array chain.
var myArray = [[[]]]; // An empty array, inside an empty array, inside an empty array.

/* Here is an example of encapsulation using functions: An empty function
inside an empty function inside an empty function. */

var myFunction = function () {
// Empty function.
var myFunction = function () {
// Empty function.
var myFunction = function () {
// Empty function.
};
};
};
// We can get crazy and mix and match too.
var foo = [{ foo: [{ bar: { say: function () { return 'hi'; } }}]}];
console.log(foo[0].foo[0].bar.say()); // Logs 'hi'.