////cls to clear screen
////Example1:: Print Hello World
//console.log('This is my First Node Application');

////Example 2:: Change color
////Run Command :: npm install cli-color
//var cli = require('cli-color');
//console.log(cli.blue('"Hello Node.js" in blue'));
//console.log(cli.red('"Hello Node.js" in red color'));
//console.log(cli.green('"Hello Node.js" in green color'));

////NOTE: Check version of node using command :: node -v, npm -help

////Example 3: Defining Variables and operations
//variable_type variable_name;
//var a, b; a = 10; b = 5.4;
//// Addition 
//var c = a + b; console.log("ADD = "+c);//15.4
//// Subtraction
//var c = a - b; console.log("SUB = "+c);//4.6
//// Multiplication
//var c = a * b; console.log("MUL="+c);//54
//// Division
//var c = a / b; console.log("DIV="+c);//1.85....

////EXAMPLE 4 MATH
//var a, b; a = 2;
//b = 3.5;
//console.log(Math.sin(a));
//console.log(Math.cos(b));
//console.log(Math.max(a, b));
//console.log(Math.sqrt(a * b));

////EXample 5 Logical Operations
//var a, b;
//a = 5;
//b = 8;
//console.log(a > b);
//console.log(a < b);
//console.log(a >= b);
//console.log(a <= b);
//console.log(a != b);
//console.log(a == b);


////Eample 6, 

//var a, b;
//a = 5;
//b = 8;
//console.log(a > b && a != b);
//console.log(!(a >= b));
//console.log(a == b || a > b);


////Eample 7: If Statment Execution
//var a, b;
//a = 9;
//b = 8;
//if (a < b || a + b < a) {
//    console.log('conditional-->a>b || a-b<a');
//}
//else
//{
//    console.log('..another');
//}


////Example 8: IF Conditional
//var a = 3, b = 3;
//console.log(a > b ? true : false);
//console.log(a == b ? 'a==b' : 'a is not equal to b');


////Eample 9, Switch Case Option

//var color = 'white';
//switch (color) {
//    case 'black': console.log('black');
//        break;
//    case 'green': console.log('green');
//        break;
//    case 'white': console.log('white');
//        break;
//    default: console.log('No Option');
//        break;
//}

////Eample 10: For loop

//for (var counter = 0; counter < 10; counter++) {
//    console.log(counter);
//}

////Eample 11: While loop
//var num = 0;
//while (num < 10) {
//    console.log(num); num++;
//}

////Eample 12: Node provide array for collection Manipulation
//var array = new Array();
//array[0] = 3;
//array[1] = 5;
//array[2] = 12;
//array[3] = 8;
//array[4] = 7;
////OR Use push() function to insert item into array
////array.push(10);
////array.push(18);
////console.log(array);
//////Traversal array
//for (var i = 0; i < array.length; i++) {
//    console.log(array[i]);
//}

////Eample 13: Update data into array
//array[2] = -2;
//array[3] = 5;
//console.log(array);

////Eample 14:Removing data from array using .pop() or splice(index)
//array.pop();
//array.pop();
//console.log(array);

////splice
//var index = 1;
//array.splice(index, 1);
//console.log(array);

////Example 15: Working with JSOM Data
//var customer = {
//    name: 'michael z',
//    email: 'michael@email.com',
//    age: 35,
//    registereddate: new Date()
//}
//console.log(customer);

////Example 16: Working with JSON data - Nested in JSOM
//var customer = {
//    name: 'michael z',
//    email: 'michael@email.com',
//    age: 35,
//    registereddate: new Date(),
//    address: {
//        city: 'berlin',
//        country: 'berlin'
//    }
//}
//console.log(customer);

////Example 17: Accessing JSON Data
//console.log("Customer Name: ", customer.name);
//console.log("Customer EMail: ", customer.email);
//console.log("Customer Age: ", customer.age);
//console.log("Customer Registered Date: ", customer.registeredDate);
//console.log("Customer Country: ", customer.country);

////Example 18: how we know our JSON object attributes

//var myjson = {
//        id: 2,
//        name: 'jackson',
//        email: 'jackson@email.com'
//    };

//for (var sujeet in myjson) {
//    console.log(sujeet);
//}

////Example 19: you want to check if the attribute name exists in our JSON object.
//console.log(myjson.hasOwnProperty('id'));
//console.log(myjson.hasOwnProperty('name'));
//console.log(myjson.hasOwnProperty('email'));
//console.log(myjson.hasOwnProperty('address'));



