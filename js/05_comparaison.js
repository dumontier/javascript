/* Comparaisons */

/* 1 - comparer la Valeur */
/* 2 - comparer la Valeur et le Type */
/* 3 - vérifier que 2 valeurs sont DIFFERENTES ..... en Valeur */
/* 4 - vérifier que 2 valeurs sont DIFFERENTES ..... en Valeur OU en Type */

/* 1 - comparer la Valeur */
// => Le signe == signifie 'égal' RAPPEL le = c'est de l'affectation (stockage de données dans une variable)
// var nb1 = 123;
// var nb2 = "123";
// console.log(nb1 == nb2); // => TRUE


/* 2 - comparer la Valeur et le Type */
// => Le signe === signifie 'STRICTEMENT égal'
// var nb1 = 123;
// var nb2 = "123";
// console.log(nb1 === nb2); // => FALSE


/* 3 - vérifier que 2 valeurs sont DIFFERENTES ..... en Valeur */
// => Le signe !=
// console.log(nb1 != nb2); // => FALSE


/* 4 - vérifier que 2 valeurs sont DIFFERENTES ..... en Valeur OU en Type */
// => Le signe !==
// console.log(nb1 !== nb2); // => TRUE

/* -------------------------------

           EXERCICE :

J'arrive sur un Espace Sécurisé au moyen du prénom et d'un mot de passe.
Je doit saisir mon prénom et mdp pour être authentifié sur le site (les infos sont en BDD, ici dans mes variables prenom et mdp).
En cas d'échec une alerte m'informe du problème.
Si tout se passe bien, un message de bienvenue m'accueille.

-------------------------------- */
// Résultat

var prenom = "eric";
var mdp = 123;
var prenomlog = prompt('Entrez votre prénom');

if (prenom === prenomlog){
    var mdplog = parseInt(prompt('Mot de passe'));   

    if (mdp === mdplog){
        alert('Bienvenue')
    }
    else {
        alert('erreur Mot de passe')
    }

} else {
    alert('erreur Prénom')
}