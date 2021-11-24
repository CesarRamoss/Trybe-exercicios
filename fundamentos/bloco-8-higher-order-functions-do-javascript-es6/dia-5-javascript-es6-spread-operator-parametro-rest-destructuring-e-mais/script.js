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
