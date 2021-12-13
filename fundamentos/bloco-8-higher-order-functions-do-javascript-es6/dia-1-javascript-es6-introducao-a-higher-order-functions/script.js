//1
const newEmployees = (dados) => {
  const employees = {
    id1: dados('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: dados('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: dados('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const dados = (name) => {
  return {
    name,
    email: emailF(),
  }
}

const emailF = () => {
  let stringAleatoria = '';
  let caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < 5; i++) {
    stringAleatoria += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
  }
  return (`${stringAleatoria}@trybe.com`);
}

console.log(newEmployees(dados));

//2
const verificaNum = (myNumber) => {
  if (myNumber == number()) {
    return ('Parabéns')
  } else {
    return ('Tente novamente')
  }
};
const myNumber = 4;
const number = () => {
  return (Math.round((Math.random() * 5)));
}

//3
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const gabaritos = (RIGHT_ANSWERS, STUDENT_ANSWERS, points) => {
  let cont = 0;
  for (let i of STUDENT_ANSWERS) {

  }
};

