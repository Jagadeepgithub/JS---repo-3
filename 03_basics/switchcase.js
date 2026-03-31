//switch cases

const month = 3
switch (month) {
    case 1:
        console.log("Jan")
        break;
    case 2:
        console.log("Feb")
        break;
    case 3:
        console.log("Mar")
        break;
    case 4:
        console.log("Apr")
        break;
    default:
        console.log("default")
        break;
};

const month1 ="Jan"
switch(month1){
    case "Jan":
        console.log("Jan");
        
    case "Feb":
        console.log("Feb")
    case "Mar":
        console.log("Mar")
        break;
    default:
        console.log("default")
        break;
}

const month2 ="Ja"
switch(month2){
    case "Jan":
        console.log("Jan");
        
    case "Feb":
        console.log("Feb")
    case "Mar":
        console.log("Mar")
        break;
    default:
        console.log("default")
        break;
}


//we have truly or falsy series
const usermail = "Jagadeep@mail.com"
if(usermail){
    console.log(`Got this mail`)
}else{
    console.log("Dont have user mail")
}

const usermail1 = ""
if(usermail1){
    console.log("Got user mail")//here we didn't have any conditional statatement wil take as
}else{
    console.log("Dont have user mail")
}

//in array 
const usermail2 = []//[1]
if(usermail2){
    console.log("Got the mail")
}
else{
    console.log("Dont get the mail")
}

//falsy which will assume false
// 0,false,"",NaN,null,undefined,-0,bigInt => 0n

//truly which will assume true
//1,true,"0","false"," ",[],{},function (){}


//how we exeicute inside of an array and object
//inside array length should use
if(usermail2.length === 0){
    console.log("Array is empty")
}
else{
    console.log("Array has value")
}

//inside the object
const myobj = {}
if(Object.keys(myobj) ===0){
    console.log("Object is empty")
}else{
    console.log("Object has value")
}

//Nullish coalescing operator => this is specially created for null and undefined
//??
let val1 = 10 ?? 15
let val2 = 5 ?? 9 // this gives the first element incase values are present
let val3 = null ?? 10 // second value will be given after the null
let val4 = undefined ?? 15 // second value will be  given after  the undefined
let val5 = null ?? 99 ?? 78 // here also after the null which value is thetre it will present that value
let val6 = 78 ?? 58 ?? 89 // no null, undefined so first vaalue will come
let val7 = null ?? undefined ?? 9 // here both values of null undefined after the word will be present
console.log(val1)
console.log(val2)
console.log(val3)
console.log(val4)
console.log(val5)
console.log(val6)
console.log(val7);

//Terinary operator
//condition ? true: false
const icewater = 30
icewater >= 50 ? console.log("more than 50") : console.log("Less than 50")
