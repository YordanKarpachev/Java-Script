
import { editPet, getById } from "../api/data.js";

import { html } from "../lib.js";

const editTemplate = (carte, onLoa) => html`      <section id="edit">
<div class="form">
  <h2>Edit Album</h2>
  <form @submit=${onLoa} class="edit-form">  
    <input type="text" name="singer" id="album-singer" .value="${carte.singer}"/>
    <input type="text" name="album" id="album-album" .value="${carte.album}" />
    <input type="text" name="imageUrl" id="album-img" .value="${carte.imageUrl}" />
    <input type="text" name="release" id="album-release" .value="${carte.release}" />
    <input type="text" name="label" id="album-label" .value="${carte.label}" />
    <input type="text" name="sales" id="album-sales" .value="${carte.sales}" />

    <button type="submit">post</button>
  </form>
</div>
</section>`;


export async function editView(ctx) {
    const id = ctx.params.id;
    const carte = await getById(id);

    ctx.render(editTemplate(carte, onLoa))

    async function onLoa(e) {

        e.preventDefault();
        const data = new FormData(e.target);
        const {
            singer,
            album, 
            imageUrl, 
            release, 
            label, 
            sales
          }  = Object.fromEntries(data);


        if (singer == "" || album == "" || imageUrl == "" || release == "" || label == "" || sales == "" ) {
            return alert("All fields muss be..")
        }

        await editPet(id, {
            singer,
            album, 
            imageUrl, 
            release, 
            label, 
            sales
          })

        ctx.page.redirect("/catalog");
 

    }
}