'use strict';
console.log('private.js file was loaded');

class MyWorker {
  #firstName;
  #hourlyPay;
  // privati savybe
  #hoursWorked;
  constructor(fName, dollarPerHour) {
    this.#firstName = fName;
    this.#hourlyPay = dollarPerHour;
    this.#hoursWorked = 0;
  }

  changeHourlyPay(password, newPay) {
    if (password === '123') {
      this.#hourlyPay = newPay;
      console.log('hourly pay was changed');
    } else {
      console.warn('wrong password');
    }
  }

  // // setteris firstName
  set firstName(newName) {
    // kruva validaciju
    this.#firstName = newName;
  }
  get firstName() {
    return this.#firstName;
  }
}

const w1 = new MyWorker('James', 50);
// is klases isores privacios savybes nepasiekiamos
// w1.#hourlyPay = 100;
// w1.#hoursWorked = 100;

w1.changeHourlyPay('123', 75);
// w1.firstName = 'Mike';
console.log('w1.firstName ===', w1.firstName);
console.log('w1 ===', w1);
