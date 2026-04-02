//for each loop

//its aprototype in an array

const myarr = ["js","py","c++","java","html"]
console.log(myarr)

//usning for each it ittrates over every element
//normal function
myarr.forEach( function /*we ignore the name here*/ (val){
    console.log(val)
})

//we do by arrow function
myarr.forEach(/*we ignore const in arrow function*/(val)=>{
    console.log(val)
})

//we can use the function outside

function printMe(val) {
    console.log(val)
}
myarr.forEach(printMe) //we can't use pritMe() like this function

//we can call in foreach loop we can acees function in item,index,array

myarr.forEach((item,index,array)=>{
    console.log(`In this item is ${item}`)
    console.log(`In this the index is ${index}`)
    console.log(`In this the array is ${array}`)
    console.log(item, index, array)
})

//we can use array in object
//[{},{},{}]
const mycoding =[
    {
        languagename :"JavaScript",
        languagefilename:"js"
    },
    {
        languagename :"Python",
        languagefilename:"py"
    },
    {
        languagename :"Cpp",
        languagefilename:"c++"
    }

]
console.log(mycoding)

//we can extract from the obj values by for each
//by direct acces gives undefined
console.log(mycoding.languagefilename) //undefined


//by using foreach
mycoding.forEach((val) => {
    console.log(val.languagefilename)
    console.log(val.languagename)
})


