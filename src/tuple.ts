let tupleType: [string, boolean];
tupleType = ['hello', true];
// tupleType = [true, 'hello']; // Error
// tupleType = ['hello', true, true]; // Error

let date: [number, number, number];
date = [7, 11, 2023];

let fixed: [string, number];
fixed = ['Text', 10];
fixed.push('New Text'); // does not track =(

let tuple: [string, ...number[]];
tuple = ['hello', 42, 11, 123, 123]; // OK
