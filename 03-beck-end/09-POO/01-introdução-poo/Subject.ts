export default class Subject {
 

 constructor(private _subject:string) {
  this.validateSubject(_subject)
 }
  
  get subject() {
    return this._subject
  }

  set subject(value: string) {
    this.validateSubject(value)
    this._subject = value
  }

  private validateSubject(subject: string) {
    if(subject.length < 3 ) {
      throw new Error('O nome tem que possuir no mínimo 3 caracteres')
    }
  }
}

const subject1 = new Subject('Matematica')
const subject2 = new Subject('Historia')
const subject3 = new Subject('Filosofia')

console.log(subject1.subject);
