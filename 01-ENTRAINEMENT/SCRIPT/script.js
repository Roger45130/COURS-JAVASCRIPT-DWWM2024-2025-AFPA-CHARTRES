/*
Entrainement ::
	-- 01 -- 	COMMENTAIRES
	-- 02 --	AFFICHAGE
	-- 03 -- 	VARIABLES
	-- 04 -- 	TYPES DE DONNÉES
	-- 05 -- 	CONSTANTES
	-- 06 -- 	CONCATÉNATION
	-- 07 -- 	OPÉRATEURS ARITHMÉTIQUES
	-- 08 -- 	CONDITIONS
	-- 09 -- 	OPERATEURS
	-- 10 -- 	CONDITIONS SWITCH
	-- 11 -- 	BOUCLES
	-- 12 -- 	FONCTION PREDEFINIE
	-- 13 -- 	FONCTION UTILISATEUR
	-- 14 -- 	PORTEE DES VARIABLES
	-- 15 -- 	ARRAY
	-- 16 -- 	OBJECT
	Chapitres 16, 17 supplémentaire.
*/

//  -- 1 -- COMMENTAIRE
//  Un commentaire sur une seule ligne.

/*
    Un commentaire sur
    plusieurs lignes
*/

//  -- 2 -- AFFICHAGE / OUTILS DE DEBUG
//  console.log() est un outil de debug permettant de contrôler les données sélectionées dans le code JS, le résultat apparait dans la console de l'inspecteur du navigateur, il en existe un autre console.info().
console.log("Attention aux erreurs de synthaxes");
console.log(document);
document.write("<h1 class='title__h1'>JAVASCRIPT</h1>");

/* 
    document représente le DOM (Document Objet Model), qui est un programme interne à notre navigateur qui fait en sorte que chaque élément (balises, attribut, évènements, etc...) soit récupérable, manipulable et exploitable par le langage JavaScript.

    write() est une fonction prédéfinie permettant d'écrire dans le DOM.
    /!\ nous l'utilisons uniquement pour ce fichier !! Ce n'est pas une bonne pratique pour la suite !! 
*/

//  alert('test'); // Boite de dialogue
//  confirm('Etes vous sûr ?'); //Boite de dialogue avec confirmation
//  prompt('Quel âge as-tu ?'); //Boite de dialogue avec champs de saisie

document.write(
  '<h2 class="title__h2">Varirables : Déclaration / Affectation</h2>'
);

//  Une variable est une "boite virtuelle" permettant de conserver une donnée. Cette donnée peut-être de n'importe quel type, comme des chiffres, une chaîne de caractère, un tableau, un objet etc...
//  let permet de déclarer une variable et le simple '=' permet d'affecter la valeur à la variable.
let maboite = 45;
//  let maboite = 56; /!\ ERROR !! Il n'est pas possible de déclarer 2 fois la même variable portant le même nom.
console.log(maboite);
document.write(maboite);
document.write("<br>");

maboite = "Changement de valeur";
document.write(maboite);

//  Il est possible de déclarer plusieurs variables en une seule fois avec let.
let prenom = "Sylvie",
  nom = "Robert",
  genre = "feminin";

document.write("<br>");
document.write(prenom); //  Affiche Sylvie.

prenom = nom; // Assigne la variable nom à la variable prenom.
document.write("<br>");
document.write(prenom); //  Affiche Robert.

//  La concaténation lors de l'affectation cela ajoute une valeur à la variable sans remplacer son contenu d'origine.
let fruit = "Pomme";
fruit += " Fraise";
document.write("<br>");
document.write(fruit); //   Affiche "Pomme Fraise".

document.write('<h2 class="title__h2">Les types de données</h2>');

let chiffre = 20;
let negatif = -10;
document.write(typeof chiffre + "<br>"); // La variable est de type NUMBER.
//  Le + permet de concaténer, c'est-à-dire afficher des données les une à la suite des autres.

let monTexte = "Voici une phrase entre double quotes";
let apostrophe =
  "Pour l'utilisation d'une apostrophe, il faut utiliser un caractère d'échappement"; //  Il faut échapper les apostrophes avec le caractère anti-slash '\'.

