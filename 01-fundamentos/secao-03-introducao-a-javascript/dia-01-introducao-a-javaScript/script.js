let a = 40;
let b = 10;

let num1 = 19
let num2 = 18

let number1 = 3
let number2 = 4
let number3 = 5

let negativoOuPositivo = -2

let sum = a + b;
let sub = a - b;
let mult = a * b;
let div = a / b;
let rest = a % b;

console.log(sum)
console.log(sub)
console.log(mult)
console.log(div)
console.log(rest)

if (num1 > num2){
    console.log(`${num1} é maior que ${num2}`)
}else{
    console.log(`${num2} é maior que ${num1}`)
}

if(number1 > number2 && number1 > number3){
    console. log(`${number1} é o maior numero comparado.`)

}else if(number2 > number1 &&  number2 > number3){
    console.log(`${number2} é o maior numero comparado.`)

}else{
    console.log(`${number3} é o maior numero comparado.`)
}



if(negativoOuPositivo < 0){
    console.log ("NEGATIVO")

}else if (negativoOuPositivo > -1 && negativoOuPositivo < 1){
    console.log("ZERO")
}else{
    console.log("POSITIVO")
}