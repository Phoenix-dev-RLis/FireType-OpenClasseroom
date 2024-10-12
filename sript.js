const input = document.getElementById("input");
let score = 0;
let MotsEcris = 0;
let caracteresALaSeconde = 0;
let secondes_ecoules = 0;
let timestart = 0;
let timeend = 0;
let MotsALaMinute = 0;
let motencours = false;
let pointilleAafficher = ".";
function mettreAJourAffichage() {
    document.getElementById("afficherScore").innerText = Number(score);
}
function afficherMotALaMinute() {
    MotsALaMinute = MotsEcris/(secondes_ecoules/60);
    document.getElementById("MotsALaMinute").innerText = Number(MotsALaMinute).toFixed(2);
}

function reinitialiser() {
    MotsEcris = 0;
    score = 0;
    MotsALaMinute = 0;
    caracteresALaSeconde = 0;
    secondes_ecoules = 0;
    pourcentage=0;
    mot = genererMots();
    document.getElementById("input").value = "";
    document.getElementById("TempsEcoule").innerText = Number(secondes_ecoules).toFixed(2)
    afficherPourcentage();
    mettreAJourAffichage();
    afficherMotALaMinute();
}
let mot = genererMots(); // Assurez-vous que cette fonction renvoie un mot.

input.addEventListener("input", function() {
    ;
    if (input.value.length ===1&& motencours==false) { 
        timestart = Date.now();
        motencours = true;
    }
    ;
    // Vérifiez si la valeur de l'input correspond au mot
    if (input.value.trim() === mot) { // Utilisez trim() pour ignorer les espaces
        timeend = Date.now();
        secondes_ecoules += (timeend - timestart) / 1000;
        motencours = false;
        MotsEcris += 1; // Ajoutez la longueur du mot à la letiable caracteresEcris
        input.value = ""; // Réinitialisez le champ d'entrée si nécessaire
        mot = genererMots(); // Régénérez le mot
        score += 1; // Ajoutez 1 au score
        mettreAJourAffichage(); // Mettez à jour l'affichage
        afficherMotALaMinute(); // Mettez à jour le mot à la minute
        
    }
});
function afficherPourcentage() {
    pourcentage = (MotsALaMinute/25*100).toFixed(0);
    if (secondes_ecoules > 30) {
        if (MotsALaMinute > 20) {
            document.getElementById("moyenneHumaine").innerText = "Vous êtes de "+Number(pourcentage-100)+"% superieur à la moyenne humaine.";
        }else{
            document.getElementById("moyenneHumaine").innerText = "Vous êtes de "+Number(100-pourcentage)+"% inférieur à la moyenne humaine.";
        }
        document.getElementById("pourcentage").innerText = "Votre pourcentage de vitesse est de "+Number(pourcentage)+"%.";
    }else{
        if (pointilleAafficher === "..."){
            pointilleAafficher = ".";
        }
        else{pointilleAafficher += ".";}
        document.getElementById("moyenneHumaine").innerText = "Nous calculons votre pourcentage de vitesse, taper au clavier au minimum 30s pour obtenir un résultat"+pointilleAafficher;
    }
}

setInterval(function() {
    if (motencours === true) {
    
        secondes_ecoules += 0.01;
        document.getElementById("TempsEcoule").innerText = Number(secondes_ecoules).toFixed(2);
    }
}, 10);

setInterval(function() {
    afficherPourcentage();
},500);
