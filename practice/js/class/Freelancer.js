import Employee from './Employee.js';
import Job from './Job.js';
export default class Freelancer extends Employee {
  /** @type {[Job]} */
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

  finishJob(jobObjToBeFinished) {
    // surasim darba darbu masyve
    /** @type {Job | undefined} */
    const found = this.jobsArr.find(
      (oneJobObj) => oneJobObj === jobObjToBeFinished
    );
    console.log('found ===', found);
    // jam iskviesim .makeJobDone metoda
    console.log(
      `${this.name} has done ${found.title} job for ${found.amount} dollars`
    );
    found.makeJobDone();
  }

  calcPay() {
    // atrinkti tik pabaigtus darbus (.filter)
    const doneJobsArr = this.jobsArr.filter(
      (oneJobObj) => oneJobObj.isDone === true
    );
    console.table(doneJobsArr);
    // gauti pinigu sumas uz tuos darbus (.map)

    // suskaiciuojam kiek yra tu pinigu
    // istrinti is darbu masyvo baigtus darbus (splice, filter)
    // grazinti moketina suma
  }
}
