//exercicios 2
const readline = require('readline-sync')

// exercicio 1 calcular imc

const bmi = (w, h) => {
  const heigth = h / 100
  const  imc = w / (heigth * heigth)

  return imc.toFixed(2)
}

//exercicio 2
const weigth = readline.questionInt('qual o seu peso? ')
const heigth =  readline.questionInt('qual sua altura? ')

console.log(bmi(weigth, heigth))