const container = document.querySelector(".container");
const pageLoader = document.querySelector(".loading");
const url = "https://api.pokemontcg.io/v1/cards/";

setTimeout(function() {

}, 3000);

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
                                <h1 class="title">${arrayInfo[i].name}</h1>
                                <p class="type">${arrayInfo[i].types}</p>
                                <button class="button" href="details.htmlid=${arrayInfo[i].id}">Read More</div>
                                </div>
                                </a>`
                       
           
        
       
    }
    } catch (error) {
        container.innerHTML = errorMessage ("An error ocurred while calling the API")
    }
}

  pokemonCards();

 