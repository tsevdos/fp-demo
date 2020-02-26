const { filter, propEq, pluck, reduce, pipe, add, divide, length, __ } = require("ramda");
const users = require("./users");

const filterMaleUsers = filter(propEq("gender", "male"));
const getAgeTotal = pipe(
  pluck("age"),
  reduce(add, 0),
);
const noOfMaleUsers = pipe(
  filterMaleUsers,
  length,
)(users);
const getAverageAgeOfAllUsers = pipe(
  getAgeTotal,
  divide(__, length(users))
)(users);
const getAverageAgeOfMaleUsers = pipe(
  filterMaleUsers,
  getAgeTotal,
  divide(__, noOfMaleUsers)
)(users);

console.log(getAverageAgeOfMaleUsers);
console.log(getAverageAgeOfAllUsers);
