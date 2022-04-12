/*
  JSnack 2
  L’utente inserisce due parole in successione, con due prompt.
  Il software stampa prima la parola più corta, poi la parola più lunga.
*/


const parolaUno = prompt("inserisci una parola");

const parolaDue = prompt("inserisci una parola");


if(parolaUno > parolaDue){
  alert(parolaUno + " " + parolaDue)
}else if(parolaDue > parolaUno){
  alert(parolaDue + " " + parolaUno)
}else{
  alert("Even") 
}