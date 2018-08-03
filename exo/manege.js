// Tournez manège

//     Ecrivez un programme manege.js qui fait faire 10 tours de manège en affichant un message à chaque tour.

//         C'est le tour de manège n°1

//         C'est le tour de manège n°2

//         C'est le tour de manège n°3

//         C'est le tour de manège n°4

//         C'est le tour de manège n°5

//     Ensuite, améliorez votre programme pour que le nombre de tours soit saisi par l'utilisateur.

//     Testez avec des compteurs initialisés à d'autres valeurs que Zéro dans vos codes.


//         Résultat

var tr = parseInt(prompt("Combien de tour(s) ?", "<saisis un chiffre>"));
for (var i = 1; i < tr; i += 1) {
     document.write("<h2>C'est le tour de manège n°: " + i + "</h2>");
}

/* 1 -- boucle For */
// for(var i = 1; i <= 10; i++){
//     document.write("<h2>C'est le tour de manège n°: " + i + "</h2>");
// }
/* 1 -- boucle WHILE */
// var manege = 0;
// while(manege < 10){
//     manege++;
//     document.write("<h2>Tour de manège n°: " + manege + "</h2>")
// }  

/* 2 -- boucle For */

var question = parseInt(prompt("Combien de tour tu fais ?"));
for (var tour = 1; tour <= question; tour++){
    document.write("tour de manège n° " + tour + "<br>");
}
document.write("<hr>");

/* 2 -- boucle WHILE */

var combien = parseInt(prompt("Combien de tours ?"));
var compteur = 1;
while (compteur <= combien) {
    document.write("tu as fait " + compteur + " tours de manège<br>");
    compteur++;
}
document.write("<hr>");