import { getAll } from "../api/data.js";
import { html } from "./../lib.js";


const template = (data, createCard) => html` <!-- Dashboard page -->
<section id="dashboard">
  <h2>Albums</h2>
  <ul class="card-wrapper">
    <!-- Display a li with information about every post (if any)-->

    ${data.length == 0 ? html `  <h2>There are no albums added yet.</h2>` :

    html `${data.map(a => createCard(a))}`

}

  </ul>

  <!-- Display an h2 if there are no posts -->

</section>`;



export async function catalogView (ctx, next) {

    const data = await getAll()

   

    ctx.render(template(data, createCard))

   next()



    function createCard(card) {

   

        const currentCard = html`    <li class="card">
        <img src="${card.imageUrl}" alt="travis" />
        <p>
          <strong>Singer/Band: </strong><span class="singer">${card.singer}</span>
        </p>
        <p>
          <strong>Album name: </strong><span class="album">${card.album}</span>
        </p>
        <p><strong>Sales:</strong><span class="sales">${card.sales}</span></p>
        <a class="details-btn" href="/details/${card._id}">Details</a>
      </li>`;

        return currentCard;

    }
}