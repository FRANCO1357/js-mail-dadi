// 1. Generare un numero random per il giocatore
// 2. Generare un numero random per il computer
// 3. Stabilire il vincitore
// 4. Stampare in console il vincitore



const playerNumber = Math.floor(Math.random() * 6) +1;
console.log('user number:' + playerNumber);

const pcNumber = Math.floor(Math.random() * 6) +1;
console.log('computer number:' + pcNumber);

let message;
if (playerNumber > pcNumber){
    message = 'Ha vinto il giocatore';
} else if (playerNumber < pcNumber){
    message = 'Ha vinto il computer';
} else {
    message = 'I due numeri sono uguali';
}

console.log(message);