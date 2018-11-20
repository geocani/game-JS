let tabCard = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", 
               "1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png"];
let carte = document.querySelectorAll('.carte')

function randTab(table) { // randTab(table) -> Mélange données du tab
    let tab = table;
    let i;
    let num;
    let nbr = tab.length;
    while (nbr > 0){ // Tant qu'il y a des elements dans le tab
        num = Math.floor(Math.random() * nbr); // Nombre aléatoire
        nbr--; // Décrémentation, moins un element à traiter
        szTmp = tab[num]; //-- Stock element tire

        for (i= num; i < nbr; i++) //-- Decalage des valeurs du tableau
            tab[i] = tab[i+1]
            tab[nbr] = szTmp;//-- Stock l'element tire en fin
    }
    return(tab);
}
// affiche carte
function afficheCarte() {
    for (let i = 0; i < carte.length; i++) { // pour chaque div selectionné
        carte[i].style.backgroundImage = tabCard[i]
    }
}



    //-- Random du tableau
    randTab(tabCard)
    console.log(tabCard);
    console.log(carte.length)
    console.log(afficheCarte())
    
