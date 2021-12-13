const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};



//1
function criar(objeto, chave, valor) {
  objeto[chave] =  valor;
  console.log(lesson2);
}
criar(lesson2, 'turno', 'noite');

//2
const listaKeys = (keys) => {
  const lista = Object.keys(keys);
  console.log(lista)
}
listaKeys(lesson2)

//3
const objLength = (obj) => {
  const length = Object.keys(obj).length;
  console.log(length)
}
objLength(lesson3)

//4
const ListValues = (obj) => {
  const listaValores = Object.values(obj);
  console.log(listaValores);
}
ListValues(lesson3)

//5
const allLessons= Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);

//6
const students = (obj) => {
  const l1 = parseInt(`${obj.lesson1.numeroEstudantes}`);
  const l2 = parseInt(`${obj.lesson2.numeroEstudantes}`);
  const l3 = parseInt(`${obj.lesson3.numeroEstudantes}`);
  
  console.log(l1 +l2+l3);
}
students(allLessons);

//7
function obter(obj, posicao){
  console.log(Object.values(obj)[posicao]);
}

obter(lesson1, 2)

//8
const verificaPar = (obj, chave, valor) => {
  const p = Object.entries(obj);
  for (let i in p){
    if (p[i][0] === chave && p[i][1] === valor){
      console.log('Existe par')
    }
  }
}
verificaPar (lesson3, 'turno', 'noite')