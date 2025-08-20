let name = prompt("What's your name?");
let age = prompt("Enter your age?");
const city = prompt("What's your city?");
let greeting = "hello " + name + ", your age is " + age;

// (CSS code) بعدها ("%c") اول قيمه تكون   
// '%cstring' or '%c' + variable , 'CSS code;'
console.log( "%c"+ greeting , "color: green;"); // I searched about it 
alert(greeting); 
