//for of loop
//this is a loop which iterate over word to word in array

//[""."",""] => we can use in arrays 
//[{},{},{}] => we can use in array in object 

const  myarr = [1,2,3,4,5,6]
for (const i of myarr) {
    console.log(i)
}
//we can use in string
const mystring = "Hello World"
for (const val of mystring) {
    console.log(val)
}

//we   can use break and continue also
for (const val of mystring) {
    console.log(`value is ${val}`)
    if (val === " "){
    break
    }
}

for (const val of mystring) {
    if (val === " "){
        continue
    }
    console.log(`value is ${val}`)

}

//Maps
//maps are the unique it won't allow the duplicates
//it gives a key-value pair of an object
const map = new Map
map.set("IN","India")
map.set("USA","United States of America")
map.set("Fr","France")
//here it will not allow us to do duplicate
map.set("IN","India")
// it gives an object
console.log(map)

//if we want key in map not in object

//if we direct uses key it gives an array
for (const key of map) {
    console.log(key)
}
//to want only keys in maps
for (const [key] of map) {
    console.log(key)
}
//for values
for (const [key,value] of map) {
    console.log(value)
}
//to form  a sentence

for(const [key,value] of map){
    console.log(`The shortcut of ${key} is ${value}`)
}

