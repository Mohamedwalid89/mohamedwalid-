// ---------------------
// 1. Variables & Data Types
// ---------------------
let myName = "Mohamed";     
let myAge = 20;              
let isStudent = true;        

console.log("Name:", myName);
console.log("Age:", myAge);
console.log("Is Student?", isStudent);

// ---------------------
// 2. Arithmetic Operators
// ---------------------
let x = 20;
let y = 5;

console.log("Sum:", x + y);          
console.log("Difference:", x - y);   
console.log("Product:", x * y);      
console.log("Quotient:", x / y);     
console.log("Remainder:", x % y);    

// ---------------------
// 3. Arrays
// ---------------------
let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

console.log("First fruit:", fruits[0]);
console.log("Last fruit:", fruits[4]);

fruits.push("Pineapple");    
console.log("After push:", fruits);

fruits.shift();              
console.log("After shift:", fruits);

// ---------------------
// 4. Object
// ---------------------
let student = {
  name: "Ali",
  age: 21,
  grade: "A",
  subjects: ["Math", "Science", "English"]
};

console.log("Student Name:", student.name);
console.log("Student Grade:", student.grade);

student.isGraduated = false;   
console.log("Is Graduated?", student.isGraduated);
