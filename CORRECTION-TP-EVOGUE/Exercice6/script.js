const toggleDropdown = (buttonDropdown) => {
    console.log(buttonDropdown.children);

    buttonDropdown.nextElementSibling.classList.toggle('toggle__dropdown');
    buttonDropdown.children[1].classList.toggle("fa-rotate-180");

    document.onclick = (event) => {
        console.log(event.target);

        if(
            !event.target.matches(".dropdown") && 
            !event.target.matches(".buttonDropdown") &&
            !event.target.matches(".fa-chevron-down") &&
            !event.target.matches(".title__dropdown")
        ) {

            //  Exercice : faites en sorte que le chevron revienne à sa place initiale lorsque nous cliquons à l'extérieur du menu déroulant.
            buttonDropdown.children[1].classList.remove("fa-rotate-180");

            // console.log("Je n'ai pas cliqué sur le menu déroulant.");
            buttonDropdown.nextElementSibling.classList.remove('toggle__dropdown');
        }
    };
};

// Version Roger
// const toggleMenuButton = document.querySelector('.toggle-menu');
// const menuNavbarList = document.querySelector('.menu__navbarList');

// // console.log('.toggle-menu');
// // console.log('.menu__navbarList');
// // console.log(toggleMenuButton.children);
// // console.log(menuNavbarList.children);

// toggleMenuButton.addEventListener('click', () => {
//     menuNavbarList.classList.toggle('show');

// });

