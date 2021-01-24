const pokemonCard = document.getElementById("cards");

const arreglo = [
  "SPEAROW",
  "FEAROW",
  "EKANS",
  "ARBOK",
  "PIKACHU",
  "RAICHU",
  "SANDSHREW",
  "SANDSLASH",
  "NIDORINA",
];

const arregloMin = arreglo.map((pokemon) => {
  return pokemon.toLowerCase();
});

const API = "https://pokeapi.co/api/v2/pokemon/";

const getData = (api) => {
  for (let i = 0; i <= arregloMin.length - 1; i++) {
    fetch(api + arregloMin[i])
      .then((response) => response.json())
      .then((json) => {
        renderPokenmon(json, i);
        console.log(json);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }
};

function renderPokenmon(json, i) {
  let html = "";
  html += '<div class=" col-12 card" style="width: 20rem;">';
  html += '<div class="card-body">';
  html += `<h4 class="card-title">${
    json.forms[0].name.charAt(0).toUpperCase() + json.forms[0].name.slice(1)
  }</h4>`;
  html +=
    '<p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus optio accusamus rerum, tempora quis totam odio amet animi aliquam facere assumenda placeat corrupti cum officiis atque natus harum. Earum, incidunt!</p>';
  html += `<button id="btn" onClick="showSkills(event)" class="btn btn-primary">Ver habilidades</button>`;
  html += "</div>";
  html += "<div id='text' class='skills hidden'>";
  html += `<p>${json.abilities[0].ability.name}</p>`;
  html += `<p>${json.abilities[1].ability.name}</p>`;
  html += "</div>";
  html += "</div>";

  pokemonCard.innerHTML += html;
}

const showSkills = (e) => {
  const cardBody = e.target.parentNode;
  const skills = cardBody.nextElementSibling;
  skills.classList.toggle("hidden");
};

getData(API);
