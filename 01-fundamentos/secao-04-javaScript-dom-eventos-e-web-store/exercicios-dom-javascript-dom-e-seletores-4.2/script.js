console.log(document.querySelector('#primeiroFilho').nextElementSibling)
const pai =document.querySelector('#pai')
document.querySelector('#elementoOndeVoceEsta').parentElement.style.backgroundColor = 'red';
'red'
document.querySelector("#pai").firstElementChild.innerHTML = 'Patrik Medeiros'
console.log(document.querySelector("#pai").firstElementChild)
console.log(document.querySelector("#elementoOndeVoceEsta").previousElementSibling)
console.log(document.querySelector("#elementoOndeVoceEsta").nextSibling)
console.log(document.querySelector("#elementoOndeVoceEsta").nextElementSibling)
console.log(document.querySelector('#pai').lastElementChild.previousElementSibling)
let father = document.querySelector('#pai');
let son = document.querySelector('#elementoOndeVoceEsta')
let sonOfSon = document.querySelector('#elementoOndeVoceEsta').firstElementChild

const createTag = (tipo, classe, local)=> {
    let brother = document.createElement(tipo);
    brother.className = classe
    local.appendChild(brother);
};

createTag('section', 'brother',father, 'Pricila Triani');
createTag('section', 'filhoDoFilho',son, "flamengo")
createTag('section','neto',sonOfSon)

console.log(document.querySelector('.neto').parentElement.nextElementSibling.nextElementSibling)