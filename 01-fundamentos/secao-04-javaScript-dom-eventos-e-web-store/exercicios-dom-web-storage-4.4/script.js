const arrayColor = ['white', 'black', 'green', 'blue', 'yellow'];
const tamanhoDaFonte = [8, 10, 12, 14, 20,];
const espacamentoEntreLinhas = [1, 'normal', 1.5, 2.0, 3.0];
const tipoDaFonte = ['Arial', 'Times New Roman'];

const background = document.getElementsByClassName('');
console.log(background)

const createAllList = (nome, array, classe) => {
    const background = document.getElementsByClassName(nome)[0];
    for (let color of array) {
        let colorItem = color
        const createElementLi = document.createElement('li')
        createElementLi.innerHTML = colorItem
        createElementLi.className = classe
        background.appendChild(createElementLi)
    }
};
createAllList ('background', arrayColor, 'corFundo')
createAllList('color', arrayColor)
createAllList('fonteSize', tamanhoDaFonte)
createAllList('fontFamily', tipoDaFonte)
createAllList('linehight', espacamentoEntreLinhas)

