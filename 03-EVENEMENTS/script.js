const itemBlock1 = document.querySelector(".background__lightblue");
// console.log(itemBlock1);

itemBlock1.addEventListener("click", function () {
  // console.log('test');
  // console.log(this.classList[1]);

  let classActuelle = this.classList[1];
  switch (classActuelle) {
    case "background__lightblue":
      // console.log("class background__lightblue ok!!");
      this.classList.remove("background__lightblue"); //  On supprime la class CSS background__lightblue.
      this.classList.add("background__lightcoral"); //  On ajoute la class CSS background__lightcoral.
      break;
    case "background__lightcoral":
      // console.log("class background__lightcoral ok!!");
      this.classList.remove("background__lightcoral");
      this.classList.add("background__orange");
      break;
    case "background__orange":
      this.classList.remove("background__orange");
      this.classList.add("background__purple");
      break;
    case "background__purple":
      this.classList.remove("background__purple");
      this.classList.add("background__lightblue");
      break;
    // default :

    // break;
  }
});

//            arrayPays, inputValue
const getMatch = (arr, str) => {
  //  Lors de la correspondance, les différences de casse sont ignorés (miniscule, majuscule).
  //  RegExp est une class en JavaScript, un modèle, un plan de construction.
  //  new permet de créer un nouvel exemplaire de ka class RegExp.
  let reg = new RegExp(str, "i");
  //      arrayPays, Pays
  return arr.filter((item) => {
    //  Pays    inputValue       Pays
    if (item.match(reg)) {
      return item;
      // console.log(item);
      // console.log(reg);
    }
  });
};

const formSearch = (input) => {
  // console.log(input.value);
  //  input représente le champs input de saisie.
  //  input.value permet de récupérer la valeur saisie dans le champs input.
  const inputValue = input.value;
  const resultSearch = document.querySelector(".result__search");
  // console.log(resultSearch);
  let data = null;

  const countryList = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas (the)",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia (Plurinational State of)",
    "Bonaire, Sint Eustatius and Saba",
    "Bosnia and Herzegovina",
    "Botswana",
    "Bouvet Island",
    "Brazil",
    "British Indian Ocean Territory (the)",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cayman Islands (the)",
    "Central African Republic (the)",
    "Chad",
    "Chile",
    "China",
    "Christmas Island",
    "Cocos (Keeling) Islands (the)",
    "Colombia",
    "Comoros (the)",
    "Congo (the Democratic Republic of the)",
    "Congo (the)",
    "Cook Islands (the)",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Curaçao",
    "Cyprus",
    "Czechia",
    "Côte d'Ivoire",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic (the)",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Falkland Islands (the) [Malvinas]",
    "Faroe Islands (the)",
    "Fiji",
    "Finland",
    "France",
    "French Guiana",
    "French Polynesia",
    "French Southern Territories (the)",
    "Gabon",
    "Gambia (the)",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Heard Island and McDonald Islands",
    "Holy See (the)",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran (Islamic Republic of)",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea (the Democratic People's Republic of)",
    "Korea (the Republic of)",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People's Democratic Republic (the)",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macao",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands (the)",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Micronesia (Federated States of)",
    "Moldova (the Republic of)",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands (the)",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger (the)",
    "Nigeria",
    "Niue",
    "Norfolk Island",
    "Northern Mariana Islands (the)",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine, State of",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines (the)",
    "Pitcairn",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Republic of North Macedonia",
    "Romania",
    "Russian Federation (the)",
    "Rwanda",
    "Réunion",
    "Saint Barthélemy",
    "Saint Helena, Ascension and Tristan da Cunha",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Martin (French part)",
    "Saint Pierre and Miquelon",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Sint Maarten (Dutch part)",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Georgia and the South Sandwich Islands",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan (the)",
    "Suriname",
    "Svalbard and Jan Mayen",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Taiwan",
    "Tajikistan",
    "Tanzania, United Republic of",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tokelau",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks and Caicos Islands (the)",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates (the)",
    "United Kingdom of Great Britain and Northern Ireland (the)",
    "United States Minor Outlying Islands (the)",
    "United States of America (the)",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela (Bolivarian Republic of)",
    "Viet Nam",
    "Virgin Islands (British)",
    "Virgin Islands (U.S.)",
    "Wallis and Futuna",
    "Western Sahara",
    "Yemen",
    "Zambia",
    "Zimbabwe",
    "Åland Islands",
  ];

  let content = "";
  //  on exécute la fonction getMatch() pour trouver les correspondances entre le tableau des pays et la valeur saisie dans le formulaire de recherche.
  data = getMatch(countryList, inputValue);
  // console.log(data);
  data.forEach((element) => {
    console.log(element);
    //  On boucle le résultat de la recherche, on génère un lien <a> pour chaque tour de boucle, et on stock l'ensemble du résultat dans la variable content grace à l'opérateur += (concaténation lors de l'affectation.).
    content +=
      "<a href='#' class='country__link' onclick='selectItem(this)'>" +
      element +
      "</a>";
  });
  console.log(content);

  /*
        Exercice : 
        1. faites en sorte d'afficher un message si il n'y a pas de pays trouvé dans la recherche.
        2. faites en sorte de ne pas afficher la liste des pays si le champs de saisie est vide.
        3. faites en sorte d'afficher le pays sélectionné dans le champs de saisie.
    */

