let nom = "Tom REDOCEMIA";
let numeroRue = 21;
let nomRue = "rue du bloc d'instructions";
let codePostal = 1337;
let ville = "POINT-VIRGULE";
let numeroClient = 5842;
let prefixe = "CL";
let prefixePR = "PR";

function afficherTitre(titre) {
    console.log("===[ " + titre + " ]===");
  }
function afficherAdresseClient(nom, numeroRue, nomRue, codePostal, ville) {
    console.log(nom + "\n" + numeroRue + " " + nomRue + "\n" + codePostal + " " + ville);
  }
function formaterNumeroClient(numeroClient) { 
  
          if (numeroClient < 10) {
            prefixe = prefixe + "000";
          }   else {
              if (numeroClient < 100) {
                prefixe = prefixe + "00";
              }   else {
                  if (numeroClient < 1000) {
                    prefixe = prefixe + "0";
                  }   else {
                      if (numeroClient >= 5000 && numeroClient < 7000) {
                      prefixe = prefixePR;
                      } 
                  }
              } 
          }
    
    //console.log("N° de client : " + prefixe + numeroClient); // juste pour moi
    return (prefixe + numeroClient);    
    }


// Exercice 2
// Pour faire cet exercice : 
// 1. Décommentez le code de Tom ci-dessous
// 2. Rédigez le code manquant juste après le code de Tom
let adresseMagiciensDuCode = `MagiciensDuCode
42 avenue de l'accolade ouvrante
1337 POINT-VIRGULE`;



// <===== VOTRE CODE ICI: Insérez/modifiez le code à partir d'ici =====>
// D'ici vous avez accès à toutes les variables précédemment déclarées dont l'adresse de Tom (nom, numeroRue, nomRue, codePostal, ville), adresseMagiciensDuCode et numeroClient.
// Vous avez également accès à toutes les fonctions afficherTitre, afficherAdresseClient, formaterNumeroClient

afficherTitre("Notre adresse");
console.log(adresseMagiciensDuCode);
console.log("");
afficherTitre("Destinataire");
afficherAdresseClient(nom, numeroRue, nomRue, codePostal, ville);
console.log("");
afficherTitre("Vos références");
formaterNumeroClient (numeroClient);
console.log("N° de client : " + prefixe + numeroClient);


// <===== FIN DE VOTRE CODE CI-DESSUS =====>
let nombreDeJours = 1337;

function convertirEnSemaines(nombreDeJours) {
  return `${nombreDeJours} jours sont équivalents à ${nombreDeJours / 7} semaines`;


}

convertirEnSemaines ();
console.log (`${nombreDeJours} jours sont équivalents à ${nombreDeJours / 7} semaines`);