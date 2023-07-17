import Employee from './Employee.js';

export default class Freelancer extends Employee {
  jobsArr;

  constructor(firstName, lastName) {
    super(firstName, lastName);
    this.jobsArr = [];
  }

  asignJob(newJob) {
    // prideti darba i darbu masyva
  }

  finishJob(jobObj) {
    // surasim darba darbu masyve
    // jam iskviesim .finishJob metoda
  }

  calcPay() {
    // atrinkti tik pabaigtus darbus (.filter)
    // gauti pinigu sumas uz tuos darbus (.map)
    // suskaiciuojam kiek yra tu pinigu
    // istrinti is darbu masyvo baigtus darbus
    // grazinti moketina suma
  }
}
