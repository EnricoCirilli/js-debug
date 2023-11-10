/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/
console.log("hello")

// ESERCIZIO 1
// 1 un ciclo for da 0 a 4
// 2 si è i minore di 5 e non maggiore
for (let i = 0; i < 5; i++) {
    console.log(i);
}


// ESERCIZIO 2 
// qua il codice data una variabile deifinita se il numero dato dopo la divisione da 0 dovrebbe restituire n +5
// mnancava Due == che ho aggiunto
//hio definito let num a 0 che diviso per due da sempre 0
// dovrebbe tornarmi n + 5 quindi uguale a 5 
let num = 0;
function addIfEven(num) {
    if (num % 2 === 0) {
        return num + 5;
    return num;
}
}
console.log(num + 5)

// ESERCIZIO 3
//
// punto e virgola al posto della virgola
let i = 0;
function loopToFive() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
   
}
console.log(i);

// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
// un punto e virgola in più a riga 43
// mancavano due == a linea 45
//
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length - 1; i++) {
        if (numbers % 2 === 0); {
            evenNumbers.push(i);
        }

        return evenNumbers;
    }
}
//console.log(evenNumbers);
 // dovrebbe restituire [2,4,6,8]