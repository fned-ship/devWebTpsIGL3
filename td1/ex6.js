class Etudiant {
    constructor(nom, note) {
        this.nom = nom;
        this.note = note;
    }
    
    getMention() {
        if (this.note >= 16) {
            return "Très bien";
        } else if (this.note >= 14) {
            return "Bien";
        } else if (this.note >= 10) {
            return "Passable";
        } else {
            return "Échec";
        }
    }
}

const etudiant1 = new Etudiant("ali", 18);
const etudiant2 = new Etudiant("ahmed", 13);
const etudiant3 = new Etudiant("rania", 8);

console.log(`${etudiant1.nom}: ${etudiant1.getMention()}`); 
console.log(`${etudiant2.nom}: ${etudiant2.getMention()}`); 
console.log(`${etudiant3.nom}: ${etudiant3.getMention()}`); 