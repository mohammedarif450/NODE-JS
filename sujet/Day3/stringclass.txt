//The String() constructor function is used to create string objects and string primitive values.

// Create a string object using the new keyword and the String()constructor.
var stringObject = new String('foo');
console.log(stringObject); // Logs foo {0 = 'f', 1 = 'o', 2 = 'o'}
console.log(typeof stringObject); // Logs 'object'.
// Create string literal/primitive by directly using the String constructor.
var stringObjectWithOutNewKeyword = String('foo'); // Without new keyword.
console.log(stringObjectWithOutNewKeyword); // Logs 'foo'.
console.log(typeof stringObjectWithOutNewKeyword); // Logs 'string'.
 // Create string literal/primitive (constructor leveraged behind the scene).
var stringLiteral = 'foo';
console.log(stringLiteral); // Logs foo.
console.log(typeof stringLiteral); // Logs 'string'.