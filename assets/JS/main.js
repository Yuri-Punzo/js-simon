/* Descrizione:
Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */


//creo una funzione per avere  5 numeri random da 1 a 100

//creo un array che contenga questi 5 numeri
//per metterli in ordine posso usare .sort

//li stampo a pagina

//setto un timer per 30 secondi collegato ai numeri che gli dia display-none

//alla fine del timer metto un ciclo for che mi dia 5 prompt

//creo un counter

//controllo il valore inserito per ogni prompt paragonandolo con l'array  creato all'inizio

//se il numero inserito è presente lo conservo (in nuovo array) e faccio salire il counter (tipo il pushbomb e counter di ieri)

//altrimenti il counter non sale e non segno il numero nell'array

//finito il ciclo di verifica consegno un risultato a pagina


function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
//console.log(generateRandomNumber(1, 100));
let numbers = []

function numbersArrayGenerator() {
    while (numbers.length < 5) { //faccio ciclare fintanto che l'array non arriva a 5 elementi
        const number = generateRandomNumber(1, 100);
        numbers.push(number); //spedisco i numeri creati nell'array
    }
    console.log(numbers.sort((a, b) => a - b));
    //con .sort((a, b) => a - b) metto in ordine numerico l'array
}
numbersArrayGenerator();

document.querySelector(".game_numbers").innerText = numbers;

let seconds = 5 //inizio countdown da 30
const intervalId = setInterval(function () {
    document.querySelector(".countdown").innerText = seconds; //inserisco il countdown
    if (seconds == 0) {
        document.querySelector(".game_numbers").classList.add("d-none");
        clearInterval(intervalId);
    } else {
        seconds--;
    }
}, 1000)

let count = 0
let answerArray = []
setTimeout(function () {
    if (seconds == 0) {
        for (let i = 0; i < numbers.length; i++) {
            let answer = prompt("immetti uno dei numeri")
            if (numbers.includes(Number(answer))) {
                //console.log("ok");
                count++
                answerArray.push(answer)
            }
        }
        //console.log(answerArray);
        if (answerArray.length > 1) {
            console.log(`${count} risposte corrette ! Hai ricordat* questi numeri: ${answerArray}`);            
        } else if (answerArray.length = 1) {
            console.log(`${count} risposta corretta ! Hai ricordat* questo numero: ${answerArray}`);
        } else {
            console.log("Oh, manco uno ne hai azzecato !");
        }
    }
}, 7000)



//console.log(answerArray);


