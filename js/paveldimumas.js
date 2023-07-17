'use strict';
console.log('paveldimumas.js file was loaded');

class Person {
  name;
  age;
  constructor(whatName, whatAge) {
    this.name = whatName;
    this.age = whatAge;
  }
  birthYear() {
    // apskaiciuoti kelintais gimes
    const nowYear = 2023;
    const whenBorn = nowYear - this.age;
    console.log(this.name, 'whenBorn ===', whenBorn);
  }
}

const per1 = new Person('James', 45);
const per2 = new Person('Jess', 24);
console.log('per1 ===', per1);
per1.birthYear();
per2.birthYear();

class Employee extends Person {
  constructor(emName, emAge, whatJob) {
    // kai turim paveldincia klase ir norim praplesti ja argumentu,
    // turim igyvendinti tevines klases konstruktoriu - super()
    super(emName, emAge);
    this.job = whatJob;
  }
}

const emp1 = new Employee('Mike', 55, 'Web developer');
emp1.birthYear();
console.log('emp1 ===', emp1);

function jsDateExample() {
  // Javascrip vidinis datos objektas aprasytas su klase
  const nowObj = new Date();
  console.log('nowObj ===', nowObj);
  nowObj.getFullYear();
  console.log('nowObj.getFullYear() ===', nowObj.getFullYear());
  const dateInLt = nowObj.toLocaleString('lt', { dateStyle: 'full' });
  console.log('dateInLt ===', dateInLt);
}
