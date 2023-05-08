const {myRemove, myFizzBuzz} = require('./script')

describe('Function myRemove()', () => {
    it('myRemove recebe [1, 2, 3, 4], 3  e retorna [1, 2, 4]', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
    })
    it('myRemove([1, 2, 3, 4], 3) NAO retorna [1, 2, 3, 4] ', () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    })
    it('myRemove([1, 2, 3, 4], 5) retorna o array [1, 2, 3, 4]', () => {
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
    })
})

describe('function myFizzBuzz', () => {
    it('myFizzBuzz(num) é divisivel por 3 e por 5 return fizzbuzz',() => {
        expect(myFizzBuzz(15)).toMatch('fizzbuzz')
    })
    it('myFizzBuzz(num) é divisivel apenas por 3 retorna fizz', () => {
        expect(myFizzBuzz(9)).toMatch('fizz')
    })
    it('myFizzBuzz(num) é divisivel apenas por 5 retorna buzz', () => {
        expect(myFizzBuzz(10)).toMatch('buzz')
    })
    it('myFizzBuzz(num) não é divisivel por 5 nem por 3 retorna o proprio num', () => {
        expect(myFizzBuzz(11)).toBe(11)
    })
    it('myFizzBuzz(num) se nao for um numero return false', () => {
        expect(myFizzBuzz('a')).toBe(false)
    })
})
 