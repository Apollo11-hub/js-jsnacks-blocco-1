/*
  JSnack 3
  Il software deve chiedere per 5 volte all’utente di inserire un numero.
  Il programma stampa la somma di tutti i numeri inseriti.
  Esegui questo programma in due versioni, con il for e con il while (facoltativo)
*/



// const limit = 5;

// let sum = 0 ;


// for(let i = 0; i < limit; i ++) {
  
//   const askNumber = prompt("Inserisci un numero");
  
//   sum += parseInt(askNumber) ;
  
// }

// console.log(sum);


const limit = 5
let sum = 0 ;

let i = 0;


while (i < limit){

  const askNumber = prompt("Inserisci un numero");
  
  sum += parseInt(askNumber) ;
  
  i++;
}
console.log(sum)




