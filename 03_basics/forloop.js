//for loop
//it is a loop which satisfies the condition

for (let index=0;index<=10;index++){
    console.log(index)
}
//console.log(index) => here we can't acces the block scope in global scope

//we can use a loop in ifelse to satisfy consition
for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5){
        console.log("Element 5 is super")
    }
    console.log(`value is ${element}`)
}
//we itterate another loop in loop we can write with for loop
for (let i = 0; i <=10; i++) {
    console.log(`Outter value is ${i}`)
    for (let j = 0; j <=10; j++) {
        console.log(`Inner value is ${j} in the inner loop of ${i}`)
        
    }
    
}
//tables format
for (let i = 1; i <=10; i++) {
    console.log(`Table of ${i}`)
    for (let j = 1; j <=10; j++) {
        console.log(i+" * "+j+" = "+i*j);
        
    }
}
//we can use in array
let myarray = ["flashman","superman","batman"]
for (let i = 0; i < myarray.length; i++) {
    
    console.log(myarray[i])
    
}

//we can use break and continue
//break

for (let i = 0; i <=20; i++) {
    const element = i
    if(element == 5){
        console.log("Value 5 is detected")
        break
    }
    console.log(`value is ${i}`)
}

//continue
for (let i = 0; i <=20; i++) {
    if (i == 5){
        console.log("Value 5 is detected")
        continue
    }
    console.log(`value is ${i}`)
    
}