/*

JSnack 4
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

*/



const listOk = ["Uno", "Due", "Tre", "Quattro"];

const bouncerQ = prompt("chi sei?");

let listChecker = false;

for (let i = 0 ; i < listOk.length; i++){
  
  if(listOk[i] == bouncerQ ){
    listChecker = true ;
  }
}

console.log(listChecker)

if(listChecker == true){

  alert("entra")

}else{

  alert("non puoi entrare")
  
}