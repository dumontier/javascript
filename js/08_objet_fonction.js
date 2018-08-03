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
var stagiaires = [
    {
        "prenom": "Elies",
        "code": "JavaScript"

    },
    {
        "prenom": "Mohamed",
        "code": "Html"
    },
    {
        "prenom": "Jhordan",
        "code": "Css"
    },
    {
        "prenom": "Alpha",
        "code": "Video"
    },
    {
        "prenom": "Jean-Philippe",
        "code": "Css"
    },
    {
        "prenom": "Luc",
        "code": "POO"
    },
    {
        "prenom": "Layla",
        "code": "PHP"
    },
    {
        "prenom": "Sabuj",
        "code": "Angular"
    },
    {
        "prenom": "Arnaud",
        "code": "Symfony"
    },];

for(etudiants = 0; etudiants <= stagiaires.length;
    etudiants++){
        console.log("Stagiaires " + etudiants)
        console.log(stagiaires[etudiants].prenom)
        console.log("adore " + stagiaires[etudiants].code)

    }


