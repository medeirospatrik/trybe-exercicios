import Employeee from "./Employee";
import Person from "./Person";

export default class Teacher extends Person implements Employeee {
  private _subject: string
  private _salary: number
  private _admissionDate: Date = new Date()
  public tRegistration: string = ''
   constructor(name: string, birthDate: Date, salary: number, subject: string) {
    super(name, birthDate)

    this.validateSalary(salary)

    this._salary = salary

    this._subject = subject

   }

   get admissionDate() {
    return this._admissionDate
   }

   set admissionDate(value: Date) {
    if (value.getTime() > new Date().getTime()) {
      throw new Error('A data de nascimento não pode ser uma data no futuro.');
    }
    this._admissionDate = value
   }

   get salary() {
    return this._salary
   }

   set salary(value: number) {
    this.validateSalary(value)
    this._salary = value
   }

   get registration() {
    return this.tRegistration
   }

   set registration(value: string) {
    this.validateRegistration(value)
    this.tRegistration = value
   }

   generateRegistration() {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
    return `TAC${randomStr}`
  }

   validateSalary(value: number) {
    if( value < 0) {
      throw new Error('O salário não pode ser negativo.')
    }
   }
   validateRegistration(value: string) {
    if(value.length < 16) {
      throw new Error('O registro deve possuir no mínimo 16 caracteres')
    }
   }
}

const teacher1 = new Teacher('Preta', new Date('1993-11-05'), 1500, 'Matematica')
const teacher2 = new Teacher('Elisa', new Date('1993-11-05'), 1500, 'Matematica')
const teacher3 = new Teacher('patrik', new Date('1993-11-05'), 1500, 'Matematica')


