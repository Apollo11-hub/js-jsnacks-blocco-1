/*
  L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore
*/




const numeroUno = parseInt(prompt("inserisci numero"));

const numeroDue = parseInt(prompt("inserisci numero"));

if(numeroUno > numeroDue){
  alert(numeroUno)
}else if(numeroDue > numeroUno){
  alert(numeroDue)
}else{
  alert("Even") 
}