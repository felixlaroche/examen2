// Objet regex dont le pattern est de permettre seulement des chiffres
const REGEX_SEULEMENT_CHIFFRE = /^\d+$/;

// Les éléments html du formulaire utilisés dans le script
const inputNoDA = document.getElementById('numero_da');             // Le input du numéro de da
const declaration = document.getElementById('declaration');         // Le checkbox de la déclaration
const sliderNote = document.getElementById('note_estime');          // Le slider de sélection de la note estimée
const titreNote = document.getElementById('titre_note_estime');     // Le titre de la note estimé
const daIconeErreur = document.getElementById('da_icone_erreur');   // L'icone d'erreur associée au input du numéro de da
const daIconeSucces = document.getElementById('da_icone_succes');   // L'icone de succès associée au input du numéro de da

// Initialisation de l'affichage de la bonne icone associé au numéro de da
daIconeErreur.classList.remove('hidden');
daIconeSucces.classList.add('hidden');

/**
 * Modifie les classes d'un élément icone selon la valeur d'un note
 * @param {integer} note La note utilisée pour savoir qu'elle classe prendre
 */
function ModifierIconeNote(note) {
    // l'élément icone qui sera modifié
    const iconeNote = document.getElementById('icone_note');
    // On initialise les classes de l'élément à "vide"
    iconeNote.setAttribute("class", "");

    if(iconeNote>0 && iconeNote<=19)
    {
        iconeNote="far fa-sad-cry"
    }
    else if(iconeNote>20 && iconeNote<=39)
    {
        iconeNote="far fa-sad-tear"
    }
    else if(iconeNote>40 && iconeNote<=59)
    {
        iconeNote="far fa-frown"
    }
    else if(iconeNote>60 && iconeNote<=79)
    {
        iconeNote="far fa-smile"
    }
    else if(iconeNote>80 && iconeNote<=100)
    {
        iconeNote="far fa-grin-squint-tears"
    }
    else
    {
        iconeNote=false;
    }
    // Ajout des bonnes classes selon la valeur de la note
    // À COMPLÉTER
}
function Slider()
{

}
function Cocher()
{
    let declaration = document.getElementById("declaration").checked;
    champValide=false;

    if(declaration)
    {
        champValide = true;
    }
    else
    {
        alert("Erreur! Veuillez cliquer sur la case pour continuer!")
    }

    return champValide;
}

/**
 * Affiche un message dans la première balise small du même niveau qu'un élément html
 * @param {HTMLElement} element L'élément html de départ
 * @param {string} message Le message à afficher
 */
function AfficherMessage(element, message = '') {
    const zoneMessage = element.parentElement.querySelector('small');
    zoneMessage.innerHTML = message;
    if(inputNoDA==false)
    {
        alert("Veuillez réviser les attentes!");
    }
    else
    {
        alert("c'est parfait!");
    }

}

/**
 * Génère un nombre entier aléatoirement
 * @param {int} min La valeur minimum du nombre généré
 * @param {int} max La valeur maximum du nombre généré
 * @returns Un nombre entier
 */
function ObtenirNombreAleatoire(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}
function IconeDa()
{
    let nombre=document.getElementById('inputNoDA');
    addEventListener(inputNoDA, ValidationDa)
    while(nombre==0)
    {
        if(valeur==true)
        {
            daIconeSucces++;
        }
        daIconeErreur++;
        
    }
}
function ValidationDa()
{
    let champValide = false;
    let nombre = document.getElementById("numero_da")

    let valeur = nom.value;
    if(valeur =="")
    {
        alert("Le champ doit contenir des chiffres");
        alert("Le champ doit être composé de 7 caractères");
        alert("Le champ doit commencé par le chiffre 1 ou 2");
    }
    else if(REGEX_SEULEMENT_CHIFFRE)
    {
        champValide = true;
    }
    else
    {
        alert("Veuillez respectez les demandes...")
    }

    return champValide;
}
function ChangerImage()
{
    document.getElementById("myDIV").style.backgroundImage = "url(background01.jpg)";
}
function ValidationOnSubmit()
{
    let formValide=false;

    let caseValide = Cocher(declaration);
    let daValide= ValidationDa(inputNoDA);

    formValide= caseValide && daValide;

    return formValide;
}


