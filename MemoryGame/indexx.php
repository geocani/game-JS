<!doctype html>
<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link href="https://fonts.googleapis.com/css?family=Luckiest+Guy" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Mali" rel="stylesheet">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="assets/css/style.css"  />
    <title>Memory Game</title>
</head>
<body>
    <div class="container">
        <div class="titre">
            <h1>Memory Game</h1>
        </div>
        <div class="row">
            <div class="col-6">
                <table class="">
                    <tbody>
                        <tr>
                            <td class="carte" id="carte0"></td>
                            <td class="carte" id="carte1"></td>
                            <td class="carte" id="carte2"></td>
                            <td class="carte" id="carte3"></td>
                        </tr>
                        <tr>
                            <td class="carte" id="carte4"></td>
                            <td class="carte" id="carte5"></td>
                            <td class="carte" id="carte6"></td>
                            <td class="carte" id="carte7"></td>
                        </tr>
                        <tr>
                            <td class="carte" id="carte8"></td>
                            <td class="carte" id="carte9"></td>
                            <td class="carte" id="carte10"></td>
                            <td class="carte" id="carte11"></td>
                        </tr>
                        <tr>
                            <td class="carte" id="carte12"></td>
                            <td class="carte" id="carte13"></td>
                            <td class="carte" id="carte14"></td>
                            <td class="carte" id="carte15"></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="col-6">
            <!-- Avant la partie -->
                <div class="right1">
                    <h2>Principe</h2>
                    <p>
                        Le jeu se compose de paires de cartes portant des illustrations identiques. 
                        L'ensemble des cartes est mélangé, puis étalé face contre table.
                        Vous devez retourne deux cartes de votre choix. Si les cartes sont identiques, 
                        vous avez gagné une manche et les carte disparaissent, sinon les cartes se retournent et 
                        il ne vous reste plus qu'a recommencer. 
                    </p>
                    <p>
                        Vous gagnez la partie si vous trouvez toutes les paires en moins de 60 secondes.
                        Pour commencer cliquez sur "START".
                    </p>
                    <button type="button" class="btn btn-color">START</button>
                </div>
                <!-- Pendant la partie -->
                <div class="right2">
                    <div class="chrono">
                        <h1 class="chronometre">60</h1>
                    </div>
                    <div class="score" id="score">
                        <h3>10/10</h3>
                    </div>
                    <p>
                        Cliquez sur deux carte pour vérifier si elles sont identique.
                    </p>
                    <button type="button" class="btn btn-color">START</button>
                </div>
                <!-- Apres la partie -->
                <div class="right3">
                    <h2>Time:</h2>
                    <p>
                        Le jeu se compose de paires de cartes portant des illustrations identiques. 
                        L'ensemble des cartes est mélangé, puis étalé face contre table.
                        Vous devez retourne deux cartes de votre choix. Si les cartes sont identiques, 
                        vous avez gagné une manche et les carte disparaissent, sinon les cartes se retournent et 
                        il ne vous reste plus qu'a recommencer. 
                    </p>
                    <p>
                        Vous gagnez la partie si vous trouvez toutes les paires en moins de 60 secondes.
                        Pour commencer cliquez sur "START".
                    </p>
                    <button type="button" class="btn btn-color">START</button>
                </div>
            </div>
        </div>  
    </div>
    <div class="test">

    </div>






    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
    <script type="text/javascript" language="javascript">


    let nbClics = 0; // Autorise deux clics apres le 2e réinitialisation a 0
    let mini1 = ""; // Nom de la 1e carte cliqué
    let mini2 = ""; // nom de la 2e carte cliqué


	generation();
	
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
                    // Selectionne une carte et génère une image -> au click lance la fonction VERIFIER() ?? Pourquoi pas modif css ??
                    document.getElementById('carte' + i).innerHTML = "<img width='50px' style='cursor:pointer;' id='img" + i + "' src='assets/img/" + nb_img + ".png' onClick='verifier(\"img" + i + "\", \"mini" + nb_img + "\")' alt='' />";
					chaine += "-" + nb_alea + "-"; // Ajoute le Nb dans la chaine de test
					test=false;
				}			
			}
			test=true;			
		}
	}
	
</script>
  </body>
</html>