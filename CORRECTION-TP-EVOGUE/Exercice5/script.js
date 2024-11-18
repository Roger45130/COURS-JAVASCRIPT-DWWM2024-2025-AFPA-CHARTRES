const square = document.querySelector('.square');
let compteur = 0;
let back = 900;

document.addEventListener('wheel', function () {

    if (back == 0) {
        compteur = 0;
        back = 900;
    }

    compteur = compteur + 30;

    if (compteur <= 900) {
        square.style.transform = "translateX(" + compteur + "px)";
    } else {
        back = back - 30;
        square.style.transform = "translateX(" + back + "px)";
    }
});