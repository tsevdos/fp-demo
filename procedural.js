const users = require("./users");

let averageAgeOfMaleUsers = 0;
let averageAgeOfAllUsers = 0;
let noOfMaleUsers = 0;
let noOfAllUsers = users.length;

for (let user of users) {
  if (user.gender === "male") {
    averageAgeOfMaleUsers += user.age;
    noOfMaleUsers++;
  }
}

for (let user of users) {
  averageAgeOfAllUsers += user.age;
}

console.log(averageAgeOfAllUsers / noOfAllUsers);
console.log(averageAgeOfMaleUsers / noOfMaleUsers);
