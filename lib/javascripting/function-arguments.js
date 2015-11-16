function math(arg1, arg2, arg3) {
  return (arg2 * arg3 + arg1);
}

console.log(math(53, 61,67));


//
//## FUNCTION ARGUMENTS (Exercise 18 of 19)
//
//A function can be declared to receive any number of arguments. Arguments
//can be from any type. An argument could be a string, a number, an array,
//  an object and even another function.
//
//Here is an example:
//
//  function example (firstArg, secondArg) {
//    console.log(firstArg, secondArg);
//  }
//
//We can call that function with two arguments like this:
//
//example('hello', 'world');
//
//The above example will print to the terminal hello world.
//
//## The challenge:
//
//  Create a file named function-arguments.js.
//
//  In that file, define a function named math that takes three arguments.
//  It's important for you to understand that arguments names are only used to
//reference them.
//
//  Name each argument as you like.
//
//  Within the math function, return the value obtained from multiplying the
//second and third arguments and adding that result to the first argument.
//
//  After that, inside the parentheses of console.log(), call the math()
//function with the number 53 as first argument, the number 61 as second and
//the number 67 as third argument.
//
//  Check to see if your program is correct by running this command:
//
//  javascripting verify function-arguments.js