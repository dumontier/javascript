// Nombre de jours du mois
// Ecrivez un programme nombre_jours.js qui fait saisir à l'utilisateur le numéro d'un mois(nombre entre 1 et 12) en réponse
// on informe l'utilisateur du nombre de jours du mois qu'il a saisi.

// On ne tiendra pas compte des années bissextiles(février aura toujours 28 jours).

// Les erreurs de saisie doivent être gérées.


        //     Résultat :1


// var date = parseInt(prompt('Entrez la date du mois en chiffre')); 

// if (date == 1) {
//     alert('Janvier 31 jours');    
// }else  if (date == 2) {
//         alert('Février 28 jours');
// }else if (date == 3) {
//     alert('Mars 31 jours');
// }else if (date == 4) {
//     alert('Avril 30 jours');
// } else if (date == 5) {
//     alert('Mai 31 jours');
// } else if (date == 6) {
//     alert('Juin 30 jours');
// } else if (date == 7) {
//     alert('Juillet 31 jours');
// } else if (date == 8) {
//     alert('Aout 31 jours');
// } else if (date == 9) {
//     alert('Septembre 30 jours');
// } else if (date == 10) {
//     alert('Octobre 31 jours');
// } else if (date == 11) {
//     alert('Novembre 30 jours');
// } else if (date == 12) {
//     alert('Décembre 31 jours');
// } else {
//     alert('erreur')
// }

        // Résultat de l'exercice

var mois = parseInt(prompt("Quel mois on est ?", "<saisis un chiffre entre 1 et 12>"));
if (mois === 2){
    document.write("Le mois n° " + mois + " a 28 jours");
} else if ((mois === 4) || (mois === 6) || (mois === 9) || (mois === 11)){
    document.write("Le mois n° " + mois + " a 30 jours");
} else if ((mois === 1) || (mois === 3) || (mois === 5) || (mois === 7) || (mois === 8) || (mois === 10) || (mois === 12)) {
    document.write("Le mois n° " + mois + " a 31 jours");
} else {
    document.write("Le mois n° " + mois + "est inconnu");
}

