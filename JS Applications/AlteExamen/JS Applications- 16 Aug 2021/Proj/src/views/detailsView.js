
import { deleteById, getById } from "../api/data.js";
import { getUserData } from "../util.js";
import { html, nothing } from "./../lib.js";

const detailsTemplate = (carte, delEl, isOwner) => html`<section id="game-details">
    <h1>Game Details</h1>
    <div class="info-section">

        <div class="game-header">
            <img class="game-img" src="${carte.imageUrl}" />
            <h1>${carte.title}</h1>
            <span class="levels">MaxLevel: ${carte.maxLevel}</span>
            <p class="type">${carte.category}</p>
        </div>

        <p class="text">
            ${carte.summary}
        </p>

        <!-- Bonus ( for Guests and Users ) -->
        <div class="details-comments">
        <h2>Comments:</h2>
                    <ul>
                        <!-- list all comments for current game (If any) -->
                        <li class="comment">
                            <p>Content: I rate this one quite highly.</p>
                        </li>
                        <li class="comment">
                            <p>Content: The best game.</p>
                        </li>
                    </ul>
                    <!-- Display paragraph: If there are no games in the database -->
                    <p class="no-comment">No comments.</p>
        </div>

        <!-- Edit/Delete buttons ( Only for creator of this game )  -->
                ${isOwner ?
                html `        <div class="buttons">
            <a href="/edit/${carte._id}" class="button">Edit</a>
            <a @click=${delEl} href="javascript:void(0)" class="button">Delete</a>
        </div>`
        : nothing}
    </div>

    <!-- Bonus -->
    <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) -->
    <article class="create-comment">
        <label>Add new comment:</label>
        <form class="form">
            <textarea name="comment" placeholder="Comment......"></textarea>
            <input class="btn submit" type="submit" value="Add Comment">
        </form>
    </article>

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
