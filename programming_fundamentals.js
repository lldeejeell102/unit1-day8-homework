// Questions
// DRY
    // Don't Repeat Yourself - this just means be efficient with your coding. 
// KISS
    // Keep It Simple Stupid - avoid over complicating code. Making sure the code can be readable by other developers
// Avoid creating a YAGNI
    // You Aren't Going to Need It - no need to future proof for problems that doesn't current exist
// Do the simplest thing that could possibly work
    // This means to create an MVP. You can always build on top of simple logics
// Don't make me think
    // Making sure that the code logic can be followed by others.
// Write code for the maintainer
    // Writing code that is easily maintainable. 
// Single responsibility principle
    // each component of code should perform a single task well, not overloading or over complicating functions/class
// Avoid premature optimization
    // No need to optimize a code until you need to optimze
// Separation of concerns
    // make codes overalp as minimally as possible to avoid overcomplication and maintance

// Currently I'm having the most struggle with doing the simplest thing. I have to problem solve with the code then simplify as I improve the code.

// creates a variable "f" and creates an arrow function "l"
const f = l => {
    // creates variables "es", "p", "c", and "n". Assigns all the value 0 except for c, which is 1
    let es = 0, p = 0, c = 1, n = 0
    // creates a while loop that runs until c is less than or equal to l
    while (c <= l) {
      // in the loop, reassign n variable to c plus p
        n = c + p;
        [c, p] = [n, c]
    // if c is an even number then add it to es and check if it's equal to 0
      es += (c % 2 === 0) ? c : 0
    }
    // returns es variable
    return es
  }
  // print out f with the arguement 55 starting
  console.log(f(55))  





// Array.sort() -- sorts the array top to bottom