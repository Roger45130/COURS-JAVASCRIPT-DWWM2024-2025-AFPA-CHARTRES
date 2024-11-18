const move = (button) => {
    console.log(button);

    const step = button.getAttribute('data-step');
    const square = document.querySelector('.square');

    switch(step) {
        case '1':
            button.setAttribute('data-step', 2)
            // square.style.transform = "translateX(calc(1000px - 100px)) rotate(90deg) scale(1.15)";
            square.classList.remove('scaleStep4');
            square.classList.add('scaleStep1');
        break;
        case '2':
            button.setAttribute('data-step', 3)
            // square.style.transform = "translate(calc(1000px - 100px), 250px) rotate(180deg)  scale(1.3)"; // translate(X,Y)
            // square.classList.add('circle');
            square.classList.add('scaleStep2');
            square.classList.remove('scaleStep1');
        break;
        case '3':
            button.setAttribute('data-step', 4)
            // square.style.transform = "translate(0, 250px) rotate(270deg) scale(1.15)"; //  translate(X,Y)
            // square.classList.remove('circle');
            square.classList.add('scaleStep3');
            square.classList.remove('scaleStep2');
        break;
        case '4':
            button.setAttribute('data-step', 1)
            // square.style.transform = "translate(0, 0) rotate(360deg) scale(1)";
            // square.classList.remove('circle');
            square.classList.add('scaleStep4');
            square.classList.remove('scaleStep3');
        break;

        //  Exercice : Faites en sorte d'effectuer une rotation (360°) sur le carré pour les différents cas de la condition SWITCH.
    }
}