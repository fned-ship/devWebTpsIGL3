var nom = "Youssef";
var age = 22;
var actif = true;
function somme(a, b) {
    return a + b;
}
console.log("Somme =", somme(5, 7));
var EtudiantImpl = /** @class */ (function () {
    function EtudiantImpl(id, nom, prenom, age) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
    }
    EtudiantImpl.prototype.afficher = function () {
        console.log("Etudiant: ".concat(this.nom, " ").concat(this.prenom, ", age: ").concat(this.age));
    };
    return EtudiantImpl;
}());
var etu = new EtudiantImpl(1, "Fned", "Youssef", 22);
etu.afficher();
function creerTableau(valeurs) {
    return valeurs;
}
console.log(creerTableau([1, 2, 3]));
function afficherValeur(val, prefix) {
    console.log(prefix ? "".concat(prefix, ": ").concat(val) : val);
}
afficherValeur(42, "Valeur");
var Niveau;
(function (Niveau) {
    Niveau[Niveau["Debutant"] = 0] = "Debutant";
    Niveau[Niveau["Intermediaire"] = 1] = "Intermediaire";
    Niveau[Niveau["Avanc\u00E9"] = 2] = "Avanc\u00E9";
})(Niveau || (Niveau = {}));
var niveauEtudiant = Niveau.Intermediaire;
console.log("Niveau:", Niveau[niveauEtudiant]);
