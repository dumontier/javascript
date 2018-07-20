// alert('bonjour');

// 2 slashes pour un commentaire sur une ligne

/*
commentaire
sur
plusieurs
lignes
*/

/* (shift + alt + a)
Le DOM (document object Model) est un programme interne au navigateur qui fait en sorte que
    - chaque balise HTML
    - chaque attribut des balises (class, id, name ...)
    - chaque événement (clic, double-clic, survol de la souris ..)
deviennent des objets que l'on peut cibler, stocker dans une variable et manipuler
*/

/*
    1. L'objet WINDOW en JS => Le navigateur
    - window est le seul objet du DOM qui peut s'utiliser implicitement ( sans s'écrire )
    2. L'objet DOCUMENT en JS => La page HTML
    - document.getElementBy...
*/
/* =========== 1- Les variables ========= */
/* =========== 2- Les type de données ======== */
/* =========== 3- Les Constantes ======== */

/* =========== 1- Les variables ========= */
/* -- 1 - Déclarer une variable */
// var maVariable;

/* -- 2 - Affecter une valeur ( stocker une valeur ) */
// maVariable = "fleur";
// var coucou = "bonjour"; // déclarer + affecter

/* -- 3 - Une instruction se termine TOUJOURS par un point-virgule (;) mais je peux écrire plusieurs instructions sur la même ligne */
/*
instruction_1;
instruction_2; instruction_3; instruction_4;
*/
/* -- 4 - Afficher une boite de dialogue */

// window.alert('Hello World');
// alert('Hello World');

/* -- 5 - Afficher dans la console /!\ très important pour débuger son code */
// console.log('Mila');

/* -- 6 - Afficher du texte dans la page web */
// document.write('VLG 2018-19 adore le JavaScript !!');

/* -- 7 - Demander une info à l'internaute */
// window.prompt('On mange quand ?');
// prompt('On mange quoi ?');

// var mangerOu = window.prompt('On mange ou ?');
// var mangerQuoi = prompt('On mange quoi ?');
// console.log(mangerOu);
// console.log(mangerQuoi);

/* -- 8 - Le JS est sensible à la casse (case sensitive) */
// mavariable =/= maVariable
// monPrenom =/= mon_prenom
// mon_nom =/= mon-nom

// Ecriture camelCase
// Ecriture snake_case

/* -- 9 - Une variable 
    - Ne peut pas commencer par un chiffre 
    - Ne doit contenir que des caractères alphanumériques ( lettres & chiffres - pas de caractères spéciaux type accents ou & ou + par ex 
    - Ne doit pas être un mot réservé (var, for ;;; des élément natifs du JS)
    https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Mots_r%C3%A9serv%C3%A9s
*/

/* -- 10 - Une variable peut être déclarée 
    - De façon explicite : var manger = "oui";
    - Ou implicite : quand = "13 heures"; 
*/

/* =========== 2- Les type de données ======== */

/* --1 - Une chaine de caractères ( string) */
// var les_meilleurs = "VLG"; ou var les_meilleurs = 'VLG';
// var les_meilleurs = "2018"; ou var les_meilleurs = '2018';

/*  -- 2 - Un nombre entier (integer ou int) */
// var les_meilleurs = 2018;
 
/* -- 3 - Un nombre décimal (float) */
/*
var nb_a_virgule = -5.32;
/!\ s'écrit avec un point '.'
/!\ tous les nombres peuvent être soit positifs ou négatifs */

/* -- 4 - Un booléen ( boolean) : VRAI/FAUT  ( TRUE/FALSE) */
var vrai = true;
var faux = false;

/* -- 5 - Un tableau (array) */
var gateau = ['farine', 'oeuf', 'chocolat', 4, true];

/* --6 - Un objet */
var voiture = {
     marque: 'porsche',
    modele: 911,
    couleur: 'gris',
    vitesse: true,
    options: ['radio', 'abs', 'freins', 4]
}

/* =========== 3- Les Constantes ======== */    

/* -- 1 - La constante on la déclare avec le mot clé CONST 
ses particularités :
    - Elle est accessible uniquement en lecture
    - Donc une fois déclarée et une valeur affectée elle ne peut plus changer
    - Elle ne peut être déclarée qu'une fois dans le même script
    - Par convention on écrit son nom en majuscules 
*/

const PAYS = 'france';

/* ========= 4 - la concaténation ========= */

var annee = 2018;
var jo = 6;
var certificat_dev = "2019";

var calcul_1 = annee + jo;
console.log(cacul_1);
document.write("<hr>" + calcul_1 + "<br>");

var calcul_2 = annee + certificat_dev;
console.log(calcul_2);
document.write("<hr>" + calcul_2 + "<br>");

/* **** EXO ***** */
var DebutPhrase = "Aujourd'hui ";
var NbStagiaires = 12;
var SuitePhrase = " stagiaires";
var FinPhrase = "sont présents.";

// -- nous souhaitons afficher la phrase en un seul morceau avec la concaténation => à vos claviers ! /!\ attention aux espaces entre les mots
// (" ") Permet de créer un espace entre les mots accolés

var calcul_3 = DebutPhrase + NbStagiaires + SuitePhrase + " " + FinPhrase;
console.log(calcul_3);
document.write("<hr>" + calcul_3 + "<br>");

