const { books, arrays, students, names, grades } = require('./dados');

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
function containsA() {
  return names.reduce((acc, name) => acc + name.match(/A/gi).length, 0); //pra ele pesquisar pela letra A. O g quer dizer que é global (pesquisar em toda a string) e o i é pra ignorar o caseSensitive

}
console.log(containsA());

//6
function studentAverage() {
  const average = students.map((student, index) => ({
    name: student,
    average: (grades[index].reduce((acc, atual) => acc + atual, 0) / grades[index].length),
  }));
  return average;
}

console.log(studentAverage());