class Job {
  id;
  title;
  amount;
  isDone;

  constructor(jobTitle, whatDoesItPay) {
    this.id = Math.random().toString().slice(2, 6);
    this.title = jobTitle;
    this.amount = whatDoesItPay;
    this.isDone = false;
  }

  makeJobDone() {
    this.isDone = true;
  }
}
export default Job;
