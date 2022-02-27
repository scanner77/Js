/* function firstFunction(X){ //it may or may not make use of the parameters.
    console.log("Hi");
}
firstFunction("hELLO"); //we can call this function as many times as we want.

 */

/* ========================Scope========================== */
// var a = 1;
// let b = 2;
// function mainFunc(x,y){
//     // var x = 12
//     // let y = 13;
//     console.log(a+x);
//     console.log(b+a);

//     function secondMain(){
//         let c = 3;
//         console.log(c+y+a)
//     }
    // console.log(x+c); //you will get an error here because scope of c is inside secondMain() only
// secondMain();
// }
// mainFunc(12,13);

/* ==================let' use a return statement========*/
// function mathFunc(x,y){
//     let z = "My name is " + y + "I have " + x + "hands";
//     return z;
// }
// console.log(mathFunc(2, "Laxman"))

/* ================Different ways of defining functions================ */
//=========== Function Declaration
// function square(x) {
//     return x * x;
// }
// console.log(square(5))


//========= Function Expression
// const square = function(x) {
//     return x * x;
// }
// console.log(square(5))

/* 1: Anynomous function */
// let show = function() {
//     console.log('Anonymous function');
// };

// show();
//An anonymous function is not accessible after its initial creation. 
//Therefore, you often need to assign it to a variable.


/* 2: Using anonymous functions as arguments */
//In practice, you often pass anonymous functions as arguments to other functions. For example:

setTimeout(function(){
    console.log("Hello")
}, 1000);
// In this example, we pass an anonymous function into the setTimeout() function. 
//The setTimeout() function executes this anonymous function one second later.


//========= Arrow Function Expression
// const square = x => {
//     return x * x;
    
// }
// console.log(square(5))


// =====Concise Arrow Function Expression
// const square = x => x * x;  //no curly braaces and return statement need if the return is simple
// console.log(square(5))