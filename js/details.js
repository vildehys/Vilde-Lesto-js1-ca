const containerCards = document.querySelector(".container");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const url = "https://api.pokemontcg.io/v1/cards/";

async function fetchCards() {
    try {

    const response = await fetch(url + id);

    const specifics = await response.json();
    

    console.log(specifics);

    createHtml(specifics);

}
catch(error) {
    console.log(error);
    containerCards.innerHTML = message("error", error);
}
}

fetchCards()

function createHtml(specifics) {
    containerCards.innerHTML = `<div class="cardContent">
                                <div><img class="image" src="${specifics.card.imageUrl}"</div>
                                <div class="cardInfo">
                                <h1 class="title">${specifics.card.name}</h1>
                                <h2 class="artist">${specifics.card.artist}</h2>
                                <p class="set">${specifics.card.set}</p>
                                <p class="subtype">${specifics.card.subtype}</p>
                                <p class="series">${specifics.card.series}</p>
                                </div>
                                </div>`;

    
}

       
                       
    