////Example 20: EDITING JSON
//var customer = {
//    name: 'Michael Z',
//    email: 'michael@email.com',
//    age: 35,
//    registeredDate: new Date(),
//    address: {
//        city: 'Berlin',
//        country: 'Berlin'
//    }
//}

//customer.email = 'michael2012@email.com';
//customer.age = 33;
//console.log(customer);

////Example 21: Another solution is to use [] with the attribute name to edit value data.

//var myjson = {
//    id: 2,
//    name: 'jackson',
//    email: 'jackson@email.com'
//};

//console.log(myjson);
//myjson['country'] = 'germany';
//console.log(myjson);


////EXAMPLE 22: JSON Array
//var now = new Date();
//var productTransaction = {
//    id: 2,
//    user: 'agusk',
//    transactionDate: now,
//    details: [
//        {
//            code: 'p01',
//            name: 'ipad 3',
//            price: 600
//        },
//        {
//            code: 'p02',
//            name: 'galaxy tab',
//            price: 500
//        },
//        {
//            code: 'p03',
//            name: 'kindle',
//            price: 120
//        }
//    ]
//}
//console.log(productTransaction);

////We can get JSON data through its attributes, for instance, id and call productTransaction.id:
//console.log('Id:' + productTransaction.id);
//console.log('User:' + productTransaction.user);
//console.log('Transaction date:' + productTransaction.transactionDate);
//console.log('Details:' + JSON.stringify(productTransaction.details));

//console.log('hello');
//var i;
//for (is in productTransaction.details) {

//    console.log(productTransaction.details[is].code);

//}

////If you want to access a JSON array, for instance, using the details attribute, you can pass the index parameter to get a single JSON object
//for (var i = 0; i < producttransaction.details.length; i++) {
//    console.log('code:' + producttransaction.details[i].code);
//    console.log('name:' + producttransaction.details[i].name);
//    console.log('price:' + producttransaction.details[i].price);
//}

////You can see when we call this script:
//console.log('Details:' + productTransaction.details);

////Example 23: How do we edit our JSON array object

//productTransaction.user = 'zahra';
//productTransaction.details[0]['price'] = 250;
//console.log(productTransaction);

////Example 24: In the previous section, we learned how to check if the attribute name exists or not. We can do this for a JSON array, too.

//console.log(productTransaction['id'] == undefined ? false : true);
//console.log(productTransaction['name'] == undefined ? false : true);
//console.log(productTransaction.details[0]['code'] == undefined ? false : true);
//console.log(productTransaction.details[0]['approved'] == undefined ? false : true);


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//// START FUNCTIONS
////EXAMPLE 25: Normal function
//function HelloNode()
//{
//    console.log("I am Hello JS function");
//}
//HelloNode();

////EXAMPLE 26: function with return values
//function HelloNode() {
//    return 'I am returning function from Hello Node';
//}
//var result = HelloNode();
//console.log(result);

////EXAMPLE 27: function with Argument
//function HelloNode(a,b) {
//    return a + b;
//}
//var result = HelloNode(3,6);
//console.log(result);

////EXAMPLE 28: Callback Function :: A callback function is a function that is called through a function pointer. 
////If you pass the pointer (address) of a function as an argument to another and that pointer is used to call the 
////function it points to, it is said that a callback is made.
//function HelloNode(a,b, callback) {
//    var c = a + b;
//    callback(c)
//}
//HelloNode(3,6,function(result){
//console.log(result);
//})


////EXAMPLE 29: Callback Function
//function Perform(a, b, sujeet) {
//    //Do Some proccessing
//    var errorcode = 404;
//    sujeet(errorcode, 'Resource Not Found');
//}

////Perform(10, 5, function (errcode, msg) {
//    if (errcode == 404)
//        console.log(msg);
//})

////EXAMPLE 30: String Operation :: Node.js, string type is defined in String
////You can define a string type object in two forms.
//var obj = new String("String Definition with 'new' key word");
//var obj1 = "String Definition without 'new' key word";
//console.log(obj + '   ' + obj1);


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////                                     Building Your Own Module                  ////////////////////////////////////
//var myModule = require('H:/NODE JS APP/HelloWord/Module/MyModule.js');
//var result = myModule.CalF1(20, 10);
//console.log(result);

//var result1 = myModule.CalF2(111, 111);
//console.log(result1);

//////////////////////////////////////////////////////// Eroor Handling /////////////////////////////////