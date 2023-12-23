import Person from "./Person"


 export default class student extends Person {
  private _enrollment: string
  private _notasProva: number[] = []
  private _notasTrabalho: number[] = []

  constructor(name: string, birthDate: Date ) {
    super(name, birthDate)
    this._enrollment = this.generateEnrollment()
  }

  get enrollment() {
    return this._enrollment
  }

  set enrollment(value: string) {
    if (value.length < 16) throw new Error('A matrícula deve possuir no mínimo 16 caracteres.');
    this._enrollment = value
  }

  get notaProva(): number[] {
    return this._notasProva
  }

  set notaProva(value: number[]) {
    if (value.length > 4) {
      throw new Error('A pessoa estudante só pode possuir 4 notas de provas.')
    }
    this._notasProva = value
  }

  get notaTrabalho() {
    return this._notasTrabalho
  }

  set notaTrabalho(value: number[]) {
    if (value.length > 2) {
      throw new Error('A pessoa estudante só pode possuir 2 notas de trabalhos.')
    }

    this._notasTrabalho = value
  }

  sumGrades() {
    const newArray = [...this._notasProva, ...this._notasTrabalho];
    const total = newArray.reduce((acc, acr) => acc + acr, 0);
    return total;
  }

  sumAverageGrades() {
    const totalNotas = this.sumGrades();
    const dividendo = [...this._notasProva, this._notasTrabalho].length;

    return Math.round(totalNotas / dividendo);
  }

  generateEnrollment():string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
    return `STU${randomStr}`
  }
}

const student1 = new student('Patrik', new Date('1993-11-18'));
const student2 = new student('Priscila', new Date('1994-11-05'))
const student3 = new student('Elisa', new Date('2014-12-07'))
student1.notaProva = [10, 5, 8, 6];
student1.notaTrabalho = [9, 5]
student2.notaProva = [9, 7, 8, 6]
student2.notaTrabalho = [10]

console.log(student1.sumAverageGrades());
console.log(student2.sumAverageGrades());
