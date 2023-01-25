//criando um array
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0

//percorrendo o array
for(let index = 0; index < numbers.length; index += 1){
  console.log(numbers[index])
}

//somando todos os numeros do array

/*for(let index = 0; index < numbers.length; index += 1){
  resultado = resultado + numbers[index]

}*/
//console.log(resultado)

// Media aritimetica dos numeros do array

for(let index = 0; index < numbers.length; index += 1){
    resultado = resultado + numbers[index]
 
}
let media = resultado / numbers.length
console.log(`A media dos numeros do array numbers é  ${media}.`)

if (media > 20 ){
    console.log("Valor maior que 20.")
}else{
    console.log('Valor menor ou igual a 20')
}

//Descobrindo o maior valor do array

//Descobrindo o maior numero
let maiorNumero = 0

for(let index = 0; index < numbers.length; index += 1){
    if (maiorNumero < numbers[index]){
      maiorNumero = numbers[index]
    }
  }
  console.log(`o maior numero do array number é ${maiorNumero}`)

  //descobrindo numero impares
  let numbersImpar = 0

  for(let index = 0; index < numbers.length; index += 1){
        if(numbers[index] % 2 !== 0){
            numbersImpar = numbersImpar + 1
        }
  }
  console.log(`Existem ${numbersImpar} numeros impares no array numbers`)