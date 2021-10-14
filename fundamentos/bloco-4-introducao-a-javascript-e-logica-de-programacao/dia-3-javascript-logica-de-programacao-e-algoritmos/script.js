/* 1 */
let n = 5;
let linha = '';
let symbol = '*';

for (let i=0;i<n;i+=1){
    linha = linha + symbol;       
};
console.log(linha); 
for (let i=1;i<n;i+=1){
    console.log(linha);
};

/* 2 */
let j = 5;
let line = '';
let symbol2 = "*";

for (let i=0;i<j;i+=1){
    line = line + symbol2;
    console.log(line);
}

/* 3 */
let o = 5;
let triangulo = '';
let aux = o-1;


for (i = 0; i < o; i++) {
    for(j = 0; j < o; j++) {

        if(j >= aux) {

            triangulo += '*';

        }else {

            triangulo += ' ';

        }
    }

    aux--

    triangulo += '\n';

}
console.log(triangulo);

/* 4 */
let l = 5;
let triangulo2 = '';
let aux2 = l-1;


for (i = 0; i < l; i++) {
    for(j = 0; j < l; j++) {

        if(j >= aux2) {

            triangulo2 += '* ';

        }else {

            triangulo2 += ' ';

        }
    }

    aux2--;

    triangulo2 += '\n';

}
console.log(triangulo2);
