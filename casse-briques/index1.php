<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://fonts.googleapis.com/css?family=Rubik+Mono+One" rel="stylesheet">
    <link rel="stylesheet" href="assets/css/style.css">
    <title>Casse-Briques</title>
</head>
<body>

    <div class="cont">
        <div class="cont-titre">
            <h1>CASSE BRIQUES</h1>
        </div>
        <div class="can">
            <canvas id="plateau" width="480" height="320"></canvas>
        </div>
        <div class="btn-play">
            <button onclick="setInterval(draw, 10)">START</button>
        </div>
    </div>


<script>
// DECLARATION VARIABLES
let vies = 3;
let score = 0;
// BALLE ET POSITION
let canvas = document.getElementById("plateau");
let context = canvas.getContext("2d"); // context - stocke le contexte du rendu 2d - peinceau
let x = canvas.width / 2; // Dessinfition axe X 
let y = canvas.height - 30; // Dessinfition axe y
let dx = 2; // Position x pour la prochaine image
let dy = -2; // Position y pour la prochaine image
let balleRayon = 10; // Rayon de la balle
let color = context.fillStyle
// RAQUETTE ET POSITION
let raquetteWidth = 75; // Largeur
let raquetteHeight = 10; // Hauteur
let raquetteX = (canvas.width - raquetteWidth) / 2; // Position X
let pressRight = false; // Active ou desative la fleche gauche
let pressLeft = false; // Active ou desative la fleche droite 
// BRIQUES ET POSITION
let briqRowCunt = 3; // Nb rangées
let briqColCount = 5; // nb colonnes
let briqWidth = 75; // Largeur
let briqHeight = 20; // Hauteur
let briqPadding = 10; // Largeur
let briqPaddingTop = 30; // padding bord haut
let briqPaddingLeft = 30; // Padding gauche
let briques = []; // Enregistre les briques dans un tab bidimentionnel
for(let c=0; c < briqColCount; c++) {
    briques[c] = [];
    for(let r=0; r < briqRowCunt; r++) {
        briques[c][r] = { x: 0, y: 0, status: 1 }; // 1=brique affichée 2=brique cachée
    }
}

// FONCTIONS

// VERIFIE L ACTION DES TOUCHES DU CLAVIER ET DE LA SOURIS
function mouseMoveHandler(e){
    let relativeX = e.clientX - canvas.offsetLeft;
    if(relativeX > 0 && relativeX < canvas.width){
        raquetteX = relativeX - raquetteWidth / 2;
    }
}
function keyDownHandler(e){ 
    if(e.keyCode == 39){ // Si la fleche gauche est enfoncé
        pressLeft = true; // Active le mouvement
    }
    else if(e.keyCode == 37){ // Si la fleche droite est enfoncé
        pressRight = true; // Active le mouvement
    }
}
function keyUpHandler(e){
    if(e.keyCode == 39){ // Si la fleche gauche est relachée
        pressLeft = false;
    }
    else if(e.keyCode == 37){ // Si la fleche droite est relachée
        pressRight = false;
    }
}
// SCORE - AFFICHE LE SCORE
function afficheScore(){
    context.font = "16px Arial";
    context.fillStyle = "black";
    context.fillText("Score: " + score, 8, 20); // 8, 20 Coordonnées
}
// VIES - AFFICHE LES VIES
function afficheVies(){
    context.font = "16px Arial";
    context.fillStyle = "black";
    context.fillText("Vies: " + vies, canvas.width - 65, 20); // 8, 20 Coordonnées
}
// STYLE RAQUETTE
function raquette(){
    context.beginPath()
    context.rect(raquetteX, canvas.height - raquetteHeight, raquetteWidth, raquetteHeight);
    context.fillStyle = "#00a0f0";
    context.fill();
    context.closePath()
}
// STYLE DE LA BALLE
function ball(){
    context.beginPath();
    context.arc(x, y, balleRayon, 0, Math.PI*2);
    context.fillStyle = "red";
    context.fill();
    context.closePath();
}
// AFFICHE LES BRIQUES
function briq(){
    for(let c=0; c<briqColCount; c++){ // Chaque colonne
        for( r=0; r<briqRowCunt; r++){ // Chaque rangée
            if(briques[c][r].status == 1){ // Si la brique n'a pas été touché
                let briqX = (c*(briqWidth+briqPadding))+briqPaddingLeft;
                let briqY = (r*(briqHeight+briqPadding))+briqPaddingTop;
                briques[c][r].x = briqX;
                briques[c][r].y = briqY;
                context.beginPath();
                context.rect(briqX, briqY, briqWidth, briqHeight);
                context.fillStyle = "#c9be29";
                context.fill();
                context.closePath();
            }
        }
    }
}
// DETECTE SI COLLISION - PARCOURT COOR BRIQUES ET COMPARE AVEC COOR BALLE  
function briqCollision(){
    for(let c=0; c<briqColCount; c++){
        for(let r=0; r<briqRowCunt; r++){
            let b = briques[c][r]; // Coordonnées brique de l'ittération en cours
            if(b.status == 1){ // Si la brique est visible
                if(x > b.x && x < b.x+briqWidth && y > b.y && y < b.y+briqHeight){ // Si brique touchée
                    dy = -dy; // Inverser trajectoir
                    b.status = 0; // Cacher la brique
                    score++;
                    if(score == briqRowCunt * briqColCount){
                        alert("Gagné !!");
                        document.location.reload();
                    }
                }
            }
        }
    }
}
// FONCTION PRINCIPALE
function draw(){
    context.clearRect(0, 0, canvas.width, canvas.height); // Efface contenu selection - X-sup-gauche, Y-sup-gauche, X-inf-droit, Y-inf-droit
    briq(); 
    ball(); 
    raquette(); 
    afficheVies()
    afficheScore();
    briqCollision()
    x += dx; // Reassigne x pour la prochaine image
    y += dy; // Reassigne y pour la prochaine image
    if(x + dx > canvas.width - balleRayon || x + dx < balleRayon){ // Si le bord de la balle touche la gauche OU la droite
        dx = -dx; // Inverser sa trajectoir
    }
    if(y + dy < balleRayon) { // Si balle touche le bas
        dy = -dy;
    } else if(y + dy > canvas.height - balleRayon) {
        if( x > raquetteX && x < raquetteX + raquetteWidth) { // Si touche la raquette
            dy = -dy;
        }
        else{ // Si touche le bas
            vies--;
            if(vies == 0){ // Si vie à 0 perdu
                alert("Perdu");
                document.location.reload();
            }else{
                x = canvas.width/2;
                y = canvas.height-30;
                dx = 2;
                dy = -2;
                raquetteX = (canvas.width-raquetteWidth)/2;
            }
        }
    }
    if(y + dy > canvas.height - balleRayon || y + dy < balleRayon){ // Si le bord de la balle touche le bas OU le haut
        dy = -dy; // Inverser sa trajectoir
    }
    // Deplacement raquette
    if(pressLeft && raquetteX < canvas.width - raquetteWidth) { // Verifie colision bord gauche raquette
    raquetteX += 7;
    }
    else if(pressRight && raquetteX > s0) { // Verifie colision bord gauche raquette
        raquetteX -= 7;
    }
}

// APPEL FONCTION
document.addEventListener("mousemove", mouseMoveHandler, false); // mouseMoveHandler() déclanché au mouvement de la souris
document.addEventListener("keydown", keyDownHandler, false); // KeyWownHandler() declanché quand une touche est enfoncée
document.addEventListener("keyup", keyUpHandler, false); // keyUpHandler() déclanché quand touche est relachée




</script>


</body>
</html>