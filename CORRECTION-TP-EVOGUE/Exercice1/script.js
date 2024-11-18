const selectItem = (thumbnail) => {
    //  thumbnail est une variable de réception que NOUS définissons permettant ici de réceptionner l'image thumbnail sur laquelle l'utilisateur à cliquer.

    //  Correction de l'exercice.
    thumbnail.style.opacity = 0.5;
    //  thumbnail.parentNode permet de récupérer l'élément parent le plus proche de l'image sur laquelle nous avons cliqué (<div class="block__thumbnail">).
    //  thumbnail.parentNode.children permet de récupérer tous les éléments enfant, c'est à dire tous les thumbnails, tous les petites images.
    const items = thumbnail.parentNode.children; // Tous les thumbnails.
    //  On filtre tous les thumbnails à condition qu'il soit différent de l'élément sur lequel nous avons cliqué, on récupèr seulement 8 images.
    const siblings = Array.from(items).filter((child) => (child !== thumbnail));
    console.log(siblings);

    //  On boucle le résultat pour remettre l'opacité à 1 sur tous les autres éléments.
    siblings.forEach((item) => {
        //console.log(item);

        //  style="opacity: 0.5"
        //  thumbnail.style.opacity = 0.5

        //  item.style.opacity = 1;

        //  <img src="" class="opacity">
        thumbnail.classList.add('opacity')
    });

    console.log(siblings);

    const LargePicture = document.querySelector('.picture__first');
    const figCaption = document.querySelector('.legend__picture');

    //  On affecte la source (attribut HTML src) de la petit image à la grande image.
    LargePicture.src = thumbnail.src;

    //  On envoi le contenu de l'attribut alt de la petite image à la balise figcaption, légende de la légende image.
    figCaption.innerText = thumbnail.alt;

    //  Exercice : Faites en sorte lorsque l'on clique sur l'image que l'opacité reste sur l'image.
    
    //  correcte mais il y a une autre possibilité.
    // const thumbnails = document.querySelectorAll('.thumbnail');
    // thumbnails.forEach((thumb) => {
    //     thumb.style.opacity = 1;
    // });
    // thumbnail.style.opacity = 0.5;

};
