const formCalcul = document.querySelector(".form__calcul");
formCalcul.addEventListener("submit", (event) => {
    event.preventDefault(); //  Annule le comportement de l'event Submit.

    //  Lorsqu'on sélectionne des valeurs de champs de formulaires, leur type est string, ici nous executons la fonction prédéfinie parseFloat qui permet de convertir une chaine de carractère en chiffre flottant (chiffre avec décimal).
    const number1 = parseFloat(document.querySelector("#number1").value);
    const operator = document.querySelector("#operator").value;
    const number2 = parseFloat(document.querySelector("#number2").value);
    console.log(number1);
    console.log(operator);
    console.log(number2);

    const itemResult = document.querySelector(".resultat");
    let resultat = 0;
    let error = false;

    //  isNaN() : fonction prédéfinie 
    if ((number1.length == 0 && number2.length == 0) || (isNaN(number1) || isNaN(number2))) {
        itemResult.innerHTML = "<span class='text__result'>Veuillez saisir des chiffres</span>"
        error = true;
    } else {
        switch (operator) {
            case "addition":
                resultat = number1 + number2;
            break;
            case "soustraction":
                resultat = number1 - number2;
            break;
            case "division":
                if (number2 != 0) {
                resultat = number1 / number2;
                } else {
                    itemResult.innerHTML = "<span class='text__result'>On ne peut pas diviser par 0</span>";
                    error = true;
                }
            break;
            case "multiplication":
                resultat = number1 * number2;
            break;
        }
        //  Si la variable error n'EST PAS, on exprime la négation avec le '!', qu'elle contient false, donc l'utilisateur n'est entré dans aucun cas d'erreur ci-dessus, alors on affiche le résultat du calcul.
        if (!error)
            itemResult.innerHTML = "<span class='text__result'>" + resultat + "</span>";
    }
});

const blockClac = document.querySelector(".block__calculatrice");
//  showCalculatrice permet de faire apparaître la class 'block__calculatrice'.
const showCalculatrice = () => {
    blockClac.classList.remove("hide__calc");
    blockClac.classList.add("show__calc");
};

//  showCalculatrice permet de faire disparaître la class 'block__calculatrice'.
const hideCalculatrice = () => {
    blockClac.classList.remove("show__calc");
    blockClac.classList.add("hide__calc");
};

const formItems = document.querySelectorAll("#number1, #number2, #operator");
const infoBulle = document.querySelectorAll(".info__bulle__number1, .info__bulle__number2, .info__bulle__operators");
console.log(infoBulle);

Array.from(formItems).forEach((el) => {
    el.addEventListener("mouseenter", () => {
        //  On sélectionne la valeur data-type pour savoir sur quel champs nous entrons avec la souris.
        let dataType = el.getAttribute("data-type")

        //  Pour chaque condition, on affecte la classe "open__infobulle" à l'élément HTML correspond  afin de modifier la hauteur de la div info bulle avec une transition CSS.
        if(dataType == 'number1'){
            infoBulle[0].classList.add('open__infobulle');
        }else if (dataType == 'operator') {
            infoBulle[1].classList.add('open__infobulle');
        }else {
            //  On entre dans le as ELSE lorsque on entre avec la souris sur le sélecteur de number2.
            infoBulle[2].classList.add('open__infobulle');
        }
    });

    el.addEventListener("mouseleave", () => {
        let dataType = el.getAttribute("data-type")
        if(dataType == 'number1'){
            infoBulle[0].classList.remove('open__infobulle');
        }else if (dataType == 'operator') {
            infoBulle[1].classList.remove('open__infobulle');
        }else {
            infoBulle[2].classList.remove('open__infobulle');
        }
    });
});