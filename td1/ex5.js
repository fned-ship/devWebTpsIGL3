const livre = {
    titre: "crime and punishement",
    auteur: "dostevskey",
    annee: 1977,
    
    getInfo:()=> {
        return `${this.titre} par ${this.auteur} (${this.annee})`;
    }
};

console.log(livre.getInfo()); 