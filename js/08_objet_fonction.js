/* Les Objects*/ 

var contacts = {
    // Indice: Valeur
    "prenom": "Layla",
    "nom": "LAHCENE",
    "yeux": "vert"
};

console.log(contacts);
// pour cibler une valeur dans l'objet je l'appelle avec son Indice
console.log(contacts.prenom);

// pour avoir plusieurs contacts je stocke plusieurs objets dans un tableau

// var vlg18 = [
    // "Arnaud",
    // "Mohamed",
    // "Elies",
    // {
        // "Indice": Valeur,
        // "prenom": "Layla",
        // "yeux": "marron"
    // },
    // {
        // "prenom": "Luc",
        // "yeux": "vert"
    // },
    // {
        // "prenom": "Jean-Philippe",
        // "yeux": "bleu"
    // }
// ];
// console.log(vlg18);
// console.log(vlg18 [3]);
// console.log(vlg18[3].yeux);

// var nbVlg2018 = vlg18.length;
// console.log("Nombre d'amis VLG 2018 " + nbVlg2018 + " personnes");

// parcourir un tableau
// var dejeuner = ['salade', 'tomates', 'oignons', 'pain', 'poulet', 'barbecue', 'cesar'
// ];
// console.log(dejeuner[6]);

// for(menu = 0; menu <= dejeuner.length;
    // menu++){
    // console.log("Aliment n° " + menu);
    //  console.log(dejeuner[menu]);
    //  console.log('*-*-*');   
    // }

    
// dans la console faire > for(i = 0; i <= dejeuner.length; i++);

// > var compteur= 0;
// > while(compteur <= dejeuner.length){
    // > ... code / instructions ...
    // > compteur++;
// }

/**
* EXERCICE
*
* Essayer de trouver comment parcourir un tableau contenant des objets
*
*/
// var stagiaires = [
//     {
//         "prenom": "Elies",
//         "code": "JavaScript"

//     },
//     {
//         "prenom": "Mohamed",
//         "code": "Html"
//     },
//     {
//         "prenom": "Jhordan",
//         "code": "Css"
//     },
//     {
//         "prenom": "Alpha",
//         "code": "Video"
//     },
//     {
//         "prenom": "Jean-Philippe",
//         "code": "Css"
//     },
//     {
//         "prenom": "Luc",
//         "code": "POO"
//     },
//     {
//         "prenom": "Layla",
//         "code": "PHP"
//     },
//     {
//         "prenom": "Sabuj",
//         "code": "Angular"
//     },
//     {
//         "prenom": "Arnaud",
//         "code": "Symfony"
//     },];

// for(etudiants = 0; etudiants <= stagiaires.length;
//     etudiants++){
//         console.log("Stagiaires " + etudiants)
//         console.log(stagiaires[etudiants].prenom)
//         console.log("adore " + stagiaires[etudiants].code)

//     }

/*
*Fonctions
*/ 
// une fonction est une série d'instructions contenues dans des { accolades}
// elle porte le nom que je lui donne 
// à chaque fois que j'en ai besoin je l'APPELLE
// je déclare une fonction avec le mot-clé function

// une fonction anonyme ne prend aucun paramètre
    //  =>elle n'utilisera pas d'information personnalisée
    function HelloTous(){
        alert("Bonjour à tous");
    }
// pour exécuter ma fonction il faut l'appeler :
HelloTous(); 

// une fonction avec des paramètres ou arguments
function pause(prenom){
    document.write("<h2>" + prenom + " part en pause !</h2>");
}
// j'appelle ma fonction avec un paramètre
pause("katty");

function ecrit(e){
    document.write("<h3>" + e + "</h3>");
}
ecrit("= mc2");

/*
*EXERCICE - calculette
*Ecrire une fonction qui additionne 2 chiffres passés en paramètres
*le mot-clé return permet de retourner le résultat des instructions codées
*/


function calculette(nb1, nb2){
    var resultat = nb1 + nb2;
    document.write("<h2>le résultat est : " + resultat + "</h2>");
    return resultat;
}

calculette(888, 999);
calculette(50, 10);