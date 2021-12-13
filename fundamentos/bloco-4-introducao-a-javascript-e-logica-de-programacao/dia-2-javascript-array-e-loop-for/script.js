let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/* 1 */
for(i of numbers){
    console.log(i);
}

/* 2 */
let sum=0;
for(i=0;i<numbers.length;i++){
    sum=sum+numbers[i];    
}
console.log(sum);

/* 3 */
media = sum / numbers.length;
console.log(media);

/* 4 */
if (media>20){
    console.log("valor maior que 20");
} else {
    console.log("valor menor ou igual a 20")
}

/* 5 */
let valor=0;
for (i=0;i<numbers.length;i+=1){
    if(valor<numbers[i]){
        valor=numbers[i];
    } 
    
}
console.log("o maior valor é:",valor);

/* 6 */
let cont = 0;
for(i=0;i<numbers.length;i+=1){
    if(numbers[i] % 2 !==0){
        cont=cont+1;
    }
}
console.log(cont);

/* 7 */
let menor=100;
for (i=0;i<numbers.length;i+=1){
    if(menor>numbers[i]){
        menor=numbers[i];
    }     
}
console.log("o menor valor é:",menor);

/* 8 */
let array=[];
for(i=1;i<=25;i+=1){
    array.push(i);
}
console.log(array);

/* 9 */
for (let index = 0; index < array.length; index += 1) {
    console.log(array[index] / 2);
  };