document.write(typeof monTexte + "<br>"); //    La variable de type STRING.

//  Typeof est une fontion prédéfinie qui retourne le type d'une variable.
let choix = true; // Ou false.
document.write(typeof choix + "<br>"); //   La variable de type BOOLEAN.

let maVariable; //  Déclaration sans affectation.
document.write(maVariable + "<br>"); // Affiche UNDEFINED car cette variable est déclarée mais non affectée.

document.write('<h2 class="title__h2">Les constante</h2>');
//  Une constance est une "Boite Vrtuelle" permettant de conserver une donnée, mais sa valeur ne peut pas être modifiée autrement dit : sa valeur est constante.

const BOUGE_PAS = "Ma contante impossible à modifier";
//  const BOUGE_PAS = "redeclaration impossible"; /!\ ERROR !! Il n'est pas possible de redéclarer une constante.
//  BOUGE_PAS = "AUTRE VALEUR"; /!\ ERROR !! Il n'est pas possible de modifier la valeur d'une constante.
document.write(BOUGE_PAS + "<br>");

//  EXERCICE : Afficher vert-jaune-rouge avec les titrets sur la page web en plaçant chaque couleur dans une variable. Chaque mot doit être de la bonne couleur.

let Vert = '<span class="Vert">VERT</span>';
let Jaune = '<span class="Jaune">JAUNE</span>';
let Rouge = '<span class="Rouge">ROUGE</span>';
document.write(Vert + " - " + Jaune + " - " + Rouge);

//  Ecriture templating.
//  `` backquotes (Alt Gr + 7) [accents inversés].
//  ${} : interpolation, permet ici d'afficher le contenu d'une variable.
let p = "Emmanuel MACRON";
let result = `Je m'appel ${p} et je suis un crétin !!`;
document.write("<br>" + result);

document.write('<h2 class="title__h2">Les opérateurs arithmétiques</h2>');

let resultat = 10 + 5;
document.write(resultat + "<br>"); //   15

resultat = 10 - 5;
document.write(resultat + "<br>"); //   5

resultat = 10 * 5;
document.write(resultat + "<br>"); //   50

resultat = 10 / 5;
document.write(resultat + "<br>"); //   2

resultat = 10 % 3; //  Le modulo, c'est le reste de la division, j'ai 10 billes et 3 personne, je donne 3 billes à chaque personne, il me reste 1 bille.
document.write(resultat + "<br>"); // 1

let chiffre1 = 10,
  chiffre2 = 5;

resultat = chiffre1 + chiffre2;
document.write(resultat + "<br>"); //    15
chiffre1 = chiffre1 + 5; //  chiffre1 = 10 + 5.
chiffre1 += 5; //  Raccourci de la ligne ci-dessus, fonctionne avec tout les opérateurs -= *= /= %=.

document.write(
  '<h2 class="title__h2">Les conditions et opérateurs de comparaison</h2>'
);

/*
    =       affectation
    ==      comparaison de la valeur
    ===     conparaison de la valeur et du type
    <       strictement inferieur à
    >       strictement supérieur à
    <=      inférieur ou égal à
    =>      supérieur ou égal à
    !       n'est pas
    !=      différent de
    &&      ET
    ||      OU
*/       

let a = 10,
  b = 5,
  c = 2;

//  Si la valeur de A est strictement supérieur à la valeur de B, la condition retourne TRUE et le code dans les accolades de la condition IF s'exécute.
//  10 > 5
if (a > b) {
  document.write("Le chiffre A est supérieur au chiffre B. <br>");
} else {
  //  Le cas ELSE est le cas par défaut, dans tous les autres cas, si la condition IF retourne FALSE, nous entrons alors dans le cas ELLSE.
  document.write("Le chiffre B est supérieur au chiffre A. <br>");
}

//  else(b>c) /!\ Il n'est pas possible d'ajouter une condition au cas par défaut ELSE.
//  La condition ELSE n'est pas obligatoire.

//  IF avec AND.
//  Pour que IF retourne TRUE, il faut que les 2 conditions soient vérifiées.
//  10 > 5  5 > 2
if (a > b && b > c) {
  document.write("OK pour les 2 conditions. <br>");
}

