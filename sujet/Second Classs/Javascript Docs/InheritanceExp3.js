/*Summary
You cause a class to inherit using ChildClassName.prototype = new ParentClass();.
You need to remember to reset the constructor property for the class using ChildClassName.prototype.constructor=ChildClassName.
You can call ancestor class methods which your child class has overridden using the Function.call() method.
Javascript does not support protected methods.*/

//To jump right into it, following is a sample showing inheritance between two classes:

/*function Mammal(name){ 
	this.name=name;
	this.offspring=[];
} 
Mammal.prototype.haveABaby=function(){ 
	var newBaby=new Mammal("Baby "+this.name);
	this.offspring.push(newBaby);
	return newBaby;
} 

Mammal.prototype.toString=function(){ 
	return '[Mammal "'+this.name+'"]';
} 


Cat.prototype = new Mammal();        // Here's where the inheritance occurs 
Cat.prototype.constructor=Cat;       // Otherwise instances of Cat would have a constructor of Mammal 
function Cat(name){ 
	this.name=name;
} 
Cat.prototype.toString=function(){ 
	return '[Cat "'+this.name+'"]';
} 


var someAnimal = new Mammal('Mr. Biggles');
var myPet = new Cat('Felix');
console.log('someAnimal is '+someAnimal);   // results in 'someAnimal is [Mammal "Mr. Biggles"]' 
console.log('myPet is '+myPet);             // results in 'myPet is [Cat "Felix"]' 

myPet.haveABaby();                    // calls a method inherited from Mammal 
console.log(myPet.offspring.length);        // shows that the cat has one baby now 
console.log(myPet.offspring[0]);            // results in '[Mammal "Baby Felix"]' 
*/
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//Using the .constructor property
/*Look at the last line in the above example. The baby of a Cat should be a Cat, right? While the haveABaby() method worked, that method specifically asks to create a new Mammal. While we could make a new haveABaby() method for the Cat subclass like this.offspring.push(new Cat("Baby "+this.name)), it would be better to have the ancestor class make an object of the correct type.

Every object instance in JS has a property named constructor that points to its parent class. For example, someAnimal.constructor==Mammmal is true. Armed with this knowledge, we can remake the haveABaby() method like this:

Mammal.prototype.haveABaby=function(){ 
	var newBaby=new this.constructor("Baby "+this.name);
	this.offspring.push(newBaby);
	return newBaby;
} 
...
myPet.haveABaby();                    // Same as before: calls the method inherited from Mammal 
alert(myPet.offspring[0]);            // Now results in '[Cat "Baby Felix"]' */




/*function Mammal(name){ 
	this.name=name;
	this.offspring=[];
} 
//Mammal.prototype.haveABaby=function(){ 
//	var newBaby=new Mammal("Baby "+this.name);
//	this.offspring.push(newBaby);
//	return newBaby;
//}
Mammal.prototype.haveABaby=function(){ 
	var newBaby=new this.constructor("Baby "+this.name);
	this.offspring.push(newBaby);
	return newBaby;
} 
Mammal.prototype.toString=function(){ 
	return '[Mammal "'+this.name+'"]';
} 


Cat.prototype = new Mammal();        // Here's where the inheritance occurs 
Cat.prototype.constructor=Cat;       // Otherwise instances of Cat would have a constructor of Mammal 
function Cat(name){ 
	this.name=name;
} 
Cat.prototype.toString=function(){ 
	return '[Cat "'+this.name+'"]';
} 


var someAnimal = new Mammal('Mr. Biggles');
var myPet = new Cat('Felix');
console.log('someAnimal is '+someAnimal);   // results in 'someAnimal is [Mammal "Mr. Biggles"]' 
console.log('myPet is '+myPet);             // results in 'myPet is [Cat "Felix"]' 

myPet.haveABaby();                    // calls a method inherited from Mammal 
console.log("Number baby:: "+myPet.offspring.length);        // shows that the cat has one baby now 
console.log(myPet.offspring[0]);            // results in '[Mammal "Baby Felix"]' 
*/
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
/*
Calling 'super' methods
Let's extend the example now so that when baby kittens are created, they 'mew' right after being born. 
To do this, we want to write our own custom Cat.prototype.haveABaby() method, which is able to call the 
original Mammal.prototype.haveABaby() method:

Cat.prototype.haveABaby=function(){ 
	Mammal.prototype.haveABaby.call(this);
	alert("mew!");
}
The above may look a little bit bizarre. 
Javascript does not have any sort of 'super' property, which would point to its parent class. 
Instead, you use the call() method of a Function object, which allows you to run a function using a different object
 as context for it. If you needed to pass parameters to this function, they would go after the 'this'. */
function Mammal(name){ 
	this.name=name;
	this.offspring=[];
} 

Mammal.prototype.haveABaby=function(){ 
	var newBaby=new this.constructor("Baby "+this.name);
	this.offspring.push(newBaby);
	return newBaby;
} 
Mammal.prototype.toString=function(){ 
	return '[Mammal "'+this.name+'"]';
} 


Cat.prototype = new Mammal();        // Here's where the inheritance occurs 
Cat.prototype.constructor=Cat;       // Otherwise instances of Cat would have a constructor of Mammal 
function Cat(name){ 
	this.name=name;
} 
Cat.prototype.toString=function(){ 
	return '[Cat "'+this.name+'"]';
} 


var someAnimal = new Mammal('Mr. Biggles');
var myPet = new Cat('Felix');
console.log('someAnimal is '+someAnimal);   // results in 'someAnimal is [Mammal "Mr. Biggles"]' 
console.log('myPet is '+myPet);             // results in 'myPet is [Cat "Felix"]' 

                    // calls a method inherited from Mammal 
Cat.prototype.haveABaby=function(){ 
	Mammal.prototype.haveABaby.call(this);
	console.log("mew!");
}
myPet.haveABaby();
console.log("Number baby:: "+myPet.offspring.length);        // shows that the cat has one baby now 
console.log(myPet.offspring[0]);            // results in '[Mammal "Baby Felix"]' 