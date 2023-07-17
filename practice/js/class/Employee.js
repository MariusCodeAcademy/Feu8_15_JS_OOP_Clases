export default class Employee {
  name;
  surname;
  constructor(fName, lName) {
    this.name = fName;
    this.surname = lName;
  }

  getFullName() {
    const fullName = `${this.name} ${this.surname}`;
    console.log('fullName ===', fullName);
    return fullName;
  }
}
