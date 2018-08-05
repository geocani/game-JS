let tabMots = ["bonjour","salut","coucou"] // VARIABLE / tableau des mots à trouver
let random = (min, max) =>{ // FONCTION / retourne un nombre aléatoire 
    return Math.floor(Math.random() * (max - min) + min);
}
let motSecret = tabMots[random(0, 3)]; // VARIABLE / mot à trouver
let nbLettres = motSecret.length; // VARIABLE / nombre de lettres à trouver
console.log("Mot a trouver -> " + motSecret)
console.log("Nb lettres a trouver -> " + nbLettres)
let tableauReponses = []; // VARIABLE / tableau des réponses
for (let i = 0; i < motSecret.length; i++){
    tableauReponses[i] = "_";
}
let tentative = 0; // VARIABLE / nombre de tentative du joueur 
console.log(tableauReponses)

while (nbLettres > 0) {
    // progression du joueur
    alert(tableauReponses.join(" "));
    // recupere un essai du joueur
    let reponse = prompt("une lettre")

    if (reponse === null) {
        break; // quitter la boucle
    }
    else if (reponse.length !== 1){
        alert('une seul lettre');
    }
    else{
        // mettre a jour l'état de la partie
        for (let j = 0; j < motSecret.length; j++){
            if (motSecret[j] === reponse) {
                tableauReponses[j] = reponse;
                nbLettres--;
            }
        }
    }
}

alert(tableauReponses.join(" "));
alert("bravo" + motSecret);
