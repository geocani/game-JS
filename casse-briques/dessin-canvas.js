
let canvas = document.getElementById("plateau");
let ctx = canvas.getContext("2d"); // ctx - stocke le contexte du rendu 2d - peinceau

// CARRE - RECTANGLE
ctx.beginPath(); // Debut du chemin 
ctx.rect(20, 40, 50, 50); // Coor-sup-gauche-X, coor-sup-droite-Y, largeur, hauteur
ctx.strokeStyle = "green"; // Stocke couleur utilisé par strock()
ctx.stroke(); // Peint les contours
ctx.fillStyle = "#ff0000"; // Stocke couleur utilisé par fill()
ctx.fill(); // Peint la forme
ctx.closePath(); // Fin du chemin 
// CERCLE 
ctx.beginPath();
ctx.arc(240, 160, 20, 0, Math.PI*2, false); // CoorX, coorY, rayon, angle-debut, angle-fin, direction-dessin FALSE=sens-aiguilles TRUE=sens-invers
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();


//**
// Si la prochaine image touche le dessus
// Inverser sa trajectoir
// if (y + dy < 0){ 
//     dy = -dy;
// }
// SI la prochaine image touche le bas
// Inverser sa trajectoir
// if (y + dy > canvas.height){
//     dy = -dy;
// }
