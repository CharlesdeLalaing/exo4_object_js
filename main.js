// ## Exo 

// ### Créer un objet "vieille_dame" avec une propriété "âge" assez élevée une propriété "nom" contenant un "prenom" et un "nom de famille" (/!\ Objet dans objet), une propriété "moral" avec comme valeur "mal" et une propriété "objet" par exemple une canne 

let vieille_dame = {
    âge : 89 + " ans",
    nom : {
        prenom : "Marina",
        "nom de famille" : "del Vaglio", 
    },
    moral : "mal",
    objet : "canne",

    parler(){
        if (this.moral == "bien") {
            console.log(`Bonjour ${vieille_homme.nom.prenom}`);
        } else {
            console.log("Vous me déranger et je vous frappe samer!");
        }
    }
}

let vieille_homme = {
    âge : 83 + " ans",
    nom : {
        prenom : "Joseph",
        "nom de famille" : "Damelael", 
    },
    moral : "joyeux",
    objet : "sourire",

    adoucir(){
        let newMoral = "bien";
        vieille_dame.moral = newMoral;
        delete newMoral;
    }
}

vieille_dame.parler();
vieille_homme.adoucir();
vieille_dame.parler();


// ### une méthode "parler" qui selon son moral fait une alert différente, si son moral = "mal" alors elle dira "Vous me dérangez et le frappe avec son objet", si son moral = "bien" alors elle dira "bonjour" + le nom du vieil_homme.

// ### Créer ensuite l'objet vieil_homme avec une propriété "nom" et une méthode "adoucir" qui change le moral de la "vieille_dame" en "bien".

// ### Faites parler la vieille dame, puis lancer la méthode adoucir du vieil homme et relancer la méthode parler de la vieille dame.
