import Employee from './Employee.js';

export default class MyWorker extends Employee {
  hoursWorked;
  hourlyPay;
  constructor(firstName, lastName, euroPerHour) {
    // kvieciam tevini konstruktoriu
    super(firstName, lastName);
    this.hourlyPay = euroPerHour;
    this.hoursWorked = 0;
  }

  work(howManyHours) {
    // prie dabartiniu valandu prideti howManyHours
    // ir issaugini i dabartines val
    console.log(`${this.getFullName()} works for ${howManyHours} hours`);

    this.hoursWorked += howManyHours;
  }

  calcPay() {
    // how to calcl pay
    // padauginti isdirbtas val is valandinio
    const toPay = this.hoursWorked * this.hourlyPay;
    console.log(`${this.getFullName()} gets paid ${toPay} dollars`);
    // nunulinti valandas
    this.hoursWorked = 0;
    // grazinti atsakyma
    return toPay;
  }
}
