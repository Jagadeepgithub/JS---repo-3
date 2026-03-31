// loops

//true expression
if(true){
    console.log("Hi Jagadeep")
}

//false expreesion 
if(false){
    console.log("Hi false")
} //it will not execute because it is false

//we can use operations in loops to control flow statement
// <,>,<=,>=, ==, !=,===

const temp =51
if(temp > 45){
    console.log("Temp is hot")
}
//here it exicutes because of global scope
console.log("Temp is normal")

//to give statementswe use if-else
if (temp < 46){
    console.log("Temp is normal")

}else{
    console.log("Temp is hot")
}

//it gives error if we try block scope code in global scope
if(true){
    const name ="Rajesh"
    console.log(`Hi ${name}`)
}
//console.log(`Hi ${name}`) => this gives error because we cant use inner scope in outer scope

//we can write code without {}
const balance = 1000;
if(balance > 400) console.log("test");


// for single we can write that but execute multiple is not the best practice
if (balance > 500) console.log("test1"),console.log("test2");

//nested statements

if(balance < 500){
    console.log("Balance is less than 500")
}
else if(balance< 700){
    console.log("Balance is less than 700")
}
else if(balance<900){
    console.log("Balance is less than 900")
}
else{
    console.log("Balance is less than 1200")
}


//we can compare control flow with comparisions
const isuserlogged = true
const ismaillogged = true
const isgooglelogged = false
const isflipkartlogged = true

//&& => and it uses when both statements are true orelse output will fall in else

if(isuserlogged && ismaillogged){
    console.log("is allowed")
}

//&& => if one case true one is false is goed in else
if (isgooglelogged && isflipkartlogged){
    console.log("is allowed")
}else{
    console.log("Not allowed")
}

// || =>or either one is true it executes
if (isflipkartlogged || isgooglelogged){
    console.log("logged")
}