// 1. Crea (inventa) una lista di inidirizzi mail autorizzati.
// 2. Chiedi all’utente la sua email,
// 3. Controlla che sia nella lista di chi può accedere,
// 4. Stampa in console un messaggio appropriato sull’esito del controllo. ("Benvenuto" se la mail è nella lista, "Spiacenti" se non lo è);

const emailList = ["franco@gmail.com", "marco@gmail.com", "giorgio@gmail.com", "chiara@gmail.com", "gainluca@gmail.com", "anna@gmail.com",]

const mail = prompt("Qual'è la tua mail?", 'franco@gmail.com');

if(emailList.includes(mail)){
    console.log('Benvenuto!')
} else {
    console.log('Spiacenti!')
}