//exercicios 2
const readline = require('readline-sync')

// exercicio 1 calcular imc
//Abaixo de 18,5 	Abaixo do peso (magreza)
// Entre 18,5 e 24,9 	Peso normal
// Entre 25,0 e 29,9 	Acima do peso (sobrepeso)
// Entre 30,0 e 34,9 	Obesidade grau I
// Entre 35,0 e 39,9 	Obesidade grau II
// 40,0 e acima 	Obesidade graus III e IV 

const bmi = (w, h) => {
  const heigth = h / 100
  const  imc = w / (heigth * heigth)
  if (imc < 18.5) return `seu imc é ${imc.toFixed(2)}, você esta abaixo do peso`
  if (imc >= 18.5 && imc  <= 24.9) return `seu imc é ${imc.toFixed(2)}, seu peso esta normal` 
  if (imc >= 25.0 && imc  <= 29.9) return `seu imc é ${imc.toFixed(2)}, Acima do peso (sobrepeso)`
  if (imc >= 30.00 && imc <= 34.9) return `seu imc é ${imc.toFixed(2)} Obesidade grau I, `
  if (imc >= 305.00 && imc <= 39.9) return `seu imc é ${imc.toFixed(2)} Obesidade grau II, `
  if (imc > 40.0) return `seu imc é ${imc.toFixed(2)} Obesidade graus III e IV , `
  return imc
}

//exercicio 2
const weigth = readline.questionInt('qual o seu peso?(kg) ')
const heigth =  readline.questionInt('qual sua altura?(cm) ')

console.log(bmi(weigth, heigth))