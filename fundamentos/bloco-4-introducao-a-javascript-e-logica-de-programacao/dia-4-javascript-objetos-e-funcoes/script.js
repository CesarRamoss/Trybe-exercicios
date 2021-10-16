let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',    
  };

  /* 1 */
  console.log('Bem vinda, '+info.personagem)

  /* 2 */
info.recorrente = 'Sim';
console.log(info);

/* 3 */
for(let i in info){
    console.log(i);
}

/* 4 */
for(let i in info){
    console.log(info[i])
}

/* 5 */
let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
  };

for(let i in info){
    if(i === 'recorrente' && info[i]==='Sim' && info2[i]==='Sim'){
        console.log(info[i]='ambos recorrentes')
    } else {
        console.log(info[i] + ' e ' + info2[i])
    }    
}

/* Parte II */
/* 1 */
function palindromo(str){
   const strReverse = str.split('').reverse().join('');
   if(str === strReverse){
        console.log('é palindromo');
       return true;
       
   } else {
       console.log('nao é palindromo')
       return false;
       
   }
}

palindromo('arara');

/* 2 */
function maiorValor(array){
    let valor=0;
    for(let i=0;i<array.length;i++){
        if(array[i]>valor){
            valor=i;
        }  
                   
    }
    
    console.log(valor)
    return valor;
}

maiorValor([1,3,5,8,9])

/* 3 */
function menorValor(numeros){

    let valor2=10;
    for(let i=0;i<numeros.length;i++){
        
        if(numeros[i]<valor2){
            valor2 = numeros[i];
            var indexMenor = i;
        }  
                   
    }    
    console.log(indexMenor)
    return valor2;
}

menorValor([2, 4, 6, 7, 10, 0, -3])

/* 4 */
function qtdeCaracteres(palavras){
    let maiorPalavra = palavras[0];
    for(let i in palavras){
    if(maiorPalavra.length < palavras[i].length){
        maiorPalavra = palavras[i];
    }
    }
    console.log(maiorPalavra)
    return maiorPalavra;
}

qtdeCaracteres(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']);

/* 5 */
function maisRepetido(arr) {
  
    
}


maisRepetido([2, 3, 9, 2,2]);

/* 6 */
function somaTodos(numero){
    let total=0;
    for(let i=0;i<=numero;i++){
        total = total + i;
    }
    console.log(total);
    return total;
}

somaTodos(5)

/* 7 */
function verificaFim(word, ending){
    return word.includes(ending);    
}

verificaFim('trybe', 'be');
