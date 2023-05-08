const geraEmail = (name) => {
    const arr = name.split(' ')
    return `${arr.join('')}@trybe.com`
}

const newEmployees = (name, email) => {
  const employees = {
    id1: '', // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: '', // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: '', // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return  employees.forEach((element) => {
    return element
  })
};

console.log(newEmployees('patrik', geraEmail));