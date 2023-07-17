import Employee from './class/Employee.js';
import MyWorker from './class/MyWorker.js';
import Job from './class/Job.js';
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
