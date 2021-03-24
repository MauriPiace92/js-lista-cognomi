// 1. chiedi all’utente il cognome
// 2. inseriscilo in un array con altri cognomi: 
// 3. stampa la lista ordinata alfabeticamente
// 4. scrivi anche la posizione "umana" (partendo da 1)
//    della lista in cui il nuovo utente si trova (facciamo questo in 2 versioni: col ciclo for e col while)


// chiedi all'utente il cognome:
var cognomeUtente= prompt("Dimmi il tuo Cognome: ");
var cognomeUtentePosition; //metterò la posizione del mio utente nella lista.

// inserisco il cognomeUtente in un array esistente:
var mioArray = ["rossi", "micheli", "agostini","nisi" , "volponi" , "montani", "piacenza"];

mioArray.push(cognomeUtente);

console.log(mioArray);

// Stampo la lista ordinata alfabeticamente
mioArray.sort();

console.log(mioArray);

// Scrivere l'array in posizione umana (da 1):
// for version:

// for(var i = 0 ; i < mioArray.length ; i++ ){
//     var counter = mioArray[i];
//     document.getElementById('lista-cognomi').innerHTML+= '<li>'+ counter + '</li>';

//     if (cognomeUtente == counter){
//         cognomeUtentePosition = i + 1;
//     }
//     console.log(cognomeUtentePosition);
//     document.getElementById("posizione-lista").innerHTML = "La Tua posizione nella Lista è: "+ cognomeUtentePosition;
// }


// while version:
var i=0;
while(i < mioArray.length){
    var counter = mioArray[i];
    document.getElementById('lista-cognomi').innerHTML+= '<li>'+ counter + '</li>';

    if (cognomeUtente == counter){
                cognomeUtentePosition = i + 1;
            }
            console.log(cognomeUtentePosition);
            document.getElementById("posizione-lista").innerHTML = "La Tua posizione nella Lista è: "+ cognomeUtentePosition;
    
    i++;
}




