/*for(var 1=0;i<=10;i++)
var x='global';
console.log(this.x);
console.log(this);
console.log(i);

console.log(this);''  `` */

/*
let objWay = new String("shasi"); //not primitive
console.log(objWay);
console.log(typeof objWay);

console.log("===convered value===");
let convertedValue = objWay.valueOf();
console.log(convertedValue); //primitive value
console.log(typeof convertedValue);    */

/*let x = Number(10);
let y = Number(10);
console.log(x === y);
console.log(x);
*/

//objects
/*
var person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };
console.log(person.age);*/
// let users = {};
// //insert properties
// users.name = "aravind";
// users.age = 29;
// users.company = "capgemini";
// users.salary = 299999;
// users.desidnation = "Fullstack developer";

// console.log(users);
// console.log("-------");
// console.log(this);
// let test = {
//   check: function name() {
//     console.log(this);
//   },
// };
jspiders(); //executing
function jspiders() {
  console.log("i am jspiders");
} //called
//it will be hoising

qspiders();
function qspiders() {
  console.log("i am qspiders");
}
//it will not be hoisting

function user(name, age, salary) {
  return this;
}
console.log(user("mani", 22, 30000));
let firstArray = {
  name: "Aravind",
  designation: "Fullstackdeveloper",
};

console.log(firstArray.name);
///[ ]

let numbers = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];

let totalValue = numbers.flat(1).reduce((a, b) => {
  return a + b;
});
console.log(totalValue);
