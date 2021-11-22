const { books, arrays, students } = require('./dados');

//1
function flatten() {
  const novoArray = arrays.reduce((accArray, array) => {
    return accArray.concat(array);
  }, []);
  console.log(novoArray);
}
flatten();

//2
function reduceNames() {
  const autores = books.reduce((accAutores, book) => {
    return accAutores += `${book.author.name}, `;
  }, '');
  console.log(autores);
}
reduceNames();

//3
function averageAge() {
  const numberOfBooks = books.length;
  const medianAge = books.reduce((accIdade, book) => {
    return accIdade += (book.releaseYear - book.author.birthYear);
  }, 0);
  return medianAge / numberOfBooks;
}
console.log(averageAge());

//4
function longestNamedBook() {
  const maiorNome = books.reduce((accNome, book) => {
    return (accNome.name.length > book.name.length) ? accNome : book;
  });
  return maiorNome;
}
console.log(longestNamedBook());

//5
// function containsA() {
//   const letterA = names.reduce((accA, name) => {
//     const arrayLetters = name.split('');
//     const n = arrayLetters.reduce((acc, letra) => {
//       return (letra === 'A' || letra === 'a') ? acc++ : acc;
//     }, 0)
//   }, 0);
//   return letterA;
// }
// console.log(containsA());

//6
function studentAverage() {
  const newArray = students.map(())
}