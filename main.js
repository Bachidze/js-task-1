let num = 3
for(let i = 1; i<=10; i++){
    console.log(num*i)
}

console.log("")
console.log("")
console.log("")

for(let i = 10; i>= 0; i--){
    console.log(i)
}
console.log("")
console.log("")
console.log("")
console.log("giorgi")
console.log("")
console.log("giorgi")
let answer = 0

for(let i = 1; i<=100; i++){
    answer = answer + i
}
console.log(answer)

console.log("")
console.log("")
console.log("")
console.log("")

let g = 16

for(let i = 1; i <= 16; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("fizzbuzz")
    }else if(i % 5 === 0){
        console.log('Buzz')
    }else if(i % 3 === 0){
        console.log('Fizz')
    }else{
        console.log(i)
    }
}