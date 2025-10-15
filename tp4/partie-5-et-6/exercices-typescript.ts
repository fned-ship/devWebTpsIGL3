let nom: string = "Youssef";
let age: number = 22;
let actif: boolean = true;

function somme(a: number, b: number): number {
  return a + b;
}
console.log("Somme =", somme(5, 7));

interface Etudiant {
  id: number;
  nom: string;
  prenom: string;
  age: number;
}

class EtudiantImpl implements Etudiant {
  constructor(
    public id: number,
    public nom: string,
    public prenom: string,
    public age: number
  ) {}

  afficher(): void {
    console.log(`Etudiant: ${this.nom} ${this.prenom}, age: ${this.age}`);
  }
}

const etu = new EtudiantImpl(1, "Fned", "Youssef", 22);
etu.afficher();



function creerTableau<T>(valeurs: T[]): T[] {
  return valeurs;
}
console.log(creerTableau<number>([1, 2, 3]));


function afficherValeur(val: string | number, prefix?: string): void {
  console.log(prefix ? `${prefix}: ${val}` : val);
}
afficherValeur(42, "Valeur");

enum Niveau {
  Debutant,
  Intermediaire,
  Avancé
}

let niveauEtudiant: Niveau = Niveau.Intermediaire;
console.log("Niveau:", Niveau[niveauEtudiant]);
