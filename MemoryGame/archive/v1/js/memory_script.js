// VARIABLES

let nbClics = 0; // Autorise deux clics, apres le 2e réinitialisation a 0
let mini1 = ""; // Nom de la 1e carte cliqué - Pour comparer les deux img
let mini2 = ""; // nom de la 2e carte cliqué
let case1 = ""; // nom de la 1e case cliqué - Pour éviter le double clic ?? Pourquoi pas tab ?? 
let case2 = ""; // nom de la 2e case cliqué
let imgOk = 0; // incrémenté de 2 à chaque bonne réponse
let nbErreur = 0; // Restitue le score au cours de la partie - si 16 paires trouvées )-> fin de partie
let score = 0;
let depart = false; // Si les clics sont pris en compte - oui ou non comptabilise les clics
let tempsDebut = new Date().getTime(); // Sauvegarde l'heure a laquel le jeu a démarré (milliseconde) - Pour chrono ?? Pourquoi pas chrono ??

// FONCTIONS

let attente = setTimeout(function(){ // Parcoure toutes les <img> pour retourner les cartes visiblent - Se déclange au chargement de la page
    for(let i=0; i<16 ; i++){ // Pour chaque img
        document.getElementById('img' + i).src = "assets/img/back.png"; // Change la source de l'image
    }
    depart = true; // Quand toute les carte sont retournée, comptabiliser les clics
}, 4000); // La fonction se lance apres 4s - empas avant retournement des cartes

function generation()
{
    var nb_alea; // Stock le nombre aléatoire à chaque passage de la boucle
    var nb_img=""; 
    var test = true; // Vérifie si le nb aléa a déja été généré TRUE par défaut -> force une nouvelle génération.
    var chaine = "";// stockage des nb aléatoire déja généré.
    
    for (var i=0;i<16;i++) // Boucle 16 fois
    {
        while (test==true)
        {
            nb_alea = Math.floor(Math.random()*16) + 1; // Génère un nombre aléatoire
            if(chaine.indexOf("-" + nb_alea + "-")>-1) // Si le nombre existe dans la chaine de test
                nb_alea = Math.floor(Math.random()*16) + 1; // Génère un nouveau nombre
            else
            {
                nb_img = Math.floor((nb_alea+1)/2); //8 paires pour 16 places ==> 2 générations différentes par image
                // Selectionne une carte et génère une image -> au click lance la fonction VERIFIER() ?? Pourquoi pas modif css ??                  onClick='verifier(\"img" + i + "\",                          \"mini" + nb_img + "\")' alt='' />";
                document.getElementById('case' + i).innerHTML = "<img style='cursor:pointer;' id='img" + i + "' src='assets/img/" + nb_img + ".png' onClick='verifier(\"img" + i + "\"," + nb_img + "\")' alt='' />";
                chaine += "-" + nb_alea + "-"; // Ajoute le Nb dans la chaine de test
                test=false;
            }			
        }
        test=true;			
    }
}
// selectionne l'image cliqué et pas son double
function verifier(limg, source){ // LIMG=ID ?? l'appeler ID !!! - de l'image cliqué // SOURCE=NOM de l'image cliqué - Double clic -> meme image mais pas meme case
    if (depart == true){ // Si les cartes sont retournées
        document.getElementById(limg).src = "assets/img/" + source + ".png"; // Selectionne l'img en cours par son ID (LIMG) // Reconstruit la source
        
    }
}

// APPEL DE FONCTION

generation();