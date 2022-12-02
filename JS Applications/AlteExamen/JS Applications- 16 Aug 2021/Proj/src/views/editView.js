import { editPet, getById } from "../api/data.js";

import { html } from "../lib.js";

const editTemplate = (carte, onLoa) => html`  <section id="edit-page" class="auth">
<form @submit=${onLoa} id="edit">
    <div class="container">

        <h1>Edit Game</h1>
        <label for="leg-title">Legendary title:</label>
        <input type="text" id="title" name="title" value="${carte.title}">

        <label for="category">Category:</label>
        <input type="text" id="category" name="category" value="${carte.category}">

        <label for="levels">MaxLevel:</label>
        <input type="number" id="maxLevel" name="maxLevel" min="1" value="${carte.maxLevel}">

        <label for="game-img">Image:</label>
        <input type="text" id="imageUrl" name="imageUrl" value="${carte.imageUrl}">

        <label for="summary">Summary:</label>
        <textarea name="summary" id="summary">"${carte.summary}"</textarea>
        <input class="btn submit" type="submit" value="Edit Game">

    </div>
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
            title,
            category,
            maxLevel,
            imageUrl,
            summary
          } = Object.fromEntries(data);


        if (title == "" || category == "" || maxLevel == "" || imageUrl == "" || summary == "" ) {
            return alert("All fields muss be..")
        }

        await editPet(id, {

            title,
            category,
            maxLevel,
            imageUrl,
            summary,
    
        })

        ctx.page.redirect("/catalog");
 

    }
}