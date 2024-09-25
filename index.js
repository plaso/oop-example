const pepe = {
  name: 'Pepe',
  age: 28,
  city: 'Madrid',
  address: {
    street: 'Paseo de la Chopera'
  }
}

const juan = {
  name: 'Juan',
  age: 28,
  city: 'Madrid',
  address: {
    street: 'Paseo de la Chopera'
  },
  sayName: function() {
    console.log(this.name)
  },
}

juan.sayName();

class Student {
  constructor(name, age, city, phone, addressStreet = 'Callao') {
    console.log('constructor')
    //declaro atributos
    this.name = name;
    this.age = age;
    this.city = city;
    this.address = {
      street: addressStreet
    }
    this.phone = phone
  }

  // metodos
  sayName() {
    console.log(`My name is ${this.name}`)
  }
}

// Generar instancias de una clase
const maria = new Student('María', 24, 'Barcelona', '666234056', 'Gran Vía');
const maria2 = new Student('María', 24, 'Barcelona', '434234', undefined);

console.log(maria);
console.log(maria2);

// const input = window.prompt()
// const user = new Student(input, 24, 'Barcelona', '666234056', 'Gran Vía');
// console.log(user)

class StudentWithGrades extends Student {
  constructor(name, age, city, phone, grades, addressStreet = 'Callao') {
    super(name, age, city, phone, addressStreet)
    this.grades = grades
  }

  sayName() {
    super.sayName()
  }
}

const juanWithGrades = new StudentWithGrades('Juan', 20, 'Burgos', '55555', [4, 5, 4], 'Gran Vía')

juanWithGrades.sayName()

if (juanWithGrades instanceof Student) {
  console.log('Juan tambien es un Student!!')
}

class ClassRoom {
  constructor(name, students = []) {
    this.name = name
    this.students = students
  }

  listStudents() {
    if (this.students.length === 0) {
      console.log(`La clase ${this.name} no tiene aún estudiantes`)
      return
      //cortocircuito
    }

    console.log(`La  clase ${this.name} tiene los siguientes estudiantes:`)
    this.students.forEach(student => {
      student.sayName()
    })
  }

  // Esta es la buena
  addStudent(name, age, city, phone, addressStreet) {
    const newStudent = new Student(name, age, city, phone, addressStreet)

    this.students.push(newStudent);
  }

  addStudentClass(student) {
    this.students.push(student);
  }
}

const classroom = new ClassRoom('Primero A', [maria, maria2, juanWithGrades])

classroom.listStudents()
classroom.addStudent('Manuel', 30, 'Madrid', '6667778')
classroom.addStudentClass(new Student('Pepito', 20, 'Madrid', '322323'))
classroom.listStudents()
console.log(classroom.students)