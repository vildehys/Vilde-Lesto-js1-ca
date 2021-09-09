const containerCards = document.querySelector(".container");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const url = "https://api.pokemontcg.io/v1/cards/";

async function fetchCards() {
    try {

    const response = await fetch(url + id);

    const pokemon = await response.json();
    

    console.log(pokemon);

    createHtml(pokemon);

}
catch(error) {
    console.log(error);
    containerCards.innerHTML = message("error", error);
}
}

fetchCards()

function createHtml(pokemon) {
    containerCards.innerHTML = `<h1 class="pokemon-title">${pokemon.name}</h1>
                            <img class="pokemon-image" src="${pokemon.imageURL}"</div>
                            <h2 class="pokemon-artist">${pokemon.artist}</h2>
                            <p class="card-para">Set: ${pokemon.set}</p>`;

}

       
                       
    