/*
    SELECTION PAR L'ID
*/

let maSection = document.getElementById('section'); //  getElementById() est une fonction / sélecteur permettant de sélectionner un élément HTML dans le DOM possédant un "id".
console.log(maSection);
console.log(maSection.innerText); //  Pour récupérer le texte.
console.log(maSection.innerHTML); //  Pour récupérer le contenu HTML.

maSection.innerHTML = '<h3 class="title__h3">Mon Titre H3</h3>'; //  Pour modifier le contenu HTML.
maSection.setAttribute('class', 'block__section'); //  Ajoute d'une class et d'attribut à la section.
maSection.style.padding = "2rem";
maSection.style.textAlign = "center";
maSection.style.fontSize= "1.5rem";
//  addEventListener est une écouteur d'évènements permettant d'ajouter un évènement (click, dbclick, keydown, mousenter, etc...), ici au click sur l'élément HTML maSection, nous modifions le background
maSection.addEventListener('click', function(){
    this.style.backgroundColor = 'red';
});

/* 
    SELECTION PAR LA CLASS
*/

let elemsDiv = document.getElementsByClassName('block');
//  console.log('elemsDiv :' + elemsDiv);
//  console.log(elemsDiv);

//  Exercice : modifier le contenu de la deuxième div (block 2) par "Nous sommes Mardi".

//  console.log(elemsDiv[1]);
elemsDiv[1].innerText = "Nous sommes Mardi";
console.log(elemsDiv);

//  Exercice : appliquer du css sur ces balises via une boucle FOR.

console.log(elemsDiv.length)
for (let index = 0; index < elemsDiv.length; index++){
    console.log(elemsDiv[index]);
    elemsDiv[index].style.cssText ='background: #33a8ff; border-radius: 0.5rem; padding: 1rem; color: #fff';

    elemsDiv[index].addEventListener('click', function () {
        // alert('test');
        //  this représente l'objet lui même elemsDiv[index].
        //  classList est un objet contenant les class CSS de l'élément HTML.
        //  toggle() est une fonction permettant d'affecter une class CSS si l'élement HTML ne l'a pas, et de la supprimer si l'élément HTML la possède.
        //  Il existe aussi add() / remove().
        console.log(this.classList);
        this.classList.toggle('rotation');
    });
};

/*
    SELECTION PAR LE NOM DE BALISE
*/

let elemsP = document.getElementsByTagName('p');
console.log('elemsP :' + elemsP); // [object HTMLCollection]
console.log(elemsP);


console.log(Array.from(elemsP));
//  La boucle forEach fonctionne uniquement avec les tableaux Array et non avec les objet.
//  Array.from(elemsP) --> permet de convertir l'objet HTMLCollection en tableau Array.
//  La boucle forEach permet de passer en revu tout les éléments HTML <p>.
//  item est une variable de réception, qui réceptionne un élément <p> par tour de boucle.
//  onclick est un évènement 'click' ajoute à chaque élément <p>.
Array.from(elemsP).forEach((item) => {
    // console.log(item);
    item.onclick = function() {
        //  this repésente l'objet lui même <p>.
        this.classList.toggle('scale');
    }
});

/*
    SELECTION AVEC QUERYSELECTOR() ET QUERYSELCTORALL()
*/

//  querySelector() nous renvoie le premier élément correspondant au selecteur mis dans les parenthèses.
let premierElementP = document.querySelector('p');
console.log(premierElementP);

// querySelectorAll() nous renvoie tous élément correspondant au selecteur mis dans les parenthèses.
let lesDivEtlesP = document.querySelectorAll('div, p, #section');
console.log(lesDivEtlesP);

//  Excercice : Au click sur l'élément div class 'message', récupérer son contenu et l'envoyé directement dans la div class 'result'.

//  Réponse correcte !
//  document.querySelector('.message').addEventListener('click', function() {
//     let content = this.innerText;
//     document.querySelector('#result').innerText = content;
// });

//  Deuxième solution à l'exercice.
const itemMessage = document.querySelector('.message');
const itemResult = document.querySelector('#result');
console.log(itemMessage);
console.log(itemResult);

itemMessage.onclick = function () {
    //alert('test');
    console.log(this.innerText);
    //  On affecte le contenu de texte de la div class CSS message à la div id CSS result.
    itemResult.innerText = this.innerText;
};