//     On rentre dans la condition IF seulement dans le cas où le tableau Array data est vide, c'est à dire aucune correspondance entre la saisie de l'utilisateur et le tableau Array countryList.
  if (data.length === 0) {
    content = "<p class='error__msg'>Aucune réponse a votre recherche.</p>";
  }else {
    resultSearch.innerHTML = content;
  }
//      inputValue permet de stocker les données saisie par l'utilisateur dans le champs de recherche du formulaire (input.value).
//      On entre dans la condition if seulement dans le cas où l'internaute n'a rien saisie dans le champs du formulaire.
  if (inputValue === 0) {
    content = "";
  }
  document.querySelectorAll(".country__link").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      input.value = this.innerText;
      resultSearch.innerHTML = "";
    });
  });

  //  On envoi le résultat de la recherche dans la div class CSS resultSearch.
  resultSearch.innerHTML = content;
};

//  1ère version correcte :
// function selectItem(elementSelect) {
//   const input = document.querySelector(".input__text");
//   input.value = elementSelect.innerText;
//   document.querySelector(".result__search").innerHTML = ""; // pour vidé `resultSearch` il ne faut pas rappeler `selectItem`. Il est préférable de mettre `""`
// }


//  2ème version correcte :
const selectItem = (elementSelect) => {
    // elementSelect est une variable de réception que NOUS définissons, elle réceptionne ici le lien d'un pays sur lequel nous avons cliqué.

    // Récupère le contenu texte du lien, c'est à dire le pays.
    const linkText = elementSelect.innerText;
    // On sélectionne le champs de saisie <input>.
    const inputSearch = document.querySelector('.input__text');
    // On sélectionne la DIV <div class="result__search">.
    const resultSearch = document.querySelector('.result__search');

    console.log(elementSelect.innerText);
    console.log(inputSearch);
    console.log(resultSearch);

    // On affecte comme valeur par défaut dans le champs de saisie le contenu text du lien sur lequel nous avons cliqué.
    inputSearch.value = linkText;
    // On vide la DIV <div class="result__search"> en insérant une chaine de caractère vide.
    resultSearch.innerHTML = "";
};


//  EXEMPLE CONTRÔLE FORMULAIRE

const form = document.querySelector('.form')

form.addEventListener('submit', function (event) {
    //  event est un objet qui représente l'élément submit.
    //  preventDefault() est une fonction permettant le comportement initial ici mon formulaire, qui a pour but de soumettre les données du formulaire et de recharger la page du navigateur.
    event.preventDefault();

    let validationDonnee = true;

    const inputPrenom = document.querySelector('#prenom');
    const displayErrorPrenom = document.querySelector('.error__prenom');
    // console.log(inputPrenom.value);
    
    // Exercice : Si le champs n'est pas vide, retirer le message d'erreur et la bordure rouge.
    if(inputPrenom.value.length == 0) {
        let errorPrenom = '<span class="text__error"> Saisi ton prenom bordel !!!</span>';
        displayErrorPrenom.innerHTML = errorPrenom;
        inputPrenom.classList.add('border');
        validationDonnee = false;
        } else {
            displayErrorPrenom.innerHTML = '';
            inputPrenom.classList.remove('border');
        }

    /* 
        Exercice : 
        1- Faites en sorte de retirer la bordure et le message d'erreur si l'internaute a correctement rempli le formulaire
        2- Faite le même pour le champs nom.
        3- Faites en sorte d'afficher un message de validation si l'utilisateur a correctement rempli le formulaire
    */

    const inputNom = document.querySelector('#nom');
    const displayErrorNom = document.querySelector('.error__nom');
        // console.log(inputPrenom.value);
        
    if(inputNom.value.length == 0) {
        let errorNom = '<span class="text__error"> Saisi ton nom bordel !!!</span>';
        displayErrorNom.innerHTML = errorNom;
        inputNom.classList.add('border');
        validationDonnee = false;
        } else {
            displayErrorNom.innerHTML = '';
            inputNom.classList.remove('border');
        }
    
      if (validationDonnee) {
        let validationMessageContainer = document.querySelector('.message__validation');
        validationMessageContainer.innerHTML = '<span class="text__success">Votre saisie est validée !</span>';
      }
});