'use strict';
console.log('user.js file was loaded');

const userArr = [
  {
    id: 1,
    username: 'James',
    avg: [7, 10, 7],
    calcTotal: function () {
      let total = 0;
      this.avg.forEach((sk) => {
        total += sk;
      });
      console.log('total ===', total);
      return total;
    },
  },
  {
    id: 2,
    username: 'Mike',
    avg: [5, 8, 7],
    calcTotal: function () {
      let total = 0;
      this.avg.forEach((sk) => {
        total += sk;
      });
      console.log('total ===', total);
      return total;
    },
  },
  {
    id: 3,
    username: 'Bob',
    avg: [7, 8, 5],
    calcTotal: function () {
      let total = 0;
      this.avg.forEach((sk) => {
        total += sk;
      });
      console.log('total ===', total);
      return total;
    },
  },
];

userArr[2].calcTotal();

const u1Paprastai = {
  id: 1,
  username: 'James',
  avg: [7, 10, 7],
  calcTotal: function () {
    let total = 0;
    this.avg.forEach((sk) => {
      total += sk;
    });
    console.log('total ===', total);
    return total;
  },
};
u1Paprastai.calcTotal();

console.log('u1Paprastai ===', u1Paprastai);
// klase yra objektu gamykla
// brezinys pagal kuri kuriami objektai
class User {
  // kaskart sukuriant nauja objekta, primiausia paleidziama
  // constructor funkcija
  constructor(argId, argName, argAvg) {
    // this - rodo i naujai sukurta objekta
    this.id = argId;
    this.username = argName;
    this.avg = argAvg;
  }
  // prideti metoda kuris skaiciuoja total
  calcTotal() {
    let total = 0;
    this.avg.forEach((sk) => {
      total += sk;
    });
    console.log(this.username, 'total ===', total);
    return total;
  }
}

const u1 = new User(1, 'James', [7, 10, 7]);
const u2 = new User(2, 'Mike', [5, 8, 7]);
const u3 = new User(3, 'Bob', [7, 8, 5]);

u2.calcTotal();
u1.calcTotal();
u1.town = 'London';
console.log('u1 ===', u1);
console.log('u2 ===', u2);

const userArrClasses = [
  new User(1, 'James', [7, 10, 7]),
  new User(2, 'Mike', [5, 8, 7]),
  new User(3, 'Bob', [7, 8, 5]),
];
console.log('userArrClasses ===', userArrClasses);
