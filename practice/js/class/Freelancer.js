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
    console.log('doneJobsArr ===', doneJobsArr);
    // gauti pinigu sumas uz tuos darbus (.map)
    const sumosArr = doneJobsArr.map((oneJobObj) => oneJobObj.amount);
    console.log('sumosArr ===', sumosArr);
    // suskaiciuojam kiek yra tu pinigu
    const howMuchToPay = sumosArr.reduce((total, sk) => total + sk, 0);
    console.log('howMuchToPay ===', howMuchToPay);
    console.log('this.jobsArr ===', this.jobsArr);
    // istrinti is darbu masyvo baigtus darbus (splice, filter)
    this.jobsArr = this.jobsArr.filter(
      (oneJobObj) => oneJobObj.isDone === false
    );
    console.log('this.jobsArr ===', this.jobsArr);
    console.log(`${this.getFullName()} gets paid ${howMuchToPay} dollars`);
    // grazinti moketina suma
    return howMuchToPay;
  }
}
