class Job {
  id;
  title;
  amount;
  isDone;

  constructor(jobTitle, whatDoesItPay) {
    this.id = Math.random().toString().slice(2);
    this.title = jobTitle;
    this.amount = whatDoesItPay;
    this.isDone = false;
  }

  finishJob() {
    this.isDone = true;
  }
}
