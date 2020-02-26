const users = require("./users");

class Users {
  constructor(users) {
    this.users = users;
  }

  get noOfMaleUsers() {
    return this.users.filter((user) => user.gender === "male").length;
  }

  get getAverageAgeOfMaleUsers() {
    let averageAgeOfMaleUsers = 0;
    this.users.forEach((user) => {
      if (user.gender === "male") {
        averageAgeOfMaleUsers += user.age;
      }
    });

    return averageAgeOfMaleUsers / this.noOfMaleUsers;
  }

  get getAverageAgeOfAllUsers() {
    let averageAgeOfAllUsers = 0;
    this.users.forEach((user) => {
      averageAgeOfAllUsers += user.age;
    });

    return averageAgeOfAllUsers / this.users.length;
  }
}

const userList = new Users(users);

console.log(userList.getAverageAgeOfMaleUsers);
console.log(userList.getAverageAgeOfAllUsers);