//  IF avec OU.
//  Pour que IF retourne, il faut qu'au moins une des 2conditions ou les 2 soient vérifiées.
//  Si la VALEUR de la variable est égale à 9.
//  a == 9      5 > 2
if (a == 9 || b > c) {
  document.write("OK pour au moins l'une des 2 conditions. <br>");
}

//  Cas supplémentaire : IF / ELSE IF / ELSE.
//  10 == 8
if (a == 8) {
  document.write("A est égale à 8. <br>");
  //  10 != 10
} else if (a != 10) {
  document.write("A es différent de 10 <br>");
} else {
  document.write("Tout le monde a FAUX !!! <br>");
}

//  ELSE IF permet d'ajouter des cas supplémentaire à la condition IF. Si un des cas IF / ELSE IF est vérifié, retourne TRUE, on sort de la condition.

let varA = 1,
  varB = "1";

//  Avec les 3 égales, la condition retourne FALSE, car les valeurs sont les même mais de type différent, une variable type STRING et une variable type NUMBER, c'est un mode strict qui compare la VALEUR et le TYPE.
if (varA === varB) {
  document.write("Il s'agit de la même chose. <br>");
}

document.write('<h2 class="title__h2">Condition SWITCH</h2>');

//  SWITCH permet de comparer une valeur à différent cas.
//  Les cas représente les cas dans lequel nous pouvons potentielement tomber.
//  Break permet de stopper la condition SWITCH si nous entrons dans un des cas.
//  Le cas DEFAULT n'est pas obligatoire.
let perso = "Mario";
switch (perso) {
  case "Luigi":
    document.write("C'est Luuigi le meilleur !! <br>");
    break;
  case "Bowser":
    document.write("C'est Bowser le meilleur !! <br>");
    break;
  case "Peach":
    document.write("C'est Peach la meilleure !! <br>");
    break;
  default:
    document.write("Mais vous êtes fou c'est Mario le meilleur !! <br>");
    break;
}

//  Exercice : Est-il possible de réécrire la condition SWITH avec des condition IF / ELSE IF / ELSE ? Si oui faites le.

let bros = "Mario";
if (bros === "Luigi") document.write("C'est Luigi qui se nomme BROS !! <br>");
else if (bros === "Bowser")
  document.write("C'est Bowser qui se nomme BROS !! <br>");
else if (bros === "Peach")
  document.write("C'est Peach qui se nomme BROS !! <br>");
else bros === "Mario";
document.write("Mais vous êtes fou c'est Mario qui se nomme BROS !! <br>");
//  Si il n'y a qu'une seule instruction dans les condition; les accolades ne sont pas nécessaire.


document.write('<h2 class="title__h2">Les BOUCLES</h2>');
//  boucle WHILE.

let i = 0; //   Point de départ, initialisation.
//      6   FALSE
while (i <= 5) {
    //            5---
  document.write(i + "---");
  i++; // Incrémentation équivaut à i = i + 1.
}

document.write('<br>')

//  0---1---2---3---4---5---
document.write('<br>')
//  Exercice : retirer les '---' à la fin pour otenir  : 0---1---2---3---4---5
let r = 0;
while (r <= 5){
    //  On entre 1 seule fois dans le IF, au dernier tour, lorsque r vaut 5.
    if(r == 5){
        document.write(r);
    }else // On entre ici dans les autres cas lorsque r vaut : 0,1,2,3 et 4
        document.write(r + '---');
    r++;
}
document.write('<br>')
document.write('<br>')

//  La boucle FOR.
document.write('<table class="table"><tr>');
//          10  10
for(let l = 0; l < 10; l++) {
    //                      9
    document.write('<td>' + l + '</td>')
}
document.write('</tr></table>')

document.write('<hr>')
/*
     ----------------------------------------
    | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
*/

//  Exercice : Créer un tableau de 100 cases agrémenter des numéro avec la disposition 10 x 10.


document.write('<table class="table"><tr>');
let compteur = 1; // 2
//              0    0
for(let ligne = 0; ligne < 10; ligne++) {
    document.write('<tr>');
    //                0     0
    for(let cellule = 0; cellule < 10; cellule++){
      //                         1
      document.write('<td>' + compteur + '</td>');
      compteur++;
    }
    document.write('</tr>');
}
document.write('</table>');

