//arrow functions refers to this refers to obj

//this how it uses
//it uses only in current context of the program

const user = {
    username:"Jagadeep",
    age:25,
    peice:599,
    greetingMessage: function(){
        //console.log(`${username}, welcome to the board.`)
        console.log(`${this.username}, welcome to the board.`)
    }
}
console.log(user.greetingMessage()) //here it prints erroe as username is not definedlike this to be used in this function
user.username = "Deepu"
user.greetingMessage()
console.log(this) //it gives only parenthesis {}, but in web browser it gives window

//node and javascript are different in this reference

//normal function or function declaration
function chai(){
    console.log(this) // here this refers to the global,clear and so on..
    const username ="Jagadeep"
    console.log(this.username) //this also gives same
}
chai();
//function expression
const chai1 = function(){
    console.log(this) // here this refers to the global,clear an so on..
    const username = "Jagadeep"
    console.log(this.username) //this also same
}
chai1();
//arrow functions
const chai2 = () =>{
    console.log(this) // gives {}
    const username = "Jagadeep"
    console.log(this.username) //undefined
}
chai2()

//basic code of arrow function
const addtwo = (num1,num2) =>{
    return num1+num2
}
console.log(addtwo(3,4))

//mostly we use because of confusion
const addtwo1 = (num1,num2) => num1+num2 // return also no need to write
console.log(addtwo1(5,5))

//while in obj
const addtwo2 = (num1,num2) => {username:"Jagadeep"} //undefined
console.log(addtwo2(2,3))

const addtwo3 = (num1,num2) => ({username:"Jagadeep"})
console.log(addtwo3(2,3))