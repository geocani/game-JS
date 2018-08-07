let secondes = 60;
let random = (min, max) =>{ // FONCTION / retourne un nombre aléatoire 
    return Math.floor(Math.random() * (max - min) + min)}
let paris = null;

$('document').ready(()=>{ // page chargée
    
    $('#commencer').click(()=>{ // Quand cliqué sur START

        // $('.indice').html(''); // réactualiser notification
        secondes = 60 // réactualiser chrono
        $('#nombre').val(""); // reactualiser champ
        let code = random(0, 21); // Générer un code secret
        console.log(code)
        $('#paris').css({"visibility" : "visible", "opacity" : "1"}) // AFFICHER le champ
        let chrono = setInterval(()=>{ // setInterval -> une action tout les x temps
            if(secondes == 0) { // SI chrono terminé
                clearInterval(chrono) // Stop chrono
                $('#paris').css({"visibility" : "hidden", "opacity" : "0"}) // CACHER le champ
                $('.indice').html('Perdu!'); // AFFICHER perdu
            }
            else { // SINON
                secondes--; // Décrémenter chrono
                $('.chrono').html(secondes); // AFFICHER seconde
            }
        }, 1000); // MILI-SECONDE 




        $('#paris').submit((event)=>{ // Qaund le form est ENVOYER (enviter rechargement de la page) 
            event.preventDefault(); // Désactive les evenement par défaut du form
            paris = $('#nombre').val(); // Récuperer la proposition.
    
            if (paris == code) { // SI proposition = code
                clearInterval(chrono); // Stop chrono
                $('.indice').html('Gagné!'); // AFFICHER gagné
            }
            else if (paris < code) {
                $('.indice').html('C est plus!'); // AFFICHER plus
            }
            else {
                $('.indice').html('C est moins!'); // AFFICHER moins
            }

            $('#nombre').val(""); // reactualise champ
          
        })
    });

    
});