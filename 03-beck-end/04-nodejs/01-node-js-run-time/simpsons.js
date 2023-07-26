const { log } = require('console');

const fs = require('fs').promises;

// async function readAll() {
//   const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
//   const simpsons = JSON.parse(fileContent)
//   console.log(simpsons.map(({id, name}) => `${id} - ${name}`));
// }

// A função main é apenas para termos um ponto de entrada centralizado para o nosso script
// async function main() {
//   await readAll();
// }

// const procuraPorId = async (ID) => {
//   try {
//     const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
//   const simpsons = await JSON.parse(fileContent)
//   const person = await simpsons.find(({id}) => {
//     return Number(id) === Number(ID)
//   })
//   if (!person) {
//     throw new Error('id nao encontrado')
//   }
//   return console.log(person);
//   } catch (err) {
//     console.log(err.message)
//   }
// }

// procuraPorId(7);

// Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.

// const reescrevendoNoArquivo = async () => {
//   const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
//   const simpsons = await JSON.parse(fileContent);
//   const filter = simpsons.filter(({id}) => id != 10 && id != 6);
//   fs.writeFile('./simpsons.json', JSON.stringify(filter));
//   console.log(await fs.readFile('./simpsons.json', 'utf-8'));
// }
// reescrevendoNoArquivo()

// Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, 
//chamado simpsonFamily.json, 
// contendo as personagens com id de 1 a 4.

// const lendoEscrevendocriando = async () => {
//   const readSimpson = await fs.readFile('./simpsons.json', 'utf-8');
//   const formatSimpson = await JSON.parse(readSimpson);
//   const arrayId = [1, 2, 3, 4];
//   const simpsonfamily = await formatSimpson.filter(({id}) => arrayId.includes(Number(id)));
//   fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsonfamily));
// }

// lendoEscrevendocriando()

//Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz.

// const adicionandopornome = async () => {
//   const readFamily  = await fs.readFile('./simpsonFamily.json', 'utf-8');
//   const readSimpsons = await fs.readFile('./simpsons.json', 'utf-8');
//   const simpsonFamily = JSON.parse(readFamily);
//   const simpsons = JSON.parse(readSimpsons)
//   const newIntegral = simpsons.filter(({name}) => name === 'Nelson Muntz')
//   // console.log(simpsonFamily);
//   // console.log(simpsons)
//   // console.log(newIntegral);
//   fs.writeFile('./simpsonFamily.json', JSON.stringify([...simpsonFamily, ...newIntegral]))
//   console.log(await fs.readFile('./simpsonFamily.json', 'utf-8'));
// }

// adicionandopornome()

// F - Crie uma função que substitua o personagem Nelson Muntz pela personagem 
// Maggie Simpson no arquivo simpsonFamily.json.

const substituindo = async () => {
  const readFamily = await fs.readFile('./simpsonFamily.json', 'utf-8');
  const family = JSON.parse(readFamily);
  const newFamily = family.filter(({name}) => name != 'Nelson Muntz');
  const readSimpson = await fs.readFile('./simpsons.json', 'utf-8');
  const simpson = JSON.parse(readSimpson)
  const  capturing= simpson.filter(({name}) => name === 'Maggie Simpson')
  fs.writeFile('./simpsonFamily.json', JSON.stringify([...newFamily, ...capturing]))
  console.log(capturing);
}

substituindo()