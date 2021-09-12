const container = document.querySelector(".container");
const pageLoader = document.querySelector(".loading");
const url = "https://api.pokemontcg.io/v1/cards/";
const loading = document.querySelector(".loader")



setTimeout(function() {
    loading.classList.remove("loading-indicator")
}, 3000);


async function pokemonCards() {

   

    try {

    const response = await fetch(url);
    const json = await response.json();
    const pokemonArrayInfo = json.cards;
    //console.log(json.cards)



    for(let i= 0; i < pokemonArrayInfo.length; i++) {
       console.log(pokemonArrayInfo[i].name)

        container.innerHTML += `<a class="card" href="details.html?id=${pokemonArrayInfo[i].id}">
                                <img class="cardImage" src="${pokemonArrayInfo[i].imageUrl}">
                                <div class="cardInfo">
                                <h1 class="title">${pokemonArrayInfo[i].name}</h1>
                                <p class="type">${pokemonArrayInfo[i].types}</p>
                                <button class="button" href="details.htmlid=${pokemonArrayInfo[i].id}">Read More</div>
                                </div>
                                </a>`;
                       
           
        
       
    }
    } catch (error) {
        container.innerHTML = errorMessage ("An error ocurred while calling the API")
    }

    
}

  pokemonCards();

 