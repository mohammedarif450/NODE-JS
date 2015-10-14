/*The delete operator can be used to completely remove properties from an object. In
the following code snippet, we delete the bar property from the foo object.
*/
var foo = { bar: 'bar' };
delete foo.bar;
console.log('bar' in foo); // Logs false, because bar was deleted from foo.

/*Notes
delete will not delete properties that are found on the prototype chain.
Deleting is the only way to actually remove a property from an object. Setting a property
to undefined or null only changes the value of the property. It does not remove the
property from the object.*/