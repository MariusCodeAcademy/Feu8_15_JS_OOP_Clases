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
  }

  calcPay() {
    // how to calcl pay
    // padauginti isdirbtas val is valandinio
    // grazinti atsakyma
    // nunulinti valandas
  }
}
