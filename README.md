# **Projet Sudoku**

by [Clément C](https://github.com/ClementCHA) & [Adrien L](https://github.com/AdrienLcp)

## **Projet commun**

Amis de longue date, nous avons suivi la même formation, à l'école O'Clock. Nous avions l'idée de créer un projet en commun depuis un moment, et nous l'avons enfin commencé.

Voici un jeu de sudoku en ligne.

### **Les objectifs du site**

* La génération de la grille de Sudoku est automatique.
* Vous pourrez cliquer sur une case vide pour entrer un chiffre entre 1 et 9.
* Vous pourrez créer une nouvelle grille, même si l'ancienne n'est pas terminée.
* Vous pourrez choisir un niveau de difficulté.
* Une fois la grille complétée, vous pourrez vérifier si elle est bonne.
* Vos scores et vos anciennes grilles inachevées seront stockées dans le local storage de votre navigateur

### **Les difficultés rencontrées**

On savait que ça n'allait pas être facile, mais la génération de la grille en elle même ne nous faisait pas vraiment peur. Ce qui nous impressionnait, c'était de savoir quels chiffres retirer à la grille complète pour que le joueur puisse deviner plus ou moins facilement quel chiffre allait où.

Finalement, il a suffit de créé un pourcentage suivant la difficulté pour retirer des chiffres aléatoires, la grille est toujours possible.

C'est donc la génération en elle même qui nous a beaucoup posé problèmes. Après plusieurs jours de galère, de tentatives, de créations de tableaux de tableaux différents, de lignes, de colonnes et de carrés (on était carrément sur la bonne voie en fait), nous avons décidé de suivre un tutoriel vidéo pour parfaire notre algorithme (en le comprenant, bien sûr).

Il nous manquait l'idée et la méthode du "backtracking", qui permet de revenir en arrière quand un des chiffres restants parmi les 9 ne peut plus aller dans les dernières cases de la ligne (à cause d'un chiffre similaire déjà présent dans la colonne ou le carré).

Merci à [Codamy](https://www.linkedin.com/in/mtajammulzia/) et sa [vidéo](https://www.youtube.com/watch?v=TOI7iGnzHlg), un génie pakistanais qui nous a sorti de l'impasse.