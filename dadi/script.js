// 1. Generare un numero random per il giocatore
// 2. Generare un numero random per il computer
// 3. Stabilire il vincitore
// 4. Stampare in console il vincitore



const playerNumber = Math.floor(Math.random() * 5) +1;
console.log('user number:' + playerNumber);

const pcNumber = Math.floor(Math.random() * 5) +1;
console.log('computer number:' + pcNumber);

if (playerNumber > pcNumber){
    console.log('Ha vinto il giocatore');
} else if (playerNumber < pcNumber){
    console.log('Ha vinto il computer');
} else {
    console.log('I due numeri sono uguali');
}