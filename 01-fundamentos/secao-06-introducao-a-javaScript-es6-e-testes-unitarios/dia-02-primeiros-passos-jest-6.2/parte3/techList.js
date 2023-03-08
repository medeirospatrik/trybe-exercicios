const techList = (arr, name) => {
    let tecnologias = [];
    if( arr.length === 0) {
        return 'Vazio!'
    } else {
        arr.sort()
        for(let index = 0; index < arr.length; index +=1) {
            tecnologias.push({tech: arr[index], name: name})
        }
        return tecnologias
    }

};

console.log(techList( [], 'Lucas'));

module.exports = techList;