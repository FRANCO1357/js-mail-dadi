// 1. Crea (inventa) una lista di inidirizzi mail autorizzati.
// 2. Chiedi all’utente la sua email,
// 3. Controlla che sia nella lista di chi può accedere,
// 4. Stampa in console un messaggio appropriato sull’esito del controllo. ("Benvenuto" se la mail è nella lista, "Spiacenti" se non lo è);

const emailList = ["franco@gmail.com", "marco@gmail.com", "giorgio@gmail.com", "chiara@gmail.com", "gainluca@gmail.com", "anna@gmail.com",]

const mail = prompt("Qual'è la tua mail?", 'franco@gmail.com');

let isAllowed = false;

for (i = 0; i < emailList.length; i++){
    console.log(emailList[i])

    if (mail === emailList[i]){
        isAllowed = true;
    }
}

let message = 'Mi spiace non sei autorizzato ad entrare'

if (isAllowed){
    message = 'Accesso autorizzato'
}

console.log(message);

