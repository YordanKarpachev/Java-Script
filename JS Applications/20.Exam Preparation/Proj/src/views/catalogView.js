import { getAll } from "../api/data.js";
import { html } from "./../lib.js";


const template = (data, createCard) => html`
<section id="catalogPage">
    <h1>All Albums</h1>


    ${data ? 
                 
            html`${data.map(a => createCard(a) )}`  
                 :

    html`
    <!--No albums in catalog-->
    <p>No Albums in Catalog!</p>
    `
    }}






</section>`;



 export async function catalogView (ctx, next) {
    const data = await getAll()

    ctx.render(template(data, createCard))

    next()



    function createCard(card) {

        const currentCard = html`
        <div class="card-box">
            <img src="${card.imgUrl}">
            <div>
                <div class="text-center">
                    <p class="name">Name: ${card.name}</p>
                    <p class="artist">Artist: ${card.artist}</p>
                    <p class="genre">Genre: ${card.genre}</p>
                    <p class="price">Price: $${card.price}</p>
                    <p class="date">Release Date: ${card.releaseDate}</p>
                </div>
                <div class="btn-group">
                    <a href="/details/${card._id}" id="details">Details</a>
                </div>
            </div>
        </div>`;

        return currentCard;

    }
}

