export default class Person {
  private _name: string
  private _birthDate: Date
  constructor(n:string, d: Date) {
    if(n.length < 3) {
      throw new Error('Nome precisa ter no minimo 3 caracteres.')
    }
    if (d.getTime() > new Date().getTime()) {
      throw new Error('A data de nascimento não pode ser uma data no futuro.');
    }

    if (Person.getAge(d) > 120) {
      throw new Error(`A pessoa deve ter no máximo 120 anos.`);
    }
    this._name = n;
    this._birthDate = d
  }

  get name() {
    return this._name
  }

  set name(value: string) {
    if(value.length < 3) {
      throw new Error('Nome precisa ter no minimo 3 caracteres.')
    }
    this._name = value
  }
  
  get birthDate() {
    return this._birthDate
  }

  set birthDate(value: Date) {
    this._birthDate = value
  }

  static getAge(date: Date): number {
    const diff = Math.abs(new Date().getTime() - date.getTime());
    const yearMs = 31_536_000_000
    return Math.floor(diff / yearMs)
  }
}


const person1 = new Person('Patrik', new Date('1993-11-18'))
const person2 = new Person('Priscila', new Date('1994-11-05'))