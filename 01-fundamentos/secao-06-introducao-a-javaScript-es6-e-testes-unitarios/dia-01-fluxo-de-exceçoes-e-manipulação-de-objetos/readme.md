# Parte II - Pedido de clientes

Imagine que você tenha ficado responsável por cuidar do sistema de entrega de um restaurante e que precisasse enviar mensagens para os clientes com a informação da compra. Para isso, use o seguinte código:

## Copiar

const order = {
name: 'Rafael Andrade',
phoneNumber: '11-98763-1416',
address: {
street: 'Rua das Flores',
number: '389',
apartment: '701',
},
order: {
pizza: {
marguerita: {
amount: 1,
price: 25,
},
pepperoni: {
amount: 1,
price: 20,
},
},
drinks: {
coke: {
type: 'Coca-Cola Zero',
price: 10,
amount: 1,
},
},
delivery: {
deliveryPerson: 'Ana Silveira',
price: 5,
},
},
payment: {
total: 60,
},
};

const customerInfo = (order) => {
// Adicione abaixo as informações necessárias.

};

customerInfo(order);

const orderModifier = (order) => {
// Adicione abaixo as informações necessárias.

};

orderModifier(order);

## Complete a função customerInfo() para que seu retorno seja similar a 'Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701'.

## De olho na dica 👀: Note que o parâmetro da função já está sendo passado na chamada da função.

## Complete a função orderModifier() para que seu retorno seja similar a 'Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.';

## Modifique o nome da pessoa compradora para Luiz Silva;

## Modifique o valor total da compra para R$ 50,00.


# Exercicio 3

## Parte III - Organizando lições
### Suponha que você esteja trabalhando em uma escola e precise fazer algumas atualizações no sistema. Para isso, considere o seguinte código:

Copiar
const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

### Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

### Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

### Crie uma função para mostrar o tamanho de um objeto.

### Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

### Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:

Copiar
console.log(allLessons);
/*
{
  lesson1:
   { materia: 'Matemática',
     numeroEstudantes: 20,
     professor: 'Maria Clara',
     turno: 'manhã' },
  lesson2:
   { materia: 'História',
     numeroEstudantes: 20,
     professor: 'Carlos',
     turno: 'noite' },
  lesson3:
   { materia: 'Matemática',
     numeroEstudantes: 10,
     professor: 'Maria Clara',
     turno: 'noite' }
};
*/

## Usando o objeto criado no tópico anterior, crie uma função que retorne o número total de estudantes em todas as aulas.

## Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:

Copiar
console.log(getValueByNumber(lesson1, 0));
// Output: 'Matemática'
Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles o objeto, o nome da chave e o valor da chave. Exemplo:
Copiar
console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false


