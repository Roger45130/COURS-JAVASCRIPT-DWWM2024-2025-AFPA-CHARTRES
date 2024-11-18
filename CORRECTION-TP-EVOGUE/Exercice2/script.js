const copyValue = (field1) => {
    //  field1 est une variable de réception que NOUS définissons permettant ici de réceptionner le premier champs de saisi du formulaire lorsque l'utilisateur saisi des données à l'intérieur du champ.

    const field2 = document.querySelector('#field2');

    //  On affecte comme valeur par défaut au champs de saisi 2 la valeur du champ de saisi 1.
    field2.value = field1.value;
}