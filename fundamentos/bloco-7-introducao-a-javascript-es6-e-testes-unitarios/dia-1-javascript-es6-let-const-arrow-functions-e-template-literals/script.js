// PARTE 1 - Exercicio 1
const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = "Não devo ser utilizada fora do meu escopo (if)";
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    const elseScope = "Não devo ser utilizada fora meu escopo (else)";
    console.log(elseScope);
  }
};

testingScope(true);

//Exercicio 2

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

console.log(
  `Os numeros ${oddsAndEvens.sort((a, b) => {
    return a - b;
  })} se encontram ordenados de forma crescente!.`
);

//PARTE 2 - Exercicio 1
const fatorial = (n) => {
  let resultado = 1;
  for (let i = 1; i <= n; i += 1) {
    resultado *= i;
  }
  console.log(`o fatorial de ${n} é: ${resultado}`);
};

fatorial(5);

//Exercicio 2
const maior = (str) => {
  let array = str.split(" ");
  let y = array[0];
  for (let i of array) {
    x = i.length;
    if (x > y.length) {
      y = i;
    }
  }
  return `${y} é a maior palavra`;
};

console.log(maior("Antônio foi no banheiro e não sabemos o que aconteceu"));

//Exercicio 3
// let cont = 0;
// document.querySelector("#cliquei").addEventListener("click", () => {
//   cont += 1;
//   document.querySelector("#vezes").innerHTML = cont;
// });

//Exercicio 4 - funcao 1
function verificaPalavra(str) {
  let parametro = "Teste";
  let newarray = str.replace("x", parametro);
  console.log(`${newarray}`);
}
verificaPalavra("Tryber x aqui!");
