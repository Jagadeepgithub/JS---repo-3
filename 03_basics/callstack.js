//call Stacks

//how the function flow works
const val1 =10;
const val2 = 5;

function addnum(num1,num2){
    return num1 + num2
}

console.log(addnum(val1,val2))
console.log(addnum(10,20))

//here first it checks in global execution context => {} it refers to this 
//Memory context => here all the values will be come under undefined just the flow of code created and function is defined
//Execution phase => it again generates a block with new environmental variable + environmental thread
// with this again memeory phase created with undefined and execution phase will assign the values of memory phase it gives output


//call stack how it executes

//lastin first out
function one(){
    //console.log("One")
    two() // inside the function another function calls it executes first and it goes
    console.log("One") 
}

function two(){
    console.log("two")
    three()
}
function three(){
    console.log("Three")
}

one();
two();
three();
