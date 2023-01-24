const a = 30;
const b = 10;
const c = 50;
const d = 60;

const angleOne = 60;
const angleTwo = 60;
const angleThree = 60;

let adição = a + b;
let subtração = a - b;
let multiplicação = a * b;
let divisão = a / b;
let modulo = a % b ;

let peça = 'cavalo'.toLowerCase();

console.log(adição)
console.log(subtração)
console.log(multiplicação)
console.log(divisão)
console.log(modulo)

if (a > b) {
    console.log(a + " é maior numero.")
}else{
    console.log(b + ' é o maior numero.')
}

if (a > b && a > c){
    console.log(a + " é o maior numero.")
}else if (b > a && b > c){
    console.log(b + " é o maior numero.")
}else if (c > a && c > b){
    console.log(c + " é o maior numero.")
}

if (angleOne === angleTwo && angleOne === angleThree){
    console.log(true)

}else{
    console.log(false)
}

switch(peça){
    case 'BISPO'.toLowerCase() || 'bispo'.toUpperCase:
        console.log("se movimenta nas diagonais")
        break;

    
    case "REI".toLowerCase():
        console.log("Pode mover-se em qualquer direção, porém apenas uma casa por vez")
        break;

    case "DAMA".toLowerCase():
        console.log("Assim como o Rei, pode mover-se em qualquer direção (vertical, horizontal e diagonal), porém quantas casas quiser, desde que estejam livres.")
        break;
    
    case "TORRE".toLowerCase():
        console.log("Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser.")
        break;

        default:
            console.log("Nao existe essa peça nesse jogo .")

}


