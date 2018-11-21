generation();
	
function generation()
{
    var nb_alea; var nb_img="";
    var test = true; var chaine = "";
    
    for (var i=0;i<16;i++)
    {
        while (test==true)
        {
            nb_alea = Math.floor(Math.random()*16) + 1; //Pour génération dans les 16 cases
            if(chaine.indexOf("-" + nb_alea + "-")>-1)
                nb_alea = Math.floor(Math.random()*16) + 1;
            else
            {
                nb_img = Math.floor((nb_alea+1)/2); //8 paires pour 16 places ==> 2 générations différentes par image
                document.getElementById('case' + i).innerHTML = "<img style='cursor:pointer;' id='img" + i + "' src='mini/mini" + nb_img + ".png' onClick='verifier(\"img" + i + "\", \"mini" + nb_img + "\")' alt='' />";
                chaine += "-" + nb_alea + "-";
                test=false;
            }			
        }
        test=true;			
    }
}
