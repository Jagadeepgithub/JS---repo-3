//whileloop
//it is also same as for loop but different syntax

let index =0
while (index <=10) {
    console.log(index)
    index = index +2
}

//we use an array
let myarray = ["flasman","batman","superman"]
let arr = 0
while (arr < myarray.length) {
    console.log(myarray[arr])
    arr++
}


//do-while loop
//how we will use the dowhile
//it also same as while but it checks the condition after the given output then it stops
let score =1
do {
    console.log(`Hi jagadeep score is ${score}`)
    score++
} while (score<= 10);

//while the condition is not satisfied at start 
let score1=112
do {
    console.log(`Hi jagadeep your score is ${score1}`)
    score1++
} while(score1<10) //condition not met so it stops