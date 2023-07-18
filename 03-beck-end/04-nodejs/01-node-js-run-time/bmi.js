// exercicio 1 calcular imc
const bmi = (w, h) => {
  let heigth = h / 100
  let imc = w / (heigth * heigth)

  return imc.toFixed(2)
}

console.log(bmi(90, 198))