/*
  La première boucle FOR tourne 10 fois et créer 10 ligne <tr> dans le tableau.
  La deuxième boucle FOR tourne 10 fois et créer 10 cellules dans chaque ligne <tr> du tableau.
  1 tour de la première boucle FOR entraine 10 tours de la deuxième la variale "compteur" ne réinitialise jamais à 0, on l'incrémente quelque soit le tour de boucle.
*/

/*
     ---------------------------------------------
    | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
*/

document.write('<br>')
document.write('<hr>')
document.write('<br>')

// let u = 1;
// document.write('<table class="table">');
// while (u <= 100) {
//  
// }
// 
// 
// document.write('</table>');

document.write('<br>')
document.write('<hr>')
document.write('<br>')

// document.write('<h2 class="title__h2">LES FONCTION PREDEFINIES</h2>');

//  createElement est une fonction prédéfinie de créer un élément HTML dans le DOM.
const titleFonctions = document.createElement('h2');
//  setAttribute est une fonction prédéfinie permettant d'ajouter un attribut et sa valeur à un élément HTML.
titleFonctions.setAttribute('class', 'title__h2');
//  innerText est une propriété qui permet d'insérer du texte dans un élément HTML.
titleFonctions.innerText = 'LES FONCTION PREDEFINIES';
//  querySelector() est une fonction prédéfinie permettant de sélectionner des éléments HTML dans le DOM.
//  append est une fonction prédéfinies permettant d'ajouter le title <h2> crée dans le body.
document.querySelector("body").append(titleFonctions);

console.log(document.querySelector("body"));
console.log(titleFonctions);

let phrase = "Salut je m'appel Roger !";
document.write("Roger se trouve à la position : " + phrase.indexOf('Roger'));
console.log(phrase);
/*  
    'phrase' est une variable. C'est surtout un objet STRING qui contient des fonctions prédéfinies. Une fonction prédéfinie est un morceau de code encapsulé qu'on appel au besoin pour executer une action précise.
    indexOf() est une fonction prédéfinie qui retourne ici la position de la chaine de caractère 'Roger' dans la variable 'phrase'.
*/

let body = document.querySelector("body");
let paragraph = document.createElement ('p');
//  toUppzeCase() : fonctiion prédéfinie permettant de mettre la chaine de caactère en majuscule.
paragraph.innerText = phrase.toUpperCase();
body.append(paragraph);

// Générer une balise h2 pour le titre : FONCTIONS UTILISATEURS : DECLARATION / EXECUTION.  

const titleFonction = document.createElement('h2');
titleFonction.setAttribute('class', 'title__h2');
titleFonction.innerText = 'FONCTION UTILISATEURS : DECLARATION / EXECUTION';
body.append(titleFonction);

//  la manière appelée FUNCTION STATEMENT.
function maFonction() {
  return document.write("<p>Vivement l'apéro !!!</p>");
}

maFonction(); //  Exécution de la fonction.


//  La fonction appele FUNCTION OPERATOR.
//  fonction fléchée.
const maFonction2 = () => {
  return document.write("<p>Vivement le weekend !!!</p>");
}
maFonction2();

/*
    Une fonction permet d'éviter la redondance d'actions, si nous avons un code que nous dupliquons plusieurs dans script, nous devons escapsler le code dans une fonction, nous avons la possibilité de créer nos propres fonctions avec nos propres paramètres.
*/

//  Fonction avec arguments.
//  prenom est une variable de réception que nous définissons, elle peut avoir une valeur par défaut, par conséquent, à l'exécution de la foncion, nous ne sommes pas obligé de lui transmettre un argument.
//                  'Tonton Roger'
const direBonjour = (prenom = 'Roger') => {
  //                                'Tonton Roger'
  return document.write("<p>Bonjour " + prenom + " ! Comment vas-tu ?</p>");
}
direBonjour('Tonton Roger'); // Exécution de la fonction avec arguments
direBonjour();

