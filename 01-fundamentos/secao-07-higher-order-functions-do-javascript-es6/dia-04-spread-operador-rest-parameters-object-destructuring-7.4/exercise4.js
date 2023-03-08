const people = [
    {
      name: 'Nicole',
      bornIn: 1992,
      nationality: 'Australian',
    },
    {
      name: 'Harry',
      bornIn: 2008,
      nationality: 'Australian',
    },
    {
      name: 'Toby',
      bornIn: 1901,
      nationality: 'Australian',
    },
    {
      name: 'Frida',
      bornIn: 1960,
      nationality: 'Dannish',
    },
    {
      name: 'Fernando',
      bornIn: 2001,
      nationality: 'Brazilian',
    },
    // bornIn: nascido em
  ];
  
  // escreva filterPeople abaixo

//   const filterPeople = () => {
//     return people.filter((element) => {
//         return element.nationality === 'Australian' && element.bornIn < 2000;
//     }).map((element) => {
//         return element.name
//     })
//   };

const filterPeople = (array) => {
    return array.filter(({nationality, bornIn}) => {
        return bornIn < 2000 && nationality === 'Australian' && bornIn > 1900
    }).map((element,) => element.name)
};

  console.log(filterPeople(people));