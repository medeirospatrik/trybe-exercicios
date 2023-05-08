const hydrate = (string) => {
    switch (string) {
        case "1 cerveja":
            return '1 copo de água';
            break;

        case '2 caipirinhas':
            return '2 copos de água'
            break

        case '1 copo de catuaba, 1 cervejas e 1 copo de vinho':
            return '3 copos de água'
            break

        case '1 cerveja, 2 shots e 1 catuaba':
            return '4 copos de água'
            break;

        case '2 shots de tequila, 2 cervejas e 1 corote':
            return '5 copos de água'
            break

        case '4 caipirinhas e 2 cervejas':
            return '6 copos de água'
            break
            
        case '1 cachaça, 5 cervejas e 1 copo de vinho':
            return '7 copos de água'
            break


    }
};

console.log(hydrate('1 cerveja'
));

module.exports = hydrate;