//  const titleFonctions = document.createElement('h2');
//  titleFonctions.setAttribute('class', 'title__h2');
//  titleFonctions.innerText = 'LES FONCTION PREDEFINIES';
//  document.querySelector("body").append(titleFonctions);
//  console.log(document.querySelector("body"));
//  console.log(titleFonctions);

//                        "p"   "class"           "paragraph"     "test fonction"
//                        "h2"  "class"           "paragraph"     "test fonction"
const domCreateElement = (tag, attribute = false, value = false, content = false) => {
  const item = document.createElement(tag); //  p
  
  if(attribute && value)
    item.setAttribute(attribute, value); //  ("class", "paragraph")
  
  if(content)
    item.innerText = content; // "test fonction"
  document.querySelector("body").append(item);
}

domCreateElement("p", "class", "paragraph", "test fonction");

domCreateElement("hr")

const meteo = (saison, temperature) => {
  let result = "Nous sommes en " + saison + " et il fait " + temperature + " degré(s)";
  domCreateElement("p", "class", "paragraph", result);
}
meteo('automne', 13);

domCreateElement("hr")

//  Exercice : Faites en sorte que degré s'écrive avec un "s" et sans "s" au singulier. Et penser aux articles ("en" été, "au" printemps, "en" automne et "en" hivers).

const meteoFrance = (saison, temperature) => {
  const uniteTemperature = (temperature > -1 && temperature < 1) ? "degré" : "degrés";
  let result = ""; 
  if (saison === "printemps") {
    result = "Nous sommes au " + saison + " et il fait " + temperature + " " + uniteTemperature;
  } else if (["été", "automne", "hiver"].includes(saison)) {
    result = "Nous sommes en " + saison + " et il fait " + temperature + " " + uniteTemperature;
  } else {
    result = "Saison inconnue";
  }
  domCreateElement("p", "class", "paragraph", result);
}

meteoFrance('printemps', 0);

domCreateElement("hr")

// corriger de l'exercice

const exoMeteo = (saison, temperature) => {

  let s = '';
  if(temperature >1 || temperature <-1)
    s = 's';
  else // Ici on entre seulement lorsque la variable temperature vaut 0, 1 et -1
    s = '';

  let art ='en';
  if(saison == 'printemps')
    art = 'au';


  let result = "Nous sommes " + art + " " + saison + " et il fait " + temperature + " degré" + s;
  domCreateElement("p", "class", "paragraph", result);
}
exoMeteo('printemps', 0);
exoMeteo('hiver', 1);
exoMeteo('hiver', -1);
exoMeteo('hiver', 3);
exoMeteo('hiver',-4);

domCreateElement("hr")

//                  200
const calculTVA = (montant) => {
  //              200                                           240
  let result = + montant + " € avec une TVA de 20% : " + montant * 1.2 + " €";
  domCreateElement("p", "class", "paragraph", result);

}

calculTVA(200);

domCreateElement("hr")

//  Exercice : Améliorer cette fonction pour faire en sorte de calculer un montant avec le taux de notre choix (5.5%, 7%, 19% etc...). Avec un calcul du taux.

// (si 19.6)                 200     20
const calculTVA2 = (montant, taux = 20) => {
//                200       19.6 = 1.196
  let calcul = montant * (1+taux/100); // 239.2
//                200                            19.6             239.2
  let result = montant + " € avec une TVA de " + taux + " % : " + calcul + " €";

  domCreateElement("p", "class", "paragraph", result);
};

calculTVA2(200);
calculTVA2(300, 19.6);
calculTVA2(300, 5.5);

domCreateElement("h2", "class", "title__h2", "Espace LOCAL / GLOBAL");
/*
    En JavaScript, il existe 2 espaces : LOCAL & GLOBAL.
    Lorsque nous travaillons dans une fonction, nous sommes dans un espace local, toute le variables déclarées dans une fonction sont accesiblent que dans la fonction.
    L'espace GLOBAL, l'espace par défaut, tout se qui est déclaré à l'etérieur est l'espace LOCAL.
*/
let personnage = 'Mario'; //  Variable explicite externe donc GLOBAL
const jeuxVideo = () => {
  let personnage = 'Luigi'; //  Variable explicite interne donc LOCAL
  return personnage;
}

