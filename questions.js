function CreationTableauLangages(){

    var langages = [];
    langages.push("Html","CSS","Java","PHP");
    console.log(langages);
    
    return langages;
}

function CreationTableauNombres(){
    
    var nombres = []
    nombres.push(0,1,2,3,4,5);
    console.log(nombres);
    
    return nombres;
}

function RemplacementElement(langages){
    langages[2] = "Javascript";
    
    console.log(langages);
    return langages;
}

function AjoutElementLangages(langages){
    langages.push("Ruby", "Python");
    
    console.log(langages);
    return langages;
    
}

function AjoutElementNombres(nombres){
    
    nombres.unshift(-2, -1);
    console.log(nombres);
    return nombres;
}

function SuppressionPremierElement(langages){
    
    langages.shift();
    console.log(langages);
    return langages;
}

function SuppressionDernierElement(langages){
    
    langages.pop();
    console.log(langages);
    return langages;
}

function ConversionChaineTableau(reseaux_sociaux_chaine){

    /*Je crèe un tableau vide*/
    reseau_sociaux = [];
    reseau_sociaux = reseaux_sociaux_chaine.split(",").slice();
    
    console.log(reseau_sociaux);
    
    return reseau_sociaux;
    
}

function ConversionTableauChaine(langages){

    var langages_chaine;
    var tab_string = langages.toString();
    langages_chaine= tab_to_string;
    
    /*console.log(tab_to_string);*/   
    /*console.log(langages_chaine);*/
    return langages_chaine;    
}

function TriTableau(reseaux_sociaux){
    reseaux_sociaux.sort();
    console.log(reseaux_sociaux);
    return reseaux_sociaux; 
}

/*Hey I'm in Bonus*/

function InversionTableau(langages){
    langages.reverse();
    return langages;
}

function TriSpecial(langages){
    
    var tab = [];
    
for(var i = 0; i < langages.length; i++ ){
    var taille = langages[i].length;
    console.log(taille);
    if(0<taille){
        tab.push(taille);
        console.log(tab);
    }
}
    return tab
}