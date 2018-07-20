//alert('test');

/* -- 1 - Structure de base IF */
/* -- 2 - Structure IF ... ELSE  */
/* -- 3 - structure IF ... ELSE IF ... ELSE */

/* -- 1 - Structure de base IF */
if (true) { // par défaut le IF vérifie si la condition est VRAIE (true)
/* ... code ... */
}

var nb1 = 99;
/* - Si la condition est fausse (false) elle ne s'affiche pas ( pas exécutée) */
if (nb1 <100) {
    console.log(nb1 + ' est plus petit que 100');
}

/* -- 2 - Structure IF ... ELSE */
if (true) { // par défaut le IF vérifie si la condition est VRAIE (true)
    /* ... IF code si condition VRAIE ... */

} else {
    /* ... ELSE code si condition FAUSSE ... */
}

var nb2 = 599;
if (nb2 < 500) {
    console.log(nb2 + ' est plus petit que 500');    
} else {
    console.log(nb2 + ' est plus grand que 500');
}

/* -- 3 - structure IF ... ELSE IF ... ELSE */
if (true) { // par défaut le IF vérifie si la condition est VRAIE (true)
    /* ... IF code si condition 1 VRAIE ... */

} else if (true){
    /* ... ELSE IF code si condition 1 est FAUSSE et la 2 est VRAIE ... */

} else {
    /* ... ELSE code si LES conditions 1 et 2 sont FAUSSES ... */
}

var nb4 =50;
if (nb4 < 50) {
    console.log(nb4 + ' plus petit que 50');
} else if (nb4 > 50) {
    console.log(nb4 + ' plus grand que 50');
} else {
    console.log(nb4 + ' est égal ' + nb4);
}

/* -- EXO -- */