domCreateElement("p", "class", "paragraph", personnage);
domCreateElement("p", "class", "paragraph", jeuxVideo());
domCreateElement("p", "class", "paragraph", personnage);

let personnage2 = 'Peach';
const jeuxVideo2 = () => {
  personnage2 = 'Luigi';
  return personnage2;
}
document.write('<hr>')
domCreateElement("p", "class", "paragraph", personnage2); //  Affiche Peach.
domCreateElement("p", "class", "paragraph", jeuxVideo2()); // En executany la fonction on change le contenu de la variable personnage2.
domCreateElement("p", "class", "paragraph", personnage2); //  Affiche Luigi.
/* 
    Il es possible dimporter une variable de l'espace GLOBAL (à l'extérieur d'une fonction) vers l'espace LOCAL (à l'intérieur de la fonction). L'inverse n'est pas possible.
*/
domCreateElement("h2", "class", "title__h2", "Les immediatly Invoked Function Expressions");

//  En JavaScript nous avons la possibilité de créer des fonctions anonymes est de les executer immédiatement. Partique pour récupérer automatiquement des données de la base de données.

(function () {
  domCreateElement("p", "class", "paragraph", "Cette fonction est automatiquement excecutée.");
}) ();

(() => {
  domCreateElement("p", "class", "paragraph", "Cette fonction est automatiquement excecutée, avec une fonction fléechée.");
}) ();

domCreateElement("h2", "class", "title__h2", "Les types ARRAY");

// let array = ['Mario', 'Luigi', 'Peach', 'Todd', 'Bowser'];
// console.log(array);

/*
    indice  valeur
    0:      "Mario"
    1:      "Luigi"
    2:      "Peach"
    3:      "Todd"
    4:      "Bowser"
*/
//  Exercice : tenter d'afficher "Peach" en passant par le taleau de données array.
// correcte mais il y a plus simple
let array = ['Mario', 'Luigi', 'Peach', 'Todd', 'Bowser'];
// let cherche = array[2]; 
// domCreateElement("p", "class", "paragraph", cherche);
// console.log(cherche)

//  CORRECTION.
//  On va piocher, crocheter à l'indice correspondant.
domCreateElement("p", "class", "paragraph", array[2]);
domCreateElement("hr")
//  Remplacement de 'Todd' par 'Yoshi'
array[3] = 'Yoshi'
console.log(array)

//  length est une propriété permettant d'afficher le nombre d'éléments déclaré dans le tableau ARRAY.
let maxLength = "Nombre d'éléments dans le tableau ARRAY : " + array.length;
domCreateElement("p", "class", "paragraph", maxLength);

//  La boucle forEach permet de passer en revu un tableau de données ARRAY.
//  element de variable de reception que nous définissons, elle receptionne une valeur du tableau ARRAY par tour de boucle.
//  Une fois le tableau entièrement parcouru, la boucle s'arrête automatiquement.
array.forEach((element) =>{
  // Outils de debug :
  console.log(element);
  // Affichage sur la page web :
  domCreateElement("p", "class", "paragraph", element);
});

domCreateElement("hr")
//  Lorsqu'il y a 2 variables déclarées, l'une parcours la colonne des indices (index) et l'autre parcours la colonne des valeurs (élément)
//              Mario     0
array.forEach((element, index) =>{
  // outil de debug :
  //            0      :      Mario
  console.log(index + ': ' + element);

  // Affichage sur la page web :
  domCreateElement("p", "class", "paragraph", index + ': ' + element);
});
domCreateElement("hr")
//  Excercice : Faites la même chose, le même affichage à l'aide d'une boucle FOR.

for(let i = 0; i < array.length; i++){
  console.log(i);

  domCreateElement("p", "class", "paragraph", i + ' : ' + array[i]);
}


//  Tableau multidimentionnel

let recette = [
  ["Poulet coco", "Poulet", "Lait de coco", "oignons", "ail", "gingembre"],
  ["tarte au pommes", "pâte feuilletée", "pommes", "sucre", "farine", "oeufs"]
];

// console.log(recette);
domCreateElement("br")
// Exercice : Essayer d'afficher "Pâte feuilletée" en passant par le tableau multidimmensionnel "recette".
domCreateElement("p", "class", "paragraph", recette[1][1]);
domCreateElement("hr")
// Exercice : Afficher sucessivement les données du tableau multidimmensionnel à l'aide de boucle (2 boucle FOR)

