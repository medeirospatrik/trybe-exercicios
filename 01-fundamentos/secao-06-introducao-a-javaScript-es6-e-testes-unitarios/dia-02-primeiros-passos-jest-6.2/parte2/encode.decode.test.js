const {encode, decode} = require('./encode-decode')

describe('Function encode()', () => {
    it('encode is function', () => {
        expect(typeof encode).toBe('function')
    })
    it ('encode("a, e, i, o, u") return "1, 2, 3, 4, 5"' ,() => {
        expect(encode('a, e, i, o, u')).toEqual('1, 2, 3, 4, 5')
    })
    it ('encode("string") return "string"' ,() => {
        expect(encode('n')).toEqual('n')
    })
    it ('verifica se a string recebida tem o mesmo tamanho da string retornada' ,() => {
        expect(encode('aeiou').length).toEqual(('12345'.length))
    })
})

describe('Function decode()', () => {
    it('decode is function', () => {
        expect(typeof decode).toBe('function')
    })
    it ('decode("1, 2, 3, 4, 5") return "a, e, i, o, u"' ,() => {
        expect(decode('1, 2, 3, 4, 5')).toEqual('a, e, i, o, u')
    })
    it ('encode("string") return "string"' ,() => {
        expect(decode('0')).toEqual('0')
    })
    it ('verifica se a string recebida tem o mesmo tamanho da string retornada' ,() => {
        expect(decode('12345').length).toEqual(('aeiou'.length))
    })
})