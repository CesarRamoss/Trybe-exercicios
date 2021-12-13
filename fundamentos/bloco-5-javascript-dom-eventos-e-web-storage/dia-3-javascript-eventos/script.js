function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // 1
  function createDays(){
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

    const dateDays = document.querySelector('#days'); //onde será inserido

    for(let i in dezDaysList){
        const days = dezDaysList[i]; //cada elemento do array
        const dayItem = document.createElement('li'); //criação do elemento
        dayItem.innerHTML = days;       //inserção de cada elemento no html

        dayItem.className = "day"; // adicionado a classe day para cada li
        dateDays.appendChild(dayItem); //onde será inserido na pagina recebe o item criado

        
        if(dezDaysList[i] == 24 || dezDaysList[i] == 25 || dezDaysList[i] == 31){
            dayItem.className = "day holiday";
        }

        if(dezDaysList[i] == 4 || dezDaysList[i] == 11 || dezDaysList[i] == 18 || dezDaysList[i] == 25){
            dayItem.className = "day friday";
        }
        
    }
    
  }

  createDays();

  //2
  function botaoFeriado(feriados){
    let container = document.querySelector('.buttons-container'); //onde sera armazenado
      let NewBtn = document.createElement('button'); //criei o elemento
      NewBtn.id = 'btn-holiday'; //add id 
      NewBtn.className = 'buttons-container'; // add nome da classe
      NewBtn.innerHTML = feriados; //input do parametro no html      
      container.appendChild(NewBtn); //inputado na div 
      
      }
  

  botaoFeriado('Feriados');

  //3
  function btnHoliday(){
    let clickBtn = document.getElementById('btn-holiday');    
    let holidayList = document.querySelectorAll('.holiday'); 
    for(let i of holidayList){
      i.style.backgroundColor = 'rgb(238, 238, 238)';      
    }
         
    clickBtn.addEventListener('click',trocaCor); 
    
}

  function trocaCor(){
  let holidayList = document.querySelectorAll('.holiday'); 

  for(i of holidayList){
    if(i.style.backgroundColor == 'rgb(238, 238, 238)'){
      i.style.backgroundColor = 'green';
      i.style.color = 'white';
    } else {
      i.style.color = '#777';
      i.style.backgroundColor = 'rgb(238, 238, 238)';
    }
  }  
}

  btnHoliday();

  //4
  function btnSextou(str){
    let container = document.querySelector('.buttons-container');
    let btnSexta = document.createElement('button');
    btnSexta.id = 'btn-friday';
    btnSexta.innerHTML = str;
    container.appendChild(btnSexta);

  }

  btnSextou("Sexta-feira")

  //5
  function btnFriday(arrayNum){
    let clickBtn = document.getElementById('btn-friday');
    let btnList = document.querySelectorAll('.friday');
    let arrayText = 'Sexta-feira';
    clickBtn.addEventListener('click',function(){ 


      for(let i=0;i<btnList.length;i++){  
        
        if(btnList[i].innerHTML!== arrayText){          
          btnList[i].innerHTML = "Sexta-feira";
        } else {
          btnList[i].innerHTML = arrayNum[i];
        }
        
      }
      
    })   

  }
  
let array = [4,11,18,25]
btnFriday(array);

//6
function mouseIn(){
  let mouseTarget = document.querySelector('#days');
  mouseTarget.addEventListener('mouseover',function(e){
    e.target.style.fontSize = '30px';
    e.target.style.fontWeight = 'bold'
  }) 
  
}

function mouseOut(){
  let mouseTarget = document.querySelector('#days');
  mouseTarget.addEventListener('mouseout',function(e){
    e.target.style.fontSize = '20px';
    e.target.style.fontWeight = ''
  }) 
  
}
mouseIn();
mouseOut();