/* 1 - La boucle FOR */
/* 2 - La boucle WHILE */  

/* 1 - La boucle FOR */
// for (var i = 1; i <= 10 ; i+=2){
//     document.write("<h2>Instruction répétée : " + i + "</h2>");
// }
/* 
=> Syntaxe : 3 arguments
1 - Initialise un compteur à partir de combien je compte ( par défaut la variable est 'i')
2 - La condition à vérifier
3 - Le 'pas' d'incrémentation (généralement +1 à chaque tour ou i++)

tant_que ( compteur; condition_true; incrementation){
    / ...code... /
}
*/


/* 2 - La boucle WHILE */
//  var j = 1;
//    while (j <= 10){
//       document.write("<h2>Instruction répétée : " + j + "</h2>");
//       j++ // j = j + 1; ou j+=1;
//  }

/* Syntaxe

compteur;
tant ( condition_true ){
    / ... instruction(s) à répéter ... /
    incrementation; 
}

*/
/* -------------------------------

           EXERCIC
j'ai 1000€ sur mon compte

chaque mois j'ajoute 50€

combien de temps me faut-il pour avoir 2000€ sur mon compte ?

-------------------------------- */
/*  boucle FOR */ 
//   for (var i = 1000; i <= 2000 ; i+=50){
//      document.write("<h2>Instruction répétée : " + i +"</h2>");
//   }

/*  boucle WHILE */
// var monCompte = 1000;
// var temps = 0; // compteur de tours de boucle

// while(monCompte < 2000){
//     monCompte += 50; // monCompte + 50;
//     temps++; // si je l'oublie => boucle infinie /!\
// }
// document.write("<h2>Fortune sur mon compte : " + monCompte + "</h2>");
// document.write("<h2>J'aurai 2000 euros dans : " + temps + " mois</h2>");
// document.write("<h2>J'aurai 2000 euros dans : " + (temps / 12) + " années</h2>");

/* boucle FOR */

// var mois = 1;
// var tps = 0;
//   for (var i = 1000; i < 2000; i += 50) {
//     document.write("<h2>Compte crédité de : " + i + "€ / mois " + mois + "</h2>");
//     mois++;
// }
// document.write("<h2>Mon compte est crédité de 2000€ sur : " + mois + " mois</h2>");


// var tps = 0;
// for (var i = 1000; i < 2000; i += 50) {
//     document.write("<h2>Compte crédité de : " + i + "</h2>");
//     tps++;
// }
// document.write("<h2>J'aurai 2000€ dans : " + tps + " mois</h2>");

// document.write("<hr>");

/* Afficher un SELECT qui va de 1900 à 2020 */
// version longue
// document.write("<select> ");
// document.write("<option>1900</option>");
// document.write("<option>1901</option>");
// document.write("<option>1902</option>");
// document.write("<option>.....</option>");
// document.write("<option>2020</option>");
// document.write("</select>");

// document.write("<hr>");

// version courte
// document.write("<select> ");
// for (var i = 1900; i <= 2020; i++){
//     document.write("<option>" + i + "</option>");
// }
// document.write("</select>");

// <p>Ecrivez un programme qui invite l'utilisateur à saisir un nombre jusqu'à ce que ce nombre soit supérieur à 50 ET inférieur à 100.</p>    <p>Réfléchissez bien à la condition de votre boucle : quel est l'inverse de "compris entre 50 et 100" ?</p>

var nombre = 0;
while (nombre < 50 || nombre > 100) {
    nombre = parseInt(prompt("Entrez un nombre entre 50 et 100"));
}
