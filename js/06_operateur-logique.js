/* 1 - Le ET : && ou AND */
/* 2 - Le OU : || ou OR ( | pipe => alt gr + 6) */
/* 3 - Le ! (contraire de) */

/* 1 - Le ET : && ou AND */
/* 
=> Si je cumule plusieurs conditions
*/
var prenom = "mila";
var prenomlog = prompt('prénom');
var mdp = 123;
var mdplog = parseInt(prompt('mdp'));

if ((prenom === prenomlog) && (mdp === mdplog)){
    /* ... code si tout est vrai */
}

/* Table des && */
/* 
if (A && B*) {...}

=> si A est Faux et B est Vrai => false
=> si A est Vrai et B est Faux => false
=> si A est Faux et B est Faux => false
=> si A est Vrai et B est Vrai => true

*/


/* 2 - Le OU : || ou OR ( | pipe => alt gr + 6) */

/* 
=> Si au moins une condition est vraie
*/
/* Table des || */
/* 
if (A || B*) {...}

=> si A est Faux et B est Vrai => true
=> si A est Vrai et B est Faux => true
=> si A est Faux et B est Faux => false
=> si A est Vrai et B est Vrai => true

*/

/* 3 - Le ! (contraire de) */

var userlog = true;

if (userlog == false){
    /* ... code si user non loggé */ 
}

if (!userlog){
    /* ... code si user non loggé */
}