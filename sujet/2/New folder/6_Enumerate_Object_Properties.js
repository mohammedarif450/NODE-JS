/*Enumerate (loop over) an object’s properties using the for in loop

By using for in, we can loop over each property in an object. In the following sample,
we are using the for in loop to retrieve the property names from the cody object.*/

var cody = {
age: 23,
gender: 'male'
};
for (var key in cody) { // key is a variable used to represent each property name.
// Avoid properties inherited from the prototype chain.
if (cody.hasOwnProperty(key)) {
console.log(key +":"+ cody[key]);
}
}

/*
Notes
The for in loop has a drawback. It will not only access the properties of the specific
object being looped over. It will also include in the loop any properties inherited (via the
prototype chain) by the object. Thus, if this is not the desired result, and most of the
time it is not, we have to use a simple if statement inside of the loop to make sure we
only access the properties contained within the specific object we are looping over. This
can be done by using the hasOwnProperty() method inherited by all objects.*/

/*Only properties that are enumerable (i.e. available when looping over an object’s
properties) show up with the for in loop. For example, the constructor property will not
show up. It is possible to check which properties are enumerable with the
propertyIsEnumerable() method.*/



//==================================================================================================
/*Host objects and native objects
You should be aware that the environment (e.g., a web browser) in which JavaScript is
executed typically contains what are known as host objects. Host objects are not part of
the ECMAScript implementation, but are available as objects during execution. Of
course, the availability and behavior of a host object depends completely on what the
host environment provides.
For example, in the web browser environment the window/head object and all of its
containing objects (excluding what JavaScript provides) are considered host objects.*/

for (x in window) {
console.log(x); // Logs all of the properties of the window/head object.
}
/*
You might have noticed that native JavaScript objects are not listed among the host
objects. It’s fairly common that a browser distinguishes between host objects and native
objects.
As it pertains to web browsers, the most famous of all hosted objects is the interface for
working with HTML documents, also known as the DOM. The following sample is a
method to list all of the objects contained inside the window.document object provided
by the browser environment.*/