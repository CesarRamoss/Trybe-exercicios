/* exercicio 1 */
const a = 2;
const b = 3;

let adicao = a + b;
console.log(adicao);

let subtracao = a - b;
console.log(subtracao);

let multiplicacao = a * b;
console.log(multiplicacao);

let divisao = a / b;
console.log(divisao);

let modulo = a % b;
console.log(modulo);

/* exercicio 2 */

if (a>b) {
    console.log("O maior numero é:",a);
} else {  
    console.log("O maior numero é:",b);
}

/* exercicio 3 */
const c = 10;
if (a>b && a>c) {
    console.log("O maior numero dos 3 é:",b);
} 
else if(b>a && b>c){
    console.log("O maior numero dos 3 é:",b);
} 
else if(c>a && c>b) {
    console.log("O maior numero dos 3 é:",c);
}

/* exercicio 4 */
const x = 5;
if (x>0) {
    console.log("positive");
} else if (x<0) {
    console.log("negative");
} else {
    console.log("zero");
}

/* exercicio 5 */
const angA = 60;
const angB = 60;
const angC = 60;

let triangValido = angA + angB + angC;
let angValido = angA > 0 && angB > 0 && angC > 0;

if(angValido){
    if(triangValido===180) {
        console.log ("True");
    } else {
        console.log ("False");
    } 
} else {
    console.log("Angulo invalido");
}

/* exercicio 6 */
const pecaXadrez = 'rainha';
switch (pecaXadrez.toLowerCase()) {
    case 'rei':
    console.log('Rei-> Uma casa apenas para qualquer direção.');
    break;
  case 'bispo':
    console.log('Bispo-> Diagonal.');
    break;
  case 'rainha':
    console.log('Rainha-> Diagonal, horizontal e vertical.');
    break;
  case 'cavalo':
    console.log('Cavalo -> "L" pode pular sobre as peças.');
    break;
  case 'torre':
    console.log('Torre -> Horizontal e vertical.');
    break;
  case 'peão':
    console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
    break;
  default:
    console.log('Erro, peça inválida!');
    break;
}

/* exercicio 7 */
const nota =95;

if(nota<0 || nota>100){
    console.log("Erro");
} else if(nota>=90){
    console.log("A");
} else if(nota>=80){
    console.log("B");
} else if(nota>=70){
    console.log("C");
} else if(nota>=60){
    console.log("D");
} else if(nota>=50){
    console.log("E");
} else if(nota<50){
    console.log("F");
}

/* Exercicio 8 */
 let pNum = 4;
 let sNum = 5;
 let tNum = 8;

 if(pNum%2==0 || sNum%2==0 || tNum%2==0){
     console.log(true);
 } else {
     console.log(false);
 }

 /* exercicio 9 */
 if(pNum%2!==0 || sNum%2!==0 || tNum%2!==0){
     console.log(true);
 } else {
     console.log(false);
 }

 /* exercicio 10 */
 const custo = 1;
 const venda = 50;
 
 let lucro = venda - (custo + (0.20 * custo));
 if (custo<0 || venda<0){
     console.log("mensagem de erro");
 } else {
    console.log("O lucro ao vender mil produtos será de:",lucro*1000);
 }

 /* exercicio 11 */
let salario = 4000;
let inss;
let ir;
let salarioLiq;

if(salario<1556.94){
    inss = salario * 0.08;
    salario = salario - inss;
}
else if(salario>1556.95 && salario<2594.92) {
    inss = salario * 0.09;
    salario = salario - inss;    
}
else if (salario>2594.93 && salario<5189.82) {
    inss = salario * 0.11;
    salario = salario - inss;  
}
else if (salario>5189.82) {
    inss = 570.88;
    salario = salario - inss;  
}

if (salario<1903.98){
    ir =0;
    salarioLiq = salario;
}
else if(salario>1903.99 && salario<2826.65) {
    ir = (salario * 0.075) - 142.80;
    salarioLiq = salario - ir;
}
else if(salario>2826.66 && salario<3751.05) {
    ir = (salario * 0.15) - 354.80;
    salarioLiq = salario - ir;
}
else if(salario>3751.06 && salario<4664.68) {
    ir = (salario * 0.225) - 636.13;
    salarioLiq = salario - ir;
}
else if(salario>4664.68) {
    ir = (salario * 0.275) - 869.36;
    salarioLiq = salario - ir;
}

console.log("O salario liquido é", salarioLiq);

 