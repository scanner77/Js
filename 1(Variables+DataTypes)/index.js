// alert("This  is an alert")
// console.log("This is also an alert")
//single-line comment
/* multiline comment */

/* =========number============= */
var xyz = 24; 
console.log("The number is:"+xyz)

/* ========string=========== */
var firstName="Laxman Bista";
console.log("My first name is: "+firstName);

/* ===========boolean======== */
var date = true;
console.log("Are you going on a date? ", date);

/* =========undefined========= */
var woffwoff;
console.log(woffwoff); 

/* =================================Variable Types==================== */
// var x = 12;
// const xy = 11;
// xy = 12;
// console.log("constant", xy);

/* =================================Arithmetic Operations==================== */
var ex = 14;

ex++;//this increases your number by 1. & ++ is called increment operator
// ex += 1; this is a = a + 1; // adds the value of the right operand to a variable.
// ex =+ 2; this is the same as doing ex = 1
var plus = ex + 1;

var minus = ex - 1;
// minus -= 1;
var mulltiply = ex * 2;
// mulltiply*2;
var square = ex ** 2;
var divide = ex / 2;
var modulus = ex % 2; //remainder
console.log(ex, plus, minus, mulltiply, square, divide, modulus);




/* ===========Stric operator */
/* The strict equality operator (===) checks whether its two operands are equal, 
returning a Boolean result. Unlike the equality operator, 
the strict equality operator always considers operands of 
different types to be different. */
console.log(1 === 1);
// expected output: true

console.log('hello' === 'hello');
// expected output: true

console.log('1' ===  1);
// expected output: false

console.log(0 === false);
// expected output: false


/* ==============  =,==,===   ============ */
var num = 99;
var num1 = 999;
var num2 = "99";

console.log("one", num=99)
console.log(num==num1)
console.log(num==num2)
console.log(num===num2)

