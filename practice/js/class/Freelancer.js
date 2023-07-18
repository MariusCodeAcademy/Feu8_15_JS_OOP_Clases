import Employee from './Employee.js';
import Job from './Job.js';
export default class Freelancer extends Employee {
  jobsArr;

  constructor(firstName, lastName) {
    super(firstName, lastName);
    this.jobsArr = [];
  }

  asignJob(newJob) {
    // leisti ideti tik darbus sukurtus pabga Job klase
    if (newJob instanceof Job) {
      // prideti darba i darbu masyva
      this.jobsArr.push(newJob);
    } else {
      alert('not a real job');
    }
  }

  finishJob(jobObj) {
    // surasim darba darbu masyve
    // jam iskviesim .finishJob metoda
  }

  calcPay() {
    // atrinkti tik pabaigtus darbus (.filter)
    // gauti pinigu sumas uz tuos darbus (.map)
    // suskaiciuojam kiek yra tu pinigu
    // istrinti is darbu masyvo baigtus darbus (splice, filter)
    // grazinti moketina suma
  }
}
