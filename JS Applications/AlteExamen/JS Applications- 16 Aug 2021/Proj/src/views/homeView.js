import { getAllLastGame } from "../api/data.js";
import { html } from "./../lib.js";

const template = (createGame, all) => html`        <section id="welcome-world">

<div class="welcome-message">
    <h2>ALL new games are</h2>
    <h3>Only in GamesPlay</h3>
</div>
<img src="./images/four_slider_img01.png" alt="hero">

<div id="home-page">
    <h1>Latest Games</h1>

        ${all.length == 0 ? html`<p class="no-articles">No games yet</p>`     :
    
               html`${all.map(a => createGame(a))}`
    }


    <!-- Display paragraph: If there is no games  -->

</div>
</section>
`;



export async function homeView (ctx, next)  {
    const all = await getAllLastGame()


    ctx.render(template(createGame, all) )

    next();
}
console.log("home");

function createGame(game){

    const gameTemp =html `    <div class="game">
<div class="image-wrap">
    <img src="${game.imageUrl}">
</div>
<h3>${game.title}</h3>
<div class="rating">
    <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
</div>
<div class="data-buttons">
    <a href="/details/${game._id}" class="btn details-btn">Details</a>
</div>
</div>`

return gameTemp;
}

