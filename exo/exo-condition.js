alert("Bonjour");

var age = 18;
var age = parseInt(prompt("Quel âge as tu"));

if (age < 18) {
    alert("Tu n'es pas majeur");
    document.location.href = "http://www.darty.com"
} else if ( age > 18) {
    alert("Bienvenue");
}
else {
    alert("Bravo tu viens d'être majeur !");
}