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
