const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  const criaTurno = (object, key, value) => {
    object[key] = value
    return object
  }

  console.log(criaTurno (lesson2, 'turno', 'Noite'));

  const listKeys = (object) => {
    return Object.keys(object)
  }
  
  console.log(listKeys(lesson2));

  console.log(criaTurno (lesson2, 'turno', 'Noite'));

  const lengthObject = (object) => {
    return Object.keys(object).length
  }

  console.log(lengthObject(lesson1));

  const listObjectValues = (object) => {
    return Object.values(object)
  }

  console.log(listObjectValues(lesson2));

  const allLessons = Object.assign({}, {lesson1}, {lesson2}, {lesson3});

  console.log(allLessons)

  const allStudents = (allLessons) => {
    const studentsLesson1 = allLessons.lesson1.numeroEstudantes
    const studentsLesson2 = allLessons.lesson2.numeroEstudantes
    const studentsLesson3 = allLessons.lesson3.numeroEstudantes

    return `The total number of students is: ${studentsLesson1 + studentsLesson2 + studentsLesson3}`
  }

  console.log(allStudents (allLessons));

  const valueKey = (object, numberKey) => {
    let arr = Object.values(object)
    return arr[numberKey]
  };
  
  console.log(valueKey(lesson1, 0));

  const verifyPair = (obj, key, value) => {
    const entries = Object.entries(obj);
    let isEqual = false;
    for (let index in entries) {
      if (entries[index][0] === key && entries[index][1] === value) isEqual = true;
    }
    return isEqual;
  };
  console.log(verifyPair(lesson2,'turno','Noite'));