/* 
    for(){
      for(){
      }
    }
*/

//            0      <    2
for(let tab = 0; tab < recette.length; tab++){
  //          recette[0]
  //          recette[1]
  // console.log(recette[tab]);
  //                           <     6
  //                           < recette[0].length
  //                      0    <     6
  //                      1    <     6
  //                      2    <     6 ...
  //                      5    <     6
  for(let element = 0; element < recette.length; element++){
    //                                          recette[0][0] --> Poulet coco
    //                                          recette[0][1] --> Poulet
    //                                          recette[0][2] --> Lait de coco ....
    //                                          recette[0][5] --> gingembre
    //                                          [...]
    //                                          recette[1][0] --> Tarte aux pommes
    domCreateElement("p", "class", "paragraph", recette[tab][element]);
  }
}
domCreateElement("hr");
// Exercice : Afficher sucessivement les données du tableau multidimmensionnel à l'aide de boucle forEach (2 boucle forEach)

recette.forEach((tab) =>{
  console.log(tab); //  tab[0] --> l'ensemble du tableau ingrédient Poulet Coco
                    //  tab[1] --> l'ensemble du tableau ingrédient Tarte aux Pommes
  tab.forEach((ingredient) =>{
    console.log(ingredient)
    domCreateElement("p", "class", "paragraph", ingredient);
  });

  domCreateElement("br");
});

domCreateElement("h2", "class", "title__h2", "Les OBJETS");

let monObjet = {};
monObjet.prenom = 'Roger-Pierre'; //  Création d'une propriété prenom
console.log(monObjet)
domCreateElement("p", "class", "paragraph", monObjet.prenom);

domCreateElement("hr");

let sangoku = {
  nom: 'San',
  prenom : 'Goku',
  age : 35
}
console.log(sangoku)
let msg = "Je m'appel " + sangoku.nom + sangoku.prenom + " et j'ai " + sangoku.age + " ans.";
domCreateElement("p", "class", "paragraph", msg);

domCreateElement("hr");

let voiture = {
  marque : 'BMW',
  modele : 'Série 3',
  annee : 2020,
  couleur : 'noir',
  //                          rouge
  changerCouleur: function(nouvelleCouleur) {
  //      voiture.couleur = rouge
    return this.couleur = nouvelleCouleur; // le mot clé 'this' veut dire lui même (donc l'objet dans lequel on se trouve 'voiture') voiture.couleur
  },
  optionDeSerie : ['clim', 'autoradio', 'siège chauffant', 'park-assist', 'cuir'],
  toitOuvrant: true,
  motorisation : {
    energie : 'diesel',
    puissance : '110 cv'
  },
  info : function () { // Avec les fonctions fléchées, this représente la fenêtre du navigateur et non l'objet voiture.
    let marque = this.marque,
        modele = this.modele,
        couleur = this.couleur,
        annee = this.annee,
        optionDeSerie = this.optionDeSerie.join("/"); //  join() permet de rassembler les éléments avec un séparateur.

    let msg = marque + ' - ' + modele + ' - ' + couleur + ' - ' + annee + ' - ' + optionDeSerie;
    domCreateElement("p", "class", "paragraph", msg);
  }
};

console.log(voiture);
domCreateElement("p", "class", "paragraph", voiture.marque); // Affiche 'BMW'.
domCreateElement("p", "class", "paragraph", voiture.couleur); // Affiche 'noir'.
voiture.changerCouleur("rouge");
domCreateElement("p", "class", "paragraph", voiture.couleur); // Affiche 'rouge'.
domCreateElement("p", "class", "paragraph", voiture.info()); // pour toutes fonction ne pas oublié les '()'.
domCreateElement("p", "class", "paragraph", voiture.motorisation.energie); // Affiche 'diesel', lorsque l'on demande un élément qui se trouve à l'intérieur d'un élément "parent" on indique tous les étapes pour le chercher.
domCreateElement("hr");
voiture.optionDeSerie.forEach((el) => {
  domCreateElement("p", "class", "paragraph", el);
});
