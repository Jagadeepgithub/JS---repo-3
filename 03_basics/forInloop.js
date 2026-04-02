//for in loop
//it maily uses for objects

//where for of => array
//where for in => objects

//it also uses in arrays but not objects in for of

const myObj = {
    "js":"JavaScript",
    "py":"Python",
    "cpp":"C++",
    "swift":"Swift by apple"
}

console.log(myObj) // it gives object

//to access key in for in
for (const key in myObj) {
    console.log(key)
}

//to access the values 
for (const key in myObj) {
    console.log(myObj[key])    
}

//for to print the total object
for (const key in myObj) {
    console.log(`${key} is a shortcut of ${myObj[key]}`)
    
}

//we can use the forin in an array
let myarr= ["spiderman","batman","superman"]
console.log(myarr)

//this gives the index of an array
for (const val in myarr) {
    console.log(val)
}

//to acces the values in an array 
for (const key in myarr) {
        console.log(`Array index ${key} is ${myarr[key]}`)
}

//we can use forin maps

const map = new Map
map.set("IN","India")
map.set("USA","United States of America")
map.set("Fr","France")
//here it will not allow us to do duplicate
map.set("IN","India")
// it gives an object
console.log(map)

for (const /* key */[key] in map) {
    console.log(key) //it gives only object
}