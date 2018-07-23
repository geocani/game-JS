let tabMots = ["bonjour","salut","coucou"] // VARIABLE / tableau des mots à trouver
let random = (min, max) =>{ // FONCTION / retourne un nombre aléatoire 
    return Math.floor(Math.random() * (max - min) + min);
}
let motSecret = tabMots[random(0, 3)]; // VARIABLE / mot à trouver
let nbLettres = motSecret.length; // VARIABLE / nombre de lettres à trouver
console.log("Mot a trouver -> " + motSecret)
let tabTentative = [];
for (let i = 0; i < motSecret.length; i++){
    tabTentative[i] = "_";
}
let lettreManquantes = motSecret.length;
let tentative = 0; // VARIABLE / nombre de tentative du joueur 
// let checkLettre = motSecret.indexOf(essai) // VARIABLE / vérifie si la lettre est dans le mot / retourne l'index de la lettre ou -1

while (lettreManquantes > 0) { //  BOUCLE
    alert(tabTentative.join(" ")); // .join() / fusionne les element du tab dans une string (donnee separee par ())
    // VERIFICATION
    let proposition = prompt("devine une lettre."); // VARIABLE / lettre proposée par le joueur
    if (proposition === null) { // CONDITION 
        break; // Quitter la boucle
    }
    else if (proposition.length !== 1) {
        alert("tu ne dois saisir qu'une seul lettre.");
    }else{
        // mettre a jour l'état du jeu
        for (let j = 0; j < motSecret.length; j++) {
            if (motSecret[j] === proposition) {
                tabTentative[j] = proposition;
                lettreManquantes--;
                tentative++;
                console.log(tentative)
            }
            if(lettreManquantes == 0) {
                alert('gagné')
            }
        }
    }
}