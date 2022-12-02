import { getAll } from "../api/data.js";
import { html } from "./../lib.js";


const template = (data, createGame)  => html`        <section id="catalog-page">
<h1>All Games</h1>
<!-- Display div: with information about every game (if any) -->

    ${data.length == 0 ? 
    html `<h3 class="no-articles">No articles yet</h3>`  :
    
    html`${data.map(a => createGame(a))}`}

<!-- Display paragraph: If there is no games  -->
<h3 class="no-articles">No articles yet</h3>
</section>`;



export async function catalogView (ctx, next)  {
    const data = await getAll();


    ctx.render(template(data, createGame))

        function createGame(game){
           return html`<div class="allGames">
           <div class="allGames-info">
               <img src="${game.imageUrl}">
               <h6>${game.category}</h6>
               <h2>${game.title}</h2>
               <a href="/details/${game._id}" class="details-button">Details</a>
           </div>
       
       </div>`
        }
    next()
}
console.log("catalog");