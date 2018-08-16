// Variables
let clicker = $('#click'); // Bouton principal
let clickerValue = 1; // Valeur du click
let contScore = $('.cont_score'); // Div du score
let multi = $('#multiplier') // Bouton +1
let multiplicateur = 1; // Valeur du bouton +1
let score = 0; // Score
// Fonctions
let afficheScore = () =>{ // Affiche le score
    contScore.html(score);
} 














// Bouton principale
clicker.click(()=>{
    score = score + (clickerValue * multiplicateur);
    afficheScore();
    
})

// Bouton +1
multi.click(()=>{
    multiplicateur++;
    console.log(multiplicateur)
})