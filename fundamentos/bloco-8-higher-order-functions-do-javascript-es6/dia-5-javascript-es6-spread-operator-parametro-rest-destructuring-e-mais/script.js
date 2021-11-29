const { people, alex, gunnar } = require('./dados');

//1
const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

rectangles.forEach((rectangle) => {
  rectangleArea(...rectangle)
  console.log(rectangle[0] * rectangle[1]);
});

//2
const sum = (...number) => number.reduce((acc, actual) => acc + actual, 0);
console.log(sum(4, 7, 8, 9, 60, 2));

//3
const personLikes = ({ name, age, likes }) => `${name} is ${age} years old and likes ${likes.join(', ')}.`;

console.log(personLikes(alex)) // 'Alex is 26 years old and likes fly fishing.'
console.log(personLikes(gunnar)) // 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.'

//4
const filterPeople = (arr) => arr.filter(({ nationality, bornIn }) => nationality === 'Australian' && bornIn > 1900 && bornIn <= 2000,);
console.log(filterPeople(people));

//5
