import { del } from "../api/api.js";
import { deleteById, getById } from "../api/data.js";
import { getUserData } from "../util.js";
import { html, nothing } from "./../lib.js";

const detailsTemplate = (carte, user, delEl) => html`<section id="detailsPage">
    <div class="wrapper">
        <div class="albumCover">
            <img src="${carte.imgUrl}">
        </div>
        <div class="albumInfo">
            <div class="albumText">

                <h1>Name: ${carte.name}</h1>
                <h3>Artist: ${carte.artist}</h3>
                <h4>Genre: ${carte.genre}</h4>
                <h4>Price: $${carte.price}</h4>
                <h4>Date: ${carte.releaseDate}</h4>
                <p>Description: ${carte.releaseDate}.</p>
            </div>
            ${user ?
        html` <div class="actionBtn">
                <a href="#" class="edit">Edit</a>
                <a @click=${delEl} href="javascript:void(0)" class="remove">Delete</a>
            </div>` :
        nothing}
            <!-- Only for registered user and creator of the album-->

        </div>
    </div>
</section>
`;

//_createdOn

//_id

//_ownerId


export async function showDetails(ctx) {
    const id = ctx.params.id;
    const carte = await getById(id);
    const user = getUserData();

    async function delEl() {

        const conf = confirm("are you sure?")
        debugger
        if (conf) {
         deleteById(id);
            ctx.page.redirect("/catalog")
        }


    }
    ctx.render(detailsTemplate(carte, user, delEl));
}
