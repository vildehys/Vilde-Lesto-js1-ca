const container = document.querySelector(".container");
const url = "https://api.pokemontcg.io/v1/cards";

async function pokemonCards() {
    try {

    const response = await fetch(url);

    const json = await response.json();

    const arrayInfo = json.cards;
    //console.log(json.cards)


    container.innerHTML = "";

    for(let i= 0; i < arrayInfo.length; i++) {
       console.log(arrayInfo[i].name)

        container.innerHTML += `<a class="card" href="details.html?id=${arrayInfo[i].id}">
                                <img class="cardImage" src="${arrayInfo[i].imageUrl}">
                                <div class="cardInfo">
                                <h1 class="name">${arrayInfo[i].name}</h1>
                                <p class="type">Type: ${arrayInfo[i].types}</p>
                                <button class="button">Read More</div>
                                </div>
                                </a>
                                `
                       
           
        
       
    }
    } catch (error) {
        container.innerHTML = displayError ("An error ocurred while calling the API")
    }
}

  pokemonCards();