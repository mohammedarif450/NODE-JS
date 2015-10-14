/*Using hasOwnProperty to verify that an object property is not from the
prototype chain
While the in operator can check for properties of an object, including properties from
the prototype chain, the hasOwnProperty method can check an object for a property
that is not from the prototype chain.
In the following sample, we want to know if myObject contains the property foo, and
that it is not inheriting the property from the prototype chain. To do this, we ask if
myObject has its own property called foo.*/

var myObject = {foo: 'value'};
console.log(myObject.hasOwnProperty('foo')) // Logs true.
// Versus a property from the prototype chain.
console.log(myObject.hasOwnProperty('toString')); // Logs false.


/*The hasOwnProperty method should be leveraged when you need to determine
whether a property is local to an object or inherited from the prototype chain.
*/


/*Checking if an object contains a given property using the in operator
The in operator is used to verify (true or false) if an object contains a given property. In
this sample, we are checking to see if foo is a property in myObject.*/

var myObject = { foo: 'value' };
console.log('foo' in myObject); // Logs true.

/*You should be aware that the in operator not only checks for properties contained in
the object referenced, but also for any properties that object inherits via the prototype
chain. Thus, the same property lookup rules apply and the property, if not in the current
object, will be searched for on the prototype chain.*/

/*This means that myObject in the previous sample actually contains a toString
property method via the prototype chain (Object.prototype.toString), even if we
did not specify one (e.g., myObject.toString = 'foo').*/

var myObject = { foo: 'value' };
console.log('toString' in myObject); // Logs true.
/*
In the last code example, the toString property is not literally inside of the myObject
object. However, it is inherited from Object.prototype, and so the in operator
concludes that myObject does in fact have an inherited toString() property method.*/