
import { deleteById, getById } from "../api/data.js";
import { getUserData } from "../util.js";
import { html, nothing } from "./../lib.js";

const detailsTemplate = (carte, delEl, isOwner) => html`      <section id="details">
<div id="details-wrapper">
  <p id="details-title">Album Details</p>
  <div id="img-wrapper">
    <img src="${carte.imageUrl}" />
  </div>
  <div id="info-wrapper">
    <p><strong>Band:</strong><span id="details-singer">${carte.singer}</span></p>
    <p>
      <strong>Album name:</strong><span id="details-album">${carte.album}</span>
    </p>
    <p><strong>Release date:</strong><span id="details-release">${carte.release}</span></p>
    <p><strong>Label:</strong><span id="details-label">${carte.label}</span></p>
    <p><strong>Sales:</strong><span id="details-sales">${carte.sales}</span></p>
  </div>
  <div id="likes">Likes: <span id="likes-count">0</span></div>

    ${isOwner ? html ` 
     <div id="action-buttons">
    <a href="" id="like-btn">Like</a>
    <a href="/edit/${carte._id}" id="edit-btn">Edit</a>
    <a @click=${delEl} href="" id="delete-btn">Delete</a>
  </div>`             : nothing}

  <!--Edit and Delete are only for creator-->

</div>
</section>
`;



export async function showDetails(ctx) {
    const id = ctx.params.id;
    const carte = await getById(id);
    const user = getUserData();
debugger
    const isOwner = Boolean(user && carte._ownerId == user._id)

    async function delEl() {

        const conf = confirm("are you sure?")
        
        if (conf) {
            deleteById(id);
            ctx.page.redirect("/catalog")
        }


    }

    ctx.render(detailsTemplate(carte, delEl, isOwner));
}
