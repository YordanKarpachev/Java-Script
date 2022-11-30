import { editPet, getById } from "../api/data.js";

import { html } from "../lib.js";

const editTemplate = (carte, onLoa) => html`<section class="editPage">
    <form @submit=${onLoa}>
        <fieldset>
            <legend>Edit Album</legend>

            <div class="container">
                <label for="name" class="vhide">Album name</label>
                <input id="name" name="name" class="name" type="text" value="${carte.name}">

                <label for="imgUrl" class="vhide">Image Url</label>
                <input id="imgUrl" name="imgUrl" class="imgUrl" type="text" value="${carte.imgUrl}">

                <label for="price" class="vhide">Price</label>
                <input id="price" name="price" class="price" type="text" value="${carte.price}">

                <label for="releaseDate" class="vhide">Release date</label>
                <input id="releaseDate" name="releaseDate" class="releaseDate" type="text" value="${carte.releaseDate}">

                <label for="artist" class="vhide">Artist</label>
                <input id="artist" name="artist" class="artist" type="text" value="${carte.artist}">

                <label for="genre" class="vhide">Genre</label>
                <input id="genre" name="genre" class="genre" type="text" value="${carte.genre}">

                <label for="description" class="vhide">Description</label>
                <textarea name="description" class="description" rows="10" cols="10">${carte.description}</textarea>

                <button class="edit-album" type="submit">Edit Album</button>
            </div>
        </fieldset>
    </form>
</section>`;


export async function editView(ctx) {
    const id = ctx.params.id;
    const carte = await getById(id);

    ctx.render(editTemplate(carte, onLoa))

    async function onLoa(e) {

        e.preventDefault();
        const data = new FormData(e.target);
        const {
            name,
            imgUrl,
            price,
            releaseDate,
            artist,
            genre,
            description
        } = Object.fromEntries(data);


        if (name == "" || imgUrl == "" || price == "" || releaseDate == "" || artist == "" || genre == "" || description == "") {
            return alert("All fields muss be..")
        }

        await editPet(id, {

            name,
            imgUrl,
            price,
            releaseDate,
            artist,
            genre,
            description
        })

        ctx.page.redirect("/catalog");
 

    }
}