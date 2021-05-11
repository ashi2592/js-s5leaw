// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// Deep Copy and Shallow copy
var employeeDetailsOriginal = {
  name: 'Ashish',
  age: 25,
  Profession: 'Software Engineer'
};

var employeeDetailsDuplicate = JSON.parse(
  JSON.stringify(employeeDetailsOriginal)
); //Shallow copy!

employeeDetailsDuplicate.name = 'ashish';

console.log('Original', employeeDetailsOriginal);
console.log('Duplicate', employeeDetailsDuplicate);

// Coluser

function calculate() {
  let num = 0;
  function add(value) {
    return (num = num + value);
  }

  function substract(value) {
    return (num -= value);
  }
  return { substract, add, num };
}

let i = calculate();
i.add(200);
console.log(i.substract(20));

// Generator function
function* count() {
  yield 1;
  yield 2;
}

let c = count();
console.log(c.next());
console.log(c.next());
console.log(c.next());

// type coercion

console.log(Number(true));
console.log('a' + true + 1);
console.log(2 + true - false);
console.log(Number(false));
console.log('A' * 2);

var x = 10;

function chanegValue() {
  x = 16;
  console.log(x);
}

console.log(x);
chanegValue();
console.log(x);

// call, bind, apply

let person1 = {
  firstName: 'Ateet',
  lastName: 'Shekar'
};

const getFullName = function(dob = '', state = '') {
  return this.firstName + ' ' + this.lastName + ' ' + dob + ' ' + state;
};
let p = getFullName.call(person1, '15-03-1991');
console.log(p);

// function borrowing
let person2 = { firstName: 'Ashish', lastName: 'Srivastava' };
let p2 = getFullName.call(person2);
console.log(p2);

// class

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getName() {
    return this.name;
  }
  isRetired() {
    return this.age > 60 ? 'Retired' : 'Not Retired';
  }
}

class Developer extends Person {
  constructor(name, age, degisnation) {
    super(name, age);
    this.degisnation = degisnation;
  }

  getDegisnation() {
    return this.degisnation;
  }
}

const per1 = new Developer('Ashish Srivastava', 30, 'Full stack developer');
const per2 = new Developer('Ateet Shekar', 61);

console.log(
  `${
    per1.name
  } is ${per1.isRetired()} and working as a ${per1.getDegisnation()}`
);
console.log(per2.name + ' is ' + per2.isRetired());

// spread Opertor

const obj1 = {
  name: 'ashish',
  dob: '1992/03/15',
  education: [10, 12, 15]
};

const newobj = { ...obj1, gender: 'Male' };
console.log(newobj);

// rest Opertor

function reduceValue(finalNumber, ...value) {
  return finalNumber - value.length;
}

console.log(reduceValue(1000, 303, 3, 3, 3, 8));

// state

let arr1 = [];
arr1.push(20);
arr1.push(30);
arr1.push(40);
arr1.push(50);
arr1.push(50);

console.log(arr1);

let newset = [...new Set(arr1)];

console.log(newset);




