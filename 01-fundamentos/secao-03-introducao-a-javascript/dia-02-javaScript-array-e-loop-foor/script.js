//Para fixar, faça os próximos exercícios:

/*Obtenha o valor “Serviços” do array menu:
Copiar
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = ;

console.log(menuServices);
Procure o índice do valor “Portfólio” do array menu:
Copiar
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = ;

console.log(indexOfPortfolio);
Adicione o valor “Contato” no final do array menu:
De olho na dica 👀: Use o método .push()

Copiar
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];

console.log(menu);*/


let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1]

console.log(menuServices);


let indexOfPortfolio = menu.indexOf('Portfólio') ;

console.log(indexOfPortfolio);

menu.push('Contato')

console.log(menu)