// Variables
let clicker = $('#click'); // Bouton principal
let clickerValue = 1; // Valeur du click
let contScore = $('.cont_score'); // Div du score
let multi = $('#multiplier') // Bouton +1
let multiplicateur = 1; // Valeur du bouton +1
let prixPlus1 = 20;
let score = 0; // Score
let secondes = 20;
// Fonctions 
let afficheScore = () =>{ // Affiche le score
    contScore.html("<h1>" +score+ "</h1>");
} 

let affichePrix = () => {
    $('.bonus_un').html(prixPlus1+ ' -> ' + (prixPlus1+prixPlus1))
}

// INITIATISATION
affichePrix()
console.log("click = " +clickerValue)
console.log("prix bonnus = " +prixPlus1)




// Bouton principale
clicker.click(()=>{
    score = score + (clickerValue * multiplicateur);
    afficheScore();
})

// Bouton +1
multi.click(()=>{
    if(score < prixPlus1){
        alert('pas assez')
    }else{
        multiplicateur++;
        score = score - prixPlus1;
        afficheScore();
        prixPlus1 = prixPlus1 + prixPlus1;
        affichePrix()
        // LOG
        console.log('click = ' +multiplicateur)
        console.log('prix bonus = ' +prixPlus1)
    }
})

// Bouton autoplay
let chrono = () =>{
    setInterval(()=>{ // setInterval -> une action tout les x temps
        
        if(secondes == 0) { // SI chrono terminé
            clearInterval(chrono) // Stop chrono
        }
        else { // SINON
            secondes--; // Décrémenter chrono
        }
    }, 1000); // MILI-SECONDE 
}










$('#autoPlay').click(()=>{ 

    chrono()


    setInterval(()=>{ // Score +1 toute les secondes
        score++; 
        console.log(secondes)
    }, 1000);
})


