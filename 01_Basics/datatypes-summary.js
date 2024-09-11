// Primitive data types (Call by Value)

/* 7 Types

String, Number, Boolean, Null, undefined, Symbol, BigInt

*/

// Non Primitive (Call by reference)

// Array, Objects, Functions

/********* JAVASCRIPT IS STATTICALLY TYPED OR DYNAMICALLY TYPED*/

/*

JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.

For example, in JavaScript, you can do the following:

let x = 10; // x is now a number
x = "Hello"; // x is now a string
x = true; // x is now a boolean
On the other hand, statically typed languages require you to declare the variable's type explicitly, and the type checking is done at compile-time, before the code is executed.

Languages like Java, C++, and TypeScript are statically typed, and they require you to specify the variable type explicitly when declaring them:

int x = 10; // x is a variable of type int
String name = "John"; // name is a variable of type String
JavaScript's dynamic typing allows for more flexibility but can lead to potential runtime errors if not handled carefully. Static typing, on the other hand, provides better type safety at the cost of some initial verbosity and strictness.


*/

/*Symbol data type*/

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id);
// console.log(anotherId);
// console.log(id === anotherId);

/*BigInt*/

// const bigNumber = 345567593796796734976n
// console.log(typeof bigNumber);

/*Array*/

// const scholars = ["alwan","Fahad","Sinani"]
// console.log(typeof scholars);

/*Objects*/

// let myObj = {

//     name: "Rehan",
//     age: 21,
// }

// console.log(typeof myObj);
// console.log(myObj);

/*Functios*/

const myFunction = function(){
    console.log("Hello World");
    
}

console.log(myFunction);
