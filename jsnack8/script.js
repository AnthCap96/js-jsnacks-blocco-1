//Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero.

const number = prompt(`inserisci un numero a 4 cifre.`);

let total = parseInt(number.charAt(0)) + parseInt(number.charAt(1)) + parseInt(number.charAt(2)) + parseInt(number.charAt(3))

console.log(total)