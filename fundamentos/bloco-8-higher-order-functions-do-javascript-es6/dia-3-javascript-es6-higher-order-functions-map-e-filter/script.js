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
const arrayOfBooks = books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`)
console.log(arrayOfBooks)

//2
let arrayOfObj = books.map((book) => (
  {
    age: book.releaseYear - book.author.birthYear,
    author: book.author.name,
  }
));
arrayOfObj = arrayOfObj.sort((itemA, itemB) => itemA.age - itemB.age);
console.log(arrayOfObj);

//3
function fantasyOrScienceFiction() {
  const arrayOfGenre = books.filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia')
  console.log(arrayOfGenre);
}
fantasyOrScienceFiction();

//4
function oldBooksOrdered() {
  const arrayOrdened = books.filter((book) => 2021 - book.releaseYear > 60).sort((bookA, bookB) => bookA.releaseYear - bookB.releaseYear);
  console.log(arrayOrdened);
}
oldBooksOrdered()

//5
function fantasyOrScienceFictionAuthors() {
  const arrayOrdAlpha = books.filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia').map((author) => author.author.name).sort();
  console.log(arrayOrdAlpha);
}
fantasyOrScienceFictionAuthors();

//6
function oldBooks() {
  const oldBooks = books.filter((book) => 2021 - book.releaseYear > 60).map((name) => name.name);
  console.log(oldBooks);
}
oldBooks()

//7
function authorWith3DotsOnName() {
  const bookOfThree = books.find((book) => (
    book.author.name.split(' ').filter((n) => n.endsWith('.')).length === 3
  )).name;
  console.log(bookOfThree);
}
authorWith3DotsOnName()