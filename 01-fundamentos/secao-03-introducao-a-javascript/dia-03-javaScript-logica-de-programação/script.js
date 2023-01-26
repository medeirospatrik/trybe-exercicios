let resultFatorial = 1;

for(let indexFatorial = 10 ; indexFatorial> 0 ; indexFatorial -=1){
    resultFatorial *=  indexFatorial
}
console.log(resultFatorial)

//Invertendo palavras 

let word = 'vaca';
let inverseWord= ''

for(let index = word.length - 1; index >= 0; index -=1){
inverseWord += word[index]
}
console.log(inverseWord)

//Imprimindo a maior e a menor palavra do array!

let array = ['java', 'javascript', 'python', 'html', 'css'];
let bigWord = array[0]
let smallWord = array[0]


for(let index = 0; index < array.length; index += 1){
        if(bigWord.length < array[index].length){
            bigWord = array[index]
    }
}
console.log(bigWord)


for(let index = 0; index < array.length; index += 1){
    if(smallWord.length > array[index].length){
        smallWord = array[index]
    }
}
console.log(smallWord)

// O maior numero primo entre 2 e 50 

let numerosPrimos = [0]
let maiorNumero = [0]


for(let index =2; index <= 50; index += 1){
    if(index % index === 0 && index % 2 !== 0){
            numerosPrimos.push(index)
 }
 for(let index2 = 0; index2 < numerosPrimos.length; index2 +=1){
    if(maiorNumero < numerosPrimos[index2]){
        maiorNumero[0] = numerosPrimos[index2]
    }

 }
 
 } 
 
console.log('O maior numero primo entre 2 e 50 é: ' + maiorNumero)

//Exercicios bonus
// let n = 6

// let imputLine = ''

// let asterisk = '*'


// for(index = 0; index <n; index +=1){
//     imputLine = imputLine + asterisk
// }
// for(let index = 1; index <= n; index += 1){
//     console.log(imputLine)
// }

let n = 10
let imputLine =' '
let asterisk = '*'

for(index = 0; index < n; index += 1 ){
imputLine = imputLine + asterisk
console.log(imputLine);

}