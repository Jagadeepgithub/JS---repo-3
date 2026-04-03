//maps

//it is also a call back function

const game = new Map
game.set("GTA","Vice city")
game.set("Roadmash","bike")

console.log(game) //it gives an object

let mynum = [1,2,3,4,5,6,7,8,9,10]
let myNums = mynum.map(function (num){

    return num *10
})
console.log(myNums)

//we can write in an simple way
let number = mynum.map((num)=> num*5)
console.log(number)

//we can use chain function in map
//map().map() => this is a chain function

let newnum = mynum
            .map((num)=> num*10)
            .map((num)=> num+5)
            .map((num)=>num-1)
            .filter((num)=> num>=50)

console.log(newnum)


//reduce
//it is also a call back function

//in reduce we have accumulator,currentvalue,initializer

let myarr = [1,2,3,4]
let initializer = 0
const total =myarr.reduce(function (acc,curval){
    console.log(`accumulato is${acc}, curval is ${curval}`)
    return acc+curval
},initializer)
console.log(total)

//in simple way we can write the code in single line
const mytotal1 = myarr.reduce((acc,curval)=> (console.log(`accumulator is ${acc},curval is ${curval}`),acc+curval),0)
console.log(mytotal1)

//we can use in array in objects
const myobj =[
    {
        course:"javascript",
        price:1299
    },
    {
        course:"python",
        price:999
    },
    {
        course:"java",
        price:1599
    }
]

const mycart = myobj.reduce((acc,curval)=> acc+curval.price,0 )
console.log(mycart)