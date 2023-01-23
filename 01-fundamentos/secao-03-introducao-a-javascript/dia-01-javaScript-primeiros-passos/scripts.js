/*const myName = "Patrik";
const birthCity = "Paracambi";
let birthyear = 2030;

console.log(myName, birthCity, birthyear);

birthCity = "São paulo"

console.log(birthCity)*/

// Exercicios 2

/*const base = 5;
const height = 8;
const area = base * height;
const perimeter = (base * 2) + (height * 2); 

console.log(area)*/

// Exercicios 3 if e else

// const notaMaria = 50;

/* if (notaMaria >= 80){
    console.log("Parabens voce foi aprovada!!")
 }else if (notaMaria < 80 && notaMaria >= 60) {
    console.log("Você esta na nossa lista de espera.")
}else if ( notaMaria < 60){
    console.log("Infelizmente você reprovou.")
}*/

// Exercicios 4 switch case

let statusNoProcesso = 'reprovada'

switch (statusNoProcesso){
    case 'aprovada':
       console.log(" Parabéns voce foi aprovada(o)")
    break;

    case 'lista' :
        console.log("Você esta na nossa lista de espera")
        break;

    case 'reprovada' :
        console.log('Você foi reprovado')
        break;

    default :
    console.log("Informação incorreta")


}