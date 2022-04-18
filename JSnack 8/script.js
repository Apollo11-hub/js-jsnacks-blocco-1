/*
  JSnack 8
  Chiedi un numero di 4 cifre all’utente
  e calcola la somma di tutte le cifre che compongono il numero.
  in questo caso possiamo sfruttare a nostro vantaggio il fatto che
  la funzione prompt restituisca una stringa anche se si è digitato un numero
  e recuperare una cifra alla volta usanto il ciclo for per scorrere la stringa numerica

*/

const array = [ ]


const askFourNumber = prompt("Dammi un numero da 4 cifre")

if(askFourNumber.length > 4){
  alert("I SAID 4!")
}else{

for(i = 0; i < askFourNumber.length ; i++){
  
  let totalNumber = parseInt(askFourNumber[i]);
  
  array.push(totalNumber)
  
  console.log( totalNumber );
  
}

console.log( array );

let sum = 0 ;
let media = 0;

for (let i = 0; i < array.length; i++) {
  sum += array[i];
  media / array.length;
}

console.log(media)

  document.getElementById("try").innerHTML =  `Ecco la somma dei tuoi numeri --> ${sum}`
  
}

