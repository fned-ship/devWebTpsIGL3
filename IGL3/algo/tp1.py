r = "R"
v = "V"

t = [v, v, v, v, " ", r, r, r, r]
N = len(t)

def afficher():
    """Affiche l'état actuel du tableau"""
    print(*t)

def echanger(i, j):
    """Échange deux éléments et affiche"""
    t[i], t[j] = t[j], t[i]
    afficher()

def deplacer_vers_droite(start, end):
    """Déplace les éléments vers la droite par bonds de 2"""
    for i in range(end - 3, start, -2):
        echanger(i, i + 2)
    if start >= 0 and start + 1 < N:
        echanger(start, start + 1)

def deplacer_vers_gauche(start, end):
    """Déplace les éléments vers la gauche par bonds de 2"""
    for i in range(start + 3, end, 2):
        echanger(i, i - 2)
    if end < N and end - 1 >= 0:
        echanger(end, end - 1)

def deplacer_vers_centre_gauche(start, end):
    """Déplace depuis la gauche vers le centre"""
    for i in range(start + 2, end + 1, 2):
        echanger(i, i - 2)
    if end < N and end - 1 >= 0:
        echanger(end, end - 1)

def deplacer_vers_centre_droite(start, end):
    """Déplace depuis la droite vers le centre"""
    for i in range(end - 2, start - 1, -2):
        echanger(i, i + 2)
    if start >= 0 and start + 1 < N:
        echanger(start, start + 1)

def croiser(start, end, phase="expansion"):
    """
    Phase de croisement - expansion vers les bords
    Appelle reigner pour la phase de contraction
    """
    # Condition d'arrêt : on a atteint les bords
    if start < 0 or end >= N:
        print("\n=== Fin de l'expansion, début de la contraction ===")
        reigner(start + 1, end - 1, "contraction")
        return
    
    # Mouvement d'expansion alterné
    if (N // 2 - start) % 2 == 0:
        deplacer_vers_droite(start, end)
    else:
        deplacer_vers_gauche(start, end)
    
    # Appel récursif avec expansion
    croiser(start - 1, end + 1, phase)

def reigner(start, end, phase="contraction"):
    """
    Phase de réagencement - contraction vers le centre
    Appelle croiser pour une nouvelle phase d'expansion si nécessaire
    """
    # Condition d'arrêt : on a convergé au centre
    if start >= end:
        return
    
    # Mouvement de contraction alterné
    if (end - start) // 2 % 2 == 0:
        deplacer_vers_centre_gauche(start, end)
    else:
        deplacer_vers_centre_droite(start, end)
    
    # Appel récursif avec contraction
    reigner(start + 1, end - 1, phase)

def lancer_algorithme():
    """Point d'entrée principal"""
    milieu_gauche = N // 2 - 1
    milieu_droit = N // 2 + 1
    
    print("État initial:")
    afficher()
    print("\n=== Phase d'expansion (croiser) ===")
    
    # Initialisation selon la parité
    if (N - 1) // 2 % 2 != 0:
        echanger(milieu_gauche, milieu_gauche + 1)
        croiser(milieu_gauche - 1, milieu_droit + 1)
    else:
        echanger(milieu_droit, milieu_droit - 1)
        croiser(milieu_gauche - 1, milieu_droit + 1)
    
    print("\n=== Terminé ===")

# Programme principal
lancer_algorithme()