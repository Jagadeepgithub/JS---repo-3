// IIFE => Immediately invoked function expression

//how to write function
function chai(){
    console.log(`DB connected`)
}
chai(); //we will call like this
// ; this should be mandatory in functions after thier finishing block of code

// in IIFE normal function
(function chai1(){
    console.log(`DB connected to two`)
})(); //; wthout this it will get error
//but in IIFE arrow function
( ()=>{
    console.log(`DB connected in one`)
})(); 


