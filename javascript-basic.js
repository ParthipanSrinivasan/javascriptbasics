// //Javascript has exactly 7 primitive types
// const str = "parthipan"; //string Value
// const num = 12345; //Number Value
// const big = 112457098345435n; // bigint 
// const bol = true; // boolean
// const undef = undefined; // Undefined
// // const sym = Symbol('id'); // Symbol
// const nul = null; // null

// //console value check
// console.log(`Show the Demo value ${str}`);
// console.log(`Show the Demo value ${num}`);
// console.log(`Show the Demo value ${big}`);
// console.log(`Show the Demo value ${bol}`);
// console.log(`Show the Demo value ${undef}`);
// // console.log(`Show the Demo value ${sym}`);
// console.log(`Show the Demo value ${nul}`);

// //Variable type check
// console.log(`Type of Variable check ${typeof str}`);
// console.log(`Type of Variable check ${typeof num}`);
// console.log(`Type of Variable check ${typeof big}`);
// console.log(`Type of Variable check ${typeof bol}`);
// console.log(`Type of Variable check ${typeof undef}`);
// console.log(`Type of Variable check ${typeof sym}`);
// console.log(`Type of Variable check ${typeof nul}`);


// // Three ways to create strings
// let single = 'Hello';           // Single quotes
// let double = "World";           // Double quotes
// let backtick = `Hello World`;   // Template literal (ES6)

// //Template literal

// const name = "Alice";
// const age = 25;

// const greeting = `Hello, ${name}! You are ${age} years old.`;
// console.log(greeting);
// console.log(typeof greeting);

// //Multi-line string

// const multiline = `
//     this is line 1
//     This is line 2
// `;

// console.log(typeof multiline);
// console.log(multiline);

//String Are Immutable
let demo = "Hello";
demo[0] = "h";
console.log(demo[0]);
demo = demo.slice(1,4);
console.log(demo);