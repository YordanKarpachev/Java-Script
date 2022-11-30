import { getAll } from "../api/data.js";
import { getUserData } from "../util.js";
import { html } from "./../lib.js";


const template = (data, createCard) => html`
<section id="catalogPage">
    <h1>All Albums</h1>


    ${data.length == 0 ? 
                 


    html`
    <!--No albums in catalog-->
    <p>No Albums in Catalog!</p>
    `           :    html`${data.map(a => createCard(a) )}`  
                 
    }}






</section>`;



 export async function catalogView (ctx, next) {
    const data = await getAll()

    const user = getUserData();

    ctx.render(template(data, createCard))

    next()



    function createCard(card) {

        const user = getUserData();

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
                </div> ${user ? html`  
                    <div class="btn-group">
                    <a href="/details/${card._id}" id="details">Details</a>
                     </div>` : `` }

            </div>
        </div>`;

        return currentCard;

    }
}

