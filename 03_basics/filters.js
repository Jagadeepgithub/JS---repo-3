//filters
//declaring values

//for each
//it will not return the value when we declare
let myarr = ["superman","spiderman","batman","hero"]
const list = myarr.forEach( (val) =>{
    console.log(val)
    return val
})
console.log(list) //gives undefined it not gives block scope in global scope

//filter
//it returns the value

let mynums = [1,2,3,4,5,6,7,8,9,10]
console.log(mynums)
const values = mynums.filter((num) => num>4)
console.log(values)

//we can write in normal function type also
const values1 = mynums.filter((num)=>{
    return num>4
})
console.log(values1) 
//without return values will be given as an empty array[]

const values2 = mynums.filter((num)=>{
    num>4
})
console.log(values2)

//for each we can use in foreach
const eacharr =[]
mynums.forEach((num)=>{
    if((num)>=4){
        eacharr.push(num)
    }
})
console.log(eacharr)
console.log(`array: ${eacharr}`)


//array in object by filter
const books = [
    { title:'Book One', genre:'Fiction',publish:1981,edition:2004},
    { title:'Book two', genre:'Non-Fiction',publish:1992,edition:2008},
    { title:'Book three', genre:'History',publish:1999,edition:2007},
    { title:'Book four', genre:'Non-Fiction',publish:1989,edition:2010},
    { title:'Book five', genre:'Science',publish:2009,edition:2014},
    { title:'Book six', genre:'Fiction',publish:1987,edition:2010},
    { title:'Book seven', genre:'Histroy',publish:1986,edition:1996},
    { title:'Book eight', genre:'Science',publish:2011,edition:2016},
    { title:'Book nine', genre:'Non-Fiction',publish:1981,edition:1989}
]

//to overwrite use let
//const will not overwrite

const userbooks = books.filter((bk) => bk.genre);
console.log(userbooks)


let userbook1 = books.filter((bk)=> bk.genre === "History")
console.log(userbook1)

userbook1.filter((bk)=>{
    //it we forget return gives empty
    return bk.publish>2000
})

//ton use both conditions we use and &&
userbook1.filter((bk)=> bk.publish>1995 && bk.genre==="History")
console.log(userbook1)