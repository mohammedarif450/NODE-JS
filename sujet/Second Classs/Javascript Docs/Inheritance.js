//1.Create constructor function for Vehicle 
//2. Create constructor function Car 
//3. Set up dynamic inheritance 
//	(this ensures that when you add a property to “Vehicle”, an instance of Car inherits that property) 
//4. Extend Car using prototype 
//5. Create a new instance of Car – my new Audi 
//6. Extend Vehicle using prototype

//Implementation
//Step 1: Create constructor function for Vehicle 
function Vehicle(hasEngine, hasWheels)
{
	this.hasEngine = hasEngine || false;
	this.hasWheels = hasWheels || false;
}

//Step 2: Create constructor function Car

//hp = HorsePower
function Car (make, model, hp)
{
	this.hp=hp;
	this.make=make;
	this.model=model;
}

//Step 3: Set up dynamic inheritance
Car.prototype = new Vehicle(true, true);

//What JavaScript does when it reaches that statement is the following: 
//The new operator creates a generic object and assigns its __proto__ property to Vehicle.
//prototype The new operator passes the object to the Vehicle constructor function as the this keyword. 
//The object gets the properties hasEngine and hasWheels assigned 
//Upon return from the constructor, the object gets assigned to Car.


//Step 4: Extending Car using prototype
Car.prototype.displaySpecs = function () {
 console.log(this.make + ", " + this.model + ", " + this.hp + ", " + this.hasEngine + ", " + this.hasWheels);
  }

  //Step 5: Creating a new Car

  var NewAudi = new Car("Auti", "A4", "1500");
  NewAudi.displaySpecs();
//======>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>RUN PROGRAM HERE<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<=============

//Step 6: Extend Vehicle using prototype
//Now you might decide that you would like to extend the original capabilities of Vehicle. Using prototype

Vehicle.prototype.hasTrunk = true; //Static
console.log(NewAudi.hasTrunk);