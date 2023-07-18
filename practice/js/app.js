import Employee from './class/Employee.js';
import MyWorker from './class/MyWorker.js';
import Job from './class/Job.js';
import Freelancer from './class/Freelancer.js';
console.log('app.js file was loaded');

// darbotoju sarasas
const employeesArr = [
  new MyWorker('Darbas', 'Sunkus', 15), // 0
  new MyWorker('Jess', 'Smith', 25), // 1
  new Freelancer('Serbentaudas', 'Bordiuras'), // 2
  new Freelancer('James', 'Band'), // 3
];

const jArr = [
  new Job('Footer', 250), // 0
  new Job('Aside', 150), // 1
  new Job('Main', 500), // 2
  new Job('Slider', 600), // 3
];

// priskirti darbu freelanceriam
employeesArr[2].asignJob(jArr[1]);
employeesArr[2].asignJob(jArr[2]);
employeesArr[3].asignJob(jArr[0]);
employeesArr[3].asignJob(jArr[3]);

// darbuotojai isdirba valandas
employeesArr[0].work(80);
employeesArr[0].work(80);
employeesArr[1].work(50);
employeesArr[1].work(10);

// freelanceriai baigia darbus
employeesArr[2].finishJob(jArr[1]);
employeesArr[2].finishJob(jArr[2]);
employeesArr[3].finishJob(jArr[3]);

console.log('employeesArr ===', employeesArr);

// ismoketi algas
const algosArr = employeesArr.map((oneEmploObj) => {
  return {
    personName: oneEmploObj.getFullName(),
    salary: oneEmploObj.calcPay(),
  };
});
console.log('algosArr ===', algosArr);
