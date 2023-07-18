import Employee from './class/Employee.js';
import MyWorker from './class/MyWorker.js';
import Job from './class/Job.js';
import Freelancer from './class/Freelancer.js';
console.log('app.js file was loaded');

const em1 = new Employee('James', 'Bond');
console.log('em1 ===', em1);
// em1.calcPay();
const w1 = new MyWorker('Jess', 'Smith', 15);
console.log('w1 ===', w1);
w1.getFullName();
w1.work(10);
w1.work(12);
w1.calcPay();

const j1 = new Job('Header css', 100);
console.log('j1 ===', j1);
const jArr = [
  new Job('Footer', 250), // 0
  new Job('Aside', 150), // 1
  new Job('Main', 500), // 2
  new Job('Slider', 600), // 3
];
console.log('jArr ===', jArr);

const f1 = new Freelancer('Mike', 'T');
console.log('f1 ===', f1);
