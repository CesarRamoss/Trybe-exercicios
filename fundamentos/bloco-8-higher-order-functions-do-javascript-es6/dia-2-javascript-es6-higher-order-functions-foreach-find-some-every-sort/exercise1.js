const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

//1
function authorBornIn1947() {
  console.log(books.find((born) => born.author.birthYear === 1947).author.name);
}
authorBornIn1947()

//2
function smallerName() {
  let namebook;
  books.forEach((name) => {
    if (!namebook || name.name.length < namebook.length) {
      namebook = name.name;
    }
  })
  // Variável nameBook que receberá o valor do menor nome;
  console.log(namebook);
}
smallerName();

//3
function getNamedBook() {
  console.log(books.find((book) => book.name.length === 26).name);
}
getNamedBook();

//4
function booksOrderedByReleaseYearDesc() {
  console.log(books.sort((yearA, yearB) => yearB.releaseYear - yearA.releaseYear));
}
booksOrderedByReleaseYearDesc()

//5
function everyoneWasBornOnSecXX() {
  console.log(books.every((born) => born.author.birthYear >= 1901));
}
everyoneWasBornOnSecXX();

//6
function someBookWasReleaseOnThe80s() {
  console.log(books.some((book) => book.releaseYear >= 1980 && book.releaseYear <= 1990));
}
someBookWasReleaseOnThe80s()

//7
function authorUnique() {
  return books.every((book) =>
    !books.some((bookSome) =>
      (bookSome.author.birthYear === book.author.birthYear)
      && (bookSome.author.name !== book.author.name)));
}