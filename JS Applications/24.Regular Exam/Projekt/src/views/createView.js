import { html } from "./../lib.js";
import { createPet } from "../api/data.js";

const template = (onCreate) => html`      <section id="create">
<div class="form">
  <h2>Add Album</h2>
  <form @submit=${onCreate} class="create-form">
    <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" />
    <input type="text" name="album" id="album-album" placeholder="Album" />
    <input type="text" name="imageUrl" id="album-img" placeholder="Image url" />
    <input type="text" name="release" id="album-release" placeholder="Release date" />
    <input type="text" name="label" id="album-label" placeholder="Label" />
    <input type="text" name="sales" id="album-sales" placeholder="Sales" />

    <button type="submit">post</button>
  </form>
</div>
</section>`;



export const createView = (ctx, next) => {


    ctx.render(template(onCreate))


    async function onCreate(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const  {singer, album, imageUrl, release, label, sales} = Object.fromEntries(formData)

   
        if (singer == "" || album == "" || imageUrl == "" || release == "" || label == "" || sales == "" ) {
            return alert("All fields muss be..")
        }

        await createPet({
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
console.log("create");