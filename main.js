var nbTraits
var nbEtoiles
var nombreLu
var message = ""
nombreLu = parseInt(prompt("Entrer un nombre:"));
// Parcourir chaque ligne 
for (var noLigne=1;noLigne<=nombreLu;noLigne++){
	// Calculer le nb de chiffres et de zéros à écrire sur la ligne courante
	nbEtoiles = nombreLu - noLigne + 1;
	nbTraits = nombreLu - nbEtoiles;
	// Écrire les traits de la ligne courante
	for (i=1;i<=nbTraits;i++){
		message += "-";
	}
	// Écrire les etoiles de la ligne courante
	for (var noEtoiles=nbEtoiles;noEtoiles>=1;noEtoiles--){
		message += "*";
	}
	message += "<br />";
}
