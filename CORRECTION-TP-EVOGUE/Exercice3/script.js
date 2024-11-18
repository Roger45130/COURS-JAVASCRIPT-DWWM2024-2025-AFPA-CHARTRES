const calcul = (field) => {
    const cellule = document.querySelectorAll('#nombre, #carre, #cube')
    const number = field.value;
    const carre = Math.pow(number, 2);  //  équivaut à number * number (calcul au carré).
    const cube = Math.pow(number, 3);   //  équivaut à number * number * number (calcul au cube).

    //  Si la valeur number est bien un chiffre, on entre dans la condition IF.
    //  Le point "!" exprime la négation, N'EST PAS (Si number N'EST PAS une chaine de carractère).
    if(!isNaN(number)) {
        cellule[0].innerText = number;
        cellule[1].innerText = carre;
        cellule[2].innerText = cube;
    }else{
        //  Sinon number contien une chaine de carractères, on affiche un message d'erreur.
        cellule[0].innerText = 'Merci de saisir un chiffre.'
    }

    // console.log(cellule);
    // console.log(number);
    // console.log(carre);
    // console.log(cube);
}