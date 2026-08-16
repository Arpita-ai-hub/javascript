//# Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

// const score = 100
// const scoreValue = 100.3
// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;// undefined
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);  //false

const bigNumber = 34214665n

// Reference (Non Primitive)
// Array, Objects, Functions

const heroes = ["shaktiman","naagraj","doga"]
{// curly brackets ke andar ki value is objec
    name: "Priya";
    age: 22;
}
// fxn ko bhi js me ek variable ki tarah lik sakte hai
const myFunction = function(){
    console.log("Hell world");
}
console.log(typeof myFunction)
console.log(typeof anotherId)
// non primitive datattypes ka return type obeject hi aata hai